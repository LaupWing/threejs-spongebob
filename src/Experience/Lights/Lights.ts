import * as THREE from "three"
import Experience from "../Experience"

export default class Lights {
   private directionalLight: THREE.DirectionalLight
   private scene: Experience["scene"]

   constructor(experience: Experience) {
      this.directionalLight = new THREE.DirectionalLight("#ffffff", 1)
      this.scene = experience.scene
      this.directionalLight.position.set(5, 6, 5)
      this.directionalLight.intensity = 1.8
      this.scene.add(this.directionalLight)
   }
}