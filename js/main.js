/* ==================================================
   CUSTOM CURSOR
================================================== */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");


let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left =
        `${mouseX}px`;

    cursor.style.top =
        `${mouseY}px`;

});


function animateCursor() {

    followerX +=
        (mouseX - followerX) * 0.12;

    followerY +=
        (mouseY - followerY) * 0.12;


    follower.style.left =
        `${followerX}px`;

    follower.style.top =
        `${followerY}px`;


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



/* ==================================================
   CURSOR HOVER
================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, .project-image"
    );


interactiveElements.forEach((element) => {

    element.addEventListener(
        "mouseenter",
        () => {

            follower.style.width =
                "65px";

            follower.style.height =
                "65px";

            follower.style.background =
                "rgba(255,255,255,0.08)";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            follower.style.width =
                "36px";

            follower.style.height =
                "36px";

            follower.style.background =
                "transparent";

        }
    );

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".project, .about-content, .skills, .contact"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});



/* ==================================================
   PROJECT HOVER PARALLAX
================================================== */

const projects =
    document.querySelectorAll(
        ".project-image"
    );


projects.forEach((project) => {

    const visual =
        project.querySelector(
            ".project-visual"
        );


    project.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                project.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const moveX =
                (x / rect.width - 0.5) * 15;


            const moveY =
                (y / rect.height - 0.5) * 15;


            visual.style.transform =
                `scale(1.06)
                 translate(${moveX}px, ${moveY}px)`;

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            visual.style.transform =
                "scale(1)";

        }
    );

});



/* ==================================================
   SMOOTH ANCHOR LINKS
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    targetId === "#"
                ) {

                    event.preventDefault();

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    });
