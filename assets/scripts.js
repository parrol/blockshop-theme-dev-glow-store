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

    // sets default description visibility
    function setDefaultVisibility(event, isVisible) {
        let default_option_description = event.currentTarget.closest('[name = id ]').children

        Array.prototype.forEach.call(default_option_description, function(child){
            if (child.getAttribute("data-value") === "default-option-description"){

                if (isVisible){
                    child.classList.add("reveal");
                    child.classList.remove("hidden");
                } else {
                    child.classList.add("hidden");
                    child.classList.remove("reveal");
                }
            }
        });
    }

    // shows the hovered option's description
    function showOptionDescription(event) {

        setDefaultVisibility(event, false);

        let aria_label = event.currentTarget.getAttribute("aria-label");
        let current_button = document.getElementById("option--" + aria_label);
        current_button.classList.add("reveal");
        current_button.classList.remove("hidden");
    }

    // hides option description and shows default description
    function hideOptionDescription(event) {

        setDefaultVisibility(event, true);

        let aria_label = event.currentTarget.getAttribute("aria-label");
        let current_button = document.getElementById("option--" + aria_label);
        current_button.classList.add("hidden");
        current_button.classList.remove("reveal");
    }

    // get class elements that'll be hovered
    let radios__buttons = document.getElementsByClassName('radios--swatch-button');
    // add event listeners for mouseover and mouseout to each radio button
    Array.prototype.forEach.call(radios__buttons, function(radio__button){
        radio__button.addEventListener("mouseover", showOptionDescription);
        radio__button.addEventListener("mouseout", hideOptionDescription);
    });

});
