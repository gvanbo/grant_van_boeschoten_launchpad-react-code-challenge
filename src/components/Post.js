import React, {useState} from "react";
import "./post.css";
import AddModal from './AddModal'
import EditModal from './EditModal'

const Post = ({ post, onDelete, onEdit, onPost }) => {
  const [chooseRender, setChooseRender] = useState(0);
  const postItem = (
    <div className="card bg-transparent" style={{ margin: 15, border: "solid" }}>
      <div className="card-body">
        <h3 className="card-subtitle mb-2 text-capitalize">{post.title}</h3>
        <p className="card-text">{post.body}</p>

        <div className="btn-group" role="group">
          <button
            className="button_black"
            // onClick={() => onEdit(post.id, { body: post.body })}
            //chooseRender 2 will open Edit Modal
            onClick={() => setChooseRender(2)}
          >
            Edit
          </button>
          <button
            className="button_black"
            //chooseRender 1 will open Add Modal
            onClick={() => setChooseRender(1) }
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

  switch (chooseRender) {
    case 1:
      return (
        <div>
          <AddModal onPost={onPost}/>
        </div>
      )
    case 2:
      return (
        <div>
          <EditModal onEdit={onEdit} post={post}/>
        </div>
      )
    default:
        return <div>{postItem}</div>
  }
};

export default Post;
