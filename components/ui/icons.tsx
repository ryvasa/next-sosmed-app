const Check = ({ w, h }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
    >
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      ></path>
    </svg>
  );
};

const Close = ({ w, h }: any) => {
  return (
    <svg
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"
      ></path>
    </svg>
  );
};

const Home = ({ w, h }: any) => {
  return (
    <svg
      className={!w && !h ? `w-7 h-7` : `w-${w} h-${h}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
      ></path>
    </svg>
  );
};

const Friend = ({ w, h }: any) => {
  return (
    <svg
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
      ></path>
      <circle
        cx="9"
        cy="8"
        r="4"
        fill="currentColor"
        fillRule="evenodd"
      ></circle>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
};

const Add = ({ w, h }: any) => {
  return (
    <svg
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
      ></path>
    </svg>
  );
};

const Chat = ({ w, h }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
    >
      <path
        fill="currentColor"
        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
      ></path>
    </svg>
  );
};

const Search = ({ w, h }: any) => {
  return (
    <svg
      className={!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
      ></path>
    </svg>
  );
};

const Notification = ({ w, h }: any) => {
  return (
    <svg
      className={`text-dark-lg ${
        !w && !h ? `w-6 h-6` : `w-${w} h-${h}`
      } dark:text-gray-400`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      ></path>
    </svg>
  );
};

const Hamburger = ({ w, h }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`inline-block stroke-current text-dark-lg dark:text-gray-400 ${
        !w && !h ? `w-6 h-6` : `w-${w} h-${h}`
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};

const Edit = ({ w, h }: any) => {
  return (
    <svg
      className={`text-primary ${!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
      ></path>
    </svg>
  );
};

const Light = ({ w, h }: any) => {
  return (
    <svg
      className={`text-primary ${!w && !h ? `w-4 h-4` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
      ></path>
    </svg>
  );
};

const Dark = ({ w, h }: any) => {
  return (
    <svg
      className={`text-primary ${!w && !h ? `w-4 h-4` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.5 2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2z"
      ></path>
    </svg>
  );
};
const User = ({ w, h }: any) => {
  return (
    <svg
      className={`text-primary ${!w && !h ? `w-4 h-4` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
};

const Like = ({ w, h }: any) => {
  return (
    <svg
      className={` ${!w && !h ? `w-5 h-5` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
      ></path>
    </svg>
  );
};
const Dislike = ({ w, h }: any) => {
  return (
    <svg
      className={` ${!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57l-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
      ></path>
    </svg>
  );
};
const Comment = ({ w, h }: any) => {
  return (
    <svg
      className={` ${!w && !h ? `w-5 h-5` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4l-.01-18z"
      ></path>
    </svg>
  );
};
const Send = ({ w, h }: any) => {
  return (
    <svg
      className={`text-primary ${!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
      ></path>
    </svg>
  );
};
const Unfriend = ({ w, h }: any) => {
  return (
    <svg
      className={`${!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.65 5.82a3.999 3.999 0 1 1 5.53 5.53L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62c-.54-.28-1.13-.54-1.77-.76L20 17.17zm.49 3.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l8.18 8.18c-1.82.23-3.41.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41z"
      ></path>
    </svg>
  );
};
const CloudUpload = ({ w, h }: any) => {
  return (
    <svg
      className={`${!w && !h ? `w-6 h-6` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
      ></path>
    </svg>
  );
};
const AddImage = ({ w, h }: any) => {
  return (
    <svg
      className={`${!w && !h ? `w-10 h-10` : `w-${w} h-${h}`}`}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4l2 3l3-4l4 5H5z"
      ></path>
    </svg>
  );
};
export {
  CloudUpload,
  AddImage,
  Unfriend,
  Send,
  Like,
  Dislike,
  Comment,
  Check,
  Close,
  Home,
  Friend,
  Add,
  Chat,
  Search,
  Notification,
  Hamburger,
  Edit,
  Dark,
  Light,
  User,
};
