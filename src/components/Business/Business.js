import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.image_url} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>
              {business.state} {business.postal_code}
            </p>
            <p>{business.city}</p>
          </div>
          <div className="Business-contact">
            <p>Price: {business.price}</p>
            <p>{business.phone}</p>
            <p>
              <a href={business.reserve_url} target="_blank">
                Reserve
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
