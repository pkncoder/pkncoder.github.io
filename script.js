function distance()
{
    let point1 = document.getElementById('pointOneDist').value 
    let point2 = document.getElementById('pointTwoDist').value

    let x1 = point1.slice(1, -1).split(',')[0]
    let y1 = point1.slice(1, -1).split(',')[1]

    let x2 = point2.slice(1, -1).split(',')[0]
    let y2 = point2.slice(1, -1).split(',')[1]

    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

    document.getElementById('result').value = distance.toFixed(3) + " | √" + (distance**2).toFixed(3);

    document.getElementById('pointOneDist').value = ""; 
    document.getElementById('pointTwoDist').value = "";
}

function distanceTri()
{
    let a = document.getElementById('pointATri').value;
    let b = document.getElementById('pointBTri').value;
    let c = document.getElementById('pointCTri').value;
    
    let ax = a.slice(1, -1).split(',')[0];
    let ay = a.slice(1, -1).split(',')[1];

    let bx = b.slice(1, -1).split(',')[0];
    let by = b.slice(1, -1).split(',')[1];

    let cx = c.slice(1, -1).split(',')[0];
    let cy = c.slice(1, -1).split(',')[1];

    let ab = Math.sqrt((bx - ax)**2 + (by - ay)**2)

    let bc = Math.sqrt((cx - bx)**2 + (cy - by)**2)

    let ac = Math.sqrt((cx - ax)**2 + (cy - ay)**2)

    document.getElementById('result').value = "AB: " + ab.toFixed(3) + " | BC: " + bc.toFixed(3) + " | AC: " + ac.toFixed(3) + " | Per. " + (ab+bc+ac).toFixed(3);

    document.getElementById('pointATri').value = "";
    document.getElementById('pointBTri').value = "";
    document.getElementById('pointCTri').value = "";
}

function distanceQuad()
{
    let a = document.getElementById('pointAQuad').value;
    let b = document.getElementById('pointBQuad').value;
    let c = document.getElementById('pointCQuad').value;
    let d = document.getElementById('pointDQuad').value;

    let ax = a.slice(1, -1).split(',')[0];
    let ay = a.slice(1, -1).split(',')[1];

    let bx = b.slice(1, -1).split(',')[0];
    let by = b.slice(1, -1).split(',')[1];

    let cx = c.slice(1, -1).split(',')[0];
    let cy = c.slice(1, -1).split(',')[1];

    let dx = d.slice(1, -1).split(',')[0];
    let dy = d.slice(1, -1).split(',')[1];

    let ab = Math.sqrt((bx - ax)**2 + (by - ay)**2)

    let bc = Math.sqrt((cx - bx)**2 + (cy - by)**2)

    let cd = Math.sqrt((dx - cx)**2 + (dy - cy)**2)

    let ad = Math.sqrt((dx - ax)**2 + (dy - ay)**2)

    document.getElementById('result').value = "AB: " + ab.toFixed(3) + " | BC: " + bc.toFixed(3) + " | CD: " + cd.toFixed(3) + " | AD: " + ad.toFixed(3) + " | Per. " + (ab+bc+cd+ad).toFixed(3);

    document.getElementById('pointAQuad').value = "";
    document.getElementById('pointBQuad').value = "";
    document.getElementById('pointCQuad').value = "";
    document.getElementById('pointDQuad').value = "" ;
}

function checkForLinCongr()
{
    let pointA1 = document.getElementById("pointALine1LinCheck").value;
    let pointB1 = document.getElementById("pointBLine1LinCheck").value;

    let pointA2 = document.getElementById("pointALine2LinCheck").value;
    let pointB2 = document.getElementById("pointBLine2LinCheck").value;

    let ax1 = pointA1.slice(1, -1).split(',')[0];
    let ay1 = pointA1.slice(1, -1).split(',')[1];

    let bx1 = pointB1.slice(1, -1).split(',')[0];
    let by1 = pointB1.slice(1, -1).split(',')[1];
    
    let ax2 = pointA2.slice(1, -1).split(',')[0];
    let ay2 = pointA2.slice(1, -1).split(',')[1];

    let bx2 = pointB2.slice(1, -1).split(',')[0];
    let by2 = pointB2.slice(1, -1).split(',')[1];

    let AB1 = Math.sqrt((bx1 - ax1)**2 + (by1 - ay1)**2);

    let AB2 = Math.sqrt((bx2 - ax2)**2 + (by2 - ay2)**2);

    if (AB1 === AB2)
    {
        document.getElementById('result').value = "Congruent";
    }

    else
    {
        document.getElementById('result').value = "Not Congruent";
    }
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

    document.getElementById('pointOneMidp').value = "";
    document.getElementById('pointTwoMidp').value = "";
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

    document.getElementById('pointOneRatp').value = "";
    document.getElementById('pointTwoRatp').value = "";
    document.getElementById('ratioPart').value = "";
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

    document.getElementById('pointOneEndRat').value = "";
    document.getElementById('pointTwoEndRat').value = "";
    document.getElementById('ratioEndRat').value = "";
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

    document.getElementById("equation").value = "";
}

