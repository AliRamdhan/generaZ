const News_page = ({
  title,
  release,
  author,
  caption,
  images,
  deskripsi,
  category,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }} // Fix the style attribute here
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }} // Fix the style attribute here
          ></div>
          <img
            src={images} // Use the 'images' prop here
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-gray-800 text-gray-200 inline-flex items-center justify-center mb-2"
            >
              {category}
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {title}
            </h2>
            <div className="mt-3">
              <p className="font-medium text-gray-200 text-md">
                by <span className="font-bold"> {author} </span>
              </p>
              <p className="font-semibold text-gray-400 text-xs pt-1"> {release} </p>
            </div>
          </div>
        </div>
        <div className="px-4 mt-2 lg:px-0 text-gray-700 max-w-screen-md mx-auto text-sm leading-relaxed text-center">
          {caption}
        </div>
        <div className="px-4 lg:px-0 mt-8 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          {Array.isArray(deskripsi) ? (
            <>
              {deskripsi.map((paragraph, index) => (
                <p key={index} className="my-5">
                  {paragraph}
                </p>
              ))}
            </>
          ) : (
            <p className="pb-6">{deskripsi}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default News_page;
