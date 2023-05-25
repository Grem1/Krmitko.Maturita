import { db } from "./db";

export const data = async() => {
    const test = await db.food.findFirst({
        where : {
            type : "CAT"
        }
    })
    
    if ( test !== null ) {
        return;
    }

    await db.food.createMany({
        data : [
            {
                type : 'DOG', 
                animalWeight : 5,
                daylyFood : 100,
            },
            {
                type : 'DOG', 
                animalWeight : 10,
                daylyFood : 200,
            },
            {
                type : 'DOG', 
                animalWeight : 15,
                daylyFood : 280,
            },
            {
                type : 'CAT', 
                animalWeight : 2,
                daylyFood : 140,
            },
            {
                type : 'CAT', 
                animalWeight : 3,
                daylyFood : 190,
            },
            {
                type : 'CAT', 
                animalWeight : 4,
                daylyFood : 230,
            },
            {
                type : 'CAT', 
                animalWeight : 5,
                daylyFood : 280,
            }
        ]
    })

    await db.water.createMany({
        data : [
            {
                type : 'DOG', 
                animalWeight : 5,
                daylyWater : 350,
            },
            {
                type : 'DOG', 
                animalWeight : 10,
                daylyWater : 700,
            },
            {
                type : 'DOG', 
                animalWeight : 15,
                daylyWater : 1400,
            },
            {
                type : 'CAT', 
                animalWeight : 2,
                daylyWater : 140,
            },
            {
                type : 'CAT', 
                animalWeight : 3,
                daylyWater : 200,
            },
            {
                type : 'CAT', 
                animalWeight : 4,
                daylyWater : 260,
            },
            {
                type : 'CAT', 
                animalWeight : 5,
                daylyWater : 320,
            }
        ]
    })

}

