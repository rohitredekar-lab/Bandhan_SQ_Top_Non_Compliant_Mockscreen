// Default ATR dataset matching the screenshot exactly
const defaultAtrData = [
    {
        id: "4701",
        zone: "East Zone I",
        checklist: "Evaluates how staff interact with customers - including respectful tone, clear explanations of services, and ability to understand and respond empathetically to customer needs.",
        category: "Welcome Greeting",
        status: "Open",
        tatStatus: "Beyond TAT",
        ageDays: 28,
        department: "-",
        financialYear: "2026-2027",
        quarter: "Q1",
        month: "May",
        entityType: "BRANCH BANKING",
        region: "East Region 1",
        cluster: "East Cluster A",
        date: "12-05-2026",
        pmName: "Pradeep Kumar",
        rmName: "Rakesh Sharma"
    },
    {
        id: "4702",
        zone: "Zone SQ 10",
        checklist: "Assesses how accurately banking transactions are processed, including correct data input, validation of customer details, and adherence to compliance steps.",
        category: "Data Entry, Verification Process",
        status: "Open",
        tatStatus: "Beyond TAT",
        ageDays: 28,
        department: "-",
        financialYear: "2026-2027",
        quarter: "Q1",
        month: "May",
        entityType: "BRANCH BANKING",
        region: "West Region 2",
        cluster: "West Cluster C",
        date: "14-05-2026",
        pmName: "Praveen Mehta",
        rmName: "Rahul Verma"
    },
    {
        id: "4703",
        zone: "Zone SQ 10",
        checklist: "Staff greeted customers politely and timely",
        category: "Communication",
        status: "Open",
        tatStatus: "Within TAT",
        ageDays: 12,
        department: "-",
        financialYear: "2026-2027",
        quarter: "Q1",
        month: "May",
        entityType: "BRANCH BANKING",
        region: "West Region 2",
        cluster: "West Cluster C",
        date: "18-05-2026",
        pmName: "Praveen Mehta",
        rmName: "Rahul Verma"
    },
    {
        id: "4704",
        zone: "West Zone II",
        checklist: "Staff greeted customers politely and timely",
        category: "Welcome Greeting",
        status: "Completed",
        tatStatus: "Within TAT",
        ageDays: 5,
        department: "Retail Branch",
        financialYear: "2026-2027",
        quarter: "Q1",
        month: "May",
        entityType: "BRANCH BANKING",
        region: "West Region 1",
        cluster: "West Cluster A",
        date: "05-05-2026",
        pmName: "Sanjay Shah",
        rmName: "Karan Johar"
    },
    {
        id: "4705",
        zone: "East Zone I",
        checklist: "Assesses how accurately banking transactions are processed, including correct data input, validation of customer details, and adherence to compliance steps.",
        category: "Data Entry, Verification Process",
        status: "Completed",
        tatStatus: "Within TAT",
        ageDays: 3,
        department: "ATM Ops",
        financialYear: "2026-2027",
        quarter: "Q1",
        month: "May",
        entityType: "ATM",
        region: "East Region 1",
        cluster: "East Cluster A",
        date: "08-05-2026",
        pmName: "Pradeep Kumar",
        rmName: "Rakesh Sharma"
    },
    {
        id: "4706",
        zone: "North Zone",
        checklist: "Evaluates how staff interact with customers - including respectful tone, clear explanations of services, and ability to understand and respond empathetically to customer needs.",
        category: "Communication",
        status: "Open",
        tatStatus: "Beyond TAT",
        ageDays: 35,
        department: "-",
        financialYear: "2025-2026",
        quarter: "Q4",
        month: "March",
        entityType: "BRANCH BANKING",
        region: "North Region 3",
        cluster: "North Cluster B",
        date: "20-03-2026",
        pmName: "Amit Singh",
        rmName: "Vikram Malhotra"
    }
];

// Programmatically generate extra records to reach high counts for each zone as requested
const mockZones = [
    { name: "East Zone I", open: 17200, completed: 5300 },
    { name: "Zone SQ 10", open: 14800, completed: 8900 },
    { name: "West Zone II", open: 9200, completed: 6100 },
    { name: "North Zone", open: 16500, completed: 4200 },
    { name: "South Zone I", open: 11400, completed: 7100 },
    { name: "South Zone II", open: 8700, completed: 3900 },
    { name: "Central Zone", open: 13600, completed: 9400 },
    { name: "East Zone II", open: 5400, completed: 2100 },
    { name: "West Zone I", open: 12100, completed: 7900 },
    { name: "South Zone III", open: 6800, completed: 1900 },
    { name: "North Zone II", open: 10500, completed: 5500 }
];

const mockCategories = ["Welcome Greeting", "Data Entry, Verification Process", "Communication"];
const mockDepartments = ["Retail Branch", "ATM Ops", "Operations", "Compliance"];
const mockPMs = ["Pradeep Kumar", "Praveen Mehta", "Amit Singh", "Sanjay Shah"];
const mockRMs = ["Rakesh Sharma", "Rahul Verma", "Vikram Malhotra", "Karan Johar"];

let idCounter = 4801;
mockZones.forEach(z => {
    // Generate open cases
    for (let i = 0; i < z.open; i++) {
        defaultAtrData.push({
            id: String(idCounter++),
            zone: z.name,
            checklist: `Checklist audit point for ${mockCategories[i % 3]}`,
            category: mockCategories[i % 3],
            status: "Open",
            tatStatus: (i % 3 === 0) ? "Beyond TAT" : "Within TAT",
            ageDays: (i % 3 === 0) ? (15 + (i % 25)) : (2 + (i % 10)),
            department: mockDepartments[i % 4],
            financialYear: (i % 5 === 0) ? "2025-2026" : "2026-2027",
            quarter: `Q${(i % 4) + 1}`,
            month: ["May", "June", "July", "August"][i % 4],
            entityType: (i % 4 === 0) ? "ATM" : "BRANCH BANKING",
            region: `${z.name} Region ${(i % 3) + 1}`,
            cluster: `${z.name} Cluster ${String.fromCharCode(65 + (i % 3))}`,
            date: `1${i % 9}-05-2026`,
            pmName: mockPMs[i % 4],
            rmName: mockRMs[i % 4]
        });
    }
    // Generate completed cases
    for (let i = 0; i < z.completed; i++) {
        defaultAtrData.push({
            id: String(idCounter++),
            zone: z.name,
            checklist: `Completed check audit for ${mockCategories[i % 3]}`,
            category: mockCategories[i % 3],
            status: "Completed",
            tatStatus: "Within TAT",
            ageDays: 1 + (i % 5),
            department: mockDepartments[i % 4],
            financialYear: (i % 5 === 0) ? "2025-2026" : "2026-2027",
            quarter: `Q${(i % 4) + 1}`,
            month: ["May", "June", "July", "August"][i % 4],
            entityType: (i % 4 === 0) ? "ATM" : "BRANCH BANKING",
            region: `${z.name} Region ${(i % 3) + 1}`,
            cluster: `${z.name} Cluster ${String.fromCharCode(65 + (i % 3))}`,
            date: `1${i % 9}-05-2026`,
            pmName: mockPMs[i % 4],
            rmName: mockRMs[i % 4]
        });
    }
});

