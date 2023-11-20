import React, { useState } from "react";
import Header from "../components/Header";
import { BsX } from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Welcome = () => {
  const news = {
    headline: {
      Demi_Ganjar_Mahfud_Yenny_Wahid_Datangi_Pekerja_Migran_di_Malaysia: {
        id: "Demi_Ganjar_Mahfud_Yenny_Wahid_Datangi_Pekerja_Migran_di_Malaysia",
        title:
          "Demi Ganjar-Mahfud, Yenny Wahid Datangi Pekerja Migran di Malaysia",
        description:
          "Yenny Wahid menyosialisasikan pasangan Ganjar-Mahfud kepada para pekerja migran Indonesia di Malaysia.",
        images: "image_url1.jpg",
        release: "January 22, 2021",
        category: "BisniZ",
      },
    },
    bisnis: {
      Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan: {
        id: "Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
      Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan: {
        id: "Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan",
        title:
          "Perusahaan XYZ Meluncurkan Inovasi Terbaru dalam Bidang Kesehatan",
        description:
          "Perusahaan terkemuka, XYZ, mengumumkan peluncuran produk revolusioner yang akan mengubah cara kita melihat kesehatan. Artikel ini membahas fitur-fitur baru dan dampaknya.",
        images: "health_innovation_image.jpg",
        release: "2023-11-20",
        category: "Bisnis",
      },
      Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi: {
        id: "Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi",
        title:
          "Pasar Saham Mengalami Kenaikan Signifikan di Tengah Pemulihan Ekonomi",
        description:
          "Pasar saham melihat kenaikan yang kuat seiring pemulihan ekonomi global. Artikel ini menganalisis faktor-faktor di balik kenaikan tersebut dan prospek ke depan.",
        images: "stock_market_image.jpg",
        release: "2023-11-19",
        category: "Bisnis",
      },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: "startup_funding_image.jpg",
          release: "2023-11-18",
          category: "Bisnis",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: "online_retail_discount_image.jpg",
          release: "2023-11-17",
          category: "Bisnis",
        },
    },
    sports: {
      Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan: {
        id: "Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
      Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan: {
        id: "Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan",
        title:
          "Perusahaan XYZ Meluncurkan Inovasi Terbaru dalam Bidang Kesehatan",
        description:
          "Perusahaan terkemuka, XYZ, mengumumkan peluncuran produk revolusioner yang akan mengubah cara kita melihat kesehatan. Artikel ini membahas fitur-fitur baru dan dampaknya.",
        images: "health_innovation_image.jpg",
        release: "2023-11-20",
        category: "Bisnis",
      },
      Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi: {
        id: "Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi",
        title:
          "Pasar Saham Mengalami Kenaikan Signifikan di Tengah Pemulihan Ekonomi",
        description:
          "Pasar saham melihat kenaikan yang kuat seiring pemulihan ekonomi global. Artikel ini menganalisis faktor-faktor di balik kenaikan tersebut dan prospek ke depan.",
        images: "stock_market_image.jpg",
        release: "2023-11-19",
        category: "Bisnis",
      },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: "startup_funding_image.jpg",
          release: "2023-11-18",
          category: "Bisnis",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: "online_retail_discount_image.jpg",
          release: "2023-11-17",
          category: "Bisnis",
        },
    },
    arts: {
      Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan: {
        id: "Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
      Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan: {
        id: "Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan",
        title:
          "Perusahaan XYZ Meluncurkan Inovasi Terbaru dalam Bidang Kesehatan",
        description:
          "Perusahaan terkemuka, XYZ, mengumumkan peluncuran produk revolusioner yang akan mengubah cara kita melihat kesehatan. Artikel ini membahas fitur-fitur baru dan dampaknya.",
        images: "health_innovation_image.jpg",
        release: "2023-11-20",
        category: "Bisnis",
      },
      Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi: {
        id: "Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi",
        title:
          "Pasar Saham Mengalami Kenaikan Signifikan di Tengah Pemulihan Ekonomi",
        description:
          "Pasar saham melihat kenaikan yang kuat seiring pemulihan ekonomi global. Artikel ini menganalisis faktor-faktor di balik kenaikan tersebut dan prospek ke depan.",
        images: "stock_market_image.jpg",
        release: "2023-11-19",
        category: "Bisnis",
      },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: "startup_funding_image.jpg",
          release: "2023-11-18",
          category: "Bisnis",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: "online_retail_discount_image.jpg",
          release: "2023-11-17",
          category: "Bisnis",
        },
    },
    politics: {
      Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan: {
        id: "Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
      Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan: {
        id: "Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan",
        title:
          "Perusahaan XYZ Meluncurkan Inovasi Terbaru dalam Bidang Kesehatan",
        description:
          "Perusahaan terkemuka, XYZ, mengumumkan peluncuran produk revolusioner yang akan mengubah cara kita melihat kesehatan. Artikel ini membahas fitur-fitur baru dan dampaknya.",
        images: "health_innovation_image.jpg",
        release: "2023-11-20",
        category: "Bisnis",
      },
      Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi: {
        id: "Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi",
        title:
          "Pasar Saham Mengalami Kenaikan Signifikan di Tengah Pemulihan Ekonomi",
        description:
          "Pasar saham melihat kenaikan yang kuat seiring pemulihan ekonomi global. Artikel ini menganalisis faktor-faktor di balik kenaikan tersebut dan prospek ke depan.",
        images: "stock_market_image.jpg",
        release: "2023-11-19",
        category: "Bisnis",
      },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: "startup_funding_image.jpg",
          release: "2023-11-18",
          category: "Bisnis",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: "online_retail_discount_image.jpg",
          release: "2023-11-17",
          category: "Bisnis",
        },
    },
    inpirations: {
      Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan: {
        id: "Teknologi_Blockchain_Membuka_Peluang_Baru_di_Dunia_Keuangan",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
      Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan: {
        id: "Perusahaan_XYZ_Meluncurkan_Inovasi_Terbaru_dalam_Bidang_Kesehatan",
        title:
          "Perusahaan XYZ Meluncurkan Inovasi Terbaru dalam Bidang Kesehatan",
        description:
          "Perusahaan terkemuka, XYZ, mengumumkan peluncuran produk revolusioner yang akan mengubah cara kita melihat kesehatan. Artikel ini membahas fitur-fitur baru dan dampaknya.",
        images: "health_innovation_image.jpg",
        release: "2023-11-20",
        category: "Bisnis",
      },
      Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi: {
        id: "Pasar_Saham_Mengalami_Kenaikan_Signifikan_di_Tengah_Pemulihan_Ekonomi",
        title:
          "Pasar Saham Mengalami Kenaikan Signifikan di Tengah Pemulihan Ekonomi",
        description:
          "Pasar saham melihat kenaikan yang kuat seiring pemulihan ekonomi global. Artikel ini menganalisis faktor-faktor di balik kenaikan tersebut dan prospek ke depan.",
        images: "stock_market_image.jpg",
        release: "2023-11-19",
        category: "Bisnis",
      },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: "startup_funding_image.jpg",
          release: "2023-11-18",
          category: "Bisnis",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: "online_retail_discount_image.jpg",
          release: "2023-11-17",
          category: "Bisnis",
        },
    },
  };

  const [scroll, scrollValue] = useState(0);
  const [promoStatus, setPromoStatus] = useState(true);

  window.addEventListener("scroll", function scroll() {
    scrollValue(window.Math.round(scrollY));
  });

  const NEWS = (newsCategory) => {
    return Object.keys(newsCategory).map((element, index) => (
      <Link
        key={index}
        className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
        to={`/news/${element}/${newsCategory[element].id}`}
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={`https://source.unsplash.com/random/480x360?${index}`}
          alt=""
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {newsCategory[element].title}
          </h3>
          <span className="text-xs dark:text-gray-400">
            {newsCategory[element].release}
          </span>
          <p>{newsCategory[element].description}</p>
        </div>
      </Link>
    ));
  };
  return (
    <>
      <header
        className={`w-full flex flex-col justify-center items-center fixed z-10 ${
          scroll >= 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {promoStatus == true ? (
          <div className="w-full bg-gradient-to-r from-neutral-600 to-neutral-800  py-2 es:px-1 flex flex-row justify-around items-center">
            <div></div>
            <p className="text-white font-normal sm:text-[16px] es:text-[12px]">
              Happy Valentine&apos;s! Dapatkan <b>Diskon 20%</b> dengan code
              <b className="sm:text-[13px] es:text-[10px] text-blue-600 bg-white p-1 rounded-sm ms-1">
                ILOVEMYGF
              </b>
            </p>
            <BsX
              className="text-white text-2xl cursor-pointer"
              onClick={() => setPromoStatus(false)}
            />
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <Header />
      </header>
      <main className="w-full min-h-screen flex justify-center pt-44 px-20">
        <section className="w-full">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {NEWS(news.headline)}
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Bisnis...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.bisnis)}
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Bisnis...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.bisnis)}
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Sports...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.sports)}
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Arts...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.arts)}
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Politics...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.politics)}
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold py-4">Inspirations...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NEWS(news.inpirations)}
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className="border-t-2">
        <Footer />
      </footer>
    </>
  );
};

export default Welcome;
