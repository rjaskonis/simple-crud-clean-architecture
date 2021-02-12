const { settings } = require("node:cluster");

export const settings = {
    local: {
        dialect: "mysql",
        host: "127.0.0.1",
        username: process.env.DATABASE_USERNAME || "root",
        password: process.env.DATABASE_PASSWORD || "root",
        database: process.env.DATABASE_NAME,
        logging: false,
    },
};
