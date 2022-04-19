const TetherToken = artifacts.require("TetherToken");

contract('TetherToken', function(accounts) {
  it("should put 100000 TetherToken in the first account", function() {
    return TetherToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100000, "100000 wasn't in the first account");
    });
  });
  it("should send coin correctly", function() {
    var tether;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return TetherToken.deployed().then(function(instance) {
      tether = instance;
      return tether.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = parseInt(balance);
      return tether.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = parseInt(balance);
      return tether.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return tether.balanceOf.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = parseInt(balance);
      return tether.balanceOf.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = parseInt(balance);

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
