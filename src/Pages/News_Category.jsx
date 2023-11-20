import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
const News_All = () => {
  const [scroll, scrollValue] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);
  window.addEventListener("scroll", function scroll() {
    scrollValue(window.Math.round(scrollY));
  });
  const { cat } = useParams();
  useEffect(() => {
    console.log(cat);
    // Check if the category exists in the news object
    if (news[cat]) {
      // Check if the newsId exists in the selected category
      const selectedNewsData = news[cat];
      if (selectedNewsData) {
        // Now you have the specific news item, you can set it to state
        setSelectedNews(selectedNewsData);
      } else {
        console.log(`News with category '${cat}'.`);
      }
    } else {
      console.log(`Category '${cat}' not found.`);
    }
  }, [cat]);
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
    BisniZ: {
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
  return (
    <>
      <header
        className={`w-full flex flex-col justify-center items-center fixed z-10 ${
          scroll >= 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Header />
      </header>
      <main className="w-full min-h-screen flex justify-center pt-44 px-20">
        <section className="w-full">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selectedNews ? (
                Object.keys(selectedNews).map((element, index) => (
                  <Link
                    key={index}
                    className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                    to={`/news/${
                      cat === "BisniZ"
                        ? "bisnis"
                        : cat === "SportZ"
                        ? "sports"
                        : cat === "ArtZ"
                        ? "arts"
                        : cat === "PoliticZ "
                        ? "politics"
                        : cat === "InspiraZ"
                        ? "inspiration"
                        : "headline"
                    }/${selectedNews[element].id}`}
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src="https://source.unsplash.com/random/480x360?1"
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {selectedNews[element].title}
                      </h3>
                      <span className="text-xs dark:text-gray-400">
                        {selectedNews[element].release}
                      </span>
                      <p>{selectedNews[element].description}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div>There are no news articles in this category yet.</div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:text-gray-400"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t-2">
        <Footer />
      </footer>
    </>
  );
};

export default News_All;
