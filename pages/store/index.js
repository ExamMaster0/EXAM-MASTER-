// Change this import:
import { createRazorpayOrder } from '../../lib/razorpay'
// To:
import { createRazorpayOrder } from '../../lib/razorpay'
// (Yeh already sahi hai, lekin client-side handling add karein)

// handlePurchase function ko update karein:
const handlePurchase = async (pdf) => {
  if (!user) {
    alert('Please login to purchase PDFs');
    window.location.href = '/auth';
    return;
  }

  try {
    // Server-side API call to create order
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: pdf.price,
        currency: 'INR',
        pdf_id: pdf.id,
      }),
    });

    const order = await response.json();

    if (!order.id) {
      throw new Error('Failed to create order');
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'ExamMaster',
      description: pdf.title,
      order_id: order.id,
      handler: async function (response) {
        // Payment verification
        const verifyResponse = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            pdf_id: pdf.id,
            user_id: user.id,
          }),
        });

        const result = await verifyResponse.json();

        if (result.success) {
          await supabase
            .from('purchases')
            .insert([
              {
                user_id: user.id,
                pdf_id: pdf.id,
                amount: pdf.price,
                payment_id: response.razorpay_payment_id,
              },
            ]);

          loadData();
          alert('Purchase successful! PDF unlocked for download.');
        } else {
          alert('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: user.email,
        email: user.email,
      },
      theme: {
        color: '#4f46e5',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error('Payment error:', error);
    alert('Payment failed. Please try again.');
  }
};
