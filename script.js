function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.add('hidden');
    });

    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.remove('hidden');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Set default active tab on jogadores page
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.tab-button')) {
        document.querySelector('.tab-button').click();
    }
});



