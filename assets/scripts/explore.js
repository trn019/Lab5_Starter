// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // implementing populating the select options
  function populateVoiceSelect() {
    const voiceCollection = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    // alert(voiceCollection.length);
    for(let i = 0; i < voiceCollection.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voiceCollection[i].name} (${voiceCollection[i].lang})`;
      
      if (voiceCollection[i].default) {
        option.textContent += ' - DEFAULT';
      }

      option.setAttribute('data-lang', voiceCollection[i].lang);
      option.setAttribute('data-name', voiceCollection[i].name);
      voiceSelect.appendChild(option);
      
    }
  }  
    
    populateVoiceSelect();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceSelect;
    }

    const voiceSelect = document.getElementById('voice-select');
    // implementing the text to speech based on the selected element
    const talkButton = document.querySelector('button');
    const textSpeech = document.getElementById('text-to-speak');

    talkButton.addEventListener('click', (event) => {
      const voiceCollection = speechSynthesis.getVoices();
      const utterText = new SpeechSynthesisUtterance(textSpeech.value);
      const selectOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voiceCollection.length; i++) {
        if (selectOption === voiceCollection[i].name) {
          utterText.voice = voiceCollection[i];
        }
      }

      //implenting month open while speaking
      speechSynthesis.speak(utterText);
      const imgFace = document.querySelector('img');
      utterText.onstart =() =>{
        imgFace.src = 'assets/images/smiling-open.png';
      };
      utterText.onend =() =>{
        imgFace.src = 'assets/images/smiling.png';
      };

    });

}