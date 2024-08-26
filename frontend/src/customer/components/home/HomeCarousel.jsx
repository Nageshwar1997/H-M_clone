import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const HomeCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Floral Print Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/86/de/86de3bb0875b5f323850d945e75940057bc2b95b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      price: 1499,
    },
    {
      id: 2,
      name: "Casual Long Sleeve Top",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/f2/2c/f22cd660e24f9d0c11b27fcb771730b4a8bfde03.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      price: 1299,
    },
    {
      id: 3,
      name: "Elegant Satin Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/e6/11/e6110f447538467b9eb47697c5344573fa11ea84.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      price: 1999,
    },
    {
      id: 4,
      name: "Striped Cotton Shirt",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/6b/7f/6b7f3f99700b8f9b7e52c83bdfbbfff6efdc806a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      price: 1799,
    },
    {
      id: 5,
      name: "Basic Short Sleeve Tee",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/55/ae/55ae2208af497c7344017d7bbfdb2b97e2f72305.jpg],origin[dam],category[ladies_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 999,
    },
    {
      id: 6,
      name: "Casual V-Neck Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/2b/f3/2bf33ede90d4caaf9add3d51da97af069aeb425b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1499,
    },
    {
      id: 7,
      name: "Polka Dot Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/1f/b8/1fb8f54c26ffd6801086633d24cf7a0c169f6a1b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1899,
    },
    {
      id: 8,
      name: "Elegant Puff Sleeve Top",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/35/b6/35b6ae682c4ff3be15c34f63d52c13efd3e853d3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 2099,
    },
    {
      id: 9,
      name: "Cardigan with Front Buttons",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/aa/aa/aaaaf8d83d8742a6b8c42b8b5b23cdd170847410.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1599,
    },
    {
      id: 10,
      name: "Lightweight Sweater",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/f2/0c/f20c4b328fb2df00c5c95053e61f6c5bcbe8b71c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1699,
    },
    {
      id: 11,
      name: "Oversized Hoodie",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/2f/ae/2fae3567112686200b0f3e359946c7ef88ed3e35.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1899,
    },
    {
      id: 12,
      name: "Ribbed Long Sleeve Top",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/84/0a/840ad2b23595186093c25468150f69322efbbdc0.jpg],origin[dam],category[ladies_basics_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1399,
    },
    {
      id: 13,
      name: "Printed Long Sleeve Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/f2/2c/f22cd660e24f9d0c11b27fcb771730b4a8bfde03.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1299,
    },
    {
      id: 14,
      name: "Classic Long Sleeve Shirt",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/f2/2c/f22cd660e24f9d0c11b27fcb771730b4a8bfde03.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1699,
    },
    {
      id: 15,
      name: "Silk Blouse",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/e6/11/e6110f447538467b9eb47697c5344573fa11ea84.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 2999,
    },
    {
      id: 16,
      name: "Relaxed Fit Shirt",
      url: "https://lp2.hm.com/hmgoepprod?set=source[/6b/7f/6b7f3f99700b8f9b7e52c83bdfbbfff6efdc806a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
      price: 1499,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 3,
    slidesToShow: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg py-4">
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div
              key={index}
              className="px-2 transform hover:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <div className="bg-white dark:bg-darkBackground rounded-lg shadow-lg overflow-hidden h-[260px] md:h-[300px]">
                {/* Image Container */}
                <div className="h-3/5 flex justify-center items-center p-2 bg-gray-100 dark:bg-gray-700">
                  <img
                    src={product.url}
                    alt={product.name}
                    className="h-full w-auto object-contain rounded-md"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center py-2 mt-2 px-1">
                  <p className="text-sm lg:text-base text-gray-800 dark:text-darkText line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-sm md:text-lg text-gray-800 dark:text-darkText font-semibold">
                    Rs. {product.price}
                  </p>

                  {/* Rating Dots */}
                  <div className="flex justify-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
