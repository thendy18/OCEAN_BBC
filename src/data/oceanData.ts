export type BusinessScale = 'UMKM' | 'Menengah' | 'Korporasi';

export type FeatureCategory =
  | 'Rekening'
  | 'Transaksi'
  | 'Pinjaman'
  | 'Investasi'
  | 'Asuransi'
  | 'Solusi Digital';

export type ProductFeature = {
  id: string;
  name: string;
  category: FeatureCategory;
  plainExplanation: string;
  businessValue: string;
  targetClient: string;
  pitchingScript: string;
  source: string;
};

export type PainPoint = {
  id: string;
  title: string;
  question: string;
  scale: BusinessScale[];
  sectors: string[];
  featureIds: string[];
  impact: string;
  before: string;
  after: string;
  savings: string;
};

export type CommonBusinessIssue = {
  id: string;
  scale: BusinessScale;
  title: string;
  description: string;
  probingCue: string;
  featureIds: string[];
  painPointIds: string[];
};

export const scaleOptions: BusinessScale[] = ['UMKM', 'Menengah', 'Korporasi'];

export const sectorOptions = [
  'Perdagangan',
  'Manufaktur',
  'Distribusi',
  'Jasa Profesional',
  'Retail',
  'Logistik',
  'Properti',
  'Umum',
];

