// script.js
document.addEventListener('DOMContentLoaded', () => {
    loadProgressData();
});

function loadProgressData() {
    const container = document.getElementById('progress-container');
    
    progressData.forEach(entry => {
        addProgressBox(new Date(entry.date), entry.tasks);
    });
}

function addProgressBox(date, tasks) {
    const container = document.getElementById('progress-container');

    const box = document.createElement('div');
    box.className = 'progress-box';

    const title = document.createElement('h2');
    title.textContent = formatDate(date);
    box.appendChild(title);

    const table = document.createElement('table');
    table.className = 'progress-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Task', 'Status'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tasks.forEach(task => {
        const row = document.createElement('tr');
        Object.values(task).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    box.appendChild(table);
    container.appendChild(box);
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
