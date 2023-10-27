import UserCard from "../cards/UserCard";

const FriendList = ({ section, friend }: any) => {
  return (
    <div className="py-4">
      <h1 className="font-semibold text-lg">{section}</h1>
      <div className="flex flex-col gap-2 pt-3">
        <UserCard friend={friend} />
        <UserCard friend={friend} />
        <UserCard friend={friend} />
        <UserCard friend={friend} />
        <UserCard friend={friend} />
      </div>
    </div>
  );
};

export default FriendList;