export const productFeatures: ProductFeature[] = [
  {
    id: 'giro',
    name: 'Giro BCA',
    category: 'Rekening',
    plainExplanation:
      'Rekening bisnis untuk transaksi finansial aktif dengan detail mutasi, e-Statement, dan fleksibilitas setor tarik antar cabang.',
    businessValue:
      'Memberi kontrol transaksi harian yang lebih rapi, lengkap, dan mudah diaudit oleh finance.',
    targetClient: 'Bisnis dengan volume transaksi harian tinggi dan kebutuhan rekening operasional.',
    pitchingScript:
      'Untuk bisnis dengan transaksi aktif, Giro BCA membantu tim finance melihat detail transaksi lebih lengkap dan menjaga operasional tetap lancar.',
    source: 'Manual Produk Rekening BCA - Giro',
  },
  {
    id: 'tahapan-gold',
    name: 'Tahapan Gold',
    category: 'Rekening',
    plainExplanation:
      'Tabungan bisnis dengan mutasi lengkap, transaksi tanpa buku, dan notifikasi SMS atau email sesuai kebutuhan.',
    businessValue:
      'Membantu pemilik usaha memantau arus kas selama 24/7 tanpa bergantung pada proses manual.',
    targetClient: 'UMKM dan bisnis menengah yang butuh rekening bisnis praktis.',
    pitchingScript:
      'Tahapan Gold cocok sebagai rekening bisnis yang mudah dipantau, terutama saat pemilik usaha ingin melihat detail pembayaran masuk dan keluar.',
    source: 'Manual Produk Rekening BCA - Tahapan Gold',
  },
  {
    id: 'deposito',
    name: 'Deposito dan e-Deposito BCA',
    category: 'Rekening',
    plainExplanation:
      'Produk deposito berjangka dalam Rupiah dan valuta asing untuk menempatkan dana idle perusahaan.',
    businessValue:
      'Membantu perusahaan mengoptimalkan dana menganggur dengan pilihan tenor dan bunga kompetitif.',
    targetClient: 'Perusahaan dengan surplus kas periodik atau dana cadangan.',
    pitchingScript:
      'Jika ada dana yang belum dipakai operasional, Deposito BCA bisa membantu kas bekerja lebih produktif tanpa mengganggu likuiditas inti.',
    source: 'Manual Produk Rekening BCA - Deposito',
  },
  {
    id: 'mybca-bisnis',
    name: 'myBCA Bisnis',
    category: 'Transaksi',
    plainExplanation:
      'Internet banking bisnis untuk transaksi, otorisasi, cek status, dan manajemen kas dari mobile maupun desktop.',
    businessValue:
      'Mempercepat transaksi dan approval, mengurangi follow-up manual, dan menjaga kontrol otorisasi.',
    targetClient: 'Semua skala bisnis yang butuh cash management dan approval berlapis.',
    pitchingScript:
      'myBCA Bisnis membuat finance bisa transaksi, approve, dan cek status dalam satu channel sehingga proses lebih cepat dan tetap terkontrol.',
    source: 'Manual Produk Transaksi BCA - myBCA Bisnis',
  },
  {
    id: 'virtual-account',
    name: 'Virtual Account BCA',
    category: 'Transaksi',
    plainExplanation:
      'Nomor rekening virtual untuk mengidentifikasi dana masuk dari pelanggan atau partner secara otomatis.',
    businessValue:
      'Mengurangi rekonsiliasi manual, mempercepat pencocokan pembayaran, dan menekan human error.',
    targetClient: 'Merchant, distributor, sekolah, koperasi, dan bisnis dengan banyak pembayaran masuk.',
    pitchingScript:
      'Virtual Account membantu setiap pembayaran langsung terbaca identitasnya, jadi tim finance tidak perlu cocokkan mutasi satu per satu.',
    source: 'Manual Produk Transaksi BCA - Virtual Account',
  },
  {
    id: 'edc',
    name: 'EDC BCA',
    category: 'Transaksi',
    plainExplanation:
      'Perangkat pembayaran elektronik BCA untuk menerima berbagai metode pembayaran di lokasi usaha.',
    businessValue:
      'Meningkatkan opsi pembayaran pelanggan dan mempercepat settlement penjualan.',
    targetClient: 'Retail, restoran, klinik, dealer, dan outlet fisik.',
    pitchingScript:
      'EDC BCA membantu outlet menerima pembayaran lebih fleksibel sehingga pelanggan tidak tertahan oleh metode pembayaran.',
    source: 'Manual Produk Transaksi BCA - EDC',
  },
  {
    id: 'qris',
    name: 'QRIS BCA',
    category: 'Transaksi',
    plainExplanation:
      'Pembayaran berbasis QR untuk menerima transaksi digital dari pelanggan dengan proses yang ringkas.',
    businessValue:
      'Mempercepat pembayaran retail dan mengurangi ketergantungan pada uang tunai.',
    targetClient: 'UMKM, retail, event, dan bisnis dengan pembayaran nominal kecil hingga menengah.',
    pitchingScript:
      'QRIS membuat pelanggan bisa bayar cepat dari aplikasi pembayaran mereka, sementara merchant mendapat proses penerimaan yang lebih praktis.',
    source: 'Manual Produk Transaksi BCA - QRIS',
  },
  {
    id: 'api-bca',
    name: 'API BCA Individu Bisnis',
    category: 'Transaksi',
    plainExplanation:
      'Layanan API untuk cek saldo dan mutasi langsung dari platform bisnis nasabah, dibantu IT Gateway.',
    businessValue:
      'Membawa data perbankan ke sistem internal sehingga monitoring cashflow lebih real-time.',
    targetClient: 'Bisnis digital dan individu bisnis yang sudah punya sistem internal.',
    pitchingScript:
      'API BCA membantu data saldo dan mutasi muncul langsung di platform bisnis, jadi keputusan kas bisa lebih cepat.',
    source: 'Manual Produk Transaksi BCA - API BCA',
  },
  {
    id: 'kredit-usaha',
    name: 'Kredit Usaha BCA',
    category: 'Pinjaman',
    plainExplanation:
      'Kredit modal kerja untuk pengembangan usaha, termasuk Kredit Lokal, Installment Loan, Time Loan, dan Kredit Ekspor.',
    businessValue:
      'Memberi fleksibilitas pembiayaan untuk kebutuhan modal kerja, proyek, musiman, dan ekspor.',
    targetClient: 'Bisnis yang sedang ekspansi, menerima proyek besar, atau butuh modal kerja.',
    pitchingScript:
      'Saat order bertumbuh tetapi modal kerja tertahan, Kredit Usaha BCA bisa menyesuaikan pola kebutuhan bisnis.',
    source: 'Manual Produk Pinjaman BCA - Kredit Usaha',
  },
  {
    id: 'kredit-investasi',
    name: 'Kredit Investasi',
    category: 'Pinjaman',
    plainExplanation:
      'Pembiayaan pembelian, pembangunan, dan peremajaan aktiva tetap seperti gudang, ruko, mesin, atau kendaraan.',
    businessValue:
      'Mendukung ekspansi aset produktif tanpa membebani kas operasional sekaligus.',
    targetClient: 'Perusahaan yang ingin membeli mesin, kendaraan niaga, gudang, atau kantor.',
    pitchingScript:
      'Kredit Investasi membantu ekspansi aset berjalan bertahap, sementara kas operasional tetap bisa dijaga.',
    source: 'Manual Produk Pinjaman BCA - Kredit Investasi',
  },
  {
    id: 'kredit-multiguna',
    name: 'Kredit Multiguna Usaha',
    category: 'Pinjaman',
    plainExplanation:
      'Pembiayaan untuk modal kerja, aktiva tetap, biaya usaha, kewajiban usaha, dan kebutuhan lain terkait bisnis.',
    businessValue:
      'Memberi ruang pembiayaan yang lebih luas untuk kebutuhan usaha yang beragam.',
    targetClient: 'Pemilik usaha dengan beberapa kebutuhan pembiayaan sekaligus.',
    pitchingScript:
      'Jika kebutuhan usahanya tidak hanya satu jenis, Kredit Multiguna Usaha memberi fleksibilitas pembiayaan dalam satu solusi.',
    source: 'Manual Produk Pinjaman BCA - Kredit Multiguna Usaha',
  },
  {
    id: 'visa-corporate',
    name: 'BCA Visa Corporate',
    category: 'Pinjaman',
    plainExplanation:
      'Kartu kredit perusahaan untuk transaksi bisnis, reporting, pembayaran tagihan, limit fleksibel, dan benefit perjalanan.',
    businessValue:
      'Memudahkan kontrol expense karyawan, perjalanan dinas, dan reporting transaksi perusahaan.',
    targetClient: 'Perusahaan menengah hingga besar dengan banyak karyawan mobile atau perjalanan dinas.',
    pitchingScript:
      'BCA Visa Corporate membantu perusahaan mengelola pengeluaran karyawan dengan limit, reporting, dan pembayaran yang lebih terpusat.',
    source: 'Manual Produk Pinjaman BCA - Visa Corporate',
  },
  {
    id: 'kkb',
    name: 'KKB BCA',
    category: 'Pinjaman',
    plainExplanation:
      'Solusi kredit kendaraan, termasuk Virtual Mall, Car Ownership Program, dan Commercial Car.',
    businessValue:
      'Mendukung kebutuhan kendaraan operasional dan program kepemilikan mobil karyawan.',
    targetClient: 'Perusahaan dengan kebutuhan kendaraan niaga atau benefit kendaraan karyawan.',
    pitchingScript:
      'KKB BCA membantu perusahaan memenuhi kebutuhan kendaraan operasional dengan proses dan skema pembiayaan yang lebih efisien.',
    source: 'Manual Produk Pinjaman BCA - KKB',
  },
  {
    id: 'reksa-dana',
    name: 'Reksa Dana BCA',
    category: 'Investasi',
    plainExplanation:
      'Wadah investasi yang dikelola Manajer Investasi dan disimpan oleh Bank Kustodian.',
    businessValue:
      'Menjadi alternatif pengelolaan dana idle sesuai profil risiko dan horizon investasi.',
    targetClient: 'Nasabah dengan dana cadangan dan kebutuhan diversifikasi.',
    pitchingScript:
      'Reksa Dana bisa menjadi opsi diversifikasi saat perusahaan ingin mengelola dana idle dengan instrumen yang lebih beragam.',
    source: 'Manual Produk Investasi BCA - Reksa Dana',
  },
  {
    id: 'obligasi',
    name: 'Obligasi',
    category: 'Investasi',
    plainExplanation:
      'Surat utang negara dan surat berharga syariah negara dalam Rupiah maupun valuta asing.',
    businessValue:
      'Membantu diversifikasi treasury dengan instrumen pendapatan tetap.',
    targetClient: 'Perusahaan atau pemilik usaha dengan kebutuhan investasi lebih terstruktur.',
    pitchingScript:
      'Obligasi bisa dipertimbangkan untuk dana yang memiliki horizon jelas dan membutuhkan instrumen pendapatan tetap.',
    source: 'Manual Produk Investasi BCA - Obligasi',
  },
  {
    id: 'asuransi-property',
    name: 'Asuransi Property All Risks',
    category: 'Asuransi',
    plainExplanation:
      'Proteksi properti terhadap kebakaran, banjir, kerusakan akibat air, kerusuhan, sabotase, gempa, dan risiko lain sesuai perluasan.',
    businessValue:
      'Melindungi aset bisnis penting dari risiko kerugian besar yang mengganggu operasional.',
    targetClient: 'Pemilik gudang, kantor, pabrik, ruko, dan aset properti komersial.',
    pitchingScript:
      'Asuransi Property All Risks membantu menjaga kontinuitas bisnis jika aset utama terdampak risiko besar.',
    source: 'Manual Produk Asuransi BCA - Property All Risks',
  },
  {
    id: 'asuransi-kendaraan',
    name: 'Asuransi Kendaraan Bermotor',
    category: 'Asuransi',
    plainExplanation:
      'Proteksi kendaraan comprehensive atau total loss only dengan opsi perluasan risiko.',
    businessValue:
      'Mengurangi risiko finansial saat kendaraan operasional mengalami kerusakan atau kehilangan.',
    targetClient: 'Bisnis dengan armada penjualan, distribusi, atau kendaraan operasional.',
    pitchingScript:
      'Saat kendaraan menjadi bagian dari operasional, asuransi membantu menjaga bisnis tetap berjalan ketika terjadi risiko di jalan.',
    source: 'Manual Produk Asuransi BCA - Kendaraan Bermotor',
  },
  {
    id: 'asuransi-kebakaran',
    name: 'Asuransi Kebakaran',
    category: 'Asuransi',
    plainExplanation:
      'Proteksi aset terhadap kebakaran, petir, ledakan, asap, dan perluasan seperti banjir, kerusuhan, serta gempa.',
    businessValue:
      'Memberi perlindungan dasar untuk aset usaha yang rentan terhadap risiko kebakaran dan bencana.',
    targetClient: 'Pemilik toko, gudang, kantor, ruko, dan pabrik.',
    pitchingScript:
      'Asuransi Kebakaran adalah proteksi dasar yang membantu perusahaan mengurangi dampak finansial dari risiko aset.',
    source: 'Manual Produk Asuransi BCA - Kebakaran',
  },
  {
    id: 'stream-b2b',
    name: 'Stream B2B',
    category: 'Solusi Digital',
    plainExplanation:
      'Platform buyer-supplier untuk pencarian produk, RFQ instan, purchase order, pengiriman, invoice, pembayaran, dan rekonsiliasi.',
    businessValue:
      'Mempercepat procurement, mengurangi error manual, dan meningkatkan kontrol supply chain.',
    targetClient: 'Perusahaan dengan jaringan buyer-supplier, procurement rutin, dan banyak invoice.',
    pitchingScript:
      'Stream B2B membantu proses pengadaan dari RFQ sampai pembayaran berada dalam satu ekosistem yang lebih transparan.',
    source: 'Manual Solusi Digital BCA - Stream B2B',
  },
  {
    id: 'catapa',
    name: 'CATAPA',
    category: 'Solusi Digital',
    plainExplanation:
      'Solusi payroll, PPh 21, BPJS, transfer gaji 24/7, otorisasi transaksi, slip gaji, dan laporan siap pakai.',
    businessValue:
      'Mengurangi proses manual HR dan finance, menekan human error, dan mempercepat payroll.',
    targetClient: 'Perusahaan dengan payroll rutin, banyak karyawan, dan kebutuhan kepatuhan pajak karyawan.',
    pitchingScript:
      'CATAPA membuat payroll, pajak, BPJS, dan file transfer gaji jauh lebih otomatis sehingga HR dan finance bisa fokus ke kontrol.',
    source: 'Manual Solusi Digital BCA - CATAPA',
  },
  {
    id: 'op-business',
    name: 'OP Business Banking',
    category: 'Solusi Digital',
    plainExplanation:
      'Automasi faktur, pembayaran, pajak, embedded finance, workflow, integrasi dua arah, dan konektor ERP seperti SAP atau Oracle.',
    businessValue:
      'Meningkatkan produktivitas finance, traceability, dan optimasi modal kerja lewat automasi end-to-end.',
    targetClient: 'Perusahaan menengah dan korporasi dengan ERP, invoice tinggi, dan proses approval kompleks.',
    pitchingScript:
      'OP Business Banking menghubungkan workflow finance dengan sistem BCA, sehingga invoice, pembayaran, dan rekonsiliasi lebih otomatis.',
    source: 'Manual Solusi Digital BCA - OP Business Banking',
  },
  {
    id: 'pajakku',
    name: 'Pajakku',
    category: 'Solusi Digital',
    plainExplanation:
      'Platform pajak untuk e-PPT, e-Faktur, tax document center, e-KS, e-Meterai, dan tax guide.',
    businessValue:
      'Membantu pengelolaan pajak massal menjadi lebih aman, akurat, real-time, dan mudah dimonitor.',
    targetClient: 'Perusahaan dengan banyak bukti potong, faktur pajak, PPN, atau validasi wajib pajak.',
    pitchingScript:
      'Pajakku membantu tim tax mengelola hitung, bayar, lapor, dan dokumen pajak dalam satu proses yang lebih terintegrasi.',
    source: 'Manual Solusi Digital BCA - Pajakku',
  },
  {
    id: 'program-promosi',
    name: 'Program Promosi BCA',
    category: 'Solusi Digital',
    plainExplanation:
      'Sarana promosi merchant BCA melalui media dan channel BCA untuk menjangkau pelanggan potensial.',
    businessValue:
      'Meningkatkan brand awareness dan peluang penjualan merchant.',
    targetClient: 'Merchant yang ingin menaikkan awareness dan traffic transaksi.',
    pitchingScript:
      'Program Promosi BCA membantu merchant muncul di channel BCA sehingga peluang menjangkau pelanggan baru lebih besar.',
    source: 'Manual Solusi Digital BCA - Program Promosi',
  },
];

