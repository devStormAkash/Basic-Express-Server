require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
let appData = {
  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 28,
      address: {
        street: "123 Maple Street",
        city: "Springfield",
        zip: "62704",
      },
      orders: [
        {
          orderId: "A1001",
          item: "Laptop",
          amount: 1299.99,
          date: "2025-05-01",
        },
        {
          orderId: "A1002",
          item: "Mouse",
          amount: 25.5,
          date: "2025-05-03",
        },
      ],
      preferences: {
        newsletter: true,
        language: "en",
      },
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      age: 35,
      address: {
        street: "456 Oak Avenue",
        city: "Centerville",
        zip: "45459",
      },
      orders: [
        {
          orderId: "B2001",
          item: "Smartphone",
          amount: 799.99,
          date: "2025-05-02",
        },
      ],
      preferences: {
        newsletter: false,
        language: "fr",
      },
    },
    {
      id: 3,
      name: "Charlie Lee",
      email: "charlie.lee@example.com",
      age: 22,
      address: {
        street: "789 Pine Lane",
        city: "Lakeside",
        zip: "92040",
      },
      orders: [],
      preferences: {
        newsletter: true,
        language: "zh",
      },
    },
    {
      id: 4,
      name: "Dana White",
      email: "dana.white@example.com",
      age: 41,
      address: {
        street: "321 Cedar Road",
        city: "Hill Valley",
        zip: "90210",
      },
      orders: [
        {
          orderId: "D4001",
          item: "Tablet",
          amount: 499.0,
          date: "2025-04-25",
        },
        {
          orderId: "D4002",
          item: "Keyboard",
          amount: 45.99,
          date: "2025-04-26",
        },
        {
          orderId: "D4003",
          item: "Monitor",
          amount: 199.99,
          date: "2025-04-27",
        },
      ],
      preferences: {
        newsletter: false,
        language: "de",
      },
    },
    {
      id: 5,
      name: "Ethan Kim",
      email: "ethan.kim@example.com",
      age: 30,
      address: {
        street: "654 Birch Boulevard",
        city: "Metropolis",
        zip: "10001",
      },
      orders: [
        {
          orderId: "E5001",
          item: "Camera",
          amount: 350.75,
          date: "2025-05-10",
        },
      ],
      preferences: {
        newsletter: true,
        language: "ko",
      },
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1> LogIn to Access content</h1>");
});

app.get("/akash", (req, res) => {
  res.send("Hello from Akash");
});

app.get("/dummyData", (req, res) => {
  res.json(appData);
});
app.listen(process.env.PORT, hostname, () => {
  console.log(
    `Example app listening on port http://${hostname}:${process.env.PORT}`
  );
});
