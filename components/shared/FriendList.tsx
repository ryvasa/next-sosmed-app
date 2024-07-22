import UserCard from "../cards/UserCard";

const FriendList = ({ section, friend, invitation }: any) => {
  return (
    <div className="py-4">
      <h1 className="font-semibold text-lg">{section}</h1>
      <div className="flex flex-col gap-1 pt-3">
        <UserCard friend={friend} invitation={invitation} />
        <UserCard friend={friend} invitation={invitation} />
        <UserCard friend={friend} invitation={invitation} />
        <UserCard friend={friend} invitation={invitation} />
        <UserCard friend={friend} invitation={invitation} />
      </div>
    </div>
  );
};

export default FriendList;
