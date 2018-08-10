// ==UserScript==
// @name          Likes counter for SkyScraperCity
// @description   Initially developed by me. Public domain.
// @version       1
// @grant         none
// @include       https://www.skyscrapercity.com/showthread.php?*
// @include       https://www.skyscrapercity.com/showpost.php?*
// ==/UserScript==

(function() {
  let ready = async function() {
    let like_lists = document.querySelectorAll("div[id^='dbtech_thanks_block_'] .smallfont")

    for (list of like_lists) {
      let like_entries = list.querySelectorAll("a[href^='member.php']")
      let likes_count = like_entries.length
      let last_like = like_entries[likes_count - 1]

      if (likes_count > 0) {
        last_like.insertAdjacentHTML("afterend", ` (${likes_count} total)`)
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
