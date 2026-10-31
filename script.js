// ==========================================
// 1. MOCK DATASET SURVEI 7 KAIH (DATA DUMMY)
// ==========================================
const KAIH_NAMES = [
    "Bangun Pagi",
    "Beribadah",
    "Berolahraga",
    "Makan Sehat & Bergizi",
    "Gemar Belajar",
    "Bermasyarakat",
    "Tidur Cepat"
];

const KAIH_DESCRIPTIONS = [
    "Kedisiplinan memulai hari & kesiapan belajar",
    "Mendekatkan diri kepada Tuhan YME",
    "Kebugaran jasmani & aktivitas fisik 30 menit",
    "Pola makan bergizi seimbang & membawa bekal",
    "Semangat menuntut ilmu & aktif di kelas",
    "Kepedulian sosial & semangat gotong royong",
    "Cukup istirahat & mengurangi penggunaan gadget malam"
];

// Generator Data Responden Dummy (184 Responden)
function generateDummyData() {
    const data = [];
    const kelasList = ['X', 'XI', 'XII'];
    const genderList = ['L', 'P'];
    const gelombangList = [1, 2, 3, 4];

    let id = 1;

    for (let i = 0; i < 184; i++) {
        const k = kelasList[i % 3];
        const g = genderList[i % 2];
        const gel = gelombangList[i % 4];

        const waveBonus = (gel - 1) * 0.2;
        let scores = [
            3.8 + waveBonus + (Math.random() * 0.8 - 0.4),
            4.3 + waveBonus * 0.5 + (Math.random() * 0.6 - 0.3),
            3.4 + waveBonus + (Math.random() * 0.9 - 0.45),
            3.5 + waveBonus + (Math.random() * 0.9 - 0.45),
            3.6 + waveBonus + (Math.random() * 0.8 - 0.4),
            4.1 + waveBonus * 0.5 + (Math.random() * 0.6 - 0.3),
            2.8 + waveBonus * 1.1 + (Math.random() * 1.0 - 0.5)
        ];

        scores = scores.map(s => Math.min(5, Math.max(1, parseFloat(s.toFixed(2)))));

        data.push({
            id: id++,
            kelas: k,
            gender: g,
            wave: gel,
            scores: scores
        });
    }
    return data;
}

const rawDataset = generateDummyData();
let filteredDataset = [...rawDataset];

// Chart Instances Global
let chartBarInstance = null;
let chartRadarInstance = null;
let chartLineInstance = null;
let chartClassCompInstance = null;
let chartGenderInstance = null;
let chartClassDistInstance = null;

// ==========================================
// 2. LOGIC FILTER & KALKULASI DATA
// ==========================================
function applyFilters() {
    const filterKelas = document.getElementById('filterKelas').value;
    const filterGender = document.getElementById('filterGender').value;
    const filterGelombang = document.getElementById('filterGelombang').value;

    filteredDataset = rawDataset.filter(item => {
        const matchKelas = (filterKelas === 'ALL') || (item.kelas === filterKelas);
        const matchGender = (filterGender === 'ALL') || (item.gender === filterGender);
        const matchGelombang = (filterGelombang === 'ALL') || (item.wave == filterGelombang);
        return matchKelas && matchGender && matchGelombang;
    });

    updateDashboardUI();
}

function resetFilters() {
    document.getElementById('filterKelas').value = 'ALL';
    document.getElementById('filterGender').value = 'ALL';
    document.getElementById('filterGelombang').value = 'ALL';
    applyFilters();
}

function calculateAverages(dataset) {
    if (!dataset || dataset.length === 0) return [0, 0, 0, 0, 0, 0, 0];

    const sums = [0, 0, 0, 0, 0, 0, 0];
    dataset.forEach(item => {
        item.scores.forEach((sc, idx) => {
            sums[idx] += sc;
        });
    });

    return sums.map(sum => parseFloat((sum / dataset.length).toFixed(2)));
}

// ==========================================
// 3. UPDATE TAMPILAN DASHBOARD & CHARTS
// ==========================================
function updateDashboardUI() {
    const averages = calculateAverages(filteredDataset);
    const totalResponden = filteredDataset.length;

    // 1. Update KPI Cards
    updateKPICards(totalResponden, averages);

    // 2. Update Charts
    updateCharts(averages);

    // 3. Update Gemini AI Insight
    updateGeminiInsight(filteredDataset, averages, totalResponden);

    // 4. Update Detailed Cards
    renderDetailedKaihList(averages);
}

