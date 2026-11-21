const HABITS = [
  { key: "beribadah", label: "Beribadah", color: "#114094" },
  { key: "bermasyarakat", label: "Bermasyarakat", color: "#1d4ed8" },
  { key: "gemarBelajar", label: "Gemar belajar", color: "#2563eb" },
  { key: "bangunPagi", label: "Bangun pagi", color: "#eab308" },
  { key: "makanSehat", label: "Makan sehat/bergizi", color: "#0284c7" },
  { key: "tidurCepat", label: "Tidur cepat", color: "#3b82f6" },
  { key: "berolahraga", label: "Berolahraga", color: "#ca8a04" }
];

const HABIT_ACTIONS = {
  bangunPagi: {
    title: "Bangun pagi",
    schoolActions: [
      "Buka sesi awal pembelajaran dengan sapaan hangat dan pemeriksaan kesiapan diri singkat agar siswa merasakan manfaat datang tepat waktu dengan tenang.",
      "Fasilitasi refleksi ringan di kelas bersama wali kelas tentang kendala pagi hari siswa (seperti waktu perjalanan atau persiapan perlengkapan sekolah).",
      "Dorong siswa menyiapkan tas, seragam, dan perlengkapan belajar pada malam sebelumnya sebagai rutinitas sederhana."
    ],
    familyStep: "Ajak siswa dan orang tua menyepakati jam bangun serta pengingat pagi yang realistis di rumah tanpa tekanan berlebihan."
  },
  beribadah: {
    title: "Beribadah",
    schoolActions: [
      "Pertahankan pembiasaan doa bersama sebelum dan sesudah kegiatan belajar mengajar secara khidmat dan inklusif.",
      "Sediakan ruang refleksi nilai spiritual yang relevan dengan kehidupan remaja sehari-hari melalui kegiatan pembinaan karakter sekolah.",
      "Apresiasi konsistensi siswa dalam menjaga ketertiban dan sikap saling menghormati saat waktu ibadah berlangsung."
    ],
    familyStep: "Dorong siswa berbagi praktik kebaikan atau refleksi ibadah harian sederhana bersama keluarga di rumah."
  },
  berolahraga: {
    title: "Berolahraga",
    schoolActions: [
      "Sisipkan peregangan aktif atau permainan gerak ringan selama 3–5 menit di sela pergantian jam pelajaran yang panjang.",
      "Sediakan kegiatan olahraga rekreasional yang inklusif saat jam istirahat atau ekstrakurikuler agar siswa dengan berbagai tingkat kebugaran merasa nyaman ikut serta.",
      "Ajak siswa mencatat aktivitas fisik harian sederhana (seperti jalan kaki, senam ringan, atau olahraga mandiri) sebagai bagian dari tantangan kebugaran kelas."
    ],
    familyStep: "Libatkan siswa dan orang tua untuk meluangkan waktu beraktivitas fisik ringan bersama di akhir pekan, seperti jalan pagi atau senam keluarga."
  },
  makanSehat: {
    title: "Makan sehat/bergizi",
    schoolActions: [
      "Ajak siswa mengenali pilihan bekal dan jajanan harian yang lebih bergizi seimbang melalui diskusi singkat atau kampanye poster di kelas.",
      "Adakan edukasi praktis tentang pentingnya sarapan, konsumsi sayur/buah, serta mengurangi minuman berpemanis secara bertahap.",
      "Koordinasikan dengan pengelola kantin sekolah untuk menyediakan pilihan menu sehat, higienis, dan terjangkau bagi siswa."
    ],
    familyStep: "Dorong orang tua dan siswa merencanakan menu bekal sederhana serta membawa botol air minum isi ulang ke sekolah."
  },
  gemarBelajar: {
    title: "Gemar belajar",
    schoolActions: [
      "Gunakan metode belajar kolaboratif singkat atau diskusi kelompok kecil agar siswa terbiasa bertukar gagasan dan bertanya secara aktif.",
      "Bantu siswa menyusun target belajar mingguan yang terukur dan realistis sehingga beban tugas terasa lebih terkelola.",
      "Manfaatkan pojok baca kelas atau sumber belajar variatif untuk menumbuhkan rasa ingin tahu di luar tugas rutin."
    ],
    familyStep: "Ajak orang tua menyediakan suasana rumah yang tenang dan mendukung waktu belajar mandiri siswa selama 30–60 menit setiap hari."
  },
  bermasyarakat: {
    title: "Bermasyarakat",
    schoolActions: [
      "Libatkan siswa dalam kegiatan gotong royong menjaga kebersihan kelas, taman sekolah, atau proyek kepedulian sosial di lingkungan sekitar.",
      "Beri peran bergilir pada kepengurusan kelas atau kegiatan OSIS agar setiap siswa berlatih bekerja sama dan berkomunikasi dengan empati.",
      "Apresiasi inisiatif siswa yang membantu teman sebaya maupun warga sekolah dalam kegiatan sehari-hari."
    ],
    familyStep: "Dorong siswa berpartisipasi dalam kegiatan sosial atau kerja bakti ringan di lingkungan tempat tinggal bersama keluarga."
  },
  tidurCepat: {
    title: "Tidur cepat",
    schoolActions: [
      "Adakan sesi berbagi ringan bersama wali kelas dan guru BK mengenai manajemen waktu sore hingga malam agar siswa tidak menumpuk tugas larut malam.",
      "Edukasi siswa secara ramah tentang kebiasaan mengurangi penggunaan gawai 30 menit sebelum waktu tidur.",
      "Selaraskan penjadwalan pengumpulan tugas antar-mata pelajaran bila memungkinkan agar beban belajar siswa tetap seimbang."
    ],
    familyStep: "Ajak siswa dan orang tua menyepakati jam istirahat malam yang konsisten serta batas waktu penggunaan layar di rumah."
  }
};

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

