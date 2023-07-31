export interface IScheduleRequest {
  userId: string;
  propertyId: string;
  date: string;
  hour: string;
}

export interface ISchedule {
  propertyId: string;
  date: string;
  hour: string;
}

export interface IScheduleListForProperties {
  date: string;
  hour: string;
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdm: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
}
