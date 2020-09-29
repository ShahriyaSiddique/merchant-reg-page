const merchantForm = document.getElementById("marchent-info");
const userForm = document.getElementById("user-info");
const bkashForm = document.getElementById("payment-info1");
const bankForm = document.getElementById("payment-info2");
const tab1 = document.getElementById("p-1");
const tab2 = document.getElementById("p-2");
const tab3 = document.getElementById("p-3");
const progress = document.getElementById("progress");
const bike = document.getElementById("bike");

function removeMyClass(myElement, myClassName) {
  myElement.classList.remove(myClassName);
}
function addMyClass(myElement, myClassName) {
  myElement.classList.add(myClassName);
}

function fadeOutPlusHide(fadeTarget) {
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.05;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.classList.add("display-none");
    }
  }, 50);
}

function backTo1() {
  progress.style.animation = "kf-progress-50-p-back 1s linear forwards";
  bike.style.animation = "kf-bike-50-p-back 1s linear forwards";
  fadeOutPlusHide(userForm);
  fadeOutPlusHide(bkashForm);
  fadeOutPlusHide(bankForm);
  merchantForm.style.opacity = 1;
  merchantForm.classList.remove("display-none");
}
function stage2() {
  progress.style.animation = "kf-progress-50-p 1s linear forwards";
  bike.style.animation = "kf-bike-50-p 1s linear forwards";
  fadeOutPlusHide(merchantForm);
  fadeOutPlusHide(bkashForm);
  fadeOutPlusHide(bankForm);
  userForm.style.opacity = 1;
  userForm.classList.remove("display-none");
}
function backTo2() {
  progress.style.animation = "kf-progress-100-p-back 1s linear forwards";
  bike.style.animation = "kf-bike-100-p-back 1s linear forwards";
  fadeOutPlusHide(merchantForm);
  fadeOutPlusHide(bkashForm);
  fadeOutPlusHide(bankForm);
  userForm.style.opacity = 1;
  userForm.classList.remove("display-none");
}
function stage3() {
  progress.style.animation = "kf-progress-100-p 1s linear forwards";
  bike.style.animation = "kf-bike-100-p 1s linear forwards";
  fadeOutPlusHide(merchantForm);
  fadeOutPlusHide(userForm);
  fadeOutPlusHide(bankForm);
  bkashForm.style.opacity = 1;
  bkashForm.classList.remove("display-none");
}
function backTo3() {
  fadeOutPlusHide(merchantForm);
  fadeOutPlusHide(userForm);
  fadeOutPlusHide(bankForm);
  bkashForm.style.opacity = 1;
  bkashForm.classList.remove("display-none");
}
function stage4() {
  fadeOutPlusHide(merchantForm);
  fadeOutPlusHide(userForm);
  fadeOutPlusHide(bkashForm);
  bankForm.style.opacity = 1;
  bankForm.classList.remove("display-none");
}
