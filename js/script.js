// مشخصات
const products = [
  {
    title: "هندزفری",
    price: "680,000",
    model: "EARPHONE WIRELESS STEREO TWS V5.3",
    imageSrc: "../img/hnf.webp"
  },
  {
    title: "لپتاپ",
    price: "70,000,000",
    model: "TUF Gaming F15 FX507ZC4-HN231-i7 12700H-16GB DDR4...",
    imageSrc: "../img/laptop.webp"
  },
  {
    title: "موبایل",
    price: "32,000,000",
    model: "ناتینگ Phone 2a Plus",
    imageSrc: "../img/mobile.webp"
  },
  {
    title: "ساعت هوشمند",
    price: "1,200,000",
    model: "ورنا W49 ultra with 7 Bands",
    imageSrc: "../img/w.webp"
  },
  {
    title: "کنسول بازی",
    price: "28,000,000",
    model: "Playstation 4 Slim",
    imageSrc: "../img/ps4.webp"
  },
  {
    title: "کنسول بازی",
    price: "52,000,000",
    model: "Playstation 5 Slim",
    imageSrc: "../img/ps5.webp"
  },
  {
    title: "دسته ی بازی",
    price: "4,950,000",
    model: "دسته ی بازی سونی DualSense",
    imageSrc: "../img/ps5d.webp"
  },
  {
    title: "کیس کامپیوتر",
    price: "8,700,000",
    model: "HA-4130 ALPHA حبیبان",
    imageSrc: "../img/ka.webp"
  },
  {
    title: "کیس کامپیوتر",
    price: "16,500,000",
    model: "تک زون مدل TZ3770A Plus",
    imageSrc: "../img/kk.webp"
  },
  {
    title: "کیس کامپیوتر",
    price: "36,000,000",
    model: "حبیبان XS-179 PRG REF",
    imageSrc: "../img/kg.webp"
  },
  {
    title: "all in one",
    price: "27,000,000",
    model: "ATOM S1",
    imageSrc: "../img/aio1.webp"
  },
  {
    title: "all in one",
    price: "48,000,000",
    model: "مستر تک ZN270-C58SB",
    imageSrc: "../img/aio2.webp"
  }
];

// تابع برای نمایش محصول
function showProduct(productIndex) {
  const product = products[productIndex];
  
 //ذخیره
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  
  // انتقال
  window.location.href = "html/1.html";
}

//وقتی صفحه باز شد
if (window.location.pathname.includes("1.html")) {
  //صدا زدن فانکشن
  document.addEventListener("DOMContentLoaded", function() {
      const productData = JSON.parse(localStorage.getItem('selectedProduct')); //ذخیره در حافظه
      
    //نمایش

      if (productData) {
          document.getElementById("title").textContent = productData.title;
          document.getElementById("image").src = productData.imageSrc;
          document.getElementById("price").innerHTML = `<b>قیمت:</b> ${productData.price} تومان`;
          document.getElementById("model").innerHTML = `<b>مدل:</b> ${productData.model}`;
      }
  });
}