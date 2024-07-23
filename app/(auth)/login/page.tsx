import LoginForm from '@/components/forms/LoginForm';
import Link from 'next/link';
const page = () => {
  return (
    <div className="w-full  h-full flex justify-center items-center">
      <div className="flex bg-white dark:bg-dark-sm p-8 lg:p-10 rounded-lg flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className=" text-primary font-bold text-2xl ">Sign In</h1>
          <LoginForm />
        </div>
        <div className="text-sm gap-2 flex justify-center items-center">
          <p>Do not have an account yet?</p>
          <Link className="text-primary font-semibold" href={'/register'}>
            {' '}
            Sign Up
          </Link>
        </div>
        <Link
          href={'/'}
          className="text-white dark:text-dark-sm btn btn-primary normal-case"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default page;
