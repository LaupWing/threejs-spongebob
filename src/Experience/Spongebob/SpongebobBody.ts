import * as THREE from "three"

export default class SpongebobBody {
   private geometry: THREE.BoxGeometry
   private material: THREE.MeshStandardMaterial
   public instance: THREE.Mesh

   constructor(){
      this.geometry = new THREE.BoxGeometry(0.8, 0.8, 0.4)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xfff463
      }) 
      this.instance = new THREE.Mesh(this.geometry, this.material) 
      this.instance.position.y = 0.2
   }
}