function updateKPICards(totalResponden, averages) {
    document.getElementById('kpiTotalResponden').innerText = totalResponden;

    const overallAvg = averages.length > 0 && totalResponden > 0
        ? (averages.reduce((a, b) => a + b, 0) / averages.length).toFixed(2)
        : 0.00;
    
    document.getElementById('kpiSkorRataRata').innerText = overallAvg;

    const kpiPredikat = document.getElementById('kpiPredikat');
    if (overallAvg >= 4.0) {
        kpiPredikat.innerText = "SANGAT BAIK";
        kpiPredikat.className = "font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded";
    } else if (overallAvg >= 3.2) {
        kpiPredikat.innerText = "BAIK";
        kpiPredikat.className = "font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded";
    } else {
        kpiPredikat.innerText = "PERLU DITINGKATKAN";
        kpiPredikat.className = "font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded";
    }

    if (totalResponden > 0) {
        let maxIdx = 0, minIdx = 0;
        averages.forEach((val, idx) => {
            if (val > averages[maxIdx]) maxIdx = idx;
            if (val < averages[minIdx]) minIdx = idx;
        });

        document.getElementById('kpiTopName').innerText = KAIH_NAMES[maxIdx];
        document.getElementById('kpiTopScore').innerText = averages[maxIdx].toFixed(2);
        document.getElementById('kpiLowName').innerText = KAIH_NAMES[minIdx];
        document.getElementById('kpiLowScore').innerText = averages[minIdx].toFixed(2);
    } else {
        document.getElementById('kpiTopName').innerText = "-";
        document.getElementById('kpiTopScore').innerText = "0.00";
        document.getElementById('kpiLowName').innerText = "-";
        document.getElementById('kpiLowScore').innerText = "0.00";
    }

    const targetPct = ((overallAvg / 5.0) * 100).toFixed(1);
    document.getElementById('kpiTargetPct').innerText = `${targetPct}%`;
    document.getElementById('kpiProgressBar').style.width = `${targetPct}%`;
}

