// Type of the values received
type ConvertProps = {
  fromCode: string;
  toCode: string;
  amount: number;
};

const getCurrencies = async ({ fromCode, toCode, amount }: ConvertProps) => {
  // Get requests using the fetch funtion
  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCode}&to=${toCode}&amount=${amount}&amount`;
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
