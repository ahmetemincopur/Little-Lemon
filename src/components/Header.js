import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="container-logo">
          <img className="logo" src="./logo.png" alt=""></img>
        </div>
        <Nav />
      </div>
    </header>
  );
};
export default Header;
