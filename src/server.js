const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, _res, next) => {
    console.log(req.path, req.method);
    next();
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
