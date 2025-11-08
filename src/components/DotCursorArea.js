
// Todo: Make the area in which the cursor appears only take up the first quarter of the screen. The dot should not move beyond the borders of this area.

import { useState } from "react";

export default function DotCursorArea() {

    const [position, setPosition] = useState({ x: 0, y: 0});
    const [inside, setInside] = useState(false);

    return(
        <div 
            style={{
                    position: 'relative',
                    width: '50vw',
                    height: '50vh',
                    border: '1px solid black'
            }}
            
            onPointerMove={e => {
                setPosition({ x: e.clientX, y: e.clientY })
            }}
        
            onPointerEnter={() => setInside(true)}
            onPointerLeave={() => setInside(false)}
        >

            <DotCursor cursorPosition={ position } isInside={ inside } />
        </div>
    );

}

function DotCursor( { cursorPosition, isInside } ) {
    return(
        <div 
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    left: -20,
                    top: -20,
                    width: 20,
                    height: 20,
                    visibility: isInside ? "visible" : "hidden"
            }} />
    );
}