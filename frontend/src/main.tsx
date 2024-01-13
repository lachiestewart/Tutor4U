import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const { publishableKey } = await fetch("http://127.0.0.1:8000/payment/config").then(res => res.json());
const stripePromise = loadStripe(publishableKey);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
)

