import { Send } from '../ui/icons';

const ChatForm = () => {
  return (
    <div className="fixed lg:pl-20 bottom-20 lg:bottom-10 z-10 left-0 w-full px-4">
      <form className="rounded-lg flex gap-4 bg-gray-100 dark:bg-dark-lg min-h-6 items-center justify-center">
        <textarea
          placeholder="Comment here..."
          className="text-sm lg:text-lg bg-transparent textarea flex-1 border-none  resize-none pr-11"
        ></textarea>
        <button type="submit" className="absolute right-6 bottom-4">
          <Send w={7} h={7} />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
