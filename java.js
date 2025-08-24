async function lookupPhone() {
  const phone = document.getElementById("phone").value.trim();
  const resultEl = document.getElementById("result");
  resultEl.className = "alert";

  if (!phone) {
    resultEl.textContent = "Please enter a phone number.";
    resultEl.classList.add("alert-danger");
    return;
  }

  const apiKey = "YOUR_API_KEY"; // Replace with your API key
  const url = `https://api.apilayer.com/number_verification/validate?number=${encodeURIComponent(phone)}`;

  try {
    const response = await fetch(url, { headers: { apikey: apiKey } });
    if (!response.ok) {
      throw new Error("Lookup request failed");
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.info || "Lookup failed");
    }

    const info = [
      `Country: ${data.country_name || "N/A"}`,
      `Location: ${data.location || "N/A"}`,
      `Carrier: ${data.carrier || "N/A"}`,
      `Line type: ${data.line_type || "N/A"}`,
      `In use: ${data.valid ? "Yes" : "No"}`,
    ].join("<br>");

    resultEl.innerHTML = info;
    resultEl.classList.add(data.valid ? "alert-success" : "alert-danger");
  } catch (err) {
    resultEl.textContent = err.message;
    resultEl.classList.add("alert-danger");
  }
}

