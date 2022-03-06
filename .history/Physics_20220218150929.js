import Matter from "matter-js";
import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "./utils/random";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Physics = (entities, {touches, time, dispatch}) =>{

    let engine = entities.physics.engine;

    touches.filter(t => t.type === 'press')
    .forEach(t => {
        Matter.Body.setVelocity(entities.Bird.body,{
            x:0,
            y:-8
        })
    });
    
    Matter.Engine.update(engine, time.delta);

    for (let index = 1; index <= 2; index++) {
        if(entities[`ObstacleTop${index}`].body.bounds.max.x <= 0){
            const pipeSizePos = getPipeSizePosPair
        }
        Matter.Body.translate(entities[`ObstacleTop${index}`].body, { x: -3, y: 0 });
        Matter.Body.translate(entities[`ObstacleBottom${index}`].body, { x: -3, y: 0 });
    }
   

    // Matter.Body.translate(entities[`ObstacleTop2`].body, { x: -3, y: 0 });
    // Matter.Body.translate(entities[`ObstacleBottom2`].body, { x: -3, y: 0 });

    return entities;

}
export default Physics