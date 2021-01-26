/**Change header to sticky*/
document.addEventListener("DOMContentLoaded", function (event) {
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
    window.onscroll = function () { stickyheader(offCanvasViewport.getAttribute('data-off-canvas--state')) };

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyheader(state) {
        // Get heights
        //let announcementHeight = window.getComputedStyle(announcementElement, null).getPropertyValue("height");
        let headerHeight = window.getComputedStyle(headerElement, null).getPropertyValue("height");
        if (state === "closed") {

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

    // set option description (ON HOVER)
    // sets default description visibility
    let isOptionSelected = false;
    let selected_variant = null;

    function setSelectedVisibility(isVisible) {
        if (isVisible) {
            console.log("add reveal to selected variant");
            console.log(selected_variant);
            selected_variant.classList.add("reveal");
            selected_variant.classList.remove("hidden");
        } else {
            console.log("add hidden to selected variant");
            selected_variant.classList.add("hidden");
            selected_variant.classList.remove("reveal");
        }
    }

    function hideAll(event) {
        let default_option_description = event.currentTarget.closest('[name = id ]').children

        Array.prototype.forEach.call(default_option_description, function (child) {
            if (child.getAttribute("data-js-class") !== ("Radios")){
                child.classList.add("hidden");
                child.classList.remove("reveal");

            }
        })
    }

    function setDefaultVisibility(event, isVisible) {
        let default_option_description = event.currentTarget.closest('[name = id ]').children

        Array.prototype.forEach.call(default_option_description, function (child) {
            if (child.getAttribute("data-value") === "default-option-description") {

                if (isVisible) {
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

        let aria_label = event.currentTarget.getAttribute("aria-label");
        let current_button = document.getElementById("option--" + aria_label);

        if (isOptionSelected == false) {
            setDefaultVisibility(event, false);
            current_button.classList.add("reveal");
            current_button.classList.remove("hidden");
        } else {
            setSelectedVisibility(false);
            current_button.classList.add("reveal");
            current_button.classList.remove("hidden");
        }
    }

    // hides option description and shows default description
    function hideOptionDescription(event) {
        let aria_label = event.currentTarget.getAttribute("aria-label");
        let current_button = document.getElementById("option--" + aria_label);

        if (isOptionSelected == false) {
            setDefaultVisibility(event, true);

            console.log(`aria_label: ${aria_label}`);
            current_button.classList.add("hidden");
            current_button.classList.remove("reveal");
        } else {
            console.log("hide description, option selected true");

            hideAll(event);
            // current_button.classList.add("hidden");
            // current_button.classList.remove("reveal");
            setSelectedVisibility(true);
        }

    }

    function selectOptionDescription(radio_button, name) {
        console.log("selectOptionDescription");
        let option_descriptions = radio_button.closest('[name = id ]').children

        Array.prototype.forEach.call(option_descriptions, function (child) {
            console.log(`name: ${name}`);
            if (child.getAttribute("data-value") === name) {

                selected_variant = child;
                console.log(`child`);
                console.log(child);
            }
        });
    }

    function onRadioButtonClicked(event, radio_button) {
        console.log(radio_button);

        // get select element
        let form = radio_button.closest("form");
        let selects = form.getElementsByTagName("select")
        let select_variant = selects[0]

        // get variant name
        let variant = radio_button.getAttribute("aria-label");

        // get variants option elements
        let options_array = select_variant.getElementsByTagName('option')

        // select option according to radio button selected
        for (option of options_array) {
            // delete white spaces
            if (variant === option.innerText.replace(/\s/g, "")) {
                select_variant.value = option.getAttribute("value");
                selectOptionDescription(radio_button, variant);
                console.log(`selected_variant: ${selected_variant}`);
                console.log(selected_variant);
            }
        }

        showOptionDescription(event);
        isOptionSelected = true;
    }

    // get class elements that'll be hovered
    let radios__buttons = document.getElementsByClassName('radios--swatch-button');
    // add event listeners for mouseover and mouseout to each radio button
    Array.prototype.forEach.call(radios__buttons, function (radio__button) {
        radio__button.addEventListener("mouseover", showOptionDescription);
        radio__button.addEventListener("mouseout", hideOptionDescription);
        radio__button.addEventListener("click", (event) => { onRadioButtonClicked(event, radio__button) });

    });



});
