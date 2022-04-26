import express from "express";

//PORT number to run the application
const PORT = 2000;
//creating express sever
const app = express();
//to parse to JSON
app.use(express.json());

//get data for sample test /
app.get("/", (req, res) => {
  res.send("😍😍😍Welcome to Hall Booking  page😍😍😍");
});
const createRoom  = [
    {
      "noOfSeats": 1000,
      "facilities": [
        "AC",
        "projector"
      ],
      "pricePerHour": 3000
    },
    {
      "noOfSeats": 100,
      "facilities": [
        "Fan"
      ],
      "pricePerHour": 300
    },
    {
      "noOfSeats": 500,
      "facilities": [
        "AC",
        "projector"
      ],
      "pricePerHour": 200
    },
    {
      "noOfSeats": 100,
      "facilities": [
        "AC",
        "projector",
        "tv"
      ],
      "pricePerHour": 5000
    }
  ];
app.post("/createRoom", (req, res) => {
  const newRoom = req.body;

  res.send(createRoom);
});
//book room
app.post("/bookRoom", (req, res) => {
  const newBooking = req.body;
  res.send(newBooking);
});


//lisstening to PORT
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting", error);
  } else {
    //Server runs on PORT 6000
    console.log(`Server is running on port ${PORT}`);
  }
});
