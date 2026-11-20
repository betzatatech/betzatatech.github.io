const HABITS = [
  { key: "beribadah", label: "Beribadah", color: "#114094" },
  { key: "bermasyarakat", label: "Bermasyarakat", color: "#1d4ed8" },
  { key: "gemarBelajar", label: "Gemar belajar", color: "#2563eb" },
  { key: "bangunPagi", label: "Bangun pagi", color: "#eab308" },
  { key: "makanSehat", label: "Makan sehat/bergizi", color: "#0284c7" },
  { key: "tidurCepat", label: "Tidur cepat", color: "#3b82f6" },
  { key: "berolahraga", label: "Berolahraga", color: "#ca8a04" }
];

const RESPONDENTS = {
  g1: 110,
  g2: 111,
  g3: 107,
  g4: 106
};

const WAVE_DATA = {
  all: {
    id: "all",
    label: "Gabungan Gelombang 1–4",
    shortLabel: "Gabungan G1–G4",
    respondentsText: "Total Responden: 434",
    subtext: "Menampilkan persentase capaian berdasarkan data Gabungan Gelombang 1–4 (total 434 responden).",
    values: {
      beribadah: 86.97,
      bermasyarakat: 83.75,
      gemarBelajar: 73.36,
      bangunPagi: 72.94,
      makanSehat: 72.90,
      tidurCepat: 72.47,
      berolahraga: 71.03
    },
    needsVerificationKey: null,
    findings: [
      "Persentase tertinggi pada Gabungan Gelombang 1–4 adalah Beribadah sebesar 86,97%, diikuti Bermasyarakat sebesar 83,75%.",
      "Lima kebiasaan lainnya berada pada rentang 71,03% hingga 73,36%: Gemar belajar (73,36%), Bangun pagi (72,94%), Makan sehat/bergizi (72,90%), Tidur cepat (72,47%), dan Berolahraga (71,03%).",
      "Berolahraga mencatat persentase gabungan terendah (71,03%), sementara pada Gelombang 3 terdapat catatan khusus pada Bangun pagi (50,28% nilai literal vs 81,43% pada catatan koreksi label) yang perlu diverifikasi."
    ],
    recommendations: [
      "Prioritaskan penguatan kebiasaan Berolahraga (71,03%), Tidur cepat (72,47%), dan Makan sehat/bergizi (72,90%) melalui aktivitas fisik singkat di sekolah, edukasi gizi seimbang, serta pengaturan jam istirahat malam.",
      "Lakukan verifikasi label respons untuk Bangun pagi pada Gelombang 3 sebelum menjadikan tren lintas-gelombang sebagai dasar kesimpulan tunggal."
    ]
  },
  g1: {
    id: "g1",
    label: "Gelombang 1",
    shortLabel: "Gelombang 1 (110 Responden)",
    respondentsText: "Gelombang 1: 110 Responden (Total G1–G4: 434)",
    subtext: "Menampilkan persentase capaian pada Gelombang 1 (110 responden).",
    values: {
      beribadah: 87.94,
      bermasyarakat: 84.12,
      bangunPagi: 79.82,
      gemarBelajar: 72.85,
      makanSehat: 72.61,
      berolahraga: 71.88,
      tidurCepat: 71.58
    },
    needsVerificationKey: null,
    findings: [
      "Persentase tertinggi pada Gelombang 1 adalah Beribadah (87,94%).",
      "Persentase terendah pada Gelombang 1 adalah Tidur cepat (71,58%).",
      "Beribadah (87,94%) dan Bermasyarakat (84,12%) berada di posisi teratas, disusul Bangun pagi (79,82%).",
      "Empat kebiasaan lainnya berada di kisaran 71%–72%: Gemar belajar (72,85%), Makan sehat/bergizi (72,61%), Berolahraga (71,88%), dan Tidur cepat (71,58%)."
    ],
    recommendations: [
      "Tidur cepat (71,58%): Wali kelas dan guru BK dapat mengadakan sesi berbagi ringan bersama siswa dan orang tua tentang jadwal istirahat malam yang realistis.",
      "Berolahraga (71,88%) dan Makan sehat/bergizi (72,61%): Sekolah dapat mengenalkan aktivitas fisik sederhana di luar jam olahraga formal serta mendorong siswa membawa air minum dan bekal sehat."
    ]
  },
  g2: {
    id: "g2",
    label: "Gelombang 2",
    shortLabel: "Gelombang 2 (111 Responden)",
    respondentsText: "Gelombang 2: 111 Responden (Total G1–G4: 434)",
    subtext: "Menampilkan persentase capaian pada Gelombang 2 (111 responden).",
    values: {
      beribadah: 87.75,
      bermasyarakat: 84.44,
      bangunPagi: 80.30,
      gemarBelajar: 74.17,
      tidurCepat: 72.91,
      makanSehat: 72.79,
      berolahraga: 71.35
    },
    needsVerificationKey: null,
    findings: [
      "Persentase tertinggi pada Gelombang 2 adalah Beribadah (87,75%).",
      "Persentase terendah pada Gelombang 2 adalah Berolahraga (71,35%).",
      "Beribadah (87,75%), Bermasyarakat (84,44%), dan Bangun pagi (80,30%) menempati tiga posisi teratas.",
      "Gemar belajar (74,17%) dan Tidur cepat (72,91%) pada Gelombang 2 lebih tinggi daripada Gelombang 1, yang masing-masing tercatat sebesar 72,85% dan 71,58%."
    ],
    recommendations: [
      "Berolahraga (71,35%): Guru dapat mengadakan peregangan atau permainan aktif singkat saat pergantian sesi pembelajaran.",
      "Makan sehat/bergizi (72,79%): Sekolah dapat mengadakan edukasi gizi seimbang yang terjangkau dan mudah diterapkan, termasuk mengurangi minuman berpemanis secara bertahap."
    ]
  },
  g3: {
    id: "g3",
    label: "Gelombang 3",
    shortLabel: "Gelombang 3 (107 Responden)",
    respondentsText: "Gelombang 3: 107 Responden (Total G1–G4: 434)",
    subtext: "Menampilkan persentase capaian pada Gelombang 3 (107 responden). Bangun pagi ditandai perlu diverifikasi.",
    values: {
      beribadah: 86.60,
      bermasyarakat: 83.61,
      gemarBelajar: 73.46,
      makanSehat: 72.52,
      tidurCepat: 72.27,
      berolahraga: 69.97,
      bangunPagi: 50.28
    },
    needsVerificationKey: "bangunPagi",
    verificationNote: "Nilai literal: 50,28% | Catatan koreksi label: 81,43% (Perlu Diverifikasi)",
    findings: [
      "Berdasarkan data literal Gelombang 3, persentase tertinggi adalah Beribadah (86,60%), sedangkan Bangun pagi tercatat paling rendah (50,28%).",
      "Terdapat catatan koreksi label yang menyebut nilai Bangun pagi sebesar 81,43%. Angka 50,28% tetap ditampilkan sebagai nilai literal tanpa diganti diam-diam.",
      "Data Bangun pagi pada Gelombang 3 berstatus perlu diverifikasi—nilai 50,28% adalah angka literal, sedangkan 81,43% adalah nilai pada catatan koreksi label, sehingga kesimpulan tunggal mengenai Bangun pagi belum dibuat sebelum verifikasi."
    ],
    recommendations: [
      "Bangun pagi (50,28% literal / 81,43% catatan koreksi label): Tim pelaksana survei sekolah sebaiknya memverifikasi label respons, dan sekolah juga dapat membantu siswa serta keluarga menyusun rutinitas pagi yang nyaman.",
      "Berolahraga (69,97%): Sekolah dapat mendorong gerak ringan bersama atau kegiatan ekstrakurikuler yang inklusif bagi berbagai tingkat kebugaran."
    ]
  },
  g4: {
    id: "g4",
    label: "Gelombang 4",
    shortLabel: "Gelombang 4 (106 Responden)",
    respondentsText: "Gelombang 4: 106 Responden (Total G1–G4: 434)",
    subtext: "Menampilkan persentase capaian pada Gelombang 4 (106 responden).",
    values: {
      beribadah: 85.53,
      bermasyarakat: 82.77,
      bangunPagi: 81.01,
      makanSehat: 73.71,
      tidurCepat: 73.14,
      gemarBelajar: 72.96,
      berolahraga: 70.88
    },
    needsVerificationKey: null,
    findings: [
      "Persentase tertinggi pada Gelombang 4 adalah Beribadah (85,53%).",
      "Persentase terendah pada Gelombang 4 adalah Berolahraga (70,88%).",
      "Beribadah (85,53%), Bermasyarakat (82,77%), dan Bangun pagi (81,01%) berada di atas 80%.",
      "Bangun pagi pada Gelombang 4 (81,01%) lebih tinggi daripada Gelombang 1 (79,82%) dan Gelombang 2 (80,30%)."
    ],
    recommendations: [
      "Berolahraga (70,88%): Sekolah dapat menyediakan aktivitas fisik yang menyenangkan, seperti klub olahraga rekreasional, jalan santai, atau tantangan gerak mingguan.",
      "Gemar belajar (72,96%) dan Tidur cepat (73,14%): Guru dapat membantu siswa menyeimbangkan jadwal belajar dan istirahat, terutama menjelang akhir semester."
    ]
  }
};