// Active copy of dataset
let atrData = JSON.parse(JSON.stringify(defaultAtrData));

// Chart.js Instances
let chartOverallInstance = null;
let chartTatInstance = null;
let chartStatusWiseInstance = null;
let chartRmPerformanceInstance = null;

// Table Sort states
let topAtrSort = { key: 'open', dir: 'desc' };
let breachedAtrSort = { key: 'age', dir: 'desc' };

// Initial DOM Setup and Event Handling
document.addEventListener("DOMContentLoaded", () => {
    // Populate filter dropdowns from initial dataset
    initFilters();
    
    // Initial Render of charts and tables
    applyFilters();

    // Event Listeners for Filters
    document.getElementById('btn-apply').addEventListener('click', applyFilters);
    document.getElementById('btn-clear').addEventListener('click', clearFilters);
    document.getElementById('filter-reset').addEventListener('click', resetAll);
    document.getElementById('clear-fy').addEventListener('click', () => {
        document.getElementById('financial-year').value = '';
    });

    // Hierarchical Dropdowns Filtering
    document.getElementById('filter-zone').addEventListener('change', updateDropdownsHierarchical);
    document.getElementById('filter-region').addEventListener('change', updateDropdownsHierarchical);

    // Tab Navigation switching
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabName = tab.textContent.trim();
            const viewAtr = document.getElementById('view-atr');
            const viewStakeholder = document.getElementById('view-stakeholder');
            
            if (viewAtr) viewAtr.style.display = 'none';
            if (viewStakeholder) viewStakeholder.style.display = 'none';
            if (viewAtr) viewAtr.style.opacity = '1';
            
            const banner = document.getElementById('temp-tab-banner');
            if (banner) banner.remove();

            if (tabName === 'ATR') {
                if (viewAtr) viewAtr.style.display = 'flex';
            } else if (tabName === 'Stakeholder Performance') {
                if (viewStakeholder) {
                    viewStakeholder.style.display = 'flex';
                    renderStakeholderChart();
                    renderStakeholderTable();
                    renderTopPerformers();
                }
            } else {
                if (viewAtr) {
                    viewAtr.style.display = 'flex';
                    viewAtr.style.opacity = '0.3';
                }
                // Display simple banner
                let bannerElement = document.createElement('div');
                bannerElement.id = 'temp-tab-banner';
                bannerElement.style.position = 'absolute';
                bannerElement.style.top = '50%';
                bannerElement.style.left = '60%';
                bannerElement.style.transform = 'translate(-50%, -50%)';
                bannerElement.style.backgroundColor = '#0f2942';
                bannerElement.style.color = '#fff';
                bannerElement.style.padding = '20px 40px';
                bannerElement.style.borderRadius = '8px';
                bannerElement.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.3)';
                bannerElement.style.zIndex = '99';
                bannerElement.style.textAlign = 'center';
                bannerElement.innerHTML = `
                    <h3 style="margin-bottom: 10px;"><i class="fa-solid fa-circle-info"></i> View Performance</h3>
                    <p style="font-size: 0.9rem; opacity: 0.8;">The dashboard section for "${tabName}" is empty. <br>Select the "ATR" tab to view live charts and test Excel integrations.</p>
                `;
                document.body.appendChild(bannerElement);
            }
        });
    });

    // Excel Drag & Drop setup (guarded - elements may not exist)
    const dropzone = document.getElementById('excel-dropzone');
    const fileInput = document.getElementById('excel-file-input');

    if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                parseExcel(e.dataTransfer.files[0]);
            }
        });
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                parseExcel(e.target.files[0]);
            }
        });
    }

    // Excel Template Download Action (guarded)
    const dlTemplateBtn = document.getElementById('download-template-btn');
    if (dlTemplateBtn) dlTemplateBtn.addEventListener('click', downloadExcelTemplate);

    // Export Table Excel Actions (guarded)
    const dlPendingSplit = document.getElementById('download-pending-split');
    if (dlPendingSplit) dlPendingSplit.addEventListener('click', () => exportTableToExcel('table-pending-split', 'Pending_ATR_Split_Report.xlsx'));
    const dlTopAtr = document.getElementById('download-top-atr');
    if (dlTopAtr) dlTopAtr.addEventListener('click', () => exportTableToExcel('table-top-atr', 'Top_Checklists_Report.xlsx'));
    const dlBreachedAtr = document.getElementById('download-breached-atr');
    if (dlBreachedAtr) dlBreachedAtr.addEventListener('click', () => exportTableToExcel('table-breached-atr', 'Breached_ATR_Report.xlsx'));
    
    const downloadRmPerf = document.getElementById('download-rm-performance');
    if (downloadRmPerf) {
        downloadRmPerf.addEventListener('click', () => {
            exportTableToExcel('table-rm-performance', 'RM_Performance_Report.xlsx');
        });
    }

    // Table sorting listeners
    document.querySelectorAll('#table-top-atr th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.getAttribute('data-sort');
            if (topAtrSort.key === key) {
                topAtrSort.dir = topAtrSort.dir === 'asc' ? 'desc' : 'asc';
            } else {
                topAtrSort.key = key;
                topAtrSort.dir = 'desc';
            }
            updateSortIcons('table-top-atr', topAtrSort);
            rebuildTopAtrTable();
        });
    });

    document.querySelectorAll('#table-breached-atr th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.getAttribute('data-sort');
            if (breachedAtrSort.key === key) {
                breachedAtrSort.dir = breachedAtrSort.dir === 'asc' ? 'desc' : 'asc';
            } else {
                breachedAtrSort.key = key;
                breachedAtrSort.dir = 'desc';
            }
            updateSortIcons('table-breached-atr', breachedAtrSort);
            rebuildBreachedAtrTable();
        });
    });

    // Modal close listeners
    document.getElementById('details-modal-close').onclick = closeDetailsModal;
    document.getElementById('details-modal-close-btn').onclick = closeDetailsModal;
    document.getElementById('success-ok-btn').onclick = closeSuccessModal;
    
    // View All Modal â€” use event delegation (button lives inside a hidden div on load)
    let modalChartInstance = null;
    
    document.addEventListener('click', function(e) {
        // Handle "View All" button
        if (e.target.closest('#btn-view-all')) {
            const modal = document.getElementById('view-all-modal');
            const ctx = document.getElementById('modal-chart-rm-performance');
            if (!modal || !ctx) return;
            
            // Open modal first so Chart.js can read dimensions
            modal.classList.add('active');
            
            if (modalChartInstance) {
                modalChartInstance.destroy();
            }
            
            const container = ctx.parentElement;
            container.style.height = (stakeholderDemoData.length * 40 + 60) + 'px';
            
            const labels = stakeholderDemoData.map(u => u.name);
            const assignedData = stakeholderDemoData.map(u => u.assigned);
            const completedData = stakeholderDemoData.map(u => u.completed);
            const pendingData = stakeholderDemoData.map(u => u.pending);
            
            modalChartInstance = new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        { label: 'Total Assigned', data: assignedData, backgroundColor: '#526cb5', barPercentage: 0.6 },
                        { label: 'Completed',      data: completedData, backgroundColor: '#8bc268', barPercentage: 0.6 },
                        { label: 'Pending',        data: pendingData,   backgroundColor: '#f6c342', barPercentage: 0.6 }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: { stepSize: 1, font: { family: 'Outfit', size: 12, weight: '600' } },
                            grid: { color: '#f1f5f9' },
                            border: { display: false }
                        },
                        y: {
                            stacked: true,
                            ticks: { font: { family: 'Outfit', size: 12, weight: '700' }, color: '#2c3e50' },
                            grid: { display: false },
                            border: { display: false }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { usePointStyle: true, pointStyle: 'rectRounded', font: { family: 'Outfit', size: 12, weight: '600' } }
                        },
                        tooltip: {
                            callbacks: { label: function(ctx2) { return ` ${ctx2.dataset.label}: ${ctx2.raw}`; } }
                        }
                    }
                },
                plugins: [{
                    id: 'barSegmentLabelsModal',
                    afterDatasetsDraw(chart) {
                        const { ctx: c } = chart;
                        chart.data.datasets.forEach((dataset, dsIdx) => {
                            const meta = chart.getDatasetMeta(dsIdx);
                            if (meta.hidden) return;
                            meta.data.forEach((bar, i) => {
                                const value = dataset.data[i];
                                if (!value) return;
                                const xCenter = bar.base + (bar.x - bar.base) / 2;
                                c.save();
                                c.fillStyle = dsIdx === 2 ? '#000000' : '#ffffff';
                                c.font = '600 12px Outfit, Inter, sans-serif';
                                c.textAlign = 'center';
                                c.textBaseline = 'middle';
                                c.fillText(value, xCenter, bar.y);
                                c.restore();
                            });
                        });
                    }
                }]
            });
        }
        
        // Handle close button inside View All modal
        if (e.target.closest('#view-all-modal-close')) {
            document.getElementById('view-all-modal').classList.remove('active');
        }

        // Handle Status Wise "View All" button
        if (e.target.closest('#btn-status-view-all')) {
            const modal = document.getElementById('status-view-all-modal');
            const ctx = document.getElementById('modal-chart-status-wise');
            if (!modal || !ctx) return;

            modal.classList.add('active');

            // Destroy previous instance if exists
            if (window._statusModalChart) {
                window._statusModalChart.destroy();
            }

            // Use cached all-zones data (set during last applyFilters call)
            const allModalZones = window._allStatusZones || [];
            const modalZoneMap = window._zoneCountMap || {};
            const openCounts = allModalZones.map(z => modalZoneMap[z].open);
            const completedCounts = allModalZones.map(z => modalZoneMap[z].completed);

            const container = ctx.parentElement;
            container.style.height = Math.max(400, allModalZones.length * 38 + 60) + 'px';

            window._statusModalChart = new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: allModalZones.length > 0 ? allModalZones : ['No Data'],
                    datasets: [
                        {
                            label: 'Completed',
                            data: completedCounts.length > 0 ? completedCounts : [0],
                            backgroundColor: '#0e3054',
                            borderWidth: 0,
                            borderRadius: 3,
                            categoryPercentage: 0.75,
                            barPercentage: 0.5
                        },
                        {
                            label: 'Open',
                            data: openCounts.length > 0 ? openCounts : [0],
                            backgroundColor: '#f03e22',
                            borderWidth: 0,
                            borderRadius: 3,
                            categoryPercentage: 0.75,
                            barPercentage: 0.5
                        }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { right: 55 } },
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: { font: { family: 'Outfit', size: 11 }, color: '#6c757d', callback: val => val.toLocaleString() },
                            grid: { color: '#f1f5f9', drawBorder: false },
                            border: { display: false }
                        },
                        y: {
                            ticks: { font: { family: 'Outfit', size: 11, weight: '600' }, color: '#2c3e50' },
                            grid: { display: false },
                            border: { display: false }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top', align: 'end',
                            labels: { usePointStyle: true, pointStyle: 'rectRounded', boxWidth: 10, boxHeight: 10, font: { family: 'Outfit', size: 11 }, padding: 16 }
                        },
                        tooltip: { callbacks: { label: ctx2 => ` ${ctx2.dataset.label}: ${ctx2.raw.toLocaleString()}` } }
                    }
                },
                plugins: [{
                    id: 'statusModalBarLabels',
                    afterDatasetsDraw(chart) {
                        const { ctx: c, scales: { x } } = chart;
                        chart.data.datasets.forEach((dataset, dsIdx) => {
                            const meta = chart.getDatasetMeta(dsIdx);
                            if (meta.hidden) return;
                            meta.data.forEach((bar, i) => {
                                const value = dataset.data[i];
                                if (!value) return;
                                c.save();
                                c.fillStyle = '#2c3e50';
                                c.font = '600 10px Outfit, Inter, sans-serif';
                                c.textAlign = 'left';
                                c.textBaseline = 'middle';
                                c.fillText(value.toLocaleString(), x.getPixelForValue(value) + 5, bar.y);
                                c.restore();
                            });
                        });
                    }
                }]
            });
        }

        // Handle close button inside Status Wise modal
        if (e.target.closest('#status-view-all-close')) {
            document.getElementById('status-view-all-modal').classList.remove('active');
        }
    });
    
    window.onclick = (e) => {
        if (e.target === document.getElementById('details-modal')) closeDetailsModal();
        if (e.target === document.getElementById('success-modal')) closeSuccessModal();
        if (e.target === document.getElementById('view-all-modal')) document.getElementById('view-all-modal').classList.remove('active');
        if (e.target === document.getElementById('status-view-all-modal')) document.getElementById('status-view-all-modal').classList.remove('active');
    };
});

