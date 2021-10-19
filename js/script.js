/* //this function those this.
var doCoolStuff = function () {
	ElementById('cool').className;
	// changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool white';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}
*/

var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool white';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}



var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOFWheels: 4,
			seats: [
				'seat 1', 
				'seat 2', 
				'seat 3', 
				'seat 4'
			],
			turnOn: function () {
				this.isTurnedOn = true;	
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car ' +isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			} 
		};


		console.log('hello there friends!')