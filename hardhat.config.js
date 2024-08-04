"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
const dotenv_1 = __importDefault(require("dotenv"));
require("@nomicfoundation/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
dotenv_1.default.config();
const config = {
    defaultNetwork: 'swisstronik',
    solidity: '0.8.20',
    networks: {
        swisstronik: {
            url: 'https://json-rpc.testnet.swisstronik.com/',
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
};
exports.default = config;
