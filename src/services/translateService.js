import getAxiosRequest from "./requestService";

export default async function translate (text, source, target) {
    const API_KEY = process.env.REACT_APP_BASE_API_KEY;
    const API_HOST = process.env.REACT_APP_BASE_API_HOST;
    console.log({text})
    console.log({source})
    console.log({target})
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", text);
    encodedParams.append("target", target);
    encodedParams.append("source", source);
  
    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
      data: encodedParams,
    };

    const data = await getAxiosRequest(options)
    return data.data.data.translations[0].translatedText
}