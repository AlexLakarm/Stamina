// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title HTBC Token
/// @notice Token ERC20 pour How To Blockchain avec une supply maximale et un prix fixe
/// @dev Extends ERC20 et Ownable pour les fonctionnalités de base et le contrôle d'accès
contract Htbc is ERC20, Ownable {

    // ::::::::::::: CONSTANTS ::::::::::::: //

    /// @notice Nombre de décimales pour le token
    uint8 private constant _DECIMALS = 18;

    /// @notice Supply maximale du token
    uint256 public constant MAX_SUPPLY = 21_000_000 * 10**18; // 21M tokens avec 18 décimales

    /// @notice Prix d'un token en ETH
    uint256 public constant PRICE_PER_TOKEN = 0.01 ether; // 0.01 ETH par token

    // ::::::::::::: CONSTRUCTOR ::::::::::::: //

    /// @notice Initialise le token HTBC
    constructor() ERC20("HowToBlockchain Crypto", "HTBC") Ownable(msg.sender) {
        // Mint 1000 tokens to the owner
        _mint(msg.sender, 1000 * 10**18);
    }

    // ::::::::::::: PUBLIC FUNCTIONS ::::::::::::: //

    /// @notice Permet aux utilisateurs d'acheter des tokens HTBC
    /// @dev Le nombre de tokens est calculé en fonction de l'ETH envoyé
    function buyTokens() external payable {
        require(msg.value > 0, "Must send ETH");
        
        // Calcule le nombre de tokens à mint en fonction de l'ETH envoyé
        uint256 tokensToMint = (msg.value * 10**18) / PRICE_PER_TOKEN;
        
        // Vérifie que la supply maximale ne sera pas dépassée
        require(totalSupply() + tokensToMint <= MAX_SUPPLY, "Would exceed max supply");
        
        // Mint les tokens à l'acheteur
        _mint(msg.sender, tokensToMint);
    }

    // ::::::::::::: GETTERS ::::::::::::: //

    /// @notice Retourne le nombre de décimales du token
    function decimals() public pure override returns (uint8) {
        return _DECIMALS;
    }

    /// @notice Retourne la supply actuelle de tokens
    /// @return uint256 Supply actuelle en circulation
    function getCurrentSupply() external view returns (uint256) {
        return totalSupply();
    }

    /// @notice Retourne le solde HTBC d'un utilisateur
    /// @param user Adresse de l'utilisateur
    /// @return uint256 Solde en HTBC
    function getUserHtbcBalance(address user) external view returns (uint256) {
        return balanceOf(user);
    }

    /// @notice Retourne le solde ETH du contrat
    /// @return uint256 Solde en ETH
    function getContractEthBalance() external view returns (uint256) {
        return address(this).balance;
    }

    /// @notice Retourne le prix actuel du token en ETH
    /// @return uint256 Prix en ETH
    function getHtbcPrice() external pure returns (uint256) {
        return PRICE_PER_TOKEN;
    }

    // ::::::::::::: OWNER FUNCTIONS ::::::::::::: //

    /// @notice Permet au owner de retirer l'ETH du contrat
    function withdrawETH() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        
        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Transfer failed");
    }
}