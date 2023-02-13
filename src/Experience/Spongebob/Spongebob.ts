import Experience from "../Experience"
import * as THREE from "three"

export default class Spongebob{
   private scene: Experience["scene"]
   private geometry: THREE.BoxGeometry
   private material: THREE.MeshBasicMaterial
   private cube: THREE.Mesh

   constructor(experience: Experience){
      this.scene = experience.scene
      this.geometry = new THREE.BoxGeometry(1, 1, 1)
      this.material = new THREE.MeshBasicMaterial({
         color: 0x00ff00
      }) 
      this.cube = new THREE.Mesh(this.geometry, this.material) 
      this.scene.add(this.cube)
   }
}