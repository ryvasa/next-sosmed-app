import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';
const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex bg-white dark:bg-dark-sm p-8 lg:p-10 rounded-lg flex-col gap-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className=" text-primary font-bold text-2xl ">Sign Up</h1>
          <RegisterForm />
        </div>
        <div className="text-sm gap-2 flex justify-center items-center">
          <p>Have an account?</p>
          <Link className="text-primary font-semibold" href={'/login'}>
            {' '}
            Sign In
          </Link>
        </div>
        <Link
          href={'/'}
          className="text-white dark:text-dark-sm btn btn-primary normal-case"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default page;
