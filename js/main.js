```javascript
/* ==================================================
   YAN.EXE
   Cute Digital Wave
================================================== */


/* ==================================================
   CARD TILT
================================================== */

const cards =
    document.querySelectorAll(
        ".work-card"
    );


cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - 0.5) * -5;


            const rotateY =
                ((x / rect.width) - 0.5) * 5;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;


        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0)";

        }
    );

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".work-card, .about-window, .contact"
    );


revealElements.forEach(
    (element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    }
);


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        observer.observe(element);

    }
);



/* ==================================================
   RANDOM FLOATING STARS
================================================== */

const symbols = [
    "✦",
    "✧",
    "♡",
    "⋆",
    "⊹"
];


function createStar() {

    const star =
        document.createElement(
            "div"
        );


    star.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    star.style.position =
        "fixed";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.fontSize =
        (8 + Math.random() * 14) +
        "px";


    star.style.color =
        "#b38aff";


    star.style.opacity =
        "0.45";


    star.style.pointerEvents =
        "none";


    star.style.zIndex =
        "-1";


    star.style.transition =
        "transform 4s ease-in-out";


    document.body.appendChild(
        star
    );


    setTimeout(() => {

        star.style.transform =
            `translate(
                ${(Math.random() - 0.5) * 80}px,
                ${(Math.random() - 0.5) * 80}px
            )`;

    }, 100);


}


for (
    let i = 0;
    i < 15;
    i++
) {

    createStar();

}



/* ==================================================
   EMAIL BUTTON
================================================== */

const emailButton =
    document.querySelector(
        ".email-button"
    );


if (emailButton) {

    emailButton.addEventListener(
        "mouseenter",
        () => {

            document.title =
                "♡ SEND YAN A MESSAGE ♡";

        }
    );


    emailButton.addEventListener(
        "mouseleave",
        () => {

            document.title =
                "YAN.EXE ✦ Digital Playground";

        }
    );

}



/* ==================================================
   SIMPLE PARALLAX
================================================== */

const character =
    document.querySelector(
        ".hero-character"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        if (!character) return;


        const x =
            (event.clientX /
                window.innerWidth -
                0.5) *
            12;


        const y =
            (event.clientY /
                window.innerHeight -
                0.5) *
            12;


        character.style.transform =
            `translate(
                ${x}px,
                ${y}px
            )`;

    }
);
```
