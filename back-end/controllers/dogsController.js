import Submission from '../models/submission.js'

export const getDogs = async (req, res) => {
    try {
        const dogSubmissions = await Submission.find()

        console.log(dogSubmissions)

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