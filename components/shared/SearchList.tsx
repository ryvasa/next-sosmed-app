import GroupCard from "../cards/GroupCard";
import UserCard from "../cards/UserCard";

const SearchList = ({ tab }: any) => {
  return (
    <div>
      <p className="py-2">
        <b>266</b> users
      </p>
      {tab === "user" ? (
        <>
          <UserCard friend={true} />
          <UserCard friend={true} />
          <UserCard imvitation={true} />
          <UserCard />
        </>
      ) : (
        <div className="flex flex-col gap-1">
          <GroupCard joined={true} />
          <GroupCard joined={true} />
          <GroupCard />
        </div>
      )}
    </div>
  );
};

export default SearchList;
