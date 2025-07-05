import type { Coffee } from "../types";

export const coffeeMenu: Coffee[] = [
  {
    id: 1,
    name: "Espresso",
    price: 2.5,
    image: "https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg",
    description: "Rich, full-bodied shot with a golden crema layer",
    rating: 4.8,
    category: "Classic",
  },
  {
    id: 2,
    name: "Caffe Latte",
    price: 4.2,
    image:
      "https://www.cafedumonde.co.uk/media/o3gkzmuy/iced-latte.png?width=540&height=540&v=1dac1797980aad0",
    description: "Smooth espresso with steamed milk and subtle foam art",
    rating: 4.7,
    category: "Milk Based",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 3.8,
    image:
      "https://media.istockphoto.com/id/1135765583/photo/ice-coffee-in-a-tall-glass-on-wooden-table-with-nature-background.jpg?s=612x612&w=0&k=20&c=dIZwOc2I4TySXTQWgurM8XBrB6iYLYvCdvzcAhBOGVE=",
    description: "Perfect balance of espresso, steamed milk, and foam",
    rating: 4.9,
    category: "Milk Based",
  },
  {
    id: 4,
    name: "Mocha Deluxe",
    price: 5.0,
    image:
      "https://130411265.cdn6.editmysite.com/uploads/1/3/0/4/130411265/36KX2QVMAEVHNHZ2TBFCQNQN.jpeg",
    description: "Decadent blend of espresso, chocolate, and whipped cream",
    rating: 4.6,
    category: "Milk Based",
  },
  {
    id: 5,
    name: "Americano",
    price: 3.0,
    image:
      "https://images.ctfassets.net/v601h1fyjgba/1vlXSpBbgUo9yLzh71tnOT/a1afdbe54a383d064576b5e628035f04/Iced_Americano.jpg",
    description: "Bold espresso diluted with hot water for a clean taste",
    rating: 4.5,
    category: "Classic",
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    price: 4.8,
    image:
      "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
    description: "Vanilla-flavored drink marked with espresso and caramel",
    rating: 4.8,
    category: "Milk Based",
  },
  {
    id: 7,
    name: "Black Coffee (Drip/Filter)",
    price: 2.0,
    image:
      "https://kalitausa.com/cdn/shop/products/102dblk4_90ff6d0b-230e-4a81-9016-0e276ad6fa55.jpg?v=1668478989&width=1445",
    description: "Smooth and balanced cup brewed by slow filtration",
    rating: 4.8,
    category: "Classic",
  },
  {
    id: 8,
    name: "Long Black",
    price: 2.5,
    image:
      "https://ringtons-business.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/04/29113730/long-black-feature.jpg",
    description:
      "Espresso gently poured over hot water, for a strong yet smooth flavor",
    rating: 4.8,
    category: "Classic",
  },
  {
    id: 9,
    name: "Turkish Coffee",
    price: 2.8,
    image:
      "https://colombiancoffee.us/cdn/shop/articles/turkish-coffee-a-distinction-of-the-people-of-turkey-209132.png?v=1713377577&width=1500",
    description:
      "Finely ground coffee brewed unfiltered for a rich and foamy experience",
    rating: 4.8,
    category: "Classic",
  },
  {
    id: 10,
    name: "Vietnamese Black Coffee",
    price: 2.5,
    image:
      "https://static.wixstatic.com/media/746053_d836c9be5c3445608f089b03a08018c9~mv2.png",
    description:
      "Robust Vietnamese coffee served black, typically made with a metal filter",
    rating: 4.8,
    category: "Classic",
  },
  {
    id: 11,
    name: "Flat White",
    price: 3.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xbCiNF6ZrqTbhQ_KI7qllHQGSW5rvYYKpg&s",
    description:
      "Velvety espresso with a thin layer of steamed micro-foam milk",
    rating: 4.8,
    category: "Milk Based",
  },
  {
    id: 12,
    name: "Café au Lait",
    price: 2.8,
    image:
      "https://www.homegrounds.co/wp-content/uploads/2023/03/cafe-au-lait-.jpeg",
    description:
      "Freshly brewed coffee mixed with steamed milk for a mellow flavor",
    rating: 4.8,
    category: "Milk Based",
  },
  {
    id: 13,
    name: "Piccolo Latte",
    price: 2.7,
    image:
      "https://134258802.cdn6.editmysite.com/uploads/1/3/4/2/134258802/Z3KLOPCJINWUJT5DDXN4CLR5.png",
    description:
      "Mini latte: espresso topped with steamed milk in a small glass",
    rating: 4.8,
    category: "Milk Based",
  },
  {
    id: 14,
    name: "Iced Coffee with Milk",
    price: 3.0,
    image: "https://i.insider.com/60f1fb537b0ec5001800a9bd?width=700",
    description:
      "Chilled coffee poured over ice and fresh milk for a smooth, cold treat",
    rating: 4.8,
    category: "Milk Based",
  },
  {
    id: 15,
    name: "Cold Brew (black or with milk)",
    price: 3.5,
    image:
      "https://weaverscoffee.com/cdn/shop/articles/Cold_brew_coffee_with_milk_pouring_into_an_angled_glass_73d688a7-5d7b-456b-9551-9fcd93ce2ec9_1000x.jpg?v=1692737852",
    description:
      "Coffee steeped in cold water for hours, served over ice for a smooth taste",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 16,
    name: "Nitro Cold Brew",
    price: 4.0,
    image:
      "https://i0.wp.com/melscoffeetravels.com/wp-content/uploads/2023/10/IMG_1565-scaled.jpg?fit=2560%2C1706&ssl=1",
    description:
      "Cold brew coffee infused with nitrogen, giving it a creamy, frothy texture",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 17,
    name: "Frappuccino / Frappe (blended)",
    price: 4.0,
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/3/27/chocolate-frappuccino.jpg.rend.hgtvcom.1280.960.85.suffix/1679946919979.webp",
    description:
      "Sweet, icy blend of coffee, milk, and flavorings, topped with whipped cream",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 18,
    name: "Dalgona Coffee",
    price: 3.5,
    image:
      "https://www.allrecipes.com/thmb/h-7bycWXL14WfYdhJMOxzU9dFRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7973110_Dalgona-Coffee-Whipped-Coffee-4x3-1-2000-2fc605df47da42aba08d72d5c62e4408.jpg",
    description: "Fluffy whipped coffee layered over cold or hot milk",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 19,
    name: "Vietnamese Iced Coffee (Cà Phê Sữa Đá)",
    price: 3.2,
    image:
      "https://asianinspirations.com.au/wp-content/uploads/2018/12/R01583_Vietnamese_Iced_Coffee.jpg",
    description:
      "Strong drip coffee over ice, sweetened with creamy condensed milk",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 20,
    name: "Irish Coffee (with whiskey)",
    price: 4.5,
    image: "https://surleplat.com/wp-content/uploads/2020/12/IMG_7084.jpg",
    description:
      "Hot coffee, Irish whiskey, sugar, and topped with thick cream",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 21,
    name: "Flavored Latte (vanilla, caramel, hazelnut, etc.)",
    price: 3.3,
    image:
      "https://137699105.cdn6.editmysite.com/uploads/1/3/7/6/137699105/YEGBFTQRGAI4RI3B36GAJ4A5.jpeg",
    description:
      "Espresso and steamed milk blended with your choice of syrup flavor",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 22,
    name: "Affogato (could be classic or specialty)",
    price: 3.8,
    image:
      "https://www.siamhillscoffee.com/wp-content/uploads/What-is-an-Affogato-%E2%80%93-A-Complete-Guide-%E2%80%93-1-scaled.jpg",
    description: "Rich espresso poured over cold vanilla ice cream",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 23,
    name: "Matcha Latte / Chai Latte",
    price: 3.2,
    image:
      "https://blog.piquelife.com/wp-content/uploads/2021/05/Matcha-Chai-Latte--500x500.png",
    description: "Steamed milk with whisked matcha green tea or spiced chai",
    rating: 4.8,
    category: "Specialty",
  },
  {
    id: 24,
    name: "Signature/Seasonal Drinks (e.g., Pumpkin Spice Latte)",
    price: 3.5,
    image:
      "https://www.seriouseats.com/thmb/xKOYuOixlIHwPzmUMntCKAMWuPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230824-SEA-PumpkinSpiceLatte-AmandaSuarez-hero4-2c82da40f94445a7abdf32033e877eff.jpg",
    description:
      "Limited-time espresso drinks with unique flavors and seasonal spices",
    rating: 4.8,
    category: "Specialty",
  },
];

export const categories = ["All", "Classic", "Milk Based", "Specialty"];
