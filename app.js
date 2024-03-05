let votesocket = new WebSocket("wss://s")

const score = {}

const buttonstatus = {}

function voteUp(name, id, buttonid) {
    if (!buttonstatus[buttonid]) {
        buttonstatus[buttonid] = {clicked: true, hovered: false}
    } else if (buttonstatus[buttonid].clicked) {
        buttonstatus[buttonid].clicked = false
    } else {
        buttonstatus[buttonid].clicked = true
    }

    if (!score[name]) {
        score[name] = {score: 0}
    }

    score[name].score++
    document.getElementById(name).innerHTML = "score: " + score[name].score
    document.getElementById(id).setAttribute('src', 'images/uparrow.png')
}

function voteDown(name, id, buttonid) {
    if (!buttonstatus[buttonid]) {
        buttonstatus[buttonid] = {clicked: true, hovered: false}
    } else if (buttonstatus[buttonid].clicked) {
        buttonstatus[buttonid].clicked = false
    } else {
        buttonstatus[buttonid].clicked = true
    }

    if (!score[name]) {
        score[name] = {score: 0}
    }

    score[name].score--
    document.getElementById(name).innerHTML = "score: " + score[name].score
    document.getElementById(id).setAttribute('src', 'images/downarrow.png')
}

function hoverup(element, buttonid) {
    if (!buttonstatus[buttonid]) {
        buttonstatus[buttonid] = {clicked: false, hovered: true}
    } else if (buttonstatus[buttonid] && buttonstatus[buttonid].clicked) {

    } else {
        element.setAttribute('src', 'images/uparrow.png')
    }

    if (buttonstatus[buttonid].hovered) {
        element.setAttribute('src', 'images/uparrow.png')
    }
}

function hoverdown(element, buttonid) {
    if (!buttonstatus[buttonid]) {
        buttonstatus[buttonid] = {clicked: false, hovered: true}
    } else if (buttonstatus[buttonid] && buttonstatus[buttonid].clicked) {

    } else {
        element.setAttribute('src', 'images/downarrow.png')
    }

    if (buttonstatus[buttonid].hovered) {
        element.setAttribute('src', 'images/downarrow.png')
    }
}

function unhoverup(element, buttonid) {
    if (!buttonstatus[buttonid] || !buttonstatus[buttonid].clicked) {
        element.setAttribute('src', 'images/voteupgray.png')
        buttonstatus[buttonid] = {clicked: false, hovered: false}
    }

    if (buttonstatus[buttonid] && buttonstatus[buttonid].hovered && !buttonstatus[buttonid].clicked) {
        element.setAttribute('src', 'images/voteupgray.png')
        buttonstatus[buttonid].hovered = false
    }
}

function unhoverdown(element, buttonid) {
    if (!buttonstatus[buttonid] || !buttonstatus[buttonid].clicked) {
        element.setAttribute('src', 'images/votedowngray.png')
        buttonstatus[buttonid] = {clicked: false, hovered: false}
    }

    if (buttonstatus[buttonid] && buttonstatus[buttonid].hovered && !buttonstatus[buttonid].clicked) {
        element.setAttribute('src', 'images/votedowngray.png')
        buttonstatus[buttonid].hovered = false
    }
}