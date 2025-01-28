import Header from "../../components/Layout/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className="">
        <Header></Header>

        <Outlet></Outlet>
      </div>
    </div>
  );
}
