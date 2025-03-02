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
        setTimeout(typeText, 10);
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


window.onload = function() {
    Skills();
    typeText();
    initMinigame();
};
