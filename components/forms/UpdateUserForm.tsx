'use client';
import image from '../../public/pf.jpg';
import { CloudUpload, Edit } from '@/components/ui/icons';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchUpdateUser } from '@/libs/api/api';
import { Key, Mail, User } from '../ui/icons';
import Image from 'next/image';
import { fetchGetOneUser } from '@/libs/api/api';

const UpdateUserForm = () => {
  const labels = [
    { name: 'email', icon: Mail, type: 'email', placeholder: 'Email' },
    { name: 'username', icon: User, type: 'text', placeholder: 'Username' },
    { name: 'password', icon: Key, type: 'password', placeholder: 'Password' },
    {
      name: 'newPassword',
      icon: Key,
      type: 'password',
      placeholder: 'New Password',
    },
  ];
  const { id } = useParams();
  const router = useRouter();
  const [avatar, setAvatar] = useState({});
  const [previewImage, setPreviewImage] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
    newPassword: '',
    avatar: '',
    username: '',
  });

  const getUser = async () => {
    const response = await fetchGetOneUser(id as string);
    setData(response.data);
  };
  useEffect(() => {
    console.log({ avatar, data: data });
  }, [data]);
  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('newPassword', data.newPassword);
    formData.append('currentAvatar', data.avatar);
    formData.append('avatar', avatar as any);

    try {
      const response = await fetchUpdateUser(formData, id as string);
      if (response.data.id) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error creating thread:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col h-full justify-center gap-5 bg-gray-100 dark:bg-dark-lg p-8 rounded-xl "
    >
      <div className="flex flex-col lg:flex-row pb-5 lg:gap-20 gap-5 justify-center items-center ">
        <div className="relative group flex-1 flex-col gap-4 lg:gap-0 flex justify-center items-center">
          <div className=" overflow-hidden h-72 w-72 avatar rounded-full">
            <input
              onChange={handleChange}
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden"
            />
            <Image
              width={10000}
              height={10000}
              style={{
                width: '576px',
                height: `${(9 / 16) * 576}px`,
              }}
              src={
                previewImage
                  ? previewImage // jika ada preview
                  : data?.avatar
                  ? `http://localhost:3000/${data.avatar}` // jika tidak ada preview tetapi ada avatar
                  : image // jika tidak ada preview dan tidak ada avatar
              }
              alt="profile pict"
            />
          </div>
          <label
            htmlFor="avatar"
            className="lg:hidden group-hover:flex lg:absolute z-20 justify-center items-center text-white dark:text-dark-xs btn btn-primary btn-sm normal-case"
          >
            <Edit w={4} h={4} c={'text-white'} />
            Change
          </label>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 ">
            {labels.map((label, index) => (
              <label
                key={index}
                className="bg-white dark:bg-dark-lg input input-bordered flex items-center gap-2"
              >
                <label.icon />
                <input
                  value={
                    (label.name === 'username' && data.username) ||
                    (label.name === 'email' && data.email) ||
                    ''
                  }
                  name={label.name}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  type={label.type}
                  className="bg-transparent"
                  placeholder={label.placeholder}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          type="submit"
          className="btn-primary text-white dark:text-dark-xs btn normal-case"
        >
          <CloudUpload />
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateUserForm;
