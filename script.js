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

    let x1 = point1.slice(1, -1).split(',')[0]
    let y1 = point1.slice(1, -1).split(',')[1]

    let x2 = point2.slice(1, -1).split(',')[0]
    let y2 = point2.slice(1, -1).split(',')[1]

    let midpoint = "(" + ((x2 - x1) / 2) + ", " + ((y2 - y1) / 2) + ")"

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