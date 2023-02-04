var typed = new Typed('#span', {
    strings: ["Front-End", "Back-End", "Full-Stack"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
const skillsBtn = document.getElementById("skills");
const aboutDiv = document.getElementById("about-div");
const aboutMeBtn = document.getElementById("aboutM");
const whatCanDoBtn = document.getElementById("what-can-do");
skillsBtn.addEventListener("click", () => {
    if (aboutDiv.innerHTML == "") {
        aboutDiv.innerHTML = `
        <div class="row align-items-center">
        <div class="col-md-6">
        <div class="about-info my-5">
        <h2 class="w-100"><span>Front-End</span></h2>
        <h5>HTML</h5>
        <h5>Css</h5>
        <h5>Javascript</h5>
        <h5>Jquery</p>
        <h5>Bootstrap 4</h5>
        <h5>Reactjs</h5>
        </div>
        </div>
        <div class="col-md-6">
        <h2><span>Back-End</span></h2>
        <h5>Php</h5>
        <h5>My sql</h5>
        <h5>Laravel</h5>
        </div>
        </div>
        </div>
        `;
    } else {
        aboutDiv.innerHTML = "";
    }
});
aboutMeBtn.addEventListener("click", () => {
    if (aboutDiv.innerHTML == "") {
        aboutDiv.innerHTML = `
        <div class="about-info my-5">
        <p class='text-center py-2 about-p'>Hi I'm <span>Abdelfattah Tarek</span> jonior <span>Front end Developer</span>.a year ago i tried to learn programming because when i was little i was love any thing about technology. that's why I thought about learning programming but i don't knew any thing about it. in a same time my dad was need a website so i learnt <span>front-end</span> to make a website to my dad. after 1 month i learnt <span>back-end</span> so i'm a <span>full-stack developer </span> . The good thing is that I love programming</p>
        </div>
        `;
    }
    else {
        aboutDiv.innerHTML = "";
    }
});
whatCanDoBtn.addEventListener("click", () => {
    if (aboutDiv.innerHTML == "") {
        aboutDiv.innerHTML = `
         <div class="about-info my-5">
         <p class="text-center py-2 about-p">i can do any thing about front-end or back-end but i prefer front-end development</p>
         </div>
        `;
    }
    else {
        aboutDiv.innerHTML = "";
    }
});