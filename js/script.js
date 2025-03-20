// Prize flash animation and FAQ initialization
let prizeFlashInterval = null;
let faqInitialized = false;

const sections = [
  { title: "Schedule", content: `<h6>Friday March 28 (Workshop Night)</h6>
                <p><span>6:00PM</span> Workshop 1</p>
                <p><span>7:00PM</span> Workshop 2</p>
                <p>Workshops are hosted at the John Crerar Library. Please note that there are no sleeping accommodations for Friday night.</p>
                <h6>Saturday March 29 (Day 1)</h6>
                <p><span>9:00AM</span> Doors open, check-in, team formation</p>
                <p><span>10:00AM</span> Opening ceremony</p>
                <p><span>10:30AM</span> Hacking begins</p>
                <p><span>11:00AM</span> Sponsor workshops</p>
                <p><span>12:00PM</span> Lunch</p>
                <p><span>3:00PM</span> Tetris Tournament</p>
                <p><span>6:00PM</span> Dinner</p>
                <p><span>9:00PM</span> Mystery Event</p>
                <h6>Sunday March 30 (Day 2)</h6>
                <p><span>12:00AM</span> Midnight Snack</p>
                <p><span>9:00AM</span> Breakfast</p>
                <p><span>10:00AM</span> Projects due, project fair</p>
                <p><span>11:00AM</span> Judge deliberation</p>
                <p><span>11:45AM</span> Awards, closing ceremony</p>
                <p><span>12:30PM</span> Event ends!</p>` },
  { title: "About", content: `<p>Spend 24 hours working on an exciting project, leveling up your skills, and connecting with fellow hackers in this one-of-a-kind experience! In our 2025 edition of Hacks, we’re diving into an electrifying video game-themed adventure where every challenge is a new quest  and only the most creative minds will unlock victory.</p>
                <p>With an overnight component that makes for a truly immersive experience, get ready to power up, strategize, and play your way to success! Will you conquer the final boss, or will the game beat you first?</p>
                <p>Although Hacks will have prizes, we place more emphasis on learning and collaboration than some kind of competitive aspect. So even if you've never coded before, please do sign up! A successful Hacks team needs people with different skill sets, and if you would like to learn how to code, we'll have workshops to help you do so.</p>
                <h6>How does it work?</h6>
                <p>There are three steps:</p>
                <ul>
                    <li>Arrive at the hackathon and make teams.</li>
                    <li>Work on your project for ~24 hours. Take a break with some activities.</li>
                    <li>Present your project to industry judges.</li>
                </ul>` },
  { title: "FAQ", content: `<ul>
                    <li><span class='faq'>What's new this year?</span> For Hacks 2025, we are pleased to announce that we will be hosting several sponsor challenges which have top prizes of up to $500! More information about these challenges will be given during the opening ceremony. In addition, we will be providing a hardware lab for the first time, courtesy of MLH!</li>
                    <li><span class='faq'>Is Hacks only for undergraduate students?</span> No, high school or university students are welcome to come join us! If you aren't a student, please contact us to inquire about attending.</li>
                    <li><span class='faq'>Do I have to be on a team?</span> No, although we recommend it.</li>
                    <li><span class='faq'>How big can teams be?</span> Up to five people.</li>
                    <li><span class='faq'>Do I have to pay for anything?</span> Nope!</li>
                    <li><span class='faq'>Did you say prizes?</span> Affirmative, we will be handing out various prizes to the top submissions.</li>
                    <li><span class='faq'>What should I bring?</span> The basic thing is a laptop, and if you are planning on staying the night we recommend some additional items: a sleeping bag, change of clothes, and a toothbrush/toothpaste.</li>
                    <li><span class='faq'>So I don't have to stay the night?</span> You do not, although we may have limitations on when people can enter and exit the venue during the night.</li>
                </ul>` },
  { title: "Sponsors", content: `<div class='mobile-sponsors'><p>
              <a href="https://www.freestyle.sh/" target="_blank"
                >freestyle.sh</a
              >
            </p>
            <p>
              <a href="https://prhi.org/" target="_blank"
                ><img src="img/pstc.png" style="height: 4em"
              /></a>
            </p>
            <p>
              <a href="https://www.fmjsurvey.com/" target="_blank"
                ><img src="img/studio89.png" style="height: 5em"
              /></a>
            </p></div>` },
  { title: "MLH Code of Conduct", content: "Read the official code of conduct." },
  { title: "Contact", content: `<p class='contact'><a style="background-color: rgb(25, 134, 67)" href="mailto:uncommonhacks@gmail.com" target="_blank" class="contact-button">Email</a></p>
                <p class='contact'><a style="background-color: rgb(69, 92, 237)" href="https://www.facebook.com/uncommonhacks" target="_blank" class="contact-button">Facebook</a></p>
                <p class='contact'><a style="background-color: rgb(231, 61, 129)" href="https://www.instagram.com/uncommonhacks/" target="_blank" class="contact-button">Instagram</a></p>
                <p class='contact'><a style="background-color: rgb(18, 43, 208)" href="https://www.linkedin.com/company/uncommonhacks/" target="_blank" class="contact-button">LinkedIn</a></p>` },
];

