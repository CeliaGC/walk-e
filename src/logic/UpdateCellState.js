import React, { useEffect, useState } from 'react';
export const UpdateCellState = ({
    command,
    robotPosition,
    wallPosition,
    cellId,
    robotReport,
    setRobotReport,
    setRobotPosition,
    setCellId,
    setShowModal,
    arrayOfCells,
    setArrayOfCells,
    setWallPosition,
}) => {
    const [action, params] = command.split(' ');

    if (command === "MOVE" || command === "LEFT" || command === "RIGHT" || command === "REPORT") {
        if (command === "REPORT") {
            robotPosition ? setRobotReport(`${robotPosition.y},${robotPosition.x},${robotPosition.facing}`) : console.log("No robot found");
            setShowModal(true);
        } else {
            const arrayOfWalls = arrayOfCells.filter((c) => c.className === "PLACE_WALL");
            if (robotPosition.facing === 'NORTH') {

                switch (command) {
                    case "MOVE":

                        let nextCell = (5 - robotPosition.y - 1) * 5 + robotPosition.x;
                        let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
                        let oppositeRowCell = (5 - robotPosition.y + 4 * 5 + robotPosition.x);
                        let blockingORCell = arrayOfWalls.find((w) => w.id === oppositeRowCell)
                        if (!blockingCell && robotPosition.y + 1 < 6) {
                            setCellId((5 - robotPosition.y - 1) * 5 + robotPosition.x);
                            setRobotPosition({ x: robotPosition.x, y: robotPosition.y + 1, facing: robotPosition.facing })
                        } else if (!blockingORCell && !blockingCell) {
                            setCellId((5 - robotPosition.y + 4) * 5 + robotPosition.x);
                            setRobotPosition({ x: robotPosition.x, y: robotPosition.y - 4, facing: robotPosition.facing })
                        }
                        break;
                    case "LEFT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "WEST" })
                        break;
                    case "RIGHT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "EAST" })
                }
            } else if (robotPosition.facing === 'EAST') {
                switch (command) {
                    case "MOVE":
                        let nextCell = (5 - robotPosition.y) * 5 + robotPosition.x + 1;
                        let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
                        let firstRowCell = (5 - robotPosition.y) * 5 + robotPosition.x - 4;
                        let firstRCBlocked = arrayOfWalls.find((w) => w.id === firstRowCell);
                        if (!blockingCell && robotPosition.x + 1 <= 5) {
                            setCellId((5 - robotPosition.y) * 5 + robotPosition.x + 1);
                            setRobotPosition({ x: robotPosition.x + 1, y: robotPosition.y, facing: robotPosition.facing })
                        } else if (!firstRCBlocked && !blockingCell) {
                            setCellId((5 - robotPosition.y) * 5 + robotPosition.x - 4);
                            setRobotPosition({ x: robotPosition.x - 4, y: robotPosition.y, facing: robotPosition.facing })
                        }
                        break;
                    case "LEFT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "NORTH" })
                        break;
                    case "RIGHT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "SOUTH" })
                }
            } else if (robotPosition.facing === 'SOUTH') {
                switch (command) {
                    case "MOVE":
                        let nextCell = (5 - robotPosition.y + 1) * 5 + robotPosition.x;
                        let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
                        let oppositeRowCell = (5 - robotPosition.y - 4) * 5 + robotPosition.x;
                        let blockingORCell = arrayOfWalls.find((w) => w.id === oppositeRowCell)
                        if (!blockingCell && robotPosition.y - 1 >= 1) {
                            setCellId((5 - robotPosition.y + 1) * 5 + robotPosition.x);
                            setRobotPosition({ x: robotPosition.x, y: robotPosition.y - 1, facing: robotPosition.facing })
                        } else if (!blockingORCell && !blockingCell) {
                            setCellId((5 - robotPosition.y - 4) * 5 + robotPosition.x);
                            setRobotPosition({ x: robotPosition.x, y: robotPosition.y + 4, facing: robotPosition.facing })
                        }
                        break;
                    case "LEFT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "EAST" })
                        break;
                    case "RIGHT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "WEST" })
                }
            } else if (robotPosition.facing === 'WEST') {
                switch (command) {
                    case "MOVE":
                        let nextCell = (5 - robotPosition.y) * 5 + robotPosition.x - 1;
                        let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
                        let lastRowInCell = (5 - robotPosition.y) * 5 + robotPosition.x + 4;
                        let lastRICBlocked = arrayOfWalls.find((w) => w.id === lastRowInCell);
                        if (!blockingCell && robotPosition.x - 1 >= 1) {
                            setCellId((5 - robotPosition.y) * 5 + robotPosition.x - 1);
                            setRobotPosition({ x: robotPosition.x - 1, y: robotPosition.y, facing: robotPosition.facing })
                        } else if (!lastRICBlocked && !blockingCell) {
                            setCellId((5 - robotPosition.y) * 5 + robotPosition.x + 4);
                            setRobotPosition({ x: robotPosition.x + 4, y: robotPosition.y, facing: robotPosition.facing })
                        }
                        break;
                    case "LEFT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "SOUTH" })
                        break;
                    case "RIGHT":
                        setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
                        setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "NORTH" })
                }
            }
        }

    } else {
        const [y, x, facing] = params.split(',');
        const parsedX = Number(x);
        const parsedY = Number(y);
        if (parsedX <= 5 && parsedY <= 5) {
            switch (action) {
                case 'PLACE_ROBOT':
                    if (facing === "NORTH" || facing === "EAST" || facing === "SOUTH" || facing === "WEST") {
                        setRobotPosition({
                            x: parsedX,
                            y: parsedY,
                            facing: String(facing),
                        });
                        setCellId((5 - parsedY) * 5 + parsedX)
                    }

                    break;
                case 'PLACE_WALL':
                    if (!facing) {
                        setWallPosition({ x: parsedX, y: parsedY });
                        setCellId((5 - parsedY) * 5 + parsedX);
                    }

                    break;

                default:
                    console.log('Comando no reconocido');
            }
        }
        return arrayOfCells;

    };

}
