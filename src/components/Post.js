import React from "react";
import CallModal from "./CallModal";
import "./post.css";

const Post = ({ post, onDelete, onEdit }) => {
  return (
    <div className="card bg-transparent" style={{ width: "100%", margin: 15 }}>
      <div className="card-body">
        <h3 class="card-subtitle mb-2 text-capitalize">{post.title}</h3>
        <p className="card-text">{post.body}</p>

        <div className="btn-group" role="group">
          <button
            className="button_black"
            // onClick={() => onEdit(post.id, { body: post.body })}
            onClick={() => <CallModal post={post} isEdit={true}/>}
          >
            Edit
          </button>
          <button
            className="button_black"
            onClick={() => onEdit(post.id, { body: post.body })}
          >
            New Post
          </button>
          <button className="button_red" onClick={() => onDelete(post.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
