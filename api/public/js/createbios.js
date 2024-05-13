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
      console.log(err);
      console.log("If you see this message, tell Leah she wrote bad code!");
    });
}

function createBioElement(element) {
  let bioCard = document.createElement("div");
  bioCard.classList.add("bio-card"); // Add a class for styling

  let bioImage = document.createElement("img");
  bioImage.src = element.img;
  bioImage.alt = `Picture of ${element.name}`;
  bioCard.append(bioImage);
  bioImage.classList.add("bio-img"); // Add a class for styling

  let bioName = document.createElement("h2");
  bioName.textContent = element.name;

  let bioContent = document.createElement("p");
  bioContent.textContent = element.bio;
  bioContent.classList.add("bio-text"); // Add a class for styling

  bioCard.append(bioName);
  bioCard.append(bioContent);

  bioDiv.append(bioCard);
}

/*    {
      "name": "The Beast. He Who Watches Over the Unending Sea, He Whose Roar Shakes the Heavens, The Winnower, May His Name be Forever Praised and Dreaded in Equal Measure, Oh Great One.",
      "bio": "stinky"
    },*/
