import { useEffect } from "react";
import { socket } from "../socket/socket";

const useRoom = (data: any) => {
  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        data.forEach((item: any) => {
          socket.emit("joinRoom", item.id);
        });

        return () => {
          data.forEach((item: any) => {
            socket.emit("leaveRoom", item.id);
          });
        };
      } else {
        socket.emit("joinRoom", data);

        return () => {
          socket.emit("leaveRoom", data);
        };
      }
    }
  }, [data]);
};
// const useRoom = (chat_id: string | null) => {
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

export default useRoom;
