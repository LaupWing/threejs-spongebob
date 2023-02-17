import * as THREE from "three"

export default class SpongebobLegsLegs {
   private segmentCount: number
   private width: number
   private geometry: THREE.CylinderGeometry
   private instance: THREE.Group
   private material: THREE.MeshStandardMaterial

   constructor(){
      this.segmentCount = 6
      this.width = 0.1
      this.geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 8)
      this.material = new THREE.MeshStandardMaterial({
         color: 0xc26c31
      })
      this.instance = new THREE.Group()
      this.instance.position.y = -0.18
      this.instance.position.x = 0.2
   }
}