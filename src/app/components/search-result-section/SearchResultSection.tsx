'use client';

import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SearchResultSection = () => {
  return (
    <div className="lg:w-2/3 h-screen overflow-auto border-l border-white bg-sky-50">
      <div className="p-8 h-full flex flex-col">
        <div className="lg:flex justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl text-gray-700 font-medium">
              Search results
            </h1>
            <p className="text-gray-700 font-light">We found 10 results</p>
          </div>
          <div className="lg:w-96">
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:gap-x-4 gap-y-4 lg:gap-y-0">
              <button className="bg-white font-light uppercase rounded-full py-2 text-xs text-blue-500">
                Cheapest
              </button>
              <button className="bg-white font-light uppercase rounded-full py-2 text-xs text-blue-500">
                Shortest
              </button>
              <button className="bg-blue-500 font-light uppercase rounded-full py-2 text-xs text-white">
                Recommended
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-2xl text-gray-700 font-medium">London</div>
          <i className="bx bx-md mx-4 bx-right-arrow-alt"></i>
          <div className="text-2xl text-gray-700 font-medium">New York</div>
        </div>
        <div className="flex flex-col flex-grow justify-center items-center">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCards, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-white rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/british-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$999</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-sky-200 rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/etihad-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$848</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-white rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/jetstar-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$647</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-orange-100 rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/qatar-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$969</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/british-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$999</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-sky-200 rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/etihad-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$848</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-white rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/jetstar-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$647</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide className="bg-orange-100 rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/qatar-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$969</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/british-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$999</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-sky-200 rounded-xl">
              <div className="w-full h-full grid grid-rows-3 p-4">
                <div className="w-full h-full flex items-center justify-center ">
                  <Image
                    alt="ticket"
                    src={'/logos/etihad-airways-vector-logo.svg'}
                    className="w-full h-44"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl text-gray-900 font-bold">$848</h1>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <div className="flex justify-between w-full">
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Depart
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">7:34 PM</div>
                    </div>
                    <div className="text-gray-900 font-bold">
                      <div className="text-xs text-gray-700 font-bold">
                        Arrive
                      </div>
                      <div className="text-xs font-normal">11/11/2019</div>
                      <div className="text-sm">2:57 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SearchResultSection;
