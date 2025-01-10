const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

async function fetchParkingData() {
  const url = "https://geoportal.wiesbaden.de/parkleitsystem/parkhaeuser.php";

  try {
    // Fetch the HTML content of the webpage
    const { data: html } = await axios.get(url);

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

    // Define an array to store parking data
    const parkingData = [];

    // Example selector: Adjust this based on the actual HTML structure
    $("table tr").each((index, element) => {
      if (index === 0) return; // Skip header row if present

      const name = $(element).find("td:nth-child(1)").text().trim(); // Parking lot name
      const availableSpaces = $(element).find("td:nth-child(2)").text().trim(); // Available spaces

      if (name && availableSpaces) {
        parkingData.push({
          name,
          availableSpaces: parseInt(availableSpaces, 10),
        });
      }
    });

    return parkingData;
  } catch (error) {
    console.error("Error fetching or parsing data:", error.message);
    return [];
  }
}

app.get("/api/parking", async (req, res) => {
  const parkingData = await fetchParkingData();
  res.json(parkingData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
