let currentPage = 0;

const pages = document.querySelectorAll(".page");

const music = document.getElementById("music");

let musicPlaying = false;


/* =========================
   PAGE
========================= */

function showPage(number) {

    pages.forEach((page, index) => {

        page.classList.toggle(
            "active",
            index === number
        );

    });

}


/* =========================
   NEXT
========================= */

function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

        startMusic();

    }

}


/* =========================
   PREVIOUS
========================= */

function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowRight") {
            nextPage();
        }

        if (event.key === "ArrowLeft") {
            previousPage();
        }

    }
);


/* =========================
   MUSIC
========================= */

function startMusic() {

    if (!musicPlaying) {

        music.volume = 0;

        music.play()
            .then(() => {

                musicPlaying = true;

                fadeMusic();

            })
            .catch(() => {

                console.log(
                    "Browser menunggu interaksi pengguna."
                );

            });

    }

}


function fadeMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.015;

        music.volume = volume;

        if (volume >= 0.3) {

            clearInterval(fade);

        }

    }, 100);

}


function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


/* =========================
   SCRAPBOOK
========================= */

function openBook() {

    const cover =
        document.querySelector(".book-cover");

    const book =
        document.getElementById("realBook");

    cover.classList.add("closed");

    setTimeout(() => {

        book.classList.add("open");

    }, 400);

}


/* =========================
   START
========================= */

showPage(0);