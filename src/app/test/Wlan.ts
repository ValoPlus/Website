/**
 * Created by tom on 22.05.16.
 */

export class Wlan {
  public pass:String;
  public ssid:String;
  public wlanSecurity:String;
  
  constructor(pass:String, ssid:String, wlanSecurity) {
      this.pass = pass;
      this.ssid = ssid;
      this.wlanSecurity = wlanSecurity;
      }
}
