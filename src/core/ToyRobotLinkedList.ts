import { LinkedList } from "../utils/LinkedList";
import { AbstractToyRobot, TDirection } from "./AbstractToyRobot";

type TDirectionList = LinkedList<TDirection>

class ToyRobotLinkedList extends AbstractToyRobot<TDirectionList>{
    
    constructor(tableSize: number = 5) {
        super(tableSize);
    }

    protected get currentDirection() {
        return this.robotState?.direction.currentValue!
    }

    protected rotate(clockwise: boolean){
        if(clockwise) this.robotState?.direction.next();
        else this.robotState?.direction.prev();
    }

    protected createState(x: number, y: number, dir: TDirection) {
        return {
            x,
            y,
            direction: new LinkedList(ToyRobotLinkedList.dirs, dir),
            toString() {
                return `x=${this.x}, y=${this.y}, dir=${this.direction.currentValue}`
            },
        }
    }

}

export {
    ToyRobotLinkedList as ToyRobot
}