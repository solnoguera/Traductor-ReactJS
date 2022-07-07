import getAxiosRequest from "./requestService";

export default async function saveLanguagesService() {
  if (typeof Storage == "undefined") {
    return {
      error:
        "Lo sentimos, el Storage es necesario para esta aplicación pero no es compatible en tu Navegador. Intenta utilizando otro.",
    };
  } else {
    const API_KEY = process.env.REACT_APP_BASE_API_KEY;
    const API_HOST = process.env.REACT_APP_BASE_API_HOST;
    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    };
    let data = await getAxiosRequest(options);
    data = data.data.data.languages;
    data[0] = data[0].language;
    const dataString = data.reduce((prev, curr) => prev + "," + curr.language);
    localStorage.setItem("languages", dataString);
  }
}
