// const { getLocation, updateCustomerInfo } = require("../controllers/customer.controllers")

const { getLocation, updateCustomerInfo, getResturants, getResturantMenu, placedOrder, getOrders } = require("../controllers/customer.controller")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturants)
    .get("/get-resturant-menu/:rid", getResturantMenu)
    .post("/place-order", placedOrder)
    .get("/get-orders", getOrders)


module.exports = router