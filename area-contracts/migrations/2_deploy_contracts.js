const Areas = artifacts.require('Areas');

module.exports = deployer => {
  deployer.deploy(Areas, {
    gas: 12500000
  });
};
