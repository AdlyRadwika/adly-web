class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const jsonData = {
      "projects": [
        {
          "title": "KAIS Apps",
          "description": "This internal application, which I developed and migrated for PT. Reska Multi Usaha, improves the accessibility for iOS user.",
          "tools": ["Flutter", "Clean Architecture", "Provider", "Firebase", "GitLab CI"]
        },
        {
          "title": "eLearning Mobile Apps",
          "description": "I built a collaborative learning app (like Google Classroom) with facial recognition for my final project.",
          "tools": ["Flutter", "Clean Architecture", "BLOC", "Firebase", "Tensorflow Lite"],
          "github_link": "https://github.com/AdlyRadwika/E-Learning-Apps"
        },
        {
          "title": "SMAN 4 Medan Mobile Apps",
          "description": "During my time at PT. Inovatif Tujuh Delapan, I developed a comprehensive client application featuring functionalities like forums, PPOB (bill payment), and more.",
          "tools": ["Flutter", "Clean Architecture", "Provider", "Firebase"],
          "playStore_link": "https://play.google.com/store/apps/details?id=com.inovatif78.sma_4_medan",
          "appStore_link": "https://apps.apple.com/id/app/ikal-sma-4-medan/id6470934679"
        },
        {
          "title": "Komudi",
          "description": "Another project I developed at PT. Inovatif Tujuh Delapan was a SaaS platform catering to communities.",
          "tools": ["Flutter", "Clean Architecture", "Provider", "Firebase", "WebSocket"],
          "playStore_link": "https://play.google.com/store/apps/details?id=com.inovatif78.superapps",
          "appStore_link": "https://apps.apple.com/id/app/komudi/id6477152837"
        },
        {
          "title": "Hawan",
          "description": "This is a city-based weather forecasting website.",
          "tools": ["HTML", "CSS", "JavaScript", "Bootstrap", "VisualCrossing's API"],
          "websiteLink": "https://adlyradwika.github.io/Hawan/"
        },
        {
          "title": "Diresto",
          "description": "This app serves as my submission for Dicoding's course. Users can browse a sample restaurant database, showcasing the functionalities learned during the course.",
          "tools": ["Flutter", "Provider", "SQLite"],
          "github_link": "https://github.com/AdlyRadwika/diresto"
        }
      ]
    };

    this.innerHTML = `
    <div data-aos="zoom-in-down" class="container mx-auto px-12 mt-8">
        <h1 class="text-2xl font-semibold">Projects</h1>
        <div class="card card-bordered card-compact border-neutral hover:border-primary hover:shadow-md mt-2">
            <div class="card-body">
                <h2 class="card-title">This Website</h2>
                <p class="text-start">The place where you'll find my portfolio, which I keep up-to-date.</p>
                <div class="card-actions justify-start">
                    <div class="badge badge-outline">HTML</div>
                    <div class="badge badge-outline">CSS</div>
                    <div class="badge badge-outline">JavaScript</div>
                    <div class="badge badge-outline">Tailwind</div>
                    <div class="badge badge-outline">GitHub Actions</div>
                </div>
            </div>
        </div>
        <div id="projectsContainer" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        ${jsonData.projects.map(project => `
        <div class="card card-bordered card-compact border-neutral hover:border-primary hover:shadow-md mt-2">
          <div class="card-body">
            <h2 class="card-title">${project.title}</h2>
            <p class="text-start">${project.description}</p>
            <div class="card-actions justify-start">
            ${project.tools.map(tool => `<div class="badge badge-outline">${tool}</div>`).join('')}
            </div>
            <div class="card-actions justify-end">
            ${project.github_link ? createButton(project.github_link, "GitHub", "github") : ''}
            ${project.playStore_link ? createButton(project.playStore_link, "Play Store", "play") : ''}
            ${project.appStore_link ? createButton(project.appStore_link, "App Store", "apple") : ''}
            ${project.websiteLink ? createButton(project.websiteLink, "Website", "link") : ''}
            </div>
          </div>
        </div>
        `).join('')}
        </div>
      </div>
      `;
  }
}

customElements.define('projects-component', Projects);

function createButton(link, text, icon) {
  return `
        <button class="btn btn-sm btn-circle">
          <a target="_blank" href="${link}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" class="fill-current">
              <path d="${getSvgPath(icon)}"/>
            </svg>
          </a>
        </button>
      `;
}

function getSvgPath(icon) {
  switch (icon) {
    case "github":
      return "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z";
    case "play":
      return "M64,212.67V43.33L148.69,128Zm96-73.36,18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z";
    case "apple":
      return "M232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z";
    case "link":
      return "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z";
    default:
      return "";
  }
}
