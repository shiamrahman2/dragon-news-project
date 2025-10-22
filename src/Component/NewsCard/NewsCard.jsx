import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  // Format published date nicely
  const publishedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden my-5">
      {/* Top Section: Author & Icons */}
      <div className={`flex justify-between items-center p-4 ${others?.is_trending && 'mt-5'}`}>
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-accent" />
          <FaShareAlt className="cursor-pointer hover:text-accent" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 font-bold text-lg leading-snug">{title}</h3>

      {/* Image */}
      <figure className="px-4 py-3">
        <img src={image_url} alt="News" className="rounded-xl w-full" />
      </figure>

      {/* Details */}
      <div className="px-4 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-orange-500 cursor-pointer font-medium ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Tags */}
      <div className="px-4 pt-3">
        <p className="text-xs text-gray-500">
          <span className="font-semibold">Tags:</span>{" "}
          {tags?.map((tag, i) => (
            <span key={i} className="mr-1 text-accent">
              #{tag}
            </span>
          ))}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 mt-2">
        {/* Rating */}
        <div className="flex items-center text-orange-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
          {rating.badge && (
            <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full uppercase font-semibold">
              {rating.badge}
            </span>
          )}
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

      {/* Trending or Pick Badge */}
         {others?.is_trending && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          🔥 Trending
        </div>
      )}
      {others?.is_today_pick && (
        <div className="absolute top-2  right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          🌟 Today’s Pick
        </div>
      )}
    </div>
  );
};

export default NewsCard;
