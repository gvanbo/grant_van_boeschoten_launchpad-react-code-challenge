import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, homeSelectors, deletePost, editPost } from "./homeSlice";
import Post from "../../components/Post";
import { Outlet } from "react-router";
import Header from "../../components/Header"

const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(homeSelectors.selectAll);
  const onDelete = useCallback((id) => {
    dispatch(deletePost(id));
  }, []);
  const onEdit = useCallback(
    (id, newObj) => dispatch(editPost({ id, newObj })),
    []
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const showAllPosts = allPosts.map((post) => (
    <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
  ));
  return (
    <>
    <Header headerText="home" />
    <div className="container">{showAllPosts}</div>;
    <Outlet />
    </>
  );
};

export default Home;
