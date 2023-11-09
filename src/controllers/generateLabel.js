const { default: axios } = require("axios");

const generateLabel = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const orderDetails = {
      shipment_id: [422525128],
    };
    Z;
    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/courier/generate/label",
      orderDetails,
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

module.exports = { generateLabel };
