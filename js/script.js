const description = "We need a new floor";
const squareMeter = 100;
const floorOption = ["carpet", "hood", "titles"];
const renovationJob = {
  ownerName: "John",
  maximumPrice: 8000,
  category: "bathroam",
  newShower: true,
};
const error = {
  statusCode: 404,
  description: "Server Error",
  retry: true,
};
// console.log(error.statusCode);
// traditional functions vs arrow  functions
function calculatePrice() {
  const price = 1000 + 3000;
  console.log(price);
}
// invoke or call the function
calculatePrice();
