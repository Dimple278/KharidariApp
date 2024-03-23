"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartsSlice";

const ProductCard = ({ imageUrl, productName, price, discountPrice }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ imageUrl, productName, price, discountPrice }));
    console.log("added to cart success");
    setShowAlert(true);
  };
  return (
    <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={imageUrl}
          alt="product image"
          width={500}
          height={500}
        />
        <Image
          className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
          src={imageUrl}
          alt="product image"
          width={500}
          height={500}
        />
        <svg
          className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl tracking-tight text-white">{productName}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-white">{price}</span>
            {discountPrice && (
              <span className="text-sm text-white line-through">
                {discountPrice}
              </span>
            )}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Add to cart
        </button>
      </div>
      {showAlert && (
        <div
          id="alert-3"
          className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
            Added to cart sucessfully!{" "}
            <a href="#" className="font-semibold underline hover:no-underline">
              View cart
            </a>
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-3"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
