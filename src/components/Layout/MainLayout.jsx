import Header from "../../components/Layout/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  // const notify = () => toast("Wow so easy !");
  return (
    <div>
      <div className="">
        <Header></Header>
        {/* <button onClick={notify}>Notify</button> */}

        <Outlet></Outlet>

        <ToastContainer />
      </div>
    </div>
  );
}
