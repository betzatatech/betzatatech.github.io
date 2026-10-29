// ==========================================
// DATA DUMMY - 7 KAIH VERTIKAL SMA 2026
// ==========================================

const dataSurvei = [
  // --- KELAS X, LAKI-LAKI ---
  { nama: "Andi Pratama", kelas: "X", gender: "Laki-laki", gelombang: 1,
    skor: { "Bangun Pagi": 14, "Beribadah": 13, "Berolahraga": 11, "Makan Sehat": 12, "Gemar Belajar": 13, "Bermasyarakat": 14, "Tidur Cepat": 10 } },
  { nama: "Budi Santoso", kelas: "X", gender: "Laki-laki", gelombang: 1,
    skor: { "Bangun Pagi": 12, "Beribadah": 14, "Berolahraga": 13, "Makan Sehat": 11, "Gemar Belajar": 15, "Bermasyarakat": 13, "Tidur Cepat": 9 } },
  { nama: "Cahyo Wibowo", kelas: "X", gender: "Laki-laki", gelombang: 2,
    skor: { "Bangun Pagi": 15, "Beribadah": 13, "Berolahraga": 12, "Makan Sehat": 13, "Gemar Belajar": 14, "Bermasyarakat": 15, "Tidur Cepat": 11 } },

  // --- KELAS X, PEREMPUAN ---
  { nama: "Dewi Lestari", kelas: "X", gender: "Perempuan", gelombang: 1,
    skor: { "Bangun Pagi": 13, "Beribadah": 15, "Berolahraga": 10, "Makan Sehat": 14, "Gemar Belajar": 15, "Bermasyarakat": 15, "Tidur Cepat": 12 } },
  { nama: "Eka Putri", kelas: "X", gender: "Perempuan", gelombang: 2,
    skor: { "Bangun Pagi": 14, "Beribadah": 14, "Berolahraga": 11, "Makan Sehat": 13, "Gemar Belajar": 14, "Bermasyarakat": 14, "Tidur Cepat": 13 } },
  { nama: "Fitriani Rahayu", kelas: "X", gender: "Perempuan", gelombang: 1,
    skor: { "Bangun Pagi": 15, "Beribadah": 15, "Berolahraga": 9, "Makan Sehat": 15, "Gemar Belajar": 15, "Bermasyarakat": 13, "Tidur Cepat": 14 } },

  // --- KELAS XI, LAKI-LAKI ---
  { nama: "Galih Prasetyo", kelas: "XI", gender: "Laki-laki", gelombang: 1,
    skor: { "Bangun Pagi": 11, "Beribadah": 12, "Berolahraga": 14, "Makan Sehat": 10, "Gemar Belajar": 13, "Bermasyarakat": 12, "Tidur Cepat": 8 } },
  { nama: "Hendra Wijaya", kelas: "XI", gender: "Laki-laki", gelombang: 2,
    skor: { "Bangun Pagi": 13, "Beribadah": 13, "Berolahraga": 15, "Makan Sehat": 12, "Gemar Belajar": 14, "Bermasyarakat": 14, "Tidur Cepat": 10 } },
  { nama: "Irfan Maulana", kelas: "XI", gender: "Laki-laki", gelombang: 1,
    skor: { "Bangun Pagi": 10, "Beribadah": 11, "Berolahraga": 13, "Makan Sehat": 11, "Gemar Belajar": 12, "Bermasyarakat": 11, "Tidur Cepat": 7 } },

  // --- KELAS XI, PEREMPUAN ---
  { nama: "Jasmine Aulia", kelas: "XI", gender: "Perempuan", gelombang: 1,
    skor: { "Bangun Pagi": 14, "Beribadah": 15, "Berolahraga": 12, "Makan Sehat": 14, "Gemar Belajar": 15, "Bermasyarakat": 15, "Tidur Cepat": 13 } },
  { nama: "Kartika Sari", kelas: "XI", gender: "Perempuan", gelombang: 2,
    skor: { "Bangun Pagi": 15, "Beribadah": 14, "Berolahraga": 11, "Makan Sehat": 15, "Gemar Belajar": 14, "Bermasyarakat": 14, "Tidur Cepat": 14 } },
  { nama: "Lestari Dewi", kelas: "XI", gender: "Perempuan", gelombang: 1,
    skor: { "Bangun Pagi": 13, "Beribadah": 13, "Berolahraga": 10, "Makan Sehat": 13, "Gemar Belajar": 13, "Bermasyarakat": 12, "Tidur Cepat": 11 } },

  // --- KELAS XII, LAKI-LAKI ---
  { nama: "Muhammad Rizki", kelas: "XII", gender: "Laki-laki", gelombang: 1,
    skor: { "Bangun Pagi": 12, "Beribadah": 13, "Berolahraga": 11, "Makan Sehat": 12, "Gemar Belajar": 14, "Bermasyarakat": 13, "Tidur Cepat": 9 } },
  { nama: "Nanda Firmansyah", kelas: "XII", gender: "Laki-laki", gelombang: 2,
    skor: { "Bangun Pagi": 14, "Beribadah": 14, "Berolahraga": 13, "Makan Sehat": 13, "Gemar Belajar": 15, "Bermasyarakat": 14, "Tidur Cepat": 11 } },

  // --- KELAS XII, PEREMPUAN ---
  { nama: "Olivia Safitri", kelas: "XII", gender: "Perempuan", gelombang: 1,
    skor: { "Bangun Pagi": 15, "Beribadah": 15, "Berolahraga": 12, "Makan Sehat": 15, "Gemar Belajar": 15, "Bermasyarakat": 14, "Tidur Cepat": 14 } },
  { nama: "Putri Handayani", kelas: "XII", gender: "Perempuan", gelombang: 2,
    skor: { "Bangun Pagi": 14, "Beribadah": 14, "Berolahraga": 11, "Makan Sehat": 14, "Gemar Belajar": 14, "Bermasyarakat": 15, "Tidur Cepat": 13 } },
];

