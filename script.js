const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            
            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

// Validation

$(document).ready(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact-form']").validate({
      // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            msg: "required",
            email: {
                required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
                email: true
            },
        },
         // Specify validation error messages
        messages: {
            name: "Please enter your name",
            msg: "Please fill the form",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});

// Translate

function googleTranslateElementInit() {
    new google.translate.TranslateElement ({
        pageLanguage: 'en'}, 'google_translate_element');
}
