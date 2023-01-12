fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then((data) => data.json())
  .then((item) => {
    var price = "Fetching";
    item.forEach(function (coin) {
      if (coin.id === "ethereum") {
        price = coin.current_price;
      }
    });
    console.log(price);
    const ethUSD = "$ " + price;
    const targetElement = document.getElementById("ethUSD");
    targetElement.innerHTML = ethUSD;
  });
