let keys = document.querySelectorAll(".key");
let whiteKeys = document.querySelectorAll(".key.white");
let blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
    key.addEventListener("click", () => pressNote(key))
});

function pressNote(key){
    const noteAudio = document.getElementById(key.dataset.pianonote)
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active")
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    })

};

const whiteKeysKB = ["z","x","c","v","b","n","m"]
const blackKeysKB = ["s","d","f","g","h","j"]

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key;
    const whiteKeyIndex = whiteKeysKB.indexOf(key);
    const blackKeyIndex = blackKeysKB.indexOf(key);

    if(whiteKeyIndex > -1) pressNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) pressNote(blackKeys[blackKeyIndex]);
})