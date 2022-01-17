const exp = require("express"),
  cors = require("cors"),
  { success, error } = require("consola"),
  app = exp(),
  dotenv = require("dotenv"),
  con = require("./models/db"),
  PORT = process.env.PORT || 7000;

dotenv.config();

app.use(cors());

const db = con.connect(con, (err) => {
  if (err) throw err;
  success({ message: `Database CONNECTED`, badge: true });
});
module.exports = db;

app.listen(PORT, (e) => {
  if (e) error({ message: `Error: ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
