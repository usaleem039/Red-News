/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const NewsItem = ({ title, description, imageUrl, newsUrl ,content,published , name }) => {

  // console.log("Image URL:", {description, imageUrl});  

  const fallBackImage ="/fallimage.jpg"

  return (
    <> 
    
      <div className="w-80 h-90 content-center m-auto ">
        <div className="min-w-20 h-6 rounded-xl float text-center z-10 bg-red-600 text-white"> {name}</div>
        <div className="h-32">
          <img
            className="h-32 w-full rounded-2xl"
            // eslint-disable-next-line no-undef
            src={imageUrl || fallBackImage}  // Fallback if imageUrl is null
            alt={title}
          />
        </div>
        <div className="pl-2 pr-2 mt-1">
          <h5 className="font-bold min-h-14">
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h5>

          {/* Check if description exists, if not, provide a fallback */}
          <p className="overflow-hidden min-h-20">
            {description
              ? description.length > 100
                ? `${description.slice(0, 100)}...`
                : description
              : content
              ? content.length > 100
                ? `${content.slice(0, 100)}...`
                : content
              : "No description or content available."}
          </p>
              <p>Published At:{published}</p>
          <button
            className="float-end mr-2 text-white mt-1 p-1 rounded-xl bg-red-600 hover:bg-red-400"
            onClick={() => window.open(newsUrl, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
