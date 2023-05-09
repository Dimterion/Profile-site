import { useOutletContext } from "react-router-dom";

function ProfilePostDetails() {
  const { post } = useOutletContext();

  return <p>{post.text}</p>;
}

export default ProfilePostDetails;
