import * as THREE from "three"

export default class SpongebobLegsLegs {
   private geometry: THREE.CylinderGeometry
   private material: THREE.MeshStandardMaterial
   public instance: THREE.Mesh

   constructor(){
      this.geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 8)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xc26c31
      })
      this.instance = new THREE.Mesh(this.geometry, this.material) 
      this.instance.position.y = -0.18
      this.instance.position.x = 0.2
   }
}