class DevelopmentTools extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const jsonData = {
      "development_tools": [
        {
          "title": "Mobile Development",
          "items": ["Flutter", "Kotlin"]
        },
        {
          "title": "Web Development",
          "items": ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"]
        },
        {
          "title": "CI/CD",
          "items": ["GitHub Action", "GitLab CI"]
        }
      ]
    };

    this.innerHTML = `
    <div data-aos="zoom-in-up" class="container mx-auto px-12 mt-8">
      <h1 class="text-2xl font-semibold">Development Tools</h1>
        <div id="developmentToolsContainer" class="flex flex-col gap-2">
          ${jsonData.development_tools.map(tool => `
            <div class="card card-bordered border-neutral mt-2">
              <div class="card-body">
                <p class="card-title font-medium">${tool.title}</p>
                <div class="list">
                  ${tool.items.map(item => `<li>${item}</li>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
    </div>
    `;
  }
}

customElements.define('development-tools-component', DevelopmentTools);
