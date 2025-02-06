const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("HTBC Token", function () {
    // Fixture qui déploie le contrat et configure les comptes
    async function deployHtbcFixture() {
        const [owner, user1, user2] = await ethers.getSigners();
        
        const Htbc = await ethers.getContractFactory("Htbc");
        const htbc = await Htbc.deploy();

        return { htbc, owner, user1, user2 };
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { htbc, owner } = await loadFixture(deployHtbcFixture);
            expect(await htbc.owner()).to.equal(owner.address);
        });

        it("Should mint initial supply to owner", async function () {
            const { htbc, owner } = await loadFixture(deployHtbcFixture);
            const initialSupply = ethers.parseEther("1000"); // 1000 tokens
            expect(await htbc.balanceOf(owner.address)).to.equal(initialSupply);
        });

        it("Should set the correct token details", async function () {
            const { htbc } = await loadFixture(deployHtbcFixture);
            expect(await htbc.name()).to.equal("HowToBlockchain Crypto");
            expect(await htbc.symbol()).to.equal("HTBC");
            expect(await htbc.decimals()).to.equal(18);
        });
    });

    describe("Constants", function () {
        it("Should have correct max supply", async function () {
            const { htbc } = await loadFixture(deployHtbcFixture);
            const maxSupply = ethers.parseEther("21000000"); // 21M tokens
            expect(await htbc.MAX_SUPPLY()).to.equal(maxSupply);
        });

        it("Should have correct price per token", async function () {
            const { htbc } = await loadFixture(deployHtbcFixture);
            expect(await htbc.PRICE_PER_TOKEN()).to.equal(ethers.parseEther("0.01")); // 0.01 ETH
        });
    });

    describe("Token Purchase", function () {
        it("Should allow users to buy tokens", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            const ethAmount = ethers.parseEther("0.1"); // 0.1 ETH
            const expectedTokens = ethers.parseEther("10"); // Should get 10 tokens for 0.1 ETH

            await expect(htbc.connect(user1).buyTokens({ value: ethAmount }))
                .to.emit(htbc, "Transfer")
                .withArgs(ethers.ZeroAddress, user1.address, expectedTokens);

            expect(await htbc.balanceOf(user1.address)).to.equal(expectedTokens);
        });

        it("Should revert if no ETH is sent", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            await expect(htbc.connect(user1).buyTokens({ value: 0 }))
                .to.be.revertedWith("Must send ETH");
        });

 

        it("Should calculate correct token amount for arbitrary ETH values", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            const ethAmount = ethers.parseEther("0.0357"); // 0.0357 ETH
            const expectedTokens = ethers.parseEther("3.57"); // Should get 3.57 tokens

            await htbc.connect(user1).buyTokens({ value: ethAmount });
            expect(await htbc.balanceOf(user1.address)).to.equal(expectedTokens);
        });
    });

    describe("ETH Withdrawal", function () {
        it("Should allow owner to withdraw ETH", async function () {
            const { htbc, owner, user1 } = await loadFixture(deployHtbcFixture);
            const ethAmount = ethers.parseEther("0.1");

            // User buys tokens
            await htbc.connect(user1).buyTokens({ value: ethAmount });

            // Check contract balance
            expect(await ethers.provider.getBalance(htbc.target))
                .to.equal(ethAmount);

            // Owner withdraws
            await expect(htbc.connect(owner).withdrawETH())
                .to.changeEtherBalance(owner, ethAmount);
        });

        it("Should revert if non-owner tries to withdraw", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            await expect(htbc.connect(user1).withdrawETH())
                .to.be.revertedWithCustomError(htbc, "OwnableUnauthorizedAccount");
        });

        it("Should revert if no ETH to withdraw", async function () {
            const { htbc, owner } = await loadFixture(deployHtbcFixture);
            await expect(htbc.connect(owner).withdrawETH())
                .to.be.revertedWith("No ETH to withdraw");
        });
    });

    describe("Getters", function () {
        it("Should return correct user HTBC balance", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            const ethAmount = ethers.parseEther("0.1"); // 0.1 ETH
            const expectedTokens = ethers.parseEther("10"); // 10 HTBC

            await htbc.connect(user1).buyTokens({ value: ethAmount });
            const balance = await htbc.getUserHtbcBalance(user1.address);
            
            console.log("\nUser HTBC Balance Test:");
            console.log("Expected:", ethers.formatEther(expectedTokens), "HTBC");
            console.log("Actual:", ethers.formatEther(balance), "HTBC");
            
            expect(balance).to.equal(expectedTokens);
        });

        it("Should return correct contract ETH balance", async function () {
            const { htbc, user1 } = await loadFixture(deployHtbcFixture);
            const ethAmount = ethers.parseEther("0.1"); // 0.1 ETH

            await htbc.connect(user1).buyTokens({ value: ethAmount });
            const balance = await htbc.getContractEthBalance();
            
            console.log("\nContract ETH Balance Test:");
            console.log("Expected:", ethers.formatEther(ethAmount), "ETH");
            console.log("Actual:", ethers.formatEther(balance), "ETH");
            
            expect(balance).to.equal(ethAmount);
        });

        it("Should return correct HTBC price", async function () {
            const { htbc } = await loadFixture(deployHtbcFixture);
            const expectedPrice = ethers.parseEther("0.01"); // 0.01 ETH
            const price = await htbc.getHtbcPrice();
            
            console.log("\nHTBC Price Test:");
            console.log("Expected:", ethers.formatEther(expectedPrice), "ETH");
            console.log("Actual:", ethers.formatEther(price), "ETH");
            
            expect(price).to.equal(expectedPrice);
        });

        it("Should update balances correctly after multiple purchases", async function () {
            const { htbc, user1, user2 } = await loadFixture(deployHtbcFixture);
            
            // Premier achat par user1
            await htbc.connect(user1).buyTokens({ value: ethers.parseEther("0.1") });
            
            // Deuxième achat par user2
            await htbc.connect(user2).buyTokens({ value: ethers.parseEther("0.05") });
            
            const user1Balance = await htbc.getUserHtbcBalance(user1.address);
            const user2Balance = await htbc.getUserHtbcBalance(user2.address);
            const contractEthBalance = await htbc.getContractEthBalance();
            
            console.log("\nMultiple Purchases Test:");
            console.log("User1 HTBC Balance:", ethers.formatEther(user1Balance), "HTBC");
            console.log("User2 HTBC Balance:", ethers.formatEther(user2Balance), "HTBC");
            console.log("Contract ETH Balance:", ethers.formatEther(contractEthBalance), "ETH");
            
            // Vérification des soldes HTBC
            expect(user1Balance).to.equal(ethers.parseEther("10"));
            expect(user2Balance).to.equal(ethers.parseEther("5"));
            
            // Vérification du solde ETH du contrat
            expect(contractEthBalance).to.equal(ethers.parseEther("0.15"));
        });
    });
});