function formatIdPercent(num) {
  return num.toFixed(2).replace(".", ",") + "%";
}

function getSortedHabitsForWave(waveObj) {
  return [...HABITS].sort((a, b) => waveObj.values[b.key] - waveObj.values[a.key]);
}

let barChartInstance = null;
let doughnutChartInstance = null;
let radarChartInstance = null;
let lineTrendChartInstance = null;

function renderRespondentStrip(activeWaveId) {
  document.querySelectorAll(".resp-card").forEach((card) => {
    const waveKey = card.getAttribute("data-resp-wave");
    card.classList.toggle("is-highlighted", activeWaveId === waveKey);
  });

  const chip = document.getElementById("activeRespondentChip");
  if (chip) {
    chip.textContent = WAVE_DATA[activeWaveId].respondentsText;
  }
}

function renderHabitCards(waveObj) {
  const grid = document.getElementById("habitsGrid");
  const subtext = document.getElementById("indicatorSubtext");
  if (!grid || !subtext) return;

  subtext.textContent = waveObj.subtext;
  const sortedHabits = getSortedHabitsForWave(waveObj);

  grid.innerHTML = sortedHabits
    .map((habit) => {
      const val = waveObj.values[habit.key];
      const isVerify = waveObj.needsVerificationKey === habit.key;
      const pctWidth = Math.max(0, Math.min(100, val));

      return `
        <article class="habit-card ${isVerify ? "habit-card--verify" : ""}">
          <div class="habit-top">
            <h3 class="habit-name">${habit.label}</h3>
            <span class="habit-value">${formatIdPercent(val)}</span>
          </div>
          ${
            isVerify
              ? `<span class="verify-badge">Perlu Diverifikasi</span>
                 <p class="verify-note">${waveObj.verificationNote}</p>`
              : ""
          }
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${pctWidth}%;"></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInsight(waveObj) {
  const titleEl = document.getElementById("insightTitle");
  const pillEl = document.getElementById("insightScopePill");
  const bannerEl = document.getElementById("verificationAlert");
  const findingsEl = document.getElementById("insightFindings");
  const recsEl = document.getElementById("insightRecommendations");

  if (!titleEl || !pillEl || !bannerEl || !findingsEl || !recsEl) return;

  titleEl.textContent = `Ringkasan & Rekomendasi — ${waveObj.label}`;
  pillEl.textContent = `Fokus: ${waveObj.shortLabel}`;

  bannerEl.classList.toggle("hidden", waveObj.id !== "g3");

  findingsEl.innerHTML = waveObj.findings.map((item) => `<li>${item}</li>`).join("");
  recsEl.innerHTML = waveObj.recommendations.map((item) => `<li>${item}</li>`).join("");
}

function buildCharts(waveObj) {
  if (typeof Chart === "undefined") return;

  const sortedHabits = getSortedHabitsForWave(waveObj);
  const labels = sortedHabits.map((h) => h.label);
  const dataVals = sortedHabits.map((h) => waveObj.values[h.key]);

  const barColors = sortedHabits.map((h) =>
    waveObj.needsVerificationKey === h.key ? "#eab308" : "#114094"
  );
  const barBorders = sortedHabits.map((h) =>
    waveObj.needsVerificationKey === h.key ? "#854d0e" : "#0b2d6b"
  );

  document.getElementById("barChartTitle").textContent = `Peringkat Persentase — ${waveObj.label}`;
  document.getElementById("barChartSub").textContent = `Urutan dari tertinggi ke terendah (${waveObj.shortLabel})`;

  if (barChartInstance) barChartInstance.destroy();
  barChartInstance = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Persentase (%)",
          data: dataVals,
          backgroundColor: barColors,
          borderColor: barBorders,
          borderWidth: 1.5,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (v) => v + "%"
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const habitKey = sortedHabits[ctx.dataIndex].key;
              const baseText = `${ctx.dataset.label}: ${formatIdPercent(ctx.parsed.y)}`;
              if (waveObj.needsVerificationKey === habitKey) {
                return [baseText, "Status: Perlu Diverifikasi (Catatan koreksi label: 81,43%)"];
              }
              return baseText;
            }
          }
        }
      }
    }
  });

  document.getElementById("doughnutChartTitle").textContent = `Proporsi Relatif — ${waveObj.label}`;
  document.getElementById("doughnutChartSub").textContent = `Porsi relatif nilai persentase 7 kebiasaan (${waveObj.shortLabel})`;

  const palette = ["#0b2d6b", "#1756c2", "#2563eb", "#0284c7", "#38bdf8", "#facc15", "#eab308"];
  if (doughnutChartInstance) doughnutChartInstance.destroy();
  doughnutChartInstance = new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: dataVals,
          backgroundColor: palette,
          borderColor: "#ffffff",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "58%",
      plugins: {
        legend: {
          position: "bottom",
          labels: { boxWidth: 12, font: { size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${formatIdPercent(ctx.parsed)}`
          }
        }
      }
    }
  });

  document.getElementById("radarChartTitle").textContent = `Profil 7 Kebiasaan — ${waveObj.label}`;
  document.getElementById("radarChartSub").textContent = `Pola capaian seluruh kebiasaan (${waveObj.shortLabel})`;

  const radarLabels = HABITS.map((h) => h.label);
  const radarValues = HABITS.map((h) => waveObj.values[h.key]);

  if (radarChartInstance) radarChartInstance.destroy();
  radarChartInstance = new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: radarLabels,
      datasets: [
        {
          label: waveObj.label,
          data: radarValues,
          fill: true,
          backgroundColor: "rgba(23, 86, 194, 0.18)",
          borderColor: "#114094",
          pointBackgroundColor: "#eab308",
          pointBorderColor: "#0b2d6b",
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 40,
          max: 100,
          ticks: {
            stepSize: 15,
            callback: (v) => v + "%"
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${formatIdPercent(ctx.parsed.r)}`
          }
        }
      }
    }
  });

  if (!lineTrendChartInstance) {
    const waveKeys = ["g1", "g2", "g3", "g4"];
    const waveLabels = [
      `Gelombang 1 (n=${RESPONDENTS.g1})`,
      `Gelombang 2 (n=${RESPONDENTS.g2})`,
      `Gelombang 3 (n=${RESPONDENTS.g3})`,
      `Gelombang 4 (n=${RESPONDENTS.g4})`
    ];

    const lineColors = [
      "#0b2d6b",
      "#1d4ed8",
      "#0284c7",
      "#eab308",
      "#0ea5e9",
      "#6366f1",
      "#ca8a04"
    ];

    const datasets = HABITS.map((habit, idx) => {
      const series = waveKeys.map((wk) => WAVE_DATA[wk].values[habit.key]);
      const pointBg = waveKeys.map((wk) =>
        wk === "g3" && habit.key === "bangunPagi" ? "#facc15" : lineColors[idx]
      );
      const pointRadius = waveKeys.map((wk) =>
        wk === "g3" && habit.key === "bangunPagi" ? 7 : 4
      );
      const pointBorder = waveKeys.map((wk) =>
        wk === "g3" && habit.key === "bangunPagi" ? "#854d0e" : "#ffffff"
      );

      return {
        label: habit.label,
        data: series,
        borderColor: lineColors[idx],
        backgroundColor: lineColors[idx],
        borderWidth: habit.key === "bangunPagi" ? 2.6 : 2,
        tension: 0.25,
        pointBackgroundColor: pointBg,
        pointBorderColor: pointBorder,
        pointBorderWidth: 2,
        pointRadius
      };
    });

    lineTrendChartInstance = new Chart(document.getElementById("lineTrendChart"), {
      type: "line",
      data: {
        labels: waveLabels,
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        scales: {
          y: {
            min: 45,
            max: 95,
            ticks: {
              callback: (v) => v + "%"
            }
          }
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              boxWidth: 10,
              font: { size: 11.5 }
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const isG3Bangun = ctx.dataIndex === 2 && ctx.dataset.label === "Bangun pagi";
                const base = `${ctx.dataset.label}: ${formatIdPercent(ctx.parsed.y)}`;
                return isG3Bangun
                  ? `${base} [Perlu Diverifikasi: nilai literal 50,28% | koreksi label 81,43%]`
                  : base;
              }
            }
          }
        }
      }
    });
  }
}

function applyWaveFilter(waveId) {
  const waveObj = WAVE_DATA[waveId] || WAVE_DATA.all;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-wave") === waveObj.id);
  });

  renderRespondentStrip(waveObj.id);
  renderHabitCards(waveObj);
  renderInsight(waveObj);
  buildCharts(waveObj);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedWave = btn.getAttribute("data-wave");
      applyWaveFilter(selectedWave);
    });
  });

  applyWaveFilter("all");
});
