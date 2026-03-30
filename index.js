/* ===================================================
   index.js – Dashboard Interactivity & Data
   =================================================== */

// ─── DATA ──────────────────────────────────────────────────────────────────
const tableData = [
  {
    category: "Assesses how accurately banking transactions are processed, including correct data input, validation of customer details, and adherence to compliance steps",
    prev: "NA", current: "68%", change: "NA"
  },
  {
    category: "Assesses how effectively and quickly customer complaints are handled — includes initial response time, quality of resolution, and how well issues are escalated when necessary.",
    prev: "NA", current: "35%", change: "NA"
  },
  {
    category: "Evaluates how staff interact with customers — including respectful tone, clear explanations of services, and ability to understand and respond empathetically to customer needs",
    prev: "NA", current: "40%", change: "NA"
  },
  {
    category: "Measures the speed of service delivery, including how long customers wait in line or on calls, and the time taken to complete requests or transactions.",
    prev: "NA", current: "55%", change: "NA"
  },
  {
    category: "Reviews the physical condition and customer-friendliness of the branch, such as cleanliness, seating comfort, signage clarity, and accessibility for differently-abled individuals.",
    prev: "NA", current: "40%", change: "NA"
  }
];

const heatmapRows = [
  "Reviews the physical condition and customer-friendliness of the branch, such as cleanliness, seating comfort, signage clarity, and accessibility for differently-abled individuals.",
  "Branch Ambience Reviews the physical condition and customer-friendliness of the branch, such as cleanliness, seating coReviews the physical condition and customer-friendliness of the branch, such as cleanliness, seating co",
  "Service Timeliness",
  "Transaction Handling",
  "Customer Interaction"
];

// ─── STATE ──────────────────────────────────────────────────────────────────
let labelState = 'collapsed'; // 'full' or 'collapsed' (shortened)

// Hierarchy State (Stacked)
let hierarchyStack = [
  { level: 'Zone', path: ['Global'], rangeMin: 0, rangeMax: 100 }
];

// DATA DEFINITIONS
const hierarchyData = {
  'Zone': {
    cols: ["ZONE 29", "Zone SQ 10", "Tiger Zone", "Zone SQ 6", "Zone SQ 08", "Zone SQ 03", "Lion Zone", "Zone SQ 04", "Zone SQ 07", "Zone SQ 05", "Zone SQ 11", "Zone SQ 12", "Zone SQ 13"],
    data: [
      [50, 100, 100, 100, null, 47, 100, 100, 100, 100, 85, 90, 95],
      [50, 0, 100, 100, null, 51, 100, 100, 100, 100, 70, 75, 80],
      [100, 100, 100, 100, null, 33, null, 100, 100, null, 0, 65, 70],
      [100, 100, null, null, 100, 29, 100, null, null, 0, 40, 45, 50],
      [100, 100, null, 100, 100, 59, null, 100, 100, 100, 20, 25, 30]
    ]
  },
  'Region': {
    cols: ["Reg North", "Reg South", "Reg East", "Reg West", "Reg Central", "Reg North E", "Reg North W", "Reg South E", "Reg South W", "Reg Coastal", "Reg Inland", "Reg Border", "Reg Hub"],
    data: [
      [80, 90, 70, 85, 60, 75, 82, 88, 65, 78, 84, 72, 89],
      [75, 85, 65, 70, 55, 68, 72, 80, 60, 70, 78, 64, 82],
      [90, 100, 80, 95, 70, 0, 92, 98, 85, null, 96, 88, 95],
      [60, 70, 50, null, 45, 55, 62, 68, 48, 58, 64, 52, 69],
      [40, 50, 30, 45, 35, 38, 42, 48, 28, 0, 44, 32, 49]
    ]
  },
  'Cluster': {
    cols: ["Clus A", "Clus B", "Clus C", "Clus D", "Clus E", "Clus F", "Clus G", "Clus H", "Clus I", "Clus J", "Clus K", "Clus L", "Clus M"],
    data: [
      [95, 88, 72, 90, 85, 92, 78, 84, 88, 91, 86, 89, 93],
      [80, 75, 60, 85, 70, 78, 65, 72, 75, 80, 72, 78, 82],
      [100, 95, 85, 98, 92, 96, 88, 94, 98, 100, 95, 98, 100],
      [70, 65, 50, 75, 60, 68, 55, 62, 65, 70, 62, 68, 72],
      [50, 45, 35, 55, 40, 48, 38, 42, 45, 50, 42, 48, 52]
    ]
  }
};


