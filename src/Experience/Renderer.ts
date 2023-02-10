import Experience from "./Experience"
import * as THREE from "three"

export default class Renderer {
   private experience: Experience
   private instance: THREE.WebGLRenderer
   private canvas: HTMLCanvasElement

   constructor(experience: Experience){
      this.experience = experience
      this.canvas = this.experience.canvas
      this.instance = new THREE.WebGLRenderer({
         canvas: this.canvas,
         antialias: true
      })
   }
}