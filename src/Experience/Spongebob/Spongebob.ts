import Experience from "../Experience"
import * as THREE from "three"
import SpongebobBody from "./SpongebobBody"

export default class Spongebob{
   private scene: Experience["scene"]
   private body

   constructor(experience: Experience){
      this.scene = experience.scene
      
      this.scene.add(this.cube)
   }
}