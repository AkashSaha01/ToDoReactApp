export default function getNextToDoID(tasks){
if(tasks.length===0){
    return 1;
}
const maxId=tasks.reduce((maxId,currentObject)=>Math.max(maxId,currentObject.id),0);

return maxId+1;
}