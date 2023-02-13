import Experience from "../Experience"
import * as THREE from "three"

export default class Spongebob{
   private scene: Experience["scene"]

   constructor(experience: Experience){
      this.scene = experience.scene
      
   }
}