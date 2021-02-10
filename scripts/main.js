document.getElementById('box1').addEventListener('click', function (e) {
    e.preventDefault();
    var res = document.getElementById('res');
    res.innerHTML = "You've choosen blue Colour";
    box2.style.backgroundColor = 'white';
    msg1.innerHTML = ""
    msg2.innerHTML = "Click here to find colour"
    let utterance = new SpeechSynthesisUtterance(res.innerHTML);
    speechSynthesis.speak(utterance);
    error = false;
    console.log()
});

document.getElementById("box2").addEventListener('click', function (e) {
    e.preventDefault();
    var res = document.getElementById('res');
    res.innerHTML = "You've choosen flemengo Colour";
    box1.style.backgroundColor = 'white';
    msg2.innerHTML = ""
    msg1.innerHTML = "Click here to find colour"
    let utterance = new SpeechSynthesisUtterance(res.innerHTML);
    speechSynthesis.speak(utterance);
    error = false;
});
