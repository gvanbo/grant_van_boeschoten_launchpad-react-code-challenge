const AddEditPost = () => {
  return (
    <div className="container">
      <div className="mb-3">
        <label for="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Title of Post"
        />
      </div>
      <div className="mb-3">
        <label for="postBody" className="form-label">
          Post Body
        </label>
        <input
          type="text"
          className="form-control"
          id="postBody"
          placeholder="Write Your Post Here"
        />
      </div>
    </div>
  );
};

export default AddEditPost;
