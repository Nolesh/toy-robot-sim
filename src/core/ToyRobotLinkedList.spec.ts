import { ToyRobot } from "./ToyRobotLinkedList";


describe("ToyRobotLinkedList", () => {
    let toyRobot: ToyRobot;
    
    beforeEach(() => {
        toyRobot = new ToyRobot(5);
    });

    test("should initialize without a state", () => {
        expect(toyRobot.state).toBeNull();
    });

    test("should place the robot at a valid position with a given direction", () => {
        toyRobot.place(0, 0, 'NORTH');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'NORTH' });
    });

    test("should ignore commands when robot is not placed", () => {
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toBeNull();
    });

    test("should move the robot north", () => {
        toyRobot.place(0, 0, 'NORTH');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 1, dir: 'NORTH' });
    });

    test("should not move out of bounds north", () => {
        toyRobot.place(0, 4, 'NORTH');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 4, dir: 'NORTH' });
    });

    test("should move the robot east", () => {
        toyRobot.place(0, 0, 'EAST');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 1, y: 0, dir: 'EAST' });
    });

    test("should not move out of bounds east", () => {
        toyRobot.place(4, 0, 'EAST');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 4, y: 0, dir: 'EAST' });
    });

    test("should move the robot south", () => {
        toyRobot.place(0, 1, 'SOUTH');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'SOUTH' });
    });

    test("should not move out of bounds south", () => {
        toyRobot.place(0, 0, 'SOUTH');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'SOUTH' });
    });

    test("should move the robot west", () => {
        toyRobot.place(1, 0, 'WEST');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'WEST' });
    });

    test("should not move out of bounds west", () => {
        toyRobot.place(0, 0, 'WEST');
        toyRobot.execCmd('MOVE');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'WEST' });
    });

    test("should turn the robot left", () => {
        toyRobot.place(0, 0, 'NORTH');
        toyRobot.execCmd('LEFT');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'WEST' });
    });

    test("should turn the robot right", () => {
        toyRobot.place(0, 0, 'NORTH');
        toyRobot.execCmd('RIGHT');
        expect(toyRobot.state).toEqual({ x: 0, y: 0, dir: 'EAST' });
    });

    test("should report the current state of the robot", () => {
        toyRobot.place(1, 2, 'EAST');
        const report = toyRobot.report();
        expect(report).toBe("x=1, y=2, dir=EAST");
    });
});
