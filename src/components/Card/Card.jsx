import profile from "../../assets/Header/profile.png";
import mainImg from "../../assets/Trading collection/dog.png";
export default function Card() {
  return (
    <div className=" mt-2  container mx-auto border-2 rounded-md w-[500px]">
      <div className=" flex justify-center  flex-col">
        {/* User */}
        <div className="User  items-center  flex w-[150px] justify-between">
          <div className="w-[50px] h-auto">
            <img src={profile} alt="" className="w-100 h-auto" />
          </div>

          <div>
            <h3
              className=" text-lg
          "
            >
              Raju Kumar
            </h3>
          </div>
        </div>
        {/* title */}
        <div className="title   font-semibold">
          <h5>Hello Bhai</h5>
        </div>
        {/* Discription */}
        <div className="discription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            quas!
          </p>
        </div>

        {/* Content img */}
        <div className="contentImg self-center lg:w-[350px] h-auto">
          <img src={mainImg} className="w-100 h-auto" alt="" />
        </div>
        {/* Buttons */}
        <div>
          {/* Likes */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
