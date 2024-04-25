class SocialLinks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const jsonData = {
      "links": [
        {
          "href": "https://github.com/AdlyRadwika",
          "svg_path": "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
          "btn_class": "btn-github"
        },
        {
          "href": "https://www.linkedin.com/in/adlyrmf/",
          "svg_path": "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
          "btn_class": "btn-linkedin"
        },
        {
          "href": "mailto:aradwika@gmail.com",
          "svg_path": "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
          "btn_class": "btn-mail"
        }
      ]
    };

    this.innerHTML = `
        <div class="container mx-auto px-12">
          <div class="hero min-h-screen bg-base-100">
              <div class="hero flex flex-col place-items-start">
                  <h1 class="text-4xl">Hello, </h1>
                  <h1 class="text-4xl font-bold"><span class="font-normal">I'm</span> Adly Radwika</h1>
                  <h2 class="text-2xl mt-4">— a passionate Flutter developer by day, dungeon conqueror by night.
                  </h2>
                  <div id="socialLinksContainer" class="flex flex-row gap-4 mt-4">
                    ${jsonData.links.map(linkData => `
                      <a href="${linkData.href}" target="_blank">
                        <div class="btn btn-square ${linkData.btn_class}">
                          <svg class="fill-current" width="24" height="24" viewBox="0 0 256 256">
                            <path d="${linkData.svg_path}"></path>
                          </svg>
                        </div>
                      </a>
                    `).join('')}
                  </div>
              </div>
          </div>
      </div>
        `;
  }
}

customElements.define('introduction-component', SocialLinks);
