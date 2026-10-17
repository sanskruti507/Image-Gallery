
const dropdown = document.getElementById('dropdown');
const dropdownImage = document.getElementById('dropdownImage');
const closeBtn = document.getElementById('cross');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const images = document.querySelectorAll('.container img');
let currentIndex = 0;

function showImage(index){
  currentIndex = index;
  dropdownImage.src = images[index].src;
  dropdown.style.display = 'flex';
}

// Open
images.forEach((img, i) => {
  img.addEventListener('click', () => showImage(i));
});

// Close
closeBtn.addEventListener('click', () => dropdown.style.display = 'none');

// Next / Prev
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // loops back to 0
  dropdownImage.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // loops to last
  dropdownImage.src = images[currentIndex].src;
});
