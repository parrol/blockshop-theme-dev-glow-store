/**
 * Determine whether a node's text content is entirely whitespace.
 *
 * @param nod  A node implementing the |CharacterData| interface (i.e.,
 *             a |Text|, |Comment|, or |CDATASection| node
 * @return     True if all of the text content of |nod| is whitespace,
 *             otherwise false.
 */
function is_all_ws(nod) {
    // Use ECMA-262 Edition 3 String and RegExp features
    return !(/[^\t\n\r ]/.test(nod.textContent));
}
/**
 * Determine if a node should be ignored by the iterator functions.
 *
 * @param nod  An object implementing the DOM1 |Node| interface.
 * @return     true if the node is:
 *                1) A |Text| node that is all whitespace
 *                2) A |Comment| node
 *             and otherwise false.
 */

function is_ignorable(nod) {
    return (nod.nodeType == 8) || // A comment node
        ((nod.nodeType == 3) && is_all_ws(nod)); // a text node, all ws
}

/**
 * Version of |previousSibling| that skips nodes that are entirely
 * whitespace or comments.  (Normally |previousSibling| is a property
 * of all DOM nodes that gives the sibling node, the node that is
 * a child of the same parent, that occurs immediately before the
 * reference node.)
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The closest previous sibling to |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function node_before(sib) {
    while ((sib = sib.previousSibling)) {
        if (!is_ignorable(sib)) return sib;
    }
    return null;
}

Element.prototype.isOverFlown = function () {
    return this.clientHeight < this.scrollHeight;
}

function calculateLineHeight(element) {

    let lineHeight = parseInt(window.getComputedStyle(element, null).getPropertyValue("line-height"), 10);
    let clone;
    let singleLineHeight;
    let doubleLineHeight;

    if (isNaN(lineHeight)) {
        clone = element.cloneNode();
        clone.innerHTML = '<br>';
        element.appendChild(clone);
        singleLineHeight = clone.offsetHeight;
        clone.innerHTML = '<br><br>';
        doubleLineHeight = clone.offsetHeight;
        element.removeChild(clone);
        lineHeight = doubleLineHeight - singleLineHeight;
    }

    return lineHeight;
}

// Function to count total
// number of lines
function countLines(element) {
    // Get total height of the content
    let divHeight = element.offsetHeight
    // console.log('divHeight', divHeight);

    // height of one line
    let lineHeight = calculateLineHeight(element);
    // console.log('lineHeight', lineHeight);

    let lines = divHeight / lineHeight;
    // console.log("Lines: " + lines);
}

document.addEventListener("DOMContentLoaded", function (event) {
    /////////////////////////////
    /* Change header to sticky */
    /////////////////////////////
    // Get the header
    const announcementElement = document.querySelector("#shopify-section-announcement");
    const headerElement = document.querySelector("#shopify-section-header");
    const mainContentElement = document.querySelector("#main-content");

    // Get the offset position of the header
    let sticky = headerElement.offsetTop;
    // Get heights
    let announcementHeight = window.getComputedStyle(announcementElement, null).getPropertyValue("height");
    let headerHeight = window.getComputedStyle(headerElement, null).getPropertyValue("height");
    // Select the node that will be observed for mutations
    const offCanvasViewport = document.querySelector('#off-canvas--viewport');

    // When the user scrolls the page with both sidebars closed, execute stickyheader
    window.onscroll = () => { stickyheader(offCanvasViewport.getAttribute('data-off-canvas--state')) };

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyheader(state) {

        if (state === "closed") {

            if (window.pageYOffset > sticky) {
                announcementElement.classList.add("section--header-sticky");
                headerElement.classList.add("section--header-sticky");

                headerElement.style.top = announcementHeight;
                mainContentElement.style.paddingTop = headerHeight;

            } else {
                announcementElement.classList.remove("section--header-sticky");
                headerElement.classList.remove("section--header-sticky");
                mainContentElement.style.paddingTop = 0;
            }
        }
    }


    ////////////////////////////////////////////////////
    /* Add accordion functionality                    */
    ////////////////////////////////////////////////////


    let review_accordion = document.getElementById('review-count-container');
    let review_icon_plus = document.getElementById('review-icon-plus');
    if (review_accordion) {
        review_accordion.style.color = 'gray';
        review_icon_plus.style.fill = 'gray';
        review_accordion.setAttribute("disabled", "");
    }

    function addPaginationListeners() {
        let pagination_next = document.getElementsByClassName('spr-pagination-next')[0];
        let pagination_prev = document.getElementsByClassName('spr-pagination-prev')[0];

        //Both buttons needs to wait 0.5s before they can be selected and listened to.
        //Then, when they're available to be clicked, the new reviews are clamped and whe can listen to their events.
        if (pagination_next) {
            pagination_next.addEventListener("click", (event) => {
                setTimeout(function () {
                    clamp_reviews();
                    addPaginationListeners();
                }, 500);
            });
        }

        if (pagination_prev) {
            pagination_prev.addEventListener("click", (event) => {
                setTimeout(function () {
                    clamp_reviews();
                    addPaginationListeners();
                }, 500);
            });
        }
    }


    function addAcordionListeners() {
        let review_accordion = document.getElementById('review-count-container');
        if (review_accordion) {

            //TODO: this needs to be change to some asynchronous code to be more effective.
            setTimeout(function () {
                review_accordion.style.color = 'unset';
                review_icon_plus.style.fill = 'black';
                review_accordion.setAttribute("disabled", false);
            }, 2000);


            let plus = document.getElementById('review-icon-plus')
            let minus = document.getElementById('review-icon-minus')
            let product_reviews = review_accordion.nextElementSibling;
            product_reviews.classList.add('accordion-hidden');

            review_accordion.addEventListener("click", (event) => {
                event.preventDefault();

                plus.classList.toggle('accordion-hidden');
                plus.classList.toggle('accordion-active');

                minus.classList.toggle('accordion-hidden');
                minus.classList.toggle('accordion-active');

                product_reviews.classList.toggle('accordion-hidden');
                product_reviews.classList.toggle('accordion-active');
                clamp_reviews();
                addPaginationListeners();
            });
        }
    }

    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
        addAcordionListeners();
    });

    ////////////////////////////////////////////////////
    /* Add clamp to product reviews content           */
    ////////////////////////////////////////////////////

    function toggleClamp(event, element) {
        element.classList.toggle('clamp');
        element.classList.toggle('no_clamp');
    }

    function clamp_reviews() {
        let reviews_text = document.getElementsByClassName('spr-review-content-body');

        for (let i = 0; i < reviews_text.length; i++) {
            reviews_text[i].addEventListener("click", (event) => { toggleClamp(event, reviews_text[i]) });
        }
    }


    ////////////////////////////////////////////////////
    /* Update selected variant with its product image */
    ////////////////////////////////////////////////////
    // set option description (ON HOVER)
    // sets default description visibility
    let has_variants = document.querySelector('#has-variants');

    //gets selected variant
    function getSelectedVariant(radio_button) {
        let selected_variant = null;
        let option_descriptions = radio_button.closest('#radios--root').parentElement.children

        Array.prototype.forEach.call(option_descriptions, function (child) {

            if (child.dataset.isSelectedVariant == 'true') {
                selected_variant = child;
            } else {
                // console.log('no selected variant i.e. null');
            }
        });

        return selected_variant;
    }

    // set visibility on selected option
    function setSelectedVisibility(isVisible, radio_button) {
        let selected_variant = getSelectedVariant(radio_button);

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
        // let option_descriptions = event.currentTarget.closest('[name = id ]').children
        let option_descriptions = event.currentTarget.closest('#radios--root').parentElement.children

        Array.prototype.forEach.call(option_descriptions, function (child) {
            if (child.getAttribute("data-js-class") !== ("Radios")) {
                child.classList.add("hidden");
                child.classList.remove("reveal");
            }
        })
    }

    // sets visibility for default option description message
    function setDefaultVisibility(event, isVisible) {
        let option_descriptions = event.currentTarget.closest('#radios--root').parentElement.children

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
    function showOptionDescription(event, radio_button) {

        // get select element
        let form = radio_button.closest("form");
        let selects = form.getElementsByTagName("select")

        let aria_label = radio_button.getAttribute("aria-label");
        let current_button = form.querySelector("#option--" + aria_label);

        if (selects[0].dataset.isOptionSelected == 'false') {
            setDefaultVisibility(event, false);
            current_button.classList.add("reveal");
            current_button.classList.remove("hidden");
        } else {
            setSelectedVisibility(false, radio_button);
            current_button.classList.add("reveal");
            current_button.classList.remove("hidden");
        }
    }

    // hides option description and shows default description
    function hideOptionDescription(event, radio_button) {

        // get select element
        let form = event.currentTarget.closest("form");
        let selects = form.getElementsByTagName("select")

        let aria_label = event.currentTarget.getAttribute("aria-label");
        let current_button = form.querySelector("#option--" + aria_label);

        if (selects[0].dataset.isOptionSelected == 'false') {
            setDefaultVisibility(event, true);
            current_button.classList.add("hidden");
            current_button.classList.remove("reveal");

        } else {
            hideAll(event);
            setSelectedVisibility(true, radio_button);
        }

    }

    //sets global variant selected
    function selectOptionDescription(radio_button, name, radio_input) {
        let option_descriptions = radio_button.closest('#radios--root').parentElement.children

        Array.prototype.forEach.call(option_descriptions, function (child) {
            if (child.getAttribute("data-value") === name) {
                child.dataset.isSelectedVariant = true;
                radio_input.checked = true;
            } else {
                child.dataset.isSelectedVariant = false;
            }
        });
    }

    //sets visibility on image according to radio buttom clicked
    function updateVariantImage(radio_button, color) {
        let image_container = radio_button.closest('#image-container--product-root');

        /* LOGS
        console.log("image container: ", image_container); // product--root
        console.log("child:", image_container.children[0]); // product--item
        console.log("children 1:", image_container.children[0].children[0]); //product--image-wrapper
        console.log("children 2:", image_container.children[0].children[0].children[0]); //product--image
        console.log("children 3:", image_container.children[0].children[0].children[0].children[0]); //product--color-image
        */

        if (!has_variants) {
            let color_images = image_container.children[0].children[0].children[0].children[0].children;

            Array.prototype.forEach.call(color_images, function (image) {
                image.style.display = "none";
                let color_alt = image.children[0].children[0].getAttribute("alt");

                //this seems like it's going to be legacy code :D
                if (color_alt.toUpperCase().trim().localeCompare(color.toUpperCase().trim()) == 0) {
                    image.style.display = "block";
                }
            })
        }

    }

    function getNextSiblingByName(el, name) {
        while (el) {
            el = el.nextSibling;
            if (el.nodeName == name) {
                return el;
            }
        }

        return el;
    }

    function getSelectElement(radio_button) {
        let radios_root = radio_button.closest('[data-js-class="Radios"]');
        let selects = getNextSiblingByName(radios_root, 'SELECT');

        return selects;
    }

    function onRadioButtonClicked(event, radio_button) {

        //this ensures the inputs are clicked at the same time the swatch are clicked
        let radio_input = node_before(radio_button);
        radio_input.click();

        // get select element
        let selects = getSelectElement(radio_button);

        let select_variant = selects[0]

        // get variant name
        let variant = radio_button.getAttribute("aria-label");

        // get variants option elements
        let options_array = select_variant.getElementsByTagName('option');
        let option_text;

        // select option according to radio button selected
        for (option of options_array) {
            option_text = option.innerText.replace(/\s/g, "")
            // delete white spaces in innertext
            if (variant === option_text) {
                select_variant.value = option.getAttribute("value");
                selectOptionDescription(radio_button, variant, radio_input);

                let selected_variant = getSelectedVariant(radio_button);
                let color = selected_variant.getAttribute("data-value");
                updateVariantImage(radio_button, color);
            }
        }

        showOptionDescription(event, radio_button);
        selects[0].dataset.isOptionSelected = true;
    }

    let intervalID = window.setInterval(addListeners, 1000);

    function addListeners() {

        // get elements that'll be hovered
        // container of the elements
        let radios_buttons_container = document.getElementsByClassName('radios--main');
        let radios_buttons = [];

        // take each container, get the element inside and create push them to a new array
        Array.prototype.forEach.call(radios_buttons_container, function (radio_button_container) {
            radios_buttons.push(radio_button_container.children[1]);
        })

        if (radios_buttons.length === 0) {
            return;
        } else {
            clearInterval(intervalID);
        }

        // add event listeners for mouseover and mouseout to each radio button
        Array.prototype.forEach.call(radios_buttons, function (radio_button) {
            radio_button.addEventListener("mouseover", (event) => { showOptionDescription(event, radio_button) });
            radio_button.addEventListener("mouseout", (event) => { hideOptionDescription(event, radio_button) });
            radio_button.addEventListener("click", (event) => { onRadioButtonClicked(event, radio_button); event.preventDefault() });
        });
    }


    //Image filterr
    if (has_variants) {
        let radio_buttons = document.getElementsByClassName('radios--value-button');
        let swatch_buttons = document.getElementsByClassName('radios--swatch-button-details');
        let selected__button__container;
        let selected__button;
        selected__button__container = document.getElementById('product-form--variant-select-glowstick');
        selected__button = selected__button__container.options[selected__button__container.selectedIndex].innerText.toUpperCase().trim()
        //Value buttons
        if (radio_buttons.length > 0) {

            Array.prototype.forEach.call(radio_buttons, function (radio_button) {

                let filter = radio_button.innerText;
                radio_button.addEventListener("click", (event) => { filterThumbnails(event, radio_button, filter) });
                //this is called once after page is loaded
                filterThumbnails(event, radio_button, selected__button);
            });
            //Swatch buttons
        } else if (swatch_buttons.length > 0) {

            Array.prototype.forEach.call(swatch_buttons, function (swatch_button) {

                let filter = swatch_button.getAttribute("aria-label");
                swatch_button.addEventListener("click", (event) => { filterThumbnails(event, swatch_buttons, filter.toUpperCase()) });
                //this is called once after page is loaded
                filterThumbnails(event, swatch_button, selected__button);
            });
        } else {
            console.warn('there are no radio buttons for color selection')
        }
    }


    function filterThumbnails(event, radio_button, filter) {

        let media_container = document.getElementsByClassName("product-media--thumb");

        Array.prototype.forEach.call(media_container, function (media) {
            media.parentElement.style.display = "block";
            let data_thumbnail_color = media.getAttribute("data-thumbnail-color");

            //hides every image apart from the one selected.
            if (data_thumbnail_color !== filter) {
                media.parentElement.style.display = "none";
            }
        });
    }


    //////////////////////////////////
    /* Assign dropdown menu to menu */
    //////////////////////////////////

    let header_leve1_container = document.querySelector('#x-menu--level-1--container');
    let header_links = header_leve1_container.children;

    Array.prototype.forEach.call(header_links, function (link) {
        // link.addEventListener("mouseover", showOptionDescription);
        // link.addEventListener("mouseout", hideOptionDescription);
        link.addEventListener("mouseover", (event) => { onMouseOverLink(event) });

    });

    function onMouseOverLink(event) {
        //get nav menu link name
        let link_name = event.currentTarget.getAttribute('data-link-id');
        //get dropdown collection element associated with nav menu link
        let dropdown_collection = document.querySelector(`#link-${link_name}`);
        // get dropdown collections container
        let dropdown_container;
        let dropdown_children;
        try {
            dropdown_container = dropdown_collection.parentElement;

            // get all dropdown collections
            dropdown_children = dropdown_container.children;

            if (window.pageYOffset == 0) {
                dropdown_container.style.paddingTop = 0;
                headerElement.classList.remove("section--header-sticky");

            } else {
                dropdown_container.style.paddingTop = headerHeight;
                headerElement.classList.add("section--header-sticky");
            }

            window.onscroll = () => {
                if (window.pageYOffset == 0) {
                    dropdown_container.style.paddingTop = 0;
                    headerElement.classList.remove("section--header-sticky");

                } else {
                    dropdown_container.style.paddingTop = headerHeight;
                    headerElement.classList.add("section--header-sticky");
                }

                if (window.pageYOffset > sticky) {
                    announcementElement.classList.add("section--header-sticky");
                    headerElement.classList.add("section--header-sticky");

                    headerElement.style.top = announcementHeight;
                    mainContentElement.style.paddingTop = headerHeight;

                } else {
                    announcementElement.classList.remove("section--header-sticky");
                    headerElement.classList.remove("section--header-sticky");
                    mainContentElement.style.paddingTop = 0;
                }

            }

            Array.prototype.forEach.call(dropdown_children, function (collection) {
                // hide every collection
                collection.style.display = 'none';

                let collection_id = collection.id;

                // show collection hovered
                if (collection_id === ('link-' + link_name)) {
                    collection.style.display = 'block';
                }
            })
            //show collections container
            dropdown_container.style.display = 'block';

            dropdown_container.addEventListener("mouseleave", (event) => { onMouseLeaveDropdownCollection(event) });
        } catch (error) {
            // console.log(`${link_name} doesn't have a dropdown menu`);
        }
    }

    function onMouseLeaveDropdownCollection(event) {
        event.currentTarget.style.display = 'none';
    }


    //////////////////////////////////////////////////////
    //update total price when using the quantity buttons//
    //////////////////////////////////////////////////////
    const quantity = document.getElementById('quantity');
    if (quantity != null) {

        let quantity_plus = document.getElementById('quantity-plus');
        let quantity_minus = document.getElementById('quantity-minus');
        let total_price = document.getElementById('total-price')
        let unit_price = total_price.getAttribute('data-price');


        function operateStrings(a, b) {
            let num1 = Number.parseInt(a);
            let num2 = b
            return (num1 + num2);
        }

        function updateTotalPrice(unit_price, quantity) {
            total_price.innerText = "$" + (unit_price * quantity).toFixed(2);
        }

        quantity_plus.addEventListener('click', function (e) {
            e.preventDefault();
            quantity.value = operateStrings(quantity.value, 1);
            updateTotalPrice(unit_price, quantity.value);
        });

        quantity_minus.addEventListener('click', function (e) {
            e.preventDefault();
            if (quantity.value <= 2) {
                quantity.value = 1;
                updateTotalPrice(unit_price, quantity.value);
            } else {
                quantity.value = operateStrings(quantity.value, -1);
                updateTotalPrice(unit_price, quantity.value);
            }
        });
    }

    //////////////////////////////////////////////////////
    /////////////////////// POP UP ///////////////////////
    //////////////////////////////////////////////////////
    let intervalPopupID = window.setInterval(PopUpEventListeners, 200);

    function PopUpEventListeners() {
        let affirmative_button_popup = document.getElementById('popup--newsletter--button-affirmative');

        if (affirmative_button_popup) {
            let no_thanks = document.getElementById('popup--newsletter--no-thanks');
            let contact_form = document.getElementById('contact_form')
            let modal = document.getElementsByTagName('dialog')[0];
            let body = document.getElementsByTagName('body')[0];
            let popup_modal_mask = document.getElementsByClassName('popup-modal-mask')[0];

            if ((modal != undefined) && (body != undefined)) {
                affirmative_button_popup.addEventListener('click', function (e) {
                    e.preventDefault();

                    contact_form.classList.add('on-screen');
                    affirmative_button_popup.classList.add('off-screen');
                    no_thanks.classList.add('off-screen');
                })

                no_thanks.addEventListener('click', function (e) {
                    modal.classList.add('closed');
                    modal.classList.remove('completed');
                    modal.classList.remove('oponed');

                    body.classList.remove('modal-on');
                    popup_modal_mask.style.display = 'none';
                })
                clearInterval(intervalPopupID);
            }

        } else {
            // console.warn('popup button non-existent');
        }
    }

    window.addEventListener('load', (event) => {
        PopUpEventListeners();
    });
});