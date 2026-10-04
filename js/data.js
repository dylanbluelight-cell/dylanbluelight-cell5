// ============================================================================
// DATA SEJARAH REVOLUSI SURABAYA 1945 & ANALISIS SPASIAL MONUMEN
// Sumber: Laporan Riset Historis dan Analisis Spasial (Google Docs)
// ============================================================================

const SURABAYA_HISTORY_DATA = {
  meta: {
    title: "Surabaya 1945: Memoryscape Revolusi Fisik",
    subtitle: "Rekonstruksi Spasial & Edukasi Interaktif Memori Kolektif Melalui 6 Monumen Bersejarah",
    researchTitle: "Laporan Riset Historis dan Analisis Spasial: Rekonstruksi Revolusi Fisik dan Memori Kolektif Melalui Monumen Bersejarah di Surabaya",
    curator: "Arsip Historiografi & Analisis Tata Ruang Urban",
    year: "1945 - 2026"
  },

  contextIntro: {
    title: "Episentrum Revolusi Nasional",
    lead: "Surabaya merepresentasikan anomali historis paling signifikan dalam Revolusi Nasional Indonesia (1945-1949).",
    paragraphs: [
      "Ketika episentrum politik di Jakarta disibukkan dengan manuver diplomasi, intrik kabinet, dan negosiasi multilateral dengan pihak Sekutu maupun Belanda, Surabaya mewujud secara organik sebagai arena pertempuran fisik terbuka yang paling destruktif, masif, dan berdampak luas bagi pengakuan kedaulatan Republik Indonesia secara de facto di mata internasional.",
      "Pertempuran Surabaya bukan sekadar bentrokan militer asimetris antara Divisi India ke-5 dari militer Inggris dan tentara reguler Indonesia. Peristiwa ini merupakan konfrontasi total yang melibatkan mobilisasi seluruh lapisan masyarakat—mulai dari kaum santri, jurnalis, aparat kepolisian, hingga pelajar—yang secara kolektif meredefinisi identitas sosiologis mereka sebagai arek-arek Suroboyo.",
      "Tata ruang kota Surabaya berfungsi sebagai memoryscape (lanskap memori) atau arsip tiga dimensi. Monumen-monumen yang berdiri bukan sekadar struktur arsitektural estetis, melainkan jangkar memori kolektif yang mendokumentasikan anatomi revolusi secara granular."
    ],
    stats: [
      { label: "Durasi Pertempuran Kota", value: "21 Hari", desc: "Dari 10 Nov hingga Palagan Gunung Sari 28 Nov 1945" },
      { label: "Kekuatan Sekutu", value: "Divisi India ke-5", desc: "Didukung kapal penjelajah AL, tank Sherman & pesawat tempur" },
      { label: "Mobilisasi Massa", value: "100.000+ Jiwa", desc: "Laskar santri, polisi, TKR, pers, dan tentara pelajar" },
      { label: "Monumen Kunci", value: "6 Entitas Spasial", desc: "Arsip 3D memori kolektif tata ruang Surabaya" }
    ]
  },

  monuments: [
    {
      id: "bambu-runcing",
      name: "Monumen Bambu Runcing",
      theme: "Asimetri Persenjataan & Mobilisasi Teologis",
      location: "Jalan Panglima Sudirman, Pusat Surabaya",
      builtYear: "1970",
      coords: { lat: -7.2713, lng: 112.7428, x: 50, y: 55 },
      tag: "Senjata Rakyat & Dimensi Spiritual",
      badgeColor: "#E63946",
      summary: "Simbol ketimpangan kapasitas militer teknologi modern versus keberanian laskar rakyat yang didorong eskatologi keagamaan dan doa Kyai Bambu Runcing.",
      iconSvg: "bambu-spear",
      quote: "Bismillahi, Ya Hafidzu, Allahu Akbar — Doa Kyai Subchi untuk laskar pejuang sebelum menerjang desingan peluru modern.",
      details: {
        architecture: "Terdiri dari lima pilar beton dengan ketinggian tidak seragam yang memancarkan air mancur pada waktu tertentu, dikelilingi taman kecil dengan pepohonan hias rimbun. Bentuk pilar padma meruncing melambangkan ujung senjata bambu runcing yang menembus pertahanan kolonialisme.",
        genealogy: "Asal-usul bambu runcing berakar dari doktrin militer Kekaisaran Jepang (1942-1945). Jepang melatih warga sipil lokal (Seinendan & Keibodan) menggunakan 'takeyari' (tombak bambu) sebagai strategi pertahanan semesta garis terakhir menghadapi potensi invasi amfibi Sekutu di pesisir Jawa.",
        asymmetry: "Pasukan Brigade Infanteri India ke-49 Inggris dipersenjatai senapan Lee-Enfield, senapan mesin Bren, mortir, dan kendaraan lapis baja. Pejuang Surabaya menutupi defisit senapan api dengan mengadopsi bambu runcing sepanjang dua meter. Selain luka tusuk yang mematikan dan rentan infeksi fatal, bambu runcing menjadi instrumen perang psikologis (psychological warfare) yang sangat digetari serdadu asing.",
        theology: "Mobilisasi spiritual berpusat di Parakan, Temanggung, Jawa Tengah di bawah Kyai Subchi ('Kyai Bambu Runcing'). Ribuan anggota Laskar Hizbullah (Zainul Arifin), Barisan Sabilillah (KH Masykur), dan Barisan Mujahidin (K.H. Wahab Hasbullah) berbondong-bondong disepuh dengan asma' dan doa oleh para kyai dan hafidz Al-Qur'an. Terdapat pantangan magis keras: bambu runcing yang disepuh tidak boleh dilangkahi agar tuah spiritualnya tidak luntur."
      },
      tacticalSpecs: [
        { label: "Bahan Senjata", val: "Bambu petung/ori runcing 2 meter" },
        { label: "Pusat Penyepuhan", val: "Pesantren Parakan, Temanggung (Kyai Subchi)" },
        { label: "Laskar Pengguna", val: "Hizbullah, Sabilillah, Mujahidin, PRI" },
        { label: "Peran Taktis", val: "Perang psikologis & penyerbuan gelombang manusia (human wave)" }
      ]
    },
    {
      id: "polisi-istimewa",
      name: "Monumen Polisi Istimewa",
      theme: "Transisi Loyalitas Aparatur & Fundamen Militer Republik",
      location: "Persimpangan Jl. Polisi Istimewa & Jl. Raya Darmo",
      builtYear: "Monumen Perjuangan POLRI (Patung M. Jasin 2026)",
      coords: { lat: -7.2831, lng: 112.7405, x: 48, y: 68 },
      tag: "Aparatur Bersenjata Pertama",
      badgeColor: "#457B9D",
      summary: "Penanda sejarah beralihnya kesetiaan korps bersenjata terlatih Tokubetsu Keisatsutai menjadi tulang punggung pertahanan Republik pada 21 Agustus 1945.",
      iconSvg: "shield-star",
      quote: "Oentoek bersatoe dengan rakjat dalam perdjoeangan mempertahankan Proklamasi Repoeblik Indonesia. — Moehammad Jasin, 21 Agustus 1945",
      details: {
        architecture: "Patung perunggu Pahlawan Nasional Jenderal Polisi (Purn) Prof. Dr. Moehammad Jasin berdiri tegak dengan pose tegap memberi komando di persimpangan jalan protokol. Di dekatnya terdapat Gedung Wismilak (bekas Kantor Kepolisian Darmo 1928) dan Broederschool St. Louis.",
        institutionalTransition: "Pada masa pendudukan Jepang, Hoofdbureau (Markas Polisi) Surabaya membawahi unit tempur gempur Tokubetsu Keisatsutai (Polisi Istimewa) yang bermarkas di Broederschool St. Louis sejak 1943. Mereka memiliki disiplin taktis infanteri dan persenjataan lengkap dibanding milisi sipil lainnya.",
        proclamation: "Di tengah kekosongan kekuasaan (power vacuum) ketika Sekutu memerintahkan Jepang mempertahankan status quo, Inspektur Polisi Tk I Moehammad Jasin memimpin pasukannya mengambil langkah radikal. Tanggal 21 Agustus 1945, M. Jasin memproklamasikan bahwa Polisi Istimewa adalah Polisi Republik Indonesia yang bersatu dengan rakyat.",
        impact: "Dengan beralihnya Polisi Istimewa, Republik Indonesia secara instan memperoleh aparat keamanan terlatih pertama dengan rantai komando utuh. Pasukan M. Jasin menjadi motor utama dalam penyerbuan gudang senjata militer Jepang di Gedung Don Bosco Jl. Tidar pada 26 September 1945, mendistribusikan ribuan pucuk senapan ke rakyat Surabaya dan front pertahanan Jakarta. Tanggal 21 Agustus kini diresmikan sebagai 'Hari Juang Polri'."
      },
      tacticalSpecs: [
        { label: "Tokoh Utama", val: "Inspektur Polisi Tk I Moehammad Jasin" },
        { label: "Markas Asal", val: "Broederschool St. Louis (1943) & Hoofdbureau" },
        { label: "Aksi Kunci", val: "Proklamasi Polisi (21 Ags 1945) & Rebut Don Bosco (26 Sep 1945)" },
        { label: "Peringatan Nasional", val: "Hari Juang Polri (21 Agustus)" }
      ]
    },
    {
      id: "pers-perjuangan",
      name: "Monumen Pers Perjuangan",
      theme: "Hegemoni Perang Informasi & Transmisi Global",
      location: "Jl. Tunjungan No. 100 & Jl. Embong Malang",
      builtYear: "Gedung Heritage (Asal 1886 / Cagar Budaya)",
      coords: { lat: -7.2605, lng: 112.7388, x: 47, y: 44 },
      tag: "Senjata Pena & Gelombang Radio",
      badgeColor: "#F4A261",
      summary: "Basis klandestin perebutan kantor berita Domei menjadi LKBN Antara Jatim, rekaman foto perobekan bendera Yamato, dan siaran radio pembakar moral bangsa.",
      iconSvg: "radio-tower",
      quote: "Merdeka atau mati! — Pekik perjuangan Bung Tomo yang dipancarkan gelombang radio menembus blokade informasi global.",
      details: {
        architecture: "Bangunan cagar budaya bergaya vintage modernity di poros Jalan Tunjungan 100. Gedung ini bermula dari rumah tinggal (1886), toko serba ada (1904), toko mobil (1925), Toko Nam (1928), Toko Kwang, hingga menjadi Monumen Pers Perjuangan Surabaya.",
        newsAgency: "Selama pendudukan Jepang, arus informasi dimonopoli kantor berita propaganda Domei di Alun-Alun Strat 30. Pasca proklamasi, jurnalis bumiputera mengambil inisiatif subversif melepaskan diri dari sensor fasis dan mendirikan Kantor Berita Nasional (KNI/KBI) pada 1 September 1945 di Tunjungan 100, yang menjadi cikal bakal LKBN ANTARA Jawa Timur (dipimpin Wiwiek Hidayat).",
        visualWarfare: "Fotografer kelahiran Surabaya Abdul Wahab Saleh mengabadikan momen bersejarah ketika arek-arek Suroboyo merobek kain biru bendera Belanda di Hotel Yamato (Hotel Majapahit) pada 19 September 1945 pasca provokasi Mr. Ploegman. Saleh menyelamatkan rol filmnya ke Pabean Sayangan dan mencetak foto tersebut, yang kemudian menyulut kemarahan nasional.",
        audioRadio: "Abdul Wahab Saleh juga memotret pose ikonis Bung Tomo dengan jari menunjuk tajam. Di sayap audio, Radio Republik Indonesia (RRI) Surabaya di Embong Kaliasin (Jl. Pemuda) memancarkan pidato orasi berapi-api Bung Tomo (13-20 Oktober 1945). Pengaruhnya begitu dahsyat sehingga Inggris merasa harus mengerahkan pasukan infantri Gurkha dan mortir hanya untuk menyerbu dan membakar habis gedung RRI pada 28-30 Oktober 1945."
      },
      tacticalSpecs: [
        { label: "Markas Berita", val: "Eks Domei Alun-Alun Strat 30 -> Tunjungan 100 (KNI/Antara)" },
        { label: "Fotografer Kunci", val: "Abdul Wahab Saleh (Foto Perobekan Bendera & Bung Tomo)" },
        { label: "Pusat Siaran", val: "RRI Surabaya Embong Kaliasin (Dibakar Gurkha Okt 1945)" },
        { label: "Tokoh Orator", val: "Sutomo (Bung Tomo) & Wiwiek Hidayat" }
      ]
    },
    {
      id: "mobil-mallaby",
      name: "Taman Sejarah & Monumen Mobil Mallaby",
      theme: "Titik Bakar Ultimatum & Anatomi Peperangan Kota",
      location: "Taman Sejarah, Jl. Rajawali (Depan JMP & Gedung Internatio)",
      builtYear: "Revitalisasi Kota Tua 2023-2024",
      coords: { lat: -7.2355, lng: 112.7352, x: 44, y: 22 },
      tag: "Casus Belli Pertempuran Akbar",
      badgeColor: "#D90429",
      summary: "Instalasi rongsokan sedan mewah Buick 8 1939 merekonstruksi insiden tewasnya jenderal Sekutu di depan Gedung Internatio yang memicu ultimatum 10 November 1945.",
      iconSvg: "car-flame",
      quote: "Once And Forever, The Indonesian Republic — Tulisan grafiti pejuang 1945 yang dipahat abadi pada pilar Taman Sejarah.",
      details: {
        architecture: "Taman Sejarah Surabaya direvitalisasi oleh Pemkot Surabaya (DPRKPP) sebagai museum terbuka (outdoor museum). Pusat instalasinya adalah replika sedan antik Buick 8 tahun 1939 buatan Amerika yang dibuat menyerupai kondisi rongsokan hangus terbakar.",
        contextMallaby: "Brigadir Jenderal A.W.S. Mallaby (Komandan Brigade Infanteri India ke-49 Sekutu) mendarat di Surabaya pada akhir Oktober 1945 dengan dalih tugas kemanusiaan mengurus tawanan (APWI) dan melucuti tentara Jepang. Namun pasukan Inggris melanggar kesepakatan dengan menduduki titik strategis kota, memicu pertempuran 28-30 Oktober 1945 di mana Inggris terdesak hingga Soekarno-Hatta harus datang menengahi gencatan senjata.",
        internatioIncident: "Pada 30 Oktober 1945 sore, konvoi mobil Buick 8 Mallaby tiba di depan Gedung Internatio Krembangan untuk memerintahkan kompi Gurkha mematuhi gencatan senjata. Mobil Mallaby terkurung ribuan pejuang Surabaya. Pasukan Gurkha di dalam gedung panik melepaskan tembakan mortir dan senapan ke kerumunan.",
        fatalEnd: "Baku tembak jarak dekat pecah seketika. Seorang pemuda pejuang tak dikenal mendekati mobil Mallaby dan menembaknya dua kali dengan revolver. Ajudan Mallaby, Kapten R.C. Smith, melempar granat tangan ke arah penembak; granat terpantul ke kolong tangki bensin mobil Buick 8 dan meledak dahsyat, mengkremasi kendaraan dan jasad Mallaby di dalamnya.",
        retaliation: "Kematian seorang jenderal pemenang Perang Dunia II di tangan milisi pribumi adalah penghinaan telak bagi Imperium Britania. Mayjen E.C. Mansergh menjadikan kematian Mallaby sebagai casus belli untuk mengerahkan Divisi India ke-5 dan menjatuhkan ultimatum penyerahan tanpa syarat paling lambat 10 November 1945 pukul 06.00 WIB, yang ditolak tegas Gubernur Suryo."
      },
      tacticalSpecs: [
        { label: "Kendaraan Dinas", val: "Sedan Buick 8 Series 1939 (USA)" },
        { label: "Lokasi Insiden", val: "Depan Gedung Internatio (Krembangan)" },
        { label: "Perwira Tewas", val: "Brigjen Aubertin Walter Sothern (A.W.S.) Mallaby" },
        { label: "Dampak Geopolitik", val: "Casus belli Ultimatum Mansergh & Pertempuran 10 Nov 1945" }
      ]
    },
    {
      id: "palagan-gunungsari",
      name: "Palagan Gunung Sari",
      theme: "Epilog Pertahanan Kota & Perang Asimetris",
      location: "Kelurahan Gunung Sari, Kec. Dukuhpakis, Surabaya Selatan",
      builtYear: "Monumen Penanda Pertahanan Terakhir",
      coords: { lat: -7.3050, lng: 112.7150, x: 30, y: 84 },
      tag: "Pertahanan Terakhir 28 November",
      badgeColor: "#6A040F",
      summary: "Bukti pertempuran Surabaya berlangsung 3 minggu berdarah-darah. Garis pertahanan terakhir Tentara Pelajar yang digilas tank lapis baja sebelum transisi ke perang gerilya.",
      iconSvg: "trench-shield",
      quote: "Pertahanan Surabaya tidak usai pada 10 November. Ia dipertahankan jengkal demi jengkal hingga tetes darah penghabisan di bukit Gunung Sari.",
      details: {
        topography: "Area Gunung Sari merupakan kontur perbukitan alamiah di selatan Surabaya yang menjadi titik konsolidasi pertahanan terakhir sebelum mundur ke hinterland (Sidoarjo dan Mojokerto). Pertempuran berdarah ini meletus pada 28 November 1945 (hampir 3 minggu pasca 10 November).",
        studentWarriors: "Garis parit dan bungker pertahanan ini diawaki sisa-sisa laskar bersenjata yang sebagian besar beranggotakan Tentara Pelajar (siswa SMA dan mahasiswa amatir tanpa pengalaman militer formal).",
        tankMassacre: "Inggris mengerahkan armada kavaleri lapis baja berat: tank Sherman dan tank Stuart yang menembakkan meriam kaliber besar secara membabi buta. Dalam satu insiden mengerikan, proyektil meriam tank menembus bungker dangkal yang dihuni 5 anggota Tentara Pelajar. Tank Sherman Inggris kemudian melaju menggilas atap bungker yang runtuh, mengubur dan meremukkan kelima pejuang muda itu hidup-hidup di dalam parit.",
        doctrinalShift: "Kejatuhan Palagan Gunung Sari menandai berakhirnya fase perang kota (urban warfare) konvensional di Surabaya. Pimpinan militer Republik menyadari bahwa pertempuran parit statis menghadapi mesin perang imperium adalah tindakan bunuh diri massal. Sejak saat itu, doktrin beralih ke perang gerilya asimetris (hit-and-run) di pedalaman Jawa Timur.",
        memoryPreservation: "Komunitas sejarah Begandring Surabaia (diketuai Riyanto) secara rutin menggelar teatrikal living history 'Pertahanan Terakhir Gunung Sari' di pelataran Tugu Pahlawan agar memori pengorbanan Tentara Pelajar ini tidak terhapus oleh waktu."
      },
      tacticalSpecs: [
        { label: "Tanggal Palagan", val: "28 November 1945 (Puncak epilog pertahanan)" },
        { label: "Satuan Bertahan", val: "Tentara Pelajar (Pelajar/Mahasiswa) & Sisa TKR" },
        { label: "Alutsista Musuh", val: "Tank Sherman & Stuart Kavaleri Inggris" },
        { label: "Perubahan Doktrin", val: "Dari Perang Kota Konvensional ke Perang Gerilya Asimetris" }
      ]
    },
    {
      id: "tmp-sepuluh-november",
      name: "Taman Makam Pahlawan 10 November",
      theme: "Nekropolis Revolusi & Rekonsiliasi Lintas Zaman",
      location: "Jalan Mayjen Sungkono, Dukuhpakis, Surabaya",
      builtYear: "Kompleks Pemakaman Negara",
      coords: { lat: -7.2915, lng: 112.7185, x: 33, y: 75 },
      tag: "Pusara Suci & Memori Transendental",
      badgeColor: "#1D3557",
      summary: "Nekropolis ribuan pahlawan tanpa nama dengan anomali absennya jasad Mayjen Sungkono, persinggungan dengan sejarah 1965, dan ruang rekonsiliasi pascakolonial.",
      iconSvg: "cemetery-wreath",
      quote: "Identitas kepahlawanan revolusi sejatinya bersifat transendental — melampaui batas geografis atau presensi pusara fisiknya.",
      details: {
        necropolis: "Kompleks TMP 10 November di Jalan Mayjen Sungkono (bersama TMP Kusuma Bangsa dan TMP Ngagel) menampung ribuan jasad kombatan dan warga sipil tanpa nama yang gugur selama gelombang pertempuran 1945.",
        commanderParadox: "Meskipun terletak di jalan yang memakai namanya, Mayor Jenderal Sungkono (Komandan BKR dan komandan pertahanan pertempuran Surabaya) jasadnya TIDAK dimakamkan di sini, melainkan di TMPNU Kalibata Jakarta Selatan. Begitu pula Radjamin Nasution (mantan Wali Kota Surabaya & tokoh BKR) dimakamkan di TPU Rangkah sipil.",
        crossEraIntersection: "TMP 10 November tidak hanya berisi pejuang 1945. Pada 6 Maret 2022, Pembantu Letnan Dua (Pelda) KKO (Purn) Soegimin dimakamkan di sini dengan upacara militer penuh. Almarhum adalah prajurit marinir penemu dan pengangkat 7 jenazah Pahlawan Revolusi dari sumur maut Lubang Buaya pada tragedi G30S/PKI 1965, mempertemukan memori anti-kolonial 1945 dan ketahanan nasional 1965 dalam satu tanah suci.",
        reconciliationSpace: "Situs ini juga menjadi ruang rekonsiliasi psikologis lintas bangsa. Tercatat kisah Max, warga negara Belanda keturunan Indo-Belanda yang ayahnya adalah anggota TKR tawanan Jepang, menangis tersedu di antara nisan TMP. TMP 10 November bertransformasi dari simbol militer menjadi lanskap katarsis kemanusiaan dan penolak perang.",
        militaryRitual: "Setiap tahun, TMP ini menjadi lokasi upacara militer resmi seperti peringatan HUT TNI AL dan Hari Armada Republik Indonesia (5 Desember) dengan ziarah tabur bunga dan penghormatan sangkur senjata."
      },
      tacticalSpecs: [
        { label: "Letak Geografis", val: "Jl. Mayjen Sungkono, Dukuhpakis, Surabaya" },
        { label: "Anomali Jasad", val: "Mayjen Sungkono di TMPNU Kalibata, Radjamin di TPU Rangkah" },
        { label: "Tokoh Lintas Era", val: "Pelda KKO (Purn) Soegimin (Pengangkat Jenazah Lubang Buaya 1965)" },
        { label: "Upacara Rutin", val: "Hari Pahlawan (10 Nov), Hari Armada RI (5 Des), HUT TNI AL" }
      ]
    }
  ],

  chronology: [
    {
      date: "17 Agustus 1945",
      title: "Proklamasi Kemerdekaan RI",
      location: "Jakarta & Tiba di Surabaya via Sandi Telegraf",
      summary: "Berita kemerdekaan bocor melalui telegraf klandestin meski kantor berita Domei berusaha menerapkan sensor militer ketat sesuai mandat Sekutu."
    },
    {
      date: "21 Agustus 1945",
      title: "Proklamasi Polisi oleh M. Jasin",
      location: "Markas Tokubetsu Keisatsutai (Broederschool St. Louis)",
      summary: "Inspektur Polisi Tk I Moehammad Jasin membacakan ikrar sumpah setia Polisi Istimewa kepada Republik, memutus sepihak komando kolonial Jepang (Hari Juang Polri)."
    },
    {
      date: "1 September 1945",
      title: "Pengambilalihan Domei & Berdirinya KNI",
      location: "Jl. Tunjungan 100 (Eks Toko Nam)",
      summary: "Jurnalis bumiputera merebut kontrol jalur informasi Domei di Alun-Alun Strat 30 dan mendirikan Kantor Berita Nasional/KBI cabang Surabaya (cikal bakal LKBN Antara Jatim)."
    },
    {
      date: "19 September 1945",
      title: "Insiden Perobekan Bendera Yamato",
      location: "Hotel Yamato / Oranje (Hotel Majapahit)",
      summary: "Provokasi Mr. Ploegman mengibarkan bendera triwarna Belanda dirobek pemuda Surabaya menyisakan Merah Putih. Difoto heroik oleh Abdul Wahab Saleh."
    },
    {
      date: "26 September 1945",
      title: "Perebutan Gudang Senjata Don Bosco",
      location: "Gedung Don Bosco, Jl. Tidar",
      summary: "Polisi Istimewa bersama arek-arek Suroboyo melucuti gudang persenjataan tentara Jepang, memasok ribuan senapan api ke pejuang lokal dan barisan Jakarta."
    },
    {
      date: "25 - 27 Oktober 1945",
      title: "Pendaratan Brigade 49 Inggris",
      location: "Pelabuhan Tanjung Perak & Pusat Kota",
      summary: "Pasukan Inggris di bawah Brigjen AWS Mallaby mendarat dengan dalih misi APWI dan demiliterisasi Jepang, namun menduduki obyek vital secara provokatif."
    },
    {
      date: "28 - 30 Oktober 1945",
      title: "Pertempuran Fase I Surabaya",
      location: "Seluruh Penjuru Kota Surabaya",
      summary: "Serangan serentak puluhan ribu laskar rakyat nyaris memusnahkan pasukan Inggris. RRI Surabaya diserbu dan dibakar infanteri Gurkha Sekutu. Soekarno-Hatta tiba merundingkan gencatan senjata."
    },
    {
      date: "30 Oktober 1945 (Petang)",
      title: "Insiden Maut Gedung Internatio & Kematian Mallaby",
      location: "Jembatan Merah / Gedung Internatio",
      summary: "Mobil Buick 8 Mallaby terperangkap massa. Baku tembak pecah. Mallaby ditembak pejuang, disusul lemparan granat Kapten Smith yang meledakkan tangki bahan bakar sedan."
    },
    {
      date: "9 November 1945 (23.00 WIB)",
      title: "Penolakan Ultimatum oleh Gubernur Suryo",
      location: "Kediaman Gubernur / Siaran Radio",
      summary: "Gubernur R.M.T. Ario Soerjo melalui siaran radio resmi menolak ultimatum tanpa syarat Mayjen E.C. Mansergh: 'Lebih baik hancur lebur daripada tidak merdeka!'"
    },
    {
      date: "10 November 1945",
      title: "Puncak Pertempuran Surabaya",
      location: "Episentrum Kota Surabaya",
      summary: "Divisi India ke-5 meluncurkan serangan gabungan laut, darat, dan udara. Bung Tomo membakar semangat melalui corong radio. Gelombang manusia bambu runcing menghadapi tembakan artileri modern."
    },
    {
      date: "28 November 1945",
      title: "Palagan Gunung Sari (Epilog Perang Kota)",
      location: "Perbukitan Gunung Sari, Surabaya Selatan",
      summary: "Pertahanan parit terakhir Tentara Pelajar digempur dan digilas tank Sherman Sekutu. Menandai berakhirnya perang kota konvensional dan transisi doktrin ke perang gerilya asimetris di pedalaman."
    }
  ],

  speechRecordings: [
    {
      id: "bung-tomo",
      title: "Pidato Berapi-Api Bung Tomo (10 November 1945)",
      speaker: "Sutomo (Bung Tomo) via RRI Surabaya",
      context: "Disiarkan melalui gelombang radio ke seluruh penjuru Nusantara untuk merespons ultimatum Inggris.",
      transcript: "Bismillahirrohmanirrohim... Merdeka! Saudara-saudara rakyat jelata di seluruh Indonesia, terutama saudara-saudara penduduk kota Surabaya... Selama banteng-banteng Indonesia masih mempunyai darah merah yang dapat membikin secarik kain putih merah dan putih, maka selama itu tidak akan kita akan mau menyerah kepada siapapun juga! Saudara-saudara rakyat Surabaya, siaplah keadaan genting! KITA TUNJUKKAN KEPADA MEREKA BAHWA KITA ADALAH ORANG-ORANG YANG BENAR-BENAR INGIN MERDEKA! Allahu Akbar! Allahu Akbar! Allahu Akbar! MERDEKA!",
      speechAudioRate: 1.05,
      speechPitch: 1.15
    },
    {
      id: "proklamasi-polisi",
      title: "Teks Proklamasi Polisi (21 Agustus 1945)",
      speaker: "Inspektur Polisi Tk I Moehammad Jasin",
      context: "Pembacaan ikrar kesetiaan pasukan Tokubetsu Keisatsutai kepada Republik Indonesia di Markas St. Louis.",
      transcript: "Oentoek bersatoe dengan rakjat dalam perdjoeangan mempertahankan Proklamasi Repoeblik Indonesia, dengan ini saja njatakan Polisi sebagai Polisi Repoeblik Indonesia. Soerabaya, 21 Agustus 1945. Atas nama seloeroe warga Polisi, Moehammad Jasin - Inspektoer Polisi kelas I.",
      speechAudioRate: 0.95,
      speechPitch: 0.9
    },
    {
      id: "gubernur-suryo",
      title: "Pidato Penolakan Ultimatum Inggris (9 November 1945)",
      speaker: "Gubernur R.M.T. Ario Soerjo",
      context: "Disiarkan pada pukul 23:00 WIB setelah batas diplomasi berakhir untuk mengumumkan sikap resmi rakyat Jawa Timur.",
      transcript: "Panggilan suci untuk mempertahankan kemerdekaan telah tiba. Semua usaha kita untuk berunding secara damai telah ditolak oleh pihak tentara Sekutu. Saudara-saudara sekalian, pucuk pimpinan kita di Jakarta telah menyerahkan nasib perjuangan ini kepada kebulatan tekad kita di Surabaya. Lebih baik kita hancur lebur daripada tidak merdeka! Semboyan kita tetap: MERDEKA ATAU MATI!",
      speechAudioRate: 0.9,
      speechPitch: 0.85
    }
  ],

  quizQuestions: [
    {
      question: "Mengapa bambu runcing yang disepuh oleh Kyai Subchi di Parakan memiliki pantangan keras untuk tidak boleh dilangkahi?",
      options: [
        "Karena terbuat dari bambu beracun yang sensitif terhadap tanah",
        "Karena tindakan merendahkan tersebut dipercaya mendelegitimasi khasiat spiritual dan kekebalan gaibnya",
        "Agar ujung bambu tidak tumpul sebelum tiba di garis pertempuran",
        "Karena aturan tata krama militer peninggalan pendudukan Jepang"
      ],
      correctAnswer: 1,
      explanation: "Bambu runcing yang disepuh dengan doa 'Bismillahi, Ya Hafidzu, Allahu Akbar' oleh Kyai Subchi di Parakan memiliki pantangan magis keras untuk dilangkahi, karena diyakini akan mendelegitimasi energi spiritual perlindungan ilahiahnya."
    },
    {
      question: "Apa nama kesatuan kepolisian khusus bentukan Jepang yang dipimpin oleh Moehammad Jasin sebelum diproklamasikan menjadi Polisi RI pada 21 Agustus 1945?",
      options: [
        "Keibodan Pembela Tanah Air",
        "Seinendan Khas Kepolisian",
        "Tokubetsu Keisatsutai (Pasukan Polisi Istimewa)",
        "Heiho Kaigun Surabaya"
      ],
      correctAnswer: 2,
      explanation: "Tokubetsu Keisatsutai (Polisi Istimewa) adalah unit gempur kepolisian terlatih bentukan Jepang di markas St. Louis yang kemudian diikrarkan setia pada Republik pada 21 Agustus 1945."
    },
    {
      question: "Siapakah fotografer kelahiran Surabaya yang berhasil mengabadikan momen perobekan bendera Belanda di Hotel Yamato pada 19 September 1945?",
      options: [
        "Abdul Wahab Saleh",
        "Wiwiek Hidayat",
        "Alex Mendur",
        "Frans Mendur"
      ],
      correctAnswer: 0,
      explanation: "Abdul Wahab Saleh adalah fotografer asal Surabaya yang memotret perobekan bendera di Hotel Yamato (dan foto ikonis Bung Tomo menunjuk), lalu melarikan rol filmnya ke Pabean Sayangan."
    },
    {
      question: "Mobil apakah yang digunakan oleh Brigjen AWS Mallaby saat insiden baku tembak Gedung Internatio yang kemudian meledak hangus terbakar?",
      options: [
        "Jeep Willys 1942 buatan Inggris",
        "Sedan Buick 8 buatan Amerika Serikat keluaran tahun 1939",
        "Mobil lapis baja Bren Gun Carrier",
        "Sedan Mercedes-Benz 1938"
      ],
      correctAnswer: 1,
      explanation: "Kendaraan operasional Mallaby adalah sedan Buick 8 keluaran 1939 buatan Amerika Serikat. Replika bangkainya kini diabadikan di Taman Sejarah Surabaya."
    },
    {
      question: "Apa penyebab ledakan besar yang mengkremasi jasad Brigjen AWS Mallaby dan mobil dinasnya di depan Gedung Internatio?",
      options: [
        "Rudal torpedo yang ditembakkan dari kapal perang Surabaya",
        "Bom udara yang dijatuhkan secara keliru oleh pesawat Mosquito Inggris",
        "Granat tangan ajudan Mallaby (Kapten Smith) yang meleset dan meledak di bawah tangki bensin mobil",
        "Ranjau darat yang telah dipasang pejuang Surabaya di jalan"
      ],
      correctAnswer: 2,
      explanation: "Menurut arsip militer dan investigasi sejarah, Kapten R.C. Smith (ajudan Mallaby) melempar granat ke arah pejuang penembak, namun granat memantul ke kolong tangki bensin Buick 8 dan memicu detonasi dahsyat."
    },
    {
      question: "Kapan pertempuran terakhir berdarah di sektor selatan kota Surabaya yang dikenal sebagai 'Palagan Gunung Sari' meletus?",
      options: [
        "10 November 1945",
        "15 November 1945",
        "28 November 1945",
        "5 Desember 1945"
      ],
      correctAnswer: 2,
      explanation: "Palagan Gunung Sari meletus pada 28 November 1945 (hampir 3 minggu setelah 10 November), membuktikan bahwa perlawanan Surabaya berlangsung gigih hingga akhir November."
    },
    {
      question: "Tragedi apa yang menimpa lima orang anggota Tentara Pelajar dalam mempertahankan bungker dangkal di Palagan Gunung Sari?",
      options: [
        "Tertangkap dan diadili di pengadilan militer Singapura",
        "Tertembak proyektil meriam tank Inggris lalu digilas dan terkubur hidup-hidup di bawah reruntuhan parit oleh tank Sherman",
        "Kehabisan amunisi dan melarikan diri ke Mojokerto",
        "Terkena gas kimia beracun dari pesawat Thunderbolt"
      ],
      correctAnswer: 1,
      explanation: "Lima pejuang muda Tentara Pelajar tewas mengenaskan setelah bungker mereka dihantam proyektil meriam tank, kemudian kendaraan lapis baja Sherman berbobot puluhan ton melindas runtuhan bungker tersebut."
    },
    {
      question: "Dimanakah jasad sang Komandan Pertahanan Surabaya 1945, Mayor Jenderal Sungkono, sebenarnya dimakamkan?",
      options: [
        "Taman Makam Pahlawan 10 November di Jalan Mayjen Sungkono",
        "TMP Kusuma Bangsa Genteng",
        "Taman Makam Pahlawan Nasional Utama (TMPNU) Kalibata, Jakarta Selatan",
        "Tempat Pemakaman Umum (TPU) Rangkah"
      ],
      correctAnswer: 2,
      explanation: "Merupakan sebuah paradoks historis: Mayjen Sungkono tidak dimakamkan di TMP 10 November di jalan yang memakai namanya, melainkan disemayamkan di TMPNU Kalibata Jakarta Selatan."
    },
    {
      question: "Pahlawan lintas era manakah dari tahun 1965 yang turut dimakamkan secara terhormat di TMP 10 November Surabaya pada tahun 2022?",
      options: [
        "Pelda KKO (Purn) Soegimin (prajurit marinir pengangkat 7 jenazah Pahlawan Revolusi di Lubang Buaya)",
        "Kolonel Sugiono dari Yogyakarta",
        "Kapten Pierre Tendean",
        "Mayor Jenderal D.I. Pandjaitan"
      ],
      correctAnswer: 0,
      explanation: "Pelda KKO (Purn) Soegimin, salah satu penyelam marinir yang mengangkat 7 jenazah Pahlawan Revolusi di Lubang Buaya tahun 1965, dimakamkan di TMP 10 November pada 6 Maret 2022."
    },
    {
      question: "Pergeseran doktrin militer apa yang diambil oleh komando pejuang Republik pasca jatuhnya Palagan Gunung Sari?",
      options: [
        "Menyerah tanpa syarat kepada pimpinan Sekutu Mayjen Mansergh",
        "Membeli senjata modern dari Australia melalui jalur laut",
        "Beralih dari perang kota konvensional (urban warfare) ke perang gerilya asimetris di kawasan pedalaman (hinterland)",
        "Membangun benteng pertahanan tembok beton di pusat kota"
      ],
      correctAnswer: 2,
      explanation: "Menyadari perang parit kota melawan kekuatan militer adidaya adalah bunuh diri massal, komando TKR mengevaluasi taktik dan beralih ke doktrin perang gerilya asimetris (hit-and-run) di pedalaman Jawa Timur."
    }
  ],

  academicReferences: [
    { id: 1, title: "Senjata Tradisional Simbol Perjuangan di Monumen Bambu Runcing", source: "Indonesia Kaya", url: "https://indonesiakaya.com/pustaka-indonesia/senjata-tradisional-simbol-perjuangan-di-monumen-bambu-runcing/" },
    { id: 3, title: "Sejarah Bambu Runcing di Hari Kemerdekaan Indonesia", source: "RRI.co.id", url: "https://rri.co.id/cek-fakta/1773234/sejarah-bambu-runcing-di-hari-kemerdekaan-indonesia" },
    { id: 5, title: "Ada Replika Mobil Mallaby di Taman Sejarah Surabaya, Ini Kisahnya", source: "Detik Jatim", url: "https://www.detik.com/jatim/wisata/d-7355298/ada-replika-mobil-mallaby-di-taman-sejarah-surabaya-ini-kisahnya" },
    { id: 6, title: "Menikmati Wisata Sejarah Hoofdbureau Dengan Netizen Surabaya", source: "Catatan Sejarah Hoofdbureau", url: "https://www.tatitujiani.com/2016/06/mmenikmati-wisata-sejarah-hoofdbureau.html" },
    { id: 7, title: "Kiai dan Bambu Runcing: Epistemologi Perlawanan Parakan", source: "Generasi Salafus Sholeh", url: "https://generasisalaf.wordpress.com/2012/11/19/kiai-dan-bambu-runcing/" },
    { id: 9, title: "Polri Peringati Hari Juang di Jakarta dan Surabaya", source: "Suara Garut / Humas Polri", url: "https://suaragarut.id/polri-peringati-hari-juang-2026" },
    { id: 10, title: "Monumen M. Jasin Perkuat Identitas Surabaya sebagai Kota Pahlawan", source: "RRI Surabaya Regional", url: "https://rri.co.id/surabaya/regional/2567232/monumen-m-jasin-perkuat-identitas-surabaya-sebagai-kota-pahlawan" },
    { id: 11, title: "Resmikan Patung M. Jasin, Kapolri: Pengikat Emosional Polri dan Masyarakat", source: "MetroTV News", url: "https://www.metrotvnews.com/read/N0BC941Y-resmikan-patung-m-jasin-kapolri-pengikat-emosional-polri-dan-masyarakat" },
    { id: 19, title: "Surabaya Heritage Walk: Cagar Budaya Tunjungan & Embong Malang", source: "Wikiwisata", url: "https://id.wikivoyage.org/wiki/Surabaya" },
    { id: 20, title: "Gedung Monumen Pers Perjuangan Surabaya", source: "The Architecker", url: "https://thearchitecker.wordpress.com/2013/05/03/gedung-monumen-pers-perjuangan/" },
    { id: 21, title: "Perancangan Interior Museum Pers Indonesia Di Surabaya", source: "Neliti Riset Ilmiah", url: "https://media.neliti.com/media/publications/98992-ID-perancangan-interior-museum-pers-indones.pdf" },
    { id: 24, title: "Wartawan di Balik Proklamasi Kemerdekaan", source: "ANTARA News", url: "https://www.antaranews.com/berita/5697825/wartawan-di-balik-proklamasi-kemerdekaan" },
    { id: 27, title: "88 Tahun ANTARA dan Saksi Sejarah Heroisme di Jatim", source: "ANTARA Jatim", url: "https://jatim.antaranews.com/berita/1013500/88-tahun-antara-dan-saksi-sejarah-heroisme-di-jatim" },
    { id: 28, title: "Kisah di Balik Foto Bersejarah Perobekan Bendera Yamato", source: "Kompas.id Riset", url: "https://www.kompas.id/artikel/kisah-di-balik-foto-bersejarah-1" },
    { id: 29, title: "Biografi Bung Tomo dan Gelombang Radio Perjuangan Indonesia", source: "CNN Indonesia Edukasi", url: "https://www.cnnindonesia.com/edukasi/20241106131824-569-1163571/biografi-bung-tomo-dan-perjuangannya-untuk-indonesia" },
    { id: 31, title: "Menghidupkan Kembali Kisah Heroik Palagan Gunung Sari", source: "Radar Surabaya (Jawa Pos Group)", url: "https://radarsurabaya.jawapos.com/surabaya/2412160006/menghidupkan-kembali-kisah-heroik-di-tugu-pahlawan-kenang-peristiwa-palagan-gunung-sari" },
    { id: 34, title: "Mayjen Sungkono, Komandan Pertahanan Surabaya yang Terlupakan", source: "Radar Gempita Riset", url: "https://radargempita.co.id/mayjen-sungkono-komandan-pertahanan-surabaya-yang-terlupakan/" },
    { id: 37, title: "Pengangkat Jenazah Pahlawan Revolusi Pelda (Purn) Soegimin Tutup Usia", source: "ANTARA News", url: "https://www.antaranews.com/berita/2742937/pengangkat-jenazah-pahlawan-revolusi-pelda-purn-soegimin-tutup-usia" },
    { id: 41, title: "Warga Belanda Kunjungi Makam Pahlawan Surabaya dan Menangis Tersedu", source: "Tribunnews Regional", url: "https://www.tribunnews.com/regional/2017/11/10/aneh-ada-orang-belanda-kunjungi-makam-pahlawan-dan-menangis-tersedu-ada-apa" },
    { id: 42, title: "Hari Armada Republik Indonesia 5 Desember: Tradisi Ziarah TMP 10 November", source: "Detik News", url: "https://news.detik.com/berita/d-5839386/hari-armada-republik-indonesia-5-desember-ini-sejarahnya" }
  ]
};
