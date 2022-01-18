const exp = require("express"),
  cors = require("cors"),
  { success, error } = require("consola"),
  app = exp(),
  dotenv = require("dotenv"),
  PORT = process.env.PORT || 7000;

dotenv.config();

app.use(cors());
const db = require("./models/db");

app.get("/", (req, res) => {
  let sql = "SELECT * FROM student ORDER BY username ASC";
  db.query(sql, async (err, results) => {
    if (err) throw err;
    await res.json(results);
  });
});

app.listen(PORT, (e) => {
  if (e) error({ message: `Error: ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
