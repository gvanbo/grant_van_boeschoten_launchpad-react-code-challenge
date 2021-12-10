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

  const showImages = (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={imageLinks[7].link}
            className="d-block w-100"
            alt={imageLinks[7].text}
          />
        </div>
        <div className="carousel-item">
          <img
            src={imageLinks[8].link}
            className="d-block w-100"
            alt={imageLinks[8].text}
          />
        </div>
        <div className="carousel-item">
          <img
            src={imageLinks[7].link}
            className="d-block w-100"
            alt={imageLinks[7].text}
          />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Header headerText="home" />
      {showImages}
      <div className="container">{showAllPosts}</div>;
      <Outlet />
    </>
  );
};

export default Home;
