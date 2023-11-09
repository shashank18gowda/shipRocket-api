const axios = require("axios");

const serviceAvailability = async (req, res) => {
  const token = req.headers.authorization;
  {
    // var config = {
    //     method: 'get',
    //   maxBodyLength: Infinity,
    //     url: 'https://apiv2.shiprocket.in/v1/external/courier/serviceability/',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`
    //     }
    //   };
    //   axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     res.json(JSON.stringify(response.data)  );
    //   })
    //   .catch(function (error) {
    //     console.log(error.message);
    //   });
    // }
  }

  const courierDetails = {
    order_id: "433691931",
    pickup_postcode: "574227",
    delivery_postcode: "574240        ",

    // "cod": "1",
    // "weight": "2",
  };

  axios
    .get("https://apiv2.shiprocket.in/v1/external/courier/serviceability/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: courierDetails,
    })
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

module.exports = { serviceAvailability };
