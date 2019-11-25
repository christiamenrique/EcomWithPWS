import React from "react";
import "./footer.scss";

function Footer(props) {
    return (
        <footer className="footer-adjustment">
        <div className="footerContext">
        &copy; <p>The Best Electronic.</p>
            <div className="col-md-12">
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/?hl=en"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                    <li className="list-inline-item"><a href="https://support.google.com/plus/?hl=en#topic=9259565"><i className="fab fa-google-plus"></i></a></li>
                </ul>
            </div>
            </div>
        </footer>
    );
}

export default Footer;