function initializePrizeFlash() {
  if (window.innerWidth >= 1000) {
    if (!prizeFlashInterval) {
      prizeFlashInterval = setInterval(() => {
        $("#prize").toggleClass("flash");
      }, 500);
    }
  } else if (prizeFlashInterval) {
    clearInterval(prizeFlashInterval);
    prizeFlashInterval = null;
  }
}

function initializeFAQ() {
  const container = document.getElementsByClassName("items")[0];
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  if (window.innerWidth < 1000) {
    sections.forEach((section) => {
      const item = document.createElement("div");
      item.classList.add("item");

      const button = document.createElement("button");
      button.textContent = section.title;
      button.classList.add("accordion-button");

      if (section.title != "MLH Code of Conduct") {
        // Create dropdown icon (Initially a down arrow)
        const dropdownIcon = document.createElement("span");
        dropdownIcon.innerHTML = `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5H7z"></path>
        </svg>`;
        dropdownIcon.classList.add("dropdown-icon");
        dropdownIcon.style.fontSize = "20px";

        button.appendChild(dropdownIcon);

        // Create content container (hidden by default)
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("item-content-container");
        $(contentContainer).html(section.content);
        contentContainer.style.display = "none";

        // Toggle content visibility & icon when clicking the button
        button.addEventListener("click", function () {
          const isVisible = contentContainer.style.display === "block";
          contentContainer.style.display = isVisible ? "none" : "block";

          // Toggle between down and up arrow
          dropdownIcon.innerHTML = isVisible
            ? `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>`
            : `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14l5-5 5 5H7z"></path>
              </svg>`;
        });

        item.appendChild(button);
        item.appendChild(contentContainer);
        container.appendChild(item);
      } else {
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("item-content-container");
        $(contentContainer).html(section.content);
        contentContainer.style.display = "none";
        
        button.addEventListener("click", function () {
          window.open("https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md", "_blank");
        });
        item.appendChild(button);
        item.appendChild(contentContainer);
        container.appendChild(item);
      }
    });
    faqInitialized = true;
  } else {
    faqInitialized = false;
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initializePrizeFlash();
  initializeFAQ();
  $("[data-action]").click(function() {
    if ($("#" + $(this).attr("data-action")).hasClass("shown")) {
      $("#" + $(this).attr("data-action")).removeClass("shown");
      $("#tetris").addClass("shown");
      gameInterval = setInterval(movePieceDown, 300);
      resetGame();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      $(".content.shown").removeClass("shown");
      clearInterval(gameInterval);
      $("#" + $(this).attr("data-action")).addClass("shown");
    }
  });
});

