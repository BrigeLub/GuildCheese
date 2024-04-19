createBios();

let bioDiv = document.getElementById("feedDiv");

function createBios() {
  //Hey Brig! This is the "fetch" method, (Fetch API)! It lets us make requests to our server.
  //Here we're using it to get a file... BUT we could also use it to switch pages between our sites!
  fetch("../team.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //In this section we get the data from the json file "team.json", since we return it above. teamlist is an
      //array of people that we'll need to populate.
      //We use the "forEach" method to call the same function on each person in the array!
      data.teamlist.forEach(createBioElement);
    })
    .catch((err) => {
      console.log("If you see this message, tell Leah she wrote bad code!");
    });
}

function createBioElement(element) {
  console.log(element);
  let bioCard = document.createElement("div");
  bioCard.classList.add("bio-card"); // Add a class for styling

  let bioName = document.createElement("h2");
  bioName.textContent = element.name;

  let bioContent = document.createElement("p");
  bioContent.textContent = element.bio;

  bioCard.append(bioName);
  bioCard.append(bioContent);

  bioDiv.append(bioCard);
}
