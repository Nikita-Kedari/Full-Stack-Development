document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (username === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
            alert('All fields are required and cannot be empty.');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        if (password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password)) {
            alert('Password must be at least 7 characters long and include at least one capital letter, one digit, and one special character (&,$,#,@).');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/.test(email)) {
            alert('Invalid email format.');
            return;
        }

        alert('Form submitted successfully!');
    });

    // Change button text using DOM
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        this.textContent = 'Button Text Changed';
    });

    // Change background image using DOM
    document.getElementById('changeBgBtn').addEventListener('click', function() {
        document.body.style.backgroundImage = 'url("https://via.placeholder.com/1200x800")';
        document.body.style.backgroundSize = 'cover';
    });

    // Add text node
    document.getElementById('addTextBtn').addEventListener('click', function() {
        const textNode = document.createElement('div');
        textNode.className = 'text-item';
        textNode.textContent = 'This is dynamically added text.';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            textNode.remove();
        };

        textNode.appendChild(deleteBtn);
        document.getElementById('dynamicTextContainer').appendChild(textNode);
    });
});
