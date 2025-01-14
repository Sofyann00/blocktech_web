import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Stripped orange shorts t-shirt",
    description: "Premium shorts t-shirt",
    price: 3299000,
    image: "https://thumbs.dreamstime.com/b/stripped-orange-short-sleeve-t-shirt-isolated-onj-white-polo-single-object-bright-male-apparel-child-s-clothes-sport-wear-331708652.jpg",
    category: "clothing",
  },

  {
    id: 2,
    name: "Single t-shirt",
    description: "T-shirt for a single person",
    price: 3899000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0Oz-01t2ptWE0slLFr-_hbp_weiwLgZ8dw&s",
    category: "clothing",
  },
  {
    id: 3,
    name: "Black T-shirt",
    description: "Premium Black T-shirt",
    price: 1799000,
    image: "https://www.bodypack.com/_next/image?url=https%3A%2F%2Fd1vp26mg4j2cub.cloudfront.net%2Fimages%2Fproductdetail%2F3ab3ef6cb35eda52046891c3e7dab3bfa76df10e.jpg&w=3840&q=100",
    category: "clothing",
  },
  {
    id: 4,
    name: "Blue T-shirt",
    description: "Premium Blue T-shirt",
    price: 2299000,
    image: "https://theproduct.no/cdn/shop/products/PM2005_NAVY.jpg?v=1724675582",
    category: "clothing",
  },
  {
    id: 5,
    name: "White cotton t-shirt",
    description: "Premium White cotton t-shirt",
    price: 1699000,
    image: "https://www.inkfactory.pk/wp-content/uploads/2019/08/T-Shirt-Mockup-0016-600x600.jpg",
    category: "clothing",
  },
  {
    id: 6,
    name: "Carhartt WIP x INVINCIBLE",
    description: "Carhartt WIP x INVINCIBLE S/S Madison Duck T-Shirt",
    price: 1599000,
    image: "https://www.invincible.id/cdn/shop/files/CW49-Invincible_Product-Post-53.jpg?v=1733458232&width=1500",
    category: "clothing",
  },
  {
    id: 7,
    name: "Men white t-shirt",
    description: "Premium Men white t-shirt",
    price: 1599000,
    image: "https://www.allsaints.com/dw/image/v2/BHHD_PRD/on/demandware.static/-/Sites-allsaints-us-master-catalog/default/dwccc78f70/images/large/M002PC/7266/M002PC-7266-2.jpg?sw=480&sh=600&sm=fit&q=70",
    category: "Lifestyle",
  },
  {
    id: 8,
    name: "Bob marley t-shirt",
    description: "Bob marley t-shirt",
    price: 1299000,
    image: "https://shop.bobmarley.com/cdn/shop/files/PRODUCT_BOBM_24_ECOMM_DB_ONELOVE_1.png?v=1712170779&width=1000",
    category: "clothing",
  },
 
  {
    id: 9,
    name: "Slipknot 25th Anniversary",
    description: "25th Anniversary Album Cover T-Shirt",
    price: 1799000,
    image: "https://slipknotmerch.com/cdn/shop/files/Album-Cover-Tee_0008_PRODUCT_SLIP_24_RETAIL_BL_TAPESTRYCOVER_5_FR.png?v=1718988883",
    category: "clothing",
  },
  {
    id: 10,
    name: "Vintage Black Toughknit",
    description: "Vintage Black Toughknit 90s Boxy Tee",
    price: 2099000,
    image: "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM11202.870VTB_FADED-BLACK-TOUGH-KNIT-90S-BOXY-TEE_300x.jpg?v=1698072169",
    category: "clothing",
  },
  {
    id: 11,
    name: "Laminated White Heart",
    description: "Laminated White Heart T-Shirt Black Women",
    price: 1799000,
    image: "https://images.voila.id/pr:sharp/rs:fit:2048:0/plain/https%3A%2F%2Fassets.voila.id%2Fvoila%2Fimages%2Fproduct%2Fcomme-des-garcons%2F2product-P1T115-BLACK-Xms-2024-05-03T1614430700.jpeg@webp",
    category: "women",
  },
  {
    id: 12,
    name: "Product of a Strong Woman T-Shirt",
    description: "Product of a Strong Woman T-Shirt | Feminist T-Shirt | Women's Empower",
    price: 1699000,
    image: "https://cantonboxco.com/cdn/shop/products/ProductofaStrongWoman-WebTS-sw_1024x1024.jpg?v=1629463017",
    category: "women",
  },
  {
    id: 13,
    name: "Women Orange Printed T-Shirts",
    description: "Women Orange Printed T-Shirts",
    price: 199000,
    image: "https://imagescdn.thecollective.in/img/app/product/9/911539-11277385.jpg?w=500&auto=format",
    category: "women",
  },
  {
    id: 14,
    name: "New Balance Iconic Collegiate Jersey Oversized",
    description: "Jual New Balance Iconic Collegiate Jersey Oversized womens",
    price: 99000,
    image: "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/8/0888-NEWWT41519SR0PK0XS-1.jpg",
    category: "women",
  },
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
