/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { RgbaColorPicker } from "react-colorful";

export const ColorPicker = () => {
    const [rgbaColor, setRgbaColor] = useState({ r: 170, g: 187, b: 204, a: 1 });

    const handleColorChange = (color:any) => {
        setRgbaColor(color);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RgbaColorPicker color={rgbaColor} onChange={handleColorChange} />
            <div
                style={{
                    backgroundColor: `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`,
                }}
                className='w-[100px] h-[100px] rounded-3xl mt-7'
            />
        </div>
    );
}