console.log("whatsapp.js loaded");
/*
==========================================
CHALIMIDI SWEETS
WhatsApp Checkout
==========================================
*/

//const SHOP_PHONE = "919876543210"; // Replace with your friend's WhatsApp number
const SHOP_PHONE = "919949570732";

/* function generateWhatsAppMessage() {
  if (cart.length === 0) {
    showToast("Your cart is empty.");

    return "";
  }

  let message = "";

  message += "🍬 *CHALIMIDI SWEETS*%0A";
  message += "%0A";

  message += "Hello,%0A";
  message += "%0A";

  message += "I would like to place the following order.%0A";
  message += "%0A";

  let grandTotal = 0;

  cart.forEach((item, index) => {
    grandTotal += item.total;

    message += `${index + 1}. ${item.name}%0A`;

    message += `Quantity : ${item.quantityLabel}%0A`;

    message += `Amount : ₹${item.total}%0A`;

    message += "%0A";
  });

  message += "----------------------------%0A";

  message += `Grand Total : ₹${grandTotal}%0A`;

  message += "----------------------------%0A";

  message += "%0A";

 const customerName = document.getElementById("customerName").value.trim();

 const customerPhone = document.getElementById("customerPhone").value.trim();

 const customerAddress = document
   .getElementById("customerAddress")
   .value.trim();

 message += `Name : ${customerName}%0A`;

 message += `Phone : ${customerPhone}%0A`;

 message += `Address : ${customerAddress}%0A`;

  message += "Preferred Delivery Date : %0A";

  message += "%0A";

  message += "Please confirm availability.%0A";

  message += "Thank you.";

  return message;
} */


function generateWhatsAppMessage() {
  if (cart.length === 0) {
    showToast("Your cart is empty.");

    return "";
  }

  const customerName = document.getElementById("customerName").value.trim();

  const customerPhone = document.getElementById("customerPhone").value.trim();

  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  //const deliveryDate =
  //  document.getElementById("deliveryDate")?.value || "Not Specified";
  //---------------------------------
  const now = new Date();

  const orderDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",

    month: "short",

    year: "numeric",
  });

  const orderTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",

    minute: "2-digit",
  });
  //---------------------------------

  let grandTotal = 0;

  let message = `*CHALIMIDI SWEETS*

Hello,

I would like to place the following order.

`;

  cart.forEach((item, index) => {
    grandTotal += item.total;

    message += `${index + 1}. ${item.name}
Quantity : ${item.quantityLabel}
Amount : ₹${item.total.toFixed(2)}
----------------------------
`;
  });

  message += `
Grand Total
₹${grandTotal.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━

Customer Details

Name : ${customerName}
Phone : +91 ${customerPhone}
Address : ${customerAddress}
Order Date : ${orderDate}
Order Time : ${orderTime}
━━━━━━━━━━━━━━━━━━━━

Please confirm the availability.

Thank you.`;

  return encodeURIComponent(message);
}
/* function placeWhatsAppOrder() {
  const customerName = document.getElementById("customerName").value.trim();

  const customerPhone = document.getElementById("customerPhone").value.trim();

  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  if (!customerName || !customerPhone || !customerAddress) {
    showToast("Please enter your details.");

    return;
  }
  const message = generateWhatsAppMessage();

  if (!message) return;

  const url = `https://wa.me/${SHOP_PHONE}?text=${message}`;

  window.open(url, "_blank");
} */
function placeWhatsAppOrder() {
  const customerName = document.getElementById("customerName").value.trim();

  const customerPhone = document.getElementById("customerPhone").value.trim();

  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  //const deliveryDate = document.getElementById("deliveryDate")?.value || "";

  //if (!customerName || !customerPhone || !customerAddress || !deliveryDate) {
  if (!customerName || !customerPhone || !customerAddress) {
    showToast("Please complete all customer details.");

    return;
  }

  const message = generateWhatsAppMessage();

  if (!message) return;

  const url = `https://wa.me/${SHOP_PHONE}?text=${message}`;

  window.open(url, "_blank");
}
const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", placeWhatsAppOrder);
}