// Setup filters selectors initially
function initFilters() {
    updateDropdownOptions();
    updateDropdownsHierarchical();
}

// Populate Zone, Region, Cluster select options
function updateDropdownOptions() {
    const zones = [...new Set(atrData.map(d => d.zone))].filter(Boolean).sort();
    
    // Zone
    const zoneSelect = document.getElementById('filter-zone');
    const prevZone = zoneSelect.value;
    zoneSelect.innerHTML = '<option value="">Select a zone</option>';
    zones.forEach(z => {
        const opt = document.createElement('option');
        opt.value = z;
        opt.textContent = z;
        if (z === prevZone) opt.selected = true;
        zoneSelect.appendChild(opt);
    });
}

// Multi-tier hierarchical dropdowns (Zone -> Region -> Cluster)
function updateDropdownsHierarchical() {
    const zoneVal = document.getElementById('filter-zone').value;
    const regionVal = document.getElementById('filter-region').value;
    
    // Filter matching regions
    let filteredForRegions = atrData;
    if (zoneVal) {
        filteredForRegions = filteredForRegions.filter(d => d.zone === zoneVal);
    }
    const regions = [...new Set(filteredForRegions.map(d => d.region))].filter(Boolean).sort();

    // Filter matching clusters
    let filteredForClusters = filteredForRegions;
    if (regionVal) {
        filteredForClusters = filteredForClusters.filter(d => d.region === regionVal);
    }
    const clusters = [...new Set(filteredForClusters.map(d => d.cluster))].filter(Boolean).sort();

    // Populate Region
    const regionSelect = document.getElementById('filter-region');
    const prevRegion = regionSelect.value;
    regionSelect.innerHTML = '<option value="">Select a region</option>';
    regions.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r;
        if (r === prevRegion && regions.includes(prevRegion)) opt.selected = true;
        regionSelect.appendChild(opt);
    });

    // Populate Cluster
    const clusterSelect = document.getElementById('filter-cluster');
    const prevCluster = clusterSelect.value;
    clusterSelect.innerHTML = '<option value="">Select a cluster</option>';
    clusters.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        if (c === prevCluster && clusters.includes(prevCluster)) opt.selected = true;
        clusterSelect.appendChild(opt);
    });
}

