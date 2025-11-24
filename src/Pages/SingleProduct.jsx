import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import QRCode from "react-qr-code";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const SingleProduct = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const [showQR, setShowQR] = useState(false);

  async function SingleProduct() {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/Products/${id}`
    );
    setSingle(res.data);
  }

  useEffect(() => {
    SingleProduct();
  }, [id]);
  return (
    <>
    <Header/>
      <div className="col-lg-6 m-auto mt-5 px-5 pt-5 pb-3 shadow rounded-2">
        <Link to="/">
          <button className="btn position-absolte bg-transparent fs-5 m-0 p-3">
            <IoArrowBack />
          </button>
        </Link>
        <div className="row">
          <div className="col-lg-4">
            <img src={single.image} alt="" width="100%" height={300} />
          </div>
          <div className="col-lg-8">
            <h2 className="text-capitalize">name : {single.product_name}</h2>
            <p className="text-capitalize">category : {single.category} </p>
            <p className="text-capitalize">price : {single.price} </p>
            <p className="text-capitalize">total product : {single.total} </p>
            <p className="text-capitalize">
              description : {single.description}{" "}
            </p>
            <div className="row">
              <div className="col col-lg-2">
                <button
                  className="btn btn-outline-dark text-capitalize"
                  onClick={() => setShowQR(true)}
                >
                  buy
                </button>
              </div>
              <div className="col">
                {showQR && (
                  <div className="mt-4 text-center">
                    <QRCode value={String(single.price)} size={200} />
                    <p className="mt-2 text-success">
                      Scan to Pay ₹{single.price}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default SingleProduct;
