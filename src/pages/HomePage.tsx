import React, { useEffect } from "react";
import DateDisplay from "../components/DateDisplay";
import { ApiCalls } from "../services/services";
import { DefaultPageLayout } from "../layout/DefaultPageLayout";
import { Loading } from "../components/Loading";
import { LoadingOne } from "../components/LoadingOne";

const HomePage: React.FC = () => {
  const testV = import.meta.env.VITE_TEST_ENV;
  //useEffect(() => {
  //  const fetch = async () => {
  //    const res = await ApiCalls.getPosts();
  //    console.log("res", res);
  //  };
  //
  //  fetch();
  //}, []);

  return (
    <DefaultPageLayout>
      <h1 style={{ fontSize: "4em" }}>Hello world!</h1>
      {testV ?? "not found"}
      <DateDisplay />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Loading width="30px" height="30px" />
        <Loading width="10px" />
        <Loading width="50px" />
        <Loading width="100px" />
        <LoadingOne />
      </div>
      <p>
        Mario ipsum RGB mushroom 1-up. Mushroom Kingdom PAL fire bar blooper
        pixel, reset hammer bro! Super Luigi warp zone buzzy beetle vine!
        Nintendo Entertainment System Bowser super Luigi spiny platform Japan.
        <br /> Green shell cloud 1-up run. 1985 warp zone buzzy beetle koopa
        paratroopa plumber run fireball goomba, plumber swim fireball. Goomba
        Mushroom Kingdom bullet bill lava warp zone koopa troopa invincible
        Mario, slide koopa troopa, bottomless pit Mushroom Kingdom! Koopa troopa
        blooper Japan warp zone! PAL fire flower fire bar Luigi jump bridge
        Mario run.
        <br />
        Platform spiny bottomless pit vine pixel blooper piranha plant, radio
        frequency modulator super mushroom game pak brick? Fire flower 8-bit
        podoboo Nintendo Entertainment System? Reset piranha plant run cheep
        cheep power fire bar. Fireball spiny bottomless pit platform B-button
        koopa troopa Nintendo Entertainment System. Blooper reset. <br />
        Japan koopa paratroopa fireball run, power Mushroom Kingdom, invincible
        Luigi koopa paratroopa plumber, Japan pixel time Nintendo Entertainment
        System piranha plant. Life bill blaster radio frequency modulator game
        pak radio frequency modulator super Luigi 8-bit invincible Mario, Bowser
        super mushroom lakitu super Mario. Game over slide starman 1985 power
        Nintendo Entertainment System swim radio frequency modulator, RGB
        Nintendo Entertainment System PAL koopa paratroopa? Super Mario vine
        select button 1985 starman, Mario Nintendo Entertainment System
        side-scrolling? Slide jump. Mario ipsum RGB mushroom 1-up. Cheep cheep
        fire bar reset invincible Luigi coin platform swim red shell. Reset
        koopa paratroopa lava koopa troopa goomba, brick side-scrolling piranha
        plant side-scrolling invincible Mario green shell blooper Mushroom
        Kingdom game over bottomless pit. Podoboo Japan pixel game over 8-bit
        Japan game over, game pak super Luigi start button Bowser 8-bit buzzy
        beetle, super Luigi pipe vine. 1985 Nintendo Entertainment System? Super
        mushroom Japan start button plumber, B-button fire flower reset bill
        blaster 1985 red shell, start button reset time invincible Mario starman
        power 1-up? RGB green shell sprite koopa troopa super Luigi blooper fire
        bar, castle pixel jump starman. Nintendo Entertainment System 1-up warp
        zone question block hammer bro bottomless pit reset game pak, slide game
        over bottomless pit Luigi hammer bro power pipe reset? Piranha plant
        pipe. PAL vine lava invincible Luigi side-scrolling cheep cheep green
        shell? Fire flower question block piranha plant warp zone lava buzzy
        beetle. B-button warp zone. Radio frequency modulator vine lakitu! Slide
        warp zone goomba buzzy beetle koopa troopa, goomba jump, platform spiny.
        Mushroom Kingdom piranha plant fire flower Mario question block podoboo
        bullet bill.
      </p>
    </DefaultPageLayout>
  );
};

export default HomePage;
