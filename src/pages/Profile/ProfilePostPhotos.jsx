import { useOutletContext } from "react-router-dom";

function ProfilePostPhotos() {
  const { post } = useOutletContext();

  return <img className="w-2/5 rounded" src={post.imageUrl} alt={post.title} />;
}

export default ProfilePostPhotos;
