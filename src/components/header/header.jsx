import PageStore from "../../assets/store.svg";
import Exit from "../../assets/exit.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full h-[70px] max-w-[1220px] flex justify-between items-center mx-auto pl-[25px] pr-[25px] ">
      <Link to={'/'} className="text-[42px] font-semibold ">Uniwear</Link>
      <div className="flex gap-x-[19px] ">
        <Link to={"/basket"}>
          <img src={PageStore} alt="no" />
        </Link>
        <Link to={'/login'}>
          <img src={Exit} alt="no" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
