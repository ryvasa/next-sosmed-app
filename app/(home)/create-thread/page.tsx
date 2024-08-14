import ThreadForm from "@/components/forms/ThreadForm";

const Page = () => {
  return (
    <div className="pt-10 min-h-screen dark:bg-dark-md bg-white h-full rounded-lg p-6">
      <h1 className="lg:text-xl text-lg text-primary font-semibold">
        Create New Thread
      </h1>
      <ThreadForm />
    </div>
  );
};

export default Page;
