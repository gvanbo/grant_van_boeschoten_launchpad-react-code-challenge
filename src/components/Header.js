const Header = ({ headerText }) => {
  return (
    <div
      className="container-fluid"
      style={{ minHeight: 125, marginTop: 50 }}
    >
      <div className="text-center text-uppercase">
        <h1>{headerText}</h1>
      </div>
    </div>
  );
};

export default Header;
