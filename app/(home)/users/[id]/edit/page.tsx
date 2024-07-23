import Image from 'next/image';
import image from '../../../../../public/pf.jpg';
import { CloudUpload, Edit } from '@/components/ui/icons';
import EditUserForm from '@/components/forms/EditUserForm';

const page = () => {
  return (
    <form className="mt-10 flex flex-col h-full justify-center gap-5 bg-gray-100 dark:bg-dark-lg p-8 rounded-xl ">
      <div className="flex flex-col lg:flex-row pb-5 lg:gap-20 gap-5 justify-center items-center ">
        <div className="relative group flex-1 flex-col gap-4 lg:gap-0 flex justify-center items-center">
          <div className=" overflow-hidden h-72 w-72 avatar rounded-full">
            <input
              // onChange={handleChange}
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
            />
            <Image src={image} alt="profile pict" />
          </div>
          <label
            htmlFor="image"
            className="lg:hidden group-hover:flex lg:absolute z-20 justify-center items-center text-white dark:text-dark-xs btn btn-primary btn-sm normal-case"
          >
            <Edit w={4} h={4} c={'text-white'} />
            Change
          </label>
        </div>
        <div className="flex-1">
          <EditUserForm />
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <button className="btn-primary text-white dark:text-dark-xs btn normal-case">
          <CloudUpload />
          Update
        </button>
      </div>
    </form>
  );
};

export default page;
