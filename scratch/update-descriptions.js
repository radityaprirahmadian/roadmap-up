const fs = require('fs');

const filePath = './src/constants/career-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Define the comprehensive mapping of improved descriptions for the coding skills
const codingSkillUpdates = {
  "Dokter": {
    "Pemikiran Komputasional": "Dokter membutuhkan pemikiran komputasional untuk menganalisis gejala kompleks layaknya mendebug kode; kemampuan mendiagnosis penyakit dengan menyingkirkan variabel secara sistematis ini diajarkan secara terstruktur di kelas coding saat siswa melacak bug.",
    "Analisis Data Medis": "Membantu dokter memahami pola data kesehatan pasien dengan lebih cepat dan presisi; insting pengenalan pola data ini dilatih melalui visualisasi data dan pengolahan variabel input-output dalam proyek kelas coding.",
    "Algoritma Diagnostik": "Pemahaman logika percabangan membantu dokter menavigasi pohon keputusan diagnostik medis yang rumit; logika keputusan sistematis ini diasah saat siswa menulis struktur kondisional (if-else) di kelas coding."
  },
  "Pengusaha/CEO": {
    "Optimasi Algoritma": "Pengusaha menggunakan pemikiran algoritmik untuk mengoptimalkan efisiensi alur bisnis; kemampuan merancang alur kerja yang efisien ini diperoleh saat siswa belajar menulis kode yang ringkas dan meminimalisir pemborosan memori.",
    "Otomatisasi Bisnis": "Pemahaman coding memungkinkan pengusaha untuk mengotomatisasi operasional berulang; logika otomasi ini didapatkan dari pembelajaran fungsi loop dan penjadwalan proses (cron jobs) di kelas coding.",
    "Pemodelan Sistem Bisnis": "Menerapkan pola arsitektur perangkat lunak untuk mendesain struktur organisasi bisnis yang tangguh; konsep modularitas sistem ini dipelajari siswa saat merancang modul game atau aplikasi yang saling terhubung."
  },
  "Arsitek": {
    "Desain Berorientasi Objek": "Arsitek berpikir dalam objek dan kelas untuk memahami interaksi komponen fisik bangunan; kemampuan berpikir struktural ini dilatih melalui pemrograman berorientasi objek (OOP) di kelas coding di mana siswa mengelola class dan inheritansi.",
    "Pemodelan Parametrik": "Konsep coding sangat berguna dalam arsitektur komputasional untuk memodifikasi struktur spasial; pemahaman variabel dinamis ini diperoleh ketika siswa belajar mengatur parameter logika dalam kelas coding.",
    "Logika Geometri Komputasional": "Memanfaatkan algoritma matematis untuk menghasilkan desain parametrik bangunan; logika spasial matematika ini diasah melalui latihan manipulasi koordinat dan rendering visual berbasis kode."
  },
  "Ilmuwan": {
    "Pengenalan Pola": "Ilmuwan menggunakan pengenalan pola untuk mengidentifikasi tren dalam kumpulan data besar; insting mendeteksi anomali ini dilatih di kelas coding saat siswa menganalisis output program dan array data.",
    "Simulasi dan Pemodelan": "Membantu merancang simulasi digital untuk eksperimen ilmiah tanpa biaya fisik; logika pemodelan ini didapatkan siswa saat membuat simulasi fisika sederhana atau animasi berbasis logika di kelas coding.",
    "Pemrosesan Model Simulasi": "Kemampuan menyusun variabel simulasi untuk menguji hipotesis ilmiah; pemahaman interaksi variabel ini diajarkan saat siswa memprogram parameter input-output yang fleksibel dalam aplikasi."
  },
  "Pengacara": {
    "Logika Bersyarat": "Pengacara menggunakan logika bersyarat dalam menafsirkan pasal hukum tanpa celah; ketajaman argumen ini dilatih secara intensif di kelas coding ketika siswa merancang gerbang logika bersarang (nested if-else).",
    "Pemrosesan Dokumen Otomatis": "Pemahaman algoritma membantu pengacara menyaring ribuan dokumen hukum dengan cepat; kemampuan penelusuran data ini dipelajari saat siswa memprogram fungsi pencarian dan filter database di kelas coding.",
    "Logika Smart Contracts": "Menyusun klausul hukum dengan struktur kondisional ketat untuk menghindari celah; pemahaman logika deterministik ini dilatih siswa ketika membuat aturan program yang berjalan otomatis tanpa intervensi manual."
  },
  "Akuntan": {
    "Sintaksis dan Akurasi": "Memastikan akurasi mutlak dalam setiap entri keuangan untuk mencegah selisih nilai; kedisiplinan tingkat tinggi ini terbentuk karena siswa terbiasa menulis sintaksis kode yang tidak boleh salah satu karakter pun agar program berjalan.",
    "Pembuatan Makro Keuangan": "Melatih kemampuan membuat skrip spreadsheet kompleks untuk pelaporan keuangan yang presisi; logika skrip ini dipelajari siswa saat memahami dasar-dasar sintaksis pemrograman tingkat tinggi di kelas coding.",
    "Otomatisasi Audit": "Mengembangkan skrip logika untuk mendeteksi anomali transaksi keuangan secara instan; kemampuan analisis sistemik ini didapatkan ketika siswa belajar mendeteksi kesalahan (error handling) pada program."
  },
  "Insinyur Perangkat Lunak": {
    "Pengembangan Perangkat Lunak": "Aplikasi langsung dari coding untuk memecahkan masalah kompleks; kemampuan rekayasa solusi digital ini dilatih secara mendalam melalui proyek pembuatan aplikasi nyata dari nol di kelas coding.",
    "Arsitektur Skalabel": "Membangun fondasi kuat untuk merancang sistem digital yang terus berkembang; pemahaman skalabilitas sistem ini diajarkan ketika siswa belajar menulis kode modular yang mudah dirawat.",
    "Optimasi Kompleksitas Big-O": "Memastikan efisiensi algoritma pada skala beban data pengguna yang besar; analisis performa komputasi ini dilatih ketika siswa diajarkan memilih struktur data yang paling hemat memori di kelas coding."
  },
  "Desainer Grafis": {
    "Desain Berbasis Komponen": "Desainer menggunakan pendekatan modular untuk menjaga konsistensi visual di berbagai platform; cara berpikir sistematis ini diadopsi dari pembelajaran pembuatan komponen web (reusable components) di kelas coding.",
    "Desain Generatif": "Membuat karya visual unik berbasis aturan matematika secara otomatis; kemampuan ini diperoleh saat siswa belajar menggabungkan fungsi matematika dengan visualisasi grafis menggunakan kode.",
    "Logika Animasi Dinamis": "Menggunakan logika pengkondisian untuk mengontrol pergerakan objek desain secara responsif; pemahaman alur gerak interaktif ini dilatih melalui pemrograman animasi dan transisi state dalam kelas coding."
  },
  "Koki": {
    "Eksekusi Algoritmik": "Koki mengikuti resep presisi secara berurutan untuk menghasilkan rasa hidangan yang konsisten; pemikiran sekuensial ini dilatih di kelas coding saat siswa dipersyaratkan menyusun baris kode dari atas ke bawah secara logis.",
    "Otomatisasi Resep": "Mendokumentasikan dan menstandarisasi takaran resep secara teratur; logika dokumentasi sistematis ini dibentuk ketika siswa belajar mendeklarasikan variabel dan konstanta di kelas coding.",
    "Logika Rantai Pasok Bahan": "Menggunakan pemikiran sistematis untuk mengoptimalkan alur inventaris dapur; kemampuan analisis rantai pasok ini diasah saat siswa memprogram alur data (data flow) antarmodul dalam pemrograman."
  },
  "Polisi": {
    "Pohon Keputusan (Decision Trees)": "Polisi menilai risiko situasi krisis dengan cepat untuk mengambil tindakan hukum; pengambilan keputusan cepat berbasis skenario ini dilatih saat siswa memprogram alur percabangan keputusan di kelas coding.",
    "Forensik Digital Dasar": "Memahami cara kerja sistem dan jejak aliran data untuk melacak kejahatan siber; pemahaman infrastruktur digital ini diperoleh ketika siswa belajar mengonfigurasi jaringan dan server di kelas coding.",
    "Pemikiran Forensik Sistematis": "Menganalisis rangkaian jejak digital layaknya membaca log kesalahan sistem; kemampuan pembacaan log secara teliti ini dilatih ketika siswa melakukan pelacakan bug (debugging) di kelas coding."
  },
  "Perawat": {
    "Looping dan Pemantauan": "Perawat terus memantau tanda vital pasien untuk mendeteksi anomali kesehatan; pemantauan berkala ini identik dengan fungsi background looping (while/for loop) yang dipelajari siswa untuk memantau status sistem di kelas coding.",
    "Sistem Triage Otomatis": "Mengatur prioritas penanganan pasien secara logis dalam situasi gawat darurat; pemikiran prioritas ini dilatih saat siswa belajar menerapkan algoritma pengkondisian bertingkat (if-else if-else) di kelas coding.",
    "Algoritma Prioritas Perawatan": "Mengaplikasikan logika antrean untuk menangani pasien gawat darurat secara optimal; pemahaman struktur data antrean (queue) ini dipelajari siswa secara teori dan praktik di kelas coding."
  },
  "Guru": {
    "Dekomposisi Masalah": "Guru memecah materi pelajaran rumit menjadi bagian-bagian kecil yang mudah dicerna; kemampuan instruksional ini dilatih ketika siswa dibiasakan memecah program besar menjadi fungsi-fungsi kecil di kelas coding.",
    "Personalisasi Pembelajaran": "Menyusun rencana pembelajaran adaptif berdasarkan kecepatan belajar setiap siswa; logika penyesuaian parameter belajar ini diperoleh saat siswa belajar mengelola kondisi variabel dinamis dalam pemrograman.",
    "Struktur Pembelajaran Adaptif": "Menyusun skema belajar bercabang berdasarkan pemahaman siswa; logika pembelajaran non-linear ini dilatih ketika siswa memprogram game petualangan bercabang (choose-your-own-adventure) di kelas coding."
  },
  "Pilot": {
    "Manajemen Sistem Real-time": "Pilot memproses input data dari instrumen kokpit dan langsung mengeksekusi kendali; pemrosesan data real-time ini didapatkan ketika siswa belajar memprogram aplikasi interaktif yang merespons event (event-driven programming).",
    "Logika Instrumen Navigasi": "Memahami algoritma autopilot untuk mengonfirmasi keakuratan arah pesawat; pemahaman logika sistem navigasi ini didapatkan siswa saat memprogram kontrol gerak objek di kelas coding.",
    "Debugging Sistem Penerbangan": "Mengisolasi masalah instrumen penerbangan secara cepat dengan menguji variabel satu per satu; kemampuan troubleshooting taktis ini diasah melalui rutinitas melacak letak error kode di kelas coding."
  },
  "Penulis": {
    "Struktur Data (Bercerita)": "Penulis membangun plot cerita kompleks dengan menghubungkan berbagai karakter; kemampuan relasional ini dipelajari siswa saat memahami konsep basis data relasional dan skema objek di kelas coding.",
    "Struktur Interaktif": "Menciptakan alur cerita novel interaktif yang bercabang; pemikiran narasi bercabang ini dilatih ketika siswa belajar merancang percabangan logika kondisional bersarang dalam pemrograman.",
    "Struktur Narasi Non-Linear": "Merancang plot cerita bercabang yang kompleks layaknya merancang alur game; keterampilan penataan struktur non-linear ini didapatkan ketika siswa memprogram mesin status (state machine) di kelas coding."
  },
  "Musisi": {
    "Sintaks dan Pola": "Memahami ritme dan melodi musik sebagai pola matematika yang teratur; kepekaan ritmis ini diasah ketika siswa dilatih mengenali pola perulangan sintaksis kode yang berulang secara matematis di kelas coding.",
    "Sintesis Suara Digital": "Memanipulasi sinyal audio digital untuk menghasilkan instrumen unik; keterampilan ini diperoleh ketika siswa belajar memprogram frekuensi suara menggunakan API Web Audio di kelas coding.",
    "Logika Struktur Gelombang": "Memahami relasi frekuensi dan ketukan musik sebagai representasi matematika; pemikiran analitis gelombang ini dilatih saat siswa belajar memvisualisasikan data grafik matematika di kelas coding."
  },
  "Aktor": {
    "Simulasi Sistem": "Menjalankan peran karakter di kepala dengan menyesuaikan respons terhadap situasi panggung; pemodelan perilaku dinamis ini dilatih saat siswa merancang simulasi objek virtual yang merespons kondisi lingkungan di kelas coding.",
    "Manajemen Variabel Emosi": "Memecah karakter menjadi sekumpulan sifat dan respons emosi yang dapat diubah; pembagian peran ini didapatkan dari pembelajaran memprogram properti objek (object properties) di kelas coding.",
    "Pemetaan State Karakter": "Mengatur transisi emosi karakter agar mengalir natural; transisi perilaku ini dipelajari siswa saat memahami alur transisi status (state transition) pada aplikasi atau game di kelas coding."
  },
  "Fotografer": {
    "Pemrosesan Input-Output": "Fotografer menyesuaikan ISO, aperture, dan shutter speed untuk menghasilkan foto ideal; logika input-proses-output ini diajarkan secara mendasar sejak awal pertemuan pertama di kelas coding.",
    "Pengeditan Batch Otomatis": "Membuat skrip otomatis untuk mempercepat pengeditan ribuan foto sekaligus; kemampuan otomasi massal ini diperoleh ketika siswa belajar menulis skrip batching dan perulangan di kelas coding.",
    "Logika Pemrosesan Sekaligus (Batch)": "Menyusun urutan instruksi pengeditan yang konsisten untuk diterapkan pada banyak foto; logika pemrosesan berurutan ini diasah ketika siswa menulis fungsi otomatisasi terstruktur di kelas coding."
  },
  "Jurnalis": {
    "Penyaringan Data": "Jurnalis memilah tumpukan data dokumen untuk menemukan fakta utama berita; kepekaan menyaring informasi penting ini diajarkan saat siswa belajar menulis kueri penyaringan data (filtering query) di kelas coding.",
    "Jurnalisme Data": "Melakukan scraping dan visualisasi data statistik untuk mendukung investigasi berita; kemampuan teknis ini diperoleh siswa saat mempelajari pemrograman Python dasar untuk pengolahan data di kelas coding.",
    "Penyaringan Data Investigatif": "Mencari keterkaitan informasi di antara ribuan halaman dokumen; kemampuan investigasi berbasis data ini dilatih saat siswa memprogram fungsi pencarian teks (string search) dan regex di kelas coding."
  },
  "Psikolog": {
    "Debugging Sistem Pikiran": "Membantu pasien mengurai pola pikir negatif ke akar penyebabnya; kemampuan mengisolasi masalah pikiran ini diadopsi dari teknik melacak bug (debugging) secara terstruktur yang diajarkan di kelas coding.",
    "Analisis Pola Perilaku": "Menemukan pola tersembunyi dari data hasil observasi perilaku pasien; kemampuan analisis pola ini diasah ketika siswa memprogram sensor pendeteksi pola aktivitas pada proyek robotika di kelas coding.",
    "Pemodelan Perilaku Kognitif": "Memetakan respons kognitif pasien menggunakan diagram alur logika; pembuatan bagan intervensi ini dilatih saat siswa merancang diagram alur program (flowchart) di kelas coding."
  },
  "Apoteker": {
    "Pengecekan Kondisi": "Apoteker memeriksa kontraindikasi obat sebelum diresepkan kepada pasien; kehati-hatian bersyarat ini dilatih secara ketat di kelas coding melalui materi validasi logika input kondisional.",
    "Validasi Sistem Resep": "Mencegah kesalahan kombinasi dosis obat melalui verifikasi sistem yang ketat; pemikiran analitis pencegahan error ini didapatkan siswa saat mempelajari penanganan pengecualian (exception handling) di kelas coding.",
    "Logika Sistem Interaksi Obat": "Menganalisis sistem peringatan interaksi obat otomatis untuk menjaga keselamatan pasien; kemampuan mengelola integrasi sistem ini dilatih ketika siswa memprogram interaksi antarmodul di kelas coding."
  },
  "Dokter Gigi": {
    "Pemecahan Masalah Sistematis": "Mendiagnosis dan merawat kerusakan gigi dengan pendekatan terstruktur langkah demi langkah; kedisiplinan diagnosis ini didapatkan siswa ketika dibiasakan menulis langkah algoritma pemecahan masalah di kelas coding.",
    "Pemetaan 3D Presisi": "Memahami cara kerja visualisasi spasial 3D untuk merancang implan gigi; penalaran spasial digital ini dipelajari siswa saat memprogram grafis interaktif dan rendering 3D dasar di kelas coding.",
    "Pemikiran Geometri Presisi": "Menganalisis keselarasan struktur gigi menggunakan parameter visual dan spasial; penalaran koordinat presisi ini dilatih ketika siswa membuat kalkulasi matematika untuk pergerakan objek di kelas coding."
  },
  "Insinyur Sipil": {
    "Skalabilitas dan Struktur": "Merancang jembatan atau gedung agar kuat menahan beban dari waktu ke waktu; pemahaman kapasitas beban ini identik dengan pembelajaran merancang arsitektur database yang kuat menampung beban kueri di kelas coding.",
    "Analisis Beban Komputasional": "Menganalisis hasil simulasi struktur fisik untuk memastikan keamanan bangunan; logika analisis batas kekuatan ini didapatkan ketika siswa belajar memprogram skenario beban stres (stress test) pada sistem di kelas coding.",
    "Simulasi Stres Struktural": "Menguji kekuatan bangunan di bawah kondisi gempa atau angin kencang secara digital; perancangan simulasi tangguh ini dipelajari siswa saat menulis logika pengujian unit (unit testing) di kelas coding."
  },
  "Pemasar Digital": {
    "Pengujian A/B": "Membandingkan performa dua konten iklan untuk memilih konversi terbaik; pemikiran komparatif berbasis data ini didapatkan ketika siswa belajar memprogram fungsi percabangan keputusan dan pengujian variabel di kelas coding.",
    "Otomatisasi Kampanye": "Membangun alur pemasaran otomatis yang menyasar profil konsumen secara spesifik; logika otomasi perilaku konsumen ini diasah saat siswa memprogram aturan bersyarat (if-else triggers) di kelas coding.",
    "Logika Segmentasi Dinamis": "Menyusun aturan kondisional untuk menargetkan iklan secara real-time berdasarkan tindakan pengguna; logika dinamis ini dipelajari ketika siswa memprogram manipulasi data array di kelas coding."
  },
  "Manajer Proyek": {
    "Orkestrasi Alur Kerja": "Mengoordinasikan berbagai divisi agar proyek berjalan paralel tanpa benturan jadwal; pemikiran asinkron ini dipelajari siswa di kelas coding saat mempelajari konsep multitasking pemrograman asinkron (async/await).",
    "Alokasi Sumber Daya Berbasis Data": "Mengoptimalkan pembagian tim secara efisien menggunakan parameter data riil; pemikiran optimasi sumber daya ini dilatih ketika siswa membuat algoritma penjadwalan sederhana di kelas coding.",
    "Orkestrasi Proses Asinkron": "Mengatur agar berbagai tim dapat bekerja mandiri tanpa harus saling menunggu untuk menghindari antrean; logika non-blocking ini didapatkan saat siswa belajar pemrograman asinkron di kelas coding."
  },
  "Analis Data": {
    "Ekstraksi Logika Dasar": "Mengekstrak informasi bisnis yang tersembunyi dari database; logika kueri data ini dilatih siswa ketika mempelajari sintaks pencarian data dan manipulasi string di kelas coding.",
    "Automasi Pembersihan Data": "Menggunakan skrip untuk membuang baris data yang cacat atau kosong secara otomatis; logika otomasi pembersihan data ini dipelajari siswa saat menulis fungsi validasi data (data validation) di kelas coding.",
    "Ekstraksi Anomali Logis": "Menulis fungsi logika kustom untuk mendeteksi outlier dalam database; kemampuan mendeteksi anomali data ini diasah melalui penulisan aturan filter kompleks di kelas coding."
  },
  "Petani": {
    "Loop Input dan Pemantauan": "Petani memantau kondisi tanah dan air secara berkala untuk menjaga pertumbuhan tanaman; pemikiran siklus monitoring ini dilatih ketika siswa memprogram loop kondisional (while-loops) yang terus berjalan memantau sensor di kelas coding.",
    "Pertanian Cerdas (Smart Farming)": "Mengoperasikan sistem penyiraman otomatis yang terhubung ke internet (IoT); pemahaman otomasi lingkungan ini diperoleh siswa saat belajar memprogram perangkat mikrokontroler di kelas coding.",
    "Logika Otomatisasi Lingkungan": "Mengatur parameter penyiraman otomatis berdasarkan kondisi kelembapan tanah; logika respon lingkungan ini diasah ketika siswa memprogram sensor masukan (input sensor) di kelas coding."
  },
  "Mekanik": {
    "Debugging Hardware": "Mendiagnosis kerusakan komponen mobil secara terarah dengan mengisolasi bagian yang rusak; teknik diagnosis ini merupakan bentuk fisik dari metode pelacakan kesalahan (debugging) yang dipelajari siswa di kelas coding.",
    "Diagnostik ECU Lanjutan": "Membaca kode kesalahan elektronik dari unit kontrol pusat mobil; pemahaman logika diagnostik ini diperoleh siswa saat belajar membaca kode error (error codes) dan log keluaran di kelas coding.",
    "Debugging Logika ECU": "Melacak kegagalan elektronik pada mobil dengan membaca kode status kesalahan secara runut; kemampuan analisis runut ini didapatkan dari kebiasaan menelusuri pesan kesalahan compiler di kelas coding."
  },
  "Tukang Listrik": {
    "Arsitektur Sirkuit Logika": "Merancang jalur kelistrikan gedung agar mengalir aman ke setiap sakelar; konsep sirkuit ini adalah bentuk fisik dari gerbang logika AND/OR/NOT yang dipelajari siswa di kelas coding.",
    "Otomatisasi Rumah Pintar": "Mengonfigurasi sensor gerak dan lampu pintar agar menyala otomatis; pemahaman logika perangkat pintar ini dilatih ketika siswa belajar pemrograman IoT dasar di kelas coding.",
    "Logika Pemutus Arus Bersyarat": "Merancang skema instalasi kelistrikan yang aman menggunakan gerbang logika fisik; logika pengamanan sistem ini dipelajari siswa saat menulis percabangan bersyarat (conditional gates) di kelas coding."
  },
  "Pemandu Wisata": {
    "Pengendalian Alur Eksekusi": "Mengatur jadwal tur wisata agar berjalan lancar sesuai rencana perjalanan; logika pengaturan waktu ini sejalan dengan pemrograman kontrol alur (control flow execution) yang diajarkan di kelas coding.",
    "Optimasi Rute": "Menentukan jalur perjalanan terpendek untuk menghindari kemacetan; logika pencarian rute ini didapatkan siswa saat mempelajari dasar-dasar algoritma pencarian jalur terdekat (pathfinding) di kelas coding.",
    "Logika Rute Dinamis": "Mengubah jadwal tur secara real-time berdasarkan kendala cuaca atau keramaian; kemampuan adaptasi rute bersyarat ini dipelajari siswa saat menulis skenario alternatif (fallback logic) di kelas coding."
  },
  "Desainer Interior": {
    "Optimasi UI Lingkungan": "Merancang tata letak ruangan agar fungsional bagi penghuninya; konsep penataan antarmuka ruang fisik ini mengadopsi prinsip desain antarmuka pengguna (UI/UX) yang diajarkan di kelas coding.",
    "Render Ruang VR": "Mengooperasikan simulasi realitas virtual untuk menyajikan rancangan ruang kepada klien; pemahaman navigasi 3D ini dilatih saat siswa belajar membuat game petualangan 3D di kelas coding.",
    "Pemodelan Spasial Parametrik": "Mengatur posisi furnitur berdasarkan variabel dimensi ruangan; logika dinamis ini dipelajari ketika siswa memprogram elemen visual yang menyesuaikan ukuran layar secara responsif di kelas coding."
  },
  "Peneliti": {
    "Iterasi Algoritma": "Melakukan uji coba penelitian secara berulang dengan menyesuaikan parameter hingga valid; siklus eksperimen ini melatih ketekunan iterasi layaknya proses testing dan tuning program yang dipelajari siswa di kelas coding.",
    "Otomatisasi Pengumpulan Data": "Mengumpulkan ribuan kuesioner digital secara cepat; keterampilan pengumpulan data otomatis ini diajarkan melalui teknik kueri database dasar dan skrip otomasi di kelas coding.",
    "Pencarian Literatur Terstruktur": "Menggunakan logika kata kunci bersyarat untuk menyaring artikel ilmiah; logika penyaringan terstruktur ini diperoleh ketika siswa mempelajari operator logika (AND, OR, NOT) di kelas coding."
  },
  "Kurator Museum": {
    "Pengindeksan Data Terstruktur": "Mengarsipkan artefak sejarah secara teratur berdasarkan kategori waktu dan wilayah; pemikiran pengarsipan ini diajarkan di kelas coding saat siswa belajar mengorganisasi data dalam struktur database relasional.",
    "Arsip Digital Interaktif": "Mengatur navigasi pameran museum digital agar mudah diakses pengunjung; desain struktur arsip digital ini dilatih saat siswa membuat direktori web interaktif di kelas coding.",
    "Pengindeksan Relasional Arsip": "Membangun skema database kustom untuk menghubungkan artefak sejarah; perancangan hubungan data ini dipelajari siswa saat mempelajari relasi database (one-to-many/many-to-many) di kelas coding."
  },
  "Pramugari": {
    "Protokol Penanganan Error": "Menjalankan tindakan penyelamatan darurat kabin pesawat dengan tenang dan terstruktur; kesiapan penanganan kendala ini diasah ketika siswa belajar mendesain blok proteksi kesalahan (try-catch block) di kelas coding.",
    "Sistem Reservasi Real-time": "Memahami alur data penerbangan asinkron saat melayani boarding penumpang; pemahaman sistem sinkronisasi data ini diperoleh ketika siswa memprogram web dinamis di kelas coding.",
    "Protokol Darurat Algoritmik": "Mengeksekusi prosedur keselamatan darurat kabin secara berurutan; kedisiplinan eksekusi langkah demi langkah ini dilatih melalui pembiasaan menulis algoritma instruksional di kelas coding."
  },
  "Pelatih Olahraga": {
    "Optimasi Kinerja (Performance Tuning)": "Pelatih menyesuaikan posisi pemain untuk memaksimalkan kekuatan tim; analisis penyesuaian performa ini dipelajari ketika siswa dilatih mengoptimasi fungsi program agar berjalan lebih cepat di kelas coding.",
    "Analisis Performa Biometrik": "Membaca grafik data kebugaran atlet untuk menyusun menu latihan ideal; pemahaman analisis visual ini dilatih saat siswa belajar membuat program visualisasi grafik data di kelas coding.",
    "Pemodelan Strategi Berbasis Data": "Menyusun formasi pemain secara objektif berdasarkan statistik performa historis; logika pengambilan keputusan berbasis data ini dilatih saat siswa memprogram sistem analisis data di kelas coding."
  },
  "Atlet Profesional": {
    "Eksekusi Presisi Tinggi": "Melatih refleks gerakan tubuh agar bekerja dengan konsistensi yang sangat tinggi; kedisiplinan eksekusi presisi ini diasah di kelas coding ketika siswa dituntut merancang fungsi program bebas dari error logika.",
    "Optimasi Pola Latihan": "Menganalisis hasil performa fisik harian untuk mencari porsi latihan paling efisien; pemikiran analisis optimal ini didapatkan ketika siswa belajar membandingkan efisiensi runtime dua program berbeda di kelas coding.",
    "Optimasi Variabel Biomekanik": "Menganalisis data tangkapan gerak tubuh untuk menyempurnakan teknik pukulan atau lompatan; pemahaman variabel koordinat ini diperoleh siswa saat belajar menggerakkan sprite game di kelas coding."
  },
  "Pustakawan": {
    "Pengambilan Informasi (Information Retrieval)": "Membantu pengunjung menemukan buku melalui query mesin pencari perpustakaan; logika kueri pencarian ini dilatih siswa ketika mempelajari cara kerja kueri database (search query) di kelas coding.",
    "Manajemen Sistem Pencarian": "Mengonfigurasi basis data perpustakaan agar buku dikelompokkan secara logis; kemampuan organisasi database ini diajarkan melalui materi struktur data array dan objek di kelas coding.",
    "Desain Skema Klasifikasi": "Menyusun pohon kategori informasi agar koleksi buku dapat dicari dengan jalur pencarian tercepat; penyusunan hierarki ini diasah ketika siswa mempelajari struktur data pohon (tree) di kelas coding."
  },
  "Pekerja Sosial": {
    "Integrasi API Sistem Sosial": "Menghubungkan warga kurang mampu ke berbagai program bantuan sosial yang berbeda; logika integrasi layanan ini dipelajari siswa di kelas coding melalui materi penggabungan beberapa API pihak ketiga.",
    "Manajemen Basis Data Kasus": "Mengorganisasi ribuan rekam kasus warga agar tersimpan dengan aman dan teratur; keterampilan pengelolaan database ini diperoleh ketika siswa belajar merancang sistem basis data relasional di kelas coding.",
    "Sistem Deteksi Risiko Sosial": "Mengidentifikasi tanda-tanda awal risiko sosial keluarga berdasarkan indikator ekonomi; kemampuan menyusun deteksi dini ini dilatih ketika siswa memprogram validasi logika bersyarat di kelas coding."
  },
  "Desainer Mode": {
    "Desain Berbasis Pola (Design Patterns)": "Membuat gaun indah dengan mengombinasikan pola pakaian standar yang sudah ada; kemampuan menggunakan kembali cetak biru ini didapatkan ketika siswa mempelajari arsitektur kode reusable (Design Patterns) di kelas coding.",
    "Pemotongan Laser Berbasis Pola": "Memprogram mesin pemotong laser agar memotong kain dengan presisi tinggi; pemahaman instruksi mesin otomatis ini diperoleh saat siswa belajar memprogram gerakan koordinat di kelas coding.",
    "Optimasi Pola Geometri": "Merancang tata letak pola pakaian pada kain untuk meminimalkan sisa potongan bahan; logika minimisasi limbah ini dipelajari siswa saat menulis fungsi perhitungan matematika efisiensi di kelas coding."
  },
  "Penerjemah": {
    "Dekomposisi Logika Bahasa": "Memecah kalimat kompleks menjadi unit semantik terkecil agar terjemahan akurat; keterampilan analitis ini dilatih di kelas coding melalui materi dekomposisi masalah, yaitu memecah kode besar menjadi fungsi kecil.",
    "Pemikiran Komputasional Bahasa": "Meningkatkan efisiensi kerja dengan memahami pola memori terjemahan; pemahaman pola data berulang ini didapatkan ketika siswa belajar mengelola array dan kamus data (dictionary) di kelas coding.",
    "Logika Konseptual Kalimat": "Menggunakan aturan percabangan logika untuk memilih padanan kata yang paling pas sesuai konteks; penalaran adaptif ini diasah ketika siswa mempelajari alur percabangan keputusan di kelas coding."
  },
  "Ilmuwan Data": {
    "Abstraksi Data Kompleks": "Mengubah tantangan operasional nyata menjadi parameter model matematika yang terstruktur; kemampuan abstraksi sistemik ini diajarkan sejak awal pertemuan kelas coding saat siswa mendefinisikan objek dunia nyata menjadi variabel program.",
    "Berpikir Logis Analitis": "Mengevaluasi hasil temuan data secara kritis untuk membedakan sebab-akibat dengan korelasi semu; logika analitis ini diasah secara mendalam saat siswa belajar melakukan pelacakan bug (debugging) di kelas coding.",
    "Dekomposisi Masalah Multi-Dimensi": "Memecah dataset raksasa menjadi lapisan informasi yang saling terhubung untuk dianalisis; kemampuan struktural ini dilatih ketika siswa merancang struktur data bertingkat di kelas coding."
  },
  "Ahli Gizi": {
    "Pemodeling Kebutuhan Gizi": "Menganalisis interaksi zat gizi sebagai suatu sistem input-output yang memengaruhi metabolisme; pemahaman aliran sistemik ini diperoleh ketika siswa mempelajari fungsi dengan parameter input-output di kelas coding.",
    "Dekomposisi Pola Makan": "Memecah kebutuhan gizi harian menjadi menu yang seimbang dan mudah diikuti pasien; kemampuan memecah target besar ini didapatkan ketika siswa belajar membagi proyek pemrograman besar menjadi modul kecil di kelas coding.",
    "Pemikiran Algoritmik Gizi": "Menyusun rencana diet langkah demi langkah yang dapat menyesuaikan diri dengan respon tubuh pasien; logika adaptif ini dilatih ketika siswa memprogram alur logika interaktif di kelas coding."
  },
  "Terapis Fisik": {
    "Proses Debugging Berulang": "Menguji gerakan fisik pasien untuk mengisolasi disfungsi otot dan melakukan penyesuaian terapi; alur diagnosis berulang ini sejalan dengan proses debug-run-fix yang dipelajari siswa secara aktif di kelas coding.",
    "Analisis Tren Pemulihan": "Mengidentifikasi pola peningkatan mobilitas pasien dari data latihan berkala untuk memperkirakan kesembuhan; pemahaman tren ini diasah saat siswa belajar memproses dan menyaring data array di kelas coding.",
    "Logika Umpan Balik Kinestetik": "Menyesuaikan intensitas terapi secara dinamis berdasarkan respon fisik pasien; logika adaptif berdasarkan umpan balik ini dipelajari siswa ketika menulis fungsi callback di kelas coding."
  },
  "Konsultan Bisnis": {
    "Refactoring Arsitektur Sistem": "Menganalisis alur kerja perusahaan dan merombak struktur operasional agar lebih ramping; keterampilan merestrukturisasi ini didapatkan dari latihan merestrukturisasi kode (refactoring code) di kelas coding.",
    "Dekomposisi Masalah Organisasi": "Memecah kegagalan operasional perusahaan menjadi bagian-bagian kecil untuk dianalisis secara terisolasi; kemampuan pemecahan terfokus ini dilatih ketika siswa dibiasakan memotong bug besar menjadi sub-masalah di kelas coding.",
    "Logika Skenario Bersyarat": "Menyusun skenario keputusan bisnis 'jika-maka' untuk meminimalkan risiko; penalaran antisipatif ini dilatih secara intensif saat mempelajari struktur kontrol percabangan di kelas coding."
  },
  "Pengembang Web": {
    "Abstraksi Alur Antarmuka": "Menerjemahkan kebutuhan interaksi pengguna yang kompleks menjadi alur web yang sederhana dan intuitif; keterampilan abstraksi visual ini diasah melalui proyek pembuatan rancangan desain web (mockup) di kelas coding.",
    "Logika Struktur Informasi": "Mengatur hierarki konten agar navigasi web terasa alami dan mudah ditemukan pengunjung; logika pengkategorian ini dilatih saat siswa belajar merancang hierarki dokumen HTML di kelas coding.",
    "Debugging Jalur Navigasi": "Mengisolasi dan memperbaiki kesalahan visual atau alur navigasi web secara terstruktur; kemampuan pelacakan kesalahan ini didapatkan dari latihan menggunakan konsol pengembang untuk debugging di kelas coding."
  },
  "Videografer": {
    "Sinkronisasi Multi-Threading": "Menggabungkan jalur video, audio, dan efek ke dalam satu timeline video yang harmonis; pemikiran multijalur ini dilatih ketika siswa mempelajari manajemen proses paralel (multithreading) di kelas coding.",
    "Logika Narasi Dinamis": "Mengatur transisi adegan agar selaras dengan tempo musik; kepekaan menyinkronkan event ini diperoleh ketika siswa memprogram animasi yang dipicu oleh ketukan waktu (timestamp) di kelas coding.",
    "Dekomposisi Komposisi Visual": "Memecah konsep video besar menjadi alur shot terperinci yang tersusun runut; kemampuan penataan struktural ini dilatih ketika siswa belajar menyusun bagan alur proyek aplikasi di kelas coding."
  },
  "Penyiar Radio": {
    "Manajemen Interupsi": "Mengelola interupsi mendadak seperti telepon masuk tanpa menghentikan jalannya siaran; pengelolaan prioritas ini diasah ketika siswa memprogram penanganan event interupsi (event listeners) di kelas coding.",
    "Strukturisasi Waktu Siaran": "Menyusun urutan lagu dan berita secara logis berdasarkan durasi; kemampuan manajemen waktu sekuensial ini dilatih saat siswa membuat program penjadwal tugas (task scheduler) di kelas coding.",
    "Pencegahan Deadlock Siaran": "Mengatasi jeda kosong siaran secara cepat dengan menyiapkan materi cadangan; kemampuan mitigasi hambatan ini dilatih ketika siswa mempelajari penanganan eror sistem (failover logic) di kelas coding."
  },
  "Ahli Geologi": {
    "Analisis Lapisan Terstruktur": "Membaca lapisan batuan sebagai urutan data geologi bumi; kemampuan membaca histori berurutan ini diasah ketika siswa dibiasakan menganalisis log riwayat sistem (system logs) di kelas coding.",
    "Pemikiran Sistem Bumi": "Memahami interaksi lempeng bumi sebagai suatu sistem dinamis yang saling memengaruhi; pemikiran sistemik berskala besar ini dilatih ketika siswa merancang simulasi ekosistem game di kelas coding.",
    "Dekomposisi Data Seismik": "Memecah gelombang seismik yang kompleks menjadi variabel getaran untuk dianalisis; kemampuan pemisahan data ini dipelajari siswa saat menulis fungsi parser data di kelas coding."
  },
  "Astronom": {
    "Analisis Pola Spasial": "Mengidentifikasi rasi bintang di antara jutaan titik cahaya kosmik; keterampilan pengenalan pola spasial ini dilatih ketika siswa membuat program deteksi koordinat piksel gambar di kelas coding.",
    "Dekomposisi Spektrum Cahaya": "Memecah radiasi bintang menjadi spektrum warna dasar untuk mengetahui kandungan kimia bintang; logika dekomposisi data ini didapatkan ketika siswa belajar memparsing file data kompleks di kelas coding.",
    "Logika Eliminasi Gangguan": "Menyaring gangguan atmosfer secara logis untuk mendapatkan visual angkasa yang tajam; logika penyaringan data noise ini dilatih saat siswa menulis fungsi filter data matematika di kelas coding."
  },
  "Insinyur Mesin": {
    "Logika Penggerak Mesin": "Merancang sirkuit fisik di mana setiap gerakan mesin didorong oleh instruksi mekanis sekuensial; pemikiran sekuensial presisi ini dilatih ketika siswa memprogram mikrokontroler robotika di kelas coding.",
    "Pemikiran Algoritmik Mekanis": "Merancang urutan gerakan lengan mesin agar bekerja dalam sinkronisasi yang presisi; logika koordinasi gerakan ini didapatkan saat siswa belajar memprogram animasi sprite koordinat di kelas coding.",
    "Logika Respon Otomatis": "Menyusun sistem kendali yang menyesuaikan putaran mesin secara otomatis berdasarkan sensor; logika kontrol tertutup ini dipelajari ketika siswa menulis fungsi perulangan dengan sensor input di kelas coding."
  },
  "Pengembang Game": {
    "Logika Aturan Permainan": "Menyusun aturan main game yang logis dan seimbang bagi pemain; perancangan aturan sistematis ini dilatih ketika siswa memprogram aturan permainan (game rules) menggunakan operator perbandingan di kelas coding.",
    "Dekomposisi Mekanisme Interaksi": "Memecah tantangan game yang rumit menjadi tingkat kesulitan bertahap; perancangan level ini didapatkan siswa saat belajar memecah masalah besar menjadi tugas-tugas kecil di kelas coding.",
    "Pemikiran Sistem Komponen": "Merancang relasi antarmodul karakter dan lingkungan agar game berjalan lancar; pemikiran sistemik arsitektur ini dilatih ketika siswa belajar merancang struktur kelas modular di kelas coding."
  },
  "Animator": {
    "Dekomposisi Aksi Keyframe": "Memecah gerakan tubuh yang dinamis menjadi urutan pose kunci yang halus; kemampuan membagi gerakan ini diasah ketika siswa dilatih membuat animasi sprite frame demi frame di kelas coding.",
    "Logika Transisi Pose": "Mengatur transisi ekspresi wajah karakter agar tampak alami dan tidak kaku; logika transisi yang halus ini dipelajari siswa saat memprogram transisi state (state machines) pada antarmuka pengguna di kelas coding.",
    "Pemodelan Parametrik Gerak": "Mengatur hubungan antar sendi karakter menggunakan variabel sudut dan momentum; pemikiran kinematika berbasis rumus ini dilatih saat siswa memprogram mekanika fisika game di kelas coding."
  },
  "Ilmuwan Forensik": {
    "Rekayasa Balik (Reverse Engineering)": "Menganalisis sisa bukti fisik di TKP untuk merekonstruksi kronologi kejadian secara logis; logika rekonstruksi mundur ini dilatih ketika siswa belajar teknik penelusuran kode (backtracking) di kelas coding.",
    "Analisis Pola Komparatif": "Mencocokkan sidik jari atau DNA dengan membandingkan titik kesamaan secara teliti; kepekaan pencocokan pola ini diasah ketika siswa menulis algoritma pencarian kecocokan string di kelas coding.",
    "Logika Deduktif Bukti": "Menyusun rantai kesimpulan berdasarkan bukti yang saling menguatkan; pemikiran deduktif terstruktur ini diasah saat siswa belajar menulis fungsi pengujian unit (unit tests) yang menguji kebenaran program di kelas coding."
  },
  "Spesialis Keamanan Siber": {
    "Analisis Celah Logika": "Menemukan titik terlemah dalam sistem informasi untuk mencegah penyusupan; kemampuan berpikir kritis memetakan kerentanan ini didapatkan ketika siswa dilatih menguji semua kemungkinan input error di kelas coding.",
    "Dekomposisi Alur Serangan": "Memecah taktik serangan siber menjadi langkah-langkah mitigasi pertahanan yang teratur; keterampilan analisis terstruktur ini dilatih ketika siswa dibiasakan menulis rencana arsitektur program di kelas coding.",
    "Logika Forensik Malware": "Menganalisis cara kerja file mencurigakan secara runut untuk menetralkan ancaman; pemecahan masalah secara sekuensial ini didapatkan dari rutinitas membaca pesan log error di kelas coding."
  },
  "Ahli Biologi Kelautan": {
    "Pemikiran Sistem Ekosistem": "Menganalisis hubungan rantai makanan laut sebagai jaringan variabel biotik yang dinamis; pemikiran ekosistem terpadu ini dilatih ketika siswa merancang simulasi objek-objek interaktif yang saling bergantung di kelas coding.",
    "Analisis Tren Populasi": "Memprediksi perubahan jumlah biota laut berdasarkan data suhu air; kemampuan prediksi tren ini diasah ketika siswa belajar memprogram kalkulasi proyeksi matematika di kelas coding.",
    "Dekomposisi Sinyal Suara": "Memisahkan frekuensi komunikasi paus dari kebisingan sonar kapal; logika pemisahan data ini dipelajari siswa saat menulis fungsi penyaringan (data filters) di kelas coding."
  }
};

