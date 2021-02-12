
function b1() {

    let colors = ["blue", "green", "yellow", "cyan"]
    const random = Math.floor(Math.random() * colors.length);
    console.log(random, colors[random]);
    colorBlu.style.backgroundColor = colors[random];
    let utterance = new SpeechSynthesisUtterance(`You have choosen ${colors[random]} Colour`);
    speechSynthesis.speak(utterance);
    error = false;

    var res = document.getElementById('res');
    res.innerHTML = `You have choosen ${colors[random]} Colour`;

}


function b2() {
    let colors = ["orange", "pink", "brown", "grey"]
    const random = Math.floor(Math.random() * colors.length);
    console.log(random, colors[random]);

    colorFlem.style.backgroundColor = colors[random];
    let utterance = new SpeechSynthesisUtterance(`You have choosen ${colors[random]} Colour`);
    speechSynthesis.speak(utterance);
    error = false;

    var res = document.getElementById('res');
    res.innerHTML = `You have choosen ${colors[random]} Colour`;
}

