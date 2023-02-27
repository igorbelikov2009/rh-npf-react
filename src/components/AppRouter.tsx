import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Navigate } from "react-router-dom";
import AboutFund from "../pages/AboutFundPage";
import AdminPanel from "../pages/AdminPanel";
import Business from "../pages/BusinessPage";
import Contacts from "../pages/ContactsPage";
import InfoDisclosure from "../pages/InfoDisclosurePage";
import Investment from "../pages/InvestmentPage";
import MainPage from "../pages/MainPage";
import Management from "../pages/ManagementPage";
import News from "../pages/News";
import NewsPage from "../pages/NewsPage";
import Notfoundpage from "../pages/Notfoundpage";
import ServiceSupport from "../pages/ServiceSupportPage";
import Taxation from "../pages/TaxationPage";
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
        <Route path="*" element={<Notfoundpage />} />
        <Route path="support" element={<ServiceSupport />} />
        <Route path="taxation" element={<Taxation />} />
        <Route path="adminpanel" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
