createBios();

function createBios() {
  let bioDiv = document.getElementById("feedDiv");
  for (let i = 0; i < 10; i++) {
    bioDiv.append(createBioElement());
  }
}

function createBioElement() {
  let bioDiv = document.createElement("div");
  let bioContent = document.createElement("p");

  bioContent.textContent = "Brigitte";

  bioDiv.append(bioContent);

  return bioDiv;
}
