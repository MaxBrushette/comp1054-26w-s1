const tabs = document.querySelectorAll('[role="tab"] a');
const panels = document.querySelectorAll('[role="tabpanel"]');

// function to switch tabs
function activeTab(tabLink) {
    document.querySelectorAll('[role="tab"]').forEach(tab=>tab.classList.remove("active"));
    //^v by default, the panel/tab will be inactive.
    panels.forEach(panel => panel.classList.remove("active"));
    //This adds the active class to the tab that's selected.
    tabLink.parentElement.classList.add("active");
    //this will fetch the href attribute ( that tells you what link the tab is going to ) and set it to the variable panelId.
    const panelId = tabLink.getAttribute("href");
    //This makes the panel active.
    document.querySelector(panelId).classList.add("active");
}
//This will listen for the click and then run the function.
tabs.forEach(link => {
    link.addEventListener("click", (event) => {
        activeTab(link);
    });
});
//This makes it so that when the website is first launched, the first tab is selected.
activeTab(tabs[0]);