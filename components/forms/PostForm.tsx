const PostForm = () => {
  return (
    <div className="rounded-lg flex gap-4 bg-gray-100 dark:bg-dark-lg/30 items-center justify-center relative">
      <textarea
        placeholder="Comment here..."
        className="text-sm bg-transparent textarea flex-1 border-none h-40 resize-none"
      ></textarea>
    </div>
  );
};

export default PostForm;
