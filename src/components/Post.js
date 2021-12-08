import React from "react";
import { Panel, Button, ButtonToolbar, Input } from "rsuite";

const Post = ({ post, onDelete, onEdit }) => {
  return (
    <Panel header={<h3>{post.title}</h3>} bordered style={{ margin: 20 }}>
      {post.body}
      <ButtonToolbar style={{ marginTop: 10 }}>
        <Button size="lg" color="red" onClick={() => onDelete(post.id)}>
          Delete
        </Button>
        <Button
          size="lg"
          color="cyan"
          onClick={() => onEdit(post.id, { body: post.body })}
        >
          Edit
        </Button>
        <Input placeholder={post.body}></Input>
      </ButtonToolbar>
    </Panel>
  );
};

export default Post;
