import * as THREE from "three"

export default class SpongebobLegsSock {
   private geometry: THREE.CylinderGeometry
   private material: THREE.MeshStandardMaterial
   public instance: THREE.Mesh

   constructor(xPostition:number){
      this.geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.03, 6)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xfbfff7
      })
      this.instance = new THREE.Mesh(this.geometry, this.material) 
      this.instance.position.y = -0.345
      this.instance.position.x = xPostition
   }
}