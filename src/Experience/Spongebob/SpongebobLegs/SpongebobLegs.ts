import * as THREE from "three"
import SpongebobLegsMiddle from "./SpongebobLegsMiddle"
import SpongebobLegsSock from "./SpongebobLegsSock"
import SpongebobLegsUpper from "./SpongebobLegsUpper"

export default class SpongebobLegs {
   public instance: THREE.Group
   private upper_l: SpongebobLegsUpper
   private middle_l: SpongebobLegsMiddle
   private sock_l: SpongebobLegsSock

   private upper_r: SpongebobLegsUpper
   private middle_r: SpongebobLegsMiddle

   constructor(){
      this.instance = new THREE.Group()

      this.upper_l = new SpongebobLegsUpper(0.2)
      this.middle_l = new SpongebobLegsMiddle(0.2)
      this.sock_l = new SpongebobLegsSock(0.2)
      
      this.upper_r = new SpongebobLegsUpper(-0.2)
      this.middle_r = new SpongebobLegsMiddle(-0.2)

      this.instance.add(this.upper_l.instance)
      this.instance.add(this.middle_l.instance)
      this.instance.add(this.sock_l.instance)

      this.instance.add(this.upper_r.instance)
      this.instance.add(this.middle_r.instance)
   }
}