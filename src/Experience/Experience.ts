import * as THREE from "three"
import Sizes from "./utils/Sizes"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes

   constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.sizes = new Sizes()
      this.scene = new THREE.Scene()

      this.sizes.on("resize", () => {
         this.resize()
      })
   }

   resize() {
      
   }
}