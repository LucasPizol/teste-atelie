import { FormModel } from "@/interfaces/Form";
import { apiService } from "../api";
import { forms } from "../mock/form/form";

export abstract class FormService {
  static async getForm(patient_id: number): Promise<FormModel | null> {
    await apiService.get();

    const findform = forms.forms.find(
      (form) => form.patient_id === patient_id
    ) as FormModel;

    return findform || null;
  }
}
