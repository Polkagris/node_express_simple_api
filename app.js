const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = 3000;

const customers = [
  { firstName: "John", lastName: "Smith" },
  { firstName: "Harry", lastName: "Potter" },
  { firstName: "Jack", lastName: "Sparrow" },
];

app.get("/customerlist", (req, res) => {
  res.send(customers);
});

app.post("/customer", (req, res) => {
  console.log("req.body: ", req.body);
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.send("Customer added");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
