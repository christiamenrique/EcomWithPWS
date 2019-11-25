import React from "react";
import "./jumbotron.scss"
import { Link } from 'react-router-dom';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Thank you for shopping with us!</h1>
            <p className="lead">Please provide your feedback in the comment box below. Feel free to give us a call if you have any questions. You can reach our Customers Service line at 704-305-890. Customer Service is open 7 days a week from 7am to 10pm. We appreciate your business with us!</p>
            <hr className="my-4"></hr>
            <p>You can also check our newest products available! Click on the link below to go to our product page.</p>
            {/* linking to the product page */}
            <Link to="/products" className="btn btn-primary btn-lg">Newest Products</Link>
        </div>
    )
}

export default Jumbotron;