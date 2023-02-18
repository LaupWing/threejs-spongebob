import * as THREE from "three"
import SpongebobLegsUpper from "./SpongebobLegsUpper"

export default class SpongebobLegs {
   public instance: THREE.Group
   private upper_l: SpongebobLegsUpper
   private upper_r: SpongebobLegsUpper

   constructor(){
      this.instance = new THREE.Group()
      this.upper_l = new SpongebobLegsUpper(0.2)
      this.upper_r = new SpongebobLegsUpper(-0.2)
      
      this.instance.add(this.upper_l.instance)
      this.instance.add(this.upper_r.instance)
   }
}