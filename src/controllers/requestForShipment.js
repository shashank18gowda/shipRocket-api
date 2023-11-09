const { default: axios } = require("axios");

const requestShipment = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const shipDetails = {
      shipment_id: "422266695",
    };

    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/courier/generate/pickup",
      shipDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while tracking the shipment." });
  }
};

module.exports = { requestShipment };
