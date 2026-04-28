'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import type { ReactNode } from 'react';

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: { length: number; [i: number]: { isFinal: boolean; [j: number]: { transcript: string } } };
}

interface SpeechRecognitionApi extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

type SpeechRecognitionCtor = new () => SpeechRecognitionApi;

type BusinessScale = 'UMKM' | 'Menengah' | 'Korporasi';
type TabId = 'profiling' | 'probing' | 'showcase' | 'academy' | 'voice-analyzer';

type CustomerProfile = {
  scale: BusinessScale;
  sector: string;
};

type FeatureCategory =
  | 'Rekening'
  | 'Transaksi'
  | 'Pinjaman'
  | 'Investasi'
  | 'Asuransi'
  | 'Solusi Digital';

type ProductFeature = {
  id: string;
  name: string;
  category: FeatureCategory;
  plainExplanation: string;
  businessValue: string;
  targetClient: string;
  pitchingScript: string;
  source: string;
};

type PainPoint = {
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

type CommonBusinessIssue = {
  id: string;
  scale: BusinessScale;
  title: string;
  description: string;
  probingCue: string;
  featureIds: string[];
  painPointIds: string[];
};

type ChatMessage = {
  role: 'staff' | 'assistant';
  text: string;
};

const tabs: Array<{ id: TabId; label: string; eyebrow: string }> = [
  { id: 'profiling', label: 'Profiling', eyebrow: 'Discovery' },
  { id: 'probing', label: 'Probing', eyebrow: 'Checklist' },
  { id: 'showcase', label: 'Value Showcase', eyebrow: 'Demo & ROI' },
  { id: 'academy', label: 'OCEAN Academy', eyebrow: 'Learning' },
  { id: 'voice-analyzer', label: 'Voice Analyzer', eyebrow: 'AI Mode' },
];

const scaleOptions: BusinessScale[] = ['UMKM', 'Menengah', 'Korporasi'];

const sectorOptions = [
  'Perdagangan',
  'Manufaktur',
  'Distribusi',
  'Jasa Profesional',
  'Retail',
  'Logistik',
  'Properti',
  'Umum',
];

const productFeatures: ProductFeature[] = [
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

const painPoints: PainPoint[] = [
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

const commonBusinessIssues: CommonBusinessIssue[] = [
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

const friendlyPainPointCopy: Record<string, { title: string; question: string }> = {
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

const featureById = new Map(productFeatures.map((feature) => [feature.id, feature]));

const categoryTone: Record<FeatureCategory, string> = {
  Rekening: 'bg-sky-50 text-sky-800 ring-sky-100',
  Transaksi: 'bg-blue-50 text-blue-800 ring-blue-100',
  Pinjaman: 'bg-amber-50 text-amber-800 ring-amber-100',
  Investasi: 'bg-emerald-50 text-emerald-800 ring-emerald-100',
  Asuransi: 'bg-rose-50 text-rose-800 ring-rose-100',
  'Solusi Digital': 'bg-indigo-50 text-indigo-800 ring-indigo-100',
};

const categoryOrder: FeatureCategory[] = [
  'Rekening',
  'Transaksi',
  'Pinjaman',
  'Investasi',
  'Asuransi',
  'Solusi Digital',
];

const categoryDescriptions: Record<FeatureCategory, string> = {
  Rekening: 'Produk rekening bisnis untuk operasional kas, transaksi aktif, dan penempatan dana.',
  Transaksi: 'Solusi pembayaran, channel transaksi, otorisasi, dan penerimaan dana.',
  Pinjaman: 'Pembiayaan untuk modal kerja, investasi aset, kendaraan, dan expense korporat.',
  Investasi: 'Alternatif pengelolaan dana idle dan diversifikasi treasury.',
  Asuransi: 'Proteksi aset bisnis agar risiko operasional lebih terkendali.',
  'Solusi Digital': 'Ekosistem digital B2B untuk payroll, pajak, procurement, invoice, dan workflow finance.',
};

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-48 items-center justify-center rounded-lg bg-slate-800 p-6 text-center text-sm font-semibold tracking-wide text-slate-100 shadow-inner ${className}`}
    >
      [{label}]
    </div>
  );
}

function Badge({ children, tone }: { children: ReactNode; tone: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tone}`}>
      {children}
    </span>
  );
}

export default function OceanNavigator() {
  const [activeTab, setActiveTab] = useState<TabId>('profiling');
  const [customerProfile, setCustomerProfile] = useState<CustomerProfile>({
    scale: 'Menengah',
    sector: 'Manufaktur',
  });
  const [selectedProfileIssues, setSelectedProfileIssues] = useState<string[]>([]);
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedAcademyCategory, setSelectedAcademyCategory] = useState<FeatureCategory | null>(null);
  const [selectedAcademyModule, setSelectedAcademyModule] = useState<ProductFeature | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [aiProbingGuide, setAiProbingGuide] = useState('');
  const [isAiProbingLoading, setIsAiProbingLoading] = useState(false);
  const [copilotInput, setCopilotInput] = useState('');
  const [copilotMessages, setCopilotMessages] = useState<ChatMessage[]>([
    {
      role: 'staff',
      text: 'Kalau nasabah tanya integrasi API BCA, saya harus jelaskan apa tanpa terlalu teknis?',
    },
    {
      role: 'assistant',
      text:
        'Jelaskan sebagai jembatan aman agar saldo dan mutasi bisa muncul langsung di sistem bisnis nasabah. Tekankan manfaat: data real-time, monitoring cashflow, dan pengurangan input manual. Sumber: SOP Produk Transaksi - API BCA Individu Bisnis.',
    },
  ]);
  const [isCopilotLoading, setIsCopilotLoading] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionApi | null>(null);
  const voiceResultRef = useRef<HTMLDivElement | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [voiceInterim, setVoiceInterim] = useState('');
  const [voiceAnalysis, setVoiceAnalysis] = useState('');
  const [isVoiceAnalyzing, setIsVoiceAnalyzing] = useState(false);

  const [tutorMessages, setTutorMessages] = useState<ChatMessage[]>([]);
  const [tutorInput, setTutorInput] = useState('');
  const [isTutorLoading, setIsTutorLoading] = useState(false);

  const visiblePainPoints = useMemo(() => {
    const matched = painPoints.filter(
      (painPoint) =>
        painPoint.scale.includes(customerProfile.scale) &&
        (painPoint.sectors.includes(customerProfile.sector) || painPoint.sectors.includes('Umum')),
    );

    return matched.length > 0 ? matched : painPoints;
  }, [customerProfile]);

  const visibleProfileIssues = useMemo(
    () => commonBusinessIssues.filter((issue) => issue.scale === customerProfile.scale),
    [customerProfile.scale],
  );

  const selectedProfileIssueData = useMemo(
    () => commonBusinessIssues.filter((issue) => selectedProfileIssues.includes(issue.id)),
    [selectedProfileIssues],
  );

  const selectedPainPointData = useMemo(
    () => painPoints.filter((painPoint) => selectedPainPoints.includes(painPoint.id)),
    [selectedPainPoints],
  );

  const probingPainPoints = useMemo(() => {
    const merged = new Map<string, PainPoint>();
    visiblePainPoints.forEach((painPoint) => merged.set(painPoint.id, painPoint));
    selectedPainPointData.forEach((painPoint) => merged.set(painPoint.id, painPoint));
    return Array.from(merged.values());
  }, [selectedPainPointData, visiblePainPoints]);

  const recommendedFeatures = useMemo(() => {
    const ids = new Set([
      ...selectedPainPointData.flatMap((painPoint) => painPoint.featureIds),
      ...selectedProfileIssueData.flatMap((issue) => issue.featureIds),
    ]);
    return Array.from(ids)
      .map((id) => featureById.get(id))
      .filter((feature): feature is ProductFeature => Boolean(feature));
  }, [selectedPainPointData, selectedProfileIssueData]);

  const academyModules = useMemo(
    () =>
      [...productFeatures].sort((a, b) => {
        if (a.category === b.category) {
          return a.name.localeCompare(b.name);
        }

        return a.category.localeCompare(b.category);
      }),
    [],
  );

  const academyCategorySummaries = useMemo(
    () =>
      categoryOrder.map((category) => {
        const modules = academyModules.filter((feature) => feature.category === category);

        return {
          category,
          modules,
          featuredNames: modules.slice(0, 3).map((feature) => feature.name),
        };
      }),
    [academyModules],
  );

  const selectedAcademyModules = useMemo(
    () =>
      selectedAcademyCategory
        ? academyModules.filter((feature) => feature.category === selectedAcademyCategory)
        : [],
    [academyModules, selectedAcademyCategory],
  );

  const handleProfileChange = (field: keyof CustomerProfile, value: string) => {
    setCustomerProfile((current) => ({ ...current, [field]: value }));
    setSelectedProfileIssues([]);
    setSelectedPainPoints([]);
    setAiProbingGuide('');
  };

  const toggleProfileIssue = (issueId: string) => {
    setSelectedProfileIssues((current) =>
      current.includes(issueId) ? current.filter((id) => id !== issueId) : [...current, issueId],
    );
    setAiProbingGuide('');
  };

  const startDiagnosisFromProfile = () => {
    const mappedPainPointIds = selectedProfileIssueData.flatMap((issue) => issue.painPointIds);
    setSelectedPainPoints(Array.from(new Set(mappedPainPointIds)));
    setActiveTab('probing');
  };

  const togglePainPoint = (painPointId: string) => {
    setSelectedPainPoints((current) =>
      current.includes(painPointId)
        ? current.filter((id) => id !== painPointId)
        : [...current, painPointId],
    );
    setAiProbingGuide('');
  };

  const selectedSummary =
    selectedPainPointData.length > 0
      ? `${selectedPainPointData.length} pain point terpilih`
      : 'Belum ada pain point terpilih';

  const requestGemini = async (mode: 'probing' | 'copilot', question?: string) => {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mode,
        question,
        profile: customerProfile,
        profileIssues: selectedProfileIssueData,
        painPoints: selectedPainPointData,
        recommendedFeatures,
      }),
    });

    const payload = (await response.json()) as { answer?: string; error?: string };

    if (!response.ok) {
      throw new Error(payload.error ?? 'AI belum bisa menjawab saat ini.');
    }

    return payload.answer ?? 'AI belum mengembalikan jawaban.';
  };

  const generateAiProbingGuide = async () => {
    setIsAiProbingLoading(true);

    try {
      const answer = await requestGemini('probing');
      setAiProbingGuide(answer);
    } catch (error) {
      setAiProbingGuide(error instanceof Error ? error.message : 'AI belum bisa membuat panduan probing.');
    } finally {
      setIsAiProbingLoading(false);
    }
  };

  const submitCopilotQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuestion = copilotInput.trim();

    if (!trimmedQuestion || isCopilotLoading) {
      return;
    }

    setCopilotInput('');
    setCopilotMessages((current) => [...current, { role: 'staff', text: trimmedQuestion }]);
    setIsCopilotLoading(true);

    try {
      const answer = await requestGemini('copilot', trimmedQuestion);
      setCopilotMessages((current) => [...current, { role: 'assistant', text: answer }]);
    } catch (error) {
      setCopilotMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text:
            error instanceof Error
              ? error.message
              : 'Maaf, Co-Pilot belum bisa menjawab. Untuk pertanyaan di luar modul, eskalasi ke HO.',
        },
      ]);
    } finally {
      setIsCopilotLoading(false);
    }
  };

  const startVoiceRecording = useCallback(() => {
    const win = window as Window & {
      SpeechRecognition?: SpeechRecognitionCtor;
      webkitSpeechRecognition?: SpeechRecognitionCtor;
    };
    const Ctor = win.SpeechRecognition ?? win.webkitSpeechRecognition;
    if (!Ctor) {
      alert('Browser Anda tidak mendukung pengenalan suara. Gunakan Chrome atau Edge terbaru.');
      return;
    }

    const recognition = new Ctor();
    recognition.lang = 'id-ID';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalText = '';
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalText += text + ' ';
        } else {
          interimText += text;
        }
      }
      if (finalText) setVoiceTranscript((prev) => prev + finalText);
      setVoiceInterim(interimText);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      setVoiceInterim('');
    };

    recognition.onend = () => {
      setIsRecording(false);
      setVoiceInterim('');
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  }, []);

  const stopVoiceRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
    setVoiceInterim('');
  }, []);

  const analyzeVoice = async () => {
    if (!voiceTranscript.trim() || isVoiceAnalyzing) return;
    setIsVoiceAnalyzing(true);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'voice-analysis', transcript: voiceTranscript }),
      });
      const payload = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok) {
        setVoiceAnalysis(`Error dari AI: ${payload.error ?? response.status}`);
      } else {
        setVoiceAnalysis(payload.answer ?? 'AI tidak mengembalikan jawaban.');
      }
      setTimeout(() => voiceResultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch {
      setVoiceAnalysis('Gagal menghubungi AI. Periksa koneksi dan coba lagi.');
    } finally {
      setIsVoiceAnalyzing(false);
    }
  };

  const submitTutorQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = tutorInput.trim();
    if (!question || isTutorLoading || !selectedAcademyModule) return;

    setTutorInput('');
    setTutorMessages((prev) => [...prev, { role: 'staff', text: question }]);
    setIsTutorLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'tutor',
          question,
          product: selectedAcademyModule,
          tutorHistory: tutorMessages,
        }),
      });
      const payload = (await response.json()) as { answer?: string; error?: string };
      setTutorMessages((prev) => [
        ...prev,
        { role: 'assistant', text: payload.answer ?? 'AI belum bisa menjawab.' },
      ]);
    } catch {
      setTutorMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Gagal terhubung ke AI. Coba lagi.' },
      ]);
    } finally {
      setIsTutorLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="bg-bca-blue px-5 py-5 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:px-6 lg:py-7">
          <div className="flex items-center justify-between gap-4 lg:block">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Internal BCA</p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight">OCEAN Navigator</h1>
              <p className="mt-2 hidden text-sm leading-6 text-blue-100 lg:block">
                Tablet assistant untuk consultative selling dan just-in-time learning produk B2B.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 px-3 py-2 text-right text-xs font-semibold ring-1 ring-white/20 lg:mt-6 lg:text-left">
              <p>{customerProfile.scale}</p>
              <p className="text-blue-100">{customerProfile.sector}</p>
            </div>
          </div>

          <nav className="mt-5 grid grid-cols-2 gap-2 lg:mt-8 lg:grid-cols-1">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-3 py-3 text-left transition ${
                    isActive
                      ? 'bg-white text-bca-navy shadow-lg'
                      : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15'
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-75">
                    0{index + 1} {tab.eyebrow}
                  </span>
                  <span className="mt-1 block text-sm font-bold">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto hidden rounded-lg bg-bca-navy p-4 text-sm leading-6 text-blue-50 ring-1 ring-white/10 lg:block">
            <p className="font-semibold text-white">C-Level Lens</p>
            <p className="mt-2">Fokus narasi: efisiensi waktu, penghematan biaya, keamanan, kontrol, dan cashflow.</p>
          </div>
        </aside>

        <section className="flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <header className="mb-6 flex flex-col justify-between gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bca-blue">Branch Sales Console</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm sm:min-w-80">
                <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Profil</p>
                  <p className="mt-1 font-bold text-slate-900">{customerProfile.scale}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status</p>
                  <p className="mt-1 font-bold text-slate-900">{selectedSummary}</p>
                </div>
              </div>
            </header>

            {activeTab === 'profiling' && (
              <section className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
                <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Discovery</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">Mulai dari konteks bisnis nasabah</h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Profil singkat ini membantu staf cabang mengarahkan pertanyaan probing ke masalah bisnis yang relevan, bukan langsung masuk ke fitur teknis.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-800">Skala Bisnis</span>
                      <select
                        value={customerProfile.scale}
                        onChange={(event) => handleProfileChange('scale', event.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
                      >
                        {scaleOptions.map((scale) => (
                          <option key={scale} value={scale}>
                            {scale}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-slate-800">Sektor Industri</span>
                      <select
                        value={customerProfile.sector}
                        onChange={(event) => handleProfileChange('sector', event.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
                      >
                        {sectorOptions.map((sector) => (
                          <option key={sector} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">
                          Masalah Umum {customerProfile.scale}
                        </p>
                        <h4 className="mt-2 text-xl font-bold text-slate-900">Pilih konteks masalah yang paling terasa</h4>
                      </div>
                      <p className="text-sm font-semibold text-slate-500">
                        {selectedProfileIssues.length} masalah dipilih
                      </p>
                    </div>

                    <div className="mt-4 grid gap-4">
                      {visibleProfileIssues.map((issue) => {
                        const isSelected = selectedProfileIssues.includes(issue.id);
                        const linkedFeatures = issue.featureIds
                          .map((featureId) => featureById.get(featureId))
                          .filter((feature): feature is ProductFeature => Boolean(feature));

                        return (
                          <button
                            key={issue.id}
                            type="button"
                            onClick={() => toggleProfileIssue(issue.id)}
                            className={`rounded-lg border p-4 text-left transition ${
                              isSelected
                                ? 'border-bca-blue bg-blue-50 ring-4 ring-blue-100'
                                : 'border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <span
                                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${
                                  isSelected
                                    ? 'border-bca-blue bg-bca-blue text-white'
                                    : 'border-slate-300 bg-white text-transparent'
                                }`}
                              >
                                OK
                              </span>
                              <span className="min-w-0">
                                <span className="block text-base font-bold text-slate-900">{issue.title}</span>
                                <span className="mt-2 block leading-6 text-slate-600">{issue.description}</span>
                                <span className="mt-3 block rounded-lg bg-white p-3 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100">
                                  Fokus probing: {issue.probingCue}
                                </span>
                                <span className="mt-3 flex flex-wrap gap-2">
                                  {linkedFeatures.map((feature) => (
                                    <Badge key={feature.id} tone={categoryTone[feature.category]}>
                                      {feature.name}
                                    </Badge>
                                  ))}
                                </span>
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={startDiagnosisFromProfile}
                      className="rounded-lg bg-bca-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
                    >
                      Mulai Diagnosa
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('academy')}
                      className="rounded-lg border border-bca-blue px-5 py-3 text-sm font-bold text-bca-blue transition hover:bg-blue-50"
                    >
                      Buka OCEAN Academy
                    </button>
                  </div>
                </div>

                <div className="space-y-5">
                  <Placeholder label="Placeholder: Video Animasi Value Proposition OCEAN by BCA" className="min-h-64" />
                  <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <p className="text-sm font-bold text-slate-900">Arah Solusi Awal</p>
                    {selectedProfileIssueData.length > 0 ? (
                      <div className="mt-4 space-y-4">
                        {selectedProfileIssueData.map((issue) => {
                          const linkedFeatures = issue.featureIds
                            .map((featureId) => featureById.get(featureId))
                            .filter((feature): feature is ProductFeature => Boolean(feature));

                          return (
                            <div key={issue.id} className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                              <p className="font-bold text-slate-900">{issue.title}</p>
                              <p className="mt-2 text-sm leading-6 text-slate-600">{issue.probingCue}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {linkedFeatures.map((feature) => (
                                  <Badge key={feature.id} tone={categoryTone[feature.category]}>
                                    {feature.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="mt-3 leading-7 text-slate-600">
                        Pilih minimal satu masalah umum agar Navigator bisa memberi arahan solusi OCEAN sebelum masuk ke checklist.
                      </p>
                    )}
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <p className="text-sm font-bold text-slate-900">Opening Talk Track</p>
                    <p className="mt-3 leading-7 text-slate-600">
                      "Pak/Bu, sebelum bicara fitur, kita petakan dulu proses yang paling banyak makan waktu atau biaya. Dari sana saya tunjukkan solusi OCEAN yang paling relevan."
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'probing' && (
              <section className="grid gap-6 xl:grid-cols-[0.7fr_1fr]">
                <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Consultation Checklist</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Pertanyaan sederhana untuk membuka cerita nasabah</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Bahasa di tahap ini dibuat awam agar staf cabang bisa bertanya natural. Masalah dari Profiling otomatis diubah menjadi pertanyaan lanjutan yang lebih mudah dipakai saat meeting.
                  </p>

                  <div className="mt-6 rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
                    <p className="text-sm font-bold text-bca-navy">Diagnosis aktif</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {selectedPainPointData.length > 0
                        ? selectedPainPointData.map((painPoint) => painPoint.title).join(', ')
                        : 'Belum ada masalah yang dipilih.'}
                    </p>
                    {selectedProfileIssueData.length > 0 && (
                      <p className="mt-3 text-sm font-semibold leading-6 text-bca-navy">
                        Dari Profiling: {selectedProfileIssueData.map((issue) => issue.title).join(', ')}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab('showcase')}
                    disabled={selectedPainPoints.length === 0}
                    className="mt-6 w-full rounded-lg bg-bca-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                  >
                    Tampilkan Solusi
                  </button>

                  <div className="mt-4 rounded-lg bg-white p-4 ring-1 ring-slate-200">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-900">Bantuan AI untuk staf</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          AI menyusun script probing singkat dari profil, masalah umum, dan checklist yang dipilih.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={generateAiProbingGuide}
                        disabled={isAiProbingLoading}
                        className="rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
                      >
                        {isAiProbingLoading ? 'Menyusun...' : 'Bantu AI Susun Probing'}
                      </button>
                    </div>
                    <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-100">
                      {aiProbingGuide ||
                        'Contoh output AI akan muncul di sini: pembuka percakapan, 3 pertanyaan awam, dan cara mengaitkan jawaban nasabah ke solusi OCEAN.'}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  {probingPainPoints.map((painPoint) => {
                    const isSelected = selectedPainPoints.includes(painPoint.id);
                    const friendlyCopy = friendlyPainPointCopy[painPoint.id] ?? {
                      title: painPoint.title,
                      question: painPoint.question,
                    };
                    const linkedProfileIssues = selectedProfileIssueData.filter((issue) =>
                      issue.painPointIds.includes(painPoint.id),
                    );

                    return (
                      <button
                        key={painPoint.id}
                        type="button"
                        onClick={() => togglePainPoint(painPoint.id)}
                        className={`rounded-lg border bg-white p-5 text-left shadow-sm transition ${
                          isSelected
                            ? 'border-bca-blue ring-4 ring-blue-100'
                            : 'border-slate-200 hover:border-blue-200 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-sm font-bold ${
                              isSelected ? 'border-bca-blue bg-bca-blue text-white' : 'border-slate-300 text-transparent'
                            }`}
                          >
                            OK
                          </span>
                          <span>
                            <span className="block text-lg font-bold text-slate-900">{friendlyCopy.title}</span>
                            <span className="mt-2 block leading-7 text-slate-600">{friendlyCopy.question}</span>
                            {linkedProfileIssues.length > 0 && (
                              <span className="mt-3 block rounded-lg bg-blue-50 p-3 text-sm font-semibold leading-6 text-bca-navy ring-1 ring-blue-100">
                                Nyambung dari Profiling: {linkedProfileIssues.map((issue) => issue.title).join(', ')}
                              </span>
                            )}
                            <span className="mt-3 block text-sm font-semibold text-bca-blue">{painPoint.impact}</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {activeTab === 'showcase' && (
              <section className="space-y-6">
                <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Demo & ROI</p>
                        <h3 className="mt-3 text-2xl font-bold text-slate-900">Solusi OCEAN yang menjawab masalah bisnis</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('probing')}
                        className="rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50"
                      >
                        Ubah Checklist
                      </button>
                    </div>

                    {recommendedFeatures.length === 0 ? (
                      <div className="mt-6 rounded-lg bg-slate-50 p-5 text-slate-600 ring-1 ring-slate-200">
                        Pilih minimal satu pain point di tab Probing untuk menampilkan rekomendasi solusi.
                      </div>
                    ) : (
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {recommendedFeatures.map((feature) => (
                          <article key={feature.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-lg font-bold text-slate-900">{feature.name}</h4>
                              <Badge tone={categoryTone[feature.category]}>{feature.category}</Badge>
                            </div>
                            <p className="mt-3 leading-7 text-slate-600">{feature.businessValue}</p>
                            <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100">
                              Pitch: {feature.pitchingScript}
                            </p>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Kalkulator Efisiensi</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">ROI Estimator</h3>
                    <div className="mt-6 space-y-3">
                      {selectedPainPointData.length === 0 ? (
                        <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200">
                          ROI akan muncul setelah checklist dipilih.
                        </div>
                      ) : (
                        selectedPainPointData.map((painPoint) => (
                          <div key={painPoint.id} className="rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
                            <p className="font-bold text-bca-navy">{painPoint.title}</p>
                            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                              <div className="rounded-lg bg-white p-3 ring-1 ring-blue-100">
                                <p className="font-semibold text-slate-500">Sebelum</p>
                                <p className="mt-1 font-bold text-slate-900">{painPoint.before}</p>
                              </div>
                              <div className="rounded-lg bg-white p-3 ring-1 ring-blue-100">
                                <p className="font-semibold text-slate-500">Sesudah</p>
                                <p className="mt-1 font-bold text-bca-blue">{painPoint.after}</p>
                              </div>
                            </div>
                            <p className="mt-3 text-sm font-semibold text-slate-700">{painPoint.savings}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                  <Placeholder label="Placeholder: Dummy Dashboard UI OCEAN" className="min-h-80" />
                  <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Simulasi Tampilan OCEAN</p>
                    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">OCEAN Console</p>
                          <p className="font-bold text-slate-900">Cashflow & Payment Control</p>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Live</span>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {['Invoice Match', 'Payroll Batch', 'Tax Docs'].map((item, index) => (
                          <div key={item} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                            <p className="text-xs font-semibold text-slate-500">{item}</p>
                            <p className="mt-2 text-2xl font-bold text-bca-blue">{index === 0 ? '98%' : index === 1 ? '24/7' : '1.2k'}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2">
                        {['VA payment identified', 'Invoice approved', 'Payroll authorization ready'].map((activity) => (
                          <div key={activity} className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm ring-1 ring-slate-200">
                            <span className="font-semibold text-slate-700">{activity}</span>
                            <span className="text-bca-blue">Completed</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'voice-analyzer' && (
              <section className="space-y-6">
                <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">AI Mode</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">Analisis Percakapan Nasabah</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    Rekam percakapan antara staf dan nasabah. AI akan mendeteksi kebutuhan nasabah secara real-time dan merekomendasikan produk OCEAN yang paling relevan.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <button
                      type="button"
                      onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                      className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full text-white shadow-lg transition ${
                        isRecording
                          ? 'animate-pulse bg-red-500 shadow-red-200 hover:bg-red-600'
                          : 'bg-bca-blue shadow-blue-200 hover:bg-bca-navy'
                      }`}
                    >
                      <span className="text-3xl">{isRecording ? '⏹' : '🎙'}</span>
                      <span className="mt-1 text-xs font-bold">{isRecording ? 'Stop' : 'Rekam'}</span>
                    </button>

                    <div className="flex-1 space-y-3">
                      <div
                        className={`rounded-lg p-3 text-sm font-semibold ring-1 ${
                          isRecording
                            ? 'bg-red-50 text-red-700 ring-red-200'
                            : 'bg-slate-50 text-slate-600 ring-slate-200'
                        }`}
                      >
                        {isRecording ? '● Sedang merekam percakapan...' : 'Siap merekam — tekan tombol mikrofon untuk mulai'}
                      </div>
                      <p className="text-xs text-slate-500">
                        Bahasa: Indonesia (id-ID) · Didukung Chrome & Edge · Mikrofon harus diizinkan browser
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Transkrip Real-Time</p>
                      <h4 className="mt-2 text-lg font-bold text-slate-900">Isi Percakapan</h4>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      {(voiceTranscript || voiceAnalysis) && (
                        <button
                          type="button"
                          onClick={() => { setVoiceTranscript(''); setVoiceAnalysis(''); setVoiceInterim(''); }}
                          className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                        >
                          Hapus Semua
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => { void analyzeVoice(); }}
                        disabled={!voiceTranscript.trim() || isVoiceAnalyzing}
                        className="rounded-lg bg-bca-orange px-4 py-2 text-sm font-bold text-white shadow-md shadow-orange-200 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                      >
                        {isVoiceAnalyzing ? 'Menganalisis...' : 'Analisis AI'}
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={voiceTranscript + (voiceInterim ? ` ${voiceInterim}` : '')}
                    onChange={(e) => setVoiceTranscript(e.target.value)}
                    rows={6}
                    placeholder="Transkrip percakapan akan muncul di sini saat merekam. Anda juga bisa mengetik atau mengedit teks secara manual sebelum dianalisis."
                    className="mt-4 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {voiceAnalysis && (
                  <div ref={voiceResultRef} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Hasil Analisis AI</p>
                        <h4 className="mt-2 text-lg font-bold text-slate-900">Rekomendasi Produk OCEAN</h4>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Selesai</span>
                    </div>
                    <div className="mt-4 whitespace-pre-line rounded-lg bg-blue-50 p-5 text-sm leading-7 text-slate-700 ring-1 ring-blue-100">
                      {voiceAnalysis}
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsCopilotOpen(true)}
                      className="mt-4 rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50"
                    >
                      Tanya lebih lanjut ke Co-Pilot
                    </button>
                  </div>
                )}
              </section>
            )}

            {activeTab === 'academy' && (
              <section className="space-y-6">
                <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">Microlearning Modul</p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-900">
                        {selectedAcademyCategory ? selectedAcademyCategory : 'Pilih kategori pembelajaran'}
                      </h3>
                    </div>
                    {selectedAcademyCategory && (
                      <button
                        type="button"
                        onClick={() => setSelectedAcademyCategory(null)}
                        className="rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50"
                      >
                        Kembali ke Kategori
                      </button>
                    )}
                  </div>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                    {selectedAcademyCategory
                      ? categoryDescriptions[selectedAcademyCategory]
                      : 'Kategori membantu staf cabang belajar bertahap: pilih area produk dulu, lalu buka modul yang relevan.'}
                  </p>
                </div>

                {!selectedAcademyCategory ? (
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {academyCategorySummaries.map(({ category, modules, featuredNames }) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedAcademyCategory(category)}
                        className="rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-xl font-bold text-slate-900">{category}</h4>
                          <Badge tone={categoryTone[category]}>{modules.length} modul</Badge>
                        </div>
                        <p className="mt-3 leading-7 text-slate-600">{categoryDescriptions[category]}</p>
                        <div className="mt-5 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-100">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Contoh modul</p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                            {featuredNames.join(', ')}
                            {modules.length > featuredNames.length ? ', dan lainnya' : ''}
                          </p>
                        </div>
                        <p className="mt-4 text-sm font-bold text-bca-blue">Lihat Modul Kategori</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
                      <p className="text-sm font-bold text-bca-navy">
                        {selectedAcademyModules.length} modul dalam kategori {selectedAcademyCategory}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        Pilih satu modul untuk membuka penjelasan awam, target klien, dan pitching script.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {selectedAcademyModules.map((feature) => (
                        <button
                          key={feature.id}
                          type="button"
                          onClick={() => { setSelectedAcademyModule(feature); setTutorMessages([]); setTutorInput(''); }}
                          className="rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-lg font-bold text-slate-900">{feature.name}</h4>
                            <Badge tone={categoryTone[feature.category]}>{feature.category}</Badge>
                          </div>
                          <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{feature.plainExplanation}</p>
                          <p className="mt-4 text-sm font-bold text-bca-blue">Buka Modul</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={() => setIsCopilotOpen((current) => !current)}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-bca-orange px-5 py-4 text-sm font-bold text-white shadow-2xl shadow-orange-200 transition hover:bg-orange-600"
      >
        OCEAN Co-Pilot
      </button>

      {isCopilotOpen && (
        <section className="fixed bottom-24 right-5 z-40 w-[calc(100vw-2.5rem)] max-w-md overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-slate-200">
          <div className="bg-bca-blue p-4 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">AI Internal SOP</p>
                <h3 className="mt-1 text-lg font-bold">OCEAN Co-Pilot</h3>
              </div>
              <button type="button" onClick={() => setIsCopilotOpen(false)} className="rounded-md bg-white/10 px-3 py-1 text-sm font-bold">
                Tutup
              </button>
            </div>
          </div>
          <div className="max-h-[56vh] space-y-4 overflow-y-auto p-4">
            {copilotMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-lg p-3 text-sm leading-6 text-slate-700 ${
                  message.role === 'staff' ? 'ml-auto bg-blue-50' : 'bg-slate-100'
                }`}
              >
                {message.text}
              </div>
            ))}
            {isCopilotLoading && (
              <div className="max-w-[88%] rounded-lg bg-slate-100 p-3 text-sm font-semibold leading-6 text-slate-500">
                Co-Pilot sedang menyusun jawaban...
              </div>
            )}
          </div>
          <form onSubmit={submitCopilotQuestion} className="border-t border-slate-200 p-4">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Tanya di luar modul atau minta bahasa pitching
              </span>
              <textarea
                value={copilotInput}
                onChange={(event) => setCopilotInput(event.target.value)}
                rows={3}
                placeholder="Contoh: Nasabah tanya keamanan data payroll, jawabnya gimana?"
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <button
              type="submit"
              disabled={isCopilotLoading || copilotInput.trim().length === 0}
              className="mt-3 w-full rounded-lg bg-bca-orange px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Kirim ke Co-Pilot
            </button>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Jika topik menyentuh pricing, legal, integrasi teknis detail, atau janji SLA, Co-Pilot akan menyarankan eskalasi ke HO.
            </p>
          </form>
        </section>
      )}

      {selectedAcademyModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <section className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <Badge tone={categoryTone[selectedAcademyModule.category]}>{selectedAcademyModule.category}</Badge>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{selectedAcademyModule.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAcademyModule(null)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Tutup
              </button>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-3">
              <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200 sm:col-span-3">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Penjelasan Awam</p>
                <p className="mt-2 leading-7 text-slate-700">{selectedAcademyModule.plainExplanation}</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
                <p className="text-sm font-bold uppercase tracking-wide text-bca-blue">Target Klien</p>
                <p className="mt-2 leading-7 text-slate-700">{selectedAcademyModule.targetClient}</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 ring-1 ring-orange-100 sm:col-span-2">
                <p className="text-sm font-bold uppercase tracking-wide text-orange-700">Pitching Script</p>
                <p className="mt-2 leading-7 text-slate-700">"{selectedAcademyModule.pitchingScript}"</p>
              </div>
              <div className="sm:col-span-3">
                <Placeholder label={`Placeholder: Video Animasi Fitur ${selectedAcademyModule.name}`} className="min-h-56" />
              </div>
              <p className="text-sm font-semibold text-slate-500 sm:col-span-3">Sumber dokumen: {selectedAcademyModule.source}</p>

              <div className="sm:col-span-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue">
                    AI Tutor — {selectedAcademyModule.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Tanya AI tentang cara menjual, menjelaskan, atau membedakan produk ini.
                  </p>

                  {tutorMessages.length > 0 && (
                    <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                      {tutorMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`max-w-[90%] rounded-lg p-3 text-sm leading-6 text-slate-700 ${
                            msg.role === 'staff'
                              ? 'ml-auto bg-blue-100 text-right'
                              : 'bg-white ring-1 ring-slate-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ))}
                      {isTutorLoading && (
                        <div className="max-w-[90%] rounded-lg bg-white p-3 text-sm text-slate-400 ring-1 ring-slate-200">
                          AI sedang menyusun jawaban...
                        </div>
                      )}
                    </div>
                  )}

                  <form onSubmit={submitTutorQuestion} className="mt-4 flex gap-2">
                    <input
                      value={tutorInput}
                      onChange={(e) => setTutorInput(e.target.value)}
                      placeholder={`Contoh: Gimana cara jelasin ${selectedAcademyModule.name} ke nasabah UMKM?`}
                      className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
                    />
                    <button
                      type="submit"
                      disabled={isTutorLoading || !tutorInput.trim()}
                      className="rounded-lg bg-bca-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-bca-navy disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      Tanya
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
