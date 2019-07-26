/*global $*/

(function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.email}</td>
                            <td>${newContact.phone}</td>
                         </tr>`);
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#contactForm');

    contactForm.submit(event => {
        $('#firstSpan').append($('#first').val());
        $('#lastSpan').append($('#last').val());
        $('#addressSpan').append($('#address').val());
        hideContactForm();
        event.preventDefault();
    });

    function hideContactForm() {
        //contactForm.hide();
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        //contactForm.show();
        contactForm.slideDown('slow');
    });
}());