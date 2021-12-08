import React from "react";
import { Panel, ButtonToolbar } from "rsuite";
import './post.css'

const Post = ({ post, onDelete, onEdit }) => {
  return (
    <Panel header={<h1>{post.title}</h1>} bordered style={{ margin: 20 }}>
      {post.body}
      <ButtonToolbar style={{ marginTop: 10 }} className="button_container">
        <button className="button_red" onClick={() => onDelete(post.id)}>
          Delete
        </button>
        <button
          className="button_black"
          onClick={() => onEdit(post.id, { body: post.body })}
        >
          Edit
        </button>
        <button
          className="button_black"
          onClick={() => onEdit(post.id, { body: post.body })}
        >
          New Post
        </button>
      </ButtonToolbar>
    </Panel>
  );
};

export default Post;
