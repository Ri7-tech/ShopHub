import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer class="bg-light py-5">
  <div class="container">
    <div class="row">

      {/* <!-- Column 1: ShopHub --> */}
      <div class="col-md-3 mb-4">
        <h5>ShopHub</h5>
        <p>Your one-stop destination for quality products at competitive prices.</p>
        <div class="d-flex gap-2">
          <CiFacebook style={{fontSize:'28px'}}/>
          <FaInstagram style={{fontSize:'28px'}}/>
          <FaTwitter  style={{fontSize:'28px'}} />
        </div>
      </div>

      {/* <!-- Column 2: Shop --> */}
      <div class="col-md-3 mb-4">
        <h5>Shop</h5>
        <ul class="list-unstyled">
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Home Appliances</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="#">New Arrivals</a></li>
        </ul>
      </div>

      {/* <!-- Column 3: Customer Service --> */}
      <div class="col-md-3 mb-4">
        <h5>Customer Service</h5>
        <ul class="list-unstyled">
          <li>
            <Link to="/contact-us">Contact Us</Link>
            </li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Returns & Exchanges</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      {/* <!-- Column 4: Stay Updated --> */}
      <div class="col-md-3 mb-4">
        <h5>Stay Updated</h5>
        <p>Subscribe for the latest products and deals.</p>
        <form>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Your email"/>
            <button class="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</footer>

    </>
  )
}
