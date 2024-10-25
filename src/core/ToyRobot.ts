import { LinkedList } from "../utils/LinkedList";

export type TMovementCmd = 'MOVE' | 'LEFT' | 'RIGHT';

export type TDirection = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';
type TDirectionList = LinkedList<TDirection>

interface IRobotState {
    x: number;
    y: number;
    direction: TDirectionList;
    toString: () => string;
}

export const directions: TDirection[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export class ToyRobot {

    private TABLE_SIZE: number;
    private robotState: IRobotState | null;

    // constructor(x: number = 0, y: number = 0, dir: TDirection = 'NORTH', tableSize: number = 5) {
    //     this.TABLE_SIZE = tableSize;
    //     this.robotState = this.createState(x, y, dir);
    // }

    constructor(tableSize: number = 5) {
        this.TABLE_SIZE = tableSize;
        this.robotState = null;
    }

    private createState(x: number, y: number, dir: TDirection) : IRobotState {
        return {
            x,
            y,
            direction: new LinkedList(directions, dir),
            toString() {
                return `x=${this.x}, y=${this.y}, dir=${this.direction.currentValue}`
            },
        }
    }

    execCmd(cmd: TMovementCmd) {
        if(!this.robotState) return;

        switch (cmd) {
            case 'MOVE':
                switch (this.robotState.direction.currentValue) {
                    case 'NORTH':
                        if (this.robotState.y < this.TABLE_SIZE-1) this.robotState.y++;                                                
                        break;
                    case 'EAST':
                        if (this.robotState.x < this.TABLE_SIZE-1) this.robotState.x++;
                        break;
                    case 'SOUTH':
                        if (this.robotState.y > 0) this.robotState.y--;
                        break;
                    case 'WEST':
                        if (this.robotState.x > 0) this.robotState.x--;
                        break;
                }
                break;
            case 'LEFT':
                this.robotState.direction.prev();
                break;
            case 'RIGHT':
                this.robotState.direction.next();
                break;
        }
    }

    place(x: number, y: number, dir: TDirection) {
        this.robotState = this.createState(x, y, dir);
    }

    report() {
        if(!this.robotState) return '';
        console.log('state', this.robotState.toString());        
        return this.robotState.toString();
    }

    get state() {
        if(!this.robotState) return null;
        return {
            x: this.robotState.x,
            y: this.robotState.y,
            dir: this.robotState.direction.currentValue
        }
    }
}