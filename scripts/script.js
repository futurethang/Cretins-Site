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

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC55OeSNTOLEYP0DOpILPMp48V5BQDV6rY",
    authDomain: "cretinsdata.firebaseapp.com",
    databaseURL: "https://cretinsdata-default-rtdb.firebaseio.com/",
    projectId: "cretinsdata",
    storageBucket: "cretinsdata.appspot.com",
    messagingSenderId: "795175842950",
    appId: "1:795175842950:web:6406701ebda7431a7f0d07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dbRef = firebase.database().ref();
  const artsList = firebase.database().ref('artworks').get().then(data =>{
    return data.toJSON()
  }).then(data => {
    console.log(data);
    // do something with the dataset
    renderImages(data);
    return data
  }).catch(err=>console.log(err));


  function renderImages(data) {
    for (let item in data) {
      // console.log(data[item])
      let $element = document.createElement("article");
      $element.classList.add("cretin");
      console.log($element)
    };

  }

});
