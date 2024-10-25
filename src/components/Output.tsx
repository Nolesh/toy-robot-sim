import React from "react";

interface IOutputProps {
    text: string;    
}

export const Output = ({text}:IOutputProps) => (
    <div className="bg-slate-100 w-full h-9 text-center text-2xl border border-slate-200 rounded">
        {text}
    </div>
)
