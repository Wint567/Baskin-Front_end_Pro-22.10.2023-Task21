let cellValue = 1;
for(let i = 0; i < 10; i++){
    document.write("<tr>");
    for (let j = 0; j < 10; j++){
        document.write("<td>" + cellValue + "</td>");
        cellValue++;
    }
    document.write("</tr>");
}