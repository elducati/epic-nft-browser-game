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
  let txn;
  txn = await gameContract.mintCharacterNFT(1);
await txn.wait(); 
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();

// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
};

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