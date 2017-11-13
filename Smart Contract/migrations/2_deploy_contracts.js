var SelfSoverign = artifacts.require("./SelfSoverign.sol");

module.exports = function(deployer) {
  deployer.deploy(SelfSoverign);
};
