import * as THREE from "three"

export default class SpongebobShoes {
   private geometry: THREE.CapsuleGeometry
   private material: THREE.MeshStandardMaterial
   public instance: THREE.Mesh

   constructor(){
      this.geometry = new THREE.CapsuleGeometry(0.07, 0.2, 4, 8)
      this.material = new THREE.MeshStandardMaterial({
         color: 0x000000
      }) 
      this.instance = new THREE.Mesh(this.geometry, this.material) 
      this.instance.position.y = -0.55
      this.instance.position.x = -0.2
      this.instance.position.z = 0.05
      this.instance.rotation.x = Math.PI / 2
   }
}