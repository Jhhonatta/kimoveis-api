import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISchedule, IScheduleRequest } from "../interfaces/schedules";

const schedulesSerializer: SchemaOf<ISchedule> = yup.object().shape({
  date: yup.string().required(),
  hour: yup.string().required(),
  propertyId: yup.string().required(),
});

const schedulesRequestSerializer: SchemaOf<IScheduleRequest> = yup
  .object()
  .shape({
    date: yup.string().required(),
    hour: yup.string().required(),
    propertyId: yup.string().required(),
    userId: yup.string().required(),
  });

export { schedulesSerializer, schedulesRequestSerializer };
