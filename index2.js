// استدعاء الجدول باستخدام العنصر الأصلي "myTable"
var table = document.getElementById("myTable");

var data = [
  ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 1", "nvalue 2", "nvalue 3"]
];

for (var i = 0; i < data.length; i++) {

  var row = table.insertRow();

  for (var j = 0; j < data[i].length; j++) {
    var cell = row.insertCell();
    cell.innerHTML = data[i][j];
  }
}

function addRow() {
  var newRow = table.insertRow();

  for (var i = 0; i < data[0].length; i++) {
    var newCell = newRow.insertCell();
    newCell.innerHTML = "new value";
  }
}

function clearTable() {
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}