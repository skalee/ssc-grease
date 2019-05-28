// ==UserScript==
// @name          Stubborn
// @description   In case of DB error, refresh page.
// @description:pl Automatycznie odświeża popsute strony.
// @version       1
// @namespace     https://github.com/skalee/ssc-grease
// @author        me
// @license       Unlicense
// @homepageURL   https://github.com/skalee/ssc-grease
// @supportURL    https://www.skyscrapercity.com/showthread.php?t=2017475
// @grant         none
// @run-at        document-end
// @include       https://www.skyscrapercity.com/showthread.php?*
// @include       https://www.skyscrapercity.com/showpost.php?*
// @include       https://www.skyscrapercity.com/usercp.php
// ==/UserScript==

(function() {
  let refreshDelay = 3000; // miliseconds
  let pageTitle = document.querySelector("title").innerText.trim();
  if (pageTitle !== "Database Error") return;
  setTimeout("document.location.reload()", refreshDelay);
})();
