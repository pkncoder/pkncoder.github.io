class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getLengthSquared() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }

    normalized(length) {
        return new Vector2D(this.x / length, this.y / length);
    }
}

function initialTerminalPoint() {
    let initialPoint = $("#initalPoint").val().trim().replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").split(",");
    let terminalPoint = $("#terminalPoint").val().trim().replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").split(",");
    console.log(initialPoint);
    console.log(terminalPoint);

    let vector = new Vector2D(parseFloat(terminalPoint[0] - initialPoint[0]), parseFloat(terminalPoint[1] - initialPoint[1]));
    gatherAllVectorData(vector);
}

function gatherAllVectorData(vector) {
    /* Needed Data
    Component Form
    Length (Exact & Rounded)
    Normal / Unit Vector (Exact & Rounded)
    Linear Combonations
    */

    let lengthSquared = vector.getLengthSquared();
    let length = Math.sqrt(lengthSquared);
    let normalizedVector = vector.normalized(length);

    alert(
        `
        Component Form Vector: < ${vector.x}, ${vector.y} >
        Vector Length: sqrt(${lengthSquared.toFixed(3)}) | ${length.toFixed(3)}
        Normalized / Unit Vector: < ${normalizedVector.x.toFixed(3)}, ${normalizedVector.y.toFixed(3)} >
        Normalized / Unit Vector Exact: [ \n\t\t${vector.x.toFixed(3)} / sqrt(${lengthSquared}), \n\t\t${vector.y.toFixed(3)} / sqrt(${lengthSquared})\n\t]
        Linear Combonation: ${vector.x.toFixed(2)}i+${vector.y.toFixed(2)}j
        `
    )
}