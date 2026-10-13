import { useEffect, useState } from 'react';

/**
 * Demo gold-price widget. It simulates small price movements client-side.
 * To show real prices, replace `simulate` with a fetch to a price API
 * (ideally through a Vercel serverless function so your API key stays secret).
 */
const BASE_PRICE = 2650;

export default function GoldTicker() {
  const [price, setPrice] = useState(BASE_PRICE);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const simulate = () => {
      setPrice((p) => {
        const next = +(p + (Math.random() - 0.48) * 3).toFixed(2);
        setChange(+(((next - BASE_PRICE) / BASE_PRICE) * 100).toFixed(2));
        return next;
      });
    };
    const id = window.setInterval(simulate, 2500);
    return () => window.clearInterval(id);
  }, []);

  const up = change >= 0;

  return (
    <div className="ticker" role="status" aria-live="polite">
      <span className="ticker__label">Gold spot (demo)</span>
      <span className="ticker__price">
        ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        <small>/oz</small>
      </span>
      <span className={`ticker__change ${up ? 'is-up' : 'is-down'}`}>
        {up ? '▲' : '▼'} {Math.abs(change).toFixed(2)}%
      </span>
    </div>
  );
}
