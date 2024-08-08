class WorkExperience extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const jsonData = {
            "work_experience": [
                {
                    "position": "IT Development Staff",
                    "company": "PT. Reska Multi Usaha",
                    "date_range": "November 2023 - Now",
                    "description": [
                        "Migrated 1 internal application from Android only to both Android and iOS with Flutter.",
                        "Designed and developed the app from scratch and brought a new interactive UI/UX.",
                        "Maintained the application that has been published in the App Store and Play Store with over 3000 users."
                    ]
                },
                {
                    "position": "Mobile Developer",
                    "company": "PT. Inovatif Tujuh Delapan",
                    "date_range": "October 2022 - October 2023",
                    "description": [
                        "Developed 4 mobile applications for separate clients.",
                        "Contributed to one of the applications released in the Google Play Store with 1050 users.",
                        "Applied the Test-Driven Development paradigm to the company."
                    ]
                }
            ]
        };

        this.innerHTML = `
        <div data-aos="fade-up" class="container mx-auto px-12 mt-8">
            <h1 class="text-2xl font-semibold">Work Experience</h1>
            <ul class="timeline timeline-vertical timeline-compact mt-2">
            ${jsonData.work_experience.map((job, index) => `
            <li>
            ${index !== 0 ? '<hr class="bg-primary"/>' : ''}
                <div class="timeline-box ${index === 0 ? 'timeline-start' : (index === jsonData.work_experience.length - 1 ? 'timeline-end mt-4' : 'timeline-middle')} border-neutral w-full">
                    <h2 class="text-lg font-semibold">${job.position}</h2>
                    <p class="font-medium">${job.company}</p>
                    <p class="text-neutral-500">${job.date_range}</p>
                    <br>
                    <ul class="list-inside">
                    ${job.description.map(desc => `<li class="list-disc">${desc}</li>`).join('')}
                    </ul>
                </div>
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" class="fill-current">
                    <path d="${index === 0 ? 'M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z' : 'M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'}"></path>
                    </svg>
                </div>
                ${index !== jsonData.work_experience.length - 1 ? '<hr class="bg-primary"/>' : ''}
                </li>
            `).join('')}
            </ul>
        </div>
        `;
    }
}

customElements.define('work-experience-component', WorkExperience);
