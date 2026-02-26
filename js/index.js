// 최상단 스크롤 버튼
document.querySelector('#top_btn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// header 메뉴 클릭 스크롤 애니메이션
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelector('a[href="#about_me"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('a[href="#skills"]').addEventListener('click', function(e) {
  e.preventDefault();
  const skills = document.querySelector('#skills');
  const skillsrect = skills.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const offsetTop = skillsrect.top + scrollTop - headerHeight;
  
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
});

document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
  e.preventDefault();
  const projects = document.querySelector('#projects');
  const projectsRect = projects.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const offsetTop = projectsRect.top + scrollTop - (headerHeight + 100);
  
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
});


// 스크롤 시 메뉴 active
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sectionAbout = document.querySelector('#about_me');
  const sectionSkills = document.querySelector('#skills');
  const sectionProjects = document.querySelector('#projects');
  const sectionAboutTop = sectionAbout.offsetTop;
  const sectionSkillsTop = sectionSkills.offsetTop;
  const sectionProjectsTop = sectionProjects.offsetTop;

  if (scrollPosition <= sectionAboutTop) {
    $('nav ul li').eq(0).addClass('active');
    $('nav ul li').eq(0).siblings().removeClass('active');
  } else if (scrollPosition <= sectionSkillsTop) {
    $('nav ul li').eq(1).addClass('active');
    $('nav ul li').eq(1).siblings().removeClass('active');
  } else if (scrollPosition <= sectionProjectsTop) {
    $('nav ul li').eq(2).addClass('active');
    $('nav ul li').eq(2).siblings().removeClass('active');
  }
});


// about me 배경 애니메이션
const content = document.querySelector(".marquee-text");
const contentText = content.innerText;
const textCopy = contentText.repeat(10);

content.innerText = textCopy;


// skills swiper 슬라이드
const swiper = new Swiper(".swiper_sl", {
  loop: true,
  speed: 300,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    840: {
      slidesPerView: 3.2,
      spaceBetween: 30
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});
