import { useEffect, useRef, useState } from "react";
import { useData } from "../../app/page";
import { BackSvg } from "@/svg/BackSvg";
import { ForwardSvg } from "../../svg/ForwardSvg";
import Link from "next/link";

export const Header = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [indexCarousel, setIndexCarousel] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isOnTransition, setIsOnTransition] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const result = await fetch(`https://dev.to/api/articles?page=1&per_page=6`);
    const data = await result.json();
    setPosts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const backClcik = () => {
    if (isOnTransition) return;
    setIndexCarousel((prev) => prev - 1);
    setWithTransition(true);
    setIsOnTransition(true);
  };
  const forwardClcik = () => {
    if (isOnTransition) return;
    setIndexCarousel((prev) => prev + 1);
    setWithTransition(true);
    setIsOnTransition(true);
  };

  const transitionEnd = () => {
    if (indexCarousel === 7) {
      setWithTransition(false);
      setIndexCarousel(1);
    }
    if (indexCarousel === 0) {
      setWithTransition(false);
      setIndexCarousel(6);
    }
    setIsOnTransition(false);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full overflow-hidden">
          <div
            onTransitionEnd={transitionEnd}
            // isTransition={transitionStart}
            // onTransitionStart={transitionStart}
            // onTransitionStart={(e) => { console.log(e) }}
            className={`flex w-[800%]`}
            id="slider"
            style={{
              transform: `translateX(-${(indexCarousel * 100) / 8}%)`,
              transition: `transform ${
                withTransition ? "0.6s" : "0s"
              } ease-in-out`,
            }}
            // style={{ transform: `translateX(-12.5%)` }}
          >
            <div key={"lastNone"} className="grow">
              <Link href={`/blog${posts[posts.length - 1].id}`}>
                <div className="relative w-full pt-[56.25%]">
                  <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                    <img
                      className="relative top-0 left-0 w-full h-full object-cover"
                      src={
                        posts[posts.length - 1].cover_image
                          ? posts[posts.length - 1].cover_image
                          : posts[posts.length - 1].social_image
                      }
                    />
                    <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10"></div>
                    <div className="flex flex-col gap-[20px] absolute w-[50%] h-[35%] left-[20px] bottom-[20px] bg-white rounded-[20px] p-[20px]  z-20">
                      <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">
                        {posts[posts.length - 1].tag_list[0]}
                      </div>
                      <div className="text-[24px] grow">
                        {posts[posts.length - 1].title}
                      </div>
                      <div className="text-[12px] text-[gray]">
                        {posts[posts.length - 1].published_at}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {posts.map((item, index) => {
              return (
                <div key={index} className="grow">
                  <Link href={`/blog/${item.id}`}>
                    <div className="relative w-full pt-[56.25%]">
                      <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                        <img
                          className="relative top-0 left-0 w-full h-full object-cover"
                          src={
                            item.cover_image
                              ? item.cover_image
                              : item.social_image
                          }
                        />
                        <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10"></div>
                        <div className="flex flex-col gap-[20px] absolute w-[50%] h-[35%] left-[20px] bottom-[20px] bg-white rounded-[20px] p-[20px]  z-20">
                          <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">
                            {item.tag_list[0]}
                          </div>
                          <div className="text-[24px] grow">{item.title}</div>
                          <div className="text-[12px] text-[gray]">
                            {item.published_at}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            <div key={"firstNone"} className="grow">
              <Link href={`/blog/${posts[0].id}`}>
                <div className="relative w-full pt-[56.25%]">
                  <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                    <img
                      className="relative top-0 left-0 w-full h-full object-cover"
                      src={
                        posts[0].cover_image
                          ? posts[0].cover_image
                          : posts[0].social_image
                      }
                    />
                    <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10"></div>
                    <div className="flex flex-col gap-[20px] absolute w-[50%] h-[35%] left-[20px] bottom-[20px] bg-white rounded-[20px] p-[20px]  z-20">
                      <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">
                        {posts[0].tag_list[0]}
                      </div>
                      <div className="text-[24px] grow">{posts[0].title}</div>
                      <div className="text-[12px] text-[gray]">
                        {posts[0].published_at}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="flex self-end gap-[8px]">
        <div onClick={backClcik}>
          <BackSvg />
        </div>
        <div onClick={forwardClcik}>
          <ForwardSvg />
        </div>
      </div>
    </div>
  );
};
