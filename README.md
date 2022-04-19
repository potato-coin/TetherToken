# TetherToken
TetherToken (USDT)合约部署测试

```bash
npm install --global truffle

truffle develop
compile
migrate

let instance = await TetherToken.deployed()
instance.totalSupply()
instance.getOwner()

let accounts = await web3.eth.getAccounts()
instance.transfer(accounts[1], 10)

let balance = await instance.balanceOf(accounts[1])
balance.toNumber()
```
