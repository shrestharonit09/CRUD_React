import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const Facebooks = () => {
  return (
    <div className="bg-gray-200 h-[100vh]">
      <div className="flex">
        <div className=" mt-[120px]  ml-[22px]  w-[500px] ">
          <h1 className="ml-[220px]  font-bold text-blue-600 text-5xl">
            {" "}
            facebook
          </h1>

          <h1 className="w-[400px] mt-[25px] text-5xl ml-[220px]">
            {" "}
            Recent logins
          </h1>

          <p className=" text-gray-800 text-lg w-[400px] mt-[20px] ml-[220px]">
            {" "}
            Click your picture or add an account.
          </p>

          <div className=" flex flex-col justify-end bg-white h-[250px] w-[230px] shadow-xl mt-[80px] ml-[220px] rounded-lg hover:shadow-2xl">
            <div className="flex flex-col  justify-center h-full ">
              <div className="flex justify-center">
                <IoMdAddCircle className="text-6xl text-blue-500 " />
              </div>
            </div>
            <hr />
            <h1 className=" p-2 rounded-lg text-blue-600 bg-white text-center text-2xl w-[230px] ">
              Add Account
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-5  h-[420x] ml-[550px] mt-[140px] w-[500px] bg-white shadow-xl border rounded-lg p-10">
          <input
            type="text"
            className="w-full border rounded-lg p-3 text-[22px] border "
            placeholder="Email address or phone number"
          />
          <input
            type="text"
            className="w-full border rounded-lg p-3 text-[22px] "
            placeholder="passowrd"
          />

          <button className="bg-[#0866ff] p-3 hover:bg-blue-300 text-3xl text-white font-semibold rounded-lg">
            {" "}
            Log in
          </button>

          <p className="  text-[20px] text-blue-600 text-center">
            {" "}
            Forgotten password ?
          </p>

          <hr />
          <div className="flex justify-center">
            <button className=" text-[23px] w-[250px]  rounded-lg mt-3 p-3 font-bold text-white bg-[#42b72a]">
              {" "}
              Create new account{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebooks;