let activeWaveId = "all";
let lastFocusedElement = null;

function toSafeNumber(val) {
  const num = typeof val === "number" ? val : Number(val);
  return Number.isFinite(num) ? num : null;
}

function formatIdPercent(num) {
  const safe = toSafeNumber(num);
  if (safe === null) return "N/A";
  return safe.toFixed(2).replace(".", ",") + "%";
}

function formatIdPoints(num) {
  const safe = toSafeNumber(num);
  if (safe === null) return "N/A";
  return safe.toFixed(2).replace(".", ",") + " poin";
}

function getValidHabitEntries(waveObj) {
  const values = waveObj && waveObj.values ? waveObj.values : {};
  return HABITS
    .map((habit) => ({
      ...habit,
      value: toSafeNumber(values[habit.key])
    }))
    .filter((entry) => entry.value !== null);
}

function getSortedHabitsForWave(waveObj) {
  const entries = getValidHabitEntries(waveObj);
  return [...entries].sort((a, b) => b.value - a.value);
}

function getConsistentTopHabit() {
  const waveIds = ["all", "g1", "g2", "g3", "g4"];
  for (const habit of HABITS) {
    const ranks = waveIds.map((wId) => {
      const w = WAVE_DATA[wId];
      if (!w) return null;
      const sorted = getSortedHabitsForWave(w);
      const idx = sorted.findIndex((item) => item.key === habit.key);
      return idx === -1 ? null : idx + 1;
    });

    const isPresentEverywhere = ranks.every((r) => r !== null);
    const isAlwaysTopTwo = isPresentEverywhere && ranks.every((r) => r <= 2);

    if (isAlwaysTopTwo) {
      return {
        habit,
        ranks,
        allWaveValue: toSafeNumber(WAVE_DATA.all?.values?.[habit.key])
      };
    }
  }
  return null;
}

function renderActionButton(habitKey, habitLabel) {
  return `
    <button
      type="button"
      class="habit-action-btn"
      data-action-habit="${habitKey}"
      aria-haspopup="dialog"
      aria-label="Lihat saran aksi untuk kebiasaan ${habitLabel}"
    >
      <span aria-hidden="true">💡</span>
      <span>Lihat saran aksi</span>
    </button>
  `;
}

