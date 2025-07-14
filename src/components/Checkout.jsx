import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm.jsx';

const [stripePromise, setStripePromise] = useState(null);

useEffect(() => {
  async function load() {
    const res = await axios.get("/api/publishable-key");
    const stripe = await loadStripe(res.data.publishable_key);
    setStripePromise(stripe);
  }
  load();
}, []);

const Checkout = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setupStripe() {
      const keyRes = await axios.get("/api/publishable-key");
      const stripe = await loadStripe(keyRes.data.publishable_key);
      setStripePromise(stripe);

      const intentRes = await axios.post("/api/create-payment-intent", {});
      setClientSecret(intentRes.data.client_secret);
      setLoading(false);
    }

    setupStripe();
  }, []);

  if (loading || !stripePromise) {
    return <h1>Loading...</h1>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
