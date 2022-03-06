import Matter from "matter-js";

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
        const element = array[index];
        Matter.Body.translate(entities[`ObstacleTop${index}`].body, { x: -3, y: 0 });
        Matter.Body.translate(entities[`ObstacleBottom${index}`].body, { x: -3, y: 0 });
    }
   

    // Matter.Body.translate(entities[`ObstacleTop2`].body, { x: -3, y: 0 });
    // Matter.Body.translate(entities[`ObstacleBottom2`].body, { x: -3, y: 0 });

    return entities;

}
export default Physics