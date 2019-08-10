// helper functions
const createNode = element => document.createElement(element)
const append = (parent, child) => parent.appendChild(child)
const remove = (parent, child) => parent.removeChild(child)

// pretend we are fetching footer links from an endpoint (so if the links change, someone just has to edit the json)
const url = "https://raw.githubusercontent.com/esteladiaz/plaid/master/footerData.json"

// animate images in on scroll -- would love to add more animations with more time
const animateHTML = () => {
  let image
  let windowHeight
  const init = () => {
    image = document.querySelectorAll('.fade-in-hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < image.length; i++) {
      var positionFromTop = image[i].getBoundingClientRect().top;
      var positionFromBottom = image[i].getBoundingClientRect().bottom;
      if ((positionFromTop - windowHeight <= 0) && positionFromBottom !== 0) {
        image[i].className = image[i].className.replace(
          'fade-in-hidden',
          'fade-in-show'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();


// Set up footer
let footer = document.querySelector("#footer-links")
fetch(url)
  .then(res => {
    return res.json()
  })
  .then(res => {
    let categories = Object.keys(res)
    let categoryContainer
    
    // create container per category
    categories.map(category => {
      categoryContainer = createNode('div')
      categoryContainer.classList.add("category")
      let categoryHeader = createNode('h4')
      categoryHeader.classList.add('category-heaader')
      categoryHeader.innerHTML = category
      append(categoryContainer, categoryHeader)
      append(footer, categoryContainer)
      
      
      if (categoryHeader.innerHTML === category) {
        res[category].map(item => {
          let link = createNode('a')
          
          link.innerHTML = item.name
          link.href = item.link

          append(categoryContainer, link)
        })
      }
      
    })
  })