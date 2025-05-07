// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  function populateVoiceSelect() {
    
    const voiceSelect = document.getElementById('voice-select');
    const voiceCollection = speechSynthesis.getVoices();
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
}