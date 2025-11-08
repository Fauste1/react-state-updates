
import { useState } from "react";

export default function RedDotCursor() {

    const [position, setPosition] = useState({ x: 0, y: 0});

    return(
        <div 
            style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
            }}
            
            onPointerMove={e => {
                setPosition({ x: e.clientX, y: e.clientY })
        }}>

            <div 
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -20,
                    top: -20,
                    width: 20,
                    height: 20,
            }} />
        </div>
    );

}