fetch("project.json")
  .then((response) => response.json())
  .then((data) => {
    const projectElements = data.map((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add(
        "bg-white",
        "overflow-hidden",
        "shadow",
        "rounded-lg",
        "text-center",
        "dark:bg-primary-gray"
      );

      const imageElement = document.createElement("img");
      imageElement.src = project.gallery;
      imageElement.alt = project.name;
      imageElement.classList.add(
        "w-full",
        "object-cover",
        "hover:transform",
        "hover:scale-110",
        "pb-4"
      );
      imageElement.style.aspectRatio = "3/2";

      projectElement.appendChild(imageElement);

      const nameElement = document.createElement("a");
      nameElement.innerText = project.name;
      nameElement.href = "https://codepen.io/LepiMiha/pen/" + project.id;
      nameElement.classList.add(
        "px-4",
        "py-4",
        "text-xl",
        "font-semibold",
        "text-gray-800",
        "dark:text-primary-white"
      );
      projectElement.appendChild(nameElement);

      const dateElement = document.createElement("p");
      dateElement.innerText = project.date;
      dateElement.classList.add("px-4", "py-2", "text-gray-500", "text-sm");
      projectElement.appendChild(dateElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = project.description;
      descriptionElement.classList.add(
        "px-4",
        "py-2",
        "text-gray-500",
        "text-sm"
      );
      projectElement.appendChild(descriptionElement);

      const shareElement = document.createElement("div");
      shareElement.classList.add("flex", "justify-center", "items-center");

      const shareTextElement = document.createElement("span");
      shareTextElement.textContent = "Share on:";
      shareTextElement.classList.add("text-gray-500", "text-sm");
      shareElement.appendChild(shareTextElement);

      const facebookElement = document.createElement("a");
      facebookElement.href =
        "https://www.facebook.com/sharer/sharer.php?u=#url" + project.shareUrl;
      const facebookIcon = document.createElement("img");
      facebookIcon.src =
        "https://static.facebook.com/images/logos/facebook_2x.png";
      facebookIcon.alt = "Share on Facebook";
      facebookIcon.classList.add(
        "w-6",
        "h-6",
        "m-6",
        "hover:transform",
        "hover:scale-110"
      );
      facebookElement.appendChild(facebookIcon);
      shareElement.appendChild(facebookElement);

      const whatsappElement = document.createElement("a");
      whatsappElement.href =
        "https://api.whatsapp.com/send?text=" + project.shareUrl;
      const whatsappIcon = document.createElement("img");
      whatsappIcon.src =
        "https://cdn-icons-png.flaticon.com/512/124/124034.png";
      whatsappIcon.alt = "Share on WhatsApp";
      whatsappIcon.classList.add(
        "w-6",
        "h-6",
        "m-6",
        "hover:transform",
        "hover:scale-110"
      );
      whatsappElement.appendChild(whatsappIcon);
      shareElement.appendChild(whatsappElement);
      const twitterElement = document.createElement("a");
      twitterElement.href =
        "https://twitter.com/intent/tweet?url=" +
        project.shareUrl +
        "&text=" +
        project.name;
      const twitterIcon = document.createElement("img");
      twitterIcon.src =
        "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-circle-512.png";
      twitterIcon.alt = "Share on Twitter";
      twitterIcon.classList.add(
        "w-6",
        "h-6",
        "m-6",
        "hover:transform",
        "hover:scale-110"
      );
      twitterElement.appendChild(twitterIcon);
      shareElement.appendChild(twitterElement);

      projectElement.appendChild(shareElement);

      return projectElement;
    });

    const projectsContainer = document.querySelector("#project-grid");
    projectElements.forEach((projectElement) => {
      projectsContainer.appendChild(projectElement);
    });
  });
