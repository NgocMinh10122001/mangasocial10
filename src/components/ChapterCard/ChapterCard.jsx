import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ChapterCard = ({ chapter, title, poster, des, slug, chapterLink,chapterName }) => {
  // console.log("check link", chapterLink);
  const sv = useSelector((state) => state.server.sv);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  const user_id = sessionStorage.getItem("user_id");
  const chapterNumber = chapter?.replace(
    `http://apimanga.mangasocial.online/rmanga/${slug}/`,
    ""
  );
  const chapterNumberReadMode = chapterLink
  // console.log("chapter",chapterLink);
   const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
   };
   const getChapterFromUrl2 = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };
  // console.log("check slug", chapterLink)

  const truncatedDes = des.length > 30 ? `${des.slice(0, 30)}...` : des;
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  return (
    <>
      <NavLink
        to={`/${sv}/chapter/${slug}/${getChapterFromUrl(
          chapterNumberReadMode
        )}`}
        className=" bg-[#4a4a4a] block w-[100%] p-3 hover:bg-[#1a1a1a] rounded-xl my-5 transition-all duration-200"
      >
        <div className="flex md:flex-row items-center gap-4 md:gap-[80px] my-3  cursor-pointer py-4 md:py-8 px-2 md:px-12 transition-all duration-200">
            {/* chapter info */}
          <div className="flex items-center gap-4 md:gap-12 w-full md:w-auto">
              <img
                src={poster}
                alt=""
              className="h-24 md:h-[150px] w-24 md:w-[150px] object-cover rounded-xl"
              />
              <div>
              <div className="text-base md:text-xl py-1 md:py-2 font-semibold whitespace-nowrap leading-5 md:leading-7 text-white">
                <span className="underline decoration-1 whitespace-nowrap">
                  {`${title} - ${chapterName} `}
                </span>
                </div>
              <div className="text-sm md:text-base font-medium leading-5 md:leading-6 text-gray-400">
                  12/07/2023
                </div>
              </div>
            </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-2 md:gap-0">
            <div className="text-2xl hidden md:block md:text-xl leading-5 md:leading-6 font-medium text-gray-300 w-full md:w-3/4">
              {truncatedDes}
            </div>
            {user_id ? (
              <div className="text-sm md:text-2xl leading-5 md:leading-6 font-semibold text-[#ff9f66] w-full md:w-1/4 text-right">
                Read
              </div>
            ) : (
              <div className="text-sm md:text-2xl leading-5 md:leading-6 font-semibold text-[#ff9f66] w-full md:w-1/4 text-right">
                Login
              </div>
            )}
          </div>
          <div className="text-sm md:hidden md:text-base leading-5 md:leading-6 font-medium text-gray-300 w-full">
          {truncatedDes}
        </div>
        </div>
        </NavLink>
      
    </>
  );
};

export default ChapterCard;