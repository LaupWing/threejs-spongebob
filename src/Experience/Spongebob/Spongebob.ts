import Experience from "../Experience"
import SpongebobHead from "./SpongebobHead"
import SpongebobPants from "./SpongebobPants"

export default class Spongebob{
   private scene: Experience["scene"]
   private body: SpongebobHead
   private pants: SpongebobPants

   constructor(experience: Experience){
      this.scene = experience.scene
      this.body = new SpongebobHead()
      this.pants = new SpongebobPants()
      this.scene.add(this.body.instance)
      this.scene.add(this.pants.instance)
   }
}