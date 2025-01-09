import Arrow from "../../assets/arrow.svg";
import Header from "../header/header";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1220px] mx-auto pl-[25px] pr-[25px]">
        <div className="flex gap-x-[21px] mb-[38px] mt-[49px] ">
          <h3 className="text-[20px] font-bold ">Новое</h3>
          <h3 className="text-[20px] font-bold ">Худи</h3>
          <h3 className="text-[20px] font-bold ">Зип-худи</h3>
          <h3 className="text-[20px] font-bold ">Штаны</h3>
        </div>
        <div className="mb-[26px] flex gap-x-[14px]">
          <h1 className="text-[36px] font-bold">New arrivals</h1>
          <img src={Arrow} alt="no" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-x-[30px] gap-y-[21px] mb-[130px] ">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div key={index} className=" h-[332px] rounded-[10px] ">
                <img
                  className="w-full h-[280px] "
                  src="https://storage.fabrikamaek.ru/images/0/3/3766/3766577/previews/people_1_man_trousers_front_black_500.jpg"
                  alt="no"
                />
                <div className="flex justify-between pl-[11px] items-center">
                  <div>
                    <h4 className="text-[18px] font-bold ">Uni pants</h4>
                    <h4 className="text-[#848484] text-[15px] font-bold ">
                      men pants
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold ">3000</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
