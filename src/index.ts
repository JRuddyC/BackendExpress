import app from "./app";
import sequelize from "./config/db";

const port = process.env.APP_PORT

try {
    sequelize.authenticate()
    sequelize.sync()
    app.listen(port, () => {
        console.log("Running at port " + port);
    })
} catch (error) {
    console.log(error);
}