// ==========================================
// KONFIGURASI & LOGIC HELPERS
// ==========================================

const categories = ["Bangun Pagi", "Beribadah", "Berolahraga", "Makan Sehat", "Gemar Belajar", "Bermasyarakat", "Tidur Cepat"];

// Warna Chart.js (Sesuai CSS Variables)
const colors = {
  primary: '#3385FF',
  success: '#06D6A0',
  warning: '#FFD166',
  danger: '#EF476F',
  textDark: '#1E293B',
  gridLine: 'rgba(51, 133, 255, 0.1)'
};

function filterData(kelas, gender, gelombang) {
  return dataSurvei.filter(item => {
    const matchKelas = kelas === "all" || item.kelas === kelas;
    const matchGender = gender === "all" || item.gender === gender;
    const matchGelombang = gelombang === "all" || item.gelombang === parseInt(gelombang);
    return matchKelas && matchGender && matchGelombang;
  });
}

function calculateCategoryPercentages(filteredData) {
  const percentages = {};
  categories.forEach(cat => {
    const totalSkor = filteredData.reduce((sum, item) => sum + (item.skor[cat] || 0), 0);
    const maxPossible = filteredData.length * 15; // 3 pertanyaan x 5 poin
    percentages[cat] = maxPossible > 0 ? ((totalSkor / maxPossible) * 100) : 0;
  });
  return percentages;
}

function calculateAverageScore(filteredData) {
  let totalAll = 0;
  categories.forEach(cat => {
    totalAll += filteredData.reduce((sum, item) => sum + (item.skor[cat] || 0), 0);
  });
  const maxAll = filteredData.length * categories.length * 15;
  return maxAll > 0 ? ((totalAll / maxAll) * 100) : 0;
}

// ==========================================
// CHART INSTANCES
// ==========================================

let gaugeChartInstance = null;
let radarChartInstance = null;
let barChartInstance = null;
let lineChartInstance = null;

// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {
  const kelas = document.getElementById('filterKelas').value;
  const gender = document.getElementById('filterGender').value;
  const gelombang = document.getElementById('filterGelombang').value;

  const filteredData = filterData(kelas, gender, gelombang);
  const percentages = calculateCategoryPercentages(filteredData);
  const avgScore = calculateAverageScore(filteredData);

  // --- Update Summary Cards ---
  document.getElementById('totalResponden').textContent = filteredData.length;
  document.getElementById('skorRataRata').textContent = avgScore.toFixed(1) + '%';

  // Cari kategori tertinggi dan terendah
  let maxCat = '-', maxVal = -Infinity;
  let minCat = '-', minVal = Infinity;
  
  categories.forEach(cat => {
    if (percentages[cat] > maxVal) { maxVal = percentages[cat]; maxCat = cat; }
    if (percentages[cat] < minVal) { minVal = percentages[cat]; minCat = cat; }
  });

  document.getElementById('kategoriTertinggi').textContent = maxCat + ' (' + maxVal.toFixed(1) + '%)';
  document.getElementById('kategoriTerendah').textContent = minCat + ' (' + minVal.toFixed(1) + '%)';

  // --- Update Insight Box (Dinamis) ---
  updateInsightBox(maxCat, maxVal, minCat, minVal);

  // --- Update Charts ---
  updateGaugeChart(percentages);
  updateRadarChart(percentages);
  updateBarChart(filteredData);
  updateLineChart(filteredData);
}

// ==========================================
// INSIGHT BOX LOGIC
// ==========================================

function updateInsightBox(maxCat, maxVal, minCat, minVal) {
  const posText = document.getElementById('insight-positive-text');
  const oppText = document.getElementById('insight-opportunity-text');

  // Teks Positif
  posText.innerHTML = `<strong>${maxCat}</strong> memiliki capaian tertinggi (<strong>${maxVal.toFixed(1)}%</strong>). Pertahankan kebiasaan baik ini dan cari tahu faktor pendukungnya.`;

  // Teks Peluang
  oppText.innerHTML = `<strong>${minCat}</strong> memperoleh skor <strong>${minVal.toFixed(1)}%</strong>. Pertimbangkan mencari hambatan melalui diskusi atau survei lanjutan.`;
}

