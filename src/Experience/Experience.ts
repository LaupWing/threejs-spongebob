import * as THREE from "three"
import Camera from "./Camera"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public camera: Camera
   public time: Time

   constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.sizes = new Sizes()
      this.time = new Time()
      this.scene = new THREE.Scene()
      this.camera = new Camera(this)

      this.sizes.on("resize", () => {
         this.resize()
      })

      this.time.on("tick", () => {
         this.update()
      })
   }

   resize() {
      this.camera.update()
   }

   update() {

   }
}