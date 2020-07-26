import TdClient from 'tdweb/dist/tdweb';
import options from '../options';

export default class Tg {

  client: TdClient;
  action: () => void;

  constructor() {
    options.onUpdate = update => this.onUpdate(update);
    this.client = new TdClient(options);
  }

  onUpdate(update): void {
    console.log(update);
    if(this.action) this.action();
  }

}
