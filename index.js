import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {decryptData} from "encrypted-binary-communications/protocol.js"
// import { decryptData } from "./protocol.js";

//express app
const app = express();

// middleware & static files
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const endPoints = process.env.ENDPOINTS.split(", ");
const secret = process.env.SECRET;
// initializeBackend(secret, endPoints);

// routes
app.get("/", function (req, res) {
  // res.send("hi");
  // res.sendFile(__dirname + "/index.html");
});

app.post("/", async (req, res) => {
  const {encryptedData, iv} = req.body;
  console.log("🔥  encryptedData: ", encryptedData);

  const text = await decryptData(encryptedData, iv);
  console.log("🔥  text: ", text);
  

  res.status(200).json({ message: "successfully getting the encrypted data" });
});

// listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
