const hre = require("hardhat");

async function main(){
  
  const lockedAmount = hre.ethers.parseEther("0.001");
  const etherStake = await hre.ethers.deployContract("EtherStake");
  await etherStake.waitForDeployment();
  console.log("deployed succesfully to ", etherStake.target);
}


main().catch((error)=>{
  console.log(error);
  process.exitCode = 1;
})