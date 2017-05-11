$(function () {
	var status = false;
	var update = function () {
		if (status) {
			$('#red').attr('src', 'empty.png');
			$('#green').attr('src', 'green.png');
		} else {
			$('#red').attr('src', 'red.png');
			$('#green').attr('src', 'empty.png');
		}
	};
	setInterval(function () {
		status = !status;
		update();
	}, 5000);
	setTimeout(function () {
		setInterval(function () {
			setYellow();
		}, 5000);
		setYellow();
	}, 4500)
	update();
});
