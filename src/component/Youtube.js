import React,{useState} from "react";
import { FaBars } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";
import { PiDownloadSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import pictures from "../image/logo.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "./Sidebar";



const Youtube = () => {
 
  return (
    <>
      <div className="flex ">
        <Sidebar/>

        <div className="flex flex-col gap-2">
          <div className="fixed top-0 left-20" >
            <div className="flex justify-between  w-[90vw] ">
              <div>
                <div className="flex  ">
                  <div>
                    <div className="  flex py-4">
                      <div className="flex">
                        <FaYoutube className="text-red-500 text-3xl " />
                        <h1 className="font-semibold">Youtube</h1>
                        <sup className="text-xs">NP</sup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-3 px-2 py-3">
                  <div>
                    <div className="flex ">
                      <div>
                        <input
                          type="text"
                          placeholder="Search"
                          className=" border-2 border-r-0 w-[500px] rounded-l-full  px-5 py-2"
                        />
                      </div>

                      <div className="border-2 w-[50px] rounded-r-full px-3 py-2 bg-gray-100">
                        <button>
                          {" "}
                          <CiSearch />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" border flex flex-col justify-center p-3 bg-gray-200 rounded-full  hover:bg-gray-300 ">
                    <button>
                      <IoMdMic />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-5 px-5 py-4">
                  <div className="flex justify-center">
                    <button>
                      <MdOutlineVideoCall className="text-2xl" />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button>
                      {" "}
                      <IoNotificationsOutline className="text-2xl" />{" "}
                    </button>
                  </div>

                  <div className=" flex  justify-center rounded-full bg-gray-300 p-2">
                    <button>
                      <IoMdPerson className="text-2xl" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <ul className=" flex flex-nowrap gap-7  ml-[30px]">
              <li className="bg-black px-2 py-2 rounded-lg text-white font-semibold text-xs ">
                {" "}
                All{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li className="bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-400 font-semibold text-xs">
                {" "}
                Name1{" "}
              </li>
              <li>
                <button className="flex flex-col justify-center"><IoIosArrowForward className=" rounded-full bg-gray-200 text-2xl hover:bg-gray-400  "/></button>
              </li>

           
            </ul>
          </div>

          <div>
            <div className="flex flex-nowarp justify-between  mt-[45px] h-[55vh] gap-3 ml-[30px] mr-[55px]">
              <div>
              <div className="flex flex-col gap-2">
                <div>
                  <div >
                    <img src={pictures} alt=""  className="rounded-lg"/>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <div>
                      <IoMdPerson className="text-3xl rounded-full bg-gray-100 p-1" />
                    </div>

                    <div>
                      <h1 className="text-xl text-semibold">
                        {" "}
                        HELLO RONIT SHRESTHA
                      </h1>
                      <h1 className="text-gray-500"> RONIT SHRESTHA</h1>
                      <div className="flex gap-3">
                        <h1> 153k </h1>
                        <h1> 1 month ago</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div>
                  <div >
                    <img src={pictures} alt="" className="rounded-lg"/>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <div>
                      <IoMdPerson className="text-3xl rounded-full bg-gray-100 p-1" />
                    </div>

                    <div>
                      <h1 className="text-xl text-semibold">
                        {" "}
                        HELLO RONIT SHRESTHA
                      </h1>
                      <h1 className="text-gray-500"> RONIT SHRESTHA</h1>
                      <div className="flex gap-3">
                        <h1> 153k </h1>
                        <h1> 1 month ago</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div>
                  <div >
                    <img src={pictures} alt="" className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <div>
                      <IoMdPerson className="text-3xl rounded-full bg-gray-100 p-1" />
                    </div>

                    <div>
                      <h1 className="text-xl text-semibold">
                        {" "}
                        HELLO RONIT SHRESTHA
                      </h1>
                      <h1 className="text-gray-500"> RONIT SHRESTHA</h1>
                      <div className="flex gap-3">
                        <h1> 153k </h1>
                        <h1> 1 month ago</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
