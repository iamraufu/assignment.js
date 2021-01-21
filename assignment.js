// https://github.com/iamraufu/assignment.js

// First Problem
function kilometerToMeter(kilometer) {
    if (kilometer < 0 || kilometer == -0) {
        return "Invalid input";
    } else {
        var meter = kilometer * 1000;
        return meter;
    }

}
kilometerToMeter(3);

// Second Problem
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0 || watch == -0 || phone == -0 || laptop == -0) {
        return "Invalid input";
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var budget = watchPrice + phonePrice + laptopPrice;
    }
    return budget;
}
budgetCalculator(7, 3, 5);

// Third Problem
var cost = 0;

function hotelCost(day) {

    if (day < 0 || day == -0) {
        return "Invalid input";
    } else if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firsTenDaysCost = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDaysCost = remainingDays * 80;
        cost = firsTenDaysCost + secondTenDaysCost;
    } else {
        var firsTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDays = day - 20;
        var thirdTenDaysCost = remainingDays * 50;
        cost = firsTenDaysCost + secondTenDaysCost + thirdTenDaysCost;
    }

    return cost;
}

hotelCost(30);

// Fourth Problem
var friend = megaFriend(["Elon Musk", "Jeff Bezos", "Bernard Arnault & Family", "Bill Gates", "Mark Zuckerberg", "Zhong Shanshan", "Larry Ellison", "Warren Buffet", "Larry Page", "Sergey Brin"]);

function megaFriend(friend) {
    if (friend.length == 0) {
        return "Invalid input";
    } else {
        var longestWord = "";
        for (var i = 0; i < friend.length; i++) {
            if (longestWord.length < friend[i].length) {
                longestWord = friend[i];
            }
        }
    }
    return longestWord;
}