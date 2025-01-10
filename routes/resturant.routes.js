const { updateINFO, addMenu, getMenu, updateMenu, deleteMenu } = require("../controllers/resturant.controller")

const router = require("express").Router()


router
    .post("/update-info", updateINFO)
    .post("/add-menu", addMenu)
    .get("/get-menu", getMenu)
    .put("/update-menu/:mid", updateMenu)
    .delete("/get-menu/:mid", deleteMenu)
module.exports = router









