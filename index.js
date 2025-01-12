function Skills() { 
    var skills = [
        { name: "C++", level: "90%" },
        { name: "Python", level: "80%" },
        { name: "Data Structures", level: "65%" },
        { name: "Algorithms", level: "85%" },
        { name: "App Development", level: "55%" },
        { name: "Web Development", level: "65%" },
        { name: "English - C1", level: "85%" },
        { name: "French - B2", level: "60%" }
    ];

    var skillsContainer = document.getElementById("skills-container");
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var skillDiv = document.createElement("div");
        skillDiv.className = "skill";

        var skillName = document.createElement("span");
        skillName.className = "skill-name";
        skillName.textContent = skill.name;

        var progressBar = document.createElement("div");
        progressBar.className = "progress-bar";

        var progress = document.createElement("div");
        progress.className = "progress";
        progress.style.width = skill.level;

        progressBar.appendChild(progress);
        skillDiv.appendChild(skillName);
        skillDiv.appendChild(progressBar);
        skillsContainer.appendChild(skillDiv);
    }
}

var text = "Hi, I am Darius, a dedicated first-year Computer Science student at the University of Bucharest with a strong enthusiasm for programming, specializing in C++ and Python. I take pride in developing efficient algorithms and applying analytical thinking to solve complex challenges. Committed to continuous learning and professional development, I aim to contribute my technical skills and problem-solving abilities to innovative projects. My aspiration is to build a career as a software developer, making meaningful contributions to the advancement of technology.";
var index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('short-descripion').innerText += text[index];
        index++;
        setTimeout(typeText, 30);
    }
}

var clickCount = 0;  

function Click() {
    clickCount++;

    if (clickCount === 5) {
        showEasterEggMessage();
        clickCount = 0;
    }
}

function showEasterEggMessage() {
    var messageElement = document.getElementById('easterEggMessage');
    messageElement.style.display = 'block';

    setTimeout(function() {
        messageElement.style.display = 'none';
    }, 3000);
}

function initMinigame() {
    var languages = [
        "Python", "Java", "C", "C++", "JavaScript",
        "Ruby", "PHP", "Swift", "Kotlin", "Rust",
        "Shell (Bash)", "SQL", "C#", "Assembly", "Perl"
    ];

    var totalLanguages = languages.length;
    var languageForm = document.getElementById("language-form");
    var progressText = document.getElementById("progress-text");
    var progressBar = document.getElementById("progress");
    var yourProgressBar = document.getElementById("your-progress");

    var knownLanguages = JSON.parse(localStorage.getItem("knownLanguages")) || [];
    updateProgress();

    languageForm.addEventListener("change", function(event) {
        var checkbox = event.target;
        var language = checkbox.value;

        if (checkbox.checked && knownLanguages.indexOf(language) === -1) {
            knownLanguages.push(language);
        } else if (!checkbox.checked) {
            var index = knownLanguages.indexOf(language);
            if (index !== -1) {
                knownLanguages.splice(index, 1);
            }
        }

        localStorage.setItem("knownLanguages", JSON.stringify(knownLanguages));
        updateProgress();
    });

    function updateProgress() {
        var userProgress = (knownLanguages.length / totalLanguages) * 100;
        progressBar.style.width = userProgress + "%";
        progressText.textContent = "You know " + knownLanguages.length + " of " + totalLanguages + " languages (" + Math.round(userProgress) + "%)";
    
        var style = getComputedStyle(progressBar);
        var currentWidth = parseFloat(style.width);
        var parentWidth = progressBar.parentElement.offsetWidth;
        var currentWidthPercentage = (currentWidth / parentWidth) * 100;
    
        if (currentWidthPercentage > 65) {
            progressBar.style.backgroundColor = "red";
        } else {
            progressBar.style.backgroundColor = "";
        }
    
        var inputs = languageForm.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.type === "checkbox") {
                input.checked = knownLanguages.indexOf(input.value) !== -1;
            }
        }
    
        var yourProgress = 60;
        yourProgressBar.style.width = yourProgress + "%";
    
        if (userProgress > yourProgress) {
            showWinMessage();
        }
    }
    

    function showWinMessage() {
        var winMessage = document.getElementById("win-message");
        winMessage.style.display = 'block';

        setTimeout(function() {
            winMessage.style.display = 'none';
        }, 3000);
    }
}

function setupAuth() {
    var authSection = document.getElementById('auth-section');
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');
    var loginSection = document.getElementById('login-section');
    var signupSection = document.getElementById('signup-section');
    var projectsSection = document.getElementById('projects-section');
    var logoutButton = document.getElementById('logout-button');

    var loginUsernameInput = document.getElementById('login-username');
    var loginPasswordInput = document.getElementById('login-password');
    var signupUsernameInput = document.getElementById('signup-username');
    var signupPasswordInput = document.getElementById('signup-password');

    var currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        authSection.style.display = 'none';
        projectsSection.style.display = 'block';
    }

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('signup-username').value;
        var password = document.getElementById('signup-password').value;

        if (localStorage.getItem(username)) {
            alert('Username already exists!');
        } else {
            localStorage.setItem(username, password);
            alert('Sign-Up successful! Please log in.');
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('login-username').value;
        var password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
            localStorage.setItem('currentUser', username);
            authSection.style.display = 'none';
            projectsSection.style.display = 'block';
        } else {
            alert('Invalid username or password!');
        }
    });

    document.getElementById('show-signup').addEventListener('click', function (event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    document.getElementById('show-login').addEventListener('click', function (event) {
        event.preventDefault();
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        projectsSection.style.display = 'none';
        loginSection.style.display = 'block';
        authSection.style.display = 'block';

        alert('You have been logged out.');

        loginUsernameInput.value = '';
        loginPasswordInput.value = '';
        signupUsernameInput.value = '';
        signupPasswordInput.value = '';
    });
}


window.onload = function() {
    Skills();
    typeText();
    initMinigame();

    document.getElementById('easterDot').addEventListener('click', Click);

    setupAuth();
};
