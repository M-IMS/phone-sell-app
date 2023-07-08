const ProductArray = [
  {
    id: "1",
    title: "iphone 14",
    rom: "128GB",
    color: "red",
    price: 800,
  },
  {
    id: "2",
    title: "iphone 14 plus",
    rom: "128GB",
    color: "red",
    price: 900,
  },
  {
    id: "3",
    title: "iphone 14 pro",
    rom: "128GB",
    color: "red",
    price: 1000,
  },
  {
    id: "4",
    title: "iphone 14 pro max",
    rom: "128GB",
    color: "red",
    price: 1200,
  },
  {
    id: "5",
    title: "iphone SE (3rd Gen)",
    rom: "128GB",
    color: "red",
    price: 600,
  },
];

// function getProductData(id) {
//   let ProductData = ProductArray.find((product) => product.id === id);

//   if (ProductData === undefined) {
//     console.log("Product data dose not exist for ID: " + id);
//     return undefined;
//   }

//   return { ProductData, getProductData };
// }

export { ProductArray };
