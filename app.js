const CSV_URL = 'https://raw.githubusercontent.com/yuval-harpaz/alarms/refs/heads/master/data/alarms.csv';
const DICT_URL = 'https://raw.githubusercontent.com/yuval-harpaz/alarms/master/data/location_dictionary.csv';

const translations = {
  en: {
    appTitle: "Israel Alarms",
    refresh: "Refresh",
    startDate: "Start Date",
    endDate: "End Date",
    cityFilter: "City",
    cityDesc: "Choose 1 city at a time",
    allCities: "All Cities",
    applyFilter: "Apply Filter",
    allTime: "All Time",
    tableTitle: "Recent Alarms",
    thTime: "Time",
    thCities: "Cities",
    thThreat: "Threat",
    thDescription: "Description",
    thOrigin: "Origin",
    loading: "Loading data...",
    empty: "No alarms found for the selected period.",
    lblTotalAlerts: "Total Alerts",
    lblDisruptionTime: "Disruption Time (Hrs)",
    lblDisruptionDesc: "15m per alert",
    lblSleepMild: "Mild Sleep Impairment",
    lblSleepMildDesc: "1 alert (10 PM - 7 AM)",
    lblSleepMajor: "Major Sleep Impairment",
    lblSleepMajorDesc: "2+ alerts (10 PM - 7 AM)",
    lblChartTitle: "Alerts Timeline",
    perDay: "# of Alerts per day",
    perWeek: "# of Alerts per week",
    perMonth: "# of Alerts per month",
    perHour: "# of Alerts per hour",
    btnGroupDay: "Day",
    btnGroupWeek: "Week",
    btnGroupMonth: "Month",
    btnChartBack: "Back to Days",
    legNone: "No Sleep Impairment",
    legMild: "Mild (1 Alert)",
    legMajor: "Major (2+ Alerts)"
  },
  fr: {
    appTitle: "Visionneuse d'Alarmes",
    refresh: "Actualiser",
    startDate: "Date de Début",
    endDate: "Date de Fin",
    cityFilter: "Ville",
    cityDesc: "Choisissez 1 ville à la fois",
    allCities: "Toutes les Villes",
    applyFilter: "Appliquer",
    allTime: "Tout le temps",
    tableTitle: "Alarmes Récentes",
    thTime: "Heure",
    thCities: "Villes",
    thThreat: "Menace",
    thDescription: "Description",
    thOrigin: "Origine",
    loading: "Chargement des données...",
    empty: "Aucune alarme trouvée pour cette période.",
    lblTotalAlerts: "Total des Alarmes",
    lblDisruptionTime: "Temps de Perturbation (Hrs)",
    lblDisruptionDesc: "15m par alarme",
    lblSleepMild: "Sommeil - Perturbation Légère",
    lblSleepMildDesc: "1 alarme (22h - 7h)",
    lblSleepMajor: "Sommeil - Perturbation Majeure",
    lblSleepMajorDesc: "2+ alarmes (22h - 7h)",
    lblChartTitle: "Chronologie",
    perDay: "# d'Alarmes par jour",
    perWeek: "# d'Alarmes par semaine",
    perMonth: "# d'Alarmes par mois",
    perHour: "# d'Alarmes par heure",
    btnGroupDay: "Jour",
    btnGroupWeek: "Semaine",
    btnGroupMonth: "Mois",
    btnChartBack: "Retour aux Jours",
    legNone: "Aucune Perturbation",
    legMild: "Légère (1 Alarme)",
    legMajor: "Majeure (2+ Alarmes)"
  },
  he: {
    appTitle: "מציג נתוני התראות",
    refresh: "רענן",
    startDate: "תאריך התחלה",
    endDate: "תאריך סיום",
    cityFilter: "עיר",
    cityDesc: "בחר עיר אחת בכל פעם",
    allCities: "כל הערים",
    applyFilter: "החל סינון",
    allTime: "כל הזמן",
    tableTitle: "התראות אחרונות",
    thTime: "זמן",
    thCities: "ערים",
    thThreat: "איום",
    thDescription: "תיאור",
    thOrigin: "מקור",
    loading: "טוען נתונים...",
    empty: "לא נמצאו התראות שמתאימות לסינון.",
    lblTotalAlerts: "סך הכל התראות",
    lblDisruptionTime: "זמן שיבוש (שעות)",
    lblDisruptionDesc: "15 דק' להתראה",
    lblSleepMild: "פגיעה קלה בשינה",
    lblSleepMildDesc: "התראת לילה (22:00-07:00)",
    lblSleepMajor: "פגיעה חמורה בשינה",
    lblSleepMajorDesc: "+2 התראות (22:00-07:00)",
    lblChartTitle: "ציר זמן",
    perDay: "מספר התראות ליום",
    perWeek: "מספר התראות לשבוע",
    perMonth: "מספר התראות לחודש",
    perHour: "מספר התראות לשעה",
    btnGroupDay: "יום",
    btnGroupWeek: "שבוע",
    btnGroupMonth: "חודש",
    btnChartBack: "חזרה לימים",
    legNone: "אין פגיעה בשינה",
    legMild: "קלה (התראה 1)",
    legMajor: "חמורה (+2 התראות)"
  }
};

