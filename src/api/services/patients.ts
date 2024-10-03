import { PatientModel } from "@/interfaces/Patient";
import { apiService } from "../api";
import { patients } from "../mock/patients/patients";

export abstract class PatientsService {
  static async getPatients(): Promise<PatientModel[]> {
    await apiService.get();
    return patients.patients;
  }

  static async getPatienceById(
    patient_id: number
  ): Promise<PatientModel | null> {
    await apiService.get();

    const findPatient = patients.patients.find(
      (patient) => patient.id === patient_id
    ) as PatientModel;

    return findPatient || null;
  }
}
