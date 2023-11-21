// News.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News_page from "../templates/News_page";
import Ins1 from "../assets/images/Insp1.jpg";
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
    sports: {
      SEPAK_BOLAAA: {
        id: "SEPAK_BOLAAA",
        title: "Teknologi Blockchain Membuka Peluang Baru di Dunia Keuangan",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
    },
    arts: {
      ARTSSSSS: {
        id: "ARTSSSSS",
        title: "ARTSSSSS",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
    },
    politics: {
      POLITICS: {
        id: "POLITICS",
        title: "POLITICS",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: "blockchain_image.jpg",
        release: "2023-11-21",
        category: "Bisnis",
      },
    },
    inpirations: {
      INSPIRASI: {
        id: "INSPIRASI",
        title: "INSPIRASI",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: Ins1,
        release: "2023-11-21",
        category: "Inpirasi",
      },
      Menjadi_Pemenang_Kelompok_Best_Presentation_Kelompok_ini_Ternyata_Ambil_Ide_dari_Program_Kerja_Asli_BEM_FISIP_UNS:
        {
          id: "Menjadi_Pemenang_Kelompok_Best_Presentation_Kelompok_ini_Ternyata_Ambil_Ide_dari_Program_Kerja_Asli_BEM_FISIP_UNS",
          title:
            "Menjadi Pemenang Kelompok ‘Best Presentation’, Kelompok ini Ternyata Ambil Ide dari Program Kerja Asli BEM FISIP UNS",
          description: [
            "Surakarta – Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Sebelas Maret (BEM FISIP UNS) mengadakan program kerja latihan kepemimpinan kepada mahasiswa FISIP yang dikenal dengan LKMM Dasar atau LKMM-D. Kegiatan yang dilaksanakan dua hari ini, mulai dari Sabtu (4/11/2023) hingga Minggu (5/11/2023) mengimbau para peserta untuk berdiskusi terkait studi kasus yang sering terjadi pada organisasi, yang dimana setiap kelompoknya mendapat studi kasus yang berbeda, untuk dipresentasikan pada hari kedua dari kegiatan ini.",
            "Tidak disangka, terdapat salah satu kelompok, kelompok Sherlock Holmes, yang memaparkan hasil diskusinya berbeda dengan kelompok-kelompok lainnya karena mereka memberikan solusi dengan membuat beberapa program kerja yang sekiranya dapat dilakukan pada organisasi tersebut. Diduga bahwa, program kerja yang dipaparkan merupakan mirip beberapa program kerja dari BEM FISIP UNS. “Jujur, keren sih kelompoknya, dia beneran kaya mengimplementasiin proker PO (Pengembangan Organisasi BEM FISIP UNS) untuk problem solving, keren,” tanggapan Nafi (19), salah satu peserta LKMM-D yang menyaksikan presentasi tersebut. Ternyata, kelompok ini mengambil inspirasi dari dari salah satu program kerja BEM FISIP UNS, khususnya Kementerian Pengembangan Organisasi (PO) sebagai solusi dari permasalahan kelompok studi kasus yang didapat Tetapi, menurut panelis yang menilai kelompok ini cukup senang dengan apa yang telah dijelaskan oleh perwakilan anggota dari Sherlock Holmes. “Dari case permasalahan yang diberikan kelompok kalian udah memberikan solusi serta program yang baik,” komentar Almahdi (21) yang pada saat itu menjadi salah satu panelis dalam sesi pitching desk pada kegiatan ini, mewakili DEMA FISIP UNS.",
            "“Kalo dari case permasalahan yang ada di dalam kelompok kita yang digaris bawahi adalah adanya circle internal yang membuat informasi itu terhambat dan hanya diketahui oleh circle-circle yang ada di dalam internal organisasi dan hal tersebut menghambat realisasi program-program kerja yang ada, makanya kita buat program ‘Chill with Us’ sekalian ‘Ceria:Cerita Bersama’. Menurut kelompok kita dua program itu adalah program yang efektif dan efisien yang dapat dilakukan dalam menghadapi permasalahan tersebut dibalik itu didukung oleh siklus organisasi yang ada di dalam kampus yang sering kita temui atau kita dengar kabarnya,” penjelasan dari salah satu anggota kelompok tersebut, Lippo (20) yang ternyata merupakan salah satu pengurus dari Kementerian Pengembangan Organisasi BEM FISIP UNS dan juga merupakan salah satu pemberi ide dari studi kasus yang didapat.",
            "“Jujur, programnya itu sebenarnya awalnya kita udah kasih pendapat masing masing, nah aku kan di PO (Pengembangan Organisasi) dan aku rasa itu relevan banget sama diri aku terlebih aku dari Kementerian PO-BEM FISIP UNS-, yaudah aku coba kasih pendapat ‘Chill with Us’ dan ‘Ceria’, mereka revisi yang mana harus ditambahin atau dikurangin dan akhirnya ditambahin atau dikurangin dan akhirnya setelah diskusi bareng semua pada setuju sama program tersebut. Mereka juga bantu dari segi waktu pelaksanaan programnya, tujuan programnya mau ke siapa aja,” lanjut penjelasan alasan memilih program tersebut sebagai solusi kelompoknya oleh Lippo (20).",
            "Hasil diskusi yang dijelaskan oleh kelompok Sherlock Holmes ini berbeda dengan lain, sehingga pada saat sesi awarding, kelompok ini mendapatkan penghargaan ‘Best Presentation’ yang berarti kelompok ini adalah yang memberikan solusi terbaik dari studi kasus yang didapat. “Keputusan kemaren itu diambil dari penilaian panitia dan panelis. Nah, kalo dilihat dari segi interaktifnya, Sherlock Holmes ini udah memenuhi, terus juga mereka benar-benar bikin rancangan proker sebagai problem solving atas case yang udah dikasih gitu,” jelas Jasmine (19), sebagai salah satu panitia penyelenggara LKMM-D.",
            "LKMM Dasar",
            "Latihan Keterampilan Manajemen Mahasiswa Dasar atau biasa disebut dengan LKMM-D merupakan salah satu program kerja dari Kementerian Pengembangan Sumber Daya Mahasiswa (PSDM) BEM FISIP UNS yang bertujuan untuk membekali mahasiswa agar memiliki soft skill yang memadai, kemampuan mengaktualisasi diri, dan keterampilan dasar berorganisasi. Kegiatan yang berlangsung selama dua hari ini menyungsung tema “Leader is An Action, Not Position”.",
            "Kegiatan ini berlangsung selama dua hari. Hari pertama pelaksanaan dibuka dengan sambutan oleh Verry Firdaus (19) sebagai Ketua Pelaksana dari LKMM-D, “LKMM-D merupakan kegiatan pembekalan untuk Mahasiswa FISIP angkatan 2021 dan 2022. Kegiatan ini bertujuan membekali mahasiswa dengan keterampilan dalam berorganisasi seperti manajemen diri, manajemen organisasi, etika organisasi, teknik administrasi, dan relasi. Melalui kegiatan LKMM-D, mahasiswa FISIP UNS diharapkan mampu memahami kemampuan manajemen diri dan mengoptimalkan keterampilan dalam berorganisasi agar dapat menjadi individu yang kritis dan berintegritas,” kata Ketua Pelaksana LKMM-D yang disampaikannya ketika sambutan. Dilanjut dengan sambutan oleh Prama Aditya (21) selaku Presiden BEM FISIP UNS. Kegiatan ini kemudian dilanjut dengan penjelasan materi yang dihadiri oleh dua pembicara yaitu Kayyis Hawari (24) dari Menteri PSDM BEM UNS 2021 dan Audrey Samantha (22) yang merupakan Founder dari Talk-A-Tive sekaligus Awardee IISMA Hanyang University 2022.",
            "Acara ini juga menghadirkan Enrique Owen (22) yang merupakan Awardee IISMA University of Pennsylvania 2022 sekaligus President of IISMA Alumni Club dalam sesi talkshow yang banyak membahas terkait kinerja dalam berorganisasi, permasalahan organisasi, dan terdapat sesi diskusi terkait organisasi. Kemudian, dilanjutkan dengan sesi presentasi yang bernama pitching desk yang dimana para peserta diminta untuk mempresentasikan hasil diskusinya terkait permasalahan organisasi yang didapat pada saat hari pertama. Sesi pitching desk ini juga menghadirkan beberapa panelis sebagai juri yang terdapat Presiden BEM FISIP UNS 2023, Prama Aditya (21), Almahdi Dwita Purnama (21) dari DEMA FISIP UNS 2023, Nabila Kusnia Hayati (21) selaku Sekretaris Jenderal HIMAKOM 2022, Raditya Anung Estiawan (21) selaku Menteri PSDM BEM FISIP 2022, dan Nadia Afifah Wardani (21) selaku Sekretaris Jenderal BEM FISIP UNS 2023. ",
            "Setelah rangkaian tersebut selesai, ditutup dengan sesi awarding dengan memberikan tiga kategori, yaitu Best Kahoot, Ter-Stand Out, dan Best Presentation. Best Kahoot dimenangkan oleh Rahma (19), peserta ter-stand out didapati oleh Alvina Rahma Khalishafitri (19), dan Best Presentation diraih oleh kelompok Sherlock Holmes. “Acaranya sangat-sangat insightful dan dapat membantu kita, para next pengurus organisasi dalam menciptakan lingkungan yang baik untuk organisasi yang kita pegang nanti, aku juga senang karena aku suka banget sama Kak Audrey dan Kak Owen sebagai pembicaranya,” komentar Khalisha (19) sebagai salah satu peserta dari kegiatan tersebut, sekaligus menjadi peserta ter- stand out dalam kegiatan yang dihadiri oleh 50 peserta.",
          ],
          images: Ins1,
          release: "2023-11-21",
          category: "Inpirasi",
        },
    },
  };
  const { cat, newsId } = useParams();

  useEffect(() => {
    // Check if the category exists in the news object
    console.log(cat);
    console.log(newsId);
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
          images={selectedNews.images}
          deskripsi={selectedNews.description}
          category={selectedNews.category}
        />
      )}
    </div>
  );
};

export default News;
