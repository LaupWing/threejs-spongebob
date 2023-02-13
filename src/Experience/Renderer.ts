import Experience from "./Experience"
import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Camera from "./Camera"

export default class Renderer {
   private experience: Experience
   private instance: THREE.WebGLRenderer
   private scene: Experience["scene"]
   private canvas: HTMLCanvasElement
   private sizes: Sizes
   private camera: Camera
   
   constructor(experience: Experience){
      this.experience = experience
      this.canvas = this.experience.canvas
      this.sizes = this.experience.sizes
      this.scene = this.experience.scene
      this.camera = this.experience.camera
      this.instance = new THREE.WebGLRenderer({
         canvas: this.canvas,
         antialias: true,
         alpha: true
      })
      this.instance.setSize(this.sizes.width, this.sizes.height)
      this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   }

   resize() {
      this.instance.setSize(this.sizes.width, this.sizes.height)
      this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   }

   update(){
      this.instance.render(this.scene, this.camera.instance)
   }
}