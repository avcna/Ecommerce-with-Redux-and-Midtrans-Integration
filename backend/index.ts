// backend/index.js

const midtransClient = require('midtrans-client');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      // allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

// Create Snap API instance
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-X8TSIcCP3H8Xd0wZ1G38yihb'
});

app.post('/create-transaction', (req, res) => {
    let parameter = {
        "transaction_details": {
            "order_id": req.body.order_id,
            "gross_amount": req.body.gross_amount
        },
        "credit_card": {
            "secure": true
        },
        "customer_details": {
            "name": req.body.customer_name
        }
    };

    snap.createTransaction(parameter)
        .then((transaction) => {
            res.json({ transactionToken: transaction.token, redirect_url:transaction.redirect_url });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


