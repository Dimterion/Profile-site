import { useOutletContext } from "react-router-dom";

function ProfilePostTags() {
  const { post } = useOutletContext();

  return <pre>{post.type}</pre>;
}

export default ProfilePostTags;
