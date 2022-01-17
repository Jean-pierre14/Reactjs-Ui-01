const exp = require("express"),
  { success, error } = require("consola"),
  app = exp(),
  PORT = process.env.PORT || 7000;

app.listen(PORT, (e) => {
  if (e) error({ message: `Error: ${e}`, badge: true }