/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP7PausableMock,
  KIP7PausableMockInterface,
} from "../KIP7PausableMock";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "onlyPauserMock",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isPauser",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "removePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "initialAccount",
        type: "address",
      },
      {
        name: "initialBalance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051604080620023c1833981018060405260408110156200003357600080fd5b810190808051906020019092919080519060200190929190505050620000666301ffc9a760e01b620000dc60201b60201c565b6200007e636578737160e01b620000dc60201b60201c565b6200008f33620001e560201b60201c565b6000600560006101000a81548160ff021916908315150217905550620000c2634d5507ff60e01b620000dc60201b60201c565b620000d482826200024660201b60201c565b50506200065f565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b620002008160046200041260201b620018e61790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b6200030681600354620004f660201b620019d41790919060201c565b6003819055506200036581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004f660201b620019d41790919060201c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6200042482826200057f60201b60201c565b1562000498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008082840190508381101562000575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000608576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200239f6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611d30806200066f6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635c975abb116100ad5780638456cb59116100715780638456cb59146104cd578063a9059cbb146104d7578063b88d4fde1461053d578063dd62ed3e14610642578063eb795549146106ba57610121565b80635c975abb146103c15780636b2c0f55146103e35780636ef8d66d1461042757806370a082311461043157806382dc1ec41461048957610121565b8063329daf90116100f4578063329daf90146102955780633f4ba83a1461029f578063423f6cef146102a957806342842e0e146102f757806346fbf68e1461036557610121565b806301ffc9a714610126578063095ea7b31461018b57806318160ddd146101f157806323b872dd1461020f575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061079f565b604051808215151515815260200191505060405180910390f35b6101d7600480360360408110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610806565b604051808215151515815260200191505060405180910390f35b6101f961089d565b6040518082815260200191505060405180910390f35b61027b6004803603606081101561022557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a7565b604051808215151515815260200191505060405180910390f35b61029d610940565b005b6102a76109a0565b005b6102f5600480360360408110156102bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b00565b005b6103636004803603606081101561030d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b1e565b005b6103a76004803603602081101561037b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b3e565b604051808215151515815260200191505060405180910390f35b6103c9610b5b565b604051808215151515815260200191505060405180910390f35b610425600480360360208110156103f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b72565b005b61042f610b7e565b005b6104736004803603602081101561044757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b89565b6040518082815260200191505060405180910390f35b6104cb6004803603602081101561049f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bd2565b005b6104d5610c3c565b005b610523600480360360408110156104ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9d565b604051808215151515815260200191505060405180910390f35b6106406004803603608081101561055357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156105ba57600080fd5b8201836020820111156105cc57600080fd5b803590602001918460018302840111640100000000831117156105ee57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e34565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ea7565b6040518082815260200191505060405180910390f35b61079d600480360360608110156106d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561071757600080fd5b82018360208201111561072957600080fd5b8035906020019184600183028401116401000000008311171561074b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f2e565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6000600560009054906101000a900460ff161561088b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6108958383610f9f565b905092915050565b6000600354905090565b6000600560009054906101000a900460ff161561092c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610937848484610fb6565b90509392505050565b61094933610b3e565b61099e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611c296030913960400191505060405180910390fd5b565b6109a933610b3e565b6109fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611c296030913960400191505060405180910390fd5b600560009054906101000a900460ff16610a80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b610b1a828260405180602001604052806000815250610f2e565b5050565b610b3983838360405180602001604052806000815250610e34565b505050565b6000610b5482600461106790919063ffffffff16565b9050919050565b6000600560009054906101000a900460ff16905090565b610b7b81611145565b50565b610b8733611145565b565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610bdb33610b3e565b610c30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611c296030913960400191505060405180910390fd5b610c3981611151565b50565b610c4533610b3e565b610c9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611c296030913960400191505060405180910390fd5b600560009054906101000a900460ff1615610d1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600560009054906101000a900460ff1615610e22576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610e2c83836111ab565b905092915050565b610e3f8484846108a7565b50610e4c848484846111c2565b610ea1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611bfb602e913960400191505060405180910390fd5b50505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610f388383610d9d565b50610f45338484846111c2565b610f9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611bfb602e913960400191505060405180910390fd5b505050565b6000610fac3384846113ab565b6001905092915050565b6000610fc38484846115a2565b61105c843361105785600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461184290919063ffffffff16565b6113ab565b600190509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611cc06022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61114e8161188c565b50565b6111658160046118e690919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b60006111b83384846115a2565b6001905092915050565b60006111e38473ffffffffffffffffffffffffffffffffffffffff166119c1565b6111f057600190506113a3565b60008473ffffffffffffffffffffffffffffffffffffffff16639d188c22338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112cb5780820151818401526020810190506112b0565b50505050905090810190601f1680156112f85780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561131a57600080fd5b505af115801561132e573d6000803e3d6000fd5b505050506040513d602081101561134457600080fd5b81019080805190602001909291905050509050639d188c2260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611431576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611ce26023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114b7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611bda6021913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611628576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611c9c6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611c596022913960400191505060405180910390fd5b61170081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461184290919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061179581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119d490919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600061188483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611a5c565b905092915050565b6118a0816004611b1c90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b6118f08282611067565b15611963576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b905060008111915050919050565b600080828401905083811015611a52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611b09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ace578082015181840152602081019050611ab3565b50505050905090810190601f168015611afb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b611b268282611067565b611b7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611c7b6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b4950373a207472616e7366657220746f20746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058209e68d5170186b928c205160fed300921e00fb55e9f278dc4a886c85518b87f070029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type KIP7PausableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP7PausableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP7PausableMock__factory extends ContractFactory {
  constructor(...args: KIP7PausableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP7PausableMock> {
    return super.deploy(
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<KIP7PausableMock>;
  }
  getDeployTransaction(
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): KIP7PausableMock {
    return super.attach(address) as KIP7PausableMock;
  }
  connect(signer: Signer): KIP7PausableMock__factory {
    return super.connect(signer) as KIP7PausableMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP7PausableMockInterface {
    return new utils.Interface(_abi) as KIP7PausableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP7PausableMock {
    return new Contract(address, _abi, signerOrProvider) as KIP7PausableMock;
  }
}
