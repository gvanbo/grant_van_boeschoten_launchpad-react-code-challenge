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
      <div className="container-fluid col-6">
        <form onSubmit={handleSubmit}>
          <label className="label">
            Zip Code:
            <input
              type="number"
              value={zip}
              onChange={handleChange}
              className="postal-input"
            />
          </label>
          <input type="submit" value="Submit" className="button_black" />
        </form>
      </div>
      <div className="container">{showPostalDetails}</div>
    </>
  );
};

export default PostalLookup;
