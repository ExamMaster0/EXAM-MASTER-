// Remove this line: import Razorpay from 'razorpay'
// Add this instead:
let Razorpay;

if (typeof window === 'undefined') {
  // Server-side
  Razorpay = require('razorpay');
} else {
  // Client-side - Razorpay is available globally via script tag
  Razorpay = window.Razorpay;
}

export const razorpay = typeof window === 'undefined' ? new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
}) : null;

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  // For client-side, we'll handle this differently
  if (typeof window !== 'undefined') {
    // This function should only be called server-side
    throw new Error('createRazorpayOrder should be called server-side');
  }

  const options = {
    amount: amount * 100, // amount in paise
    currency,
    receipt: `receipt_${Date.now()}`,
  };
  
  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
}
