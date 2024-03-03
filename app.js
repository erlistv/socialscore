let votesocket = new WebSocket("wss://s")

let person1 = 0

let person2 = 0

let person3 = 0

let person4 = 0

let person5 = 0

let person6 = 0

let person7 = 0

let person8 = 0



function voteUp1() {
    person1 = person1 + 1
    document.getElementById("person1").innerHTML = "score: " + person1
}

function voteDown1() {
    person1 = person1 - 1
    document.getElementById("person1").innerHTML = "score: " + person1
}

function voteUp2() {
    person2 = person2 + 1
    document.getElementById("person2").innerHTML = "score: " + person2
}

function voteDown2() {
    person2 = person2 - 1
    document.getElementById("person2").innerHTML = "score: " + person2
}