// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    console.log("Déploiement du contrat HTBC...");

    // Déploiement du contrat
    const Htbc = await hre.ethers.getContractFactory("Htbc");
    const htbc = await Htbc.deploy();

    await htbc.waitForDeployment();

    console.log(`Contrat HTBC déployé à l'adresse : ${htbc.target}`);

    // Vérification des détails du contrat
    const name = await htbc.name();
    const symbol = await htbc.symbol();
    const decimals = await htbc.decimals();
    const maxSupply = await htbc.MAX_SUPPLY();
    const price = await htbc.getHtbcPrice();

    console.log("\nDétails du contrat :");
    console.log("Nom:", name);
    console.log("Symbole:", symbol);
    console.log("Décimales:", decimals);
    console.log("Supply Maximum:", hre.ethers.formatEther(maxSupply), "HTBC");
    console.log("Prix par token:", hre.ethers.formatEther(price), "ETH");

    // Sauvegarde de l'adresse pour une utilisation ultérieure
    const fs = require("fs");
    const contractsDir = __dirname + "/../contracts-deployments";
    
    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ Htbc: htbc.target }, undefined, 2)
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});