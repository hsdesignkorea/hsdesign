const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

let myChart;

const checkValues = () => {
  let loanAmountValue = loanAmountInput.value;
  let interestRateValue = interestRateInput.value;
  let loanTenureValue = loanTenureInput.value;

  let regexNumber = /^[0-9]+$/;
  if (!loanAmountValue.match(regexNumber)) {
    loanAmountInput.value = "10000";
  }

  if (!loanTenureValue.match(regexNumber)) {
    loanTenureInput.value = "12";
  }

  let regexDecimalNumber = /^(\d*\.)?\d+$/;
  if (!interestRateValue.match(regexDecimalNumber)) {
    interestRateInput.value = "7.5";
  }
};

// const displayChart = (totalInterestPayableValue) => {
//   const ctx = document.getElementById("myChart").getContext("2d");
//   myChart = new Chart(ctx, {
//     type: "pie",
//     data: {
//       labels: ["Total Interest", "Principal Loan Amount"],
//       datasets: [
//         {
//           data: [totalInterestPayableValue, loanAmount],
//           backgroundColor: ["#e63946", "#14213d"],
//           borderWidth: 0,
//         },
//       ],
//     },
//   });
// };

const updateChart = (totalInterestPayableValue) => {
  myChart.data.datasets[0].data[0] = totalInterestPayableValue;
  myChart.data.datasets[0].data[1] = loanAmount;
  myChart.update();
};

const refreshInputValues = () => {
  loanAmount = parseFloat(loanAmountInput.value);
  interestRate = parseFloat(interestRateInput.value);
  loanTenure = parseFloat(loanTenureInput.value);
  interest = interestRate / 12 / 100;
};

const calculateEMI = () => {
  checkValues();
  refreshInputValues();
  let emi =
    loanAmount *
    interest *
    (Math.pow(1 + interest, loanTenure) /
      (Math.pow(1 + interest, loanTenure) - 1));

  return emi;
};

const updateData = (emi) => {
  loanEMIValue.innerHTML = Math.round(emi);

  let totalAmount = Math.round(loanTenure * emi);
  totalAmountValue.innerHTML = totalAmount;

  let totalInterestPayable = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = totalInterestPayable;

  // if (myChart) {
  //   updateChart(totalInterestPayable);
  // } else {
  //   displayChart(totalInterestPayable);
  // }
};

const init = () => {
  let emi = calculateEMI();
  updateData(emi);

  // 
  let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);
  // 
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var elem2 = document.getElementById("myComment");
    var elem3 = document.getElementById("myResult");
    var elem4 = document.getElementById("myResult2");
    
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
        // elem.style.width = loanAmount*width/50000 + "%";
        elem.style.width = "50" + "%";
        // elem.innerHTML = "투자전 : " +  loanAmount/1000  + "원";ㅋ
        elem.innerHTML = loanAmount/1000  + "원";
        // elem2.style.width = "50" + "%";
        elem2.innerHTML = "환급액" + " : " ;
        
        // elem4.style.width = "50" + "%";
        // elem4.innerHTML = "환급액" + " : " ;
        elem3.innerHTML = width*loanAmount*100 + "원";
        elem4.innerHTML = width*loanAmount*0.5 + "원";
        // loanEMIValue.innerHTML = Math.round(emi);
      }
    }
  }

};

init();

calculateBtn.addEventListener("click", init);






var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var elem2 = document.getElementById("myComment");
    var elem4 = document.getElementById("myResult");
    
    var width = 10;
    var id = setInterval(frame, 8);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
        elem.style.width = "50" + "%";
        elem.innerHTML = width  + "%";
        elem2.style.width = "50" + "%";
        // elem2.innerHTML = width*120400  + "원";
        elem2.innerHTML = Math.round(emi)  + "원";
        elem4.style.width = "50" + "%";
        // elem4.innerHTML = "환급액" + " : " ;
        elem4.innerHTML = "환급액" + " : " + Math.round(emi);
        // loanEMIValue.innerHTML = Math.round(emi);
      }
    }
  }
}





