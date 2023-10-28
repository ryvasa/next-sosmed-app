import Image from "next/image";
import image from "../../public/pf.jpg";
const ProfilePicture = () => {
  return (
    <div className="avatar-profile avatar-profile-online">
      <Image placeholder="blur" src={image} alt="photo frofile" />
    </div>
  );
};

export default ProfilePicture;
