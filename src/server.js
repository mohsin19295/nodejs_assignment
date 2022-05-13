const app = require("./index");
const connect = require("./configs/db");

app.listen(8005, async () => {
  try {
    await connect();
    console.log("listening on port 8005");
  } catch (e) {
    console.log(e.message);
  }
});
