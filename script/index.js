try {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
} catch (error) {}

/**********************/
/**** accordion ***/
/**********************/
try {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.height === panel.scrollHeight + "px") {
        panel.style.height = "0";
      } else {
        panel.style.height = panel.scrollHeight + "px";
        for (let j = 0; j < acc.length; j++) {
          if (this.classList != acc[j].classList) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.height = "0";
          }
        }
      }
    });
  }
} catch (error) {}

try {
  function initSlider(idSuffix) {
    const slider = document.getElementById("slider" + idSuffix);
    const before = document.getElementById("before" + idSuffix);
    const beforeImage = before.querySelector("img");
    const resizer = document.getElementById("resizer" + idSuffix);
    let active = false;

    function resize() {
      let width = slider.offsetWidth;
      beforeImage.style.width = width + "px";
    }

    window.addEventListener("resize", resize);
    document.addEventListener("DOMContentLoaded", resize);

    // Mouse Events
    resizer.addEventListener("mousedown", function () {
      active = true;
      resizer.classList.add("resize");
    });

    document.addEventListener("mouseup", function () {
      active = false;
      resizer.classList.remove("resize");
    });

    document.addEventListener("mousemove", function (e) {
      if (!active) return;
      let x = e.pageX - slider.getBoundingClientRect().left;
      slideIt(x);
    });

    // Touch Events
    resizer.addEventListener("touchstart", function () {
      active = true;
      resizer.classList.add("resize");
    });

    document.addEventListener("touchend", function () {
      active = false;
      resizer.classList.remove("resize");
    });

    document.addEventListener("touchmove", function (e) {
      if (!active) return;
      let x = e.touches[0].pageX - slider.getBoundingClientRect().left;
      slideIt(x);
    });

    function slideIt(x) {
      let transform = Math.max(0, Math.min(x, slider.offsetWidth));
      before.style.width = transform + "px";
      resizer.style.left = transform + "px";
    }
  }

  // Initialize both sliders
  initSlider("1");
  initSlider("2");
} catch (error) {}
