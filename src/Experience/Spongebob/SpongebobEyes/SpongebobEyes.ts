import * as THREE from "three"

export default class SpongebobEyes {
   public instance: THREE.Group

   constructor(){
      this.instance = new THREE.Group()
      this.instance.add(
         this.createSclera(-0.12),
         this.createSclera(0.12),
         this.createIris(0.12),
         this.createPupil(0.12),
         this.createIris(-0.12),
         this.createPupil(-0.12),
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

   createIris(offset: number){
      const geometry = new THREE.SphereGeometry(0.07, 32, 16)
      const material = new THREE.MeshStandardMaterial({
         color: 0x68bde0
      }) 
      const mesh = new THREE.Mesh(geometry, material) 
      
      mesh.position.y = 0.55
      mesh.position.x = offset
      mesh.position.z = 0.24
      mesh.scale.z = 0.5
      mesh.scale.y = 1.1

      return mesh
   }

   createPupil(offset: number){
      const geometry = new THREE.SphereGeometry(0.05, 32, 16)
      const material = new THREE.MeshStandardMaterial({
         color: 0x000000
      }) 
      const mesh = new THREE.Mesh(geometry, material) 
      
      mesh.position.y = 0.55
      mesh.position.x = offset
      mesh.position.z = 0.255
      mesh.scale.z = 0.5
      mesh.scale.y = 1.1

      return mesh
   }
}