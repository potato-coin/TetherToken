pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TetherToken.sol";

contract TestTetherToken {

  function testInitialBalanceUsingDeployedContract() public {
    TetherToken tether = TetherToken(DeployedAddresses.TetherToken());

    uint expected = 100000;

    Assert.equal(tether.balanceOf(tx.origin), expected, "Owner should have 100000 TetherToken initially");
  }

  function testInitialBalanceWithNewTetherToken() public {
    TetherToken tether = new TetherToken(100000, "MyToken", "MT", 18);

    uint expected = 100000;

    Assert.equal(tether.totalSupply(), expected, "Owner should have 100000 TetherToken initially");
  }

}
