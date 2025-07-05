import type { CheckoutInfo } from "../types";

export const handleOrderSubmission = (info: CheckoutInfo, total: number) => {
  const confirmationMessage = `Your Order confirmed! 🎉

Delivery to: ${info.name}
Phone Number: ${info.phone}
Address: ${info.address}
Total: $${total.toFixed(2)}

Estimated delivery: 25-30 minutes`;

  alert(confirmationMessage);
};

export const validateCheckoutInfo = (info: CheckoutInfo): boolean => {
  return !!(info.name.trim() && info.address.trim() && info.phone.trim());
};
