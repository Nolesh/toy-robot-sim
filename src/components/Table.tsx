import { TDirection } from "../core/AbstractToyRobot";
import React from "react";

interface ITableProps {
    size: number,
    robotState: {
        x: number,
        y: number,
        dir: TDirection
    } | null
}

const Robot = ({ dir }: { dir: TDirection }) => {

    let dirChar = '';
    switch (dir) {
        case 'NORTH': dirChar = '&#8593;'; break;
        case 'EAST': dirChar = '&#8594;'; break;
        case 'SOUTH': dirChar = '&#8595;'; break;
        default: dirChar = '&#8592;'; break;
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-6 h-6 bg-slate-700 rounded-full "></div>
            <div className="absolute text-red-300 text-2xl mb-1" dangerouslySetInnerHTML={{ __html: dirChar }} />
        </div>
    )
}


export const Table = ({ size, robotState }: ITableProps) => {

    // If the robot's state is `null`, set its position to a negative value to prevent rendering. 
    const { x, y, dir } = robotState || { x:-1, y:-1, dir:'NORTH' };

    const fields = Array(size).fill('');       

    return (
        <table className="bg-slate-100">
            <tbody>
            {
                fields.map((_, i) => ( // rows
                    <tr key={'tr-'+i}>
                        {
                            fields.map((_, j) => (
                                <td key={'td-'+j} className=" p-2 w-16 h-16 border">
                                    {
                                        y === (fields.length - i - 1) && x === (j) &&
                                        <Robot dir={dir} />
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}