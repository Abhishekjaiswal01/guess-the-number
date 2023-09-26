const account1 = {
  owner: "Abhishek Jaiswal",
  movements: [50000, 3400, -150, -790, -3200, 5800, -30, 1000, 100],
  intrestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "GAurav prajapati",
  movements: [5000, 3400, -150, -690, -2200, 7800, -30, 1000],
  intrestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Rahul kashyap",
  movements: [5000, 400, 450, -790, -3200, 5800, -30, 1000],
  intrestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Gaurav kalbhor",
  movements: [430, 1000, 700, 50, 90],
  intrestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// elements

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTranferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////////////////////////////////////

// display transaction dynamically.

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(mov)}₹</div>
        </div>
     `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// making username.

displayMovements(account1.movements);

const displayUserName = function (acc) {
  acc.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

displayUserName(accounts);
console.log(accounts);

// chaining methods.

// const mov = [100, 200, -300, -400, 600, 5000];
// const usdToinr = 82;

// const totalDeposit = mov
//   .filter(mov => mov > 0)
//   .map(mov => mov * usdToinr)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDeposit);

//////////////////////////////////////////////////////////////////////////////

const displaySummary = function (movements) {
  // deposit

  const insert = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${insert}₹`;

  // withdrawal

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  
  // interest

  const interest = movements
    .filter((mov) => mov > 0)
    .filter((mov) => mov > 100)
    .map((mov) => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}₹`;
};

displaySummary(account1.movements);

// calculate balance 

const displaybalance = function (movements) {
  const currentBalance = movements.reduce((acc , mov) => acc + mov,0)
  labelBalance.textContent = `${currentBalance}₹`
}

displaybalance(account1.movements)

// login btn

let currentAcc;
btnLogin.addEventListener("click", function(a){
  a.preventDefault()
  currentAcc = accounts.find(acc => acc.userName === inputLoginUsername.value)
  if(currentAcc.pin === Number(inputLoginPin.value)){

    // display user interface and message

    labelWelcome.textContent = `Welcome back ${currentAcc.owner.split(" ")[0]}`
    containerApp.style.opacity=100;

    // clear input field

    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    // 

  }
})

// 




