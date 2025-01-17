const BlogModel = require("../modules/productModules")

const getAlldata = async (req,res)=>{
    try {
        const products = await BlogModel.find({})
        if (!products) {
            res.status(404).send({
                error: "products dont geted!!"
            })  
        }
        res.status(200).send({
            data: products,
            message: "all data geted"
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}

const getDatabyId = async (req,res)=>{
    const { id} = req.params;
    try {
        const products = await BlogModel.findById(id)
        if (!products) {
            res.status(404).send({
                error: "product dont geted!!"
            })  
        }
        res.status(200).send({
            data: products,
            message: "data geted"
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}

const deleteData = async (req,res)=>{
    const { id} = req.params
    try {
        const products = await BlogModel.findByIdAndDelete(id)
        if (!products) {
            res.status(404).send({
                error: "product dont geted!!"
            })  
        }
        res.status(200).send({
            data: products,
            message: "data geted"
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}

const postData = async (req,res)=>{
    try {
        const products = BlogModel({...req.body})
        await products.save()
        if (!products) {
            res.status(404).send({
                error: "product dont posted!!"
            })  
        }
        res.status(200).send({
            data: products,
            message: "data posted",
            error: null
        })
    } catch (error) {
        res.status(500).send({
            error: "error required!!"
        })
    }
}

module.exports = {getAlldata,getDatabyId,deleteData,postData}