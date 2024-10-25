import React from "react";

interface IButtonProps {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ title, onClick, disabled }: IButtonProps) => (
    <button
        className="pl-4 pr-4 pt-1 pb-1 bg-slate-200 hover:bg-slate-100 disabled:bg-gray-50 disabled:text-gray-300 rounded border border-slate-300 transition uppercase"
        onClick={onClick}
        disabled={disabled}
    >
        {title}
    </button>
)
