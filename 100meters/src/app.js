const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000;
require("./db/conn")
const MensRouter = require("./routers/mensRoute")

app.use(express.json());

app.use(MensRouter);
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})