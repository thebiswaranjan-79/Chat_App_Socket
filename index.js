const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000; // Use PORT from environment variables or default to 3000

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
});