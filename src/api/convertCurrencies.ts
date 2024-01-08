// Type of the values received
type ConvertProps = {
  fromCode: any;
  toCode: any;
  amount: any;
};

const convertCurrencies = async ({
  fromCode,
  toCode,
  amount,
}: ConvertProps) => {
  // Get requests using the fetch funtion
  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCode}&to=${toCode}&amount=${amount}`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0e44672082msh03a40182f751cf6p17fa5cjsn5351e23bcdcc",
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    } as HeadersInit,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default convertCurrencies;
