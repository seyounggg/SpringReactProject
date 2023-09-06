import {Fragment} from "react";

function Header(){
  return(
      <Fragment>
        {/*// <!-- header section strats -->*/}
        <header className="header_section long_section px-0">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
          <span>
            ㅇㅂㄱㄱ
          </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav" style={{fontSize:"15pt"}}>
                  <li className="nav-item active">
                    <a className="nav-link" href="about.html">이불</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/gagu/gagu_list">가구</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">게시판</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/*// <!-- end header section -->*/}
      </Fragment>
  )
}

export default Header;