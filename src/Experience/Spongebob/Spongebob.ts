import Experience from "../Experience"
import SpongebobBody from "./SpongebobBody"
import SpongebobHead from "./SpongebobHead"
import SpongebobLegsLeft from "./SpongebobLegs/SpongebobLegsLeft/SpongebobLegsLeft"
import SpongebobLegsRight from "./SpongebobLegs/SpongebobLegsRight/SpongebobLegsRight"
import SpongebobPants from "./SpongebobPants"

export default class Spongebob{
   private scene: Experience["scene"]
   private head: SpongebobHead
   private pants: SpongebobPants
   private body: SpongebobBody
   private legs: SpongebobLegsLeft
   private legs_r: SpongebobLegsRight

   constructor(experience: Experience){
      this.scene = experience.scene
      this.head = new SpongebobHead()
      this.body = new SpongebobBody()
      this.pants = new SpongebobPants()
      this.legs = new SpongebobLegsLeft()
      this.legs_r = new SpongebobLegsRight()

      this.scene.add(this.legs_r.instance)
      this.scene.add(this.legs.instance)
      this.scene.add(this.head.instance)
      this.scene.add(this.body.instance)
      this.scene.add(this.pants.instance)
   }
}