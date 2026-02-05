// SBA 316 - Goal Tracker (DOM + BOM)

// ---------- Cache elements (Requirement: getElementById + querySelector) ----------
const todayText = document.getElementById("todayText");
const goalForm = document.getElementById("goalForm");
const goalInput = document.getElementById("goalInput");
const errorText = document.getElementById("errorText");
const clearBtn = document.getElementById("clearBtn");

const goalList = document.querySelector("#goalList");
const emptyState = document.querySelector("#emptyState");

// ---------- BOM usage #1: Date ----------
todayText.textContent = `Today: ${new Date().toLocaleDateString()}`;

// ---------- Template (Requirement: cloneNode templating) ----------
const template = document.createElement("template");
template.innerHTML = `
  <li class="goalItem">
    <span class="goalText"></span>
    <button class="toggleBtn" type="button">Done</button>
  </li>
`;

// ---------- Helper ----------
function updateEmptyState() {
  emptyState.style.display = goalList.children.length === 0 ? "block" : "none";
}

// ---------- DOM event-based validation (Requirement) ----------
function validateGoal(value) {
  const trimmed = value.trim();

  if (trimmed.length === 0) return "Please type a goal before submitting.";
  if (trimmed.length < 3) return "Goal must be at least 3 characters.";
  if (trimmed.length > 80) return "Goal must be 80 characters or less.";

  return "";
}

// ---------- Event Listener #1 (Requirement): submit ----------
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

  // Requirement: createElement / templating / cloneNode
  const li = template.content.firstElementChild.cloneNode(true);

  // Requirement: modify text content (textContent)
  const textSpan = li.querySelector(".goalText");
  textSpan.textContent = goalInput.value.trim();

  // Requirement: appendChild (add to DOM)
  goalList.appendChild(li);

  // Requirement: modify attribute (placeholder) in response to interaction
  goalInput.value = "";
  goalInput.setAttribute("placeholder", "Add another goal...");

  updateEmptyState();
});

// ---------- Event Listener #2 (Requirement): click (event delegation) ----------
goalList.addEventListener("click", (event) => {
  const target = event.target;

  // Requirement: iterate over a collection (forEach)
  const allItems = goalList.querySelectorAll(".goalItem");
  allItems.forEach((item) => item.classList.remove("selected"));

  if (target.classList.contains("toggleBtn")) {
    // Requirement: parent-child navigation (parentNode, firstElementChild)
    const li = target.parentNode;
    const textSpan = li.firstElementChild;

    // Requirement: modify CSS class in response to interaction
    li.classList.toggle("completed");
    textSpan.classList.toggle("completedText");

    // Requirement: modify text in response to interaction
    target.textContent = li.classList.contains("completed") ? "Undo" : "Done";
  }
});

// ---------- Clear All button ----------
clearBtn.addEventListener("click", () => {
  // Remove all goals
  goalList.innerHTML = "";
  updateEmptyState();

  // Modify attribute in response to interaction
  clearBtn.setAttribute("disabled", "true");

  // BOM (optional extra): setTimeout
  setTimeout(() => clearBtn.removeAttribute("disabled"), 1000);
});

// Initial
updateEmptyState();