// ==========================================
// 4. INITIALIZE & UPDATE CHARTS (CHART.JS)
// ==========================================
function initCharts() {
    // 1. Bar Chart Utama
    const ctxBar = document.getElementById('barChart7KAIH').getContext('2d');
    chartBarInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: KAIH_NAMES,
            datasets: [{
                label: 'Skor Rata-Rata',
                data: [0,0,0,0,0,0,0],
                backgroundColor: '#2563EB',
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { min: 1.0, max: 5.0, ticks: { stepSize: 1.0 } },
                x: { ticks: { font: { size: 10, weight: 'bold' } } }
            }
        }
    });

    // 2. Radar Chart
    const ctxRadar = document.getElementById('radarChart7KAIH').getContext('2d');
    chartRadarInstance = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: KAIH_NAMES,
            datasets: [{
                label: 'Profil Karakter',
                data: [0,0,0,0,0,0,0],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563EB',
                pointBackgroundColor: '#EAB308',
                pointBorderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { r: { min: 1, max: 5, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });

    // 3. Line Chart Tren Gelombang
    const ctxLine = document.getElementById('lineChartGelombang').getContext('2d');
    chartLineInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: KAIH_NAMES,
            datasets: [
                { label: 'Gelombang 1', data: [0,0,0,0,0,0,0], borderColor: '#2563EB', backgroundColor: 'rgba(37,99,235,0.1)', borderWidth: 2, tension: 0.3, pointRadius: 4 },
                { label: 'Gelombang 2', data: [0,0,0,0,0,0,0], borderColor: '#EAB308', backgroundColor: 'rgba(234,179,8,0.1)', borderWidth: 2, tension: 0.3, pointRadius: 4 },
                { label: 'Gelombang 3', data: [0,0,0,0,0,0,0], borderColor: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.1)', borderWidth: 2, tension: 0.3, pointRadius: 4 },
                { label: 'Gelombang 4', data: [0,0,0,0,0,0,0], borderColor: '#F97316', backgroundColor: 'rgba(249,115,22,0.1)', borderWidth: 2, tension: 0.3, pointRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 11, weight: 'bold' } } } },
            scales: { y: { min: 1.0, max: 5.0 } }
        }
    });

    // 4. Grouped Bar Chart Per Kelas
    const ctxClassComp = document.getElementById('chartClassComparison').getContext('2d');
    chartClassCompInstance = new Chart(ctxClassComp, {
        type: 'bar',
        data: {
            labels: ['Bangun Pagi', 'Beribadah', 'Olahraga', 'Makan Sehat', 'Belajar', 'Bermasyarakat', 'Tidur Cepat'],
            datasets: [
                { label: 'Kelas X', data: [0,0,0,0,0,0,0], backgroundColor: '#1E3A8A' },
                { label: 'Kelas XI', data: [0,0,0,0,0,0,0], backgroundColor: '#2563EB' },
                { label: 'Kelas XII', data: [0,0,0,0,0,0,0], backgroundColor: '#EAB308' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { min: 0, max: 5 } },
            plugins: { legend: { position: 'top', labels: { boxWidth: 10, font: { size: 10 } } } }
        }
    });

    // 5 & 6. Doughnut Charts (Gender & Class Distribution)
    const ctxGender = document.getElementById('chartGenderDist').getContext('2d');
    chartGenderInstance = new Chart(ctxGender, {
        type: 'doughnut',
        data: {
            labels: ['Laki-Laki', 'Perempuan'],
            datasets: [{ data: [0, 0], backgroundColor: ['#1E3A8A', '#EAB308'] }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, font: { size: 10 } } }, title: { display: true, text: 'Gender', font: { size: 11 } } }
        }
    });

    const ctxClassDist = document.getElementById('chartClassDist').getContext('2d');
    chartClassDistInstance = new Chart(ctxClassDist, {
        type: 'doughnut',
        data: {
            labels: ['Kelas X', 'Kelas XI', 'Kelas XII'],
            datasets: [{ data: [0, 0, 0], backgroundColor: ['#1E3A8A', '#2563EB', '#F59E0B'] }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, font: { size: 10 } } }, title: { display: true, text: 'Tingkat Kelas', font: { size: 11 } } }
        }
    });
}

function updateCharts(averages) {
    if (!chartBarInstance || !chartRadarInstance) return;

    let minVal = Math.min(...averages);
    const barColors = averages.map(val => val === minVal ? '#EAB308' : '#2563EB');

    chartBarInstance.data.datasets[0].data = averages;
    chartBarInstance.data.datasets[0].backgroundColor = barColors;
    chartBarInstance.update();

    chartRadarInstance.data.datasets[0].data = averages;
    chartRadarInstance.update();

    // Line Chart Gelombang updates
    const w1Data = calculateAverages(rawDataset.filter(d => d.wave === 1));
    const w2Data = calculateAverages(rawDataset.filter(d => d.wave === 2));
    const w3Data = calculateAverages(rawDataset.filter(d => d.wave === 3));
    const w4Data = calculateAverages(rawDataset.filter(d => d.wave === 4));

    chartLineInstance.data.datasets[0].data = w1Data;
    chartLineInstance.data.datasets[1].data = w2Data;
    chartLineInstance.data.datasets[2].data = w3Data;
    chartLineInstance.data.datasets[3].data = w4Data;
    chartLineInstance.update();

    // Grouped Bar Class Comparison
    chartClassCompInstance.data.datasets[0].data = calculateAverages(rawDataset.filter(d => d.kelas === 'X'));
    chartClassCompInstance.data.datasets[1].data = calculateAverages(rawDataset.filter(d => d.kelas === 'XI'));
    chartClassCompInstance.data.datasets[2].data = calculateAverages(rawDataset.filter(d => d.kelas === 'XII'));
    chartClassCompInstance.update();

    // Doughnut Distributions
    const countL = filteredDataset.filter(d => d.gender === 'L').length;
    const countP = filteredDataset.filter(d => d.gender === 'P').length;
    chartGenderInstance.data.datasets[0].data = [countL, countP];
    chartGenderInstance.update();

    const cX = filteredDataset.filter(d => d.kelas === 'X').length;
    const cXI = filteredDataset.filter(d => d.kelas === 'XI').length;
    const cXII = filteredDataset.filter(d => d.kelas === 'XII').length;
    chartClassDistInstance.data.datasets[0].data = [cX, cXI, cXII];
    chartClassDistInstance.update();
}

