import {
  AppointmentModelWithAggregation,
  AppointmentsModel,
} from "@/interfaces/Appointment";
import { apiService } from "../api";
import { appoinments } from "../mock/appointments/appointments";
import { patients } from "../mock/patients/patients";
import { physicians } from "../mock/physicians/physicians";

export abstract class AppointmentsService {
  static async getAppoinments(): Promise<AppointmentsModel[]> {
    await apiService.get();
    return appoinments.appointments;
  }

  static async getAppoinmentWithAggregation(): Promise<
    AppointmentModelWithAggregation[]
  > {
    await apiService.get();

    const currentAppoinments = appoinments.appointments;

    return currentAppoinments.map((appoinment) => {
      const physician = physicians.physicians.find(
        ({ id }) => id === appoinment.physician_id
      )!;
      const patient = patients.patients.find(
        ({ id }) => id === appoinment.patient_id
      )!;

      return {
        ...appoinment,
        physician,
        patient,
      };
    });
  }
}
