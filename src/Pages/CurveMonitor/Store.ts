import { defineStore } from "pinia";
import type {
  Pool,
  Balances,
  Volume,
  Price,
  Transaction,
  Tvl,
  Bonding,
  Coin,
  Pair,
} from "@/Pages/CurveMonitor/Models";
import type {
  SocketPool,
  SocketRoot,
} from "@/Pages/CurveMonitor/Services/Sockets";

type State = {
  socket: SocketRoot | null;
  socketPool: SocketPool | null;

  pools: Pool[];
  poolsLoadingError: boolean;
  prices: Price[];
  balances: Balances[];
  volumes: Volume[];
  transactions: Transaction[];
  tvl: Tvl[];
  bonding: Bonding;
  coins: Coin[];
  pair: Pair | null;
};

export const useCurveMonitorStore = defineStore({
  id: "curveMonitorStore",
  state: (): State => ({
    socket: null,
    socketPool: null,

    pools: [],
    poolsLoadingError: false,
    prices: [],
    balances: [],
    volumes: [],
    transactions: [],
    tvl: [],
    bonding: {
      curve: [],
      balanceCoin0: 0,
      balanceCoin1: 0,
    },
    coins: [],
    pair: null,
  }),
});
