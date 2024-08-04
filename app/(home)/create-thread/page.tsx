import ThreadForm from "@/components/forms/ThreadForm";

const Page = () => {
  return (
    <div className="pt-10">
      <div className="dark:bg-dark-md bg-white  rounded-lg p-6">
        <h1 className="lg:text-xl text-lg text-primary font-semibold">
          Create new post
        </h1>
        <ThreadForm />
      </div>
    </div>
  );
};

export default Page;
