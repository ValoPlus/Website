/**
 * Created by tom on 16.05.16.
 */

export class Device {
  constructor(public ip:String = 'test.valoplus.de',
              public key:String = '123456789abc') {
  }

  public getAdress():String {
    return 'http://' + this.ip;
  }
}
