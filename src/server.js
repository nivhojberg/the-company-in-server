const express = require("express");
const cors = require("cors");
const { router } = require("./router");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}));
app.use((req, _res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(router);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
