import { useState } from "react";
import NavBar from "../navbar/NavBar";
import Header from "../../components/Header";
import { fetchPostalDetails, postalSelectors } from "./postalSlice";
import { useDispatch, useSelector } from "react-redux";
import DisplayPostal from "../../components/DisplayPostal";

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
    <DisplayPostal key={foundZip.id} foundZip={foundZip}/>
  ))

  return (
    <>
      <NavBar />
      <Header headerText="postal lookup" />
      <form onSubmit={handleSubmit}>
        <label>
          Zip Code:
          <input type="number" value={zip} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>{showPostalDetails}</div>
    </>
  );
};

export default PostalLookup;
