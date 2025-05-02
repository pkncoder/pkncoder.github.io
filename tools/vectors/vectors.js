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

    dot(otherVector) {
        return (this.x * otherVector.x) + (this.y * otherVector.y);
    }

    angleBetween(otherVector) {
        let cosTheta = (this.dot(otherVector)) / (Math.sqrt(this.getLengthSquared()) * Math.sqrt(otherVector.getLengthSquared()));
        return Math.acos(cosTheta);
    }

    vectorsAreOrthogonal(otherVector) {
        return (this.dot(otherVector)) === 0.0;
    }

    vectorsAreParallel(otherVector) {
        return ((this.x / otherVector.x) === ((this.y / otherVector.y)));
    }
}

function createVector(inputId) {

    let vectorStrs = $("#" + inputId).val()
        .replaceAll(" ", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("<", "")
        .replaceAll(">", "")
        .split(",");
    
    for (var i = 0; i < 2; i++) {
        if (vectorStrs[i].includes("/")) {
            let fractionSplits = vectorStrs[i].split("/");
            vectorStrs[i] = parseFloat(fractionSplits[0]) / parseFloat(fractionSplits[1]);
        }
    }

    return new Vector2D(parseFloat(vectorStrs[0]), parseFloat(vectorStrs[1]));
}

function initialTerminalPoint() {
    let initialPoint  = createVector("initalPoint");
    let terminalPoint = createVector("terminalPoint");
    console.log(initialPoint.x)
    console.log(terminalPoint.x)

    let finalVector = new Vector2D(parseFloat(terminalPoint.x - initialPoint.x), parseFloat(terminalPoint.y - initialPoint.y));
    console.log(finalVector.x);
    gatherAllOneVectorData(finalVector);
}

function twoVectors() {

    let vectorOneStr = $("#twoVectorOne").val().trim().replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").split(",");
    let vectorTwoStr = $("#twoVectorTwo").val().trim().replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").split(",");
    console.log(vectorOneStr);
    console.log(vectorTwoStr);

    let vectorOne = new Vector2D(parseFloat(vectorOneStr[0]), parseFloat(vectorOneStr[1]));
    let vectorTwo = new Vector2D(parseFloat(vectorTwoStr[0]), parseFloat(vectorTwoStr[1]));

    gatherAllTwoVectorData(vectorOne, vectorTwo);
}

function oneVector() {
    let vector = createVector("singleVector");
    gatherAllOneVectorData(vector);
}

function gatherAllOneVectorData(vector) {
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

function gatherAllTwoVectorData(vectorOne, vectorTwo) {
    /* Needed Data
    Lengths
    Dot
    */

    let v1LengthSquared = vectorOne.getLengthSquared();
    let v1Length = Math.sqrt(v1LengthSquared);

    let v2LengthSquared = vectorTwo.getLengthSquared();
    let v2Length = Math.sqrt(v2LengthSquared);

    let dot = vectorOne.dot(vectorTwo);

    let angleBetween = vectorOne.angleBetween(vectorTwo);

    let vectorsAreOrthogonal = vectorOne.vectorsAreOrthogonal(vectorTwo);
    let vectorsAreParallel = vectorOne.vectorsAreParallel(vectorTwo);

    alert(
        `
        Vector One's Length: sqrt(${v1LengthSquared.toFixed(3)}) | ${v1Length.toFixed(3)}
        Vector Two's Length: sqrt(${v2LengthSquared.toFixed(3)}) | ${v2Length.toFixed(3)}
        
        Dot Product of both vectors: ${dot.toFixed(3)}

        Angle Between both vectors: ${angleBetween.toFixed(3)}rad | ${((180 * angleBetween) / Math.PI).toFixed(3)}deg

        Vectors are Orthogonal (Perpindicular): ${vectorsAreOrthogonal ? "Yes" : "No"}
        Vectors are Parallel: ${vectorsAreParallel ? "Yes" : "No"}
        `
    )
}