// Github Link

// Problem 1:- Kilometer to Meter
function KilometerToMeter(kilometer) {
	var meter = kilometer * 1000;
	return meter;
}

// Problem 2:- Hotel Cost
function nightStay(days) {
	var totalCost = 0;
	if (days <= 10) {
		totalCost = days * 100;
	} else if (days <= 20) {
		var tenDays = 10 * 100;
		var remaining = days - 10;
		var twentyDays = remaining * 80;
		totalCost = tenDays + twentyDays;
	} else {
		var tenDays = 10 * 100;
		var twentyDays = 10 * 80;
		var remaining = days - 20;
		var twentyOver = remaining * 50;
		totalCost = tenDays + twentyDays + twentyOver;
	}
	return totalCost;
}

// Problem 3:- Mega Friend
function megaFriend(friend) {
	var maxLength = 0;
	var longest = " ";
	for (var i = 0; i < friend.length; i++) {
		if (friend[i].length > maxLength) {
			maxLength = friend[i].length;
			longest = friend[i];
		}
	}
	return longest;
}

// Problem 4:- Budget Calculator
function budgetCalculator( watchQuantity, phoneQuantity, laptopQuantity) {
    var watchCost = watchQuantity * 50;
    var phoneCost = phoneQuantity * 100;
    var laptopCost = laptopQuantity * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}