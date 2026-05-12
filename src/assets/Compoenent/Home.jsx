import React, { useEffect, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import Accordion from "react-bootstrap/Accordion";
import data from "../../Js/data";
import Faq from "./Faq";
import logo1 from "../Image/image1.jpg";
import logo2 from "../Image/image2.jpg";

import logo3 from "../Image/image3.jpg";
import Slider from "./Slider";
import { toast } from "react-toastify";
import axios from "axios";
import ProductCart from "./ProductCart";

export default function Home() {
  let [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php", {
        params: {
          limit: 9,
          categories: "Tops,fragrances,furniture",
        },
      })
      .then((result) => {
        setProduct(result.data.data);
      })
      .catch((error) => {
        toast.error("SomeThing went Wrong !");
      });
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <Slider />
      </div>
      <div className="contanier-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-3  fs-1">
              {" "}
              OFFERS ARE BELOW
            </div>
          </div>
        </div>
      </div>
      {/* <h3 className="text-center mt-3">Offers are bellow</h3> */}
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ marginTop: "-20px" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {products.map((v, i) => {
                return <ProductCart key={i} product={v} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
