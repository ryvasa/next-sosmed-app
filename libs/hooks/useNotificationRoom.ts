import { useEffect } from "react";
import { notificationSocket } from "../socket/socket";

const useNotificationRoom = (data: any) => {
  useEffect(() => {
    if (data) {
      notificationSocket.emit("join-notification-room", data);

      return () => {
        notificationSocket.emit("leave-notification-room", data);
      };
    }
  }, [data]);
};
// const useChatRoom = (chat_id: string | null) => {
//   useEffect(() => {
//     if (chat_id) {
//       // Bergabung dengan room
//       socket.emit("join-notification-room", chat_id);

//       // Cleanup saat komponen di-unmount atau chat_id berubah
//       return () => {
//         socket.emit("leave-notification-room", chat_id);
//       };
//     }
//   }, [chat_id]);
// };

export default useNotificationRoom;