const valueDict = {
  en: {
    "ירי רקטות וטילים": "Rocket and missile fire",
    "חדירת כלי טיס עוין": "Hostile aircraft intrusion",
    "רעידת אדמה": "Earthquake",
    "אירוע רדיולוגי": "Radiological event",
    "חדירת מחבלים": "Terrorist infiltration",
    "צונאמי": "Tsunami",
    "Gaza": "Gaza",
    "Lebanon": "Lebanon",
    "Syria": "Syria"
  },
  fr: {
    "ירי רקטות וטילים": "Tirs de roquettes",
    "חדירת כלי טיס עוין": "Infiltration d'aéronef",
    "רעידת אדמה": "Tremblement de terre",
    "אירוע רדיולוגי": "Événement radiologique",
    "חדירת מחבלים": "Infiltration de terroristes",
    "צונאמי": "Tsunami",
    "Gaza": "Gaza",
    "Lebanon": "Liban",
    "Syria": "Syrie"
  },
  he: {
    "Gaza": "עזה",
    "Lebanon": "לבנון",
    "Syria": "סוריה"
  }
};

let currentLang = 'en';
let allData = [];
let locationDict = {}; 
let uniqueCities = new Set();
let currentFilteredData = [];
let chartInstance = null;
let chartGroupMode = 'day'; 
let drilldownDate = null;

const els = {
  appTitle: document.getElementById('app-title'),
  refreshText: document.getElementById('refresh-text'),
  labelStartDate: document.getElementById('label-start-date'),
  labelEndDate: document.getElementById('label-end-date'),
  labelCity: document.getElementById('label-city'),
  labelCityDesc: document.getElementById('label-city-desc'),
  cityFilter: document.getElementById('city-filter'),
  optAllCities: document.getElementById('opt-all-cities'),
  applyFilterText: document.getElementById('apply-filter-text'),
  clearFilterText: document.getElementById('clear-filter-text'),
  tableTitle: document.getElementById('table-title'),
  thTime: document.getElementById('th-time'),
  thCities: document.getElementById('th-cities'),
  thThreat: document.getElementById('th-threat'),
  thDescription: document.getElementById('th-description'),
  thOrigin: document.getElementById('th-origin'),
  loadingState: document.getElementById('loading-state'),
  emptyState: document.getElementById('empty-state'),
  alarmsTbody: document.getElementById('alarms-tbody'),
  alarmCount: document.getElementById('alarm-count'),
  
  // Dashboard Els
  dashboardSection: document.getElementById('dashboard-section'),
  lblTotalAlerts: document.getElementById('lbl-total-alerts'),
  valTotalAlerts: document.getElementById('val-total-alerts'),
  lblDisruptionTime: document.getElementById('lbl-disruption-time'),
  valDisruptionTime: document.getElementById('val-disruption-time'),
  lblDisruptionDesc: document.getElementById('lbl-disruption-desc'),
  lblSleepMild: document.getElementById('lbl-sleep-mild'),
  valSleepMild: document.getElementById('val-sleep-mild'),
  lblSleepMildDesc: document.getElementById('lbl-sleep-mild-desc'),
  lblSleepMajor: document.getElementById('lbl-sleep-major'),
  valSleepMajor: document.getElementById('val-sleep-major'),
  lblSleepMajorDesc: document.getElementById('lbl-sleep-major-desc'),
  lblChartTitle: document.getElementById('lbl-chart-title'),
  btnGroupDay: document.getElementById('btn-group-day'),
  btnGroupWeek: document.getElementById('btn-group-week'),
  btnGroupMonth: document.getElementById('btn-group-month'),
  btnChartBack: document.getElementById('btn-chart-back'),
  chartLegend: document.getElementById('chart-legend'),
  legNone: document.getElementById('leg-none'),
  legMild: document.getElementById('leg-mild'),
  legMajor: document.getElementById('leg-major')
};

