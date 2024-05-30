const Product = require("../module/product");

exports.getHomepage = (req, res, next) => {
  console.log("this is home page");
  res.render("home.pug", { doctitle: "Book Shop" });
};

exports.bookLists = (req, res, next) => {
  console.log("this is products list");
  Product.fetchAll((products) => {
    res.render("book-lists.pug", {
      prods: products,
      docTitle: " book list page",
      path: "/book-list",
    });
  });
};

exports.cartbox = (req, res, next) => {
  console.log("this is cart page");
  res.render("cart.pug", {
    doctitle: "Your Cart",
    prods: product.fetchAll(),
  });
};

exports.orders = (req, res, next) => {
  console.log("this is orders page");
  res.render("orderpage.pug", {
    doctitle: "Your order",
    prods: product.fetchAll(),
  });
};

exports.checkout = (req, res, next) => {
  console.log("this is checkout page");
  res.render("checkout.pug", {
    doctitle: "thank you for your business",
    prods: product.fetchAll(),
  });
};
