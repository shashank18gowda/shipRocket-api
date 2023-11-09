const axios = require("axios");

const trackShippment = async (req, res) => {
  const token = req.headers.authorization;

  const shipment_id = req.params.id;

  axios
    .get(
      `https://apiv2.shiprocket.in/v1/external/courier/track/shipment/${shipment_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error.stack);
      res
        .status(500)
        .json({ error: "An error occurred while tracking the shipment." });
    });
};

module.exports = { trackShippment };
