const table = document.createElement('table');

let count = 1;

for(let i = 0; i < 10; i++) {
    const newRow = document.createElement('tr');

    for (let k = 0; k < 10; k++) {
        const newCol = document.createElement('td');
        newCol.textContent = count;
        newRow.appendChild(newCol);
        count++;
    }

    table.appendChild(newRow);
}

document.body.appendChild(table);