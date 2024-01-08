function distance()
{
    let point1 = document.getElementById('pointOneDist').value 
    let point2 = document.getElementById('pointTwoDist').value

    let x1 = point1.slice(1, -1).split(',')[0]
    let y1 = point1.slice(1, -1).split(',')[1]

    let x2 = point2.slice(1, -1).split(',')[0]
    let y2 = point2.slice(1, -1).split(',')[1]

    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

    document.getElementById('result').value = distance
}

function midpoint()
{
    let point1 = document.getElementById('pointOneMidp').value 
    let point2 = document.getElementById('pointTwoMidp').value

    let x1 = parseInt(point1.slice(1, -1).split(',')[0])
    let y1 = parseInt(point1.slice(1, -1).split(',')[1])

    let x2 = parseInt(point2.slice(1, -1).split(',')[0])
    let y2 = parseInt(point2.slice(1, -1).split(',')[1])

    let midpoint = "(" + ((x2 + x1) / 2) + ", " + ((y2 + y1) / 2) + ")"

    document.getElementById("result").value = midpoint
}

function partition()
{
    // Get the points and ratio's
    let point1 = document.getElementById('pointOneRatp').value 
    let point2 = document.getElementById('pointTwoRatp').value
    let ratio = document.getElementById('ratioPart').value

    // Get x1 and y1
    let x1 = parseInt(point1.slice(1, -1).split(',')[0])
    let y1 = parseInt(point1.slice(1, -1).split(',')[1])
    
    // Get x2 and y2
    let x2 = parseInt(point2.slice(1, -1).split(',')[0])
    let y2 = parseInt(point2.slice(1, -1).split(',')[1])

    // Get part one and two of the ratio
    let partOne = parseInt(ratio.split(':')[0])
    let partTwo = parseInt(ratio.split(':')[1])

    // Math
    let xAns = ((partOne / (partOne + partTwo)) * (x2 - x1)) + x1
    let yAns = ((partOne / (partOne + partTwo)) * (y2 - y1)) + y1

    // Display to screen
    document.getElementById("result").value = "(" + xAns + ", " + yAns + ")"
}

function getEndpointFromRatio()
{
    // Get the points and ratio's
    let point1 = document.getElementById('pointOneEndRat').value 
    let point2 = document.getElementById('pointTwoEndRat').value
    let ratio = document.getElementById('ratioEndRat').value

    // Get x1 and y1
    let x1 = parseInt(point1.slice(1, -1).split(',')[0])
    let y1 = parseInt(point1.slice(1, -1).split(',')[1])
    
    // Get x2 and y2
    let x2 = parseInt(point2.slice(1, -1).split(',')[0])
    let y2 = parseInt(point2.slice(1, -1).split(',')[1])

    // Get part one and two of the ratio
    let partOne = parseInt(ratio.split(':')[0])
    let partTwo = parseInt(ratio.split(':')[1])

    // Math
    let xAns = ((x2 - x1) / partOne) *  (partOne + partTwo)
    let yAns = ((y2 - y1) / partOne) *  (partOne + partTwo)

    // Display to screen
    document.getElementById("result").value = "(" + xAns + ", " + yAns + ")"
}

function solveEquation()
{
    // Get our variables
    let equation = document.getElementById("equation").value
    let n = equation.length, sign = 1, coeff = 0;
    let total = 0, i = 0;
 
    // Traverse the equation
    for (let j = 0; j < n; j++) {
        if (equation[j] == '+' || equation[j] == '-') {
            if (j > i)
                total += sign * parseInt(equation.substr(i, j - i));
            i = j;
        }
 
        // For cases such as: x, -x, +x
        else if (equation[j] == 'x') {
            if ((i == j) || equation[j - 1] == '+')
                coeff += sign;
            else if (equation[j - 1] == '-')
                coeff -= sign;
            else
                coeff += sign * parseInt(equation.substr(i, j - i));
            i = j + 1;
        }
 
        // Flip sign once '=' is seen
        else if (equation[j] == '=') {
            if (j > i)
                total += sign * parseInt(equation.substr(i, j - i));
            sign = -1;
            i = j + 1;
        }
    }
 
    // There may be a number left in the end
    if (i < n)
        total += sign * parseInt(equation.substr(i));
 
    // x = total sum / coeff of x
    // '-' sign indicates moving
    // numeric value to right hand side
    let ans = -(total / coeff);
    document.getElementById("result").value = "X = " + ans
}

