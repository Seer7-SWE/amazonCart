/// checkout.jsx
const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = res.data.publishable_key;
  return loadStripe(publishableKey);
};
