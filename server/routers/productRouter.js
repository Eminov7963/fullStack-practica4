const express = require("express")

const {getAlldata,getDatabyId,deleteData,postData} = require("../controllers/productControllers")

const router = express.Router()

router.get("/",getAlldata)
router.get("/:id",getDatabyId)
router.delete("/:id",deleteData)
router.post("/",postData)

module.exports = router