function pythagLL () {
    let distOne = document.getElementById("distOnePyLL").value;

    let distTwo = document.getElementById("distTwoPyLL").value;

    let ans = Math.sqrt((distOne**2 + distTwo**2))

    document.getElementById("result").value = ans

    document.getElementById("distOnePyLL").value = "";
    document.getElementById("distTwoPyLL").value = "";
}

function pythagHL () {
    let hype = document.getElementById("distOneHypPyHL").value;

    let leg = document.getElementById("distTwoLegPyHL").value;

    let ans = Math.sqrt((hype**2 - leg**2));

    document.getElementById("result").value = ans;

    document.getElementById("distOneHypPyHL").value = "";
    document.getElementById("distTwoLegPyHL").value = "";
}

function rateOfChange()
{
    let p1 = document.getElementById("pointOneRateChange").value;

    let p2 = document.getElementById("pointTwoRateChange").value;

    let x1 = parseInt(p1.slice(1, -1).split(',')[0])
    let y1 = parseInt(p1.slice(1, -1).split(',')[1])
    
    let x2 = parseInt(p2.slice(1, -1).split(',')[0])
    let y2 = parseInt(p2.slice(1, -1).split(',')[1])

    xAns = x2 - x1;
    yAns = y2 - y1;

    document.getElementById("result").value = yAns + "/" + xAns;
}

function distanceOnePhys () {
    let startVel = document.getElementById("distCalcVelIPhysI").value;

    let endVel = document.getElementById("distCalcVelIIPhysI").value;

    const a = -9.81;

    let ans = ((endVel**2 - startVel**2)/(a * 2));

    document.getElementById("result").value = ans;

    document.getElementById("distCalcVelIPhysI").value = "";
    document.getElementById("distCalcVelIIPhysI").value = "";
}

function finalVelPhys () {
    let startVel = document.getElementById("finVelCalcVelIPhysI").value;

    let distance = document.getElementById("finVelCalcDistancePhysI").value;

    const a = -9.81;

    let ans = Math.sqrt((startVel**2 + 2 * a * distance));

    document.getElementById("result").value = ans;

    document.getElementById("finVelCalcVelIPhysI").value = "";
    document.getElementById("finVelCalcDistancePhysI").value = "";
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

    document.getElementById("finTimCalcVelIPhysI").value = "";
    document.getElementById("finTimCalcDistancePhysI").value = "";
}

function xDistPhysII () {
    let startVel = document.getElementById("xDistTravCalcVelXPhysII").value;

    let startDist = document.getElementById("xDistTravCalcInitDistancePhysII").value;

    const acel = -9.81;

    let time = Math.sqrt(((startDist * 2) / acel));

    let ans = startVel * time;

    document.getElementById("result").value = ans;

    document.getElementById("xDistTravCalcVelXPhysII").value = "";
    document.getElementById("xDistTravCalcInitDistancePhysII").value = "";
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

    document.getElementById("xDistTravFVelyPhysII").value = "";
    document.getElementById("xDistTravFInitAnglePhysII").value = "";
    document.getElementById("XDistTravFInitHieghtPhysII").value = "";
    document.getElementById("XDistTravFInitFinPhysII").value = "";
}

function basicPECalc()
{
    const g = 9.8;

    let mass = document.getElementById("basicPEMass").value;
    let height = document.getElementById("basicPEInitHieght").value;

    let ans = mass * g * height;

    document.getElementById("result").value = ans;

    document.getElementById("basicPEMass").value = "";
    document.getElementById("basicPEInitHieght").value = "";
}

function basicHieghtCalc()
{
    let mass = document.getElementById("basicHieghtMass").value;
    let PE = document.getElementById("basicHieghtPE").value;

    const g = 9.8;

    let ans = PE / (mass * g);

    document.getElementById("result").value = ans;

    document.getElementById("basicHieghtMass").value = "";
    document.getElementById("basicHieghtPE").value = "";
}

function basicMassPECalc()
{
    let height = document.getElementById("basicMassPEHieght").value;
    let PE = document.getElementById("basicMass2PE").value;

    const g = 9.8;

    let ans = PE / (height * g);

    document.getElementById("result").value = ans;

    document.getElementById("basicMassPEHieght").value = "";
    document.getElementById("basicMass2PE").value = "";
}

function basicKECalc()
{
    let mass = document.getElementById("basicKEMass").value;
    let initVel = document.getElementById("basicKEInitVel").value;

    let ans = 1/2 * mass * initVel**2;

    document.getElementById("result").value = ans;

    document.getElementById("basicKEMass").value = "";
    document.getElementById("basicKEInitVel").value = "";
}

function basicVelCalc()
{
    let objMass = document.getElementById("basicVelMass").value;
    let KE = document.getElementById("basicVelKE").value;

    let ans = Math.sqrt((2*KE/objMass));

    document.getElementById("result").value = ans;

    document.getElementById("basicMassKEVel").value = "";
    document.getElementById("basicVelKE").value = "";
}

function basicMassKECalc()
{
    let vel = document.getElementById("basicMassKEVel").value;
    let KE = document.getElementById("basicMass2KE").value;

    let ans = ((2 * KE) / (vel**2))

    document.getElementById("result").value = ans;

    document.getElementById("basicMassKEVel").value = "";
    document.getElementById("basicMass2KE").value = "";
}