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
}

// Button click
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
     document.querySelectorAll("button")[i].addEventListener('click', function () {
        makeAudio(this.innerHTML)    
    });

}

// Keyboard click
document.addEventListener('keydown', function(event){
    console.log(event.key)
    makeAudio(event.key)
    // record the key strokes


})

// 