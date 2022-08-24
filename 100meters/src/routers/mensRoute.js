const router = require("express").Router()
const Mens = require("../models/mens")

router.post("/mens", async (req, res) => {
    const data = new Mens(req.body)
    try {
        let createData = await data.save()
        res.status(201).send(createData);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/mens", async (req, res) => {
    try {
        const getAll = await Mens.find();
        res.status(200).send(getAll)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updated = await Mens.findByIdAndUpdate(_id,
            req.body,
            {
                new: true
            });
        res.status(200).send(updated)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleted = await Mens.findByIdAndDelete(_id)
        res.status(200).send(`deleted!`)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getId = await Mens.findById(_id)
        res.status(200).send(getId)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get("/mens/score/:score", async (req, res) => {
    try {
        const score = req.params.score;
        const getScore = await Mens.find({ score })
        res.status(200).send(getScore)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get("/mens/date/:dob", async (req, res) => {
    try {
        const dob = req.params.dob;
        const getDate = await Mens.find({ dob })
        if (!dob) {
            res.status(400).send(`No data present!`)
        }
        res.status(200).send(getDate);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;