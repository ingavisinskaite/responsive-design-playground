import React from "react";
import "./style.scss";
import { bubble as Menu } from "react-burger-menu";

function useWindowWidth() {
  const [size, setSize] = React.useState(0);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const MenuLink = props => (
  <div className="HEADER__navbar__menu__link-container">
    <a href="/" className="HEADER__navbar__menu__link-container__link">
      {props.link}
    </a>
  </div>
);

const Search = () => {
  return (
    <div className="HEADER__container__search">
      <input
        className="HEADER__container__search__input"
        type="text"
        placeholder="Paieška"
      ></input>
      <img src="/search-icon.png" alt=""></img>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="HEADER__container__logo">
      <a href="/">
        <img alt="" src="/logo-header.jpg"></img>
      </a>
    </div>
  );
};

const Header = () => {
  const width = useWindowWidth();
  let links = [
    "PRADINIS",
    "NAUJIENOS",
    "AKCIJOS",
    "APŽVALGOS",
    "STRAIPSNIAI",
    "PATARIMAI",
    "NUOMONĖS",
    "IŠMANIEJI TELEFONAI"
  ];

  return (
    <div className="HEADER">
      <div className="HEADER__container">
        <Logo />
        <Search />
      </div>
      <div className="HEADER__navbar">
        {width > 769 ? (
          <div className="HEADER__navbar__menu">
            {links.map((l, index) => {
              return <MenuLink link={l} key={index} />;
            })}
          </div>
        ) : (
          <div>
            <Menu>
              <Search />
              {links.map((l, index) => {
                return <MenuLink link={l} key={index} />;
              })}
            </Menu>
            <Logo />
          </div>
        )}

        <div className="HEADER__navbar__icons">
          <a href="/">
            <img
              alt=""
              src="/facebook.png"
              className="HEADER__navbar__icons-icon"
            ></img>
          </a>
          <a href="/">
            <img
              alt=""
              src="/youtube.png"
              className="HEADER__navbar__icons-icon"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