// ==========================================
// GAUGE CHART (Horizontal Bar)
// ==========================================

function updateGaugeChart(percentages) {
  const ctx = document.getElementById('gaugeChart').getContext('2d');

  if (gaugeChartInstance) {
    gaugeChartInstance.destroy();
  }

  // Tentukan warna berdasarkan skor
  const getBackgroundColor = (val) => {
    if (val >= 80) return colors.success;
    if (val >= 60) return colors.warning;
    return colors.danger;
  };

  gaugeChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Skor (%)',
        data: categories.map(cat => percentages[cat]),
        backgroundColor: categories.map(cat => getBackgroundColor(percentages[cat])),
        borderColor: categories.map(cat => getBackgroundColor(percentages[cat])),
        borderWidth: 1,
        borderRadius: 6,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.parsed.x.toFixed(1) + '%';
            }
          }
        }
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          grid: { color: colors.gridLine },
          ticks: { callback: function(value) { return value + '%'; } }
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 11, family: "'Poppins', sans-serif" } }
        }
      }
    }
  });
}

// ==========================================
// RADAR CHART
// ==========================================

function updateRadarChart(percentages) {
  const ctx = document.getElementById('radarChart').getContext('2d');

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Profil 7 KAIH',
        data: categories.map(cat => percentages[cat]),
        backgroundColor: 'rgba(51, 133, 255, 0.2)',
        borderColor: colors.primary,
        borderWidth: 2,
        pointBackgroundColor: colors.primary,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.primary,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            backdropColor: 'transparent',
            callback: function(value) { return value + '%'; }
          },
          grid: { color: colors.gridLine },
          angleLines: { color: colors.gridLine },
          pointLabels: {
            font: { size: 11, weight: 'bold', family: "'Poppins', sans-serif" },
            color: colors.textDark
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ==========================================
// BAR CHART (Perbandingan per Kelas)
// ==========================================

function updateBarChart(filteredData) {
  const ctx = document.getElementById('barChart').getContext('2d');

  if (barChartInstance) {
    barChartInstance.destroy();
  }

  const kelasList = [...new Set(filteredData.map(d => d.kelas))].sort();
  
  // Palet warna untuk kelas
  const classColors = ['#3385FF', '#06D6A0', '#FFD166']; 

  const datasets = kelasList.map((kelas, index) => {
    const kelasData = filteredData.filter(d => d.kelas === kelas);
    const percentages = calculateCategoryPercentages(kelasData);
    
    return {
      label: 'Kelas ' + kelas,
      data: categories.map(cat => percentages[cat]),
      backgroundColor: classColors[index % classColors.length],
      borderColor: classColors[index % classColors.length],
      borderWidth: 1,
      borderRadius: 4,
    };
  });

  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: colors.gridLine },
          ticks: { callback: function(value) { return value + '%'; } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } }
        }
      }
    }
  });
}

// ==========================================
// LINE CHART (Tren Gelombang)
// ==========================================

function updateLineChart(filteredData) {
  const ctx = document.getElementById('lineChart').getContext('2d');

  if (lineChartInstance) {
    lineChartInstance.destroy();
  }

  // Filter data per gelombang
  const gelombang1 = filteredData.filter(d => d.gelombang === 1);
  const gelombang2 = filteredData.filter(d => d.gelombang === 2);

  // Hitung persentase per kategori untuk masing-masing gelombang
  const pctGel1 = gelombang1.length > 0 ? calculateCategoryPercentages(gelombang1) : {};
  const pctGel2 = gelombang2.length > 0 ? calculateCategoryPercentages(gelombang2) : {};

  lineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: categories,
      datasets: [
        {
          label: 'Gelombang 1',
          data: categories.map(cat => pctGel1[cat] || 0),
          borderColor: '#3385FF', // Primary Blue
          backgroundColor: 'rgba(51, 133, 255, 0.1)',
          borderWidth: 3,
          tension: 0.4, // Membuat garis melengkung halus
          fill: true,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#3385FF',
          pointBorderWidth: 2,
        },
        {
          label: 'Gelombang 2',
          data: categories.map(cat => pctGel2[cat] || 0),
          borderColor: '#06D6A0', // Success Green
          backgroundColor: 'rgba(6, 214, 160, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#06D6A0',
          pointBorderWidth: 2,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: colors.gridLine },
          ticks: { callback: function(value) { return value + '%'; } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } }
        }
      }
    }
  });
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.getElementById('filterKelas').addEventListener('change', updateDashboard);
document.getElementById('filterGender').addEventListener('change', updateDashboard);
document.getElementById('filterGelombang').addEventListener('change', updateDashboard);

// ==========================================
// INITIAL LOAD
// ==========================================

window.addEventListener('load', () => {
  updateDashboard();
});