// Check window resize. Display FAQ if we are in mobile
let resizeTimeout;
window.addEventListener("resize", function () {
  // Debounce resize events
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    initializePrizeFlash();
    initializeFAQ();
  }, 250);
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 1000) {
    spawnPiece();
    gameInterval = setInterval(movePieceDown, 300);
  }
});

const canvas = document.getElementById("tetrisCanvas");
    const ctx = canvas.getContext("2d");

    // Adjust canvas size to fit the modal
    const tetrisContainer = document.getElementById("tetris");
    canvas.width = tetrisContainer.clientWidth - 40;
    canvas.height = tetrisContainer.clientHeight - 20;

    const blockSize = 25;
    const columns = Math.floor(canvas.width / blockSize);
    const rows = Math.floor(canvas.height / blockSize);
    let board = Array.from({ length: rows }, () => Array(columns).fill(0));
    let currentPiece = null;
    let pieceLockDelay = false;

    const tetrominoes = [
      [[1, 1, 1, 1]], // I
      [
        [1, 1],
        [1, 1],
      ], // O
      [
        [0, 1, 0],
        [1, 1, 1],
      ], // T
      [
        [1, 1, 0],
        [0, 1, 1],
      ], // Z
      [
        [0, 1, 1],
        [1, 1, 0],
      ], // S
      [
        [1, 0, 0],
        [1, 1, 1],
      ], // L
      [
        [0, 0, 1],
        [1, 1, 1],
      ], // J
    ];

function drawBlock(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.fillStyle = "white";
  ctx.fillRect(x * blockSize, y * blockSize, 3, 6);
  ctx.fillRect(x * blockSize, y * blockSize, 6, 3);
}

function spawnPiece() {
  setTimeout(() => {
    const shape =
      tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const startX = Math.floor(
      Math.random() * (columns - shape[0].length + 1)
    ); // Allow rightmost positions
    currentPiece = { shape, x: startX, y: -shape.length, color }; // Start at the very top
    pieceLockDelay = false;

    if (collision()) {
      resetGame(); // Restart if a piece spawns in a blocked space
    }
  }, 200); // 200ms delay before spawning new piece
}

function movePieceDown() {
  try {
    if (!currentPiece || pieceLockDelay) return;
    currentPiece.y++;
    if (collision()) {
      currentPiece.y--;
      pieceLockDelay = true;
      setTimeout(() => {
        placePiece();
        spawnPiece();
      }, 200); // Short delay before locking and spawning new piece
    }
    render();
  } catch (e) {
  };
}

function placePiece() {
  currentPiece.shape.forEach((row, dy) => {
    row.forEach((cell, dx) => {
      if (cell) {
        board[currentPiece.y + dy][currentPiece.x + dx] =
          currentPiece.color;
      }
    });
  });
}

function collision() {
  return currentPiece.shape.some((row, dy) => {
    return row.some((cell, dx) => {
      if (cell) {
        let newY = currentPiece.y + dy;
        let newX = currentPiece.x + dx;
        if (newY >= rows || newX >= columns || board[newY][newX]) {
          return true;
        }
      }
      return false;
    });
  });
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.forEach((row, y) =>
    row.forEach((color, x) => {
      if (color) drawBlock(x, y, color);
    })
  );
  if (currentPiece) {
    currentPiece.shape.forEach((row, dy) => {
      row.forEach((cell, dx) => {
        if (cell)
          drawBlock(
            currentPiece.x + dx,
            currentPiece.y + dy,
            currentPiece.color
          );
      });
    });
  }
}

let gameInterval;

function resetGame() {
  board = Array.from({ length: rows }, () => Array(columns).fill(0));
  spawnPiece();
}

$("#logo").on("mouseover", () => {
  $("#logo").attr("src", "img/logo.svg");
});
$("#logo").on("mouseout", () => {
  $("#logo").attr("src", "img/logo25notext.svg");
});