function translateText(text, type) {
  if (!text) return '';
  if (currentLang === 'he') {
      if (type === 'origin' && valueDict.he[text]) return valueDict.he[text];
      return text;
  }
  
  if (type === 'city') {
    return text.split(',').map(c => {
      let trimmed = c.trim();
      return locationDict[trimmed] || trimmed;
    }).join(', ');
  } else if (type === 'description' || type === 'origin') {
    return valueDict[currentLang][text] || text;
  }
  return text;
}

function updateTranslations() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  
  els.appTitle.textContent = t.appTitle;
  els.refreshText.textContent = t.refresh;
  els.labelStartDate.textContent = t.startDate;
  els.labelEndDate.textContent = t.endDate;
  els.labelCity.textContent = t.cityFilter;
  if(els.labelCityDesc) els.labelCityDesc.textContent = t.cityDesc;
  els.optAllCities.textContent = t.allCities;
  els.applyFilterText.textContent = t.applyFilter;
  els.clearFilterText.textContent = t.allTime;
  els.tableTitle.firstChild.textContent = t.tableTitle + " (";
  els.thTime.textContent = t.thTime;
  els.thCities.textContent = t.thCities;
  els.thThreat.textContent = t.thThreat;
  els.thDescription.textContent = t.thDescription;
  els.thOrigin.textContent = t.thOrigin;
  els.loadingState.textContent = t.loading;
  els.emptyState.textContent = t.empty;

  els.lblTotalAlerts.textContent = t.lblTotalAlerts;
  els.lblDisruptionTime.textContent = t.lblDisruptionTime;
  els.lblDisruptionDesc.textContent = t.lblDisruptionDesc;
  els.lblSleepMild.textContent = t.lblSleepMild;
  els.lblSleepMildDesc.textContent = t.lblSleepMildDesc;
  els.lblSleepMajor.textContent = t.lblSleepMajor;
  els.lblSleepMajorDesc.textContent = t.lblSleepMajorDesc;
  els.btnGroupDay.textContent = t.btnGroupDay;
  els.btnGroupWeek.textContent = t.btnGroupWeek;
  els.btnGroupMonth.textContent = t.btnGroupMonth;
  els.btnChartBack.textContent = t.btnChartBack;
  if(els.legNone) els.legNone.textContent = t.legNone;
  if(els.legMild) els.legMild.textContent = t.legMild;
  if(els.legMajor) els.legMajor.textContent = t.legMajor;

  let modeTitle = "";
  if (chartGroupMode === 'day') modeTitle = t.perDay;
  else if (chartGroupMode === 'week') modeTitle = t.perWeek;
  else if (chartGroupMode === 'month') modeTitle = t.perMonth;
  else if (chartGroupMode === 'hour') modeTitle = t.perHour;

  if (chartGroupMode === 'hour' && drilldownDate) {
      els.lblChartTitle.textContent = t.lblChartTitle + ` (${modeTitle}) - ${drilldownDate}`;
  } else {
      els.lblChartTitle.textContent = t.lblChartTitle + ` (${modeTitle})`;
  }

  populateCityFilter();
  if (allData.length > 0) {
      if(chartInstance) renderChart(currentFilteredData);
      renderTable(currentFilteredData);
  }
}

