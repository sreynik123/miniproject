import Header from "./Header";
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="flex flex-col -z-10">
        <h2
          data-aos="fade-down"
          className="text-5xl text-center mt-20 font-[700]"
        >

        </h2>

        <div className="flex flex-row justify-evenly mt-20">
          <div>{/* Empty */}</div>

          <div className="flex relative z-10 ml-40">
            <img
              data-aos="fade-left"
              id="hover-onme"
              className="hover:-left-40 absolute -left-20 mt-10 z-10 shadow-xl shadow-gray-600 rounded-3xl"
              src="https://media.themoviedb.org/t/p/w220_and_h330_face/xYduFGuch9OwbCOEUiamml18ZoB.jpg"
              alt=""
            />

            <img
              className="z-20 shadow-2xl shadow-gray-600 rounded-3xl"
              src="https://media.themoviedb.org/t/p/w220_and_h330_face/wWba3TaojhK7NdycRhoQpsG0FaH.jpg"
              alt=""
            />

            <img
              data-aos="fade-right"
              id="hover-bort"
              className="hover:ml-20  absolute -mt-10 left-20 z-10 shadow-xl shadow-gray-600 rounded-3xl"
              src="https://media.themoviedb.org/t/p/w220_and_h330_face/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <img
        className="h-screen fixed top-0 left-0 w-full -z-10"
        src="https://png.pngtree.com/background/20210711/original/pngtree-steam-wave-international-film-festival-banner-poster-picture-image_1068274.jpg"
        alt="movie-together"
      />
    </>
  );
}
