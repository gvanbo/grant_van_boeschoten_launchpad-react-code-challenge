import "../features/postalLookup/postal.css";

const DisplayPostal = ({ foundZip }) => {
  const cityName = foundZip[0]["place name"];
  const cityState = foundZip[0]["state"];

  return (
    <div className="container">
      <div className="col-12 align-self-center">
        <h2>
          {cityName} 
        </h2>
        <h3>{cityState}</h3>
      </div>
    </div>
  );
};

export default DisplayPostal;