// Global cached filtered dataset for sorting/re-rendering
let currentFilteredData = [];

// Apply filters engine
function applyFilters() {
    const entityType = document.getElementById('entity-type').value;
    const zone = document.getElementById('filter-zone').value;
    const region = document.getElementById('filter-region').value;
    const cluster = document.getElementById('filter-cluster').value;
    const fy = document.getElementById('financial-year').value;
    const quarter = document.getElementById('filter-quarters').value;
    const month = document.getElementById('filter-month').value;
    const fromDateStr = document.getElementById('from-date').value;
    const toDateStr = document.getElementById('to-date').value;
    const pm = document.getElementById('pm-names').value.toLowerCase().trim();
    const rm = document.getElementById('rm-names').value.toLowerCase().trim();

    const fromDate = parseDate(fromDateStr);
    const toDate = parseDate(toDateStr);

    currentFilteredData = atrData.filter(item => {
        if (entityType && item.entityType !== entityType) return false;
        if (zone && item.zone !== zone) return false;
        if (region && item.region !== region) return false;
        if (cluster && item.cluster !== cluster) return false;
        if (fy && item.financialYear !== fy) return false;
        if (quarter && item.quarter !== quarter) return false;
        if (month && item.month !== month) return false;
        
        if (pm && (!item.pmName || !item.pmName.toLowerCase().includes(pm))) return false;
        if (rm && (!item.rmName || !item.rmName.toLowerCase().includes(rm))) return false;

        if (fromDate || toDate) {
            const itemDate = parseDate(item.date);
            if (itemDate) {
                if (fromDate && itemDate < fromDate) return false;
                if (toDate && itemDate > toDate) return false;
            } else {
                return false; // Skip if date is missing/malformed
            }
        }

        return true;
    });

    // Render components
    updateCharts(currentFilteredData);
    buildPendingSplitTable(currentFilteredData);
    rebuildTopAtrTable();
    rebuildBreachedAtrTable();
}

// Clear all input selectors and reset data state
function clearFilters() {
    document.getElementById('filter-form').reset();
    document.getElementById('financial-year').value = ''; // Since reset defaults to selected option
    updateDropdownsHierarchical();
    applyFilters();
}

// Global reset
function resetAll() {
    atrData = JSON.parse(JSON.stringify(defaultAtrData));
    
    // Clear dropzone file details
    document.getElementById('file-info').style.display = 'none';
    document.getElementById('excel-file-input').value = '';
    
    clearFilters();
    showSuccessModal("Dashboard reset to default local dataset.");
}

// Date parser helper
function parseDate(str) {
    if (!str) return null;
    // expect dd-mm-yyyy or yyyy-mm-dd
    let parts = str.split('-');
    if (parts.length !== 3) {
        parts = str.split('/');
    }
    if (parts.length !== 3) return null;
    
    // Check if parts[0] is year or day
    if (parts[0].length === 4) {
        return new Date(parts[0], parts[1] - 1, parts[2]); // yyyy-mm-dd
    } else {
        return new Date(parts[2], parts[1] - 1, parts[0]); // dd-mm-yyyy
    }
}

