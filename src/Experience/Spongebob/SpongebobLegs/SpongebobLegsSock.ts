import * as THREE from "three"

export default class SpongebobLegsSock {
   private base: THREE.Mesh
   private blueStripe: THREE.Mesh
   private redStripe: THREE.Mesh
   public instance: THREE.Group

   
   constructor(xPostition:number){  
      const width = 0.04
      const offset = 0.001

      this.base = new THREE.Mesh(
         new THREE.CylinderGeometry(width, width, 0.16, 6), 
         new THREE.MeshStandardMaterial({
            color: 0xfbfff7
         })
      ) 
      this.blueStripe = new THREE.Mesh(
         new THREE.CylinderGeometry(width + offset, width + offset, 0.02, 6, 1, true), 
         new THREE.MeshStandardMaterial({
            color: 0x0e4da8
         })
      ) 
      this.blueStripe.position.y = 0.05

      this.redStripe = new THREE.Mesh(
         new THREE.CylinderGeometry(width + offset, width + offset, 0.02, 6, 1, true), 
         new THREE.MeshStandardMaterial({
            color: 0xc23f30
         })
      ) 
      this.redStripe.position.y = 0.015
      this.instance = new THREE.Group() 
      this.instance.add(this.base)
      this.instance.add(this.redStripe)
      this.instance.add(this.blueStripe)
      this.instance.position.y = -0.41
      this.instance.position.x = xPostition
   }
}