/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcumb from "../components/layouts/Breadcumb";
import { useSelector } from "react-redux";
import Flex from "../components/layouts/Flex";
import Input from "../components/layouts/Input";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  let [total, setTotal] = useState(0);
  let [subTotal, setSubTotal] = useState(0);
  const [couponShow, setCouponShow] = useState(false);
  const [inputValues, setInputValues] = useState({
fName: "",
lName: "",
country: "",
address: "",
city: "",
phone: "", 
email: ""
  });
  const [error, setError] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    city: "",
    phone: "", 
    email: ""
      });

  const handleInputValues = (e) => {
    const {name, value} = e.target
    setInputValues ({...inputValues,[name]:value})
    setError ({...error, [name]: ""})
    
  };
  const handleSubmit = () => {
    // if(fName){
    //   setError("")
    // }else{
    //   setError("nam den nai")
    // }
    if(!inputValues.fName){
      setError({fName: "nam daw nai"})
    }
    if(!inputValues.lName){
      setError((preValue)=>({...preValue, lName: "last name daw nai"}))
    }
    if(!inputValues.country){
      setError((preValue)=>({...preValue, country: "country name daw nai"}))
    }
    if(!inputValues.address){
      setError((preValue)=>({...preValue, address: "address daw nai"}))
    }
    if(!inputValues.city){
      setError((preValue)=>({...preValue, city: "city name daw nai"}))
    }
    if(!inputValues.phone){
      setError((preValue)=>({...preValue, phone: "phone no daw nai"}))
    }
    if(!inputValues.email){
      setError((preValue)=>({...preValue, email: "email no daw nai"}))
    }
  };

  useEffect(() => {
    let temTotal = 0;
    let temSubTotal = 0;
    cartData.map((product) => {
      temSubTotal += Math.ceil(product.qun * product.price);
      temTotal +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
    });
    setTotal(temTotal);
    setSubTotal(temSubTotal);
  }, [cartData]);
  return (
    <section>
      <Container>
        <Breadcumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <div className="py-[120px]">
          Have a coupon?{" "}
          <span
            className="font-bold"
            onClick={() => setCouponShow(!couponShow)}
          >
            Click here to enter your code
          </span>
          {couponShow && (
            <form action="">
              <input
                type="text"
                className="w-[255px] border border-[#f0f0f0] px-5 py-3 outline-[#f0f0f0]"
              />
              <button className="font-bold ml-6">Apply Coupon</button>
            </form>
          )}
        </div>
        <h2 className="font-bold text-[39px] py-[42px]">Billing Details</h2>
        <Flex className={"w-[1055px] flex-col"}>
          <Flex className={"gap-x-[40px]"}>
            <div>
            <Input
              placeholder={"First Name"}
              label={"First Name *"}
              value={inputValues.fName}
              onChange={handleInputValues}
              labelClassName={"font-bold text-[16px] "}
              className={"w-[508px]"}
              inputClassName={
                "w-full outline-transparent border-b border-[#f0f0f0] py-4"
              }
              type={"text"}
              name={"fName"}
            />
           <p className="text-red-500">{error.fName}</p>
            </div>
            <div>
            <Input
              placeholder={"Last Name"}
              label={"Last Name *"}
              labelClassName={"font-bold text-[16px] "}
              className={"w-[508px]"}
              inputClassName={
                "w-full outline-transparent border-b border-[#f0f0f0] py-4"
              }
              type={"text"}
              value={inputValues.lName}
              onChange={handleInputValues}
              name={"lName"}
            />
            <p className="text-red-500">{error.lName}</p>
            </div>
          </Flex>
          <Input
            placeholder={"Company Name"}
            label={"Company Name (optional)"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
          />
          <div>
            <label htmlFor="" className="block font-bold text-[16px]">
              {" "}
              Country
            </label>
            <select
              name="country"
              id=""
              className="w-full outline-transparent border-b border-[#f0f0f0] py-4"
              value={inputValues.country}
              onChange={handleInputValues}
            >
              <option value="" className="">
                Please select
              </option>
            </select>
            <p className="text-red-500">{error.country}</p>
          </div>
         <div>
         <Input
            placeholder={"House number and street name"}
            label={"Street Address *"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
            value={inputValues.address}
              onChange={handleInputValues}
              name={"address"}
          />
          {/* <p className="text-red-500">{error.address}</p> */}
         </div>
          <Input
            placeholder={"Apartment, suite, unit etc. (optional)"}
            label={""}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
          />

         <div>
         <Input
            placeholder={"Town/City"}
            label={"Town/City *"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
            value={inputValues.city}
              onChange={handleInputValues}
              name={"city"}
          />
          <p className="text-red-500">{error.city}</p>
         </div>
          <Input
            placeholder={"County"}
            label={"County (optional)"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
          />
          <Input
            placeholder={"Post Code"}
            label={"County (optional)"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
          />
          <div>
          <Input
            placeholder={"Phone"}
            label={"Phone *"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
            value={inputValues.phone}
              onChange={handleInputValues}
              name={"phone"}
          />
          <p className="text-red-500">{error.phone}</p>
          </div>
          <div>
          <Input
            placeholder={"Email"}
            label={"Email Address *"}
            labelClassName={"font-bold text-[16px] "}
            className={"mt-6"}
            inputClassName={
              "w-full outline-transparent border-b border-[#f0f0f0] py-4"
            }
            type={"text"}
            value={inputValues.email}
              onChange={handleInputValues}
              name={"email"}
          />
          <p className="text-red-500">{error.email}</p>
          </div>
          <h3 className="text-[39px] font-bold mt-[129px]">
            Additional Information
          </h3>
          <label htmlFor="" className="text-[16px] font-bold mt-[42px]">
            Other Notes (optional)
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full h-[138px] resize-none border-b-[2px] border-[#f0f0f0]"
          ></textarea>
          <h4 className="text-[39px] font-bold mt-[129px] mb-[65px]">
            Your Order
          </h4>
          <Flex className={"w-[644px]  flex-wrap border border-[#F0F0F0]"}>
            <div className="w-1/2 px-5 py-3">Product</div>
            <div className="w-1/2 border-l px-5 py-3">Total</div>
            {cartData.map((product) => (
              <>
                <div className="w-1/2 border-t border-[#F0F0F0] px-5 py-3">
                  {product.title} x {product.qun}
                </div>
                <div className="w-1/2 border-t border-[#F0F0F0] border-l px-5 py-3">
                  ${Math.ceil(product.qun * product.price)}
                </div>
              </>
            ))}
            <div className="w-1/2 border-t border-[#F0F0F0] px-5 py-3">
              Subtotal
            </div>
            <div className="w-1/2 border-t border-[#F0F0F0] border-l px-5 py-3">
              ${subTotal}
            </div>
            <div className="w-1/2 border-t border-[#F0F0F0] px-5 py-3">
              Total
            </div>
            <div className="w-1/2 border-t border-[#F0F0F0] border-l px-5 py-3">
              ${total}
            </div>
          </Flex>
          <div>
            <input
              type="radio"
              className="mr-2 mt-[84px]"
              name="payment"
              checked
            />
            <label htmlFor="">Bank</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <div>
            <input type="radio" className="mr-2 mt-[26px]" name="payment" />
            <label htmlFor="">Bank</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <h5 className="font-normal text-[#767676] mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </h5>
        </Flex>
        <button className="py-4 px-6 bg-black text-white font-bold text-[14px] inline-block mt-12 mb-40" onClick={handleSubmit}>
          Proceed to Checkout
        </button>
      </Container>
    </section>
  );
};

export default Checkout;
