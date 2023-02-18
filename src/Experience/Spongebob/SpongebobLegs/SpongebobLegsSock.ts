import * as THREE from "three"

export default class SpongebobLegsSock {
   private base: THREE.Mesh
   private blueStripe: THREE.Mesh
   public instance: THREE.Group

   constructor(xPostition:number){  
      this.base = new THREE.Mesh(
         new THREE.CylinderGeometry(0.04, 0.04, 0.16, 6), 
         new THREE.MeshStandardMaterial({
            color: 0xfbfff7
         })
      ) 
      this.blueStripe = new THREE.Mesh(
         new THREE.CylinderGeometry(0.041, 0.041, 0.02, 6, 1, true), 
         new THREE.MeshStandardMaterial({
            color: 0x0e4da8
         })
      ) 
      this.blueStripe.position.y = 0.05
      
      this.instance = new THREE.Group() 
      this.instance.add(this.base)
      this.instance.add(this.blueStripe)
      this.instance.position.y = -0.41
      this.instance.position.x = xPostition
   }
}