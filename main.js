const url = "https://icanhazdadjoke.com/";
const teks = document.querySelector("#teks");
const getJoke = async () => {
  const dadJoke = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  try {
    const dadJokeJSON = await dadJoke.json();
    const data = await dadJokeJSON.joke;
    if (dadJoke.status === 200) {
      teks.innerText = data;
    } else {
      console.error("error");
    }
  } catch (err) {
    console.log(err);
  }
};

