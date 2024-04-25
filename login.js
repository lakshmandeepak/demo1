const studentsBtn = document.getElementById("students-btn");
const staffsBtn = document.getElementById("staffs-btn");
const adminBtn = document.getElementById("admin-btn");

studentsBtn.addEventListener("click", () => {
  location.href = "https://www.bitsathy.ac.in/";
});

staffsBtn.addEventListener("click", () => {
  location.href = "https://www.example.com/staffs";
});

adminBtn.addEventListener("click", () => {
  location.href = "https://www.example.com/admin";
});