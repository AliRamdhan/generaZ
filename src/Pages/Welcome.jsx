import React, { useState } from "react";
import Header from "../components/Header";
import { BsX } from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Ins1 from "../assets/images/Insp1.jpg";
import Ins2 from "../assets/images/insp2.jpg";
import Ins3 from "../assets/images/insp3.jpg";
import Ins4 from "../assets/images/insp4.jpg";
import Ins5 from "../assets/images/insp5.jpg";
import Ins6 from "../assets/images/insp6.jpg";
import Ins7 from "../assets/images/insp7.jpg";
import Ins8 from "../assets/images/insp8.jpg";
import Ins9 from "../assets/images/insp9.jpg";
import Ins10 from "../assets/images/insp10.jpg";
import Ins11 from "../assets/images/insp11.jpg";
import Ins12 from "../assets/images/insp12.jpg";
import Ins13 from "../assets/images/insp13.jpg";
import Ins14 from "../assets/images/insp14.jpg";
import Ins15 from "../assets/images/insp15.jpg";
import Ins16 from "../assets/images/insp16.jpg";
import Ins17 from "../assets/images/insp17.jpg";
import Ins18 from "../assets/images/insp18.jpg";
import ModalHighligt from "../components/ModalHighligt";
import Simbol from "../assets/images/simbol.jpg";
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
        images: Simbol,
        release: "Senin, 21 November 2023",
        category: "BisniZ",
        author: "Genera-Z",
      },
    },
    bisnis: {
      Banyak_Peminat_Cromboloni_di_Toko_Bolo_Bake_Manahan_Solo_Kini_Ramai_dicari_Netizen:
        {
          id: "Banyak_Peminat_Cromboloni_di_Toko_Bolo_Bake_Manahan_Solo_Kini_Ramai_dicari_Netizen",
          title:
            "Banyak Peminat : Cromboloni di Toko Bolo Bake Manahan Solo Kini Ramai dicari Netizen",
          description: [
            "Surakarta - Cromboloni adalah salah satu dessert yang sedang populer dan banyak diburu oleh warga net, sehingga di setiap toko yang menjualnya selalu habis terjual cepat settiap harinya. Bahkan banyak yang rela antre sebelum tokonya buka. ",

            "Dessert asal Prancis ini merupakan perpaduan antara croissant dan bomboloni. Croissant yang flaky dibentuk mirip seperti bomboloni yang bulat dan diberikan filling di dalamnya.",

            "Terdapat salah satu akun Tik Tok @mariavehera257 asal Dubai yang selalu membuat konten ASMR memakan cromboloni di dalam mobil. Setiap hari dia selalu mengupload video ASMR memakan Cromboloni berbagai macam rasa dan itu sangat menggiurkan siapapun yang menontonnya. Videonya kini viral dan selalu lewat di For You Page (FYP) Tik Tok banyak orang, hal itu membuat warga net mulai kepo dan tertarik untuk mencari cromboloni.",

            "Di Solo, terdapat dua tempat bakery yang menjadi tujuan warga Solo untuk mencoba cromboloni, yaitu AMCO Cafe dan Bolo Bakery Manahan. Kedua tempat itu memiliki menu yang sedang banyak dicari oleh netizen. ",

            "Bolo Bakery yang bertempatan di Jalan MT. Haryono No. 15, Manahan, Solo merupakan bagian dari Warteg Bolodewe yang tempatnya memang menjadi satu. Bolo Bakery sendiri menjadi spesialis menjual berbagai macam jenis dessert, mulai dari macaron, croissant, mille crepes, cake slices, cookies, dan cromboloni. Namun, selain dessert mereka juga menjual berbagai minuman untuk dinikmati bersama saat makan dessert. Diantaranya ada mulai dari berbagai macam jenis kopi (espresso, cappuccino, caffe latte, caramel latte dan masih banyak lagi varian kopi lainnya). Buat yang kurang suka dengan kopi, mereka juga menyediakan minuman non kopi, diantaranya chocolate, teh, ice lychee, dan lainnya. ",

            "Jika kalian mau makan di tempat, sangat cocok dan nyaman sekali jika disambi dengan mengerjakan tugas, belajar, ataupun hanya untuk bercengkrama dengan teman dan sahabat. Karena bakery ini memiliki interior yang membuat pengunjung nyaman dan estetik yang bisa kalian gunakan untuk berfoto kemudian di upload di sosial media kalian.",

            "Terdapat dua tempat yang mereka sediakan yaitu outdoor dan indoor di lantai 2 nya. Bisa digunakan sesuai kenyaman masing - masing pengunjung.",

            "Cromboloni yang ramai dicari saat ini di Bolo Bakery memiliki 4 varian rasa, yakni cokelat, strawberry, red velvet, dan juga tiramisu. Harga satuannya dibanderol RP 22.000 dengan ukuran sedang dan cukup mengenyangkan.",

            "‘Kami untuk sekarang menjual sekitar 200 pcs lebih dan selalu habis setiap harinya. Bahkan di pagi hari, saat toko kami baru buka sudah penuh didatangi pembeli’ kata salah satu karyawan Bolo Bakery yang biasa di panggil mas Dafa.",

            "Cromboloni ini dapat dibeli langsung dan dapat dipesan dari aplikasi GOJEK dan GRAB. Selain dine-in cromboloni juga bisa dibawa pulang untuk diberikan kepada teman ataupun saudara. Setiap penyajian cromboloni sebelum diberikan kepada pelanggan, akan dipanaskan 150 derajat selama 3 menit terlebih dahulu di oven, agar saat di makan tekstur luarnya tetap flaky dan isian di dalamnya lumer.",

            `‘Dari gigitan pertama aku sudah merasakan sensasi enaknya dari cromboloni. Aku sudah mencoba semua rasa yang tersedia dan yang paling favorit buat aku cromboloni strawberry, karena krim yang ada di dalamnya berasa banget dan buat aku nagih’ kata Abyan, salah satu pengunjung Bolo Bakery yang membeli cromboloni. `,
          ],
          images: Ins12,
          release: "Minggu, 4 Desember 2023",
          category: "Bisnis",
          author: "Diah Wahyuningrum",
        },
      Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru:
        {
          id: "Startup_Teknologi_Mendapatkan_Pendanaan_Besar_untuk_Pengembangan_Produk_Baru",
          title:
            "Startup Teknologi Mendapatkan Pendanaan Besar untuk Pengembangan Produk Baru",
          description:
            "Startup inovatif di bidang teknologi berhasil mendapatkan pendanaan signifikan dalam putaran pendanaan terbarunya. Artikel ini membahas rencana pengembangan produk baru dan potensi dampaknya.",
          images: Simbol,
          release: "Sabtu, 18 November 2023",
          category: "Bisnis",
          author: "Genera-Z",
        },
      Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan:
        {
          id: "Ritel_Online_Terbesar_Meluncurkan_Program_Diskon_untuk_Menarik_Pelanggan",
          title:
            "Ritel Online Terbesar Meluncurkan Program Diskon untuk Menarik Pelanggan",
          description:
            "Platform belanja online terkemuka mengumumkan program diskon besar-besaran sebagai bagian dari strategi untuk menarik lebih banyak pelanggan. Artikel ini memberikan informasi tentang program diskon dan dampaknya pada pasar.",
          images: Simbol,
          release: "Jumat, 17 November 2023",
          category: "Bisnis",
          author: "Genera-Z",
        },
    },
    sports: {
      INSIDEN_2_PEMBALAP_MOTOR_TERJATUH_DI_SIRKUIT_NON_PERMANEN_ALUN_ALUN_KARANGANYA:
        {
          id: "INSIDEN_2_PEMBALAP_MOTOR_TERJATUH_DI_SIRKUIT_NON_PERMANEN_ALUN_ALUN_KARANGANYA",
          title:
            "INSIDEN 2 PEMBALAP MOTOR TERJATUH DI SIRKUIT NON PERMANEN ALUN-ALUN KARANGANYAR",
          description: [
            "Karanganyar - Sabtu, 25 November 2023 bertepatan di kota Karanganyar telah berlangsung even balap Casytha Manahadap Road Race 2023 yang merupakan kejuaran provinsi Jawa Tengah. Acara tersebut di hadiri oleh pembalap motor dari beberapa kota di seluruh Indonesia dengan berbagai kelas jenis motor. Tidak hanya di ikuti pembalap kategori pria dewasa saja, tapi juga ada pembalap dengan kategori wanita dan juga pembalap remaja (usia 14 tahun dan 16 tahun) yang juga turut andil dalam event tersebut.",
            "Balapan disaksikan oleh banyak penonton dan berlangsung dengan persaingan yang begitu sengit antar pembalap di dalam sirkuit. Para pembalap bersaing untuk memperoleh waktu secepat mungkin agar mendapatkan poin yang maksimal. Sebelumnya, area sirkuit merupakan sebuah jalan raya yang didesain dan di modifikasi menjadi sikuit non permanen. Desain sirkuit tersebut memiliki beberapa spot yang menyulitkan para rider. Terdapat spot berupa tikungan tajam yang seringkali membuat para rider hampir tergelincir dan kehilangan keseimbangan.",
            "Nasib kurang beruntuk dialami oleh 2 pembalap yang terjatuh saat melintasi salah satu tikungan tajam didalam area lintasan. Kedua pembalap tersebut bernama M. Zaky asal Wonogiri (Tim Juragan Trail Gajah Putih) dan Wawan Tembonk asal Boyolali (Tim Rapi Elektrik YKRT). Pada putaran ini kedua pembalap memang bersaing dengan ketat. Keduanya saling salip-menyalip dan juga memamerkan skill yang memukau di hadapan penonton. Namun di tengah-tengah putaran, nasib kurang beruntung dialami oleh dua pembalap tersebut. Mereka bersenggolan ketika melintasi salah satu tikungan, yang mengakibatkan mereka berdua terjatuh.",
            "Terlihat bagaimana M. Zaky (motor velg warna gold) yang tergelincir saat di tikungan yang di ikuti dari belakang oleh Wawan Tembonk. Kemudian keduanya saling bersenggolan hingga sama-sama terjatuh dalam lintasan. Beruntung kedua pembalap tidak mengalami luka dan masih selamat. Akan tetapi motor yang di kendarai oleh M. Zaky mengalami kerusakan pada bodi plastik motor yang pecah. Walaupun begitu, kedua nya masih tetap bisa melanjutkan balapan dan menyelasikan putaran hingga akhir.",
            "Meskipun sempat terjatuh pada lintasan sirkuit, kedua pembalap tidak menyerah begitu saja. Mereka tetap melanjutkan balapan dan salah satu dari kedua pembalap ini berhasil menduduki posisi tiga besar. M. Zaky yang merupakan pembalap asal Wonogiri bersama tim Juragan Trail Gajah Putih berhasil menjadi runer-up. Namun berbeda nasib dengan M. Zaky, yang mana Wawan Tembonk rider yang berasal dari Boyolali bersama tim Rapi Elektrik",
            "Junior 44 harus rela duduk di posisi kelima. Apapun yang terjadi keduanya sama-sama memberikan contoh semangat yang sangat luar biasa dan di imbangi dengan rasa optimis yang kuat, sehingga dapat menghasilkan hasil yang terbaik.",
          ],
          images: Ins3,
          release: "Sabtu, 25 November 2023",
          category: "Sports",
          author: "Abdul Nurokim",
        },
      Kolaborasi_3_Organisasi_Mahasiswa_FISIP_UNS_Gelar_Main_Bareng_Voli_bersama_Para_Mahasiswa_FISIP_UNS:
        {
          id: "Kolaborasi_3_Organisasi_Mahasiswa_FISIP_UNS_Gelar_Main_Bareng_Voli_bersama_Para_Mahasiswa_FISIP_UNS",
          title:
            "Kolaborasi 3 Organisasi Mahasiswa FISIP UNS Gelar Main Bareng Voli bersama Para Mahasiswa FISIP UNS",
          description: [
            "Badan Eksekutif  Mahasiswa  Fakultas Ilmu Sosial dan Politik Universitas Sebelas Maret (BEM FISIP UNS) Kementerian Minat dan Bakat bersama Himpunan Mahasiswa Ilmu Komunikasi (HIMAKOM) UNS Departemen Minat dan Bakat dan Himpunan Mahasiswa Sosiologi (HIMASOS) UNS Departemen Pengembangan Sumber Daya Mahasiswa (PSDM) mengadakan program kerja main bersama edisi voli untuk para mahasiswa FISIP UNS. Program kerja ini merupakan program kerja kolaborasi 3 organisasi mahasiswa yang berada di FISIP UNS bernamakan Main Bareng FISIP Kita (MAFIA) #3 x Komuniaksi x Main Bareng (Mabar). Biasanya, para ormawa (organisasi mahasiswa) hanya dilaksanakan oleh organisasinya masing-masing. Namun, pada kali ini BEM FISIP UNS mengajak para ormawa yang ada di FISIP untuk melakukan kolaborasi, khususnya pada program kerja MAFIA yang sudah terlaksana ketiga kalinya.",
            "“Program kerja ini bertujuan untuk membonding para mahasiswa FISIP biar lebih kenal satu sama lain, terutama dari prodi (program studi) lain sih,” kata Ayu (20) selaku Menteri Minat dan Bakat BEM FISIP. Ayu juga menjelaskan konsep dari program kerja ini adalah fun game, sehingga memang kegiatan ini terkesan lebih santai, hadiah yang dipersiapkan juga kecil-kecilan. Sesuai dengan namanya, program kerja ini hanya untuk Mahasiswa FISIP UNS mulai dari angkatan 2020-2023.",
            "“Kita mengajak ormawa-ormawa yang ada di FISIP karena kan setiap hima pasti punya departemen yang berhubungan dengan minat dan bakat, dan mereka pasti punya program kerja yang mirip-mirip dengan kita (MAFIA) jadi kita ajak kolaborasi aja sekalian, lumayan juga untuk saling menyambung silaturahmi sesama mikat di FISIP” tambah Daffa (19) selaku penanggung jawab dari kegiatan yang kurang lebih dihadiri oleh 30 orang ini.",
            "Mereka juga menambahkan bahwa, himpunan mahasiswa yang menerima ajakan kolaborasi mereka hanya dari program studi ilmu komunikasi dan sosiologi. Program studi Hubungan Internasional dan Administrasi Negara pada saat itu berhalangan untuk mengikuti kolaborasi karena terdapat kegiatan lain di tanggal yang sama, sehingga tidak memungkinkan untuk bergabung.",
            "“Sebenarnya ga ada alasan buat nolak juga sih karena departemenku juga kurang satu proker, jadi aku terima aja,” jelas Addam (19) selaku Staff Departemen Minat dan Bakat HIMAKOM UNS menjelaskan alasan menerima berkolaborasi dengan BEM FISIP UNS.",
            "“Jujur, seru karena olahraga yang disukai, selama keberjalanan juga seru karena pada aktif ikut terutama anak (angkatan) 23, makasih buat mikatnya BEM dan HIMAKOM karena udah ngajakain collab proker PSDM HIMASOS karena itu termasuk proker puncak kita jadi rampung semua. Pesanku, semoga tahun depan bisa collab di proker yang lebih gede dan banyak lagi di beberapa divisi, ga cuma mikat dan makin seru,” kata Bintang (19) yang merupakan salah satu Staff Departemen PSDM HIMASOS. ",
            "“Asik, mungkin tempatnya aja buatku yang kurang proper dan sebenarnya kurang pas aja acaranya karena yang perempuan jadi gak main gitu,” komentar Rosyid (19) sebagai salah satu peserta yang ikut bermain pada saat itu. ",
            "Acara ini berlangsung pada pukul 15.00 hingga 18.00 WIB dan berakhir dengan tiga kelompok sebagai pemenang dari MAFIA #3 x Komuniaksi x Mabar kali ini. Diharapkan dengan adanya kegiatan seperti ini, selain dapat saling mengenal mahasiswa FISIP lainnya, dapat menjadi wadah untuk mengasah kemampuan bermain voli juga.",
          ],
          images: Ins2,
          release: "Senin, 27 November 2023",
          category: "Sports",
          author: "Alvina Rahma Khalishafitri",
        },
      HASIL_LAGA_SEMI_FINAL_FIFA_WORLD_CUP_U17_ANTARA_MALI_VS_PRANCIS: {
        id: "HASIL_LAGA_SEMI_FINAL_FIFA_WORLD_CUP_U17_ANTARA_MALI_VS_PRANCIS",
        title:
          "Hasil Laga Semi Final FIFA WORLD CUP U17 Antara Mali vs Prancis",
        description: [
          ` Manahan-Surakarta – Hasil pertandingan pada gelaran piala dunia FIFA World Cup U-17 tahun 2023 anatara timnas Mali vs timnas Prancis pada Selasa (28/11/2023). Laga yang sengit tersebut berlangsung di stadion Manahan kota Surakarta dan disaksikan lebih dari 12.000 penonton. Para penonton kebanyakan di dominasi oleh warga Indonesia, namun tidak sedikit pula penonton yang berasal dari kedua negara yang bertanding pada laga tersebut (Mali & Prancis).`,
          `Kick-off pertandingan dimulai tepat pukul 19.00 yang sebelumnya di dahului menyanyikan lagu kebangsaan dari masing-masing negara yang bertanding. Babak pertama berjalan dengan begitu sengit. Jual beli serangan dari kedua kesebelasan di lancarkan terus menerus, namun pada babak pertama ini timnas Mali terlihat lebih menguasai pertandingan. Di babak pertama ini squad timnas Prancis sangat kewalahan menghadapi serangan yang terus di lancarkan oleh timnas Mali dan hampir jarang sekali Prancis memberikan serangan balik.`,
          `Sepanjang babak pertama berlangsung pertahanan Prancis masih tetap kokoh dan masih mampu bertahan dari gempuran serangan timnas Mali. Namun, di penghujung pertandingan babak pertama lebih tepatnya di menit tambahan waktu kesebelasan dari timnas Mali berhasil membobol gawang timnas Mali. Gol pertama tersebut dicetak oleh pemain punggung 8 yaitu Ibrahim Diarra yang mengubah skor pertandingan 1-0. Mali unggul dan skor tersebut bertahan hingga babak pertama usai.`,
          `Di babak kedua, Prancis terlihat ingin mengejar ketertinggalan. Gaya permainan di babak kedua memiliki variasi serangan yang beberapa kali hampir membahayakan gawang timnas Mali. Serangan tersebut membuat Timnas Mali harus sedikit mundur untuk bertahan agar gawang mereka tidak terbobol. Namun, nasib beruntung lebih berpihak kepada timnas Prancis. Gol pertama muncul lewat sundulan pemain bernomor punggung 2 yang bernama Yvann Titi. Gol tersebut terjadi di menit 56 babak kedua dan sekaligus menjadi skor penyeimbang (1-1).`,
          `Samanya kedudukan skor laga tersebut, mulai membangkitkan semangat pemain Prancis. Banyak peluang yang tercipta di laga kedua bagi Prancis, namun sayang belum dapat memberikan gol tambahan. Hingga pada menit 69 pemain Mali melakukan Pelanggaran yang berujung kartu merah di berikan oleh wasit kepada Soulemane Sanogo. Tendangan bebas berhasil dimanfaatkan oleh Prancis yang menciptakan gol kedua. Gol tersebut dicetak oleh Ismail Bouneb yang membuat Prancis unggul.`,
          `Walaupun dalam keadaan posisi tertinggal dan bermain dengan hanya 10 pemain saja, squad timnas mali tetap menunjukkan rasa optimisme dan tidak menyerah begitu saja. Mereka mulai bangkit dan memberikan banyak serangan kegawang timnas Prancis. Prancis yang sudah unggul terpaksa harus bermain kembali dengan posisi bertahan. Namun sayang sekali usaha Mali belum berhasil untuk mengejar ketertinggalan. Skor 2-1 bertahan hingga berakhirnya pertandingan. Prancis unggul dan berhasil kebabak final untuk berhadapan dengan timnas German pada Sabtu (2/12/2023) mendatang.`,
        ],
        images: Simbol,
        release: "Sabtu, 25 Novemver 2023",
        category: "Sports",
        author: "Abdul Nurokim",
      },
      STADION_UNS_SAYONARA_PIALA_DUNIA_U_17_SELAMAT_DATANG_LAPANGAN_BARU: {
        id: "STADION_UNS_SAYONARA_PIALA_DUNIA_U_17_SELAMAT_DATANG_LAPANGAN_BARU",
        title:
          "STADION UNS: SAYONARA PIALA DUNIA U-17, SELAMAT DATANG LAPANGAN BARU",
        description: [
          "Surakarta – Kondisi terkini rumput Stadion UNS pasca pergelaran Piala Dunia U-17 di Surakarta. Tampak wajah baru lapangan hijau yang telah bermotif gelap-terang saat dikunjungi pada Selasa (05/12/2003).",
          "Kota Surakarta baru saja menyelesaikan tugasnya sebagai salah satu tuan rumah kejuaraan sepak bola FIFA World Cup U-17 2023. Bersama 3 kota lain (Jakarta, Bandung, dan Surabaya), Stadion Manahan, Surakarta menjadi saksi mati atas kemenangan Timnas U-17 Jerman di partai puncak pada Sabtu (02/12/2003).",
          "Di bawah komando Christian Wuck, tim panser muda keluar sebagai juara setelah menggulung Timnas Perancis dengan skor 4-3 melalui drama adu penalti.",
          "Universitas Sebelas Maret (UNS) tak mau ketinggalan dengan euforia turnamen 4 tahunan tersebut. Meskipun bukan sebagai venue pertandingan secara langsung, UNS berkesempatan menyambut pemain-pemain muda yang hadir.",
          "Keberadaan Stadion UNS yang berlokasi di area dekat gerbang belakang berhasil terpilih menjadi salah satu tempat latihan tim peserta Piala Dunia U-17. Diketahui, pihak kampus UNS memang memiliki stadion sepak bola yang secara ukuran maupun kondisi lapangan sudah memenuhi standar, namun mengingat begitu besarnya skala turnamen yang digelar tersebut, stadion ini sempat ditutup sementara untuk perawatan.",
          "Menurut pengelola lapangan, turnamen ini merupakan hajatan berskala Internasional yang belum tentu terulang kembali. Maka dari itu, UNS sebagai bagian dari Surakarta harus mendukung penuh suksesnya acara ini. Tidak main-main, selain melakukan penggantian pada rumput lapangan, area parkir stadion juga telah mengalami sterilisasi. Mahasiswa setempat diimbau untuk memarkir dan berolahraga di spot-spot lain.",
          "Stadion UNS sudah dinyatakan 100% siap digunakan berlatih sejak pertandingan pembuka Grup B antara Mali vs Uzbekistan dan Spanyol vs Kanada. Surakarta juga menjadi tuan rumah tersibuk setelah terpilih menjadi tempat pertandingan di segala fase (penyisihan, 16 besar, perempat-final, semi-final, dan final). Oleh karena itu, Stadion UNS juga tidak pernah absen dalam setiap sesi latihan tim peserta.",
          "Hingga perhelatan Piala Dunia U-17 selesai, Stadion UNS mengalami perubahan positif. Salah satu yang paling mencolok adalah dari kualitas lapangan. Menjadi lapangan latih dalam turnamen sepak bola internasional tentu dituntut untuk memenuhi kriteria yang ditetapkan federasi nasional dan asosiasi sepak bola dunia.",
          "Lapangan Stadion UNS kini telah mengantongi lisensi sebagai lapangan berstandar FIFA (Fédération International de Football Association). Lisensi tersebut diberikan setelah pihak pengelola melakoni serangkaian proses ketat dalam perawatan rumput, penanaman, penyiraman, dan pemangkasan, semuanya harus sesuai prosedur.",
          "Hasil yang paling terlihat secara kasat mata adalah kualitas dan visual rumput. Dari yang semula hanya lapangan flat, kini semakin cantik dengan pola gradasi bergaris-garis ala stadion-stadion di Eropa. Hal ini menuai respons positif warga kampus setelah stadion dibuka kembali pada Selasa (05/12/2023). Mereka mengaku senang dan berharap agar keberadaan lapangan stadion yang semakin bagus ini dapat terus dirawat dan dijaga kualitasnya.",
        ],
        images: Ins18,
        release: "5,12 Desember 2023",
        category: "Sports",
        author: "Fatih Rohardiansyah",
      },
    },
    arts: {
      UPTD_MUSEUM_SURAKARTA_GELAR_PAMERAN_PUSAKA_NUSANTARA: {
        id: "UPTD_MUSEUM_SURAKARTA_GELAR_PAMERAN_PUSAKA_NUSANTARA",
        title:
          "Nguri-uri Budhaya, UPTD MUSEUM SURAKARTA GELAR PAMERAN PUSAKA NUSANTARA",
        description: [
          "Menjelang penghujung tahun 2023, UPTD Museum Kota Surakarta menyelenggarakan pameran pusaka Nusantara. Pameran ini berlangsung selama sepekan dari 22 hingga 28 November 2023 di Museum Keris Nusantara, Jalan Bhayangkara nomor 2, Sriwedari. Laweyan, Surakarta. Acara dibuka pada hari pertama dengan kegiatan wilujengan bersama pegawai UPT museum, pegiat budaya, dan masyarakat.",
          "Di pameran ini, pengunjung dapat melihat langsung wujud berbagai jenis pusaka atau senjata tradisional dari seluruh penjuru nusantara, mulai dari Aceh, Minangkabau, Bengkulu, Palembang, Jawa, Bali dan Lombok, serta Bugis.",
          "“Ini beberapa barang yang dari luar sini (luar Jawa) merupakan hibah dari tokoh-tokoh ternama di daerahnya, dari Palembang, Riau, Aceh, Lombok, banyak yang dihibahkan untuk ditampilkan di museum ini.” Tutur salah seorang petugas  Kak Rafil.",
          "Selain menyaksikan langsung berbagai keris dan pusaka yang dipamerkan, pengunjung akan dijelaskan bagaimana benda-benda tersebut dipakai di masing-masing daerah, mulai dari bentuk keris, bentuk warangka, motif, dan cara pemasangannya. Lebih lanjut, para pemandu akan menjelaskan sejarah penyebaran keris di berbagai daerah nusantara. Ternyata, setelah menyimak dengan saksama, banyak hal baru yang bisa dipelajari. Bukan untuk sekadar melihat kenampakan keris secara umum, namun juga bisa membedakan jenis-jenisnya.",
          "“Untuk keris secara garis besar ada dua jenis, yang lurus dan yang berkelok. Keris dengan bentuk lurus itu disebut leres, dan yang berkelok disebut berluk. Pembeda lainnya terdapat di kenampakan badan keris, contohnya keris Surakarta dan Yogyakarta yang sudah sangat berbeda, dari Yogyakarta kerisnya berbentuk konsisten dari runcing semakin melebar, kalau keris Surakarta dari runcing melebar namun mendekati pegangan dibuat ramping. Tapi masing-masing tetap memegang erat unsur estetikanya.”",
          "“Selain wujud kerisnya, keris juga memiliki suatu wadah, namanya warangka atau warongko. Tiap jenis keris pastinya punya desain warangka yang berbeda di masing-masing daerah. Cara menyematkannya pun berbeda, di Jawa keris biasa di taruh di belakang, namun di daerah Sumatra beberapa keris disematkan di bagian depan menyesuaikan busana adat yang digunakan. Ada yang kerisnya terlihat, ada juga yang letaknya tersembunyi, bahkan ada yang dipegang dengan tangan.” Tutur Kak Rafil merincikan.",
          "Selain mengamati, masyarakat juga diberikan kesempatan untuk meminjamkan/memberikan benda pusakanya agar bisa dipajang di pameran. Menurut Kak Adi Surya, salah satu penyumbang keris mengaku sudah menjadi penikmat sejak lama. Karena aktif di suatu forum budaya, ia ditawari untuk ikut berpartisipasi dalam pameran keris ini. Kak Adi lantas bertolak dari Wonogiri menuju Surakarta dengan membawa barang pilihannya dan ikut menyemarakkan pameran sejak hari pembukaan.",
          "Selain pameran, museum pusaka juga menyelenggarakan berbagai kegiatan, seperti berbagai lomba dan khusus pada hari Jumat terdapat display pembuatan keris dengan mendatangkan empunya secara langsung. Di hari biasa, pertunjukan membuat keris ini dapat disaksikan setiap pekan ketiga dalam satu bulan.",
          "Pameran ini begitu layak untuk dikunjungi karena menampilkan berbagai benda pusaka terpilih dari seluruh nusantara. Secara umum keris juga memiliki banyak hal yang menarik untuk dipelajari, khususnya bagi generasi muda yang haus wawasan akan kebudayaan adat. Kita dapat belajar mulai dari dasar untuk sekadar mengerti klasifikasi keris atau bahkan tertarik untuk merawat dan melestarikan benda-benda pusaka semacam keris. Rasanya tak pantas jika keris yang telah diakui UNESCO sebagai karya agung budaya dunia justru kian dilupakan.",
        ],
        images: Ins5,
        release: "Minggu, 26 November 2023",
        category: "Arts",
        author: "Fatih Rohardiansyah",
      },
      SEJARAH_KOTA_SOLO_DI_PAMERAN_SOLO_DALAM_BINGKAI_KARTU_POS: {
        id: "SEJARAH_KOTA_SOLO_DI_PAMERAN_SOLO_DALAM_BINGKAI_KARTU_POS",
        title: "SEJARAH KOTA SOLO DI PAMERAN ”SOLO DALAM BINGKAI KARTU POS”",
        description: [
          "Sejarah dari kota Solo dijelaskan dan dihadirkan dalam bentuk kartu pos pada pameran ”Solo Dalam Bingkai Kartu Pos”. Pameran ini diselengaran di Museum Radya Pustaka, Jalan Slamet Riyadi No.257, Solo. Pameran juga akan digelar dari tanggal 21 – 30 November 2023, di jam 08.00 – 17.00 WIB. Untuk masuk ke dalam pameran ini genera – z tidak perlu mengeluarkan uang sedikit pun alias gratis.",
          "”Solo Dalam Bingkai Kartu Pos”, merupakan sebuah pameran hasil dari kerjasama antara Solo Murakabi dengan Pen & Postcard 2023. Dalam pamerannya genara – z dapat menemukan berbagai macam bentuk kartu pos, bahkan ada kartu pos yang berasal dari tahun 1864 loh. Pameran ini tidak hanya bisa dinikmati untuk genera -z  yang menyukai filateli dan kartu pos, tetapi genera – z yang tidak suka filateli dan kartu pos juga dapat menikmati pameran ini, karena genera – z dapat melihat dan mempelajari perkembangan serta pertumbuhan dari Kota Solo.",
          "”Aku sebenernya ga ngerti sama sekali tentang kartu pos, tetapi walaupun kaya gitu aku tetap bisa nikmatin pameran ini, karena nuansanya yang enak dan juga aku bisa belajar dan melihat berbagai sejarah Kota Solo, dan juga berbagai jenis kartus pos serta gambar – gambarnya yang bagus dan cantik”. Perkataan salah satu pengunjung Pameran ”Solo Dalam Bingkai Kartu Pos”",
          "Pameran ”Solo Dalam Bingkai Kartu Pos” juga secara langsung menghadirkan kurator dari koleksi mereka, yaitu Nanang Setiawan dan juga Martha Setyowati. Kedua kurator ini akan membahas secara lengkap mengenai koleksi dalam pameran ini dan juga berbagai hal – hal menarik dari kartu pos.",
          "Kartu pos dalam pameran ini berasal dari berbagai macam kolektor atau pihak yang bekolaborasi untuk berjalannya pameran ini, diantraanya adalah Museum Radya Pustaka, Dinas Kebudayaan dan Pariwisata Kota Suarakarta, Jejak Kartu Pos, Komunitas Postcrossing Indonesia, Uul Jihadan, dan M. Washar Wasesa.",
          "”Pameran ini diselenggarakan pastinya untuk memajukan dan memperkenalkan kebudayaan serta juga kesenian dalam hal ini kususnya kartu pos. Untungnya antusias masyarakat untuk pameran ini juga sangat tinggi ya, karena dari kemarin banyak sekali yang datang, bahkan dari luar Kota Solo. Pastinya itu membuat  kami senang dan maskin semangat lagi untuk menjaga dan terus melestarikan hal ini”. Ujar salah satu panitia penyelenggara Pameran ”Solo Dalam Bingkai Kartu Pos”",
          "Seperti perkataan salah satu panitia penyelenggara, pameran ini mendapatkan antusias masyarakat yang tinggi. Dalam sehari pameran ini bisa dihadiri puluhan hingga ratusan orang yang inin belajar serta melihat berbagai koleksi menarik dalam pameran ini. Buat genera – z yang tertarik, jangan lupa untuk dateng ke Pameran ”Solo Dalam Bingkai Kartu Pos”, karena tersisa 4 hari lagi sampai pameran ini berakhir.",
        ],
        images: Ins4,
        release: "Minggu, 26 November 2023",
        category: "Arts",
        author: "Efraim Nicholas Hutapea",
      },
      Pekan_Budaya_Difabel_2023_Obah_Mamah_Mingset_Greget: {
        id: "Pekan_Budaya_Difabel_2023_Obah_Mamah_Mingset_Greget",
        title: "Pekan Budaya Difabel 2023 “Obah Mamah Mingset Greget”",
        description: [
          `Yogyakarta - Pekan Budaya Difabel (PBD) kembali digelar pada tahun ini selama tujuh hari, yakni 27 November hingga 3 Desember dengan tema Obah Mamah Mingset Greget. Pekan Budaya Difabel merupakan kegiatan rutin yang diinisiasi oleh dinas kebudayaan daerah istimewa Yogyakarta. Pekan Budaya Difabel merupakan kegiatan tahunan yang dimulai pada tahun 2019 hingga tahun 2023, Pekan Budaya Difabel tahun ini merupakan Pekan Budaya Difabel ke-5.`,
          `Pekan Budaya Difabel mengajak teman-teman difabel dan non difabel agar dapat memeriahkan dan berpartisipasi pada acara tersebut, terdapat banyak kegiatan yang dapat  dilakukan bersama “PBD sebuah acara yang memberikan peluang kepada teman- teman difabelitas untuk bisa menunjukkan kebolehannya baik merchandise, makanan dan karya seni. Kita menyebutnya ini festival inklusi, jadi tidak melulu tentang difabelitas, tetapi teman-teman non difabelitas juga bisa gabung disini, kita juga mewadai warga lokal untuk bisa berpartisipasi,“ ujar Broto Wijayanto yang merupakan Ketua dari acara Pekan Budaya Difabel`,

          `Pekan Budaya Difabel pada tahun ini diselenggarakan di Desa Wisata Rumah Domes Teletubbies Sumberharjo, Prambanan. Tempat berlangsung Pekan Budaya Difabel pada tahun ini berbeda dengan tahun-tahun sebelumnya, karena ini adalah pertama kali Pekan Budaya Difabel diadakan di desa. “Kita ingin betul-betul bersentuhan dengan Masyarakat, ketika berada di kota boleh dibilang kota itu pertama masyarakatnya sibuk dengan dirinya sendiri, lalu yang kedua Masyarakat kota sering tersosialisasi tentang disabilitas. Tetapi di Masyarakat desa itu sangat jarang, walaupun setiap kami datang di suatu wilayah tertentu pasti di desa itu ada difabel, selama ini mereka ga aware . Harapannya ketika kita pindah ke desa-desa mereka akan lebih aware orang disabilitas di sekitar mereka,” Imbuh Broto Wiajayanto`,

          `Terdapat banyak sekali penampilan pentas seni di acara tersebut seperti menyanyi dengan bahasa isyarat, melukis bersama, workshop, dan berbagai acara yang lain. galeri pameran yang berasal dari berbagai yayasan  dan memamerkan karya dan cerita dari anak-anak bangsa "Ya bagus banget selain mewadahi kreativitas difabel juga bisa menambah kepercayaan diri individu difabel, karena dari pesertanya pun bukan hanya dari difabel aja melainkan umum juga. Jadi bisa menambah rasa toleran setiap individu," ujar salah satu pengunjung disana.`,
          "Pekan Budaya Difabel dapat memberikan banyak manfaat yang positif terutama pada kegiatan bersosial, teman-teman difabel dapat berkomunikasi secara langsung dan melakukan kegiatan bersama teman teman non difabel, kita dapat bercerita dan berbagai pengalaman bersosialisasi dengan orang lain tanpa harus melihat apa latar belakang dan keadaan orang tersebut. Acara Pekan Budaya Difabel juga membantu orang orang difabel untuk lebih percaya diri walau mereka memiliki keterbatasan, mereka dapat mengikuti lomba yang diadakan oleh pameran tersebut dan mereka juga bisa menuangkan bakat mereka dengan adanya pekan budaya difabel tersebut.",
        ],
        images: Ins11,
        release: "Minggu, 4 Desember 2023",
        category: "Arts",
        author: "Farah Salsabilla ",
      },
      DKVACT_9_KONTINÜ_Jangan_Dilewati_Pameran_Tahunan_oleh_Mahasiswa_DKV_ISI_Surakarta:
        {
          id: "DKVACT_9_KONTINÜ_Jangan_Dilewati_Pameran_Tahunan_oleh_Mahasiswa_DKV_ISI_Surakarta",
          title:
            "DKVACT 9 KONTINÜ : Jangan Dilewati Pameran Tahunan oleh Mahasiswa DKV ISI Surakarta",
          description: [
            "DKVACT merupakan event pameran tahunan yang diselenggarakan oleh mahasiswa Program Studi Desain Komunikasi Visual mahasiswa Institut Seni Indonesia Surakarta yang dipegang oleh mahasiswa tahun 2020-2022. Terdapat keunikan dari event pameran ini, salah satunya adalah tema yang dibawakan setiap acara ini adalah menggunakan sistem lanjutan yang dari setiap event per tahunnya memiliki cerita yang berlanjut.",

            "Konsep acara DKVACT 9 KONTINÜ ini memiliki harapan dapat membawa keberlanjutan dan kehidupan yang saling berkesinambungan. ",

            "Acara ini diselenggarakan selama 3 hari mulai dari hari Jumat (8/12/2023)) hingga Minggu (10/12/23), yang bertempat di Ndalem Joyokusuman, Mangkubumen, Surakarta. Pameran ini dibuka untuk umum dan  free entry  mulai pukul 13.00 hingga 22.00, siapapun boleh masuk tanpa syarat apapun.",

            "Terdapat workshop di pameran ini yang terbuka untuk umum, bertempat di aula tengah Ndalem Joyokusuman. Setiap harinya ada pembicara hebat yang berbeda untuk mengisi workshop ini. Dihari pertama membawa tema “Elevating Design and Advertising with Copywriting Mastery” dibawa oleh mas Rahardhian Galang Wicaksono yang merupakan CEO dari Sumur Creative. Dilanjut di hari kedua membawa kedua membawa tema “Exploring The Secret Design Mechanism of Pop-Up” yang dibawa oleh Mayang Maradianti yang merupakan owner Kebak Bejo Creative. Di hari terakhir di isi oleh Bramasta aji yang merupakan founder Unreal studio dan ilustrator, dengan isi pembahasan seputar “Unflod Game Illustration Industry with Unreal Studio”.",

            "Dalam event ini, selain terdapat exhibition hasil karya ada juga workshop yang boleh dinikmati hasil karyanya oleh siapapun. Hasil karya yang dipamerkan di DKVACT merupakan hasil kumpulan karya dari mahasiswa DKV ISI Surakarta mulai dari mahasiswanya bahkan alumni juga ada yang ikut serta memamerkan karyanya.",

            "Selain pameran dan workshop, DKVACT di tahun ini mengadakan permainan boardgame table bersama  dan tentunya gratis buat siapapun,  dan jika kita belum bisa memainkannya, nanti oleh panitia akan diajarkan sampai kita bener - bener bisa memainkannya. Game ini berlangsung selama 3 hari acara di bagian timur ruangan.",

            "Pengunjung dilarang untuk membawa makanan dan minuman dari luar,  tetapi jika kalian ingin keliling pameran sambil makan atau minum, disana ada banyak sekali tenant - tenant makanan dan minuman yang bisa dibeli. Ada juga photobooth with SSSSESI, buat kalian yang ingin mengabadikan momen atau berfoto bersama teman bisa banget buat dateng ke booth ini.",

            "“Kalau kalian tertarik di pojok Ndalem Joyokusuman ada satu booth yang diisi untuk tempat lelang hasil karya. Yang dimana hasil karya yang dijual ini, uangnya sebagian akan disumbangkan ke para tuna netra Surakarta,  kita emang kerja sama bareng dengan para tuna netranya,” kata salah satu panitia yang menjaga pintu registrasi.",

            "Nama acara lelangnya adalah “Ecoprint Art Auction”. Ecoprint adalah salah satu seni cetak alami yang menggabungkan keindahan daun, bunga, batang, dan bahan alam lainnya sebagai “stempel” dengan teknik cetak tradisional. Hasil lelang karya akan diumumkan di night awarding DKVACT pada tanggal 10 desember.",

            "“Suasana di dalem pameran terasa sunyi dan lumayan tenang, kalau boleh saran bisa disambi dengan memutar musik biar feelnya tidak terlalu sunyi,” kata najwa salah satu pengunjung DKVACT malam itu.",
          ],
          images: Ins17,
          release: "Minggu, 9 Deseember 2023",
          category: "Arts",
          author: "Diah Wahyuningrum",
        },
    },
    politics: {
      POLITICS: {
        id: "POLITICS",
        title: "POLITICS",
        description:
          "Dengan munculnya teknologi blockchain, sektor keuangan mengalami perubahan besar. Artikel ini membahas peluang baru yang muncul berkat blockchain.",
        images: Simbol,
        release: "Senin, 20 November 2023",
        category: "Politics",
        author: "Genera-Z",
      },
      RAPAT_ANGGOTA_HIMAKOM_UNS_XXVIII_20232024_HARI_KEDUA: {
        id: "RAPAT_ANGGOTA_HIMAKOM_UNS_XXVIII_20232024_HARI KEDUA",
        title: "RAPAT ANGGOTA HIMAKOM UNS XXVIII 2023/2024 HARI KEDUA",
        description: [
          "Surakarta - Rapat Anggota HIMAKOM UNS XXVIII 2023/2024 telah berlansung pada Sabtu (9/12/2023) hingga Minggu (10/12/2023). Rapat tersebut berlangsung di Ruang Seminar FISIP UNS mulai pukul 09.00-16.00 WIB. Total 68 peserta yang hadir didalam rapat tersebut, meliputi PHT (Pengurus Harian Tetap) dan juga Pengurus HIMAKOM UNS periode 2023/2024. Rapat tersebut di pimpin oleh Presidium I (Bagus Panji Amrullah) dan Presidium II (Marselly Qonita Fathi Yasina)",
          "Rapat yang sekaligus menjadi forum evaluasi kepengurusan selama satu periode kepengurusan tersebut membahas dan mendiskusikan tentang “Garis-garis besar haluan organisasi HIMAKOM UNS”. Didalam pembahasan tersebut terdapat diskusi yang berlangsung, mulai dari usul pengajuan program kerja hingga usulan perubahan beberapa sistem program kerja dari beberapa devisi. Tujuannya agar dapat lebih memaksimalkan dan menjadikan periode selanjutnya menjalankan program kerja lebih baik lagi.",
          "“Proses keberjalanan rapat berjalan lancar dari awal sampai akhir, kondisi peserta juga tertib mengikuti rangkaian dari awal hingga selesai, tetapi di beberapa kesempatan masih ada peserta yang melanggar peraturan, tetapi tidak sampai mengganggu jalannya rapat,” ujar Arif Mulyawan selaku Ketua HIMAKOM UNS periode 2023.",
          "Menurut Arif Mulyawan, atau kerap disapa Armul, menyampaikan bahwa rapat berjalan dengan baik dan lancar walaupun dalam beberapa waktu terdapat peserta yang melanggar ketertipan. Armul juga berharap agar evaluasi pada rapat tersebut dapat menjadi acuan pengurus HIMAKOM UNS periode selanjutnya.",
          "“Harapannya adalah semoga evaluasi yang dilakukan kemarin bisa menjadi acuan perbaikan untuk kabinet selanjutnya dan juga bisa menjadikan himakom menjadi organisasi yang lebih progresif di tangan pengurus selanjutnya,” tambah Armul.",
          "Berlangsunya Rapat Anggota HIMAKOM UNS (RAH) kali ini memiliki banyak harapan dari pengurus. Selain untuk mengevaluasi kekurangan di tahun ini, dengan adanya rapat ini di harapkan dapat meningkatkan dan mengoptimalkan kinerja pada periode mendatang (2024/2025). Evaluasi di rapat ini juga mendapat banyak masukan dari PHT-PHT tahun sebelumnya. Masukan dan saran yang di berikan banyak menyinggung salah satu program kerja baru yang di usulkan oleh salah seorang pengurus HIMAKOM UNS periode 2023/2024, yaitu berkaitan dengan pengabdian ke desa. PHT memberikan saran agar lebih memikirkan lebih matang lagi mengenai program kerja baru tersebut. Karena mempertimbangkan program tersebut merupakan program yang besar, membutuhkan banyak dana, dan juga membutuhkan waktu yang terbilang cukup lama.",
          "Pada kesempatan lain, kami juga sempat mewawancarai Kevin Rynaldi selaku PHT. Dia mengatakan bahwa iklim diskusi berjalan dengan bertanya dan memberikan tanggapan serta juga berfikir kritis. Menurutnya iklim tersebut harus terus dikembangkan dan di bangun dalam HIMAKOM UNS. Dia juga menyampaikan harapannya kepada HIMAKOM UNS agar lebih baik dan berkembang untuk periode selanjutnya serta agar selalu belajar dari evaluasi yang telah ada.",
        ],
        images: Ins15,
        release: "Minggu, 10 Desember 2023",
        category: "Politics",
        author: "Abdul Nurokim",
      },
    },
    inpirations: {
      BEM_FT_UNS_Gelar_Malam_Apresiasi_Kepada_Mahasiswa_Fakultas_Teknis_yang_Berprestasi:
        {
          id: "BEM_FT_UNS_Gelar_Malam_Apresiasi_Kepada_Mahasiswa_Fakultas_Teknis_yang_Berprestasi",
          title:
            "BEM FT UNS Gelar Malam Apresiasi Kepada Mahasiswa Fakultas Teknis yang Berprestasi",
          description: [
            "Badan Eksekutif Mahasiswa (BEM) Fakultas Teknik Universitas Sebelas Maret (UNS) Surakarta, menggelar acara APATIK (Apresiasi Prestasi Mahasiswa Teknik) sebagai bentuk apresiasi kepada mahasiswa fakultas teknik yang berprestasi. APATIK sendiri memiliki tema Dazzle the Magic Cherish The Victory. Acara ini merupakan acara tahunan yang biasa diselenggarakan dalam pantauan departemen kreasi mahasiswa BEM FT. ",
            "Dr. Techn. Ir. Sholihin As’ad, M.T, selaku dekan fakultas teknik bersama Prof. Dr. Eko Surojo, S.T., M.T., selaku Kepala Prodi Teknik Mesin pada Sabtu (25/11/2023) di depan gapura Fakultas Teknik melakukan pemotongan pita sebagai bentuk simbolis dibukanya malam puncak APATIK 2023. ",
            "Malam apresiasi ini selain untuk memberikan penghargaan prestasi, memiliki berbagai macam rangkaian acara untuk memeriahkannya. Diantaranya ada bazar, expo UKM, penampilan band dari setiap prodi yang ada di fakultas teknik UNS. ",
            "Ada keunikan yang menarik audiens untuk tertarik datang ke APATIK adalah adanya angkringan gratis yang disediakan dan bebas untuk mengambil makanan yang ada. Makanan yang disediakan juga sangat beragam, mulai dari nasi kucing, gorengan, sosis bakar, usus, dan nugget. Angkringan ini dibuka mulai jam 19.30 WIB.",
            "“Acaranya cukup menarik yah dan konsep tahun ini cukup bagus sehingga yang datang APATIK tahun ini cukup terbilang ramai dibandingkan dengan tahun sebelumnya. Terlebih yang buat aku tertarik sebagai anak kos datang acara ini karena adanya angkringan gratis. Malam ini kita makan gratis” ujar Aiko, salah satu pengunjung APATIK 2023.",
            "Mahasiswa yang diapresiasi pada malam itu, didapatkan dari mahasiswa dalam satu tahun kebelakang yang telah memenangkan lomba internal maupun eksternal kampus dalam jangkauan provinsi, nasional maupun internasional. BEM FT memberikan apresiasi lebih dengan tujuan agar mahasiswa yang lainnya dapat lebih percaya diri lagi mengembangkan bakat yang ada diri masing - masing. ",
            "Di malam itu, mahasiswa berprestasi diundang kembali untuk mendapatkan medali dan sertifikat dari BEM FT. Banyak sekali mahasiswa yang telah memenangkan lomba di satu tahun kebelakang, sehingga pemanggilan mahasiswanya dibagi menjadi 3 sesi agar tidak membuat pengunjung yang datang merasa bosan. Dari selingan sesi pemanggilan diisi dengan penampilang band dari setiap prodi.",
            "Terdapat bazar yang ikut serta memeriahkan acara pada malam itu, mulai dari makanan, aksesoris, self photo box, maupun jasa pembuatan tattoo.",
            "Selain acara malam apresiasi, ada juga seminar yang dilaksanakan pada Jumat (24/11/2023) di ruang sidang utama FT UNS dengan tema Profitable Passions : The Intersection and Entrepreneurship. Seminar ini dibuka bebas untuk umum.",
            "Diharapkan dengan adanya APATIK 2023 ini dapat memotivasi mahasiswa lainnya untuk mencari jati diri untuk terus berkembang dan meraih prestasi dan dapat menginspirasi generasi selanjutnya. ",
          ],
          images: Ins6,
          release: "Senin, 27 November 2023",
          category: "Inspirations",
          author: "Diah Wahyuningrum",
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
          release: "Selasa, 21 November 2023",
          category: "Inspirations",
          author: " Alvina Rahma Khalishafitri",
        },
      SOLO_KOTA_TOLERANSI_NUANSA_NATAL_DI_BALAI_KOTA_SURAKARTA_2023: {
        id: "SOLO_KOTA_TOLERANSI_NUANSA_NATAL_DI_BALAI_KOTA_SURAKARTA_2023",
        title: "SOLO KOTA TOLERANSI: NUANSA NATAL DI BALAI KOTA SURAKARTA 2023",
        description: [
          "Surakarta – Akhir tahun memang selalu menjadi momen yang ditunggu – tungu, pastinya genera – z juga menunggu momen di akhir tahun. Momen di akhir tahun memang sangat indah, dimana kita semua bisa bertemu dengan keluarga dan teman di rumah, serta dapat tertawa dan bersyukur bersama.",
          "Di akhir tahun pastinya tidak lepas juga dengan kegiatan natal dari mereka yang bergama kristen. Walaupun kegiatan natal berasal dari agama kristen, momen ini biasanya tetap dapat dinikmati oleh berbagai struktur masyarakar, kususnya di negara Indonesia. Hal ini dapat terjadi karena Negara Indonesia menjunjung tinggi semboyan ”Bhineka Tunggal Ika”. Semboyan ini memiliki arti berbeda – beda tetapi satu jua, dimana hal ini mengantarkan Negara Indonesia untuk saling menghargai dan bertoleransi, pastinyta genera – z juga menjunjung tinggi semboyan ini kan.",
          "Salah satu bentuk nyata dari pengaplikasian semboyan ini ditunjukan oleh lapisan pemerintahan dan juga masyarakat dari Kota Surakarta. Pemerintah Kota Surakarta memang terkenal selalu membuat berbagai hiasan untuk berbagai acara keagamaan di area Balai Kota Surakarta.",
          "”Kota surakarta ini memang terkenal dengan hiasannya ya dari dulu, tiap acara semua kagamaan pasti Kota Surakarta menunjukan dukungannya dengan membuat dekorasi dan hiasan di sekitar Balai Kota Surakarta. Ini juga salah satu bentuk bahwa Negara Indonesia memang keren banget, karena kita saling menghargai dan juga mau untuk bertoleransi”. Perkataan dari salah satu penjual makanan di area Balai Kota Surakarta.",
          "Di akhir tahun ini, karena sudah dekat dengan acara kegamaan kristen yaitu natal, Pemerintah Kota Surakarta turut membuat berbagai macam hiasan dan dekorasi di sekitar Balai Kota Surakarta. Dekorasi ini menambah keindahan dan kehangatan nuansa natal di Kota Surakarta.",
          "”Ya pastinya saya senang sekali ya dengana danya dekorasi dan hiasan natal sini, selain memperindah Kota Surakarta, hiasannya juga menambah kegembiraan dan kehangatan nuansa natal di Kota Surakarta, dan pastinya ini sangat dihargai saya yang beragama kristen”. Ujar salah seorang warga di area Balai Kota Surakarta.",
          "Dekorasi dan hiasan nuansa natal di area Balai Kota Surakarta memiliki berbagai bentuk dan macam mulai dari, lampu – lampu lapion, banner ucapan, dan juga berbagai boneka – boneka yang biasanya dipakai dalam acara natal. Luar biasanya hiasan dan dekorasi ini dilapisi dengan berbagai lampu neon yang menyala, sehingga memperindah berbagai dekorasi yang digunakan dan juga sekaligus memperindah Balai Kota Surakarta. Jadi genera – z jangan sampai kelewatan ni.",
          "Dekorasi natal yang dipasang dan diletakan di area Balai Kota Surakarta memang menunjukan bahwa Kota Surakarta merupakan kota yang memiliki kemampuan menghargai dan bertoleransi yang sangat tinggi dan baik. Tidak hanya di lapisan pemerintahan, Warga Kota Surakarta pun juga menunjukan hal yang sama, dengan tidak adanya sama sekali protes ataupun ketidak sukaan dengan dekorasi dan hiasan nuansa natal di Balai Kota Surakarta.",
        ],
        images: Ins8,
        release: "Minggu, 4 Desember 2023",
        category: "Inspirations",
        author: "Efraim Nicholas Hutapea",
      },
      Rela_Bangun_Pagi_PIK_R_Cakra_UNS_Rayakan_Hari_Aids_Sedunia_di_Car_Free_Day:
        {
          id: "Rela_Bangun_Pagi_PIK_R_Cakra_UNS_Rayakan_Hari_Aids_Sedunia_di_Car_Free_Day",
          title:
            "Rela Bangun Pagi, PIK-R Cakra UNS Rayakan Hari Aids Sedunia di Car Free Day",
          description: [
            "Surakarta – Memperingati Hari AIDS Sedunia PIK-R Cakra UNS mengadakan program kerja ‘Hari AIDS Sedunia’ pada Minggu (3/12/2023) di deretan Jalan Slamet Riyadi dalam kegiatan Car Free Day (CFD). Mereka mendirikan stand di salah satu titik jalur CFD, tepatnya di depan gedung Loji Gandrung yang dihiasi dengan berbagai macam poster terkait HIV dan AIDS, yang telah mereka siapkan sebelumnya. Mereka juga telah berada di lokasi sebelum waktu CFD dimulai, tepatnya pukul 05.00 WIB dan itu membuat para pengurus PIK-R Cakra harus bangun pagi.",
            "Selama berlangsungnya kegiatan CFD, mereka melakukan kampanye dengan bersorak “Selamat Hari Aids Sedunia” dan “Jauhi penyakitnya, bukan orangnya”, serta mengajak para remaja dan orang tua untuk menuliskan di sticky-notes berupa pesan-pesan terkait peringatan hari ini. Jika terdapat anak kecil yang mengunjungi stand ini maka akan diberikan permen dan stiker, serta tidak lupa untuk memberikan pita bewarna merah sebagai simbol yang khas ketika membahas HIV dan AIDS, kemudian foto bersama dengan pengunjung stand.",
            "“Jadi untuk konsep hari aids inikan kampanye, dan itu pasti harus di ruang terbuka, tempat umum, di kawasan yang sekiranya bisa memberikan edukasi untuk masyarakat, jadi kenapa aku milih konsepnya seperti itu, karena disini tujuannya untuk mengedukasi dan mengajak masyarakat dalam upaya pencegahan HIV dan AIDS, oleh karena itu pasti perlu tempat terbuka untuk menjangkau target-target yang kita tuju,” jelas Indah (19) yang merupakan penanggung jawab dari kegiatan ini, sekaligus salah satu pengurus dari PIK-R Cakra. Kegiatan yang telah mereka persiapkan selama kurang lebih satu minggu ini memiliki kesan tersendiri bagi Indah (19) karena ia tidak membagikan jobdesk khusus untuk kegiatan ini, sehingga dikerjakan bersama dan itu membuat anggota dari Divisi Hubungan Masyarakat (Humas), selaku pelaksana utama dalam kegiatan ini menjadi berkumpul kembali.",
            "Tidak hanya berdiam diri di stand, terdapat beberapa orang juga yang keliling sepanjang jalur CFD ini untuk berkampanye. Kampanye tersebut juga tidak hanya dilaksanakan secara luring, namun juga terdapat kampanye secara daring dengan cara seluruh pengurus PIK-R Cakra wajib mengunggah twibbon terkait Hari AIDS Sedunia yang telah disediakan oleh pelaksana, kemudian di unggah ke akun instagram masing-masing pengurus.",
            "“Dalam rangka memperingati hari aids yang jatuh pada tanggal 1 desember 2023, bersama dengan pikr cakra melakukan campaign di sekitar CFD ikut terlibat dalam kegiatan campaign tentunya memberikan kesan tersendiri dengan lebih bermakna, pesan yang dapat saya berikan semoga semakin banyak masyarakat terutama remaja agar lebih peduli terhadap para penderita ODHA,” komentar Fitri (19) yang merupakan Juara kedua Duta Genre Surakarta, yang juga merupakan salah satu pengurus PIK-R Cakra UNS, yang ikut meramaikan program kampanye ini.",
            "Indah (19) berharap dengan adanya program kerja ini dapat menumbuhkan rasa peduli dan menambahkan pengetahuan kepada kita semua tentang HIV dan AIDS, khususnya kepada masyarakat. ",
          ],
          images: Ins9,
          release: "Minggu, 19 November 2023",
          category: "Inspirations",
          author: "Alvina Rahma Khalishafitri",
        },
      SAMBUT_HARI_NASIONAL_UNI_EMIRAT_ARAB_MASJID_SHEIKH_ZAYED_SOLO_GELAR_PERTUNJUKAN_KEMBANG_API:
        {
          id: "SAMBUT_HARI_NASIONAL_UNI_EMIRAT_ARAB_MASJID_SHEIKH_ZAYED_SOLO_GELAR_PERTUNJUKAN_KEMBANG_API",
          title:
            "Sambut Hari Nasional Uni Emirat Arab, Masjid Sheikh Zayed Solo Gelar Pertunjukkan Kembang Api",
          description: [
            "Pada malam Minggu ini Masjid Zayed lebih ramai dari biasanya. Para pengunjung yang berasal dari kota Solo maupun wisatawan luar kota turut antusias untuk menyaksikan pertunjukan kembang api di kawasan masjid.",
            "Pihak operasional masjid menyelenggarakan pertunjukan kembang api ini untuk merayakan National Day atau Hari Nasional Uni Emirat (UEA) ke-52. Hal ini tak terlepas dari hubungan persahabatan antara Indonesia dengan UEA, salah satunya ditandai dengan keberadaan Masjid Zayed. Masjid ini dibangun dan beroperasi dengan pembiayaan langsung dari pemimpin UEA, Sheikh Mohammed bin Zayed al Nahyan atau Sheikh Zayed. Bendera UEA dan Indonesia juga terpasang berdampingan di beberapa sudut masjid ini sebagai tanda penghormatan.",
            "Sejak Magrib masjid telah dipadati oleh pengunjung. Mereka datang untuk berwisata religi sekaligus menantikan pertunjukan kembang api yang akan dihelat. Dengan bimbingan imam masjid, di sela-sela waktu tersebut kegiatan diisi lantunan zikir dan doa-doa untuk kemakmuran dan kesejahteraan kedua bangsa (Indonesia dan UEA).",
            "“Bapak-bapak, Ibu-ibu dan para tamu sekalian. Kami beritahukan bahwa pada malam hari ini akan dilaksanakan zikir dan doa bersama untuk kemakmuran dan kesejahteraan negara Uni Emirat Arab dan negara kita Indonesia. Kami imbau Anda sekalian untuk tetap berada di tempat sampai selesai salat Isya dan zikir, baru setelah itu sama-sama kita saksikan pertunjukan kembang api.” Sebagaimana keterangan panitia masjid melalui pengeras suara.",
            "Setelah azan Isya berkumandang, pengunjung merapat ke dalam masjid untuk melaksanakan ibadah salat. Usai 4 rakaat salat wajib dan zikir, mereka menuju halaman untuk menantikan acara puncak.",
            "Cuaca gerimis malam itu tak menyurutkan antusiasme masyarakat untuk tetap berada di tempatnya menyaksikan pertunjukan yang akan disuguhkan. Halaman masjid lebih padat dari biasanya, yang dari luar pagar juga turut menanti. Namun karena kondisi agak basah di tengah hujan gerimis, kembang api tidak langsung dinyalakan. Operator mengimbau masyarakat untuk menunggu beberapa saat lagi karena kembang api baru akan dinyalakan pada pukul 07.45.",
            "Setelah sekitar setengah jam berlalu, dari pengeras suara panitia masjid kembali menyapa masyarakat dan diambil alih oleh imam besar masjid yang akan menghitung mundur sebelum kembang api dinyalakan.",
            "“Sepuluh.. Sembilan.. Delapan.. Tujuh.. Enam.. Lima.. Empat.. Tiga.. Dua.. Satu..” Suara yang langsung diiringi dengan lesatan kembang api menghiasi langit di atas kubah Masjid Zayed. Tak ingin ketinggalan, masyarakat mengabadikan momen tersebut dengan melakukan pengambilan gambar dan video.",
            "Pengadaan kembang api dalam pertunjukan ini merupakan pemberian dari UEA, hal yang senada dengan komitmen pihak Sheikh Mohammed bin Zayed untuk senantiasa memberikan dukungan bagi operasional masjid.",
            "Selain kembang api, pengunjung juga dapat mengikuti photo booth challenge berhadiah jutaan rupiah dan suvenir Al – Quran dari UEA. Festival ini masih akan berlangsung pada  1 – 5 Desember 2023.",
          ],
          images: Ins10,
          release: "Minggu, 4 Desember 2023",
          category: "Inspirations",
          author: "Fatih Rohardiansyah",
        },
      Kajian_Ustadz_Hanan_Attaki_Melawan_Ketidakpastian: {
        id: "Kajian_Ustadz_Hanan_Attaki_Melawan_Ketidakpastian",
        title: "Kajian Ustadz Hanan Attaki Melawan Ketidakpastian",
        description: [
          "Yogyakarta - Ustadz Hanan Attaki kembali menyapa warga Yogyakarta melalui kajian yang bertema “Uncertainty”.  Banyak sekali masyarakat muslim Indonesia, khususnya yang berdomisili di Yogyakarta yang berantusias mengikuti kajian tersebut, hal tersebut dapat dilihat dari jemaah yang berdomisili dari luar provinsi hingga yang berdomisili di Yogyakarta. Kajian tersebut dibagi menjadi empat sesi, yaitu sesi pagi pada pukul 07.00, sesi siang pada pukul 10.00, sesi sore pada pukul 15.30, dan sesi malam pada pukul 19.00.",
          "Acara tersebut dimulai dengan pembukaan, ice breaking, kajian, sesi tanya jawab, doa dan shalat berjamaah. Kajian yang bertemakan “Uncertainty” memiliki arti ketidakpastian. Ketidakpastian dalam hidup terkadang membuat kita semakin jauh dari Allah SWT karena selalu bersifat pesimis. Dalam kajian tersebut ustadz Hanan Attaki berbagai cara bagaimana menghadapi ketidakpastian yang sedang terjadi. Ketidakpastian yang sedang terjadi dapat dihadapi dengan cara beroptimis atau tafa`ul, karena salah satu profil dari seorang yang beriman adalah optimis.",
          "Ustadz Hanan Attaki menceritakan bagaimana optimis tersebut dapat terjadi melalui cerita Nabi yang beliau sampaikan. Optimis merupakan salah satu cara yang dapat kita lakukan agar selalu melakukan hal yang baik “Sebaik baiknya umatku yang bertahan adalah orang yang berjuang di perang asqalan,” ujar ustadz Hanan Attaki. Ustadz Hanan Attaki juga menyampaikan  bagaimana belajar mengenai iman seseorang agar selalu beroptimis ketika melakukan suatu kegiatan “Belajar iman bukan soal wawasan, tetapi keyakinan kita pada Allah SWT. Maka sesungguhnya orang yang benar-benar beriman adalah orang yang memiliki sifat tafa'ul.",
          "Lebih lanjut, ustadz Hanan Attaki mengatakan bahwa kita harus beroptimis meskipun sedang mengalami kesulitan , analogi optimis Islam diajarkan saat peperangan dizaman Nabi Muhammad SAW. Siapapun orang yang mendapatkan kemudahan kemudian membicarakan soal keindahan maka itu bukan sifat optimis, karena optimis lebih baik dibicarakan saat ada kesulitan.",
          "Ustadz Hanan Attaki juga mengingatkan kita agar tidak berpikiran pesimis, karena Allah SWT akan menjanjikan sebuah kebaikan kepada umatnya. “Maka orang beriman menunggu takdir Allah SWT dengan kesabaran dan shalat. Oleh karena itu jika kita sedang pesimis maka berwudhulah karena kepesimisan kita berasal dari setan,” ujar ustaz Hanan Attaki. Berdasarkan kajian yang ustaz Hanan Attaki berikan mengingatkan kita agar selalu melibatkan Allah dari segala hal atau kegiatan di kehidupan kita.",
          "Selain membahas tentang optimis dan pesimis, ustaz Hanan Attaki juga membahas tentang jodoh karena pertanyaan dari salah satu jemaah “Kita boleh menyebutkan nama yang kita suka ke dalam doa, tetapi jangan kecewa jika orang tersebut bukan jodoh kita. Jodoh sudah diatur, tetapi tidak ada salahnya kita menyebutkan kriteria yang kita inginkan melalui orang lain, dan jangan lupa untuk memantaskan diri kita terlebih dahulu agar jodoh kita bisa sesuai dengan standar kita.",
        ],
        images: Ins13,
        release: "Kamis, 08 Desember 2023",
        category: "Inspirations",
        author: "Farah Salsabilla",
      },
      HEROES_KEHANGATAN_DAN_SUKACITA_NATAL_PMK_FISIP_UNS_2023: {
        id: "HEROES_KEHANGATAN_DAN_SUKACITA_NATAL_PMK_FISIP_UNS_2023",
        title: "HEROES: KEHANGATAN DAN SUKACITA NATAL PMK FISIP UNS 2023",
        description: [
          "Surakarta – Akhir tahun sudah kurang dari satu bulan lagi, hal ini menandakan kegiatan keagamaan dari agama krsiten juga sudah sangat dekat. Kegiatan keagamaan yang sedang dibahas ini adalah kegiatan natal. Banyak sekali umat kristiani maupun khatolik yang sudah memulai merancang dan mempersiapkan acara besar dari hari kegiatan keagamaan natal tersebut, bahkan ada yang sudah melaksanakan hari perayaanya.",
          "Hal ini dapat kita temukan dalam unit kegiatan mahasiswa PMK FISIP UNS, yang sore hari ini telah melaksanakan serta merayakan kegiatan keagamaan acara natal. Dalam keberlangannya acara ini dihadiri oleh hampir seluruh mahasiswa FISIP UNS yang beragama kristen, dan juga dihadiri berbagai tamu undangan. Acara natal ini bernuansa sangat hangat dan berisikan kesukacitaan dari mereka yang merayakannya. Banyak sekali canda tawa yang muncul di acara ini, dan masing – masing peserta serta panitia, bersifat sangat hangat antara satu sama lainnya.",
          "”Puji Tuhan acara kegiatan natal ini dihadiri oleh banyak mahasiswa FISIP UNS dan hampir semua tamu undangan yang diundang dapat hadir. Pastinya kami sangat senang karena menunjukan keantusiasan saudara seiman kami untuk merayakan acara natal. Acara natal tahun ini juga terasa hangat dan sukacita, karena menyambut hari kelahiran Tuhan kami ke dunia,” Ujar salah satu panitia yang bertugas dalam Natal PMK FISIP UNS.",
          "Natal PMK FISIP UNS tahun ini pun juga mengusung tema heroes, yang berarti Tuhan sebagai seorang pahlawan. Banyak sekali hal menarik dalam kegiatan natal PMK FISIP UNS 2023 yang dapat menarik peserta, seperti adanya photoboot, games, dan persembahan penampilan, dan juga tukar kado. ",
          "”Ya pastinya seru banget, karena banyak kegiatan seru. Gak hanya ibadah tetapi perayaanya ada tukar kado, photoboot, dan masih banyak lagi yang ngebuat acara natal nya jadi ga bosenin. Terus juga ada santa claus jadi bisa foto bareng buat lucu – lucuan. Acara natal ini bener – bener bakal teringat terus,” Perkataaan James sebagai peserta Natal PMK FISIP UNS 2023.",
          "Kegiatan yang diadakan pada Jumat (8/12/2023) yang seharusnya bertempatan pada tanggal 25 Desember ini, ternyata hal ini terjadi untuk menghindari Mahasiswa FISIP UNS dan juga tamu undangan  yang sudah pulang ke kampungnya masing – masing. ”Sengaja dibuat tanggal 8 Desember, ya pastinya untuk mengindari mahasiswa dan tamu yang sudah pulang untuk berliburan dan juga berkumpul dengan keluarga ”. Ucapan dari Seva sebagai Steering Committe Panitia Natal PMK FISIP UNS.",
          "Kegiatan acara natal, memang sudah ditunggu – tunggu oleh mereka yang beragama kristen dan khatolik. Acara ini menjadi tempat mereka untuk berbagi kehangatan dan juga sukacita. Genera – z yang tidak merayakannya harus dapat saling menghargai dan juga menghormati. Biarlah mereka yang merayakannya dapat merasa aman dan nyaman dalam menjalankannya. Selamat merayakan natal untuk genera – z yang merayakannya ya.",
        ],
        images: Ins14,
        release: "Kamis, 08 Desember 2023",
        category: "Inspirations",
        author: "Efraim Nicholas Hutapea",
      },
      Sudah_Berstatus_Demisioner_BEM_FISIP_UNS_Adakan_Kegiatan_Terakhir_Bersama:
        {
          id: "Sudah_Berstatus_Demisioner_BEM_FISIP_UNS_Adakan_Kegiatan_Terakhir_Bersama",
          title:
            "Sudah Berstatus Demisioner, BEM FISIP UNS Adakan Kegiatan Terakhir Bersama",
          description: [
            "Tawangmangu - Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Sebelas Maret (BEM FISIP UNS) mengadakan acara kebersamaan terakhir setelah sidang pleno akhir. Kegiatan yang diikuti oleh 74 orang, yang berisikan pengurus BEM FISIP INI bernama Catatan Akhir Tahun BEM FISIP UNS atau CAT BEM FISIP UNS diselenggarakan di Tawangmangu. Kegiatan ini merupakan kegiatan terakhir dari rangkaian kegiatan BEM lainnya kabinet Satya Jaghana Citra yang bertujuan untuk saling mengeratkan satu sama lain, sekaligus ajang perpisahan non formal antar pengurus.",

            "Acara ini diselenggarakan selama dua hari, pada Sabtu (9/12/2023) hingga Minggu (10/12/2023). Hari pertama diisi dengan kegiatan sambutan terakhir oleh Prama Aditya sebagai Presiden BEM FISIP UNS 2023 dan Nadia Afifah selaku Sekretaris Jenderal yang dilanjut dengan sesi games, kemudian sesi SUCI (Surat Cinta). Para pengurus BEM yang hadir diberikan kertas kosong, kemudian menuliskan nama mereka masing-masing, dan kertas tersebut akan diisi oleh orang sebelahnya, kemudian kertas tersebut diputarkan hingga kertasnya sampai di tangan pemilik. Sehingga, para pengurus bebas untuk menulis tentang apapun yang berkaitan dengan orang yang ada di nama kertas tersebut. Namun, sesi Suci ini tidak selesai hingga akhir karena keterbatasan waktu, sehingga banyak pengurus yang belum menuliskan tentang pengurus lain. ",

            "Agenda dilanjutkan dengan makan bersama yang dialasi dengan daun pisang. “Kita sengaja ngasi nya alas daun biar makannya pada bareng-bareng dan biar kebersamaan ajasi,” jelas Lutfi (19) sebagai salah satu demisioner dari Kementerian Pengembangan Organisasi (PO), sekaligus panitia dari CAT BEM. Setelah itu, acara dilanjut dengan sesi kementerian. Sesi kementerian ini dilaksanakan dengan setiap kementerian berkumpul dengan kementeriannya masing-masing, kegiatan setiap kementeriannya bebas tergantung kementerian masing-masing. Terdapat kementerian Pengembangan Sumber Daya Mahasiswa (PSDM) yang saling memberikan confess terkait selama kepengurusan satu periode, kemudian saling meminta maaf, dan memberikan hadiah kepada menteri dan wakil menterinya sebagai kenang-kenangan. Sedangkan, Kementerian Minat dan Bakat sendiri memakan buah durian yang dibawa dan jamming bersama sekaligus karaoke lagu favorit mereka. Terdapat dari Kementerian Kajian Strategis dan Aksi Propaganda yang berdiskusi membahas isu-isu terkini. Setelah itu, dilaksanakan free time. Terdapat beberapa yang sedang jamming, bakar-bakar, dan menonton TV. ",

            "Kegiatan dilanjut pagi hari, Kementerian PO selaku panitia yang bertugas mengadakan games yang dilakukan di lapangan yang jaraknya tidak terlalu jauh dari lokasi penginapan. Games dilaksanakan tidak terlalu lama, tetapi berakhir dengan basah-basahan karena mereka saling melempar balon yang berisikan air kepada satu sama lain. Kemudian, mereka diminta untuk membersihkan diri dan makan, sekaligus beres-beres barang bawaan. Sambil menunggu, terdapat beberapa pengurus yang menonton bersama di ruang tengah. Mereka menonton film “The Doll 2” yang diperankan oleh Luna Maya. Beberapa pengurus juga ada yang asik menuliskan anon letter untuk pengurus lain yang sudah disediakan oleh panitia kepada masing-masing pengurus. Kelompok yang memenangkan permainan games pada pagi hari juga diumumkan dan diberikan hadiah sekaligus menjadi sesi penutup dari kegiatan CAT BEM FISIP UNS pada kali ini. ",

            "“Acaranya seru banget, walaupun kemaren datangnya sempat nyusul, tapi ga ketinggalan sama inti acara. Apalagi waktu sesi kementerian itu mikat paling gajelas tapi tetap seru karena kita nyanyi-nyanyi bareng di luar,” komentar Rindy (19) yang mengikuti kegiatan ini, dari demisioner Kementerian Minat dan Bakat. Rindy juga menambahkan sesi favorit lainnya adalah SUCI karena setelah membaca kertasnya banyak yang memberikan afirmasi positif, sehingga menambah mood-nya.",
          ],
          images: Ins16,
          release: "Minggu, 10 Desember 2023",
          category: "Inspirations",
          author: " Alvina Rahma Khalishafitri",
        },
    },
    environments: {
      Menelusuri_Salah_Satu_Kampung_ProKlim_di_Magelang: {
        id: "Menelusuri_Salah_Satu_Kampung_ProKlim_di_Magelang",
        title: "Menelusuri Salah Satu Kampung ProKlim di Magelang",
        description: [
          "Dalam beberapa tahun belakangan ini, kawasan kampung Jambon Gesikan, Cacaban, Magelang Tengah, Kota Magelang menarik perhatian masyarakat di Jawa Tengah hingga di luar pulau jawa sebagai salah satu tempat belajar mengelola sampah dan tanaman organik. Hal tersebut memiliki dampak baik bagi kemajuan kampung tersebut. ",
          "Awal mula kampung ini menjadi kampung yang dapat mengolah sampah menjadi pupuk dan aneka produk daur ulang karena salah satu ide dari warga kampung tersebut “Waktu itu saya ingat banget, saya sama mbak sur iseng aja. Ada tetangga yang sedang bikin wc tapi tanahnya dibuang di rumah kosong, lalu saya dan mbak sur punya ide untuk ditanami tanaman kacang panjang. Karena menurut saya dan mbak sur hal tersebut cukup berdampak baik, sehingga kita bilang ke ketua RW untuk bikin kebun saja. Pada saat itu ketua RW menolak tetapi pihak keluarga dari pemilik rumah kosong setuju akhirnya kami tidak peduli dan terus melanjutkan kegiatan tersebut hingga sekarang,” jelas Titi",
          "Setiap sebulan sekali kampung tersebut sering mengadakan program bank sampah, di dalam program tersebut para warga mengumpulkan sampah baik organik maupun non organik. Sampah sisa makanan akan dikonsumsi oleh magot, sedangkan sampah sayur akan diolah menjadi pupuk kompos yang berbentuk cair dan padat. Sampah non organik yang dapat diolah akan diolah akan diolah menjadi kerajinan tangan, sedangkan sampah non organik yang tidak dapat diolah akan dijual. Sampah non organik yang bisa diolah akan dijadikan kerajinan oleh ibu – ibu di kampung tersebut dan kerajinan tersebut dapat dijual atau menjadi suvenir ketika ada tamu yang berkunjung di kampung Jambon Gesikan, untuk menaruh hasil karya tersebut kampung Jambon Gesikan memiliki tempat yaitu Kreasi Daur Ulang. ",
          "Bank sampah di kampung tersebut juga dapat menerima berbagai macam sampah dari berbagai instansi pendidikan di daerah tersebut, sampah tersebut akan ditimbang kemudian dipilah sesuai dengan jenisnya, kemudian nasabah tersebut diberikan penawaran hasil dari pembuangan sampah tersebut akan langsung diambil atau akan ditabung terlebih dahulu ",
          "Kampung tersebut sering kali memenangkan lomba yang berkaitan dengan lingkungan. Lomba tersebut diadakan pada tingkat kota dan Kampung tersebut sering membawa pulang beberapa kejuaraan dengan jenis lomba yang berbeda. Hal tersebut menarik perhatian pemerintah kota magelang dan para wisatawan yang ingin belajar tentang cara pengelolaan sampah dan tanaman organik. Wisatawan yang berkunjung di kampung ini berasal dari berbagai jenis usia (anak - dewasa). Pada 28 November 2023 Pemerintah magelangan akan meresmikan kampung tersebut menjadi desa wisata karena jumlah wisatawan yang semakin lama semakin meningkat.",
          "Tanaman yang ada selain sayur dan buah juga terdapat pohon anggrek yang dibudidayakan, selain di budidayakan anggrek tersebut juga biasanya dapat dijual. Kampung Jambon Gesikan juga mendapatkan predikat sebagai ProKlim atau program kampung iklim. Hal tersebut dapat dibuktikan dengan adanya pengelolaan sampah, penanaman tanaman organik, dan terdapat jeni jenis kegiatan yang lainnya yang berkaitan dengan lingkungan disekitar. Hingga saat ini kampung Jambon Gesikan masih menerapkan program-program pengelolaan sampah untuk menjaga lingkungan dan mengurangi jumlah sampah, selain itu menanam tanaman organik agar lingkungan terlihat asri meskipun berada di Tengah perkotaan. ",
        ],
        images: Ins7,
        release: "Senin, 27 November 2023",
        category: "Environment",
        author: "Farah Salsabila",
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
          <div className="w-full bg-gradient-to-r from-violet-600 to-violet-800  py-2 es:px-1 flex flex-row justify-around items-center">
            <div></div>
            <p className="text-white font-normal sm:text-[16px] es:text-[12px]">
              Happy November Month&apos;s! Dapatkan <b>Diskon 20%</b> dengan
              code
              <b className="sm:text-[13px] es:text-[10px] text-blue-600 bg-white p-1 rounded-sm ms-1">
                ILOVEMYGENZ
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
                  src={news.headline[element].images}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    {news.headline[element].title}
                  </h3>
                  <p className="text-md">
                    by{" "}
                    <span className="font-bold text-violet-900">
                      {news.headline[element].author}
                    </span>
                  </p>
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
                      src={news.bisnis[element].images}
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.bisnis[element].title}
                      </h3>
                      <p className="text-md">
                        by{" "}
                        <span className="font-bold text-violet-900">
                          {news.bisnis[element].author}
                        </span>
                      </p>
                      <span className="text-xs dark:text-gray-400">
                        {news.bisnis[element].release}
                      </span>
                      {Array.isArray(news.bisnis[element].description) ? (
                        <p className="line-clamp-6">
                          {news.bisnis[element].description[0]}
                        </p>
                      ) : (
                        <p className="line-clamp-4">
                          {news.bisnis[element].description}
                        </p>
                      )}
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
                      src={news.sports[element].images}
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.sports[element].title}
                      </h3>
                      <p className="text-md">
                        by{" "}
                        <span className="font-bold text-violet-900">
                          {news.sports[element].author}
                        </span>
                      </p>
                      <span className="text-xs dark:text-gray-400">
                        {news.sports[element].release}
                      </span>
                      {Array.isArray(news.sports[element].description) ? (
                        <p className="line-clamp-6">
                          {news.sports[element].description[0]}
                        </p>
                      ) : (
                        <p className="line-clamp-4">
                          {news.sports[element].description}
                        </p>
                      )}
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
                      src={news.arts[element].images}
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.arts[element].title}
                      </h3>
                      <p className="text-md">
                        by{" "}
                        <span className="font-bold text-violet-900">
                          {news.arts[element].author}
                        </span>
                      </p>
                      <span className="text-xs dark:text-gray-400">
                        {news.arts[element].release}
                      </span>
                      {Array.isArray(news.arts[element].description) ? (
                        <p className="line-clamp-6">
                          {news.arts[element].description[0]}
                        </p>
                      ) : (
                        <p className="line-clamp-4">
                          {news.arts[element].description}
                        </p>
                      )}
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
                      src={news.politics[element].images}
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {news.politics[element].title}
                      </h3>
                      <p className="text-md">
                        by{" "}
                        <span className="font-bold text-violet-900">
                          {news.politics[element].author}
                        </span>
                      </p>
                      <span className="text-xs dark:text-gray-400">
                        {news.politics[element].release}
                      </span>
                      {Array.isArray(news.politics[element].description) ? (
                        <p className="line-clamp-6">
                          {news.politics[element].description[0]}
                        </p>
                      ) : (
                        <p className="line-clamp-4">
                          {news.politics[element].description}
                        </p>
                      )}
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
                      to={`/news/inspirations/${news.inpirations[element].id}`}
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
                        <p className="text-md">
                          by{" "}
                          <span className="font-bold text-violet-900">
                            {news.inpirations[element].author}
                          </span>
                        </p>
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
              <div className="w-full">
                <h2 className="text-2xl font-bold py-4">Lingkungan...</h2>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.keys(news.environments).map((element, index) => (
                    <Link
                      key={index}
                      className="max-w-sm mx-auto group hover:no-underline border-2 focus:no-underline"
                      to={`/news/environments/${news.environments[element].id}`}
                    >
                      <img
                        role="presentation"
                        className="object-cover w-full rounded h-44 dark:bg-gray-500"
                        src={news.environments[element].images}
                      />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                          {news.environments[element].title}
                        </h3>
                        <p className="text-md">
                          by{" "}
                          <span className="font-bold text-violet-900">
                            {news.environments[element].author}
                          </span>
                        </p>
                        <span className="text-xs dark:text-gray-400">
                          {news.environments[element].release}
                        </span>
                        {Array.isArray(
                          news.environments[element].description
                        ) ? (
                          <p className="line-clamp-6">
                            {news.environments[element].description[0]}
                          </p>
                        ) : (
                          <p className="line-clamp-4">
                            {news.environments[element].description}
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
