import { CloudUpload } from '@/components/ui/icons';
import ImageUploadPreview from '../../components/shared/ImageUploadPreview';
import PostForm from '../../components/forms/PostForm';

const Page = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-lg">Create new post</h1>
      <div className="py-4">
        <PostForm />
        <ImageUploadPreview />
        <div className="py-8 flex justify-center items-center">
          <button className="flex w-40 btn btn-primary text-white dark:text-dark-sm border-none normal-case">
            <p>Send</p>
            <CloudUpload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
