import {Fragment} from "react";

function Footer(){
  return(
        <footer className="footer_section">
          <div className="container" style={{width:'100%'}}>
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </footer>
  )
}

export default Footer;