import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";
import { PiDownloadSimple } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  

  const handleSidebar=()=>{
    setSidebar(!sidebar)
  }
  return (

    <div className="flex flex-col px-4 py-5 gap-3">
      
      <div>
        <button onClick={handleSidebar} >
          <FaBars className="text-3xl" />
        </button>
      </div>
      
      {sidebar ? (
        
        <div >
          <div className="flex flex-col gap-3" >
            <div>
              <button>
                {" "}
                <MdHome className="text-3xl" />
              </button>
              <h1 className="text-xs ">Home</h1>
            </div>

            <div>
              <button>
                <SiYoutubeshorts className="text-3xl" />
              </button>
              <h1 className="text-xs">Shorts</h1>
            </div>

            <div>
              <button>
                <MdOutlineSubscriptions className="text-3xl" />
              </button>
              <h1 className="text-xs ">Subscription</h1>
            </div>

            <div>
              <button>
                <LiaYoutubeSquare className="text-3xl" />
              </button>
              <h1 className="text-xs">You</h1>
            </div>

            <div>
              <button>
                <PiDownloadSimple className="text-3xl" />
              </button>
              <h1 className="text-xs">Downloads</h1>
            </div>
          </div>
        </div>
    
      ) : (
        <div className="flex flex-col gap-5 py-1 w-[9vw]">
          <div className="flex  gap-5">
            <div>
              <MdHome className="text-3xl " />
            </div>

            <div>
              <h1 className="text-xl text-semibold">Home</h1>
            </div>
          </div>

          <div className="flex  gap-5">
            <div>
              <SiYoutubeshorts className="text-3xl " />
            </div>

            <div>
              <h1 className="text-xl text-semibold">Shorts</h1>
            </div>
          </div>

          <div className="flex  gap-5">
            <div>
              <MdOutlineSubscriptions className="text-3xl " />
            </div>

            <div>
              <h1 className="text-xl text-semibold"> Subscription</h1>
            </div>
          </div>

          <div className="flex  gap-5">
            <div>
              <LiaYoutubeSquare className="text-3xl " />
            </div>

            <div>
              <h1 className="text-xl text-semibold">You</h1>
            </div>
          </div>

          <div className="flex  gap-5">
            <div>
              <PiDownloadSimple className="text-3xl " />
            </div>

            <div>
              <h1 className="text-xl text-semibold">Downloads</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
