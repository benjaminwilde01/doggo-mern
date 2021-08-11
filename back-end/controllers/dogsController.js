import mongoose from 'mongoose';

import Submission from '../models/submission.js'

export const getDogs = async (req, res) => {
    try {
        const dogSubmissions = await Submission.find()

        // console.log(dogSubmissions)

        res.status(200).json(dogSubmissions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createDogs = async (req, res) => {
    const dog = req.body

    const newDog = new Submission(dog)

    try {
        await newDog.save()

        res.status(201).json(newDog)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateSubmission = async (req, res) => {
    const { id: _id } = req.params
    const dog = req.body

    // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
    
    const updatedSubmission = await Submission.findByIdAndUpdate(_id, dog, { new: true })

    res.json(updatedSubmission)
}