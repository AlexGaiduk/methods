import Bowman from "../classes/bowman";
import Magician from "../classes/magician";

describe("Method levelUp(extends Character)", () => {
  test("choose new abilities", () => {
    const bowman = new Bowman("Dally");
    bowman.levelUp();

    const expBowman = {
      attack: 30,
      defence: 30,
      health: 100,
      level: 2,
      name: "Dally",
    };

    expect(bowman).toEqual(expBowman);
  });

  test("error", () => {
    const result = () => {
      const magician = new Magician("Dilly");
      magician.levelUp();
    };

    expect(result).toThrowError(new Error("Нельзя повысить левел умершего героя"));
  });
});