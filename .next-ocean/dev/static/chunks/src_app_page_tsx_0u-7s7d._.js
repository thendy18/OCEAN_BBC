(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OceanNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const tabs = [
    {
        id: 'profiling',
        label: 'Profiling',
        eyebrow: 'Discovery'
    },
    {
        id: 'probing',
        label: 'Probing',
        eyebrow: 'Checklist'
    },
    {
        id: 'showcase',
        label: 'Value Showcase',
        eyebrow: 'Demo & ROI'
    },
    {
        id: 'academy',
        label: 'OCEAN Academy',
        eyebrow: 'Learning'
    }
];
const scaleOptions = [
    'UMKM',
    'Menengah',
    'Korporasi'
];
const sectorOptions = [
    'Perdagangan',
    'Manufaktur',
    'Distribusi',
    'Jasa Profesional',
    'Retail',
    'Logistik',
    'Properti',
    'Umum'
];
const productFeatures = [
    {
        id: 'giro',
        name: 'Giro BCA',
        category: 'Rekening',
        plainExplanation: 'Rekening bisnis untuk transaksi finansial aktif dengan detail mutasi, e-Statement, dan fleksibilitas setor tarik antar cabang.',
        businessValue: 'Memberi kontrol transaksi harian yang lebih rapi, lengkap, dan mudah diaudit oleh finance.',
        targetClient: 'Bisnis dengan volume transaksi harian tinggi dan kebutuhan rekening operasional.',
        pitchingScript: 'Untuk bisnis dengan transaksi aktif, Giro BCA membantu tim finance melihat detail transaksi lebih lengkap dan menjaga operasional tetap lancar.',
        source: 'Manual Produk Rekening BCA - Giro'
    },
    {
        id: 'tahapan-gold',
        name: 'Tahapan Gold',
        category: 'Rekening',
        plainExplanation: 'Tabungan bisnis dengan mutasi lengkap, transaksi tanpa buku, dan notifikasi SMS atau email sesuai kebutuhan.',
        businessValue: 'Membantu pemilik usaha memantau arus kas selama 24/7 tanpa bergantung pada proses manual.',
        targetClient: 'UMKM dan bisnis menengah yang butuh rekening bisnis praktis.',
        pitchingScript: 'Tahapan Gold cocok sebagai rekening bisnis yang mudah dipantau, terutama saat pemilik usaha ingin melihat detail pembayaran masuk dan keluar.',
        source: 'Manual Produk Rekening BCA - Tahapan Gold'
    },
    {
        id: 'deposito',
        name: 'Deposito dan e-Deposito BCA',
        category: 'Rekening',
        plainExplanation: 'Produk deposito berjangka dalam Rupiah dan valuta asing untuk menempatkan dana idle perusahaan.',
        businessValue: 'Membantu perusahaan mengoptimalkan dana menganggur dengan pilihan tenor dan bunga kompetitif.',
        targetClient: 'Perusahaan dengan surplus kas periodik atau dana cadangan.',
        pitchingScript: 'Jika ada dana yang belum dipakai operasional, Deposito BCA bisa membantu kas bekerja lebih produktif tanpa mengganggu likuiditas inti.',
        source: 'Manual Produk Rekening BCA - Deposito'
    },
    {
        id: 'mybca-bisnis',
        name: 'myBCA Bisnis',
        category: 'Transaksi',
        plainExplanation: 'Internet banking bisnis untuk transaksi, otorisasi, cek status, dan manajemen kas dari mobile maupun desktop.',
        businessValue: 'Mempercepat transaksi dan approval, mengurangi follow-up manual, dan menjaga kontrol otorisasi.',
        targetClient: 'Semua skala bisnis yang butuh cash management dan approval berlapis.',
        pitchingScript: 'myBCA Bisnis membuat finance bisa transaksi, approve, dan cek status dalam satu channel sehingga proses lebih cepat dan tetap terkontrol.',
        source: 'Manual Produk Transaksi BCA - myBCA Bisnis'
    },
    {
        id: 'virtual-account',
        name: 'Virtual Account BCA',
        category: 'Transaksi',
        plainExplanation: 'Nomor rekening virtual untuk mengidentifikasi dana masuk dari pelanggan atau partner secara otomatis.',
        businessValue: 'Mengurangi rekonsiliasi manual, mempercepat pencocokan pembayaran, dan menekan human error.',
        targetClient: 'Merchant, distributor, sekolah, koperasi, dan bisnis dengan banyak pembayaran masuk.',
        pitchingScript: 'Virtual Account membantu setiap pembayaran langsung terbaca identitasnya, jadi tim finance tidak perlu cocokkan mutasi satu per satu.',
        source: 'Manual Produk Transaksi BCA - Virtual Account'
    },
    {
        id: 'edc',
        name: 'EDC BCA',
        category: 'Transaksi',
        plainExplanation: 'Perangkat pembayaran elektronik BCA untuk menerima berbagai metode pembayaran di lokasi usaha.',
        businessValue: 'Meningkatkan opsi pembayaran pelanggan dan mempercepat settlement penjualan.',
        targetClient: 'Retail, restoran, klinik, dealer, dan outlet fisik.',
        pitchingScript: 'EDC BCA membantu outlet menerima pembayaran lebih fleksibel sehingga pelanggan tidak tertahan oleh metode pembayaran.',
        source: 'Manual Produk Transaksi BCA - EDC'
    },
    {
        id: 'qris',
        name: 'QRIS BCA',
        category: 'Transaksi',
        plainExplanation: 'Pembayaran berbasis QR untuk menerima transaksi digital dari pelanggan dengan proses yang ringkas.',
        businessValue: 'Mempercepat pembayaran retail dan mengurangi ketergantungan pada uang tunai.',
        targetClient: 'UMKM, retail, event, dan bisnis dengan pembayaran nominal kecil hingga menengah.',
        pitchingScript: 'QRIS membuat pelanggan bisa bayar cepat dari aplikasi pembayaran mereka, sementara merchant mendapat proses penerimaan yang lebih praktis.',
        source: 'Manual Produk Transaksi BCA - QRIS'
    },
    {
        id: 'api-bca',
        name: 'API BCA Individu Bisnis',
        category: 'Transaksi',
        plainExplanation: 'Layanan API untuk cek saldo dan mutasi langsung dari platform bisnis nasabah, dibantu IT Gateway.',
        businessValue: 'Membawa data perbankan ke sistem internal sehingga monitoring cashflow lebih real-time.',
        targetClient: 'Bisnis digital dan individu bisnis yang sudah punya sistem internal.',
        pitchingScript: 'API BCA membantu data saldo dan mutasi muncul langsung di platform bisnis, jadi keputusan kas bisa lebih cepat.',
        source: 'Manual Produk Transaksi BCA - API BCA'
    },
    {
        id: 'kredit-usaha',
        name: 'Kredit Usaha BCA',
        category: 'Pinjaman',
        plainExplanation: 'Kredit modal kerja untuk pengembangan usaha, termasuk Kredit Lokal, Installment Loan, Time Loan, dan Kredit Ekspor.',
        businessValue: 'Memberi fleksibilitas pembiayaan untuk kebutuhan modal kerja, proyek, musiman, dan ekspor.',
        targetClient: 'Bisnis yang sedang ekspansi, menerima proyek besar, atau butuh modal kerja.',
        pitchingScript: 'Saat order bertumbuh tetapi modal kerja tertahan, Kredit Usaha BCA bisa menyesuaikan pola kebutuhan bisnis.',
        source: 'Manual Produk Pinjaman BCA - Kredit Usaha'
    },
    {
        id: 'kredit-investasi',
        name: 'Kredit Investasi',
        category: 'Pinjaman',
        plainExplanation: 'Pembiayaan pembelian, pembangunan, dan peremajaan aktiva tetap seperti gudang, ruko, mesin, atau kendaraan.',
        businessValue: 'Mendukung ekspansi aset produktif tanpa membebani kas operasional sekaligus.',
        targetClient: 'Perusahaan yang ingin membeli mesin, kendaraan niaga, gudang, atau kantor.',
        pitchingScript: 'Kredit Investasi membantu ekspansi aset berjalan bertahap, sementara kas operasional tetap bisa dijaga.',
        source: 'Manual Produk Pinjaman BCA - Kredit Investasi'
    },
    {
        id: 'kredit-multiguna',
        name: 'Kredit Multiguna Usaha',
        category: 'Pinjaman',
        plainExplanation: 'Pembiayaan untuk modal kerja, aktiva tetap, biaya usaha, kewajiban usaha, dan kebutuhan lain terkait bisnis.',
        businessValue: 'Memberi ruang pembiayaan yang lebih luas untuk kebutuhan usaha yang beragam.',
        targetClient: 'Pemilik usaha dengan beberapa kebutuhan pembiayaan sekaligus.',
        pitchingScript: 'Jika kebutuhan usahanya tidak hanya satu jenis, Kredit Multiguna Usaha memberi fleksibilitas pembiayaan dalam satu solusi.',
        source: 'Manual Produk Pinjaman BCA - Kredit Multiguna Usaha'
    },
    {
        id: 'visa-corporate',
        name: 'BCA Visa Corporate',
        category: 'Pinjaman',
        plainExplanation: 'Kartu kredit perusahaan untuk transaksi bisnis, reporting, pembayaran tagihan, limit fleksibel, dan benefit perjalanan.',
        businessValue: 'Memudahkan kontrol expense karyawan, perjalanan dinas, dan reporting transaksi perusahaan.',
        targetClient: 'Perusahaan menengah hingga besar dengan banyak karyawan mobile atau perjalanan dinas.',
        pitchingScript: 'BCA Visa Corporate membantu perusahaan mengelola pengeluaran karyawan dengan limit, reporting, dan pembayaran yang lebih terpusat.',
        source: 'Manual Produk Pinjaman BCA - Visa Corporate'
    },
    {
        id: 'kkb',
        name: 'KKB BCA',
        category: 'Pinjaman',
        plainExplanation: 'Solusi kredit kendaraan, termasuk Virtual Mall, Car Ownership Program, dan Commercial Car.',
        businessValue: 'Mendukung kebutuhan kendaraan operasional dan program kepemilikan mobil karyawan.',
        targetClient: 'Perusahaan dengan kebutuhan kendaraan niaga atau benefit kendaraan karyawan.',
        pitchingScript: 'KKB BCA membantu perusahaan memenuhi kebutuhan kendaraan operasional dengan proses dan skema pembiayaan yang lebih efisien.',
        source: 'Manual Produk Pinjaman BCA - KKB'
    },
    {
        id: 'reksa-dana',
        name: 'Reksa Dana BCA',
        category: 'Investasi',
        plainExplanation: 'Wadah investasi yang dikelola Manajer Investasi dan disimpan oleh Bank Kustodian.',
        businessValue: 'Menjadi alternatif pengelolaan dana idle sesuai profil risiko dan horizon investasi.',
        targetClient: 'Nasabah dengan dana cadangan dan kebutuhan diversifikasi.',
        pitchingScript: 'Reksa Dana bisa menjadi opsi diversifikasi saat perusahaan ingin mengelola dana idle dengan instrumen yang lebih beragam.',
        source: 'Manual Produk Investasi BCA - Reksa Dana'
    },
    {
        id: 'obligasi',
        name: 'Obligasi',
        category: 'Investasi',
        plainExplanation: 'Surat utang negara dan surat berharga syariah negara dalam Rupiah maupun valuta asing.',
        businessValue: 'Membantu diversifikasi treasury dengan instrumen pendapatan tetap.',
        targetClient: 'Perusahaan atau pemilik usaha dengan kebutuhan investasi lebih terstruktur.',
        pitchingScript: 'Obligasi bisa dipertimbangkan untuk dana yang memiliki horizon jelas dan membutuhkan instrumen pendapatan tetap.',
        source: 'Manual Produk Investasi BCA - Obligasi'
    },
    {
        id: 'asuransi-property',
        name: 'Asuransi Property All Risks',
        category: 'Asuransi',
        plainExplanation: 'Proteksi properti terhadap kebakaran, banjir, kerusakan akibat air, kerusuhan, sabotase, gempa, dan risiko lain sesuai perluasan.',
        businessValue: 'Melindungi aset bisnis penting dari risiko kerugian besar yang mengganggu operasional.',
        targetClient: 'Pemilik gudang, kantor, pabrik, ruko, dan aset properti komersial.',
        pitchingScript: 'Asuransi Property All Risks membantu menjaga kontinuitas bisnis jika aset utama terdampak risiko besar.',
        source: 'Manual Produk Asuransi BCA - Property All Risks'
    },
    {
        id: 'asuransi-kendaraan',
        name: 'Asuransi Kendaraan Bermotor',
        category: 'Asuransi',
        plainExplanation: 'Proteksi kendaraan comprehensive atau total loss only dengan opsi perluasan risiko.',
        businessValue: 'Mengurangi risiko finansial saat kendaraan operasional mengalami kerusakan atau kehilangan.',
        targetClient: 'Bisnis dengan armada penjualan, distribusi, atau kendaraan operasional.',
        pitchingScript: 'Saat kendaraan menjadi bagian dari operasional, asuransi membantu menjaga bisnis tetap berjalan ketika terjadi risiko di jalan.',
        source: 'Manual Produk Asuransi BCA - Kendaraan Bermotor'
    },
    {
        id: 'asuransi-kebakaran',
        name: 'Asuransi Kebakaran',
        category: 'Asuransi',
        plainExplanation: 'Proteksi aset terhadap kebakaran, petir, ledakan, asap, dan perluasan seperti banjir, kerusuhan, serta gempa.',
        businessValue: 'Memberi perlindungan dasar untuk aset usaha yang rentan terhadap risiko kebakaran dan bencana.',
        targetClient: 'Pemilik toko, gudang, kantor, ruko, dan pabrik.',
        pitchingScript: 'Asuransi Kebakaran adalah proteksi dasar yang membantu perusahaan mengurangi dampak finansial dari risiko aset.',
        source: 'Manual Produk Asuransi BCA - Kebakaran'
    },
    {
        id: 'stream-b2b',
        name: 'Stream B2B',
        category: 'Solusi Digital',
        plainExplanation: 'Platform buyer-supplier untuk pencarian produk, RFQ instan, purchase order, pengiriman, invoice, pembayaran, dan rekonsiliasi.',
        businessValue: 'Mempercepat procurement, mengurangi error manual, dan meningkatkan kontrol supply chain.',
        targetClient: 'Perusahaan dengan jaringan buyer-supplier, procurement rutin, dan banyak invoice.',
        pitchingScript: 'Stream B2B membantu proses pengadaan dari RFQ sampai pembayaran berada dalam satu ekosistem yang lebih transparan.',
        source: 'Manual Solusi Digital BCA - Stream B2B'
    },
    {
        id: 'catapa',
        name: 'CATAPA',
        category: 'Solusi Digital',
        plainExplanation: 'Solusi payroll, PPh 21, BPJS, transfer gaji 24/7, otorisasi transaksi, slip gaji, dan laporan siap pakai.',
        businessValue: 'Mengurangi proses manual HR dan finance, menekan human error, dan mempercepat payroll.',
        targetClient: 'Perusahaan dengan payroll rutin, banyak karyawan, dan kebutuhan kepatuhan pajak karyawan.',
        pitchingScript: 'CATAPA membuat payroll, pajak, BPJS, dan file transfer gaji jauh lebih otomatis sehingga HR dan finance bisa fokus ke kontrol.',
        source: 'Manual Solusi Digital BCA - CATAPA'
    },
    {
        id: 'op-business',
        name: 'OP Business Banking',
        category: 'Solusi Digital',
        plainExplanation: 'Automasi faktur, pembayaran, pajak, embedded finance, workflow, integrasi dua arah, dan konektor ERP seperti SAP atau Oracle.',
        businessValue: 'Meningkatkan produktivitas finance, traceability, dan optimasi modal kerja lewat automasi end-to-end.',
        targetClient: 'Perusahaan menengah dan korporasi dengan ERP, invoice tinggi, dan proses approval kompleks.',
        pitchingScript: 'OP Business Banking menghubungkan workflow finance dengan sistem BCA, sehingga invoice, pembayaran, dan rekonsiliasi lebih otomatis.',
        source: 'Manual Solusi Digital BCA - OP Business Banking'
    },
    {
        id: 'pajakku',
        name: 'Pajakku',
        category: 'Solusi Digital',
        plainExplanation: 'Platform pajak untuk e-PPT, e-Faktur, tax document center, e-KS, e-Meterai, dan tax guide.',
        businessValue: 'Membantu pengelolaan pajak massal menjadi lebih aman, akurat, real-time, dan mudah dimonitor.',
        targetClient: 'Perusahaan dengan banyak bukti potong, faktur pajak, PPN, atau validasi wajib pajak.',
        pitchingScript: 'Pajakku membantu tim tax mengelola hitung, bayar, lapor, dan dokumen pajak dalam satu proses yang lebih terintegrasi.',
        source: 'Manual Solusi Digital BCA - Pajakku'
    },
    {
        id: 'program-promosi',
        name: 'Program Promosi BCA',
        category: 'Solusi Digital',
        plainExplanation: 'Sarana promosi merchant BCA melalui media dan channel BCA untuk menjangkau pelanggan potensial.',
        businessValue: 'Meningkatkan brand awareness dan peluang penjualan merchant.',
        targetClient: 'Merchant yang ingin menaikkan awareness dan traffic transaksi.',
        pitchingScript: 'Program Promosi BCA membantu merchant muncul di channel BCA sehingga peluang menjangkau pelanggan baru lebih besar.',
        source: 'Manual Solusi Digital BCA - Program Promosi'
    }
];
const painPoints = [
    {
        id: 'reconciliation',
        title: 'Rekonsiliasi manual lama',
        question: 'Apakah tim finance masih mencocokkan mutasi dan invoice secara manual?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Perdagangan',
            'Distribusi',
            'Retail',
            'Jasa Profesional',
            'Umum'
        ],
        featureIds: [
            'virtual-account',
            'mybca-bisnis',
            'op-business'
        ],
        impact: 'Hemat waktu rekonsiliasi dari 4 hari menjadi 5 menit untuk pembayaran teridentifikasi.',
        before: '4 hari',
        after: '5 menit',
        savings: 'Waktu closing finance turun drastis.'
    },
    {
        id: 'payroll',
        title: 'Pusing transfer gaji',
        question: 'Apakah payroll, PPh 21, BPJS, dan file transfer masih tersebar di banyak file?',
        scale: [
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Manufaktur',
            'Jasa Profesional',
            'Retail',
            'Logistik',
            'Umum'
        ],
        featureIds: [
            'catapa',
            'mybca-bisnis'
        ],
        impact: 'Payroll bulanan berubah dari pekerjaan lintas file menjadi workflow terkontrol 24/7.',
        before: '2-3 hari',
        after: '1 sesi approval',
        savings: 'Human error payroll dan pajak karyawan berkurang.'
    },
    {
        id: 'tax',
        title: 'Pajak dan e-Faktur berat',
        question: 'Apakah tim tax sulit memonitor e-Bupot, e-Faktur, dan dokumen pajak dalam jumlah besar?',
        scale: [
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Manufaktur',
            'Distribusi',
            'Jasa Profesional',
            'Properti',
            'Umum'
        ],
        featureIds: [
            'pajakku'
        ],
        impact: 'Monitoring pajak massal menjadi lebih terpusat, real-time, dan mudah diaudit.',
        before: 'Banyak portal dan spreadsheet',
        after: 'Satu dashboard pajak',
        savings: 'Risiko telat lapor dan salah dokumen menurun.'
    },
    {
        id: 'procurement',
        title: 'Procurement dan invoice supplier lambat',
        question: 'Apakah RFQ, PO, pengiriman, invoice, dan pembayaran supplier belum terhubung?',
        scale: [
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Manufaktur',
            'Distribusi',
            'Logistik',
            'Retail',
            'Umum'
        ],
        featureIds: [
            'stream-b2b',
            'op-business',
            'mybca-bisnis'
        ],
        impact: 'Pengadaan dari RFQ sampai pembayaran menjadi lebih transparan dan traceable.',
        before: 'Approval dan follow-up manual',
        after: 'Workflow buyer-supplier terintegrasi',
        savings: 'Biaya koordinasi dan keterlambatan supplier turun.'
    },
    {
        id: 'payment-acceptance',
        title: 'Payment acceptance belum rapi',
        question: 'Apakah outlet atau channel penjualan butuh metode pembayaran yang lebih lengkap?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Retail',
            'Perdagangan',
            'Jasa Profesional',
            'Umum'
        ],
        featureIds: [
            'edc',
            'qris',
            'virtual-account'
        ],
        impact: 'Pelanggan bisa membayar lewat channel yang nyaman, sementara penerimaan lebih mudah dilacak.',
        before: 'Pembayaran terbatas dan rawan salah catat',
        after: 'EDC, QRIS, dan VA teridentifikasi',
        savings: 'Potensi transaksi hilang berkurang.'
    },
    {
        id: 'cash-management',
        title: 'Cash management dan transaksi aktif',
        question: 'Apakah perusahaan butuh kontrol kas, otorisasi, dan mutasi yang lebih lengkap?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Perdagangan',
            'Manufaktur',
            'Distribusi',
            'Logistik',
            'Properti',
            'Umum'
        ],
        featureIds: [
            'giro',
            'tahapan-gold',
            'mybca-bisnis'
        ],
        impact: 'Transaksi harian lebih terkontrol dengan data mutasi lengkap dan approval digital.',
        before: 'Mutasi tersebar dan approval lambat',
        after: 'Cash management terpusat',
        savings: 'Kontrol kas dan audit trail meningkat.'
    },
    {
        id: 'working-capital',
        title: 'Butuh modal kerja atau ekspansi',
        question: 'Apakah pertumbuhan order, aset, atau proyek membuat kas operasional tertekan?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Perdagangan',
            'Manufaktur',
            'Distribusi',
            'Logistik',
            'Properti',
            'Umum'
        ],
        featureIds: [
            'kredit-usaha',
            'kredit-investasi',
            'kredit-multiguna'
        ],
        impact: 'Kebutuhan modal kerja dan ekspansi bisa disesuaikan dengan pola bisnis.',
        before: 'Ekspansi tertahan kas',
        after: 'Pembiayaan sesuai tujuan',
        savings: 'Pertumbuhan tidak harus menunggu kas terkumpul penuh.'
    },
    {
        id: 'employee-expense',
        title: 'Expense karyawan dan perjalanan sulit dikontrol',
        question: 'Apakah reimbursement, kartu perjalanan, dan limit transaksi karyawan sulit dipantau?',
        scale: [
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Jasa Profesional',
            'Distribusi',
            'Logistik',
            'Manufaktur',
            'Umum'
        ],
        featureIds: [
            'visa-corporate'
        ],
        impact: 'Expense karyawan menjadi lebih terpusat dengan limit, reporting, dan pembayaran tagihan.',
        before: 'Reimbursement manual',
        after: 'Kartu korporat dengan kontrol limit',
        savings: 'Kontrol biaya perjalanan dan operasional meningkat.'
    },
    {
        id: 'idle-cash',
        title: 'Dana idle belum produktif',
        question: 'Apakah perusahaan punya dana menganggur yang belum ditempatkan secara optimal?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Perdagangan',
            'Manufaktur',
            'Jasa Profesional',
            'Properti',
            'Umum'
        ],
        featureIds: [
            'deposito',
            'reksa-dana',
            'obligasi'
        ],
        impact: 'Dana idle bisa diarahkan ke instrumen yang lebih sesuai dengan horizon dan profil risiko.',
        before: 'Dana mengendap pasif',
        after: 'Treasury lebih produktif',
        savings: 'Potensi return dana cadangan meningkat.'
    },
    {
        id: 'asset-risk',
        title: 'Risiko aset bisnis belum terlindungi',
        question: 'Apakah properti, kendaraan, atau aset operasional menjadi titik risiko besar bisnis?',
        scale: [
            'UMKM',
            'Menengah',
            'Korporasi'
        ],
        sectors: [
            'Manufaktur',
            'Logistik',
            'Properti',
            'Retail',
            'Umum'
        ],
        featureIds: [
            'asuransi-property',
            'asuransi-kendaraan',
            'asuransi-kebakaran'
        ],
        impact: 'Aset penting lebih terlindungi dari risiko yang bisa menghentikan operasional.',
        before: 'Risiko aset ditanggung sendiri',
        after: 'Proteksi sesuai aset',
        savings: 'Potensi kerugian besar lebih terkendali.'
    }
];
const commonBusinessIssues = [
    {
        id: 'umkm-capital',
        scale: 'UMKM',
        title: 'Minimnya Modal Usaha',
        description: 'Akses ke perbankan terbatas dan usaha masih bergantung pada modal sendiri.',
        probingCue: 'Gali kebutuhan modal kerja, pembelian stok, dan rencana ekspansi outlet atau produksi.',
        featureIds: [
            'kredit-usaha',
            'kredit-multiguna',
            'tahapan-gold'
        ],
        painPointIds: [
            'working-capital',
            'cash-management'
        ]
    },
    {
        id: 'umkm-digital-marketing',
        scale: 'UMKM',
        title: 'Pemasaran Digital Terbatas',
        description: 'Belum memaksimalkan online marketing dan sulit bersaing di kanal digital.',
        probingCue: 'Arahkan diskusi ke kemudahan pembayaran, promosi merchant, dan pengalaman pelanggan.',
        featureIds: [
            'program-promosi',
            'qris',
            'edc',
            'virtual-account'
        ],
        painPointIds: [
            'payment-acceptance'
        ]
    },
    {
        id: 'umkm-finance',
        scale: 'UMKM',
        title: 'Manajemen Keuangan Rendah',
        description: 'Pembukuan masih manual dan keuangan pribadi bercampur dengan usaha.',
        probingCue: 'Validasi pemisahan rekening, kebutuhan mutasi lengkap, dan rekonsiliasi pembayaran masuk.',
        featureIds: [
            'tahapan-gold',
            'giro',
            'mybca-bisnis',
            'virtual-account'
        ],
        painPointIds: [
            'cash-management',
            'reconciliation'
        ]
    },
    {
        id: 'umkm-people-innovation',
        scale: 'UMKM',
        title: 'SDM dan Inovasi Rendah',
        description: 'Tenaga kerja ahli terbatas dan inovasi produk berjalan lambat.',
        probingCue: 'Bawa ke efisiensi operasional sederhana agar pemilik punya waktu untuk pengembangan bisnis.',
        featureIds: [
            'mybca-bisnis',
            'catapa',
            'api-bca'
        ],
        painPointIds: [
            'cash-management'
        ]
    },
    {
        id: 'umkm-regulation',
        scale: 'UMKM',
        title: 'Regulasi dan Perizinan',
        description: 'Legalitas usaha, dokumen pajak, dan administrasi kepatuhan belum tertata.',
        probingCue: 'Gali apakah pajak, dokumen transaksi, dan bukti pembayaran masih dicari manual.',
        featureIds: [
            'pajakku',
            'mybca-bisnis'
        ],
        painPointIds: [
            'tax',
            'cash-management'
        ]
    },
    {
        id: 'menengah-capital',
        scale: 'Menengah',
        title: 'Keterbatasan Modal untuk Ekspansi',
        description: 'Sulit mendapatkan pendanaan eksternal untuk meningkatkan kapasitas produksi atau ekspansi pasar.',
        probingCue: 'Gali rencana ekspansi, kebutuhan aset, modal kerja, dan pola musiman proyek.',
        featureIds: [
            'kredit-usaha',
            'kredit-investasi',
            'kredit-multiguna'
        ],
        painPointIds: [
            'working-capital'
        ]
    },
    {
        id: 'menengah-cashflow',
        scale: 'Menengah',
        title: 'Arus Kas Tidak Terkelola',
        description: 'Cash flow buruk dan uang pribadi masih bercampur dengan uang perusahaan.',
        probingCue: 'Tekankan pemisahan rekening, kontrol otorisasi, mutasi lengkap, dan dashboard transaksi.',
        featureIds: [
            'giro',
            'tahapan-gold',
            'mybca-bisnis'
        ],
        painPointIds: [
            'cash-management'
        ]
    },
    {
        id: 'menengah-bookkeeping',
        scale: 'Menengah',
        title: 'Pembukuan Belum Profesional',
        description: 'Masih memakai pencatatan manual atau sistem akuntansi yang belum mumpuni.',
        probingCue: 'Gali rekonsiliasi, invoice, dan kebutuhan integrasi data transaksi ke sistem finance.',
        featureIds: [
            'virtual-account',
            'op-business',
            'api-bca',
            'mybca-bisnis'
        ],
        painPointIds: [
            'reconciliation',
            'cash-management'
        ]
    },
    {
        id: 'menengah-talent',
        scale: 'Menengah',
        title: 'Sulit Mendapatkan Karyawan Berkualitas',
        description: 'Rekrutmen, pelatihan, dan retensi talenta sulit karena kalah benefit dengan perusahaan besar.',
        probingCue: 'Hubungkan ke payroll rapi, benefit karyawan, dan kontrol expense yang lebih profesional.',
        featureIds: [
            'catapa',
            'kkb',
            'visa-corporate'
        ],
        painPointIds: [
            'payroll',
            'employee-expense'
        ]
    },
    {
        id: 'menengah-owner-dependent',
        scale: 'Menengah',
        title: 'Ketergantungan pada Pemilik',
        description: 'Keputusan bisnis masih owner-dependent sehingga volume bisnis naik membuat manajemen tidak efisien.',
        probingCue: 'Gali approval transaksi, delegation of authority, dan kebutuhan jejak audit.',
        featureIds: [
            'mybca-bisnis',
            'op-business',
            'visa-corporate'
        ],
        painPointIds: [
            'cash-management',
            'employee-expense'
        ]
    },
    {
        id: 'menengah-tech-adoption',
        scale: 'Menengah',
        title: 'Lambatnya Adopsi Teknologi Digital',
        description: 'CRM, ERP, pemasaran digital, dan automasi operasional belum dimanfaatkan optimal.',
        probingCue: 'Arahkan ke automasi invoice, API, procurement digital, dan transaksi lintas perangkat.',
        featureIds: [
            'op-business',
            'stream-b2b',
            'api-bca',
            'mybca-bisnis'
        ],
        painPointIds: [
            'procurement',
            'reconciliation',
            'cash-management'
        ]
    },
    {
        id: 'menengah-quality',
        scale: 'Menengah',
        title: 'Konsistensi Kualitas Produk',
        description: 'Standar kualitas sulit dijaga saat produksi mulai membesar.',
        probingCue: 'Gali kontrol supplier, PO, pengiriman, dan pembayaran bahan baku.',
        featureIds: [
            'stream-b2b',
            'op-business'
        ],
        painPointIds: [
            'procurement'
        ]
    },
    {
        id: 'menengah-competition',
        scale: 'Menengah',
        title: 'Persaingan Ketat dan Perang Harga',
        description: 'Tekanan kompetitor besar atau produk impor membuat margin tertekan.',
        probingCue: 'Arahkan ke efisiensi biaya operasional, promosi merchant, dan payment acceptance.',
        featureIds: [
            'program-promosi',
            'qris',
            'edc',
            'stream-b2b'
        ],
        painPointIds: [
            'payment-acceptance',
            'procurement'
        ]
    },
    {
        id: 'menengah-branding',
        scale: 'Menengah',
        title: 'Minimnya Branding dan Pemasaran',
        description: 'Sulit membangun awareness dan memasarkan produk ke pasar yang lebih luas.',
        probingCue: 'Gali channel pembayaran, promo, dan kemudahan pelanggan saat transaksi.',
        featureIds: [
            'program-promosi',
            'qris',
            'edc',
            'virtual-account'
        ],
        painPointIds: [
            'payment-acceptance'
        ]
    },
    {
        id: 'menengah-legal-tax',
        scale: 'Menengah',
        title: 'Regulasi, Legalitas, dan Pajak',
        description: 'Perizinan kompleks dan pemahaman pajak kurang matang sehingga berisiko hukum.',
        probingCue: 'Gali e-Faktur, e-Bupot, dokumen pajak, dan bukti pembayaran yang perlu dimonitor.',
        featureIds: [
            'pajakku',
            'op-business',
            'mybca-bisnis'
        ],
        painPointIds: [
            'tax',
            'reconciliation'
        ]
    },
    {
        id: 'menengah-supply',
        scale: 'Menengah',
        title: 'Ketergantungan Pemasok',
        description: 'Pasokan bahan baku tidak stabil dan kenaikan biaya berdampak ke operasional.',
        probingCue: 'Gali proses RFQ, perbandingan supplier, PO, pengiriman, invoice, dan pembayaran.',
        featureIds: [
            'stream-b2b',
            'op-business',
            'kredit-usaha'
        ],
        painPointIds: [
            'procurement',
            'working-capital'
        ]
    },
    {
        id: 'korporasi-regulation',
        scale: 'Korporasi',
        title: 'Regulasi dan Birokrasi Kompleks',
        description: 'Perubahan pajak dan aturan teknis menuntut kepatuhan tinggi dan dokumentasi kuat.',
        probingCue: 'Validasi volume dokumen pajak, audit trail approval, dan kebutuhan monitoring kepatuhan.',
        featureIds: [
            'pajakku',
            'op-business',
            'mybca-bisnis'
        ],
        painPointIds: [
            'tax',
            'reconciliation'
        ]
    },
    {
        id: 'korporasi-management',
        scale: 'Korporasi',
        title: 'Masalah Manajemen dan SDM',
        description: 'Risiko laporan keuangan, utang, dan kekurangan talenta spesifik menghambat pertumbuhan.',
        probingCue: 'Arahkan ke kontrol otorisasi, automasi finance, payroll, dan reporting expense.',
        featureIds: [
            'op-business',
            'catapa',
            'visa-corporate',
            'mybca-bisnis'
        ],
        painPointIds: [
            'reconciliation',
            'payroll',
            'employee-expense'
        ]
    },
    {
        id: 'korporasi-macro',
        scale: 'Korporasi',
        title: 'Gejolak Ekonomi dan Operasional',
        description: 'Inflasi, nilai tukar, biaya operasional, dan gangguan supply chain menekan margin.',
        probingCue: 'Gali kebutuhan modal kerja, procurement terintegrasi, dan optimasi dana idle.',
        featureIds: [
            'stream-b2b',
            'kredit-usaha',
            'deposito',
            'obligasi'
        ],
        painPointIds: [
            'procurement',
            'working-capital',
            'idle-cash'
        ]
    },
    {
        id: 'korporasi-digital',
        scale: 'Korporasi',
        title: 'Transformasi Digital dan Inovasi',
        description: 'Sulit beradaptasi dengan teknologi baru dan terlalu bergantung pada platform pihak ketiga.',
        probingCue: 'Gali integrasi ERP, API, workflow finance, dan end-to-end procurement.',
        featureIds: [
            'op-business',
            'api-bca',
            'stream-b2b',
            'mybca-bisnis'
        ],
        painPointIds: [
            'procurement',
            'reconciliation',
            'cash-management'
        ]
    },
    {
        id: 'korporasi-consumer',
        scale: 'Korporasi',
        title: 'Perubahan Konsumen',
        description: 'Konsumen lebih peduli sustainability, pengalaman pelanggan, dan nilai merek.',
        probingCue: 'Arahkan ke experience pembayaran, promosi merchant, dan kontrol data transaksi pelanggan.',
        featureIds: [
            'program-promosi',
            'qris',
            'edc',
            'virtual-account'
        ],
        painPointIds: [
            'payment-acceptance'
        ]
    }
];
const friendlyPainPointCopy = {
    reconciliation: {
        title: 'Uang masuk sulit dicocokkan',
        question: 'Kalau ada banyak pembayaran masuk, tim Ibu/Bapak masih perlu cek satu per satu siapa yang sudah bayar?'
    },
    payroll: {
        title: 'Gaji karyawan masih bikin repot',
        question: 'Saat hari gajian, apakah tim masih bolak-balik menyiapkan file gaji, pajak, BPJS, dan approval manual?'
    },
    tax: {
        title: 'Urusan pajak dan faktur terasa berat',
        question: 'Apakah dokumen pajak seperti faktur, bukti potong, atau laporan pajak sering tercecer di banyak tempat?'
    },
    procurement: {
        title: 'Belanja supplier dan invoice lambat',
        question: 'Untuk cari supplier, minta harga, buat PO, sampai bayar invoice, apakah prosesnya masih banyak follow-up manual?'
    },
    'payment-acceptance': {
        title: 'Pelanggan butuh cara bayar yang lebih mudah',
        question: 'Apakah ada pelanggan yang batal atau lama bayar karena pilihan pembayaran usaha belum lengkap?'
    },
    'cash-management': {
        title: 'Arus kas belum gampang dipantau',
        question: 'Apakah pemilik atau finance sulit melihat posisi uang masuk, uang keluar, dan approval transaksi secara cepat?'
    },
    'working-capital': {
        title: 'Butuh dana untuk tumbuh',
        question: 'Apakah ada rencana tambah stok, mesin, kendaraan, proyek, atau cabang tetapi kas usaha masih terbatas?'
    },
    'employee-expense': {
        title: 'Biaya karyawan sulit dikontrol',
        question: 'Untuk perjalanan dinas, pembelian operasional, atau reimbursement, apakah kontrol limit dan laporannya masih manual?'
    },
    'idle-cash': {
        title: 'Dana menganggur belum dimanfaatkan',
        question: 'Apakah perusahaan punya dana cadangan yang sedang mengendap dan belum ditempatkan dengan rencana yang jelas?'
    },
    'asset-risk': {
        title: 'Aset usaha belum terlindungi',
        question: 'Kalau terjadi risiko pada toko, gudang, kendaraan, atau aset utama, apakah dampaknya bisa mengganggu operasional?'
    }
};
const featureById = new Map(productFeatures.map((feature)=>[
        feature.id,
        feature
    ]));