// ─── UTILS ──────────────────────────────────────────────────────────────────
/**
 * Measure the pixel width of a text string using a canvas context.
 */
function measureTextWidth(text, font = '600 11px Inter, sans-serif') {
  const canvas = measureTextWidth._canvas || (measureTextWidth._canvas = document.createElement('canvas'));
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  return ctx.measureText(text).width;
}

/**
 * Map a 0-100 value to a CSS color via a green→yellow→orange→red gradient.
 */
function valueToColor(val) {
  // 0   = bright green  (#22c55e)
  // 33  = yellow        (#eab308)
  // 67  = orange        (#f97316)
  // 100 = deep red      (#b91c1c)
  const stops = [
    { v: 0, r: 34, g: 197, b: 94 },
    { v: 33, r: 234, g: 179, b: 8 },
    { v: 67, r: 249, g: 115, b: 22 },
    { v: 100, r: 185, g: 28, b: 28 }
  ];
  let lo = stops[0], hi = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (val >= stops[i].v && val <= stops[i + 1].v) { lo = stops[i]; hi = stops[i + 1]; break; }
  }
  const t = hi.v === lo.v ? 0 : (val - lo.v) / (hi.v - lo.v);
  const r = Math.round(lo.r + t * (hi.r - lo.r));
  const g = Math.round(lo.g + t * (hi.g - lo.g));
  const b = Math.round(lo.b + t * (hi.b - lo.b));
  return `rgb(${r},${g},${b})`;
}

// ─── HIGHLIGHT CELLS ────────────────────────────────────────────────────────
function updateCellHighlights(container, rMin, rMax) {
  container.querySelectorAll('.heatmap-cell[data-value]').forEach(cell => {
    const val = parseFloat(cell.dataset.value);
    const inRange = val >= rMin && val <= rMax;
    cell.classList.toggle('cell-dimmed', !inRange);
    cell.classList.toggle('cell-in-range', inRange);
  });
}

// ─── RENDER TABLE ──────────────────────────────────────────────────────────
function renderTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  tableData.forEach((row, i) => {
    const tr = document.createElement('tr');
    tr.style.animationDelay = `${i * 0.07 + 0.2}s`;
    tr.innerHTML = `<td>${row.category}</td><td>${row.prev}</td><td>${row.current}</td><td>${row.change}</td>`;
    tbody.appendChild(tr);
  });
}

