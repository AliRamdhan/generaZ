// News.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News_page from "../templates/news_page";
const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

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
  };
  const { cat, newsId } = useParams();

  useEffect(() => {
    // Check if the category exists in the news object
    if (news[cat]) {
      // Check if the newsId exists in the selected category
      const selectedNewsData = news[cat][newsId];

      if (selectedNewsData) {
        // Now you have the specific news item, you can set it to state
        setSelectedNews(selectedNewsData);
      } else {
        console.log(`News with ID '${newsId}' not found in category '${cat}'.`);
      }
    } else {
      console.log(`Category '${cat}' not found.`);
    }
  }, [cat, newsId]);

  // Render your news data here
  return (
    <div>
      {selectedNews && (
        <News_page
          title={selectedNews.title}
          release={selectedNews.release}
          imagestitle={``}
          deskripsi={selectedNews.description}
          category={selectedNews.category}
        />
      )}
    </div>
  );
};

export default News;
