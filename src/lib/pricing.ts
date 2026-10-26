export const LIFETIME_PRICE = 199;
export const PROMO_PRICE = 199;
export const ORIGINAL_PRICE = 199;

export type PricingInfo = {
  price: number;
  originalPrice: number;
  priceFormatted: string;
  originalPriceFormatted: string;
  isOfferActive: boolean;
  timeLeftMs: number;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    formatted: string;
  };
};

export function computePricing(): PricingInfo {
  const price = LIFETIME_PRICE; // Always 199 permanent lifetime subscription
  const originalPrice = ORIGINAL_PRICE;

  return {
    price,
    originalPrice,
    priceFormatted: `₹${price}`,
    originalPriceFormatted: `₹${originalPrice}`,
    isOfferActive: true,
    timeLeftMs: 0,
    countdown: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formatted: "Lifetime Access",
    },
  };
}

export function usePricing(): PricingInfo {
  // Returns static, memoized pricing info — no aggressive intervals or re-render churn
  return computePricing();
}
