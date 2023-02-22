import * as THREE from "three"

export default class SpongebobArms {
   public instance: THREE.Group

   constructor(){
      this.instance = new THREE.Group()
      this.instance.add(
         this.createUpper(0.45),
         this.createUpper(-0.45),
      )
   }

   createUpper(offset: number){
      const geometry = new THREE.CapsuleGeometry(
         0.07, 0.06, 4, 8
      )
      const material = new THREE.MeshStandardMaterial({
         color: 0xfbfff7,
         side: THREE.DoubleSide
      }) 
      const mesh = new THREE.Mesh(geometry, material) 
      
      mesh.position.y = 0.25
      mesh.position.x = offset
      mesh.position.z = 0
      // mesh.scale.z = 0.5
      mesh.scale.y = 1.1

      return mesh
   }
}