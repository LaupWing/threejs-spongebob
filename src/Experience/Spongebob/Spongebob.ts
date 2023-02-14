import Experience from "../Experience"
import * as THREE from "three"

export default class Spongebob{
   private scene: Experience["scene"]
   private geometry: THREE.BoxGeometry
   private material: THREE.MeshStandardMaterial
   private cube: THREE.Mesh

   constructor(experience: Experience){
      this.scene = experience.scene
      this.geometry = new THREE.BoxGeometry(0.8, 0.8, 0.4)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xfff463
      }) 
      this.cube = new THREE.Mesh(this.geometry, this.material) 
      this.cube.position.y = 0.2
      this.scene.add(this.cube)
   }
}