import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "ULTRABOOST Shoes",
    description: "Premium running shoes with responsive Boost cushioning",
    price: 3299000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw773341ba/zoom/BA8842_01_standard.jpg?sh=512",
    category: "Running",
  },

  {
    id: 2,
    name: "adizero Primeknit LTD Shoes",
    description: "Elite racing shoes for maximum performance",
    price: 3899000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwf1eee240/zoom/BA7936_01_standard.jpg?sh=512",
    category: "Running",
  },
  {
    id: 3,
    name: "UltraBOOST Uncaged Parley Shoes",
    description: "Retro basketball-inspired casual shoes",
    price: 1799000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw53dbf54a/zoom/BY3057_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 4,
    name: "ULTRABOOST Uncaged Shoes",
    description: "Versatile daily training shoes with Boost cushioning",
    price: 2299000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwfcd88b62/zoom/BB4489_01_standard.jpg?sh=512",
    category: "Running",
  },
  {
    id: 5,
    name: "alphabounce Reigning Champ Shoes",
    description: "Timeless suede sneakers with vintage appeal",
    price: 1699000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw570ba0d1/zoom/CG4301_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 6,
    name: "PureBOOST LTD Shoes",
    description: "Classic tennis-inspired casual sneakers",
    price: 1599000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw175f2f64/zoom/S80703_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 7,
    name: "UltraBOOST Uncaged Shoes",
    description: "Classic tennis-inspired white leather sneakers",
    price: 1599000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwde095e27/zoom/S80689_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 8,
    name: "Distancestar Spikes",
    description: "Entry-level running shoes for daily use",
    price: 1299000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw0bebc679/zoom/BB5757_01_standard.jpg?sh=512",
    category: "Running",
  },
 
  {
    id: 9,
    name: "PureBOOST Xpose Clima Shoes",
    description: "Classic suede sneakers with timeless style",
    price: 1799000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwc6e9d979/zoom/BB1739_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 10,
    name: "RapidaRun Shoes",
    description: "Chunky retro-inspired lifestyle sneakers",
    price: 2099000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw2147ddd0/zoom/BA9433_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 11,
    name: "Marvel Spider-Man Shoes",
    description: "Classic handball shoes with street style",
    price: 1799000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw8eea856f/zoom/BA9406_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 12,
    name: "Star Wars Shoes",
    description: "Retro-inspired suede sneakers with modern comfort",
    price: 1699000,
    image: "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwadaf81df/zoom/BA9397_01_standard.jpg?sh=512",
    category: "Lifestyle",
  },
  {
    id: 13,
    name: "Adidas Cushioned Crew Socks (3 Pairs)",
    description: "Comfortable athletic socks with moisture-wicking technology",
    price: 199000,
    image: "https://www.adidas.co.id/media/catalog/product/h/t/ht1644_1_hardware_photography_side_center_view_grey.jpg",
    category: "Accessories",
  },
  {
    id: 14,
    name: "Adidas Premium Shoelaces",
    description: "Durable flat shoelaces for running and lifestyle shoes",
    price: 99000,
    image: "https://www.lacesmatched.co.uk/wp-content/uploads/2017/10/120-cm-white-shoelaces-3.png",
    category: "Accessories",
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
