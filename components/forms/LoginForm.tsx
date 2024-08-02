'use client';
import Link from 'next/link';
import { Key, Mail } from '../ui/icons';
import { useState } from 'react';
import { fetchLogin } from '../../libs/api/api';
import { userStore } from '../../store';

interface LoginFormState {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const { user, updateUser } = userStore((state: any) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await fetchLogin(formData);
      updateUser(response.data);

      console.log(user);
      localStorage.setItem('user', JSON.stringify(response));
      // Redirect user or save token, etc.
    } catch (err: any) {
      setError(err.message);
    }
  };
  const labels = [
    {
      value: formData.email,
      name: 'email',
      icon: Mail,
      type: 'email',
      placeholder: 'Email',
    },
    {
      value: formData.password,
      name: 'password',
      icon: Key,
      type: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white dark:bg-dark-sm p-8 lg:p-10 rounded-lg flex-col gap-6"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className=" text-primary font-bold text-2xl ">Sign In</h1>
        <div className="flex flex-col gap-4 ">
          {labels.map((label, index) => (
            <label
              key={index}
              className="bg-white dark:bg-dark-sm input input-bordered flex items-center gap-2"
            >
              <label.icon />
              <input
                name={label.name}
                onChange={handleChange}
                type={label.type}
                value={label.value}
                className="bg-transparent"
                placeholder={label.placeholder}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="text-sm gap-2 flex justify-center items-center">
        <p>Do not have an account yet?</p>
        <Link className="text-primary font-semibold" href={'/register'}>
          {' '}
          Sign Up
        </Link>
      </div>
      <button
        type="submit"
        className="text-white dark:text-dark-sm btn btn-primary normal-case"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
