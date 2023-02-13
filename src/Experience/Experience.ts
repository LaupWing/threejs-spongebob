import * as THREE from "three"
import Camera from "./Camera"
import Renderer from "./Renderer"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public camera: Camera
   public time: Time
   public renderer: Renderer

   constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.sizes = new Sizes()
      this.time = new Time()
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color("yellow")
      this.camera = new Camera(this)
      this.renderer = new Renderer(this)

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
      this.camera.update()
      this.renderer.update()
   }
}