// ─── RENDER HEATMAP ────────────────────────────────────────────────────────
function renderHeatmap() {
  const container = document.getElementById('heatmapContainer');
  if (!container) return;
  container.innerHTML = '';

  hierarchyStack.forEach((item, index) => {
    const { level, path } = item;
    const { cols, data } = hierarchyData[level];

    // Create block container
    const block = document.createElement('div');
    block.className = 'heatmap-block';
    if (index > 0) block.style.marginTop = '40px';

    // ── 1. Measure row-label width ──────────────────────────────────────────
    const rowLabelFont = '600 11px Inter, sans-serif';
    let maxRowLabelWidth = Math.ceil(
      Math.max(...heatmapRows.map(r => measureTextWidth(r, rowLabelFont)))
    ) + 40;
    maxRowLabelWidth = Math.min(180, maxRowLabelWidth); // CAP category labels to 180px

    // ── 2. Measure col-label width (labels are rotated 45°) ───────────────
    const colLabelFont = '500 10px Inter, sans-serif';
    const maxColLabelPx = Math.max(...cols.map(c => measureTextWidth(c, colLabelFont)));
    const colCellWidth = Math.max(58, Math.ceil(maxColLabelPx * Math.cos(Math.PI / 4) + 13 * Math.sin(Math.PI / 4)) + 15);
    const cellHeight = 50;
    const gap = 4;

    const headerRow = document.createElement('div');
    headerRow.className = 'heatmap-header-row';
    headerRow.style.marginBottom = '15px';
    headerRow.style.display = 'flex';
    headerRow.style.justifyContent = 'space-between';
    headerRow.style.alignItems = 'center';

    const leftGroup = document.createElement('div');
    leftGroup.style.display = 'flex';
    leftGroup.style.alignItems = 'center';
    leftGroup.style.gap = '8px';

    if (index === 0) {
      const tag = document.createElement('div');
      tag.className = 'level-title-main';
      tag.textContent = `${level} Level`;
      leftGroup.appendChild(tag);
    } else {
      const card = document.createElement('div');
      card.className = 'breadcrumb-card';

      const labelText = path.length === 2 ? 'Selected Zone' : 'Selected Region';
      const valueText = path.length === 2 ? path[1] : path[2];
      const titleText = path.length === 2 ? 'Region Level' : 'Cluster Level';

      // Icon selection
      const iconSvg = path.length === 2
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

      card.innerHTML = `
        <div class="level-title-main" style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
          <span>${titleText}</span>
          <span style="opacity: 0.7; font-weight: 400; font-size: 11px;">|</span>
          <span style="font-weight: 400; font-size: 11px;">${labelText}: <span style="font-weight: 700;">${valueText}</span></span>
        </div>
      `;
      leftGroup.appendChild(card);
    }



    const closeBtn = document.createElement('button');
    closeBtn.className = 'hm-close-btn';
    if (index > 0) {
      closeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      closeBtn.onclick = () => goBackHierarchy(index);
    } else {
      closeBtn.style.visibility = 'hidden';
    }

    headerRow.appendChild(leftGroup);
    headerRow.appendChild(closeBtn);
    block.appendChild(headerRow);

    // ── 3. Main Component Layout ────────────────────────────────────────────
    const mainContent = document.createElement('div');
    mainContent.className = 'hm-main-content';

    // Left Axis Container (Y)
    const yAxisContainer = document.createElement('div');
    yAxisContainer.className = 'hm-y-axis-container';

    // --- Category Description Toggle (Horizontal inside bar) ---
    const catToggle = document.createElement('div');
    catToggle.className = 'cat-description-toggle';
    const isFull = labelState === 'full';
    catToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${isFull
        ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
        : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'}
      </svg>
      <span>${isFull ? 'View less' : 'View Full Category description'}</span>
    `;
    catToggle.onclick = () => {
      labelState = isFull ? 'collapsed' : 'full';
      renderHeatmap();
    };
    yAxisContainer.appendChild(catToggle);

    const yAxisTitle = document.createElement('div');
    yAxisTitle.className = 'hm-y-axis-title';
    yAxisTitle.textContent = 'CATEGORIES';
    yAxisContainer.appendChild(yAxisTitle);

    // Row Label + Grid Cell Assembly
    const rowsArea = document.createElement('div');
    rowsArea.className = 'hm-rows-container';

    data.forEach((rowData, ri) => {
      const rowWrapper = document.createElement('div');
      rowWrapper.className = 'hm-row-wrapper';
      rowWrapper.style.gap = `${gap}px`;

      // Row Label
      const lbl = document.createElement('div');
      lbl.className = 'hm-row-label';
      if (labelState === 'collapsed') lbl.classList.add('is-collapsed');
      lbl.style.width = `${maxRowLabelWidth}px`;
      lbl.style.minWidth = `${maxRowLabelWidth}px`;
      lbl.style.minHeight = `${cellHeight}px`;
      lbl.style.height = 'auto';
      lbl.innerHTML = `
        <span>${heatmapRows[ri]}</span>
        <div class="hm-tooltip">
          <div class="tooltip-content">
            <strong>Category:</strong><br>
            ${heatmapRows[ri]}
          </div>
        </div>`;

      // Cell Row
      const rowEl = document.createElement('div');
      rowEl.className = 'hm-row';
      rowEl.style.gap = `${gap}px`;
      rowEl.style.flex = '1';

      rowData.forEach((val, ci) => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        cell.style.width = `${colCellWidth}px`;
        cell.style.minWidth = `${colCellWidth}px`;
        cell.style.minHeight = `${cellHeight}px`;
        cell.style.height = 'auto';
        cell.style.animationDelay = `${(ri * cols.length + ci) * 0.022 + 0.2}s`;
        cell.dataset.col = ci; // FOR COLUMN HIGHLIGHTING

        if (val !== null) {
          const bg = valueToColor(val);
          cell.style.setProperty('--cell-bg', bg);
          cell.dataset.value = val;
          const inRange = val >= item.rangeMin && val <= item.rangeMax;
          if (!inRange) cell.classList.add('cell-dimmed');

          cell.innerHTML = `
            <span class="cell-pct">${val}%</span>
            <div class="hm-tooltip">
              <div class="tooltip-content">
                <strong>${heatmapRows[ri]}</strong><br>
                ${cols[ci]}: <b>${val}%</b>
              </div>
            </div>`;
          cell.addEventListener('click', createRipple);
        } else {
          cell.classList.add('cell-empty');
          cell.innerHTML = `<span class="cell-pct" style="color: #ffffff;">NA</span>`;
        }
        rowEl.appendChild(cell);
      });

      rowWrapper.appendChild(lbl);
      rowWrapper.appendChild(rowEl);
      rowsArea.appendChild(rowWrapper);
    });

    // ── 6. Column Labels ────────────────────────────────────────────────────
    const colLabelsWrapper = document.createElement('div');
    colLabelsWrapper.className = 'hm-col-labels-row';
    colLabelsWrapper.style.gap = `${gap}px`;

    cols.forEach((col, ci) => {
      const lbl = document.createElement('div');
      lbl.className = 'hm-col-label';
      lbl.dataset.col = ci; // FOR COLUMN HIGHLIGHTING

      if (level !== 'Cluster') lbl.classList.add('can-drill');
      lbl.style.width = `${colCellWidth}px`;
      lbl.style.minWidth = `${colCellWidth}px`;
      lbl.innerHTML = `<span class="truncate">${col}</span>`;
      lbl.title = col;

      lbl.addEventListener('click', () => drillDownHierarchy(level, path, col));

      // HOVER HIGHLIGHTING
      lbl.onmouseenter = () => {
        block.querySelectorAll(`.heatmap-cell[data-col="${ci}"]`).forEach(c => c.classList.add('hm-col-highlight'));
      };
      lbl.onmouseleave = () => {
        block.querySelectorAll(`.heatmap-cell[data-col="${ci}"]`).forEach(c => c.classList.remove('hm-col-highlight'));
      };

      colLabelsWrapper.appendChild(lbl);
    });

    // ── 8. Axis Titles & Full Assembly ──────────────────────────────────────
    const xAxisArea = document.createElement('div');
    xAxisArea.className = 'hm-grid-and-x-axis';

    const xAxisContainer = document.createElement('div');
    xAxisContainer.className = 'hm-x-axis-container';
    const xAxisTitle = document.createElement('div');
    xAxisTitle.className = 'hm-x-axis-title';
    const hint = (level === 'Zone') ? '(Click Zone to view Region level data)' : (level === 'Region' ? '(Click Region to view Cluster level data)' : '');
    xAxisTitle.innerHTML = `${level}s <span style="font-size: 8.5px; font-weight: 400; text-transform: none; margin-left: 10px; opacity: 0.7; letter-spacing: 0;">${hint}</span>`;
    xAxisContainer.appendChild(xAxisTitle);

    xAxisArea.appendChild(colLabelsWrapper);
    xAxisArea.appendChild(xAxisContainer);

    const xAxisWrapper = document.createElement('div');
    xAxisWrapper.className = 'hm-row-wrapper';
    xAxisWrapper.style.gap = `${gap}px`;

    const xAxisSpacer = document.createElement('div');
    xAxisSpacer.className = 'hm-x-axis-spacer';
    xAxisSpacer.style.width = `${maxRowLabelWidth}px`;
    xAxisSpacer.style.minWidth = `${maxRowLabelWidth}px`;

    xAxisWrapper.appendChild(xAxisSpacer);
    xAxisWrapper.appendChild(xAxisArea);

    rowsArea.appendChild(xAxisWrapper);

    mainContent.appendChild(yAxisContainer);
    mainContent.appendChild(rowsArea);

    const legendEl = buildLegend(cellHeight, gap, item, block);

    const hmRow = document.createElement('div');
    hmRow.className = 'hm-outer-row';
    hmRow.appendChild(mainContent);
    hmRow.appendChild(legendEl);

    block.appendChild(hmRow);
    container.appendChild(block);
  });
}

// ─── DRILL DOWN LOGIC ───────────────────────────────────────────────────────
function drillDownHierarchy(level, currentPath, name) {
  let nextLevel = '';
  if (level === 'Zone') nextLevel = 'Region';
  else if (level === 'Region') nextLevel = 'Cluster';
  else return;

  // Replace sub-levels if we click a different parent at the same level
  const existingIdx = hierarchyStack.findIndex(item => item.level === nextLevel);
  if (existingIdx !== -1) {
    hierarchyStack = hierarchyStack.slice(0, existingIdx);
  }

  const newPath = [...currentPath, name];
  hierarchyStack.push({ level: nextLevel, path: newPath, rangeMin: 0, rangeMax: 100 });
  renderHeatmap();
}

window.goBackHierarchy = function (index) {
  hierarchyStack = hierarchyStack.slice(0, index);
  renderHeatmap();
};

// ─── BUILD INTERACTIVE LEGEND ───────────────────────────────────────────────
function buildLegend(cellHeight, gap, stackItem, blockContainer) {
  const totalRows = heatmapRows.length;
  const barHeight = totalRows * cellHeight + (totalRows - 1) * gap; // match grid height

  const wrap = document.createElement('div');
  wrap.className = 'hm-legend-wrap';

  const topLbl = document.createElement('div');
  topLbl.className = 'legend-num legend-num-top';
  topLbl.textContent = '100';

  const barWrap = document.createElement('div');
  barWrap.className = 'legend-bar-wrap';
  barWrap.style.height = `${barHeight}px`;

  const bar = document.createElement('div');
  bar.className = 'legend-gradient-bar';

  // Highlight overlay (shows selected range inside bar)
  const highlight = document.createElement('div');
  highlight.className = 'legend-highlight';

  // Two drag handles
  const handleTop = createHandle('top');
  const handleBottom = createHandle('bottom');

  barWrap.appendChild(bar);
  barWrap.appendChild(highlight);
  barWrap.appendChild(handleTop);
  barWrap.appendChild(handleBottom);

  const bottomLbl = document.createElement('div');
  bottomLbl.className = 'legend-num legend-num-bottom';
  bottomLbl.textContent = '0';

  // Range readout
  const readout = document.createElement('div');
  readout.className = 'legend-readout';
  readout.textContent = `${stackItem.rangeMin}–${stackItem.rangeMax}`;

  wrap.appendChild(topLbl);
  wrap.appendChild(barWrap);
  wrap.appendChild(bottomLbl);
  wrap.appendChild(readout);

  // ── Drag logic ─────────────────────────────────────────────────────────
  function positionHandles() {
    const topPct = 1 - (stackItem.rangeMax / 100);
    const bottomPct = 1 - (stackItem.rangeMin / 100);
    handleTop.style.top = `${topPct * 100}%`;
    handleBottom.style.top = `${bottomPct * 100}%`;

    highlight.style.top = `${topPct * 100}%`;
    highlight.style.height = `${(bottomPct - topPct) * 100}%`;

    readout.textContent = `${stackItem.rangeMin}–${stackItem.rangeMax}`;
  }

  function startDrag(e, which) {
    e.preventDefault();
    const rect = barWrap.getBoundingClientRect();

    function onMove(ev) {
      const clientY = ev.touches ? ev.touches[0].clientY : ev.clientY;
      const pct = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      const val = Math.round((1 - pct) * 100);

      if (which === 'top') {
        stackItem.rangeMax = Math.max(stackItem.rangeMin + 1, val);
      } else {
        stackItem.rangeMin = Math.min(stackItem.rangeMax - 1, val);
      }
      positionHandles();
      updateCellHighlights(blockContainer, stackItem.rangeMin, stackItem.rangeMax);
    }

    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  handleTop.addEventListener('mousedown', e => startDrag(e, 'top'));
  handleTop.addEventListener('touchstart', e => startDrag(e, 'top'), { passive: false });
  handleBottom.addEventListener('mousedown', e => startDrag(e, 'bottom'));
  handleBottom.addEventListener('touchstart', e => startDrag(e, 'bottom'), { passive: false });

  // Set initial highlights on render
  requestAnimationFrame(() => {
    positionHandles();
    updateCellHighlights(blockContainer, stackItem.rangeMin, stackItem.rangeMax);
  });

  return wrap;
}

function createHandle(which) {
  const h = document.createElement('div');
  h.className = `legend-handle legend-handle-${which}`;
  h.title = which === 'top' ? 'Drag for max' : 'Drag for min';
  h.innerHTML = `<svg viewBox="0 0 16 8" fill="currentColor"><path d="M0 4 L6 0 L6 8 Z M10 0 L16 4 L10 8 Z"/></svg>`;
  return h;
}

// ─── RIPPLE EFFECT ──────────────────────────────────────────────────────────
function createRipple(e) {
  const cell = e.currentTarget;
  const r = document.createElement('span');
  r.classList.add('ripple');
  const size = Math.max(cell.offsetWidth, cell.offsetHeight);
  r.style.width = r.style.height = `${size}px`;
  const rect = cell.getBoundingClientRect();
  r.style.left = `${e.clientX - rect.left - size / 2}px`;
  r.style.top = `${e.clientY - rect.top - size / 2}px`;
  cell.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
}

// ─── TABS ───────────────────────────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panelMap = {
    overall: 'panel-overall', stakeholder: 'panel-stakeholder',
    coverage: 'panel-coverage', noncompliant: 'panel-noncompliant',
    rating: 'panel-rating', parameters: 'panel-parameters', atr: 'panel-atr',
  };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(panelMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      });
      const target = document.getElementById(panelMap[tab.dataset.tab]);
      if (target) target.classList.remove('hidden');
    });
  });
}

// ─── SIDEBAR ────────────────────────────────────────────────────────────────
function initSidebar() {
  document.getElementById('applyBtn').addEventListener('click', function () {
    this.textContent = '✓ Applied';
    this.style.background = '#228B22';
    setTimeout(() => { this.textContent = 'Apply'; this.style.background = ''; }, 1500);
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.querySelectorAll('.filter-input input').forEach(el => el.value = '');
  });
  document.querySelector('.refresh-btn').addEventListener('click', () => {
    const svg = document.querySelector('.refresh-btn svg');
    svg.style.transition = 'transform 0.5s ease';
    svg.style.transform = 'rotate(360deg)';
    setTimeout(() => { svg.style.transition = 'none'; svg.style.transform = ''; }, 520);
  });
}

// ─── NAV ────────────────────────────────────────────────────────────────────
function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ─── DOWNLOAD ───────────────────────────────────────────────────────────────
function initDownload() {
  const btn = document.querySelector('.btn-download');
  const orig = btn.innerHTML;
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.innerHTML = '⏳ Exporting…';
    setTimeout(() => {
      btn.innerHTML = '✓ Downloaded';
      btn.style.background = '#228B22';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 1500);
    }, 1000);
  });
}

// ─── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  renderHeatmap();
  initTabs();
  initSidebar();
  initNav();
  initDownload();
});
