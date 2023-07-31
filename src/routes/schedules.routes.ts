import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listSchedulesForPropertiesController from "../controllers/schedules/listSchedulesForProperties.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensrueDataIsValid.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middlewares";
import ensureVerifyIdProperty from "../middlewares/schedules/ensuereVerifyPropertyId.middlewares";
import ensureVerifyHour from "../middlewares/schedules/ensureHoursValid.middlewares";
import ensureVerifyScheduleAllTimesMiddleware from "../middlewares/schedules/ensureVerifyScheduleAllTimes.middlewares";
import ensureVerifySchedulesIdtMiddleware from "../middlewares/schedules/ensureVerifyScheduleId.middleware";
import ensureVerifyUserSchedulesDate from "../middlewares/schedules/ensureVerifyUserSchedulesDate.middleware";
import { schedulesSerializer } from "../serializers/schedulesRoutes.serializers";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "/schedules",
  ensureDataIsValidMiddleware(schedulesSerializer),
  ensureAuthMiddleware,
  ensureVerifyHour,
  ensureVerifySchedulesIdtMiddleware,
  ensureVerifyUserSchedulesDate,
  ensureVerifyScheduleAllTimesMiddleware,
  createSchedulesController
);

schedulesRoutes.get(
  "/schedules/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureVerifyIdProperty,
  listSchedulesForPropertiesController
);

export default schedulesRoutes;
