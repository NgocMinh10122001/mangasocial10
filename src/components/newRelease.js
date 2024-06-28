import React, { useEffect, useState } from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading/Loading";
import axios from "axios";
import { useSelector } from "react-redux";

const NewRelease = () => {
  const [readMode, setReadMode] = useState(
    useSelector((state) => state.ReadMode.readmode)
  );
  const newRelease = useFetch(0);
  const firstFiveItem = newRelease.slice(0, 10);
  // console.log("check detail", newRelease);
  return (
    <>
      {/* <div className="grid md:grid-cols-5 2xl:grid-cols-10  gap-[20px] px-[60px] pb-[60px]">
                {firstFiveItem.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.image_poster_link_goc}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                        chapter={item?.chapter_new}
                        path_segment={item?.path_segment_manga}

                    />
                ))}
            </div> */}

      {readMode === false ? (
        <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
          {firstFiveItem.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc}
              title={item?.title_manga}
              rate={item?.rate}
              update={item.time_release}
              chapter={item.chapter_new}
              chapterLink={item.url_chapter}
              path_segment={
                item?.path_segment_manga
                  ? item?.path_segment_manga
                  : item?.url_manga.replace(
                      "https://apimanga.mangasocial.online/rmanga/",
                      ""
                    )
              }
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] pb-[60px]">
          {firstFiveItem.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc}
              title={item?.title_manga}
              rate={item?.rate}
              update={item.time_release}
              chapter={item.chapter_new}
              chapterLink={item.url_chapter}
              path_segment={
                item?.path_segment_manga
                  ? item?.path_segment_manga
                  : item?.url_manga.replace(
                      "https://apimanga.mangasocial.online/web/rmanga/",
                      ""
                    )
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NewRelease;
