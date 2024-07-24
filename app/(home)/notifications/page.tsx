import NotificationCard from "@/components/cards/NotificationCard";

const Page = () => {
  return (
    <div className="pt-10 ">
      <h1 className="pb-2 text-xl ">Notification</h1>
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
