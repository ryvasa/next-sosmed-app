// hooks/useChatSocket.ts
import { useEffect } from "react";
import { userSocket } from "../socket/socket";
const useActiveStatus = (fetchData: any) => {
  useEffect(() => {
    userSocket.on("activeStatus", (data: any) => {
      fetchData();
    });

    return () => {
      userSocket.off("activeStatus", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useActiveStatus;
