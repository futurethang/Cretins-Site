// Run after the HTML document has finished loading
document.addEventListener("DOMContentLoaded", function () {
  // Get our lazy-loaded images
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  // Do this only if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    // ... write the code here
    // Create new observer object
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      // Loop through IntersectionObserverEntry objects
      entries.forEach(function(entry) {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    // Loop through and observe each image
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }

  // END LAZY LOADING CODE

  // JSON IMAGE LOADING

  const images = fetch("https://cretinsdata-default-rtdb.firebaseio.com/", {
    method: "GET",
    mode: "no-cors"
  }).then((response) => {
    // debugger;
    const data = response.json()
    console.log(data)
    return data
  }).catch(err => {
    console.log(err)
  })


});
