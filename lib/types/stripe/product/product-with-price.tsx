import Stripe from "stripe";

export interface StripeProductWithPrice extends Stripe.Product {
    price: Stripe.Price;
}
