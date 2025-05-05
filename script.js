// script.js

document.getElementById('predictForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const sex = document.getElementById('sex').value;
    const age = document.getElementById('age').value;
    const cp = document.getElementById('cp').value;
    const trestbps = document.getElementById('trestbps').value;
    const chol = document.getElementById('chol').value;
    const fbs = document.getElementById('fbs').value;
  
    // Dummy prediction logic
    const risk = Math.floor(Math.random() * 6); // Risk level from 0-5
  
    document.getElementById('result').innerText = `Hello ${name}, your heart disease risk level is:`;
    document.getElementById('riskLevel').innerText = `Risk Level: ${risk}`;
  
    const tip = `Stay positive and monitor your health regularly.`;
    const dietChart = `
      Recommended Diet:
      - Fresh fruits and vegetables
      - Whole grains
      - Lean proteins (chicken, fish, legumes)
      - Limit sugar and salt
      - Drink plenty of water
    `;
  
    document.getElementById('healthyTip').innerText = tip;
    document.getElementById('dietChart').innerText = dietChart;
  
    // Save result to history list
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.innerHTML = `${name} - Risk: ${risk} <span class="delete-btn" onclick="deleteHistory(this)">Delete</span>`;
    historyList.appendChild(li);
  });
  
  function deleteHistory(element) {
    element.parentElement.remove();
  }
  
  document.getElementById('saveResult').addEventListener('click', function () {
    alert('Result saved successfully!');
  });
  
  document.getElementById('generateReport').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const riskLevel = document.getElementById('riskLevel').innerText;
    const reportContent = `Heart Disease Report for ${name}\n${riskLevel}`;
  
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${name}_Heart_Report.txt`;
    a.click();
  });
  localStorage.setItem('name', 'John Doe');
localStorage.setItem('gender', 'Male');
localStorage.setItem('age', '30');

function saveProfile() {
  const name = document.getElementById('inputName').value.trim();
  const gender = document.getElementById('inputGender').value;
  const age = document.getElementById('inputAge').value.trim();

  if (name && gender && age) {
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('age', age);
    alert('Profile saved!');
    location.reload(); // Refresh to update the display
  } else {
    alert('Please fill out all fields.');
  }
}

