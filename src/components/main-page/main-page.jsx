import { useEffect } from "react";
import Arrow from "../../assets/arrow.svg";
import { useProduct } from "../../store/product-slice.ts/products-slice";
import Header from "../header/header";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { product, getAllProducrs, isfetch } = useProduct();

  useEffect(() => {
    getAllProducrs();
  }, [getAllProducrs]);
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
        {isfetch ? (
          <div className="text-[56px] font-black font-poppins text-center ">
            loading...
          </div>
        ) : product.lenght === 0 ?(
          <div className="w-full h-auto text-[43px] font-bold ">
            Преддложение отсутствуют 🤷‍♂️
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-x-[30px] gap-y-[21px] mb-[130px] ">
            {product.map((item, index) => (
              <Link
                to={`/productPage/${item.id}`}
                key={index}
                className=" h-[332px] rounded-[10px] "
              >
                <img className="w-full h-[280px] " src={item?.image} alt="no" />
                <div className="flex justify-between pl-[11px] items-center">
                  <div>
                    <h4 className="text-[18px] font-bold  font-nunito">
                      {item?.name}
                    </h4>
                    <h4 className="text-[#848484] text-[15px] font-bold ">
                      men pants
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold ">{item?.price} $</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
