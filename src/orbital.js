var orbitals = [];
var coms = [];
var def = [];
var buffer = 5;
var Orbital = function(color, size, x, y, orbit, distance, speed, angle) {
	if (angle === UNDEF) angle = 0;
	var t = {};
	t.name = "Some Shithole Planet";
	t.type = 'orbital';
	t.x = x;
	t.y = y;
	t.color = color;
	t.size = size;
	t.isSun = false;
	if (orbit)
		t.orbit = {
			planet: orbit,
			distance: distance,
			speed: speed,
			angle: angle
		};
	t.update = function() {

		// Mouse over
		var a = Mouse.vx - t.x;
		var b = Mouse.vy - t.y;
		var c = Math.sqrt(a * a + b * b);
		if (c < t.size + buffer) {
			hoverName = t.name;
			if (Mouse.release) {
				pop.show(t);
				sndClick.play();
			}
		}

		if (t.orbit) {
			var e = t.orbit;
			e.angle += e.speed;
			t.x = e.distance * Math.cos(e.angle) + e.planet.x;
			t.y = e.distance / View.tilt * Math.sin(e.angle) + e.planet.y;
		}
	}
	t.render = function() {
		renderOrbit(t);
		renderTrail(t);
		renderBody(t, t.x, t.y);
	}
	orbitals.push(t);
	return t;
};

Orbital.sun = function(color, size, x, y) {
	var t = Orbital(color, size, x, y, null, null, null);
	t.name = t.type = 'sun';
	t.isSun = true;
	return t;
}

Orbital.planet = function(color, size, orbit, distance, speed, angle) {
	if (angle === UNDEF) angle = 0;
	var t = Orbital(color, size, 0, 0, orbit, distance + size / 2, speed, angle);
	t.name = t.type = 'planet';
	t.update = extend(t.update, function() {

	})
	return t;
}

Orbital.miningStation = function(orbit) {
	var angle = splitToMax(Orbital.miningStation.max, orbit, coms);
	if (angle === UNDEF)
		return;
	var t = Orbital(getHSL(212, 100, 97), 2, 0, 0, orbit, orbit.size * 3, -0.005);
	t.name = t.type = 'mining';
	t.update = extend(t.update, function() {
		base.minerals += base.mineRate;
	})
	return t;
}

Orbital.miningStation.max = 4;

Orbital.satellite = function(orbit) {
	var angle = splitToMax(Orbital.satellite.max, orbit, coms);
	if (angle === UNDEF)
		return;
	var t = Orbital(getHSL(160, 100, 50), 2, 0, 0, orbit, orbit.size * 5, 0.01, angle);
	t.name = t.type = 'satellite';
	t.index = coms.length;
	coms.push(t);
	t.render = extend(t.render, function() {
		for (var i = t.index; i < coms.length; i++) {
			var e = coms[i];
			if (e != t && getDistance(e, t) <= base.comRange) {
				renderComLine(t, e);
			}
		}
	})
	return t;
}

Orbital.satellite.max = 3;

Orbital.defenseStation = function(orbit) {
	var angle = splitToMax(Orbital.defenseStation.max, orbit, def);
	if (angle === UNDEF)
		return;
	var t = Orbital(getHSL(33, 100, 50), 2, 0, 0, orbit, orbit.size * 7, 0.005, angle);
	t.name = t.type = 'defense';
	t.index = def.length;
	def.push(t);
	t.render = extend(t.render, function() {
		//code to kill dem enemies
	})
	return t;
}

Orbital.defenseStation.max = 2;