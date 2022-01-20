import express from "express";

import holidaysRoutes from "./routes/holidays.routes.js";
import { isTodayHoliday } from "./services/holidaysService.js";

const app = express();

app.use(express.json());

app.use("/holidays", holidaysRoutes);

app.get("/is-today-holiday", (req, res) => {
  const answer = isTodayHoliday();
  if (!!answer?.name) {
    res.send("Sim, hoje é " + answer.name);
  } else {
    res.send("Não, hoje não é feriado");
  }
});
export default app;
