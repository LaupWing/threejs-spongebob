import Experience from "../Experience"
import * as THREE from "three"

export default class Spongebob{
   private scene: Experience["scene"]
   private geometry: THREE.BoxGeometry
   private material: THREE.MeshStandardMaterial
   private cube: THREE.Mesh

   constructor(experience: Experience){
      this.scene = experience.scene
      this.geometry = new THREE.BoxGeometry(1, 1, 1)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xfff463
      }) 
      this.cube = new THREE.Mesh(this.geometry, this.material) 
      this.cube.scale.z = 0.5
      this.cube.scale.x = 0.8
      this.scene.add(this.cube)
   }
}