function pythagLL () {
    let distOne = document.getElementById("distOnePyLL").value;

    let distTwo = document.getElementById("distTwoPyLL").value;

    let ans = Math.sqrt((distOne**2 + distTwo**2))

    document.getElementById("result").value = ans
}

function pythagHL () {
    let hype = document.getElementById("distOneHypPyHL").value;

    let leg = document.getElementById("distTwoLegPyHL").value;

    let ans = Math.sqrt((hype**2 - leg**2));

    document.getElementById("result").value = ans;
}

function distanceOnePhys () {
    let startVel = document.getElementById("distCalcVelIPhysI").value;

    let endVel = document.getElementById("distCalcVelIIPhysI").value;

    const a = -9.81;

    let ans = ((endVel**2 - startVel**2)/(a * 2));

    document.getElementById("result").value = ans;
}

function finalVelPhys () {
    let startVel = document.getElementById("finVelCalcVelIPhysI").value;

    let distance = document.getElementById("finVelCalcDistancePhysI").value;

    const a = -9.81;

    let ans = Math.sqrt((startVel**2 + 2 * a * distance));

    document.getElementById("result").value = ans;
}

function finalTimePhys () {
    let startVel = document.getElementById("finTimCalcVelIPhysI").value;

    let distance = document.getElementById("finTimCalcDistancePhysI").value;

    const acel = -9.81;

    let a = -1 * ((acel/2));
    let b = -1 * startVel;
    let c = distance;

    let ans = ((-1 * b) + Math.sqrt(((b**2) - (4 * a * c)))) / (2 * a);

    document.getElementById("result").value = ans;
}

function xDistPhysII () {
    let startVel = document.getElementById("xDistTravCalcVelXPhysII").value;

    let startDist = document.getElementById("xDistTravCalcInitDistancePhysII").value;

    const acel = -9.81;

    let time = Math.sqrt(((startDist * 2) / acel));

    let ans = startVel * time;

    document.getElementById("result").value = ans;
}

function xDistYVelPhysII () {
    let startVel = document.getElementById("xDistTravVCalcVelyPhysII").value;

    let theta = document.getElementById("xDistTravVCalcInitAnglePhysII").value;
    var pi = Math.PI;
    theta *= (pi/180);

    const g = -9.81;

    let Vy = startVel * Math.sin(theta);

    let Vx = startVel * Math.cos(theta);

    let ChangeVy = (Vy * -1) - Vy;

    let time = ChangeVy / g

    let ans = Vx * time

    document.getElementById("result").value = ans
}

function xDistTravFPhysII () {
    let startVel = document.getElementById("xDistTravFVelyPhysII").value;

    let theta = document.getElementById("xDistTravFInitAnglePhysII").value;
    theta *= (Math.PI/180);

    let Ho = document.getElementById("XDistTravFInitHieghtPhysII").value;
    let Hf = document.getElementById("XDistTravFInitFinPhysII").value;

    let changeDist = -1 * (Hf - Ho);

    const g = -9.81;


    let Vy = startVel * Math.sin(theta);

    let Vx = startVel * Math.cos(theta);

    let time = ((-1 * Vy) - (Math.sqrt((((Vy**2) - (4 * (g / 2) * changeDist)))))) / g;

    let ans = time * Vx;

    document.getElementById("result").value = ans;
}