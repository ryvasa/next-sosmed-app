import NotificationCard from "@/components/cards/NotificationCard";

const Page = () => {
  return (
    <div className="mt-10 bg-white p-6 dark:bg-dark-md rounded-lg">
      <h1 className="pb-2 text-xl font-semibold text-primary">Notification</h1>
      <div className="flex flex-col gap-[6px]">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default Page;
