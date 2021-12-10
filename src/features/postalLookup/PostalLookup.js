import { useState } from "react";
import NavBar from "../navbar/NavBar";
import Header from "../../components/Header";
import { fetchPostalDetails, postalSelectors } from "./postalSlice";
import { useDispatch, useSelector } from "react-redux";
import DisplayPostal from "../../components/DisplayPostal";
import "./postal.css";
import imageLinks from "../../app/assets/images";

const PostalLookup = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(postalSelectors.selectAll);

  const [zip, setZip] = useState(90210);

  const handleChange = (e) => {
    setZip(e.target.value);
    console.log(zip);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostalDetails(zip));
  };
  const showPostalDetails = allPosts.map((foundZip) => (
    <DisplayPostal key={foundZip.id} foundZip={foundZip} />
  ));

  return (
    <>
      <NavBar />
      <Header headerText="postal lookup" />
      <img src={imageLinks[6].link} alt={imageLinks[6].text} />
      <div className="container mx-auto text-center m-5">
        <div className="mx-auto ">
          <p className="m-2">
            Enter a Zip Code, if its valid you will see the City and State that
            are associated with it.
          </p>
          <div className="row">
          <div className="col-4"></div>
          <div className="col-4  ">
            <form onSubmit={handleSubmit}>
              <label className="input-group mb-3">
                <input
                  type="number"
                  value={zip}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="90210"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn btn-secondary"
                />
              </label>
            </form>
          </div>
          <div className="col-4"></div>
          </div>
        </div>
        <div className="container">{showPostalDetails}</div>
      </div>
    </>
  );
};

export default PostalLookup;
