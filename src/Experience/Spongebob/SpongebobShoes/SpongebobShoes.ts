import * as THREE from "three"

export default class SpongebobShoes {
   public instance: THREE.Group

   constructor(){
      this.instance = new THREE.Group()
      this.instance.add(
         this.createShoe(-0.2),
         this.createShoe(0.2),
      )
   }

   createShoe(offset: number){
      const geometry = new THREE.CapsuleGeometry(0.07, 0.2, 4, 8)
      const material = new THREE.MeshStandardMaterial({
         color: 0x000000
      }) 
      const mesh = new THREE.Mesh(geometry, material) 
      
      mesh.position.y = -0.55
      mesh.rotation.x = Math.PI / 2
      mesh.position.x = offset
      mesh.position.z = 0.07

      return mesh
   }
}