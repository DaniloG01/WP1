
function scrollToHalf() {
  const polovinaSajta = document.getElementById('polovinaSajta');
  if (polovinaSajta) {
    polovinaSajta.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',     
    });
  }
}


const galerijaButton = document.getElementById('galerijaButton');
if (galerijaButton) {
  galerijaButton.addEventListener('click', function (e) {
    e.preventDefault(); 
    scrollToHalf(); 
  });
}
