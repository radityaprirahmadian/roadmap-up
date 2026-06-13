const fs = require('fs');

const genericSkills = [
  'Kesabaran', 'Kesabaran Tinggi', 'Kesabaran Ekstrem',
  'Ketekunan', 'Manajemen Waktu', 'Waktu', 'Kerja Sama Tim', 'Kolaborasi Tim', 'Kerja Tim', 'Kolaborasi',
  'Komunikasi', 'Fokus', 'Fokus Tinggi', 'Fokus Kuat', 'Adaptabilitas', 'Adaptabilitas Cepat', 'Kreativitas',
  'Disiplin', 'Disiplin Diri', 'Kerja Keras', 'Penerimaan Umpan Balik', 'Kepercayaan Diri',
  'Penerimaan Kritik', 'Fleksibilitas', 'Berpikir Logis', 'Pemecahan Masalah', 'Berpikir Sistematis',
  'Perhatian terhadap Detail', 'Pemikiran Kritis', 'Berpikir Kritis', 'Rasa Ingin Tahu', 'Rasa Ingin Tahu Tinggi',
  'Objektivitas', 'Objektivitas Tinggi', 'Pemikiran Abstrak', 'Pembelajaran Berkelanjutan', 'Keramahan', 'Karisma',
  'Empati', 'Pengambilan Keputusan'
];

