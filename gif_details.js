let api_key = "3leWAOkbFB4T6oiWcoxqtRZqcZbLI2DV";

const details = async () => {
  try {
    let id = JSON.parse(localStorage.getItem("details"));

    let res = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`
    );

    let result = await res.json();

    console.log(result);
    append(result);
  } catch (e) {
    console.log(e);
  }
};

details();

const append = (result) => {
  let details = document.getElementById("details");

  let img = document.createElement("img");

  img.src = result.data.images.original.url;
  let p = document.createElement("p");
  p.innerHTML = result.data.title;
  details.append(img, p);
};
