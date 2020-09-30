$(document).ready(function () {
  $("#marchentToUser").click(function () {
    progress.style.animation = "kf-progress-50-p .5s linear forwards";
    bike.style.animation = "kf-bike-50-p .5s linear forwards";
    $("#marchent-info").hide();
    $("#user-info").show();
  });

  $("#userToPayment").click(function () {
    progress.style.animation = "kf-progress-100-p .5s linear forwards";
    bike.style.animation = "kf-bike-100-p .5s linear forwards";
    // $("#marchent-info").hide();
    $("#user-info").hide();
    $("#payment-info").show();
  });

  $("#userToMerchant").click(function () {
    progress.style.animation = "kf-progress-50-p-back .5s linear forwards";
    bike.style.animation = "kf-bike-50-p-back .5s linear forwards";
    $("#user-info").hide();
    $("#marchent-info").show();
  });

  $("#paymentToUser").click(function () {
    progress.style.animation = "kf-progress-100-p-back .5s linear forwards";
    bike.style.animation = "kf-bike-100-p-back .5s linear forwards";
    $("#payment-info").hide();
    $("#user-info").show();
  });
});

function paymentChange() {
  var select = document.getElementById("payment-method").value;
  if (select == "bkash") {
    $(".bkash").show();
    $(".bank").hide();
  }
  if (select == "bank") {
    $(".bkash").hide();
    $(".bank").show();
  }
}