const specificReplacements = {
  'Dokter': {
    soft: ['Navigasi Etika Medis', 'Ketahanan Psikologis Klinis', 'Triage Keputusan Cepat', 'Empati Terapeutik'],
    coding: [{ skill: 'Algoritma Diagnostik', desc: 'Pemahaman logika branching membantu dokter menavigasi pohon keputusan diagnostik yang kompleks.' }]
  },
  'Pengusaha/CEO': {
    soft: ['Negosiasi Strategis C-Level', 'Manajemen Risiko Volatilitas', 'Visi Ekspansi Pasar', 'Kepemimpinan Transformasional'],
    coding: [{ skill: 'Pemodelan Sistem Bisnis', desc: 'Menerapkan pola arsitektur perangkat lunak untuk mendesain struktur organisasi yang tangguh.' }]
  },
  'Arsitek': {
    soft: ['Penalaran Spasial Lanjutan', 'Integrasi Estetika-Fungsi', 'Negosiasi Regulasi Tata Kota'],
    coding: [{ skill: 'Logika Geometri Komputasional', desc: 'Memanfaatkan algoritma matematis untuk menghasilkan desain parametrik dan struktur bangunan organik.' }]
  },
  'Ilmuwan': {
    soft: ['Skeptisisme Ilmiah', 'Integritas Metodologi', 'Sintesis Data Multidisiplin'],
    coding: [{ skill: 'Pemrosesan Model Simulasi', desc: 'Kemampuan menyusun variabel simulasi untuk menguji hipotesis tanpa biaya eksperimen fisik.' }]
  },
  'Pengacara': {
    soft: ['Interogasi Analitis', 'Artikulasi Persuasif Ruang Sidang', 'Navigasi Celah Hukum'],
    coding: [{ skill: 'Logika Smart Contracts', desc: 'Menyusun pasal hukum dengan struktur kondisional ketat layaknya kode pemrograman untuk menghindari celah.' }]
  },
  'Akuntan': {
    soft: ['Skeptisisme Profesional', 'Etika Fiduciary', 'Analisis Anomali Finansial'],
    coding: [{ skill: 'Otomatisasi Audit', desc: 'Mengembangkan skrip logika untuk mendeteksi anomali pada jutaan baris transaksi keuangan secara instan.' }]
  },
  'Insinyur Perangkat Lunak': {
    soft: ['Arsitektur Berpikir Abstrak', 'Manajemen Utang Teknis', 'Resolusi Konflik Kode'],
    coding: [{ skill: 'Optimasi Kompleksitas Big-O', desc: 'Memastikan efisiensi algoritma pada skala jutaan pengguna secara real-time.' }]
  },
  'Desainer Grafis': {
    soft: ['Terjemahan Visual Klien', 'Psikologi Persepsi Warna', 'Empati Pengguna (UX)'],
    coding: [{ skill: 'Scripting Animasi Vektor', desc: 'Menggunakan kode untuk menghasilkan gerakan organik dan efek dinamis pada elemen grafis.' }]
  },
  'Koki': {
    soft: ['Manajemen Krisis Dapur (Service)', 'Inovasi Palet Rasa', 'Presisi Sensorik'],
    coding: [{ skill: 'Logika Rantai Pasok Bahan', desc: 'Menggunakan pemikiran sistematis untuk mengoptimalkan alur inventaris dan meminimalkan food waste.' }]
  },
  'Polisi': {
    soft: ['De-eskalasi Konflik Bersenjata', 'Analisis Profiling Kriminal', 'Ketahanan Trauma Lapangan'],
    coding: [{ skill: 'Forensik Jejak Digital', desc: 'Memahami dasar aliran data untuk melacak aktivitas ilegal melalui log sistem dan metadata.' }]
  },
  'Perawat': {
    soft: ['Komunikasi Terapeutik', 'Manajemen Kelelahan Emosional', 'Advokasi Hak Pasien'],
    coding: [{ skill: 'Algoritma Prioritas Perawatan', desc: 'Mengaplikasikan logika antrean (queueing) untuk menangani pasien gawat darurat secara optimal.' }]
  },
  'Guru': {
    soft: ['Psikologi Perkembangan Anak', 'Resolusi Konflik Kelas', 'Desain Instruksional Inklusif'],
    coding: [{ skill: 'Personalisasi Algoritma Belajar', desc: 'Merancang pola pengajaran adaptif layaknya sistem rekomendasi konten untuk setiap siswa.' }]
  },
  'Pilot': {
    soft: ['Kewaspadaan Situasional 360°', 'Manajemen Sumber Daya Kru (CRM)', 'Pengambilan Keputusan Aero-Medis'],
    coding: [{ skill: 'Troubleshooting Avionik Digital', desc: 'Memahami logika sistem penerbangan otonom untuk mengambil alih kendali saat terjadi malfungsi sensor.' }]
  },
  'Penulis': {
    soft: ['Pembangunan Dunia (World-building)', 'Psikologi Karakter Mendalam', 'Retorika Naratif'],
    coding: [{ skill: 'Struktur Narasi Non-Linear', desc: 'Merancang plot cerita bercabang yang kompleks layaknya merancang arsitektur perangkat lunak game.' }]
  },
  'Musisi': {
    soft: ['Interpretasi Emosional Melodi', 'Sinergi Ansambel', 'Improvisasi Harmonis'],
    coding: [{ skill: 'Pemrograman Sinyal Audio', desc: 'Memanipulasi gelombang suara melalui kode untuk menciptakan instrumen virtual dan efek synthesizer baru.' }]
  },
  'Aktor': {
    soft: ['Internalisasi Memori Emosional', 'Proyeksi Vokal Spasial', 'Kehadiran Panggung (Stage Presence)'],
    coding: [{ skill: 'Pemetaan State Karakter', desc: 'Mengatur transisi emosi karakter layaknya state machine dalam pemrograman interaktif.' }]
  },
  'Fotografer': {
    soft: ['Antisipasi Momen (Decisive Moment)', 'Diplomasi Subjek Foto', 'Visi Komposisi Abstrak'],
    coding: [{ skill: 'Otomatisasi Pipeline Editing', desc: 'Menulis skrip untuk memproses dan mengklasifikasikan ribuan file RAW berdasarkan parameter EXIF.' }]
  },
  'Jurnalis': {
    soft: ['Interogasi Investigatif', 'Etika Perlindungan Sumber', 'Sintesis Narasi Konflik'],
    coding: [{ skill: 'Scraping Data Jurnalistik', desc: 'Memanfaatkan skrip otomatis untuk mengekstrak dan menganalisis data publik dalam mengungkap skandal korupsi.' }]
  },
  'Psikolog': {
    soft: ['Membaca Mikro-Ekspresi', 'Navigasi Trauma Mendalam', 'Batas Profesional Terapeutik'],
    coding: [{ skill: 'Pemodelan Perilaku Kognitif', desc: 'Memetakan respons perilaku pasien menggunakan diagram alur logika untuk merencanakan intervensi CBT.' }]
  },
  'Apoteker': {
    soft: ['Ketelitian Farmakokinetik', 'Edukasi Kepatuhan Pasien', 'Kewaspadaan Kontraindikasi'],
    coding: [{ skill: 'Logika Sistem Interaksi Obat', desc: 'Menganalisis sistem peringatan otomatis untuk mencegah kombinasi resep yang membahayakan jiwa.' }]
  },
  'Dokter Gigi': {
    soft: ['Manajemen Kecemasan Dental', 'Presisi Estetika Mikro', 'Ergonomi Operasional'],
    coding: [{ skill: 'Kalibrasi Software Ortodontik', desc: 'Memahami parameter komputasi pada alat cetak 3D dan pemindai rongga mulut digital.' }]
  },
  'Insinyur Sipil': {
    soft: ['Mitigasi Bencana Struktural', 'Negosiasi Kontraktor', 'Visi Keberlanjutan Lingkungan'],
    coding: [{ skill: 'Optimasi Algoritma Material', desc: 'Memprogram perhitungan stres material dinamis untuk membangun struktur tahan gempa yang efisien.' }]
  },
  'Pemasar Digital': {
    soft: ['Empati Perjalanan Konsumen', 'Storytelling Konversi', 'Agilitas Tren Media'],
    coding: [{ skill: 'Logika Segmentasi Dinamis', desc: 'Menyusun aturan kondisional kompleks untuk menargetkan iklan berdasarkan perilaku real-time pengguna.' }]
  },
  'Manajer Proyek': {
    soft: ['Orkestrasi Lintas Divisi', 'Mitigasi Risiko Proaktif', 'Manajemen Ekspektasi Stakeholder'],
    coding: [{ skill: 'Automasi Alur Kerja (Workflow)', desc: 'Membangun skrip integrasi antar alat manajemen proyek untuk menghilangkan hambatan komunikasi tim.' }]
  },
  'Analis Data': {
    soft: ['Penerjemahan Insight Bisnis', 'Skeptisisme Data', 'Storytelling Visual'],
    coding: [{ skill: 'Ekstraksi Anomali Logis', desc: 'Menulis fungsi logika kustom untuk mendeteksi dan membersihkan outlier tersembunyi pada dataset kotor.' }]
  },
  'Petani': {
    soft: ['Intuisi Iklim Mikro', 'Ketahanan Gagal Panen', 'Etika Kesejahteraan Pertanian'],
    coding: [{ skill: 'Pemrograman Sensor IoT Agrikultur', desc: 'Mengatur logika mikrokontroler untuk mengotomatisasi penyiraman dan pemupukan berdasarkan data sensor tanah.' }]
  },
  'Mekanik': {
    soft: ['Diagnostik Suara/Getaran', 'Keselamatan Kerja Alat Berat', 'Ketelitian Torsi Mesin'],
    coding: [{ skill: 'Telemetri Kendaraan Digital', desc: 'Menggunakan logika komputer untuk membaca dan memodifikasi parameter pada Electronic Control Unit (ECU).' }]
  },
  'Tukang Listrik': {
    soft: ['Kesadaran Spasial Bahaya', 'Interpretasi Skema Kompleks', 'Presisi Instalasi Tegangan Tinggi'],
    coding: [{ skill: 'Desain Sirkuit Logika Pintar', desc: 'Menerapkan konsep gerbang logika komputasi untuk merancang sistem otomasi rumah yang saling terintegrasi.' }]
  },
  'Pemandu Wisata': {
    soft: ['Storytelling Historis Imersif', 'Manajemen Dinamika Kelompok', 'Kecerdasan Budaya (CQ)'],
    coding: [{ skill: 'Logika Rute Dinamis', desc: 'Memanfaatkan algoritma pemetaan pikiran untuk mengubah jadwal secara real-time berdasarkan variabel cuaca dan keramaian.' }]
  },
  'Desainer Interior': {
    soft: ['Harmonisasi Psikologi Ruang', 'Negosiasi Vendor Material', 'Visi Pencahayaan Ambien'],
    coding: [{ skill: 'Scripting Rendering 3D', desc: 'Memodifikasi kode material pada mesin render untuk mendapatkan efek pantulan cahaya fisik yang sangat realistis.' }]
  },
  'Peneliti': {
    soft: ['Ketahanan Penolakan Publikasi', 'Navigasi Bias Kognitif', 'Etika Eksperimen Subjek Manusia'],
    coding: [{ skill: 'Automasi Pengumpulan Literatur', desc: 'Membuat web scraper khusus untuk mengekstrak dan mengklasifikasikan jurnal terbaru secara otomatis.' }]
  },
  'Kurator Museum': {
    soft: ['Preservasi Narasi Sejarah', 'Deteksi Pemalsuan Artefak', 'Desain Pengalaman Pengunjung'],
    coding: [{ skill: 'Pengindeksan Relasional Arsip', desc: 'Membangun skema database kustom untuk menghubungkan artefak sejarah dengan konteks digital lintas benua.' }]
  },
  'Pramugari': {
    soft: ['Manajemen Panik Massa', 'Diplomasi Penumpang Sulit', 'Sensitivitas Medis Ketinggian'],
    coding: [{ skill: 'Protokol Darurat Algoritmik', desc: 'Mengeksekusi prosedur keselamatan kompleks layaknya algoritma fail-safe yang tidak boleh mengalami malfungsi.' }]
  },
  'Pelatih Olahraga': {
    soft: ['Psikologi Puncak Performa', 'Resolusi Ego Bintang', 'Visi Taktikal Antisipatif'],
    coding: [{ skill: 'Analisis Kinerja Sabermetrik', desc: 'Menggunakan bahasa kueri data untuk menemukan kelemahan lawan berdasarkan statistik posisi pemain.' }]
  },
  'Atlet Profesional': {
    soft: ['Mentalitas Bangkit dari Cedera', 'Kesadaran Kinestetik', 'Fokus Zona Kompetitif (Flow State)'],
    coding: [{ skill: 'Optimasi Variabel Biomekanik', desc: 'Menganalisis data tangkapan gerak (motion capture) untuk memperbaiki sudut efisiensi pukulan atau lompatan.' }]
  },
  'Pustakawan': {
    soft: ['Navigasi Literasi Informasi', 'Kurasi Pengetahuan Komunitas', 'Etika Kebebasan Informasi'],
    coding: [{ skill: 'Konfigurasi Sistem Metadata', desc: 'Memprogram aturan taksonomi kustom untuk mempercepat mesin pencari internal menemukan literatur spesifik.' }]
  },
  'Pekerja Sosial': {
    soft: ['Empati Kasus Ekstrem', 'Navigasi Birokrasi Kesejahteraan', 'Manajemen Trauma Sekunder'],
    coding: [{ skill: 'Sistem Deteksi Risiko Sosial', desc: 'Membangun alur logika untuk mengidentifikasi pola pengabaian anak berdasarkan input data multidisiplin.' }]
  },
  'Desainer Mode': {
    soft: ['Prediksi Zeitgeist Budaya', 'Pemahaman Taktil Kain', 'Inovasi Siluet Struktural'],
    coding: [{ skill: 'Algoritma Pemotongan Pola', desc: 'Menulis parameter komputasi untuk mesin pemotong agar pola kain memiliki tingkat limbah (zero-waste) nol.' }]
  },
  'Penerjemah': {
    soft: ['Preservasi Nuansa Budaya', 'Kelincahan Idiom', 'Integritas Tone Penulis Asli'],
    coding: [{ skill: 'Penyesuaian Algoritma NMT', desc: 'Memahami cara kerja Neural Machine Translation untuk melatih dan menyempurnakan memori terjemahan khusus.' }]
  },
  'Ilmuwan Data': {
    soft: ['Skeptisisme Korelasi vs Kausasi', 'Penerjemahan Insight Eksekutif', 'Etika Privasi Big Data'],
    coding: [{ skill: 'Arsitektur Jaringan Saraf', desc: 'Merancang topologi algoritma deep learning untuk memecahkan masalah prediktif non-linear.' }]
  },
  'Ahli Gizi': {
    soft: ['Psikologi Gangguan Makan', 'Modifikasi Perilaku Diet', 'Personalisasi Empatik Terukur'],
    coding: [{ skill: 'Algoritma Keseimbangan Makronutrien', desc: 'Membangun kalkulator logika kompleks yang menyeimbangkan kebutuhan metabolisme unik setiap genetik pasien.' }]
  },
  'Terapis Fisik': {
    soft: ['Motivasi Rehabilitasi Nyeri', 'Penilaian Biomekanik Visual', 'Empati Sentuhan Terapeutik'],
    coding: [{ skill: 'Logika Kalibrasi Prostetik', desc: 'Menyesuaikan algoritma sensitivitas pada anggota tubuh bionik agar sesuai dengan impuls saraf alami pasien.' }]
  },
  'Konsultan Bisnis': {
    soft: ['Diagnostik Kegagalan Organisasi', 'Navigasi Politik Perusahaan', 'Fasilitasi Manajemen Perubahan'],
    coding: [{ skill: 'Simulasi Monte Carlo Finansial', desc: 'Menggunakan pemrograman logika stokastik untuk memodelkan probabilitas kebangkrutan dalam berbagai skenario krisis.' }]
  },
  'Pengembang Web': {
    soft: ['Aksesibilitas Empatik (a11y)', 'Resolusi Ambiguitas Syarat', 'Estetika Interaksi Mikro'],
    coding: [{ skill: 'Optimasi Render Tree', desc: 'Mendebug jalur kritis rendering browser untuk mencapai waktu muat di bawah satu detik.' }]
  },
  'Videografer': {
    soft: ['Komposisi Emosional Frame', 'Sensitivitas Ritme Editing', 'Manajemen Pencahayaan Ambien'],
    coding: [{ skill: 'Ekspresi Kode After Effects', desc: 'Menulis fungsi matematika (JavaScript) untuk mengotomatisasi animasi kamera dan efek paralaks yang kompleks.' }]
  },
  'Penyiar Radio': {
    soft: ['Orkestrasi Intonasi Suara', 'Agilitas Wawancara Langsung', 'Koneksi Parasosial Pendengar'],
    coding: [{ skill: 'Automasi Logika Playout', desc: 'Mengonfigurasi skrip transisi siaran untuk menyisipkan jeda iklan dan jingle tanpa tumpang tindih audio.' }]
  },
  'Ahli Geologi': {
    soft: ['Intuisi Stratigrafi Lapangan', 'Ketahanan Ekspedisi Terpencil', 'Sintesis Sejarah Bumi'],
    coding: [{ skill: 'Pemrosesan Algoritma Seismik', desc: 'Menganalisis ribuan titik data gelombang kejut menggunakan kode untuk memetakan reservoir minyak bawah tanah.' }]
  },
  'Astronom': {
    soft: ['Skeptisisme Anomali Kosmik', 'Konseptualisasi Multi-Dimensi', 'Ketahanan Analisis Jangka Panjang'],
    coding: [{ skill: 'Filter Noise Astrofotografi', desc: 'Menulis skrip Python kustom untuk menghilangkan gangguan atmosfer dari gambar teleskop ruang angkasa.' }]
  },
  'Insinyur Mesin': {
    soft: ['Analisis Kelelahan Material', 'Visi Integritas Termal', 'Ergonomi Antarmuka Mesin'],
    coding: [{ skill: 'Pemrograman Kontrol PID', desc: 'Merancang algoritma umpan balik (feedback loop) untuk menstabilkan gerakan lengan robot industri secara presisi.' }]
  },
  'Pengembang Game': {
    soft: ['Desain Psikologi Hadiah (Reward)', 'Balancing Kurva Kesulitan', 'Koreografi Pengalaman Bermain'],
    coding: [{ skill: 'Arsitektur Entity-Component', desc: 'Membangun sistem memori yang efisien untuk menangani ribuan objek interaktif tanpa mengorbankan framerate.' }]
  },
  'Animator': {
    soft: ['Pengamatan Mikro-Ekspresi', 'Pemahaman Bobot dan Momentum', 'Sensitivitas Timing Komedi'],
    coding: [{ skill: 'Otomatisasi Rigging Skeletal', desc: 'Membuat skrip matriks transformasi untuk mengontrol ratusan tulang karakter dengan antarmuka yang sederhana.' }]
  },
  'Ilmuwan Forensik': {
    soft: ['Objektivitas Dekomposisi', 'Perhatian terhadap Bukti Mikro', 'Ketahanan Terhadap Viseral'],
    coding: [{ skill: 'Algoritma Pencocokan Biometrik', desc: 'Memahami cara kerja di balik perangkat lunak pengenalan sidik jari untuk mengkalibrasi tingkat toleransi kesalahan.' }]
  },
  'Spesialis Keamanan Siber': {
    soft: ['Intuisi Pola Serangan', 'Psikologi Rekayasa Sosial', 'Ketahanan Paranoia Defensif'],
    coding: [{ skill: 'Rekayasa Balik (Reverse Engineering)', desc: 'Membongkar kode malware tingkat perakitan (assembly) untuk memahami logika perusak sebelum menyebar.' }]
  },
  'Ahli Biologi Kelautan': {
    soft: ['Navigasi Penyelaman Ekstrem', 'Intuisi Perilaku Satwa Liar', 'Etika Konservasi Ekosistem'],
    coding: [{ skill: 'Analisis Akustik Bawah Air', desc: 'Menggunakan pemrograman spektral untuk memisahkan pola komunikasi paus dari kebisingan kapal komersial.' }]
  }
};

