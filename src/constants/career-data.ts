export const CAREER_DATA: Record<string, { hard: string[]; soft: string[]; coding: { skill: string; desc: string; }[] }> = {
  'Dokter': {
      hard: ['Anatomi & Fisiologi', 'Diagnosis Medis', 'Farmakologi', 'Perawatan Pasien', 'Pembedahan Minor', 'Interpretasi Rontgen', 'Manajemen Rekam Medis', 'Bantuan Hidup Dasar', 'Pencegahan Infeksi', 'Triage'],
      soft: ['Etika', 'Ketahanan Tekanan', 'Navigasi Etika Medis', 'Ketahanan Psikologis Klinis', 'Triage Keputusan Cepat', 'Empati Terapeutik', 'Intuisi Profesional Mendalam'],
      coding: [
          {
              skill: 'Pemikiran Komputasional',
              desc: 'Dokter membutuhkan pemikiran komputasional untuk menganalisis gejala kompleks layaknya mendebug kode; kemampuan mendiagnosis penyakit dengan menyingkirkan variabel secara sistematis ini diajarkan secara terstruktur di kelas coding saat siswa melacak bug.'
          },
          {
              skill: 'Analisis Data Medis',
              desc: 'Membantu dokter memahami pola data kesehatan pasien dengan lebih cepat dan presisi; insting pengenalan pola data ini dilatih melalui visualisasi data dan pengolahan variabel input-output dalam proyek kelas coding.'
          },
          {
              skill: 'Algoritma Diagnostik',
              desc: 'Pemahaman logika percabangan membantu dokter menavigasi pohon keputusan diagnostik medis yang rumit; logika keputusan sistematis ini diasah saat siswa menulis struktur kondisional (if-else) di kelas coding.'
          }
      ]
  },
  'Pengusaha/CEO': {
      hard: ['Analisis Pasar', 'Pemodelan Keuangan', 'Perencanaan Strategis', 'Operasi Penskalaan', 'Manajemen Risiko', 'Hukum Bisnis Dasar', 'Pemasaran', 'Penjualan', 'Pengembangan Produk', 'Manajemen Rantai Pasok'],
      soft: ['Kepemimpinan', 'Negosiasi', 'Ketahanan', 'Visi Jangka Panjang', 'Kecerdasan Emosional', 'Komunikasi Publik', 'Negosiasi Strategis C-Level'],
      coding: [
          {
              skill: 'Optimasi Algoritma',
              desc: 'Pengusaha menggunakan pemikiran algoritmik untuk mengoptimalkan efisiensi alur bisnis; kemampuan merancang alur kerja yang efisien ini diperoleh saat siswa belajar menulis kode yang ringkas dan meminimalisir pemborosan memori.'
          },
          {
              skill: 'Otomatisasi Bisnis',
              desc: 'Pemahaman coding memungkinkan pengusaha untuk mengotomatisasi operasional berulang; logika otomasi ini didapatkan dari pembelajaran fungsi loop dan penjadwalan proses (cron jobs) di kelas coding.'
          },
          {
              skill: 'Pemodelan Sistem Bisnis',
              desc: 'Menerapkan pola arsitektur perangkat lunak untuk mendesain struktur organisasi bisnis yang tangguh; konsep modularitas sistem ini dipelajari siswa saat merancang modul game atau aplikasi yang saling terhubung.'
          }
      ]
  },
  'Arsitek': {
      hard: ['Teknik Struktural', 'Pemodelan 3D', 'Perencanaan Kota', 'Keberlanjutan', 'AutoCAD', 'Material Bangunan', 'Estimasi Biaya', 'Kepatuhan Kode Bangunan', 'Desain Interior Dasar', 'Manajemen Konstruksi'],
      soft: ['Penalaran Spasial', 'Komunikasi Visual', 'Presentasi', 'Penalaran Spasial Lanjutan', 'Integrasi Estetika-Fungsi', 'Negosiasi Regulasi Tata Kota', 'Literasi Informasi Lanjutan'],
      coding: [
          {
              skill: 'Desain Berorientasi Objek',
              desc: 'Arsitek berpikir dalam objek dan kelas untuk memahami interaksi komponen fisik bangunan; kemampuan berpikir struktural ini dilatih melalui pemrograman berorientasi objek (OOP) di kelas coding di mana siswa mengelola class dan inheritansi.'
          },
          {
              skill: 'Pemodelan Parametrik',
              desc: 'Konsep coding sangat berguna dalam arsitektur komputasional untuk memodifikasi struktur spasial; pemahaman variabel dinamis ini diperoleh ketika siswa belajar mengatur parameter logika dalam kelas coding.'
          },
          {
              skill: 'Logika Geometri Komputasional',
              desc: 'Memanfaatkan algoritma matematis untuk menghasilkan desain parametrik bangunan; logika spasial matematika ini diasah melalui latihan manipulasi koordinat dan rendering visual berbasis kode.'
          }
      ]
  },
  'Ilmuwan': {
      hard: ['Analisis Data', 'Penelitian Laboratorium', 'Penulisan Hibah', 'Pengujian Hipotesis', 'Desain Eksperimen', 'Analisis Statistik', 'Penggunaan Mikroskop', 'Kalibrasi Alat', 'Penulisan Publikasi', 'Pemodelan Matematis'],
      soft: ['Integritas Ilmiah', 'Komunikasi Tertulis', 'Skeptisisme Ilmiah', 'Integritas Metodologi', 'Sintesis Data Multidisiplin', 'Literasi Informasi Lanjutan', 'Agilitas Mental Ekstrem'],
      coding: [
          {
              skill: 'Pengenalan Pola',
              desc: 'Ilmuwan menggunakan pengenalan pola untuk mengidentifikasi tren dalam kumpulan data besar; insting mendeteksi anomali ini dilatih di kelas coding saat siswa menganalisis output program dan array data.'
          },
          {
              skill: 'Simulasi dan Pemodelan',
              desc: 'Membantu merancang simulasi digital untuk eksperimen ilmiah tanpa biaya fisik; logika pemodelan ini didapatkan siswa saat membuat simulasi fisika sederhana atau animasi berbasis logika di kelas coding.'
          },
          {
              skill: 'Pemrosesan Model Simulasi',
              desc: 'Kemampuan menyusun variabel simulasi untuk menguji hipotesis ilmiah; pemahaman interaksi variabel ini diajarkan saat siswa memprogram parameter input-output yang fleksibel dalam aplikasi.'
          }
      ]
  },
  'Pengacara': {
      hard: ['Riset Hukum', 'Penyusunan Kontrak', 'Advokasi', 'Hukum Perdata', 'Hukum Pidana', 'Negosiasi Penyelesaian', 'Litigasi', 'Kepatuhan Hukum', 'Analisis Kasus', 'Penulisan Hukum'],
      soft: ['Komunikasi Persuasif', 'Negosiasi', 'Resolusi Konflik', 'Kecerdasan Emosional', 'Interogasi Analitis', 'Artikulasi Persuasif Ruang Sidang', 'Navigasi Celah Hukum'],
      coding: [
          {
              skill: 'Logika Bersyarat',
              desc: 'Pengacara menggunakan logika bersyarat dalam menafsirkan pasal hukum tanpa celah; ketajaman argumen ini dilatih secara intensif di kelas coding ketika siswa merancang gerbang logika bersarang (nested if-else).'
          },
          {
              skill: 'Pemrosesan Dokumen Otomatis',
              desc: 'Pemahaman algoritma membantu pengacara menyaring ribuan dokumen hukum dengan cepat; kemampuan penelusuran data ini dipelajari saat siswa memprogram fungsi pencarian dan filter database di kelas coding.'
          },
          {
              skill: 'Logika Smart Contracts',
              desc: 'Menyusun klausul hukum dengan struktur kondisional ketat untuk menghindari celah; pemahaman logika deterministik ini dilatih siswa ketika membuat aturan program yang berjalan otomatis tanpa intervensi manual.'
          }
      ]
  },
  'Akuntan': {
      hard: ['Pembukuan', 'Analisis Laporan Keuangan', 'Kepatuhan Pajak', 'Audit', 'Perangkat Lunak Akuntansi', 'Rekonsiliasi Bank', 'Manajemen Anggaran', 'Peramalan Keuangan', 'Hukum Pajak', 'Akuntansi Manajerial'],
      soft: ['Integritas', 'Organisasi', 'Komunikasi Analitis', 'Etika Kerja', 'Kemampuan Numerik', 'Skeptisisme Profesional', 'Etika Fiduciary'],
      coding: [
          {
              skill: 'Sintaksis dan Akurasi',
              desc: 'Memastikan akurasi mutlak dalam setiap entri keuangan untuk mencegah selisih nilai; kedisiplinan tingkat tinggi ini terbentuk karena siswa terbiasa menulis sintaksis kode yang tidak boleh salah satu karakter pun agar program berjalan.'
          },
          {
              skill: 'Pembuatan Makro Keuangan',
              desc: 'Melatih kemampuan membuat skrip spreadsheet kompleks untuk pelaporan keuangan yang presisi; logika skrip ini dipelajari siswa saat memahami dasar-dasar sintaksis pemrograman tingkat tinggi di kelas coding.'
          },
          {
              skill: 'Otomatisasi Audit',
              desc: 'Mengembangkan skrip logika untuk mendeteksi anomali transaksi keuangan secara instan; kemampuan analisis sistemik ini didapatkan ketika siswa belajar mendeteksi kesalahan (error handling) pada program.'
          }
      ]
  },
  'Insinyur Perangkat Lunak': {
      hard: ['Pemrograman Berorientasi Objek', 'Struktur Data', 'Algoritma', 'Manajemen Basis Data', 'Kontrol Versi', 'Pengujian Perangkat Lunak', 'Pengembangan Web', 'Arsitektur Sistem', 'Keamanan Siber Dasar', 'Penyebaran Cloud'],
      soft: ['Komunikasi Teknis', 'Arsitektur Berpikir Abstrak', 'Manajemen Utang Teknis', 'Resolusi Konflik Kode', 'Kepemimpinan Adaptif', 'Manajemen Risiko Kompleks', 'Resolusi Konflik Asimetris'],
      coding: [
          {
              skill: 'Pengembangan Perangkat Lunak',
              desc: 'Aplikasi langsung dari coding untuk memecahkan masalah kompleks; kemampuan rekayasa solusi digital ini dilatih secara mendalam melalui proyek pembuatan aplikasi nyata dari nol di kelas coding.'
          },
          {
              skill: 'Arsitektur Skalabel',
              desc: 'Membangun fondasi kuat untuk merancang sistem digital yang terus berkembang; pemahaman skalabilitas sistem ini diajarkan ketika siswa belajar menulis kode modular yang mudah dirawat.'
          },
          {
              skill: 'Optimasi Kompleksitas Big-O',
              desc: 'Memastikan efisiensi algoritma pada skala beban data pengguna yang besar; analisis performa komputasi ini dilatih ketika siswa diajarkan memilih struktur data yang paling hemat memori di kelas coding.'
          }
      ]
  },
  'Desainer Grafis': {
      hard: ['Tipografi', 'Teori Warna', 'Adobe Creative Suite', 'Desain UI/UX', 'Branding', 'Ilustrasi Digital', 'Tata Letak Cetak', 'Pengeditan Foto', 'Pembuatan Prototipe', 'Grafik Vektor'],
      soft: ['Komunikasi Visual', 'Empati Pengguna', 'Terjemahan Visual Klien', 'Psikologi Persepsi Warna', 'Empati Pengguna (UX)', 'Kepemimpinan Adaptif', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Desain Berbasis Komponen',
              desc: 'Desainer menggunakan pendekatan modular untuk menjaga konsistensi visual di berbagai platform; cara berpikir sistematis ini diadopsi dari pembelajaran pembuatan komponen web (reusable components) di kelas coding.'
          },
          {
              skill: 'Desain Generatif',
              desc: 'Membuat karya visual unik berbasis aturan matematika secara otomatis; kemampuan ini diperoleh saat siswa belajar menggabungkan fungsi matematika dengan visualisasi grafis menggunakan kode.'
          },
          {
              skill: 'Logika Animasi Dinamis',
              desc: 'Menggunakan logika pengkondisian untuk mengontrol pergerakan objek desain secara responsif; pemahaman alur gerak interaktif ini dilatih melalui pemrograman animasi dan transisi state dalam kelas coding.'
          }
      ]
  },
  'Koki': {
      hard: ['Teknik Memasak', 'Keamanan Makanan', 'Perencanaan Menu', 'Manajemen Inventaris', 'Pengendalian Porsi', 'Pengetahuan Bahan', 'Teknik Pisau', 'Pemanggangan', 'Penataan Makanan', 'Manajemen Dapur'],
      soft: ['Kepemimpinan', 'Kecerdasan Emosional', 'Ketahanan Tekanan', 'Manajemen Krisis Dapur (Service)', 'Inovasi Palet Rasa', 'Presisi Sensorik', 'Pemikiran Strategis Lateral'],
      coding: [
          {
              skill: 'Eksekusi Algoritmik',
              desc: 'Koki mengikuti resep presisi secara berurutan untuk menghasilkan rasa hidangan yang konsisten; pemikiran sekuensial ini dilatih di kelas coding saat siswa dipersyaratkan menyusun baris kode dari atas ke bawah secara logis.'
          },
          {
              skill: 'Otomatisasi Resep',
              desc: 'Mendokumentasikan dan menstandarisasi takaran resep secara teratur; logika dokumentasi sistematis ini dibentuk ketika siswa belajar mendeklarasikan variabel dan konstanta di kelas coding.'
          },
          {
              skill: 'Logika Rantai Pasok Bahan',
              desc: 'Menggunakan pemikiran sistematis untuk mengoptimalkan alur inventaris dapur; kemampuan analisis rantai pasok ini diasah saat siswa memprogram alur data (data flow) antarmodul dalam pemrograman.'
          }
      ]
  },
  'Polisi': {
      hard: ['Penegakan Hukum', 'Bela Diri', 'Penanganan Senjata Api', 'Investigasi TKP', 'Pengumpulan Bukti', 'Patroli Lalu Lintas', 'Bantuan Medis Darurat', 'Pengendalian Massa', 'Interogasi', 'Pelaporan Insiden'],
      soft: ['Keberanian', 'Kepemimpinan', 'Pengambilan Keputusan Cepat', 'Manajemen Stres', 'Komunikasi Krisis', 'De-eskalasi Konflik Bersenjata', 'Analisis Profiling Kriminal'],
      coding: [
          {
              skill: 'Pohon Keputusan (Decision Trees)',
              desc: 'Polisi menilai risiko situasi krisis dengan cepat untuk mengambil tindakan hukum; pengambilan keputusan cepat berbasis skenario ini dilatih saat siswa memprogram alur percabangan keputusan di kelas coding.'
          },
          {
              skill: 'Forensik Digital Dasar',
              desc: 'Memahami cara kerja sistem dan jejak aliran data untuk melacak kejahatan siber; pemahaman infrastruktur digital ini diperoleh ketika siswa belajar mengonfigurasi jaringan dan server di kelas coding.'
          },
          {
              skill: 'Pemikiran Forensik Sistematis',
              desc: 'Menganalisis rangkaian jejak digital layaknya membaca log kesalahan sistem; kemampuan pembacaan log secara teliti ini dilatih ketika siswa melakukan pelacakan bug (debugging) di kelas coding.'
          }
      ]
  },
  'Perawat': {
      hard: ['Tanda-Tanda Vital', 'Pemberian Obat', 'Perawatan Luka', 'Penggunaan Alat Medis', 'CPR', 'Phlebotomi', 'Bantuan Hidup Lanjutan', 'Penilaian Pasien', 'Manajemen Cairan IV', 'Catatan Klinis'],
      soft: ['Komunikasi Terapeutik', 'Ketahanan Emosional', 'Komunikasi Terapeutik', 'Manajemen Kelelahan Emosional', 'Advokasi Hak Pasien', 'Agilitas Mental Ekstrem', 'Desain Sistem Pemikiran'],
      coding: [
          {
              skill: 'Looping dan Pemantauan',
              desc: 'Perawat terus memantau tanda vital pasien untuk mendeteksi anomali kesehatan; pemantauan berkala ini identik dengan fungsi background looping (while/for loop) yang dipelajari siswa untuk memantau status sistem di kelas coding.'
          },
          {
              skill: 'Sistem Triage Otomatis',
              desc: 'Mengatur prioritas penanganan pasien secara logis dalam situasi gawat darurat; pemikiran prioritas ini dilatih saat siswa belajar menerapkan algoritma pengkondisian bertingkat (if-else if-else) di kelas coding.'
          },
          {
              skill: 'Algoritma Prioritas Perawatan',
              desc: 'Mengaplikasikan logika antrean untuk menangani pasien gawat darurat secara optimal; pemahaman struktur data antrean (queue) ini dipelajari siswa secara teori dan praktik di kelas coding.'
          }
      ]
  },
  'Guru': {
      hard: ['Perencanaan Pelajaran', 'Manajemen Kelas', 'Penilaian Siswa', 'Pengembangan Kurikulum', 'Teknologi Pendidikan', 'Penyampaian Materi', 'Edukasi Khusus', 'Teknik Membaca/Menulis', 'Psikologi Pendidikan Dasar', 'Metode Pengajaran Interaktif'],
      soft: ['Kepemimpinan', 'Kecerdasan Emosional', 'Psikologi Perkembangan Anak', 'Resolusi Konflik Kelas', 'Desain Instruksional Inklusif', 'Negosiasi Interpersonal Tingkat Lanjut', 'Resolusi Konflik Asimetris'],
      coding: [
          {
              skill: 'Dekomposisi Masalah',
              desc: 'Guru memecah materi pelajaran rumit menjadi bagian-bagian kecil yang mudah dicerna; kemampuan instruksional ini dilatih ketika siswa dibiasakan memecah program besar menjadi fungsi-fungsi kecil di kelas coding.'
          },
          {
              skill: 'Personalisasi Pembelajaran',
              desc: 'Menyusun rencana pembelajaran adaptif berdasarkan kecepatan belajar setiap siswa; logika penyesuaian parameter belajar ini diperoleh saat siswa belajar mengelola kondisi variabel dinamis dalam pemrograman.'
          },
          {
              skill: 'Struktur Pembelajaran Adaptif',
              desc: 'Menyusun skema belajar bercabang berdasarkan pemahaman siswa; logika pembelajaran non-linear ini dilatih ketika siswa memprogram game petualangan bercabang (choose-your-own-adventure) di kelas coding.'
          }
      ]
  },
  'Pilot': {
      hard: ['Aerodinamika', 'Navigasi Penerbangan', 'Meteorologi', 'Pengoperasian Instrumen', 'Komunikasi Radio', 'Prosedur Darurat', 'Manajemen Bahan Bakar', 'Perencanaan Penerbangan', 'Peraturan Penerbangan', 'Sistem Pesawat Terbang'],
      soft: ['Kerja Tim Kokpit', 'Ketahanan Stres', 'Komunikasi Jelas', 'Kewaspadaan Situasional 360°', 'Manajemen Sumber Daya Kru (CRM)', 'Pengambilan Keputusan Aero-Medis', 'Pemecahan Masalah Non-linear'],
      coding: [
          {
              skill: 'Manajemen Sistem Real-time',
              desc: 'Pilot memproses input data dari instrumen kokpit dan langsung mengeksekusi kendali; pemrosesan data real-time ini didapatkan ketika siswa belajar memprogram aplikasi interaktif yang merespons event (event-driven programming).'
          },
          {
              skill: 'Logika Instrumen Navigasi',
              desc: 'Memahami algoritma autopilot untuk mengonfirmasi keakuratan arah pesawat; pemahaman logika sistem navigasi ini didapatkan siswa saat memprogram kontrol gerak objek di kelas coding.'
          },
          {
              skill: 'Debugging Sistem Penerbangan',
              desc: 'Mengisolasi masalah instrumen penerbangan secara cepat dengan menguji variabel satu per satu; kemampuan troubleshooting taktis ini diasah melalui rutinitas melacak letak error kode di kelas coding.'
          }
      ]
  },
  'Penulis': {
      hard: ['Tata Bahasa', 'Struktur Narasi', 'Pengembangan Karakter', 'Riset Topik', 'Pengeditan', 'Penulisan Kreatif', 'Pemasaran Konten', 'SEO Dasar', 'Penulisan Naskah', 'Gaya Bahasa'],
      soft: ['Imajinasi', 'Pembangunan Dunia (World-building)', 'Psikologi Karakter Mendalam', 'Retorika Naratif', 'Ketahanan Kognitif', 'Kepemimpinan Adaptif', 'Komunikasi Persuasif Subtil'],
      coding: [
          {
              skill: 'Struktur Data (Bercerita)',
              desc: 'Penulis membangun plot cerita kompleks dengan menghubungkan berbagai karakter; kemampuan relasional ini dipelajari siswa saat memahami konsep basis data relasional dan skema objek di kelas coding.'
          },
          {
              skill: 'Struktur Interaktif',
              desc: 'Menciptakan alur cerita novel interaktif yang bercabang; pemikiran narasi bercabang ini dilatih ketika siswa belajar merancang percabangan logika kondisional bersarang dalam pemrograman.'
          },
          {
              skill: 'Struktur Narasi Non-Linear',
              desc: 'Merancang plot cerita bercabang yang kompleks layaknya merancang alur game; keterampilan penataan struktur non-linear ini didapatkan ketika siswa memprogram mesin status (state machine) di kelas coding.'
          }
      ]
  },
  'Musisi': {
      hard: ['Membaca Notasi', 'Teknik Instrumen', 'Teori Musik', 'Latihan Vokal', 'Komposisi Musik', 'Produksi Audio', 'Improvisasi', 'Pengaturan Suara', 'Rekaman Studio', 'Manajemen Panggung'],
      soft: ['Kecerdasan Emosional', 'Interpretasi Emosional Melodi', 'Sinergi Ansambel', 'Improvisasi Harmonis', 'Literasi Informasi Lanjutan', 'Literasi Informasi Lanjutan', 'Literasi Informasi Lanjutan'],
      coding: [
          {
              skill: 'Sintaks dan Pola',
              desc: 'Memahami ritme dan melodi musik sebagai pola matematika yang teratur; kepekaan ritmis ini diasah ketika siswa dilatih mengenali pola perulangan sintaksis kode yang berulang secara matematis di kelas coding.'
          },
          {
              skill: 'Sintesis Suara Digital',
              desc: 'Memanipulasi sinyal audio digital untuk menghasilkan instrumen unik; keterampilan ini diperoleh ketika siswa belajar memprogram frekuensi suara menggunakan API Web Audio di kelas coding.'
          },
          {
              skill: 'Logika Struktur Gelombang',
              desc: 'Memahami relasi frekuensi dan ketukan musik sebagai representasi matematika; pemikiran analitis gelombang ini dilatih saat siswa belajar memvisualisasikan data grafik matematika di kelas coding.'
          }
      ]
  },
  'Aktor': {
      hard: ['Teknik Vokal', 'Bahasa Tubuh', 'Hafalan Naskah', 'Improvisasi', 'Analisis Karakter', 'Audisi', 'Akting Kamera', 'Akting Panggung', 'Koreografi Dasar', 'Manajemen Suara'],
      soft: ['Kecerdasan Emosional', 'Komunikasi Non-verbal', 'Internalisasi Memori Emosional', 'Proyeksi Vokal Spasial', 'Kehadiran Panggung (Stage Presence)', 'Pemecahan Masalah Non-linear', 'Intuisi Profesional Mendalam'],
      coding: [
          {
              skill: 'Simulasi Sistem',
              desc: 'Menjalankan peran karakter di kepala dengan menyesuaikan respons terhadap situasi panggung; pemodelan perilaku dinamis ini dilatih saat siswa merancang simulasi objek virtual yang merespons kondisi lingkungan di kelas coding.'
          },
          {
              skill: 'Manajemen Variabel Emosi',
              desc: 'Memecah karakter menjadi sekumpulan sifat dan respons emosi yang dapat diubah; pembagian peran ini didapatkan dari pembelajaran memprogram properti objek (object properties) di kelas coding.'
          },
          {
              skill: 'Pemetaan State Karakter',
              desc: 'Mengatur transisi emosi karakter agar mengalir natural; transisi perilaku ini dipelajari siswa saat memahami alur transisi status (state transition) pada aplikasi atau game di kelas coding.'
          }
      ]
  },
  'Fotografer': {
      hard: ['Pengaturan Kamera DSLR', 'Pencahayaan', 'Komposisi Foto', 'Pengeditan (Lightroom/Photoshop)', 'Lensa dan Optik', 'Teori Warna', 'Manajemen File RAW', 'Cetak Foto', 'Fotografi Studio', 'Fotografi Makro/Lanskap'],
      soft: ['Komunikasi Klien', 'Visi Artistik', 'Antisipasi Momen (Decisive Moment)', 'Diplomasi Subjek Foto', 'Visi Komposisi Abstrak', 'Kepemimpinan Adaptif', 'Perencanaan Skenario Probabilistik'],
      coding: [
          {
              skill: 'Pemrosesan Input-Output',
              desc: 'Fotografer menyesuaikan ISO, aperture, dan shutter speed untuk menghasilkan foto ideal; logika input-proses-output ini diajarkan secara mendasar sejak awal pertemuan pertama di kelas coding.'
          },
          {
              skill: 'Pengeditan Batch Otomatis',
              desc: 'Membuat skrip otomatis untuk mempercepat pengeditan ribuan foto sekaligus; kemampuan otomasi massal ini diperoleh ketika siswa belajar menulis skrip batching dan perulangan di kelas coding.'
          },
          {
              skill: 'Logika Pemrosesan Sekaligus (Batch)',
              desc: 'Menyusun urutan instruksi pengeditan yang konsisten untuk diterapkan pada banyak foto; logika pemrosesan berurutan ini diasah ketika siswa menulis fungsi otomatisasi terstruktur di kelas coding.'
          }
      ]
  },
  'Jurnalis': {
      hard: ['Riset Investigasi', 'Wawancara', 'Penulisan Berita', 'Cek Fakta', 'Etika Jurnalistik', 'Fotografi Dasar', 'Shorthand', 'Penggunaan Media Sosial', 'SEO', 'Penyuntingan'],
      soft: ['Integritas', 'Keberanian', 'Keingintahuan', 'Interogasi Investigatif', 'Etika Perlindungan Sumber', 'Sintesis Narasi Konflik', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Penyaringan Data',
              desc: 'Jurnalis memilah tumpukan data dokumen untuk menemukan fakta utama berita; kepekaan menyaring informasi penting ini diajarkan saat siswa belajar menulis kueri penyaringan data (filtering query) di kelas coding.'
          },
          {
              skill: 'Jurnalisme Data',
              desc: 'Melakukan scraping dan visualisasi data statistik untuk mendukung investigasi berita; kemampuan teknis ini diperoleh siswa saat mempelajari pemrograman Python dasar untuk pengolahan data di kelas coding.'
          },
          {
              skill: 'Penyaringan Data Investigatif',
              desc: 'Mencari keterkaitan informasi di antara ribuan halaman dokumen; kemampuan investigasi berbasis data ini dilatih saat siswa memprogram fungsi pencarian teks (string search) dan regex di kelas coding.'
          }
      ]
  },
  'Psikolog': {
      hard: ['Penilaian Psikologis', 'Terapi Kognitif', 'Analisis Perilaku', 'Diagnostik', 'Etika Konseling', 'Penelitian Psikologis', 'Statistik Dasar', 'Konseling Krisis', 'Psikoedukasi', 'Manajemen Rekam Kasus'],
      soft: ['Pendengaran Aktif', 'Kecerdasan Emosional', 'Membaca Mikro-Ekspresi', 'Navigasi Trauma Mendalam', 'Batas Profesional Terapeutik', 'Desain Sistem Pemikiran', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Debugging Sistem Pikiran',
              desc: 'Membantu pasien mengurai pola pikir negatif ke akar penyebabnya; kemampuan mengisolasi masalah pikiran ini diadopsi dari teknik melacak bug (debugging) secara terstruktur yang diajarkan di kelas coding.'
          },
          {
              skill: 'Analisis Pola Perilaku',
              desc: 'Menemukan pola tersembunyi dari data hasil observasi perilaku pasien; kemampuan analisis pola ini diasah ketika siswa memprogram sensor pendeteksi pola aktivitas pada proyek robotika di kelas coding.'
          },
          {
              skill: 'Pemodelan Perilaku Kognitif',
              desc: 'Memetakan respons kognitif pasien menggunakan diagram alur logika; pembuatan bagan intervensi ini dilatih saat siswa merancang diagram alur program (flowchart) di kelas coding.'
          }
      ]
  },
  'Apoteker': {
      hard: ['Farmakologi', 'Interaksi Obat', 'Peracikan Obat', 'Konseling Pasien', 'Manajemen Inventaris Obat', 'Kalkulasi Dosis', 'Kepatuhan Regulasi', 'Evaluasi Resep', 'Toksikologi Dasar', 'Sistem Informasi Kesehatan'],
      soft: ['Etika Profesional', 'Kecerdasan Emosional', 'Ketelitian Farmakokinetik', 'Edukasi Kepatuhan Pasien', 'Kewaspadaan Kontraindikasi', 'Pemikiran Strategis Lateral', 'Pemecahan Masalah Non-linear'],
      coding: [
          {
              skill: 'Pengecekan Kondisi',
              desc: 'Apoteker memeriksa kontraindikasi obat sebelum diresepkan kepada pasien; kehati-hatian bersyarat ini dilatih secara ketat di kelas coding melalui materi validasi logika input kondisional.'
          },
          {
              skill: 'Validasi Sistem Resep',
              desc: 'Mencegah kesalahan kombinasi dosis obat melalui verifikasi sistem yang ketat; pemikiran analitis pencegahan error ini didapatkan siswa saat mempelajari penanganan pengecualian (exception handling) di kelas coding.'
          },
          {
              skill: 'Logika Sistem Interaksi Obat',
              desc: 'Menganalisis sistem peringatan interaksi obat otomatis untuk menjaga keselamatan pasien; kemampuan mengelola integrasi sistem ini dilatih ketika siswa memprogram interaksi antarmodul di kelas coding.'
          }
      ]
  },
  'Dokter Gigi': {
      hard: ['Anatomi Gigi', 'Prosedur Pencabutan', 'Penambalan Gigi', 'Radiografi Gigi', 'Endodontik Dasar', 'Pencegahan Infeksi', 'Ortodontik Dasar', 'Farmakologi Gigi', 'Manajemen Nyeri', 'Kesehatan Mulut'],
      soft: ['Manajemen Praktik', 'Ketangkasan Manual', 'Ketahanan', 'Manajemen Kecemasan Dental', 'Presisi Estetika Mikro', 'Ergonomi Operasional', 'Sintesis Data Holistik'],
      coding: [
          {
              skill: 'Pemecahan Masalah Sistematis',
              desc: 'Mendiagnosis dan merawat kerusakan gigi dengan pendekatan terstruktur langkah demi langkah; kedisiplinan diagnosis ini didapatkan siswa ketika dibiasakan menulis langkah algoritma pemecahan masalah di kelas coding.'
          },
          {
              skill: 'Pemetaan 3D Presisi',
              desc: 'Memahami cara kerja visualisasi spasial 3D untuk merancang implan gigi; penalaran spasial digital ini dipelajari siswa saat memprogram grafis interaktif dan rendering 3D dasar di kelas coding.'
          },
          {
              skill: 'Pemikiran Geometri Presisi',
              desc: 'Menganalisis keselarasan struktur gigi menggunakan parameter visual dan spasial; penalaran koordinat presisi ini dilatih ketika siswa membuat kalkulasi matematika untuk pergerakan objek di kelas coding.'
          }
      ]
  },
  'Insinyur Sipil': {
      hard: ['Analisis Struktural', 'Mekanika Tanah', 'Perencanaan Transportasi', 'Manajemen Konstruksi', 'AutoCAD/Civil 3D', 'Estimasi Biaya', 'Hidrologi', 'Karakteristik Material', 'Survei Tanah', 'Manajemen Risiko'],
      soft: ['Kepemimpinan', 'Komunikasi Teknis', 'Mitigasi Bencana Struktural', 'Negosiasi Kontraktor', 'Visi Keberlanjutan Lingkungan', 'Evaluasi Etika Cepat', 'Manajemen Risiko Kompleks'],
      coding: [
          {
              skill: 'Skalabilitas dan Struktur',
              desc: 'Merancang jembatan atau gedung agar kuat menahan beban dari waktu ke waktu; pemahaman kapasitas beban ini identik dengan pembelajaran merancang arsitektur database yang kuat menampung beban kueri di kelas coding.'
          },
          {
              skill: 'Analisis Beban Komputasional',
              desc: 'Menganalisis hasil simulasi struktur fisik untuk memastikan keamanan bangunan; logika analisis batas kekuatan ini didapatkan ketika siswa belajar memprogram skenario beban stres (stress test) pada sistem di kelas coding.'
          },
          {
              skill: 'Simulasi Stres Struktural',
              desc: 'Menguji kekuatan bangunan di bawah kondisi gempa atau angin kencang secara digital; perancangan simulasi tangguh ini dipelajari siswa saat menulis logika pengujian unit (unit testing) di kelas coding.'
          }
      ]
  },
  'Pemasar Digital': {
      hard: ['SEO/SEM', 'Pemasaran Konten', 'Analisis Data', 'Manajemen Iklan Sosial', 'Email Marketing', 'Copywriting', 'Google Analytics', 'A/B Testing', 'Strategi Kampanye', 'Pembuatan Prospek'],
      soft: ['Empati Konsumen', 'Kecerdasan Emosional', 'Ketahanan', 'Empati Perjalanan Konsumen', 'Storytelling Konversi', 'Agilitas Tren Media', 'Manajemen Risiko Kompleks'],
      coding: [
          {
              skill: 'Pengujian A/B',
              desc: 'Membandingkan performa dua konten iklan untuk memilih konversi terbaik; pemikiran komparatif berbasis data ini didapatkan ketika siswa belajar memprogram fungsi percabangan keputusan dan pengujian variabel di kelas coding.'
          },
          {
              skill: 'Otomatisasi Kampanye',
              desc: 'Membangun alur pemasaran otomatis yang menyasar profil konsumen secara spesifik; logika otomasi perilaku konsumen ini diasah saat siswa memprogram aturan bersyarat (if-else triggers) di kelas coding.'
          },
          {
              skill: 'Logika Segmentasi Dinamis',
              desc: 'Menyusun aturan kondisional untuk menargetkan iklan secara real-time berdasarkan tindakan pengguna; logika dinamis ini dipelajari ketika siswa memprogram manipulasi data array di kelas coding.'
          }
      ]
  },
  'Manajer Proyek': {
      hard: ['Metodologi Agile/Scrum', 'Penjadwalan', 'Manajemen Anggaran', 'Alokasi Sumber Daya', 'Manajemen Risiko', 'Perangkat Lunak Proyek (Jira/Asana)', 'Pelaporan Status', 'Manajemen Lingkup', 'Kontrol Kualitas', 'Analisis Pemangku Kepentingan'],
      soft: ['Kepemimpinan', 'Negosiasi', 'Resolusi Konflik', 'Orkestrasi Lintas Divisi', 'Mitigasi Risiko Proaktif', 'Manajemen Ekspektasi Stakeholder', 'Ketahanan Kognitif'],
      coding: [
          {
              skill: 'Orkestrasi Alur Kerja',
              desc: 'Mengoordinasikan berbagai divisi agar proyek berjalan paralel tanpa benturan jadwal; pemikiran asinkron ini dipelajari siswa di kelas coding saat mempelajari konsep multitasking pemrograman asinkron (async/await).'
          },
          {
              skill: 'Alokasi Sumber Daya Berbasis Data',
              desc: 'Mengoptimalkan pembagian tim secara efisien menggunakan parameter data riil; pemikiran optimasi sumber daya ini dilatih ketika siswa membuat algoritma penjadwalan sederhana di kelas coding.'
          },
          {
              skill: 'Orkestrasi Proses Asinkron',
              desc: 'Mengatur agar berbagai tim dapat bekerja mandiri tanpa harus saling menunggu untuk menghindari antrean; logika non-blocking ini didapatkan saat siswa belajar pemrograman asinkron di kelas coding.'
          }
      ]
  },
  'Analis Data': {
      hard: ['SQL', 'Excel Lanjutan', 'Python/R', 'Visualisasi Data (Tableau/PowerBI)', 'Pembersihan Data', 'Pemodelan Statistik', 'Penggalian Data', 'Analisis Regresi', 'Pengujian Hipotesis', 'Pelaporan Bisnis'],
      soft: ['Komunikasi Presentasi', 'Penerjemahan Insight Bisnis', 'Skeptisisme Data', 'Storytelling Visual', 'Pemikiran Strategis Lateral', 'Kepemimpinan Adaptif', 'Ketahanan Kognitif'],
      coding: [
          {
              skill: 'Ekstraksi Logika Dasar',
              desc: 'Mengekstrak informasi bisnis yang tersembunyi dari database; logika kueri data ini dilatih siswa ketika mempelajari sintaks pencarian data dan manipulasi string di kelas coding.'
          },
          {
              skill: 'Automasi Pembersihan Data',
              desc: 'Menggunakan skrip untuk membuang baris data yang cacat atau kosong secara otomatis; logika otomasi pembersihan data ini dipelajari siswa saat menulis fungsi validasi data (data validation) di kelas coding.'
          },
          {
              skill: 'Ekstraksi Anomali Logis',
              desc: 'Menulis fungsi logika kustom untuk mendeteksi outlier dalam database; kemampuan mendeteksi anomali data ini diasah melalui penulisan aturan filter kompleks di kelas coding.'
          }
      ]
  },
  'Petani': {
      hard: ['Ilmu Tanah', 'Manajemen Tanaman', 'Pengendalian Hama', 'Pengoperasian Mesin Pertanian', 'Irigasi', 'Meteorologi Dasar', 'Manajemen Keuangan Pertanian', 'Rotasi Tanaman', 'Teknologi Pertanian', 'Perawatan Hewan (Jika Peternak)'],
      soft: ['Kewirausahaan', 'Ketahanan Fisik dan Mental', 'Intuisi Iklim Mikro', 'Ketahanan Gagal Panen', 'Etika Kesejahteraan Pertanian', 'Intuisi Profesional Mendalam', 'Literasi Informasi Lanjutan'],
      coding: [
          {
              skill: 'Loop Input dan Pemantauan',
              desc: 'Petani memantau kondisi tanah dan air secara berkala untuk menjaga pertumbuhan tanaman; pemikiran siklus monitoring ini dilatih ketika siswa memprogram loop kondisional (while-loops) yang terus berjalan memantau sensor di kelas coding.'
          },
          {
              skill: 'Pertanian Cerdas (Smart Farming)',
              desc: 'Mengoperasikan sistem penyiraman otomatis yang terhubung ke internet (IoT); pemahaman otomasi lingkungan ini diperoleh siswa saat belajar memprogram perangkat mikrokontroler di kelas coding.'
          },
          {
              skill: 'Logika Otomatisasi Lingkungan',
              desc: 'Mengatur parameter penyiraman otomatis berdasarkan kondisi kelembapan tanah; logika respon lingkungan ini diasah ketika siswa memprogram sensor masukan (input sensor) di kelas coding.'
          }
      ]
  },
  'Mekanik': {
      hard: ['Sistem Mesin', 'Sistem Kelistrikan Otomotif', 'Diagnostik Kendaraan', 'Penggantian Komponen', 'Pengelasan Dasar', 'Sistem Rem', 'Sistem Suspensi', 'Mekanika Fluida', 'Penggunaan Alat Berat', 'Pemeliharaan Preventif'],
      soft: ['Layanan Pelanggan', 'Diagnostik Suara/Getaran', 'Keselamatan Kerja Alat Berat', 'Ketelitian Torsi Mesin', 'Negosiasi Interpersonal Tingkat Lanjut', 'Ketahanan Kognitif', 'Literasi Informasi Lanjutan'],
      coding: [
          {
              skill: 'Debugging Hardware',
              desc: 'Mendiagnosis kerusakan komponen mobil secara terarah dengan mengisolasi bagian yang rusak; teknik diagnosis ini merupakan bentuk fisik dari metode pelacakan kesalahan (debugging) yang dipelajari siswa di kelas coding.'
          },
          {
              skill: 'Diagnostik ECU Lanjutan',
              desc: 'Membaca kode kesalahan elektronik dari unit kontrol pusat mobil; pemahaman logika diagnostik ini diperoleh siswa saat belajar membaca kode error (error codes) dan log keluaran di kelas coding.'
          },
          {
              skill: 'Debugging Logika ECU',
              desc: 'Melacak kegagalan elektronik pada mobil dengan membaca kode status kesalahan secara runut; kemampuan analisis runut ini didapatkan dari kebiasaan menelusuri pesan kesalahan compiler di kelas coding.'
          }
      ]
  },
  'Tukang Listrik': {
      hard: ['Sistem Pengkabelan', 'Membaca Cetak Biru', 'Sistem Tenaga Listrik', 'Kepatuhan Keselamatan Listrik', 'Troubleshooting Sirkuit', 'Pemasangan Panel Listrik', 'Penggunaan Multimeter', 'Sistem Pencahayaan', 'Perawatan Preventif', 'Hukum Kelistrikan'],
      soft: ['Kesadaran Spasial Bahaya', 'Interpretasi Skema Kompleks', 'Presisi Instalasi Tegangan Tinggi', 'Perencanaan Skenario Probabilistik', 'Pemikiran Strategis Lateral', 'Pemecahan Masalah Non-linear', 'Ketahanan Kognitif'],
      coding: [
          {
              skill: 'Arsitektur Sirkuit Logika',
              desc: 'Merancang jalur kelistrikan gedung agar mengalir aman ke setiap sakelar; konsep sirkuit ini adalah bentuk fisik dari gerbang logika AND/OR/NOT yang dipelajari siswa di kelas coding.'
          },
          {
              skill: 'Otomatisasi Rumah Pintar',
              desc: 'Mengonfigurasi sensor gerak dan lampu pintar agar menyala otomatis; pemahaman logika perangkat pintar ini dilatih ketika siswa belajar pemrograman IoT dasar di kelas coding.'
          },
          {
              skill: 'Logika Pemutus Arus Bersyarat',
              desc: 'Merancang skema instalasi kelistrikan yang aman menggunakan gerbang logika fisik; logika pengamanan sistem ini dipelajari siswa saat menulis percabangan bersyarat (conditional gates) di kelas coding.'
          }
      ]
  },
  'Pemandu Wisata': {
      hard: ['Pengetahuan Sejarah/Budaya', 'Manajemen Kelompok', 'Pertolongan Pertama Dasar', 'Kemampuan Bahasa Asing', 'Navigasi Rute', 'Storytelling', 'Perencanaan Jadwal', 'Layanan Pelanggan', 'Penanganan Darurat', 'Pengetahuan Geografi'],
      soft: ['Kecerdasan Emosional', 'Komunikasi Antarbudaya', 'Storytelling Historis Imersif', 'Manajemen Dinamika Kelompok', 'Kecerdasan Budaya (CQ)', 'Pemikiran Strategis Lateral', 'Pemecahan Masalah Non-linear'],
      coding: [
          {
              skill: 'Pengendalian Alur Eksekusi',
              desc: 'Mengatur jadwal tur wisata agar berjalan lancar sesuai rencana perjalanan; logika pengaturan waktu ini sejalan dengan pemrograman kontrol alur (control flow execution) yang diajarkan di kelas coding.'
          },
          {
              skill: 'Optimasi Rute',
              desc: 'Menentukan jalur perjalanan terpendek untuk menghindari kemacetan; logika pencarian rute ini didapatkan siswa saat mempelajari dasar-dasar algoritma pencarian jalur terdekat (pathfinding) di kelas coding.'
          },
          {
              skill: 'Logika Rute Dinamis',
              desc: 'Mengubah jadwal tur secara real-time berdasarkan kendala cuaca atau keramaian; kemampuan adaptasi rute bersyarat ini dipelajari siswa saat menulis skenario alternatif (fallback logic) di kelas coding.'
          }
      ]
  },
  'Desainer Interior': {
      hard: ['Perencanaan Ruang', 'Teori Warna', 'Pemilihan Furnitur', 'AutoCAD/SketchUp', 'Pencahayaan', 'Bahan Tektil', 'Estimasi Biaya', 'Manajemen Proyek', 'Kode Bangunan Dasar', 'Sejarah Desain'],
      soft: ['Komunikasi Klien', 'Visi Artistik', 'Negosiasi', 'Harmonisasi Psikologi Ruang', 'Negosiasi Vendor Material', 'Visi Pencahayaan Ambien', 'Literasi Informasi Lanjutan'],
      coding: [
          {
              skill: 'Optimasi UI Lingkungan',
              desc: 'Merancang tata letak ruangan agar fungsional bagi penghuninya; konsep penataan antarmuka ruang fisik ini mengadopsi prinsip desain antarmuka pengguna (UI/UX) yang diajarkan di kelas coding.'
          },
          {
              skill: 'Render Ruang VR',
              desc: 'Mengooperasikan simulasi realitas virtual untuk menyajikan rancangan ruang kepada klien; pemahaman navigasi 3D ini dilatih saat siswa belajar membuat game petualangan 3D di kelas coding.'
          },
          {
              skill: 'Pemodelan Spasial Parametrik',
              desc: 'Mengatur posisi furnitur berdasarkan variabel dimensi ruangan; logika dinamis ini dipelajari ketika siswa memprogram elemen visual yang menyesuaikan ukuran layar secara responsif di kelas coding.'
          }
      ]
  },
  'Peneliti': {
      hard: ['Metodologi Penelitian', 'Tinjauan Pustaka', 'Pengumpulan Data', 'Analisis Kualitatif/Kuantitatif', 'Penggunaan Perangkat Lunak Statistik', 'Penulisan Laporan', 'Pengajuan Etik Penelitian', 'Survei dan Kuesioner', 'Desain Eksperimen', 'Presentasi Akademik'],
      soft: ['Komunikasi Tertulis', 'Ketahanan Penolakan Publikasi', 'Navigasi Bias Kognitif', 'Etika Eksperimen Subjek Manusia', 'Evaluasi Etika Cepat', 'Perencanaan Skenario Probabilistik', 'Manajemen Risiko Kompleks'],
      coding: [
          {
              skill: 'Iterasi Algoritma',
              desc: 'Melakukan uji coba penelitian secara berulang dengan menyesuaikan parameter hingga valid; siklus eksperimen ini melatih ketekunan iterasi layaknya proses testing dan tuning program yang dipelajari siswa di kelas coding.'
          },
          {
              skill: 'Otomatisasi Pengumpulan Data',
              desc: 'Mengumpulkan ribuan kuesioner digital secara cepat; keterampilan pengumpulan data otomatis ini diajarkan melalui teknik kueri database dasar dan skrip otomasi di kelas coding.'
          },
          {
              skill: 'Pencarian Literatur Terstruktur',
              desc: 'Menggunakan logika kata kunci bersyarat untuk menyaring artikel ilmiah; logika penyaringan terstruktur ini diperoleh ketika siswa mempelajari operator logika (AND, OR, NOT) di kelas coding.'
          }
      ]
  },
  'Kurator Museum': {
      hard: ['Sejarah Seni/Artefak', 'Manajemen Koleksi', 'Desain Pameran', 'Konservasi Artefak', 'Riset Sejarah', 'Penulisan Katalog', 'Penggalangan Dana', 'Manajemen Arsip', 'Hukum Kekayaan Intelektual Dasar', 'Edukasi Publik'],
      soft: ['Gairah pada Pengetahuan', 'Kepemimpinan', 'Organisasi', 'Preservasi Narasi Sejarah', 'Deteksi Pemalsuan Artefak', 'Desain Pengalaman Pengunjung', 'Agilitas Mental Ekstrem'],
      coding: [
          {
              skill: 'Pengindeksan Data Terstruktur',
              desc: 'Mengarsipkan artefak sejarah secara teratur berdasarkan kategori waktu dan wilayah; pemikiran pengarsipan ini diajarkan di kelas coding saat siswa belajar mengorganisasi data dalam struktur database relasional.'
          },
          {
              skill: 'Arsip Digital Interaktif',
              desc: 'Mengatur navigasi pameran museum digital agar mudah diakses pengunjung; desain struktur arsip digital ini dilatih saat siswa membuat direktori web interaktif di kelas coding.'
          },
          {
              skill: 'Pengindeksan Relasional Arsip',
              desc: 'Membangun skema database kustom untuk menghubungkan artefak sejarah; perancangan hubungan data ini dipelajari siswa saat mempelajari relasi database (one-to-many/many-to-many) di kelas coding.'
          }
      ]
  },
  'Pramugari': {
      hard: ['Prosedur Keselamatan Penerbangan', 'Layanan Pelanggan Penerbangan', 'Pertolongan Pertama/CPR', 'Prosedur Evakuasi Darurat', 'Penanganan Barang Berbahaya', 'Operasi Kabin', 'Kemampuan Bahasa Asing', 'Manajemen Stok Kabin', 'Regulasi Penerbangan Dasar', 'Keamanan Penerbangan'],
      soft: ['Kecerdasan Emosional', 'Ketahanan Stres', 'Komunikasi Krisis', 'Manajemen Panik Massa', 'Diplomasi Penumpang Sulit', 'Sensitivitas Medis Ketinggian', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Protokol Penanganan Error',
              desc: 'Menjalankan tindakan penyelamatan darurat kabin pesawat dengan tenang dan terstruktur; kesiapan penanganan kendala ini diasah ketika siswa belajar mendesain blok proteksi kesalahan (try-catch block) di kelas coding.'
          },
          {
              skill: 'Sistem Reservasi Real-time',
              desc: 'Memahami alur data penerbangan asinkron saat melayani boarding penumpang; pemahaman sistem sinkronisasi data ini diperoleh ketika siswa memprogram web dinamis di kelas coding.'
          },
          {
              skill: 'Protokol Darurat Algoritmik',
              desc: 'Mengeksekusi prosedur keselamatan darurat kabin secara berurutan; kedisiplinan eksekusi langkah demi langkah ini dilatih melalui pembiasaan menulis algoritma instruksional di kelas coding.'
          }
      ]
  },
  'Pelatih Olahraga': {
      hard: ['Taktik Permainan', 'Fisiologi Olahraga', 'Manajemen Cedera', 'Pengembangan Keterampilan Atlet', 'Analisis Video Pertandingan', 'Perencanaan Latihan', 'Nutrisi Olahraga Dasar', 'Peraturan Olahraga', 'Statistik Pemain', 'Manajemen Waktu Istirahat'],
      soft: ['Motivasi', 'Kepemimpinan', 'Komunikasi Tegas', 'Kecerdasan Emosional', 'Psikologi Puncak Performa', 'Resolusi Ego Bintang', 'Visi Taktikal Antisipatif'],
      coding: [
          {
              skill: 'Optimasi Kinerja (Performance Tuning)',
              desc: 'Pelatih menyesuaikan posisi pemain untuk memaksimalkan kekuatan tim; analisis penyesuaian performa ini dipelajari ketika siswa dilatih mengoptimasi fungsi program agar berjalan lebih cepat di kelas coding.'
          },
          {
              skill: 'Analisis Performa Biometrik',
              desc: 'Membaca grafik data kebugaran atlet untuk menyusun menu latihan ideal; pemahaman analisis visual ini dilatih saat siswa belajar membuat program visualisasi grafik data di kelas coding.'
          },
          {
              skill: 'Pemodelan Strategi Berbasis Data',
              desc: 'Menyusun formasi pemain secara objektif berdasarkan statistik performa historis; logika pengambilan keputusan berbasis data ini dilatih saat siswa memprogram sistem analisis data di kelas coding.'
          }
      ]
  },
  'Atlet Profesional': {
      hard: ['Teknik Olahraga Spesifik', 'Kebugaran Fisik Tingkat Lanjut', 'Pemahaman Taktikal', 'Pemulihan Cedera', 'Pola Makan Optimal', 'Latihan Beban/Kekuatan', 'Kelincahan dan Kecepatan', 'Pencegahan Cedera', 'Analisis Permainan Lawan', 'Regulasi Olahraga'],
      soft: ['Ketahanan', 'Kecerdasan Emosional', 'Manajemen Stres', 'Mentalitas Bangkit dari Cedera', 'Kesadaran Kinestetik', 'Fokus Zona Kompetitif (Flow State)', 'Kepemimpinan Adaptif'],
      coding: [
          {
              skill: 'Eksekusi Presisi Tinggi',
              desc: 'Melatih refleks gerakan tubuh agar bekerja dengan konsistensi yang sangat tinggi; kedisiplinan eksekusi presisi ini diasah di kelas coding ketika siswa dituntut merancang fungsi program bebas dari error logika.'
          },
          {
              skill: 'Optimasi Pola Latihan',
              desc: 'Menganalisis hasil performa fisik harian untuk mencari porsi latihan paling efisien; pemikiran analisis optimal ini didapatkan ketika siswa belajar membandingkan efisiensi runtime dua program berbeda di kelas coding.'
          },
          {
              skill: 'Optimasi Variabel Biomekanik',
              desc: 'Menganalisis data tangkapan gerak tubuh untuk menyempurnakan teknik pukulan atau lompatan; pemahaman variabel koordinat ini diperoleh siswa saat belajar menggerakkan sprite game di kelas coding.'
          }
      ]
  },
  'Pustakawan': {
      hard: ['Sistem Klasifikasi Dewey/LCC', 'Manajemen Basis Data Perpustakaan', 'Riset Literatur', 'Manajemen Arsip', 'Sistem Pengembalian Informasi', 'Katalogisasi', 'Pengadaan Buku', 'Literasi Informasi', 'Digitalisasi Dokumen', 'Hukum Hak Cipta'],
      soft: ['Layanan Pelanggan', 'Organisasi Tinggi', 'Navigasi Literasi Informasi', 'Kurasi Pengetahuan Komunitas', 'Etika Kebebasan Informasi', 'Kepemimpinan Adaptif', 'Negosiasi Interpersonal Tingkat Lanjut'],
      coding: [
          {
              skill: 'Pengambilan Informasi (Information Retrieval)',
              desc: 'Membantu pengunjung menemukan buku melalui query mesin pencari perpustakaan; logika kueri pencarian ini dilatih siswa ketika mempelajari cara kerja kueri database (search query) di kelas coding.'
          },
          {
              skill: 'Manajemen Sistem Pencarian',
              desc: 'Mengonfigurasi basis data perpustakaan agar buku dikelompokkan secara logis; kemampuan organisasi database ini diajarkan melalui materi struktur data array dan objek di kelas coding.'
          },
          {
              skill: 'Desain Skema Klasifikasi',
              desc: 'Menyusun pohon kategori informasi agar koleksi buku dapat dicari dengan jalur pencarian tercepat; penyusunan hierarki ini diasah ketika siswa mempelajari struktur data pohon (tree) di kelas coding.'
          }
      ]
  },
  'Pekerja Sosial': {
      hard: ['Penilaian Kasus', 'Konseling Intervensi', 'Hukum Kesejahteraan Sosial', 'Sistem Rujukan Layanan', 'Manajemen Kasus', 'Advokasi Kebijakan', 'Intervensi Krisis', 'Pencatatan Profesional', 'Wawancara Klinis', 'Bantuan Sosial Dasar'],
      soft: ['Empati Ekstrem', 'Batas Profesional', 'Kecerdasan Emosional', 'Komunikasi Persuasif', 'Manajemen Stres', 'Empati Kasus Ekstrem', 'Navigasi Birokrasi Kesejahteraan'],
      coding: [
          {
              skill: 'Integrasi API Sistem Sosial',
              desc: 'Menghubungkan warga kurang mampu ke berbagai program bantuan sosial yang berbeda; logika integrasi layanan ini dipelajari siswa di kelas coding melalui materi penggabungan beberapa API pihak ketiga.'
          },
          {
              skill: 'Manajemen Basis Data Kasus',
              desc: 'Mengorganisasi ribuan rekam kasus warga agar tersimpan dengan aman dan teratur; keterampilan pengelolaan database ini diperoleh ketika siswa belajar merancang sistem basis data relasional di kelas coding.'
          },
          {
              skill: 'Sistem Deteksi Risiko Sosial',
              desc: 'Mengidentifikasi tanda-tanda awal risiko sosial keluarga berdasarkan indikator ekonomi; kemampuan menyusun deteksi dini ini dilatih ketika siswa memprogram validasi logika bersyarat di kelas coding.'
          }
      ]
  },
  'Desainer Mode': {
      hard: ['Pembuatan Pola', 'Menjahit', 'Sketsa Mode', 'Pemilihan Tekstil', 'Tren Mode', 'Pemotongan Bahan', 'Draping', 'Penggunaan Mesin Jahit Industri', 'Desain Berbantuan Komputer (CAD)', 'Sejarah Mode'],
      soft: ['Visi Estetika', 'Prediksi Zeitgeist Budaya', 'Pemahaman Taktil Kain', 'Inovasi Siluet Struktural', 'Negosiasi Interpersonal Tingkat Lanjut', 'Sintesis Data Holistik', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Desain Berbasis Pola (Design Patterns)',
              desc: 'Membuat gaun indah dengan mengombinasikan pola pakaian standar yang sudah ada; kemampuan menggunakan kembali cetak biru ini didapatkan ketika siswa mempelajari arsitektur kode reusable (Design Patterns) di kelas coding.'
          },
          {
              skill: 'Pemotongan Laser Berbasis Pola',
              desc: 'Memprogram mesin pemotong laser agar memotong kain dengan presisi tinggi; pemahaman instruksi mesin otomatis ini diperoleh saat siswa belajar memprogram gerakan koordinat di kelas coding.'
          },
          {
              skill: 'Optimasi Pola Geometri',
              desc: 'Merancang tata letak pola pakaian pada kain untuk meminimalkan sisa potongan bahan; logika minimisasi limbah ini dipelajari siswa saat menulis fungsi perhitungan matematika efisiensi di kelas coding.'
          }
      ]
  },
  'Penerjemah': {
      hard: ['Penguasaan Bahasa Sumber', 'Penguasaan Bahasa Sasaran', 'Tata Bahasa Lanjutan', 'Kosakata Industri Khusus', 'Alat Terjemahan Berbantuan Komputer (CAT)', 'Pelokalan', 'Pengeditan', 'Transkripsi', 'Sensitivitas Budaya', 'Penyuntingan'],
      soft: ['Komunikasi Antarbudaya', 'Preservasi Nuansa Budaya', 'Kelincahan Idiom', 'Integritas Tone Penulis Asli', 'Perencanaan Skenario Probabilistik', 'Manajemen Risiko Kompleks', 'Negosiasi Interpersonal Tingkat Lanjut'],
      coding: [
          {
              skill: 'Dekomposisi Logika Bahasa',
              desc: 'Memecah kalimat kompleks menjadi unit semantik terkecil agar terjemahan akurat; keterampilan analitis ini dilatih di kelas coding melalui materi dekomposisi masalah, yaitu memecah kode besar menjadi fungsi kecil.'
          },
          {
              skill: 'Pemikiran Komputasional Bahasa',
              desc: 'Meningkatkan efisiensi kerja dengan memahami pola memori terjemahan; pemahaman pola data berulang ini didapatkan ketika siswa belajar mengelola array dan kamus data (dictionary) di kelas coding.'
          },
          {
              skill: 'Logika Konseptual Kalimat',
              desc: 'Menggunakan aturan percabangan logika untuk memilih padanan kata yang paling pas sesuai konteks; penalaran adaptif ini diasah ketika siswa mempelajari alur percabangan keputusan di kelas coding.'
          }
      ]
  },
  'Ilmuwan Data': {
      hard: ['Machine Learning', 'Python/R/SQL', 'Analisis Statistik', 'Pembersihan Data', 'Deep Learning', 'Visualisasi Data', 'Big Data (Hadoop/Spark)', 'Matematika Terapan', 'Pemrosesan Bahasa Alami', 'Eksplorasi Data'],
      soft: ['Komunikasi Bisnis', 'Skeptisisme Korelasi vs Kausasi', 'Penerjemahan Insight Eksekutif', 'Etika Privasi Big Data', 'Komunikasi Persuasif Subtil', 'Resolusi Konflik Asimetris', 'Evaluasi Etika Cepat'],
      coding: [
          {
              skill: 'Abstraksi Data Kompleks',
              desc: 'Mengubah tantangan operasional nyata menjadi parameter model matematika yang terstruktur; kemampuan abstraksi sistemik ini diajarkan sejak awal pertemuan kelas coding saat siswa mendefinisikan objek dunia nyata menjadi variabel program.'
          },
          {
              skill: 'Berpikir Logis Analitis',
              desc: 'Mengevaluasi hasil temuan data secara kritis untuk membedakan sebab-akibat dengan korelasi semu; logika analitis ini diasah secara mendalam saat siswa belajar melakukan pelacakan bug (debugging) di kelas coding.'
          },
          {
              skill: 'Dekomposisi Masalah Multi-Dimensi',
              desc: 'Memecah dataset raksasa menjadi lapisan informasi yang saling terhubung untuk dianalisis; kemampuan struktural ini dilatih ketika siswa merancang struktur data bertingkat di kelas coding.'
          }
      ]
  },
  'Ahli Gizi': {
      hard: ['Ilmu Nutrisi', 'Penilaian Diet', 'Perencanaan Menu Terapi', 'Biokimia Makanan', 'Konseling Nutrisi', 'Manajemen Berat Badan', 'Nutrisi Olahraga', 'Regulasi Makanan', 'Pendidikan Kesehatan', 'Analisis Komposisi Tubuh'],
      soft: ['Motivasi Klien', 'Kecerdasan Emosional', 'Psikologi Gangguan Makan', 'Modifikasi Perilaku Diet', 'Personalisasi Empatik Terukur', 'Intuisi Profesional Mendalam', 'Ketahanan Kognitif'],
      coding: [
          {
              skill: 'Pemodeling Kebutuhan Gizi',
              desc: 'Menganalisis interaksi zat gizi sebagai suatu sistem input-output yang memengaruhi metabolisme; pemahaman aliran sistemik ini diperoleh ketika siswa mempelajari fungsi dengan parameter input-output di kelas coding.'
          },
          {
              skill: 'Dekomposisi Pola Makan',
              desc: 'Memecah kebutuhan gizi harian menjadi menu yang seimbang dan mudah diikuti pasien; kemampuan memecah target besar ini didapatkan ketika siswa belajar membagi proyek pemrograman besar menjadi modul kecil di kelas coding.'
          },
          {
              skill: 'Pemikiran Algoritmik Gizi',
              desc: 'Menyusun rencana diet langkah demi langkah yang dapat menyesuaikan diri dengan respon tubuh pasien; logika adaptif ini dilatih ketika siswa memprogram alur logika interaktif di kelas coding.'
          }
      ]
  },
  'Terapis Fisik': {
      hard: ['Anatomi Fungsional', 'Kinesiologi', 'Teknik Terapi Manual', 'Peresepan Latihan', 'Penilaian Mobilitas', 'Rehabilitasi Neurologis', 'Modalitas Terapeutik (Ultrasound/TENS)', 'Pencegahan Cedera', 'Dokumentasi Klinis', 'Biomekanika'],
      soft: ['Komunikasi Terapeutik', 'Motivasi Pasien', 'Kecerdasan Emosional', 'Motivasi Rehabilitasi Nyeri', 'Penilaian Biomekanik Visual', 'Empati Sentuhan Terapeutik', 'Negosiasi Interpersonal Tingkat Lanjut'],
      coding: [
          {
              skill: 'Proses Debugging Berulang',
              desc: 'Menguji gerakan fisik pasien untuk mengisolasi disfungsi otot dan melakukan penyesuaian terapi; alur diagnosis berulang ini sejalan dengan proses debug-run-fix yang dipelajari siswa secara aktif di kelas coding.'
          },
          {
              skill: 'Analisis Tren Pemulihan',
              desc: 'Mengidentifikasi pola peningkatan mobilitas pasien dari data latihan berkala untuk memperkirakan kesembuhan; pemahaman tren ini diasah saat siswa belajar memproses dan menyaring data array di kelas coding.'
          },
          {
              skill: 'Logika Umpan Balik Kinestetik',
              desc: 'Menyesuaikan intensitas terapi secara dinamis berdasarkan respon fisik pasien; logika adaptif berdasarkan umpan balik ini dipelajari siswa ketika menulis fungsi callback di kelas coding.'
          }
      ]
  },
  'Konsultan Bisnis': {
      hard: ['Analisis Keuangan', 'Strategi Perusahaan', 'Peningkatan Proses', 'Manajemen Perubahan', 'Pemodelan Bisnis', 'Analisis Kompetitif', 'Benchmarking', 'Restrukturisasi Organisasi', 'Manajemen Risiko', 'Kecerdasan Bisnis'],
      soft: ['Komunikasi Eksekutif', 'Presentasi', 'Negosiasi', 'Ketahanan', 'Diagnostik Kegagalan Organisasi', 'Navigasi Politik Perusahaan', 'Fasilitasi Manajemen Perubahan'],
      coding: [
          {
              skill: 'Refactoring Arsitektur Sistem',
              desc: 'Menganalisis alur kerja perusahaan dan merombak struktur operasional agar lebih ramping; keterampilan merestrukturisasi ini didapatkan dari latihan merestrukturisasi kode (refactoring code) di kelas coding.'
          },
          {
              skill: 'Dekomposisi Masalah Organisasi',
              desc: 'Memecah kegagalan operasional perusahaan menjadi bagian-bagian kecil untuk dianalisis secara terisolasi; kemampuan pemecahan terfokus ini dilatih ketika siswa dibiasakan memotong bug besar menjadi sub-masalah di kelas coding.'
          },
          {
              skill: 'Logika Skenario Bersyarat',
              desc: 'Menyusun skenario keputusan bisnis \'jika-maka\' untuk meminimalkan risiko; penalaran antisipatif ini dilatih secara intensif saat mempelajari struktur kontrol percabangan di kelas coding.'
          }
      ]
  },
  'Pengembang Web': {
      hard: ['HTML/CSS/JS', 'Framework Frontend (React/Vue)', 'Framework Backend (Node.js/Python)', 'REST APIs', 'Database (SQL/NoSQL)', 'Git/GitHub', 'Desain Responsif', 'Keamanan Web Dasar', 'Pengujian Unit', 'Manajemen Server Dasar'],
      soft: ['Komunikasi Teknis', 'Aksesibilitas Empatik (a11y)', 'Resolusi Ambiguitas Syarat', 'Estetika Interaksi Mikro', 'Pemecahan Masalah Non-linear', 'Negosiasi Interpersonal Tingkat Lanjut', 'Intuisi Profesional Mendalam'],
      coding: [
          {
              skill: 'Abstraksi Alur Antarmuka',
              desc: 'Menerjemahkan kebutuhan interaksi pengguna yang kompleks menjadi alur web yang sederhana dan intuitif; keterampilan abstraksi visual ini diasah melalui proyek pembuatan rancangan desain web (mockup) di kelas coding.'
          },
          {
              skill: 'Logika Struktur Informasi',
              desc: 'Mengatur hierarki konten agar navigasi web terasa alami dan mudah ditemukan pengunjung; logika pengkategorian ini dilatih saat siswa belajar merancang hierarki dokumen HTML di kelas coding.'
          },
          {
              skill: 'Debugging Jalur Navigasi',
              desc: 'Mengisolasi dan memperbaiki kesalahan visual atau alur navigasi web secara terstruktur; kemampuan pelacakan kesalahan ini didapatkan dari latihan menggunakan konsol pengembang untuk debugging di kelas coding.'
          }
      ]
  },
  'Videografer': {
      hard: ['Pengoperasian Kamera Video', 'Pencahayaan Sinematik', 'Perekaman Audio', 'Pengeditan Video (Premiere/Final Cut)', 'Color Grading', 'Penulisan Naskah Dasar', 'Storyboarding', 'Pengoperasian Drone', 'Desain Grafis Gerak (Motion Graphics)', 'Kompresi Video'],
      soft: ['Manajemen Proyek', 'Visi Kreatif', 'Komposisi Emosional Frame', 'Sensitivitas Ritme Editing', 'Manajemen Pencahayaan Ambien', 'Pemikiran Strategis Lateral', 'Negosiasi Interpersonal Tingkat Lanjut'],
      coding: [
          {
              skill: 'Sinkronisasi Multi-Threading',
              desc: 'Menggabungkan jalur video, audio, dan efek ke dalam satu timeline video yang harmonis; pemikiran multijalur ini dilatih ketika siswa mempelajari manajemen proses paralel (multithreading) di kelas coding.'
          },
          {
              skill: 'Logika Narasi Dinamis',
              desc: 'Mengatur transisi adegan agar selaras dengan tempo musik; kepekaan menyinkronkan event ini diperoleh ketika siswa memprogram animasi yang dipicu oleh ketukan waktu (timestamp) di kelas coding.'
          },
          {
              skill: 'Dekomposisi Komposisi Visual',
              desc: 'Memecah konsep video besar menjadi alur shot terperinci yang tersusun runut; kemampuan penataan struktural ini dilatih ketika siswa belajar menyusun bagan alur proyek aplikasi di kelas coding.'
          }
      ]
  },
  'Penyiar Radio': {
      hard: ['Teknik Vokal', 'Pengoperasian Konsol Audio', 'Penulisan Naskah Siaran', 'Wawancara Langsung', 'Pemrograman Musik', 'Regulasi Penyiaran', 'Penggunaan Perangkat Lunak Playout', 'Pengucapan/Artikulasi', 'Penyuntingan Audio', 'Manajemen Waktu Siaran'],
      soft: ['Spontanitas', 'Komunikasi Asertif', 'Kecerdasan Emosional', 'Ketahanan Stres', 'Orkestrasi Intonasi Suara', 'Agilitas Wawancara Langsung', 'Koneksi Parasosial Pendengar'],
      coding: [
          {
              skill: 'Manajemen Interupsi',
              desc: 'Mengelola interupsi mendadak seperti telepon masuk tanpa menghentikan jalannya siaran; pengelolaan prioritas ini diasah ketika siswa memprogram penanganan event interupsi (event listeners) di kelas coding.'
          },
          {
              skill: 'Strukturisasi Waktu Siaran',
              desc: 'Menyusun urutan lagu dan berita secara logis berdasarkan durasi; kemampuan manajemen waktu sekuensial ini dilatih saat siswa membuat program penjadwal tugas (task scheduler) di kelas coding.'
          },
          {
              skill: 'Pencegahan Deadlock Siaran',
              desc: 'Mengatasi jeda kosong siaran secara cepat dengan menyiapkan materi cadangan; kemampuan mitigasi hambatan ini dilatih ketika siswa mempelajari penanganan eror sistem (failover logic) di kelas coding.'
          }
      ]
  },
  'Ahli Geologi': {
      hard: ['Pemetaan Geologis', 'Analisis Mineral', 'Survei Seismik', 'Penggunaan GIS', 'Stratigrafi', 'Pengambilan Sampel Tanah/Batuan', 'Hidrogeologi', 'Analisis Data Geospasial', 'Keselamatan Lapangan', 'Geokimia'],
      soft: ['Daya Tahan Fisik', 'Kerja Tim Lapangan', 'Komunikasi Ilmiah', 'Intuisi Stratigrafi Lapangan', 'Ketahanan Ekspedisi Terpencil', 'Sintesis Sejarah Bumi', 'Perencanaan Skenario Probabilistik'],
      coding: [
          {
              skill: 'Analisis Lapisan Terstruktur',
              desc: 'Membaca lapisan batuan sebagai urutan data geologi bumi; kemampuan membaca histori berurutan ini diasah ketika siswa dibiasakan menganalisis log riwayat sistem (system logs) di kelas coding.'
          },
          {
              skill: 'Pemikiran Sistem Bumi',
              desc: 'Memahami interaksi lempeng bumi sebagai suatu sistem dinamis yang saling memengaruhi; pemikiran sistemik berskala besar ini dilatih ketika siswa merancang simulasi ekosistem game di kelas coding.'
          },
          {
              skill: 'Dekomposisi Data Seismik',
              desc: 'Memecah gelombang seismik yang kompleks menjadi variabel getaran untuk dianalisis; kemampuan pemisahan data ini dipelajari siswa saat menulis fungsi parser data di kelas coding.'
          }
      ]
  },
  'Astronom': {
      hard: ['Astrofisika', 'Pengoperasian Teleskop', 'Analisis Spektral', 'Matematika Tingkat Lanjut', 'Pemodelan Komputasi', 'Mekanika Orbit', 'Fisika Kuantum', 'Pengolahan Citra Digital', 'Penggunaan Perangkat Lunak Astronomi', 'Penulisan Makalah Ilmiah'],
      soft: ['Kerja Kolaboratif', 'Skeptisisme Anomali Kosmik', 'Konseptualisasi Multi-Dimensi', 'Ketahanan Analisis Jangka Panjang', 'Evaluasi Etika Cepat', 'Manajemen Risiko Kompleks', 'Agilitas Mental Ekstrem'],
      coding: [
          {
              skill: 'Analisis Pola Spasial',
              desc: 'Mengidentifikasi rasi bintang di antara jutaan titik cahaya kosmik; keterampilan pengenalan pola spasial ini dilatih ketika siswa membuat program deteksi koordinat piksel gambar di kelas coding.'
          },
          {
              skill: 'Dekomposisi Spektrum Cahaya',
              desc: 'Memecah radiasi bintang menjadi spektrum warna dasar untuk mengetahui kandungan kimia bintang; logika dekomposisi data ini didapatkan ketika siswa belajar memparsing file data kompleks di kelas coding.'
          },
          {
              skill: 'Logika Eliminasi Gangguan',
              desc: 'Menyaring gangguan atmosfer secara logis untuk mendapatkan visual angkasa yang tajam; logika penyaringan data noise ini dilatih saat siswa menulis fungsi filter data matematika di kelas coding.'
          }
      ]
  },
  'Insinyur Mesin': {
      hard: ['Termodinamika', 'Dinamika Fluida', 'CAD/CAM', 'Mekanika Material', 'Robotika', 'Desain Komponen Mesin', 'Manufaktur', 'Elemen Mesin', 'Simulasi FEA', 'Kualitas Kontrol'],
      soft: ['Manajemen Proyek', 'Komunikasi Desain', 'Inovasi', 'Analisis Kelelahan Material', 'Visi Integritas Termal', 'Ergonomi Antarmuka Mesin', 'Pemikiran Strategis Lateral'],
      coding: [
          {
              skill: 'Logika Penggerak Mesin',
              desc: 'Merancang sirkuit fisik di mana setiap gerakan mesin didorong oleh instruksi mekanis sekuensial; pemikiran sekuensial presisi ini dilatih ketika siswa memprogram mikrokontroler robotika di kelas coding.'
          },
          {
              skill: 'Pemikiran Algoritmik Mekanis',
              desc: 'Merancang urutan gerakan lengan mesin agar bekerja dalam sinkronisasi yang presisi; logika koordinasi gerakan ini didapatkan saat siswa belajar memprogram animasi sprite koordinat di kelas coding.'
          },
          {
              skill: 'Logika Respon Otomatis',
              desc: 'Menyusun sistem kendali yang menyesuaikan putaran mesin secara otomatis berdasarkan sensor; logika kontrol tertutup ini dipelajari ketika siswa menulis fungsi perulangan dengan sensor input di kelas coding.'
          }
      ]
  },
  'Pengembang Game': {
      hard: ['C++/C#', 'Mesin Game (Unity/Unreal)', 'Matematika 3D', 'Fisika Game', 'Kecerdasan Buatan (Game AI)', 'Grafik Komputer', 'Pengoptimalan Memori', 'Desain Level', 'Jaringan Multipemain', 'Animasi Rigging'],
      soft: ['Visi Kreatif', 'Kerja Tim Multidisiplin', 'Desain Psikologi Hadiah (Reward)', 'Balancing Kurva Kesulitan', 'Koreografi Pengalaman Bermain', 'Negosiasi Interpersonal Tingkat Lanjut', 'Agilitas Mental Ekstrem'],
      coding: [
          {
              skill: 'Logika Aturan Permainan',
              desc: 'Menyusun aturan main game yang logis dan seimbang bagi pemain; perancangan aturan sistematis ini dilatih ketika siswa memprogram aturan permainan (game rules) menggunakan operator perbandingan di kelas coding.'
          },
          {
              skill: 'Dekomposisi Mekanisme Interaksi',
              desc: 'Memecah tantangan game yang rumit menjadi tingkat kesulitan bertahap; perancangan level ini didapatkan siswa saat belajar memecah masalah besar menjadi tugas-tugas kecil di kelas coding.'
          },
          {
              skill: 'Pemikiran Sistem Komponen',
              desc: 'Merancang relasi antarmodul karakter dan lingkungan agar game berjalan lancar; pemikiran sistemik arsitektur ini dilatih ketika siswa belajar merancang struktur kelas modular di kelas coding.'
          }
      ]
  },
  'Animator': {
      hard: ['Animasi 2D/3D', 'Rigging Karakter', 'Pemodelan Maya/Blender', 'Keyframing', 'Prinsip Animasi', 'Desain Karakter', 'Papan Cerita (Storyboarding)', 'Pencahayaan Digital', 'Simulasi Partikel', 'Compositing'],
      soft: ['Visi Artistik', 'Pengamatan Mikro-Ekspresi', 'Pemahaman Bobot dan Momentum', 'Sensitivitas Timing Komedi', 'Sintesis Data Holistik', 'Evaluasi Etika Cepat', 'Kepemimpinan Adaptif'],
      coding: [
          {
              skill: 'Dekomposisi Aksi Keyframe',
              desc: 'Memecah gerakan tubuh yang dinamis menjadi urutan pose kunci yang halus; kemampuan membagi gerakan ini diasah ketika siswa dilatih membuat animasi sprite frame demi frame di kelas coding.'
          },
          {
              skill: 'Logika Transisi Pose',
              desc: 'Mengatur transisi ekspresi wajah karakter agar tampak alami dan tidak kaku; logika transisi yang halus ini dipelajari siswa saat memprogram transisi state (state machines) pada antarmuka pengguna di kelas coding.'
          },
          {
              skill: 'Pemodelan Parametrik Gerak',
              desc: 'Mengatur hubungan antar sendi karakter menggunakan variabel sudut dan momentum; pemikiran kinematika berbasis rumus ini dilatih saat siswa memprogram mekanika fisika game di kelas coding.'
          }
      ]
  },
  'Ilmuwan Forensik': {
      hard: ['Analisis DNA', 'Toksikologi', 'Pemeriksaan Balistik', 'Analisis Sidik Jari', 'Kimia Analitik', 'Pengumpulan Bukti Lapangan', 'Fotografi Forensik', 'Analisis Serat', 'Kesaksian Pengadilan', 'Sistem Manajemen Informasi Laboratorium (LIMS)'],
      soft: ['Etika Profesional', 'Manajemen Stres', 'Komunikasi Ilmiah', 'Objektivitas Dekomposisi', 'Perhatian terhadap Bukti Mikro', 'Ketahanan Terhadap Viseral', 'Negosiasi Interpersonal Tingkat Lanjut'],
      coding: [
          {
              skill: 'Rekayasa Balik (Reverse Engineering)',
              desc: 'Menganalisis sisa bukti fisik di TKP untuk merekonstruksi kronologi kejadian secara logis; logika rekonstruksi mundur ini dilatih ketika siswa belajar teknik penelusuran kode (backtracking) di kelas coding.'
          },
          {
              skill: 'Analisis Pola Komparatif',
              desc: 'Mencocokkan sidik jari atau DNA dengan membandingkan titik kesamaan secara teliti; kepekaan pencocokan pola ini diasah ketika siswa menulis algoritma pencarian kecocokan string di kelas coding.'
          },
          {
              skill: 'Logika Deduktif Bukti',
              desc: 'Menyusun rantai kesimpulan berdasarkan bukti yang saling menguatkan; pemikiran deduktif terstruktur ini diasah saat siswa belajar menulis fungsi pengujian unit (unit tests) yang menguji kebenaran program di kelas coding.'
          }
      ]
  },
  'Spesialis Keamanan Siber': {
      hard: ['Uji Penetrasi', 'Analisis Malware', 'Kriptografi', 'Pemantauan Jaringan', 'Manajemen Firewall', 'Pemrograman (Python/C/Bash)', 'Penilaian Kerentanan', 'Arsitektur Keamanan', 'Respon Insiden', 'Keamanan Cloud'],
      soft: ['Pemikiran Hacker (Ethical)', 'Tetap Tenang dalam Krisis', 'Intuisi Pola Serangan', 'Psikologi Rekayasa Sosial', 'Ketahanan Paranoia Defensif', 'Literasi Informasi Lanjutan', 'Resolusi Konflik Asimetris'],
      coding: [
          {
              skill: 'Analisis Celah Logika',
              desc: 'Menemukan titik terlemah dalam sistem informasi untuk mencegah penyusupan; kemampuan berpikir kritis memetakan kerentanan ini didapatkan ketika siswa dilatih menguji semua kemungkinan input error di kelas coding.'
          },
          {
              skill: 'Dekomposisi Alur Serangan',
              desc: 'Memecah taktik serangan siber menjadi langkah-langkah mitigasi pertahanan yang teratur; keterampilan analisis terstruktur ini dilatih ketika siswa dibiasakan menulis rencana arsitektur program di kelas coding.'
          },
          {
              skill: 'Logika Forensik Malware',
              desc: 'Menganalisis cara kerja file mencurigakan secara runut untuk menetralkan ancaman; pemecahan masalah secara sekuensial ini didapatkan dari rutinitas membaca pesan log error di kelas coding.'
          }
      ]
  },
  'Ahli Biologi Kelautan': {
      hard: ['Oseanografi', 'Identifikasi Spesies Laut', 'Ekologi Terumbu Karang', 'Penyelaman SCUBA', 'Analisis Kualitas Air', 'Statistik Ekologi', 'Konservasi Laut', 'Pembiakan Biota Laut', 'Pemetaan Sonar', 'Navigasi Kapal Dasar'],
      soft: ['Kerja Tim Ekspedisi', 'Daya Tahan Fisik', 'Kesadaran Lingkungan', 'Navigasi Penyelaman Ekstrem', 'Intuisi Perilaku Satwa Liar', 'Etika Konservasi Ekosistem', 'Intuisi Profesional Mendalam'],
      coding: [
          {
              skill: 'Pemodelan Ekosistem Komponen',
              desc: 'Menganalisis sistem alam yang kompleks di mana setiap organisme berinteraksi bagai mikrolayanan dalam sistem arsitektur berbasis cloud.'
          },
          {
              skill: 'Analisis Tren Populasi',
              desc: 'Memprediksi perubahan jumlah biota laut berdasarkan data suhu air; kemampuan prediksi tren ini diasah ketika siswa belajar memprogram kalkulasi proyeksi matematika di kelas coding.'
          },
          {
              skill: 'Dekomposisi Sinyal Suara',
              desc: 'Memisahkan frekuensi komunikasi paus dari kebisingan sonar kapal; logika pemisahan data ini dipelajari siswa saat menulis fungsi penyaringan (data filters) di kelas coding.'
          }
      ]
  }
};
