import { useState } from "react";
import { Button, Modal, Textarea, Label, TextInput } from "flowbite-react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
const Header = () => {
  const newses = [
    { title: "bisnis" },
    { title: "sports" },
    { title: "arts" },
    { title: "politics" },
    { title: "inpirations" },
  ];

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [listNews, setListNews] = useState(false);
  return (
    <>
      <section className="2xl:w-[1400px] xl:w-[1280px] lg:w-[900px] hidden lg:flex flex-col justify-between items-center py-4 px-8 bg-[#322557] text-white">
        <div
          className={`w-full lg:flex flex-row justify-between items-center border-b relative  ${
            window.scrollY >= 50 ? "xl:hidden" : ""
          }`}
        >
          <Link to={`/`}>
            <img src={Logo} alt="Logo generaz" className="h-16 w-40" />
          </Link>

          <div className="w-[500px] flex justify-between items-center gap-3">
            <>
              <fieldset className="space-y-1">
                <label for="Search" className="hidden">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="black"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-gray-100"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm rounded-md sm:w-auto border-b-2"
                  />
                </div>
              </fieldset>
            </>

            <button
              onClick={() => props.setOpenModal("default")}
              className="w-56 border border-gray-600 hover:border-white px-4 rounded-full font-medium text-white focus:ring-0 py-2"
            >
              Get In Touch
            </button>
            <Link
              to="/login"
              className="w-32 bg-transparent px-6 rounded-full font-medium text-gray-800 text-white border-[1px] border-gray-600 hover:border-white focus:ring-0 py-2"
            >
              Masuk
            </Link>
          </div>
        </div>
        <nav>
          <ul
            className={`w-full flex justify-between items-center gap-x-12 pt-4 ${
              window.scrollY >= 50 ? "xl:pt-0" : ""
            }`}
          >
            <img
              src={Logo}
              alt="Logo generaz"
              className={`h-16 w-36 transition-all ${
                window.scrollY >= 50 ? "block" : "hidden"
              }`}
            />
            {newses.map((news, index) => (
              <li key={index}>
                <Link
                  to={`/news/${news.title}`}
                  className={`text-[15px] font-medium hover:text-gray-600 transition-all ${
                    location.pathname === `/news/${news.title}`
                      ? "px-2.5 py-0.5 border-b-2 border-gray-600"
                      : ""
                  }`}
                >
                  {news.title}Z
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div
        className={`w-full lg:hidden flex flex-row justify-between items-center py-2 bg-white z-10 px-8 es:px-3 ${
          navbarStatus ? "shadow-none" : "shadow-lg"
        }`}
      >
        <Link
          href="#home"
          className="text-3xl font-bold flex flex-col bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text"
        >
          GeneraZ
          <span className="text-[16px] text-slate-800 font-normal">
            Inspirasi untuk GeneraZ
          </span>
        </Link>
        <Hamburger
          size={26}
          onToggle={(toggled) => {
            if (toggled) {
              setNavbarStatus(true);
            } else {
              setNavbarStatus(false);
            }
          }}
          toggled={isOpen}
          toggle={setOpen}
          color="#000000"
        />
      </div>
      <section
        className={`w-full ${
          navbarStatus ? "flex" : "hidden"
        } justify-center items-center bg-white py-5 shadow-lg`}
      >
        <nav className="w-full px-10">
          <ul className="flex flex-col items-center gap-y-4">
            <li className="">
              <Link
                to={`/`}
                className="text-[17px] font-semibold text-slate-900 hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li
              className="text-[17px] font-semibold text-slate-900 hover:text-gray-600"
              onClick={() => setListNews(!listNews)}
            >
              News
            </li>
            <ul
              className={`transition-all duration-300 flex flex-col justify-between items-center ${
                listNews ? "h-44" : "h-0 hidden"
              }`}
            >
              {newses.map((news, index) => (
                <li key={index}>
                  <Link
                    to={`/news/${news.title}`}
                    className="text-[17px] font-semibold text-slate-900 hover:text-gray-600"
                  >
                    {news.title}Z
                  </Link>
                </li>
              ))}
            </ul>

            <li className="w-full">
              <Link to="/login">
                <Button className="w-full bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 px-4 rounded-full font-medium text-blue-600 hover:text-white border-[1px] border-blue-600 hover:border-white focus:ring-0">
                  Masuk
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Get in touch with us</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex w-full flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Email" />
                </div>
                <TextInput
                  id="email2"
                  placeholder="example@gmail.com"
                  required
                  shadow
                  type="email"
                  autoComplete="off"
                />
              </div>
              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  className="resize-none focus:border-blue-600"
                  id="comment"
                  placeholder="Leave a comment..."
                  required
                  rows={4}
                />
              </div>
              <Button
                className="mt-5 bg-blue-600 enabled:hover:bg-blue-700"
                type="submit"
              >
                Kirim
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
