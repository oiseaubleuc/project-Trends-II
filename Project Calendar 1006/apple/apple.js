// JavaScript for Apple Calendar Tab functionality
document.addEventListener('DOMContentLoaded', function () {
    // Code for handling tab buttons and content
    const dayTab = document.getElementById('apple-day-tab');
    const monthTab = document.getElementById('apple-month-tab');
    const yearTab = document.getElementById('apple-year-tab');

    const dayContent = document.getElementById('apple-day-content');
    const monthContent = document.getElementById('apple-month-content');
    const yearContent = document.getElementById('apple-year-content');

    dayTab.addEventListener('click', function () {
        activateTab(dayTab, dayContent);
    });

    monthTab.addEventListener('click', function () {
        activateTab(monthTab, monthContent);
    });

    yearTab.addEventListener('click', function () {
        activateTab(yearTab, yearContent);
    });

    function activateTab(selectedTab, selectedContent) {
        // Deactivate all tabs and hide content
        const tabs = document.querySelectorAll('.apple-tab-buttons button');
        const tabContents = document.querySelectorAll('.apple-tab-pane');

        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });

        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Activate selected tab and show content
        selectedTab.classList.add('active-tab');
        selectedContent.classList.add('active');
    }
});
