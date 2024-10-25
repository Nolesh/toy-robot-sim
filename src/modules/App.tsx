import React, { useState } from "react";
import { directions, TDirection, TMovementCmd, ToyRobot } from "../core/ToyRobot";
import { Button } from "components/Button";
import { Table } from "components/Table";
import { Output } from "components/Output";
import { Input } from "components/Input";
import { ComboBox } from "components/Combobox";

const TABLE_SIZE = 5;

// const toyRobot = new ToyRobot(0, 0, 'NORTH', TABLE_SIZE);
const toyRobot = new ToyRobot(TABLE_SIZE);


const App = () => {

  const [values, setValues] = useState<{
    x: number,
    y: number,
    dir: TDirection
  }>({
    x: 0,
    y: 0,
    dir: 'NORTH'
  });

  const [output, setOutput] = useState('');

  const onSetValues = (name: string, value: string | number) => {    
    setValues({
      ...values,
      [name]: value
    })
  }

  const handlePlace = () => {
    toyRobot.place(values.x, values.y, values.dir);     
    setOutput(toyRobot.report());
    
  };

  const handleCmd = (cmd: TMovementCmd) => {
    toyRobot.execCmd(cmd);
    setOutput(toyRobot.report());
  };

  const disabled = !!!toyRobot.state;
    

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="font-extrabold text-3xl text-slate-400">TOY ROBOT SIMULATION</div>
      <div className="w-96 border border-slate-100 gap-3 flex flex-col items-center p-2">

        <div className="flex gap-2">

          <div className="flex items-center gap-2 border border-slate-200 p-2">
            <Input max={TABLE_SIZE-1} title="X:" name="x" value={values.x} onChange={(val) => onSetValues('x', Number.parseInt(val))} />
            <Input max={TABLE_SIZE-1} title="Y:" name="y" value={values.y} onChange={(val) => onSetValues('y', Number.parseInt(val))} />
            <ComboBox title="Dir:" options={directions} onSelect={(val) => onSetValues('dir', val)} />
            <Button title="Place" onClick={() => { handlePlace() }} />
          </div>

        </div>

        <div className="flex gap-2">
          <Button title="Left" onClick={() => { handleCmd('LEFT') }} disabled={disabled}/>
          <Button title="Right" onClick={() => { handleCmd('RIGHT') }} disabled={disabled}/>
          <Button title="Move" onClick={() => { handleCmd('MOVE') }} disabled={disabled} />
        </div>

        <Table size={TABLE_SIZE} robotState={toyRobot.state} />
        <Output text={output} />
      </div>
    </div>
  )
};




export default App;
