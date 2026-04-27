module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/gemini/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const geminiEndpoint = (model)=>`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
const compactJson = (value)=>JSON.stringify(value, null, 2);
const fallbackAnswer = (body)=>{
    if (body.mode === 'probing') {
        return [
            '[Mode demo - GEMINI_API_KEY belum terpasang]',
            'Pembuka: "Pak/Bu, saya ingin memahami bagian operasional yang paling menyita waktu tim, supaya solusi yang dibahas langsung relevan ke bisnis."',
            'Pertanyaan 1: "Dari masalah yang tadi dipilih, bagian mana yang paling sering membuat tim harus kerja ulang?"',
            'Pertanyaan 2: "Kalau proses itu bisa dibuat lebih cepat atau otomatis, dampak terbesarnya ke biaya, waktu, atau kontrol ada di mana?"',
            'Pertanyaan 3: "Siapa saja yang biasanya ikut approve atau memantau proses tersebut?"',
            'Arahkan ke solusi OCEAN yang muncul di kartu rekomendasi, lalu hindari janji teknis. Untuk pricing, legal, atau integrasi detail, eskalasi ke HO.'
        ].join('\n\n');
    }
    return [
        '[Mode demo - GEMINI_API_KEY belum terpasang]',
        'Jawaban singkat: jelaskan dengan bahasa bisnis dulu, bukan fitur teknis. Kaitkan pertanyaan nasabah ke efisiensi waktu, kontrol, keamanan, dan cashflow.',
        'Jika pertanyaannya di luar modul, beri jawaban konseptual dan lanjutkan dengan: "Untuk detail teknis atau kebijakan final, saya akan eskalasi ke tim HO agar jawabannya akurat."'
    ].join('\n\n');
};
const buildPrompt = (body)=>{
    const sharedContext = [
        'Kamu adalah OCEAN Co-Pilot, asisten internal Bank BCA untuk staf cabang.',
        'Tugasmu membantu staf menjelaskan OCEAN by BCA dalam bahasa awam dan business value.',
        'Audiens staf cabang belum tentu paham produk B2B teknis, jadi gunakan bahasa sederhana.',
        'Jangan mengarang pricing, SLA, persyaratan legal, limit, atau detail teknis integrasi.',
        'Jika pertanyaan butuh pricing, legal, integrasi teknis detail, security review, atau keputusan HO, sarankan eskalasi ke HO.',
        'Produk yang tersedia mencakup myBCA Bisnis, Virtual Account, EDC, QRIS, API BCA, Stream B2B, CATAPA, OP Business Banking, Pajakku, rekening bisnis, kredit, investasi, dan asuransi.',
        `Profil nasabah: ${compactJson(body.profile ?? {})}`,
        `Masalah dari Profiling: ${compactJson(body.profileIssues ?? [])}`,
        `Pain point checklist: ${compactJson(body.painPoints ?? [])}`,
        `Solusi yang direkomendasikan app: ${compactJson(body.recommendedFeatures ?? [])}`
    ].join('\n');
    if (body.mode === 'probing') {
        return [
            sharedContext,
            'Buat panduan probing untuk staf cabang.',
            'Format wajib:',
            '1. Pembuka meeting dalam 1 kalimat.',
            '2. Tiga pertanyaan awam yang nyambung dari masalah Profiling.',
            '3. Untuk tiap pertanyaan, tulis sinyal jawaban nasabah dan solusi OCEAN yang cocok.',
            '4. Satu kalimat transisi ke Value Showcase.',
            'Batas: maksimal 180 kata, bahasa Indonesia, tidak memakai istilah teknis seperti API, rekonsiliasi, ERP, atau otorisasi tanpa penjelasan awam.'
        ].join('\n\n');
    }
    return [
        sharedContext,
        `Pertanyaan staf atau nasabah: ${body.question ?? ''}`,
        'Jawab dalam bahasa Indonesia maksimal 160 kata.',
        'Gunakan struktur: Jawaban singkat, cara menjelaskan ke nasabah, sumber/modul terkait atau alasan eskalasi.',
        'Jika di luar modul, bantu secara konseptual tetapi tandai bahwa detail final perlu eskalasi HO.'
    ].join('\n\n');
};
async function POST(request) {
    const body = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';
    if (!apiKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            answer: fallbackAnswer(body),
            usedFallback: true
        });
    }
    const response = await fetch(geminiEndpoint(model), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            text: buildPrompt(body)
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.35,
                maxOutputTokens: 700
            }
        })
    });
    const data = await response.json();
    if (!response.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: data.error?.message ?? 'Gemini API belum bisa menjawab saat ini.'
        }, {
            status: response.status
        });
    }
    const answer = data.candidates?.[0]?.content?.parts?.map((part)=>part.text ?? '').join('').trim();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        answer: answer || 'Gemini tidak mengembalikan jawaban. Coba ulangi pertanyaannya dengan konteks lebih spesifik.'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08rxvu0._.js.map