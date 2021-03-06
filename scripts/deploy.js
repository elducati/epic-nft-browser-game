const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Ducati", "Dentes", "Paragon"],       // Names
    ["https://www.freepnglogos.com/uploads/soldier-png/image-battlefield-soldier-battlefield-wiki-37.png", // Images
    "https://www.freepnglogos.com/uploads/soldier-png/soldier-march-jon-jost-weblog-26.png", 
    "https://www.freepnglogos.com/uploads/soldier-png/soldier-soldiers-inc-military-strategy-game-plarium-34.png"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],
    "El", //Boss Name
    "https://www.kindpng.com/picc/m/76-760016_mafia-boss-logo-hd-png-download.png", //Boss image 
    10000, //Boss hp
    50 //Boss attack damage  
    )                      // Attack damage values);
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
}
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();