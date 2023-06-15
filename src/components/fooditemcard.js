import React, { useState } from 'react';
import {CiLocationOn} from 'react-icons/ci'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import PaymentPage from './payment';
import { Link } from 'react-router-dom';

const FoodItemCard = ({ foodItem, deliveryApps }) => {

  const [selectedApp, setSelectedApp] = useState(deliveryApps[1]);
  const [showPopup, setShowPopup] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [codeapplied, setCodeapplied] = useState(false);
  const { width, height } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false);


  const handleAppSelect = (deliveryApp) => {
    setSelectedApp(deliveryApp);
  };

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
    setCodeapplied(false);
  };

  const handleBuyNowClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setCodeapplied(false);
    setCouponCode("");
  };

  const handleBuyNowfinalClick = () => {
    setIsOpen(true);
  };

  return (
    
    <>
      <div className="food-item-card">
        <h3>{foodItem.name}</h3>
        <li className="itemlocation">
          <CiLocationOn />
          {foodItem.location}
        </li>
        <img src={foodItem.img} alt={foodItem.name} />
        <div className="fooditemcardul">
          {deliveryApps.map((deliveryApp) => (
            <div
              key={deliveryApp.name}
              className={`delivery-app-card ${
                selectedApp.name === deliveryApp.name ? "selected" : ""
              }`}
              onClick={() => handleAppSelect(deliveryApp)}
            >
              <img src={deliveryApp.logoimg} alt={deliveryApp.name} />
              <div className="details">
                <div className="price">&#x20B9;{deliveryApp.price}</div>
                <div className="rating">{deliveryApp.rating} &#9733;</div>
                <div className="reviews">({deliveryApp.reviews} reviews)</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleBuyNowClick} className={` ${selectedApp.name === 'Swiggy' ? 'app1-selected' : selectedApp.name === 'Zomato' ? 'app2-selected' : selectedApp.name === 'Eatsure' ? 'app3-selected' : ''}`} >Buy now</button>
      </div>
      {showPopup && (
        <>
         <div className="popupoverlay"></div>
      <div className="popupcontainer">
      {
      couponCode === "FOODOUN20" && codeapplied &&
      <Confetti
      width={width}
      height={height}
      numberOfPieces={500}
      tweenDuration={6000}
      recycle={false}
    />
      }
        <div className="popupheader">
          <h3>{foodItem.name}</h3>
          <button onClick={handlePopupClose}>Close</button>
        </div>
        <div className="popupbody">
          <div className="food-item-info">
            <img src={foodItem.img} alt={foodItem.name} />
            <h4 style={{textAlign:"center"}}>{selectedApp.name}</h4>
          </div>
          <div className="deliveryinfo">
            <img src={selectedApp.logoimg} alt={selectedApp.name} />
            <div className="details" style={{marginTop:"-20px"}}>
              {codeapplied && couponCode==="FOODOUN20" ? <div className="price"><span style={{textDecoration:"line-through",color:"grey"}}>&#x20B9;{selectedApp.price}</span> &#x20B9;{selectedApp.price*0.8}</div>:
              <div className="price">&#x20B9;{selectedApp.price}</div>}
              <div className="rating">{selectedApp.rating} &#9733;</div>
              <div className="reviews">({selectedApp.reviews} reviews)</div>
            </div>
          </div>
        </div>
        <div className="popupfooter">
          <div className="couponinput">
            <input type="text" placeholder="Enter coupon code" value={couponCode} onChange={handleCouponCodeChange} />
            <button onClick={() => setCodeapplied(true)}>Apply coupon</button>
          </div>
          <p style={{color:"red",fontSize:"14px",marginTop:"-10px",marginBottom:"10px"}}>
             Apply FOODOUN20 to get flat 20% off on your {foodItem.name} order.
          </p>
          <Link to="/payment">
          <button style={{width:"230px",marginRight:"155px",textDecoration:"none",color:"white"}} > buy Now</button>
          </Link>
        </div>
      </div>
        </>
      )}
    </>
  );
};
 

export default FoodItemCard;