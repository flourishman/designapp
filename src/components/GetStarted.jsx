import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={
        "flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full"
      }
    >
      <div className="flex justify-center items-center">
        <p className=" flex flex-row justify-center items-center font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="Arrow up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className=" flex justify-center items-center font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
