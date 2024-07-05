import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NewRelease from "../../components/newRelease";
import ComicRecent from "../../components/comicRecent";
import Recommended from "../../components/recommended";
import CommingSoon from "./../../components/commingSoon";
import Top15Comics from "../../components/top15Comics";
import ComedyComics from "../../components/comeryComics";
import FreeComic from "./../../components/freeComic";
import NewsComics from "../../components/newsComics";
import NewUsers from "../../components/newUsers";
import Rank from "./../../components/rank";
import Comments from "./../../components/comments";
import NovelList from "../../components/novelList";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeServer } from "../../Redux/Feature/serverSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Novel = () => {
  const dispatch = useDispatch();
  let sv = useSelector((state) => state.server.sv);
  const navigate = useNavigate();
  // console.log("check sv", sv);
  return (
    <>
      <div className="flex w-full items-center gap-5  bg-black">
        <div className="mx-auto my-4 flex gap-5">
          <NavLink
            to={"/" + 11 + "/novel"}
            className="bg-red-400 h-8 px-2 rounded-lg text-white"
            onClick={() => {
              dispatch(changeServer(11));
            }}
          >
            novelhall.com
          </NavLink>
          <NavLink
            to={"/" + 4 + "/novel"}
            className="bg-red-400 h-8 px-2 rounded-lg text-white"
            onClick={() => {
              dispatch(changeServer(4));
            }}
          >
            bestlightnovel.com
          </NavLink>
          {/* <NavLink
            to={"/" + 12 + "/novel"}
            className="bg-red-400 h-8 px-2 rounded-lg text-white"
            onClick={() => {
              dispatch(changeServer(12));
            }}
          >
            mto.to
          </NavLink> */}
          {/* <NavLink
            to={"/" + 9 + "/novel"}
            className="bg-red-400 h-8 px-2 rounded-lg text-white"
            onClick={() => dispatch(changeServer(9))}
          >
            swatmanga.net
          </NavLink> */}
        </div>
      </div>
      <div className="cont">
        <div className="title-released-comic   max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px]  max-[480px]:relative text-white font-semibold">
            New Released Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink to="/newRelease">
            <p className="max-[480px]:!text-xl max-[738px]:text-[29px]">
              See all
            </p>
          </NavLink>
        </div>
        <NovelList index={1} />

        <div className="title-released-comic max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Recent Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink to="/recent">
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <NovelList index={1} />

        <div className="title-released-comic max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Recommended Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink to="/recommended">
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <NovelList index={2} />

        <div className="title-released-comic max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Comming Soon Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink to="/commingsoon">
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <NovelList index={3} />

        <div className="title-released-comic max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Top 15 Best Novel of the Week
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink>
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <Top15Comics index={4} />

        <div className="title-released-comic max-[480px]:px-4">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Comedy Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink>
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <NovelList index={5} />
        <div className="title-released-comic max-[480px]:px-4 mb-[100px]">
          <div className="max-[480px]:!text-2xl  text-5xl max-[738px]:text-[34px] max-[480px]:relative text-white font-semibold">
            Free Novel
            <div className="hidden max-[480px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
          </div>
          <NavLink to={`/`}>
            <p className="max-[480px]:!text-xl">See all</p>
          </NavLink>
        </div>
        <NovelList index={6} />
      </div>
    </>
  );
};

export default Novel;