export const painPoints: PainPoint[] = [
  {
    id: 'reconciliation',
    title: 'Rekonsiliasi manual lama',
    question: 'Apakah tim finance masih mencocokkan mutasi dan invoice secara manual?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Perdagangan', 'Distribusi', 'Retail', 'Jasa Profesional', 'Umum'],
    featureIds: ['virtual-account', 'mybca-bisnis', 'op-business'],
    impact: 'Hemat waktu rekonsiliasi dari 4 hari menjadi 5 menit untuk pembayaran teridentifikasi.',
    before: '4 hari',
    after: '5 menit',
    savings: 'Waktu closing finance turun drastis.',
  },
  {
    id: 'payroll',
    title: 'Pusing transfer gaji',
    question: 'Apakah payroll, PPh 21, BPJS, dan file transfer masih tersebar di banyak file?',
    scale: ['Menengah', 'Korporasi'],
    sectors: ['Manufaktur', 'Jasa Profesional', 'Retail', 'Logistik', 'Umum'],
    featureIds: ['catapa', 'mybca-bisnis'],
    impact: 'Payroll bulanan berubah dari pekerjaan lintas file menjadi workflow terkontrol 24/7.',
    before: '2-3 hari',
    after: '1 sesi approval',
    savings: 'Human error payroll dan pajak karyawan berkurang.',
  },
  {
    id: 'tax',
    title: 'Pajak dan e-Faktur berat',
    question: 'Apakah tim tax sulit memonitor e-Bupot, e-Faktur, dan dokumen pajak dalam jumlah besar?',
    scale: ['Menengah', 'Korporasi'],
    sectors: ['Manufaktur', 'Distribusi', 'Jasa Profesional', 'Properti', 'Umum'],
    featureIds: ['pajakku'],
    impact: 'Monitoring pajak massal menjadi lebih terpusat, real-time, dan mudah diaudit.',
    before: 'Banyak portal dan spreadsheet',
    after: 'Satu dashboard pajak',
    savings: 'Risiko telat lapor dan salah dokumen menurun.',
  },
  {
    id: 'procurement',
    title: 'Procurement dan invoice supplier lambat',
    question: 'Apakah RFQ, PO, pengiriman, invoice, dan pembayaran supplier belum terhubung?',
    scale: ['Menengah', 'Korporasi'],
    sectors: ['Manufaktur', 'Distribusi', 'Logistik', 'Retail', 'Umum'],
    featureIds: ['stream-b2b', 'op-business', 'mybca-bisnis'],
    impact: 'Pengadaan dari RFQ sampai pembayaran menjadi lebih transparan dan traceable.',
    before: 'Approval dan follow-up manual',
    after: 'Workflow buyer-supplier terintegrasi',
    savings: 'Biaya koordinasi dan keterlambatan supplier turun.',
  },
  {
    id: 'payment-acceptance',
    title: 'Payment acceptance belum rapi',
    question: 'Apakah outlet atau channel penjualan butuh metode pembayaran yang lebih lengkap?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Retail', 'Perdagangan', 'Jasa Profesional', 'Umum'],
    featureIds: ['edc', 'qris', 'virtual-account'],
    impact: 'Pelanggan bisa membayar lewat channel yang nyaman, sementara penerimaan lebih mudah dilacak.',
    before: 'Pembayaran terbatas dan rawan salah catat',
    after: 'EDC, QRIS, dan VA teridentifikasi',
    savings: 'Potensi transaksi hilang berkurang.',
  },
  {
    id: 'cash-management',
    title: 'Cash management dan transaksi aktif',
    question: 'Apakah perusahaan butuh kontrol kas, otorisasi, dan mutasi yang lebih lengkap?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Perdagangan', 'Manufaktur', 'Distribusi', 'Logistik', 'Properti', 'Umum'],
    featureIds: ['giro', 'tahapan-gold', 'mybca-bisnis'],
    impact: 'Transaksi harian lebih terkontrol dengan data mutasi lengkap dan approval digital.',
    before: 'Mutasi tersebar dan approval lambat',
    after: 'Cash management terpusat',
    savings: 'Kontrol kas dan audit trail meningkat.',
  },
  {
    id: 'working-capital',
    title: 'Butuh modal kerja atau ekspansi',
    question: 'Apakah pertumbuhan order, aset, atau proyek membuat kas operasional tertekan?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Perdagangan', 'Manufaktur', 'Distribusi', 'Logistik', 'Properti', 'Umum'],
    featureIds: ['kredit-usaha', 'kredit-investasi', 'kredit-multiguna'],
    impact: 'Kebutuhan modal kerja dan ekspansi bisa disesuaikan dengan pola bisnis.',
    before: 'Ekspansi tertahan kas',
    after: 'Pembiayaan sesuai tujuan',
    savings: 'Pertumbuhan tidak harus menunggu kas terkumpul penuh.',
  },
  {
    id: 'employee-expense',
    title: 'Expense karyawan dan perjalanan sulit dikontrol',
    question: 'Apakah reimbursement, kartu perjalanan, dan limit transaksi karyawan sulit dipantau?',
    scale: ['Menengah', 'Korporasi'],
    sectors: ['Jasa Profesional', 'Distribusi', 'Logistik', 'Manufaktur', 'Umum'],
    featureIds: ['visa-corporate'],
    impact: 'Expense karyawan menjadi lebih terpusat dengan limit, reporting, dan pembayaran tagihan.',
    before: 'Reimbursement manual',
    after: 'Kartu korporat dengan kontrol limit',
    savings: 'Kontrol biaya perjalanan dan operasional meningkat.',
  },
  {
    id: 'idle-cash',
    title: 'Dana idle belum produktif',
    question: 'Apakah perusahaan punya dana menganggur yang belum ditempatkan secara optimal?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Perdagangan', 'Manufaktur', 'Jasa Profesional', 'Properti', 'Umum'],
    featureIds: ['deposito', 'reksa-dana', 'obligasi'],
    impact: 'Dana idle bisa diarahkan ke instrumen yang lebih sesuai dengan horizon dan profil risiko.',
    before: 'Dana mengendap pasif',
    after: 'Treasury lebih produktif',
    savings: 'Potensi return dana cadangan meningkat.',
  },
  {
    id: 'asset-risk',
    title: 'Risiko aset bisnis belum terlindungi',
    question: 'Apakah properti, kendaraan, atau aset operasional menjadi titik risiko besar bisnis?',
    scale: ['UMKM', 'Menengah', 'Korporasi'],
    sectors: ['Manufaktur', 'Logistik', 'Properti', 'Retail', 'Umum'],
    featureIds: ['asuransi-property', 'asuransi-kendaraan', 'asuransi-kebakaran'],
    impact: 'Aset penting lebih terlindungi dari risiko yang bisa menghentikan operasional.',
    before: 'Risiko aset ditanggung sendiri',
    after: 'Proteksi sesuai aset',
    savings: 'Potensi kerugian besar lebih terkendali.',
  },
];

