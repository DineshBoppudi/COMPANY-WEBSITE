import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";
import callsRoute from "./routes/calls.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", callsRoute);

app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.get("/test", async (req, res) => {
  const data = await pool.query(
    "SELECT * FROM calls"
  );

  res.json(data.rows);
});

const PORT = process.env.PORT || 5000;

/* const testDb = async () => {
  try {
    const result = await pool.query(
      "SELECT NOW()"
    );

    console.log(
      "Database Connected:",
      result.rows[0]
    );
  } catch (error) {
    console.error(error);
  }
};

testDb(); */

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});