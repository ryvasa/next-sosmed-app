import Image from "next/image";
import image from "../../public/pf.jpg";
const ProfilePicture = ({ active }: any) => {
  return (
    <div className={`avatar-profile ${active && "avatar-profile-online"}`}>
      <Image placeholder="blur" src={image} alt="photo frofile" />
    </div>
  );
};

export default ProfilePicture;
