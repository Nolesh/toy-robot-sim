import { AbstractToyRobot, TDirection } from "./AbstractToyRobot";

export class ToyRobot extends AbstractToyRobot<TDirection>{
        
    constructor(tableSize: number = 5) {
        super(tableSize);
    }

    protected get currentDirection() {
        return this.robotState?.direction!
    }

    protected rotate(clockwise: boolean){
        if(!this.robotState) return;
        let indx = ToyRobot.dirs.findIndex(x => x === this.robotState?.direction)
        if(clockwise){
            if(indx===ToyRobot.dirs.length-1) indx = 0;
            else indx++;
        }
        else{
            if(indx===0) indx = ToyRobot.dirs.length-1;
            else indx--;
        }
        this.robotState.direction = ToyRobot.dirs[indx];
    }

    protected createState(x: number, y: number, dir: TDirection) {
        return {
            x,
            y,
            direction: dir,
            toString() {
                return `x=${this.x}, y=${this.y}, dir=${this.direction}`
            },
        }
    }
    
}