let content = fs.readFileSync('src/constants/career-data.ts', 'utf-8');

const regexSafe = /'([^']+)':\s*\{\s*hard:\s*\[([^\]]+)\],\s*soft:\s*\[([^\]]+)\],\s*coding:\s*\[([\s\S]*?)\n\s*\]\s*\}/gs;

const newContent = content.replace(regexSafe, (match, careerName, hardStr, softStr, codingStr) => {
  let softSkills = softStr.split(',').map(s => s.trim().replace(/^'|'$/g, '')).filter(s => s);
  
  const existingCodingRegex = /\{\s*skill:\s*'([^']+)',\s*desc:\s*'([^']+)'\s*\}/g;
  let codingArray = [];
  let cmatch;
  while ((cmatch = existingCodingRegex.exec(codingStr)) !== null) {
    codingArray.push({ skill: cmatch[1], desc: cmatch[2] });
  }

  // Filter out generic skills
  let newSoft = softSkills.filter(s => !genericSkills.includes(s));
  let newCoding = codingArray.filter(c => !genericSkills.includes(c.skill));

  // Get specific replacements for this career
  let spec = specificReplacements[careerName];
  if (!spec) {
    console.log("No specific replacements for", careerName);
    spec = { soft: [], coding: [] };
  }

  // Refill soft skills up to roughly half of what we need, then coding skills
  let sIndex = 0;
  let cIndex = 0;

  // We want total to be exactly 10
  while (newSoft.length + newCoding.length < 10) {
    // Alternate adding specialized soft and coding skills
    if (sIndex < spec.soft.length && newSoft.length < 7) {
      newSoft.push(spec.soft[sIndex]);
      sIndex++;
    } else if (cIndex < spec.coding.length) {
      newCoding.push(spec.coding[cIndex]);
      cIndex++;
    } else {
      // If we run out of specific skills, break to avoid infinite loop
      // and just push some advanced placeholder
      newSoft.push(`Keahlian Lanjutan ${newSoft.length + newCoding.length}`);
    }
  }

  // If we somehow have more than 10 (unlikely since we filter heavily), truncate
  if (newSoft.length + newCoding.length > 10) {
    let diff = (newSoft.length + newCoding.length) - 10;
    while(diff > 0 && newSoft.length > 5) {
      newSoft.pop();
      diff--;
    }
    while(diff > 0) {
      newCoding.pop();
      diff--;
    }
  }

  const newSoftStr = newSoft.map(s => `'${s}'`).join(', ');
  
  const newCodingStr = newCoding.map(c => `
          {
              skill: '${c.skill}',
              desc: '${c.desc}'
          }`).join(',');

  return `'${careerName}': {
      hard: [${hardStr.trim()}],
      soft: [${newSoftStr}],
      coding: [${newCodingStr}
      ]
  }`;
});

fs.writeFileSync('src/constants/career-data.ts', newContent);
console.log('Fixed general skills');
