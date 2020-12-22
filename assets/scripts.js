/**Change header to sticky*/
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    // Get the header
    const announcementElement = document.querySelector("#shopify-section-announcement");
    const headerElement = document.querySelector("#shopify-section-header");
    const mainContentElement = document.querySelector("#main-content");
    console.log(mainContentElement);

    // Get the offset position of the header
    let sticky = headerElement.offsetTop;

    // Select the node that will be observed for mutations
    const offCanvasViewport = document.querySelector('#off-canvas--viewport');

    // When the user scrolls the page with both sidebars closed, execute stickyheader
    window.onscroll = function() {stickyheader(offCanvasViewport.getAttribute('data-off-canvas--state'))};

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyheader(state) {
        // Get heights
        //let announcementHeight = window.getComputedStyle(announcementElement, null).getPropertyValue("height");
        let headerHeight = window.getComputedStyle(headerElement, null).getPropertyValue("height");
        if (state === "closed"){

            if (window.pageYOffset > sticky) {
                //announcementElement.classList.add("section--header-sticky");
                headerElement.classList.add("section--header-sticky");

                //headerElement.style.top = announcementHeight;
                mainContentElement.style.paddingTop = headerHeight;

            } else {
                announcementElement.classList.remove("section--header-sticky");
                headerElement.classList.remove("section--header-sticky");
                mainContentElement.style.paddingTop = 0;
            }
        }
    }
});
