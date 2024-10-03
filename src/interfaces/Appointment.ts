import { PatientModel } from "./Patient";
import { PhyiscianModel } from "./Physicians";

export interface AppointmentsModel {
  id: number;
  date_time: string;
  patient_id: number;
  physician_id: number;
}

export interface AppointmentModelWithAggregation extends AppointmentsModel {
  physician: PhyiscianModel;
  patient: PatientModel;
}
