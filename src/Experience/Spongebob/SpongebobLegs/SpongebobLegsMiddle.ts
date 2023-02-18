import * as THREE from "three"

export default class SpongebobLegsMiddle {
   private geometry: THREE.CylinderGeometry
   private material: THREE.MeshStandardMaterial
   public instance: THREE.Mesh

   constructor(xPostition:number){
      this.geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.1, 6)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xfff463
      })
      this.instance = new THREE.Mesh(this.geometry, this.material) 
      this.instance.position.y = -0.28
      this.instance.position.x = xPostition
   }
}