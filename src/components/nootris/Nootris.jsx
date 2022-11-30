import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/layout/Layout";
import Home from "../../pages/Home";
import Faq from "../../pages/Faq";
import Payment from "../../pages/Payment";
import PersonalArea from "../../pages/PersonalArea";
import Reclamation from "../../pages/Reclamation";
import Research from "../../pages/Research";
import NoPage from "../../pages/NoPage";
export default function Nootris() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="payment" element={<Payment />} />
          <Route path="personalarea" element={<PersonalArea />} />
          <Route path="reclamation" element={<Reclamation />} />
          <Route path="research" element={<Research />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
