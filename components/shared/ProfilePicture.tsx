import Image from "next/image";
import image from "../../public/pf.jpg";
const ProfilePicture = ({ active, avatar }: any) => {
  return (
    <div className={`avatar-profile ${active && "avatar-profile-online"}`}>
      <Image
        width={avatar && 10000}
        height={avatar && 10000}
        style={avatar && { width: "112px", height: `112px` }}
        src={avatar ? `http://localhost:3000/${avatar}` : image}
        alt="photo frofile"
      />
    </div>
  );
};

export default ProfilePicture;
