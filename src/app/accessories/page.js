import ProductCard from "@/components/ProductCard";
import React from "react";

const accessories = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProductCard
            imageUrl="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
            productName="Nike Air MX Super 2500 - Red"
            price="$449"
            discountPrice="$699"
          />
          <ProductCard
            imageUrl="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
            productName="Nike Air MX Super 2500 - Red"
            price="$449"
            discountPrice="$699"
          />
          {/* Add more ProductCard components here with different data */}
        </div>
      </div>
    </section>
  );
};

export default accessories;
