import Image from "next/image";
import React from "react";
import { Clock, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <><section className="text-black body-font bg-[#FBEBB5]">
    <div className="container mx-auto flex px-5 py-16 lg:py-24 md:flex-row flex-row items-center">
      {/* Left Content */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-6 md:pr-4 flex flex-col md:items-center md:text-left mb-12 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-6 font-semibold text-gray-900 items-center">
          Rocket single <br />
          seater
        </h1>
       <div className="w-full flex justify-center items-center">
         <button className="inline-flex text-black py-2 focus:outline-none text-lg border-b border-black transition-all duration-200 ">
           Shop Now
         </button>
       </div>
      </div>

      {/* Right Image */}
      <div className="lg:max-w-lg md:w-1/2 w-full">
        <Image
          src="/images/Rocket_single _seater.png"
          alt="Rocket_single_seater"
          width={500}
          height={500}
        />
      </div>
    </div>
  </section>


      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto bg-[#FAFAFA] p-5 md:p-10 gap-8 font-poppins">
        {/* Product 1 */}
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/images/Granite_square.png"
            alt="Granite_square"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-3xl md:text-4xl font-medium text-black">
            Side Table
          </p>
          <button className="inline-flex text-black py-2 focus:outline-none text-lg border-b-2 border-black">
            View More
          </button>
        </div>

        {/* Product 2 */}
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/images/Cloud_sofa.png"
            alt="Cloud_sofa"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-3xl md:text-4xl font-medium text-black">
            Side Table
          </p>
          <button className="inline-flex text-black py-2 focus:outline-none text-lg border-b-2 border-black">
            View More
          </button>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="w-full h-auto flex justify-center items-center mt-16">
        <div className="w-full md:w-[80%]">
          <span className="flex justify-center text-4xl pb-5 font-bold">
            Top Picks For You
          </span>
          <h3 className="text-[#9F9F9F] text-center">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </h3>

          {/* Featured Product Boxes */}
          <div className="flex flex-wrap justify-center md:justify-between my-24 gap-6">
            {[
              {
                image: "/images/tpfu1.png",
                title: "Trenton modular sofa_3",
                price: "Rs. 25,000.00",
              },
              {
                image: "/images/tpfu2.png",
                title: "Granite dining table with dining chair",
                price: "Rs. 25,000.00",
              },
              {
                image: "/images/tpfu3.png",
                title: "Outdoor bar table and stool",
                price: "Rs. 25,000.00",
              },
              {
                image: "/images/tpfu4.png",
                title: "Plain console with teak mirror",
                price: "Rs. 25,000.00",
              },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-start w-[250px]">
                <div className="w-full h-[200px] flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mt-4 w-full">
                  <span className="font-normal text-left block">
                    {product.title}
                  </span>
                  <span
                    className={`font-bold text-black text-left block mt-2 ${
                      product.price.length > 10 ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex items-center justify-center mt-6">
            <button className="inline-flex text-black py-2 focus:outline-none text-lg border-b-2 border-black">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="text-black  bg-yellow-100 my-32">
                    <div className="container  h-[360px] mx-auto flex px-5 lg:py-24 md:flex-row flex-col items-center ">
                        <div className="lg:max-w-lg md:w-1/2 ">
                            <Image src="/images/Asgaard_sofa.png"
                                alt="Asgaard_sofa"
                                width={500}
                                height={500} />

                        </div>


                        {/* Right Content */}
                        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8  md:items-start md:text-left md:mb-0 px-32">
                            <h5 className="font-medium ">New Arrivals</h5>
                            <h1 className="title-font sm:text-5xl text-3xl mb-6 font-bold text-black">
                                Asgaard sofa
                            </h1>
                            <div className="flex justify-center md:justify-start">
                                <button className="inline-flex text-black py-1 px-20 focus:outline-none text-lg border border-black transition-all duration-200 ">
                                    Other Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


      {/* Blog Section */}
      <div className="text-center mb-10 font-poppins">
        <span className="text-4xl pb-5 font-bold">Our Blogs</span>
        <h3 className="mt-5 text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection
        </h3>
      </div>

      <section className="text-gray-400 body-font font-poppins">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                image: "/images/blog_1.png",
                title: "Going all-in with millennial design",
                time: "5 min",
                date: <>12<sup>th</sup> Oct 2022</>,
              },
              {
                image: "/images/blog_2.png",
                title: "Going all-in with millennial design",
                time: "5 min",
                date: <>12<sup>th</sup> Oct 2022</>,
              },
              {
                image: "/images/blog_3.png",
                title: "Going all-in with millennial design",
                time: "5 min",
                date: <>12<sup>th</sup> Oct 2022</>,
              },
            ].map((blog, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="h-full bg-opacity-75 px-8 py-2 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={300}
                  />
                  <p className="leading-relaxed mb-3 text-black" style={{ marginTop: 20 }}>
                    {blog.title}
                  </p>
                  <a className="text-black inline-flex items-center border-b-2 border-black font-medium py-2" style={{ fontWeight: "bold" }}>
                    Read More
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-14 gap-4">
                    <span className="text-black inline-flex items-center leading-none text-base">
                      <Clock /> {blog.time}
                    </span>
                    <span className="text-black inline-flex items-center leading-none text-base">
                      <Calendar /> {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="inline-flex text-black py-2 focus:outline-none text-lg border-b-2 border-black">
              View All Post
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="text-black font-poppins">
        <div
          className="bg-cover bg-center h-96"
          style={{ background: "url(/images/insta_bg.png)" }}
        >
          <div className="py-32 text-center">
            <span className="text-4xl font-bold">Our Instagram</span>
            <h3 className="mt-5 text-black">
              Follow our store on Instagram
            </h3>
            <br/>
           <button className="inline-flex text-black py-2 focus:outline-none rounded-full text-lg w-40 justify-center" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
             Follow Us
           </button>
          </div>
        </div>
      </section>
    </>
  );
}
