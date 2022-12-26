import React from "react";

const Post = () => {
  return (
    <div className=" shadow overflow-hidden rounded-lg cursor-pointer">
      <img className="w-full" src="https://roar.media/wp-content/uploads/2022/11/Article-Cover-4-1024x538.jpg" />
      <div className="content-wrap p-2">
        <header className="p-2">
          <h1 className="text-xl font-bold">Is Sri Lanka’s Education Dependent On The Saree?</h1>
          <p className="mt-2 text-md">
            The topic of forced sarees as a dress code for public school teachers has been divisive, and it only got more so when roughly a hundred teachers wore smart casual clothes to school on 21 November and posted about it online.
          </p>
        </header>
        <footer className="p-2 text-xs flex gap-4 text-gray-400 border-t border-gray">
          <p className="font-semibold">Insights</p>
          <p>November 25 2022</p>
        </footer>
      </div>
    </div>
  )
}

export default Post;