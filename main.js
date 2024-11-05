import { languagesInfo } from "./scripts/language-boilerplate.js";
$(function () {
  AOS.init();

  $(".nav-link").onePageNav({
    wrapper: "#one-page-nav",
    navStart: window.innerHeight / 2.5,
  });
  $(".nav img").click(function () {
    $(".nav").toggleClass("sp-nav");
  });
  $(".nav-link").click(function () {
    $(".nav").removeClass("sp-nav");
  });
  $(".theme-color").click(function () {
    $("body").toggleClass("is-light");
    if ($(".dark-color").html().includes('LIGHT')) {
      $(".dark-color").html(`☾ DARK`)
    } else {
      $(".dark-color").html(`☼ LIGHT`)
    }
  });

  $(".lang-btn").click(function (event) {
    // Get event target class list of contain with `en` and set the language variable
    let language = "ja";
    if (event.target.classList.contains("en")) {
      language = "en";
      document.querySelector("body").classList.add("default-font");
      document.querySelector("body").classList.remove("my-font");
    } else if (event.target.classList.contains("my")) {
      language = "my";
      document.querySelector("body").classList.add("my-font");
      document.querySelector("body").classList.remove("default-font");
    } else {
      language = "ja";
      document.querySelector("body").classList.add("default-font");
      document.querySelector("body").classList.remove("my-font");

    }
    // Get all keys (key)
    const keys = Object.keys(languagesInfo.languages);

    // Append to the english language `same CSS class name` with all same keys
    keys.forEach((key) => {
      if (key.includes('subHeading') && language === 'en') {
        $(`.${key}`).html(`${languagesInfo.languages[key]['ja']}`);
      } else {
        $(`.${key}`).html(`${languagesInfo.languages[key][language]}`);
      }
     
    });
  });
});
