import React from "react";

import Post from "./Post.js";
import LoadingSpinner from "./LoadingSpinner";
import "./Posts.css";

const Posts = (props) => {
  let postList = (
    <h2>No posts loaded. Click the button to start loading some!</h2>
  );

  if (props.items.length > 0) {
    postList = (
      <ul className="button-list">
        {props.items.map((post) => (
          <Post key={post.id} post={post} onClick={props.postOnClick} />
        ))}
      </ul>
    );
  }

  let content = postList;

  if (props.loading) {
    content = <LoadingSpinner />;
  }

  if (props.error) {
    content = <p>Something went wrong, try fetching again</p>;
  }

  return <React.Fragment> {content} </React.Fragment>;
};

export default Posts;
