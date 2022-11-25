let api_key = "3leWAOkbFB4T6oiWcoxqtRZqcZbLI2DV";

const main = async () => {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&rating=g`
    );

    let data = await response.json();
    append(data.data);
    console.log(data.data);
  } catch (e) {
    console.log(e);
  }
};
main();

const append = async (data) => {
  data.forEach((e) => {
    let gif = document.getElementById("gif");

    let sticker = document.getElementById("sticker");

    let img = document.createElement("img");
    img.src = e.images.downsized.url;
    img.addEventListener("click", () => {
      detail_gif(e.id);
    });
    console.log("data");
    gif.append(img);
    sticker.append(name, img);
  });
};

//

const detail_gif = (id) => {
  localStorage.setItem("details", JSON.stringify(id));
  window.location.href = "./gif_details.html";
};

const random = async () => {
  let gif = document.getElementById("gif");
  gif.innerHTML = null;
  try {
    let res =
      await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&rating=g

    `);

    let result = await res.json();
    console.log(result);

    let img = document.createElement("img");
    img.src = result.data.images.downsized.url;

    img.addEventListener("click", () => {
      detail_gif(result.data.id);
    });
    console.log(result.data.images.downsized.url);
    gif.append(img);
  } catch (e) {
    console.log(e);
  }
};

const categories = async () => {
  let gif = document.getElementById("gif");
  gif.innerHTML = null;

  let sorting = document.getElementById("sorting");
  sorting.innerHTML = null;

  try {
    let res = await fetch(
      `https://api.giphy.com/v1/gifs/categories?api_key=${api_key}`
    );
    let result = await res.json();
    console.log("result:", result);

    localStorage.setItem("categories", JSON.stringify(result.data));

    let sorting_Z_A = document.createElement("button");
    sorting_Z_A.innerText = "Sort Z-A";
    sorting.append(sorting_Z_A);

    let sorting_A_Z = document.createElement("button");
    sorting_A_Z.innerText = "Sort A-Z";
    sorting.append(sorting_A_Z);
    let dum;
    sorting_Z_A.onclick = () => {
      sorting_cat((dum = false));
    };

    sorting_A_Z.onclick = () => {
      sorting_cat((dum = true));
    };

    //forEach is for array of object and for in for to access data in obj

    // for(let i in result.data){
    //     let name = document.createElement("p");
    //     name.innerHTML = result.data;
    // }

    result.data.forEach((e) => {
      let name = document.createElement("p");
      name.innerHTML = e.name;
      console.log("name:", name);
      let image = document.createElement("img");
      image.src = e.gif.images.downsized.url;
      image.addEventListener("click", () => {
        detail_gif(e.gif.id);
      });
      gif.append(name, image);
    });
  } catch (e) {
    console.log("e:", e);
  }
};

const sorting_cat = (dum) => {
  let data = JSON.parse(localStorage.getItem("categories"));

  if (dum == false) {
    data = data.reverse();
  }

  //console.log("data:", data);

  let gif = document.getElementById("gif");
  gif.innerHTML = null;

  data.forEach((e) => {
    let name = document.createElement("p");
    name.innerHTML = e.name;
    console.log("name:", name);
    let image = document.createElement("img");
    image.src = e.gif.images.downsized.url;
    image.addEventListener("click", () => {
      detail_gif(e.gif.id);
    });
    gif.append(name, image);
  });
};

const gif = async () => {
  try {
    let gif = document.getElementById("gif");
    gif.innerHTML = null;

    let query = document.getElementById("search").value;

    if (query == "") {
      alert("Please provide your input");
    }

    let res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    );

    let data = await res.json();
    console.log("data:", data);

    data.data.forEach((e) => {
      let name = document.createElement("p");
      name.innerHTML = e.title;
      console.log("name:", name);
      let image = document.createElement("img");
      image.src = e.images.downsized.url;
      image.addEventListener("click", () => {
        detail_gif(e.id);
      });
      gif.append(name, image);
    });
  } catch (e) {
    console.log("e:", e);
  }
};

const sticker = async () => {
  try {
    let sticker = document.getElementById("sticker");
    sticker.innerHTML = null;

    let query = document.getElementById("search").value;
    query.innerHTML = null;

    if (query == "") {
      alert("Please provide your input");
    }

    let res = await fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=${api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    );

    let data = await res.json();
    console.log("data:", data);

    data.data.forEach((e) => {
      let name = document.createElement("p");
      name.innerHTML = e.title;
      console.log("name:", name);
      let image = document.createElement("img");
      image.src = e.images.downsized.url;
      image.addEventListener("click", () => {
        detail_gif(e.id);
      });
      sticker.append(name, image);
    });
  } catch (e) {
    console.log("e:", e);
  }
};

const translate = async () => {
  try {
    let gif = document.getElementById("gif");
    gif.innerHTML = null;

    let query = document.getElementById("search").value;

    if (query == "") {
      alert("Please provide your input");
    }

    let res = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${query}&limit=25&offset=0&rating=g&lang=en`
    );

    let data = await res.json();
    console.log("data:", data);

    data.data.forEach((e) => {
      let name = document.createElement("p");
      name.innerHTML = e.title;
      console.log("name:", name);
      let image = document.createElement("img");
      image.src = e.images.downsized.url;
      image.addEventListener("click", () => {
        detail_gif(e.id);
      });
      gif.append(name, image);
    });
  } catch (e) {
    console.log("e:", e);
  }
};
