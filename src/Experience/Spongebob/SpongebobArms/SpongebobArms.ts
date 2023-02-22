import * as THREE from "three"

export default class SpongebobArms {
   public instance: THREE.Group

   constructor(){
      this.instance = new THREE.Group()
      this.instance.add(
         this.createSclera(-0.12)
      )
   }

   createSclera(offset: number){
      const geometry = new THREE.SphereGeometry(0.13, 32, 16)
      const material = new THREE.MeshStandardMaterial({
         color: 0xfbfff7
      }) 
      const mesh = new THREE.Mesh(geometry, material) 
      
      mesh.position.y = 0.55
      mesh.position.x = offset
      mesh.position.z = 0.2
      mesh.scale.z = 0.5
      mesh.scale.y = 1.1

      return mesh
   }
}