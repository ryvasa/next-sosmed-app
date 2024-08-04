import ChatList from "./ChatList";
import LoadingCircle from "./LoadingCircle";
const RightBar = () => {
  return (
    <div className="fixed w-[265px] h-full bg-white dark:bg-dark-md top-0 pt-40 right-0 flex-col hidden lg:flex p-2  items-center">
      <LoadingCircle />
    </div>
  );
};

export default RightBar;
