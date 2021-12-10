import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, homeSelectors, deletePost, editPost, addPost } from "./homeSlice";
import Post from "../../components/Post";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import imageLinks from "../../app/assets/images";

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
  const onPost = useCallback((title, body) => dispatch(addPost({ title, body})), []);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const showAllPosts = allPosts.map((post) => (
    <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} onPost={onPost} />
  ));

  
  return (
    <>
      <Header headerText="home" />
      <div className="m-3" >
        <img src={imageLinks[9].link} alt={imageLinks[9].text} />
      </div>
      <h2 className="text-center m-5">Did somebody say API Posts?</h2>
      <div className="container">{showAllPosts}</div>;
      <Outlet />
    </>
  );
};

export default Home;
