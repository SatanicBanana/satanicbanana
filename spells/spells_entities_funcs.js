entities_spells = {
    "Player": [
        // None
    ],

    "test enemy": [
        // Bite; 6 physical dmg; range 1
        enemy_melee_core("Bite", 6, DmgType.Physical)
    ],

    "big guy": [
        // None
    ],

    "Fuckn GUy": [
        // KIll You BOLT; damage plus i; lightning bolt
        enemy_spell_group(
            0, "KIll You BOLT", "#fe5", gen_spells(
                "damage plus i", "lightning bolt"
            )
        ),

        // EPXLODE; 40 holy dmg; line; range 40; trigger at target; 100 psychic dmg; burst radius 2; cooldown 8 turns
        enemy_spell_group(
            8, "EPXLODE", damage_type_cols[DmgType.Psychic], [
                core_spell(
                    "EPXLODE 1", "[]", SpellSubtype.Red, "#fff", "#f00",
                    "FIRES A STUPID EXPLOSIVE, DEALING 40 HOLY DAMAGE TO ALL ENEMIES ON ITS PATH BEFORE EXPLODING FOR 100 PSYCHIC DAMAGE IN A 2 TILE BURST",
                    40, DmgType.Holy, 40, 1, Shape.Line, 0
                ).set_trigger("at_target"),

                core_spell(
                    "EPXLODE 2", "##", SpellSubtype.Red, "#fff", "#f00", "",
                    100, DmgType.Psychic, 0, 2, Shape.Diamond, 0
                )
            ]
        )
    ],

    "Wall": [
        // None
    ],

    "Goblin": [
        // Bite; 6 physical dmg; range 1
        enemy_melee_core("Bite", 6, DmgType.Physical)
    ],

    "Hobgoblin": [
        // Claw; 7 physical dmg; range 1
        enemy_melee_core("Claw", 7, DmgType.Physical)
    ],

    "Gobbo": [
        // Scream; 4 chaos dmg; line; range 3
        simple_enemy_line_core(
            0, "Scream", "", "",
            4, DmgType.Chaos, 3, 0
        )
    ],

    "Gremlin": [
        // Bite; 5 physical dmg; range 1
        enemy_melee_core("Bite", 5, DmgType.Physical)
    ],

    "Alpha Goblin": [
        // Body Slam; 10 physical dmg; range 1
        enemy_melee_core("Body Slam", 10, DmgType.Physical),

        // Uppercut; 15 physical dmg; range 1; cooldown 4 turns
        enemy_melee_core("Uppercut", 15, DmgType.Physical, 4)
    ],

    "Flaming Goblin": [
        // Tackle; 8 fire dmg; range 1
        enemy_melee_core("Tackle", 8, DmgType.Physical),

        // Firebreathing; 4 fire dmg; cone; range 3
        simple_enemy_burst_core(
            0, "Firebreathing", "", "", 4, DmgType.Fire, 3, 3, 0, Shape.Cone
        )
    ],

    "Esper Goblin": [
        // Mind Spike; 12 psychic dmg; range 6; line; 15 MP
        simple_enemy_line_core(0, "Mind Spike", "", "", 12, DmgType.Psychic, 6, 15)
    ],

    "Static Goblin": [
        // Static Bolt; 8 lightning dmg; line; range 5; 5MP
        simple_enemy_line_core(0, "Static Bolt", "", "", 8, DmgType.Lightning, 5, 5),

        // Spark Burst; 16 lightning dmg; selftarget; burst; radius 4; 20MP
        enemy_spell_group(
            0, "Spark Burst", damage_type_cols[DmgType.Lightning], [
                core_spell(
                    "Spark Burst", "[]", SpellSubtype.Core, damage_type_cols[DmgType.Lightning],
                    "#000", "", 16, DmgType.Lightning, 4, 4, Shape.Diamond, 20, SpellTargeting.SelfTarget
                )
            ]
        )
    ],

    "Possessed Bat": [
        // Bite; 4 physical dmg; range 1
        enemy_melee_core("Bite", 4, DmgType.Physical),

        // Dark Bolt; 6 dark dmg; range 3; line; 5 MP
        simple_enemy_line_core(0, "Dark Bolt", "", "", 6, DmgType.Dark, 3, 5)
    ],

    "Goblin War Machine": [
        // Metal Bash; 10 physical dmg; range 1
        // Shrapnel Salvo; unc.multicast x4 => 6 phys line; range 6; 15 MP
        // Makeshift Gun; 14 physical dmg; line; range 10; 6 turn cooldown
        enemy_melee_core("Metal Bash", 10, DmgType.Physical),

        simple_enemy_core(
            0, "Shrapnel Salvo", "[]", damage_type_cols[DmgType.Physical],
            "#000", "Fires five times with random spread.", 6, DmgType.Physical,
            6, 1, Shape.Line, 15, SpellTargeting.Positional, null, function(user, spell, stats) {
                stats.multicasts["unpredictable"] += 4
            }
        ),

        simple_enemy_line_core(
            6, "Makeshift Gun", "[]", damage_type_cols[DmgType.Physical],
            14, DmgType.Physical, 10, 0
        )
    ],

    "Goblin Gear": [
        // Steel Strike; 18 physical dmg; range 1
        // Missile Salvo; unc.multicast x4 => 12 fire dmg radius 3 burst; range 6; 25 MP
        // Railcannon; 22 physical dmg; range 10; 50 MP; 3 turn cooldown
        enemy_melee_core("Steel Strike", 18, DmgType.Physical),

        simple_enemy_core(
            0, "Missile Salvo", "[]", damage_type_cols[DmgType.Fire],
            "#000", "Fires five times with random spread.", 12, DmgType.Fire,
            6, 3, Shape.Diamond, 25, SpellTargeting.Positional, null, function(user, spell, stats) {
                stats.multicasts["unpredictable"] += 4
            }
        ),

        simple_enemy_line_core(
            3, "Railcannon", "[]", damage_type_cols[DmgType.Physical],
            22, DmgType.Physical, 10, 0
        )
    ],

    "Giant Goblin": [
        // Crush; 14 physical dmg; range 1
        enemy_melee_core("Crush", 14, DmgType.Physical)
    ],

    "Titanic Goblin": [
        // Crush; 30 physical dmg; range 1
        enemy_melee_core("Crush", 30, DmgType.Physical)
    ],

    "Bat": [
        // Bite; 6 physical dmg; range 1
        enemy_melee_core("Bite", 6, DmgType.Physical)
    ],

    "Giant Bat": [
        // Bite; 18 physical dmg; range 1
        enemy_melee_core("Bite", 18, DmgType.Physical)
    ],

    "Ghost": [
        // Dark Touch; 3 dark dmg; range 1
        enemy_melee_core("Dark Touch", 3, DmgType.Dark)
    ],

    "Vengeful Ghost": [
        // Fire Bolt; 5 fire dmg; range 3; 10 MP
        // Soul Sucker; 12 dark dmg; range 1; -5 MP
        simple_enemy_burst_core(0, "Fire Bolt", "[]", damage_type_cols[DmgType.Fire], 5, DmgType.Fire, 3, 1, 10),

        enemy_melee_core("Soul Sucker", 12, DmgType.Dark, 0, -5)
    ],

    "Wraith": [
        // Terror; 8 dark dmg; radius 2 burst; selftarget; 15 MP
        simple_enemy_core(
            0, "Terror", "[]", damage_type_cols[DmgType.Dark],
            "#000", "", 8, DmgType.Dark,
            2, 2, Shape.Diamond, 15, SpellTargeting.SelfTarget
        )
    ],

    "Spirit Amalgam": [
        // Dark Touch; 6 dark dmg; range 1
        // Haunt; teleport up to 3 tiles towards target; range 64; 3 turn cooldown
    ],

    "Bucket of Ghosts": [
        // Launch Ghost; spawn ghost near to target; range 8; 3 turn cooldown
        // Ghost Spillage; spawn ghosts on every tile; selftarget radius 1 burst
    ],

    "Ghost Ghost": [
        // Dark Touch; 7 dark dmg; range 1
    ],

    "Demonic Spirit": [
        // Energy Lance; 8 chaos dmg; line; range 6; 20 MP
    ],

    "Spirit Caller": [
        // Summon Ghost; spawn ghost near target; selftarget radius 0; 30 MP
        // Summon Vengeful Ghost; same but with venge ghost; 100 MP; 4 turn cd
    ],

    "Fire Spirit": [
        // Flame Detonation; 8 fire dmg; 2 radius self burst; 10 MP
        // Fireball; 6 fire dmg; 1 radius burst; range 6; 6 MP; 2 turn cd
    ],

    "Fire Demon": [
        // Infernal Beam; 5 fire dmg; line; ignores los; range 8; 40 MP
        // Detonation; 13 fire dmg; 2 radius burst; range 5; 25 MP; 3 turn cd
    ],

    "Flame Golem": [
        // Smash; 12 physical + 6 fire dmg; melee
        // Flame Lash; 3 fire dmg; range 7; radius 0; 5 MP
        // Core Ejection; 25 fire dmg; 10 turn cd; 40 MP
    ],

    "Flame Portal": [
        // Incursion; spawn 1-4 Demonic Spirit / Fire Spirit / Fire Demon / Flame Golem; 7 turn cd
    ],

    "Crazed Fire Demon": [
        // Overcharged Infernal Beam; 20 fire dmg; ignores los; range 10; 60 MP; 2 turn cd
        // Flame Detonation; 14 fire dmg; radius 5 cone; range 6; 80 MP; 3 turn cd
    ],

    "Flame Rift": [
        // Incursion; spawn 3-6 of the flame portal pool, 1-3 Crazed Fire Demon or 1 Firebug Broodmother; 10 turn cd
    ],

    "Firebug": [
        // Bite; 2 fire dmg; melee
    ],

    "Firebug Broodmother": [
        // None
    ],

    "Goblin Fire Mage": [
        // Fireball; 7 fire dmg; range 7; 3 radius burst; 25 MP
        // Searing Touch; 24 fire dmg; melee; 40 MP
    ],

    "Ice Spirit": [
        // Ice Ball; same as normal ice ball in every way
    ],

    "Chilling Totem": [
        // Chilling Wind; summon an Ice Wall at a random adjacent position; 6 turn cooldown
    ],

    "Frozen Totem": [
        // Freezing Wind; summon 5 Ice Walls randomly in a radius of 2; 6 turn cooldown
    ],

    "Polar Bear": [
        // Bite; 16 physical dmg; melee
        // Hibernate; apply frozen to self for 5 turns; cooldown 10 turns
    ],

    "Undead Viking Spearman": [
        // Spear Strike; 2 range; 4 physical dmg
        // Chilling Touch; 2 range; 9 ice dmg; 25 MP
    ],

    "Frozen Ghost": [
        // Freezing Touch; melee; apply Frozen to target for 2 turns; 80 MP
    ],

    "Ice Demon": [
        // Ice Ball; same as normal ice ball in every way
        // Frostbite; same as normal frostbite in every way
    ],

    "Undead Viking Bowman": [
        // Spear Strike; 9 range; 1 physical dmg
        // Chilling Arrow; 9 range; 3 ice dmg; 25 MP
    ],

    "Lightning Spirit": [
        // Lightning Bolt; 3 range; 5 lightning dmg; 25 MP
    ],

    "Spark Wraith": [
        // Voltaic Discharge; 5 range; 7 lightning dmg; 75 MP
        // Void Transmission; 2 range; 4 lightning dmg; 100% redeal dark; lightning damage causes targets to be teleported randomly within 10 tiles
    ],

    "Charged Golem": [
        // Static Crush; 10 physical dmg + 10 lightning dmg; melee
        // Eject Rod; 6 range; 8 physical dmg + 6 lightning dmg; removes 15% hp on cast; cooldown 4
        // Regenerate; apply Stunned to self for 3 turns and heal 30% max HP; 10 turn cooldown; only (and always) used when <30% HP
    ],

    "Amphibious Eel": [
        // Shock; 4 lightning dmg; melee
    ],

    "Goblin Stormcrafter": [
        // Lightning Bolt; as normal spell
        // Hypercharge; as normal spell
    ],

    "Arcane Aberration": [
        // None
    ],

    "Living Wand": [
        // None
    ],

    "Magishroom": [
        // None
    ],

    "Giant Magishroom": [
        // None
    ],

    "Demonic Arcanist": [
        // None
    ],

    "Possessed Wand": [
        // None
    ],

    "Arcane Spirit": [
        // None
    ],

    "Posessed Armour": [
        // None
    ],

    "Ghost Ghost Ghost": [
        // None
    ],

    "Revenant": [
        // None
    ],

    "Restless Spirit": [
        // None
    ],

    "Ghastly Horseman": [
        // None
    ],

    "Fallen Knight": [
        // None
    ],

    "Angel of Fire": [
        // None
    ],

    "Angel of Lightning": [
        // None
    ],

    "Angel of Judgement": [
        // None
    ],

    "High Angel of Fire": [
        // None
    ],

    "High Angel of Lightning": [
        // None
    ],

    "Archangel": [
        // None
    ],

    "Holy Avatar": [
        // None
    ],

    "Priest": [
        // None
    ],

    "Idol": [
        // None
    ],

    "Doomsayer": [
        // None
    ],

    "High Priest": [
        // None
    ],

    "Necromancer": [
        // None
    ],

    "Thrall": [
        // None
    ],

    "Tormentor": [
        // None
    ],

    "Dark Spirit": [
        // None
    ],

    "Malicious Force": [
        // None
    ],

    "Crow": [
        // None
    ],

    "Corvid Abomination": [
        // None
    ],

    "Flesh Golem": [
        // None
    ],

    "Experiment": [
        // None
    ],

    "Grand Experiment": [
        // None
    ],

    "Imp": [
        // None
    ],

    "Fire Imp": [
        // None
    ],

    "Frost Imp": [
        // None
    ],

    "Chaotic Imp": [
        // None
    ],

    "Primal Demon": [
        // None
    ],

    "Demon Mage": [
        // None
    ],

    "Demon Wizard": [
        // None
    ],

    "Brimstone Elemental": [
        // None
    ],

    "Brimstone Demon": [
        // None
    ],

    "Bone Shambler": [
        // None
    ],

    "Bone Construct": [
        // None
    ],

    "Bone Hulk": [
        // None
    ],

    "Giant Bone Construct": [
        // None
    ],

    "Mistake": [
        // Sweep; 40 physical dmg; range 1
        // Life Drain; 32 dark dmg; range 1; heals user by damage dealt
    ],

    "Locust Swarm": [
        // None
    ],

    "Giant Beetle": [
        // None
    ],

    "Lamia": [
        // None
    ],

    "Frost Tiger": [
        // None
    ],

    "Voidtouched Lion": [
        // None
    ],

    "Treant": [
        // None
    ],

    "Stumpy Walker": [
        // None
    ],

    "Giant Flytrap": [
        // None
    ],

    "Vine Lasher": [
        // None
    ],

    "Fire Flower": [
        // None
    ],

    "Posessed Sunflower": [
        // None
    ],

    "Chimera": [
        // None
    ],

    "Minotaur": [
        // None
    ],

    "Werewolf": [
        // None
    ],

    "Basilisk": [
        // None
    ],

    "Kraken": [
        // None
    ],

    "Ogre": [
        // None
    ],

    "Giant Ogre": [
        // None
    ],

    "Tiny Ogre": [
        // None
    ],

    "Gnome": [
        // None
    ],

    "Hypergnome": [
        // None
    ],

    "Centaur Courser": [
        // None
    ],

    "Centaur Bowman": [
        // None
    ],

    "Centaur Spearman": [
        // None
    ],

    "Phoenix": [
        // None
    ],

    "Ice Phoenix": [
        // None
    ],

    "Hydra": [
        // None
    ],

    "Scorpion": [
        // None
    ],

    "Lightning Scorpion": [
        // None
    ],

    "Acidic Scorpion": [
        // None
    ],

    "Towering Isopod": [
        // None
    ],

    "Giant Mantis": [
        // None
    ],

    "Chaotic Construct": [
        // None
    ],

    "Dark Idol": [
        // None
    ],

    "Flesh Totem": [
        // None
    ],

    "Bugbeast": [
        // None
    ],

    "Spider": [
        // None
    ],

    "Giant Spider": [
        // None
    ],

    "Giant Enemy Spider": [
        enemy_melee_core("Trample", 500, DmgType.Physical)
    ],

    "Skeleton": [
        // None
    ],

    "Giant Skeleton": [
        // None
    ],

    "Seraphim": [
        // None
    ],

    "Rock Golem": [
        // None
    ],

    "Acolyte of Order": [
        // None
    ],

    "Rock Titan": [
        // None
    ],

    "Granite Titan": [
        // None
    ],

    "Mud Titan": [
        // None
    ],

    "Bronze Colossus": [
        // None
    ],

    "Steel Colossus": [
        // None
    ],

    "Faithful of Order": [
        // None
    ],

    "Wizard of Order": [
        // None
    ],

    "High Wizard of Order": [
        // None
    ],

    "Master of Order": [
        // None
    ],

    "Ice Wall": [
        // None
    ],

    "Target Dummy": [
        // None
    ],

    "Refticus": [
        // It's So Over; 100 physical dmg; melee
        // 11:00 PM; applies sleep to target for 5 turns, or caster if time is 11:00pm-6:00am; 99 range; 7 turn cooldown
    ],

    "Castle Wall": [
        // None
    ],

    "Chasm": [
        // None
    ],

    "Corruption": [
        // None
    ],

    "Tree": [
        // None
    ],

    "Deep Water": [
        // None
    ],

    "Rock Wall": [
        // None
    ],

    "Magical Wall": [
        // None
    ],

    "Pile of Bones": [
        // None
    ],

    "Cliff Edge": [
        // None
    ],

    "Elevated Mesa": [
        // None
    ],

    "Icy Wall": [
        // None
    ],

    "Magma": [
        // None
    ],

    "Obscured": [
        // None
    ],

    "Solid Cloud": [
        // None
    ],

    "Unnamed": [
        // None
    ],
}

