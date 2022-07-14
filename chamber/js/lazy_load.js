/*if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll(".lazyLoad");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    let script = document.createElement('script');
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
    document.body.appendChild(script);
}
*/
const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} 

else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}