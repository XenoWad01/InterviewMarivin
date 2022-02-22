import React, { useState, useEffect, useCallback } from "react";

import { useSearchParams } from "react-router-dom";

import useHttp from "../hooks/use-http";
import Posts from "./Posts";
import classes from "./DropDown.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, error, sendRequest: fetchPosts } = useHttp();

  const fetchPostsHandler = () => {
    console.log("fetching posts");

    const parsePostsData = (response) => {
      const loadedPosts = [];
      const data = response.data;
      for (const key in data) {
        loadedPosts.push({ id: response.data[key].id, title: data[key].title });
      }
      setPosts(loadedPosts);
    };
    fetchPosts(
      {
        url: "/posts",
        baseURL: "https://jsonplaceholder.typicode.com",
      },
      parsePostsData
    );
  };

  const clickDropDownHandler = () => {
    if (!isOpen) {
      fetchPostsHandler();
    }
    setIsOpen((prevState) => !prevState);
  };

  const selectHandler = (event) => {
    // This will be the onClick on the Post component's button
    // I just passed the post that i passed all the way down by props
    //instead of the normal event, lmao
    //So, event is actually the post which was clicked not an event object
    // I am either amazing or really really dumb xD
    setSelected(event);
    setIsOpen(false);
  };

  const onSubmitClick = () => {
    const params = {
      id: selected.id,
      title: selected.title,
    };
    setSearchParams(params);
  };

  return (
    <React.Fragment>
      <button
        className="costum-btn btn-4 menubutton"
        disabled={isLoading}
        onClick={clickDropDownHandler}
      >
        {selected ? selected.title : "Menu"}
      </button>
      {isOpen && (
        <Posts
          items={posts}
          loading={isLoading}
          postOnClick={selectHandler}
          error={error}
        />
      )}
      {!isOpen && selected && (
        <button className="costum-btn btn-4" onClick={onSubmitClick}>
          <span>Submit</span>
        </button>
      )}
    </React.Fragment>
  );
};

export default DropDown;
