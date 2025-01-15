import Header from "../header/header";
import Arrow from "../../assets/arrow.svg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css";
import { productDetails } from "../../store/product-details/product-details";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const { defineProducts, getDefaneProducts } = productDetails();
  useEffect(() => {
    getDefaneProducts(id);
  }, [id, getDefaneProducts]);

  const Sizes = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <div className="relative max-w-[1220px] mx-auto flex justify-center gap-x-[20px] mt-[81px] ">
        <div className="w-[518px] ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
              marginBottom: "12px",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {defineProducts?.images?.length > 0 ? (
              defineProducts.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item?.img} alt='no img' />
                </SwiperSlide>
              ))
            ) : (
              <h2>No images</h2>
            )}
          </Swiper>
          <Swiper
            style={{
              width: "85%",
            }}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={8}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {defineProducts?.images?.length > 0 ? (
              defineProducts.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item?.img} alt='no img' />
                </SwiperSlide>
              ))
            ) : (
              <h2>No images</h2>
            )}
          </Swiper>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-y-[10px] ">
            <h2 className="text-[20px] text-[#616161] font-bold ">
              {defineProducts?.subtitle}
            </h2>
            <h3 className="text-[48px] font-nunito">{defineProducts?.name}</h3>
            <h2 className="text-[24px] font-bold ">
              {defineProducts?.price} $
            </h2>
          </div>
          <div className="mt-[32px] ">
            <h2 className="text-[16px] font-bold text-[#616161]  ">Размеры</h2>
            <div>
              {defineProducts?.sizes?.map((item, index) => (
                <button
                  key={index}
                  className={`w-[53px] h-[52px] text-[32px] font-semibold transform transition-colors duration-300 rounded-[8px] ${
                    item?.isActive
                      ? "hover:bg-black hover:text-white bg-gray-200 text-gray-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!item?.isActive}
                >
                  {item?.value}
                </button>
              ))}
            </div>
            <h2 onClick={Sizes} className="text-[15px] font-bold ">
              Подробнее о размерах
            </h2>
            {isOpen && (
              <table className="w-[341px] font-nunito bg-white absolute border-b border-black  ">
                <tbody>
                  <tr>
                    <td></td>
                    <td className="text-[20px] font-bold ">xs</td>
                    <td className="text-[20px] font-bold ">s</td>
                    <td className="text-[20px] font-bold ">m</td>
                    <td className="text-[20px] font-bold ">l</td>
                    <td className="text-[20px] font-bold ">xl</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] font-bold ">Длина</td>
                    <td className="text-[20px] font-bold ">102</td>
                    <td className="text-[20px] font-bold ">102</td>
                    <td className="text-[20px] font-bold ">102</td>
                    <td className="text-[20px] font-bold ">102</td>
                    <td className="text-[20px] font-bold ">102</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] font-bold ">Ширина</td>
                    <td className="text-[20px] font-bold ">56</td>
                    <td className="text-[20px] font-bold ">56</td>
                    <td className="text-[20px] font-bold ">56</td>
                    <td className="text-[20px] font-bold ">56</td>
                    <td className="text-[20px] font-bold ">56</td>
                  </tr>
                  <tr>
                    <td className="text-[16px] font-bold ">Толщина</td>
                    <td className="text-[20px] font-bold ">33</td>
                    <td className="text-[20px] font-bold ">33</td>
                    <td className="text-[20px] font-bold ">33</td>
                    <td className="text-[20px] font-bold ">33</td>
                    <td className="text-[20px] font-bold ">33</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <button className="w-[568px] h-[45px] rounded-[11px] bg-[#1B1B1B] text-[19px] text-white font-bold mt-[69px] mb-[12px] ">
            Приобрести
          </button>
          <button className="w-[568px] h-[45px] rounded-[11px] border-[1px] border-black text-[19px font-bold mb-[56px] ">
            Добавить в корзинуи
          </button>
          <p className="text-[19px] font-[600] w-[559px] font-nunito text-[#616161]">
            {defineProducts?.description}
          </p>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto relative ">
        <div className="mb-[26px] flex gap-x-[14px]">
          <h1 className="text-[36px] font-bold">New arrivals</h1>
          <img src={Arrow} alt="no" />
        </div>
        {/* <div className="grid grid-cols-4 justify-items-center items-center gap-x-[30px] gap-y-[21px] mb-[130px] ">
          <div className="w-[282px] h-[332px] rounded-[10px] ">
            <img
              className="w-full h-auto "
              src="https://storage.fabrikamaek.ru/images/0/3/3766/3766577/previews/people_1_man_trousers_front_black_500.jpg"
              alt="no"
            />
            <div className="flex justify-between pl-[11px] items-center shadow-xl">
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
          <div className="w-[282px] h-[332px] rounded-[10px] ">
            <img
              className="w-full h-auto "
              src="https://storage.fabrikamaek.ru/images/0/3/3766/3766577/previews/people_1_man_trousers_front_black_500.jpg"
              alt="no"
            />
            <div className="flex justify-between pl-[11px] items-center shadow-xl">
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
          <div className="w-[282px] h-[332px] rounded-[10px] ">
            <img
              className="w-full h-auto "
              src="https://storage.fabrikamaek.ru/images/0/3/3766/3766577/previews/people_1_man_trousers_front_black_500.jpg"
              alt="no"
            />
            <div className="flex justify-between pl-[11px] items-center shadow-xl">
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
          <div className="w-[282px] h-[332px] rounded-[10px] ">
            <img
              className="w-full h-auto "
              src="https://storage.fabrikamaek.ru/images/0/3/3766/3766577/previews/people_1_man_trousers_front_black_500.jpg"
              alt="no"
            />
            <div className="flex justify-between pl-[11px] items-center shadow-xl">
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
        </div> */}
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          className="h-auto w-[1220px] mb-[120px] "
        >
          {Array(10)
            .fill()
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-[282px] h-[332px] rounded-[10px] mx-auto ">
                  <img
                    className="w-full h-auto "
                    src={defineProducts?.image}
                    alt="no"
                  />
                  <div className="flex justify-between pl-[11px] items-center shadow-xl">
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductPage;
