const express = require("express");
// const apiDataInitialization = require("./scrapeData");
const routes = require("./routes")

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs')

const swaggerJsDocs = YAML.load('./api.yaml')

const morgan = require('morgan')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use(morgan('combined'));


app.use('/api', routes);

const portNo = 8000
app.listen(portNo, () => {
  console.log(`server running on ${portNo}`);
})