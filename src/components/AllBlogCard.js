import Link from "next/link";
import { useBlogContext } from "./AllBlog";
import { useSearch } from "../app/layout";

export const AllBlogCard = ({
  cover_image,
  tag_list,
  title,
  published_at,
  id,
  social_image,
}) => {
  const { tagValue } = useSearch();

  return (
    <Link href={`/blog/${id}`}>
      <div className="flex flex-col w-full h-full  gap-[30px] border-[2px] rounded-[5px] p-[10px]">
        <div className=" grow ">
          <div className="relative w-full pt-[67%]">
            <div className="absolute w-full h-full top-0 left-0 rounded-[5px] overflow-hidden ">
              <img
                className="relative top-0 left-0 w-full h-full object-cover"
                src={cover_image ? cover_image : social_image}
              />
              <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10"></div>
            </div>
          </div>
        </div>
        <div className=" grow">
          <div className="flex flex-col gap-[20px] rounded-[20px] p-[20px] ">
            <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">
              {tagValue === " " ? tag_list[0] : tagValue}
            </div>
            <div className="text-[24px] grow">{title}</div>
            <div className="text-[12px] text-[gray]">{published_at}</div>
          </div>
        </div>
      </div>
      {/* <Link href={''}></Link> */}
    </Link>
  );
};

{
  /* <div className="absolute top-0 left-0 w-full h-full border-[10px]">
                <div className="relative w-full pt-[67%]">
                    <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                        <img className="relative top-0 left-0 w-full h-full object-cover" src={cover_image ? cover_image : '/nrl.jpg'} />
                        <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10" ></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 border-[10px] w-full">
                    <div className="flex flex-col gap-[20px]   rounded-[20px] p-[20px] ">
                        <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">{tag_list[0]}</div>
                        <div className="text-[24px] grow">{title}</div>
                        <div className="text-[12px] text-[gray]">{published_at}</div>
                    </div>
                </div>
            </div> */
}
{
  /* <div className="relative w-full pt-[67%]">
                <div className="absolute w-full h-full top-0 left-0 rounded-[20px] overflow-hidden ">
                    <img className="relative top-0 left-0 w-full h-full object-cover" src={cover_image ? cover_image : '/nrl.jpg'} />
                    <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-30 z-10" ></div>

                </div>
            </div>
            <div className="flex flex-col gap-[20px]   rounded-[20px] p-[20px] ">
                <div className="bg-[#4B6BFB] rounded w-fit pl-[10px] pr-[10px] text-[12px] text-[white]">{tag_list[0]}</div>
                <div className="text-[24px] grow">{title}</div>
                <div className="text-[12px] text-[gray]">{published_at}</div>
            </div> */
}
