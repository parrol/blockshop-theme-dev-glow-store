
document.addEventListener("DOMContentLoaded", function (event) {
    /////////////////////////////
    /* Change header to sticky */
    /////////////////////////////
    console.log("DOM fully loaded and parsed");
    // Get the header
    const announcementElement = document.querySelector("#shopify-section-announcement");
    const headerElement = document.querySelector("#shopify-section-header");
    const mainContentElement = document.querySelector("#main-content");

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
    ////////////////////////////////////////////////////
    /* Update selected variant with its product image */
    ////////////////////////////////////////////////////
    // set option description (ON HOVER)
    // sets default description visibility
    let isOptionSelected = false;
    let selected_variant = null;

    // set visibility on selected option
    function setSelectedVisibility(isVisible) {
        if (isVisible) {
            selected_variant.classList.add("reveal");
            selected_variant.classList.remove("hidden");
        } else {
            selected_variant.classList.add("hidden");
            selected_variant.classList.remove("reveal");
        }
    }

    // hides all option descriptions
    function hideAll(event) {
        let option_descriptions = event.currentTarget.closest('[name = id ]').children

        Array.prototype.forEach.call(option_descriptions, function (child) {
            if (child.getAttribute("data-js-class") !== ("Radios")){
                child.classList.add("hidden");
                child.classList.remove("reveal");

            }
        })
    }

    // sets visibility for default option description message
    function setDefaultVisibility(event, isVisible) {
        let option_descriptions = event.currentTarget.closest('[name = id ]').children

        Array.prototype.forEach.call(option_descriptions, function (child) {
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
            current_button.classList.add("hidden");
            current_button.classList.remove("reveal");

        } else {
            hideAll(event);
            setSelectedVisibility(true);
        }

    }

    //sets global variant selected
    function selectOptionDescription(radio_button, name) {
        let option_descriptions = radio_button.closest('[name = id ]').children

        Array.prototype.forEach.call(option_descriptions, function (child) {
            if (child.getAttribute("data-value") === name) {
                selected_variant = child;
            }
        });
    }

    //sets visibility on image according to radio buttom clicked
    function updateVariantImage(radio_button, color) {
        let image_container = radio_button.closest('[data-product-view = grid]');

        /* LOGS
        console.log("image container: ", image_container); // product--root
        console.log("child:", image_container.children[0]); // product--item
        console.log("children 1:", image_container.children[0].children[0]); //product--image-wrapper
        console.log("children 2:", image_container.children[0].children[0].children[0]); //product--image
        console.log("children 3:", image_container.children[0].children[0].children[0].children[0]); //product--color-image
        */

        let color_images = image_container.children[0].children[0].children[0].children[0].children;

        Array.prototype.forEach.call(color_images, function (image) {
            image.style.display = "none";
            let color_alt = image.children[0].children[0].getAttribute("alt");

            //this seems like it's going to be legacy code :D
            if ( color_alt.toUpperCase().trim().localeCompare(color.toUpperCase().trim()) == 0){
                // alt = color;
                image.style.display = "block";
            }
        })

    }

    function onRadioButtonClicked(event, radio_button) {

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
            // delete white spaces in innertext
            if (variant === option.innerText.replace(/\s/g, "")) {
                select_variant.value = option.getAttribute("value");
                selectOptionDescription(radio_button, variant);

                let color = selected_variant.getAttribute("data-value");
                updateVariantImage(radio_button, color);
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

    let radios__button = document.getElementsByClassName('radios--value-button');
    Array.prototype.forEach.call(radios__button, function (radio__button) {

        let filter = radio__button.innerText;
        radio__button.addEventListener("click", (event) => { filterThumbnails(event, radio__button, filter) });
        //this is called once after page is loaded
        filterThumbnails(event, radio__button, "NOVEMBER");
    });

    function filterThumbnails(event, radio_button, filter) {

        let media_container = document.getElementsByClassName("product-media--thumb");

        Array.prototype.forEach.call(media_container, function (media) {
            media.parentElement.style.display = "block";
            let data_thumbnail_color = media.getAttribute("data-thumbnail-color");

            //hides every image apart from the one selected.
            if (data_thumbnail_color !== filter){
                media.parentElement.style.display = "none";
            }
        });
    }
    //////////////////////////////////
    /* Assign dropdown menu to menu */
    //////////////////////////////////


    let header_leve1_container = document.querySelector('#x-menu--level-1--container');
    let header_links = header_leve1_container.children;
    console.log(header_leve1_container);
    console.log(header_links);

    Array.prototype.forEach.call(header_links, function (link) {
        // link.addEventListener("mouseover", showOptionDescription);
        // link.addEventListener("mouseout", hideOptionDescription);
        link.addEventListener("mouseover", (event) => { onMouseOverLink(event) });

    });

    function onMouseOverLink(event){
        //get nav menu link name
        let link_name = event.currentTarget.getAttribute('data-link-id');
        //get dropdown collection element associated with nav menu link
        let dropdown__collection = document.querySelector(`#link-${link_name}`);

        dropdown__collection.parentElement.style.display = 'block';

        dropdown__collection.parentElement.addEventListener("mouseleave", (event) => {onMouseLeaveDropdownCollection(event)});
    }

    function onMouseLeaveDropdownCollection(event){
        console.log("ON MOUSE LEAVE");
        event.currentTarget.style.display = 'none';
    }


});