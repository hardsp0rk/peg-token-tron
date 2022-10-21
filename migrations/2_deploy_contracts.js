var PegToken = artifacts.require("./pegToken/PegToken.sol");
var ProxyAdmin = artifacts.require("./proxy/ProxyAdmin.sol");
var TransparentUpgradeableProxy = artifacts.require("./proxy/TransparentUpgradeableProxy.sol");

module.exports = async function(deployer) {
  await deployer.deploy(PegToken);
  await deployer.deploy(ProxyAdmin);
  await deployer.deploy(
    TransparentUpgradeableProxy,
    PegToken.address,
    ProxyAdmin.address,
    "0x4cd88b7600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000a4255534420546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044255534400000000000000000000000000000000000000000000000000000000"
  );
  const impl = await PegToken.deployed();
  await impl.initialize("BUSD Token", "BUSD");
};
