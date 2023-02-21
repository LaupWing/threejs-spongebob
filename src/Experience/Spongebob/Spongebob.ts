import Experience from "../Experience"
import SpongebobBody from "./SpongebobBody"
import SpongebobEyes from "./SpongebobEyes/SpongebobEyes"
import SpongebobHead from "./SpongebobHead"
import SpongebobLegs from "./SpongebobLegs/SpongebobLegs"
import SpongebobPants from "./SpongebobPants"
import SpongebobShoes from "./SpongebobShoes/SpongebobShoes"

export default class Spongebob{
   private scene: Experience["scene"]
   private head: SpongebobHead
   private pants: SpongebobPants
   private body: SpongebobBody
   private legs: SpongebobLegs
   private shoes: SpongebobShoes
   private eyes: SpongebobEyes

   constructor(experience: Experience){
      this.scene = experience.scene
      this.head = new SpongebobHead()
      this.body = new SpongebobBody()
      this.pants = new SpongebobPants()
      this.legs = new SpongebobLegs()
      this.shoes = new SpongebobShoes()
      this.eyes = new SpongebobEyes()

      this.scene.add(this.head.instance)
      this.scene.add(this.body.instance)
      this.scene.add(this.pants.instance)
      this.scene.add(this.legs.instance)
      this.scene.add(this.shoes.instance)
      this.scene.add(this.eyes.instance)
   }
}