import { Router } from "express";
import * as holidaysService from "../services/holidaysService.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.send(holidaysService.holidays);
});

routes.get("/:month", (req, res) => {
  const month = Number(req.params.month);
    res.send(holidaysService.getHolidayByMonth(month));
});

export default routes;
