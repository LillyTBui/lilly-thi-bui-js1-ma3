//Question 2

const API_URL = "https://api.rawg.io/api/games?key=2d92eb2091f640b5b18969241a1d2394&dates=2019-01-01,2019-12-31&ordering=-rating";
const resultContainer = document.querySelector(".list");
const loadingElement = document.querySelector(".loading");
const errorMessage = document.querySelector(".error");

async function getList() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    loadingElement.innerHTML = "";
    resultContainer.innerHTML = `<thead>
        <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Number of tags</th>
        </tr>
        </thead>`;

    for (let i = 0; i < result.results.length; i++) {
      const name = result.results[i].name;
      const rating = result.results[i].rating;
      const numberOfTags = result.results[i].tags.length;

      if (i == 8) {
        break;
      }

      resultContainer.innerHTML += `<tr>
            <td>${name}</td>
            <td>${rating}</td>
            <td>${numberOfTags}</td>
            </tr>`;
    }
  } catch (error) {
    errorMessage.innerHTML = "An error has occured. Unable to load list.";
  }
}

getList();
