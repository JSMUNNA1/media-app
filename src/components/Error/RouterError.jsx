import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/error.jpg";

export default function RouterError() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <>
        <div className="flex justify-center flex-col ">
          <div>
            <div className=" bg-gray-200">
              <h3>Ohh!!</h3>
              <p>We are not able to find the page for the given Url</p>
              <Link to="/" className="text-blue-500 hover:text-blue-900">
                Navigate Home{" "}
              </Link>
            </div>
          </div>
          <div className="w-30%   h-80">
            <img src={img} className="w-full h-96" alt="not found"></img>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h3>something went wrong</h3>
      </div>
    </>
  );
}
