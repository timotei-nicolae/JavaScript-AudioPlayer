let player = document.getElementsByClassName('music-player');
var song_list = [];

let i = 0;
for (var playBtn of player){
  let image = playBtn.children[0];
  let progress = image.nextElementSibling.children[1];
  let volum = image.nextElementSibling.nextElementSibling.children[1];
  let ctrlIcon = playBtn.children[3].children[0];
  let current_time = image.nextElementSibling.children[0]; 
  let total_duration = image.nextElementSibling.children[2];
  let audio = playBtn.children[4];
  song_list.push(audio)

    ctrlIcon.addEventListener('click', function(){
        onlysongplay()
        PlayPause(ctrlIcon, audio)
    })

    audio.addEventListener('pause', function(){
      showpause(ctrlIcon)
    })

    audio.addEventListener('loadedmetadata', function(){
    metadata(audio, progress);
    })

    progress.addEventListener('change', function(){
      movebar(audio, progress)
    })

    volum.addEventListener('mousemove', function(){
      setVolume(audio, volum)
    })

    if (audio.readyState > 0) {
      displayDuration(total_duration, audio);
    } else {
      audio.addEventListener('loadedmetadata', function() {
        displayDuration(total_duration, audio);
      });
    }

    setTime(total_duration, audio.duration);
      audio.addEventListener('timeupdate', () => {
      const currentAudioTime = Math.floor(audio.currentTime);
      setTime(current_time, currentAudioTime);
      })
  i++
}


//metadates
function metadata(audio, progress){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}


//play-pause
function PlayPause(ctrlIcon, audio){
    if(ctrlIcon.classList.contains("fa-pause")){
        audio.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        audio.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


//move slide-bar
function movebar(audio, progress){
    audio.currentTime = progress.value;
    setInterval(()=>{
      progress.value = audio.currentTime;
  }, 500);
}


// volum-slide
function setVolume(audio, volum){
    audio.volume = volum.value / 100;
}


//total time duration sound
function calculateTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}
function displayDuration(total_duration, audio) {
    total_duration.textContent = calculateTime(audio.duration);
}


//format the time (real time at the one moment)
function setTime(output, input){
  const minutes = Math.floor(input / 60); 
  const seconds = Math.floor(input % 60);
  if(seconds < 10) {
    output.innerHTML = minutes + ":0" + seconds;
  } else{
    output.innerHTML = minutes + ":" + seconds;
  }
}


//play only one song one more time
function onlysongplay(){
  for (let i = 0; i < song_list.length; i++){
    if(song_list[i].paused == false){
      song_list[i].pause()
    
    }
  }
} 


//show play button
function showpause(ctrlIcon){
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
}