// --- VISUAL CHARTS GENERATOR ---
function updateCharts(filteredData) {
    // 1. Overall ATR Points Split
    const openCount = filteredData.filter(d => d.status.toLowerCase() === 'open').length;
    const completedCount = filteredData.filter(d => d.status.toLowerCase() === 'completed').length;
    
    const ctxOverall = document.getElementById('chart-overall').getContext('2d');
    if (chartOverallInstance) chartOverallInstance.destroy();
    
    const overallLabels = [];
    const overallData = [];
    const overallColors = [];
    if (openCount > 0) {
        overallLabels.push(`Open: ${openCount}`);
        overallData.push(openCount);
        overallColors.push('#f03e22'); // Orange-red
    }
    if (completedCount > 0) {
        overallLabels.push(`Completed: ${completedCount}`);
        overallData.push(completedCount);
        overallColors.push('#0e3054'); // Corporate Blue
    }
    if (overallData.length === 0) {
        overallLabels.push('No Data');
        overallData.push(1);
        overallColors.push('#e2e8f0');
    }

    chartOverallInstance = new Chart(ctxOverall, {
        type: 'pie',
        data: {
            labels: overallLabels,
            datasets: [{
                data: overallData,
                backgroundColor: overallColors,
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        font: { family: 'Outfit', size: 12, weight: '500' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) { return ` ${context.label}`; }
                    }
                }
            }
        }
    });

    // 2. ATR TAT Split (for Open items only)
    const openItems = filteredData.filter(d => d.status.toLowerCase() === 'open');
    const withinTatCount = openItems.filter(d => d.tatStatus.toLowerCase() === 'within tat' || d.tatStatus.toLowerCase() === 'within').length;
    const beyondTatCount = openItems.filter(d => d.tatStatus.toLowerCase() === 'beyond tat' || d.tatStatus.toLowerCase() === 'beyond').length;
    
    const ctxTat = document.getElementById('chart-tat').getContext('2d');
    if (chartTatInstance) chartTatInstance.destroy();
    
    const tatLabels = [];
    const tatData = [];
    const tatColors = [];
    if (withinTatCount > 0) {
        tatLabels.push(`Within TAT: ${withinTatCount}`);
        tatData.push(withinTatCount);
        tatColors.push('#0e3054'); // Corporate Blue
    }
    if (beyondTatCount > 0) {
        tatLabels.push(`Beyond TAT: ${beyondTatCount}`);
        tatData.push(beyondTatCount);
        tatColors.push('#f03e22'); // Orange-red
    }
    if (tatData.length === 0) {
        tatLabels.push('No Data');
        tatData.push(1);
        tatColors.push('#e2e8f0');
    }

    chartTatInstance = new Chart(ctxTat, {
        type: 'pie',
        data: {
            labels: tatLabels,
            datasets: [{
                data: tatData,
                backgroundColor: tatColors,
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        font: { family: 'Outfit', size: 12, weight: '500' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) { return ` ${context.label}`; }
                    }
                }
            }
        }
    });

    // 3. Status Wise Horizontal Bar Chart â€” O(N) pre-aggregation
    const zoneCountMap = {};
    filteredData.forEach(d => {
        if (!d.zone) return;
        if (!zoneCountMap[d.zone]) zoneCountMap[d.zone] = { open: 0, completed: 0 };
        if (d.status.toLowerCase() === 'open') zoneCountMap[d.zone].open++;
        else if (d.status.toLowerCase() === 'completed') zoneCountMap[d.zone].completed++;
    });
    const zones = Object.keys(zoneCountMap).sort();
    const zoneOpenCounts = zones.map(z => zoneCountMap[z].open);
    const zoneCompletedCounts = zones.map(z => zoneCountMap[z].completed);

    // Cache data for modal View All button
    window._allStatusZones = zones;
    window._zoneCountMap = zoneCountMap;

    // Dynamically size the chart container based on number of zones
    const statusWiseContainer = document.getElementById('chart-status-wise').parentElement;
    const zoneCount = zones.length || 1;
    const rowHeight = 36; // px per zone row (for two bars)
    const chartHeight = Math.max(280, zoneCount * rowHeight + 60);
    statusWiseContainer.style.height = chartHeight + 'px';

    const ctxStatusWise = document.getElementById('chart-status-wise').getContext('2d');
    if (chartStatusWiseInstance) chartStatusWiseInstance.destroy();

    // Format large numbers as K
    const fmtK = val => val >= 1000 ? (val / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : val;

    chartStatusWiseInstance = new Chart(ctxStatusWise, {
        type: 'bar',
        data: {
            labels: zones.length > 0 ? zones : ['No Data'],
            datasets: [
                {
                    label: 'Completed',
                    data: zoneCompletedCounts.length > 0 ? zoneCompletedCounts : [0],
                    backgroundColor: '#0e3054',
                    borderWidth: 0,
                    borderRadius: 3,
                    categoryPercentage: 0.75,
                    barPercentage: 0.5
                },
                {
                    label: 'Open',
                    data: zoneOpenCounts.length > 0 ? zoneOpenCounts : [0],
                    backgroundColor: '#f03e22',
                    borderWidth: 0,
                    borderRadius: 3,
                    categoryPercentage: 0.75,
                    barPercentage: 0.5
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { right: 55 } },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        font: { family: 'Outfit', size: 10 },
                        color: '#6c757d',
                        callback: val => val.toLocaleString()
                    },
                    grid: { color: '#f1f5f9', drawBorder: false },
                    border: { display: false }
                },
                y: {
                    ticks: {
                        font: { family: 'Outfit', size: 10, weight: '600' },
                        color: '#2c3e50'
                    },
                    grid: { display: false },
                    border: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        boxWidth: 10,
                        boxHeight: 10,
                        font: { family: 'Outfit', size: 11 },
                        padding: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.dataset.label}: ${ctx.raw.toLocaleString()}`
                    }
                },
                datalabels: false
            }
        },
        // Inline plugin: draw formatted count at end of each bar
        plugins: [{
            id: 'barEndLabels',
            afterDatasetsDraw(chart) {
                const { ctx, scales: { x } } = chart;
                chart.data.datasets.forEach((dataset, dsIdx) => {
                    const meta = chart.getDatasetMeta(dsIdx);
                    if (meta.hidden) return;
                    meta.data.forEach((bar, i) => {
                        const value = dataset.data[i];
                        if (!value) return;
                        const lbl = value.toLocaleString();
                        ctx.save();
                        ctx.fillStyle = '#2c3e50';
                        ctx.font = '600 10px Outfit, Inter, sans-serif';
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(lbl, x.getPixelForValue(value) + 5, bar.y);
                        ctx.restore();
                    });
                });
            }
        }]
    });
}

// --- DYNAMIC DATA TABLES BUILDERS ---

// Table 1: Pending ATR Split Pivot
function buildPendingSplitTable(filteredData) {
    const tbody = document.getElementById('pending-split-tbody');
    tbody.innerHTML = '';
    
    // Only display Open/Pending actions
    const openData = filteredData.filter(d => d.status.toLowerCase() === 'open');
    
    const zones = [...new Set(openData.map(d => d.zone))].filter(Boolean).sort();
    const categories = [...new Set(openData.map(d => d.category))].filter(Boolean).sort();
    
    // Ensure default visual categories are always represented as columns first
    const defaultCategories = ["Welcome Greeting", "Data Entry, Verification Process", "Communication"];
    const allCategories = [...new Set([...defaultCategories, ...categories])];
    
    // Update headers dynamically
    const table = document.getElementById('table-pending-split');
    const headerRow = table.querySelector('thead tr');
    headerRow.innerHTML = '<th>Zones</th>';
    allCategories.forEach(cat => {
        const th = document.createElement('th');
        th.textContent = cat;
        headerRow.appendChild(th);
    });
    const thTotal = document.createElement('th');
    thTotal.textContent = 'Total Atr';
    headerRow.appendChild(thTotal);
    
    // Pre-aggregate counts in O(N) using key maps
    const countMap = {};
    openData.forEach(d => {
        const key = `${d.zone}||${d.category}`;
        countMap[key] = (countMap[key] || 0) + 1;
    });

    let categoryTotals = {};
    allCategories.forEach(cat => categoryTotals[cat] = 0);
    let grandTotal = 0;
    
    zones.forEach(zone => {
        const tr = document.createElement('tr');
        const tdZone = document.createElement('td');
        tdZone.textContent = zone;
        tr.appendChild(tdZone);
        
        let zoneTotal = 0;
        allCategories.forEach(cat => {
            const count = countMap[`${zone}||${cat}`] || 0;
            const tdCount = document.createElement('td');
            tdCount.textContent = count > 0 ? count : '-';
            tr.appendChild(tdCount);
            
            categoryTotals[cat] += count;
            zoneTotal += count;
        });
        
        const tdTotal = document.createElement('td');
        tdTotal.textContent = zoneTotal;
        tr.appendChild(tdTotal);
        
        grandTotal += zoneTotal;
        tbody.appendChild(tr);
    });
    
    // Add Total Pan India Row
    if (zones.length > 0) {
        const trTotal = document.createElement('tr');
        trTotal.className = 'highlight-row';
        const tdTotalLabel = document.createElement('td');
        tdTotalLabel.textContent = 'Pan India';
        trTotal.appendChild(tdTotalLabel);
        
        allCategories.forEach(cat => {
            const tdVal = document.createElement('td');
            tdVal.textContent = categoryTotals[cat];
            trTotal.appendChild(tdVal);
        });
        
        const tdGrandTotal = document.createElement('td');
        tdGrandTotal.textContent = grandTotal;
        trTotal.appendChild(tdGrandTotal);
        
        tbody.appendChild(trTotal);
    } else {
        const trEmpty = document.createElement('tr');
        trEmpty.innerHTML = `<td colspan="${allCategories.length + 2}" style="text-align: center; color: var(--text-muted);">No pending ATRs found</td>`;
        tbody.appendChild(trEmpty);
    }
}

// Table 2: Top 20 ATR Checklist Items
function rebuildTopAtrTable() {
    const tbody = document.getElementById('top-atr-tbody');
    tbody.innerHTML = '';
    
    // Group open vs total actions by checklist description
    const grouped = {};
    currentFilteredData.forEach(item => {
        const desc = item.checklist;
        if (!grouped[desc]) {
            grouped[desc] = { total: 0, open: 0 };
        }
        grouped[desc].total++;
        if (item.status.toLowerCase() === 'open') {
            grouped[desc].open++;
        }
    });

    let list = Object.keys(grouped).map(desc => {
        const data = grouped[desc];
        const pctOpen = data.total > 0 ? Math.round((data.open / data.total) * 100) : 0;
        return {
            checklist: desc,
            open: data.open,
            pct: pctOpen
        };
    }).filter(item => item.open > 0); // Only display checklists with pending issues

    // Sort list
    list.sort((a, b) => {
        let valA = a[topAtrSort.key];
        let valB = b[topAtrSort.key];
        
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        
        if (valA < valB) return topAtrSort.dir === 'asc' ? -1 : 1;
        if (valA > valB) return topAtrSort.dir === 'asc' ? 1 : -1;
        return 0;
    });

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">No open ATRs found</td></tr>`;
        return;
    }

    list.slice(0, 20).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.checklist}</td>
            <td>${row.open}</td>
            <td>${row.pct}%</td>
        `;
        tbody.appendChild(tr);
    });
}

// Table 3: Top 20 Breached ATR Cases
function rebuildBreachedAtrTable() {
    const tbody = document.getElementById('breached-atr-tbody');
    tbody.innerHTML = '';
    
    // Filter open cases which exceed limits
    let breached = currentFilteredData.filter(d => 
        d.status.toLowerCase() === 'open' && 
        (d.tatStatus.toLowerCase() === 'beyond tat' || d.tatStatus.toLowerCase() === 'beyond')
    );

    // Sort breached list
    breached.sort((a, b) => {
        let valA = a[breachedAtrSort.key === 'age' ? 'ageDays' : breachedAtrSort.key];
        let valB = b[breachedAtrSort.key === 'age' ? 'ageDays' : breachedAtrSort.key];

        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }

        if (valA < valB) return breachedAtrSort.dir === 'asc' ? -1 : 1;
        if (valA > valB) return breachedAtrSort.dir === 'asc' ? 1 : -1;
        return 0;
    });

    if (breached.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">No breached ATRs found</td></tr>`;
        return;
    }

    breached.slice(0, 20).forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="details-link" onclick="openAtrDetails('${item.id}')">${item.id}</span></td>
            <td>${item.checklist}</td>
            <td>${item.ageDays} Days</td>
            <td>${item.department}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Table Sorting Helper Icons updating
