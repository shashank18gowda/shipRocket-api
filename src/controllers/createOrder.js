const { default: axios } = require("axios");

const orderDetails = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const orderDetails = {
      order_id: "666999666",
      order_date: "2023-11-07 13:25",
      pickup_location: "moodbidre",

      comment: "test order",
      billing_customer_name: "rahul",
      billing_last_name: "",
      billing_address: "ajith nagara",
      billing_address_2: "",
      billing_city: "belthangady",
      billing_pincode: "574240",
      billing_state: "delhi",
      billing_country: "india",
      billing_email: "raushanra4@gmail.com",
      billing_phone: "9721562372",
      shipping_is_billing: 1,
      shipping_customer_name: "",
      shipping_last_name: "",
      shipping_address: "bdkwdqdqdqwbkjkj",
      shipping_address_2: "",
      shipping_city: "",
      shipping_pincode: "",
      shipping_country: "",
      shipping_state: "",
      shipping_email: "",
      shipping_phone: "",
      order_items: [
        {
          name: "shoes",
          sku: "shoes455",
          units: "1",
          selling_price: "500",
          discount: "100",
          tax: "",
          hsn: "",
        },
      ],
      payment_method: "COD",
      shipping_charges: "",
      giftwrap_charges: "",
      transaction_charges: "",
      total_discount: "",
      sub_total: "500",
      length: "10",
      breadth: "10",
      height: "6",
      weight: "0.1",
    };

    const response = await axios.post(
      `https://apiv2.shiprocket.in/v1/external/orders/create/adhoc`,
      orderDetails,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.stack);
    res
      .status(500)
      .json({ error: "An error occurred while tracking the shipment." });
  }
};
module.exports = { orderDetails };
