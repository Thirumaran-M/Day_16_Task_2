function create_table() {
	var ele = document.createElement("table");
	ele.className = "table";
	return ele;
}

function create_thead() {
	var ele = document.createElement("thead");
	ele.className = "thead-dark";
	return ele;
}

function create_tbody() {
	return document.createElement("tbody");
}

function create_tr() {
	return document.createElement("tr");
}

function create_th(text) {
	var ele = document.createElement("th");
	ele.setAttribute("scope", "col");
	ele.innerHTML = text;
	return ele;
}

function create_td(text) {
	var ele = document.createElement("td");
	ele.innerHTML = text;
	return ele;
}

// Create the table
var table = create_table();

// Create the table head
var thead = create_thead();
var theadRow = create_tr();
theadRow.appendChild(create_th("#"));
theadRow.appendChild(create_th("First"));
theadRow.appendChild(create_th("Last"));
theadRow.appendChild(create_th("Handle"));
thead.appendChild(theadRow);
table.appendChild(thead);

// Create the table body
var tbody = create_tbody();

// Create table rows and cells dynamically
var rowData = [
	       ["1", "Mark", "Otto", "@mdo"],
	       ["2", "Jacob", "Thornton", "@fat"],
	       ["3", "Larry", "the Bird", "@twitter"]
	      ];

rowData.forEach(function(data) {
	var row = create_tr();
	data.forEach(function(cellData) {
		var cell = create_td(cellData);
		row.appendChild(cell);
	});
	tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);
