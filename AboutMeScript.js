document.getElementById('moreBtn').addEventListener('click', function() {
  const moreInfo = document.getElementById('moreInfo');
  
  if (moreInfo.classList.contains('hidden')) {
      moreInfo.classList.remove('hidden');
      moreInfo.classList.add('show');
      this.textContent = 'Show Less About Me'; 
  } else {
      moreInfo.classList.remove('show');
      moreInfo.classList.add('hidden');
      this.textContent = 'More About Me'; 