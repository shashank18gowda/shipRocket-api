module.exports.RESPONSE = {
  SUCCESS: {
    code: 200,
    message: "Everything worked as expected.",
  },

  UNKNOWN_ERROR: {
    code: 500,
    message: "Something went wrong, Please try again!",
  },


  NOT_MATCH: {
    code: 201,
    message: "Given data is not match.",
  },
  PARAMETER_IS_MANDATORY: {
    code: 202,
    message: "is mandatory parameter.",
  },
  FILE_SIZE: {
    code: 203,
    message: "File size should be in less then 2MB",
  },
  INVALID_ID: {
    code: 204,
    message: "ID is invalid.",
  },


  CSV_MISSING:{
    code: 205,
    message: "CSV file is missing.",
  }, 
  ALREADY_EXIST:{
    code: 206,
    message:'Already exists',
  },
  INVALID_DATA: {
    code: 207,
    message: "is invalid.",
  },

  INSERTION_ERROR:{
    code: 208,
    message:'Error inserting product',
  }, 
   
  NOT_FOUND:{
    code: 209,
    message:'Not found',
  },
  ALREADY_EXIST_IN_QUOTATION:{
    code: 210,
    message:'Already exists in quotation',
  },

  NOT_FOUND_:{
    code: 211,
    message:'Not found',
  },
  RANGE_EXCEED:{
    code: 212,
    message:'range exceeded',
  },
  MORE_THAN_PRICE:{
    code: 213,
    message:'offer price cannot be greater than price',
  },
  INVALID_TOKEN: {
    code: 400,
    message: "Invalid token",
  },

  ACCESS_DENIED: {
    code: 401,
    message: "Access denied. Unauthorized user",
  },
};
