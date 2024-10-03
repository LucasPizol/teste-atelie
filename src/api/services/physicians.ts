import { PhyiscianModel } from "@/interfaces/Physicians";
import { apiService } from "../api";
import { physicians } from "../mock/physicians/physicians";

export abstract class PhysiciansService {
  static async getPhyisicians(): Promise<PhyiscianModel[]> {
    await apiService.get();
    return physicians.physicians;
  }

  static getCurrentPhyisician(): PhyiscianModel | null {
    const findPhyisician = physicians.physicians.find(
      (phyisician) => phyisician.id === 1
    ) as PhyiscianModel;

    return findPhyisician || null;
  }
}