// Apply updates to the file content
const careerRegex = /^\s*['"]([^'"]+)['"]\s*:\s*\{/gm;
let match;
const careerIndices = [];
while ((match = careerRegex.exec(content)) !== null) {
    careerIndices.push({
        name: match[1],
        index: match.index
    });
}

let newContent = content.slice(0, careerIndices[0].index);

for (let i = 0; i < careerIndices.length; i++) {
    const start = careerIndices[i].index;
    const end = (i + 1 < careerIndices.length) ? careerIndices[i + 1].index : content.length;
    let chunk = content.slice(start, end);
    const careerName = careerIndices[i].name;
    const updates = codingSkillUpdates[careerName];
    
    if (updates) {
        // Extract coding block
        const codingMatch = chunk.match(/coding\s*:\s*\[([\s\S]*?)\]/);
        if (codingMatch) {
            let codingBody = codingMatch[1];
            
            // Regex to parse each skill object
            const skillObjectRegex = /\{\s*skill\s*:\s*['"]([^'"]+)['"]\s*,\s*desc\s*:\s*['"]([\s\S]*?)['"]\s*\}/g;
            let skillMatch;
            let newCodingBody = codingBody;
            const skillObjectsToReplace = [];
            
            while ((skillMatch = skillObjectRegex.exec(codingBody)) !== null) {
                const fullMatchText = skillMatch[0];
                const skillName = skillMatch[1];
                
                if (updates[skillName]) {
                    const newDesc = updates[skillName].replace(/'/g, "\\'");
                    const replacementText = `{\n              skill: '${skillName}',\n              desc: '${newDesc}'\n          }`;
                    skillObjectsToReplace.push({
                        original: fullMatchText,
                        replacement: replacementText
                    });
                }
            }
            
            for (const item of skillObjectsToReplace) {
                newCodingBody = newCodingBody.replace(item.original, item.replacement);
            }
            
            chunk = chunk.replace(codingBody, newCodingBody);
        }
    }
    
    newContent += chunk;
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated all descriptions with coding class connections!');
