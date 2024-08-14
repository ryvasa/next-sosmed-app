import Image from "next/image";
import image from "../../public/pf.jpg";
const ProfilePicture = ({ active, avatar }: any) => {
  return (
    <div className={`avatar-profile ${active && "avatar-profile-online"}`}>
      <Image
        width={10000}
        height={10000}
        // style={{ width: '112px', height: `112px` }}
        src={avatar ? `http://localhost:3000/${avatar}` : image}
        className="h-12 w-12"
        alt="photo frofile"
      />
    </div>
  );
};

export default ProfilePicture;
