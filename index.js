import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { decryptData } from "encrypted-binary-communications/protocol.js";
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const endPoints = process.env.ENDPOINTS.split(", ");
const secret = process.env.SECRET;
// initializeBackend(secret, endPoints);

app.post("/", async (req, res) => {
  const { data, state } = req.body;
  console.log(`data: ${data}, state: ${state}`);

  // decrypt data according to the state
  if (state === 0) {
  } else if (state === 1) {
  } else if (state === 2) {
  } else if (state === 3) {
  } else {
  }
  // console.log("🔥  encryptedData: ", encryptedData);

  // const data = await decryptData(encryptedData, iv);
  // console.log("🔥  data: ", data);

  res.status(200).json({ message: `data: ${data}, state: ${state}` });
});

// listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
