import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const Payment = () => {

  const elements = useElements();
  const stripe = useStripe();
  const [amount, setAmount] = useState<number>(10);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setProcessing(true);

    console.log("amount", amount);

    if (!stripe || !elements || amount == 0) return;

    const response: Response = await fetch(`http://127.0.0.1:8000/payment/create?amount=${amount}`);

    const { error, clientSecret } = await response.json();

    if (error) {
      console.log("backend error", error);
      return;
    };

    console.log("clientSecret", clientSecret);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (stripeError) {
      console.log("stripeError", stripeError.message);
      return;
    };

    console.log("paymentIntent", paymentIntent);
    setProcessing(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="card-element">Card</label>
      <CardElement id="card-element" />

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" name="amount" onChange={handleChange} value={amount}></input>
      <br />
      <button>{processing ? "Processing..." : "Pay"}</button>
    </form>

  )
}

export default Payment