async function fetchDictionary() {
    return new Promise((resolve) => {
        Papa.parse(DICT_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                results.data.forEach(row => {
                    if (row.Hebrew && row.English) {
                        locationDict[row.Hebrew.trim()] = row.English.trim();
                    }
                });
                resolve();
            },
            error: function(err) {
                console.error("Error loading dict", err);
                resolve(); 
            }
        });
    });
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  const pd = new Date(dateStr.replace(' ', 'T'));
  return isNaN(pd) ? null : pd;
}

let initialLoad = true;

async function fetchData() {
  els.loadingState.classList.remove('hidden');
  els.alarmsTbody.innerHTML = '';
  els.emptyState.classList.add('hidden');
  els.alarmCount.textContent = '0';
  els.dashboardSection.classList.add('hidden');
  
  if (Object.keys(locationDict).length === 0) {
      await fetchDictionary();
  }

  try {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        allData = results.data.reverse();
        
        uniqueCities.clear();
        allData.forEach(row => {
            if (row.cities) {
                row.cities.split(',').forEach(c => uniqueCities.add(c.trim()));
            }
        });
        
        populateCityFilter();
        
        if (initialLoad) {
            if (uniqueCities.has('רעננה')) {
                els.cityFilter.value = 'רעננה';
            }
            document.getElementById('start-date').value = '2026-02-28';
            initialLoad = false;
        }

        applyFilters();
      },
      error: function(err) {
        console.error("Error parsing CSV:", err);
        els.loadingState.textContent = "Error loading data.";
      }
    });
  } catch (err) {
    console.error(err);
  }
}

function populateCityFilter() {
    const currentVal = els.cityFilter.value;
    
    while (els.cityFilter.options.length > 1) {
        els.cityFilter.remove(1);
    }
    
    const cityObjects = Array.from(uniqueCities).map(hebrew => ({
        hebrew: hebrew,
        display: translateText(hebrew, 'city')
    })).sort((a,b) => a.display.localeCompare(b.display));
    
    cityObjects.forEach(city => {
        const opt = document.createElement('option');
        opt.value = city.hebrew;
        opt.textContent = city.display;
        els.cityFilter.appendChild(opt);
    });
    
    if (uniqueCities.has(currentVal)) {
        els.cityFilter.value = currentVal;
    }
}

function applyFilters() {
  const startVal = document.getElementById('start-date').value;
  const endVal = document.getElementById('end-date').value;
  const cityVal = els.cityFilter.value;
  
  const start = startVal ? new Date(startVal + 'T00:00:00') : null;
  const end = endVal ? new Date(endVal + 'T23:59:59') : new Date();

  // Reset drilldown when filters change
  if (chartGroupMode === 'hour') {
      chartGroupMode = 'day';
      drilldownDate = null;
      els.lblChartTitle.textContent = translations[currentLang].lblChartTitle + ` (${translations[currentLang].perDay})`;
      document.querySelectorAll('.chart-btn').forEach(b => {
          b.classList.remove('hidden', 'active');
          if(b.dataset.group === 'day') b.classList.add('active');
      });
      els.btnChartBack.classList.add('hidden');
  }

  currentFilteredData = allData.filter(row => {
    const rowDate = parseDate(row.time);
    if (!rowDate) return false;
    if (start && rowDate < start) return false;
    if (rowDate > end) return false;
    
    if (cityVal && row.cities) {
        const rowCities = row.cities.split(',').map(c => c.trim());
        if (!rowCities.includes(cityVal)) return false;
    }
    return true;
  });

  renderDashboard(currentFilteredData);
  renderTable(currentFilteredData);
}

function clearFilters() {
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
  els.cityFilter.value = '';
  applyFilters();
}

