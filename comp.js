import React, { useEffect, useRef, useMemo } from "react";

const GridCanvas = ({tree, width, height, card, form }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef();

  const drawGrid = useMemo(() => {
    return (canvas) => {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x <= width; x += 20) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += 20) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();
    };
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      drawGrid(canvas);
    }
  }, [drawGrid]);

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  useEffect(() => {
    wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth;
  }, []);

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = x - startX;
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const debouncedMouseMove = useMemo(() => {
    return debounce(onMouseMove, 100);
  }, [onMouseMove]);

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };
  // Cell size
  const cellSize = 20;

  // Plot tree letters
  tree.forEach((cell) => {
    const [row, col, letter] = cell;
    ctx.strokeStyle = "#eee";
    ctx.stroke();
    ctx.font = "bold 16px Times New Roman";

    let color;
    if (letter === "D") {
      color = "blue";
    } else if (letter === "T") {
      color = "red";
    } else if (letter === "A") {
      color = "green";
    }

    ctx.fillStyle = color;

    // Calculate the coordinates to center the text in the cell
    const textX =
      col * cellSize + cellSize / 2 - ctx.measureText(letter).width / 2;
    const textY = row * cellSize + cellSize / 2 + 6; // Adjust 8 to vertically center the text

    ctx.fillText(letter, textX, textY);
  });
  return (
    <div
      ref={wrapperRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{
        overflowX: "auto",
        maxWidth: 350,
        marginRight: "10px",
        userSelect: "none",
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default GridCanvas;