function openHabitActionModal(habitKey, triggerEl) {
  const modal = document.getElementById("habitActionModal");
  const titleEl = document.getElementById("actionModalTitle");
  const subtitleEl = document.getElementById("actionModalSubtitle");
  const bodyEl = document.getElementById("actionModalBody");
  const closeBtn = document.getElementById("closeActionModalBtn");

  if (!modal || !titleEl || !subtitleEl || !bodyEl) return;

  lastFocusedElement = triggerEl || document.activeElement;

  const waveObj = WAVE_DATA[activeWaveId] || WAVE_DATA.all;
  const habitMeta = HABITS.find((h) => h.key === habitKey);
  const actionInfo = HABIT_ACTIONS[habitKey];
  const habitLabel = actionInfo?.title || habitMeta?.label || "Kebiasaan 7KAIH";
  const currentVal = toSafeNumber(waveObj.values?.[habitKey]);
  const isVerify = waveObj.needsVerificationKey === habitKey;

  titleEl.textContent = habitLabel;
  subtitleEl.textContent =
    currentVal !== null
      ? `Capaian pada ${waveObj.shortLabel}: ${formatIdPercent(currentVal)}`
      : `Konteks: ${waveObj.shortLabel}`;

  if (!actionInfo || !Array.isArray(actionInfo.schoolActions) || actionInfo.schoolActions.length === 0) {
    bodyEl.innerHTML = `
      <p class="award-desc">Saran tindakan praktis untuk kebiasaan <strong>${habitLabel}</strong> belum tersedia saat ini.</p>
    `;
  } else {
    const verifyHtml = isVerify
      ? `<div class="action-verify-note" role="status">
           <strong>Catatan Data (${waveObj.label}):</strong> ${waveObj.verificationNote || "Data memerlukan verifikasi label."} Saran di bawah tetap dapat digunakan sebagai langkah pembiasaan umum yang positif.
         </div>`
      : "";

    const stepsHtml = actionInfo.schoolActions
      .map((step) => `<li>${step}</li>`)
      .join("");

    const familyHtml = actionInfo.familyStep
      ? `<div class="action-collab-box">
           <h3>Langkah Sederhana Bersama Siswa / Orang Tua</h3>
           <p>${actionInfo.familyStep}</p>
         </div>`
      : "";

    bodyEl.innerHTML = `
      ${verifyHtml}
      <div>
        <h3 class="action-group-title">Saran Tindakan Praktis untuk Guru &amp; Sekolah</h3>
        <ol class="action-steps-list">
          ${stepsHtml}
        </ol>
      </div>
      ${familyHtml}
    `;
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeHabitActionModal() {
  const modal = document.getElementById("habitActionModal");
  if (!modal || modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function handleModalKeydown(e) {
  const modal = document.getElementById("habitActionModal");
  if (!modal || modal.classList.contains("hidden")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeHabitActionModal();
    return;
  }

  if (e.key === "Tab") {
    const focusable = modal.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

let barChartInstance = null;
let doughnutChartInstance = null;
let radarChartInstance = null;
let lineTrendChartInstance = null;

function renderAchievementInsights(waveObj) {
  const grid = document.getElementById("achievementGrid");
  const subtext = document.getElementById("achievementSubtext");
  const badge = document.getElementById("achievementWaveBadge");

  if (!grid || !subtext || !badge) return;

  badge.textContent = waveObj.label;
  subtext.textContent = `Sorotan penghargaan & metrik utama berdasarkan data ${waveObj.shortLabel}.`;

  const sorted = getSortedHabitsForWave(waveObj);

  if (sorted.length === 0) {
    grid.innerHTML = `
      <article class="award-card award-card--focus">
        <div class="award-top">
          <span class="award-badge">Info Data</span>
          <span class="award-medal" aria-hidden="true">ℹ️</span>
        </div>
        <h3 class="award-title">Data Belum Tersedia</h3>
        <div class="award-metric">—</div>
        <p class="award-desc">Nilai persentase kebiasaan belum tersedia untuk gelombang yang dipilih.</p>
      </article>
    `;
    return;
  }

  const highest = sorted[0];
  const lowest = sorted[sorted.length - 1];
  const spread = highest.value - lowest.value;
  const aboveThreshold = sorted.filter((item) => item.value >= 75);
  const isLowestVerify = waveObj.needsVerificationKey === lowest.key;
  const consistentInfo = getConsistentTopHabit();

  const cards = [];

  // 1. Capaian Tertinggi
  cards.push(`
    <article class="award-card award-card--gold">
      <div class="award-top">
        <span class="award-badge">Capaian Tertinggi</span>
        <span class="award-medal" aria-hidden="true">🏆</span>
      </div>
      <div>
        <h3 class="award-title">${highest.label}</h3>
        <div class="award-metric">${formatIdPercent(highest.value)}</div>
      </div>
      <p class="award-desc">Peringkat #1 pada ${waveObj.shortLabel} di antara ${sorted.length} kebiasaan terdata.</p>
      <div class="award-footnote">Penghargaan Puncak Capaian</div>
      ${renderActionButton(highest.key, highest.label)}
    </article>
  `);

  // 2. Konsisten (berdasarkan konsistensi peringkat teratas lintas gelombang)
  if (consistentInfo) {
    const activeVal = toSafeNumber(waveObj.values?.[consistentInfo.habit.key]);
    cards.push(`
      <article class="award-card award-card--blue">
        <div class="award-top">
          <span class="award-badge">Konsisten</span>
          <span class="award-medal" aria-hidden="true">⭐</span>
        </div>
        <div>
          <h3 class="award-title">${consistentInfo.habit.label}</h3>
          <div class="award-metric">${formatIdPercent(activeVal)}</div>
        </div>
        <p class="award-desc">Selalu berada di 2 besar pada Gabungan G1–G4 dan Gelombang 1–4.</p>
        <div class="award-footnote">Konsisten Peringkat #1–#2 Lintas Gelombang</div>
        ${renderActionButton(consistentInfo.habit.key, consistentInfo.habit.label)}
      </article>
    `);
  } else {
    cards.push(`
      <article class="award-card award-card--blue">
        <div class="award-top">
          <span class="award-badge">Ambang ≥ 75%</span>
          <span class="award-medal" aria-hidden="true">⭐</span>
        </div>
        <div>
          <h3 class="award-title">${aboveThreshold.length} dari ${sorted.length} Kebiasaan</h3>
          <div class="award-metric">${aboveThreshold.length} Kebiasaan</div>
        </div>
        <p class="award-desc">Mencapai nilai di atas atau sama dengan 75,00% pada ${waveObj.shortLabel}.</p>
        <div class="award-footnote">Indikator Ambang Capaian 75%</div>
      </article>
    `);
  }

  // 3. Perlu Perhatian (Capaian Terendah)
  cards.push(`
    <article class="award-card ${isLowestVerify ? "award-card--verify" : "award-card--focus"}">
      <div class="award-top">
        <span class="award-badge">${isLowestVerify ? "Perlu Diverifikasi" : "Perlu Perhatian"}</span>
        <span class="award-medal" aria-hidden="true">🎯</span>
      </div>
      <div>
        <h3 class="award-title">${lowest.label}</h3>
        <div class="award-metric">${formatIdPercent(lowest.value)}</div>
      </div>
      <p class="award-desc">${
        isLowestVerify
          ? "Nilai literal terendah pada Gelombang 3; catatan koreksi label 81,43% perlu diverifikasi."
          : `Posisi terendah pada ${waveObj.shortLabel}; berpotensi menjadi fokus pendampingan.`
      }</p>
      <div class="award-footnote">${isLowestVerify ? "Status: Menunggu Verifikasi Label" : "Fokus Penguatan Lanjutan"}</div>
      ${renderActionButton(lowest.key, lowest.label)}
    </article>
  `);

  // 4. Selisih Capaian & Ambang ≥ 75%
  cards.push(`
    <article class="award-card award-card--focus">
      <div class="award-top">
        <span class="award-badge">Selisih Capaian</span>
        <span class="award-medal" aria-hidden="true">🏅</span>
      </div>
      <div>
        <h3 class="award-title">${formatIdPoints(spread)}</h3>
        <div class="award-metric">${aboveThreshold.length}/${sorted.length} ≥ 75%</div>
      </div>
      <p class="award-desc">Jarak antara ${highest.label} (${formatIdPercent(highest.value)}) dan ${lowest.label} (${formatIdPercent(lowest.value)}).</p>
      <div class="award-footnote">Rentang Nilai &amp; Ambang 75%</div>
    </article>
  `);

  grid.innerHTML = cards.join("");
}

function renderRespondentStrip(waveId) {
  document.querySelectorAll(".resp-card").forEach((card) => {
    const waveKey = card.getAttribute("data-resp-wave");
    card.classList.toggle("is-highlighted", waveId === waveKey);
  });

  const chip = document.getElementById("activeRespondentChip");
  if (chip && WAVE_DATA[waveId]) {
    chip.textContent = WAVE_DATA[waveId].respondentsText;
  }
}

function renderHabitCards(waveObj) {
  const grid = document.getElementById("habitsGrid");
  const subtext = document.getElementById("indicatorSubtext");
  if (!grid || !subtext) return;

  subtext.textContent = waveObj.subtext;
  const sortedHabits = getSortedHabitsForWave(waveObj);

  if (sortedHabits.length === 0) {
    grid.innerHTML = `<p class="section-sub">Tidak ada data indikator kebiasaan untuk ditampilkan.</p>`;
    return;
  }

  grid.innerHTML = sortedHabits
    .map((habit) => {
      const val = habit.value;
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
                 <p class="verify-note">${waveObj.verificationNote || "Perlu verifikasi data."}</p>`
              : ""
          }
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${pctWidth}%;"></div>
          </div>
          ${renderActionButton(habit.key, habit.label)}
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

  const findings = Array.isArray(waveObj.findings) && waveObj.findings.length > 0
    ? waveObj.findings
    : ["Belum ada catatan temuan untuk gelombang ini."];
  const recommendations = Array.isArray(waveObj.recommendations) && waveObj.recommendations.length > 0
    ? waveObj.recommendations
    : ["Belum ada rekomendasi tindak lanjut untuk gelombang ini."];

  findingsEl.innerHTML = findings.map((item) => `<li>${item}</li>`).join("");
  recsEl.innerHTML = recommendations.map((item) => `<li>${item}</li>`).join("");
}

function setTextIfExists(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function buildCharts(waveObj) {
  if (typeof Chart === "undefined") return;

  try {
    const sortedHabits = getSortedHabitsForWave(waveObj);
    const labels = sortedHabits.map((h) => h.label);
    const dataVals = sortedHabits.map((h) => h.value);

    const barColors = sortedHabits.map((h) =>
      waveObj.needsVerificationKey === h.key ? "#eab308" : "#114094"
    );
    const barBorders = sortedHabits.map((h) =>
      waveObj.needsVerificationKey === h.key ? "#854d0e" : "#0b2d6b"
    );

    setTextIfExists("barChartTitle", `Peringkat Persentase — ${waveObj.label}`);
    setTextIfExists("barChartSub", `Urutan dari tertinggi ke terendah (${waveObj.shortLabel})`);

    const barCanvas = document.getElementById("barChart");
    if (barCanvas) {
      if (barChartInstance) barChartInstance.destroy();
      barChartInstance = new Chart(barCanvas, {
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
                  const habitItem = sortedHabits[ctx.dataIndex];
                  const baseText = `${ctx.dataset.label}: ${formatIdPercent(ctx.parsed.y)}`;
                  if (habitItem && waveObj.needsVerificationKey === habitItem.key) {
                    return [baseText, "Status: Perlu Diverifikasi (Catatan koreksi label: 81,43%)"];
                  }
                  return baseText;
                }
              }
            }
          }
        }
      });
    }

    setTextIfExists("doughnutChartTitle", `Proporsi Relatif — ${waveObj.label}`);
    setTextIfExists("doughnutChartSub", `Porsi relatif nilai persentase 7 kebiasaan (${waveObj.shortLabel})`);

    const doughnutCanvas = document.getElementById("doughnutChart");
    if (doughnutCanvas) {
      const palette = ["#0b2d6b", "#1756c2", "#2563eb", "#0284c7", "#38bdf8", "#facc15", "#eab308"];
      if (doughnutChartInstance) doughnutChartInstance.destroy();
      doughnutChartInstance = new Chart(doughnutCanvas, {
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
    }

    setTextIfExists("radarChartTitle", `Profil 7 Kebiasaan — ${waveObj.label}`);
    setTextIfExists("radarChartSub", `Pola capaian seluruh kebiasaan (${waveObj.shortLabel})`);

    const radarCanvas = document.getElementById("radarChart");
    if (radarCanvas) {
      const radarEntries = getValidHabitEntries(waveObj);
      const radarLabels = radarEntries.map((h) => h.label);
      const radarValues = radarEntries.map((h) => h.value);

      if (radarChartInstance) radarChartInstance.destroy();
      radarChartInstance = new Chart(radarCanvas, {
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
    }

    const lineCanvas = document.getElementById("lineTrendChart");
    if (!lineTrendChartInstance && lineCanvas) {
      const waveKeys = ["g1", "g2", "g3", "g4"];
      const waveLabels = waveKeys.map(
        (wk, idx) => `Gelombang ${idx + 1} (n=${RESPONDENTS[wk] ?? "N/A"})`
      );

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
        const series = waveKeys.map((wk) => toSafeNumber(WAVE_DATA[wk]?.values?.[habit.key]));
        const baseColor = lineColors[idx % lineColors.length];

        return {
          label: habit.label,
          data: series,
          borderColor: baseColor,
          backgroundColor: baseColor,
          borderWidth: habit.key === "bangunPagi" ? 2.6 : 2,
          tension: 0.25,
          pointBackgroundColor: waveKeys.map((wk) =>
            wk === "g3" && habit.key === "bangunPagi" ? "#facc15" : baseColor
          ),
          pointBorderColor: waveKeys.map((wk) =>
            wk === "g3" && habit.key === "bangunPagi" ? "#854d0e" : "#ffffff"
          ),
          pointBorderWidth: 2,
          pointRadius: waveKeys.map((wk) =>
            wk === "g3" && habit.key === "bangunPagi" ? 7 : 4
          )
        };
      });

      lineTrendChartInstance = new Chart(lineCanvas, {
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
  } catch (err) {
    console.error("Gagal merender visualisasi grafik:", err);
  }
}

function applyWaveFilter(waveId) {
  const waveObj = WAVE_DATA[waveId] || WAVE_DATA.all;
  activeWaveId = waveObj.id;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-wave") === waveObj.id);
  });

  renderAchievementInsights(waveObj);
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

  // Event delegation untuk tombol "Lihat saran aksi" pada seluruh card
  document.addEventListener("click", (event) => {
    const actionBtn = event.target.closest("[data-action-habit]");
    if (actionBtn) {
      const habitKey = actionBtn.getAttribute("data-action-habit");
      openHabitActionModal(habitKey, actionBtn);
      return;
    }

    const modalBackdrop = document.getElementById("habitActionModal");
    if (modalBackdrop && event.target === modalBackdrop) {
      closeHabitActionModal();
    }
  });

  const closeModalBtn = document.getElementById("closeActionModalBtn");
  const doneModalBtn = document.getElementById("doneActionModalBtn");

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeHabitActionModal);
  }
  if (doneModalBtn) {
    doneModalBtn.addEventListener("click", closeHabitActionModal);
  }

  document.addEventListener("keydown", handleModalKeydown);

  applyWaveFilter("all");
});
