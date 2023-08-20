// Think about speed / timing between clicks?
console.log("at the beginning of script")
function makeAudio(button_id) {
    let reference = {
        "w":"sounds/tom-1.mp3",
        "a":"sounds/tom-2.mp3",
        "s":"sounds/tom-3.mp3",
        "d":"sounds/tom-4.mp3",
        "j":"sounds/crash.mp3",
        "k":"sounds/kick-bass.mp3",
        "l":"sounds/snare.mp3"
    };
    let audio = new Audio(reference[button_id]);
    console.log(reference[button_id])
    audio.play(); 
};

let keyRecord = [];
console.log("at button click");

// Button click
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
     document.querySelectorAll("button")[i].addEventListener('click', function () {
        buttonAnimation(this.innerHTML);
        makeAudio(this.innerHTML); 
        keyRecord.push(this.innerHTML);   
    });

};
console.log("at keyboard click");

// Keyboard click
document.addEventListener('keydown', (event) => {
    buttonAnimation(event.key);    
    console.log(event.key);
    keyRecord.push(event.key);
    console.log("from within the keydown listener", keyRecord);
    makeAudio(event.key);
    // record the key strokes, pass th data to another functio

});


console.log("at record click");

// Record button 
let recordClicked = 0;
let recordStart = document.querySelector(".record");
recordStart.addEventListener("click", (event) => {
    recordClicked++

    // let result = condition ? trueValue : falseValue;

    if (recordClicked % 2 != 0 ) {
        console.log("clicked, remainder is NOT 0 -->", recordClicked)
        // currently recording
        isRecording = true;
        console.log("log the keys..", keyRecord);
        keyRecord = []; // re/start with clean slate
        console.log("check if keys are empty?", keyRecord);
        recordStart.setAttribute("style", "border-radius: 0; width: 100px;") // turn into stop button
    }
    else {
        isRecording = false;
        console.log("clicked again, remainder is 0 -->", recordClicked)
        recordStart.setAttribute("style", "height: 100px; border-radius: 50%")
    }

    // odd = recording
    // even == reset / stoped recording

});

// Play button
let playRecording = document.querySelector(".play")
playRecording.addEventListener("click", (event) => {
    if (isRecording === true) {
        alert("cannot playback while recording in progress")
    }
    else {
        console.log(keyRecord)
        for (let i of keyRecord) {            
            console.log("playback function -->", i);
            setTimeout(makeAudio(i), 100);
        }
    }
}
);


function buttonAnimation(keyPressed) {
    let keySelector =  document.querySelector(`.${keyPressed}`)
    keySelector.classList.add("pressed")
    setTimeout(function () {
        keySelector.classList.remove("pressed")
    }, 100)
}

// function resetAnimation(keyPressed) {
//     document.querySelector(`.${keyPressed}`).classList.remove("pressed")
// }
