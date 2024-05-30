const Product = require("../module/product");

exports.Add_books = (req, res, next) => {
  console.log("this is add book page");
  res.render("add-books.pug");
};

exports.addedBooks = (req, res, next) => {
  console.log("this is added page list");
  const productss = new Product(
    req.body.title,
    req.body.srcc,
    req.body.price,
    req.body.idd
  );
  productss.save();
  console.log(productss);
  res.redirect("/book-lists");
};

exports.adminbooklists = (req, res, next) => {
  console.log("this is products list");
  Product.fetchAll((products) => {
    res.render("admin-list.pug", {
      prods: products,
      docTitle: "admin book list page",
      path: "/admin/adminbooklists",
    });
  });
};
