// ✅ JavaScript Validation for Library Login Form
document.getElementById("libraryForm").addEventListener("submit", function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const password = this.password.value.trim();
  const age = this.age.value.trim();

  if (!name || !email || !password || !age) {
    e.preventDefault();
    alert("⚠️ Please fill in all fields before submitting!");
    return;
  }

  if (password.length < 6) {
    e.preventDefault();
    alert("🔒 Password must be at least 6 characters long.");
    return;
  }

  alert("✅ Login successful! Redirecting to About page...");
});
