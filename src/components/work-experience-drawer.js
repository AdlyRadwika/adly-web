document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        "work_experience": [
            {
                "position": "IT Development Staff",
                "company": "PT. Reska Multi Usaha",
                "date_range": "November 2023 - Now",
                "description": [
                    "Migrated 1 internal application from Android only to both Android and iOS with Flutter.",
                    "Designed and developed the app from scratch and brought a new interactive UI/UX.",
                    "Maintained the application that has been published in the App Store with over 500 users."
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

    const workExperienceContainer = document.getElementById("workExperienceContainer");

    jsonData.work_experience.forEach((job, index) => {
        const listItem = document.createElement("li");

        if (index !== 0) {
            const hr = document.createElement("hr");
            hr.classList.add("bg-primary");
            listItem.appendChild(hr);
        }

        const timelineBox = document.createElement("div");
        timelineBox.classList.add("timeline-box", "border-neutral", "w-full");

        if (index === 0) {
            timelineBox.classList.add("timeline-start");
        } else if (index === jsonData.work_experience.length - 1) {
            timelineBox.classList.add("timeline-end", "mt-4");
        } else {
            timelineBox.classList.add("timeline-middle");
        }

        const title = document.createElement("h2");
        title.classList.add("text-lg", "font-semibold");
        title.textContent = job.position;

        const company = document.createElement("p");
        company.classList.add("font-medium");
        company.textContent = job.company;

        const dateRange = document.createElement("p");
        dateRange.classList.add("text-neutral-500");
        dateRange.textContent = job.date_range;

        const descriptionList = document.createElement("ul");
        descriptionList.classList.add("list-inside");
        job.description.forEach(desc => {
            const descriptionItem = document.createElement("li");
            descriptionItem.classList.add("list-disc");
            descriptionItem.textContent = desc;
            descriptionList.appendChild(descriptionItem);
        });

        timelineBox.appendChild(title);
        timelineBox.appendChild(company);
        timelineBox.appendChild(dateRange);
        timelineBox.appendChild(document.createElement("br"));
        timelineBox.appendChild(descriptionList);

        const timelineIcon = document.createElement("div");
        timelineIcon.classList.add("timeline-middle");
        const timelineIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        timelineIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        timelineIconSvg.setAttribute("width", "24");
        timelineIconSvg.setAttribute("height", "24");
        timelineIconSvg.setAttribute("viewBox", "0 0 256 256");
        timelineIconSvg.classList.add("fill-current");

        if (index === 0) {
            const timelineIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            timelineIconPath.setAttribute("d", "M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z");
            timelineIconSvg.appendChild(timelineIconPath);
        } else {
            const timelineIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            timelineIconPath.setAttribute("d", "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z");
            timelineIconSvg.appendChild(timelineIconPath);
        }

        timelineIcon.appendChild(timelineIconSvg);

        listItem.appendChild(timelineBox);
        listItem.appendChild(timelineIcon);

        workExperienceContainer.appendChild(listItem);

        if (index !== jsonData.work_experience.length - 1) {
            const hr = document.createElement("hr");
            hr.classList.add("bg-primary");
            listItem.appendChild(hr);
        }
    });
});
