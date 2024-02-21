/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcumb from "../components/layouts/Breadcumb";
import Flex from "../components/layouts/Flex";
import { ImCross } from "react-icons/im";
import cartImg from "../assets/cartImg.png";
import Img from "../components/layouts/Img";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateCart } from "../app/slices/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  let [total, setTotal] = useState(0);
  const handleRemove = (index) => {
    dispatch(removeCart(index));
  };
  useEffect(() => {
    let temTotal = 0;
    cartData.map((product) => {
      temTotal +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
    });
    setTotal(temTotal);
  }, [cartData]);

  return (
    <Container>
      <Breadcumb
        pathName={window.location.pathname.split("/")[1]}
        name={window.location.pathname.split("/")[1]}
        path={window.location.pathname}
      />
      <Flex className={"mt-[136px]"}>
        <Flex
          className={
            " w-[100%] font-dm text-base font-bold py-8 px-5 bg-[#F5F5F3]"
          }
        >
          <div className="w-[40%]">Product</div>
          <div className="w-[20%]">Price</div>
          <div className="w-[20%]">Quantity</div>
          <div className="w-[20%]">Total</div>
        </Flex>
      </Flex>
      {cartData.map((product, index) => (
        <Flex className={"flex-col border border-[#F0F0F0]"}>
          <Flex
            className={" w-[100%] font-dm text-base  py-8 px-5 items-center "}
          >
            <Flex className={"w-[40%] items-center"}>
              <ImCross
                className="mr-[40px]"
                onClick={() => handleRemove(index)}
              />
              <Img src={product.thumbnail} className={"w-[100px] h-[100px]"} />
              <h5 className="ml-5 font-bold">{product.title}</h5>
            </Flex>

            <h5 className="font-bold text-[20px] w-[20%]">
              $
              {Math.ceil(
                product.price -
                  (product.price * product.discountPercentage) / 100
              )}
            </h5>
            <div className="w-[20%]">
              <Flex className={"w-[139px] border border-[#F0F0F0] px-5 py-3"}>
                <button
                  className="pr-5 "
                  onClick={() => dispatch(updateCart({ id: product.id }))}
                  disabled={product.qun === 1 && true}
                >
                  <AiOutlineMinus />
                </button>
                <input
                  type="text"
                  value={product.qun}
                  className="w-[20px] outline-transparent"
                />
                <button
                  className="pl-5"
                  onClick={() =>
                    dispatch(updateCart({ id: product.id, type: "plus" }))
                  }
                >
                  <AiOutlinePlus />
                </button>
              </Flex>
            </div>
            <h5 className="font-bold text-[20px] w-[20%]">
              $
              {product.qun *
                Math.ceil(
                  product.price -
                    (product.price * product.discountPercentage) / 100
                )}
            </h5>
          </Flex>
          <Flex
            className={
              " w-[100%] py-8 px-5 items-center border-t border-[#F0F0F0] "
            }
          >
            <select
              name=""
              id=""
              className="text-base font-normal text-[#767676] w-[255px] px-5 py-3 outline-[#F0F0F0] border-t border-[#F0F0F0]"
            >
              {" "}
              <option value="">SIZE</option>
            </select>
            <input
              type="text"
              className="border border-[#F0F0F0] px-5 py-2 ml-8"
            />
            <button className="text-base font-bold text-[#262626] ml-[23px]">
              Apply coupon
            </button>
          </Flex>
        </Flex>
      ))}

      <div className="text-end">
        <h5 className="text-end text-[20px] font-bold text-[#262626] mb-6">
          Cart totals
        </h5>
        <Flex className={"w-[644px] ml-auto flex-wrap border border-[#F0F0F0]"}>
          <div className="w-1/2 px-5 py-3">Subtotal</div>
          <div className="w-1/2 border-l px-5 py-3">${total}</div>
          <div className="w-1/2 border-t border-[#F0F0F0] px-5 py-3">Total</div>
          <div className="w-1/2 border-t border-[#F0F0F0] border-l px-5 py-3">
          ${total}
          </div>
        </Flex>
        <Link
          to={"/checkout"}
          className="py-4 px-6 bg-black text-white font-bold text-[14px] inline-block mt-12"
        >
          Proceed to Checkout
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
