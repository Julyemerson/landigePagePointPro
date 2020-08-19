//Global site tag (gtag.js) - Google Ads: 963647198

const $btnCompra = document.querySelector('[data-js="btnCompra"]');
$btnCompra.addEventListener("click", snippetTagGoogle);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-963647198");

function snippetTagGoogle() {
  gtag_report_conversion();
}

function gtag_report_conversion(url) {
  const callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-963647198/Bov7COTx6dsBEN6twMsD",
    transaction_id: "",
    event_callback: callback,
  });
  return false;
}
