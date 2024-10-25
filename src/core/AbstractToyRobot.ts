export type TMovementCmd = 'MOVE' | 'LEFT' | 'RIGHT';

export type TDirection = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';


interface IRobotState<T> {
    x: number;
    y: number;
    direction: T;
    toString: () => string;
}


export abstract class AbstractToyRobot<T> {

    protected static dirs: TDirection[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    private TABLE_SIZE: number;
    protected robotState: IRobotState<T> | null;
    
    // constructor(x: number = 0, y: number = 0, dir: TDirection = 'NORTH', tableSize: number = 5) {
    //     this.TABLE_SIZE = tableSize;
    //     this.robotState = this.createState(x, y, dir);
    // }

    constructor(tableSize: number = 5) {
        this.TABLE_SIZE = tableSize;
        this.robotState = null;
    }
        
    protected abstract get currentDirection(): TDirection;
    
    protected abstract rotate(clockwise: boolean): void;

    protected abstract createState(x: number, y: number, dir: TDirection) : IRobotState<T>;
    

    place(x: number, y: number, dir: TDirection) {
        this.robotState = this.createState(x, y, dir);
    }

    execCmd(cmd: TMovementCmd) {
        if(!this.robotState) return;

        switch (cmd) {
            case 'MOVE':
                switch (this.currentDirection) {
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
                this.rotate(false);
                break;
            case 'RIGHT':
                this.rotate(true);
                break;
        }
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
            dir: this.currentDirection
        }
    }

    static get directions(){
        return AbstractToyRobot.dirs;
    }
}