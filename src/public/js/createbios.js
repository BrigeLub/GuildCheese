createBios();

function createBios() {
  let bioDiv = document.getElementById("feedDiv");
  for (let i = 0; i < 10; i++) {
    bioDiv.append(createBioElement());
  }
}

function createBioElement() {
  let bioCard = document.createElement("div");
  bioCard.classList.add("bio-card"); // Add a class for styling

  let bioContent = document.createElement("p");
  bioContent.textContent = "Team";

  bioCard.append(bioContent);

  return bioCard;
}