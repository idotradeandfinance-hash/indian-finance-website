exports.handler = async function () {
  const apiKey = process.env.TWELVE_DATA_KEY;

  const url = `https://api.twelvedata.com/price?symbol=NIFTYBEES&exchange=NSE&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
