import React, { useRef } from "react";

import "./Post.css";

const Post = (props, ref) => {
  const postRef = useRef();
  const modifiedOnClick = () => {
    //idk if this is bad, but will atempt
    props.onClick(props.post);
  };
  return (
    <button
      ref={postRef}
      className="costum-btn btn-11"
      onClick={modifiedOnClick}
    >
      {props.post.title}
    </button>
  );
};

export default Post;
