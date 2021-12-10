import { useState } from "react";

const EditModal = ({ onEdit, post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleTitleOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleBodyOnChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const alertPostSubmitted = () => {
    alert("Post is Submitted");
  };

  const refreshPage = () =>{
      window.location.reload();
  }

  const handleClick = () => {
    if (title === '') { alert('You must create a title')}
    if (body === '') { alert('You still need to write the body of your post!')}
    if (title !== '' && body !== '') {
      onEdit(title, body);
      alertPostSubmitted();
      refreshPage()
    }
  };
  return (
    <div className="container">
      <h2>Edit Post</h2>
      <div className="mb-3">
        <label for="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Title of Post"
          value={title}
          onChange={handleTitleOnChange}
        />
      </div>
      <div className="mb-3">
        <label for="postBody" className="form-label">
          Post Body
        </label>
        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={handleBodyOnChange}
            value={body}
          ></textarea>
        </div>
      </div>
      <button className="button_black" onClick={handleClick}>
        Submit Post
      </button>
    </div>
  );
};

export default EditModal;
