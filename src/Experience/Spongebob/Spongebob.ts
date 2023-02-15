import Experience from "../Experience"
import SpongebobBody from "./SpongebobBody"
import SpongebobPants from "./SpongebobPants"

export default class Spongebob{
   private scene: Experience["scene"]
   private body: SpongebobBody
   private pants: SpongebobPants

   constructor(experience: Experience){
      this.scene = experience.scene
      this.body = new SpongebobBody()
      this.pants = new SpongebobPants()
      this.scene.add(this.body.instance)
      this.scene.add(this.pants.instance)
   }
}