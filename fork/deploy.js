import ethers from "ethers";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const { ContractFactory } = ethers;
const require = createRequire(fileURLToPath(import.meta.url));

export const deploy = async (
    _factory,
    _kpiTokensManager,
    _oraclesManager,
    _multicall,
    _predictedTemplateId,
    signer
) => {
    const {
        abi: templateAbi,
        bytecode: templateBytecode,
    } = require("../artifacts/KPITokenTemplate.sol/KPITokenTemplate.json");
    const templateFactory = new ContractFactory(
        templateAbi,
        templateBytecode,
        signer
    );
    const templateContract = await templateFactory.deploy();
    await templateContract.deployed();

    return { templateContract };
};
