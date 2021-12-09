import {
  fetchCountries,
  countrySelectors,
} from "../features/university/countrySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ChooseUniversityByCountry = () => {
  const dispatch = useDispatch();
  const selectCountries = useSelector(countrySelectors.selectAll);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const listAllCountries = selectCountries.map((selectedcountry) => {
    return (
      <option value={selectedcountry.country}>{selectedcountry.country}</option>
    );
  });

  return (
    <div>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Choose Country</option>
        <option value="Canada">Canada</option>
        <option value="US">US</option>
        <option value="Mexico">Mexico</option>
        {listAllCountries}
      </select>
    </div>
  );
};

export default ChooseUniversityByCountry;
