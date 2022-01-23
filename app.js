const list = document.querySelectorAll('.shuffle-list');

list.forEach((item) => item.addEventListener('click', (e) => {
  // console.log(e.target);
  removeClass(list);
  e.target.classList.add('active');
}));

// Function to remove all class from the shuffle list.

const removeClass = (group) => {
  group.forEach((item) => item.classList.remove('active'));
};

// show or hide btn for scroll.
window.onscroll = function() {scrollFunction()};

const btn = document.getElementById('button');

// function to show or disappear the back to top bottom.
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// back to top function

btn.addEventListener('click', topFunction);

function topFunction() {
    // Using shortcut by using scrollTo.
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
}


// Mobile menu control

const openMenu = document.getElementById('open-menu');
// const closeMenu = document.getElementById('close-menu');
const navList = document.getElementById('navList');

openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('pop-animation');
  navList.classList.toggle('show-navList');
  if (navList.classList.contains('show-navList')) {
    navList.style.display="flex";
  }else {
    navList.style.display="none";
  }
});

// resize window listener to fix display fix when transfer from and to small size.

window.addEventListener('resize', function(event){
    if(window.innerWidth > 767) {
      navList.classList.remove('show-navList');
      navList.style.display= "flex";
    }
    else {
      navList.style.display= "none";
      openMenu.classList.remove('hide-menuBar');
    }
});


// shuffle list filter the list to show special or related item for the list.

const shuffleList = document.querySelectorAll('.shuffle-list');
const boxes = document.querySelectorAll('.image-box');

shuffleList.forEach((item) => {
  item.addEventListener('click', () => {
    switch (item.innerHTML) {
      case 'App':
        checkClass('app');
        break;

      case 'Photo':
        checkClass('photo');
        break;

      case 'Web':
        checkClass('web');
        break;

      case 'Print':
        checkClass('print');
        break;
    
      default:
        // console.log("Select all of them");
        boxes.forEach((box) => {
          box.classList.remove('box-animation');
          setTimeout(() => {
            box.classList.add('box-animation');
            box.style.display='block';
          }, 300)
        });
        break;
    }
  });
});

const checkClass = (testClass) => {
  boxes.forEach((box) => {
          if (box.classList.contains(testClass)) {
            box.style.display='block';
            box.classList.add('box-animation');
          } else {
            box.style.display='none';
          }
        });
}


// Show search page

const searchIcon = document.querySelector('.searchIcon');
const searchPage = document.querySelector('.search-page');

searchIcon.addEventListener('click', () => {
  if (searchPage.style.display === 'none') {
    searchPage.classList.remove('searchRemove');
    searchPage.style.display='flex';
  }
  else {
    searchPage.classList.remove('searchRemove');
    searchPage.classList.add('searchRemove');
    setTimeout(() => {
      searchPage.style.display='none';
    }, 300)
  }
});



