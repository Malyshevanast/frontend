import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./templates/Page";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import ServicePage from './pages/Service';
import ContactsPage from './pages/Contacts';
import RecordPage from './pages/Record';
import SignPage from './pages/Sign';
import SigninPage from './pages/Signin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/#contacts" element={<ContactsPage/>}/>
          <Route path="/record" element={<RecordPage/>}/>
          <Route path="/sign" element={<SignPage/>}/>
          <Route path="/sign_in" element={<SigninPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);