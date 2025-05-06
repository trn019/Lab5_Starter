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

  
  // implementing the sound based on the changes in the volume and the horns


}