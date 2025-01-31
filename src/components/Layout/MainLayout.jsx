import Header from "../../components/Layout/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <div>
      <div className="">
        <Header></Header>

        <Outlet></Outlet>

        <ToastContainer />
      </div>
    </div>
  );
}
