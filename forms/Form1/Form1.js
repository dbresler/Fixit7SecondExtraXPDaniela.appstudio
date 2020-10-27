//declaring variables and display the message entered in the prompt
let newRows = parseInt(prompt("Please enter the number of rows you want shown."))
let newColumns = parseInt(prompt("Please enter the number of columns you want shown."))

for (i = 1; i<=newRows; i++){
for (j = 1;j<=newColumns;j++){
document.write("*")
}
document.write("<br />")
}