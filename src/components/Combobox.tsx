import React, { useEffect, useRef, useState } from "react";

interface IComboboxProps {
    title: string;    
    options: string[];
    onSelect: (item: string) => void
}


export const ComboBox = ({ title, options, onSelect }: IComboboxProps) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option)
    };


    return (
        <div ref={componentRef} style={{ position: 'relative', width: '120px' }} >
            {title}
            <input 
                type="text" 
                value={selectedOption}                
                onClick={() => { setIsOpen(true) }}
                readOnly
                className="bg-slate-50 border border-slate-200 w-20"
            />
            {isOpen && (
                <ul style={{
                    position: 'absolute',
                    width: '100%',
                    maxHeight: '150px',
                    border: '1px solid #ddd',
                    overflowY: 'auto',
                    backgroundColor: '#fff',
                    padding: 0,
                    margin: 0,
                    listStyleType: 'none',
                }}>
                    {options.map(option => (
                        <li 
                            key={option} 
                            onClick={() => handleOptionClick(option)} 
                            style={{ padding: '8px', cursor: 'pointer' }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

