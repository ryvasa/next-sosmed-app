import SearchForm from "@/components/forms/SearchForm";
import TabMenu from "@/components/shared/TabMenu";

const Page = () => {
  return (
    <div className="pt-10">
      <SearchForm />
      <div className="pt-4 pb-2">
        <TabMenu />
      </div>
    </div>
  );
};

export default Page;
