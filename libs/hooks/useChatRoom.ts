import { useEffect } from "react";
import { messageSocket } from "../socket/socket";

const useChatRoom = (data: any) => {
  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        data.forEach((item: any) => {
          messageSocket.emit("joinRoom", item.id);
          messageSocket.emit("checkRoom", item.id);
        });

        return () => {
          data.forEach((item: any) => {
            messageSocket.emit("leaveRoom", item.id);
          });
        };
      } else {
        messageSocket.emit("joinRoom", data);

        return () => {
          messageSocket.emit("leaveRoom", data);
        };
      }
    }
  }, [data]);
};
// const useChatRoom = (chat_id: string | null) => {
//   useEffect(() => {
//     if (chat_id) {
//       // Bergabung dengan room
//       socket.emit("joinRoom", chat_id);

//       // Cleanup saat komponen di-unmount atau chat_id berubah
//       return () => {
//         socket.emit("leaveRoom", chat_id);
//       };
//     }
//   }, [chat_id]);
// };

export default useChatRoom;
