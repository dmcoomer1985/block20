const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
const root = document.getElementById("root");
const name = document.createElement("h1");
name.innerHTML = "FREELANCERS";
root.appendChild(name);
const ul= document.createElement("ul");
root.appendChild(ul);
for(let people of users) {
    let li = document.createElement("li");
    li.innerHTML = people.name;
    ul.appendChild(li);
}
root.appendChild(ul);
document.body.style.backgroundColor = "orange";

}

//call the main function
main();