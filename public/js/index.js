// testimonial slider

const slides = document.querySelectorAll('.testimonial__sliderContent');
const prevBtn = document.querySelector('.testimonial__sliderBtnLeft');
const nextBtn = document.querySelector('.testimonial__sliderBtnRight');

let index = 0;

prevBtn.addEventListener('click', () => {
  if (index == 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = `-${index * 100}%`;
});

nextBtn.addEventListener('click', () => {
  if (index == slides.length - 1) index = 0;
  else index++;

  slides[0].style.marginLeft = `-${index * 100}%`;
});
