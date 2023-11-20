import { useState } from "react";
import { Button, Modal, Textarea, Label, TextInput } from "flowbite-react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
  const newses = [
    { title: "BisniZ" },
    { title: "SportZ" },
    { title: "ArtZ" },
    { title: "PoliticZ" },
    { title: "InspiraZ" },
  ];

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);
  return (
    <>
      <section className="2xl:w-[1400px] xl:w-[1280px] lg:w-[900px] lg:flex flex-col justify-between items-center py-4 px-8 bg-gradient-to-r bg-violet-400 bg-violet-500">
        <div
          className={`w-full lg:flex flex-row justify-between items-center border-b  ${
            window.scrollY >= 50 ? "xl:hidden" : ""
          }`}
        >
          <Link
            to={`/`}
            className="text-3xl font-bold flex flex-col bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text"
          >
            GeneraZ
            <span className="text-[16px] text-slate-800 font-normal">
              Inspirasi untuk GeneraZ
            </span>
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() => props.setOpenModal("default")}
              className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-600 px-4 rounded-full font-medium text-white border-0 focus:ring-0 py-2"
            >
              Get In Touch
            </button>
            <Link
              to="/login"
              className="bg-transparent hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 px-6 rounded-full font-medium text-gray-800 hover:text-white border-[1px] border-gray-600 hover:border-white focus:ring-0 py-2"
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
            {newses.map((news, index) => (
              <li key={index}>
                <Link
                  to={`/news/${news.title}`}
                  className={`text-[15px] font-medium text-slate-900 hover:text-gray-600 transition-all ${
                    location.pathname === "/"
                      ? "px-2.5 py-0.5 border-b-2 border-gray-600"
                      : ""
                  }`}
                >
                  {news.title}
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
        <a
          href="#home"
          className="md:text-3xl text-2xl es:text-[20px] text-blue-600 font-bold flex flex-col"
        >
          Decode Course
          <span className="md:text-[16px] text-sm text-slate-800 font-normal">
            Upgrade cara belajar mu
          </span>
        </a>
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
          color="#2563eb"
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
              <a
                href="#courses"
                className="text-[17px] font-semibold text-slate-900 hover:text-gray-600"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#mentor"
                className="text-[17px] font-semibold text-slate-900 hover:text-gray-600 transition-all"
              >
                News
              </a>
            </li>
            <li className="w-full">
              <Button
                onClick={() => props.setOpenModal("default")}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-600 px-4 rounded-full font-semibold text-white border-0 focus:ring-0"
              >
                Get In Touch
              </Button>
            </li>
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