export const commonBusinessIssues: CommonBusinessIssue[] = [
  {
    id: 'umkm-capital',
    scale: 'UMKM',
    title: 'Minimnya Modal Usaha',
    description: 'Akses ke perbankan terbatas dan usaha masih bergantung pada modal sendiri.',
    probingCue: 'Gali kebutuhan modal kerja, pembelian stok, dan rencana ekspansi outlet atau produksi.',
    featureIds: ['kredit-usaha', 'kredit-multiguna', 'tahapan-gold'],
    painPointIds: ['working-capital', 'cash-management'],
  },
  {
    id: 'umkm-digital-marketing',
    scale: 'UMKM',
    title: 'Pemasaran Digital Terbatas',
    description: 'Belum memaksimalkan online marketing dan sulit bersaing di kanal digital.',
    probingCue: 'Arahkan diskusi ke kemudahan pembayaran, promosi merchant, dan pengalaman pelanggan.',
    featureIds: ['program-promosi', 'qris', 'edc', 'virtual-account'],
    painPointIds: ['payment-acceptance'],
  },
  {
    id: 'umkm-finance',
    scale: 'UMKM',
    title: 'Manajemen Keuangan Rendah',
    description: 'Pembukuan masih manual dan keuangan pribadi bercampur dengan usaha.',
    probingCue: 'Validasi pemisahan rekening, kebutuhan mutasi lengkap, dan rekonsiliasi pembayaran masuk.',
    featureIds: ['tahapan-gold', 'giro', 'mybca-bisnis', 'virtual-account'],
    painPointIds: ['cash-management', 'reconciliation'],
  },
  {
    id: 'umkm-people-innovation',
    scale: 'UMKM',
    title: 'SDM dan Inovasi Rendah',
    description: 'Tenaga kerja ahli terbatas dan inovasi produk berjalan lambat.',
    probingCue: 'Bawa ke efisiensi operasional sederhana agar pemilik punya waktu untuk pengembangan bisnis.',
    featureIds: ['mybca-bisnis', 'catapa', 'api-bca'],
    painPointIds: ['cash-management'],
  },
  {
    id: 'umkm-regulation',
    scale: 'UMKM',
    title: 'Regulasi dan Perizinan',
    description: 'Legalitas usaha, dokumen pajak, dan administrasi kepatuhan belum tertata.',
    probingCue: 'Gali apakah pajak, dokumen transaksi, dan bukti pembayaran masih dicari manual.',
    featureIds: ['pajakku', 'mybca-bisnis'],
    painPointIds: ['tax', 'cash-management'],
  },
  {
    id: 'menengah-capital',
    scale: 'Menengah',
    title: 'Keterbatasan Modal untuk Ekspansi',
    description: 'Sulit mendapatkan pendanaan eksternal untuk meningkatkan kapasitas produksi atau ekspansi pasar.',
    probingCue: 'Gali rencana ekspansi, kebutuhan aset, modal kerja, dan pola musiman proyek.',
    featureIds: ['kredit-usaha', 'kredit-investasi', 'kredit-multiguna'],
    painPointIds: ['working-capital'],
  },
  {
    id: 'menengah-cashflow',
    scale: 'Menengah',
    title: 'Arus Kas Tidak Terkelola',
    description: 'Cash flow buruk dan uang pribadi masih bercampur dengan uang perusahaan.',
    probingCue: 'Tekankan pemisahan rekening, kontrol otorisasi, mutasi lengkap, dan dashboard transaksi.',
    featureIds: ['giro', 'tahapan-gold', 'mybca-bisnis'],
    painPointIds: ['cash-management'],
  },
  {
    id: 'menengah-bookkeeping',
    scale: 'Menengah',
    title: 'Pembukuan Belum Profesional',
    description: 'Masih memakai pencatatan manual atau sistem akuntansi yang belum mumpuni.',
    probingCue: 'Gali rekonsiliasi, invoice, dan kebutuhan integrasi data transaksi ke sistem finance.',
    featureIds: ['virtual-account', 'op-business', 'api-bca', 'mybca-bisnis'],
    painPointIds: ['reconciliation', 'cash-management'],
  },
  {
    id: 'menengah-talent',
    scale: 'Menengah',
    title: 'Sulit Mendapatkan Karyawan Berkualitas',
    description: 'Rekrutmen, pelatihan, dan retensi talenta sulit karena kalah benefit dengan perusahaan besar.',
    probingCue: 'Hubungkan ke payroll rapi, benefit karyawan, dan kontrol expense yang lebih profesional.',
    featureIds: ['catapa', 'kkb', 'visa-corporate'],
    painPointIds: ['payroll', 'employee-expense'],
  },
  {
    id: 'menengah-owner-dependent',
    scale: 'Menengah',
    title: 'Ketergantungan pada Pemilik',
    description: 'Keputusan bisnis masih owner-dependent sehingga volume bisnis naik membuat manajemen tidak efisien.',
    probingCue: 'Gali approval transaksi, delegation of authority, dan kebutuhan jejak audit.',
    featureIds: ['mybca-bisnis', 'op-business', 'visa-corporate'],
    painPointIds: ['cash-management', 'employee-expense'],
  },
  {
    id: 'menengah-tech-adoption',
    scale: 'Menengah',
    title: 'Lambatnya Adopsi Teknologi Digital',
    description: 'CRM, ERP, pemasaran digital, dan automasi operasional belum dimanfaatkan optimal.',
    probingCue: 'Arahkan ke automasi invoice, API, procurement digital, dan transaksi lintas perangkat.',
    featureIds: ['op-business', 'stream-b2b', 'api-bca', 'mybca-bisnis'],
    painPointIds: ['procurement', 'reconciliation', 'cash-management'],
  },
  {
    id: 'menengah-quality',
    scale: 'Menengah',
    title: 'Konsistensi Kualitas Produk',
    description: 'Standar kualitas sulit dijaga saat produksi mulai membesar.',
    probingCue: 'Gali kontrol supplier, PO, pengiriman, dan pembayaran bahan baku.',
    featureIds: ['stream-b2b', 'op-business'],
    painPointIds: ['procurement'],
  },
  {
    id: 'menengah-competition',
    scale: 'Menengah',
    title: 'Persaingan Ketat dan Perang Harga',
    description: 'Tekanan kompetitor besar atau produk impor membuat margin tertekan.',
    probingCue: 'Arahkan ke efisiensi biaya operasional, promosi merchant, dan payment acceptance.',
    featureIds: ['program-promosi', 'qris', 'edc', 'stream-b2b'],
    painPointIds: ['payment-acceptance', 'procurement'],
  },
  {
    id: 'menengah-branding',
    scale: 'Menengah',
    title: 'Minimnya Branding dan Pemasaran',
    description: 'Sulit membangun awareness dan memasarkan produk ke pasar yang lebih luas.',
    probingCue: 'Gali channel pembayaran, promo, dan kemudahan pelanggan saat transaksi.',
    featureIds: ['program-promosi', 'qris', 'edc', 'virtual-account'],
    painPointIds: ['payment-acceptance'],
  },
  {
    id: 'menengah-legal-tax',
    scale: 'Menengah',
    title: 'Regulasi, Legalitas, dan Pajak',
    description: 'Perizinan kompleks dan pemahaman pajak kurang matang sehingga berisiko hukum.',
    probingCue: 'Gali e-Faktur, e-Bupot, dokumen pajak, dan bukti pembayaran yang perlu dimonitor.',
    featureIds: ['pajakku', 'op-business', 'mybca-bisnis'],
    painPointIds: ['tax', 'reconciliation'],
  },
  {
    id: 'menengah-supply',
    scale: 'Menengah',
    title: 'Ketergantungan Pemasok',
    description: 'Pasokan bahan baku tidak stabil dan kenaikan biaya berdampak ke operasional.',
    probingCue: 'Gali proses RFQ, perbandingan supplier, PO, pengiriman, invoice, dan pembayaran.',
    featureIds: ['stream-b2b', 'op-business', 'kredit-usaha'],
    painPointIds: ['procurement', 'working-capital'],
  },
  {
    id: 'korporasi-regulation',
    scale: 'Korporasi',
    title: 'Regulasi dan Birokrasi Kompleks',
    description: 'Perubahan pajak dan aturan teknis menuntut kepatuhan tinggi dan dokumentasi kuat.',
    probingCue: 'Validasi volume dokumen pajak, audit trail approval, dan kebutuhan monitoring kepatuhan.',
    featureIds: ['pajakku', 'op-business', 'mybca-bisnis'],
    painPointIds: ['tax', 'reconciliation'],
  },
  {
    id: 'korporasi-management',
    scale: 'Korporasi',
    title: 'Masalah Manajemen dan SDM',
    description: 'Risiko laporan keuangan, utang, dan kekurangan talenta spesifik menghambat pertumbuhan.',
    probingCue: 'Arahkan ke kontrol otorisasi, automasi finance, payroll, dan reporting expense.',
    featureIds: ['op-business', 'catapa', 'visa-corporate', 'mybca-bisnis'],
    painPointIds: ['reconciliation', 'payroll', 'employee-expense'],
  },
  {
    id: 'korporasi-macro',
    scale: 'Korporasi',
    title: 'Gejolak Ekonomi dan Operasional',
    description: 'Inflasi, nilai tukar, biaya operasional, dan gangguan supply chain menekan margin.',
    probingCue: 'Gali kebutuhan modal kerja, procurement terintegrasi, dan optimasi dana idle.',
    featureIds: ['stream-b2b', 'kredit-usaha', 'deposito', 'obligasi'],
    painPointIds: ['procurement', 'working-capital', 'idle-cash'],
  },
  {
    id: 'korporasi-digital',
    scale: 'Korporasi',
    title: 'Transformasi Digital dan Inovasi',
    description: 'Sulit beradaptasi dengan teknologi baru dan terlalu bergantung pada platform pihak ketiga.',
    probingCue: 'Gali integrasi ERP, API, workflow finance, dan end-to-end procurement.',
    featureIds: ['op-business', 'api-bca', 'stream-b2b', 'mybca-bisnis'],
    painPointIds: ['procurement', 'reconciliation', 'cash-management'],
  },
  {
    id: 'korporasi-consumer',
    scale: 'Korporasi',
    title: 'Perubahan Konsumen',
    description: 'Konsumen lebih peduli sustainability, pengalaman pelanggan, dan nilai merek.',
    probingCue: 'Arahkan ke experience pembayaran, promosi merchant, dan kontrol data transaksi pelanggan.',
    featureIds: ['program-promosi', 'qris', 'edc', 'virtual-account'],
    painPointIds: ['payment-acceptance'],
  },
];