function updateSortIcons(tableId, sortState) {
    const headers = document.querySelectorAll(`#${tableId} th.sortable`);
    headers.forEach(th => {
        const icon = th.querySelector('i');
        const key = th.getAttribute('data-sort');
        if (key === sortState.key) {
            icon.className = sortState.dir === 'asc' ? 'fa-solid fa-sort-up' : 'fa-solid fa-sort-down';
            icon.style.color = '#f03e22'; // Theme Accent Red
        } else {
            icon.className = 'fa-solid fa-sort';
            icon.style.color = '#cbd5e1';
        }
    });
}

// --- DYNAMIC EXCEL INTEGRATIONS ---

// 1. Upload & Parse Excel Data
function parseExcel(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dataBytes = new Uint8Array(e.target.result);
            const workbook = XLSX.read(dataBytes, { type: 'array' });
            
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rawJson = XLSX.utils.sheet_to_json(worksheet);
            
            if (rawJson.length === 0) {
                alert("The uploaded Excel sheet contains no records.");
                return;
            }
            
            // Map columns robustly
            const mappedData = rawJson.map((row, index) => {
                const getValue = (keysList, defaultVal = '') => {
                    for (let key of keysList) {
                        const keyClean = key.toLowerCase().trim();
                        const match = Object.keys(row).find(k => k.toLowerCase().trim() === keyClean);
                        if (match !== undefined) return row[match];
                    }
                    return defaultVal;
                };

                return {
                    id: String(getValue(['id', 'record id', 'atr id', 'id number'], 5000 + index)),
                    zone: String(getValue(['zone', 'zones'], 'Pan India')),
                    checklist: String(getValue(['checklist item', 'checklist', 'description', 'checklist description'], 'Checklist description')),
                    category: String(getValue(['category', 'categories', 'type'], 'Welcome Greeting')),
                    status: String(getValue(['status', 'state'], 'Open')),
                    tatStatus: String(getValue(['tat status', 'tat', 'tatstatus'], 'Beyond TAT')),
                    ageDays: Number(getValue(['age days', 'age', 'agedays', 'days'], 0)),
                    department: String(getValue(['department', 'dept'], '-')),
                    financialYear: String(getValue(['financial year', 'fy', 'financialyear'], '2026-2027')),
                    quarter: String(getValue(['quarter', 'qtr', 'quarters'], 'Q1')),
                    month: String(getValue(['month', 'months'], 'May')),
                    entityType: String(getValue(['entity type', 'entitytype', 'entity'], 'BRANCH BANKING')),
                    region: String(getValue(['region', 'regions'], 'Select Region')),
                    cluster: String(getValue(['cluster', 'clusters'], 'Select Cluster')),
                    date: String(getValue(['date', 'dates', 'created date'], '21-05-2026')),
                    pmName: String(getValue(['pm name', 'pmname', 'pm'], '')),
                    rmName: String(getValue(['rm name', 'rmname', 'rm'], ''))
                };
            });

            // Swap working dataset
            atrData = mappedData;

            // Update UI Dropzone File info
            document.getElementById('file-name-span').textContent = file.name;
            document.getElementById('file-info').style.display = 'flex';

            // Reset forms and hierarchy selection
            initFilters();
            applyFilters();

            showSuccessModal(`Excel file loaded successfully! ${mappedData.length} records imported.`);

        } catch (err) {
            console.error("Excel Parsing Error: ", err);
            alert("Error parsing the file. Please verify it is a valid formatted Excel spreadsheet.");
        }
    };
    reader.readAsArrayBuffer(file);
}