entities_specials = {
    "Player": function(game, ent, event_info) {
        // None
    },

    "test enemy": function(game, ent, event_info) {
        // None
    },

    "big guy": function(game, ent, event_info) {
        // None
    },

    "Fuckn GUy": function(game, ent, event_info) {
        // None
    },

    "Wall": function(game, ent, event_info) {
        // None
    },

    "Goblin": function(game, ent, event_info) {
        // None
    },

    "Hobgoblin": function(game, ent, event_info) {
        // None
    },

    "Gobbo": function(game, ent, event_info) {
        // None
    },

    "Gremlin": function(game, ent, event_info) {
        // None
    },

    "Alpha Goblin": function(game, ent, event_info) {
        // None
    },

    "Flaming Goblin": function(game, ent, event_info) {
        // None
    },

    "Esper Goblin": function(game, ent, event_info) {
        // None
    },

    "Static Goblin": function(game, ent, event_info) {
        // None
    },

    "Possessed Bat": function(game, ent, event_info) {
        // None
    },

    "Goblin War Machine": function(game, ent, event_info) {
        // None
    },

    "Goblin Gear": function(game, ent, event_info) {
        // None
    },

    "Giant Goblin": function(game, ent, event_info) {
        // Regenerates 5 HP per turn.
    },

    "Titanic Goblin": function(game, ent, event_info) {
        // Regenerates 12 HP per turn.
    },

    "Bat": function(game, ent, event_info) {
        // None
    },

    "Giant Bat": function(game, ent, event_info) {
        // None
    },

    "Ghost": function(game, ent, event_info) {
        // None
    },

    "Vengeful Ghost": function(game, ent, event_info) {
        // Deals 2 Dark damage every turn to adjacent units.
    },

    "Wraith": function(game, ent, event_info) {
        // None
    },

    "Spirit Amalgam": function(game, ent, event_info) {
        // None
    },

    "Bucket of Ghosts": function(game, ent, event_info) {
        // None
    },

    "Ghost Ghost": function(game, ent, event_info) {
        // None
    },

    "Demonic Spirit": function(game, ent, event_info) {
        // If alive for 16 turns, explodes in a 3 tile burst for 16 Fire damage. (Turns remaining: [[explosion_turns_left]])
    },

    "Spirit Caller": function(game, ent, event_info) {
        // None
    },

    "Fire Spirit": function(game, ent, event_info) {
        // If witnessing any Fire damage, heals 2 HP.
    },

    "Fire Demon": function(game, ent, event_info) {
        // None
    },

    "Flame Golem": function(game, ent, event_info) {
        // None
    },

    "Flame Portal": function(game, ent, event_info) {
        // None
    },

    "Crazed Fire Demon": function(game, ent, event_info) {
        // If witnessing any Fire damage, gains 2 Shield.
    },

    "Flame Rift": function(game, ent, event_info) {
        // None
    },

    "Firebug": function(game, ent, event_info) {
        // None
    },

    "Firebug Broodmother": function(game, ent, event_info) {
        // Summons a Firebug on an adjacent empty tile every turn.
    },

    "Goblin Fire Mage": function(game, ent, event_info) {
        // None
    },

    "Ice Spirit": function(game, ent, event_info) {
        // None
    },

    "Chilling Totem": function(game, ent, event_info) {
        // Deals 2 Ice damage per turn to all units within 2 tiles.
    },

    "Frozen Totem": function(game, ent, event_info) {
        // Deals 6 Ice damage per turn to all units within 2 tiles.
    },

    "Polar Bear": function(game, ent, event_info) {
        // Heals 25 HP per turn while Frozen.
    },

    "Undead Viking Spearman": function(game, ent, event_info) {
        // Immune to Frozen.
    },

    "Frozen Ghost": function(game, ent, event_info) {
        // Immune to Frozen.
    },

    "Ice Demon": function(game, ent, event_info) {
        // None
    },

    "Undead Viking Bowman": function(game, ent, event_info) {
        // Immune to Frozen.
    },

    "Lightning Spirit": function(game, ent, event_info) {
        // None
    },

    "Spark Wraith": function(game, ent, event_info) {
        // None
    },

    "Charged Golem": function(game, ent, event_info) {
        // None
    },

    "Amphibious Eel": function(game, ent, event_info) {
        // None
    },

    "Goblin Stormcrafter": function(game, ent, event_info) {
        // None
    },

    "Arcane Aberration": function(game, ent, event_info) {
        // None
    },

    "Living Wand": function(game, ent, event_info) {
        // None
    },

    "Magishroom": function(game, ent, event_info) {
        // None
    },

    "Giant Magishroom": function(game, ent, event_info) {
        // None
    },

    "Demonic Arcanist": function(game, ent, event_info) {
        // None
    },

    "Possessed Wand": function(game, ent, event_info) {
        // None
    },

    "Arcane Spirit": function(game, ent, event_info) {
        // None
    },

    "Posessed Armour": function(game, ent, event_info) {
        // None
    },

    "Ghost Ghost Ghost": function(game, ent, event_info) {
        // None
    },

    "Revenant": function(game, ent, event_info) {
        // None
    },

    "Restless Spirit": function(game, ent, event_info) {
        // None
    },

    "Ghastly Horseman": function(game, ent, event_info) {
        // None
    },

    "Fallen Knight": function(game, ent, event_info) {
        // None
    },

    "Angel of Fire": function(game, ent, event_info) {
        // None
    },

    "Angel of Lightning": function(game, ent, event_info) {
        // None
    },

    "Angel of Judgement": function(game, ent, event_info) {
        // None
    },

    "High Angel of Fire": function(game, ent, event_info) {
        // None
    },

    "High Angel of Lightning": function(game, ent, event_info) {
        // None
    },

    "Archangel": function(game, ent, event_info) {
        // None
    },

    "Holy Avatar": function(game, ent, event_info) {
        // None
    },

    "Priest": function(game, ent, event_info) {
        // None
    },

    "Idol": function(game, ent, event_info) {
        // None
    },

    "Doomsayer": function(game, ent, event_info) {
        // None
    },

    "High Priest": function(game, ent, event_info) {
        // None
    },

    "Necromancer": function(game, ent, event_info) {
        // None
    },

    "Thrall": function(game, ent, event_info) {
        // None
    },

    "Tormentor": function(game, ent, event_info) {
        // None
    },

    "Dark Spirit": function(game, ent, event_info) {
        // None
    },

    "Malicious Force": function(game, ent, event_info) {
        // None
    },

    "Crow": function(game, ent, event_info) {
        // None
    },

    "Corvid Abomination": function(game, ent, event_info) {
        // None
    },

    "Flesh Golem": function(game, ent, event_info) {
        // None
    },

    "Experiment": function(game, ent, event_info) {
        // None
    },

    "Grand Experiment": function(game, ent, event_info) {
        // None
    },

    "Imp": function(game, ent, event_info) {
        // None
    },

    "Fire Imp": function(game, ent, event_info) {
        // None
    },

    "Frost Imp": function(game, ent, event_info) {
        // None
    },

    "Chaotic Imp": function(game, ent, event_info) {
        // None
    },

    "Primal Demon": function(game, ent, event_info) {
        // None
    },

    "Demon Mage": function(game, ent, event_info) {
        // None
    },

    "Demon Wizard": function(game, ent, event_info) {
        // None
    },

    "Brimstone Elemental": function(game, ent, event_info) {
        // None
    },

    "Brimstone Demon": function(game, ent, event_info) {
        // None
    },

    "Bone Shambler": function(game, ent, event_info) {
        // None
    },

    "Bone Construct": function(game, ent, event_info) {
        // None
    },

    "Bone Hulk": function(game, ent, event_info) {
        // None
    },

    "Giant Bone Construct": function(game, ent, event_info) {
        // None
    },

    "Mistake": function(game, ent, event_info) {
        // None
    },

    "Locust Swarm": function(game, ent, event_info) {
        // None
    },

    "Giant Beetle": function(game, ent, event_info) {
        // None
    },

    "Lamia": function(game, ent, event_info) {
        // None
    },

    "Frost Tiger": function(game, ent, event_info) {
        // None
    },

    "Voidtouched Lion": function(game, ent, event_info) {
        // None
    },

    "Treant": function(game, ent, event_info) {
        // None
    },

    "Stumpy Walker": function(game, ent, event_info) {
        // None
    },

    "Giant Flytrap": function(game, ent, event_info) {
        // None
    },

    "Vine Lasher": function(game, ent, event_info) {
        // None
    },

    "Fire Flower": function(game, ent, event_info) {
        // None
    },

    "Posessed Sunflower": function(game, ent, event_info) {
        // None
    },

    "Chimera": function(game, ent, event_info) {
        // None
    },

    "Minotaur": function(game, ent, event_info) {
        // None
    },

    "Werewolf": function(game, ent, event_info) {
        // None
    },

    "Basilisk": function(game, ent, event_info) {
        // None
    },

    "Kraken": function(game, ent, event_info) {
        // None
    },

    "Ogre": function(game, ent, event_info) {
        // None
    },

    "Giant Ogre": function(game, ent, event_info) {
        // None
    },

    "Tiny Ogre": function(game, ent, event_info) {
        // None
    },

    "Gnome": function(game, ent, event_info) {
        // None
    },

    "Hypergnome": function(game, ent, event_info) {
        // None
    },

    "Centaur Courser": function(game, ent, event_info) {
        // None
    },

    "Centaur Bowman": function(game, ent, event_info) {
        // None
    },

    "Centaur Spearman": function(game, ent, event_info) {
        // None
    },

    "Phoenix": function(game, ent, event_info) {
        // None
    },

    "Ice Phoenix": function(game, ent, event_info) {
        // None
    },

    "Hydra": function(game, ent, event_info) {
        // None
    },

    "Scorpion": function(game, ent, event_info) {
        // None
    },

    "Lightning Scorpion": function(game, ent, event_info) {
        // None
    },

    "Acidic Scorpion": function(game, ent, event_info) {
        // None
    },

    "Towering Isopod": function(game, ent, event_info) {
        // None
    },

    "Giant Mantis": function(game, ent, event_info) {
        // None
    },

    "Chaotic Construct": function(game, ent, event_info) {
        // None
    },

    "Dark Idol": function(game, ent, event_info) {
        // None
    },

    "Flesh Totem": function(game, ent, event_info) {
        // None
    },

    "Bugbeast": function(game, ent, event_info) {
        // None
    },

    "Spider": function(game, ent, event_info) {
        // None
    },

    "Giant Spider": function(game, ent, event_info) {
        // None
    },

    "Giant Enemy Spider": function(game, ent, event_info) {
        // None
    },

    "Skeleton": function(game, ent, event_info) {
        // None
    },

    "Giant Skeleton": function(game, ent, event_info) {
        // None
    },

    "Seraphim": function(game, ent, event_info) {
        // None
    },

    "Rock Golem": function(game, ent, event_info) {
        // None
    },

    "Acolyte of Order": function(game, ent, event_info) {
        // None
    },

    "Rock Titan": function(game, ent, event_info) {
        // None
    },

    "Granite Titan": function(game, ent, event_info) {
        // None
    },

    "Mud Titan": function(game, ent, event_info) {
        // None
    },

    "Bronze Colossus": function(game, ent, event_info) {
        // None
    },

    "Steel Colossus": function(game, ent, event_info) {
        // None
    },

    "Faithful of Order": function(game, ent, event_info) {
        // None
    },

    "Wizard of Order": function(game, ent, event_info) {
        // None
    },

    "High Wizard of Order": function(game, ent, event_info) {
        // None
    },

    "Master of Order": function(game, ent, event_info) {
        // None
    },

    "Ice Wall": function(game, ent, event_info) {
        // None
    },

    "Target Dummy": function(game, ent, event_info) {
        // Heals to max HP every turn.
    },

    "Refticus": function(game, ent, event_info) {
        // Takes no damage except for Physical damage. Won't attack you if they are full HP.
    },

    "Castle Wall": function(game, ent, event_info) {
        // None
    },

    "Chasm": function(game, ent, event_info) {
        // None
    },

    "Corruption": function(game, ent, event_info) {
        // None
    },

    "Tree": function(game, ent, event_info) {
        // None
    },

    "Deep Water": function(game, ent, event_info) {
        // None
    },

    "Rock Wall": function(game, ent, event_info) {
        // None
    },

    "Magical Wall": function(game, ent, event_info) {
        // None
    },

    "Pile of Bones": function(game, ent, event_info) {
        // None
    },

    "Cliff Edge": function(game, ent, event_info) {
        // None
    },

    "Elevated Mesa": function(game, ent, event_info) {
        // None
    },

    "Icy Wall": function(game, ent, event_info) {
        // None
    },

    "Magma": function(game, ent, event_info) {
        // None
    },

    "Obscured": function(game, ent, event_info) {
        // None
    },

    "Solid Cloud": function(game, ent, event_info) {
        // None
    },

    "Unnamed": function(game, ent, event_info) {
        // None
    },


}
