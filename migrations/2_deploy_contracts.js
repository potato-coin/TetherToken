const SafeMath = artifacts.require("SafeMath");
const Pausable = artifacts.require("Pausable");
const BasicToken = artifacts.require("BasicToken");
const Ownable = artifacts.require("Ownable");
const ERC20Basic = artifacts.require("ERC20Basic");
const ERC20 = artifacts.require("ERC20");
const StandardToken = artifacts.require("StandardToken");
const BlackList = artifacts.require("BlackList");
const UpgradedStandardToken = artifacts.require("UpgradedStandardToken");
const TetherToken = artifacts.require("TetherToken");

module.exports = function(deployer) {
  // deployer.deploy(SafeMath);
  // deployer.deploy(Ownable);
  // // deployer.deploy(ERC20Basic);

  // deployer.link(Ownable, Pausable);
  // deployer.deploy(Pausable);

  // // deployer.link(ERC20Basic, ERC20);
  // // deployer.deploy(ERC20);

  // // deployer.link(SafeMath, BasicToken);
  // // deployer.link(Ownable, BasicToken);
  // // deployer.link(ERC20Basic, BasicToken);
  // // deployer.deploy(BasicToken);

  // // deployer.link(BasicToken, StandardToken);
  // // deployer.link(ERC20, StandardToken);
  // // deployer.deploy(StandardToken);

  // // deployer.link(Ownable, BlackList);
  // // deployer.link(BasicToken, BlackList);
  // // deployer.deploy(BlackList);

  // // deployer.link(BlackList, UpgradedStandardToken);
  // // deployer.deploy(UpgradedStandardToken);
  
  // deployer.link(Pausable, TetherToken);
  // // deployer.link(BlackList, TetherToken);
  // // deployer.link(StandardToken, TetherToken);
  deployer.deploy(TetherToken, 100000, "MyToken", "MT", 18);
};
