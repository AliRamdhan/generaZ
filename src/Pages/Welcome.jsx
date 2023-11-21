import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Modal } from "flowbite-react";
import { BsX } from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Ins1 from "../assets/images/Insp1.jpg";
import ModalHighligt from "../components/ModalHighligt";
const Welcome = () => {
  const [scroll, scrollValue] = useState(0);
  const [promoStatus, setPromoStatus] = useState(true);
  window.addEventListener("scroll", function scroll() {
    scrollValue(window.Math.round(scrollY));
  });

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
        images: Ins1,
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
      <main className="w-full min-h-screen flex justify-center pt-44 2xl:px-24 xl:px-20 lg:px-20">
        <section className="w-full">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {Object.keys(news.headline).map((element, index) => (
              <Link
                key={index}
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group border-2 hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
                to={`/news/headline/${news.headline[element].id}`}
              >
                <img
                  src="https://source.unsplash.com/random/480x360"
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    {news.headline[element].title}
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    {news.headline[element].release}
                  </span>
                  <p>{news.headline[element].description}</p>
                </div>
              </Link>
            ))}
            <div className="w-full">
              <h2 className="text-2xl font-bold py-4">Bisnis...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.keys(news.bisnis).map((element, index) => (
                  <Link
                    key={index}
                    className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                    to={`/news/bisnis/${news.bisnis[element].id}`}
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src="https://source.unsplash.com/random/480x360?1"
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.bisnis[element].title}
                      </h3>
                      <span className="text-xs dark:text-gray-400">
                        {news.bisnis[element].release}
                      </span>
                      <p>{news.bisnis[element].description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold py-4">Sports...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.keys(news.sports).map((element, index) => (
                  <Link
                    key={index}
                    className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                    to={`/news/sports/${news.sports[element].id}`}
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src="https://source.unsplash.com/random/480x360?1"
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.sports[element].title}
                      </h3>
                      <span className="text-xs dark:text-gray-400">
                        {news.sports[element].release}
                      </span>
                      <p>{news.sports[element].description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold py-4">Arts...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.keys(news.arts).map((element, index) => (
                  <Link
                    key={index}
                    className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                    to={`/news/arts/${news.arts[element].id}`}
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src="https://source.unsplash.com/random/480x360?1"
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.arts[element].title}
                      </h3>
                      <span className="text-xs dark:text-gray-400">
                        {news.arts[element].release}
                      </span>
                      <p>{news.arts[element].description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold py-4">Politics...</h2>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.keys(news.politics).map((element, index) => (
                  <Link
                    key={index}
                    className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                    to={`/news/politics/${news.politics[element].id}`}
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src="https://source.unsplash.com/random/480x360?1"
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.politics[element].title}
                      </h3>
                      <span className="text-xs dark:text-gray-400">
                        {news.politics[element].release}
                      </span>
                      <p>{news.politics[element].description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-bold py-4">Inspirasi...</h2>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.keys(news.inpirations).map((element, index) => (
                    <Link
                      key={index}
                      className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                      to={`/news/inpirations/${news.inpirations[element].id}`}
                    >
                      <img
                        role="presentation"
                        className="object-cover w-full rounded h-44 dark:bg-gray-500"
                        src={news.inpirations[element].images}
                      />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                          {news.inpirations[element].title}
                        </h3>
                        <span className="text-xs dark:text-gray-400">
                          {news.inpirations[element].release}
                        </span>
                        {Array.isArray(
                          news.inpirations[element].description
                        ) ? (
                          <p className="line-clamp-6">
                            {news.inpirations[element].description[0]}
                          </p>
                        ) : (
                          <p className="line-clamp-4">
                            {news.inpirations[element].description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t-2">
        <Footer />
      </footer>
      <ModalHighligt />
    </>
  );
};

export default Welcome;
