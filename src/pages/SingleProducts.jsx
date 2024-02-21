/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import Breadcumb from "../components/layouts/Breadcumb";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let productData = async () => {

      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    };
    productData();
  
  }, []);
  
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qun:1 }))

  }

  return (
    <Container>
      <section>
        <Breadcumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        {loading ? (
          <Flex className={"items-center justify-center "}>
            {" "}
            <iframe
              src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm"
              width="480"
              height="360"
              frameBorder="0"
              className="gipsy-embed"
              allowFullScreen
            ></iframe>
          </Flex>
        ) : (
          <Flex className={"flex-wrap gap-y-10 gap-x-10  justify-center"}>
            {product.images.map((img) => (
              <Img src={img} className={"w-[48%]"} imgClassName={"w-full h-full object-cover "} />
            ))}
          </Flex>
        )}
        <h2 className="font-dm text-[39px] font-bold text-[#262626] mt-[50px] mb-[18px]">{product.title}</h2>
        <Flex className={"gap-x-[20px] items-center"}>
          <strike><h5 className="font-base font-normal text-[#767676]">{`$${product.price}`}</h5></strike>
          <h6 className="font-bold text-[20px] text-[#262626]">{`$${Math.ceil((product.price)-(product.price * product.discountPercentage)/100)}`}</h6>
        </Flex>
        <Flex className={"mt-[62px] gap-7 items-center"}>
          <h5 className="text-base font-bold ">STATUS:</h5>
          <h6>{product.stock != 0 ? "In stock" : "Out of stock"}</h6>
        </Flex>
        <Flex className={"my-[55px] gap-5 text-base font-bold"}>
          <button className="py-[16px] px-[44px] border border-[#262626] ">Add to Wish List</button>
          <button className="py-[16px] px-[60px] bg-black text-white" onClick={handleAddToCart} >Add to Cart</button>
        </Flex>
      </section>
    </Container>
  );
};

export default SingleProducts;
