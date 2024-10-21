
function copyNumber() {
    const cellNumber = document.getElementById('cell-n');

  try {
    navigator.clipboard.writeText(cellNumber.textContent);

  } catch (error) {
    console.error('não foi', error);
  }
}



