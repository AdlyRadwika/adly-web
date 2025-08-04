class AboutMe extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const jsonData = {
            "title": "About Me",
            "paragraphs": [
                "I'm an Information and Communication Technology (ICT) graduate with a passion for building innovative mobile applications. While I have extensive experience with Flutter, I'm driven to master multi-platform development. I'm actively expanding my skill set to include Kotlin and Swift, and I'm always eager to learn new technologies and create exceptional user experiences ⚔️",
                "Always energized by a good challenge and a collaborative effort, I'm eager to join forces and build groundbreaking apps that push the boundaries of possibility. Let's transform innovative ideas into reality together 🔥"
            ]
        };

        this.innerHTML = `
        <div data-aos="fade-down" class="container mx-auto px-12" id="aboutMeContainer">
          <h1 class="text-2xl font-semibold">${jsonData.title}</h1>
        </div>
      `;

        const aboutMeContainer = this.querySelector("#aboutMeContainer");

        jsonData.paragraphs.forEach(paragraphText => {
            const paragraph = document.createElement("p");
            paragraph.classList.add("text-justify", "mt-2");
            paragraph.textContent = paragraphText;
            aboutMeContainer.appendChild(paragraph);
        });
    }
}

customElements.define('about-me-component', AboutMe);
