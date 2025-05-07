// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // implementing changing the image for the different horns
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', (event) => {
    const selectHorn = event.target.value;
    const hornImage = document.querySelector('img');
    hornImage.src = `assets/images/${selectHorn}.svg`;
    // console.log(`Change image to ${selectHorn}`);
    // alert(hornImage.src); 
  });


  // implementing the change in icon for the different volumns
  const volumeRange = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  volumeRange.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    
    audio.volume = volumeValue / 100;
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeValue<33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volumeValue<67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }  
  });
  
  // implementing the sound based on the changes in the volume and the horns
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', (event) => {
    const hornValue = hornSelect.value;
    audio.src = `assets/audio/${hornValue}.mp3`;
    if (hornValue==='party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      });
    }
    audio.play();
  });

}