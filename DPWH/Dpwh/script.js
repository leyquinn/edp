document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentSlide = 0;
    let interval;
  
    function showSlide(index) {
      // Update slide position
      const carouselSlides = document.querySelector('.carousel-slides');
      const offset = -index * 100;
      carouselSlides.style.transform = `translateX(${offset}%)`;
  
      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function showPrevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function startAutoSlide() {
      interval = setInterval(showNextSlide, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    // Add event listeners
    nextBtn.addEventListener('click', () => {
      showNextSlide();
      resetTimer();
    });
  
    prevBtn.addEventListener('click', () => {
      showPrevSlide();
      resetTimer();
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetTimer();
      });
    });
  
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  
    function resetTimer() {
      stopAutoSlide();
      startAutoSlide();
    }
  
    // Initial load
    showSlide(currentSlide);
    startAutoSlide();
  });
  