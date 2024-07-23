const Loading = () => {
  return (
    <main className="text-center h-screen items-center gap-4 flex flex-col justify-center">
      <h2 className="text-primary dark:text-white text-lg lg:text-2xl">
        Please wait...
      </h2>
      <span className="loading text-primary loading-dots loading-md lg:loading-lg "></span>{' '}
    </main>
  );
};

export default Loading;
