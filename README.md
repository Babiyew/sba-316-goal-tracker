# SBA 316: The Document Object Model (DOM) — Goal Tracker  

## Project Description  
This is a **single-page Goal Tracker web application** created for **SBA 316 (The Document Object Model)**.  

The app allows a user to:  
- Add personal goals  
- Mark goals as completed  
- Undo completed goals  
- Clear all goals  
- Receive validation feedback  
- See today’s date displayed dynamically  

The project demonstrates practical use of **DOM manipulation, event-driven programming, form validation, and basic Browser Object Model (BOM) methods**. It was developed locally, version-controlled with Git, and pushed to GitHub as required by the assignment.

---

## Folder Structure  

sba-316-goal-tracker/
│── index.html # Main webpage
│── style.css # Styling for the app
│── script.js # JavaScript logic (DOM + BOM)
│── README.md # Project documentation


---

## How the App Works (real behavior)

### Adding a goal  
1. The user types a goal in the input box (e.g., “Practice JavaScript”).  
2. When **Add Goal** is clicked:  
   - The page does **not refresh** (JavaScript prevents default behavior).  
   - The input is validated using **HTML + JavaScript**.  
   - A new goal item is created from a template and added to the list.  
   - The message “No goals yet” disappears automatically.

### Completing and undoing a goal  
- Clicking **Done**:  
  - The goal gets a line-through style.  
  - The border changes to show completion.  
  - The button text changes from **Done → Undo**.  

- Clicking **Undo**:  
  - The line-through is removed.  
  - The button text returns to **Done**.

### Clearing all goals  
- Clicking **Clear All** removes every goal from the list.  
- The button is temporarily disabled for 1 second.  
- The “No goals yet” message reappears.

### Date display (BOM feature)  
- The current date appears at the top of the page using `new Date()`.

---

## SBA 316 Requirements Covered (specific to this project)

| Requirement | How it is implemented |
|------------|------------------------|
| `getElementById` | Used for form, input, buttons, and date display |
| `querySelector` | Used for goal list and empty state |
| Parent–child navigation | `parentNode` and `firstElementChild` used when toggling Done/Undo |
| Iterate over elements | `querySelectorAll(...).forEach(...)` on goal items |
| Create elements | Goals created using a `<template>` |
| `appendChild` | Each new goal is appended to the list |
| Templating with `cloneNode` | Every goal is cloned from a template |
| Modify text content | Button text switches between “Done” and “Undo” |
| Modify styles/classes | `.completed` class toggles on click |
| Modify attributes | Input placeholder and Clear button `disabled` change |
| Two event listeners | `submit` on form + `click` on goal list |
| Two BOM methods | `new Date()`, `alert()`, `setTimeout()` |
| HTML validation | `required`, `minlength`, `maxlength` on input |
| JavaScript validation | Custom `validateGoal()` function |

---

## How to Run the App  
1. Download or clone this repository.  
2. Open the project folder.  
3. Double-click **index.html** to launch the app in your browser.

---

## Technologies Used  
- HTML  
- CSS  
- Vanilla JavaScript (plain JavaScript — no frameworks)

---

## (Optional) What I would improve with more time  
- Save goals using `localStorage` so they persist after refresh.  
- Allow editing of existing goals.  
- Add goal priorities (High, Medium, Low).

## Author  

Babiyew 
Per Scholas — SBA 316  
