//create the first table
table_creator(10);
//this is the function table creator
function table_creator(table_max) {
    let table;
    let max = table_max;
    //creating the table
    table = "<table>";
    for (let j = -1; j <= max; j++) {
        // creating the row
        table += "<tr>";

        if (j == -1) {
            //adding the x cell
            table += "<td class='x'>";
            table += "x";
            table += "</td>"
        } else {
            // adding the first-col
            table += "<td class='first-col'>";
            table += j;
            table += "</td>";
        
        }
        
        // adding the numbered cell
        for (let i = -1; i < max; i++) {
            if (j == -1) {
                // adding the first-row
                table += "<td class='first-row'>";
                table += i + 1;
                table += "</td>";
            }
            else if (i + 1 == j) {
                table += "<td class='squre'>";
                table += (i + 1) * j;
                table += "</td>";
            } else {
                table += "<td>";
                table += (i + 1) * j;
                table += "</td>";
            }
            
        }
        table += "</tr>";
  
    }
    table += "</table>";

    // adding the created table into the html document
    document.getElementById("table").innerHTML = table;

}
//controller
function update_value(value) {
    //updating the selected value
    document.getElementById("selectedvalue").innerHTML =
        "selected value : " + value;
        //creating the new table
        table_creator(value);
}