export const friendlyPainPointCopy: Record<string, { title: string; question: string }> = {
  reconciliation: {
    title: 'Uang masuk sulit dicocokkan',
    question:
      'Kalau ada banyak pembayaran masuk, tim Ibu/Bapak masih perlu cek satu per satu siapa yang sudah bayar?',
  },
  payroll: {
    title: 'Gaji karyawan masih bikin repot',
    question:
      'Saat hari gajian, apakah tim masih bolak-balik menyiapkan file gaji, pajak, BPJS, dan approval manual?',
  },
  tax: {
    title: 'Urusan pajak dan faktur terasa berat',
    question:
      'Apakah dokumen pajak seperti faktur, bukti potong, atau laporan pajak sering tercecer di banyak tempat?',
  },
  procurement: {
    title: 'Belanja supplier dan invoice lambat',
    question:
      'Untuk cari supplier, minta harga, buat PO, sampai bayar invoice, apakah prosesnya masih banyak follow-up manual?',
  },
  'payment-acceptance': {
    title: 'Pelanggan butuh cara bayar yang lebih mudah',
    question:
      'Apakah ada pelanggan yang batal atau lama bayar karena pilihan pembayaran usaha belum lengkap?',
  },
  'cash-management': {
    title: 'Arus kas belum gampang dipantau',
    question:
      'Apakah pemilik atau finance sulit melihat posisi uang masuk, uang keluar, dan approval transaksi secara cepat?',
  },
  'working-capital': {
    title: 'Butuh dana untuk tumbuh',
    question:
      'Apakah ada rencana tambah stok, mesin, kendaraan, proyek, atau cabang tetapi kas usaha masih terbatas?',
  },
  'employee-expense': {
    title: 'Biaya karyawan sulit dikontrol',
    question:
      'Untuk perjalanan dinas, pembelian operasional, atau reimbursement, apakah kontrol limit dan laporannya masih manual?',
  },
  'idle-cash': {
    title: 'Dana menganggur belum dimanfaatkan',
    question:
      'Apakah perusahaan punya dana cadangan yang sedang mengendap dan belum ditempatkan dengan rencana yang jelas?',
  },
  'asset-risk': {
    title: 'Aset usaha belum terlindungi',
    question:
      'Kalau terjadi risiko pada toko, gudang, kendaraan, atau aset utama, apakah dampaknya bisa mengganggu operasional?',
  },
};

