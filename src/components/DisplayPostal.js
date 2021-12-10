import "../features/postalLookup/postal.css";

const DisplayPostal = ({ foundZip }) => {
  const cityName = foundZip[0]["place name"];
  const cityState = foundZip[0]["state"];
  
  const displayElement = 
    <div className="container">
      <div className="align-self-center m-5">
        <h2>
          {cityName} 
        </h2>
        <h3>{cityState}</h3>
      </div>
    </div>
  
  return( displayElement ) 

};

export default DisplayPostal;
