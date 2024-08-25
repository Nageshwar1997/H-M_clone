import React, { useState } from "react";

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
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 6; // Number of items to show at once

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? Math.ceil(products.length / itemsToShow) - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide =
        currentIndex >= Math.ceil(products.length / itemsToShow) - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return (
      <div className="relative w-full mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full flex-shrink-0 p-2 sm:p-4"
                style={{ width: `calc(100% / ${itemsToShow})` }}
              >
                <img
                  src={product.url}
                  alt={product.name}
                  className="h-64 w-full object-cover rounded-lg"
                />
                <h5 className="mt-2 text-lg font-semibold">{product.name}</h5>
                <p className="text-gray-600">Rs. {product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-900"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-900"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map(
            (_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer block h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></span>
            )
          )}
        </div>
      </div>
    );
};

export default HomeCarousel;