// ==========================================
// 5. GEMINI AI INSIGHT GENERATOR
// ==========================================
function updateGeminiInsight(filtered, averages, count) {
    if (count === 0) {
        document.getElementById('aiKeyFindings').innerText = "Tidak ada data yang sesuai dengan filter.";
        document.getElementById('aiTrends').innerText = "Silakan ubah filter segmentasi.";
        document.getElementById('aiRecommendations').innerText = "Tidak ada rekomendasi.";
        return;
    }

    let minIdx = 0, maxIdx = 0;
    averages.forEach((val, i) => {
        if (val < averages[minIdx]) minIdx = i;
        if (val > averages[maxIdx]) maxIdx = i;
    });

    const topHabit = KAIH_NAMES[maxIdx];
    const lowHabit = KAIH_NAMES[minIdx];

    document.getElementById('aiKeyFindings').innerHTML = `Dari <strong>${count} responden</strong> siswa SMA Betzata Leilem, indikator <strong>${topHabit}</strong> menunjukkan capaian tertinggi dengan skor <strong>${averages[maxIdx]}</strong>. Sementara itu, <strong>${lowHabit}</strong> memerlukan atensi khusus (skor <strong>${averages[minIdx]}</strong>).`;

    document.getElementById('aiTrends').innerHTML = `Analisis multivariat menunjukkan korelasi erat antara kedisiplinan istirahat malam dengan tingkat kebugaran dan fokus belajar siswa di kelas pada jam pelajaran pagi.`;

    document.getElementById('aiRecommendations').innerHTML = `Disarankan pelaksanaan program intervensi <em>"Digital Detox Challenge"</em> jam 21.00 dan senam kebugaran rutin 15 menit untuk mengoptimalkan pembiasaan 7 KAIH.`;
}

// ==========================================
// 6. RENDER KARTU DETAIL EVALUASI 7 KAIH
// ==========================================
function renderDetailedKaihList(averages) {
    const container = document.getElementById('detailedKaihList');
    container.innerHTML = '';

    const icons = [
        'fa-sun text-amber-500',
        'fa-hands-praying text-blue-600',
        'fa-person-running text-green-600',
        'fa-apple-whole text-red-500',
        'fa-book-open text-purple-600',
        'fa-handshake text-teal-600',
        'fa-bed text-indigo-600'
    ];

    KAIH_NAMES.forEach((name, idx) => {
        const score = averages[idx];
        let statusBadge = '';
        let borderClass = 'border-slate-200';

        if (score >= 4.0) {
            statusBadge = `<span class="min-w-[130px] inline-block text-center text-[11px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shadow-sm">Sangat Baik</span>`;
            borderClass = 'border-emerald-200';
        } else if (score >= 3.2) {
            statusBadge = `<span class="min-w-[130px] inline-block text-center text-[11px] font-bold text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full whitespace-nowrap shadow-sm">Baik</span>`;
            borderClass = 'border-blue-200';
        } else {
            statusBadge = `<span class="min-w-[130px] inline-block text-center text-[11px] font-bold text-amber-700 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full whitespace-nowrap shadow-sm">Perlu Ditingkatkan</span>`;
            borderClass = 'border-amber-300 bg-amber-50/20';
        }

        const cardHtml = `
            <div class="bg-white border ${borderClass} rounded-xl p-3.5 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base flex-shrink-0">
                            <i class="fa-solid ${icons[idx]}"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-xs sm:text-sm text-slate-900">${idx+1}. ${name}</h4>
                            <p class="text-[11px] text-slate-500 line-clamp-1">${KAIH_DESCRIPTIONS[idx]}</p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <span class="font-heading font-extrabold text-sm sm:text-base text-slate-900">${score.toFixed(2)}</span>
                        <span class="text-[10px] text-slate-400 block">/ 5.00</span>
                    </div>
                </div>

                <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span class="text-[10px] font-medium text-slate-400">Status Evaluasi:</span>
                    <div class="flex-shrink-0">
                        ${statusBadge}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

// ==========================================
// 7. INITIALIZATION ON PAGE LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    applyFilters();
});
