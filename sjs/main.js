/*
 * New Rating = Old Rating + K * (Score - Win Expectancy)
 * K is a constant (32 for 0-2099, 24 for 2100-2399, 16 for 2400 and above)
 * Score is 1 for a win, 0.5 for a draw and 0 for a loss.
 * The Win Expectancy is calculated using the following formula :
 * Win Expectancy = 1 / (10^((OpponentRating-YourRating)/400)+1)
 */

rating_1 = 1200;
rating_2 = 1200;

K = 32;

result_1 = 1; // 1 = win, 0.5 = draw, 0 = loss
result_2 = (result_1 === 1) ? 0 : (result_1 === 0) ? 1 : 0.5;

diff_1 = ((rating_2 - rating_1) / 400) + 1;
diff_2 = ((rating_1 - rating_2) / 400) + 1;

win_expectancy_1 = 1 / ( Math.pow( 10, diff_1 ) );
win_expectancy_2 = 1 / ( Math.pow( 10, diff_2 ) );

new_rating_1 = Math.round(rating_1 + K * (result_1 - win_expectancy_1));
new_rating_2 = Math.round(rating_2 + K * (result_2 - win_expectancy_2));

console.log (new_rating_1);
console.log (new_rating_2);
