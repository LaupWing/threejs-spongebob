import * as THREE from "three"
import Camera from "./Camera"
import Sizes from "./utils/Sizes"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public camera: Camera

   constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.sizes = new Sizes()
      this.scene = new THREE.Scene()
      this.camera = new Camera(this)

      this.sizes.on("resize", () => {
         this.resize()
      })
   }

   resize() {

   }
}