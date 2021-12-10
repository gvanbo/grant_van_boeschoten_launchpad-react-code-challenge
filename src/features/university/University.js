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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="m-3">
        <img src={imageLinks[10].link} alt={imageLinks[10].text} />
      </div>
      <div>
        <div className="row justify-content-md-center mb-3">
          <h3 className="col-5">Search Universities by Country</h3>
          <div className="col-5">
            <select
              className="form-select form-select-lg mb-3"
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
      </div>
    </div>
  );
};

export default University;
