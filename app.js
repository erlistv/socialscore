let votesocket = new WebSocket("wss://s")

let votesUp = 0

let votesDown = 0


function voteUp() {
    votesUp = votesUp + 1
    document.getElementById("votesupdisplay").innerHTML = votesUp
}

function voteDown() {
    votesDown = votesDown + 1
    document.getElementById("votesdowndisplay").innerHTML = votesDown
}