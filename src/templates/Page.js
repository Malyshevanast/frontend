import { Outlet } from "react-router-dom";
import "./page.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Page;