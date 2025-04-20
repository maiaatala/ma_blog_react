import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./resources/routes-constants";
import "./styles/main.css";
import { DefaultPageLayout } from "./layout/DefaultPageLayout";
import { PostDetail } from "./pages/PostDetail";
import { AppList } from "./pages/AppListPage";
import { CPF } from "./pages/apps/CPF";
import { About } from "./pages/About";
import Forbidden from "./pages/errors/Forbidden";
import NotFoundPage from "./pages/errors/NotFoundPage";
import InternalError from "./pages/errors/InternalError";

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="403" element={<Forbidden />} />
        <Route path="500" element={<InternalError />} />
        <Route element={<DefaultPageLayout />}>
          <Route path={ROUTES.POSTS.BASE} element={<HomePage />} />
          <Route path={ROUTES.POSTS.DETAIL} element={<PostDetail />} />
          <Route path={ROUTES.APPS.BASE} element={<AppList />} />
          <Route path={ROUTES.APPS.CPF} element={<CPF />} />
          <Route path={ROUTES.ABOUT.BASE} element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RootComponent;
