import "./navbar.css";
const navbar = () => {

    function navify(){
            // const nav=document.getElementsByClassName("nav-content");
            // nav.style.position = "absolute";
            // nav.style.left = "-1000px";
    }

  return (
    <>
      <div className="navbar">
        <div className="nav-content">
          <a href="">HOME</a>
          <a href="">SUNFEST 2018</a>
          <a href="">ARTISTS</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </div>
        <div className="nav-heading">
          <span>
            <b>SUNFEST</b>
          </span>
        </div>
        <div className="nav-menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={navify()}>
            <path
              fill="currentColor"
              d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default navbar;
