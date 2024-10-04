import { Layout } from "@/common/Layout";
import { Appointments } from "@/page/Appoinments/Appoinments";
import { PreExam } from "@/page/PreExam/PreExam";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/:id/pre-exam" element={<PreExam />} />
          <Route path="*" element={<Navigate to="/appointments" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