// 2. Download Pre-formatted Excel Template
function downloadExcelTemplate() {
    // Generate clean flat array for template download representing default structure
    const templateData = defaultAtrData.map(d => ({
        "Id": d.id,
        "Zone": d.zone,
        "Checklist Item": d.checklist,
        "Category": d.category,
        "Status": d.status,
        "TAT Status": d.tatStatus,
        "Age Days": d.ageDays,
        "Department": d.department,
        "Financial Year": d.financialYear,
        "Quarter": d.quarter,
        "Month": d.month,
        "Entity Type": d.entityType,
        "Region": d.region,
        "Cluster": d.cluster,
        "Date": d.date,
        "PM name": d.pmName,
        "RM name": d.rmName
    }));

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ATR_Data_Template");
    
    // Trigger download
    XLSX.writeFile(wb, "ATR_Dashboard_Template.xlsx");
}

// 3. Export specific table view to spreadsheet
function exportTableToExcel(tableId, filename) {
    const tableElement = document.getElementById(tableId);
    if (!tableElement) return;

    const ws = XLSX.utils.table_to_sheet(tableElement);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, filename);
}

// --- RECORD DETAILS VIEW MODAL ACTIONS ---

function openAtrDetails(id) {

    console.log("Opening modal for ID:", id);

    const item = atrData.find(d => String(d.id) === String(id));

    console.log(item);

    if (!item) {
        alert("Record not found");
        return;
    }

    document.getElementById('det-id').textContent = item.id || '-';
    document.getElementById('det-zone').textContent = item.zone || '-';
    document.getElementById('det-entity').textContent = item.entityType || '-';
    document.getElementById('det-fy').textContent = item.financialYear || '-';

    document.getElementById('det-period').textContent =
        `${item.month || '-'} - ${item.quarter || '-'}`;

    document.getElementById('det-category').textContent = item.category || '-';
    document.getElementById('det-status').textContent = item.status || '-';
    document.getElementById('det-tat').textContent = item.tatStatus || '-';
    document.getElementById('det-age').textContent = item.ageDays || '-';
    document.getElementById('det-department').textContent = item.department || '-';
    document.getElementById('det-checklist').textContent = item.checklist || '-';

    const modal = document.getElementById('details-modal');

    modal.style.display = 'flex';
    modal.classList.add('active');
}




function closeDetailsModal() {
    document.getElementById('details-modal').classList.remove('active');
}

