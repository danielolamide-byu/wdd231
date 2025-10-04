
const openButton = document.getElementById('openButton')
const dialogBox = document.getElementById('dialogBox')
const closeButton = document.getElementById('closeButton')
const modalText = document.getElementById('modalText');

openButton.addEventListener('click', () => {
  dialogBox.showModal();
  modalText.textContent = `One apple has about 95 calories`
});

openButton.addEventListener('click', () => {
  dialogBox.showModal();
  modalText.textContent = `One Banana is Nice.`
})

closeButton.addEventListener('click', () => {
  dialogBox.close();
})