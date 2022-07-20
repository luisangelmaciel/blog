window.addEventListener("DOMContentLoaded",wof);
function wof() {
	var arrow = document.querySelector(".arrow"),
		arrowAngle = 0,
		wheelAngle = 0,
		snapAngle = 360/24/3,
		getAngle = function(ele) {
			let el = document.querySelector(ele),
				elTr = el.style.transform,
				// break down matrix value of transform and get angle
				matrixVal = elTr.split('(')[1].split(')')[0].split(','),
				cos1 = matrixVal[0],
				sin = matrixVal[1],
				angle = Math.round(Math.atan2(sin, cos1) * (180 / Math.PI));
			
			// convert negative angles to positive, correct -0 issue
			if (angle < 0) {
				angle += 360;
				if (angle == "-0") {
					angle = 0;
				}
			}
			return angle;
		},
		updateArrowAngle = function() {
			let newWheelAngle = getAngle(".wheel"); 

			if (newWheelAngle > wheelAngle) {
				// right
				arrowAngle = snapAngle - (newWheelAngle % snapAngle) * 16;
				
			} else if (newWheelAngle < wheelAngle) {
				// left
				arrowAngle = snapAngle - (newWheelAngle % snapAngle) * 16 + 64;
			}
			
			arrow.style.transform = "rotate(" + arrowAngle + "deg)";
			wheelAngle = newWheelAngle;
		};
	Draggable.create(".wheel", {
		type: "rotation",
		throwProps: true,
		dragResistance: 0,
		minDuration: 3,
		snap: function(endValue) {
			return Math.round(endValue / snapAngle) * snapAngle;
		},
		onDrag: updateArrowAngle,
		onThrowComplete: function() {
			arrowAngle = 0;
			updateArrowAngle();
		},
		onThrowUpdate: updateArrowAngle
	});
}