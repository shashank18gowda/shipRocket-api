const { default: axios } = require("axios");

const printManifest = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const orderDetails = {
      order_ids: 424348533,
    };

    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/manifests/print",
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

module.exports = { printManifest };
