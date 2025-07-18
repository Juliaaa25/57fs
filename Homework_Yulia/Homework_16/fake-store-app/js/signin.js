const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userData = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  console.log(userData); //

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    console.log("Token:", data.access_token);

    loginMessage.textContent = "Login successful!";
  } catch (error) {
    loginMessage.textContent = "Login error. Try again.";
    console.error(error);
  }
});
