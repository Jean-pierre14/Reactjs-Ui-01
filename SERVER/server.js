const exp = require("express"),
  cors = require("cors"),
  { success, error } = require("consola"),
  app = exp(),
  dotenv = require("dotenv"),
  PORT = process.env.PORT || 7000;

dotenv.config();

app.use(cors());

app.listen(PORT, (e) => {
  if (e) error({ message: `Error: ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
