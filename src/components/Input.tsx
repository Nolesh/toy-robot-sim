import React from "react";

interface IInputProps {
    max: number;
    title: string;
    name: string;
    value: number;
    onChange: (value: string) => void;
}

export const Input = ({max, title, name, value, onChange }: IInputProps) => (
    <label>
        {title}
        <input
            type="number"
            name={name}
            className="bg-slate-50 border border-slate-200 w-8"
            max={max}
            min={0}
            onChange={e => onChange(e.target.value)}
            value={value}
        />
    </label>
)
