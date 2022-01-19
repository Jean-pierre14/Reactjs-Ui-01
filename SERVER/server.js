const exp = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  { success, error } = require("consola"),
  app = exp(),
  dotenv = require("dotenv"),
  PORT = process.env.PORT || 7000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
const db = require("./models/db");

app.get("/", (req, res) => {
  let sql = "SELECT * FROM student ORDER BY username ASC";
  db.query(sql, async (err, results) => {
    if (err) throw err;
    await res.json(results);
  });
});

app.post("/", (req, res) => {
  const { username, sname, email } = req.body;

  let SQL = `INSERT INTO student(username, sname, email) VALUES("${username}", "${sname}", "${email}")`;
  db.query(SQL, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(PORT, (e) => {
  if (e) error({ message: `Error: ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
