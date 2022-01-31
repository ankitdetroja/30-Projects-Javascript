const data = [
  {
    img: "Project-1/tb.png",
    header: "Color Fliper",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-1",
  },
  {
    img: "Project-2/tb.png",
    header: "Simple Counter",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-2",
  },
  {
    img: "Project-3/tb.png",
    header: "Reviews/Quotes",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-3",
  },
  {
    img: "Project-4/tb.png",
    header: "Navbar",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-4",
  },
  {
    img: "Project-5/tb.png",
    header: "Sidebar",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-5",
  },
  {
    img: "Project-6/tb.png",
    header: "Modal",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-6",
  },
  {
    img: "Project-7/tb.png",
    header: "Questions",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-7",
  },
  {
    img: "Project-8/tb.png",
    header: "Menu",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-8",
  },
  {
    img: "Project-9/tb.png",
    header: "Video",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-9",
  },
  {
    img: "Project-10/tb.png",
    header: "Scroll",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-10",
  },
  {
    img: "Project-11/tb.png",
    header: "Tabs",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-11",
  },
  {
    img: "Project-12/tb.png",
    header: "Countdown Timer",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-12",
  },
  {
    img: "Project-13/tb.png",
    header: "Lorem Ipsum",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-13",
  },
  {
    img: "Project-14/tb.png",
    header: "Grocery Bud",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-14",
  },
  {
    img: "Project-15/tb.png",
    header: "Slider",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-15",
  },
  {
    img: "Project-16/tb.png",
    header: "Random Jokes",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-16",
  },
  {
    img: "Project-17/tb.png",
    header: "Random User",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-17",
  },
  {
    img: "Project-18/tb.png",
    header: "Cocktails API",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-18",
  },
  {
    img: "Project-19/tb.png",
    header: "Recipe API",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-19",
  },
  {
    img: "Project-20/tb.png",
    header: "Rock Paper Scissor",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-20",
  },
  {
    img: "Project-21/tb.png",
    header: "Memory Game",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-21",
  },
  {
    img: "Project-23/tb.png",
    header: "Calculator",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-23",
  },
  {
    img: "Project-24/tb.png",
    header: "Racing Game",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-24",
  },
  {
    img: "Project-25/tb.png",
    header: "Click popper Game",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-25",
  },
  {
    img: "Project-26/tb.png",
    header: "Typing Test",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-26",
  },
  {
    img: "Project-27/tb.png",
    header: "Email Exctractor",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-27",
  },
  {
    img: "Project-28/tb.png",
    header: "Functionator",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-28",
  },
  {
    img: "Project-29/tb.png",
    header: "Palindrome Validator",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-29",
  },
  {
    img: "Project-30/tb.png",
    header: "Telephone number validator",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-30",
  },
  {
    img: "Project-31/tb.png",
    header: "Popup Message",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-31",
  },
  {
    img: "Project-32/tb.png",
    header: "Tip Calculator",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-32",
  },
  {
    img: "Project-33/tb.png",
    header: "Dice Game",
    git: "https://github.com/ankitdetroja/Vanilla-JavaScript-Projects/tree/master/Project-33",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".projectsContent");
  const projectItem = document.createElement("div");
  projectItem.classList.add("projectItem");

  for (let i = 0; i < data.length; i++) {
    projectItem.innerHTML = `
        <div class="projectItemInner">
        <a
          href="${data[i].git}"
          target="_blank"
        >
          <div class="imgBox">
            <img src="${data[i].img}" alt="" />
          </div>
          <div class="itemHeader">${data[i].header}</div>
        </a>
      </div>
        `;
    parent.appendChild(projectItem.cloneNode(true));
  }
});
