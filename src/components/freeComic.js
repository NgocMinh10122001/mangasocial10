import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const FreeComic = () => {
  const recommendedComics = useFetch(3);
  //   console.log("check free comic", recommendedComics);

  const firstFiveItem = recommendedComics.slice(0, 20);
  return (
    <div className="grid grid-cols-6 gap-[20px] px-[60px] pb-[60px]">
      {firstFiveItem.map((item, index) => (
        <CardManga
          key={index}
          poster={item?.image_poster_link_goc}
          title={item?.title_manga}
          rate={item?.rate}
          update={item.time_release}
          path_segment={item?.path_segment_manga}
        />
      ))}
    </div>
  );
};

export default FreeComic;
