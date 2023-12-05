import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import Ins7 from "../assets/images/insp7.jpg";
import { Link } from "react-router-dom";
const ModalHighligt = () => {
  const [openModal, setOpenModal] = useState(true);
  const theme = {
    root: {
      base: "z-50 h-modal h-screen bg-gray-600 overflow-y-auto overflow-x-hidden md:inset-0 md:h-full ",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-90",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-2xl",
        "2xl": "max-w-4xl",
        "3xl": "max-w-4xl",
        "4xl": "max-w-5xl",
        "5xl": "max-w-6xl",
        "6xl": "max-w-7xl",
        "7xl": "max-w-8xl",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative rounded-lg shadow bg-[#322557] flex flex-col max-h-[90vh] text-white dark:text-white",
    },
    body: {
      base: "p-6 flex-1 overflow-auto ",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5",
      popup: "p-2 border-b-0",
      title: "text-xl font-medium text-white dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  };

  const highlight = {
    id: "Menelusuri_Salah_Satu_Kampung_ProKlim_di_Magelang",
    title: "Menelusuri Salah Satu Kampung ProKlim di Magelang",
    descriptions:
      "Dalam beberapa tahun belakangan ini, kawasan kampung Jambon Gesikan, Cacaban, Magelang Tengah, Kota Magelang menarik perhatian masyarakat di Jawa Tengah hingga di luar pulau jawa sebagai salah satu tempat belajar mengelola sampah dan tanaman organik. Hal tersebut memiliki dampak baik bagi kemajuan kampung tersebut......",
    images: Ins7,
    release: "Senin, 27 November 2023",
    category: "Environment",
    author: "Farah Salsabila",
  };

  return (
    <>
      <Modal theme={theme} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{highlight.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 w-full flex flex-col items-center">
            <img src={highlight.images} alt="" className="w-3/4 h-72" />
            <p className="text-base leading-relaxed">
              {highlight.descriptions}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/news/inpirations/${highlight.id}`}>
            <Button className="hover:text-gray-600">Continue Read</Button>
          </Link>
          <Button
            onClick={() => setOpenModal(false)}
            className="hover:text-red-700"
          >
            Later
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalHighligt;
