const hre = require("hardhat");
const fs = require("fs");

async function main() {
    // Récupération de l'adresse du contrat déployé
    const contractAddress = JSON.parse(
        fs.readFileSync(__dirname + "/../contracts-deployments/contract-address.json")
    ).Htbc;

    console.log("Adresse du contrat HTBC:", contractAddress);

    // Connexion au contrat
    const htbc = await hre.ethers.getContractAt("Htbc", contractAddress);

    // Récupération des comptes
    const [owner, user1] = await hre.ethers.getSigners();
    console.log("\nComptes utilisés:");
    console.log("Owner:", owner.address);
    console.log("User1:", user1.address);

    // Affichage des soldes initiaux
    console.log("\nSoldes initiaux:");
    console.log("HTBC de Owner:", hre.ethers.formatEther(await htbc.getUserHtbcBalance(owner.address)));
    console.log("HTBC de User1:", hre.ethers.formatEther(await htbc.getUserHtbcBalance(user1.address)));
    console.log("ETH du contrat:", hre.ethers.formatEther(await htbc.getContractEthBalance()));

    // Achat de tokens par user1
    const ethToSpend = hre.ethers.parseEther("0.1"); // 0.1 ETH
    console.log("\nUser1 achète des tokens pour", hre.ethers.formatEther(ethToSpend), "ETH");
    
    const tx = await htbc.connect(user1).buyTokens({ value: ethToSpend });
    await tx.wait();

    // Affichage des soldes après achat
    console.log("\nSoldes après achat:");
    console.log("HTBC de Owner:", hre.ethers.formatEther(await htbc.getUserHtbcBalance(owner.address)));
    console.log("HTBC de User1:", hre.ethers.formatEther(await htbc.getUserHtbcBalance(user1.address)));
    console.log("ETH du contrat:", hre.ethers.formatEther(await htbc.getContractEthBalance()));

    // Prix actuel du token
    const price = await htbc.getHtbcPrice();
    console.log("\nPrix actuel du token:", hre.ethers.formatEther(price), "ETH");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
