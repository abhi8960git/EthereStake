import { store } from '../store/index';
import { ethers } from 'ethers';
import address from '../artifacts/address.json'
import abi from '../artifacts/abi.json'
import { globalActions } from '@/store/globalSlices';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/interfaces';
import { ProposalProp } from '@/utils/interfaces';
console.log(globalActions);
const ContractAddress = address.address
const ContractAbi = abi.abi
let ethereum: any
let tx: any

const { setWallet, setUserBalance, setBalance, setStakeHolder, setProposals } = globalActions;

if (typeof window !== 'undefined') {
    ethereum = (window as any).ethereum
}

const toWei = (num: number) => ethers.utils.parseEther(num.toString())
const fromWei = (num: number) => ethers.utils.formatEther(num)

const connectWallet = async () => {

    try {
        if (!ethereum) return reportError('Please install Metamask')
        const accounts = await ethereum.request?.({ method: 'eth_requestAccounts' })
        store.dispatch(setWallet(accounts?.[0]))
    } catch (error) {
        reportError(error)
    }
}

const checkWallet = async () => {
    try {
        if (!ethereum) return reportError('Please install Metamask')
        const accounts = await ethereum.request?.({ method: 'eth_accounts' })

        // monitor chain change
        ethereum.on('chainChanged', () => {
            window.location.reload()
        })

        ethereum.on('accountsChanged', async () => {
            store.dispatch(setWallet(accounts?.[0]))
            await checkWallet()
        })

        if (accounts?.length) {
            store.dispatch(setWallet(accounts[0]))
        } else {
            store.dispatch(setWallet(''))
            reportError('Please connect wallet, no accounts found.')
        }
    } catch (error) {
        console.log(error);
    }
}

const getEthereumContract = async () => {
    const accounts = await ethereum?.request?.({ method: 'eth_accounts' });
    const provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = accounts?.[0] ? null : ethers.Wallet.createRandom();
    const signer = provider.getSigner(accounts?.[0] ? undefined : wallet?.address);

    const contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
    // console.log(contract)

    return contract;
    // console.log( await contract.getProposals({from:accounts[0]}))
}

const perfromContribute = async (amount: any) => {
    if (!ethereum) return alert('Please install Metamask')

    try {
        const accounts = await ethereum?.request?.({ method: 'eth_accounts' });
        amount = toWei(amount);
        const contract = await getEthereumContract();
        const tx = await contract.contribute({ from: accounts[0], value: amount });
        window.location.reload()

    } catch (error) {
        reportError(error);
    }

}

const getInfo = async () => {
    if (!ethereum) return alert('Please install Metamask')
    try {
        const contract = await getEthereumContract();
        const accounts = await ethereum?.request?.({ method: 'eth_accounts' });
        const isStakeholder = await contract.isStakeholder({ from: accounts[0] });
        const mybalance = await contract.getBalance();
        const daoBalance = await contract.daoBalance();
        const myBalanceInEther = fromWei(mybalance)
        const daoBalanceInEther = fromWei(daoBalance)
        // @ts-ignore
        store.dispatch(setUserBalance(myBalanceInEther));
        // @ts-ignore
        store.dispatch(setBalance(daoBalanceInEther));
        store.dispatch(setStakeHolder(isStakeholder));

    } catch (error) {
        reportError(error);
    }
}

const GetProposals = async() => {
    const contract = await getEthereumContract();
    const proposals = await contract.getProposals();

    console.log(proposals);

    store.dispatch(setProposals(proposals));
    return structuredProposals(proposals);

}

const structuredProposals = (proposals: any): ProposalProp[] => {
    return proposals
        .map((proposal: any) => ({
            id: proposal.id,
            amount: toWei(proposal.amount),
            title: proposal.title,
            description: proposal.description,
            paid: proposal.paid,
            passed: proposal.passed,
            proposer: proposal.proposer,
            upvotes: Number(proposal.upvotes),
            downvotes: Number(proposal.downvotes),
            beneficiary: proposal.beneficiary,
            executor: proposal.executor,
            duration: proposal.duration,
        }))
        .reverse()
}

const getProposal = async (id: number): Promise<ProposalProp | undefined> => {

    try {
        const contract = await getEthereumContract();
        const proposal = await contract.getProposal(id);
        return structuredProposals([proposal])[0];
    } catch (error) {

    }

}

const raiseProposal = async (title: string, description: string, beneficiary: string, amount: any) => {
    try {
        const contract = await getEthereumContract();
        const accounts = await ethereum?.request?.({ method: 'eth_accounts' });

        const Proposal = await contract.createProposal(title, description, beneficiary, amount, { from: accounts[0] })
        console.log("this is proposal",Proposal);

        const Proposals = await GetProposals()
        store.dispatch(setProposals(Proposals))

        window.location.reload()
    } catch (error) {
        reportError(error);
    }
}

const voteOnProposal = async (proposalId: number, supported: any) => {
    try {
        const contract = await getEthereumContract();
        const accounts = await ethereum?.request?.({ method: 'eth_accounts' });
        await contract.performVote(proposalId, supported)
        window.location.reload()
    } catch (error) {
        reportError(error)
    }
}


const listVoters = async (id: number) => {
    try {
        const contract = await getEthereumContract();
        const votes = await contract.getVotesOf(id)
        return votes
    } catch (error) {
        reportError(error);
    }
}

const payOutBeneficiary = async (id: number) => {
    const contract = await getEthereumContract();
    const accounts = await ethereum?.request?.({ method: 'eth_accounts' });
    await contract.payBeneficiary(id)
    window.location.reload();
}

export {
    connectWallet,
    checkWallet,
    getEthereumContract,
    perfromContribute,
    getInfo,
    raiseProposal,
    voteOnProposal,
    listVoters,
    payOutBeneficiary,
    GetProposals,
    toWei
}


