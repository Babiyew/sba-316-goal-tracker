// SBA 316: The Document Object Model (DOM) — Goal Tracker
// Demonstrates DOM + BOM methods, event listeners, validation, and templating.

// ---------- Cache elements (getElementById + querySelector) ----------
const todayText = document.getElementById("todayText");
const goalForm = document.getElementById("goalForm");
const goalInput = document.getElementById("goalInput");
const errorText = document.getElementById("errorText");
const clearBtn = document.getElementById("clearBtn");

const goalList = document.querySelector("#goalList");
const emptyState = document.querySelector("#emptyState");

// ---------- BOM usage #1: Date ----------
todayText.textContent = `Today: ${new Date().toLocaleDateString()}`;

// ---------- Template + cloneNode (templating requirement) ----------
const template = document.createElement("template");
template.innerHTML = `
  <li class="goalItem">
    <span class="goalText"></span>
    <button class="toggleBtn" type="button">Done</button>
  </li>
`;

// ---------- Helper: show/hide empty message ----------
function updateEmptyState() {
  emptyState.style.display = goalList.children.length === 0 ? "block" : "none";
}

// ---------- JS validation (in addition to HTML required/minlength/maxlength) ----------
function validateGoal(value) {
  const trimmed = value.trim();
  if (trimmed.length === 0) return "Please type a goal before submitting.";
  if (trimmed.length < 3) return "Goal must be at least 3 characters.";
  if (trimmed.length > 80) return "Goal must be 80 characters or less.";
  return "";
}

// ---------- Event listener #1: submit ----------
goalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = validateGoal(goalInput.value);
  if (message) {
    errorText.textContent = message;

    // BOM usage #2: alert
    alert(message);
    return;
  }

  errorText.textContent = "";

  // Create a new goal item using template + cloneNode
  const li = template.content.firstElementChild.cloneNode(true);

  // Modify text content
  const textSpan = li.querySelector(".goalText");
  textSpan.textContent = goalInput.value.trim();

  // Append to the DOM
  goalList.appendChild(li);

  // Modify attribute based on interaction
  goalInput.value = "";
  goalInput.setAttribute("placeholder", "Add another goal...");

  updateEmptyState();
});

// ---------- Event listener #2: click (event delegation) ----------
goalList.addEventListener("click", (event) => {
  const target = event.target;

  // Iterate over collection (querySelectorAll + forEach)
  const allItems = goalList.querySelectorAll(".goalItem");
  allItems.forEach((item) => item.classList.remove("selected"));

  if (target.classList.contains("toggleBtn")) {
    // Parent-child navigation
    const li = target.parentNode;           // button -> parent <li>
    const textSpan = li.firstElementChild;  // <li> -> first child <span>

    // Modify classes / styles
    li.classList.toggle("completed");
    textSpan.classList.toggle("completedText");

    // Modify text content
    target.textContent = li.classList.contains("completed") ? "Undo" : "Done";
  }
});

// ---------- Clear All ----------
clearBtn.addEventListener("click", () => {
  goalList.innerHTML = "";
  updateEmptyState();

  // Modify attribute based on interaction
  clearBtn.setAttribute("disabled", "true");

  // BOM extra: setTimeout
  setTimeout(() => clearBtn.removeAttribute("disabled"), 1000);
});

// Initial state
updateEmptyState();
