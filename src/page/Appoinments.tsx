import { AppointmentsService } from "@/api/services/appointments";
import { Button } from "@/components/Button";
import { AppointmentModelWithAggregation } from "@/interfaces/Appointment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
  const [appoinments, setAppoinments] = useState<
    AppointmentModelWithAggregation[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAppoinments = async () => {
      const appoints = await AppointmentsService.getAppoinmentWithAggregation();
      setAppoinments(appoints);
    };

    getAppoinments();
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      <h2
        style={{
          color: "#3E3C38",
        }}
      >
        Atendimentos
      </h2>

      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Atendimento</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {appoinments.map((appoinment) => (
            <tr>
              <td>{appoinment.patient.name}</td>
              <td>{appoinment.physician.name}</td>
              <td></td>
              <td>
                <Button
                  onClick={() => {
                    navigate(`/appointments/${appoinment.id}/pre-exam`);
                  }}
                >
                  PRÉ-EXAME
                </Button>
                <Button>INICIAR</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
