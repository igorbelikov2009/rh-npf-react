import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Navigate } from "react-router-dom";
import AboutFund from "../pages/AboutFund";
import Business from "../pages/Business";
import Contacts from "../pages/Contacts";
import InfoDisclosure from "../pages/InfoDisclosure";
import Investment from "../pages/Investment";
import MainPage from "../pages/MainPage";
import Management from "../pages/Management";
import News from "../pages/News";
import NewsPage from "../pages/NewsPage";
import Notfoundpage from "../pages/Notfoundpage";
import ServiceSupport from "../pages/ServiceSupport";
import Layout from "./Layout";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutFund />} />
        <Route path="business" element={<Business />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="info" element={<InfoDisclosure />} />
        <Route path="investment" element={<Investment />} />
        <Route path="managment" element={<Management />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsPage />} />
        <Route path="notfoundpage" element={<Notfoundpage />} />
        <Route path="support" element={<ServiceSupport />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
