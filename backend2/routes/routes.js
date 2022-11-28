const exp = require('express')
const Schema = require('../Schema/Schema')
const routes = exp.Router()
const route = exp.Router()
const details = require('../Schema/Schema')

routes.get ('/',async (req,res) => {
    const data = await details.find()
    res.send(data)
})

routes.delete('/:name', async (req,res) => {
    const data = await details.findOneAndDelete({task:req.params.name})
    res.send(data)
})

module.exports = routes;