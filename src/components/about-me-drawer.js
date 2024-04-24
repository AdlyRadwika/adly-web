document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        "title": "About Me",
        "paragraphs": [
            "An Information and Communication Technology (ICT) undergraduate with a burning passion for crafting incredible mobile applications. Flutter currently serves as my trusty weapon of choice, allowing me to build engaging and user-friendly experiences. However, my thirst for knowledge doesn't stop there! I'm actively honing my skills in Kotlin and Swift to evolve into a multi-platform mobile development master ⚔️",
            "Always energized by a good challenge and a collaborative effort, I'm eager to join forces and build groundbreaking apps that push the boundaries of possibility. Let's transform innovative ideas into reality together 🔥"
        ]
    };

    const aboutMeContainer = document.getElementById("aboutMeContainer");

    const title = document.createElement("h1");
    title.classList.add("text-2xl", "font-semibold");
    title.textContent = jsonData.title;

    aboutMeContainer.appendChild(title);

    jsonData.paragraphs.forEach(paragraphText => {
        const paragraph = document.createElement("p");
        paragraph.classList.add("text-justify", "mt-2");
        paragraph.textContent = paragraphText;
        aboutMeContainer.appendChild(paragraph);
    });
});
