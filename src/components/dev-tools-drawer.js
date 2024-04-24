document.addEventListener("DOMContentLoaded", function () {
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

    const developmentToolsContainer = document.getElementById("developmentToolsContainer");

    jsonData.development_tools.forEach(tool => {
        const card = document.createElement("div");
        card.classList.add("card", "card-bordered", "border-neutral", "mt-2");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("p");
        title.classList.add("card-title", "font-medium");
        title.textContent = tool.title;

        const itemList = document.createElement("div");
        itemList.classList.add("list");
        tool.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });

        cardBody.appendChild(title);
        cardBody.appendChild(itemList);
        card.appendChild(cardBody);
        developmentToolsContainer.appendChild(card);
    });
});