// Success Modal helpers
function showSuccessModal(message) {
    const successModal = document.getElementById('success-modal');
    document.getElementById('success-message').textContent = message;
    successModal.classList.add('active');
}

function closeSuccessModal() {
    document.getElementById('success-modal').classList.remove('active');
}

// Generate 20 demo users
const stakeholderDemoData = Array.from({ length: 20 }, (_, i) => {
    const assigned = Math.floor(Math.random() * 5) + 3; // 3 to 7
    const completed = Math.floor(Math.random() * (assigned - 1)) + 1;
    const pending = assigned - completed;
    
    const excellent = Math.floor(completed * 0.5);
    const satisfactory = Math.floor(completed * 0.3);
    const needsImprovement = Math.floor(completed * 0.1);
    const unsatisfactory = completed - excellent - satisfactory - needsImprovement;
    
    const totalScore = (excellent * 100) + (satisfactory * 80) + (needsImprovement * 50) + (unsatisfactory * 0);
    const avgScore = completed > 0 ? (totalScore / completed).toFixed(2) : 0;
    
    return {
        name: `Assessor ${i + 1}`,
        assigned,
        completed,
        pending,
        excellent,
        satisfactory,
        needsImprovement,
        unsatisfactory,
        avgScore: Number(avgScore)
    };
});
stakeholderDemoData.sort((a, b) => b.avgScore - a.avgScore);

// --- STAKEHOLDER PERFORMANCE RENDERERS ---

function renderTopPerformers() {
    const list = document.getElementById('top-performers-list');
    if (!list) return;
    list.innerHTML = '';
    
    const top3 = stakeholderDemoData.slice(0, 3);
    top3.forEach((user, idx) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.padding = '12px';
        li.style.border = '1px solid var(--border-color)';
        if (idx < top3.length - 1) {
            li.style.borderBottom = 'none';
        }
        
        li.innerHTML = `
            <span>${user.name}</span>
            <span>${idx + 1}</span>
        `;
        list.appendChild(li);
    });
}

function renderStakeholderTable() {
    const tbody = document.getElementById('rm-performance-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    let totals = { assessed: 0, excellent: 0, satisfactory: 0, needsImprovement: 0, unsatisfactory: 0 };
    
    // Render all records in table
    stakeholderDemoData.forEach(user => {
        totals.assessed += user.completed;
        totals.excellent += user.excellent;
        totals.satisfactory += user.satisfactory;
        totals.needsImprovement += user.needsImprovement;
        totals.unsatisfactory += user.unsatisfactory;
        
        const getScoreColor = (score) => {
            if (score >= 90) return '#28a745'; 
            if (score >= 70) return '#ffc107'; 
            return '#dc3545'; 
        };
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.completed}</td>
            <td>${user.excellent}</td>
            <td>${user.satisfactory}</td>
            <td>${user.needsImprovement}</td>
            <td>${user.unsatisfactory}</td>
            <td style="background-color: ${getScoreColor(user.avgScore)}; color: white; text-align: center; font-weight: 600;">${user.avgScore}%</td>
        `;
        tbody.appendChild(tr);
    });
    
    const totalScorePoints = (totals.excellent * 100) + (totals.satisfactory * 80) + (totals.needsImprovement * 50);
    const totalAvgScore = totals.assessed > 0 ? (totalScorePoints / totals.assessed).toFixed(2) : 0;
    
    const trTotal = document.createElement('tr');
    trTotal.style.fontWeight = 'bold';
    trTotal.style.backgroundColor = '#f8fafc';
    trTotal.innerHTML = `
        <td>Total</td>
        <td>${totals.assessed}</td>
        <td>${totals.excellent}</td>
        <td>${totals.satisfactory}</td>
        <td>${totals.needsImprovement}</td>
        <td>${totals.unsatisfactory}</td>
        <td style="background-color: #7acc7a; color: white; text-align: center; font-weight: 600;">${totalAvgScore}%</td>
    `;
    tbody.appendChild(trTotal);
}

function renderStakeholderChart() {
    const ctx = document.getElementById('chart-rm-performance');
    if (!ctx) return;
    
    if (chartRmPerformanceInstance) {
        chartRmPerformanceInstance.destroy();
    }
    
    
    // Only chart top 5 as well for clean UI
    const top5Data = stakeholderDemoData.slice(0, 5);
    const container = ctx.parentElement;
    container.style.height = (top5Data.length * 40 + 60) + 'px';
    
    const labels = top5Data.map(u => u.name);
    const assignedData = top5Data.map(u => u.assigned);
    const completedData = top5Data.map(u => u.completed);
    const pendingData = top5Data.map(u => u.pending);
    
    chartRmPerformanceInstance = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Total Assigned',
                    data: assignedData,
                    backgroundColor: '#526cb5',
                    barPercentage: 0.6
                },
                {
                    label: 'Completed',
                    data: completedData,
                    backgroundColor: '#8bc268',
                    barPercentage: 0.6
                },
                {
                    label: 'Pending',
                    data: pendingData,
                    backgroundColor: '#f6c342',
                    barPercentage: 0.6
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: { family: 'Outfit', size: 12, weight: '600' }
                    },
                    grid: { color: '#f1f5f9' },
                    border: { display: false }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: { family: 'Outfit', size: 12, weight: '700' },
                        color: '#2c3e50'
                    },
                    grid: { display: false },
                    border: { display: false }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        font: { family: 'Outfit', size: 12, weight: '600' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) { return ` ${context.dataset.label}: ${context.raw}`; }
                    }
                }
            }
        },
        plugins: [{
            id: 'barSegmentLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets.forEach((dataset, dsIdx) => {
                    const meta = chart.getDatasetMeta(dsIdx);
                    if (meta.hidden) return;
                    meta.data.forEach((bar, i) => {
                        const value = dataset.data[i];
                        if (value === 0) return; 
                        
                        const xCenter = bar.base + (bar.x - bar.base) / 2;
                        const yCenter = bar.y;

                        ctx.save();
                        ctx.fillStyle = dsIdx === 2 ? '#000000' : '#ffffff'; 
                        ctx.font = '600 12px Outfit, Inter, sans-serif';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(value, xCenter, yCenter);
                        ctx.restore();
                    });
                });
            }
        }]
    });
}





