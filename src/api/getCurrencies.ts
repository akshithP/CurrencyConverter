const getCurrencies = async () => {
  // Get requests using the fetch funtion
  const url = "https://currency-converter5.p.rapidapi.com/currency/list";
  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    } as HeadersInit,
  };

  try {
    const response = await fetch(url, options);
    const res = await response.json();
    return res.currencies;
  } catch (err) {
    console.log(err);
  }
};

export default getCurrencies;
