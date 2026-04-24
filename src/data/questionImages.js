// Background images for each question, keyed by question ID.
// Uses HP Fandom Wiki and Wikimedia Commons images.
// QuestionScreen falls back to no background if an image fails to load.

const W = (file) => `https://en.wikipedia.org/wiki/Special:FilePath/${file}`;
const HP = (path) => `https://static.wikia.nocookie.net/harrypotter/images/${path}/revision/latest/scale-to-width-down/800?cb=20130101000000`;

export const QUESTION_IMAGES = {
  // ── Round 1: Draco Malfoy ───────────────────────────────
  r1q1: HP('e/ed/Slytherin_ClearBG.png'),               // Slytherin crest
  r1q2: HP('a/a6/MalfoyManor.jpg'),                     // Malfoy Manor
  r1q3: HP('c/c2/Dobby_DH_Crop.jpg'),                   // Dobby
  r1q4: W('The_Domesticated_Ferret.jpg'),                // White ferret
  r1q5: HP('2/2f/Nimbus_2001.jpg'),                      // Nimbus 2001

  // ── Round 2: George Weasley ─────────────────────────────
  r2q1: HP('f/f1/Map.gif'),                              // Marauder's Map
  r2q2: HP('6/6f/Wwwexterior.jpg'),                      // Weasleys' Wizard Wheezes
  r2q3: HP('5/5b/GobletOfFireFilm.jpg'),                 // Goblet of Fire
  r2q4: HP('6/6d/OBHWF.jpg'),                            // Battle of Seven Potters
  r2q5: W('Eurasian_Magpie_crop.jpg'),                   // Magpie

  // ── Round 3: Fred Weasley ───────────────────────────────
  r3q1: HP('3/32/BattleofHogwarts.jpg'),                 // Battle of Hogwarts
  r3q2: HP('6/61/Quidditch_PS_screenshot.jpg'),          // Quidditch beaters
  r3q3: HP('8/8e/SkivingSnackboxes.jpg'),                // Skiving Snackboxes
  r3q4: HP('4/4e/Yule_Ball.jpg'),                        // Yule Ball
  r3q5: HP('d/d8/PortableSwamp.jpg'),                    // Portable Swamp

  // ── Round 4: Mr. Weasley ────────────────────────────────
  r4q1: HP('4/41/TheBurrow.jpg'),                        // The Burrow
  r4q2: HP('a/ab/FlyingFordAnglia.JPG'),                 // Flying Ford Anglia
  r4q3: HP('d/d6/Nagini.jpg'),                           // Nagini
  r4q4: W('Rubber_duckies_so_many.jpg'),                 // Rubber ducks
  r4q5: HP('3/3e/Ministry_of_Magic_Atrium.jpg'),         // Ministry of Magic

  // ── Round 5: Professor McGonagall ───────────────────────
  r5q1: HP('1/11/Transfiguration_classroom_PM.jpg'),     // Transfiguration class
  r5q2: HP('b/b0/GryffindorCommonRoom.jpg'),             // Gryffindor common room
  r5q3: W('Cat_November_2010-1a.jpg'),                   // Tabby cat
  r5q4: HP('6/61/Quidditch_PS_screenshot.jpg'),          // Quidditch pitch
  r5q5: HP('5/5e/Prof._McGonagall.jpg'),                 // McGonagall

  // ── Round 6: Mrs. Weasley ───────────────────────────────
  r6q1: HP('4/41/TheBurrow.jpg'),                        // The Burrow / Weasley family
  r6q2: W('Knitting_in_the_round_using_DPNs.jpg'),       // Knitting / Weasley jumper
  r6q3: HP('8/84/Bellatrix_Lestrange.jpg'),              // Bellatrix Lestrange
  r6q4: HP('1/1c/Boggart.jpg'),                          // Boggart in wardrobe
  r6q5: HP('8/89/Molly_Weasley_HBP.jpg'),                // Molly Weasley

  // ── Round 7: Remus Lupin ────────────────────────────────
  r7q1: W('FullMoon2010.jpg'),                           // Full moon (werewolf)
  r7q2: HP('0/05/Nymphadora_Tonks.jpg'),                 // Tonks
  r7q3: W('FullMoon2010.jpg'),                           // Moon (Moony)
  r7q4: HP('4/4a/Wolfsbane_Potion.jpg'),                 // Wolfsbane Potion
  r7q5: HP('6/6e/Teddy_Lupin.jpg'),                      // Teddy Lupin

  // ── Round 8: Lily Potter ────────────────────────────────
  r8q1: HP('b/b0/GryffindorCommonRoom.jpg'),             // Gryffindor
  r8q2: HP('9/9a/Lily_Evans.jpg'),                       // Lily Evans
  r8q3: HP('1/1b/SnapePoster_crop.jpg'),                 // Snape
  r8q4: HP('7/7a/Lily_Sacrifices_herself.jpg'),          // Lily's sacrifice
  r8q5: W('Roe_deer_doe.jpg'),                           // Doe in forest

  // ── Round 9: James Potter ───────────────────────────────
  r9q1: HP('e/e8/Invisibility_Cloak.jpg'),               // Invisibility Cloak
  r9q2: HP('6/6c/Peter_Pettigrew.jpg'),                  // Peter Pettigrew / Wormtail
  r9q3: W('Red_deer_stag_2009_denmark.jpg'),             // Stag
  r9q4: HP('2/27/James_Potter.jpg'),                     // James Potter
  r9q5: HP('6/61/Quidditch_PS_screenshot.jpg'),          // Quidditch chaser

  // ── Round 10: Hagrid ────────────────────────────────────
  r10q1: HP('0/04/Fluffy.jpg'),                          // Fluffy the three-headed dog
  r10q2: HP('e/ec/Care_of_Magical_Creatures_class.jpg'), // Magical creatures class
  r10q3: HP('c/c1/NorwegianRidgeback.jpg'),              // Norwegian Ridgeback dragon
  r10q4: HP('d/d3/Grawp.jpg'),                           // Grawp the giant
  r10q5: HP('8/8a/Hagrid%27s_Hut.jpg'),                  // Hagrid's Hut

  // ── Round 11: Voldemort ─────────────────────────────────
  r11q1: HP('d/d6/Nagini.jpg'),                          // Nagini
  r11q2: HP('b/b5/Tom_Riddle.jpg'),                      // Tom Riddle
  r11q3: HP('3/3c/Horcruxes.jpg'),                       // Horcruxes
  r11q4: W('Phoenix_Rising.jpg'),                        // Phoenix
  r11q5: HP('6/6a/Wool%27s_Orphanage.jpg'),              // Wool's Orphanage

  // ── Round 12: Albus Dumbledore ──────────────────────────
  r12q1: HP('5/53/Elder_Wand.jpg'),                      // Elder Wand
  r12q2: HP('0/01/Fawkes.jpg'),                          // Fawkes the phoenix
  r12q3: HP('8/82/Astronomy_Tower.jpg'),                 // Astronomy Tower
  r12q4: HP('9/96/Mirror_of_Erised.jpg'),                // Mirror of Erised
  r12q5: HP('0/0b/Dumbledore_HBP.jpg'),                  // Dumbledore portrait

  // ── Round 13: Ron Weasley ───────────────────────────────
  r13q1: W('Araneus_diadematus_2009.jpg'),               // Spider
  r13q2: HP('5/59/Giant_Chess.jpg'),                     // Giant chess
  r13q3: HP('d/d6/Gilderoy_Lockhart.jpg'),               // Gilderoy Lockhart
  r13q4: W('JRT_Russel_2.jpg'),                          // Jack Russell Terrier
  r13q5: HP('4/43/Ron_Weasley_HBP_promo.jpg'),           // Ron Weasley

  // ── Round 14: Hermione Granger ──────────────────────────
  r14q1: HP('a/a0/Crookshanks.jpg'),                     // Crookshanks
  r14q2: W('Dental_instruments.jpg'),                    // Dentist tools
  r14q3: HP('c/c7/Time_Turner.jpg'),                     // Time-Turner
  r14q4: HP('c/c2/Dobby_DH_Crop.jpg'),                   // Dobby (house elf / SPEW)
  r14q5: W('Glasses_800_edit.png'),                      // Glasses

  // ── Round 15: Harry Potter ──────────────────────────────
  r15q1: HP('3/36/Golden_Snitch.jpg'),                   // Golden Snitch
  r15q2: W('Red_deer_stag_2009_denmark.jpg'),            // Stag Patronus
  r15q3: HP('0/0a/Harry%27s_Birthday_Cake.jpg'),         // Harry's birthday cake
  r15q4: HP('9/96/Mirror_of_Erised.jpg'),                // Mirror of Erised
  r15q5: HP('8/82/Sign_of_the_Deathly_Hallows.jpg'),     // Deathly Hallows symbol
};
