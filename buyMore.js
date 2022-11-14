let HTML = ``;
function generateTable() {
  for (let i = 0; i < companies.length; i++) {
    let company = companies[i];
    HTML =+
      `<tr>
    <td>${company.ticker}</td>
    <td>${company.price}</td>
    <td>${company.amount}</td>
    <td>$${company.amount * company.price}</td>
    <td><button onclick="buyStock(${i})">Buy More</button></td>
  </tr>`
  }
  document.getElementById('TB').innerHTML = HTML;
}

generateTable();


function buyStock(index) {
  let amount = Number(
    prompt(`How many ${companies[index].ticker} stocks Whuld you like to buy?`)
  );
  if (isNaN(amount)) {
    alert(`Please enter a right input!`)
  }
  else {
    companies[index].amount =+ amount;
  }

}

buyStock();