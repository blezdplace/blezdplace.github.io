// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation for Donation
const donationForm = document.getElementById('donation-form');

if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const donationAmount = document.querySelector('input[name="donation-amount"]:checked');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!donationAmount) {
            alert('Please select a donation amount.');
            return;
        }

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        // If all validations pass, submit the form
        alert(`Thank you, ${name}, for your donation of $${donationAmount.value}!`);
        donationForm.reset();
    });
}

// Donation Amount Selection Highlight
document.querySelectorAll('.donation-amount').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.donation-amount').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Dynamic Date for Footer
document.getElementById('current-year').textContent = new Date().getFullYear();