export const categoryTone: Record<FeatureCategory, string> = {
  Rekening: 'bg-sky-50 text-sky-800 ring-sky-100',
  Transaksi: 'bg-blue-50 text-blue-800 ring-blue-100',
  Pinjaman: 'bg-amber-50 text-amber-800 ring-amber-100',
  Investasi: 'bg-emerald-50 text-emerald-800 ring-emerald-100',
  Asuransi: 'bg-rose-50 text-rose-800 ring-rose-100',
  'Solusi Digital': 'bg-indigo-50 text-indigo-800 ring-indigo-100',
};

export const categoryOrder: FeatureCategory[] = [
  'Rekening',
  'Transaksi',
  'Pinjaman',
  'Investasi',
  'Asuransi',
  'Solusi Digital',
];

export const categoryDescriptions: Record<FeatureCategory, string> = {
  Rekening: 'Produk rekening bisnis untuk operasional kas, transaksi aktif, dan penempatan dana.',
  Transaksi: 'Solusi pembayaran, channel transaksi, otorisasi, dan penerimaan dana.',
  Pinjaman: 'Pembiayaan untuk modal kerja, investasi aset, kendaraan, dan expense korporat.',
  Investasi: 'Alternatif pengelolaan dana idle dan diversifikasi treasury.',
  Asuransi: 'Proteksi aset bisnis agar risiko operasional lebih terkendali.',
  'Solusi Digital': 'Ekosistem digital B2B untuk payroll, pajak, procurement, invoice, dan workflow finance.',
};
