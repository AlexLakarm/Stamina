const hre = require("hardhat");

async function main() {
    console.log("Déploiement du contrat HTBC sur Holesky...");

    // Déploiement du contrat
    const Htbc = await hre.ethers.getContractFactory("Htbc");
    const htbc = await Htbc.deploy();

    await htbc.waitForDeployment();

    console.log(`Contrat HTBC déployé à l'adresse : ${htbc.target}`);

    // Attendre quelques blocs pour la vérification
    console.log("Attente de 6 blocs pour la vérification...");
    await htbc.deploymentTransaction().wait(6);

    // Vérification du contrat sur Etherscan
    console.log("Vérification du contrat sur Etherscan...");
    try {
        await hre.run("verify:verify", {
            address: htbc.target,
            constructorArguments: [],
        });
        console.log("Contrat vérifié sur Etherscan !");
    } catch (error) {
        if (error.message.includes("Already Verified")) {
            console.log("Le contrat est déjà vérifié !");
        } else {
            console.error("Erreur lors de la vérification :", error);
        }
    }

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
    const contractsDir = __dirname + "/../../contracts-deployments";
    
    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    // Sauvegarde dans le format simple
    fs.writeFileSync(
        contractsDir + "/contract-address-hol.json",
        JSON.stringify({ 
            Htbc: htbc.target
        }, undefined, 2)
    );

    // Sauvegarde des informations détaillées dans un fichier séparé
    fs.writeFileSync(
        contractsDir + "/holesky-deployment-details.json",
        JSON.stringify({ 
            Htbc: htbc.target,
            network: "holesky",
            timestamp: new Date().toISOString(),
            details: {
                name,
                symbol,
                decimals: Number(decimals),
                maxSupply: hre.ethers.formatEther(maxSupply),
                price: hre.ethers.formatEther(price)
            }
        }, undefined, 2)
    );

    console.log("\nDéploiement terminé ! 🚀");
    console.log("N'oubliez pas de sauvegarder l'adresse du contrat :", htbc.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
