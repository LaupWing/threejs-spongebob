import Experience from "../Experience"
import SpongebobBody from "./SpongebobBody"
import SpongebobHead from "./SpongebobHead"
import SpongebobPants from "./SpongebobPants"

export default class Spongebob{
   private scene: Experience["scene"]
   private head: SpongebobHead
   private pants: SpongebobPants
   private body: SpongebobBody

   constructor(experience: Experience){
      this.scene = experience.scene
      this.head = new SpongebobHead()
      this.body = new SpongebobBody()
      this.pants = new SpongebobPants()

      this.scene.add(this.head.instance)
      this.scene.add(this.body.instance)
      // this.scene.add(this.pants.instance)
   }
}