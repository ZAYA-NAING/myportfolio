import { languagesInfo } from "./scripts/language-boilerplate.js";
let deferredPrompt;
$(function () {
  AOS.init(),
    $(".nav-link").onePageNav({
      wrapper: "#one-page-nav",
      navStart: window.innerHeight / 2.5,
    }),
    $(".nav img").click(function () {
      $(".nav").toggleClass("sp-nav");
    }),
    $(".nav-link").click(function () {
      $(".nav").removeClass("sp-nav");
    }),
    $(".theme-color").click(function () {
      $("body").toggleClass("is-light"),
        $(".color").html().includes("LIGHT")
          ? $(".color").html("☾ DARK")
          : $(".color").html("☼ LIGHT");
    }),
    $(".lang-btn").click(function (e) {
      let l = "ja";
      e.target.classList.contains("en")
        ? ((l = "en"),
          document.querySelector("body").classList.add("default-font"),
          document.querySelector("body").classList.remove("my-font"))
        : e.target.classList.contains("my")
        ? ((l = "my"),
          document.querySelector("body").classList.add("my-font"),
          document.querySelector("body").classList.remove("default-font"))
        : ((l = "ja"),
          document.querySelector("body").classList.add("default-font"),
          document.querySelector("body").classList.remove("my-font")),
        Object.keys(languagesInfo.languages).forEach((e) => {
          e.includes("subHeading") && "en" === l
            ? $(`.${e}`).html(`${languagesInfo.languages[e].ja}`)
            : $(`.${e}`).html(`${languagesInfo.languages[e][l]}`);
        });
    });
}),
  window.addEventListener("load", () => {
    "serviceWorker" in navigator &&
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then((e) => {})
        .catch((e) => {});
  });
const installApp = document.querySelector(".install-app"),
  hideInstallApp = document.querySelector(".hide-install-app"),
  installAppBtn = document.querySelector(".install-btn"),
  installAppCancelBtn = document.querySelector(".install-cancel-btn");
(hideInstallApp.style.display = "flex"),
  (installApp.style.display = "none"),
  installAppCancelBtn.addEventListener("click", (e) => {
    (hideInstallApp.style.display = "flex"),
      (installApp.style.display = "none");
  }),
  hideInstallApp.addEventListener("click", (e) => {
    (hideInstallApp.style.display = "none"),
      (installApp.style.display = "flex");
  }),
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(),
      (deferredPrompt = e),
      (hideInstallApp.style.display = "flex"),
      (installApp.style.display = "none"),
      installAppBtn.addEventListener("click", () => {
        deferredPrompt.prompt(),
          deferredPrompt.userChoice.then((e) => {
            "accepted" === e.outcome
              ? ((installApp.style.display = "none"),
                (hideInstallApp.style.display = "none"))
              : ((hideInstallApp.style.display = "none"),
                (installApp.style.display = "flex")),
              (deferredPrompt = null);
          });
      });
  });
