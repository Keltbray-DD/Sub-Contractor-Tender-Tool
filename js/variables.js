const Project_Portal_Title = "Keltbray SC Tender Portal"

let tendersdataArray
let gridContainer_TenderList
let searchInput_TenderList

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('PP_title')
    const welcome = document.getElementById('PP_Welcome')
    title.textContent = Project_Portal_Title;
    welcome.textContent = "Welcome to "+Project_Portal_Title
    gridContainer_TenderList = document.getElementById('TenderListGrid')
    searchInput_TenderList = document.getElementById('searchInput_TenderList')

    window.addEventListener('scroll', function() {
        const banner = document.getElementById('banner');
        const header = document.getElementById('main-header');
        const headerTitle = document.getElementById('title-header');
        const headerTitleClass = header.querySelector('.header-title');
        // Get the top position of the banner
        const bannerTop = banner.getBoundingClientRect().top;

        // If the banner is out of view (scrolled out of the viewport)
        if (bannerTop <= 0) {
        // Display the banner text in the header
        headerTitle.textContent = banner.querySelector('h2').textContent;
        headerTitleClass.classList.add('fade-in');
        } else {
        // Reset the header text when the banner is in view
        headerTitle.textContent = "";
        headerTitleClass.classList.remove('fade-in');
        }
  });


});

//Weather Module
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}