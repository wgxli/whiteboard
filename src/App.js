import React, {useState, useEffect} from 'react';

let [canvas, ctx] = [null, null];
let lastButton = 0;
const DPI = 2;

function initializeCanvas() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
}

let onResize = () => null;
let currentPath = [];

let paperType = 0;
let dashPattern = 0;

function handleMouseMove(e) {
    const [x, y, button] = [DPI * e.clientX, DPI * e.clientY, e.buttons];


    if (lastButton === button) {
        switch (button) {
            case 1:
                currentPath.push([x, y]);

                // Draw path
                ctx.beginPath();
                ctx.moveTo(
                    (currentPath[0][0] + currentPath[1][0])/2,
                    (currentPath[0][1] + currentPath[1][1])/2
                );
                for (let i = 2; i < currentPath.length; i++) {
                    const [xa, ya] = currentPath[i - 1];
                    const [xb, yb] = currentPath[i];
                    ctx.quadraticCurveTo(
                        xa, ya,
                        (xa+xb)/2, (ya+yb)/2
                    );
                }
                ctx.stroke();

                if (currentPath.length > 600) {
                    currentPath = currentPath.slice(currentPath.length - 2);
                }
                break;

            case 2:
                // Eraser
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(x, y, 50, 0, 2 * Math.PI);
                ctx.fill();
                break;

            default:
                break;
        }
    } else {
        currentPath = [[x, y]];
    }

    lastButton = button;
}

function clearCanvas() {
    onResize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const [
        lastStyle, lastWidth, lastDash
    ] = [
        ctx.strokeStyle, ctx.lineWidth, ctx.getLineDash()
    ];
    const [w, h] = [DPI * window.innerWidth, DPI * window.innerHeight];

    paperType %= 4;

    const margin = 250;
    const spacing = 120;

    let [nw, nh] = [
        Math.round((w - 2 * margin) / spacing),
        Math.round((h - 2 * margin) / spacing)
    ];
    nw -= (nw % 2);
    nh -= (nh % 2);

    const [dw, dh] = [(w - 2 * margin) / nw, (h - 2 * margin) / nh];

    const getX = (i) => ((w - dw * nw) / 2 + i * dw);
    const getY = (i) => ((h - dh * nh) / 2 + i * dh);

    if (paperType === 1) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#888';

        for (let i = 0; i <= nh; i++) {
            ctx.beginPath();
            ctx.moveTo(250, getY(i));
            ctx.lineTo(w - 250, getY(i));
            ctx.stroke();
        }
    }

    if ([2, 3].includes(paperType)) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#888';
        ctx.setLineDash([10, 10]);

        for (let i = 0; i <= nh; i++) {
            ctx.beginPath();
            ctx.moveTo(getX(0), getY(i));
            ctx.lineTo(getX(nw), getY(i));
            ctx.stroke();
        }

        for (let i = 0; i <= nw; i++) {
            ctx.beginPath();
            ctx.moveTo(getX(i), getY(0));
            ctx.lineTo(getX(i), getY(nh));
            ctx.stroke();
        }

        ctx.setLineDash([]);
    }

    if (paperType === 3) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';

        const midX = getX(Math.floor(nw/2));
        const midY = getY(Math.ceil(nh/2));

        ctx.beginPath();
        ctx.moveTo(getX(-0.5), midY);
        ctx.lineTo(getX(nw + 0.5), midY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(midX, getY(nh + 0.5));
        ctx.lineTo(midX, getY(-0.5));
        ctx.stroke();

        // Arrows
        ctx.beginPath();
        ctx.moveTo(getX(nw + 0.5), midY - 20);
        ctx.lineTo(getX(nw + 0.5) + 40, midY);
        ctx.lineTo(getX(nw + 0.5), midY + 20);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(midX + 20, getY(-0.5));
        ctx.lineTo(midX, getY(-0.5)- 40);
        ctx.lineTo(midX - 20, getY(-0.5));
        ctx.fill();
    }

    ctx.strokeStyle = lastStyle;
    ctx.lineWidth = lastWidth;
    ctx.setLineDash(lastDash);
}

function handleKeyPress(e) {
    switch (e.key) {
        case 'a':
            ctx.lineWidth = Math.max(ctx.lineWidth - 1, 1);
            break;

        case 'b':
            ctx.lineWidth += 1;
            break;

        case 'c':
            paperType += 1;
            clearCanvas();
            break;

        case 'e':
            clearCanvas();
            break;


        case 'g':
            ctx.strokeStyle = 'black';
            break;

        case 'h':
            ctx.strokeStyle = 'red';
            break;

        case 'i':
            ctx.strokeStyle = 'blue';
            break;

        case 'j':
            ctx.strokeStyle = 'green';
            break;

        case 'k':
            const dashPatterns = [
                [],
                [20, 20],
                [3, 17],
            ];
            dashPattern += 1;
            dashPattern %= dashPatterns.length;
            ctx.setLineDash(dashPatterns[dashPattern]);
            break;

        case 'l':
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            dashPattern = 0;
            ctx.setLineDash([]);

        case default:
            break;
    }
}

function App() {
    const [width, setWidth] = useState(DPI * window.innerWidth);
    const [height, setHeight] = useState(DPI * window.innerHeight);

    useEffect(() => {
        initializeCanvas();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleKeyPress);
        onResize = () => {
            setWidth(DPI * window.innerWidth);
            setHeight(DPI * window.innerHeight);
        }
    });

    return <canvas
        id='canvas'
        width={width}
        height={height}
        onContextMenu={(e) => {
            e.preventDefault();
            return false;
        }}
    />
}

export default App;
