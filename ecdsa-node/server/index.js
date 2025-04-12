const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "03d83d507cc330692df252226f14fb496c6cc1f5f2952660cca23cd7187bf52158": 100,
  "030faf8cd8aa19e99239da4828b0074aae228f450a3fff406ccae0aa5f32f85e79": 50,
  "039530fb2de8ad9fc5e17dc4c5c61b66c7d6aab27684e66fc8c641e64dccede299": 75,
  "02285ffcaa78ccbcea2c776969517affd2e5efe8450dffffc24ea29d0a68a1f2bc": 439,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;
  console.log("req.body: ", req.body);
  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 1000;
  }
}
