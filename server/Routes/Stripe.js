import express from 'express'
import Stripe from 'stripe';

const STRIPE_KEY = 'sk_test_51M2MkDJHehz4UJs4cEBj8Fc512ekfEnJ5FTXi7doekhzXbeabTBIu7ckS9w0BKFXX3BK3ugCUFTQaiz8rDcvDhSU00YI4QGx0Q'

const stripe = new Stripe(STRIPE_KEY);

const router = express.Router()

router.post('/payment', (res,res) => {
    stripe.charges.create({
        source : req.body.tokenId, // stripe return tokenId when user make payment
        amount : req.body.amount,
        currency : "usd"
    } , (stripeErr , stripeRes) => {
        if(stripeErr)
        {
            res.status(500).json(stripeErr)
        }
        else{
            res.status(200).json(stripeRes)
        }
    })
})