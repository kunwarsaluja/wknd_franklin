export default function decorate(block) {
  const slides = [...block.children];

  slides.forEach((slide) => {
    slide.classList.add('carousel-slide');

    slide.classList.add('carousel-slide-card');
    const slideContent = document.createElement('div');
    slideContent.classList.add('carousel-slide-card-content');

    [...slide.children].forEach((child) => {
      if (child.querySelector('picture')) {
        child.classList.add('carousel-slide-card-image');
      } else {
        // strip out unwanted p tags
        child.innerHTML = child.innerHTML.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');
        slideContent.appendChild(child);
      }
    });

    slide.appendChild(slideContent);
  });
}
