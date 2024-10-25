# Toy Robot Simulation

## Overview

This is a simulation program where a Toy Robot moves on a tabletop grid (default 5x5, customizable). The Toy Robot can move freely on the surface but is safeguarded from falling off the edges. There are two implementations of the Toy Robot, both derived from a common abstract class, `AbstractToyRobot`. The only difference between them lies in the approach to changing direction: one uses a simple array, while the other leverages a linked list.

![toy robot simulation screenshot](https://raw.githubusercontent.com/nolesh/toy-robot-sim/master/public/toy-robot-sim-screenshot.png)

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Nolesh/toy-robot-sim.git
   cd toy-robot-sim
   ```

2. **Install Dependencies**:
   ```bash
   npm run install
   ```

3. **Run the Development Server**:
   ```bash
   npm start
   ```

4. **Open the Application**:
    Open your browser and navigate to `http://localhost:3000`

## Test Coverage

Tests are provided for the LinkedList, ToyRobot, and ToyRobotLinkedList classes. To run them, use the following command:
```bash
   npm test
   ```

## Project Structure

- **/src**: Main source code.
  - **/components**: Reusable React components.
  - **/core**: Toy Robot logic.
  - **/modules**: Organized client-side logic modules.
  - **/utils**: The LinkedList class required for ToyRobot.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE)