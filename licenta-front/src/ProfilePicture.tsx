// ProfilePicture.tsx
import React from "react";
import "./ProfilePicture.css";

interface ProfilePictureProps {
  name: string;
}

function ProfilePicture() {
  const imageUrl = "./src/assets/user.png";
  const altText = "Description of the image";

  return (
    <div className="profile-container">
      <img className="profile-picture" src={imageUrl} alt={altText} />
    </div>
  );
}

export default ProfilePicture;
