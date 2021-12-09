import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/NavBar";
import Header from "../../components/Header";
import { fetchUniversities, universitySelectors } from "./universitySlice";
import { countrySelectors, fetchCountries } from "./countrySlice";
import UniversityListItem from "../../components/UniversityListItem";
import imageLinks from "../../app/assets/images";

const University = () => {
  const dispatch = useDispatch();
  const universityPosts = useSelector(universitySelectors.selectAll);
  const countryPosts = useSelector(countrySelectors.selectAll);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const populateCountriesOptions = countryPosts.map((country) => {
    return <option value={country.country}>{country.country}</option>;
  });

  const handleSelect = (e) => {
    const country = e.target.value;
    dispatch(fetchUniversities(country));
  };

  const showSelectedCountry = universityPosts.map((university) => (
    <UniversityListItem key={university.id} university={university} />
  ));

  return (
    <div>
      <NavBar />
      <Header headerText="university" />
      <div>
        <div className="row justify-content-md-center mb-3">
          <h3 className="col-5">Search Universities by Country</h3>
          <div className="col-5">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={handleSelect}
            >
              {populateCountriesOptions}
              <option value="Canada">Choose Country</option>
              <option value="Canada">Canada</option>
              <option value="Rwanda">Rawanda</option>
              <option value="Mexico">Mexico</option>
              <option value="Algeria">Algeria</option>
              <option value="Japan">Japan</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">{showSelectedCountry}</div>
        <div className="col-6 justify-self-center">
          <img src={imageLinks[1].link} alt={imageLinks[1].text} width="90%" />
          <img src={imageLinks[3].link} alt={imageLinks[3].text} width="90%" />
          <img src={imageLinks[2].link} alt={imageLinks[2].text} width="90%" />
          <img src={imageLinks[4].link} alt={imageLinks[4].text} width="90%" />
          <img src={imageLinks[5].link} alt={imageLinks[5].text} width="90%" />
        </div>
      </div>
    </div>
  );
};

export default University;
