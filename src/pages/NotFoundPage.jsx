import React from "react";
import { Link } from "react-router-dom";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://i.imgur.com/lKJiT77.png"
          alt="not-found-img-placeholder"
        />
        <p className="text-center">
          <strong>
            Please check your URL and try agian.
            <span role="img" aria-label="crying face">
              😢
            </span>
          </strong>
        </p>
        <p className="text-center">
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