const categoryTone = {
    Rekening: 'bg-sky-50 text-sky-800 ring-sky-100',
    Transaksi: 'bg-blue-50 text-blue-800 ring-blue-100',
    Pinjaman: 'bg-amber-50 text-amber-800 ring-amber-100',
    Investasi: 'bg-emerald-50 text-emerald-800 ring-emerald-100',
    Asuransi: 'bg-rose-50 text-rose-800 ring-rose-100',
    'Solusi Digital': 'bg-indigo-50 text-indigo-800 ring-indigo-100'
};
const categoryOrder = [
    'Rekening',
    'Transaksi',
    'Pinjaman',
    'Investasi',
    'Asuransi',
    'Solusi Digital'
];
const categoryDescriptions = {
    Rekening: 'Produk rekening bisnis untuk operasional kas, transaksi aktif, dan penempatan dana.',
    Transaksi: 'Solusi pembayaran, channel transaksi, otorisasi, dan penerimaan dana.',
    Pinjaman: 'Pembiayaan untuk modal kerja, investasi aset, kendaraan, dan expense korporat.',
    Investasi: 'Alternatif pengelolaan dana idle dan diversifikasi treasury.',
    Asuransi: 'Proteksi aset bisnis agar risiko operasional lebih terkendali.',
    'Solusi Digital': 'Ekosistem digital B2B untuk payroll, pajak, procurement, invoice, dan workflow finance.'
};
function Placeholder({ label, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex min-h-48 items-center justify-center rounded-lg bg-slate-800 p-6 text-center text-sm font-semibold tracking-wide text-slate-100 shadow-inner ${className}`,
        children: [
            "[",
            label,
            "]"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 783,
        columnNumber: 5
    }, this);
}
_c = Placeholder;
function Badge({ children, tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tone}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 793,
        columnNumber: 5
    }, this);
}
_c1 = Badge;
function OceanNavigator() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profiling');
    const [customerProfile, setCustomerProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scale: 'Menengah',
        sector: 'Manufaktur'
    });
    const [selectedProfileIssues, setSelectedProfileIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPainPoints, setSelectedPainPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAcademyCategory, setSelectedAcademyCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAcademyModule, setSelectedAcademyModule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCopilotOpen, setIsCopilotOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiProbingGuide, setAiProbingGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAiProbingLoading, setIsAiProbingLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copilotInput, setCopilotInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copilotMessages, setCopilotMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'staff',
            text: 'Kalau nasabah tanya integrasi API BCA, saya harus jelaskan apa tanpa terlalu teknis?'
        },
        {
            role: 'assistant',
            text: 'Jelaskan sebagai jembatan aman agar saldo dan mutasi bisa muncul langsung di sistem bisnis nasabah. Tekankan manfaat: data real-time, monitoring cashflow, dan pengurangan input manual. Sumber: SOP Produk Transaksi - API BCA Individu Bisnis.'
        }
    ]);
    const [isCopilotLoading, setIsCopilotLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visiblePainPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[visiblePainPoints]": ()=>{
            const matched = painPoints.filter({
                "OceanNavigator.useMemo[visiblePainPoints].matched": (painPoint)=>painPoint.scale.includes(customerProfile.scale) && (painPoint.sectors.includes(customerProfile.sector) || painPoint.sectors.includes('Umum'))
            }["OceanNavigator.useMemo[visiblePainPoints].matched"]);
            return matched.length > 0 ? matched : painPoints;
        }
    }["OceanNavigator.useMemo[visiblePainPoints]"], [
        customerProfile
    ]);
    const visibleProfileIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[visibleProfileIssues]": ()=>commonBusinessIssues.filter({
                "OceanNavigator.useMemo[visibleProfileIssues]": (issue)=>issue.scale === customerProfile.scale
            }["OceanNavigator.useMemo[visibleProfileIssues]"])
    }["OceanNavigator.useMemo[visibleProfileIssues]"], [
        customerProfile.scale
    ]);
    const selectedProfileIssueData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[selectedProfileIssueData]": ()=>commonBusinessIssues.filter({
                "OceanNavigator.useMemo[selectedProfileIssueData]": (issue)=>selectedProfileIssues.includes(issue.id)
            }["OceanNavigator.useMemo[selectedProfileIssueData]"])
    }["OceanNavigator.useMemo[selectedProfileIssueData]"], [
        selectedProfileIssues
    ]);
    const selectedPainPointData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[selectedPainPointData]": ()=>painPoints.filter({
                "OceanNavigator.useMemo[selectedPainPointData]": (painPoint)=>selectedPainPoints.includes(painPoint.id)
            }["OceanNavigator.useMemo[selectedPainPointData]"])
    }["OceanNavigator.useMemo[selectedPainPointData]"], [
        selectedPainPoints
    ]);
    const probingPainPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[probingPainPoints]": ()=>{
            const merged = new Map();
            visiblePainPoints.forEach({
                "OceanNavigator.useMemo[probingPainPoints]": (painPoint)=>merged.set(painPoint.id, painPoint)
            }["OceanNavigator.useMemo[probingPainPoints]"]);
            selectedPainPointData.forEach({
                "OceanNavigator.useMemo[probingPainPoints]": (painPoint)=>merged.set(painPoint.id, painPoint)
            }["OceanNavigator.useMemo[probingPainPoints]"]);
            return Array.from(merged.values());
        }
    }["OceanNavigator.useMemo[probingPainPoints]"], [
        selectedPainPointData,
        visiblePainPoints
    ]);
    const recommendedFeatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[recommendedFeatures]": ()=>{
            const ids = new Set([
                ...selectedPainPointData.flatMap({
                    "OceanNavigator.useMemo[recommendedFeatures]": (painPoint)=>painPoint.featureIds
                }["OceanNavigator.useMemo[recommendedFeatures]"]),
                ...selectedProfileIssueData.flatMap({
                    "OceanNavigator.useMemo[recommendedFeatures]": (issue)=>issue.featureIds
                }["OceanNavigator.useMemo[recommendedFeatures]"])
            ]);
            return Array.from(ids).map({
                "OceanNavigator.useMemo[recommendedFeatures]": (id)=>featureById.get(id)
            }["OceanNavigator.useMemo[recommendedFeatures]"]).filter({
                "OceanNavigator.useMemo[recommendedFeatures]": (feature)=>Boolean(feature)
            }["OceanNavigator.useMemo[recommendedFeatures]"]);
        }
    }["OceanNavigator.useMemo[recommendedFeatures]"], [
        selectedPainPointData,
        selectedProfileIssueData
    ]);
    const academyModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[academyModules]": ()=>[
                ...productFeatures
            ].sort({
                "OceanNavigator.useMemo[academyModules]": (a, b)=>{
                    if (a.category === b.category) {
                        return a.name.localeCompare(b.name);
                    }
                    return a.category.localeCompare(b.category);
                }
            }["OceanNavigator.useMemo[academyModules]"])
    }["OceanNavigator.useMemo[academyModules]"], []);
    const academyCategorySummaries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[academyCategorySummaries]": ()=>categoryOrder.map({
                "OceanNavigator.useMemo[academyCategorySummaries]": (category)=>{
                    const modules = academyModules.filter({
                        "OceanNavigator.useMemo[academyCategorySummaries].modules": (feature)=>feature.category === category
                    }["OceanNavigator.useMemo[academyCategorySummaries].modules"]);
                    return {
                        category,
                        modules,
                        featuredNames: modules.slice(0, 3).map({
                            "OceanNavigator.useMemo[academyCategorySummaries]": (feature)=>feature.name
                        }["OceanNavigator.useMemo[academyCategorySummaries]"])
                    };
                }
            }["OceanNavigator.useMemo[academyCategorySummaries]"])
    }["OceanNavigator.useMemo[academyCategorySummaries]"], [
        academyModules
    ]);
    const selectedAcademyModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanNavigator.useMemo[selectedAcademyModules]": ()=>selectedAcademyCategory ? academyModules.filter({
                "OceanNavigator.useMemo[selectedAcademyModules]": (feature)=>feature.category === selectedAcademyCategory
            }["OceanNavigator.useMemo[selectedAcademyModules]"]) : []
    }["OceanNavigator.useMemo[selectedAcademyModules]"], [
        academyModules,
        selectedAcademyCategory
    ]);
    const handleProfileChange = (field, value)=>{
        setCustomerProfile((current)=>({
                ...current,
                [field]: value
            }));
        setSelectedProfileIssues([]);
        setSelectedPainPoints([]);
        setAiProbingGuide('');
    };
    const toggleProfileIssue = (issueId)=>{
        setSelectedProfileIssues((current)=>current.includes(issueId) ? current.filter((id)=>id !== issueId) : [
                ...current,
                issueId
            ]);
        setAiProbingGuide('');
    };
    const startDiagnosisFromProfile = ()=>{
        const mappedPainPointIds = selectedProfileIssueData.flatMap((issue)=>issue.painPointIds);
        setSelectedPainPoints(Array.from(new Set(mappedPainPointIds)));
        setActiveTab('probing');
    };
    const togglePainPoint = (painPointId)=>{
        setSelectedPainPoints((current)=>current.includes(painPointId) ? current.filter((id)=>id !== painPointId) : [
                ...current,
                painPointId
            ]);
        setAiProbingGuide('');
    };
    const selectedSummary = selectedPainPointData.length > 0 ? `${selectedPainPointData.length} pain point terpilih` : 'Belum ada pain point terpilih';
    const requestGemini = async (mode, question)=>{
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mode,
                question,
                profile: customerProfile,
                profileIssues: selectedProfileIssueData,
                painPoints: selectedPainPointData,
                recommendedFeatures
            })
        });
        const payload = await response.json();
        if (!response.ok) {
            throw new Error(payload.error ?? 'AI belum bisa menjawab saat ini.');
        }
        return payload.answer ?? 'AI belum mengembalikan jawaban.';
    };
    const generateAiProbingGuide = async ()=>{
        setIsAiProbingLoading(true);
        try {
            const answer = await requestGemini('probing');
            setAiProbingGuide(answer);
        } catch (error) {
            setAiProbingGuide(error instanceof Error ? error.message : 'AI belum bisa membuat panduan probing.');
        } finally{
            setIsAiProbingLoading(false);
        }
    };
    const submitCopilotQuestion = async (event)=>{
        event.preventDefault();
        const trimmedQuestion = copilotInput.trim();
        if (!trimmedQuestion || isCopilotLoading) {
            return;
        }
        setCopilotInput('');
        setCopilotMessages((current)=>[
                ...current,
                {
                    role: 'staff',
                    text: trimmedQuestion
                }
            ]);
        setIsCopilotLoading(true);
        try {
            const answer = await requestGemini('copilot', trimmedQuestion);
            setCopilotMessages((current)=>[
                    ...current,
                    {
                        role: 'assistant',
                        text: answer
                    }
                ]);
        } catch (error) {
            setCopilotMessages((current)=>[
                    ...current,
                    {
                        role: 'assistant',
                        text: error instanceof Error ? error.message : 'Maaf, Co-Pilot belum bisa menjawab. Untuk pertanyaan di luar modul, eskalasi ke HO.'
                    }
                ]);
        } finally{
            setIsCopilotLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "bg-bca-blue px-5 py-5 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:px-6 lg:py-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4 lg:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-blue-100",
                                                children: "Internal BCA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "mt-2 text-2xl font-bold tracking-tight",
                                                children: "OCEAN Navigator"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 hidden text-sm leading-6 text-blue-100 lg:block",
                                                children: "Tablet assistant untuk consultative selling dan just-in-time learning produk B2B."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1011,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-white/10 px-3 py-2 text-right text-xs font-semibold ring-1 ring-white/20 lg:mt-6 lg:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: customerProfile.scale
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-blue-100",
                                                children: customerProfile.sector
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1007,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mt-5 grid grid-cols-2 gap-2 lg:mt-8 lg:grid-cols-1",
                                children: tabs.map((tab, index)=>{
                                    const isActive = activeTab === tab.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `rounded-lg px-3 py-3 text-left transition ${isActive ? 'bg-white text-bca-navy shadow-lg' : 'bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase tracking-[0.16em] opacity-75",
                                                children: [
                                                    "0",
                                                    index + 1,
                                                    " ",
                                                    tab.eyebrow
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 block text-sm font-bold",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto hidden rounded-lg bg-bca-navy p-4 text-sm leading-6 text-blue-50 ring-1 ring-white/10 lg:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-white",
                                        children: "C-Level Lens"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: "Fokus narasi: efisiensi waktu, penghematan biaya, keamanan, kontrol, dan cashflow."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "mb-6 flex flex-col justify-between gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold uppercase tracking-[0.2em] text-bca-blue",
                                                    children: "Branch Sales Console"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-2 text-2xl font-bold text-slate-900 sm:text-3xl",
                                                    children: tabs.find((tab)=>tab.id === activeTab)?.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 text-sm sm:min-w-80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                                            children: "Profil"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1060,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 font-bold text-slate-900",
                                                            children: customerProfile.scale
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1064,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 font-bold text-slate-900",
                                                            children: selectedSummary
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1065,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1053,
                                    columnNumber: 13
                                }, this),
                                activeTab === 'profiling' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "grid gap-6 xl:grid-cols-[1fr_0.85fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                            children: "Discovery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1074,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-3 text-2xl font-bold text-slate-900",
                                                            children: "Mulai dari konteks bisnis nasabah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1075,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 leading-7 text-slate-600",
                                                            children: "Profil singkat ini membantu staf cabang mengarahkan pertanyaan probing ke masalah bisnis yang relevan, bukan langsung masuk ke fitur teknis."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1076,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1073,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 grid gap-5 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold text-slate-800",
                                                                    children: "Skala Bisnis"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: customerProfile.scale,
                                                                    onChange: (event)=>handleProfileChange('scale', event.target.value),
                                                                    className: "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100",
                                                                    children: scaleOptions.map((scale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: scale,
                                                                            children: scale
                                                                        }, scale, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1090,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold text-slate-800",
                                                                    children: "Sektor Industri"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: customerProfile.sector,
                                                                    onChange: (event)=>handleProfileChange('sector', event.target.value),
                                                                    className: "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100",
                                                                    children: sectorOptions.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: sector,
                                                                            children: sector
                                                                        }, sector, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1105,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1099,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                                            children: [
                                                                                "Masalah Umum ",
                                                                                customerProfile.scale
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "mt-2 text-xl font-bold text-slate-900",
                                                                            children: "Pilih konteks masalah yang paling terasa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1119,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1115,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-slate-500",
                                                                    children: [
                                                                        selectedProfileIssues.length,
                                                                        " masalah dipilih"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1114,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 grid gap-4",
                                                            children: visibleProfileIssues.map((issue)=>{
                                                                const isSelected = selectedProfileIssues.includes(issue.id);
                                                                const linkedFeatures = issue.featureIds.map((featureId)=>featureById.get(featureId)).filter((feature)=>Boolean(feature));
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>toggleProfileIssue(issue.id),
                                                                    className: `rounded-lg border p-4 text-left transition ${isSelected ? 'border-bca-blue bg-blue-50 ring-4 ring-blue-100' : 'border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${isSelected ? 'border-bca-blue bg-bca-blue text-white' : 'border-slate-300 bg-white text-transparent'}`,
                                                                                children: "OK"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 1145,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "block text-base font-bold text-slate-900",
                                                                                        children: issue.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/page.tsx",
                                                                                        lineNumber: 1155,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mt-2 block leading-6 text-slate-600",
                                                                                        children: issue.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/page.tsx",
                                                                                        lineNumber: 1156,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mt-3 block rounded-lg bg-white p-3 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100",
                                                                                        children: [
                                                                                            "Fokus probing: ",
                                                                                            issue.probingCue
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/page.tsx",
                                                                                        lineNumber: 1157,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mt-3 flex flex-wrap gap-2",
                                                                                        children: linkedFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                                tone: categoryTone[feature.category],
                                                                                                children: feature.name
                                                                                            }, feature.id, false, {
                                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                                lineNumber: 1162,
                                                                                                columnNumber: 37
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/page.tsx",
                                                                                        lineNumber: 1160,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 1154,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1144,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, issue.id, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 flex flex-col gap-3 sm:flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: startDiagnosisFromProfile,
                                                            className: "rounded-lg bg-bca-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600",
                                                            children: "Mulai Diagnosa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setActiveTab('academy'),
                                                            className: "rounded-lg border border-bca-blue px-5 py-3 text-sm font-bold text-bca-blue transition hover:bg-blue-50",
                                                            children: "Buka OCEAN Academy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                                    label: "Placeholder: Video Animasi Value Proposition OCEAN by BCA",
                                                    className: "min-h-64"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-slate-900",
                                                            children: "Arah Solusi Awal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedProfileIssueData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 space-y-4",
                                                            children: selectedProfileIssueData.map((issue)=>{
                                                                const linkedFeatures = issue.featureIds.map((featureId)=>featureById.get(featureId)).filter((feature)=>Boolean(feature));
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-slate-900",
                                                                            children: issue.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1206,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-2 text-sm leading-6 text-slate-600",
                                                                            children: issue.probingCue
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1207,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 flex flex-wrap gap-2",
                                                                            children: linkedFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                    tone: categoryTone[feature.category],
                                                                                    children: feature.name
                                                                                }, feature.id, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1210,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1208,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, issue.id, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1205,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 leading-7 text-slate-600",
                                                            children: "Pilih minimal satu masalah umum agar Navigator bisa memberi arahan solusi OCEAN sebelum masuk ke checklist."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1220,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-slate-900",
                                                            children: "Opening Talk Track"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 leading-7 text-slate-600",
                                                            children: '"Pak/Bu, sebelum bicara fitur, kita petakan dulu proses yang paling banyak makan waktu atau biaya. Dari sana saya tunjukkan solusi OCEAN yang paling relevan."'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1227,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'probing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "grid gap-6 xl:grid-cols-[0.7fr_1fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                    children: "Consultation Checklist"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 text-2xl font-bold text-slate-900",
                                                    children: "Pertanyaan sederhana untuk membuka cerita nasabah"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 leading-7 text-slate-600",
                                                    children: "Bahasa di tahap ini dibuat awam agar staf cabang bisa bertanya natural. Masalah dari Profiling otomatis diubah menjadi pertanyaan lanjutan yang lebih mudah dipakai saat meeting."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1240,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-bca-navy",
                                                            children: "Diagnosis aktif"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1245,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm leading-6 text-slate-700",
                                                            children: selectedPainPointData.length > 0 ? selectedPainPointData.map((painPoint)=>painPoint.title).join(', ') : 'Belum ada masalah yang dipilih.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1246,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedProfileIssueData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-sm font-semibold leading-6 text-bca-navy",
                                                            children: [
                                                                "Dari Profiling: ",
                                                                selectedProfileIssueData.map((issue)=>issue.title).join(', ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1252,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setActiveTab('showcase'),
                                                    disabled: selectedPainPoints.length === 0,
                                                    className: "mt-6 w-full rounded-lg bg-bca-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none",
                                                    children: "Tampilkan Solusi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 rounded-lg bg-white p-4 ring-1 ring-slate-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-bold text-slate-900",
                                                                            children: "Bantuan AI untuk staf"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1270,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-sm leading-6 text-slate-600",
                                                                            children: "AI menyusun script probing singkat dari profil, masalah umum, dan checklist yang dipilih."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1271,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: generateAiProbingGuide,
                                                                    disabled: isAiProbingLoading,
                                                                    className: "rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400",
                                                                    children: isAiProbingLoading ? 'Menyusun...' : 'Bantu AI Susun Probing'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1275,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-100",
                                                            children: aiProbingGuide || 'Contoh output AI akan muncul di sini: pembuka percakapan, 3 pertanyaan awam, dan cara mengaitkan jawaban nasabah ke solusi OCEAN.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1284,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4",
                                            children: probingPainPoints.map((painPoint)=>{
                                                const isSelected = selectedPainPoints.includes(painPoint.id);
                                                const friendlyCopy = friendlyPainPointCopy[painPoint.id] ?? {
                                                    title: painPoint.title,
                                                    question: painPoint.question
                                                };
                                                const linkedProfileIssues = selectedProfileIssueData.filter((issue)=>issue.painPointIds.includes(painPoint.id));
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>togglePainPoint(painPoint.id),
                                                    className: `rounded-lg border bg-white p-5 text-left shadow-sm transition ${isSelected ? 'border-bca-blue ring-4 ring-blue-100' : 'border-slate-200 hover:border-blue-200 hover:shadow-md'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-sm font-bold ${isSelected ? 'border-bca-blue bg-bca-blue text-white' : 'border-slate-300 text-transparent'}`,
                                                                children: "OK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1314,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-lg font-bold text-slate-900",
                                                                        children: friendlyCopy.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1322,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-2 block leading-7 text-slate-600",
                                                                        children: friendlyCopy.question
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1323,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    linkedProfileIssues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-3 block rounded-lg bg-blue-50 p-3 text-sm font-semibold leading-6 text-bca-navy ring-1 ring-blue-100",
                                                                        children: [
                                                                            "Nyambung dari Profiling: ",
                                                                            linkedProfileIssues.map((issue)=>issue.title).join(', ')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1325,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-3 block text-sm font-semibold text-bca-blue",
                                                                        children: painPoint.impact
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1329,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1313,
                                                        columnNumber: 25
                                                    }, this)
                                                }, painPoint.id, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1236,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'showcase' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-6 xl:grid-cols-[1fr_0.8fr]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                                            children: "Demo & ROI"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1345,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "mt-3 text-2xl font-bold text-slate-900",
                                                                            children: "Solusi OCEAN yang menjawab masalah bisnis"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1346,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1344,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setActiveTab('probing'),
                                                                    className: "rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50",
                                                                    children: "Ubah Checklist"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1348,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1343,
                                                            columnNumber: 21
                                                        }, this),
                                                        recommendedFeatures.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 rounded-lg bg-slate-50 p-5 text-slate-600 ring-1 ring-slate-200",
                                                            children: "Pilih minimal satu pain point di tab Probing untuk menampilkan rekomendasi solusi."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1358,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 grid gap-4 md:grid-cols-2",
                                                            children: recommendedFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                                    className: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start justify-between gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-lg font-bold text-slate-900",
                                                                                    children: feature.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1366,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                    tone: categoryTone[feature.category],
                                                                                    children: feature.category
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1367,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1365,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-3 leading-7 text-slate-600",
                                                                            children: feature.businessValue
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1369,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-4 rounded-lg bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100",
                                                                            children: [
                                                                                "Pitch: ",
                                                                                feature.pitchingScript
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1370,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, feature.id, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1362,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                            children: "Kalkulator Efisiensi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-3 text-2xl font-bold text-slate-900",
                                                            children: "ROI Estimator"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 space-y-3",
                                                            children: selectedPainPointData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200",
                                                                children: "ROI akan muncul setelah checklist dipilih."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1384,
                                                                columnNumber: 25
                                                            }, this) : selectedPainPointData.map((painPoint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-bca-navy",
                                                                            children: painPoint.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1390,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 grid grid-cols-2 gap-3 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "rounded-lg bg-white p-3 ring-1 ring-blue-100",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "font-semibold text-slate-500",
                                                                                            children: "Sebelum"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 1393,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mt-1 font-bold text-slate-900",
                                                                                            children: painPoint.before
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 1394,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1392,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "rounded-lg bg-white p-3 ring-1 ring-blue-100",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "font-semibold text-slate-500",
                                                                                            children: "Sesudah"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 1397,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mt-1 font-bold text-bca-blue",
                                                                                            children: painPoint.after
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 1398,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1396,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1391,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-3 text-sm font-semibold text-slate-700",
                                                                            children: painPoint.savings
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1401,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, painPoint.id, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1389,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1382,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                                    label: "Placeholder: Dummy Dashboard UI OCEAN",
                                                    className: "min-h-80"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                            children: "Simulasi Tampilan OCEAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1412,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between border-b border-slate-200 pb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                                                                    children: "OCEAN Console"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1416,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold text-slate-900",
                                                                                    children: "Cashflow & Payment Control"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1417,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1415,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700",
                                                                            children: "Live"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1419,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1414,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 grid gap-3 sm:grid-cols-3",
                                                                    children: [
                                                                        'Invoice Match',
                                                                        'Payroll Batch',
                                                                        'Tax Docs'
                                                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg bg-white p-4 ring-1 ring-slate-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs font-semibold text-slate-500",
                                                                                    children: item
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1424,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "mt-2 text-2xl font-bold text-bca-blue",
                                                                                    children: index === 0 ? '98%' : index === 1 ? '24/7' : '1.2k'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1425,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, item, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1421,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-4 space-y-2",
                                                                    children: [
                                                                        'VA payment identified',
                                                                        'Invoice approved',
                                                                        'Payroll authorization ready'
                                                                    ].map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm ring-1 ring-slate-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold text-slate-700",
                                                                                    children: activity
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1432,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-bca-blue",
                                                                                    children: "Completed"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 1433,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, activity, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1431,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1429,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1413,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1340,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'academy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold uppercase tracking-[0.18em] text-bca-blue",
                                                                    children: "Microlearning Modul"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1448,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 text-2xl font-bold text-slate-900",
                                                                    children: selectedAcademyCategory ? selectedAcademyCategory : 'Pilih kategori pembelajaran'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1449,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1447,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedAcademyCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSelectedAcademyCategory(null),
                                                            className: "rounded-lg border border-bca-blue px-4 py-2 text-sm font-bold text-bca-blue transition hover:bg-blue-50",
                                                            children: "Kembali ke Kategori"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1454,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1446,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 max-w-3xl leading-7 text-slate-600",
                                                    children: selectedAcademyCategory ? categoryDescriptions[selectedAcademyCategory] : 'Kategori membantu staf cabang belajar bertahap: pilih area produk dulu, lalu buka modul yang relevan.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1463,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 17
                                        }, this),
                                        !selectedAcademyCategory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                            children: academyCategorySummaries.map(({ category, modules, featuredNames })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setSelectedAcademyCategory(category),
                                                    className: "rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl font-bold text-slate-900",
                                                                    children: category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1480,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                    tone: categoryTone[category],
                                                                    children: [
                                                                        modules.length,
                                                                        " modul"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1481,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1479,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 leading-7 text-slate-600",
                                                            children: categoryDescriptions[category]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1483,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-5 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                                                    children: "Contoh modul"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1485,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-sm font-semibold leading-6 text-slate-700",
                                                                    children: [
                                                                        featuredNames.join(', '),
                                                                        modules.length > featuredNames.length ? ', dan lainnya' : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1486,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-4 text-sm font-bold text-bca-blue",
                                                            children: "Lihat Modul Kategori"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1491,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, category, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1471,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-bca-navy",
                                                            children: [
                                                                selectedAcademyModules.length,
                                                                " modul dalam kategori ",
                                                                selectedAcademyCategory
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1498,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm leading-6 text-slate-700",
                                                            children: "Pilih satu modul untuk membuka penjelasan awam, target klien, dan pitching script."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1501,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
                                                    children: selectedAcademyModules.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSelectedAcademyModule(feature),
                                                            className: "rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-lg font-bold text-slate-900",
                                                                            children: feature.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1515,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                            tone: categoryTone[feature.category],
                                                                            children: feature.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 1516,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1514,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-3 line-clamp-3 leading-7 text-slate-600",
                                                                    children: feature.plainExplanation
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1518,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-4 text-sm font-bold text-bca-blue",
                                                                    children: "Buka Modul"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1519,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, feature.id, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1508,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1506,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1052,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1051,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsCopilotOpen((current)=>!current),
                className: "fixed bottom-5 right-5 z-40 rounded-full bg-bca-orange px-5 py-4 text-sm font-bold text-white shadow-2xl shadow-orange-200 transition hover:bg-orange-600",
                children: "OCEAN Co-Pilot"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1531,
                columnNumber: 7
            }, this),
            isCopilotOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fixed bottom-24 right-5 z-40 w-[calc(100vw-2.5rem)] max-w-md overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-bca-blue p-4 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.18em] text-blue-100",
                                            children: "AI Internal SOP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1544,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-1 text-lg font-bold",
                                            children: "OCEAN Co-Pilot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1545,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCopilotOpen(false),
                                    className: "rounded-md bg-white/10 px-3 py-1 text-sm font-bold",
                                    children: "Tutup"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1542,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1541,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[56vh] space-y-4 overflow-y-auto p-4",
                        children: [
                            copilotMessages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[88%] rounded-lg p-3 text-sm leading-6 text-slate-700 ${message.role === 'staff' ? 'ml-auto bg-blue-50' : 'bg-slate-100'}`,
                                    children: message.text
                                }, `${message.role}-${index}`, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1554,
                                    columnNumber: 15
                                }, this)),
                            isCopilotLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[88%] rounded-lg bg-slate-100 p-3 text-sm font-semibold leading-6 text-slate-500",
                                children: "Co-Pilot sedang menyusun jawaban..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1564,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1552,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submitCopilotQuestion,
                        className: "border-t border-slate-200 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                        children: "Tanya di luar modul atau minta bahasa pitching"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1571,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: copilotInput,
                                        onChange: (event)=>setCopilotInput(event.target.value),
                                        rows: 3,
                                        placeholder: "Contoh: Nasabah tanya keamanan data payroll, jawabnya gimana?",
                                        className: "mt-2 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-bca-blue focus:ring-4 focus:ring-blue-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1574,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1570,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isCopilotLoading || copilotInput.trim().length === 0,
                                className: "mt-3 w-full rounded-lg bg-bca-orange px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300",
                                children: "Kirim ke Co-Pilot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs leading-5 text-slate-500",
                                children: "Jika topik menyentuh pricing, legal, integrasi teknis detail, atau janji SLA, Co-Pilot akan menyarankan eskalasi ke HO."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1589,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1569,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1540,
                columnNumber: 9
            }, this),
            selectedAcademyModule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4 border-b border-slate-200 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: categoryTone[selectedAcademyModule.category],
                                            children: selectedAcademyModule.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 text-2xl font-bold text-slate-900",
                                            children: selectedAcademyModule.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1602,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1600,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setSelectedAcademyModule(null),
                                    className: "rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50",
                                    children: "Tutup"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1599,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 p-5 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200 sm:col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold uppercase tracking-wide text-slate-500",
                                            children: "Penjelasan Awam"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1615,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 leading-7 text-slate-700",
                                            children: selectedAcademyModule.plainExplanation
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1614,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold uppercase tracking-wide text-bca-blue",
                                            children: "Target Klien"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1619,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 leading-7 text-slate-700",
                                            children: selectedAcademyModule.targetClient
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1620,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1618,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-orange-50 p-4 ring-1 ring-orange-100 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold uppercase tracking-wide text-orange-700",
                                            children: "Pitching Script"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1623,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 leading-7 text-slate-700",
                                            children: [
                                                '"',
                                                selectedAcademyModule.pitchingScript,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1624,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1622,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                                        label: `Placeholder: Video Animasi Fitur ${selectedAcademyModule.name}`,
                                        className: "min-h-56"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1627,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1626,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-slate-500 sm:col-span-3",
                                    children: [
                                        "Sumber dokumen: ",
                                        selectedAcademyModule.source
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1629,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1613,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1598,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1597,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1004,
        columnNumber: 5
    }, this);
}
_s(OceanNavigator, "vtI53u5F1+vg7AeDkXSYzFCoodA=");
_c2 = OceanNavigator;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Placeholder");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "OceanNavigator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_tsx_0u-7s7d._.js.map