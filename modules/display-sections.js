/* eslint-disable import/prefer-default-export */
export const DisplaySec = (e, id) => {
  const alink = document.querySelectorAll('a');
  for (let i = 0; i < alink.length; i += 1) {
    alink[i].classList.remove('active');
  }
  const displays = document.getElementsByClassName('card');
  for (let i = 0; i < displays.length; i += 1) {
    displays[i].style.display = 'none';
  }
  e.currentTarget.classList.add('active');
  document.getElementById(id).style.display = 'flex';
};