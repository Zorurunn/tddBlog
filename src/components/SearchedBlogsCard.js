"use client";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export const SearchedBlogsCard = ({
  cover_image,
  tag_list,
  title,
  published_at,
  id,
  social_image,
}) => {
  const router = useRouter();

  const routerHandler = () => {
    router.push(`/blog/${id}`);
  };
  return (
    <div
      className="w-full flex flex-row p-2 items-center gap-4 max-h-[400]"
      onClick={routerHandler}
    >
      <img
        src={cover_image}
        height={80}
        width={160}
        className="object-cover"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      />
      <div className="flex flex-col gap-2 items-start">
        <p
          data-testid="searched-article-title"
          className="text-black font-bold text-[14px]"
        >
          {title}
        </p>
        <p
          data-testid="searched-article-date"
          className="text-[#121316] text-[12px]"
        >
          {format(published_at, "yyyy.MM.dd")}
        </p>
      </div>
    </div>
  );
};
