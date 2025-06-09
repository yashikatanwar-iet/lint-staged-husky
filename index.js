function greet(user) {
  const message =`Hello, ${user}`;
  return message;
}

const greeting = greet("Saloni");
console.log(greeting);

const obj = {
  name: "Placement App",
  version: "1.0.0",
};

console.log("App Info:", obj);

const numbers = [10, 20, 30];

function calculateAverage(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return sum / arr.length;
}

const average = calculateAverage(numbers);
console.log("Average:", average);

function getCompanyInfo(company) {
  if (!company || !company.name || !company.location) {
    return "Invalid company";
  }

  return `Company: ${company.name}, Location: ${company.location}`;
}

const company = {
  name: "Google",
  location: "Bangalore",
};

const companyInfo = getCompanyInfo(company);
console.log(companyInfo);