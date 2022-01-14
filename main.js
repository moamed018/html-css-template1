var sections = document.querySelectorAll("section");

onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop;
        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
                scrollPosition <
                section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
            ) {
                var currentId = section.attributes.id.value;
                removeAllActiveClasses();
                addActiveClass(currentId);
                }
            });
        };
        var removeAllActiveClasses = function () {
            document.querySelectorAll("nav a").forEach((el) => {
            el.classList.remove("active");
            });
        };
        var addActiveClass = function (id) {
            var selector = `nav li a[href="#${id}"]`;
            document.querySelector(selector).classList.add("active");
        };
/********************************************* */

window.addEventListener("scroll", function(){
        var header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 120)
    })


/******************************************** */

let toggleBtn = document.querySelector("#toggleBtn");

let body = document.querySelector("body");

let darkMode = false;

toggleBtn.addEventListener('change', (event) => {
    darkMode = event.target.checked;
    if(darkMode) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
})