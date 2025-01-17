/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ZapsUFxsInterface extends utils.Interface {
  functions: {
    "CRVETH_CRV_INDEX()": FunctionFragment;
    "CRVETH_ETH_INDEX()": FunctionFragment;
    "CRV_TOKEN()": FunctionFragment;
    "CURVE_CRV_ETH_POOL()": FunctionFragment;
    "CURVE_CVXFXS_FXS_LP_TOKEN()": FunctionFragment;
    "CURVE_CVXFXS_FXS_POOL()": FunctionFragment;
    "CURVE_CVX_ETH_POOL()": FunctionFragment;
    "CURVE_FRAX_USDC_POOL()": FunctionFragment;
    "CURVE_FXS_ETH_POOL()": FunctionFragment;
    "CVXETH_CVX_INDEX()": FunctionFragment;
    "CVXETH_ETH_INDEX()": FunctionFragment;
    "CVXFXS_TOKEN()": FunctionFragment;
    "CVX_TOKEN()": FunctionFragment;
    "FRAX_TOKEN()": FunctionFragment;
    "FXS_DEPOSIT()": FunctionFragment;
    "FXS_TOKEN()": FunctionFragment;
    "UNISWAP_ROUTER()": FunctionFragment;
    "UNIV3_ROUTER()": FunctionFragment;
    "USDC_TOKEN()": FunctionFragment;
    "USDT_TOKEN()": FunctionFragment;
    "WETH_TOKEN()": FunctionFragment;
    "_claimAsEth(uint256)": FunctionFragment;
    "claimFromVaultAsCvx(uint256,uint256,address,bool)": FunctionFragment;
    "claimFromVaultAsEth(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsFxs(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsUsdt(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultViaUniV2EthPair(uint256,uint256,address,address,address)": FunctionFragment;
    "depositFromEth(uint256,address,bool)": FunctionFragment;
    "depositFromFxs(uint256,uint256,address,bool)": FunctionFragment;
    "depositFromUFxs(uint256,uint256,address)": FunctionFragment;
    "depositViaUniV2EthPair(uint256,uint256,address,address,address,bool)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovals()": FunctionFragment;
    "setSwapOption(uint8)": FunctionFragment;
    "swapOption()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vault()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CRVETH_CRV_INDEX"
      | "CRVETH_ETH_INDEX"
      | "CRV_TOKEN"
      | "CURVE_CRV_ETH_POOL"
      | "CURVE_CVXFXS_FXS_LP_TOKEN"
      | "CURVE_CVXFXS_FXS_POOL"
      | "CURVE_CVX_ETH_POOL"
      | "CURVE_FRAX_USDC_POOL"
      | "CURVE_FXS_ETH_POOL"
      | "CVXETH_CVX_INDEX"
      | "CVXETH_ETH_INDEX"
      | "CVXFXS_TOKEN"
      | "CVX_TOKEN"
      | "FRAX_TOKEN"
      | "FXS_DEPOSIT"
      | "FXS_TOKEN"
      | "UNISWAP_ROUTER"
      | "UNIV3_ROUTER"
      | "USDC_TOKEN"
      | "USDT_TOKEN"
      | "WETH_TOKEN"
      | "_claimAsEth"
      | "claimFromVaultAsCvx"
      | "claimFromVaultAsEth"
      | "claimFromVaultAsFxs"
      | "claimFromVaultAsUsdt"
      | "claimFromVaultViaUniV2EthPair"
      | "depositFromEth"
      | "depositFromFxs"
      | "depositFromUFxs"
      | "depositViaUniV2EthPair"
      | "owner"
      | "renounceOwnership"
      | "setApprovals"
      | "setSwapOption"
      | "swapOption"
      | "transferOwnership"
      | "vault"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CRVETH_CRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CRVETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CRV_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CURVE_CRV_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVXFXS_FXS_LP_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVXFXS_FXS_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVX_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_FRAX_USDC_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_FXS_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_CVX_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXFXS_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CVX_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "FRAX_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FXS_DEPOSIT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "FXS_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNISWAP_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNIV3_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDC_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDT_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WETH_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_claimAsEth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsCvx",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsEth",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsFxs",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsUsdt",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultViaUniV2EthPair",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromEth",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromFxs",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromUFxs",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositViaUniV2EthPair",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapOption",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapOption",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "CRVETH_CRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CRVETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CRV_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CRV_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVXFXS_FXS_LP_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVXFXS_FXS_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVX_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_FRAX_USDC_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_FXS_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_CVX_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXFXS_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CVX_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FRAX_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FXS_DEPOSIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FXS_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNISWAP_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNIV3_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "USDC_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_claimAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsCvx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsFxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsUsdt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromFxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromUFxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapOption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapOption", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "OptionChanged(uint8,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OptionChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OptionChangedEventObject {
  oldOption: number;
  newOption: number;
}
export type OptionChangedEvent = TypedEvent<
  [number, number],
  OptionChangedEventObject
>;

export type OptionChangedEventFilter = TypedEventFilter<OptionChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ZapsUFxs extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZapsUFxsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVXFXS_FXS_LP_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVXFXS_FXS_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_FRAX_USDC_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_FXS_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXFXS_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    FRAX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    FXS_DEPOSIT(overrides?: CallOverrides): Promise<[string]>;

    FXS_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<[string]>;

    UNIV3_ROUTER(overrides?: CallOverrides): Promise<[string]>;

    USDC_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    USDT_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    _claimAsEth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromVaultAsCvx(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromVaultAsEth(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromVaultAsFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromVaultAsUsdt(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromVaultViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFromEth(
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFromFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFromUFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      inputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapOption(
      _newOption: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapOption(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVXFXS_FXS_LP_TOKEN(overrides?: CallOverrides): Promise<string>;

  CURVE_CVXFXS_FXS_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_FRAX_USDC_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_FXS_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXFXS_TOKEN(overrides?: CallOverrides): Promise<string>;

  CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

  FRAX_TOKEN(overrides?: CallOverrides): Promise<string>;

  FXS_DEPOSIT(overrides?: CallOverrides): Promise<string>;

  FXS_TOKEN(overrides?: CallOverrides): Promise<string>;

  UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;

  UNIV3_ROUTER(overrides?: CallOverrides): Promise<string>;

  USDC_TOKEN(overrides?: CallOverrides): Promise<string>;

  USDT_TOKEN(overrides?: CallOverrides): Promise<string>;

  WETH_TOKEN(overrides?: CallOverrides): Promise<string>;

  _claimAsEth(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromVaultAsCvx(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    lock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromVaultAsEth(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromVaultAsFxs(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromVaultAsUsdt(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromVaultViaUniV2EthPair(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    router: PromiseOrValue<string>,
    outputToken: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFromEth(
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    lock: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFromFxs(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    lock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFromUFxs(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositViaUniV2EthPair(
    amount: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    router: PromiseOrValue<string>,
    inputToken: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    lock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovals(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapOption(
    _newOption: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapOption(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVXFXS_FXS_LP_TOKEN(overrides?: CallOverrides): Promise<string>;

    CURVE_CVXFXS_FXS_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_FRAX_USDC_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_FXS_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXFXS_TOKEN(overrides?: CallOverrides): Promise<string>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

    FRAX_TOKEN(overrides?: CallOverrides): Promise<string>;

    FXS_DEPOSIT(overrides?: CallOverrides): Promise<string>;

    FXS_TOKEN(overrides?: CallOverrides): Promise<string>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<string>;

    UNIV3_ROUTER(overrides?: CallOverrides): Promise<string>;

    USDC_TOKEN(overrides?: CallOverrides): Promise<string>;

    USDT_TOKEN(overrides?: CallOverrides): Promise<string>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<string>;

    _claimAsEth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsCvx(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsEth(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsUsdt(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromEth(
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromUFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      inputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovals(overrides?: CallOverrides): Promise<void>;

    setSwapOption(
      _newOption: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapOption(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OptionChanged(uint8,uint8)"(
      oldOption?: null,
      newOption?: null
    ): OptionChangedEventFilter;
    OptionChanged(oldOption?: null, newOption?: null): OptionChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVXFXS_FXS_LP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVXFXS_FXS_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_FRAX_USDC_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_FXS_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXFXS_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    FRAX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    FXS_DEPOSIT(overrides?: CallOverrides): Promise<BigNumber>;

    FXS_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    UNIV3_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    USDC_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    USDT_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    _claimAsEth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromVaultAsCvx(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromVaultAsEth(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromVaultAsFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromVaultAsUsdt(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromVaultViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFromEth(
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFromFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFromUFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      inputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapOption(
      _newOption: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapOption(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_CRV_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVXFXS_FXS_LP_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVXFXS_FXS_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVX_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_FRAX_USDC_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_FXS_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXFXS_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FRAX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FXS_DEPOSIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FXS_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNISWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNIV3_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _claimAsEth(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsCvx(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsEth(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsUsdt(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromVaultViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFromEth(
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFromFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFromUFxs(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositViaUniV2EthPair(
      amount: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      inputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapOption(
      _newOption: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapOption(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
