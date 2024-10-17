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

  $(".lang-btn").click(function (event) {
    // Get event target class list of contain with `en` and set the language variable
    let language = "ja";
    if (event.target.classList.contains("en")) {
      language = "en";
    } else if (event.target.classList.contains("my")) {
      language = "my";
    } else {
      language = "ja";
    }
    // Get all keys (key)
    const keys = Object.keys(languagesInfo.languages);

    // Append to the english language `same CSS class name` with all same keys
    keys.forEach((key) => {
      $(`.${key}`).html(`${languagesInfo.languages[key][language]}`);
    });
  });
});
