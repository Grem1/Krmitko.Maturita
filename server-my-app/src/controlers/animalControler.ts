import {Request, Response} from 'express'
import { db } from '../utils/db'

export const getFoodOptionsDog = async(req: Request, res : Response) =>{
    try {
        
        const options = await db.food.findMany({
            where : {
                type : 'DOG'
            }

        })

            const results = options.map((val : any)=>{
                const {animalWeight, daylyFood} = val
                return {Weight : animalWeight, Food : daylyFood}
            })

            return res.status(200).send(results)

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}

export const getWaterOptionsDog = async(req: Request, res : Response) =>{
    try {
        
        const options = await db.water.findMany({
            where : {
                type : 'DOG'
            }

        })

            const results = options.map((val : any)=>{
                const {animalWeight, daylyWater} = val
                return {Weight : animalWeight, Water : daylyWater}
            })

            return res.status(200).send(results)

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}

export const getFoodOptionsCat = async(req: Request, res : Response) =>{
    try {
        
        const options = await db.food.findMany({
            where : {
                type : 'CAT'
            }

        })

            const results = options.map((val : any)=>{
                const {animalWeight, daylyFood} = val
                return {Weight : animalWeight, Food : daylyFood}
            })

            return res.status(200).send(results)

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}

export const getWaterOptionsCat = async(req: Request, res : Response) =>{
    try {
        
        const options = await db.water.findMany({
            where : {
                type : 'CAT'
            }

        })

            const results = options.map((val : any)=>{
                const {animalWeight, daylyWater} = val
                return {Weight : animalWeight, Water : daylyWater}
            })

            return res.status(200).send(results)

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}

export const posTimeTable = async(req: Request, res : Response) =>{
    const {doses, weight, animal} = req.body;

    try {
        
        const foodQuary = await db.food.findFirst ({
            where : {
                type : animal.toLowerCase () === 'cat'?'CAT' : 'DOG', 
                animalWeight : weight
            }
        })

        const waterQuary = await db.water.findFirst ({
            where : {
                type : animal.toLowerCase () === 'cat'?'CAT' : 'DOG', 
                animalWeight : weight
            }
        })

        await db.timeTable.create({

            data : {
                type : animal.toLowerCase () === 'cat'?'CAT' : 'DOG', 
                doses, 
                food:{
                    connect:{
                        id:foodQuary!.id
                    }
                },
                water:{
                    connect:{
                        id:waterQuary!.id
                    }
                }
            }
        })

        return res.status(200).send(':-)')
        

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}

export const geTimeTable = async (req: Request, res : Response) => {
    try {
        
        const timeTable = await db.timeTable.findMany({
            include : {
                food: true, 
                water: true
            }
        })
        const results = timeTable.map((val : any)=>{
            const {food, water, doses, type} = val
            const {daylyFood} = food
            const {daylyWater} = water

            return {
                type,
                water:daylyWater,
                food:daylyFood,
                doses
            }

        })
    
        return res.status(200).send(results)

    } catch (error) {
        console.log (error)

        return res.status(500).send(';<')
    }
}