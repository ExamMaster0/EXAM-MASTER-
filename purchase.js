import { SUPABASE_URL, SUPABASE_ANON_KEY, RAZORPAY_KEY_ID } from "./config.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.onload = async () => {
  const pdfId = localStorage.getItem("selected_pdf_id");
  const pdfTitle = localStorage.getItem("selected_pdf_title");
  const pdfPrice = localStorage.getItem("selected_pdf_price");
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: pdfPrice * 100,
    currency: "INR",
    name: "ExamMaster",
    description: pdfTitle,
    handler: async function (response) {
      await supabase.from("purchase").insert([
        { user_id: user.id, pdf_id: pdfId, payment_status: "paid" }
      ]);
      alert("Payment successful! Your PDF is ready to download.");
      const { data } = await supabase.from("pdfs").select("file_url").eq("id", pdfId).single();
      window.location.href = data.file_url;
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
};