import { Observable } from "rxjs";
import type { Pair } from "@/Pages/CurveMonitor/Models";
import type {
  PairDto,
  SocketPool,
} from "@/Pages/CurveMonitor/Services/Sockets";

export default class CombinationService {
  private readonly socket: SocketPool;

  public readonly update$: Observable<Pair>;

  constructor(socket: SocketPool) {
    this.socket = socket;

    this.update$ = new Observable((subscriber) => {
      const onData = (data: PairDto) => {
        subscriber.next(data);
      };

      socket.on("price_chart_combination", onData);

      return () => {
        socket.off("price_chart_combination", onData);
      };
    });
  }

  update(pair: Pair) {
    this.socket.emit("new combination", ["month", pair[0], pair[1]]);
  }
}
