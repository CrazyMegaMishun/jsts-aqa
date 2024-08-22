// Перепишіть `if..else` з використанням кількох операторів `?`.
// Для читання - оформляйте код у кілька рядків.

// let message;

// if (login === "Pitter") {
//   message = "Hi";
// } else if (login === "Owner") {
//   message = "Hello";
// } else if (login === "") {
//   message = "unknown";
// } else {
//   message = "";
// }

let message
let login = "Owner"

login === "Pitter" ? message = "Hi" : 
login === "Owner" ? message = "Hello" : 
login === "" ? message = "unknown" :
message = ""

console.log(message)