function formatDateLocal(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function formatMonthLocal(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${yyyy}-${mm}`;
}

function getWeekStart(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  return formatDateLocal(date);
}

function renderChart(data) {
  const counts = {};
  const sleepImpairmentByDay = {}; 
  
  data.forEach(row => {
    const d = parseDate(row.time);
    if (!d) return;
    
    const hour = d.getHours();
    const isOvernight = (hour >= 22 || hour < 7);
    const nightDate = new Date(d);
    if (hour >= 22) nightDate.setDate(nightDate.getDate() + 1);
    const nightDateStr = formatDateLocal(nightDate);
    
    if (!sleepImpairmentByDay[nightDateStr]) sleepImpairmentByDay[nightDateStr] = 0;
    if (isOvernight) sleepImpairmentByDay[nightDateStr]++;

    let key;
    if (chartGroupMode === 'day') {
      key = formatDateLocal(d);
    } else if (chartGroupMode === 'month') {
      key = formatMonthLocal(d);
    } else if (chartGroupMode === 'week') {
      key = getWeekStart(d);
    } else if (chartGroupMode === 'hour') {
      const rowDateStr = formatDateLocal(d);
      if (rowDateStr !== drilldownDate) return; 
      key = hour.toString().padStart(2, '0') + ':00';
    }

    if (key !== undefined) {
        counts[key] = (counts[key] || 0) + 1;
    }
  });

  if (chartGroupMode === 'hour') {
      for (let i = 0; i < 24; i++) {
          const k = i.toString().padStart(2, '0') + ':00';
          if (!counts[k]) counts[k] = 0;
      }
  }

  const sortedKeys = Object.keys(counts).sort();
  const values = sortedKeys.map(k => counts[k]);
  
  const formatter = new Intl.DateTimeFormat(currentLang === 'he' ? 'he-IL' : (currentLang === 'fr' ? 'fr-FR' : 'en-US'), {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
  });

  const displayLabels = sortedKeys.map(k => {
      if (chartGroupMode === 'day') {
          const d = new Date(k + 'T12:00:00');
          return formatter.format(d);
      }
      return k;
  });

  if (els.chartLegend) {
      els.chartLegend.style.display = chartGroupMode === 'day' ? 'flex' : 'none';
  }

  const bgColors = sortedKeys.map(k => {
      if (chartGroupMode === 'day') {
          const nightCounts = sleepImpairmentByDay[k] || 0;
          if (nightCounts >= 2) return '#ff4757'; 
          if (nightCounts === 1) return '#ffa502'; 
          return 'rgba(255, 255, 255, 0.7)'; 
      }
      return 'rgba(255, 255, 255, 0.7)';
  });

  const ctx = document.getElementById('alertsChart').getContext('2d');
  if (chartInstance) {
    chartInstance.destroy();
  }

  Chart.defaults.color = 'rgba(255, 255, 255, 0.7)';

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: displayLabels,
      datasets: [{
        label: translations[currentLang][chartGroupMode === 'day' ? 'perDay' : chartGroupMode === 'week' ? 'perWeek' : chartGroupMode === 'month' ? 'perMonth' : 'perHour'],
        data: values,
        backgroundColor: bgColors,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (e, elements) => {
          if (chartGroupMode === 'day' && elements.length > 0) {
              const index = elements[0].index;
              drilldownDate = sortedKeys[index];
              chartGroupMode = 'hour';
              
              document.querySelectorAll('.chart-btn').forEach(b => b.classList.add('hidden'));
              els.btnChartBack.classList.remove('hidden');

              const d = new Date(drilldownDate + 'T12:00:00');
              const dateformatter = new Intl.DateTimeFormat(currentLang === 'he' ? 'he-IL' : (currentLang === 'fr' ? 'fr-FR' : 'en-US'), {
                  weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
              });
              const prettyDate = dateformatter.format(d);
              
              els.lblChartTitle.textContent = `${translations[currentLang].lblChartTitle} (${translations[currentLang].perHour}) - ${prettyDate}`;
              
              renderChart(currentFilteredData);
          }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                afterLabel: function(context) {
                    if (chartGroupMode === 'day') {
                        const idx = context.dataIndex;
                        const date = sortedKeys[idx];
                        const impairment = sleepImpairmentByDay[date] || 0;
                        if (impairment >= 2) return `Major Sleep Impairment (${impairment} alerts)`;
                        if (impairment === 1) return `Mild Sleep Impairment (1 alert)`;
                    }
                    return null;
                }
            }
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderDashboard(data) {
  if (data.length === 0) {
    els.dashboardSection.classList.add('hidden');
    return;
  }
  els.dashboardSection.classList.remove('hidden');

  els.valTotalAlerts.textContent = data.length;
  const disruptionHours = (data.length * 15) / 60;
  els.valDisruptionTime.textContent = (Math.round(disruptionHours * 10) / 10).toLocaleString();

  const nightsMap = {}; 
  data.forEach(row => {
    const d = parseDate(row.time);
    if (!d) return;
    
    const hour = d.getHours();
    const isOvernight = (hour >= 22 || hour < 7);
    
    if (isOvernight) {
      // Shift 22:00 - 23:59 to the following day
      const nightDate = new Date(d);
      if (hour >= 22) {
        nightDate.setDate(nightDate.getDate() + 1);
      }
      const dateStr = formatDateLocal(nightDate);
      nightsMap[dateStr] = (nightsMap[dateStr] || 0) + 1;
    }
  });

  let mildNights = 0;
  let majorNights = 0;
  Object.values(nightsMap).forEach(count => {
    if (count === 1) mildNights++;
    else if (count >= 2) majorNights++;
  });

  els.valSleepMild.textContent = mildNights;
  els.valSleepMajor.textContent = majorNights;

  renderChart(data);
}

function renderTable(data) {
  els.loadingState.classList.add('hidden');
  els.alarmsTbody.innerHTML = '';
  els.alarmCount.textContent = data.length;

  if (data.length === 0) {
    els.emptyState.classList.remove('hidden');
    return;
  }
  
  els.emptyState.classList.add('hidden');

  const displayData = data.slice(0, 500); 
  const fragment = document.createDocumentFragment();
  displayData.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.time || ''}</td>
      <td>${translateText(row.cities, 'city')}</td>
      <td>${row.threat || ''}</td>
      <td>${translateText(row.description, 'description')}</td>
      <td>${translateText(row.origin, 'origin')}</td>
    `;
    fragment.appendChild(tr);
  });
  
  els.alarmsTbody.appendChild(fragment);
  if (data.length > 500) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="5" style="text-align:center; color: var(--text-secondary)">Showing latest 500 of ${data.length} alarms...</td>`;
    els.alarmsTbody.appendChild(tr);
  }
}

// Chart Listeners
document.querySelectorAll('.chart-btn').forEach(btn => {
  if (btn.id === 'btn-chart-back') return; 
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    chartGroupMode = e.target.dataset.group;
    if (currentFilteredData.length > 0) renderChart(currentFilteredData);
  });
});

els.btnChartBack.addEventListener('click', () => {
    chartGroupMode = 'day';
    drilldownDate = null;
    els.lblChartTitle.textContent = translations[currentLang].lblChartTitle + ` (${translations[currentLang].perDay})`;
    document.querySelectorAll('.chart-btn').forEach(b => {
        if (b.id !== 'btn-chart-back') b.classList.remove('hidden');
        if (b.dataset.group === 'day') b.classList.add('active');
        else b.classList.remove('active');
    });
    els.btnChartBack.classList.add('hidden');
    renderChart(currentFilteredData);
});

// Listeners
document.getElementById('refresh-btn').addEventListener('click', fetchData);
document.getElementById('apply-filter-btn').addEventListener('click', applyFilters);
document.getElementById('clear-filter-btn').addEventListener('click', clearFilters);
els.cityFilter.addEventListener('change', applyFilters);
document.getElementById('start-date').addEventListener('change', applyFilters);
document.getElementById('end-date').addEventListener('change', applyFilters);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentLang = e.target.dataset.lang;
    updateTranslations();
  });
});

// Init
updateTranslations();
fetchData();
