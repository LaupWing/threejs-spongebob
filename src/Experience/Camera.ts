import Experience from "./Experience"
import Sizes from "./utils/Sizes"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
   private experience: Experience
   private sizes: Sizes
   private scene: Experience["scene"]
   private canvas: HTMLCanvasElement
   private controls: OrbitControls
   public instance: THREE.PerspectiveCamera

   constructor(experience: Experience){
      this.experience = experience
      this.sizes = this.experience.sizes
      this.scene = this.experience.scene
      this.canvas = this.experience.canvas
      this.instance = new THREE.PerspectiveCamera(
         75,
         this.sizes.width / this.sizes.height,
         0.1,
         100
      )
      this.instance.position.set(1, 1, 1)
      this.scene.add(this.instance)
      this.controls = new OrbitControls(this.instance, this.canvas)
      this.controls.enableDamping = true
   }

   resize() {
      this.instance.aspect = this.sizes.width / this.sizes.height
      this.instance.updateProjectionMatrix()
   }

   update() {
      this.controls.update()
   }
}