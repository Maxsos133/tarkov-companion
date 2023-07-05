const db = require("../db");
const { Item } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const items = [
    {
      name: "Colt M4A1 5.56x45 assault rifle",
      description:
        "The Colt M4A1 carbine is a fully automatic variant of the basic M4 Carbine and was primarily designed for special operations use. However, U.S. Special Operations Command (USSOCOM) was soon to adopt the M4A1 for almost all special operations units, followed later by general introduction of the M4A1 into service with the U.S. Army and Marine Corps.",
      image:
        "https://assets.tarkov.dev/5447a9cd4bdc2dbd208b4567-grid-image.webp",
    },
    {
      name: "5.56x45mm M855 ammo pack (30 pcs)",
      description: "A pack of 5.56x45 mm M855 ammo, 30 rounds.",
      image:
        "https://assets.tarkov.dev/5447ac644bdc2d6c208b4567-grid-image.webp",
    },
    {
      name: "Factory emergency exit key",
      description: "A somewhat fragile factory emergency exit door key.",
      image:
        "https://assets.tarkov.dev/5448ba0b4bdc2d02308b456c-grid-image.webp",
    },
    {
      name: "Makarov PM 9x18PM pistol",
      description:
        "The time-proven PM pistol (Pistolét Makárova - Makarov Pistol, GAU Index - 56-A-125). Due to the ubiquitous spread of both the pistol and its ammunition, as well as its exceptional reliability, light weight, and compact size, the PM still sees wide service in both police, military, and security forces. Although the damage makes you wish for the best.",
      image:
        "https://assets.tarkov.dev/5448bd6b4bdc2dfc2f8b4569-grid-image.webp",
    },
    {
      name: "RGD-5 hand grenade",
      description:
        "RGD-5 (GAU index - 57-G-717) is an antipersonnel fragmentation time-delayed offensive hand grenade. The grenade's UZRGM fuze insures a time delay of 3.2 - 4.2 seconds. Due to the offensive type of the grenade, its fragments are relatively light and have a smaller dispersion radius.",
      image:
        "https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-grid-image.webp",
    },
    {
      name: "PM 9x18PM 90-93 8-round magazine",
      description:
        "A standard 8-round magazine for IzhMekh-produced Makarov PM pistols. It features a side observation slot for checking the magazine capacity.",
      image:
        "https://assets.tarkov.dev/5448c12b4bdc2d02308b456f-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 20 GEN M3 STANAG 20-round magazine",
      description:
        "The PMAG 20 GEN M3 is a 20-round 5.56x45 NATO (.223 Remington) polymer magazine for AR-15/M4 compatible weapons.",
      image:
        "https://assets.tarkov.dev/5448c1d04bdc2dff2f8b4569-grid-image.webp",
    },
    {
      name: "Bottle of water (0.6L)",
      description:
        "A 0.6 liter bottle of water. The bottle itself might be a bit dirty, but the water is clean. Hopefully.",
      image:
        "https://assets.tarkov.dev/5448fee04bdc2dbc018b4567-grid-image.webp",
    },
    {
      name: "Army crackers",
      description:
        "A small pack of saltine crackers usually found in Russian army combat rations.",
      image:
        "https://assets.tarkov.dev/5448ff904bdc2d6f028b456e-grid-image.webp",
    },
    {
      name: "Roubles",
      description: "A few notes of the still-valued Russian rouble.",
      image:
        "https://assets.tarkov.dev/5449016a4bdc2d6f028b456f-grid-image.webp",
    },
    {
      name: "AN/PEQ-15 tactical device",
      description:
        "The Advanced Target Pointer Illuminator Aiming Laser (ATPIAL) produced by L3 Technologies is a rugged, combat-proven and easy-to-use aiming system with integrated infrared and visible aim lasers as well as an infrared illuminator.",
      image:
        "https://assets.tarkov.dev/544909bb4bdc2d6f028b4577-grid-image.webp",
    },
    {
      name: "ER FULCRUM BAYONET",
      description:
        "Following on from the successful FULCRUM knife, Extrema Ratio developed a bayonet version of that design. Like the original FULCRUM, this bayonet is extremely versatile and strong. The tanto-shaped blade allows for large amounts of work and wear while still keeping a sharp edge at its exceedingly sturdy tip. This feature, combined with a sharp false edge, makes the knife retain sufficient combat penetration capability to engage targets covered in heavy clothing, padding, or soft ballistic protections. Thanks to its weight and top-heavy balancing, the FULCRUM BAYONET blade is suitable for hard work on the field.",
      image:
        "https://assets.tarkov.dev/54491bb74bdc2d09088b4567-grid-image.webp",
    },
    {
      name: "Secure container Alpha",
      description:
        "A small secure container used by PMCs formerly deployed in Tarkov.",
      image:
        "https://assets.tarkov.dev/544a11ac4bdc2d470e8b456a-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 40 GEN M3 STANAG 40-round magazine",
      description:
        "The PMAG 40 GEN M3 is a 40-round 5.56x45 NATO (.223 Remington) polymer magazine for AR-15/M4 compatible weapons.",
      image:
        "https://assets.tarkov.dev/544a378f4bdc2d30388b4567-grid-image.webp",
    },
    {
      name: "5.56x45 SureFire MAG5-60 STANAG 60-round magazine",
      description:
        "A 60-round 5.56x45 SureFire MAG5-60 metal high capacity magazine.",
      image:
        "https://assets.tarkov.dev/544a37c44bdc2d25388b4567-grid-image.webp",
    },
    {
      name: "AR-15 Colt USGI A2 5.56x45 flash hider",
      description:
        "The 5.56x45 Colt USGI A2 flash hider (a.k.a. Bird Cage) is designed for mounting on 5.56x45 weapons built on the AR-15 system. However, it can be installed on other weapons of the same caliber provided that barrel has the same threading for muzzle devices. A service muzzle device for M4A1.",
      image:
        "https://assets.tarkov.dev/544a38634bdc2d58388b4568-grid-image.webp",
    },
    {
      name: "Leupold Mark 4 HAMR 4x24 DeltaPoint hybrid assault scope",
      description:
        "The Hybrid Leupold-produced scope comprises of the Mark 4 HAMR 4x24mm optical sight with the DeltaPoint reflex sight installed on top of it. It was developed for precision mid-range carbine fire using the 4x optics while being equally effective in close quarters thanks to use of compact reflex sight when necessary.",
      image:
        "https://assets.tarkov.dev/544a3a774bdc2d3a388b4567-grid-image.webp",
    },
    {
      name: "Crye Precision AVS plate carrier",
      description:
        "The Crye Precision AVS rig equipped with light armored plates (Russian GOST class 4 protection) from combined materials. One of the most comfortable to wear plate carriers.",
      image:
        "https://assets.tarkov.dev/544a5caa4bdc2d1a388b4568-grid-image.webp",
    },
    {
      name: "Flyye MBSS backpack",
      description:
        "An extra durable backpack made from 1000D Cordura with a separate pocket for a water bladder and a MOLLE attachment system on the sides.",
      image:
        "https://assets.tarkov.dev/544a5cde4bdc2d39388b456b-grid-image.webp",
    },
    {
      name: "Aseptic bandage",
      description: "The most common gauze bandage, autoclaved and aseptic.",
      image:
        "https://assets.tarkov.dev/544fb25a4bdc2dfb738b4567-grid-image.webp",
    },
    {
      name: "Immobilizing splint",
      description: "A common splint for fixing damaged bones in place.",
      image:
        "https://assets.tarkov.dev/544fb3364bdc2d34748b456a-grid-image.webp",
    },
    {
      name: "Analgin painkillers",
      description:
        "The cheapest and most widely available Metamizole painkillers.",
      image:
        "https://assets.tarkov.dev/544fb37f4bdc2dee738b4567-grid-image.webp",
    },
    {
      name: "Morphine injector",
      description:
        "A single-use syringe full of morphine. A powerful drug, used primarily to treat both acute and chronic severe pain.",
      image:
        "https://assets.tarkov.dev/544fb3f34bdc2d03748b456a-grid-image.webp",
    },
    {
      name: "Salewa first aid kit",
      description:
        "A first aid kit containing a bivibag, various types of bandages, and dressing tools.",
      image:
        "https://assets.tarkov.dev/544fb45d4bdc2dee738b4568-grid-image.webp",
    },
    {
      name: "Leatherman Multitool",
      description:
        "With this compact and versatile multitool there is no need to be worried about having no tools on you at the right time.",
      image:
        "https://assets.tarkov.dev/544fb5454bdc2df8738b456a-grid-image.webp",
    },
    {
      name: "Pack of Russian Army pineapple juice",
      description:
        "Russian Army reconstituted pineapple juice. It's hard to imagine a better source of carbs and vitamins under blockade conditions.",
      image:
        "https://assets.tarkov.dev/544fb62a4bdc2dfb738b4568-grid-image.webp",
    },
    {
      name: "Slickers chocolate bar",
      description:
        "A sweet nutritional bar for a quick bite. Well balanced in proteins, fiber, and vitamins, but a bit over the top in sweetness.",
      image:
        "https://assets.tarkov.dev/544fb6cc4bdc2d34748b456e-grid-image.webp",
    },
    {
      name: "5.56x45mm M855",
      description:
        "A 5.56x45mm NATO M855 cartridge with a 4 gram bullet with a steel penetrator tip over a lead core with a copper jacket in a brass case. This cartridge was designed in the 1980s as the equivalent to the FN SS109 cartridge for the 5.56x45mm NATO caliber armament used by the United States Army. Thanks to its design, the bullet in this cartridge is capable of piercing through basic ballistic protection equipment, as well as certain intermediate protection equipment, however, it has a high probability of rebound on various surfaces.",
      image:
        "https://assets.tarkov.dev/54527a984bdc2d4e668b4567-grid-image.webp",
    },
    {
      name: "5.56x45mm M855A1",
      description:
        "A 5.56x45mm NATO M855A1 cartridge with a 4 gram armor-piercing bullet with a steel penetrator tip over a copper alloy core with a copper semi-jacket in a brass case. This cartridge was designed to improve the penetration capabilities of the 5.56x45mm NATO M855 cartridge of the United States Army, being able to pierce basic and intermediate body ballistic protections, however, due to its design, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/54527ac44bdc2d36668b4567-grid-image.webp",
    },
    {
      name: "Camelbak Tri-Zip assault backpack",
      description:
        "A Mid-sized versatile assault pack. Spacious, sturdy and comfortable, this backpack is loved both by military and hikers worldwide. 34L of total space, a hydration system, easy access to side pockets, near-perfect suspension, and a MOLLE attachment system make it a great choice for up to 72 hours of autonomous hiking... or carrying a good load of loot.",
      image:
        "https://assets.tarkov.dev/545cdae64bdc2d39198b4568-grid-image.webp",
    },
    {
      name: "6B43 6A Zabralo-Sh body armor",
      description:
        "The 6B43 bulletproof vest of the 6A protection class (roughly equivalent to IIIA protection class) is designed for protection from light weapon bullets - including BP and PP - fragments of grenades, mines, and melee weapons, as well as reducing the risk of after-penetration effects during combat situations.",
      image:
        "https://assets.tarkov.dev/545cdb794bdc2d3a198b456a-grid-image.webp",
    },
    {
      name: "Tactical glasses",
      description:
        "A pair of commonplace tactical glasses with glare and impact protection.",
      image:
        "https://assets.tarkov.dev/557ff21e4bdc2d89578b4586-grid-image.webp",
    },
    {
      name: "MP-43-1C 12ga 510mm barrel",
      description:
        "A 510mm long 12 gauge barrel for the MP-43-1C double-barrelled shotgun.",
      image:
        "https://assets.tarkov.dev/5580169d4bdc2d9d138b4585-grid-image.webp",
    },
    {
      name: "MP-43-1C 12ga double-barrel shotgun",
      description:
        "A hunter's dream. A classic double-barrelled beauty, simple and elegant. Fed with 12 gauge shells.",
      image:
        "https://assets.tarkov.dev/5580223e4bdc2d1c128b457f-grid-image.webp",
    },
    {
      name: "EOTech EXPS3 holographic sight (Tan)",
      description:
        "The EOTech EXPS3 holographic sight. Thanks to design features it can be used with a wide range of weapons, even with non-folding sights. Compatible with night vision devices by means of the NV reticle mode. Utilized by US SOCOM as a sight for operations in confined spaces.",
      image:
        "https://assets.tarkov.dev/558022b54bdc2dac148b458d-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 30 GEN M3 W STANAG 30-round magazine",
      description:
        "A 30-round 5.56x45 Magpul PMAG GEN M3 30 polymer magazine with an observation slot for faster capacity checking.",
      image:
        "https://assets.tarkov.dev/55802d5f4bdc2dac148b458e-grid-image.webp",
    },
    {
      name: "AR-15 Magpul MOE pistol grip (Black)",
      description:
        "The polymer Magpul MOE (Magpul Original Equipment) pistol grip can be installed on any weapon compatible with AR-15 pistol grips. Thanks to the ergonomic shape and anti-slip texture, it makes the weapon grip and control more comfortably. The inside of the grip contains free space for spare parts, tools, batteries, and an accessories kit.",
      image:
        "https://assets.tarkov.dev/55802f5d4bdc2dac148b458f-grid-image.webp",
    },
    {
      name: "TangoDown Stubby BGV-MK46K foregrip (Black)",
      description:
        "The TangoDown Stubby BGV-MK46K tactical grip is a short grip for use with weapons in close and extra close quarters combat. It ideally fits assault shotguns and also contains a compartment for batteries or SPTA. Black version.",
      image:
        "https://assets.tarkov.dev/558032614bdc2de7118b4585-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R 10-round magazine",
      description:
        "A standard Izhmash-produced polymer magazine for the SV-98 7.62x54R sniper rifle.",
      image:
        "https://assets.tarkov.dev/559ba5b34bdc2d1f1a8b4582-grid-image.webp",
    },
    {
      name: "M4A1 5.56x45 upper receiver",
      description:
        "An upper receiver for the M4A1 assault rifle manufactured by Colt. Equipped with a mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/55d355e64bdc2d962f8b4569-grid-image.webp",
    },
    {
      name: "AR-15 5.56x45 260mm barrel",
      description:
        "A 260mm barrel for AR-15 based weapons for 5.56x45 NATO ammo. Corresponds with standard service M4 CQBR barrel.",
      image:
        "https://assets.tarkov.dev/55d35ee94bdc2d61338b4568-grid-image.webp",
    },
    {
      name: "AR-15 5.56x45 370mm barrel",
      description:
        "A 370mm barrel for AR-15 based weapons for 5.56x45 NATO ammo. Corresponds with standard service M4A1 barrel.",
      image:
        "https://assets.tarkov.dev/55d3632e4bdc2d972f8b4569-grid-image.webp",
    },
    {
      name: "MP-43-1C 12ga 725mm barrel",
      description:
        "A 725mm long 12 gauge barrel for the MP-43-1C double-barrelled shotgun.",
      image:
        "https://assets.tarkov.dev/55d447bb4bdc2d892f8b456f-grid-image.webp",
    },
    {
      name: "MP-133 12ga 610mm barrel",
      description:
        "A standard factory-produced 610mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/55d448594bdc2d8c2f8b4569-grid-image.webp",
    },
    {
      name: "MP-133 12ga 510mm barrel",
      description:
        "A standard factory-produced 510mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/55d4491a4bdc2d882f8b456e-grid-image.webp",
    },
    {
      name: "MP-133 12ga 610mm barrel with rib",
      description:
        "A standard factory-produced 610mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/55d449444bdc2d962f8b456d-grid-image.webp",
    },
    {
      name: "AR-15 Colt charging handle",
      description:
        "A standard charging handle for AR-15 and compatible systems, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/55d44fd14bdc2d962f8b456e-grid-image.webp",
    },
    {
      name: "AR-15 KAC RIS handguard",
      description:
        "Knight's Armament Company RIS is a standard service handguard for the M4A1 carbines, but it can be installed on most AR-15 based weapons, provided that the barrel is the right length. It comes equipped with 4 mounts for the installation of a heat shield and additional accessories.",
      image:
        "https://assets.tarkov.dev/55d459824bdc2d892f8b4573-grid-image.webp",
    },
    {
      name: "MP-133 beechwood forestock",
      description:
        "A standard Izhmekh-manufactured forestock, designed for MP-133 shotguns and made out of beechwood.",
      image:
        "https://assets.tarkov.dev/55d45d3f4bdc2d972f8b456c-grid-image.webp",
    },
    {
      name: "MP-133 custom plastic forestock with rails",
      description:
        "A nonstandard polymer forestock for MP-133 pump-action shotguns, manufactured by an unknown third-party producer. Equipped with 2 short and 1 long mount for installation of additional equipment.",
      image:
        "https://assets.tarkov.dev/55d45f484bdc2d972f8b456d-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L23 30-round magazine",
      description:
        "A 30-round polymer Izhmash 6L23 magazine for 5.45x39 ammo, for AK-74 and compatible systems.",
      image:
        "https://assets.tarkov.dev/55d480c04bdc2d1d4e8b456a-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L26 45-round magazine",
      description:
        "A 45-round 5.45x39 polymer Izhmash 6L26 magazine for AK-74 and compatible systems.",
      image:
        "https://assets.tarkov.dev/55d481904bdc2d8c2f8b456a-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L31 60-round magazine",
      description:
        "A 60-round 5.45x39 quad-stack polymer Izhmash 6L31 magazine for AK-74 and compatible systems. Produced in a small batch, never serialized.",
      image:
        "https://assets.tarkov.dev/55d482194bdc2d1d4e8b456b-grid-image.webp",
    },
    {
      name: "AK-74 Saiga 545 5.45x39 10-round magazine",
      description:
        "A 10-round 5.45x39 Izhmash polymer magazine Saiga 545, for the AK-based civilian carbine of the same name.",
      image:
        "https://assets.tarkov.dev/55d4837c4bdc2d1d4e8b456c-grid-image.webp",
    },
    {
      name: "MP-133 12ga 6-shell magazine",
      description:
        "A 6-shell capacity 12 gauge tube magazine by Izhmekh, for MP-133 shotguns.",
      image:
        "https://assets.tarkov.dev/55d484b44bdc2d1d4e8b456d-grid-image.webp",
    },
    {
      name: "MP-133 12ga 8-shell magazine",
      description:
        "An 8-shell capacity 12 gauge tube magazine by Izhmekh, for MP-133 shotguns.",
      image:
        "https://assets.tarkov.dev/55d485804bdc2d8c2f8b456b-grid-image.webp",
    },
    {
      name: "PM 9x18PM 84-round makeshift drum magazine",
      description:
        "A makeshift 84-round PM magazine. First assembled by an unknown genius by combining PM and PPSH magazines into a single design for operations in narrow spaces with the aid of ballistic shields. Although it was never serialized even in the smallest number, it can be crafted pretty easily, provided you have the donor mags and skillful hands.",
      image:
        "https://assets.tarkov.dev/55d485be4bdc2d962f8b456f-grid-image.webp",
    },
    {
      name: "5.56x45 Colt AR-15 STANAG 30-round magazine",
      description:
        "A 30-round metal Colt AR-15 magazine designed in compliance with the STANAG 4179 standard for 5.56x45 ammo. The STANAG 4179 standard was approved by NATO members in 1980 for the unification of allied personnel ammo and magazines.",
      image:
        "https://assets.tarkov.dev/55d4887d4bdc2d962f8b4570-grid-image.webp",
    },
    {
      name: "Kiba Arms SPRM rail mount for pump-action shotguns",
      description:
        "The universal SPRM 13-position rail mount by Kiba Arms International, for attaching additional devices to pump-action shotguns.",
      image:
        "https://assets.tarkov.dev/55d48a634bdc2d8b2f8b456a-grid-image.webp",
    },
    {
      name: "Delta-Tek Sprut mount for pump-action shotguns",
      description:
        "The Delta-Tek Sprut mount was developed to install on tube magazines of pump-action shotguns like the MP-133, MP-153, MP-135, Benelli M2, Winchester 1300, and so on. It features 3 Weaver mounts for the attachment of additional devices.",
      image:
        "https://assets.tarkov.dev/55d48ebc4bdc2d8c2f8b456c-grid-image.webp",
    },
    {
      name: "High Standard M4SS Stock",
      description:
        "The High Standard M4SS telescoping stock closely follows the classic M4A1 stock except for a few geometry details.",
      image:
        "https://assets.tarkov.dev/55d4ae6c4bdc2d8b2f8b456e-grid-image.webp",
    },
    {
      name: "AR-15 Leapers UTG Low Profile A2 front sight",
      description:
        "The UTG Low Profile A2 front sight, installed on the Windham Weaponry gas block. Manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/55d4af3a4bdc2d972f8b456f-grid-image.webp",
    },
    {
      name: "AR-15 Colt A2 pistol grip",
      description:
        "The Colt A2 polymer pistol grip can be installed on any weapon compatible with AR-15 grips. Standard-issue for all AR-15-based weapons of US Army and USMC.",
      image:
        "https://assets.tarkov.dev/55d4b9964bdc2d1d4e8b456e-grid-image.webp",
    },
    {
      name: "AR-15 Colt A2 rear sight",
      description:
        "The Colt A2 detachable rear sight. Standard-issue for M4A1 assault rifles.",
      image:
        "https://assets.tarkov.dev/55d5f46a4bdc2d1b198b4567-grid-image.webp",
    },
    {
      name: "SureFire SOCOM556-MONSTER 5.56x45 sound suppressor",
      description:
        "The SureFire SOCOM556-MONSTER 5.56x45 and .223 sound suppressor, can only be installed on compatible SureFire muzzle devices.",
      image:
        "https://assets.tarkov.dev/55d614004bdc2d86028b4568-grid-image.webp",
    },
    {
      name: "SureFire SOCOM556-MINI MONSTER 5.56x45 sound suppressor",
      description:
        "The SureFire SOCOM556-MINI MONSTER 5.56x45 and .223 sound suppressor is a shorter version of the SOCOM556-MONSTER. Can only be installed on compatible SureFire muzzle devices.",
      image:
        "https://assets.tarkov.dev/55d6190f4bdc2d87028b4567-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 9.5 handguard (Coyote Brown)",
      description:
        "The Daniel Defense RIS II 9.5 foregrip is a part of the SOPMOD Block II program to replace the standard M4CQBR or Mk18 foregrips in the US SOCOM service. Made with light but durable aircraft aluminum alloy. Equipped with 4 mounts for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/55f84c3c4bdc2d5f408b4576-grid-image.webp",
    },
    {
      name: "MP-133 12ga 510mm barrel with rib",
      description:
        "A standard factory-produced 510mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560835c74bdc2dc8488b456f-grid-image.webp",
    },
    {
      name: "MP-133 12ga 540mm barrel",
      description:
        "A standard factory-produced 540mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560836484bdc2d20478b456e-grid-image.webp",
    },
    {
      name: "MP-133 12ga 540mm barrel with rib",
      description:
        "A standard factory-produced 540mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560836b64bdc2d57468b4567-grid-image.webp",
    },
    {
      name: "MP-133 12ga 660mm barrel",
      description:
        "A standard factory-produced 660mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560836fb4bdc2d773f8b4569-grid-image.webp",
    },
    {
      name: "MP-133 12ga 660mm barrel with rib",
      description:
        "A standard factory-produced 660mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560837154bdc2da74d8b4568-grid-image.webp",
    },
    {
      name: "MP-133 12ga 710mm barrel",
      description:
        "A standard factory-produced 710mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5608373c4bdc2dc8488b4570-grid-image.webp",
    },
    {
      name: "MP-133 12ga 710mm barrel with rib",
      description:
        "A standard factory-produced 710mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560837544bdc2de22e8b456e-grid-image.webp",
    },
    {
      name: "MP-133 12ga 750mm barrel",
      description:
        "A standard factory-produced 750mm barrel for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560837824bdc2d57468b4568-grid-image.webp",
    },
    {
      name: "MP-133 12ga 750mm barrel with rib",
      description:
        "A standard factory-produced 750mm barrel with a wide upper rib for MP-133 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5608379a4bdc2d26448b4569-grid-image.webp",
    },
    {
      name: "Remington Tactical Choke 12ga",
      description:
        "Remington Tactical Choke 12ga is designed specifically for use on tactical shotguns and home-defense shotguns. Combines the properties of both cylinder and flash hider.",
      image:
        "https://assets.tarkov.dev/560838c94bdc2d77798b4569-grid-image.webp",
    },
    {
      name: "MP-133/153 plastic pistol grip",
      description:
        "A plastic pistol grip for MP-133 and MP-153 shotguns to replace the standard stock, manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/56083a334bdc2dc8488b4571-grid-image.webp",
    },
    {
      name: "MP-133/153 plastic stock",
      description:
        "A plastic stock for MP-133 and MP-153 shotguns with a rubber butt-plate manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/56083be64bdc2d20478b456f-grid-image.webp",
    },
    {
      name: "MP-133/153 wooden stock",
      description:
        "A wooden stock for MP-133 and MP-153 shotguns with a rubber butt-plate manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/56083cba4bdc2de22e8b456f-grid-image.webp",
    },
    {
      name: "SV-98 rear sight",
      description:
        "A standard-issue rear sight for the SV-98 sniper rifle, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/56083e1b4bdc2dc8488b4572-grid-image.webp",
    },
    {
      name: "SV-98 anti-heat ribbon",
      description:
        "An anti-heat ribbon for the SV-98 sniper rifle. Applied to the barrel. Prevents hot air from rising directly from the barrel and creating optical distortions in the line of fire.",
      image:
        "https://assets.tarkov.dev/56083eab4bdc2d26448b456a-grid-image.webp",
    },
    {
      name: "12/70 7mm buckshot",
      description: "A 12/70 buckshot shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/560d5e524bdc2d25448b4571-grid-image.webp",
    },
    {
      name: "7.62x54mm R SNB gzh",
      description:
        "A 7.62x54mm R SNB gzh (GRAU Index - 7N14) cartridge with a 9.8 gram armor-piercing bullet with a pointed heat-strengthened steel core over a lead base with a bimetallic jacket, in a bimetallic case. This SNB cartridge (SNíperskiy s Bronebóynoy púley - Sniper with Armor-piercing bullet) was developed in the mid-1990s as a modernization of the 7.62x54mm R PS gzh cartridge to improve its penetration capabilities when fired from a sniper or designated marksman rifles, managing of piercing specialized ballistic body protections as well as providing a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/560d61e84bdc2da74d8b4571-grid-image.webp",
    },
    {
      name: "Zenit Klesch-2P flashlight with laser",
      description:
        "An underbarrel-mounted LED flashlight Klesch-2P + LAM manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/560d657b4bdc2da74d8b4572-grid-image.webp",
    },
    {
      name: "7.62x54mm R SNB gzh ammo pack (30 pcs)",
      description: "A 30-round pack of 7.62x54R SNB cartridges.",
      image:
        "https://assets.tarkov.dev/560d75f54bdc2da74d8b4573-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R muzzle device",
      description:
        "A standard-issue muzzle device for the SV-98 bolt-action sniper rifle.",
      image:
        "https://assets.tarkov.dev/560e620e4bdc2d724b8b456b-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74N 5.45x39 assault rifle",
      description:
        "AK-74N (Avtomat Kalashnikova 74 Nochnoy - Kalashnikov's Automatic rifle 74 Night) was developed in 1970 by M. T. Kalashnikov, became a further evolution of AKM due to adoption of the new 5.45x39 ammunition by the military. The key design difference from the standard AK-74 is a side mount for optical and night scopes.",
      image:
        "https://assets.tarkov.dev/5644bd2b4bdc2d3b4c8b4572-grid-image.webp",
    },
    {
      name: "FORT Kiver-M bulletproof helmet",
      description:
        "The FORT Kiver-M bulletproof helmets are designed for use by officers of special law enforcement agencies of the Russian Federation.",
      image:
        "https://assets.tarkov.dev/5645bc214bdc2d363b8b4571-grid-image.webp",
    },
    {
      name: "Peltor ComTac 2 headset",
      description:
        "The ComTac 2 amplifies low-level sounds while suppressing impulse noises. Water resistant for outdoor usage. Manufactured by Peltor.",
      image:
        "https://assets.tarkov.dev/5645bcc04bdc2d363b8b4572-grid-image.webp",
    },
    {
      name: "BlackRock chest rig",
      description:
        "A custom-made chest rig for wearing on top of body armor in urban operations. Sturdy and versatile, it features both MOLLE and ALICE attachment systems.",
      image:
        "https://assets.tarkov.dev/5648a69d4bdc2ded0b8b457b-grid-image.webp",
    },
    {
      name: "PACA Soft Armor",
      description:
        "A light but durable and reliable body armor protecting only the vital areas, fitted with class 2 (Russian GOST) armor plates.",
      image:
        "https://assets.tarkov.dev/5648a7494bdc2d9d488b4583-grid-image.webp",
    },
    {
      name: "AK Zenit RP-1 charging handle",
      description:
        "The RP-1 charging handle by Zenit is a milled detail, manufactured with D16T aluminum alloy with black coating. It's compatible with all models of AK family rifles. The RP-1 is larger and more convenient than the standard charging handle, which improves the weapon ergonomics and makes handling more comfortable. The RP-1 is installed above the base handle through kit-enclosed bolts. © Zenit",
      image:
        "https://assets.tarkov.dev/5648ac824bdc2ded0b8b457d-grid-image.webp",
    },
    {
      name: "AK CAA RS47 handguard",
      description:
        "The RS47 lightweight polymer handguard, fits the majority of rifles and carbines built on the base of AK-family rifles. Equipped with two short and two long rail mounts for installing additional devices. Manufactured by Command Arms.",
      image:
        "https://assets.tarkov.dev/5648ae314bdc2d3d1c8b457f-grid-image.webp",
    },
    {
      name: "AK-74 wooden handguard (6P20 Sb.6)",
      description:
        "A standard Izhmash-produced wooden handguard for AK-74 assault rifles.",
      image:
        "https://assets.tarkov.dev/5648b0744bdc2d363b8b4578-grid-image.webp",
    },
    {
      name: "AK-74 polymer handguard (6P20 Sb.9)",
      description:
        "A polymer handguard for AK-74 automatic rifles which replaced the classic wooden one. Manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5648b1504bdc2d9d488b4584-grid-image.webp",
    },
    {
      name: "AK Zenit B-10M handguard with B-19 upper mount",
      description:
        "The integrally machined B-10M handguard is manufactured from D16T aluminum alloy with black coating and can be installed instead of the standard-issue handguard on AK series 103, 104, 105, 74S, 74M, AKM, and AKMS. B-19 rail mount is basically a sight mount hovering over the gas tube. Also integrally machined from D16T aluminum alloy with black coating, it can be installed on B-10M or B-21M foregrips. ©Zenit",
      image:
        "https://assets.tarkov.dev/5648b4534bdc2d3d1c8b4580-grid-image.webp",
    },
    {
      name: "NcSTAR MPR45 Backup mount",
      description:
        "A universal mount by NcStar that allows installing an auxiliary sight at 45 degrees angle.",
      image:
        "https://assets.tarkov.dev/5649a2464bdc2d91118b45a8-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 muzzle brake-compensator (6P20 0-20)",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-74 and weapon systems based on it.",
      image:
        "https://assets.tarkov.dev/5649aa744bdc2ded0b8b457e-grid-image.webp",
    },
    {
      name: "AK Zenit DTK-1 7.62x39/5.45x39 muzzle brake-compensator",
      description:
        "The DTK-1 muzzle brake-compensator by Zenit is designed to be installed on 7.62x39 and 5.45x39 AK-based weapon systems. It reduces recoil and counters barrel climb. The crown on the DTK nose is meant for breaking through tempered glass. It has 24x1.5 mm threading. ©Zenit",
      image:
        "https://assets.tarkov.dev/5649ab884bdc2ded0b8b457f-grid-image.webp",
    },
    {
      name: "AK bakelite pistol grip (6P1 Sb.8V)",
      description:
        "An Izhmash-manufactured bakelite pistol grip for the AK automatic rifle and compatible weapon systems.",
      image:
        "https://assets.tarkov.dev/5649ad3f4bdc2df8348b4585-grid-image.webp",
    },
    {
      name: "AK polymer pistol grip (6P1 Sb.8)",
      description:
        "An Izhmash polymer pistol grip for AK and compatibles, designed to replace the old bakelite grip.",
      image:
        "https://assets.tarkov.dev/5649ade84bdc2d1b2b8b4587-grid-image.webp",
    },
    {
      name: "AK Zenit RK-3 pistol grip",
      description:
        "The RK-3 Klassika anatomic pistol grip features a built-in hermetically sealed battery storage compartment and is designed for installation as a replacement for the standard AK pistol grip. ©Zenit",
      image:
        "https://assets.tarkov.dev/5649ae4a4bdc2d1b2b8b4588-grid-image.webp",
    },
    {
      name: "AK-74 dust cover (6P20 0-1)",
      description:
        "A standard-issue dust cover for AK-74 automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5649af094bdc2df8348b4586-grid-image.webp",
    },
    {
      name: "AK Zenit B-33 dust cover",
      description:
        "The B-33 dust cover with an integrated Picatinny rail is compatible with all models of Kalashnikov automatic rifles and carbines based on AK system. Allows installation of all Picatinny-mountable sights, ensuring the consistency of median aimpoint even after repeated removal and replacement of dust cover. © Zenit",
      image:
        "https://assets.tarkov.dev/5649af884bdc2d1b2b8b4589-grid-image.webp",
    },
    {
      name: "AK-74 rear sight (6P20 Sb.2)",
      description:
        "A standard rear sight for AK-74 automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5649b0544bdc2d1b2b8b458a-grid-image.webp",
    },
    {
      name: "AK-74 polymer stock (6P20 Sb.7)",
      description:
        "A polymer stock for AK-74 automatic rifles which replaced the classic wooden one. Manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5649b0fc4bdc2d17108b4588-grid-image.webp",
    },
    {
      name: "AK-74 wooden stock (6P20 Sb.5)",
      description:
        "A standard-issue wooden stock for AK-74 automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5649b1c04bdc2d16268b457c-grid-image.webp",
    },
    {
      name: "AKM/AK-74 ME4 buffer tube adapter",
      description:
        "An adapter for the installation of telescopic stock buffer tubes on AKs with non-folding stocks.",
      image:
        "https://assets.tarkov.dev/5649b2314bdc2d79388b4576-grid-image.webp",
    },
    {
      name: "Colt Carbine buffer tube",
      description:
        "Colt Receiver Extension Buffer Tube, 4-position, Mil-Spec diameter will fit any AR-15-based carbine.",
      image:
        "https://assets.tarkov.dev/5649be884bdc2d79388b4577-grid-image.webp",
    },
    {
      name: "AK Taktika Tula TT01 rear sight rail",
      description:
        "The TT01 rear sight adapter, designed by Taktika Tula for AK family assault rifles. Installed in place of a standard rear sight and can be used as an iron sight if no reflex sight is installed.",
      image:
        "https://assets.tarkov.dev/5649d9a14bdc2d79388b4580-grid-image.webp",
    },
    {
      name: "7.62x39mm PS gzh ammo pack (30 pcs)",
      description: "A 30-round package of 7.62x39 PS gzh cartridges.",
      image:
        "https://assets.tarkov.dev/5649ed104bdc2d3d1c8b458b-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L20 30-round magazine",
      description:
        "A 30-round 5.45x39 6L20 Izhmash bakelite magazine, for AK-74 and compatible systems.",
      image:
        "https://assets.tarkov.dev/564ca99c4bdc2d16268b4589-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L18 45-round magazine",
      description:
        "A 45-round 5.45x39 Izhmash 6L18 bakelite magazine, for AK-74 and compatible systems. It's also a standard issue RPK-74 magazine.",
      image:
        "https://assets.tarkov.dev/564ca9df4bdc2d35148b4569-grid-image.webp",
    },
    {
      name: "AK-74 TGP-A 5.45x39 sound suppressor",
      description:
        "The TGP-A tactical muzzle device/suppressor, manufactured by State R&D Agency Special devices and Comms for AK-based 5.45x39 automatic rifles.",
      image:
        "https://assets.tarkov.dev/564caa3d4bdc2d17108b458e-grid-image.webp",
    },
    {
      name: "7.62x39mm PS gzh",
      description:
        "A 7.62x39mm PS gzh (GAU Index - 57-N-231) cartridge with a 7.9 gram bullet with a heat-strengthened steel core with lead cladding on the tip and a bimetallic jacket, in a bimetallic case. The PS cartridge (Púlya so Stal'ným serdéchnikom - Bullet with a Steel core) was introduced into service in 1949 for Soviet 7.62x39mm caliber weaponry, and over the years has undergone numerous changes in the materials used for its construction. Thanks to the tempered steel core that this model has, it is able to pierce through basic ballistic body protections as well as some intermediate models in addition to provide a significant stopping power effect, however, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5656d7c34bdc2d9d198b4587-grid-image.webp",
    },
    {
      name: "40mm VOG-25 grenade",
      description:
        "A 40mm VOG-25 underbarrel grenade launcher fragmentation round with an arming distance of 25-30 meters.",
      image:
        "https://assets.tarkov.dev/5656eb674bdc2d35148b457c-grid-image.webp",
    },
    {
      name: "Pistol case",
      description: "A small case for pistol and ammunition storage.",
      image:
        "https://assets.tarkov.dev/567143bf4bdc2d1a0f8b4567-grid-image.webp",
    },
    {
      name: "Dorm room 118 key",
      description:
        "A key to the three-story dormitory with a tag reading 118 on it.",
      image:
        "https://assets.tarkov.dev/5672c92d4bdc2d180f8b4567-grid-image.webp",
    },
    {
      name: "AA Battery",
      description: "An AA Battery, used over a wide array of consumer devices.",
      image:
        "https://assets.tarkov.dev/5672cb124bdc2d1a0f8b4568-grid-image.webp",
    },
    {
      name: "D Size battery",
      description:
        "D (also R20, 373, Mono, UM) - one of the standard sizes for multipurpose batteries, used in the most energy-consuming portable electric devices like portable stereos, radiosets, GM counters, and powerful hand lights.",
      image:
        "https://assets.tarkov.dev/5672cb304bdc2dc2088b456a-grid-image.webp",
    },
    {
      name: "Geiger-Muller counter",
      description:
        "A gas discharge device for an automatic count of detected ionizing particles.",
      image:
        "https://assets.tarkov.dev/5672cb724bdc2dc2088b456b-grid-image.webp",
    },
    {
      name: "Can of pacific saury",
      description:
        "Smoked pacific saury in a tin can offers some easily digestible protein and aliphatic acid, making it a nice addition to the ration.",
      image:
        "https://assets.tarkov.dev/5673de654bdc2d180f8b456d-grid-image.webp",
    },
    {
      name: "Crickent lighter",
      description: "A regular gas lighter, manufactured by Crickent.",
      image:
        "https://assets.tarkov.dev/56742c284bdc2d98058b456d-grid-image.webp",
    },
    {
      name: "Zibbo lighter",
      description:
        "A metal gasoline Zibbo lighter, renowned for being reliable and windproof.",
      image:
        "https://assets.tarkov.dev/56742c2e4bdc2d95058b456d-grid-image.webp",
    },
    {
      name: "Broken GPhone smartphone",
      description:
        "GPhone 9s - one of the previous generations of the famous smartphone model. Shattered beyond repair.",
      image:
        "https://assets.tarkov.dev/56742c324bdc2d150f8b456d-grid-image.webp",
    },
    {
      name: "Dollars",
      description: "Several United States dollar bills.",
      image:
        "https://assets.tarkov.dev/5696686a4bdc2da3298b456a-grid-image.webp",
    },
    {
      name: "Euros",
      description: "Several notes of the EU currency.",
      image:
        "https://assets.tarkov.dev/569668774bdc2da2298b4568-grid-image.webp",
    },
    {
      name: "SIG P226R 9x19 pistol",
      description:
        "The P226R is a full-sized, service-type pistol made by SIG Sauer. Chambered in 9x19mm Parabellum, it features a Picatinny rail mount on the underside of the frame. It's the standard service weapon of Navy SEALs.",
      image:
        "https://assets.tarkov.dev/56d59856d2720bd8418b456a-grid-image.webp",
    },
    {
      name: "P226 9x19 15-round magazine",
      description:
        "A standard 15-round 9x19 magazine for the SIG Sauer P226 pistol.",
      image:
        "https://assets.tarkov.dev/56d59948d2720bb7418b4582-grid-image.webp",
    },
    {
      name: "9x19mm Pst gzh",
      description:
        "A 9x19mm Parabellum Pst gzh (RG057, GRAU Index - 7N21) cartridge with a 5.4 gram heat-strengthened steel core bullet with two-layer semi-jacket, a polyethylene interior and a bimetallic exterior, in a bimetallic case. This modified PS cartridge (Púlya Stal'náya - Steel Bullet) was developed by TsNIITochMash in the early 1990s based on the 9x21mm PS gzh SP10 cartridge to increase the penetration capabilities of Russian 9x19mm weapons against basic body ballistic protections from up to 50 meters, in addition to providing better muzzle velocity.",
      image:
        "https://assets.tarkov.dev/56d59d3ad2720bdb418b4577-grid-image.webp",
    },
    {
      name: "P226 9x19 112mm barrel",
      description:
        "A standard 112mm long barrel for the SIG Sauer P226 pistol.",
      image:
        "https://assets.tarkov.dev/56d5a1f7d2720bb3418b456a-grid-image.webp",
    },
    {
      name: "P226 polymer pistol grip (Black)",
      description:
        "Standard black polymer SIG Sauer side grip panels for the P226 pistols. Manufacturer Part Code: GRIP226BLKPOL.",
      image:
        "https://assets.tarkov.dev/56d5a2bbd2720bb8418b456a-grid-image.webp",
    },
    {
      name: "P226R MK25 pistol slide",
      description: "The SIG Sauer Mk25 blued slide for P226R 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/56d5a407d2720bb3418b456b-grid-image.webp",
    },
    {
      name: "P226 front sight",
      description:
        "A standard-issue front sight for the P226 pistol, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/56d5a661d2720bd8418b456b-grid-image.webp",
    },
    {
      name: "P226 rear sight",
      description:
        "A standard-issue rear sight for the P226 pistol, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/56d5a77ed2720b90418b4568-grid-image.webp",
    },
    {
      name: "MP-153 12ga semi-automatic shotgun",
      description:
        "The MP-153 smoothbore multi-shot shotgun, manufactured by IzhMekh (Izhevsky Mechanical Plant). A reliable and practical hunting and self-defense weapon.",
      image:
        "https://assets.tarkov.dev/56dee2bdd2720bc8328b4567-grid-image.webp",
    },
    {
      name: "MP-153 12ga 750mm barrel",
      description:
        "A standard factory-produced 750mm barrel for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/56deec93d2720bec348b4568-grid-image.webp",
    },
    {
      name: "MP-153 polymer forestock",
      description:
        "A standard Izhmekh-manufactured polymer forestock for the MP-153 shotgun.",
      image:
        "https://assets.tarkov.dev/56deed6ed2720b4c698b4583-grid-image.webp",
    },
    {
      name: "MP-153 12ga 4-shell magazine cap",
      description: "An MP-153 12ga 30x25 forend cap.",
      image:
        "https://assets.tarkov.dev/56deee15d2720bee328b4567-grid-image.webp",
    },
    {
      name: "MP-153 12ga 8-shell magazine",
      description:
        "An 8-shell magazine extension tube for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/56deeefcd2720bc8328b4568-grid-image.webp",
    },
    {
      name: "SureFire X400 Ultra tactical flashlight with laser",
      description:
        "The X400U flashlight by SureFire is engineered to fit virtually any rail-equipped pistol or rifle. Combines a laser designator and a flashlight.",
      image:
        "https://assets.tarkov.dev/56def37dd2720bec348b456a-grid-image.webp",
    },
    {
      name: "5.45x39mm BP gs",
      description:
        "A 5.45x39mm BP gs (GRAU Index - 7N22) cartridge with a 3.7 gram armor-piercing bullet with a hardened carbon steel core with lead cladding on the tip and bimetallic jacket, in a steel case. This BP bullet (Bronebóynaya Púlya - Armor-piercing Bullet) was developed by TsNIITochMash in 1998 based on the 5.45x39mm PP gs cartridge to improve its design and penetration capabilities, resulting in an improvement at piercing some intermediate models of body ballistic protection, however, due to its design, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dfef82d2720bbd668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm BS gs",
      description:
        "A 5.45x39mm BS gs (GRAU Index - 7N24) cartridge with a 4.1 gram armor-piercing bullet with a pointed tungsten carbide core over a lead base with a bimetallic jacket, in a steel case. This BS bullet (Broneboynyy Serdechnik - Armor-piercing Core) was developed by TsNIITochMash in 1998 to greatly increase the penetration capabilities of Russian 5.45x39mm caliber weapons, by being able to pierce basic and intermediate ballistic body protections in addition to provide outstanding results against some specialized protection models, despite having a relatively low muzzle velocity compared to other cartridges. However, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff026d2720bb8668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm BT gs",
      description:
        "A 5.45x39mm BT gs (GRAU Index - 7BT4) cartridge with a 3.1 gram armor-piercing tracer bullet with a heat-strengthened steel core with a bimetallic jacket, in a steel case; intended for target designation and fire adjustment in battle (Trace color: Red). This BT bullet (Bronebóynaya Trassíruyushchaya - Armor-piercing Tracer) it's an improved version of the used in the 5.45x39 mm T gs cartridge (GRAU Index - 7T3), since the lead core was replaced by one of heat-strengthened steel, providing automatic firearms with penetration capabilities against basic ballistic body protections as well as excellent results against intermediate models, however, due to its design, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff061d2720bb5668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm FMJ",
      description:
        "A 5.45x39mm cartridge with a 3.9 gram lead core full metal jacket (FMJ) bullet in a steel case; intended for hunting, home defense, and target practice. Despite its rudimentary design, it is capable of piercing basic ballistic body protection, besides having a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/56dff0bed2720bb0668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm HP",
      description:
        "A 5.45x39mm cartridge with a 3.6 gram lead core hollow-point (HP) bullet with a bimetallic semi-jacket in a steel case; intended for hunting, home defense, and target practice. The bullet in this cartridge has an excellent expansion and impact energy that give it outstanding stopping power effects, as well as being able to cause substantial adverse effects on the target after impact, making it a good choice for hunting.",
      image:
        "https://assets.tarkov.dev/56dff216d2720bbd668b4568-grid-image.webp",
    },
    {
      name: "5.45x39mm PP gs",
      description:
        "A 5.45x39mm PP gs (GRAU Index - 7N10) cartridge with a 3.5 gram bullet with a heat-strengthened steel core with lead cladding on the tip and bimetallic jacket, in a steel case. The PP bullet (Povýshennoy Probiváyemosti - Increased Penetration) was designed in the 1990s as an upgraded version of the one used in the 5.45x39mm PS gs cartridge, as a longer and narrower tempered steel core was chosen, allowing it to pierce through basic ballistic body protections as well as some intermediate models, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff2ced2720bb4668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm PRS gs",
      description:
        "A 5.45x39mm PRS gs cartridge with a 3.9 gram soft lead core bullet with a bimetallic jacket in a steel case. This PRS bullet (Ponízhennoy Rikoshetíruyushchey Sposóbnosti - Reduced Ricochet Ability) was designed in the early 2000s to crumble and rapidly lose speed when hitting a solid object in order to substantially reduce collateral damage from ricochets during urban operations carried out by law enforcement agencies and groups from the Ministry of Internal Affairs, thus achieving a considerable stopping power effect on the target at the cost of penetration capabilities, even against basic ballistic protection.",
      image:
        "https://assets.tarkov.dev/56dff338d2720bbd668b4569-grid-image.webp",
    },
    {
      name: "5.45x39mm PS gs",
      description:
        "A 5.45x39mm PS gs (GRAU Index - 7N6) cartridge with a 3.4 gram steel core bullet with lead cladding on the tip and a bimetallic jacket, in a steel case. The PS cartridge (Púlya so Stal'ným serdéchnikom - Bullet with a Steel core) was introduced into service in 1974 alongside with Soviet 5.45x39mm caliber weaponry, providing the Soviet Army with capabilities to pierce basic ballistic body protections, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff3afd2720bba668b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm SP",
      description:
        "A 5.45x39mm cartridge with a 3.6 gram lead core soft-point (SP) bullet with a bimetallic semi-jacket in a steel case, intended for hunting, home defense, and target practice. This bullet has a good initial expansion on impact due to the exposure of the lead core at the tip, giving it considerable stopping power effects at the cost of penetration capabilities, even against basic ballistic protection, as well as being able to cause substantial adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/56dff421d2720b5f5a8b4567-grid-image.webp",
    },
    {
      name: "5.45x39mm T gs",
      description:
        "A 5.45x39mm T gs (GRAU Index - 7T3) cartridge with a 3.2 gram lead core tracer bullet with a bimetallic jacket, in a steel case; intended for target designation and fire adjustment in battle (Trace color: Red). This T cartridge (Trassíruyushchaya - Tracer) was introduced in 1974 alongside with the PS gs cartridge (GRAU Index - 7N6) to provide tracing capabilities to Soviet 5.45x39mm caliber weaponry, as well as being able of piercing basic ballistic body protection, besides having significant stopping power effect. However, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff4a2d2720bbd668b456a-grid-image.webp",
    },
    {
      name: "5.45x39mm US gs",
      description:
        "A 5.45x39mm US gs (GRAU Index - 7U1) cartridge with a 5.1 gram subsonic bullet with a pointed tungsten carbide core over a lead base with a bimetallic jacket, in a steel case with a reduced charge. This US cartridge (Umén'shennoy Skórosti - Reduced Speed) was designed by TsNIITochMash in the mid-1980s for use in the AKS-74UB and AKS-74UBN models in conjunction with a suppressor, ensuring the weapon's fire cycling and achieving an excellent noise reduction in addition to granting a considerable stopping power effect, but despite the composition of the bullet, it has difficulties to piercing basic ballistic body protections and due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/56dff4ecd2720b5f5a8b4568-grid-image.webp",
    },
    {
      name: "PB 9x18PM silenced pistol",
      description:
        "The PB pistol (Pistolét Besshúmnyy - Silenced Pistol, GRAU Index - 6P9) was designed with a two-part suppressor, the main suppressor and a section built into the barrel, which allows the weapon to be operated without problems even without the main suppressor attached, but operating the weapon in this way will not mitigate the sound or muzzle flash. It was intended for army reconnaissance groups and USSR KGB personnel and was introduced into service in 1967. Still operated nowadays by FSB special forces and internal troops of the Ministry of Internal Affairs.",
      image:
        "https://assets.tarkov.dev/56e0598dd2720bb5668b45a6-grid-image.webp",
    },
    {
      name: "PB bakilte side grips",
      description:
        "Standard-issue bakelite side grip panels for the PB pistol, manufactured by TsNIITochMash.",
      image:
        "https://assets.tarkov.dev/56e05a6ed2720bd0748b4567-grid-image.webp",
    },
    {
      name: "PB 9x18PM sound suppressor",
      description:
        "A standard-issue detachable sound suppressor for the PB pistol.",
      image:
        "https://assets.tarkov.dev/56e05b06d2720bb2668b4586-grid-image.webp",
    },
    {
      name: "Scav backpack",
      description:
        "A cheap replica of some 3-day assault pack with a MOLLE attachment system, adapted and enhanced by the owner as much as their creativity allowed. Does not offer much comfort, and volume is far lower than that of a proper 3-day pack, but it's still a backpack alright.",
      image:
        "https://assets.tarkov.dev/56e335e4d2720b6c058b456d-grid-image.webp",
    },
    {
      name: "Duffle bag",
      description:
        "A gym duffle bag, generally seen before with fitness enthusiasts or long-distance commuters, is now a typical Scav attribute.",
      image:
        "https://assets.tarkov.dev/56e33634d2720bd8058b456b-grid-image.webp",
    },
    {
      name: "Transformer Bag",
      description:
        "A rather spacious messenger bag, large enough to fit a lunchbox, laptop and some papers - or a small emergency survival kit. Its transformable sling and universal size allow it to be worn both as bag and a compact backpack.",
      image:
        "https://assets.tarkov.dev/56e33680d2720be2748b4576-grid-image.webp",
    },
    {
      name: "AR-15 Noveske KX3 5.56x45 flash hider",
      description:
        "The Noveske KX3 Flash hider, aka the Burning Pig, is designed to increase reliability in short-barreled members of AR-15 family by increasing backpressure and directing the muzzle blast forward of the shooter. Although originally designed for short-barreled AR-15s, it will work on any barrel length and have since been introduced for a variety of mounts. This particular KX3 may be used on 5.56mm barrels with 1/2x28 threading.",
      image:
        "https://assets.tarkov.dev/56ea6fafd2720b844b8b4593-grid-image.webp",
    },
    {
      name: "Hensoldt FF 4-16x56 34mm riflescope",
      description:
        "The Hensoldt FF 4-16x56 telescopic sight was developed to deliver maximum performance and high adjustment ranges while maintaining a short optical system. The FF version of the scope has the reticle placed in the first image plane, thus, the reticle pattern is also magnified when the magnification is changed. This makes it possible to determine the distance using the MIL-DOT without having to calculate.",
      image:
        "https://assets.tarkov.dev/56ea70acd2720b844b8b4594-grid-image.webp",
    },
    {
      name: "AR-15 Badger Ordnance Tactical Charging Handle Latch",
      description:
        "The Badger Ordnance Tactical Charging Handle is optimized for use with Mil Spec AR-15/M16/M4 platform rifles and features preinstalled popular Gen I Tactical Latch of the same company. All components are machined from 6061 Alloy and Mil Spec Type III Hardcoat Anodized.",
      image:
        "https://assets.tarkov.dev/56ea7165d2720b6e518b4583-grid-image.webp",
    },
    {
      name: "P226 Sight Mount 220-239 rear sight bearing",
      description:
        "The 220-239 rear sight bearing manufactured by Sight Mount for SIG Sauer 220, 226, 227, 229, 239 pistols. It is installed as a replacement of the standard rear sight and allows to use it even if no scope is installed.",
      image:
        "https://assets.tarkov.dev/56ea7293d2720b8d4b8b45ba-grid-image.webp",
    },
    {
      name: "AR-15 KAC QDC 5.56x45 Flash Suppressor Kit",
      description:
        "The KAC 5.56 QD muzzle compensator/flash hider is an effective flash suppressor that also serves as a platform for attaching a KAC quick detach QDSS-NT4 sound suppressor. Installed on weapons based on AR-15/M16/M4.",
      image:
        "https://assets.tarkov.dev/56ea8180d2720bf2698b456a-grid-image.webp",
    },
    {
      name: "SV-98 bipod",
      description:
        "A standard-issue Izhmash bipod for the SV-98 sniper rifle. Folded into the handguard when not used.",
      image:
        "https://assets.tarkov.dev/56ea8222d2720b69698b4567-grid-image.webp",
    },
    {
      name: "AR-15 Windham Weaponry Rail Gas Block",
      description:
        "Installed as replacement to standard AR-15-based weapons gas blocks, it adds a Picatinny rail that allows the installation of your own front sight.",
      image:
        "https://assets.tarkov.dev/56ea8d2fd2720b7c698b4570-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense MK12 Low Profile Gas Block",
      description:
        "A gas block for MK12 Special Purpose Rifle, can also be installed on most AR-15 system barrels. Manufactured by Daniel Defense.",
      image:
        "https://assets.tarkov.dev/56eabcd4d2720b66698b4574-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine stock (Black)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Black version.",
      image:
        "https://assets.tarkov.dev/56eabf3bd2720b75698b4569-grid-image.webp",
    },
    {
      name: "EOTech 553 holographic sight",
      description:
        "The EOTech 553 holographic sight. Thanks to design features, it can be used with a wide range of weapons even with non-folding sights. Compatible with night vision devices by the means of NV reticle mode. Utilized by US SOCOM as a primary sight for operations in confined spaces.",
      image:
        "https://assets.tarkov.dev/570fd6c2d2720bc6458b457f-grid-image.webp",
    },
    {
      name: "Walther MRS reflex sight",
      description:
        "The Walther MRS (Multi-Reticle Sight) reflex sight features 2 dots and 2 reticles with adjustable brightness levels. Cheap, accurate (but has to be zeroed every time the reticle type is switched), compact and offers good battery life - but not too sturdy and reliable.",
      image:
        "https://assets.tarkov.dev/570fd721d2720bc5458b4596-grid-image.webp",
    },
    {
      name: "OKP-7 reflex sight",
      description:
        "The original design of OKP sights allows firing from unstable positions in rapidly changing conditions, reduces the operator fatigue, and, if necessary, allows unhindered use of base mechanical sights. The key feature of this sight is a rimless reflector attachment that doesn't block any field of fire sections; instead, reflector is protected by thin and durable visor that is almost un-noticeable when firing.",
      image:
        "https://assets.tarkov.dev/570fd79bd2720bc7458b4583-grid-image.webp",
    },
    {
      name: "F-1 hand grenade",
      description:
        "The F-1 hand grenade (GRAU Index 57-G-721) is an anti-personnel fragmentation defensive grenade, designed for neutralizing enemy personnel in defensive combat. Due to a significantly effective fragmentation radius, it should only be thrown from behind hard cover, such as a concrete wall, APC, or tank.",
      image:
        "https://assets.tarkov.dev/5710c24ad2720bc3458b45a3-grid-image.webp",
    },
    {
      name: "AR-15 Damage Industries ECS pistol grip (FDE)",
      description:
        "The ECS polymer pistol grip can be installed on any weapon compatible with AR-15 grips. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/571659bb2459771fb2755a12-grid-image.webp",
    },
    {
      name: "TT-33 7.62x25 TT pistol",
      description:
        "A legendary pistol that has seen numerous military conflicts throughout the years and is still in service in certain regions of the world, in one variation or another. This one is a classic TT-33, the most mass-produced version. It features a Browning short-recoil tilting-barrel system, but other than that, the construction design is very unique - it is purposefully simple, single-action, and no safety measures except half-cock notch, which makes it be able to withstand horrible operating abuse. Thanks to the powerful 7.62x25 cartridge and relatively long barrel, the TT boasts high muzzle velocity, penetration, and impressive accuracy, even over long distances.",
      image:
        "https://assets.tarkov.dev/571a12c42459771f627b58a0-grid-image.webp",
    },
    {
      name: "TT 7.62x25 116mm barrel",
      description: "A standard-issue barrel for the TT pistol.",
      image:
        "https://assets.tarkov.dev/571a26d524597720680fbe8a-grid-image.webp",
    },
    {
      name: "TT 7.62x25 121mm homespun threaded barrel",
      description:
        "A homespun barrel for TT pistol with threading for sound suppressor installation.",
      image:
        "https://assets.tarkov.dev/571a279b24597720b4066566-grid-image.webp",
    },
    {
      name: "TT side grips",
      description: "Standard post-war issue TT pistol side grips.",
      image:
        "https://assets.tarkov.dev/571a282c2459771fb2755a69-grid-image.webp",
    },
    {
      name: "TT 7.62x25 makeshift sound suppressor",
      description:
        "A makeshift sound suppressor for TT with a homespun barrel. Install and operate at your own discretion.",
      image:
        "https://assets.tarkov.dev/571a28e524597720b4066567-grid-image.webp",
    },
    {
      name: "TT 7.62x25 tt-105 8-round magazine",
      description:
        "A standard late-issue 8-round magazine for the TT pistol. It comes without a lanyard ring.",
      image:
        "https://assets.tarkov.dev/571a29dc2459771fb2755a6a-grid-image.webp",
    },
    {
      name: "AN/PVS-14 Night Vision Monocular",
      description:
        "The AN/PVS-14 monocular night vision device for army/navy that allows nighttime detection of targets on distances of up to 350m with 40° FOV and has an adjustable brightness.",
      image:
        "https://assets.tarkov.dev/57235b6f24597759bf5a30f1-grid-image.webp",
    },
    {
      name: "Scav Vest",
      description:
        "A fisherman's vest can more or less replace the chest rig, if the need is pressing enough.",
      image:
        "https://assets.tarkov.dev/572b7adb24597762ae139821-grid-image.webp",
    },
    {
      name: "Baseball cap",
      description: "A baseball cap, offers the most basic glare protection.",
      image:
        "https://assets.tarkov.dev/572b7d8524597762b472f9d1-grid-image.webp",
    },
    {
      name: "Balaclava",
      description:
        "A definitive woolen balaclava is not only a head-warmer but soul-warmer too for anyone who is too modest for public heroic deeds.",
      image:
        "https://assets.tarkov.dev/572b7f1624597762ae139822-grid-image.webp",
    },
    {
      name: "Beanie",
      description:
        "A warm knitted beanie, traditionally made for skiers but worn by everyone.",
      image:
        "https://assets.tarkov.dev/572b7fa124597762b472f9d2-grid-image.webp",
    },
    {
      name: "Lower half-mask",
      description:
        "A piece of cloth, typically a bandana, covering the face from nose and below, is the most typical attribute of a street gang member.",
      image:
        "https://assets.tarkov.dev/572b7fa524597762b747ce82-grid-image.webp",
    },
    {
      name: "Waist pouch",
      description:
        "A durable and convenient waist pouch for a variety of things you would want to keep close.",
      image:
        "https://assets.tarkov.dev/5732ee6a24597719ae0c0281-grid-image.webp",
    },
    {
      name: "Car battery",
      description:
        "Typical 12 V, 51 Ah lead-acid car batteries are in a big demand with traders, who resell them in the areas that have been left without power supply.",
      image:
        "https://assets.tarkov.dev/5733279d245977289b77ec24-grid-image.webp",
    },
    {
      name: "Chainlet",
      description:
        "A small piece of jewelry worn around the neck. Depending on the materials and weight, can be quite valuable even now.",
      image:
        "https://assets.tarkov.dev/573474f924597738002c6174-grid-image.webp",
    },
    {
      name: "Golden neck chain",
      description:
        "A golden neck chain is bound to be a rather profitable piece of jewelry to find.",
      image:
        "https://assets.tarkov.dev/5734758f24597738025ee253-grid-image.webp",
    },
    {
      name: "Apollo Soyuz cigarettes",
      description:
        "Apollo Soyuz cigarettes. Inhaling those will potentially make you cough up to the stars in your eyes.",
      image:
        "https://assets.tarkov.dev/573475fb24597737fb1379e1-grid-image.webp",
    },
    {
      name: "Malboro Cigarettes",
      description:
        "Malboro Cigarettes are a big hit with the wealthier part of the local smoking populace.",
      image:
        "https://assets.tarkov.dev/573476d324597737da2adc13-grid-image.webp",
    },
    {
      name: "Wilston cigarettes",
      description:
        "The image of a typical street punk would not be complete without Wilston cigarettes.",
      image:
        "https://assets.tarkov.dev/573476f124597737e04bf328-grid-image.webp",
    },
    {
      name: "Strike Cigarettes",
      description:
        "Strike Cigarettes can be sold off to traders for their personal use later.",
      image:
        "https://assets.tarkov.dev/5734770f24597738025ee254-grid-image.webp",
    },
    {
      name: "Can of condensed milk",
      description:
        "Condensed milk, also called Sguschyonka in Russia, once was a part of field ration for the Union soldiers in Civil War, but later reached unprecedented popularity in post-Soviet countries, becoming almost a staple product. Canned, it can be stored for decades and remain just as sweet, tasty and nutritious.",
      image:
        "https://assets.tarkov.dev/5734773724597737fd047c14-grid-image.webp",
    },
    {
      name: "CPU fan",
      description:
        "In conditions of total deficiency of elementary goods and conveniences, CPU cooling fans come in handy for crafty locals - wind power generators made from them charge radios, they are used as household fans, and even serve as vent intakes, replacing native heavy blades.",
      image:
        "https://assets.tarkov.dev/5734779624597737e04bf329-grid-image.webp",
    },
    {
      name: "PC CPU",
      description:
        "PC central processing units, in lack of properly working computers, have found their purpose as a construction material for makeshift antenna reflector-type parasites.",
      image:
        "https://assets.tarkov.dev/573477e124597737dd42e191-grid-image.webp",
    },
    {
      name: "DVD drive",
      description:
        "Magnets, laser diodes, and lenses make PC DVD drives a valuable resource for all sorts of makeshift survivor geekery, including motion detectors and designators.",
      image:
        "https://assets.tarkov.dev/5734781f24597737e04bf32a-grid-image.webp",
    },
    {
      name: "Horse figurine",
      description:
        "A horrendously kitsch horse figurine is useless in Tarkov - just as anywhere else - but somewhere out there, there are dealers still willing to buy such things. Something is not right about this.",
      image:
        "https://assets.tarkov.dev/573478bc24597738002c6175-grid-image.webp",
    },
    {
      name: "Insulating tape",
      description:
        "Although insulating tape is primarily intended for insulation of wires, its practical application is limited only by the creativity of its owner. Most typical cases include minor maintenance, holding together split parts, binding some stuff together and anti-slip wrapping of handles.",
      image:
        "https://assets.tarkov.dev/5734795124597738002c6176-grid-image.webp",
    },
    {
      name: "Classic matches",
      description:
        "A matchbox full of safety matches. Lighters are more reliable and easier to use, but that's exactly why everybody tries to keep them hidden when asked for a light.",
      image:
        "https://assets.tarkov.dev/57347b8b24597737dd42e192-grid-image.webp",
    },
    {
      name: "RAM",
      description:
        "Old RAM is a primary source of IC chips for various microcontroller purposes of the local population.",
      image:
        "https://assets.tarkov.dev/57347baf24597738002c6178-grid-image.webp",
    },
    {
      name: "Duct tape",
      description:
        "Duct tape is a universal tool to fix in one place something that moves, but shouldn't.",
      image:
        "https://assets.tarkov.dev/57347c1124597737fb1379e3-grid-image.webp",
    },
    {
      name: "Power supply unit",
      description:
        "A PC power supply unit can be easily converted from powering PCs to a universal charger for all kinds of low-voltage rechargeable batteries and devices.",
      image:
        "https://assets.tarkov.dev/57347c2e24597744902c94a1-grid-image.webp",
    },
    {
      name: "Bolts",
      description:
        "Bolts, together with screw nuts, are used to fasten things in place. An essential item for organizing a Hideout.",
      image:
        "https://assets.tarkov.dev/57347c5b245977448d35f6e1-grid-image.webp",
    },
    {
      name: "Screw nuts",
      description:
        "Just a handful of commonplace screw nuts, with no apparent use. An essential item for organizing a Hideout.",
      image:
        "https://assets.tarkov.dev/57347c77245977448d35f6e2-grid-image.webp",
    },
    {
      name: "Toothpaste",
      description:
        "Not that teeth hygiene is so essential in the city these days, but why not, if a chance is here.",
      image:
        "https://assets.tarkov.dev/57347c93245977448d35f6e3-grid-image.webp",
    },
    {
      name: "Graphics card",
      description:
        "A graphics card is just as good a source of electronic components as anything else - fans, CPUs, IC, etc.",
      image:
        "https://assets.tarkov.dev/57347ca924597744596b4e71-grid-image.webp",
    },
    {
      name: "T-Shaped plug",
      description: "A T-shaped splitter adapter for the wall power outlet.",
      image:
        "https://assets.tarkov.dev/57347cd0245977445a2d6ff1-grid-image.webp",
    },
    {
      name: "Rye croutons",
      description:
        "Croutons from the traditional Russian sourdough rye Borodinskiy bread.",
      image:
        "https://assets.tarkov.dev/57347d3d245977448f7b7f61-grid-image.webp",
    },
    {
      name: "Can of humpback salmon",
      description:
        "A can of humpback salmon, a tasty source of aliphatic acids and niacin.",
      image:
        "https://assets.tarkov.dev/57347d5f245977448b40fa81-grid-image.webp",
    },
    {
      name: "Can of green peas",
      description:
        "Can of green peas, rich in vitamins and selenium, which makes it especially valuable in the dubious environmental conditions of the Norvinsk region.",
      image:
        "https://assets.tarkov.dev/57347d692459774491567cf1-grid-image.webp",
    },
    {
      name: "Can of beef stew (Small)",
      description:
        "A small amount of canned beef stew, commonly referred to as tushonka, can be stored for years, thus rivaling condensed milk in importance as a food supply for both military and tourists.",
      image:
        "https://assets.tarkov.dev/57347d7224597744596b4e72-grid-image.webp",
    },
    {
      name: "Can of squash spread",
      description:
        "A can of squash spread, a little vegetable treasure that goes well with almost anything and boasts an impressive set of vitamins and minerals.",
      image:
        "https://assets.tarkov.dev/57347d8724597744596b4e76-grid-image.webp",
    },
    {
      name: "Pack of oat flakes",
      description:
        "Package of oat flakes, primary component of healthy porridge for breakfast.",
      image:
        "https://assets.tarkov.dev/57347d90245977448f7b7f65-grid-image.webp",
    },
    {
      name: "Can of herring",
      description:
        "Canned herring, probably the lightest meal among canned fish, is rich with calcium and magnesium.",
      image:
        "https://assets.tarkov.dev/57347d9c245977448b40fa85-grid-image.webp",
    },
    {
      name: "Can of beef stew (Large)",
      description:
        "A large amount of canned beef stew, commonly referred to as tushonka, can be stored for years, thus rivaling condensed milk in importance as a food supply for both military and tourists.",
      image:
        "https://assets.tarkov.dev/57347da92459774491567cf5-grid-image.webp",
    },
    {
      name: "7.62x25mm TT AKBS",
      description:
        "A 7.62x25mm Tokarev cartridge with a 5.5 gram non-magnetic bullet in a brass case; intended for sport shooting and hunting. This cartridge is manufactured with superior attention to detail, giving the shooter more benefits in relation to other cartridges of the same caliber used by the military, such as a reduction in recoil without altering its muzzle velocity and granting considerable damage to the target, making it ideal for the hunting.",
      image:
        "https://assets.tarkov.dev/5735fdcd2459776445391d61-grid-image.webp",
    },
    {
      name: "7.62x25mm TT FMJ43",
      description:
        "A 7.62x25mm Tokarev FMJ cartridge for recreational shooting and hunting, designed for use with civilian self-loading rifles. This round cannot boast great penetrative power, however, it has a significant stopping power effect compared to other cartridges of the same caliber used by the army.",
      image:
        "https://assets.tarkov.dev/5735ff5c245977640e39ba7e-grid-image.webp",
    },
    {
      name: "7.62x25mm TT LRN",
      description:
        "A 7.62x25mm Tokarev cartridge with a lead round nose (LRN) bullet; intended for sport shooting and hunting. By design, this cartridge provides a considerable stopping power effect as well as causing substantial adverse effects on the target after impact, this is at the cost of penetration capabilities, even against basic body ballistic protection besides having a low muzzle velocity.",
      image:
        "https://assets.tarkov.dev/573601b42459776410737435-grid-image.webp",
    },
    {
      name: "7.62x25mm TT LRNPC",
      description:
        "A 7.62x25mm Tokarev cartridge with a lead round nose, polymer coated (LRNPC) bullet; intended for sport shooting and hunting. This cartridge provides an outstanding stopping power effect compared to other cartridges of the same caliber used by the military, as it can cause substantial adverse effects on the target after impact, however, its muzzle velocity is lower, not to mention its poor penetration capabilities.",
      image:
        "https://assets.tarkov.dev/573602322459776445391df1-grid-image.webp",
    },
    {
      name: "7.62x25mm TT P gl",
      description:
        "A 7.62x25mm Tokarev P gl (GAU Index - 57-N-132) cartridge with a 5.5 gram lead core bullet with a bimetallic jacket in a brass case. This is a rudimentary cartridge that was released alongside the adoption of the TT pistol in the USSR.",
      image:
        "https://assets.tarkov.dev/5736026a245977644601dc61-grid-image.webp",
    },
    {
      name: "7.62x25mm TT Pst gzh",
      description:
        "A 7.62x25mm Tokarev Pst gzh (GAU Index - 57-N-134S) cartridge with a 5.4 gram steel core bullet with a lead cladding and a bimetallic jacket, in a bimetallic case. Although this cartridge was created with the intention of neutralizing hostile personnel behind objects with low structural strength, it is currently capable of efficiently piercing basic ballistic body protections as well as some intermediate models at close range.",
      image:
        "https://assets.tarkov.dev/573603562459776430731618-grid-image.webp",
    },
    {
      name: "7.62x25mm TT PT gzh",
      description:
        "A 7.62x25mm Tokarev PT gzh (GAU Index - 57-T-133) with a 5.8 gram lead core tracer bullet in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). Although this cartridge has an effective range of 100 meters, its tracing capacity greatly exceeds this distance, designed to be used in the PPD, PPS and PPSh submachine guns along with the 7.62x25mm TT Pst gzh cartridge and provide a similar stopping power effect.",
      image:
        "https://assets.tarkov.dev/573603c924597764442bd9cb-grid-image.webp",
    },
    {
      name: "9x18mm PM BZhT gzh",
      description:
        "A 9x18mm Makarov BZhT gzh (GRAU Index - 7N15) cartridge with a 5 gram bullet made of solid hardened steel in a bimetallic case. The bullet in this cartridge has a truncated cone design in order to increase its penetration capabilities against some models of basic ballistic body protection.",
      image:
        "https://assets.tarkov.dev/573718ba2459775a75491131-grid-image.webp",
    },
    {
      name: "9x18mm PM P gzh",
      description:
        "A 9x18mm Makarov P gzh (GAU Index - 57-N-181-01) cartridge with a 6.1 gram lead core bullet with a bimetallic jacket in a bimetallic case. This is a rudimentary cartridge that was released alongside the adoption of the PM pistol in the USSR.",
      image:
        "https://assets.tarkov.dev/573719762459775a626ccbc1-grid-image.webp",
    },
    {
      name: "9x18mm PM PBM gzh",
      description:
        "A 9x18mm Makarov PBM gzh (GRAU Index - 7N25) cartridge with a 3.7 gram hardened carbon steel core armor-piercing bullet with a bimetallic semi-jacket in a bimetallic case. This cartridge was designed in the 1990s to increase the penetration capabilities of 9x18 mm PM caliber weapons, and thanks to its high muzzle velocity it is capable of piercing through basic ballistic body protection equipment as well as certain intermediate protection equipment at short distances at the cost of a small increase in recoil.",
      image:
        "https://assets.tarkov.dev/573719df2459775a626ccbc2-grid-image.webp",
    },
    {
      name: "9x18mm PMM PstM gzh",
      description:
        "A 9x18mm PMM PstM gzh (GAU Index - 57-N-181SM, GRAU Index - 7N16) cartridge with a 5.6 gram steel core bullet with a bimetallic jacket in a truncated cone shape, in a bimetallic case. The 9x18mm PMM cartridge is the modernization of the 9x18mm PM cartridge, designed with the intention of increasing its piercing capabilities against basic ballistic body protections, and it has an increased powder charge, making it dangerous to fire in non-compatible weapons. It is intended to be used with the PMM pistol (Makarov Pistol Modernised) and the PP-9 Klin submachine gun.",
      image:
        "https://assets.tarkov.dev/57371aab2459775a77142f22-grid-image.webp",
    },
    {
      name: "9x18mm PM PPe gzh",
      description:
        "A 9x18mm Makarov PPe gzh cartridge with a 7.6 gram lead core hollow-point bullet with a bimetallic semi-jacket, in a bimetallic case. The design of this bullet is based on experiences gained from other 9x18mm PM hollow-point cartridges. The PPe cartridge has a conical hole in its core and the jacket has six notches to improve its expandability on impact, thus achieving a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/57371b192459775a9f58a5e0-grid-image.webp",
    },
    {
      name: "9x18mm PM PPT gzh",
      description:
        "A 9x18mm Makarov PPT gzh (GAU Index - 57-T-181) cartridge with a 3.6 gram lead core tracer bullet with a bimetallic jacket in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). With the arrival of new submachine guns in the 1990s, the Ministry of Internal Affairs became interested in developing ammunition with tracing capabilities greater than 100 meters, in addition to providing stopping power on impact.",
      image:
        "https://assets.tarkov.dev/57371e4124597760ff7b25f1-grid-image.webp",
    },
    {
      name: "9x18mm PM PRS gs",
      description:
        "A 9x18mm Makarov PRS gs cartridge with a 6.1 gram soft lead core bullet with a bimetallic jacket, in a steel case. The PRS bullet (Ponízhennoy Rikoshetíruyushchey Sposóbnosti - Reduced Ricochet Ability) is designed to crumble and rapidly lose speed when hitting a solid object in order to substantially reduce collateral damage from ricochets during urban operations carried out by law enforcement agencies and groups from the Ministry of Internal Affairs.",
      image:
        "https://assets.tarkov.dev/57371eb62459776125652ac1-grid-image.webp",
    },
    {
      name: "9x18mm PM PS gs PPO",
      description:
        "A 9x18mm Makarov PS gs PPO cartridge with a 6.3 gram lead core bullet with a bimetallic jacket in a truncated cone round-nose shape, in a steel case. The PS gs PPO cartridge was developed due to the need for the Ministry of Internal Affairs to equip law enforcement agencies with a cartridge that had reduced ricochet capabilities in order to minimize collateral damage during urban operations.",
      image:
        "https://assets.tarkov.dev/57371f2b24597761224311f1-grid-image.webp",
    },
    {
      name: "9x18mm PM PSO gzh",
      description:
        "A 9x18mm Makarov PSO gzh cartridge with a 6.1 gram lead core bullet in a bimetallic case; intended for sport shooting and hunting. Rudimentary designed for small game hunting.",
      image:
        "https://assets.tarkov.dev/57371f8d24597761006c6a81-grid-image.webp",
    },
    {
      name: "9x18mm PM Pst gzh",
      description:
        "A 9x18mm Makarov Pst gzh (GAU Index - 57-N-181S-01) cartridge with a 5.9 gram steel core bullet with a lead cladding and a bimetallic jacket, in a bimetallic case. This cartridge was developed right after the adoption of the PM pistol with base on the 9x18mm PM P gzh cartridge to provide a more effective solution against hostile personnel without ballistic body protection at distances of up to 50 meters.",
      image:
        "https://assets.tarkov.dev/5737201124597760fc4431f1-grid-image.webp",
    },
    {
      name: "9x18mm PM PSV",
      description:
        "A 9x18mm Makarov PSV cartridge with a 7.5 gram hollow-point bullet; intended for sport shooting and hunting. Despite its low muzzle velocity, it has a considerable stopping power effect thanks to its exceptional expansion capability after hitting the target.",
      image:
        "https://assets.tarkov.dev/5737207f24597760ff7b25f2-grid-image.webp",
    },
    {
      name: "9x18mm PM RG028 gzh",
      description:
        "A 9x18mm Makarov RG028 gzh cartridge with a 6 gram hollow-point bullet with a cylindrical hardened steel core with lead cladding and a bimetallic semi-jacket, in a bimetallic case. This cartridge was developed specifically for the PM pistol in the late 1970s by order of the KGB to provide a significant stopping power effect and increase its penetration capabilities against some models of basic ballistic body protection at short distances.",
      image:
        "https://assets.tarkov.dev/573720e02459776143012541-grid-image.webp",
    },
    {
      name: "9x18mm PM SP7 gzh",
      description:
        "A 9x18mm Makarov SP7 gzh cartridge with a 5.2 gram expanding bullet with a lead core in a plastic plug with a brass semi-jacket, in a bimetallic case with an enhanced charge. This cartridge was developed by TsNIITochMash in the mid-1980s to provide an outstanding stopping effect at the cost of penetration capabilities, as well as causing substantial adverse effects on the target after impact, and thanks to its increased powder load it can achieve a high muzzle velocity without compromising the weapon or its operator.",
      image:
        "https://assets.tarkov.dev/57372140245977611f70ee91-grid-image.webp",
    },
    {
      name: "9x18mm PM SP8 gzh",
      description:
        "A 9x18mm Makarov SP8 gzh cartridge with a 3.9 gram frangible hollow-point bullet with a lead core in a plastic plug with a brass semi-jacket, in a bimetallic case with a reduced charge. Developed in the mid-1980s by TsNIITochMash in order to provide a low penetration cartridge to minimize the destruction and over-piercing of objects with low structural strength (for example, during counter-terrorism operations in an aircraft) and still provide a considerable stopping power effect as well as causing substantial adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/5737218f245977612125ba51-grid-image.webp",
    },
    {
      name: "9x18mm PM BZhT gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM BZhT gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573722e82459776104581c21-grid-image.webp",
    },
    {
      name: "9x18mm PM P gzh ammo pack (16 pcs)",
      description: "A cardboard box of 9x18 mm PM P gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573724b42459776125652ac2-grid-image.webp",
    },
    {
      name: "9x18mm PM PBM gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM PBM gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737250c2459776125652acc-grid-image.webp",
    },
    {
      name: "9x18mm PMM PstM gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PMM PstM gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737256c2459776125652acd-grid-image.webp",
    },
    {
      name: "9x18mm PM PPe gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM PPe gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573725b0245977612125bae2-grid-image.webp",
    },
    {
      name: "9x18mm PM PPT gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM PPT gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737260b24597761224311f2-grid-image.webp",
    },
    {
      name: "9x18mm PM PRS gs ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM PRS gs cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737266524597761006c6a8c-grid-image.webp",
    },
    {
      name: "9x18mm PM PS gs PPO ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM PS gs PPO cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573726d824597765d96be361-grid-image.webp",
    },
    {
      name: "9x18mm PM PSO gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of sport-hunting 9x18mm PM PSO gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737273924597765dd374461-grid-image.webp",
    },
    {
      name: "9x18mm PM Pst gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM Pst gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573727c624597765cc785b5b-grid-image.webp",
    },
    {
      name: "9x18mm PM PSV ammo pack (16 pcs)",
      description: "A cardboard box of 9x18 mm PM PSV cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737280e24597765cc785b5c-grid-image.webp",
    },
    {
      name: "9x18mm PM RG028 gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM RG028 gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5737287724597765e1625ae2-grid-image.webp",
    },
    {
      name: "9x18mm PM SP7 gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM SP7 gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573728cc24597765cc785b5d-grid-image.webp",
    },
    {
      name: "9x18mm PM SP8 gzh ammo pack (16 pcs)",
      description:
        "A cardboard box of 9x18 mm PM SP8 gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/573728f324597765e5728561-grid-image.webp",
    },
    {
      name: "5.45x39mm BP gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 BP gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/5737292724597765e5728562-grid-image.webp",
    },
    {
      name: "5.45x39mm BP gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 BP gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372ac324597767001bc261-grid-image.webp",
    },
    {
      name: "5.45x39mm BS gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 BS gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372b832459776701014e41-grid-image.webp",
    },
    {
      name: "5.45x39mm BS gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 BS gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372bd3245977670b7cd243-grid-image.webp",
    },
    {
      name: "5.45x39mm BT gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 BT gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372c21245977670937c6c2-grid-image.webp",
    },
    {
      name: "5.45x39mm BT gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 BT gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372c89245977685d4159b1-grid-image.webp",
    },
    {
      name: "5.45x39mm PP gs ammo pack (120 pcs)",
      description:
        "A damaged waterproof package of 5.45x39 PP gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372d4c245977685a3da2a1-grid-image.webp",
    },
    {
      name: "5.45x39mm PP gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 PP gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372db0245977685d4159b2-grid-image.webp",
    },
    {
      name: "5.45x39mm PRS gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 PRS gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372deb245977685d4159b3-grid-image.webp",
    },
    {
      name: "5.45x39mm PRS gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 PRS gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372e4a24597768553071c2-grid-image.webp",
    },
    {
      name: "5.45x39mm PS gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 PS gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372e73245977685d4159b4-grid-image.webp",
    },
    {
      name: "5.45x39mm PS gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 PS gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372ebf2459776862260582-grid-image.webp",
    },
    {
      name: "5.45x39mm T gs ammo pack (120 pcs)",
      description:
        "A waterproof package of 5.45x39 T gs cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372ee1245977685d4159b5-grid-image.webp",
    },
    {
      name: "5.45x39mm T gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 T gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/57372f5c24597769917c0131-grid-image.webp",
    },
    {
      name: "5.45x39mm US gs ammo pack (120 pcs)",
      description:
        "A damaged waterproof package of 5.45x39 US cartridges, 120 pieces.",
      image:
        "https://assets.tarkov.dev/57372fc52459776998772ca1-grid-image.webp",
    },
    {
      name: "5.45x39mm US gs ammo pack (30 pcs)",
      description: "A paper package of 5.45x39 US gs cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/5737300424597769942d5a01-grid-image.webp",
    },
    {
      name: "5.45x39mm FMJ ammo pack (30 pcs)",
      description: "A box of 5.45x39 FMJ sport-hunting cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/5737330a2459776af32363a1-grid-image.webp",
    },
    {
      name: "5.45x39mm HP ammo pack (30 pcs)",
      description: "A box of 5.45x39 HP sport-hunting cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/5737339e2459776af261abeb-grid-image.webp",
    },
    {
      name: "5.45x39mm SP ammo pack (30 pcs)",
      description: "A box of 5.45x39 SP sport-hunting cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/573733c72459776b0b7b51b0-grid-image.webp",
    },
    {
      name: "9x19mm Pst gzh ammo pack (16 pcs)",
      description: "A cardboard box of 9x19mm Pst gzh cartridges, 16 pieces.",
      image:
        "https://assets.tarkov.dev/5739d41224597779c3645501-grid-image.webp",
    },
    {
      name: "OKP-7 reflex sight (Dovetail)",
      description:
        "The original design of OKP sights allows firing from unstable positions in rapidly changing conditions, reduces the operator fatigue, and, if necessary, allows unhindered use of base mechanical sights. The key feature of this sight is a rimless reflector attachment that doesn't block any field of fire sections; instead, reflector is protected by thin and durable visor that is almost un-noticeable when firing. This variant is installed on the dovetail type mount.",
      image:
        "https://assets.tarkov.dev/57486e672459770abd687134-grid-image.webp",
    },
    {
      name: "Simonov SKS 7.62x39 carbine",
      description:
        "A Soviet semi-automatic carbine designed by Sergei Simonov for 7.62x39 cartridges and known abroad as SKS-45. Immensely popular both in CIS countries and in the West, this weapon is still in active service in some countries in form of various copies and modifications. This particular model comes from extended storage warehouses of Tula Arms Plant and haven't yet undergone the civilian weapon normalization procedure.",
      image:
        "https://assets.tarkov.dev/574d967124597745970e7c94-grid-image.webp",
    },
    {
      name: "SKS TOZ wooden stock (56-A-231 Sb.5)",
      description:
        "A standard-issue wooden stock for the SKS carbine, manufactured by TOZ.",
      image:
        "https://assets.tarkov.dev/574dad8024597745964bf05c-grid-image.webp",
    },
    {
      name: "SKS rear sight",
      description: "A standard ramp-type rear sight for SKS carbines.",
      image:
        "https://assets.tarkov.dev/574db213245977459a2f3f5d-grid-image.webp",
    },
    {
      name: "Factory plan map",
      description:
        "A simplified and updated copy of the Chemical Plant No. 16 facility blueprint.",
      image:
        "https://assets.tarkov.dev/574eb85c245977648157eec3-grid-image.webp",
    },
    {
      name: "Alyonka chocolate bar",
      description:
        "The famous milk chocolate of post-Soviet times, sweet and creamy.",
      image:
        "https://assets.tarkov.dev/57505f6224597709a92585a9-grid-image.webp",
    },
    {
      name: "Can of Ice Green tea",
      description: "A sweetened green tea drink, for ice-cold consumption.",
      image:
        "https://assets.tarkov.dev/575062b524597720a31c09a1-grid-image.webp",
    },
    {
      name: "Pack of apple juice",
      description:
        "Clarified and reconstituted apple juice, refreshing and sweet.",
      image:
        "https://assets.tarkov.dev/57513f07245977207e26a311-grid-image.webp",
    },
    {
      name: "Pack of Grand juice",
      description:
        "The Grand grapefruit juice, great drink for those who lack bitterness in their lives.",
      image:
        "https://assets.tarkov.dev/57513f9324597720a7128161-grid-image.webp",
    },
    {
      name: "Pack of Vita juice",
      description:
        "Multifruit and multivitamin juice can be confusing tastewise, but it sure is healthy.",
      image:
        "https://assets.tarkov.dev/57513fcc24597720a31c09a6-grid-image.webp",
    },
    {
      name: "Can of Max Energy energy drink",
      description:
        "Max Energy energy drink, designed like a battery, but different in contents - regular caffeine, sugar, and flavoring.",
      image:
        "https://assets.tarkov.dev/5751435d24597720a27126d1-grid-image.webp",
    },
    {
      name: "Can of TarCola soda",
      description:
        "TarCola is a widely spread cola-flavored soft drink produced by a local drinks manufacturer before the conflict.",
      image:
        "https://assets.tarkov.dev/57514643245977207f2c2d09-grid-image.webp",
    },
    {
      name: "Pack of milk",
      description:
        "A 1 litre box of milk that mysteriously survived until now. Drink at your own discretion.",
      image:
        "https://assets.tarkov.dev/575146b724597720a27126d5-grid-image.webp",
    },
    {
      name: "Emelya rye croutons",
      description:
        "Emelya rye croutons with assorted flavors were a favorite snack for kids and cracking open a cold one while watching movies enjoyers. Although, these days you won't find either the kids or any movies in Tarkov.",
      image:
        "https://assets.tarkov.dev/5751487e245977207e26a315-grid-image.webp",
    },
    {
      name: "Can of Hot Rod energy drink",
      description:
        "Hot Rod, though being the most recognizable energy drink in the world, is not much more powerful than its counterparts. The standards are the same for all.",
      image:
        "https://assets.tarkov.dev/5751496424597720a27126da-grid-image.webp",
    },
    {
      name: "Army bandage",
      description: "An army-issue gauze bandage.",
      image:
        "https://assets.tarkov.dev/5751a25924597722c463c472-grid-image.webp",
    },
    {
      name: "Golden Star balm",
      description:
        "The famous Vietnamese Golden Star balm, also known as Cao Sao Vang, is made from essential oils like Camphor, Menthol, Peppermint, Cajuput, all mixed into vaseline. A small amount of the balm is applied to the sub-district and rubbing of the skin: for headache - the temples and the nape of the neck, with a cold - under the nostrils, the common cold - in the chest, back, abdomen, insect bites - on the place of bite. External use only!",
      image:
        "https://assets.tarkov.dev/5751a89d24597722aa0e8db0-grid-image.webp",
    },
    {
      name: "AI-2 medkit",
      description:
        "The AI-2 medkit was developed as a standard service first aid kit for various defense and law enforcement agencies and civil defense forces of USSR. In case of all-out conflict with the use of weapons of mass destruction it should have been distributed to the population of the affected and surrounding areas.",
      image:
        "https://assets.tarkov.dev/5755356824597772cb798962-grid-image.webp",
    },
    {
      name: "Vaseline balm",
      description:
        "Vaseline, or, more precisely, petroleum jelly, is a versatile ointment used for a number of purposes where its water insulation and lubrication properties are required, for instance, for treating small cuts and burns, coating corrosion-prone items or lubricating gear that requires non-acidic lubricants.",
      image:
        "https://assets.tarkov.dev/5755383e24597772cb798966-grid-image.webp",
    },
    {
      name: "Saiga 12ga ver.10 12/76 semi-automatic shotgun",
      description:
        "A semi-automatic 12 gauge shotgun with a folding stock, equipped with a firing mechanism safety lock that only allows firing from extended stock position. Features a short 430mm barrel.",
      image:
        "https://assets.tarkov.dev/576165642459773c7a400233-grid-image.webp",
    },
    {
      name: "SOK-12 thread protection tube",
      description: "A standard-issue threading protection tube for SOK-12.",
      image:
        "https://assets.tarkov.dev/576167ab2459773cad038c43-grid-image.webp",
    },
    {
      name: "SOK-12 polymer handguard (Sb.7-1)",
      description:
        "Sb.7-1 is a standard polymer handguard with a sling swivel, installs on SOK-12 and SOK-12S.",
      image:
        "https://assets.tarkov.dev/576169e62459773c69055191-grid-image.webp",
    },
    {
      name: "SOK-12 12/76 sb.5 5-round magazine",
      description:
        "A 5-round Sb.5 polymer plastic magazine for the SOK-12 and compatible weapons, intended for use with 12/76 or 12/70 shells.",
      image:
        "https://assets.tarkov.dev/57616a9e2459773c7a400234-grid-image.webp",
    },
    {
      name: "SOK-12 dust cover (Sb.0-2)",
      description:
        "A standard-issue dust cover for Saiga 12, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57616c112459773cce774d66-grid-image.webp",
    },
    {
      name: "SOK-12 AK-style stock",
      description:
        "A folding polymer AK-styled stock for SOK-12, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57616ca52459773c69055192-grid-image.webp",
    },
    {
      name: "Yarygin MP-443 Grach 9x19 pistol",
      description:
        "The PYa MP-443 (Pistolét Yarýgina MP-443 - Yarygin Pistol MP-443, GRAU Index - 6P35) widely known as Grach is a Russian semiautomatic pistol chambered in 9x19 mm. It was designed by Vladimir Yarygin in the 1990s and adopted as a standard sidearm by the Russian military, law enforcement agencies, and special units of the Ministry of Internal Affairs. It features a high capacity magazine and can be equipped with the Zenit B-8 mount to install additional attachments beneath the barrel.",
      image:
        "https://assets.tarkov.dev/576a581d2459771e7b1bc4f1-grid-image.webp",
    },
    {
      name: "MP-443 Grach 9x19 18-round magazine",
      description: "A standard 18-round 9x19 magazine for the MP-443 pistol.",
      image:
        "https://assets.tarkov.dev/576a5ed62459771e9c2096cb-grid-image.webp",
    },
    {
      name: "MP-443 Grach polymer pistol grip",
      description:
        "A standard service pistol grip for MP-443 pistols manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/576a63cd2459771e796e0e11-grid-image.webp",
    },
    {
      name: "MP-443 Grach Zenit B-8 mount",
      description:
        "The B-8 rail mount can be installed on Yarygin pistols (MP-443 Grach and its civilian version MP-446 Viking) for use with additional attachments, like Zenit Klesch-2P tactical flashlight/laser. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/576a7c512459771e796e0e17-grid-image.webp",
    },
    {
      name: "BelOMO PSO-1M2-1 4x24 scope",
      description:
        "The PSO-1M2-1 military grade optical sniper scope, manufactured by BelOMO. This scope is designed for precision sight fire with Special Sniper Rifle (VSS) and Dragunov Sniper Rifle (SVD) on the variety of targets with 4x magnification and 6 degree FOV.",
      image:
        "https://assets.tarkov.dev/576fd4ec2459777f0b518431-grid-image.webp",
    },
    {
      name: "Burris FastFire Weaver Base",
      description:
        "This base from Burris allows to mount the compact FastFire Series Sights to Weaver or Picatinny-style rails.",
      image:
        "https://assets.tarkov.dev/577d128124597739d65d0e56-grid-image.webp",
    },
    {
      name: "Burris FastFire 3 reflex sight",
      description:
        "Light and tough, the FastFire series collimator puts a clear bright red dot on your target to give you an immediate speed and accuracy advantage. Can be used as a primary sight or mounted on top of an existing sight.",
      image:
        "https://assets.tarkov.dev/577d141e24597739c5255e01-grid-image.webp",
    },
    {
      name: "Printer paper",
      description:
        "Office-grade paper for printers and copiers, it can nevertheless be used for writing as well, just like any paper.",
      image:
        "https://assets.tarkov.dev/577e1c9d2459773cd707c525-grid-image.webp",
    },
    {
      name: "Dorm room 306 key",
      description:
        "A key to the three-story dormitory with a tag reading 306 on it.",
      image:
        "https://assets.tarkov.dev/5780cda02459777b272ede61-grid-image.webp",
    },
    {
      name: "Dorm room 315 key",
      description:
        "A key to the three-story dormitory with a tag reading 315 on it.",
      image:
        "https://assets.tarkov.dev/5780cf692459777de4559321-grid-image.webp",
    },
    {
      name: "Dorm room 308 key",
      description:
        "A key to the three-story dormitory with a tag reading 308 on it.",
      image:
        "https://assets.tarkov.dev/5780cf722459777a5108b9a1-grid-image.webp",
    },
    {
      name: "Dorm room 314 marked key",
      description:
        "A dormitory room 314 key with strange symbols scratched onto it where the room label would normally be. The key has completely rusted through, making it very fragile.",
      image:
        "https://assets.tarkov.dev/5780cf7f2459777de4559322-grid-image.webp",
    },
    {
      name: "Dorm room 214 key",
      description:
        "A key to the three-story dormitory with a tag reading 214 on it.",
      image:
        "https://assets.tarkov.dev/5780cf942459777df90dcb72-grid-image.webp",
    },
    {
      name: "Dorm room 218 key",
      description:
        "A key to the three-story dormitory with a tag reading 218 on it.",
      image:
        "https://assets.tarkov.dev/5780cf9e2459777df90dcb73-grid-image.webp",
    },
    {
      name: "Dorm room 220 key",
      description:
        "A key to the three-story dormitory with a tag reading 220 on it.",
      image:
        "https://assets.tarkov.dev/5780cfa52459777dfb276eb1-grid-image.webp",
    },
    {
      name: "Tarcone Director's office key",
      description:
        "A key to Tarcone director's administrative office, located in the customs control warehouse.",
      image:
        "https://assets.tarkov.dev/5780d0532459777a5108b9a2-grid-image.webp",
    },
    {
      name: "Gas station office key",
      description:
        "A key to the director's office room inside one of the gas stations.",
      image:
        "https://assets.tarkov.dev/5780d0652459777df90dcb74-grid-image.webp",
    },
    {
      name: "Portable cabin key",
      description:
        "A key to one of the portable on-site customs control guard cabins.",
      image:
        "https://assets.tarkov.dev/5780d07a2459777de4559324-grid-image.webp",
    },
    {
      name: "VSS Vintorez 9x39 special sniper rifle",
      description:
        "VSS (Vintovka Sniperskaya Specialnaya - Special Sniper Rifle) is an integrally suppressed sniper rifle, designed in the 80s in the TsNIITochMash institute for the needs of special-purpose teams and task forces.",
      image:
        "https://assets.tarkov.dev/57838ad32459774a17445cd2-grid-image.webp",
    },
    {
      name: "VSS 9x39 integral barrel-suppressor",
      description:
        "A TsNIITochMash-manufactured integral barrel-suppressor module for VSS Vintorez.",
      image:
        "https://assets.tarkov.dev/57838c962459774a1651ec63-grid-image.webp",
    },
    {
      name: "VSS rear sight",
      description:
        "A standard vertically adjustable mechanical rear sight for the VSS Vintorez sniper rifle.",
      image:
        "https://assets.tarkov.dev/57838e1b2459774a256959b1-grid-image.webp",
    },
    {
      name: "VSS 9x39 6L24 10-round magazine",
      description:
        "A 10-round polymer TsNIITochMash 6L24 9x39 magazine for the VSS sniper rifle.",
      image:
        "https://assets.tarkov.dev/57838f0b2459774a256959b2-grid-image.webp",
    },
    {
      name: "VSS 9x39 6L25 20-round magazine",
      description:
        "A 20-round polymer TsNIITochMash 6L25 9x39 magazine for the AS VAL special assault rifle.",
      image:
        "https://assets.tarkov.dev/57838f9f2459774a150289a0-grid-image.webp",
    },
    {
      name: "VSS dust cover",
      description:
        "A standard-issue dust cover for VSS Vintorez sniper rifles, manufactured by TsNIITochMash.",
      image:
        "https://assets.tarkov.dev/578395402459774a256959b5-grid-image.webp",
    },
    {
      name: "VSS wooden stock",
      description:
        "A standard-issue wooden stock for VSS Vintorez sniper rifles, manufactured by TsNIITochMash.",
      image:
        "https://assets.tarkov.dev/578395e82459774a0e553c7b-grid-image.webp",
    },
    {
      name: "Simple wallet",
      description: "A simple wallet for storing money.",
      image:
        "https://assets.tarkov.dev/5783c43d2459774bbe137486-grid-image.webp",
    },
    {
      name: "Makarov PM (t) 9x18PM pistol",
      description:
        "A semi-mythical Makarov pistol with an extended threaded barrel for equipping a sound suppressor. Some claim it was a limited production series manufactured in Bulgaria, whilst others insist on it being East German, or even a handcrafted upgrade. As for how it ended up in the Norvinsk region, no living soul could tell you now.",
      image:
        "https://assets.tarkov.dev/579204f224597773d619e051-grid-image.webp",
    },
    {
      name: "Customs plan map",
      description:
        "A paper plan map of the vast Customs premises. Not the most up-to-date copy, but it's better than nothing.",
      image:
        "https://assets.tarkov.dev/5798a2832459774b53341029-grid-image.webp",
    },
    {
      name: "9x39mm SP-5 gs",
      description:
        "A 9x39mm SP-5 gs (GRAU Index - 7N8) special cartridge with a 16 gram subsonic bullet with a pointed steel core over a lead base with a bimetallic jacket, in a steel case. This cartridge was designed in the mid-1980s based on the 7.62x39mm US gzh cartridge for use in the VSS Vintorez special sniper rifle. Being capable of piercing through basic ballistic body protections as well as certain intermediate protection equipment, added to its outstanding stopping power effect, however, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/57a0dfb82459774d3078b56c-grid-image.webp",
    },
    {
      name: "9x39mm SP-6 gs",
      description:
        "A 9x39mm SP-6 gs (GRAU Index - 7N9) special cartridge with a 16 gram subsonic armor-piercing bullet with a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a steel case. This cartridge was designed in the mid-1980s to equip the AS VAL suppressed assault rifle with capabilities to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to providing a significant stopping power effect, however, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/57a0e5022459774d1673f889-grid-image.webp",
    },
    {
      name: "VSS/VAL Zenit B-3 ring mount",
      description:
        "The B-3 mounts are installed on the VSS/VAL suppressor to form a Picatinny rail for the installation of additional weapon equipment. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/57a3459f245977764a01f703-grid-image.webp",
    },
    {
      name: "Pumping station front door key",
      description: "An old soviet factory key labeled Pumping Station.",
      image:
        "https://assets.tarkov.dev/57a349b2245977762b199ec7-grid-image.webp",
    },
    {
      name: "SOK-12 rear sight",
      description:
        "A standard-issue fixed rear sight for SOK-12, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57a9b9ce2459770ee926038d-grid-image.webp",
    },
    {
      name: "ELCAN SpecterDR 1x/4x scope",
      description:
        "The SpecterDR (Dual Role) 1x/4x scope from Specter scope series designed by ELCAN has marked a breakthrough in the optic sight development by becoming the first variable scope that truly has two work modes, switching from 4x magnification to 1x in one touch. Also features a backup iron sight.",
      image:
        "https://assets.tarkov.dev/57ac965c24597706be5f975c-grid-image.webp",
    },
    {
      name: "ELCAN SpecterDR 1x/4x scope (FDE)",
      description:
        "The SpecterDR (Dual Role) 1x/4x scope from Specter scope series designed by ELCAN has marked a breakthrough in the optic sight development by becoming the first variable scope that truly has two work modes, switching from 4x magnification to 1x in one touch. Also features a backup iron sight. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/57aca93d2459771f2c7e26db-grid-image.webp",
    },
    {
      name: "VOMZ Pilad 043-02 dovetail mount",
      description:
        "An aluminum sight support with a Picatinny rail mount for the installation of scopes and accessories.",
      image:
        "https://assets.tarkov.dev/57acb6222459771ec34b5cb0-grid-image.webp",
    },
    {
      name: "Armacon Baskak stock",
      description:
        "A Russian-made light tube stock of very spartan-like design for use with AK systems that can be installed both on Mil-Spec and Com-Spec M/AR standard receiver adaptors. Not compatible with AR systems.",
      image:
        "https://assets.tarkov.dev/57ade1442459771557167e15-grid-image.webp",
    },
    {
      name: "SIG Sauer BRAVO4 4x30 scope",
      description:
        "Designed by SIG Sauer, the BRAVO4 4x30 optical scope sight features the uniquely large FOV, 43% wider than closest competitors. It also has an extra rail mount on top of it that allows installation of a backup compact sight.",
      image:
        "https://assets.tarkov.dev/57adff4f24597737f373b6e6-grid-image.webp",
    },
    {
      name: "BelOMO PK-06 reflex sight",
      description:
        "A modern open reflex sight with automatic reticle brightness adjustment and switching between 3 reticle types, manufactured by Zenit-BelOMO.",
      image:
        "https://assets.tarkov.dev/57ae0171245977343c27bfcf-grid-image.webp",
    },
    {
      name: "Hogue OverMolded Rubber Grip (FDE)",
      description:
        "A fiberglass rubber-overmolded anti-slip pistol grip for AR systems, manufactured by Hogue. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/57af48872459771f0b2ebf11-grid-image.webp",
    },
    {
      name: "AS VAL 9x39 special assault rifle",
      description:
        "AS VAL (Avtomat Specialniy VAL - Special Automatic rifle VAL) is a silenced automatic rifle with an integral suppressor designed for special forces units. Developed in TsNIITochMash and based on the VSS Vintorez platform.",
      image:
        "https://assets.tarkov.dev/57c44b372459772d2b39b8ce-grid-image.webp",
    },
    {
      name: "AS VAL 9x39 integral barrel-suppressor",
      description:
        "A TsNIITochMash-manufactured integral barrel-suppressor module for AS VAL.",
      image:
        "https://assets.tarkov.dev/57c44dd02459772d2e0ae249-grid-image.webp",
    },
    {
      name: "AS VAL rear sight",
      description:
        "A standard vertically adjustable mechanical rear sight for AS VAL.",
      image:
        "https://assets.tarkov.dev/57c44e7b2459772d28133248-grid-image.webp",
    },
    {
      name: "AS VAL dust cover",
      description:
        "A standard-issue dust cover for AS VAL, manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/57c44f4f2459772d2c627113-grid-image.webp",
    },
    {
      name: "AS VAL pistol grip",
      description:
        "A standard-issue polymer pistol grip for AS VAL, manufactured by TSNIITochMash.",
      image:
        "https://assets.tarkov.dev/57c44fa82459772d2d75e415-grid-image.webp",
    },
    {
      name: "AS VAL skeleton stock",
      description:
        "A standard-issue foldable skeleton stock for AS VAL, manufactured by TsNIITochMash.",
      image:
        "https://assets.tarkov.dev/57c450252459772d28133253-grid-image.webp",
    },
    {
      name: "Hogue OverMolded Rubber Grip (Black)",
      description:
        "A fiberglass rubber-overmolded anti-slip pistol grip for AR systems, manufactured by Hogue. Black version.",
      image:
        "https://assets.tarkov.dev/57c55efc2459772d2c6271e7-grid-image.webp",
    },
    {
      name: "Hogue OverMolded Rubber Grip (Ghillie Earth)",
      description:
        "A fiberglass rubber-overmolded anti-slip pistol grip for AR systems, manufactured by Hogue. Ghillie Earth version.",
      image:
        "https://assets.tarkov.dev/57c55f092459772d291a8463-grid-image.webp",
    },
    {
      name: "Hogue OverMolded Rubber Grip (Ghillie Green)",
      description:
        "A fiberglass rubber-overmolded anti-slip pistol grip for AR systems, manufactured by Hogue. Ghillie Green version.",
      image:
        "https://assets.tarkov.dev/57c55f112459772d28133310-grid-image.webp",
    },
    {
      name: "Hogue OverMolded Rubber Grip (Olive Drab)",
      description:
        "A fiberglass rubber-overmolded anti-slip pistol grip for AR systems, manufactured by Hogue. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/57c55f172459772d27602381-grid-image.webp",
    },
    {
      name: "March Tactical 3-24x42 FFP 30mm riflescope",
      description:
        "The March Tactical 3-24x42 FFP optical scope is reliable and accurate with ammunition of any power.",
      image:
        "https://assets.tarkov.dev/57c5ac0824597754771e88a9-grid-image.webp",
    },
    {
      name: "Lobaev Arms 30mm scope mount",
      description:
        "A universal 30mm optical scope base mount by Lobaev Arms for installation on Picatinny rails.",
      image:
        "https://assets.tarkov.dev/57c69dd424597774c03b7bbc-grid-image.webp",
    },
    {
      name: "P226 Combat pistol grip (FDE)",
      description:
        "Brown Flat Dark Earth polymer SIG Sauer grip panels for P226 pistols. Used as the standard service grip on the Combat P226.",
      image:
        "https://assets.tarkov.dev/57c9a89124597704ee6faec1-grid-image.webp",
    },
    {
      name: "Kiba Arms Tactical Tomahawk",
      description:
        "A tactical tomahawk, multitool and breaching tool, all-in-one solution.",
      image:
        "https://assets.tarkov.dev/57cd379a24597778e7682ecf-grid-image.webp",
    },
    {
      name: "AK Magpul MOE AKM handguard (Black)",
      description:
        "The Magpul MOE AKM handguard is installed on AKM/AK-74 and compatible weapon systems. It comes equipped with licensed M-LOK mounts for the installation of additional devices or rails. Black version.",
      image:
        "https://assets.tarkov.dev/57cff947245977638e6f2a19-grid-image.webp",
    },
    {
      name: "Magpul M-LOK AFG tactical foregrip (Black)",
      description:
        "The Magpul M-LOK AFG tactical grip. It can only be installed on Magpul licensed M-LOK slots on applicable equipment. Black version.",
      image:
        "https://assets.tarkov.dev/57cffb66245977632f391a99-grid-image.webp",
    },
    {
      name: "Magpul M-LOK AFG tactical foregrip (FDE)",
      description:
        "The Magpul M-LOK AFG tactical grip. It can only be installed on Magpul licensed M-LOK slots on applicable equipment. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/57cffcd624597763133760c5-grid-image.webp",
    },
    {
      name: "Magpul M-LOK AFG tactical foregrip (Olive Drab)",
      description:
        "The Magpul M-LOK AFG tactical grip. It can only be installed on Magpul licensed M-LOK slots on applicable equipment. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/57cffcdd24597763f5110006-grid-image.webp",
    },
    {
      name: "Magpul M-LOK AFG tactical foregrip (Stealth Gray)",
      description:
        "The Magpul M-LOK AFG tactical grip. It can only be installed on Magpul licensed M-LOK slots on applicable equipment. Stealth Gray version.",
      image:
        "https://assets.tarkov.dev/57cffce524597763b31685d8-grid-image.webp",
    },
    {
      name: "AK Magpul MOE AKM handguard (FDE)",
      description:
        "The Magpul MOE AKM hand guard is installed on AKM/AK-74 compatible weapon systems. It comes equipped with licensed M-LOK mounts for the installation of additional devices or rails. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/57cffd8224597763b03fc609-grid-image.webp",
    },
    {
      name: "AK Magpul MOE AKM handguard (Olive Drab)",
      description:
        "The Magpul MOE AKM hand guard is installed on AKM/AK-74 compatible weapon systems. It comes equipped with licensed M-LOK mounts for the installation of additional devices or rails. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/57cffddc24597763133760c6-grid-image.webp",
    },
    {
      name: "AK Magpul MOE AKM handguard (Plum)",
      description:
        "The Magpul MOE AKM hand guard is installed on AKM/AK-74-compatible weapon systems. It comes equipped with licensed M-LOK mounts for the installation of additional devices or rails. Plum-colored polymer version.",
      image:
        "https://assets.tarkov.dev/57cffe0024597763b03fc60b-grid-image.webp",
    },
    {
      name: "AK Magpul MOE AKM handguard (Stealth Gray)",
      description:
        "The Magpul MOE AKM hand guard is installed on AKM/AK-74 compatible weapon systems. It comes equipped with licensed M-LOK mounts for the installation of additional devices or rails. Stealth Gray version.",
      image:
        "https://assets.tarkov.dev/57cffe20245977632f391a9d-grid-image.webp",
    },
    {
      name: "PP-91 Kedr 9x18PM submachine gun",
      description:
        "The PP-91 Kedr is a submachine gun chambered in 9x18 PM, designed by Yevgeny Dragunov in the early 90s by order of the Ministry of Internal Affairs and produced at ZMZ (Zlatoústovskiy Mashinostroítelnyy Zavód - Zlatoust Machine-Building Plant). This submachine gun has a simple but effective design. Its light weight makes it more comfortable to carry without affecting its performance, and it provides a high rate of fire without affecting its recoil. Thanks to these characteristics, it's still used as a service weapon in almost all Russian law enforcement agencies.",
      image:
        "https://assets.tarkov.dev/57d14d2524597714373db789-grid-image.webp",
    },
    {
      name: "PP-91 Kedr 9x18PM 20-round magazine",
      description:
        "A standard 20-round capacity metal magazine for PP-91 Kedr-based 9x18PM SMGs, manufactured by ZMZ.",
      image:
        "https://assets.tarkov.dev/57d14e1724597714010c3f4b-grid-image.webp",
    },
    {
      name: "PP-91 Kedr 9x18PM 30-round magazine",
      description:
        "A standard 30-round capacity metal magazine for PP-91 Kedr-based 9x18PM SMGs, manufactured by ZMZ.",
      image:
        "https://assets.tarkov.dev/57d1519e24597714373db79d-grid-image.webp",
    },
    {
      name: "PP-91 Kedr polymer pistol grip",
      description:
        "A ZMZ-produced polymer pistol grip for PP-91 Kedr family weapons.",
      image:
        "https://assets.tarkov.dev/57d152ec245977144076ccdf-grid-image.webp",
    },
    {
      name: "Ultrafire WF-501B flashlight",
      description:
        "A simple but powerful LED flashlight with a sturdy body, durable enough for long-time daily usage.",
      image:
        "https://assets.tarkov.dev/57d17c5e2459775a5c57d17d-grid-image.webp",
    },
    {
      name: "Kiba Arms 25mm accessory ring mount",
      description:
        "A universal platform for installation of 25mm tactical accessories on Picatinny mounts.",
      image:
        "https://assets.tarkov.dev/57d17e212459775a1179a0f5-grid-image.webp",
    },
    {
      name: "KAC QDSS NT-4 5.56x45 sound suppressor (Black)",
      description:
        "The Knight's Armament Company QDSS NT-4 5.56x45 and .223 sound suppressor can only be installed on compatible KAC muzzle devices. Black in color.",
      image:
        "https://assets.tarkov.dev/57da93632459771cb65bf83f-grid-image.webp",
    },
    {
      name: "KAC QDSS NT-4 5.56x45 sound suppressor (FDE)",
      description:
        "The Knight's Armament Company QDSS NT-4 5.56x45 and .223 sound suppressor can only be installed on compatible KAC muzzle devices. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/57dbb57e2459774673234890-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74U 5.45x39 assault rifle",
      description:
        "AKS-74U (Avtomat Kalashnikova Skladnoy 74 Ukorochenny - Kalashnikov's Shortened Automatic rifle 74 with a foldable stock) is a shortened version of the AKS-74 assault rifle, developed in the early 80s for combat vehicle crews and airborne troops, also became very popular with law enforcement and special forces for its compact size.",
      image:
        "https://assets.tarkov.dev/57dc2fa62459775949412633-grid-image.webp",
    },
    {
      name: "AKS-74U 5.45x39 muzzle brake (6P26 0-20)",
      description:
        "A standard-issue IzhMash muzzle brake for the AKS-74U and AKS-74UN, installed on 24x1.5 mm threading.",
      image:
        "https://assets.tarkov.dev/57dc324a24597759501edc20-grid-image.webp",
    },
    {
      name: "AKS-74U wooden handguard (6P26 Sb.6)",
      description:
        "A standard-issue wooden handguard for AKS-74U, AKS-74UN, and AKS-74UB, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57dc32dc245977596d4ef3d3-grid-image.webp",
    },
    {
      name: "AKS-74U dust cover (6P26 Sb.7)",
      description:
        "A standard-issue dust cover for AKS-74U, AKS-74UN automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57dc334d245977597164366f-grid-image.webp",
    },
    {
      name: "AKS-74U metal skeleton stock (6P26 Sb.5)",
      description:
        "A standard-issue metal skeleton stock for AKS-74U, AKS-74UN, and AKS-74UB, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/57dc347d245977596754e7a1-grid-image.webp",
    },
    {
      name: "Bars A-2607 Damascus knife",
      description:
        "The Bars A-2607 knife, forged of Damascus steel with a wenge handle and brass guard.",
      image:
        "https://assets.tarkov.dev/57e26ea924597715ca604a09-grid-image.webp",
    },
    {
      name: "Bars A-2607 95Kh18 knife",
      description:
        "The Bars A-2607 knife, forged of 95Kh18 steel with a fine wood handle and brass guard.",
      image:
        "https://assets.tarkov.dev/57e26fc7245977162a14b800-grid-image.webp",
    },
    {
      name: "AK bakelite pistol grip (6P4 Sb.9)",
      description:
        "A bakelite Izhmash-manufatured pistol grip for the AK automatic rifles and compatible weapon systems.",
      image:
        "https://assets.tarkov.dev/57e3dba62459770f0c32322b-grid-image.webp",
    },
    {
      name: "PP-91 Kedr Rotor 43 RIS mount",
      description: "A RIS mount for PP-91 Kedr SMG, manufactured by Rotor 43.",
      image:
        "https://assets.tarkov.dev/57ee59b42459771c7b045da5-grid-image.webp",
    },
    {
      name: "PSO scope eyecup",
      description: "A rubber eyecup for the PSO scopes family.",
      image:
        "https://assets.tarkov.dev/57f3a5ae2459772b0e0bf19e-grid-image.webp",
    },
    {
      name: "PP-91-01 Kedr-B 9x18PM submachine gun",
      description:
        "A rare silenced version of the PP-91 Kedr submachine gun, denominated as PP-91-01 Kedr-B.",
      image:
        "https://assets.tarkov.dev/57f3c6bd24597738e730fa2f-grid-image.webp",
    },
    {
      name: "PP-91-01 Kedr-B threaded suppressor adapter",
      description:
        "A muzzle thread piece for the PP-91-01 Kedr-B submachine gun with an expansion chamber, allows installation of sound suppressors.",
      image:
        "https://assets.tarkov.dev/57f3c7e024597738ea4ba286-grid-image.webp",
    },
    {
      name: "PP-91-01 Kedr-B 9x18PM sound suppressor",
      description:
        "A standard-issue detachable PP-91-01 Kedr-B 9x18PM sound suppressor. It can be removed for compact carrying purposes.",
      image:
        "https://assets.tarkov.dev/57f3c8cc2459773ec4480328-grid-image.webp",
    },
    {
      name: "PP-9 Klin 9x18PMM submachine gun",
      description:
        "The PP-9 Klin is a further evolution of the Kedr submachine gun. It has a higher rate of fire and its chamber is designed to use the 9x18 PMM cartridge. It was produced from 1996 to 2002 by order of the Ministry of Internal Affairs.",
      image:
        "https://assets.tarkov.dev/57f4c844245977379d5c14d1-grid-image.webp",
    },
    {
      name: "Holosun LS321 Tactical device",
      description:
        "Holosun LS321 is a multi-laser tactical device with green laser in the visible light spectrum, IR laser and IR searchlight.",
      image:
        "https://assets.tarkov.dev/57fd23e32459772d0805bcf1-grid-image.webp",
    },
    {
      name: "AKS-74U Zenit B-11 handguard",
      description:
        "The integrally machined B-11 foregrip is manufactured from aluminum alloy D16T with black coating and can be installed instead of the standard-issue foregrip on the AKS-74U. The foregrip is fitted with Picatinny rail mounts on three sides, allowing for the installation of additional equipment such as tactical foregrips, flashlights, and laser designators. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/57ffa9f4245977728561e844-grid-image.webp",
    },
    {
      name: "AK Zenit B-12 Mount",
      description:
        "The B-12 gas tube overhanging rail mount is installed on the side rail of the B-11 or B-10 handguards and provides a weapon with means of installing a complex of sights and tactical devices by forming rail mounts over the weapon's gas tube and on the side of the handguard. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/57ffaea724597779f52b3a4d-grid-image.webp",
    },
    {
      name: "AKS-74U Zenit B-18 Mount",
      description:
        "The B-18 rail mount is installed on the standard rear sight of AKS-74U and forms a sight support hovering over the rifle dust cover. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/57ffb0062459777a045af529-grid-image.webp",
    },
    {
      name: "AKS-74U PBS-4 5.45x39 sound suppressor",
      description:
        "The PBS-4 (Pribór Besshúmnoy Strel'bý - Silent Firing Device) sound suppressor, manufactured by TsNIITochMash for use as a part of the Canary assault rifle grenade launcher system.",
      image:
        "https://assets.tarkov.dev/57ffb0e42459777d047111c5-grid-image.webp",
    },
    {
      name: "SOK-12 Leapers UTG PRO MTU002 Long Top aluminum handguard",
      description:
        "The UTG PRO MTU002 Long Top Tactical Quad Rail is a lightweight aircraft grade aluminum handguard with a sling swivel, designed for installation on Saiga carbines. Manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/5827272a24597748c74bdeea-grid-image.webp",
    },
    {
      name: "SOK-12 Leapers UTG PRO MTU002 Short Top aluminum handguard",
      description:
        "The UTG PRO MTU002 Tactical Quad Rail Short Top is a lightweight aircraft grade aluminum handguard with sling swivel, designed for installation on Saiga carbines. Manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/58272b392459774b4c7b3ccd-grid-image.webp",
    },
    {
      name: "SOK-12 CSS rear sight rail mount",
      description:
        "This sight rail mount allows installation of various sights instead of the Saiga carbines standard-issue fixed rear sight.",
      image:
        "https://assets.tarkov.dev/58272b842459774abc128d50-grid-image.webp",
    },
    {
      name: "GK-02 12ga muzzle brake",
      description:
        "The Ilyin GK-02 muzzle brake is a modernized and improved version of Vsevolod Ilyin's muzzle brake, with enhanced recoil and muzzle climb reduction capabilities.",
      image:
        "https://assets.tarkov.dev/58272d7f2459774f6311ddfd-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UN 5.45x39 assault rifle",
      description:
        "AKS-74UN (Avtomat Kalashnikova Skladnoy 74 Ukorochenny Nochnoy - Kalashnikov's Shortened Automatic rifle 74 Night with a foldable stock) is a shortened version of the AKS-74 assault rifle, developed in the early 80s for combat vehicle crews and airborne troops, also became very popular with law enforcement and special forces for its compact size. The N (Nochnoy - Night) version is equipped with a dovetail mount for the installation of night vision scopes.",
      image:
        "https://assets.tarkov.dev/583990e32459771419544dd2-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UB 5.45x39 assault rifle",
      description:
        "A special version of the AKS-74U assault rifle, modification B (Besshumny - Silenced) is issued with a dovetail scope mount, a sound suppressor device, and special sights designed for firing subsonic ammunition.",
      image:
        "https://assets.tarkov.dev/5839a40f24597726f856b511-grid-image.webp",
    },
    {
      name: "AKS-74UB dust cover",
      description:
        "A standard-issue dust cover for AKS-74UB automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5839a7742459773cf9693481-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74N 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5841474424597759ba49be91-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74U 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/584147732459775a2b6d9f12-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UB 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/584147982459775a6c55e931-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UN 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/584147ed2459775a77263501-grid-image.webp",
    },
    {
      name: "AS VAL 9x39 special assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5841482e2459775a050cdda9-grid-image.webp",
    },
    {
      name: "Yarygin MP-443 Grach 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/584148a524597759eb357a44-grid-image.webp",
    },
    {
      name: "MP-133 12ga pump-action shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/584148f2245977598f1ad387-grid-image.webp",
    },
    {
      name: "MP-153 12ga semi-automatic shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414907245977598f1ad38d-grid-image.webp",
    },
    {
      name: "SIG P226R 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/584149242459775a7726350a-grid-image.webp",
    },
    {
      name: "PB 9x18PM silenced pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/584149452459775992479702-grid-image.webp",
    },
    {
      name: "Makarov PM 9x18PM pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414967245977598f1ad391-grid-image.webp",
    },
    {
      name: "Makarov PM (t) 9x18PM pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5841499024597759f825ff3e-grid-image.webp",
    },
    {
      name: "PP-9 Klin 9x18PMM submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/584149ad2459775a7726350e-grid-image.webp",
    },
    {
      name: "PP-91 Kedr 9x18PM submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/584149c42459775a77263510-grid-image.webp",
    },
    {
      name: "PP-91-01 Kedr-B 9x18PM submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/584149ea2459775a6c55e940-grid-image.webp",
    },
    {
      name: "Saiga 12ga ver.10 12/76 semi-automatic shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414a052459775a2b6d9f1e-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R bolt-action sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414a16245977599247970a-grid-image.webp",
    },
    {
      name: "TT-33 7.62x25 TT pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414a2724597759b344da4d-grid-image.webp",
    },
    {
      name: "VSS Vintorez 9x39 special sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/58414a3f2459775a77263531-grid-image.webp",
    },
    {
      name: "EOTech XPS3-0 holographic sight",
      description:
        "XPS3 is more compact than the other holographic sights, but just as effective. Moreover, such approach leaves more mounting space for additional equipment. Both hunters and armed forces operatives value it for small size and weight, which are particularly noticeable over long missions. The model 3-0 features a single-dot reticle of 1 MOA.",
      image:
        "https://assets.tarkov.dev/58491f3324597764bc48fa02-grid-image.webp",
    },
    {
      name: "EOTech XPS3-2 holographic sight",
      description:
        "XPS3 is more compact than the other holographic sights, but just as effective; moreover, such approach leaves more mounting space for additional equipment. Both hunters and armed forces operatives value it for small size and weight, which are particularly noticeable over long missions. The model 3-2 features a two-dot reticle of 1 MOA.",
      image:
        "https://assets.tarkov.dev/584924ec24597768f12ae244-grid-image.webp",
    },
    {
      name: "VOMZ Pilad P1x42 Weaver reflex sight",
      description:
        "An open-type reflex sight designed for precision aiming of sport and hunting weapons at different types of targets, including the fast-moving ones. Manufactured by VOMZ.",
      image:
        "https://assets.tarkov.dev/584984812459776a704a82a6-grid-image.webp",
    },
    {
      name: "Secure container Beta",
      description:
        "A medium-sized secure container used by PMCs formerly deployed in Tarkov.",
      image:
        "https://assets.tarkov.dev/5857a8b324597729ab0a0e7d-grid-image.webp",
    },
    {
      name: "Secure container Gamma",
      description:
        "A unique secure container used only by veteran PMCs formerly deployed in Tarkov.",
      image:
        "https://assets.tarkov.dev/5857a8bc2459772bad15db29-grid-image.webp",
    },
    {
      name: "P226 9x19 threaded barrel",
      description:
        "A standard-issue threaded barrel for SIG Sauer P226 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/587de4282459771bca0ec90b-grid-image.webp",
    },
    {
      name: "P226 thread protection cap",
      description: "A threading protection cap for the P226 9x19 barrel.",
      image:
        "https://assets.tarkov.dev/587de5ba2459771c0f1e8a58-grid-image.webp",
    },
    {
      name: "SKS 7.62x39 10-round internal box magazine",
      description:
        "A standard 7.62x39 10-round magazine designed for the SKS carbine. The magazine is installed into the rifle internally and cannot be ejected on the spot, so it's not recommended to take multiple of them into a raid.",
      image:
        "https://assets.tarkov.dev/587df3a12459772c28142567-grid-image.webp",
    },
    {
      name: "SKS 7.62x39 ProMag SKS-A5 20-round magazine",
      description:
        "A 20-round polymer detachable SKS magazine for 7.62x39 cartridges.",
      image:
        "https://assets.tarkov.dev/587df583245977373c4f1129-grid-image.webp",
    },
    {
      name: "Simonov OP-SKS 7.62x39 carbine (Hunting Rifle Version)",
      description:
        "Molot OP-SKS Carbine is designed for loading with 7,62x39 — the most popular ammunition. The weight and dimensions make the carbine ergonomic for shooters of any age and height. It has been used for all types of traditional Russian hunting for more than 50 years. Tested on predators in Africa, Southeast Asia, Central America, Middle East.",
      image:
        "https://assets.tarkov.dev/587e02ff24597743df3deaeb-grid-image.webp",
    },
    {
      name: "OP-SKS wooden stock",
      description:
        "A standard-issue wooden stock for OP-SKS carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/587e0531245977466077a0f7-grid-image.webp",
    },
    {
      name: "OP-SKS dovetail mount",
      description:
        "A mount for installation of sights and other additional devices on the OP-SKS carbines.",
      image:
        "https://assets.tarkov.dev/587e08ee245977446b4410cf-grid-image.webp",
    },
    {
      name: "MP-153 12ga 610mm barrel",
      description:
        "A standard factory-produced 610mm barrel for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/588200af24597742fa221dfb-grid-image.webp",
    },
    {
      name: "MP-153 12ga 660mm barrel",
      description:
        "A standard factory-produced 660mm barrel for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/588200c224597743990da9ed-grid-image.webp",
    },
    {
      name: "MP-153 12ga 710mm barrel",
      description:
        "A standard factory-produced 710mm barrel for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/588200cf2459774414733d55-grid-image.webp",
    },
    {
      name: "12/70 lead slug",
      description: "A 12/70 slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/58820d1224597753c90aeb13-grid-image.webp",
    },
    {
      name: "MP-153 12ga 7-shell magazine",
      description:
        "A 7-shell magazine extension tube for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5882163224597757561aa920-grid-image.webp",
    },
    {
      name: "MP-153 12ga 6-shell magazine",
      description:
        "A 6-shell magazine extension tube for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5882163824597757561aa922-grid-image.webp",
    },
    {
      name: "MP-153 12ga 5-shell magazine",
      description:
        "A 5-shell magazine extension tube for MP-153 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5882163e24597758206fee8c-grid-image.webp",
    },
    {
      name: "Magpul AFG tactical foregrip (Black)",
      description:
        "The Magpul AFG (Angled Fore Grip) tactical grip enables a more natural grip against the barrel axis. Thanks to that, recoil is reduced and weapon control is improved. Black version.",
      image:
        "https://assets.tarkov.dev/588226d124597767ad33f787-grid-image.webp",
    },
    {
      name: "Magpul AFG tactical foregrip (FDE)",
      description:
        "The Magpul AFG (Angled Fore Grip) tactical grip enables a more natural grip against the barrel axis. Thanks to that, recoil is reduced and weapon control is improved. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/588226dd24597767ad33f789-grid-image.webp",
    },
    {
      name: "Magpul AFG tactical foregrip (Forest Green)",
      description:
        "The Magpul AFG (Angled Fore Grip) tactical grip enables a more natural grip against the barrel axis. Thanks to that, recoil is reduced and weapon control is improved. Forest Green version.",
      image:
        "https://assets.tarkov.dev/588226e62459776e3e094af7-grid-image.webp",
    },
    {
      name: "Magpul AFG tactical foregrip (Olive Drab)",
      description:
        "The Magpul AFG (Angled Fore Grip) tactical grip enables a more natural grip against the barrel axis. Thanks to that, recoil is reduced and weapon control is improved. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/588226ef24597767af46e39c-grid-image.webp",
    },
    {
      name: "9x19mm PSO gzh",
      description:
        "A 9x19mm Parabellum PSO gzh cartridge with a 7.5 gram bullet in a bimetallic case; intended for sport shooting and hunting. Despite the low muzzle velocity of the bullet, it has considerable stopping power effect, thanks to its exceptional expansion capability after hitting the target.",
      image:
        "https://assets.tarkov.dev/58864a4f2459770fcc257101-grid-image.webp",
    },
    {
      name: "7.62x54mm R LPS gzh",
      description:
        "A 7.62x54mm R LPS gzh (GRAU Index - 57-N-323S) cartridge with a 9.6 gram steel core bullet with a lead cladding and a bimetallic jacket, in a bimetallic case. The LPS cartridge (Lyógkaya Púlya so Stal'ným serdéchnikom - Light Steel core Bullet) was introduced into service in 1953 for Soviet 7.62x54mm R caliber weaponry, and over the years has undergone numerous changes in the materials used for its construction. Thanks to its steel core, it is capable of piercing through basic and intermediate ballistic body protections in addition to providing a considerable stopping power effect, however, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5887431f2459777e1612938f-grid-image.webp",
    },
    {
      name: "Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle",
      description:
        "DVL-10 is a lightweight, compact, and silenced rifle in proprietary and current military subsonic calibers. Developed for special service and combat missions where exceptional accuracy and range are needed. Equipped with a standard Lobaev Arms foldable buttstock and Lobaev Hummer Barrels stainless steel match-grade barrel.",
      image:
        "https://assets.tarkov.dev/588892092459774ac91d4b11-grid-image.webp",
    },
    {
      name: "DVL-10 7.62x51 500mm barrel",
      description:
        "A 500 mm long 7.62x51 match-grade stainless steel barrel with an integral sound suppressor manufactured by LOBAEV Hummer Barrels for the DVL-10 sniper rifle.",
      image:
        "https://assets.tarkov.dev/5888945a2459774bf43ba385-grid-image.webp",
    },
    {
      name: "DVL-10 M2 7.62x51 660mm barrel",
      description:
        "A 660mm long 7.62x51 match-grade stainless steel barrel manufactured by LOBAEV Hummer Barrels for the DVL-10 M2 sniper rifle.",
      image:
        "https://assets.tarkov.dev/5888956924597752983e182d-grid-image.webp",
    },
    {
      name: "Harris HBR Bipod",
      description:
        "The Harris HBR ultralight foldable bipod with a spring retraction mechanism. Used by service operators and civilian shooters worldwide.",
      image:
        "https://assets.tarkov.dev/5888961624597754281f93f3-grid-image.webp",
    },
    {
      name: "DVL-10 M2 handguard",
      description:
        "A standard-issue handguard for the DVL-10 M2 sniper rifle, manufactured by Lobaev Arms.",
      image:
        "https://assets.tarkov.dev/5888976c24597754281f93f5-grid-image.webp",
    },
    {
      name: "DVL-10 7.62x51 10-round magazine",
      description:
        "A standard-issue DVL-10 sniper rifle magazine by Lobaev Arms, for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5888988e24597752fe43a6fa-grid-image.webp",
    },
    {
      name: "DVL-10 M2 7.62x51 muzzle brake",
      description:
        "A standard-issue DVL-10 M2 sniper rifle muzzle brake, manufactured by Lobaev Arms.",
      image:
        "https://assets.tarkov.dev/5888996c24597754281f9419-grid-image.webp",
    },
    {
      name: "DVL-10 7.62x51 muzzle device",
      description:
        "A standard-issue muzzle device for the DVL-10 sniper rifle, manufactured by Lobaev Arms.",
      image:
        "https://assets.tarkov.dev/58889c7324597754281f9439-grid-image.webp",
    },
    {
      name: "Lobaev Arms stock",
      description:
        "A standard-issue universal stock for sniper rifles manufactured by Lobaev Arms.",
      image:
        "https://assets.tarkov.dev/58889d0c2459775bc215d981-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 9.5 handguard (Black)",
      description:
        "The Daniel Defense RIS II 9.5 foregrip is a part of the SOPMOD Block II program to replace the standard M4CQBR or Mk18 foregrips in the US SOCOM service. It's made with light but durable aircraft aluminum alloy and comes equipped with 4 mounts for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/588b56d02459771481110ae2-grid-image.webp",
    },
    {
      name: "SIG MPX 9x19 submachine gun",
      description:
        "The SIG Sauer MPX submachine gun boasts an unprecedented operation speed in the familiar form factor of the AR platform. Short-stroke gas piston allows SIG MPX to use the full range of 9 mm ammunition without any adjustments to the gas valve. The full-sized mount provides the means of installing a wide range of scopes and sighting devices.",
      image:
        "https://assets.tarkov.dev/58948c8e86f77409493f7266-grid-image.webp",
    },
    {
      name: "MPX A2 9x19 flash hider",
      description:
        "The A2 Bird Cage flash hider, designed for installation on MPX 9x19 SMGs, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/58949dea86f77409483e16a8-grid-image.webp",
    },
    {
      name: "MPX double latch charging handle",
      description:
        "A retracting handle with two latches for MPX-based weapons. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/58949edd86f77409483e16a9-grid-image.webp",
    },
    {
      name: "MPX single latch charging handle",
      description:
        "A retracting handle with one latch for MPX-based weapons. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/58949fac86f77409483e16aa-grid-image.webp",
    },
    {
      name: "MPX 9x19 30-round magazine",
      description:
        "A standard 30-round capacity semitransparent 9x19mm MPX magazine, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a05586f774094708ef75-grid-image.webp",
    },
    {
      name: "MPX/MCX collapsing/telescoping stock",
      description:
        "A telescopic retractable stock for early issues of MCX/MPX manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a13e86f7742405482982-grid-image.webp",
    },
    {
      name: "MPX 9x19 203mm barrel",
      description:
        "A 203mm long barrel for MPX-based weapons chambered for 9x19 ammunition.",
      image:
        "https://assets.tarkov.dev/5894a2c386f77427140b8342-grid-image.webp",
    },
    {
      name: "MPX GEN1 handguard",
      description:
        "A 1st generation handguard for the SIG MPX submachine gun. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a42086f77426d2590762-grid-image.webp",
    },
    {
      name: "MPX pistol grip",
      description:
        "A polymer MPX pistol grip is fit for installation on the first and second generations of MPX. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a51286f77426d13baf02-grid-image.webp",
    },
    {
      name: "MPX GEN1 9x19 upper receiver",
      description:
        "A 1st generation upper receiver for the SIG MPX submachine gun, manufactured by SIG Sauer. Features a mount for attaching additional equipment.",
      image:
        "https://assets.tarkov.dev/5894a5b586f77426d2590767-grid-image.webp",
    },
    {
      name: "MPX flip-up front sight",
      description:
        "A detachable flip-up front sight for MPX SMGs, installed on the mount. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a73486f77426d259076c-grid-image.webp",
    },
    {
      name: "MPX flip-up rear sight",
      description:
        "A detachable flip-up rear sight for MPX SMGs, installed on the mount. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5894a81786f77427140b8347-grid-image.webp",
    },
    {
      name: "MPX GEN1 handguard 2 inch rail",
      description:
        "The 2 inch SIG Sauer GEN1 handguard rail adapter allows you to install additional equipment on the 1st generation SIG MPX handguard.",
      image:
        "https://assets.tarkov.dev/58a56f8d86f774651579314c-grid-image.webp",
    },
    {
      name: "MPX GEN1 handguard 4 inch rail",
      description:
        "The 4 inch SIG Sauer GEN1 handguard rail adapter allows you to install additional equipment on the 1st generation SIG MPX handguard.",
      image:
        "https://assets.tarkov.dev/58a5c12e86f7745d585a2b9e-grid-image.webp",
    },
    {
      name: "MPX/MCX retractable stock pipe adapter",
      description:
        "An adapter for attaching telescopic tube stocks to the rail mount, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/58ac1bf086f77420ed183f9f-grid-image.webp",
    },
    {
      name: "MPX-SD 9x19 165mm barrel",
      description:
        "A special 165mm long barrel for the MPX-SD. Chambered for 9x19 ammunition.",
      image:
        "https://assets.tarkov.dev/58aeaaa886f7744fc1560f81-grid-image.webp",
    },
    {
      name: "MPX-SD 9x19 integrated sound suppressor",
      description:
        "An integrated sound suppressor manufactured by SIG Sauer for the special silent version of the MPX, designated as MPX-SD.",
      image:
        "https://assets.tarkov.dev/58aeac1b86f77457c419f475-grid-image.webp",
    },
    {
      name: "TangoDown Stubby BGV-MK46K foregrip (FDE)",
      description:
        "The TangoDown Stubby BGV-MK46K tactical grip is a short grip for use with weapons in close and extra close quarters combat. It ideally fits assault shotguns and also contains a compartment for batteries or SPTA. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/58c157be86f77403c74b2bb6-grid-image.webp",
    },
    {
      name: "TangoDown Stubby BGV-MK46K foregrip (Stealth Gray)",
      description:
        "The TangoDown Stubby BGV-MK46K tactical grip is a short grip for use with weapons in close and extra close quarters combat. It ideally fits assault shotguns and also contains a compartment for batteries or SPTA. Stealth Gray version.",
      image:
        "https://assets.tarkov.dev/58c157c886f774032749fb06-grid-image.webp",
    },
    {
      name: "DeltaPoint Cross Slot Mount base",
      description:
        "A universal base for mounting compact sights of the Leupold DeltaPoint series on Weaver rails.",
      image:
        "https://assets.tarkov.dev/58d2664f86f7747fec5834f6-grid-image.webp",
    },
    {
      name: "Leupold DeltaPoint Reflex Sight",
      description:
        "The DeltaPoint compact reflex sight by Leupold knows almost no limits in the range of application. Originally designed for use on pump-action shotguns in competitions and practical shooting, it was recognized for good performance on a wide range of weapons. From shotguns and handguns to AR-based rifles, as a main or auxiliary sight, it will show excellent results.",
      image:
        "https://assets.tarkov.dev/58d268fc86f774111273f8c2-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine rubber buttpad",
      description:
        "A standard rubber butt-pad for the Magpul MOE Carbine stock series. However, it can also be installed on other models of the series.",
      image:
        "https://assets.tarkov.dev/58d2912286f7744e27117493-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine stock (FDE)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/58d2946386f774496974c37e-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine stock (Foliage Green)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Foliage Green version.",
      image:
        "https://assets.tarkov.dev/58d2946c86f7744e271174b5-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine stock (Olive Drab)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/58d2947686f774485c6a1ee5-grid-image.webp",
    },
    {
      name: "Magpul MOE Carbine stock (Stealth Gray)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Stealth Gray version.",
      image:
        "https://assets.tarkov.dev/58d2947e86f77447aa070d53-grid-image.webp",
    },
    {
      name: "Aimpoint Micro T-1 reflex sight",
      description:
        "The Micro T-1 compact reflex sight by Aimpoint was designed for use with any kind of firearms and even with bows. Lightweight, compact, and durable.",
      image:
        "https://assets.tarkov.dev/58d399e486f77442e0016fe7-grid-image.webp",
    },
    {
      name: "Aimpoint Micro Spacer High",
      description:
        "The Micro Spacer High mount raises the height of the optical axis. Made to work with the Aimpoint Micro red dot sights.",
      image:
        "https://assets.tarkov.dev/58d39b0386f77443380bf13c-grid-image.webp",
    },
    {
      name: "Aimpoint Micro Standard Mount",
      description:
        "The Aimpoint Micro Standard Mount base for T-1 and H-1 reflex sights of the Micro series.",
      image:
        "https://assets.tarkov.dev/58d39d3d86f77445bb794ae7-grid-image.webp",
    },
    {
      name: "M67 hand grenade",
      description:
        "M67 Fragmentation Hand Grenade is an American hand grenade, designed for antipersonnel combat purposes and adopted in 1969 by the army of the United States.",
      image:
        "https://assets.tarkov.dev/58d3db5386f77426186285a0-grid-image.webp",
    },
    {
      name: "7.62x51mm M80",
      description:
        "A 7.62x51mm NATO M80 cartridge with a 9.5 gram lead-antimony alloy core bullet with a bimetallic jacket, in a brass case. This cartridge was adopted in the United States Armed Forces as a replacement for the 7.62x51mm NATO M59 cartridge after the Vietnam War as standard ammunition, as it provides a considerable stopping power effect as well as being able to pierce through basic and intermediate body ballistic protections. However, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/58dd3ad986f77403051cba8f-grid-image.webp",
    },
    {
      name: "Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle Urbana",
      description: "null",
      image:
        "https://assets.tarkov.dev/58dffc5d86f77407c744a847-grid-image.webp",
    },
    {
      name: "SIG MPX 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/58dffca786f774083a256ab1-grid-image.webp",
    },
    {
      name: "Simonov SKS 7.62x39 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/58dffce486f77409f40f8162-grid-image.webp",
    },
    {
      name: "SIG MPX 9x19 submachine gun Silenced",
      description: "null",
      image:
        "https://assets.tarkov.dev/58dffd4586f77408a27629b2-grid-image.webp",
    },
    {
      name: "Woods plan map",
      description: "A paper plan map of Priozersk Natural Reserve.",
      image:
        "https://assets.tarkov.dev/5900b89686f7744e704a8747-grid-image.webp",
    },
    {
      name: "USB Adapter",
      description:
        "A battery charger with a USB output. Used to be an indispensable household item.",
      image:
        "https://assets.tarkov.dev/5909e99886f7740c983b9984-grid-image.webp",
    },
    {
      name: "Rechargeable battery",
      description:
        "A chemical source of electric current, reusable source of voltage, characterized by the reversibility of internal chemical processes that ensures its repeated cyclic use (via charge-discharge) for energy accumulation and autonomous power supply of various electrical devices and equipment, as well as providing backup power sources in medicine, manufacturing and other areas.",
      image:
        "https://assets.tarkov.dev/590a358486f77429692b2790-grid-image.webp",
    },
    {
      name: "Dry fuel",
      description:
        "Dry fuel - in household use it is commonly referred to as dry alcohol. Dry fuel consists of urotropine pressed with a small amount of wax. Typically used for heating or cooking food in field conditions by tourists, military and rescue organizations.",
      image:
        "https://assets.tarkov.dev/590a373286f774287540368b-grid-image.webp",
    },
    {
      name: "Damaged hard drive",
      description:
        "A random access storage device (information storage device), based on the magnetic recording principle. Serves as the main data drive in most computers. Hardware specialists use broken disks to salvage the controllers and magnets for re-use in other electronics.",
      image:
        "https://assets.tarkov.dev/590a386e86f77429692b27ab-grid-image.webp",
    },
    {
      name: "Magnet",
      description:
        "A handcrafted magnet. It's extremely rare, considering the total deficit of working electronics and parts for electric motors.",
      image:
        "https://assets.tarkov.dev/590a391c86f774385a33c404-grid-image.webp",
    },
    {
      name: "Printed circuit board",
      description:
        "A universal component in microelectronics. An essential resource for maintaining electronic systems.",
      image:
        "https://assets.tarkov.dev/590a3b0486f7743954552bdb-grid-image.webp",
    },
    {
      name: "Spark plug",
      description:
        "Spark plugs are used for gasoline internal combustion engines. Ignition of the fuel-air mixture is produced by electric discharge with a voltage of several thousand or tens of thousands of volts, emerging between the electrodes. The plug fires on each round, at one point of the engine operating cycle.",
      image:
        "https://assets.tarkov.dev/590a3c0a86f774385a33c450-grid-image.webp",
    },
    {
      name: "Energy-saving lamp",
      description:
        "An electric lamp with substantially greater luminous efficiency (the ratio of luminous flux and power consumption), for example, in comparison with filament lamps which are still rather common. Thanks to that, the replacement of incandescent light bulbs with energy-saving ones saves energy, protecting the environment.",
      image:
        "https://assets.tarkov.dev/590a3cd386f77436f20848cb-grid-image.webp",
    },
    {
      name: "Ultraviolet lamp",
      description:
        "A UV lamp for household use is a type of light bulb which source of light is invisible to the human eye, located on the border of the purple spectrum and x-ray radiation. UV radiation has beneficial effects on all the systems of human and animal bodies, contributing to the development of a strong defensive system against viral and infectious diseases, such as seasonal colds.",
      image:
        "https://assets.tarkov.dev/590a3d9c86f774385926e510-grid-image.webp",
    },
    {
      name: "Gas analyzer",
      description:
        "A measuring device for determining the qualitative and quantitative composition of gas mixtures. It has a very wide range of applications - in environmental protection, internal combustion engines management systems, and medicine.",
      image:
        "https://assets.tarkov.dev/590a3efd86f77437d351a25b-grid-image.webp",
    },
    {
      name: "Pliers",
      description: "A tool for capturing, manipulating, and cutting wire.",
      image:
        "https://assets.tarkov.dev/590c2b4386f77425357b6123-grid-image.webp",
    },
    {
      name: "Construction measuring tape",
      description:
        "A tool designed to measure length. Indispensable in construction and renovation.",
      image:
        "https://assets.tarkov.dev/590c2c9c86f774245b1f03f2-grid-image.webp",
    },
    {
      name: "Screwdriver",
      description:
        "A manual bench work tool designed for screwing and unscrewing threaded fasteners, most commonly screws that have spline on their heads. Usually it’s a metal rod with a tip and grip (plastic or wood).",
      image:
        "https://assets.tarkov.dev/590c2d8786f774245b1f03f3-grid-image.webp",
    },
    {
      name: "Toolset",
      description: "A repairman’s bag with a set of different tools.",
      image:
        "https://assets.tarkov.dev/590c2e1186f77425357b6124-grid-image.webp",
    },
    {
      name: "Wrench",
      description:
        "A twin-head wrench. Despite the simplicity of design, the wrench is used in almost all areas of technology to build mechanisms of various levels of difficulty.",
      image:
        "https://assets.tarkov.dev/590c311186f77424d1667482-grid-image.webp",
    },
    {
      name: "Pack of nails",
      description:
        "A package of construction nails. In conditions of continuing crisis they are used for construction of temporary shelters, bunkhouses, and other assembly.",
      image:
        "https://assets.tarkov.dev/590c31c586f774245e3141b2-grid-image.webp",
    },
    {
      name: "Xenomorph sealing foam",
      description:
        "Xenomorph is a sealing foam with an excellent structure of cells and high mechanical strength. Easy to use, applied with a thin applicator tube. Foam is an expandable material that doubles its volume on solidification. Has excellent adhesion to most building materials such as wood, concrete, stone, metal, etc. This product does not contain any chloro-fluoro-carbon propellants. A reliable and cost-effective solution for sealing and filling the voids.",
      image:
        "https://assets.tarkov.dev/590c346786f77423e50ed342-grid-image.webp",
    },
    {
      name: "Shustrilo sealing foam",
      description:
        "Shustrilo is a professional premium sealing foam for use with a foam pistol. Distinguished by high output of foam from a cylinder, improved parameters of strength, stability, etc. Highest quality of Shustrilo products ensures guaranteed work results.",
      image:
        "https://assets.tarkov.dev/590c35a486f774273531c822-grid-image.webp",
    },
    {
      name: "SAS drive",
      description:
        "A reinforced case with an SAS hard drive. Used for data storage in military industry.",
      image:
        "https://assets.tarkov.dev/590c37d286f77443be3d7827-grid-image.webp",
    },
    {
      name: "SSD drive",
      description:
        "A solid state drive. Used to store data with enhanced read and write performance.",
      image:
        "https://assets.tarkov.dev/590c392f86f77444754deb29-grid-image.webp",
    },
    {
      name: "Gas mask air filter",
      description:
        "The GP-7k FPK filter in a metal case for the GP-7 gas mask.",
      image:
        "https://assets.tarkov.dev/590c595c86f7747884343ad7-grid-image.webp",
    },
    {
      name: "Gunpowder Kite",
      description:
        "A tin with gunpowder. An essential resource for creating weapon cartridges. The composition of the Kite gunpowder is distinguished by the use of pyroxylin with presence of graphite, which is necessary to reduce the electrification of the mixture.",
      image:
        "https://assets.tarkov.dev/590c5a7286f7747884343aea-grid-image.webp",
    },
    {
      name: "WD-40 (100ml)",
      description:
        "Initially, this agent was developed for industrial consumers as an anti-corrosive water repellent. It was later discovered that it also had plenty of domestic use applications. According to the legend, the product's formula was developed on the fortieth attempt (WD-40 as short for Water Displacement - 40th Attempt). The product consists mostly of various hydrocarbons.",
      image:
        "https://assets.tarkov.dev/590c5bbd86f774785762df04-grid-image.webp",
    },
    {
      name: "WD-40 (400ml)",
      description:
        "Initially, this agent was developed for industrial consumers as an anti-corrosive water repellent. It was later discovered that it also had plenty of domestic use applications. According to legend, the product's formula was developed on the fortieth attempt (WD-40 as short for Water Displacement-40th Attempt). The product consists mostly of various hydrocarbons.",
      image:
        "https://assets.tarkov.dev/590c5c9f86f77477c91c36e7-grid-image.webp",
    },
    {
      name: "Iskra ration pack",
      description:
        "The compact package of a field ration includes everything you need for a comfortable nutrition of an adult person in the most difficult conditions.",
      image:
        "https://assets.tarkov.dev/590c5d4b86f774784e1b9c45-grid-image.webp",
    },
    {
      name: "MRE ration pack",
      description:
        "MRE (Meal, Ready-to-Eat) is an individual daily food ration developed for the United States Army. MRE packaging is designed for harsh operating conditions and protection from weather exposure, which allows not to worry about storage conditions. Contains a lot of different products to quench your hunger in the field conditions.",
      image:
        "https://assets.tarkov.dev/590c5f0d86f77413997acfab-grid-image.webp",
    },
    {
      name: "Documents case",
      description: "A leather field case for document and map storage.",
      image:
        "https://assets.tarkov.dev/590c60fc86f77412b13fddcf-grid-image.webp",
    },
    {
      name: "Secure Flash drive",
      description:
        "A secure flash drive. Such USB sticks are frequently used by TerraGroup employees. They can definitely contain sensitive data.",
      image:
        "https://assets.tarkov.dev/590c621186f774138d11ea29-grid-image.webp",
    },
    {
      name: "Tech manual",
      description: "A manual with technical documentation.",
      image:
        "https://assets.tarkov.dev/590c639286f774151567fa95-grid-image.webp",
    },
    {
      name: "Diary",
      description:
        "A diary with a leather cover. Covered with various names, addresses and phone numbers. Somebody might find it particularly useful.",
      image:
        "https://assets.tarkov.dev/590c645c86f77412b01304d9-grid-image.webp",
    },
    {
      name: "Slim diary",
      description:
        "A diary with a leather cover. Covered with various names, addresses and phone numbers. Somebody might find it particularly useful.",
      image:
        "https://assets.tarkov.dev/590c651286f7741e566b6461-grid-image.webp",
    },
    {
      name: "Grizzly medical kit",
      description:
        "Sportsman Series Grizzly Medical Kit is considered one of the best first aid kits. It contains everything necessary to provide immediate medical care in extreme conditions.",
      image:
        "https://assets.tarkov.dev/590c657e86f77412b013051d-grid-image.webp",
    },
    {
      name: "Car first aid kit",
      description:
        "Like a fire extinguisher, car first aid kit is crucially important protection measure in the event of an emergency on the road.",
      image:
        "https://assets.tarkov.dev/590c661e86f7741e566b646a-grid-image.webp",
    },
    {
      name: "IFAK individual first aid kit",
      description:
        "IFAK is a personal medical kit issued to soldiers in service. The official first aid kit in the U.S. Marine Corps IFAK (Individual First Aid Kit of the United States Marine Corps). The latest, third-generation (gen3), the most well-designed and rich in contents.",
      image:
        "https://assets.tarkov.dev/590c678286f77426c9660122-grid-image.webp",
    },
    {
      name: "Augmentin antibiotic pills",
      description:
        "Augmentin is a complex versatile antibiotic used to treat bacterial infections.",
      image:
        "https://assets.tarkov.dev/590c695186f7741e566b64a2-grid-image.webp",
    },
    {
      name: "Antique teapot",
      description:
        "An item from a rare collection of antique silver tea service set.",
      image:
        "https://assets.tarkov.dev/590de71386f774347051a052-grid-image.webp",
    },
    {
      name: "Antique vase",
      description:
        "A porcelain vase from a private collection. In theory, can serve as a beer pitcher.",
      image:
        "https://assets.tarkov.dev/590de7e986f7741b096e5f32-grid-image.webp",
    },
    {
      name: "Body armor repair kit",
      description:
        "A bag with everything you need to repair body armor - from the lightest to the heaviest.",
      image:
        "https://assets.tarkov.dev/591094e086f7747caa7bb2ef-grid-image.webp",
    },
    {
      name: "Weapon repair kit",
      description:
        "A set of tools and devices necessary to maintain firearms in operational condition.",
      image:
        "https://assets.tarkov.dev/5910968f86f77425cf569c32-grid-image.webp",
    },
    {
      name: "Trailer park portable cabin key",
      description:
        "A key to one of the portable on-site guard cabins at the trailer park on Customs.",
      image:
        "https://assets.tarkov.dev/5913611c86f77479e0084092-grid-image.webp",
    },
    {
      name: "VAZ car key",
      description:
        "A key to one of the VAZ cars commonly known as Shestyorka (the sixth one).",
      image:
        "https://assets.tarkov.dev/5913651986f774432f15d132-grid-image.webp",
    },
    {
      name: "Dorm guard desk key",
      description: "A key to the two-story dormitory guard desk.",
      image:
        "https://assets.tarkov.dev/59136a4486f774447a1ed172-grid-image.webp",
    },
    {
      name: "Dorm room 110 key",
      description:
        "A key to the two-story dormitory with a tag reading 110 on it.",
      image:
        "https://assets.tarkov.dev/59136e1e86f774432f15d133-grid-image.webp",
    },
    {
      name: "Folding car key",
      description: "A folding car key with locking buttons.",
      image:
        "https://assets.tarkov.dev/59136f6f86f774447a1ed173-grid-image.webp",
    },
    {
      name: "Dorm room 105 key",
      description:
        "A key to the two-story dormitory with a tag reading 105 on it.",
      image:
        "https://assets.tarkov.dev/591382d986f774465a6413a7-grid-image.webp",
    },
    {
      name: "Dorm room 104 key",
      description:
        "A key to the two-story dormitory with a tag reading 104 on it.",
      image:
        "https://assets.tarkov.dev/591383f186f7744a4c5edcf3-grid-image.webp",
    },
    {
      name: "Gas station storage room key",
      description: "A key to the storage room inside one of the gas stations.",
      image:
        "https://assets.tarkov.dev/5913877a86f774432f15d444-grid-image.webp",
    },
    {
      name: "Military checkpoint key",
      description: "A key to the military base checkpoint gatehouse.",
      image:
        "https://assets.tarkov.dev/5913915886f774123603c392-grid-image.webp",
    },
    {
      name: "Dorm room 108 key",
      description:
        "A key to the three-story dormitory with a tag reading 108 on it.",
      image:
        "https://assets.tarkov.dev/5914578086f774123569ffa4-grid-image.webp",
    },
    {
      name: "Dorm room 204 key",
      description:
        "A key to the three-story dormitory with a tag reading 204 on it.",
      image:
        "https://assets.tarkov.dev/59148c8a86f774197930e983-grid-image.webp",
    },
    {
      name: "Weapon safe key",
      description: "A key to some weapon safe.",
      image:
        "https://assets.tarkov.dev/59148f8286f7741b951ea113-grid-image.webp",
    },
    {
      name: "Yotota car key",
      description: "A Yotota folding car key with locking buttons.",
      image:
        "https://assets.tarkov.dev/591ae8f986f77406f854be45-grid-image.webp",
    },
    {
      name: "TROY M7A1 PDW stock (Black)",
      description:
        "The TROY M7A1 PDW Stock kit is a retractable stock made to elevate 5.56 carbines, making them compact, measuring 3” shorter than traditional carbine stocks. Reduces the overall weapon size and recoil buffer. Black version.",
      image:
        "https://assets.tarkov.dev/591aef7986f774139d495f03-grid-image.webp",
    },
    {
      name: "TROY M7A1 PDW stock (FDE)",
      description:
        "The TROY M7A1 PDW Stock kit is a retractable stock made to elevate 5.56 carbines, making them compact, measuring 3” shorter than traditional carbine stocks. Reduces the overall weapon size and recoil buffer. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/591af10186f774139d495f0e-grid-image.webp",
    },
    {
      name: "Viking Tactics UVG tactical foregrip",
      description:
        "An extremely lightweight skeletonized tactical grip made from light alloy, manufactured by Viking Tactics.",
      image:
        "https://assets.tarkov.dev/591af28e86f77414a27a9e1d-grid-image.webp",
    },
    {
      name: "ZB-014 key",
      description:
        "A rather unusual door key with some engravings reading ZB-014.",
      image:
        "https://assets.tarkov.dev/591afe0186f77431bd616a11-grid-image.webp",
    },
    {
      name: "Axion Kobra sight shade",
      description:
        "A sight shade for reflex sights of the Kobra family. Protects the lens against mechanical impacts and suppresses flaring. Manufactured by Axion.",
      image:
        "https://assets.tarkov.dev/591c4e1186f77410354b316e-grid-image.webp",
    },
    {
      name: "Axion Kobra EKP-8-18 reflex sight",
      description:
        "Kobra is a very popular reflex sight among security agencies and civilian shooters. It was designed for the armed forces of the Russian Federation, but was never formally adopted. Manufactured by Axion.",
      image:
        "https://assets.tarkov.dev/591c4efa86f7741030027726-grid-image.webp",
    },
    {
      name: "Axion Kobra dovetail mount",
      description:
        "An aluminum mount for installation of sights and various accessories, commonly can be found in the kit with Kobra sights. Manufactured by Axion.",
      image:
        "https://assets.tarkov.dev/591ee00d86f774592f7b841e-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 submachine gun (Navy 3 Round Burst)",
      description:
        "HK MP5 submachinegun with Navy 3 Round Burst firing mechanism version, which features three-round cutoff. Widely acclaimed model of a submachinegun, primarily known as weapon of GSG9 and similar forces of the world, and famous through frequent appearance in movies and video games.",
      image:
        "https://assets.tarkov.dev/5926bb2186f7744b1c6c6e60-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 upper receiver",
      description:
        "A standard upper receiver for MP5 SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926c0df86f77462f647f764-grid-image.webp",
    },
    {
      name: "HK MP5 cocking handle",
      description:
        "A standard-issue MP5 cocking handle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926c32286f774616e42de99-grid-image.webp",
    },
    {
      name: "HK MP5 Wide Tropical polymer handguard",
      description:
        "A polymer handguard for the HK-produced MP5 SMGs, the so-called Wide Tropical version.",
      image:
        "https://assets.tarkov.dev/5926c36d86f77467a92a8629-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 30-round magazine",
      description:
        "A standard 30-round 9x19 magazine for the MP5 SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926c3b286f774640d189b6b-grid-image.webp",
    },
    {
      name: "HK MP5 Drum rear sight",
      description:
        "A standard rear sight for MP5 SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926d2be86f774134d668e4e-grid-image.webp",
    },
    {
      name: "HK MP5SD 9x19 sound suppressor",
      description:
        "A standard MP5SD sound suppressor manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926d33d86f77410de68ebc0-grid-image.webp",
    },
    {
      name: "HK MP5 A2 stock",
      description:
        "A standard fixed stock for the MP5A2 submachine gun manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926d3c686f77410de68ebc8-grid-image.webp",
    },
    {
      name: "HK MP5 A3 old model stock",
      description:
        "A standard retracable stock for old versions of MP5A3 submachine gun manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926d40686f7740f152b6b7e-grid-image.webp",
    },
    {
      name: "HK MP5 MFI HK universal low profile scope mount",
      description:
        "A universal mount for HK weapon systems, designed and manufactured by MFI. Designed for the installation of reflex sights and scopes.",
      image:
        "https://assets.tarkov.dev/5926dad986f7741f82604363-grid-image.webp",
    },
    {
      name: "HK MP5 3-lug thread protector",
      description:
        "A thread protector for MP5 barrels with three lugs for installation of sound suppressors. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926e16e86f7742f5a0f7ecb-grid-image.webp",
    },
    {
      name: "HK MP5SD 9x19 upper receiver",
      description:
        "An upper receiver for the MP5SD SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926f2e086f7745aae644231-grid-image.webp",
    },
    {
      name: "HK MP5SD polymer handguard",
      description:
        "A polymer handguard for the MP5SD SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5926f34786f77469195bfe92-grid-image.webp",
    },
    {
      name: "UMTBS 6sh112 Scout-Sniper",
      description:
        "The Universal Modular Transport-Combat System (UMTBS) Scout-sniper is officially part of the equipment of the armed forces of the Russian Federation. The vest is designed with a modular approach and can be transformed to suit various specific combat tasks. This system includes the vest base, various purpose pouches, and backpacks. Due to the fact that the vest is based on the MOLLE system, it can be used with various compatible pouches beyond those included with the kit. The belt system has soft bumper pads, and its inside is made from breathable materials.",
      image:
        "https://assets.tarkov.dev/5929a2a086f7744f4b234d43-grid-image.webp",
    },
    {
      name: "ANA Tactical Alpha chest rig",
      description:
        "Alpha is a high-quality chest rig that fully meets the military standards for reliability and functionality. The combination of integrated pouches and MOLLE straps provides the means of carrying a large number of necessary equipment. The vest is designed as a classic chest rig. In this type of vest, all the gear is located in the front and side parts, while the back part is comprised of adjustment belts and straps. Manufactured by ANA Tactical.",
      image:
        "https://assets.tarkov.dev/592c2d1a86f7746dbe2af32a-grid-image.webp",
    },
    {
      name: "Machinery key",
      description:
        "A key to special machinery such as tank trucks, tractors, road-building machinery, etc.",
      image:
        "https://assets.tarkov.dev/5937ee6486f77408994ba448-grid-image.webp",
    },
    {
      name: "Portable bunkhouse key",
      description:
        "A key to one of the portable cabins that was being used as a bunkhouse, located somewhere in the Customs construction area.",
      image:
        "https://assets.tarkov.dev/5938144586f77473c2087145-grid-image.webp",
    },
    {
      name: "Dorm room 203 key",
      description:
        "A key to the three-story dormitory with a tag reading 203 on it.",
      image:
        "https://assets.tarkov.dev/5938504186f7740991483f30-grid-image.webp",
    },
    {
      name: "Pumping station back door key",
      description: "An old soviet factory key labeled Pumping Station.",
      image:
        "https://assets.tarkov.dev/593858c486f774253a24cb52-grid-image.webp",
    },
    {
      name: "Dorm room 206 key",
      description:
        "A key to the two-story dormitory with a tag reading 206 on it.",
      image:
        "https://assets.tarkov.dev/5938603e86f77435642354f4-grid-image.webp",
    },
    {
      name: "Dorm room 114 key",
      description:
        "A key to the two-story dormitory with a tag reading 114 on it.",
      image:
        "https://assets.tarkov.dev/59387a4986f77401cc236e62-grid-image.webp",
    },
    {
      name: "Dorm room 103 key",
      description:
        "A key to the three-story dormitory with a tag reading 103 on it.",
      image:
        "https://assets.tarkov.dev/5938994586f774523a425196-grid-image.webp",
    },
    {
      name: "Unknown key",
      description:
        "A key found on the dead messenger's body. The lock location is unknown.",
      image:
        "https://assets.tarkov.dev/593962ca86f774068014d9af-grid-image.webp",
    },
    {
      name: "Dorm room 303 key",
      description:
        "A key to the three-story dormitory with a tag reading 303 on it.",
      image:
        "https://assets.tarkov.dev/593aa4be86f77457f56379f8-grid-image.webp",
    },
    {
      name: "SKS Leapers UTG SOCOM rail mount",
      description:
        "SKS SOCOM Rail is a set of 4 rail mounts that can be installed on an SKS gas block. Manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/593d1fa786f7746da62d61ac-grid-image.webp",
    },
    {
      name: "AKM Hexagon 7.62x39 sound suppressor",
      description:
        "A sound moderator for AKM 7.62x39 automatic rifles, manufactured by Hexagon.",
      image:
        "https://assets.tarkov.dev/593d489686f7745c6255d58a-grid-image.webp",
    },
    {
      name: "SKS Hexagon 7.62x39 sound suppressor",
      description:
        "A sound moderator for SKS carbines, manufactured by Hexagon.",
      image:
        "https://assets.tarkov.dev/593d490386f7745ee97a1555-grid-image.webp",
    },
    {
      name: "AK-74 Hexagon 5.45x39 sound suppressor",
      description:
        "A sound moderator for AK-74 automatic rifles, manufactured by Hexagon.",
      image:
        "https://assets.tarkov.dev/593d493f86f7745e6b2ceb22-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 submachine gun (Navy 3 Round Burst)",
      description: "null",
      image:
        "https://assets.tarkov.dev/59411aa786f7747aeb37f9a5-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 submachine gun (Navy 3 Round Burst) SD",
      description: "null",
      image:
        "https://assets.tarkov.dev/59411abb86f77478f702b5d2-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74N 5.45x39 assault rifle Magpul",
      description: "null",
      image:
        "https://assets.tarkov.dev/59430b9b86f77403c27945fd-grid-image.webp",
    },
    {
      name: "AR-15 PWS CQB 5.56x45 muzzle brake",
      description:
        "The PWS CQB 5.56x45mm muzzle brake is designed specifically for compact arms and use in confined spaces.",
      image:
        "https://assets.tarkov.dev/5943ee5a86f77413872d25ec-grid-image.webp",
    },
    {
      name: "AK-74 PWS CQB 74 5.45x39 muzzle brake",
      description:
        "The PWS CQB 74 5.45x39mm muzzle brake is designed specifically for compact arms and use in confined spaces. This version is intended for AK series based weapons.",
      image:
        "https://assets.tarkov.dev/5943eeeb86f77412d6384f6b-grid-image.webp",
    },
    {
      name: "MFT BUS stock",
      description:
        "The BATTLELINK Utility Stock polymer buttstock manufactured by Mission First Tactical. Adapts and changes based on environment or operational needs, from storing additional items in the rear compartment to utilizing custom accessory mounts.",
      image:
        "https://assets.tarkov.dev/5947c73886f7747701588af5-grid-image.webp",
    },
    {
      name: "Axion Kobra EKP-8-02 reflex sight (Dovetail)",
      description:
        "Kobra is a very popular reflex sight among security agencies and civilian shooters. It was designed for the armed forces of the Russian Federation, but was never formally adopted. This version is designed for installing on dovetail type rail. Manufactured by Axion.",
      image:
        "https://assets.tarkov.dev/5947db3f86f77447880cf76f-grid-image.webp",
    },
    {
      name: "Magpul UBR GEN2 stock (Black)",
      description:
        "The UBR GEN2 telescoping stock, manufactured by Magpul. Black version.",
      image:
        "https://assets.tarkov.dev/5947e98b86f774778f1448bc-grid-image.webp",
    },
    {
      name: "Magpul UBR GEN2 stock (FDE)",
      description:
        "The UBR GEN2 telescoping stock, manufactured by Magpul. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5947eab886f77475961d96c5-grid-image.webp",
    },
    {
      name: "AK TAPCO SAW-Style pistol grip (Black)",
      description:
        "An anatomical pistol grip for AK series assault rifles, inspired by the M249 SAW LMG grip, manufactured by TAPCO. Black version.",
      image:
        "https://assets.tarkov.dev/5947f92f86f77427344a76b1-grid-image.webp",
    },
    {
      name: "AK TAPCO SAW-Style pistol grip (FDE)",
      description:
        "An anatomical pistol grip for AK series assault rifles, inspired by the M249 SAW LMG grip, manufactured by TAPCO. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5947fa2486f77425b47c1a9b-grid-image.webp",
    },
    {
      name: "AR-15 War Sport LVOA-S handguard (Black)",
      description:
        "The War Sport LVOA-S (SBR) lightweight handguard is designed for use with sport rifles based on AR-15 rifles.",
      image:
        "https://assets.tarkov.dev/595cf16b86f77427440c32e2-grid-image.webp",
    },
    {
      name: "AR-15 War Sport LVOA-C handguard (Black)",
      description:
        "The War Sport LVOA-C lightweight handguard is designed for use with sport rifles based on AR-15 rifles.",
      image:
        "https://assets.tarkov.dev/595cfa8b86f77427437e845b-grid-image.webp",
    },
    {
      name: "MS2000 Marker",
      description:
        "A strobe marker light that is used during nighttime operations. It emits signals in the IR region which are visible through NVGs. Uses a special filter when operating in the IR mode. If the filter is removed, it appears as a bright flash in the visible spectrum. In the extended mode operates with a blue flash.",
      image:
        "https://assets.tarkov.dev/5991b51486f77447b112d44f-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 submachine gun",
      description:
        "The PP-19-01, also known as Vityaz, is a Russian submachine gun chambered in 9x19 developed in 2004 by Izhmash based on the AK platform. A standard-issue submachine gun in many law enforcement agencies and military units of the Russian Federation.",
      image:
        "https://assets.tarkov.dev/59984ab886f7743e98271174-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz pistol grip",
      description:
        "An Izhmash-manufactured pistol grip for PP-19-01 Vityaz SMGs and Saiga-9 carbines.",
      image:
        "https://assets.tarkov.dev/5998517986f7746017232f7e-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz metal skeleton stock",
      description:
        "A skeletonized metal stock for PP-19-01 Vityaz SMGs and Saiga-9 carbines, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/599851db86f77467372f0a18-grid-image.webp",
    },
    {
      name: "Saiga-9 9x19 sb.7 10-round magazine",
      description:
        "The Izh.9x19 Sb.7 magazine for Saiga-9 carbines with a 10-round capacity limiter.",
      image:
        "https://assets.tarkov.dev/5998529a86f774647f44f421-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 muzzle brake-compensator",
      description:
        "A standard muzzle brake/compensator made by Izhmash for PP-19-01 Vityaz 9x19 SMG.",
      image:
        "https://assets.tarkov.dev/5998597786f77414ea6da093-grid-image.webp",
    },
    {
      name: "Saiga-9 9x19 muzzle brake-compensator",
      description:
        "A standard muzzle brake-compensator made by Izhmash for Saiga-9 carbines.",
      image:
        "https://assets.tarkov.dev/5998598e86f7740b3f498a86-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz-SN dust cover",
      description:
        "A standard-issue receiver dust cover for PP-19-01 Vityaz-SN (mod. 20) with a top rail for installation of various scopes, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59985a6c86f77414ec448d17-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz dust cover",
      description:
        "A standard-issue dust cover for PP-19-01 Vityaz SMGs, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59985a8086f77414ec448d1a-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 30-round magazine",
      description:
        "A standard 30-round capacity 9x19 magazine for PP-19-01 Vityaz SMG.",
      image:
        "https://assets.tarkov.dev/599860ac86f77436b225ed1a-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz rear sight",
      description:
        "A standard rear sight for PP-19-01 Vityaz SMG produced by Izhmash.",
      image:
        "https://assets.tarkov.dev/599860e986f7743bb57573a6-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/59b81f7386f77421ac688a0a-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 sound suppressor",
      description:
        "An Izhmash-produced sound suppressing device for PP-19-01 Vityaz 9x19 SMG of previous generations.",
      image:
        "https://assets.tarkov.dev/59bfc5c886f7743bf6794e62-grid-image.webp",
    },
    {
      name: "AR-15 Vltor MUR-1S 5.56x45 upper receiver",
      description:
        "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment.",
      image:
        "https://assets.tarkov.dev/59bfe68886f7746004266202-grid-image.webp",
    },
    {
      name: "SilencerCo Hybrid 46 multi-caliber sound suppressor",
      description:
        "The SilencerCo Hybrid 46 multi-caliber silencer is designed for use with pistols from 9mm to .45 ACP and rifles from 5.56mm to .45. Respective adapter required for installation on the system.",
      image:
        "https://assets.tarkov.dev/59bffbb386f77435b379b9c2-grid-image.webp",
    },
    {
      name: "SilencerCo Hybrid 46 Direct Thread Mount adapter",
      description:
        "The Direct Thread Mount adapter for installation of SilencerCo Hybrid 46 silencer directly onto the barrel threading.",
      image:
        "https://assets.tarkov.dev/59bffc1f86f77435b128b872-grid-image.webp",
    },
    {
      name: "Hexagon 12K 12ga sound suppressor",
      description:
        "A sound moderator for 12ga shotguns and carbines (Saiga, Vepr and others), manufactured by Hexagon.",
      image:
        "https://assets.tarkov.dev/59c0ec5b86f77435b128bfca-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG D-60 STANAG 60-round magazine",
      description:
        "The Magpul PMAG D-60 polymer 60-round magazine for 5.56x45 rounds.",
      image:
        "https://assets.tarkov.dev/59c1383d86f774290a37e0ca-grid-image.webp",
    },
    {
      name: "HK MP5SD B&T tri-rail ring mount",
      description:
        "The Tri-Rail Ring mount by B&T is installed on the MP5SD silencer and adds 3 Picatinny rails, designed for installation of additional equipment.",
      image:
        "https://assets.tarkov.dev/59c63b4486f7747afb151c1c-grid-image.webp",
    },
    {
      name: "AK-74 gas tube (6P20 Sb.1-2)",
      description:
        "A standard gas tube for AK-74 automatic rifles. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/59c6633186f7740cf0493bb9-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz gas tube",
      description:
        "A standard gas tube for PP-19-01 Vityaz submachine guns. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/59ccd11386f77428f24a488f-grid-image.webp",
    },
    {
      name: "AK UltiMAK M1-B gas tube & handguard",
      description:
        "The UltiMAK M1-B gas tube for AK assault rifles sets the gas piston movement direction and, at the same time, serves as a mount for installing reflex sights and tactical devices.",
      image:
        "https://assets.tarkov.dev/59ccfdba86f7747f2109a587-grid-image.webp",
    },
    {
      name: "AKS-74U gas tube (6P26 Sb.1-2)",
      description:
        "A standard gas tube for AKS-74U automatic rifles. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/59d36a0086f7747e673f3946-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle",
      description:
        "The AKM (Avtomát Kaláshnikova Modernizírovanny - Kalashnikov's Automatic Rifle Modernised) 7.62x39mm automatic rifle was adopted in 1959 to replace AK as a standard service weapon of the Soviet Army. Main differences compared to AK: enhanced accuracy range, lower weight, new stock, trigger, hammer retarder, muzzle compensator, and other design changes aimed at improving the efficiency of the rifle.",
      image:
        "https://assets.tarkov.dev/59d6088586f774275f37482f-grid-image.webp",
    },
    {
      name: "AK 7.62x39 30-round magazine (issued '55 or later)",
      description:
        "A standard 30-round metal magazine for 7.62x39 AK and compatible weapons from 1955 onward. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/59d625f086f774661516605d-grid-image.webp",
    },
    {
      name: "AK 7.62x39 Magpul PMAG 30 GEN M3 30-round magazine",
      description:
        "A 30-round polymer Magpul Pmag 30 AK/AKM GEN M3 magazine for 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/59d6272486f77466146386ff-grid-image.webp",
    },
    {
      name: "AKM gas tube (6P1 Sb.1-2)",
      description:
        "A standard gas tube for AKM automatic rifles. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/59d64ec286f774171d1e0a42-grid-image.webp",
    },
    {
      name: "AKM wooden handguard (6P1 Sb.6-1)",
      description: "A standard Izhmash-produced wooden AKM handguard.",
      image:
        "https://assets.tarkov.dev/59d64f2f86f77417193ef8b3-grid-image.webp",
    },
    {
      name: "AKM 7.62x39 muzzle brake-compensator (6P1 0-14)",
      description:
        "A standard Izhmash-produced muzzle brake-compensator for AKM automatic rifles and weapon systems based on it.",
      image:
        "https://assets.tarkov.dev/59d64fc686f774171b243fe2-grid-image.webp",
    },
    {
      name: "AKM dust cover (6P1 0-1)",
      description:
        "A standard-issue dust cover for AKM automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59d6507c86f7741b846413a2-grid-image.webp",
    },
    {
      name: "AKM rear sight (6P1 Sb.2-1)",
      description:
        "A standard rear sight for AKM automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59d650cf86f7741b846413a4-grid-image.webp",
    },
    {
      name: "AKM wooden stock (6P1 Sb.5)",
      description:
        "A standard-issue wooden stock for AKM automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59d6514b86f774171a068a08-grid-image.webp",
    },
    {
      name: "Armytek Predator Pro v3 XHP35 HI flashlight",
      description:
        "A powerful flashlight in a heavy-duty frame, manufactured by Armytek.",
      image:
        "https://assets.tarkov.dev/59d790f486f77403cb06aec6-grid-image.webp",
    },
    {
      name: "AR-15 Naroh Arms GRAL-S pistol grip",
      description:
        "The GRAL-S polymer pistol grip by Naroh Arms can be installed on any weapon that is compatible with the AR-15 pistol grips.",
      image:
        "https://assets.tarkov.dev/59db3a1d86f77429e05b4e92-grid-image.webp",
    },
    {
      name: "AR-15 Stark AR Rifle Grip (Black)",
      description:
        "The AR Rifle Grip polymer pistol grip by Stark can be installed on any weapon that is compatible with the AR-15 pistol grips. Black version.",
      image:
        "https://assets.tarkov.dev/59db3acc86f7742a2c4ab912-grid-image.webp",
    },
    {
      name: "AR-15 Stark AR Rifle Grip (FDE)",
      description:
        "The Stark AR Rifle Grip polymer pistol grip can be installed on any weapon that is compatible with the AR-15 pistol grips. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/59db3b0886f77429d72fb895-grid-image.webp",
    },
    {
      name: "Secure container Epsilon",
      description:
        "One of TerraGroup's latest inventions in secure container technology - the Epsilon secured container.",
      image:
        "https://assets.tarkov.dev/59db794186f77448bc595262-grid-image.webp",
    },
    {
      name: "Trijicon ACOG TA11D 3.5x35 scope",
      description:
        "The ACOG 3.5x35 riflescope manufactured by Trijicon. Still remains a favorite among competitive shooters, law enforcement and freedom-loving civilians from everywhere around the world.",
      image:
        "https://assets.tarkov.dev/59db7e1086f77448be30ddf3-grid-image.webp",
    },
    {
      name: "Trijicon TA51 sight mount",
      description:
        "The TA51 universal mount for installation of Trijicon 3.5x35, 4x32, 5.5x50 ACOG, 1x42 Reflex, and 1-6x24 VCOG sights.",
      image:
        "https://assets.tarkov.dev/59db7eed86f77461f8380365-grid-image.webp",
    },
    {
      name: "Simonov OP-SKS 7.62x39 carbine (Hunting Rifle Version)",
      description: "null",
      image:
        "https://assets.tarkov.dev/59dcdbb386f77417b03f350d-grid-image.webp",
    },
    {
      name: "Vltor CASV KeyMod 2 inch rail",
      description:
        "The Vltor CASV 2 inch KeyMod rail allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/59e0bdb186f774156f04ce82-grid-image.webp",
    },
    {
      name: "Vltor CASV KeyMod 4 inch rail",
      description:
        "The Vltor CASV 4 inch KeyMod rail allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/59e0be5d86f7742d48765bd2-grid-image.webp",
    },
    {
      name: "Vltor CASV KeyMod 6 inch rail",
      description:
        "The Vltor CASV 6 inch rail for KeyMod systems allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/59e0bed186f774156f04ce84-grid-image.webp",
    },
    {
      name: "7.62x39mm BP gzh",
      description:
        "A 7.62x39mm BP gzh (GRAU Index - 7N23) cartridge with a 7.9 gram armor-piercing bullet with a hardened carbon steel core with lead cladding on the tip and a bimetallic jacket, in a bimetallic case. This BP bullet (Bronebóynaya Púlya - Armor-piercing Bullet) was developed in the 1990s based on the 7.62x39mm PS gzh cartridge to improve its design and penetration capabilities, as a longer and narrower reinforced steel core was chosen, allowing it to pierce through basic and intermediate body ballistic protections in addition to provide a significant stopping power effect, however, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/59e0d99486f7744a32234762-grid-image.webp",
    },
    {
      name: "Ox bleach",
      description:
        "The Ox special bleach and stain remover. The bleaching agent destroys chemical bonds, which is actively used in chemical production.",
      image:
        "https://assets.tarkov.dev/59e3556c86f7741776641ac2-grid-image.webp",
    },
    {
      name: "Pack of sugar",
      description:
        "A packet of lump sugar. A rare thing in conditions of total food shortage. It is also used in brewing.",
      image:
        "https://assets.tarkov.dev/59e3577886f774176a362503-grid-image.webp",
    },
    {
      name: "Clin window cleaner",
      description:
        "The Clin window cleaner fluid. Actively used in home-made chemical production.",
      image:
        "https://assets.tarkov.dev/59e358a886f7741776641ac3-grid-image.webp",
    },
    {
      name: "PAID AntiRoach spray",
      description:
        "Tactical combat spray for annihilating cockroaches and ants. An indispensable thing for Hideout maintenance.",
      image:
        "https://assets.tarkov.dev/59e3596386f774176c10a2a2-grid-image.webp",
    },
    {
      name: "Pack of sodium bicarbonate",
      description:
        "An acidic salt of carbonic acid and sodium. It is usually a fine-grained white powder. Used in the food industry, cooking, or medicine as a neutralizer of skin burns and mucous membranes of human acids and reducing the acidity of gastric juice.",
      image:
        "https://assets.tarkov.dev/59e35abd86f7741778269d82-grid-image.webp",
    },
    {
      name: "Corrugated hose",
      description:
        "Corrugated hose for use in the garden. Could be useful for organizing a Hideout.",
      image:
        "https://assets.tarkov.dev/59e35cbb86f7741778269d83-grid-image.webp",
    },
    {
      name: "Electric drill",
      description:
        "A cordless electric drill. Used in construction, furniture installation, and repair.",
      image:
        "https://assets.tarkov.dev/59e35de086f7741778269d84-grid-image.webp",
    },
    {
      name: "Pack of screws",
      description:
        "A self-tapping screw is a fastening product in the form of a rod with a head and a special external thread that forms an internal thread in the hole of the object to be connected. Used for the installation of wooden, plasterboard, and plastic panels.",
      image:
        "https://assets.tarkov.dev/59e35ef086f7741777737012-grid-image.webp",
    },
    {
      name: "Bottle of saline solution",
      description:
        "Physiological saline solution, whose osmotic pressure is equal to the osmotic pressure of the blood. There are several types of physiological solutions, the composition of which depends on the purposes for which they are applied.",
      image:
        "https://assets.tarkov.dev/59e3606886f77417674759a5-grid-image.webp",
    },
    {
      name: "Bottle of hydrogen peroxide",
      description:
        "Hydrogen peroxide is used in medicine as a cleaning and antiseptic treatment for wounds.",
      image:
        "https://assets.tarkov.dev/59e361e886f774176c10a2a5-grid-image.webp",
    },
    {
      name: "Bronze lion figurine",
      description:
        "A collectible bronze lion figure. The thing is heavy, seemingly beautiful. Useful either for sale or aesthetic pleasure.",
      image:
        "https://assets.tarkov.dev/59e3639286f7741777737013-grid-image.webp",
    },
    {
      name: "Wooden clock",
      description:
        "Extremely artfully made wooden clock in the form of a two-headed eagle. A rare and expensive thing.",
      image:
        "https://assets.tarkov.dev/59e3647686f774176a362507-grid-image.webp",
    },
    {
      name: "Cat figurine",
      description:
        "An antique statuette of a cat, made of a rare sort of wood called Makassar Ebony.",
      image:
        "https://assets.tarkov.dev/59e3658a86f7741776641ac4-grid-image.webp",
    },
    {
      name: "Piece of plexiglass",
      description:
        "Organic glass is an acrylic resin, synthetic vinyl polymer of methyl methacrylate, thermoplastic transparent plastic, also known as plexiglass.",
      image:
        "https://assets.tarkov.dev/59e366c186f7741778269d85-grid-image.webp",
    },
    {
      name: "Power cord",
      description: "An electrical 220v power cable for Personal Computers.",
      image:
        "https://assets.tarkov.dev/59e36c6f86f774176c10a2a7-grid-image.webp",
    },
    {
      name: "7.62x39mm T-45M1 gzh",
      description:
        "A 7.62x39mm T-45M1 gzh (GAU Index - 57-T-231PM1) cartridge with a 7.6 gram lead core tracer bullet with a bimetallic jacket, in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). This tracer cartridge is an upgraded version of the T-45 model (GAU Index - 57-T-231), as it provides longer distance tracing capabilities. And despite the rudimentary design of the bullet, it can pierce through basic ballistic body protections as well as some intermediate models in addition to provide a considerable stopping power effect, however, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/59e4cf5286f7741778269d8a-grid-image.webp",
    },
    {
      name: "7.62x39mm US gzh",
      description:
        "A 7.62x39mm US gzh (GAU Index - 57-N-231U) cartridge with a 12.6 gram subsonic bullet with a pointed heat-strengthened steel core over a lead base with a bimetallic jacket, in a bimetallic case with a reduced charge. This US cartridge (Umén'shennoy Skórosti - Reduced Speed) was designed in the 1950s for use in conjunction with a suppressor, achieving an excellent noise reduction in addition to ensuring the cycle of Soviet 7.62x39mm caliber weaponry and, thanks to its design, the bullet is capable of piercing through basic ballistic body protections, however, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/59e4d24686f7741776641ac7-grid-image.webp",
    },
    {
      name: "7.62x39mm HP",
      description:
        "A 7.62x39mm cartridge with an 8 gram lead core hollow-point (HP) bullet with a bimetallic semi-jacket in a steel case; intended for hunting, home defense, and target practice. The bullet in this cartridge has an excellent expansion and impact energy that give it outstanding stopping power effects, as well as being able to cause substantial adverse effects on the target after impact, making it a good choice for hunting.",
      image:
        "https://assets.tarkov.dev/59e4d3d286f774176a36250a-grid-image.webp",
    },
    {
      name: "AK 7.62x39 ribbed metal 10-round magazine",
      description:
        "A custom-cut ribbed metal 7.62x39mm 10-round magazine for AK-compatible systems. Made by sawing off a military magazine to comply with the Russian Federation's laws for use with civilian firearms. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/59e5d83b86f7745aed03d262-grid-image.webp",
    },
    {
      name: "AK 7.62x39 Molot 40-round magazine (6P2.Sb-11)",
      description:
        "The 6P2 Sb-11 standard-issue 40-round 7.62x39 magazine for the RPK LMG from 1961 and onward, fits any AK-compatible weapon. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/59e5f5a486f7746c530b3ce2-grid-image.webp",
    },
    {
      name: "Molot VPO-136 Vepr-KM 7.62x39 carbine",
      description:
        "The Molot Vepr-KM/VPO-136 carbine is based on the well-known Kalashnikov AKM and has an almost identical appearance, weight, and overall dimensions. Designed for hunting of medium and big game, as well as for sporting use.",
      image:
        "https://assets.tarkov.dev/59e6152586f77473dc057aa1-grid-image.webp",
    },
    {
      name: "VPO-136 Vepr-KM 7.62x39 muzzle brake-compensator",
      description:
        "A standard muzzle brake/compensator manufactured by Molot Arms for VPO-136 Vepr KM 7.62x39 carbines. Also fits the AK family automatic rifles of the same caliber.",
      image:
        "https://assets.tarkov.dev/59e61eb386f77440d64f5daf-grid-image.webp",
    },
    {
      name: "VPO-136 Vepr-KM wooden stock",
      description:
        "A standard-issue wooden stock for VPO-136 Vepr KM carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e6227d86f77440d64f5dc2-grid-image.webp",
    },
    {
      name: "VPO-136 Vepr-KM wooden handguard",
      description:
        "A standard wooden handguard for VPO-136 Vepr KM carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e6284f86f77440d569536f-grid-image.webp",
    },
    {
      name: "AKM bakelite pistol grip",
      description:
        "A bakelite Izhmash-manufactured pistol grip for AKM automatic rifles.",
      image:
        "https://assets.tarkov.dev/59e62cc886f77440d40b52a1-grid-image.webp",
    },
    {
      name: "AK bakelite pistol grip",
      description:
        "A bakelite pistol grip for AK assault rifles and compatible weapon systems, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e6318286f77444dd62c4cc-grid-image.webp",
    },
    {
      name: "Molot AKM-type dust cover",
      description:
        "A standard-issue dust cover for AKM-type Vepr carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e6449086f7746c9f75e822-grid-image.webp",
    },
    {
      name: "Molot AKM-type gas tube",
      description:
        "A gas tube for AKM-type automatic rifles and Vepr carbines, manufactured by Molot Arms. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/59e649f986f77411d949b246-grid-image.webp",
    },
    {
      name: ".366 TKM FMJ",
      description:
        "A .366 TKM (9.55x39mm) FMJ cartridge with a 13 gram lead core bullet with a brass jacket in a steel case; intended for sport shooting and hunting. Although this cartridge is intended for small-game hunting, its design allows it to pierce through basic ballistic body protections in addition to providing an outstanding stopping power effect and being capable of causing severe adverse effects on the target after impact. Its design also allows it to be used in 7.62x39mm AK magazines without any problem.",
      image:
        "https://assets.tarkov.dev/59e6542b86f77411dc52a77a-grid-image.webp",
    },
    {
      name: ".366 TKM EKO",
      description:
        "A .366 TKM (9.55x39mm) EKO cartridge with a 6 gram bullet made entirely of zinc, in a steel case; intended for sport shooting and hunting. Although this cartridge is intended for small-game hunting, its design allows it to pierce through basic ballistic body protections as well as some intermediate models, in addition to providing a significant stopping power effect and being capable of causing severe adverse effects on the target after impact. Its design also allows it to be used in 7.62x39mm AK magazines without any problem.",
      image:
        "https://assets.tarkov.dev/59e655cb86f77411dc52a77b-grid-image.webp",
    },
    {
      name: ".366 TKM Geksa",
      description:
        "A .366 TKM (9.55x39mm) Geksa cartridge with a 15.5 gram lead core soft-point (SP) bullet with a brass semi-jacket in a steel case; intended for sport shooting and hunting. This bullet has a good initial expansion on impact due to the exposure of the lead core at the tip, giving it a superior stopping power effect of its caliber, in addition to being able to inflict substantial adverse effects on the target after impact. Its design also allows it to be used in 7.62x39mm AK magazines without any problem.",
      image:
        "https://assets.tarkov.dev/59e6658b86f77411d949b250-grid-image.webp",
    },
    {
      name: "Molot VPO-209 .366 TKM carbine",
      description:
        "The Molot VPO-209 carbine is based on the well-known Kalashnikov AKM and has an almost identical appearance, weight, and overall dimensions. It has a smooth bore barrel with the last 120 mm of the barrel being rifled (a so called paradox-bore). VPO-209 is chambered in .366 TKM, that together with the paradox rifling classifies the weapon as a shotgun under Russian law.",
      image:
        "https://assets.tarkov.dev/59e6687d86f77411d949b251-grid-image.webp",
    },
    {
      name: "5.56x45mm M856",
      description:
        "A 5.56x45mm NATO M856 cartridge with a 4.1 gram lead core tracer bullet with a copper jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). This cartridge was designed in the 1980s to provide tracing capabilities to the 5.56x45mm NATO caliber weaponry used by the United States Army when used in conjunction with the M855 cartridge. Despite not having a steel penetrator tip, compared to the M855, the bullet in this cartridge is capable of piercing basic ballistic body protections, it has a high probability of rebound on various surfaces.",
      image:
        "https://assets.tarkov.dev/59e68f6f86f7746c9f75e846-grid-image.webp",
    },
    {
      name: "5.56x45mm M856A1",
      description:
        "A 5.56x45mm NATO M856A1 cartridge with a 3.6 gram copper alloy core tracer bullet with a copper jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). This cartridge was designed to provide tracing capabilities when used in conjunction with the 5.56x45mm NATO M855A1 cartridge and have a similar ballistic performance, being able to pierce basic body ballistic protections, as well as providing excellent results against intermediate models, however, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/59e6906286f7746c9f75e847-grid-image.webp",
    },
    {
      name: "5.56x45mm M995",
      description:
        "A 5.56x45mm NATO M995 cartridge with a 3.4 gram armor-piercing bullet with a tungsten carbide penetrator over an aluminum base with a copper jacket, in a brass case. This cartridge was designed during the 1990s to provide United States Army personnel with capabilities to pierce light covers and light vehicles, as well as basic and intermediate ballistic body protections, in addition to providing outstanding results against some specialized protection models. However, due to its design, it has a significant bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/59e690b686f7746c9f75e848-grid-image.webp",
    },
    {
      name: "5.56x45mm MK 255 Mod 0 (RRLP)",
      description:
        "A 5.56x45mm NATO MK 255 Mod 0 (RRLP) cartridge with a 4 gram bullet with a copper/polymer composite core with a copper jacket, in a brass case. This cartridge was designed under the name of RRLP (Reduced Ricochet Limited Penetration) in order to substantially reduce collateral damage from ricochets and over-piercing during training and close-quarters operations, as well as providing a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/59e6918f86f7746c9f75e849-grid-image.webp",
    },
    {
      name: "5.56x45mm FMJ",
      description:
        "A .223 Remington (5.56x45mm) FMJ cartridge with a 3.6 gram lead core bullet with a bimetallic jacket in a steel case; intended for hunting, home defense, and target practice. Despite its rudimentary design and not having the full energy of an intermediate cartridge, the bullet is capable of piercing through basic ballistic body protections.",
      image:
        "https://assets.tarkov.dev/59e6920f86f77411d82aa167-grid-image.webp",
    },
    {
      name: "5.56x45mm HP",
      description:
        "A .223 Remington (5.56x45mm) HP cartridge with a 3.6 gram lead core hollow-point bullet with a bimetallic jacket in a steel case; intended for hunting, home defense, and target practice. Despite not having the full energy of an intermediate cartridge, the bullet has a considerable stopping power effect as well as being able to cause substantial adverse effects on the target after impact, at the cost of penetration capabilities, even against basic ballistic protection.",
      image:
        "https://assets.tarkov.dev/59e6927d86f77411da468256-grid-image.webp",
    },
    {
      name: "BNTI Module-3M body armor",
      description:
        "A lightweight bulletproof vest of class 2 of GOST-R protection, used by private security companies and collection services.",
      image:
        "https://assets.tarkov.dev/59e7635f86f7742cbf2c1095-grid-image.webp",
    },
    {
      name: "Pilgrim tourist backpack",
      description:
        "A large and brightly colored backpack that is perfect for the tourist on a raid.",
      image:
        "https://assets.tarkov.dev/59e763f286f7742ee57895da-grid-image.webp",
    },
    {
      name: "WARTECH TV-109 + TV-106 chest rig",
      description:
        "The WARTECH gear rig consisting of the TV-106 Battle Belt and TV-109 heavy suspension system. The shoulder straps are reinforced with foam and have MOLLE straps, and the TV-109 combined with the TV-106 completes the belt system into a full-featured gear rig.",
      image:
        "https://assets.tarkov.dev/59e7643b86f7742cbf2c109a-grid-image.webp",
    },
    {
      name: "Ushanka ear flap hat",
      description:
        "The Ushanka ear flap hat is a classic hat worn by Russian people, or that is at least what most people from the west seem to believe.",
      image:
        "https://assets.tarkov.dev/59e7708286f7742cbd762753-grid-image.webp",
    },
    {
      name: "Anti-fragmentation glasses",
      description:
        "These anti-fragmentation glasses are designed to protect the eyes and part of user's face from shell fragments, drops of chemically aggressive liquids and oils, coarsely dispersed aerosols, thermal factors, atmospheric influences, and mechanical damages in all types of combat operations and during daily activities.",
      image:
        "https://assets.tarkov.dev/59e770b986f7742cbd762754-grid-image.webp",
    },
    {
      name: "Army cap",
      description: "A standard military cap, worn by soldiers.",
      image:
        "https://assets.tarkov.dev/59e770f986f7742cbe3164ef-grid-image.webp",
    },
    {
      name: "Kolpak-1S riot helmet",
      description:
        "Kolpak-1S protects the head from the cold piercing-cutting weapons in a special class of protection GOST R50744-95, from fragmentation with an energy of impact up to 50 J, and also serves to reduce the dynamic loads arising from the above-mentioned means of destruction. Kolpak-1 protective helmets are recommended by the Interdepartmental Commission for equipping units of the patrol service, traffic police, OMON and other special units of the Ministry of Internal Affairs of Russia.",
      image:
        "https://assets.tarkov.dev/59e7711e86f7746cae05fbe1-grid-image.webp",
    },
    {
      name: "Respirator",
      description:
        "Respiratory mask or anti-aerosol respirator is a basic respiratory protective equipment.",
      image:
        "https://assets.tarkov.dev/59e7715586f7742ee5789605-grid-image.webp",
    },
    {
      name: "7.62x54mm R PS gzh",
      description:
        "A 7.62x54mm R PS gzh (GRAU Index - 7N1) cartridge with a 9.8 gram bullet with a pointed steel core over a lead base with a bimetallic jacket, in a bimetallic case. This PS cartridge was developed by TsNIITochMash in the mid-1960s from the 7.62x54mm R LPS gzh cartridge specifically to increase its accuracy when fired from a sniper or designated marksman rifles, such as the SVD and its variants, being able of piercing through basic and intermediate ballistic body protections as well as providing an outstanding stopping power effect.",
      image:
        "https://assets.tarkov.dev/59e77a2386f7742ee578960a-grid-image.webp",
    },
    {
      name: "VPO-209 rear sight",
      description:
        "A standard rear sight for VPO-209 AKM carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e8977386f77415a553c453-grid-image.webp",
    },
    {
      name: "VPO-209 wooden handguard",
      description:
        "A standard wooden handguard for VPO-209 AKM carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e898ee86f77427614bd225-grid-image.webp",
    },
    {
      name: "VPO-209 wooden stock",
      description:
        "A standard-issue wooden stock for VPO-209 AKM carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/59e89d0986f77427600d226e-grid-image.webp",
    },
    {
      name: "VPO-209 thread protector",
      description:
        "A thread protector for muzzle brake/compensator for VPO-209 AKM carbines. Also fits the AKM 7.62x39 series automatic rifles.",
      image:
        "https://assets.tarkov.dev/59e8a00d86f7742ad93b569c-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/59e8d2ab86f77407f03fc9c2-grid-image.webp",
    },
    {
      name: "Lobaev Arms DVL-10 7.62x51 bolt-action sniper rifle Saboteur",
      description: "null",
      image:
        "https://assets.tarkov.dev/59e8d2b386f77445830dd299-grid-image.webp",
    },
    {
      name: "VSS/VAL TOZ 6P29M mount",
      description:
        "The TOZ 6P29M mount, developed for a modified version of the VSS sniper rifle. It is installed on the VSS standard silencer and forms 3 rails intended for mounting additional equipment on the weapon.",
      image:
        "https://assets.tarkov.dev/59eb7ebe86f7740b373438ce-grid-image.webp",
    },
    {
      name: "AKS-74/AKS-74U Zenit PT Lock",
      description:
        "The lock is designed to install the PT-1 and PT-3 stocks to a weapon. This model is designed for installation on the AKS-74 and AKS-74U folding assault rifles. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/59ecc28286f7746d7a68aa8c-grid-image.webp",
    },
    {
      name: "AK Zenit PT-3 Klassika stock",
      description:
        "The PT-3 telescopic stock is mounted instead of the standard stock of AK-103, 104, 105, 74M, AKS74U, and PP Vityaz weapons. Features a length adjustment mechanism and an adjustable cheek. A special PT lock is required for installation. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/59ecc3dd86f7746dc827481c-grid-image.webp",
    },
    {
      name: "Jack-o'-lantern tactical pumpkin helmet",
      description: "Jack-o'-lantern is here to protect you from the Evil.",
      image:
        "https://assets.tarkov.dev/59ef13ca86f77445fd0e2483-grid-image.webp",
    },
    {
      name: "Molot VPO-209 .366 TKM carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/59ef247086f77439967a900a-grid-image.webp",
    },
    {
      name: "Molot VPO-136 Vepr-KM 7.62x39 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/59ef24b986f77439987b8762-grid-image.webp",
    },
    {
      name: "Dogtag BEAR",
      description:
        "Army dogtags serve the purpose of quickly identifying the wounded and deceased in combat. This one belonged to a BEAR PMC operator.",
      image:
        "https://assets.tarkov.dev/59f32bb586f774757e1e8442-grid-image.webp",
    },
    {
      name: "Dogtag USEC",
      description:
        "Army dogtags serve the purpose of quickly identifying the wounded and deceased in combat. This one belonged to a USEC PMC operator.",
      image:
        "https://assets.tarkov.dev/59f32c3b86f77472a31742f0-grid-image.webp",
    },
    {
      name: "Fortis Shift tactical foregrip",
      description:
        "The Shift vertical grip integrates form with functionality. Its hybrid-designed shape works both as a regular foregrip and as a comfortable hand stop when going with the thumb over bore method. The grip allows you to handle the weapon with the confidence, and the organic design enables the operator to manipulate the rifle in a way that’s most comfortable at any given moment.",
      image:
        "https://assets.tarkov.dev/59f8a37386f7747af3328f06-grid-image.webp",
    },
    {
      name: "Serdyukov SR-1MP Gyurza 9x21 pistol",
      description:
        "The SR-1MP pistol (GRAU index - 6P53), also known as Gyurza (Viper) or SPS (Samozaryádnyy Pistolyét Serdyukóva - Serdyukov Semiautomatic Pistol), was designed by P. Serdyukov and I. Belyaev with the powerful 9x21 cartridge to replace the APS machine pistol used by the special forces of the Russian Federation. This model can be fitted with a set of mounts to attach additional equipment, as well as work as a base for installing a suppressor.",
      image:
        "https://assets.tarkov.dev/59f98b4986f7746f546d2cef-grid-image.webp",
    },
    {
      name: "SR-1MP 9x21 18-round magazine",
      description: "A standard 18-round 9x21 magazine for the SR-1MP pistol.",
      image:
        "https://assets.tarkov.dev/59f99a7d86f7745b134aa97b-grid-image.webp",
    },
    {
      name: "Saiga-9 9x19 carbine",
      description:
        "The Saiga-9 carbine was developed as a semi-automatic variant of the PP-19-01 Vityaz SMG for civilian market and designed for purposes of shooting sports and plinking.",
      image:
        "https://assets.tarkov.dev/59f9cabd86f7743a10721f46-grid-image.webp",
    },
    {
      name: "Vortex Razor AMG UH-1 holographic sight",
      description:
        "The Vortex Razor AMG UH-1 holographic sight is not only made with futuristic design, but, according to its creators, is also a revolution among holographic and reflex sights.",
      image:
        "https://assets.tarkov.dev/59f9d81586f7744c7506ee62-grid-image.webp",
    },
    {
      name: "Roler Submariner gold wrist watch",
      description:
        "A gold watch of the famous Roler brand. The case is made of 18 karats yellow gold.",
      image:
        "https://assets.tarkov.dev/59faf7ca86f7740dbe19f6c2-grid-image.webp",
    },
    {
      name: "Alkaline cleaner for heat exchangers",
      description:
        "Alkali is actively used to remove various deposits in pipes and heating elements. Also used in artisanal chemical production.",
      image:
        "https://assets.tarkov.dev/59faf98186f774067b6be103-grid-image.webp",
    },
    {
      name: "Propane tank (5L)",
      description:
        "Propane is an extremely explosive gas that is used for welding and for gas stoves in houses or places where there is no central gas supply.",
      image:
        "https://assets.tarkov.dev/59fafb5d86f774067a6f2084-grid-image.webp",
    },
    {
      name: "AK 7.62x39 US Palm AK30 30-round magazine (Black)",
      description:
        "A 30-round polymer US Palm AK30 magazine for 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons. Black version.",
      image:
        "https://assets.tarkov.dev/59fafc5086f7740dbe19f6c3-grid-image.webp",
    },
    {
      name: "AK 7.62x39 US Palm AK30 30-round magazine (FDE)",
      description:
        "A 30-round polymer US Palm AK30 magazine for 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/59fafc9386f774067d462453-grid-image.webp",
    },
    {
      name: "Key tool",
      description:
        "A special tool for storing all your keys in one convenient place.",
      image:
        "https://assets.tarkov.dev/59fafd4b86f7745ca07e1232-grid-image.webp",
    },
    {
      name: "Physical bitcoin",
      description:
        "A physical equivalent of the Bitcoin cryptocurrency (0.2 BTC value).",
      image:
        "https://assets.tarkov.dev/59faff1d86f7746c51718c9c-grid-image.webp",
    },
    {
      name: "Money case",
      description: "The TARBank armored money storage case.",
      image:
        "https://assets.tarkov.dev/59fb016586f7746d0d4b423a-grid-image.webp",
    },
    {
      name: "Weapon case",
      description: "A storage case for weapons, ammunition, and weapon parts.",
      image:
        "https://assets.tarkov.dev/59fb023c86f7746d0d4b423c-grid-image.webp",
    },
    {
      name: "Item case",
      description: "A storage case for various items.",
      image:
        "https://assets.tarkov.dev/59fb042886f7746c5005a7b2-grid-image.webp",
    },
    {
      name: "Tromix Monster Claw 12ga muzzle brake",
      description:
        "The Monster Claw muzzle brake from Tromix significantly reduces recoil and can be used for breaking tempered glass.",
      image:
        "https://assets.tarkov.dev/59fb137a86f7740adb646af1-grid-image.webp",
    },
    {
      name: "AKM Zenit DTK-4M 7.62x39 sound suppressor",
      description:
        "The Zenit DTK-4M muzzle brake, manufactured from titanium alloy, is designed for installation on modern 7.62x39 AK assault rifles. Although positioned as a muzzle brake, it can only be purchased by the staff of particular authorities.",
      image:
        "https://assets.tarkov.dev/59fb257e86f7742981561852-grid-image.webp",
    },
    {
      name: "AK Krebs Custom UFM KeyMod handguard",
      description:
        "The Krebs Custom UFM Keymod System lightweight aluminum handguard for AK family assault rifles with KeyMod slots for rail installation. The Kiba Arms VDM CS gas tube is required for installation.",
      image:
        "https://assets.tarkov.dev/59fb375986f7741b681b81a6-grid-image.webp",
    },
    {
      name: "Magpul RVG foregrip (Black)",
      description:
        "The Magpul RVG (Rail Vertical Grip) tactical grip. A common, unsophisticated, inexpensive, and ergonomically shaped vertical foregrip.",
      image:
        "https://assets.tarkov.dev/59fc48e086f77463b1118392-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMS 7.62x39 assault rifle",
      description:
        "AKMS (Avtomát Kaláshnikova Modernizírovanny Skladnóy - Kalashnikov's Automatic rifle Modernised with foldable stock) 7.62x39 assault rifle (GRAU Index — 6P4) is a variant of the AKM rifle with a folding shoulder piece (stock). Folds forward-down, under the handguard. Designed specifically for airborne troops.",
      image:
        "https://assets.tarkov.dev/59ff346386f77477562ff5e2-grid-image.webp",
    },
    {
      name: "AKMS shoulder piece (6P4 Sb.1-19)",
      description:
        "A folding shoulder piece assembly for AKMS automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/59ff3b6a86f77477562ff5ed-grid-image.webp",
    },
    {
      name: "AKMS 7.62x39 aluminium 30-round magazine",
      description:
        "A 30-round aluminum magazine for 7.62x39 AKMS and compatibles, nicknamed “Airborne”. Made of light aluminum alloy and reinforced by additional ribs. It's quite a rarity, as it was never in mass production. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5a0060fc86f7745793204432-grid-image.webp",
    },
    {
      name: "AKM wooden pistol grip",
      description:
        "A wooden Izhmash-manufactured pistol grip for AK-compatible weapons. Originally installed on AKM and AKMS.",
      image:
        "https://assets.tarkov.dev/5a0071d486f77404e23a12b2-grid-image.webp",
    },
    {
      name: "AK Kiba Arms VDM CS gas tube",
      description: "A custom gas tube for specific AK family handguards.",
      image:
        "https://assets.tarkov.dev/5a01ad4786f77450561fda02-grid-image.webp",
    },
    {
      name: "AK 7.62x39 6L10 30-round magazine",
      description:
        "A 30-round 6L10 magazine made with an AG-4S moulding compound, for 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5a01c29586f77474660c694c-grid-image.webp",
    },
    {
      name: "AK 7.62x39 Taktika Tula muzzle adapter",
      description:
        "The Taktika Tula muzzle device adapter. Provides the means of installing modern muzzle devices on AK and AKM.",
      image:
        "https://assets.tarkov.dev/5a0abb6e1526d8000a025282-grid-image.webp",
    },
    {
      name: "Zarya stun grenade",
      description:
        "Intended to suppress the mental stability by creating a sudden sound effect and a bright flash. Used in special operations for apprehension of criminals and in riot suppression.",
      image:
        "https://assets.tarkov.dev/5a0c27731526d80618476ac4-grid-image.webp",
    },
    {
      name: "AK GP-25 accessory kit recoil pad",
      description:
        "A recoil pad from the standard accessories’ kit of GP-25 under-barrel grenade launcher for AK automatic rifles, also known as the Overshoe. Despite its original purpose, it can be installed on many AK models for recoil damping, and thus made it into common use.",
      image:
        "https://assets.tarkov.dev/5a0c59791526d8dba737bba7-grid-image.webp",
    },
    {
      name: "AKM PBS-1 7.62x39 sound suppressor",
      description:
        "PBS-1 (Pribór Besshúmnoy Strel'bý - Silent Firing Device) is a sound suppressor manufactured by TsNIITochMash for noiseless and flash-free fire with 7.62x39mm AK family assault rifles.",
      image:
        "https://assets.tarkov.dev/5a0d63621526d8dba31fe3bf-grid-image.webp",
    },
    {
      name: "AKML system 7.62x39 flash hider",
      description:
        "A slot-like flash suppressor designed specifically for AKML arms system to reduce the muzzle flash flare on the NSP-3 night vision scope.",
      image:
        "https://assets.tarkov.dev/5a0d716f1526d8000d26b1e2-grid-image.webp",
    },
    {
      name: "Health Resort west wing office room 104 key",
      description:
        "A key to the Azure Coast sanatorium west wing office room 104.",
      image:
        "https://assets.tarkov.dev/5a0dc45586f7742f6b0b73e3-grid-image.webp",
    },
    {
      name: "Health Resort west wing office room 112 key",
      description:
        "A key to the Azure Coast sanatorium west wing office room 112.",
      image:
        "https://assets.tarkov.dev/5a0dc95c86f77452440fc675-grid-image.webp",
    },
    {
      name: "Health Resort east wing office room 107 key",
      description:
        "A key to the Azure Coast sanatorium east wing office room 107.",
      image:
        "https://assets.tarkov.dev/5a0ea64786f7741707720468-grid-image.webp",
    },
    {
      name: "Health Resort east wing office room 108 key",
      description:
        "A key to the Azure Coast sanatorium east wing office room 108.",
      image:
        "https://assets.tarkov.dev/5a0ea69f86f7741cd5406619-grid-image.webp",
    },
    {
      name: "Health Resort universal utility room key",
      description:
        "A universal key to all Azure Coast health resort utility storerooms.",
      image:
        "https://assets.tarkov.dev/5a0ea79b86f7741d4a35298e-grid-image.webp",
    },
    {
      name: "SMW car key",
      description: "An SMW folding car key with locking buttons.",
      image:
        "https://assets.tarkov.dev/5a0eb38b86f774153b320eb0-grid-image.webp",
    },
    {
      name: "Cottage back door key",
      description:
        "A key to the back door to one of the cottages, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5a0eb6ac86f7743124037a28-grid-image.webp",
    },
    {
      name: "AKMB system rear sight",
      description:
        "A special rear sight leaf for use with PBS-1 and the “US” cartridge of the AKMB (AKMSB) arms system.",
      image:
        "https://assets.tarkov.dev/5a0eb980fcdbcb001a3b00a6-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMN 7.62x39 assault rifle",
      description:
        "AKMN (Avtomat Kalashnikova Modernizirovanny Nochnoy - Kalashnikov's Automatic Rifle Modernised Night) is a small arms system consisting of a modified AKM automatic rifle with a dovetail mount for installation of the NSP family night vision scopes — NSP-2/3/3A, NSPU, NSPU-M.",
      image:
        "https://assets.tarkov.dev/5a0ec13bfcdbcb00165aa685-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 205 key",
      description: "A key to the Azure Coast sanatorium west wing room 205.",
      image:
        "https://assets.tarkov.dev/5a0ec6d286f7742c0b518fb5-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 207 key",
      description: "A key to the Azure Coast sanatorium west wing room 207.",
      image:
        "https://assets.tarkov.dev/5a0ec70e86f7742c0b518fba-grid-image.webp",
    },
    {
      name: "AKMP system rear sight device",
      description:
        "A device intended for firing AK and AKM family assault rifles in poor visibility conditions.",
      image:
        "https://assets.tarkov.dev/5a0ed824fcdbcb0176308b0d-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 216 key",
      description: "A key to the Azure Coast sanatorium west wing room 216.",
      image:
        "https://assets.tarkov.dev/5a0ee30786f774023b6ee08f-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 220 key",
      description: "A key to the Azure Coast sanatorium west wing room 220.",
      image:
        "https://assets.tarkov.dev/5a0ee34586f774023b6ee092-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 221 key",
      description: "A key to the Azure Coast sanatorium west wing room 221.",
      image:
        "https://assets.tarkov.dev/5a0ee37f86f774023657a86f-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 206 key",
      description: "A key to the Azure Coast sanatorium east wing room 206.",
      image:
        "https://assets.tarkov.dev/5a0ee4b586f7743698200d22-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 209 key",
      description: "A key to the Azure Coast sanatorium east wing room 209.",
      image:
        "https://assets.tarkov.dev/5a0ee62286f774369454a7ac-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 213 key",
      description: "A key to the Azure Coast sanatorium east wing room 213.",
      image:
        "https://assets.tarkov.dev/5a0ee72c86f77436955d3435-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 216 key",
      description: "A key to the Azure Coast sanatorium east wing room 216.",
      image:
        "https://assets.tarkov.dev/5a0ee76686f7743698200d5c-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 303 key",
      description: "A key to the Azure Coast sanatorium west wing room 303.",
      image:
        "https://assets.tarkov.dev/5a0eeb1a86f774688b70aa5c-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 309 key",
      description: "A key to the Azure Coast sanatorium west wing room 309.",
      image:
        "https://assets.tarkov.dev/5a0eeb8e86f77461257ed71a-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 325 key",
      description: "A key to the Azure Coast sanatorium west wing room 325.",
      image:
        "https://assets.tarkov.dev/5a0eebed86f77461230ddb3d-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 310 key",
      description: "A key to the Azure Coast sanatorium east wing room 310.",
      image:
        "https://assets.tarkov.dev/5a0eec9686f77402ac5c39f2-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 313 key",
      description: "A key to the Azure Coast sanatorium east wing room 313.",
      image:
        "https://assets.tarkov.dev/5a0eecf686f7740350630097-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 314 key",
      description: "A key to the Azure Coast sanatorium east wing room 314.",
      image:
        "https://assets.tarkov.dev/5a0eed4386f77405112912aa-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 322 key",
      description: "A key to the Azure Coast sanatorium east wing room 322.",
      image:
        "https://assets.tarkov.dev/5a0eedb386f77403506300be-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 328 key",
      description: "A key to the Azure Coast sanatorium east wing room 328.",
      image:
        "https://assets.tarkov.dev/5a0eee1486f77402aa773226-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 321 safe key",
      description:
        "A key to the Azure Coast sanatorium west wing room 321 safe.",
      image:
        "https://assets.tarkov.dev/5a0eff2986f7741fd654e684-grid-image.webp",
    },
    {
      name: "Weather station safe key",
      description:
        "A key to the safe inside the weather station, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5a0f006986f7741ffd2fe484-grid-image.webp",
    },
    {
      name: "Gas station safe key",
      description:
        "A key to the safe inside the gas station, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5a0f045e86f7745b0f0d0e42-grid-image.webp",
    },
    {
      name: "Cottage safe key",
      description:
        "A key to the safe inside one of the cottages, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5a0f068686f7745b0d4ea242-grid-image.webp",
    },
    {
      name: "Store safe key",
      description:
        "A key to the safe inside one of the village stores, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5a0f075686f7745bcc42ee12-grid-image.webp",
    },
    {
      name: "Health Resort management office safe key",
      description:
        "A key to the Azure Coast sanatorium administration office safe, located in the Administration building.",
      image:
        "https://assets.tarkov.dev/5a0f08bc86f77478f33b84c2-grid-image.webp",
    },
    {
      name: "AKMP system front sight device",
      description:
        "A device intended for firing AK and AKM family assault rifles in poor visibility conditions.",
      image:
        "https://assets.tarkov.dev/5a0f096dfcdbcb0176308b15-grid-image.webp",
    },
    {
      name: "Health Resort management warehouse safe key",
      description:
        "A key to the Azure Coast sanatorium warehouse safe, located in the Administration building.",
      image:
        "https://assets.tarkov.dev/5a0f0f5886f7741c4e32a472-grid-image.webp",
    },
    {
      name: "Saiga-9 9x19 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a13df5286f774032f5454a0-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 323 key",
      description: "A key to the Azure Coast sanatorium west wing room 323.",
      image:
        "https://assets.tarkov.dev/5a13ee1986f774794d4c14cd-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 218 key",
      description: "A key to the Azure Coast sanatorium west wing room 218.",
      image:
        "https://assets.tarkov.dev/5a13eebd86f7746fd639aa93-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 219 key",
      description: "A key to the Azure Coast sanatorium west wing room 219.",
      image:
        "https://assets.tarkov.dev/5a13ef0686f7746e5a411744-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 301 key",
      description: "A key to the Azure Coast sanatorium west wing room 301.",
      image:
        "https://assets.tarkov.dev/5a13ef7e86f7741290491063-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 222 key",
      description: "A key to the Azure Coast sanatorium east wing room 222.",
      image:
        "https://assets.tarkov.dev/5a13f24186f77410e57c5626-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 226 key",
      description: "A key to the Azure Coast sanatorium east wing room 226.",
      image:
        "https://assets.tarkov.dev/5a13f35286f77413ef1436b0-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 306 key",
      description: "A key to the Azure Coast sanatorium west wing room 306.",
      image:
        "https://assets.tarkov.dev/5a13f46386f7741dd7384b04-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 205 key",
      description: "A key to the Azure Coast sanatorium east wing room 205.",
      image:
        "https://assets.tarkov.dev/5a144bdb86f7741d374bbde0-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 203 key",
      description: "A key to the Azure Coast sanatorium west wing room 203.",
      image:
        "https://assets.tarkov.dev/5a144dfd86f77445cb5a0982-grid-image.webp",
    },
    {
      name: "Health Resort west wing room 222 key",
      description: "A key to the Azure Coast sanatorium west wing room 222.",
      image:
        "https://assets.tarkov.dev/5a1452ee86f7746f33111763-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 306 key",
      description: "A key to the Azure Coast sanatorium east wing room 306.",
      image:
        "https://assets.tarkov.dev/5a145d4786f7744cbb6f4a12-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 308 key",
      description: "A key to the Azure Coast sanatorium east wing room 308.",
      image:
        "https://assets.tarkov.dev/5a145d7b86f7744cbb6f4a13-grid-image.webp",
    },
    {
      name: "Health Resort east wing room 316 key",
      description: "A key to the Azure Coast sanatorium east wing room 316.",
      image:
        "https://assets.tarkov.dev/5a145ebb86f77458f1796f05-grid-image.webp",
    },
    {
      name: "Ops-Core FAST MT Super High Cut helmet (Black)",
      description:
        "The Ops-Core FAST ballistic helmet is popular in special forces all around the world. Can be modified with different components. Black version.",
      image:
        "https://assets.tarkov.dev/5a154d5cfcdbcb001a3b00da-grid-image.webp",
    },
    {
      name: "Ops-Core FAST Visor",
      description:
        "The FAST visor, designed to protect the eyes and part of the user's face from shell fragments, mines, grenades, drops of chemically aggressive liquids and oils, coarsely dispersed aerosols, thermal factors, atmospheric influences and mechanical damages in all types of combat operations.",
      image:
        "https://assets.tarkov.dev/5a16b672fcdbcb001912fa83-grid-image.webp",
    },
    {
      name: "Ops-Core FAST multi-hit ballistic face shield",
      description:
        "A special high-strength ballistic visor for the Ops-Core FAST helmet, used by the special forces assault teams.",
      image:
        "https://assets.tarkov.dev/5a16b7e1fcdbcb00165aa6c9-grid-image.webp",
    },
    {
      name: "Norotos Titanium Advanced Tactical Mount",
      description:
        "A lightweight titanium mount for installation on the Shroud connector on the helmet. It is necessary for further installation of the night vision goggles or other optical devices. Manufactured by Norotos Inc.",
      image:
        "https://assets.tarkov.dev/5a16b8a9fcdbcb00165aa6ca-grid-image.webp",
    },
    {
      name: "AN/PVS-14 Dual Dovetail Mount",
      description:
        "The Dual Dovetail Interface Arm mount for the AN/PVS-14 night vision monocular device.",
      image:
        "https://assets.tarkov.dev/5a16b93dfcdbcbcae6687261-grid-image.webp",
    },
    {
      name: "Ops-Core FAST RAC Headset",
      description:
        "A component for the Ops-Core FAST helmet - a system of noise reduction and amplification of quiet sounds, as well as a radio headset when connected to the communication device.",
      image:
        "https://assets.tarkov.dev/5a16b9fffcdbcb0176308b34-grid-image.webp",
    },
    {
      name: "Ops-Core FAST Gunsight Mandible",
      description:
        "An additional armor module for the Ops-Core FAST helmet, mounted on the Side Armor component.",
      image:
        "https://assets.tarkov.dev/5a16ba61fcdbcb098008728a-grid-image.webp",
    },
    {
      name: "Ops-Core FAST Side Armor",
      description:
        "An additional armor module for the Ops-Core FAST helmet, protects the ears from shrapnel and small caliber ricochets.",
      image:
        "https://assets.tarkov.dev/5a16badafcdbcb001865f72d-grid-image.webp",
    },
    {
      name: "Wilcox Skull Lock head mount",
      description:
        "Scull Lock Head Mount-Lite is a lightweight, low profile fixing system for NVG or other optical attachments, completely made of fabric, with increased comfort and versatility in use and storage. The system allows the use of various attachments without the use of a heavy ballistic helmet.",
      image:
        "https://assets.tarkov.dev/5a16bb52fcdbcb001a3b00dc-grid-image.webp",
    },
    {
      name: "Stechkin APS 9x18PM machine pistol",
      description:
        "The APS (Avtomatícheskiy Pistolét Stéchkina - Stechkin Automatic Pistol, GAU Index - 56-A-126) is a Soviet machine pistol chambered in 9x18 PM, developed in the late 1940 by Igor Stechkin. APS is intended for arming officers who are directly involved in combat operations, as well as for soldiers and sergeants of some special units.",
      image:
        "https://assets.tarkov.dev/5a17f98cfcdbcb0980087290-grid-image.webp",
    },
    {
      name: "APS 9x18PM 20-round magazine",
      description:
        "A standard 20-round magazine for Molot-produced APS pistols. It features a side observation slot for faster capacity checking.",
      image:
        "https://assets.tarkov.dev/5a17fb03fcdbcbcae668728f-grid-image.webp",
    },
    {
      name: "APB detachable wire stock",
      description: "A standard-issue wire stock for APB pistols.",
      image:
        "https://assets.tarkov.dev/5a17fb9dfcdbcbcae6687291-grid-image.webp",
    },
    {
      name: "APS bakelite side-pieces",
      description: "Standard-issue APS pistol bakelite side grips.",
      image:
        "https://assets.tarkov.dev/5a17fc70fcdbcb0176308b3d-grid-image.webp",
    },
    {
      name: "Trijicon REAP-IR thermal scope",
      description:
        "A versatile thermal imaging telescope/sight. It can be installed on weapons for use in the form of a riflesight, on a helmet - via adapter - as a monocular, and as a separate observation device.",
      image:
        "https://assets.tarkov.dev/5a1eaa87fcdbcb001865f75e-grid-image.webp",
    },
    {
      name: "Trijicon REAP-IR scope eyecup",
      description: "A rubber eyecup for the Trijicon REAP-IR thermal scope.",
      image:
        "https://assets.tarkov.dev/5a1eacb3fcdbcb09800872be-grid-image.webp",
    },
    {
      name: "UNV DLOC-IRD sight mount",
      description:
        "The UNV DLOC-IRD universal quick release mount for installing various scopes.",
      image:
        "https://assets.tarkov.dev/5a1ead28fcdbcb001912fa9f-grid-image.webp",
    },
    {
      name: "9x21mm PS gzh",
      description:
        "A 9x21mm Gyurza PS gzh (SP10, GRAU Index - 7N29) cartridge with a 6.7 gram armor-piercing bullet with a heat-strengthened steel core and a two-layer semi-jacket, a polyethylene interior and a bimetallic exterior, in a bimetallic case. This cartridge was designed in the 1990s by TsNIITochMash to provide superior penetration capabilities compared to its standard 9x19mm counterparts, being capable of piercing basic ballistic body protection equipment and some intermediate models, however, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5a269f97c4a282000b151807-grid-image.webp",
    },
    {
      name: "9x21mm P gzh",
      description:
        "A 9x21mm Gyurza P gzh (SP11, GRAU Index - 7N28) cartridge with a 7.5 gram soft lead core bullet with a bimetallic jacket in a bimetallic case. This cartridge was designed by TsNIITochMash due to the need to create a cheaper 9x21mm PS gzh SP10 cartridge for practice shooting during experimentation with weapons of the same caliber. Because of this, the cartridge had to meet similar criteria, such as recoil, muzzle velocity, and trajectories. The result was so satisfactory that it was adopted by the FSB due to its considerable stopping power effect.",
      image:
        "https://assets.tarkov.dev/5a26abfac4a28232980eabff-grid-image.webp",
    },
    {
      name: "9x21mm PE gzh",
      description:
        "A 9x21mm Gyurza PE gzh (SP12) cartridge with a 5.7 gram expansive bullet with a bimetallic semi-jacketed lead core and a ballistic polyethylene tip, in a bimetallic case. This cartridge was developed by TsNIITochMash due to the needs of the FSB to equip its special forces with a cartridge capable of granting outstanding stopping power effects at distances up to 200 meters and maintaining similar criteria to its counterparts of the same caliber, such as recoil, muzzle velocity, and trajectories.",
      image:
        "https://assets.tarkov.dev/5a26ac06c4a282000c5a90a8-grid-image.webp",
    },
    {
      name: "9x21mm BT gzh",
      description:
        "A 9x21mm Gyurza BT gzh (SP13, GRAU Index - 7BT3) cartridge with a 7.3 gram armor-piercing tracer bullet with a steel core and a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Red). This BT bullet (Bronebóynaya Trassíruyushchaya - Armor-piercing Tracer) was developed for 9x21mm caliber submachine guns by TsNIITochMash based on the 9x21mm PS gzh SP10 cartridge and has superior characteristics, being able of piercing basic and intermediate ballistic body protections, as well as having a considerable stopping power effect, however, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/5a26ac0ec4a28200741e1e18-grid-image.webp",
    },
    {
      name: "SR-1MP single rail mount",
      description:
        " A mount for SR-1MP, included in the pistol kit, designed to form a single rail and silencer installation place.",
      image:
        "https://assets.tarkov.dev/5a27b281c4a28200741e1e52-grid-image.webp",
    },
    {
      name: "SR-1MP sound suppressor mount",
      description:
        "A mount for SR-1MP from the pistol kit, used for quick installation and removal of the sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a27b3d0c4a282000d721ec1-grid-image.webp",
    },
    {
      name: "SR-1MP 9x21 sound suppressor",
      description:
        "A standard-issue sound suppressor from the SR-1MP pistol kit. Requires a rail mount to be installed on the weapon.",
      image:
        "https://assets.tarkov.dev/5a27b6bec4a282000e496f78-grid-image.webp",
    },
    {
      name: "SR-1MP quad rail mount",
      description:
        "A mount for the SR-1MP pistol that forms four guide rails, allowing installation of the sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a27bad7c4a282000b15184b-grid-image.webp",
    },
    {
      name: "RDG-2B smoke grenade",
      description:
        "A Soviet-made smoke hand grenade, designed to create smoke zones with covering or target designation purposes. Cheap and pretty common in post-soviet countries.",
      image:
        "https://assets.tarkov.dev/5a2a57cfc4a2826c6e06d44a-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMN 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a325c3686f7744273716c5b-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMS 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a327f4a86f774766866140b-grid-image.webp",
    },
    {
      name: "Serdyukov SR-1MP Gyurza 9x21 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a327f6386f77479010da870-grid-image.webp",
    },
    {
      name: "Serdyukov SR-1MP Gyurza 9x21 pistol Tactical 1",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a327f7286f7747668661419-grid-image.webp",
    },
    {
      name: "Serdyukov SR-1MP Gyurza 9x21 pistol Tactical 2",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a327f7c86f77475187e509a-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle 2k17 NY",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a327f9086f77475187e50a9-grid-image.webp",
    },
    {
      name: "R11 RSASS handguard",
      description:
        "A standard handguard manufactured by JP Enterprises for the Remington R11 RSASS marksman rifle. Can also be mounted on any AR-10/AR-15 base receivers.",
      image:
        "https://assets.tarkov.dev/5a329052c4a28200741e22d3-grid-image.webp",
    },
    {
      name: "SilencerCo Osprey 9 9x19 sound suppressor",
      description:
        "A light sound suppressor for 9x19 pistols and SMGs, manufactured by SilencerCo.",
      image:
        "https://assets.tarkov.dev/5a32a064c4a28200741e22de-grid-image.webp",
    },
    {
      name: "P226 Trijicon RMR mount",
      description:
        "A universal base for installation of the Trijicon RMR series reflex sights, replaces the standard rear sight of the SIG Sauer pistols.",
      image:
        "https://assets.tarkov.dev/5a32aa0cc4a28232996e405f-grid-image.webp",
    },
    {
      name: "Trijicon RMR reflex sight",
      description:
        "RMR (Ruggedized Miniature Reflex) is a durable and lightweight compact reflex sight. Can be used as a main or backup sight. Requires a specific mount for installation on Weaver rails. Manufactured by Trijicon.",
      image:
        "https://assets.tarkov.dev/5a32aa8bc4a2826c6e06d737-grid-image.webp",
    },
    {
      name: "AR-15 Magpul MIAD pistol grip (FDE)",
      description:
        "The Magpul MIAD (Mission Adaptable) polymer pistol grip can be installed on any weapon compatible with AR-15 grips. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5a339805c4a2826c6e06d73d-grid-image.webp",
    },
    {
      name: "Alpha Dog Alpha 9 9x19 sound suppressor",
      description:
        "A pistol sound suppressor with a Weaver rail made for mounting an alternative sight. Manufactured by Alpha Dog.",
      image:
        "https://assets.tarkov.dev/5a33a8ebc4a282000c5a950d-grid-image.webp",
    },
    {
      name: "Trijicon RMR low profile mount",
      description:
        "A low-profile mount for installation of the Trijicon RMR series reflex sights on Picatinny and Weaver rails.",
      image:
        "https://assets.tarkov.dev/5a33b2c9c4a282000c5a9511-grid-image.webp",
    },
    {
      name: "Trijicon RMR high profile mount",
      description:
        "A high-profile mount for installation of the Trijicon RMR series reflex sights on Picatinny and Weaver rails.",
      image:
        "https://assets.tarkov.dev/5a33b652c4a28232996e407c-grid-image.webp",
    },
    {
      name: "Trijicon RMR mount for ACOG scopes",
      description:
        "A universal mount on a place of a backup sight to allow the mounting of the Trijicon RMR reflex sight on the ACOG scopes.",
      image:
        "https://assets.tarkov.dev/5a33bab6c4a28200741e22f8-grid-image.webp",
    },
    {
      name: "AR-15 Colt A2 buffer tube",
      description:
        "Colt Receiver Extension Buffer Tube, Mil-Spec diameter will fit any AR-15-based carbine or rifle.",
      image:
        "https://assets.tarkov.dev/5a33ca0fc4a282000d72292f-grid-image.webp",
    },
    {
      name: "Magpul PRS GEN2 stock (FDE)",
      description:
        "The PRS GEN2 stock manufactured by Magpul. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5a33cae9c4a28232980eb086-grid-image.webp",
    },
    {
      name: "AR-15 Hera Arms CQR pistol grip/buttstock",
      description:
        "Designed for the cilvilian market as well as for military use, to create one of the most rigid and compact Rifle Systems based on the widely available AR-15 platform. The CQR Riflestock is an easy to install replacement buttstock for Mil-Spec AR-15 Rifles using a Mil-Spec Carbine buffer tube.",
      image:
        "https://assets.tarkov.dev/5a33e75ac4a2826c6e06d759-grid-image.webp",
    },
    {
      name: "AR-10 7.62x51 18 inch barrel",
      description:
        "An 18 inch (457mm) barrel for AR-10 based weapons for 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5a34f7f1c4a2826c6e06d75d-grid-image.webp",
    },
    {
      name: "AR-10 7.62x51 22 inch barrel",
      description:
        "A 22 inch (558mm) barrel for AR-10 based weapons for 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5a34fae7c4a2826c6e06d760-grid-image.webp",
    },
    {
      name: "AR-10 JP Enterprises Gas System-6",
      description:
        "Installed as a standard AR-10/AR-15-based weapons gas block, adding a Picatinny rail that allows installing alternative accessory front sights.",
      image:
        "https://assets.tarkov.dev/5a34fbadc4a28200741e230a-grid-image.webp",
    },
    {
      name: "AR-10 AAC Blackout 51T 7.62x51 flash hider",
      description:
        "The Advanced Armament Corporation (AAC) Blackout 51T flash hider is an effective flash suppressor that also serves as an attachment platform for the AAC 762-SDN-6 sound suppressor. Can be installed on AR-10-based rifles.",
      image:
        "https://assets.tarkov.dev/5a34fd2bc4a282329a73b4c5-grid-image.webp",
    },
    {
      name: "AAC 762-SDN-6 multi-caliber sound suppressor",
      description:
        "The AAC 762-SDN-6 sound suppressor is designed for use with 7.62x51 NATO ammo, but also functions as a superb multi-caliber suppressor for multiple hosts, providing excellent performance on 7.62 NATO, .300 AAC, 6.8 SPC, 6.5, and 5.56mm NATO. Can only be installed on compatible with 51T devices.",
      image:
        "https://assets.tarkov.dev/5a34fe59c4a282000b1521a2-grid-image.webp",
    },
    {
      name: "AR-10 7.62x51 Magpul PMAG 20 SR-LR GEN M3 20-round magazine",
      description:
        "A 20-round double-stack Magpul PMAG SR/LR GEN M3 20 magazine for 7.62x51 NATO ammunition.",
      image:
        "https://assets.tarkov.dev/5a3501acc4a282000d72293a-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 X Products X-5 50-round drum magazine",
      description:
        "A 50-round 9x19 drum magazine for the MP5 submachine gun. Manufactured by X Products.",
      image:
        "https://assets.tarkov.dev/5a351711c4a282000b1521a4-grid-image.webp",
    },
    {
      name: "Remington R11 RSASS 7.62x51 marksman rifle",
      description:
        "The Remington Semi Automatic Sniper System is the culmination of a joint effort between Remington Arms and JP Enterprises to develop a highly accurate and superbly built rapid firing sniper rifle. This weapon delivers sub-MOA accuracy out to 800 meters and beyond while providing the tactical advantage of a semi-automatic platform.",
      image:
        "https://assets.tarkov.dev/5a367e5dc4a282000e49738f-grid-image.webp",
    },
    {
      name: "JP Enterprises Flat-Top 30mm ring scope mount",
      description:
        "A universal 30mm scope base mount for installation on Picatinny rails. Manufactured by JP Enterprises.",
      image:
        "https://assets.tarkov.dev/5a37ca54c4a282000d72296a-grid-image.webp",
    },
    {
      name: "Leupold Mark 4 LR 6.5-20x50 30mm riflescope",
      description:
        "Precise, accurate, durable and dependable - the Leupold Mark 4 6.5-20x50 rifle scope. The model provides 6.5 - 20x magnification giving you a clear idea of the actual size of the targeted object.",
      image:
        "https://assets.tarkov.dev/5a37cb10c4a282329a73b4e7-grid-image.webp",
    },
    {
      name: "20/70 7.5mm buckshot",
      description: "A 20/70 gauge shell loaded with 7.5mm buckshot.",
      image:
        "https://assets.tarkov.dev/5a38ebd9c4a282000d722a5b-grid-image.webp",
    },
    {
      name: "TOZ-106 20ga MTs 20-01 Sb.3 4-shot magazine",
      description:
        "A 4-shot 20ga magazine for the MTs 20-01 and TOZ-106 hunting shotguns.",
      image:
        "https://assets.tarkov.dev/5a38ed75c4a28232996e40c6-grid-image.webp",
    },
    {
      name: "TOZ-106 20ga MTs 20-01 Sb.3 2-shot magazine",
      description:
        "A 2-shot 20 gauge magazine for MTs 20-01 and TOZ-106 hunting shotguns.",
      image:
        "https://assets.tarkov.dev/5a38ee51c4a282000c5a955c-grid-image.webp",
    },
    {
      name: "TOZ-106 002 pistol grip",
      description:
        "The TOZ 002 pistol grip for the TOZ-106 bolt-action shotgun.",
      image:
        "https://assets.tarkov.dev/5a38eecdc4a282329a73b512-grid-image.webp",
    },
    {
      name: "TOZ-106 stock",
      description:
        "A standard-issue stock with a folding shoulder piece for the TOZ-106 hunting shotgun.",
      image:
        "https://assets.tarkov.dev/5a38ef1fc4a282000b1521f6-grid-image.webp",
    },
    {
      name: "Ops-Core Single Clamp Rail Adapter mount",
      description:
        "A mount for installing flashlight devices on Ops-Core helmets.",
      image:
        "https://assets.tarkov.dev/5a398ab9c4a282000c5a9842-grid-image.webp",
    },
    {
      name: "Ops-Core Picatinny Rail Adapter mount",
      description:
        "A mount adapter for installation of universal rails on the helmet, for consecutive installation of additional equipment.",
      image:
        "https://assets.tarkov.dev/5a398b75c4a282000a51a266-grid-image.webp",
    },
    {
      name: "TOZ-106 20ga bolt-action shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a3a859786f7747e2305e8bf-grid-image.webp",
    },
    {
      name: "Remington R11 RSASS 7.62x51 marksman rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a3a85af86f774745637d46c-grid-image.webp",
    },
    {
      name: "Wilcox Skull Lock head mount PVS-14",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a3b898486f77467720a2f29-grid-image.webp",
    },
    {
      name: "9x19mm Luger CCI",
      description:
        "A 9x19mm Luger cartridge with a special heavy bullet; marked with a blue tip, manufactured by CCI. Despite the heavy bullet on this cartridge, it still has an average muzzle velocity relative to other cartridges of the same caliber, endowing it with a considerable stopping power effect, along with causing severe adverse effects on the target after impact at the cost of penetration capabilities.",
      image:
        "https://assets.tarkov.dev/5a3c16fe86f77452b62de32a-grid-image.webp",
    },
    {
      name: "Ded Moroz hat",
      description:
        "A headpiece of the famous Ded Moroz (Grandfather Frost). A traditional Russian hat, if you want to get hammered hardcore style in the New Year's Eve.",
      image:
        "https://assets.tarkov.dev/5a43943586f77416ad2f06e2-grid-image.webp",
    },
    {
      name: "Santa hat",
      description:
        "Santa's hat. Often gets confused with the Ded Moroz hat. Ded Moroz is cooler, by the way. Really, guys, really. Just listen - Grandfather Frost. The one and only! Anyway, thank you all, and happy New Year!",
      image:
        "https://assets.tarkov.dev/5a43957686f7742a2c2f11b0-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UN 5.45x39 assault rifle Zenit",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a43a85186f7746c914b947a-grid-image.webp",
    },
    {
      name: "SIG P226R 9x19 pistol Tactical",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a43a86d86f7746c9d7395e8-grid-image.webp",
    },
    {
      name: "Zenit Klesch-2IKS IR illuminator with laser",
      description:
        "The Klesch-2IKS underbarrel-mounted IR illuminator with an IR laser aiming module, designed to be used with night vision devices. This specific model does not feature non-IR functionality. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5a5f1ce64f39f90b401987bc-grid-image.webp",
    },
    {
      name: "7.62x51mm M61",
      description:
        "A 7.62x51mm NATO M61 cartridge with a 9.8 gram armor-piercing bullet with a hardened steel core with lead cladding on the tip and a bimetallic jacket, in a brass case. This cartridge was designed in the 1950s based on the .30-06 Springfield AP M2 cartridge to provide the United States Armed Forces with an armor-piercing bullet for 7.62x51mm NATO caliber automatic weaponry, being able to pierce through the most modern specialized ballistic body protections, in addition to provide a significant stopping power effect. However, it has a significant bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/5a6086ea4f39f99cd479502f-grid-image.webp",
    },
    {
      name: "7.62x51mm M62 Tracer",
      description:
        "A 7.62x51mm NATO M62 cartridge with a 9.2 gram lead-antimony alloy core tracer bullet with a bimetallic jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Green). This cartridge was designed to provide tracing capabilities to the 7.62x51mm NATO caliber automatic weaponry used by the United States Armed Forces, being able to pierce through basic and intermediate body ballistic protections, in addition to provide a considerable stopping power effect. However, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/5a608bf24f39f98ffc77720e-grid-image.webp",
    },
    {
      name: "AS VAL Rotor 43 pistol grip & buffer tube",
      description:
        "A pistol grip with an integrated Mil-Spec buffer tube for AS VAL, manufactured by Rotor 43.",
      image:
        "https://assets.tarkov.dev/5a69a2ed8dc32e000d46d1f1-grid-image.webp",
    },
    {
      name: "Glock 9x19 Lone Wolf AlphaWolf thread protector",
      description:
        "A thread protector for threaded barrels of Glock Alpha Wolf pistols produced by Lone Wolf.",
      image:
        "https://assets.tarkov.dev/5a6b585a8dc32e5a9c28b4f1-grid-image.webp",
    },
    {
      name: "Glock 9x19 Double Diamond thread protector",
      description:
        "A thread protector for threaded barrels of Glock family pistols, manufactured by Double Diamond.",
      image:
        "https://assets.tarkov.dev/5a6b592c8dc32e00094b97bf-grid-image.webp",
    },
    {
      name: "Glock SAI 9x19 thread protector",
      description:
        "A thread protector for threaded barrels of Glock family pistols, manufactured by Salient Arms International.",
      image:
        "https://assets.tarkov.dev/5a6b59a08dc32e000b452fb7-grid-image.webp",
    },
    {
      name: "Glock 9x19 Lone Wolf AlphaWolf threaded barrel",
      description:
        "A threaded barrel for 9x19 pistols of the Glock family. Manufactured by Lone Wolf.",
      image:
        "https://assets.tarkov.dev/5a6b5b8a8dc32e001207faf3-grid-image.webp",
    },
    {
      name: "Glock 9x19 Double Diamond threaded barrel",
      description:
        "A threaded barrel for 9x19 pistols of Glock family. Manufactured by Double Diamond.",
      image:
        "https://assets.tarkov.dev/5a6b5e468dc32e001207faf5-grid-image.webp",
    },
    {
      name: "Glock 9x19 SAI threaded barrel",
      description:
        "A threaded barrel for 9x19 pistols of Glock family. Manufactured by Salient Arms International.",
      image:
        "https://assets.tarkov.dev/5a6b5ed88dc32e000c52ec86-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 barrel",
      description: "A standard barrel for the Glock 17 9x19 pistol.",
      image:
        "https://assets.tarkov.dev/5a6b5f868dc32e000a311389-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 barrel with a compensator",
      description:
        "A 114mm long barrel with a mounted compensator for Glock 17 pistols.",
      image:
        "https://assets.tarkov.dev/5a6b60158dc32e000a31138b-grid-image.webp",
    },
    {
      name: "Glock front sight",
      description: "A standard-issue front sight for the Glock pistol.",
      image:
        "https://assets.tarkov.dev/5a6f58f68dc32e000a311390-grid-image.webp",
    },
    {
      name: "Glock rear sight",
      description: "A standard-issue rear sight for Glock pistols.",
      image:
        "https://assets.tarkov.dev/5a6f5d528dc32e00094b97d9-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol slide",
      description: "A standard-issue slide for Glock 17 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/5a6f5e048dc32e00094b97da-grid-image.webp",
    },
    {
      name: "Glock Viper Cut pistol slide",
      description: "A lightweight slide for Glock pistols.",
      image:
        "https://assets.tarkov.dev/5a6f5f078dc32e00094b97dd-grid-image.webp",
    },
    {
      name: "Glock Lone Wolf AlphaWolf pistol slide",
      description:
        "A slide for Glock pistols family, manufactured by Lone Wolf.",
      image:
        "https://assets.tarkov.dev/5a702d198dc32e000b452fc3-grid-image.webp",
    },
    {
      name: "Glock Lone Wolf AlphaWolf Custom pistol slide",
      description:
        "A special version of Glock family pistols’ slide made by Lone Wolf.",
      image:
        "https://assets.tarkov.dev/5a7033908dc32e000a311392-grid-image.webp",
    },
    {
      name: "Glock 9x19 Double Diamond flash hider",
      description:
        "A simple, inexpensive, but still quite effective compensator for the Glock family of pistols.",
      image:
        "https://assets.tarkov.dev/5a70366c8dc32e001207fb06-grid-image.webp",
    },
    {
      name: "Glock 9x19 CARVER Custom Decelerator 3 Port compensator",
      description:
        "A compensator manufactured by CARVER Custom. The model is only compatible with the 3rd generation 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/5a7037338dc32e000d46d257-grid-image.webp",
    },
    {
      name: "Glock 9x19 Lone Wolf AlphaWolf Bullnose compensator",
      description:
        "The AlphaWolf compensator manufactured by Lone Wolf. Can only be installed with the slides that have the bullnosed slide face.",
      image:
        "https://assets.tarkov.dev/5a705e128dc32e000d46d258-grid-image.webp",
    },
    {
      name: "Glock 9x19 17-round magazine",
      description: "A standard-issue 17-round 9x19 magazine for Glock pistols.",
      image:
        "https://assets.tarkov.dev/5a718b548dc32e000d46d262-grid-image.webp",
    },
    {
      name: "Glock 9x19 Magpul PMAG GL9 21-round magazine",
      description: "A 21-round GL9 polymer magazine, manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5a718da68dc32e000d46d264-grid-image.webp",
    },
    {
      name: "Glock 9x19 SGM Tactical 50-round drum magazine",
      description:
        "A high-capacity 50-round magazine for the Glock family pistols. Made in Korea and imported by SGM Tactical. Can hold even more than 50 rounds, but the manufacturer does not recommend loading more.",
      image:
        "https://assets.tarkov.dev/5a718f958dc32e00094b97e7-grid-image.webp",
    },
    {
      name: "Glock ZEV Tech front sight",
      description:
        "An extended front sight for Glock pistols, manufactured by ZEV Technologies.",
      image:
        "https://assets.tarkov.dev/5a71e0048dc32e000c52ecc8-grid-image.webp",
    },
    {
      name: "Glock ZEV Tech rear sight",
      description:
        "A plus-size rear sight for Glock pistols family, manufactured by ZEV Technologies.",
      image:
        "https://assets.tarkov.dev/5a71e0fb8dc32e00094b97f2-grid-image.webp",
    },
    {
      name: "Glock ZEV Tech sight mount cap",
      description:
        "A protective steel cap covering the mount for reflex sights, manufactured by ZEV Technologies.",
      image:
        "https://assets.tarkov.dev/5a71e1868dc32e00094b97f3-grid-image.webp",
    },
    {
      name: "Glock ZEV Tech HEX Gen3 RMR pistol slide",
      description:
        "A slide for Glock pistols family, manufactured by ZEV Technologies. Includes a mount for installation of the RMR reflex sights lineup.",
      image:
        "https://assets.tarkov.dev/5a71e22f8dc32e00094b97f4-grid-image.webp",
    },
    {
      name: "Glock ZEV Tech HEX Spartan RMR pistol slide",
      description:
        "A slide for Glock pistols family, manufactured by ZEV Technologies. Includes a mount for installation of the RMR reflex sights lineup.",
      image:
        "https://assets.tarkov.dev/5a71e4f48dc32e001207fb26-grid-image.webp",
    },
    {
      name: "Remington Model 870 12ga pump-action shotgun",
      description:
        "The Remington Model 870 is a pump-action shotgun manufactured by Remington Arms Company, LLC. It is widely used by the public for sport shooting, hunting, and self-defense and used by law enforcement and military organizations worldwide.",
      image:
        "https://assets.tarkov.dev/5a7828548dc32e5a9c28b516-grid-image.webp",
    },
    {
      name: "M870 12ga 508mm barrel with a fixed sight",
      description:
        "A 508mm 12 gauge barrel with a fixed sight for the Remington Model 870 shotgun.",
      image:
        "https://assets.tarkov.dev/5a787ebcc5856700142fdd98-grid-image.webp",
    },
    {
      name: "M870 12ga 355mm barrel",
      description:
        "A 355mm barrel for the Remington Model 870 12 gauge shotgun.",
      image:
        "https://assets.tarkov.dev/5a787f25c5856700186c4ab9-grid-image.webp",
    },
    {
      name: "M870 12ga 508mm barrel",
      description:
        "A 508mm 12 gauge barrel for the Remington Model 870 shotgun.",
      image:
        "https://assets.tarkov.dev/5a787f7ac5856700177af660-grid-image.webp",
    },
    {
      name: "M870 12ga 660mm vent rib barrel",
      description:
        "A 660mm 12 gauge barrel with a vent rib for the Remington Model 870 shotgun.",
      image:
        "https://assets.tarkov.dev/5a787fadc5856700155a6ca1-grid-image.webp",
    },
    {
      name: "M870 12ga sawn-off 325mm barrel",
      description:
        "A sawn-off 325mm barrel for the Remington Model 870 12 gauge shotgun.",
      image:
        "https://assets.tarkov.dev/5a787fdfc5856700142fdd9a-grid-image.webp",
    },
    {
      name: "M870 FAB Defense PR-870 forestock",
      description:
        "The PR-870 handguard by FAB Defense, made for the Remington Model 870 shotgun. Also has Weaver rails for mounting additional accessories and foregrips.",
      image:
        "https://assets.tarkov.dev/5a788031c585673f2b5c1c79-grid-image.webp",
    },
    {
      name: "M870 Magpul MOE handguard",
      description:
        "The Magpul MOE forend, designed for the Remington Model 870 shotgun.",
      image:
        "https://assets.tarkov.dev/5a788068c5856700137e4c8f-grid-image.webp",
    },
    {
      name: "M870 SpeedFeed Short handguard",
      description:
        "A classical polymer forend designed for the Remington Model 870 shotgun.",
      image:
        "https://assets.tarkov.dev/5a788089c5856700142fdd9c-grid-image.webp",
    },
    {
      name: "M870 SPS polymer stock",
      description:
        "A classical-looking polymer stock for the Remington Model 870 shotgun, equipped with a rubber butt-pad. Manufactured by Remington.",
      image:
        "https://assets.tarkov.dev/5a7880d0c5856700142fdd9d-grid-image.webp",
    },
    {
      name: "M870 Magpul SGA polymer stock",
      description:
        "An ergonomic polymer stock for the Remington Model 870 shotgun with a rubber butt-plate, manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5a78813bc5856700186c4abe-grid-image.webp",
    },
    {
      name: "M870 Shockwave Raptor grip",
      description:
        "A short polymer grip for the Remington Model 870 shotgun manufactured by Shockwave Technologies.",
      image:
        "https://assets.tarkov.dev/5a788169c5856700142fdd9e-grid-image.webp",
    },
    {
      name: "M870 12ga 4-shell magazine cap",
      description:
        "A 4-shell capacity magazine cap by Remington, for Remington Model 870 12ga shells.",
      image:
        "https://assets.tarkov.dev/5a7882dcc5856700177af662-grid-image.webp",
    },
    {
      name: "M870 12ga 7-shell magazine",
      description:
        "A 7-shell capacity tube magazine by Remington, for Remington Model 870 12ga shells.",
      image:
        "https://assets.tarkov.dev/5a78830bc5856700137e4c90-grid-image.webp",
    },
    {
      name: "M870 12ga 10-shell magazine",
      description:
        "A 10-shell capacity tube magazine by Remington, for Remington Model 870 12ga shells.",
      image:
        "https://assets.tarkov.dev/5a78832ec5856700155a6ca3-grid-image.webp",
    },
    {
      name: "M870 Mesa Tactical magazine clamp",
      description:
        "A magazine clamp for the Remington Model 870 produced by Mesa Tactical.",
      image:
        "https://assets.tarkov.dev/5a789261c5856700186c65d3-grid-image.webp",
    },
    {
      name: "M870 Leapers UTG PRO MTU-028SG rail",
      description:
        "A Weaver rail for the Remington Model 870 shotgun, which is mounted on the top of receiver. Manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/5a7893c1c585673f2b5c374d-grid-image.webp",
    },
    {
      name: "M870 XS SHOTRAIL rail with Ghost Ring rear sight",
      description:
        "A Picatinny rail with a Ghost Ring type rear sight for the Remington Model 870 shotgun, which is mounted on top of the standard receiver.",
      image:
        "https://assets.tarkov.dev/5a78948ec5856700177b1124-grid-image.webp",
    },
    {
      name: "Glock 9x19 CARVER Custom 4 Port compensator",
      description:
        "A custom compensator manufactured by CARVER Custom. The compensator includes 4 ports on the top with 3 exhaust ports on each side, totaling 10 ports. Can only fit 3rd generation Glock pistols.",
      image:
        "https://assets.tarkov.dev/5a7ad0c451dfba0013379712-grid-image.webp",
    },
    {
      name: "Glock 9x19 Lone Wolf LWD-COMP9 compensator",
      description: "A Glock 9x19 compensator manufactured by Lone Wolf.",
      image:
        "https://assets.tarkov.dev/5a7ad1fb51dfba0013379715-grid-image.webp",
    },
    {
      name: "Glock 9x19 Big Stick 33-round magazine",
      description:
        "A factory-produced 33-round 9x19 magazine for Glock pistols.",
      image:
        "https://assets.tarkov.dev/5a7ad2e851dfba0016153692-grid-image.webp",
    },
    {
      name: "Glock Aimtech mount base",
      description:
        "A sight mount base for Glock pistols, allows additional installation of reflex sights on the Weaver-type rail. Manufactured by Aimtech.",
      image:
        "https://assets.tarkov.dev/5a7ad4af51dfba0013379717-grid-image.webp",
    },
    {
      name: "Glock Aimtech Tiger Shark sight mount",
      description:
        "A Glock family sight mount base designed for installation of additional reflex sights on the pistol. Manufactured by Aimtech.",
      image:
        "https://assets.tarkov.dev/5a7ad55551dfba0015068f42-grid-image.webp",
    },
    {
      name: "Glock 9x19 Fischer Development FD917 sound suppressor",
      description:
        "A quick detach sound suppressor for Glock 17 9x19 pistols, manufactured by Fischer Development.",
      image:
        "https://assets.tarkov.dev/5a7ad74e51dfba0015068f45-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol",
      description:
        "Glock 17 is an Austrian pistol designed by Glock company for the Austrian army purposes. Thanks to both its impressive combat characteristics and reliablity it gained wide recognition and popularity as a police, shooting sports and civilian self-defense weapon.",
      image:
        "https://assets.tarkov.dev/5a7ae0c351dfba0017554310-grid-image.webp",
    },
    {
      name: "Glock Polymer80 PS9 pistol slide",
      description:
        "The PS9 slide for Glock family pistols, manufactured by Polymer80.",
      image:
        "https://assets.tarkov.dev/5a7afa25e899ef00135e31b0-grid-image.webp",
    },
    {
      name: "Glock 9x19 Strike Industries G4 SlideComp compensator",
      description:
        "A unique compensator for Glock family pistols which can be mounted on a slide and not require a threaded barrel, manufactured by Strike Industries.",
      image:
        "https://assets.tarkov.dev/5a7b32a2e899ef00135e345a-grid-image.webp",
    },
    {
      name: "SureFire XC1 tactical flashlight",
      description:
        "A compact tactical LED flashlight, manufactured by SureFire.",
      image:
        "https://assets.tarkov.dev/5a7b483fe899ef0016170d15-grid-image.webp",
    },
    {
      name: "UM Tactical UM3 pistol sight mount",
      description:
        "The UM Tactical UM3 sight mount. Allows mounting of additional reflex sights and tactical accessories.",
      image:
        "https://assets.tarkov.dev/5a7b4900e899ef197b331a2a-grid-image.webp",
    },
    {
      name: "Glock Pachmayr Tactical Grip Glove",
      description:
        "The Pachmayr tactical rubber grip increases the handling and ergonomics of a pistol, designed to fit Glock family pistols.",
      image:
        "https://assets.tarkov.dev/5a7b4960e899ef197b331a2d-grid-image.webp",
    },
    {
      name: "AR-15 Vendetta Precision VP-09 Interceptor 5.56x45 muzzle brake",
      description:
        "A muzzle brake developed by Vendetta Precision specifically for the civilian market. Crafted from corrosion resistant titanium and protected by an Altin PVD coating, the Vendetta Precision VP-09 Interceptor is the perfect combination of looks and reliability.",
      image:
        "https://assets.tarkov.dev/5a7c147ce899ef00150bd8b8-grid-image.webp",
    },
    {
      name: "6B47 Ratnik-BSh helmet",
      description:
        "6B47 is an aramid helmet of Russian origin. As part of the Ratnik program, it is the new standard-issue helmet for most of the Russian Armed Forces. The 6B47 is similar to previous generation helmets such as the 6B7-1M and 6B27. It has equal protection but weighs slightly less, floats in water, and has mounting equipment for lights and night vision devices. The helmet can be fitted with a variety of covers for different environments.",
      image:
        "https://assets.tarkov.dev/5a7c4850e899ef00150be885-grid-image.webp",
    },
    {
      name: "NSPU-M night vision scope",
      description:
        "NSPU-M (Nochnoy Strelkovyy Pritsel Unifitsirovannyy Modernizirovannyy - Night Rifle Scope Unified Modernized), GRAU Index - 1PN58. An old soviet night vision scope for AK series rifles, designed to fit dovetail rails.",
      image:
        "https://assets.tarkov.dev/5a7c74b3e899ef0014332c29-grid-image.webp",
    },
    {
      name: "Glock Dead Ringer Snake Eye front sight",
      description:
        "A front sight for Glock series pistols with tritium bars for precision aiming, manufactured by Dead Ringer.",
      image:
        "https://assets.tarkov.dev/5a7d90eb159bd400165484f1-grid-image.webp",
    },
    {
      name: "Glock TruGlo TFX front sight",
      description:
        "A front sight for Glock series pistols with tritium bars for precision aiming, manufactured by TruGlo.",
      image:
        "https://assets.tarkov.dev/5a7d9104159bd400134c8c21-grid-image.webp",
    },
    {
      name: "Glock Dead Ringer Snake Eye rear sight",
      description:
        "A rear sight for Glock series pistols with tritium bars for precision aiming, manufactured by Dead Ringer.",
      image:
        "https://assets.tarkov.dev/5a7d9122159bd4001438dbf4-grid-image.webp",
    },
    {
      name: "Glock TruGlo TFX rear sight",
      description:
        "A rear sight for Glock series pistols with tritium bars for precision aiming, manufactured by TruGlo.",
      image:
        "https://assets.tarkov.dev/5a7d912f159bd400165484f3-grid-image.webp",
    },
    {
      name: "Hera Arms CQR tactical foregrip",
      description:
        "The CQR front grip is an easy to install, lightweight, and compact frontgrip, manufactured by Hera Arms. In combination with the CQR Buttstock, operators will get a lightweight and ergonomic SBR system.",
      image:
        "https://assets.tarkov.dev/5a7dbfc1159bd40016548fde-grid-image.webp",
    },
    {
      name: "Glock GTL 21 tactical flashlight with laser",
      description:
        "An underbarrel-mounted LED flashlight with a laser aiming module manufactured by Glock.",
      image:
        "https://assets.tarkov.dev/5a800961159bd4315e3a1657-grid-image.webp",
    },
    {
      name: "Shoreline plan map",
      description: "A detailed plan map of the Shoreline area.",
      image:
        "https://assets.tarkov.dev/5a8036fb86f77407252ddc02-grid-image.webp",
    },
    {
      name: "Shoreline Health Resort plan map",
      description:
        "A paper plan map of the Azure Coast health resort on Shoreline.",
      image:
        "https://assets.tarkov.dev/5a80a29286f7742b25692012-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88acfb86f77457fd2c0d8f-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Tac 3",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88ad7b86f77479aa7226af-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Viper",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88ae4a86f77457fd2c0dae-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Fischer",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88aed086f77476cd391963-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Tac 2",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88af5086f77411a871682c-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Alpha Wolf",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88afdc86f7746de12fcc20-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Hex",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88b0f686f77416370eca3e-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Spartan",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a88b1f686f774159949926e-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle T-OPS",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae21486f774377b73cf5d-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle Space Trooper",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae36686f774377d6ce226-grid-image.webp",
    },
    {
      name: "SIG MPX 9x19 submachine gun MQB",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae43686f774377b73cfb3-grid-image.webp",
    },
    {
      name: "MP-133 12ga pump-action shotgun Tactical",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae54786f7743b5e013ba0-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 submachine gun Zenit",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae65f86f774377a23ed55-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle SOPMOD II",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8ae73886f7747b2e6e1416-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Tac HC",
      description: "null",
      image:
        "https://assets.tarkov.dev/5a8c436686f7740f394d10b5-grid-image.webp",
    },
    {
      name: "HK MP5 B&T TL-99 aluminum handguard",
      description:
        "An aluminum handguard for the MP5 SMGs, manufactured by Brügger & Thomet. Equipped with 3 rail mounts for the installation of additional devices.",
      image:
        "https://assets.tarkov.dev/5a9548c9159bd400133e97b3-grid-image.webp",
    },
    {
      name: "AKS-74U CAA XRSU47SU tactical handguard",
      description:
        "A tactical aluminum handguard for AKS-74U, AKS-74UN, and AKS-74UB, designed and manufactured by CAA. Equipped with multiple rail mounts for installation of a wide range of additional equipment.",
      image:
        "https://assets.tarkov.dev/5a957c3fa2750c00137fa5f7-grid-image.webp",
    },
    {
      name: "HK MP5 B&T tri-rail receiver mount",
      description:
        "A rail mount designed by Brügger & Thomet for the HK MP5 submachine gun. It is mounted on the weapon's receiver and allows additional installation of scopes and reflex sights.",
      image:
        "https://assets.tarkov.dev/5a966ec8a2750c00171b3f36-grid-image.webp",
    },
    {
      name: "SOK-12 12/76 SAI-02 10-round magazine",
      description:
        "The SAI-02 is a 10-round polymer magazine for SOK-12 and compatible weapons, intended for use with 12/76 or 12/70 shells. Manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/5a966f51a2750c00156aacf6-grid-image.webp",
    },
    {
      name: "Glock 9x19 Moto Cut pistol slide",
      description: "A lightweight slide for Glock 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/5a9685b1a2750c0032157104-grid-image.webp",
    },
    {
      name: "AK Strike Industries TRAX 1 handguard",
      description:
        "The Strike Industries AK TRAX 1 rail system is a modular drop-in rail that is versatile, light-weight, and durable. It will provide an adaptable platform for the user to mount their accessories. Can be combined with the TRAX 2 rail for maximum amount of modularity.",
      image:
        "https://assets.tarkov.dev/5a9d56c8a2750c0032157146-grid-image.webp",
    },
    {
      name: "Strike Industries KeyMod 4 inch rail",
      description:
        "The Strike Industries 4 inch rail for KeyMod systems allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/5a9d6d00a2750c5c985b5305-grid-image.webp",
    },
    {
      name: "Strike Industries KeyMod 6 inch rail",
      description:
        "The Strike Industries 6 inch rail for KeyMod systems allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/5a9d6d13a2750c00164f6b03-grid-image.webp",
    },
    {
      name: "Strike Industries TRAX bridge rail",
      description:
        "The Strike Industries TRAX Bridge rail that mounts on the TRAX 1 handguard to install an additional TRAX 2 handguard extension.",
      image:
        "https://assets.tarkov.dev/5a9d6d21a2750c00137fa649-grid-image.webp",
    },
    {
      name: "AK Strike Industries TRAX 2 handguard extension",
      description:
        "TRAX 2 is a front rail section that covers the gas block. Provides additional places to mount accessories. Requires the TRAX Bridge rail to be mounted with the TRAX 1 handguard. Manufactured by Strike Industries.",
      image:
        "https://assets.tarkov.dev/5a9d6d34a2750c00141e07da-grid-image.webp",
    },
    {
      name: "9x39 SR3M.130 30-round magazine",
      description:
        "A 30-round steel TsNIITochMash SR3M.130 magazine for 9x39 caliber SR-3M, VSS, and AS VAL.",
      image:
        "https://assets.tarkov.dev/5a9e81fba2750c00164f6b11-grid-image.webp",
    },
    {
      name: "AK Spikes Tactical Dynacomp 7.62x39 muzzle brake-compensator",
      description:
        "The Dynacomp muzzle brake-compensator is designed for installation on 7.62x39 AK-based weapon systems. Reduces recoil and counters the barrel climb. Manufactured by Spikes Tactical.",
      image:
        "https://assets.tarkov.dev/5a9ea27ca2750c00137fa672-grid-image.webp",
    },
    {
      name: "FAB Defense GL-SHOCK buttstock",
      description:
        "A telescopic stock with an adjustable cheek rest kit, manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5a9eb32da2750c00171b3f9c-grid-image.webp",
    },
    {
      name: "Rotor 43 9x19 muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake, designed for installation on PP-19-01 Vityaz 9x19 SMGs. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a9fb739a2750c003215717f-grid-image.webp",
    },
    {
      name: "Rotor 43 7.62x39 muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake is designed for installation on AK 7.62x39 family assault rifles. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a9fbacda2750c00141e080f-grid-image.webp",
    },
    {
      name: "Rotor 43 .366 TKM muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake, designed for installation on VPO-209 .366TKM carbines. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a9fbb74a2750c0032157181-grid-image.webp",
    },
    {
      name: "Rotor 43 5.56x45 muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake is designed for installation on AR- or AK- based 5.56x45 rifles. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5a9fbb84a2750c00137fa685-grid-image.webp",
    },
    {
      name: "VSS/VAL Zenit B-3 mount combo",
      description:
        "The B-3 combo mounts are installed on the VSS/VAL sound suppressor to form a Picatinny rail for installation of additional weapon equipment. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5a9fc7e6a2750c0032157184-grid-image.webp",
    },
    {
      name: "USEC baseball cap (Tan)",
      description: "A tactical USEC PMC baseball cap. Tan version.",
      image:
        "https://assets.tarkov.dev/5aa2a7e8e5b5b00016327c16-grid-image.webp",
    },
    {
      name: "BEAR baseball cap (Green)",
      description: "A tactical BEAR PMC baseball cap. Green version.",
      image:
        "https://assets.tarkov.dev/5aa2b87de5b5b00016327c25-grid-image.webp",
    },
    {
      name: "EMERCOM cap",
      description:
        "A cap of Emergency Committee (EMERCOM of Russian Federation), usually worn by patrol units.",
      image:
        "https://assets.tarkov.dev/5aa2b89be5b5b0001569311f-grid-image.webp",
    },
    {
      name: "Police cap",
      description: "A Tarkov police cap, ususally worn by patrol units.",
      image:
        "https://assets.tarkov.dev/5aa2b8d7e5b5b00014028f4a-grid-image.webp",
    },
    {
      name: "Round frame sunglasses",
      description: "Sunglasses with a round-shaped frame. Cool and stylish!",
      image:
        "https://assets.tarkov.dev/5aa2b923e5b5b000137b7589-grid-image.webp",
    },
    {
      name: "Dundukk sport sunglasses",
      description:
        "Modern sunglasses, made in a sporty style. Great for a stylish shootout at the gas station.",
      image:
        "https://assets.tarkov.dev/5aa2b986e5b5b00014028f4c-grid-image.webp",
    },
    {
      name: "RayBench Hipster Reserve sunglasses",
      description:
        "If you want to be an icon of style, then these glasses are for you. Smoothie as a gift.",
      image:
        "https://assets.tarkov.dev/5aa2b9aee5b5b00015693121-grid-image.webp",
    },
    {
      name: "Kinda cowboy hat",
      description: "Yeeeeeeee-haaaaaaaaaaaaw! Or not...",
      image:
        "https://assets.tarkov.dev/5aa2b9ede5b5b000137b758b-grid-image.webp",
    },
    {
      name: "Tactical fleece beanie",
      description:
        "Operate properly only in the tactical fleece hat. It's tactical.",
      image:
        "https://assets.tarkov.dev/5aa2ba19e5b5b00014028f4e-grid-image.webp",
    },
    {
      name: "UX PRO beanie",
      description:
        "The warm and comfortable UX PRO beanie. For you, only for you. And that guy, too.",
      image:
        "https://assets.tarkov.dev/5aa2ba46e5b5b000137b758d-grid-image.webp",
    },
    {
      name: "MSA Sordin Supreme PRO-X/L active headset",
      description:
        "The Sordin Supreme PRO-X/L headset amplifies low-level sounds while suppressing impulse noises. Water resistant for outdoor usage.",
      image:
        "https://assets.tarkov.dev/5aa2ba71e5b5b000137b758f-grid-image.webp",
    },
    {
      name: "Nightforce Magmount 34mm ring scope mount",
      description:
        "Nightforce X-Treme Duty Ultralite one piece Magmount is a universal 34mm scope base mount for installation on Picatinny rails.",
      image:
        "https://assets.tarkov.dev/5aa66a9be5b5b0214e506e89-grid-image.webp",
    },
    {
      name: "Nightforce ATACR 7-35x56 34mm riflescope",
      description:
        "The NightForce ATACR 7-35x56 versatile scope with an extensive magnification range and a wide field-of-view across the entire range making it easy to see and engage targets.",
      image:
        "https://assets.tarkov.dev/5aa66be6e5b5b0214e506e97-grid-image.webp",
    },
    {
      name: "Nightforce Magmount 34mm ring scope mount with Ruggedized Accessory Platform",
      description:
        "Nightforce X-Treme Duty Ultralite one piece Magmount is a universal 34mm scope base mount for installation on Picatinny rails. Comes attached with the Ruggedized Accessory Platform (RAP) for installing additional tactical devices and reflex sights.",
      image:
        "https://assets.tarkov.dev/5aa66c72e5b5b00016327c93-grid-image.webp",
    },
    {
      name: "6B47 Ratnik-BSh helmet (Digital Flora cover)",
      description:
        "6B47 is an aramid helmet of Russian origin. As part of the Ratnik program, it is the new standard-issue helmet for most of the Russian Armed Forces. The 6B47 is similar to previous generation helmets such as the 6B7-1M and 6B27. It has equal protection but weighs slightly less, floats in water, and has mounting equipment for lights and night vision devices. The helmet can be fitted with a variety of covers for different environments. Equipped with a Digital Flora camouflage cover.",
      image:
        "https://assets.tarkov.dev/5aa7cfc0e5b5b00015693143-grid-image.webp",
    },
    {
      name: "UNTAR helmet",
      description:
        "A standard-issue helmet used by UN soldiers during the UNTAR mission in Tarkov.",
      image:
        "https://assets.tarkov.dev/5aa7d03ae5b5b00016327db5-grid-image.webp",
    },
    {
      name: "SSSh-94 SFERA-S helmet",
      description:
        "The SSSh-94 SFERA-S (Special Steel Helmet 94 Sphere-S) is a special helmet with modular protection made with thickened armored steel. Used by special forces of the Ministry of Internal Affairs of the Russian Federation.",
      image:
        "https://assets.tarkov.dev/5aa7d193e5b5b000171d063f-grid-image.webp",
    },
    {
      name: "Altyn bulletproof helmet",
      description:
        "The Altyn helmets passed real combat tests in Afghanistan and Chechnya and are still in service with the Ministry of Internal Affairs of the Russian Federation and the army special forces. Can be equipped with an armored faceshield visor.",
      image:
        "https://assets.tarkov.dev/5aa7e276e5b5b000171d0647-grid-image.webp",
    },
    {
      name: "Altyn face shield",
      description:
        "A special armored face shield for the Altyn heavy assault helmet. Increases the chances of surviving the impacts of bullets and shrapnel.",
      image:
        "https://assets.tarkov.dev/5aa7e373e5b5b000137b76f0-grid-image.webp",
    },
    {
      name: "ZSh-1-2M face shield",
      description:
        "A special face shield for the ZSH-1-2M armored helmet. Made of heavy-duty materials.",
      image:
        "https://assets.tarkov.dev/5aa7e3abe5b5b000171d064d-grid-image.webp",
    },
    {
      name: "ZSh-1-2M helmet",
      description:
        "The ZSh-1-2M helmet consists of a durable alloy covered from the inside by aramid fabrics which does not allow penetration of the protective layer and absorbs the dynamic impact of bullets or shrapnel.",
      image:
        "https://assets.tarkov.dev/5aa7e454e5b5b0214e506fa2-grid-image.webp",
    },
    {
      name: "ZSh-1-2M helmet (Black cover)",
      description:
        "The ZSh-1-2M helmet consists of a durable alloy covered from the inside by aramid fabrics which does not allow penetration of the protective layer and absorbs the dynamic impact of bullets or shrapnel. Equipped with a black colored cover.",
      image:
        "https://assets.tarkov.dev/5aa7e4a4e5b5b000137b76f2-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 Magpul PMAG 30 GEN M3 30-round magazine",
      description:
        "A 30-round polymer Magpul Pmag 30 AK74 GEN M3 magazine for 5.45x39 AK and compatible weapons.",
      image:
        "https://assets.tarkov.dev/5aaa4194e5b5b055d06310a5-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 30 GEN M3 STANAG 30-round magazine",
      description:
        "A 30-round polymer Magpul PMAG GEN M3 30 magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/5aaa5dfee5b5b000140293d3-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 10 GEN M3 STANAG 10-round magazine",
      description:
        "A 10-round polymer Magpul PMAG GEN M3 10 magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/5aaa5e60e5b5b000140293d6-grid-image.webp",
    },
    {
      name: "M1A 7.62x51 20-round magazine",
      description:
        "A 20-round double-stack 7.62x51 NATO magazine for the M1A rifle, produced by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5aaf8a0be5b5b00015693243-grid-image.webp",
    },
    {
      name: "M1A SOCOM 16 stock",
      description:
        "The SOCOM 16 polymer stock for M1A rifles, manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5aaf8e43e5b5b00015693246-grid-image.webp",
    },
    {
      name: "M1A 7.62x51 16 inch barrel",
      description:
        "A 16 inch (410mm) barrel for M1A based weapons chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5aaf9d53e5b5b00015042a52-grid-image.webp",
    },
    {
      name: "M1A SOCOM 16 7.62x51 muzzle brake-compensator",
      description:
        "A muzzle brake-compensator for M1A rifles, manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5aafa1c2e5b5b00015042a56-grid-image.webp",
    },
    {
      name: "M1A SA XS Post .125 Blade front sight",
      description:
        "The XS Post .125 Blade detachable front sight, manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5aafa49ae5b5b00015042a58-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle",
      description:
        "M1A is a civilian version of the M14 rifle designed and manufactured by Springfield Armory, Inc. For the most part, it is identical to the M14. The most notable difference is the removal of the M14's fire selector switch, rendering the rifle permanently semi-automatic. The bayonet lug was also removed from the weapon.",
      image:
        "https://assets.tarkov.dev/5aafa857e5b5b00018480968-grid-image.webp",
    },
    {
      name: "Medicine case",
      description: "A storage container for medical items.",
      image:
        "https://assets.tarkov.dev/5aafbcd986f7745e590fff23-grid-image.webp",
    },
    {
      name: "Ammunition case",
      description: "The Kiba Arms International ammunition storage case.",
      image:
        "https://assets.tarkov.dev/5aafbde786f774389d0cbc0f-grid-image.webp",
    },
    {
      name: "M1A SOCOM 16 upper part",
      description:
        "The upper part of the SOCOM 16 stock for M1A rifles. It has a Weaver rail for attaching various scopes and reflex sights.",
      image:
        "https://assets.tarkov.dev/5ab24ef9e5b5b00fe93c9209-grid-image.webp",
    },
    {
      name: "M14 TROY S.A.S.S. Chassis stock",
      description:
        "The TROY Semi-Automatic Sniper System chassis is designed to match the ergonomics of M16/M4 weapon systems. This modular quad-rail system allows unlimited mounting options and keeps all optics and sights mounted and undisturbed while field stripping.",
      image:
        "https://assets.tarkov.dev/5ab372a310e891001717f0d8-grid-image.webp",
    },
    {
      name: "M1A Smith Enterprise SOCOM 16 7.62x51 threaded muzzle brake & gas block",
      description:
        "A muzzle brake/gas block for M1A rifles, manufactured by Smith Enterprise.",
      image:
        "https://assets.tarkov.dev/5ab3afb2d8ce87001660304d-grid-image.webp",
    },
    {
      name: "AKS-74 metal skeletonized stock (6P21 Sb.5)",
      description:
        "A metal skeleton stock for AKS-74 automatic rifles, manufactured by IzhMash.",
      image:
        "https://assets.tarkov.dev/5ab626e4d8ce87272e4c6e43-grid-image.webp",
    },
    {
      name: "WARTECH MK3 TV-104 chest rig",
      description:
        "This chest rig platform is designed for placing equipment in the chest and abdomen areas, with an open back. Includes integrated pouches, designed for 8 magazines. Can be used both separately and on top of the armor vest. Manufactured by WARTECH.",
      image:
        "https://assets.tarkov.dev/5ab8dab586f77441cd04f2a2-grid-image.webp",
    },
    {
      name: "ANA Tactical M2 plate carrier",
      description:
        "A tactical rig with additional class 4 (Russian GOST) armor plates. The vest is created with the use of the best experience of Russian special forces operators. The versatility of the system makes it possible to use this vest both when carrying out city tasks and when performing tasks on rough terrain. Equipped with additional pouches for 8 magazines. Manufactured by ANA Tactical.",
      image:
        "https://assets.tarkov.dev/5ab8dced86f774646209ec87-grid-image.webp",
    },
    {
      name: "MF-UNTAR body armor",
      description:
        "A class III body armor used by UN soldiers during the UNTAR mission in Tarkov.",
      image:
        "https://assets.tarkov.dev/5ab8e4ed86f7742d8e50c7fa-grid-image.webp",
    },
    {
      name: "BNTI Gzhel-K body armor",
      description:
        "The Gzhel assault bulletproof vest is designed for assault units of the Ministry of Internal Affairs and other law enforcement agencies. A special variant of Gzhel-K armor is equipped with ceramic armored panels based on corundum (Russian GOST class 5 protection).",
      image:
        "https://assets.tarkov.dev/5ab8e79e86f7742d8b372e78-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74N 5.45x39 assault rifle",
      description:
        "AKS-74N (Avtomat Kalashnikova Skladnoy 74 Nochnoy - Kalashnikov's Automatic rifle 74 Night with foldable stock) 5.45x39mm assault rifle equipped with a side-folding metal shoulder stock, designed primarily for use with air assault infantry. The key design difference from the standard AKS-74 is a side dovetail mount for optical and night scopes.",
      image:
        "https://assets.tarkov.dev/5ab8e9fcd8ce870019439434-grid-image.webp",
    },
    {
      name: "SSO Attack 2 raid backpack",
      description:
        "The 60-liter Attack 2 raid backpack is intended for carrying personal belongings and equipment through tough field conditions.",
      image:
        "https://assets.tarkov.dev/5ab8ebf186f7742d8b372e80-grid-image.webp",
    },
    {
      name: "VKBO army bag",
      description:
        "Included in the all-season basic equipment kit (VKBO). Designed for transportation and storage of personal items of soldiers.",
      image:
        "https://assets.tarkov.dev/5ab8ee7786f7742d8f33f0b9-grid-image.webp",
    },
    {
      name: "Tactical sling bag",
      description:
        "An original sling bag for everyday wear or for active rest.",
      image:
        "https://assets.tarkov.dev/5ab8f04f86f774585f4237d8-grid-image.webp",
    },
    {
      name: "Ski hat with holes for eyes",
      description:
        "Wow, man! This is where the style is. As well as warmth and comfort.",
      image:
        "https://assets.tarkov.dev/5ab8f20c86f7745cdb629fb2-grid-image.webp",
    },
    {
      name: "Cold Fear infrared balaclava",
      description:
        "A quality balaclava with a special technological material, which ensures maximum warmth in the most severe frosts. But we do not need it for warmth. We need it to look tactical.",
      image:
        "https://assets.tarkov.dev/5ab8f39486f7745cd93a1cca-grid-image.webp",
    },
    {
      name: "Ghost balaclava",
      description:
        "A tactical balaclava with a skull print. Bloody yanks! I thought they were the good guys!",
      image:
        "https://assets.tarkov.dev/5ab8f4ff86f77431c60d91ba-grid-image.webp",
    },
    {
      name: "Shemagh (Green)",
      description: "A favorite headpiece of PMCs around the globe.",
      image:
        "https://assets.tarkov.dev/5ab8f85d86f7745cd93a1cf5-grid-image.webp",
    },
    {
      name: "APS front sight",
      description: "A standard front sight for APS pistols.",
      image:
        "https://assets.tarkov.dev/5aba62f8d8ce87001943946b-grid-image.webp",
    },
    {
      name: "APS rear sight",
      description: "A standard rear sight for APS pistols.",
      image:
        "https://assets.tarkov.dev/5aba637ad8ce87001773e17f-grid-image.webp",
    },
    {
      name: "APB rear sight",
      description: "A standard rear sight for APB pistols.",
      image:
        "https://assets.tarkov.dev/5aba639ed8ce8700182ece67-grid-image.webp",
    },
    {
      name: "M14 SA Enlarged Military Aperture rear sight",
      description:
        "The Enlarged Military Aperture rear sight for M14 rifles manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5abcbb20d8ce87001773e258-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMSN 7.62x39 assault rifle",
      description:
        "AKMSN 7.62x39 (Avtomát Kaláshnikova Modernizírovanny Skladnóy Nochnóy - Kalashnikov's Automatic rifle Modernised Night with a foldable stock) is a modified AKMS automatic rifle with a dovetail mount for installation of the NSP family night vision scopes — NSP-2/3/3A, NSPU, NSPU-M.",
      image:
        "https://assets.tarkov.dev/5abcbc27d8ce8700182eceeb-grid-image.webp",
    },
    {
      name: "APB 9x18PM sound suppressor",
      description: "A standard-issue detachable APB pistol sound suppressor.",
      image:
        "https://assets.tarkov.dev/5abcc328d8ce8700194394f3-grid-image.webp",
    },
    {
      name: "APB 9x18PM silenced machine pistol",
      description:
        "The APB pistol (Avtomatícheskiy Pistolét Besshúmnyy - Silenced Automatic Pistol, GRAU Index - 6P13) is a silenced version of the Stechkin machine pistol, widely used by different Russian special forces.",
      image:
        "https://assets.tarkov.dev/5abccb7dd8ce87001773e277-grid-image.webp",
    },
    {
      name: "AKMSN shoulder piece (6P4N Sb.1-19)",
      description:
        "A folding shoulder piece assembly for AKMSN automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5abcd472d8ce8700166032ae-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMSN 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4ab8886f7747d0f66429a-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74N 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4abf986f7747d117c67aa-grid-image.webp",
    },
    {
      name: "APB 9x18PM silenced machine pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4ac9486f774181345c3d2-grid-image.webp",
    },
    {
      name: "Stechkin APS 9x18PM machine pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4accf86f774181345c3d7-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4ad3686f774181345c3da-grid-image.webp",
    },
    {
      name: "Remington Model 870 12ga pump-action shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ac4ad7586f7747d14551da3-grid-image.webp",
    },
    {
      name: "Kolpak-1S face shield",
      description:
        "A weak protection from eye and face damage, made to mount on Kolpak-1S helmet.",
      image:
        "https://assets.tarkov.dev/5ac4c50d5acfc40019262e87-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74M 5.45x39 assault rifle",
      description:
        "The AK-74M (Avtomat Kalashnikova 74 Modernizirovanny - Kalashnikov's Automatic rifle 74 Modernized) 5.45x39mm assault rifle is a full-scale produced modernized version of the AK-74 that offers more versatility compared with its predecessor. Apart from several minor improvements, such as a lightened bolt and carrier assembly to reduce the impulse of the gas piston and bolt carrier during firing, the rifle features a new glass-filled polyamide stock that retains the shape of the original AK-74 fixed laminated wood stock, but side-folds to the left like the skeletonised AKS-74 buttstock, and also a dovetail side mount for installing various scopes. The AK-74M is a main service rifle of the Russian Federation.",
      image:
        "https://assets.tarkov.dev/5ac4cd105acfc40016339859-grid-image.webp",
    },
    {
      name: "AK-74M polymer stock (6P34 Sb.15)",
      description:
        "A polymer stock for AK-74M automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5ac50c185acfc400163398d4-grid-image.webp",
    },
    {
      name: "AK-74M dust cover (6P34 0-1)",
      description:
        "A standard-issue dust cover for AK-74M automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5ac50da15acfc4001718d287-grid-image.webp",
    },
    {
      name: "AK-103 7.62x39 30-round magazine",
      description:
        "A 30-round bakelite Izhmash magazine for 7.62x39 ammo, for AK-103 and compatible systems. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5ac66bea5acfc43b321d4aec-grid-image.webp",
    },
    {
      name: "AK-101 5.56x45 6L29 30-round magazine",
      description:
        "A 30-round 5.56x45 Izhmash 6L29 polymer magazine for AK-101 and compatible systems.",
      image:
        "https://assets.tarkov.dev/5ac66c5d5acfc4001718d314-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-101 5.56x45 assault rifle",
      description:
        "The AK-101 5.56x45mm assault rifle is a further modernized version of AK-74M base. AK-101 is equipped with a side-folding shoulder stock and a side mount for optical and night scopes. The rifle is chambered to fire 5.56x45mm NATO ammunition, and is designed entirely for export purposes. The 100-series AKs are produced by the Izhmash factories in Izhevsk, Russia.",
      image:
        "https://assets.tarkov.dev/5ac66cb05acfc40198510a10-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-102 5.56x45 assault rifle",
      description:
        "The AK-102 5.56x45mm assault rifle is a further modernized version of AK-74M base, more precisely a shortened version of AK-101. A short compact version equipped with a side-folding shoulder stock and a side mount for optical and night scopes. The AK-102 is chambered to fire 5.56x45mm NATO ammunition, and is designed entirely for export purposes. The 100-series AKs are produced by the Izhmash factories in Izhevsk, Russia.",
      image:
        "https://assets.tarkov.dev/5ac66d015acfc400180ae6e4-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-103 7.62x39 assault rifle",
      description:
        "The AK-103 7.62x39mm assault rifle is a further modernized version of AK-74M base. AK-103 is equipped with a side-folding shoulder stock and a side mount for optical and night scopes. The 100-series AKs are produced by the Izhmash factories in Izhevsk, Russia.",
      image:
        "https://assets.tarkov.dev/5ac66d2e5acfc43b321d4b53-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-104 7.62x39 assault rifle",
      description:
        "The AK-104 7.62x39mm assault rifle is a further modernized version of AK-74M base, more precisely a shortened version of AK-103. A short compact version equipped with a side-folding shoulder stock and a side mount for optical and night scopes. The 100-series AKs are produced by the Izhmash factories in Izhevsk, Russia.",
      image:
        "https://assets.tarkov.dev/5ac66d725acfc43b321d4b60-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-105 5.45x39 assault rifle",
      description:
        "The AK-105 5.45x39mm assault rifle is a further modernized version of AK-74M base. A short compact version equipped with a side-folding shoulder stock and a side mount for optical and night scopes. The 100-series AKs are produced by the Izhmash factories in Izhevsk, Russia.",
      image:
        "https://assets.tarkov.dev/5ac66d9b5acfc4001633997a-grid-image.webp",
    },
    {
      name: "AK-74M rear sight (6P20 Sb.2)",
      description:
        "A standard rear sight for AK-74M automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5ac72e475acfc400180ae6fe-grid-image.webp",
    },
    {
      name: "AK-101 5.56x45 muzzle brake-compensator",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-101 and weapon systems based on it.",
      image:
        "https://assets.tarkov.dev/5ac72e615acfc43f67248aa0-grid-image.webp",
    },
    {
      name: "AK-102 5.56x45 muzzle brake-compensator (6P44 0-20)",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-102 assault rifle.",
      image:
        "https://assets.tarkov.dev/5ac72e725acfc400180ae701-grid-image.webp",
    },
    {
      name: "AK-103 7.62x39 muzzle brake-compensator",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-103.",
      image:
        "https://assets.tarkov.dev/5ac72e7d5acfc40016339a02-grid-image.webp",
    },
    {
      name: "AK-104 7.62x39 muzzle brake-compensator (6P46 0-20)",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-104 7.62x39 assault rifle.",
      image:
        "https://assets.tarkov.dev/5ac72e895acfc43b321d4bd5-grid-image.webp",
    },
    {
      name: "AK-105 5.45x39 muzzle brake-compensator (6P44 0-20)",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-105.",
      image:
        "https://assets.tarkov.dev/5ac72e945acfc43f3b691116-grid-image.webp",
    },
    {
      name: "AK-105 rear sight (6P44 Sb.1-30)",
      description:
        "A standard rear sight for AK-105 automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5ac733a45acfc400192630e2-grid-image.webp",
    },
    {
      name: "AK-74M 5.45x39 muzzle brake-compensator (6P20 0-20)",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the AK-74M.",
      image:
        "https://assets.tarkov.dev/5ac7655e5acfc40016339a19-grid-image.webp",
    },
    {
      name: "Signal Jammer",
      description:
        "An assembled signal jamming device. It emits waves of specific frequency to distort the signal and perevent the data exchange.",
      image:
        "https://assets.tarkov.dev/5ac78a9b86f7741cca0bbd8d-grid-image.webp",
    },
    {
      name: "AK-74M/AK-100 Zenit PT Lock",
      description:
        "The lock is designed to install the PT-1 and PT-3 stocks to a weapon. This model is designed for installation on the AK-74M and AK-100-series assault rifles. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5ac78eaf5acfc4001926317a-grid-image.webp",
    },
    {
      name: "Ops-Core FAST MT Super High Cut helmet (Tan)",
      description:
        "The Ops-Core FAST ballistic helmet is popular in special forces all around the world. Can be modified with different components. Tan version.",
      image:
        "https://assets.tarkov.dev/5ac8d6885acfc400180ae7b0-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74M 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7db286f7743a9c7092e3-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-101 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7dd986f774486e1281bf-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-102 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7dfc86f774401e19c390-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-103 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7e2b86f7740874790e20-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-104 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7e4c86f774499a3f3bdd-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-105 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5acf7e7986f774401e19c3a0-grid-image.webp",
    },
    {
      name: "OLI administration office key",
      description:
        "A key to the OLI administration office at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5ccd186f774446d5706e9-grid-image.webp",
    },
    {
      name: "OLI logistics department office key",
      description:
        "A key to the OLI logistics department office at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5cfbd86f7742c825d6104-grid-image.webp",
    },
    {
      name: "OLI outlet utility room key",
      description:
        "A key to the OLI store outlet utility room at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5d20586f77449be26d877-grid-image.webp",
    },
    {
      name: "Power substation utility cabin key",
      description:
        "A key to the power substation utility cabin adjacent to the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5d49886f77455f9731921-grid-image.webp",
    },
    {
      name: "NecrusPharm pharmacy key",
      description:
        "A key to the NecrusPharm pharmacy at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5d64486f774079b080af8-grid-image.webp",
    },
    {
      name: "Kiba Arms outer door key",
      description:
        "A key to the outer door of the KIBA Arms International outlet at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5d7d286f77450166e0a89-grid-image.webp",
    },
    {
      name: "EMERCOM medical unit key",
      description:
        "A key to the EMERCOM medical care unit at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad5db3786f7743568421cce-grid-image.webp",
    },
    {
      name: "OLI cash register key",
      description:
        "A key to the OLI store outlet cash registers at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad7217186f7746744498875-grid-image.webp",
    },
    {
      name: "IDEA cash register key",
      description:
        "A key to the IDEA store outlet cash registers at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad7242b86f7740a6a3abd43-grid-image.webp",
    },
    {
      name: "Goshan cash register key",
      description:
        "A key to the Goshan store outlet cash registers at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5ad7247386f7747487619dc3-grid-image.webp",
    },
    {
      name: "Kiba Arms inner grate door key",
      description:
        "A key to the inner gate door of the KIBA Arms International outlet at the ULTRA shopping mall.",
      image:
        "https://assets.tarkov.dev/5addaffe86f77470b455f900-grid-image.webp",
    },
    {
      name: "M1A SA National Match .062 Blade front sight",
      description:
        "The National Match .062 Blade detachable front sight for M1A rifles, manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5addba3e5acfc4001669f0ab-grid-image.webp",
    },
    {
      name: "M1A 7.62x51 22 inch barrel",
      description:
        "A 22 inch match barrel for M1A based weapons chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5addbac75acfc400194dbc56-grid-image.webp",
    },
    {
      name: "M1A National Match 7.62x51 flash suppressor",
      description:
        "A muzzle brake-compensator for M1A rifles, manufactured by Springfield Armory.",
      image:
        "https://assets.tarkov.dev/5addbb6e5acfc408fb1393fd-grid-image.webp",
    },
    {
      name: "M14 JP Enterprises 7.62x51 Tactical Compensator",
      description:
        "A muzzle brake-compensator for M14 rifles, manufactured by JP Enterprises.",
      image:
        "https://assets.tarkov.dev/5addbb825acfc408fb139400-grid-image.webp",
    },
    {
      name: "M14 Smith Enterprise Good Iron 7.62x51 muzzle brake",
      description:
        "A muzzle brake-compensator for M14 rifles, manufactured by Smith Enterprise.",
      image:
        "https://assets.tarkov.dev/5addbb945acfc4001a5fc44e-grid-image.webp",
    },
    {
      name: "M14 Smith Enterprise Vortex 7.62x51 muzzle brake",
      description:
        "A muzzle brake-compensator for M14 rifles, manufactured by Smith Enterprise.",
      image:
        "https://assets.tarkov.dev/5addbba15acfc400185c2854-grid-image.webp",
    },
    {
      name: "M14 Yankee Hill Phantom 7.62x51 flash hider",
      description:
        "A muzzle brake-compensator manufactured by Yankee Hill to fit M14 rifles.",
      image:
        "https://assets.tarkov.dev/5addbbb25acfc40015621bd9-grid-image.webp",
    },
    {
      name: "M1A ProMag Archangel chassis",
      description:
        "The Archangel polymer chassis for M1A rifles, manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/5addbf175acfc408fb13965b-grid-image.webp",
    },
    {
      name: "M14 UltiMAK M8 Forward Optic mount",
      description:
        "The M8 optic mount manufactured by UltiMAK. Lightweight, fully machined 1913 Picatinny-style rail accepts intermediate eye relief scopes, red dot, holographic, and reflex optics. Installs in place of the factory handguard.",
      image:
        "https://assets.tarkov.dev/5addbfbb5acfc400194dbcf7-grid-image.webp",
    },
    {
      name: "M14 Amega Mini Scout Mount system",
      description:
        "The Mini Scout Mount base for M14 rifles, manufactured by Amega Mounts. Features a top Picatinny rail for mounting various scopes and reflex sights.",
      image:
        "https://assets.tarkov.dev/5addbfd15acfc40015621bde-grid-image.webp",
    },
    {
      name: "M14 A.R.M.S. #18 scope mount",
      description:
        "The A.R.M.S. Inc. scope mount for M14 rifles. Made of 8620 case hardened steel. Equipped with a Weaver rail for installation of various scopes.",
      image:
        "https://assets.tarkov.dev/5addbfe15acfc4001a5fc58b-grid-image.webp",
    },
    {
      name: "M14 Leapers UTG 4-Point Locking Deluxe mount",
      description:
        "The 4-Point Locking Deluxe mount for M14 rifles, manufactured by Leapers Inc. It has Weaver/Picatinny type rails for mounting various scopes and reflex sights.",
      image:
        "https://assets.tarkov.dev/5addbfef5acfc400185c2857-grid-image.webp",
    },
    {
      name: "M14 SAGE International DCSB mount",
      description:
        "The M14 DCSB (Detachable Cantilevered Sight Base) mount for M14 rifles, manufactured by SAGE International. It has a Weaver-type rail for mounting various different sights. Can only be installed on the EBR chassis.",
      image:
        "https://assets.tarkov.dev/5addbffe5acfc4001714dfac-grid-image.webp",
    },
    {
      name: "M14 Vltor CASV-14 rail system",
      description:
        "The CASV-14 Rail System mount manufactured by Vltor. It has a Picatinny-type rail for mounting various optical attachments and accesories, and also a KeyMod mount points on both sides.",
      image:
        "https://assets.tarkov.dev/5addc00b5acfc4001669f144-grid-image.webp",
    },
    {
      name: "M14 SAGE International M14ALCS chassis",
      description:
        "The M14ALCS chassis for M14 rifles from the Enhanced Battle Rifle (EBR) kit. Manufactured by SAGE International.",
      image:
        "https://assets.tarkov.dev/5addc7005acfc4001669f275-grid-image.webp",
    },
    {
      name: "M14 SAGE International M14ALCS (MOD-0) stock",
      description:
        "The M14ALCS (MOD-0) stock for M14 rifles from the Enhanced Battle Rifle (EBR) kit, manufactured by SAGE International.",
      image:
        "https://assets.tarkov.dev/5addc7ac5acfc400194dbd90-grid-image.webp",
    },
    {
      name: "M14 SAGE International M14ALCS (MOD-0) pistol grip",
      description:
        "The M14ALCS (MOD-0) pistol grip for M14 rifles from the Enhanced Battle Rifle (EBR) kit, manufactured by SAGE International.",
      image:
        "https://assets.tarkov.dev/5addc7db5acfc4001669f279-grid-image.webp",
    },
    {
      name: "M14 7.62x51 30-round magazine",
      description:
        "A 30-round double-stack 7.62x51 NATO magazine for the M1 rifle. Produced by Triple K.",
      image:
        "https://assets.tarkov.dev/5addcce35acfc4001a5fc635-grid-image.webp",
    },
    {
      name: "M14 7.62x51 X Products X-14 50-round drum magazine",
      description:
        "A 50 round 7.62x51 drum NATO magazine for the M14 rifle. Manufactured by X Products.",
      image:
        "https://assets.tarkov.dev/5addccf45acfc400185c2989-grid-image.webp",
    },
    {
      name: "MTs 20-01 stock",
      description:
        "A standard stock for MTs 20-01 hunting rifles, but can be also installed on various different shotguns including the bolt-action TOZ-106.",
      image:
        "https://assets.tarkov.dev/5adf23995acfc400185c2aeb-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper)",
      description:
        "Mosin–Nagant M91/30 PU is a sniper variant of the famous russian rifle, which was commonly in use by russian snipers during WW2.",
      image:
        "https://assets.tarkov.dev/5ae08f0a5acfc408fb1398a1-grid-image.webp",
    },
    {
      name: "Mosin Rifle standard stock",
      description: "A regular wooden stock for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5ae096d95acfc400185c2c81-grid-image.webp",
    },
    {
      name: "Mosin Rifle 7.62x54R 5-round magazine",
      description:
        "A standard 7.62x54R 5-round magazine designed for the Mosin rifle. The magazine is installed into the rifle internally and cannot be ejected on the spot, so it's not recommended to take multiple of them into a raid.",
      image:
        "https://assets.tarkov.dev/5ae0973a5acfc4001562206c-grid-image.webp",
    },
    {
      name: "Mosin Rifle front sight",
      description: "A standard-issue front sight for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5ae099875acfc4001714e593-grid-image.webp",
    },
    {
      name: "Mosin Rifle rear sight",
      description: "A standard rear sight for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5ae099925acfc4001a5fc7b3-grid-image.webp",
    },
    {
      name: "Mosin Rifle 7.62x54R 730mm regular barrel",
      description: "A regular 730mm barrel for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5ae09bff5acfc4001562219d-grid-image.webp",
    },
    {
      name: "AR-15 rear sight carry handle",
      description:
        "A detachable carry handle with a rear sight for AR-15 rifles. Standard-issue for M4A1 assault rifles.",
      image:
        "https://assets.tarkov.dev/5ae30bad5acfc400185c2dc4-grid-image.webp",
    },
    {
      name: "LMT SOPMOD stock",
      description:
        "A telescoping stock manufactured by LMT Defense. Part of SOPMOD Block 0.",
      image:
        "https://assets.tarkov.dev/5ae30c9a5acfc408fb139a03-grid-image.webp",
    },
    {
      name: "AR-15 Colt M4 Carbine Length handguard",
      description:
        "A carbine length handguard manufactured by Colt, a standard-issue handguard for the M4A1 assault rifles.",
      image:
        "https://assets.tarkov.dev/5ae30db85acfc408fb139a05-grid-image.webp",
    },
    {
      name: "M4A1 front sight with gas block",
      description:
        "A standard-issue front sight with gas block for M4A1 assault rifles, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5ae30e795acfc408fb139a0b-grid-image.webp",
    },
    {
      name: "M870 Mesa Tactical LEO stock adapter",
      description:
        "Mesa Tactical’s Telescoping Stock Conversion Kit replaces the standard buttstock with an adapter that accepts AR style collapsible stocks and pistol grips.",
      image:
        "https://assets.tarkov.dev/5ae35b315acfc4001714e8b0-grid-image.webp",
    },
    {
      name: "Aluminum splint",
      description: "An aluminum splint for fixing damaged bones in place.",
      image:
        "https://assets.tarkov.dev/5af0454c86f7746bf20992e8-grid-image.webp",
    },
    {
      name: "Can of Majaica coffee beans",
      description:
        "100% Arabica Majaica coffee. Can be stored for a long time without losing flavor.",
      image:
        "https://assets.tarkov.dev/5af0484c86f7740f02001f7f-grid-image.webp",
    },
    {
      name: "Pliers Elite",
      description:
        "A high-quality tool for capturing, manipulating, and cutting wire.",
      image:
        "https://assets.tarkov.dev/5af04b6486f774195a3ebb49-grid-image.webp",
    },
    {
      name: "Ophthalmoscope",
      description: "A medical device for diagnostic eye examination.",
      image:
        "https://assets.tarkov.dev/5af0534a86f7743b6f354284-grid-image.webp",
    },
    {
      name: "Ibuprofen painkillers",
      description:
        "Ibuprofen is a medication in the nonsteroidal anti-inflammatory drug (NSAID) class that is used for treating pain, fever, and inflammation.",
      image:
        "https://assets.tarkov.dev/5af0548586f7743a532b7e99-grid-image.webp",
    },
    {
      name: "Portable Powerbank",
      description: "A portable rechargeable high-capacity battery.",
      image:
        "https://assets.tarkov.dev/5af0561e86f7745f5f3ad6ac-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle EBR",
      description: "null",
      image:
        "https://assets.tarkov.dev/5af08bfd86f774223d4528e2-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle SASS",
      description: "null",
      image:
        "https://assets.tarkov.dev/5af08c4486f774223b094223-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle SOPMOD I",
      description: "null",
      image:
        "https://assets.tarkov.dev/5af08cc686f77424a61595f2-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle Standard",
      description: "null",
      image:
        "https://assets.tarkov.dev/5af08cf886f774223c269184-grid-image.webp",
    },
    {
      name: "Remington Model 870 12ga pump-action shotgun Breacher",
      description: "null",
      image:
        "https://assets.tarkov.dev/5af08d1c86f774223a7aa1b4-grid-image.webp",
    },
    {
      name: "SKS TAPCO Intrafuse chassis",
      description:
        "The Intrafuse SKS stock system equips the carbine with an upper handguard with Picatinny-style rail for optics, lights, laser sights, or other modern accessories. Manufactured by TAPCO.",
      image:
        "https://assets.tarkov.dev/5afd7ded5acfc40017541f5e-grid-image.webp",
    },
    {
      name: "SKS TAPCO Intrafuse buffer tube",
      description:
        "An AR-15-styled Mil-Spec buffer tube designed for the Intrafuse SKS stock system, manufactured by TAPCO.",
      image:
        "https://assets.tarkov.dev/5afd7e095acfc40017541f61-grid-image.webp",
    },
    {
      name: "SKS TAPCO Intrafuse kit SAW-Style pistol grip",
      description:
        "An anatomical pistol grip inspired by the M249 SAW LMG grip. Designed for the Intrafuse SKS stock system. Manufactured by TAPCO.",
      image:
        "https://assets.tarkov.dev/5afd7e445acfc4001637e35a-grid-image.webp",
    },
    {
      name: "AKM/AK-74 FAB Defense UAS stock",
      description:
        "The UAS stock for AKM/AK74-type non-folding assault rifles. Manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5b04473a5acfc40018632f70-grid-image.webp",
    },
    {
      name: "Stark SE-5 Express Forward foregrip",
      description:
        "The Stark SE-5 Express Forward tactical grip enables a more natural grip against the barrel axis. Thanks to that, it reduces recoil and improves the weapon control.",
      image:
        "https://assets.tarkov.dev/5b057b4f5acfc4771e1bd3e9-grid-image.webp",
    },
    {
      name: "AR-15 Tactical Dynamics Skeletonized pistol grip",
      description:
        "A lightweight skeletonized pistol grip for AR-15 weapon systems and compatibles, manufactured by Tactical Dynamics.",
      image:
        "https://assets.tarkov.dev/5b07db875acfc40dc528a5f6-grid-image.webp",
    },
    {
      name: "Steiner LAS/TAC 2 tactical flashlight",
      description: "A tactical LED flashlight manufactured by Steiner.",
      image:
        "https://assets.tarkov.dev/5b07dd285acfc4001754240d-grid-image.webp",
    },
    {
      name: "ERGO F93 PRO stock",
      description: "The F93 PRO telescoping stock, manufactured by ERGO.",
      image:
        "https://assets.tarkov.dev/5b0800175acfc400153aebd4-grid-image.webp",
    },
    {
      name: "SA-58 7.62x51 11 inch barrel",
      description: "An 11 inch (280mm) long barrel for DS Arms SA-58 7.62x51.",
      image:
        "https://assets.tarkov.dev/5b099a765acfc47a8607efe3-grid-image.webp",
    },
    {
      name: "SA-58 quad rail handguard",
      description:
        "A quad rail handguard for SA-58 rifles, manufactured by DS Arms. Equipped with 4 mounts for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b099a9d5acfc47a8607efe7-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 20-round magazine",
      description:
        "A 20-round double-stack steel magazine for FAL/SA-58 7.62x51 NATO rounds.",
      image:
        "https://assets.tarkov.dev/5b099ac65acfc400186331e1-grid-image.webp",
    },
    {
      name: "SA-58 3-Prong Trident 7.62x51 flash hider",
      description:
        "A three-prong flash hider for SA-58 assault rifles, manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b099b7d5acfc400186331e4-grid-image.webp",
    },
    {
      name: "SA-58 SAW-style pistol grip (Black)",
      description:
        "An anatomical pistol grip for SA-58 assault rifles, inspired by the M249 SAW LMG grip, manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b099b965acfc400186331e6-grid-image.webp",
    },
    {
      name: "SA-58 Extreme Duty dust cover",
      description:
        "The Extreme Duty dust cover with an integrated Picatinny rail for SA-58 assault rifles, manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b099bb25acfc400186331e8-grid-image.webp",
    },
    {
      name: "SA-58 buffer tube adapter",
      description:
        "An adapter for installation of telescopic stock buffer tubes on SA-58 rifles. Manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b099bf25acfc4001637e683-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle",
      description:
        "The SA-58 OSW (Operations Specialist Weapon), manufactured by American company DSA (or DS Arms - David Selvaggio Arms), is a legal copy of the FAL. It's made with the same Steyr-Daimler-Puch production line equipment as the StG-58. It may come with a different barrel length, an aluminum-alloy lower receiver, and improved glass-filled nylon furniture. Civilian models are semi-automatic, but military and law enforcement clients can procure select-fire models that have a fully automatic cyclic rate of 750 rounds/minute. The DSA-58 can use any metric-measurement FAL magazines.",
      image:
        "https://assets.tarkov.dev/5b0bbe4e5acfc40dc528a72d-grid-image.webp",
    },
    {
      name: "SA-58 Holland Type rear sight",
      description:
        "The Holland Type rear sight for SA-58 assault rifle, manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b0bc22d5acfc47a8607f085-grid-image.webp",
    },
    {
      name: "AKM/AK-74 Magpul Zhukov-S stock",
      description:
        "The Zhukov-S stock, designed for installation on AKM/AK-74-type non-folding assault rifles. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5b0e794b5acfc47a877359b2-grid-image.webp",
    },
    {
      name: "Glock 18C 9x19 machine pistol",
      description:
        "The Glock 18 is a selective-fire variant of the Glock 17. The firearm is typically used with an extended 33-round-capacity magazine, although other magazines from the Glock 17 can be used, with available capacities of 10, 17, or 19 rounds. It has a keyhole opening cut into the forward portion of the slide, similar to the opening on the Glock long-slide models, although the Glock 18 has a standard-length slide. The keyhole opening provides an area to allow the four, progressively larger (from back to front) compensator cuts machined into the barrel to vent the propellant gases upwards, affording more control over the rapid-firing machine pistol.",
      image:
        "https://assets.tarkov.dev/5b1fa9b25acfc40018633c01-grid-image.webp",
    },
    {
      name: "Glock 18C 9x19 barrel with a compensator",
      description:
        "A 114mm long barrel with a mounted compensator for Glock 18C automatic pistols.",
      image:
        "https://assets.tarkov.dev/5b1fa9ea5acfc40018633c0a-grid-image.webp",
    },
    {
      name: "Glock 18C 9x19 pistol slide",
      description: "A standard-issue slide for Glock 18C 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/5b1faa0f5acfc40dc528aeb5-grid-image.webp",
    },
    {
      name: "AK 7.62x39 bakelite 40-round magazine",
      description:
        "A standard 40-round bakelite magazine for the RPK. It fits into 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5b1fb3e15acfc4001637f068-grid-image.webp",
    },
    {
      name: "AK 7.62x39 aluminium 10-round magazine",
      description:
        "A 10-round aluminum magazine for 7.62x39 AK and compatible weapons, made of light aluminum alloy and reinforced by additional ribs. This modification comes with a 10-round capacity limiter for the civilian market. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5b1fd4e35acfc40018633c39-grid-image.webp",
    },
    {
      name: "AKM/AK-74 Zenit PT Lock",
      description:
        "The lock is designed to install the PT-1 stocks to a weapon. This model is designed for installation on the AKM and AK-74 non-folding assault rifles. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5b222d335acfc4771e1be099-grid-image.webp",
    },
    {
      name: "AK Zenit PT-1 Klassika stock",
      description:
        "The telescopic PT-1 stock is mounted on the standard place of the stock AK 103, 104, 105, 74M, AKS74U and PP Vityaz, has a length adjustment mechanism and an adjustable cheek. A special lock is required for installation. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5b222d405acfc400153af4fe-grid-image.webp",
    },
    {
      name: "AR-15 Radian Weapons Raptor charging handle",
      description:
        "The Raptor charging handle for AR-15 and compatible systems. Manufactured by Radian Weapons.",
      image:
        "https://assets.tarkov.dev/5b2240bf5acfc40dc528af69-grid-image.webp",
    },
    {
      name: "AK TROY Full Length Rail handguard & gas tube combo",
      description:
        "The Full Length Rail handguard and gas tube combo. The cooling holes allow the rail to run cool, even after extended firing. Machined from hardened aircraft aluminum with stainless steel components and finished in MIL-SPEC hardcoat anodizing. Features a 5 inch top rail for installation of optics and tactical devices. Manufactured by TROY Industries.",
      image:
        "https://assets.tarkov.dev/5b237e425acfc4771e1be0b6-grid-image.webp",
    },
    {
      name: "Burris FullField TAC30 1-4x24 30mm riflescope",
      description:
        "The TAC30 offers a very wide field of view, and 1x magnification at the lower end - making for easy, fast target acquisition. The 4x full zoom and Ballistic CQ reticle make shots out to about 300 yards very practical. The illuminated center dot and large, bright circle allow for instant target engagement at close distances.",
      image:
        "https://assets.tarkov.dev/5b2388675acfc4771e1be0be-grid-image.webp",
    },
    {
      name: "Burris AR-P.E.P.R. 30mm ring scope mount",
      description:
        "The Burris P.E.P.R. universal 30mm scope base mount for installation on Picatinny rails.",
      image:
        "https://assets.tarkov.dev/5b2389515acfc4771e1be0c0-grid-image.webp",
    },
    {
      name: "AR-15 Alexander Arms MK10 rifle length handguard",
      description:
        "The MK10 lightweight handguard system manufactured by Alexander Arms. Made of G10 composite fiberglass and compatible with most AR-15-type carbines.",
      image:
        "https://assets.tarkov.dev/5b2cfa535acfc432ff4db7a0-grid-image.webp",
    },
    {
      name: "AK Magpul MOE pistol grip (Black)",
      description:
        "The MOE (Magpul Original Equipment) lightweight pistol grip for AK weapon systems, manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5b30ac585acfc433000eb79c-grid-image.webp",
    },
    {
      name: "Holosun HS401G5 reflex sight",
      description:
        "The HS401G5 reflex sight whith a built-in laser designator, manufactured by Holosun.",
      image:
        "https://assets.tarkov.dev/5b30b0dc5acfc400153b7124-grid-image.webp",
    },
    {
      name: "Alexander Arms 3 inch rail",
      description:
        "The Alexander Arms 3 inch rail allows installation of additional equipment on the MK10 handguard.",
      image:
        "https://assets.tarkov.dev/5b30bc165acfc40016387293-grid-image.webp",
    },
    {
      name: "Alexander Arms 10 inch rail",
      description:
        "The Alexander Arms 10 inch rail allows installation of additional equipment on the MK10 handguard.",
      image:
        "https://assets.tarkov.dev/5b30bc285acfc47a8608615d-grid-image.webp",
    },
    {
      name: "SIG Sauer ROMEO sight mount",
      description: "The SIG Sauer mount base for ROMEO-type reflex sights.",
      image:
        "https://assets.tarkov.dev/5b31163c5acfc400153b71cb-grid-image.webp",
    },
    {
      name: "SIG Sauer ROMEO4 reflex sight",
      description:
        "SIG Sauer ROMEO4 is a reflex sight for fast and accurate target acquisition.",
      image:
        "https://assets.tarkov.dev/5b3116595acfc40019476364-grid-image.webp",
    },
    {
      name: "SilencerCo Salvo 12 12ga sound suppressor",
      description:
        "A sound moderator made by SilencerCo for 12ga shotguns and carbines (Saiga, Vepr and others). Quite heavy, but very effective nonetheless. Requires an adapter.",
      image:
        "https://assets.tarkov.dev/5b363dd25acfc4001a598fd2-grid-image.webp",
    },
    {
      name: "SilencerCo Salvo 12 choke adapter",
      description:
        "The SilencerCo choke adapter for Salvo 12g sound suppressors.",
      image:
        "https://assets.tarkov.dev/5b363dea5acfc4771e1c5e7e-grid-image.webp",
    },
    {
      name: "SilencerCo Salvo 12 thread adapter",
      description:
        "The SilencerCo thread adapter for Salvo 12g sound suppressors.",
      image:
        "https://assets.tarkov.dev/5b363e1b5acfc4771e1c5e80-grid-image.webp",
    },
    {
      name: "Vltor EMOD stock",
      description:
        "The EMOD buttstock designed for AR-15 weapon systems. Manufactured by Vltor.",
      image:
        "https://assets.tarkov.dev/5b39f8db5acfc40016387a1b-grid-image.webp",
    },
    {
      name: "P226 Hogue Rubberized pistol grip",
      description:
        "A rubber pistol grip with finger grooves for SIG Sauer P226 pistols, manufactured by Hogue.",
      image:
        "https://assets.tarkov.dev/5b39ffbd5acfc47a8773fb06-grid-image.webp",
    },
    {
      name: "P226 Bridge sight mount",
      description:
        "The SIG Sauer Bridge sight mount for pistols. Allows mounting of various sights or tactical accesories.",
      image:
        "https://assets.tarkov.dev/5b3a08b25acfc4001754880c-grid-image.webp",
    },
    {
      name: "Yankee Hill Annihilator multi-caliber flash hider",
      description:
        "A multicaliber flash hider designed for the AR-15 platform, manufactured by Yankee Hill. Fits 7.62x51, 5.56x45, 9x19 barrels.",
      image:
        "https://assets.tarkov.dev/5b3a16655acfc40016387a2a-grid-image.webp",
    },
    {
      name: "Zenit Klesch-2U tactical flashlight",
      description:
        "The Klesch-2U LED tactical flashlight with a mount on the Picatinny rail is designed to detect and illuminate the target (object) when observing, inspecting and firing at night and in conditions of limited visibility. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5b3a337e5acfc4704b4a19a0-grid-image.webp",
    },
    {
      name: "Armasight Vulcan universal base",
      description:
        "The Armasight universal base mount for installation of the Vulcan series scopes.",
      image:
        "https://assets.tarkov.dev/5b3b6dc75acfc47a8773fb1e-grid-image.webp",
    },
    {
      name: "Armasight Vulcan MG 3.5x Bravo night vision scope",
      description:
        "Vulcan MG is a 3rd generation night vision scope with a 3.5x magnification manufactured by Armasight.",
      image:
        "https://assets.tarkov.dev/5b3b6e495acfc4330140bd88-grid-image.webp",
    },
    {
      name: "TT-33 7.62x25 TT pistol (Golden)",
      description:
        "A legendary pistol that has seen numerous military conflicts throughout the years and is still in service in certain regions of the world, in one variation or another. This one is a classic TT-33, the most mass-produced version. It features a Browning short-recoil tilting-barrel system, but other than that, the construction design is very unique - it is purposefully simple, single-action, and no safety measures except half-cock notch, which makes it be able to withstand horrible operating abuse. Thanks to the powerful 7.62x25 cartridge and relatively long barrel, the TT boasts high muzzle velocity, penetration, and impressive accuracy, even over long distances. A special gold edition.",
      image:
        "https://assets.tarkov.dev/5b3b713c5acfc4330140bd8d-grid-image.webp",
    },
    {
      name: "Nightforce Magmount 30mm ring scope mount",
      description:
        "Nightforce X-Treme Duty Ultralite one piece Magmount is a universal 30mm scope base mount for installation on Picatinny rails.",
      image:
        "https://assets.tarkov.dev/5b3b99265acfc4704b4a1afb-grid-image.webp",
    },
    {
      name: "EOTech Vudu 1-6x24 30mm riflescope",
      description:
        "The EOTech Vudu 1-6x24 riflescope, equally effective on AR platforms and bolt-action rifles. Its EOTech-style speed ring reticle is designed for fast target engagement at low power, while delivering the resolution and accuracy needed for longer range targets.",
      image:
        "https://assets.tarkov.dev/5b3b99475acfc432ff4dcbee-grid-image.webp",
    },
    {
      name: "TT 7.62x25 116mm gilded barrel",
      description:
        "A 116mm barrel for the TT pistol, gilded by an unknown gunsmith.",
      image:
        "https://assets.tarkov.dev/5b3baf8f5acfc40dc5296692-grid-image.webp",
    },
    {
      name: "TT ornated side grips",
      description: "Ornated side grips for the TT pistol. So fancy and swaggy.",
      image:
        "https://assets.tarkov.dev/5b3cadf35acfc400194776a0-grid-image.webp",
    },
    {
      name: "Armasight Vulcan MG scope eyecup",
      description:
        "A rubber eyecup for the Vulcan MG riflescope, manufactured by Armasight.",
      image:
        "https://assets.tarkov.dev/5b3cbc235acfc4001863ac44-grid-image.webp",
    },
    {
      name: "Armband (White)",
      description: "A white identification armband.",
      image:
        "https://assets.tarkov.dev/5b3f16c486f7747c327f55f7-grid-image.webp",
    },
    {
      name: "Armband (Red)",
      description: "A red identification armband.",
      image:
        "https://assets.tarkov.dev/5b3f3ade86f7746b6b790d8e-grid-image.webp",
    },
    {
      name: "Armband (Blue)",
      description: "A blue identification armband.",
      image:
        "https://assets.tarkov.dev/5b3f3af486f774679e752c1f-grid-image.webp",
    },
    {
      name: "Armband (Green)",
      description: "A green identification armband.",
      image:
        "https://assets.tarkov.dev/5b3f3b0186f774021a2afef7-grid-image.webp",
    },
    {
      name: "Armband (Yellow)",
      description: "A yellow identification armband.",
      image:
        "https://assets.tarkov.dev/5b3f3b0e86f7746752107cda-grid-image.webp",
    },
    {
      name: "Mosin Rifle Kochetov mount",
      description:
        "Designed specially for the Mosin rifle, the Kochetov mount allows installation of the PU 3.5 scope on the rifle.",
      image:
        "https://assets.tarkov.dev/5b3f7bf05acfc433000ecf6b-grid-image.webp",
    },
    {
      name: "PU 3.5x ring scope mount",
      description:
        "Regular rings for the PU 3.5x scope, installed on the Kochetov mount.",
      image:
        "https://assets.tarkov.dev/5b3f7c005acfc4704b4a1de8-grid-image.webp",
    },
    {
      name: "PU 3.5x riflescope",
      description: "The PU 3.5x riflescope for Mosin sniper rifles.",
      image:
        "https://assets.tarkov.dev/5b3f7c1c5acfc40dc5296b1d-grid-image.webp",
    },
    {
      name: "HighCom Striker ULACH IIIA helmet (Black)",
      description:
        "A combat helmet with the ears and back of the head protection, manufactured by HighCom. Does not feature any additional mounts. Black version.",
      image:
        "https://assets.tarkov.dev/5b40e1525acfc4771e1c6611-grid-image.webp",
    },
    {
      name: "HighCom Striker ULACH IIIA helmet (Desert Tan)",
      description:
        "A combat helmet with the ears and back of the head protection, manufactured by HighCom. Does not feature any additional mounts. Desert Tan version.",
      image:
        "https://assets.tarkov.dev/5b40e2bc5acfc40016388216-grid-image.webp",
    },
    {
      name: "HighCom Striker ACHHC IIIA helmet (Black)",
      description:
        "A combat helmet manufactured by HighCom, the High Cut version. Does not feature any additional mounts. Black version.",
      image:
        "https://assets.tarkov.dev/5b40e3f35acfc40016388218-grid-image.webp",
    },
    {
      name: "HighCom Striker ACHHC IIIA helmet (Olive Drab)",
      description:
        "A combat helmet manufactured by HighCom, the High Cut version. Does not feature any additional mounts. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/5b40e4035acfc47a87740943-grid-image.webp",
    },
    {
      name: "BEAR baseball cap (Black)",
      description: "A tactical BEAR PMC baseball cap. Black version.",
      image:
        "https://assets.tarkov.dev/5b40e5e25acfc4001a599bea-grid-image.webp",
    },
    {
      name: "USEC baseball cap (Black)",
      description: "A tactical USEC PMC baseball cap. Black version.",
      image:
        "https://assets.tarkov.dev/5b40e61f5acfc4001a599bec-grid-image.webp",
    },
    {
      name: "Shemagh (Tan)",
      description: "A favorite headpiece of PMCs around the globe.",
      image:
        "https://assets.tarkov.dev/5b4325355acfc40019478126-grid-image.webp",
    },
    {
      name: "Neoprene mask",
      description:
        "Neoprene light mask for the face with a creative image of a fiery flame. With such a mask, you're not just cool, you're dangerous.",
      image:
        "https://assets.tarkov.dev/5b4326435acfc433000ed01d-grid-image.webp",
    },
    {
      name: "Bandana",
      description:
        "A green colored headgear, actively used by special forces around the world.",
      image:
        "https://assets.tarkov.dev/5b43271c5acfc432ff4dce65-grid-image.webp",
    },
    {
      name: "MIL-TEC boonie hat",
      description:
        "MIL-TEC-produced boonie hat, which can be used for protection from the sun. Or you can operate wearing it like a true SEAL Team Six operator.",
      image:
        "https://assets.tarkov.dev/5b4327aa5acfc400175496e0-grid-image.webp",
    },
    {
      name: "Pompon hat",
      description:
        "A warm hat with a pompon. Only Scavs would wear something like this. Well, or some psychos who want to be in the spotlight.",
      image:
        "https://assets.tarkov.dev/5b4329075acfc400153b78ff-grid-image.webp",
    },
    {
      name: "DevTac Ronin ballistic helmet",
      description:
        "A Japan-styled tactical helmet, manufactured by DevTac. Not used by any military or special forces. Just somehow happened to be in Tarkov for some frivolous price. Features a full protection of the whole head, but the armor class is not good enough to actually be useful in combat.",
      image:
        "https://assets.tarkov.dev/5b4329f05acfc47a86086aa1-grid-image.webp",
    },
    {
      name: "Shattered lightweight armored mask",
      description:
        "The Shattered face protection mask, reinforced with aramid fibers.",
      image:
        "https://assets.tarkov.dev/5b432b2f5acfc4771e1c6622-grid-image.webp",
    },
    {
      name: "Deadly Skull mask",
      description:
        "A lightweight mask that does not provide any protection, but at least makes you look scarier.",
      image:
        "https://assets.tarkov.dev/5b432b6c5acfc4001a599bf0-grid-image.webp",
    },
    {
      name: "GSSh-01 active headset",
      description:
        "The GSSh-01 headset is used in the Russian Ratnik military gear set.",
      image:
        "https://assets.tarkov.dev/5b432b965acfc47a8774094e-grid-image.webp",
    },
    {
      name: "6B34 anti-fragmentation glasses",
      description:
        "A pair of 6B34 anti-fragmentation glasses from the Ratnik Russian military gear set.",
      image:
        "https://assets.tarkov.dev/5b432be65acfc433000ed01f-grid-image.webp",
    },
    {
      name: "GP-5 gas mask",
      description:
        "The civil gas mask model 5 or GP-5 is a filtering agent for individual protection of the respiratory organs, eyes and skin of a person's face.",
      image:
        "https://assets.tarkov.dev/5b432c305acfc40019478128-grid-image.webp",
    },
    {
      name: "LShZ light helmet",
      description:
        "A lightweight protective helmet made in Russia. In fact the copy of Ops-Core FAST helmet, but with lower characteristics.",
      image:
        "https://assets.tarkov.dev/5b432d215acfc4771e1c6624-grid-image.webp",
    },
    {
      name: "Momex balaclava",
      description: "A tactical balaclava with a single hole for eyes.",
      image:
        "https://assets.tarkov.dev/5b432f3d5acfc4704b4a1dfb-grid-image.webp",
    },
    {
      name: "Medical bloodset",
      description:
        "A set of medical instruments necessary for blood transfusion.",
      image:
        "https://assets.tarkov.dev/5b4335ba86f7744d2837a264-grid-image.webp",
    },
    {
      name: "Fuel conditioner",
      description:
        "A fuel conditioner that improves the quality of diesel fuel. Rare and specific composition.",
      image:
        "https://assets.tarkov.dev/5b43575a86f77424f443fe62-grid-image.webp",
    },
    {
      name: "WI-FI Camera",
      description: "A remote-controlled WI-FI camera.",
      image:
        "https://assets.tarkov.dev/5b4391a586f7745321235ab2-grid-image.webp",
    },
    {
      name: "Glock 18C 9x19 machine pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b439b1f86f7744fd8059cbe-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b439b5686f77428bd137424-grid-image.webp",
    },
    {
      name: "TT-33 7.62x25 TT pistol (Golden)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b44abe986f774283e2e3512-grid-image.webp",
    },
    {
      name: "ANA Tactical Beta 2 Battle backpack",
      description:
        "A lightweight and capacious backpack from ANA Tactical. Specially designed for use in dynamic conditions and on rough terrain.",
      image:
        "https://assets.tarkov.dev/5b44c6ae86f7742d1627baea-grid-image.webp",
    },
    {
      name: "BlackHawk! Commando chest harness (Desert Tan)",
      description:
        "Designed for comfort and quick access, this harness puts a lot of additional magazines at the user's fingertips. Manufactured by BlackHawk. Desert Tan version.",
      image:
        "https://assets.tarkov.dev/5b44c8ea86f7742d1627baf1-grid-image.webp",
    },
    {
      name: "5.11 Tactical TacTec plate carrier",
      description:
        "A plate carrier with armor plates made of polyethylene (Russian GOST class 5 protection) and a set of pouches for use with assault rifles. Manufactured by 5.11 Tactical.",
      image:
        "https://assets.tarkov.dev/5b44cad286f77402a54ae7e5-grid-image.webp",
    },
    {
      name: "IOTV Gen4 body armor (Full Protection Kit)",
      description:
        "The Improved Outer Tactical Vest (IOTV) Gen IV is designed to permit maximum freedom of movement required to assume correct firing positions with the agility to execute and maneuver tasks. Optimal design characteristics ensure the best possible weight distribution of both the ballistic body armor system as well as additional load bearing equipment, thus providing enhanced comfort, wear duration, and mobility. Full protection kit.",
      image:
        "https://assets.tarkov.dev/5b44cd8b86f774503d30cba2-grid-image.webp",
    },
    {
      name: "IOTV Gen4 body armor (Assault Kit)",
      description:
        "The Improved Outer Tactical Vest (IOTV) Gen IV is designed to permit maximum freedom of movement required to assume correct firing positions with the agility to execute and maneuver tasks. Optimal design characteristics ensure the best possible weight distribution of both the ballistic body armor system as well as additional load bearing equipment, thus providing enhanced comfort, wear duration, and mobility. Increased ergonomics assault kit.",
      image:
        "https://assets.tarkov.dev/5b44cf1486f77431723e3d05-grid-image.webp",
    },
    {
      name: "IOTV Gen4 body armor (High Mobility Kit)",
      description:
        "The Improved Outer Tactical Vest (IOTV) Gen IV is designed to permit maximum freedom of movement required to assume correct firing positions with the agility to execute and maneuver tasks. Optimal design characteristics ensure the best possible weight distribution of both the ballistic body armor system as well as additional load bearing equipment, thus providing enhanced comfort, wear duration, and mobility. Increased mobility and comfort kit.",
      image:
        "https://assets.tarkov.dev/5b44d0de86f774503d30cba8-grid-image.webp",
    },
    {
      name: "BNTI Kirasa-N body armor",
      description:
        "The Kirasa N body armor is designed for the army and police special forces of the Russian Federation. The bulletproof vest provides circular protection of the human torso. Elements of the damper provide ventilation of the under armor space and reduce the blunt damage.",
      image:
        "https://assets.tarkov.dev/5b44d22286f774172b0c9de8-grid-image.webp",
    },
    {
      name: "Kiver-M face shield",
      description:
        "A special faceshield for the FORT Kiver-M bulletproof helmet, made out of heavy-duty glass.",
      image:
        "https://assets.tarkov.dev/5b46238386f7741a693bcf9c-grid-image.webp",
    },
    {
      name: "TROY QARS 3.2 inch rail",
      description:
        "The TROY QARS 3.2 inch rail allows installation of additional equipment on the TROY Full Length Rail AK handguard/gas tube combo.",
      image:
        "https://assets.tarkov.dev/5b4736a986f774040571e998-grid-image.webp",
    },
    {
      name: "TROY QARS 4.2 inch rail",
      description:
        "The TROY QARS 4.2 inch rail allows installation of additional equipment on the TROY Full Length Rail AK handguard/gas tube combo.",
      image:
        "https://assets.tarkov.dev/5b4736b986f77405cb415c10-grid-image.webp",
    },
    {
      name: "T H I C C Weapon case",
      description:
        "A storage case for weapons, ammunition, and weapon parts. A special edition with an increased storage volume to accommodate larger and longer weapons.",
      image:
        "https://assets.tarkov.dev/5b6d9ce188a4501afc1b2b25-grid-image.webp",
    },
    {
      name: "SA-58 7.62x51 16 inch barrel",
      description: "A 16 inch (406mm) barrel for DS Arms SA-58 7.62x51.",
      image:
        "https://assets.tarkov.dev/5b7be1125acfc4001876c0e5-grid-image.webp",
    },
    {
      name: "SA-58 7.62x51 21 inch barrel",
      description: "A 21 inch (533mm) barrel for DS Arms SA-58 7.62x51.",
      image:
        "https://assets.tarkov.dev/5b7be1265acfc400161d0798-grid-image.webp",
    },
    {
      name: "SA-58 quad rail full length handguard",
      description:
        "The DS Arms full length quad rail handguard for SA-58 rifles. Equipped with 4 mounts for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b7be1ca5acfc400170e2d2f-grid-image.webp",
    },
    {
      name: "SA-58/FAL AIM Sports Universal KeyMod handguard",
      description:
        "The AIM Sports universal KeyMod handguard for FAL series rifles equipped with a KeyMod interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b7be2345acfc400196d524a-grid-image.webp",
    },
    {
      name: "Vltor CASV 2 inch rail",
      description:
        "The Vltor CASV 2 inch rail allows installation of additional equipment on the handguards with the standard CASV interface.",
      image:
        "https://assets.tarkov.dev/5b7be4575acfc400161d0832-grid-image.webp",
    },
    {
      name: "Vltor CASV 4 inch rail",
      description:
        "The Vltor CASV 4 inch rail allows installation of additional equipment on the handguards with the standard CASV interface.",
      image:
        "https://assets.tarkov.dev/5b7be4645acfc400170e2dcc-grid-image.webp",
    },
    {
      name: "Vltor CASV 5 inch rail",
      description:
        "The Vltor CASV 5 inch rail allows installation of additional equipment on the handguards equipped with a standard CASV interface.",
      image:
        "https://assets.tarkov.dev/5b7be46e5acfc400170e2dcf-grid-image.webp",
    },
    {
      name: "Magpul M-LOK 2.5 inch rail",
      description:
        "The Magpul M-LOK 2.5 inch rail allows installation of additional equipment on the handguards with the standard M-LOK interface.",
      image:
        "https://assets.tarkov.dev/5b7be47f5acfc400170e2dd2-grid-image.webp",
    },
    {
      name: "Magpul M-LOK 4.1 inch rail",
      description:
        "The Magpul M-LOK 4.1 inch rail allows installation of additional equipment on the handguards equipped with an M-LOK interface.",
      image:
        "https://assets.tarkov.dev/5b7be4895acfc400170e2dd5-grid-image.webp",
    },
    {
      name: "SA-58/FAL AIM Sports Universal M-LOK handguard",
      description:
        "The AIM Sports universal M-LOK handguard for FAL series rifles equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b7bebc85acfc43bca706666-grid-image.webp",
    },
    {
      name: "FAL original handguard",
      description:
        "The original Austrian handguard for FAL series rifles manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5b7bed205acfc400161d08cc-grid-image.webp",
    },
    {
      name: "SA-58/FAL Vltor CASV-FAL handguard",
      description:
        "The Vltor CASV-FAL handguard for FAL series rifles equipped with a CASV interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b7bedd75acfc43d825283f9-grid-image.webp",
    },
    {
      name: "SA-58/FAL Vltor CASV-FAS handguard",
      description:
        "The Vltor CASV-FAS handguard for FAL series rifles, equipped with a CASV interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5b7bee755acfc400196d5383-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 10-round magazine",
      description:
        "A 10-round double-stack steel magazine for FAL/SA-58 7.62x51 NATO rounds.",
      image:
        "https://assets.tarkov.dev/5b7bef1e5acfc43d82528402-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 30-round magazine",
      description:
        "A 30-round double-stack steel magazine for FAL/SA-58 7.62x51 NATO rounds.",
      image:
        "https://assets.tarkov.dev/5b7bef5d5acfc43bca7067a3-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 X Products X-FAL 50-round drum magazine",
      description:
        "X-FAL is a 50-round drum magazine for FAL/SA-58 7.62x51 NATO rounds. Manufactured by X Products.",
      image:
        "https://assets.tarkov.dev/5b7bef9c5acfc43d102852ec-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 MMW polymer 20-round magazine",
      description:
        "A 20-round double-stack plastic magazine for FAL/SA-58 7.62x51 NATO rounds. Manufactured by Moses Machine Works.",
      image:
        "https://assets.tarkov.dev/5b7c2d1d5acfc43d1028532a-grid-image.webp",
    },
    {
      name: "Lucky Scav Junk box",
      description:
        "A large storage case for all sorts of different items and goods that you may or may not need for later barters.",
      image:
        "https://assets.tarkov.dev/5b7c710788a4506dec015957-grid-image.webp",
    },
    {
      name: "SA-58/FAL 7.62x51 30-round magazine",
      description:
        "A 30-round double-stack steel 7.62x51 magazine for L1A1 Self-Loading Rifle (SLR), a British version of FN FAL.",
      image:
        "https://assets.tarkov.dev/5b7d37845acfc400170e2f87-grid-image.webp",
    },
    {
      name: "SA-58/FAL Magpul PRS 2 polymer stock",
      description:
        "The PRS 2 polymer stock for FAL series rifles. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5b7d63b75acfc400170e2f8a-grid-image.webp",
    },
    {
      name: "SA-58 folding stock",
      description:
        "A folding steel stock for SA-58 assault rifles. Manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d63cf5acfc4001876c8df-grid-image.webp",
    },
    {
      name: "SA-58 SPR stock",
      description:
        "A polymer stock from the SPR (Special Purpose Rifle) kit for SA-58 assault rifles, manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d63de5acfc400170e2f8d-grid-image.webp",
    },
    {
      name: "SA-58 BRS stock",
      description:
        "The BRS (Battle Rifle Stock) buttstock for SA-58 assault rifles. Manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d64555acfc4001876c8e2-grid-image.webp",
    },
    {
      name: "SA-58 humpback polymer stock",
      description:
        "A polymer humpback-style stock for SA-58 assault rifles. Manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d645e5acfc400170e2f90-grid-image.webp",
    },
    {
      name: "SA-58/FAL Belgian Style handguard",
      description:
        "The Belgian variant handguard for FAL rifles manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d671b5acfc43d82528ddd-grid-image.webp",
    },
    {
      name: "SA-58 pistol grip",
      description:
        "A standard pistol grip for SA-58 rifles manufactured by DS Arms.",
      image:
        "https://assets.tarkov.dev/5b7d678a5acfc4001a5c4022-grid-image.webp",
    },
    {
      name: "SA-58 FAB Defense AG-FAL pistol grip",
      description:
        "The AG-FAL anatomical pistol grip for SA-58 rifles manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5b7d679f5acfc4001a5c4024-grid-image.webp",
    },
    {
      name: "SA-58 Austrian Style 7.62x51 muzzle brake",
      description:
        "An Austrian Style muzzle brake manufactured by DS Arms for SA-58 assault rifles.",
      image:
        "https://assets.tarkov.dev/5b7d68af5acfc400170e30c3-grid-image.webp",
    },
    {
      name: "AR-10 2A Armanent X3 7.62x51 compensator",
      description:
        "The X3 compensator designed for installation on AR-10-type systems and compatibles. Manufactured by 2A Armament.",
      image:
        "https://assets.tarkov.dev/5b7d693d5acfc43bca706a3d-grid-image.webp",
    },
    {
      name: "FAL standard dust cover",
      description: "A standard-issue dust cover for FAL-series rifles.",
      image:
        "https://assets.tarkov.dev/5b7d6c105acfc40015109a5f-grid-image.webp",
    },
    {
      name: "AK Hexagon tubular handguard",
      description:
        "A tubular handguard for AK family automatic rifles, manufactured by Hexagon.",
      image:
        "https://assets.tarkov.dev/5b800e9286f7747a8b04f3ff-grid-image.webp",
    },
    {
      name: "Hexagon medium length rail",
      description:
        "A medium length rail for the Hexagon handguard, allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/5b800ebc86f774394e230a90-grid-image.webp",
    },
    {
      name: "Hexagon short length rail",
      description:
        "A short length rail for the Hexagon handguard, allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/5b800ed086f7747baf6e2f9e-grid-image.webp",
    },
    {
      name: "AK Hexagon tubular handguard (Anodized Red)",
      description:
        "A tubular handguard for AK family automatic rifles, manufactured by Hexagon. Anodized Red version. DA RED GOEZ FASTA!",
      image:
        "https://assets.tarkov.dev/5b80242286f77429445e0b47-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle AUT",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b83f22086f77464e15a1d5f-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle BEL",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b83f23a86f7746d3d190a73-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle PBR",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b83f29886f7746d956305a1-grid-image.webp",
    },
    {
      name: "Hexagon short length rail (Anodized Red)",
      description:
        "A short length rail for the Hexagon handguard, allows installation of additional tactical equipment. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5b84038986f774774913b0c1-grid-image.webp",
    },
    {
      name: "Hexagon medium length rail (Anodized Red)",
      description:
        "A medium length rail for the Hexagon handguard, allows installation of additional tactical equipment. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5b8403a086f7747ff856f4e2-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5b8683a486f77467f2423114-grid-image.webp",
    },
    {
      name: "Mosin Rifle Bramit 7.62x54R sound suppressor",
      description: "A standard sound suppressor for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5b86a0e586f7745b600ccb23-grid-image.webp",
    },
    {
      name: "HK MP7A1 4.6x30 submachine gun",
      description:
        "The HK MP7 submachine gun is extremely compact, lightweight, can be used in very confined spaces, and is practically recoil-free. It can be carried continuously, making it the ideal personal weapon for the soldier of today. Those who carry it will be suitably armed for the broadest range of operations. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba26383d4351e00334c93d9-grid-image.webp",
    },
    {
      name: "HK MP7 4.6x30 20-round magazine",
      description:
        "A standard 20-round 4.6x30 magazine for the MP7 SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba264f6d4351e0034777d52-grid-image.webp",
    },
    {
      name: "HK MP7 4.6x30 30-round magazine",
      description:
        "A standard 30-round 4.6x30 magazine for the MP7 SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba2657ed4351e0035628ff2-grid-image.webp",
    },
    {
      name: "HK MP7 4.6x30 40-round magazine",
      description:
        "A standard 40-round 4.6x30 magazine for the MP7 SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba26586d4351e44f824b340-grid-image.webp",
    },
    {
      name: "4.6x30mm FMJ SX",
      description:
        "A 4.6x30mm HK FMJ SX cartridge with a 2.6 gram lead-antimony alloy core bullet with a brass full metal jacket (FMJ) in a brass case. This cartridge was developed for general military use, but the ballistic capabilities of its bullet allow it to pierce basic and intermediate ballistic body protections, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5ba2678ad4351e44f824b344-grid-image.webp",
    },
    {
      name: "4.6x30mm Action SX",
      description:
        "A 4.6x30mm HK Action SX cartridge with a 2 gram hollow-point bullet made entirely of brass, in a brass case. This cartridge is designed to effectively incapacitate an aggressor during close-quarters operations thanks to its considerable stopping power effect, in addition to preventing over-piercing, however, due to its design, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5ba26812d4351e003201fef1-grid-image.webp",
    },
    {
      name: "4.6x30mm AP SX",
      description:
        "A 4.6x30mm HK AP SX cartridge with a 2 gram copper-plated steel core armor-piercing bullet in a brass case. The AP SX cartridge provides the highest penetration capability of the 4.6x30mm caliber, allowing the shooter to pierce basic and intermediate ballistic body protections in addition to providing outstanding results against some specialized protection models, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5ba26835d4351e0035628ff5-grid-image.webp",
    },
    {
      name: "4.6x30mm Subsonic SX",
      description:
        "A 4.6x30mm HK Subsonic SX cartridge with a 5 gram copper-plated tungsten alloy core subsonic bullet in a brass case with a reduced charge. The powder load in this subsonic cartridge is adjusted to operate with the MP7 family of submachine guns, ensuring the weapon's fire cycling and achieving excellent noise reduction when used in conjunction with a suppressor. Despite its low muzzle velocity, the bullet has ballistic capabilities to pierce basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5ba26844d4351e00334c9475-grid-image.webp",
    },
    {
      name: "HK MP7A1 4.6x30 flash hider",
      description:
        "A flash hider designed for installation on the MP7 SMGs chambered in 4.6x30mm, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba26acdd4351e003562908e-grid-image.webp",
    },
    {
      name: "HK MP7 B&T Rotex 2 4.6x30 sound suppressor",
      description:
        "Rotex 2 is a 4.6x30mm sound suppressor manufactured by Brügger & Thomet. Installed on the HK MP7 submachine guns.",
      image:
        "https://assets.tarkov.dev/5ba26ae8d4351e00367f9bdb-grid-image.webp",
    },
    {
      name: "HK MP7 flip-up front sight",
      description:
        "A removable folding flip-up front sight for MP7 SMGs, installed on the mount. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba26b01d4351e0085325a51-grid-image.webp",
    },
    {
      name: "HK MP7 flip-up rear sight",
      description:
        "A removable folding flip-up rear sight for MP7 SMGs. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5ba26b17d4351e00367f9bdd-grid-image.webp",
    },
    {
      name: "NSPU-M scope eyecup",
      description: "A rubber eyecup for the NSPU-M night scope.",
      image:
        "https://assets.tarkov.dev/5ba36f85d4351e0085325c81-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle (AKMB)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a078d4351e00334c96ca-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMS 7.62x39 assault rifle (AKMSB 6P4M)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a14cd4351e003202017f-grid-image.webp",
    },
    {
      name: "Kalashnikov AKM 7.62x39 assault rifle (AKMP)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a3dfd4351e0032020190-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMS 7.62x39 assault rifle (AKMSP)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a449d4351e0034778243-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMN 7.62x39 assault rifle (AKMN2 6P1N2)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a4d1d4351e4502010622-grid-image.webp",
    },
    {
      name: "Kalashnikov AKMSN 7.62x39 assault rifle (AKMSN2 6P4N2)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ba3a53dd4351e3bac12056e-grid-image.webp",
    },
    {
      name: "Mosin Rifle ProMag Archangel OPFOR PRS chassis",
      description:
        "The Archangel OPFOR PRS chassis for Mosin sniper rifle. The ergonomic gooseneck style grip with palm swells promotes maximum accuracy and comfort. Manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/5bae13bad4351e00320204af-grid-image.webp",
    },
    {
      name: "Mosin Rifle 7.62x54R ProMag Archangel OPFOR 10-round magazine",
      description:
        "A detachable 10-round magazine for the Archangel Mosin Rifle kit, manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/5bae13ded4351e44f824bf38-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 upper receiver",
      description:
        "An upper receiver for the 416A5 assault rifle manufactured by Heckler & Koch. Equipped with a mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/5bb20d53d4351e4502010a69-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 11 inch barrel",
      description:
        "A barrel for 416 based weapons for 5.56x45 NATO ammo, 11 inches (279mm) long.",
      image:
        "https://assets.tarkov.dev/5bb20d92d4351e00853263eb-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 14.5 inch barrel",
      description:
        "A 14.5 inch (368mm) barrel for HK416 based weapons for 5.56x45 NATO ammo, includes a flip-up front sight.",
      image:
        "https://assets.tarkov.dev/5bb20d9cd4351e00334c9d8a-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 16.5 inch barrel with flip-up front sight",
      description:
        "A barrel for 416 based weapons for 5.56x45 NATO ammo, 16.5 inches (419mm) long with a flip-up front sight.",
      image:
        "https://assets.tarkov.dev/5bb20da5d4351e0035629dbf-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 20 inch barrel",
      description:
        "A barrel for 416 based weapons for 5.56x45 NATO ammo, 20 inches (505mm) long with a flip up front sight.",
      image:
        "https://assets.tarkov.dev/5bb20dadd4351e00367faeff-grid-image.webp",
    },
    {
      name: "AR-15 HK Extended Latch charging handle",
      description:
        "A standard HK 416A5 charging handle with an extended latch.",
      image:
        "https://assets.tarkov.dev/5bb20dbcd4351e44f824c04e-grid-image.webp",
    },
    {
      name: "HK 416A5 low profile gas block",
      description:
        "A standard gas block for 416A5 assault rifles, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bb20dcad4351e3bac1212da-grid-image.webp",
    },
    {
      name: "HK 416A5 Quad Rail handguard",
      description:
        "A quad rail handguard for 416 and compatibles. Comes with four picatinny rails for attaching wide amount of different tactical accessories. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bb20de5d4351e0035629e59-grid-image.webp",
    },
    {
      name: "HK 416A5 Quad Rail handguard with flip-up front sight",
      description:
        "A quad rail handguard for 416 and compatibles. Comes with a built-in flip-up front sight and four picatinny rails for attaching wide amount of different accessories. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bb20df1d4351e00347787d5-grid-image.webp",
    },
    {
      name: "HK 416A5 Quad Rail Extended handguard",
      description:
        "An extended-length quad rail handguard for HK 416A5 and compatibles. Comes with four picatinny rails for attaching a wide amount of various tactical accessories. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bb20dfcd4351e00334c9e24-grid-image.webp",
    },
    {
      name: "AR-15 HK Battle Grip Beavertail pistol grip",
      description:
        "The HK Battle Grip pistol grip with Beavertail can be installed on any weapon compatible with AR-15 grips.",
      image:
        "https://assets.tarkov.dev/5bb20e0ed4351e3bac1212dc-grid-image.webp",
    },
    {
      name: "AR-15 HK Battle Grip pistol grip",
      description:
        "The HK Battle Grip pistol grip can be installed on any weapon compatible with AR-15 grips.",
      image:
        "https://assets.tarkov.dev/5bb20e18d4351e00320205d5-grid-image.webp",
    },
    {
      name: "HK 416A5 flip-up rear sight",
      description: "A removable folding rear sight for HK 416A5.",
      image:
        "https://assets.tarkov.dev/5bb20e49d4351e3bac1212de-grid-image.webp",
    },
    {
      name: "HK Enhanced Tube buffer tube",
      description:
        "Heckler & Koch Receiver Extension Buffer Tube, Mil-Spec diameter will fit any 416-based carbine or rifle.",
      image:
        "https://assets.tarkov.dev/5bb20e58d4351e00320205d7-grid-image.webp",
    },
    {
      name: "AR-15 HK Slim Line buttstock",
      description:
        "A telescoping stock from the Slim Line series, designed and manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bb20e70d4351e0035629f8f-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 assault rifle",
      description:
        "The HK416 A5 is a further development of the HK416 assault rifle in 5.56x45mm NATO caliber. The most striking changes compared to its previous versions as well as to market available AR platforms include an improved and tool-less gas regulator for suppressor use, a redesigned, user-friendly lower receiver, which allows complete ambidextrous operation of the weapon and ensures optimised magazine compatibility. Additionally, numerous technical improvements to maximize the safety of the operator, weapon reliability, ammunition compatibility, and durability under real operating conditions.",
      image:
        "https://assets.tarkov.dev/5bb2475ed4351e00853264e3-grid-image.webp",
    },
    {
      name: "Mosin Rifle AIM Sports Tri-Rail mount",
      description:
        "A Picatinny rail for the Mosin rifle, mounted instead of the regular rear sight. Manufactured by AIM Sports.",
      image:
        "https://assets.tarkov.dev/5bbdb811d4351e45020113c7-grid-image.webp",
    },
    {
      name: "Mosin Rifle Tacfire Tanker Style 7.62x54R muzzle brake",
      description:
        "The Tanker style muzzle brake for the Mosin rifle. Manufactured by Tacfire.",
      image:
        "https://assets.tarkov.dev/5bbdb83fd4351e44f824c44b-grid-image.webp",
    },
    {
      name: "Mosin Rifle ATI Monte Carlo chassis",
      description:
        "Monte Carlo-style chassis for the Mosin rifle, transforms the weapon into a more modern-looking rifle. Manufactured by ATI.",
      image:
        "https://assets.tarkov.dev/5bbdb870d4351e00367fb67d-grid-image.webp",
    },
    {
      name: "AR-10 Odin Works ATLAS-7 7.62x51 muzzle brake",
      description:
        "The ATLAS-7 muzzle brake designed for installation on AR-10-type systems and compatibles. Manufactured by Odin Works.",
      image:
        "https://assets.tarkov.dev/5bbdb8bdd4351e4502011460-grid-image.webp",
    },
    {
      name: "Mosin Rifle AIM Sports Recoil Pad",
      description:
        "A rubberized recoil pad for the Mosin rifle. Produced by AIM Sports.",
      image:
        "https://assets.tarkov.dev/5bbde409d4351e003562b036-grid-image.webp",
    },
    {
      name: "Mosin Rifle Tacfire pistol grip",
      description:
        "A polymer pistol grip for the Mosin rifle, manufactured by Tacfire.",
      image:
        "https://assets.tarkov.dev/5bbde41ed4351e003562b038-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74M 5.45x39 assault rifle Zenitco",
      description: "null",
      image:
        "https://assets.tarkov.dev/5bbf1c1c88a45017144d28c5-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle LVOA",
      description: "null",
      image:
        "https://assets.tarkov.dev/5bbf1c5a88a45017bb03d7aa-grid-image.webp",
    },
    {
      name: "Magpul MBUS Gen2 flip-up rear sight",
      description:
        "The MBUS Gen2 removable flip-up rear sight, installed on the mount. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5bc09a18d4351e003562b68e-grid-image.webp",
    },
    {
      name: "Magpul MBUS Gen2 flip-up front sight",
      description:
        "The MBUS Gen2 removable flip-up front sight, installed on the mount. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5bc09a30d4351e00367fb7c8-grid-image.webp",
    },
    {
      name: "Mosin Rifle Texas Precision Products 7.62x54R muzzle brake",
      description:
        "A muzzle brake designed for installation on the Mosin rifle, manufactured by Texas Precision Products.",
      image:
        "https://assets.tarkov.dev/5bc5a351d4351e003477a414-grid-image.webp",
    },
    {
      name: "Mosin Rifle Witt Machine 7.62x54R muzzle brake",
      description:
        "A muzzle brake for the Mosin rifle, manufactured by Witt Machine.",
      image:
        "https://assets.tarkov.dev/5bc5a35cd4351e450201232f-grid-image.webp",
    },
    {
      name: "Mosin Rifle AIM Sports MNG rail mount",
      description:
        "A Picatinny rail for the Mosin rifle, mounted instead of the regular rear sight. Manufactured by AIM Sports.",
      image:
        "https://assets.tarkov.dev/5bc5a372d4351e44f824d17f-grid-image.webp",
    },
    {
      name: "Jar of DevilDog mayo",
      description:
        "This DevilDog's brand mayonnaise is quite famous in Tarkov. Recommended to use with boiled potatoes.",
      image:
        "https://assets.tarkov.dev/5bc9b156d4351e00367fbce9-grid-image.webp",
    },
    {
      name: "#FireKlean gun lube",
      description:
        "The FireKlean gun lube is considered one of the highest quality in the world. Can also be used in some other cases!",
      image:
        "https://assets.tarkov.dev/5bc9b355d4351e6d1509862a-grid-image.webp",
    },
    {
      name: "Golden 1GPhone smartphone",
      description:
        "A golden GPhone 1G Edition Orange Gold smarthphone. There is a small 1G logo on the back side.",
      image:
        "https://assets.tarkov.dev/5bc9b720d4351e450201234b-grid-image.webp",
    },
    {
      name: "Deadlyslob's beard oil",
      description:
        "The DeadlySlob's brand specialized beard oil with a maple syrop flavor. Fancy and rare!",
      image:
        "https://assets.tarkov.dev/5bc9b9ecd4351e3bac122519-grid-image.webp",
    },
    {
      name: "Golden rooster figurine",
      description:
        "A golden rooster on an acrylic platform with an engraved ChickenPrism logo.",
      image:
        "https://assets.tarkov.dev/5bc9bc53d4351e00367fbcee-grid-image.webp",
    },
    {
      name: "Silver Badge",
      description: "An old silver badge, probably belonged to some sheriff.",
      image:
        "https://assets.tarkov.dev/5bc9bdb8d4351e003562b8a1-grid-image.webp",
    },
    {
      name: "42 Signature Blend English Tea",
      description:
        "A box of 42 Signature Blend English Tea. For real connoisseurs.",
      image:
        "https://assets.tarkov.dev/5bc9be8fd4351e00334cae6e-grid-image.webp",
    },
    {
      name: "Battered antique book",
      description:
        "An old, battered antique book. Will definitely be of interest to collectors of old and rare things. Wait, is that a sock used as a bookmark?",
      image:
        "https://assets.tarkov.dev/5bc9c049d4351e44f824d360-grid-image.webp",
    },
    {
      name: "Antique axe",
      description:
        "An antique axe with a damaged handle that belonged to the ancient clan of hatchlings called WYCC.",
      image:
        "https://assets.tarkov.dev/5bc9c1e2d4351e00367fbcf0-grid-image.webp",
    },
    {
      name: "Can of sprats",
      description: "Delicacy sprats from the Alconafter company.",
      image:
        "https://assets.tarkov.dev/5bc9c29cd4351e003562b8a3-grid-image.webp",
    },
    {
      name: "Old firesteel",
      description:
        "A strange thing classified as a firesteel is an ancient device for making fire. Another antique item.",
      image:
        "https://assets.tarkov.dev/5bc9c377d4351e3bac12251b-grid-image.webp",
    },
    {
      name: "HK MP7A1 stock",
      description:
        "A standard-issue retractable stock for the MP7A1 submachine gun. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bcf0213d4351e0085327c17-grid-image.webp",
    },
    {
      name: "HK MP7A1 4.6x30 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5bd056fa86f7743aba7658cd-grid-image.webp",
    },
    {
      name: "HK MP7A1 4.6x30 submachine gun SEALS",
      description: "null",
      image:
        "https://assets.tarkov.dev/5bd05f1186f774572f181678-grid-image.webp",
    },
    {
      name: "Slender mask",
      description:
        "A non-combat facemask for intimidation effect. Would've probably actually intimidated someone back in 2012.",
      image:
        "https://assets.tarkov.dev/5bd06f5d86f77427101ad47c-grid-image.webp",
    },
    {
      name: "Misha Mayorov mask",
      description:
        "A spooky mask of the famous The Scary Movie horror movie anti-hero - Misha Mayorov.",
      image:
        "https://assets.tarkov.dev/5bd0716d86f774171822ef4b-grid-image.webp",
    },
    {
      name: "Jason mask",
      description: "A scary mask from some famous horror movie.",
      image:
        "https://assets.tarkov.dev/5bd071d786f7747e707b93a3-grid-image.webp",
    },
    {
      name: "Fake mustache",
      description:
        "Quite a strange item for current events, but, nevertheless, will allow you to get a real tactical look of a 80-90s spec-ops operator. Sequisha style!",
      image:
        "https://assets.tarkov.dev/5bd073a586f7747e6f135799-grid-image.webp",
    },
    {
      name: "Kotton beanie",
      description: "A knitted Kotton brand beanie. Warm and faaaaancy.",
      image:
        "https://assets.tarkov.dev/5bd073c986f7747f627e796c-grid-image.webp",
    },
    {
      name: "HK MP7A2 4.6x30 submachine gun",
      description:
        "MP7A2 is a further modification of the MP7A1 SMG. The key feature of this submachine gun is the replacement of the standard folding foregrip for a Picatinny rail, allowing mounting of various vertical foregrips. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bd70322209c4d00d7167b8f-grid-image.webp",
    },
    {
      name: "HK MP7A2 stock",
      description:
        "A standard-issue retractable stock for the MP7A2 submachine gun. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5bd704e7209c4d00d7167c31-grid-image.webp",
    },
    {
      name: "HK MP7A2 4.6x30 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5bdb3ac186f77405f232ad22-grid-image.webp",
    },
    {
      name: "Interchange plan map",
      description:
        "Detailed plan map of the Interchange location, including the Ultra shopping mall.",
      image:
        "https://assets.tarkov.dev/5be4038986f774527d3fae60-grid-image.webp",
    },
    {
      name: "MPL-50 entrenching tool",
      description:
        "MPL-50 (Malaya Pekhotnaya Lopata 50 - Small Infantry Spade 50) is a small spade invented by a Danish officer Mads Johan Buch Linnemann in 1869. While nominally an entrenching tool, MPL-50 saw a wide range of wartime applications ranging from a close quarters combat weapon to a cooking utensil.",
      image:
        "https://assets.tarkov.dev/5bead2e00db834001c062938-grid-image.webp",
    },
    {
      name: "AK-12 5.45x39 30-round magazine",
      description:
        "A 30-round 5.45x39 windowed, polymer Izhmash magazine for the AK-12 and compatible systems.",
      image:
        "https://assets.tarkov.dev/5bed61680db834001d2c45ab-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 95-round drum magazine",
      description:
        "A 95-round 5.45x39 polymer Izhmash magazine, for the RPK-16 and compatible systems.",
      image:
        "https://assets.tarkov.dev/5bed625c0db834001c062946-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 15 inch barrel",
      description:
        "A 15 inch (370mm) long barrel for RPK-16 light machine gun, chambered in 5.45x39 ammo.",
      image:
        "https://assets.tarkov.dev/5beec1bd0db834001e6006f3-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 22 inch barrel",
      description:
        "A 22 inch (550mm) long barrel for RPK-16 light machine gun, chambered in 5.45x39 ammo.",
      image:
        "https://assets.tarkov.dev/5beec2820db834001b095426-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 muzzle brake-compensator",
      description:
        "A standard Izhmash-produced muzzle brake-compensator for the RPK-16 LMG.",
      image:
        "https://assets.tarkov.dev/5beec3420db834001b095429-grid-image.webp",
    },
    {
      name: "RPK-16 handguard",
      description:
        "A regular handguard for the RPK-16 LMG. Manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5beec3e30db8340019619424-grid-image.webp",
    },
    {
      name: "RPK-16 buffer tube",
      description:
        "A standard buffer tube for RPK-16 LMG, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5beec8b20db834001961942a-grid-image.webp",
    },
    {
      name: "AK-12 stock",
      description:
        "A standard-issue telescopic stock for AK-12 automatic rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5beec8c20db834001d2c465c-grid-image.webp",
    },
    {
      name: "AK-12 pistol grip",
      description:
        "A standard-issue Izhmash-manufactured pistol grip for AK-12 automatic rifles and compatible weapon systems.",
      image:
        "https://assets.tarkov.dev/5beec8ea0db834001a6f9dbf-grid-image.webp",
    },
    {
      name: "RPK-16 dust cover",
      description:
        "A standard-issue dust cover with an integrated Picatinny rail for RPK-16 LMGs, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5beec91a0db834001961942d-grid-image.webp",
    },
    {
      name: "RPK-16 rear sight base",
      description:
        "A detachable base for the Izhmash-manufactured rear sight for the RPK-16 LMG.",
      image:
        "https://assets.tarkov.dev/5beec9450db83400970084fd-grid-image.webp",
    },
    {
      name: "RPK-16 handguard rail",
      description:
        "A handguard rail for the RPK-16 LMG that allows you to install additional tactical equipment. Manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5beecbb80db834001d2c465e-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 light machine gun",
      description:
        "RPK-16 (Ruchnoy Pulemyot Kalashnikova 16 - Kalashnikov's Hand-held machine gun 16) is the newest Russian light machine gun chambered in 5.45x39mm rounds. Some key features of this new weapon are the quickly detachable barrels, enhanced ergonomics, and weaver rails on the handguard and dust cover.",
      image:
        "https://assets.tarkov.dev/5beed0f50db834001c062b12-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74 5.45x39 assault rifle",
      description:
        "The AK-74 (Avtomat Kalashnikova 74 - Kalashnikov's Automatic rifle 74) 5.45x39mm assault rifle, developed in 1970 by М. T. Kalashnikov, became a further evolution of the AKM due to adoption of the new 5.45x39 ammunition by the military. The AK-74 was equipped with a new buttstock, handguard (which retained the AKM-type finger swells), and gas cylinder. The stock has a shoulder pad different from that on the AKM, which is rubber and serrated for improved seating against the shooter. In addition, there are lightening cuts on each side of the buttstock. The buttstock, lower handguard, and upper heatguard were first manufactured from laminated wood, this later changed to a synthetic, plum or dark brown colored fiberglass.",
      image:
        "https://assets.tarkov.dev/5bf3e03b0db834001d2c4a9c-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74 5.45x39 assault rifle",
      description:
        "The AKS-74 (Avtomat Kalashnikova Skladnoy 74 - Kalashnikov's Automatic rifle 74 with a foldable stock) 5.45x39mm assault rifle is a variant of AK-74 equipped with a side-folding metal shoulder stock, designed primarily for use with air assault infantry and developed alongside the basic AK-74. The AKS-74 stock is fabricated from stamped sheet metal struts, machine pressed into a U shape and assembled by punch fit and welding.",
      image:
        "https://assets.tarkov.dev/5bf3e0490db83400196199af-grid-image.webp",
    },
    {
      name: "RPK-16 rear sight",
      description:
        "A detachable Izhmash-manufactured rear sight. Standard-issue for the RPK-16 LMG.",
      image:
        "https://assets.tarkov.dev/5bf3f59f0db834001a6fa060-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Infantry)",
      description:
        "Mosin–Nagant is one of the most famous russian rifles, which was commonly used by Russian soldiers during WW2. Developed from 1882 to 1891, it was used by the armed forces of the Russian Empire, the Soviet Union and various other nations. It is one of the most mass-produced military bolt-action rifles in history with over 37 million units having been made since 1891. In spite of its age, it has been used in various conflicts around the world up to the present day.",
      image:
        "https://assets.tarkov.dev/5bfd297f0db834001a669119-grid-image.webp",
    },
    {
      name: "Mosin Rifle Infantry stock",
      description: "An infantry wooden stock for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5bfd35380db83400232fe5cc-grid-image.webp",
    },
    {
      name: "Mosin Rifle sawn-off sniper stock",
      description:
        "A sawn-off wooden sniper stock for the Mosin rifle. Compact and deadly.",
      image:
        "https://assets.tarkov.dev/5bfd36290db834001966869a-grid-image.webp",
    },
    {
      name: "Mosin Rifle sawn-off stock",
      description:
        "A sawn-off wooden stock for the Mosin rifle. Compact and deadly.",
      image:
        "https://assets.tarkov.dev/5bfd36ad0db834001c38ef66-grid-image.webp",
    },
    {
      name: "Mosin Rifle sniper carbine stock",
      description: "A wooden stock for the sniper version of the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5bfd37c80db834001d23e842-grid-image.webp",
    },
    {
      name: "Mosin Rifle carbine stock",
      description: "A wooden stock for the Mosin carbine.",
      image:
        "https://assets.tarkov.dev/5bfd384c0db834001a6691d3-grid-image.webp",
    },
    {
      name: "Mosin Rifle carbine rear sight",
      description: "A standard rear iron sight for the Mosin carbine.",
      image:
        "https://assets.tarkov.dev/5bfd4c980db834001b73449d-grid-image.webp",
    },
    {
      name: "Mosin Carbine 7.62x54R 514mm barrel",
      description: "A regular 514mm barrel for the Mosin carbine.",
      image:
        "https://assets.tarkov.dev/5bfd4cbe0db834001b73449f-grid-image.webp",
    },
    {
      name: "Mosin Rifle 7.62x54R sawn-off 200mm barrel",
      description: "A sawn-off 200mm barrel for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5bfd4cc90db834001d23e846-grid-image.webp",
    },
    {
      name: "Mosin Rifle 7.62x54R sawn-off 220mm threaded barrel",
      description: "A sawn-off 220mm barrel for the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5bfd4cd60db834001c38f095-grid-image.webp",
    },
    {
      name: "MP-133/153 Taktika Tula 12003 stock adapter",
      description:
        "The Taktika Tula 12003 stock adapter designed for mounting various FAB Defense stocks on MP-133/153 shotguns.",
      image:
        "https://assets.tarkov.dev/5bfe7fb30db8340018089fed-grid-image.webp",
    },
    {
      name: "M870 FAB Defense AGR-870 pistol grip",
      description:
        "The AGR-870 pistol grip for Remington 870 pump-action shotgun, manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5bfe86a20db834001d23e8f7-grid-image.webp",
    },
    {
      name: "FAB Defense protection cap for AGR-870",
      description:
        "The FAB Defense protection cap for the AGR-870 pistol grip.",
      image:
        "https://assets.tarkov.dev/5bfe86bd0db83400232fe959-grid-image.webp",
    },
    {
      name: "FAB Defense GLR-16-S stock",
      description:
        "The GLR-16-S telescoping buttstock. Manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5bfe86df0db834001b734685-grid-image.webp",
    },
    {
      name: "FAB Defense buffer tube for AGR-870",
      description:
        "The FAB Defense 4-position buffer tube, made to fit the AGR-870 pistol grip.",
      image:
        "https://assets.tarkov.dev/5bfe89510db834001808a127-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle",
      description:
        "The Remington Model 700 is a series of bolt-action centerfire rifles manufactured by Remington Arms since 1962.",
      image:
        "https://assets.tarkov.dev/5bfea6e90db834001b7347f3-grid-image.webp",
    },
    {
      name: "M700 7.62x51 Wyatt's Outdoor 5-round magazine",
      description:
        "A Remington M700 sniper rifle 5-round magazine by Wyatt's Outdoor, for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5bfea7ad0db834001c38f1ee-grid-image.webp",
    },
    {
      name: "M700 7.62x51 Wyatt's Outdoor 10-round magazine",
      description:
        "A Remington M700 sniper rifle 10-round magazine by Wyatt's Outdoor, for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5bfeaa0f0db834001b734927-grid-image.webp",
    },
    {
      name: "M700 Hogue Overmolded Ghillie stock",
      description:
        "The Overmolded Ghillie stock for the Remington Model 700 bolt-action sniper rifle. Manufactured by Hogue.",
      image:
        "https://assets.tarkov.dev/5bfeb32b0db834001a6694d9-grid-image.webp",
    },
    {
      name: "M700 7.62x51 26 inch barrel",
      description:
        "A 26 inches (660mm) long barrel for the Remington Model 700 sniper rifle chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5bfebc250db834001a6694e1-grid-image.webp",
    },
    {
      name: "M700 7.62x51 20 inch threaded barrel",
      description:
        "A 20 inches (508mm) long threaded barrel for Remington Model 700 sniper rifle chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5bfebc320db8340019668d79-grid-image.webp",
    },
    {
      name: "M700 extended multi-slot Weaver rail base",
      description:
        "A Weaver-type extended multi-slot rail base for the Remington Model 700 bolt-action sniper rifle for installation of various optics.",
      image:
        "https://assets.tarkov.dev/5bfebc530db834001d23eb65-grid-image.webp",
    },
    {
      name: "M700 30mm integral ring scope mount",
      description:
        "A universal 30mm scope base mount for installation on Remington Model 700 rifles.",
      image:
        "https://assets.tarkov.dev/5bfebc5e0db834001a6694e5-grid-image.webp",
    },
    {
      name: "TT PM-Laser TT-206 side grips with laser sight",
      description:
        "The TT-206 side grips with a laser aiming module, designed for TT pistols. Manufactured by PM-Laser.",
      image:
        "https://assets.tarkov.dev/5bffcf7a0db83400232fea79-grid-image.webp",
    },
    {
      name: "TT PM-Laser DTK-TT muzzle brake-compensator",
      description:
        "A custom compensator for TT pistols manufactured by PM-Laser.",
      image:
        "https://assets.tarkov.dev/5bffd7ed0db834001d23ebf9-grid-image.webp",
    },
    {
      name: "6Kh5 Bayonet",
      description:
        "The so-called Item 6Kh5 is a bayonet knife adopted in 1989 as a standard-issue for use with AK-74 assault rifles.",
      image:
        "https://assets.tarkov.dev/5bffdc370db834001d23eca8-grid-image.webp",
    },
    {
      name: "Miller Bros. Blades M-2 Tactical Sword",
      description:
        "The M-2 short tactical sword, manufactured by Miller Bros. Blades.",
      image:
        "https://assets.tarkov.dev/5bffdd7e0db834001b734a1a-grid-image.webp",
    },
    {
      name: "Crash Axe",
      description:
        "Designed as a tool for working with hard surfaces. Materials and construction are designed to provide optimal impact and strength. The head of the axe is made of 6AL4V titanium with a thickness of 2.85 inches.",
      image:
        "https://assets.tarkov.dev/5bffe7930db834001b734a39-grid-image.webp",
    },
    {
      name: "P226 Axelson Tactical MK25 pistol slide",
      description:
        "An enhanced version of the SIG Sauer P226 MK25 pistol slide, manufactured by Axelson Tactical. Limited edition.",
      image:
        "https://assets.tarkov.dev/5bffe7c50db834001d23ece1-grid-image.webp",
    },
    {
      name: "P226 Axelson Tactical MK25 pistol grip",
      description:
        "An enhanced version of the SIG Sauer P226 MK25 pistol grip, manufactured by Axelson Tactical. Limited edition.",
      image:
        "https://assets.tarkov.dev/5bffec120db834001c38f5fa-grid-image.webp",
    },
    {
      name: "P226 Hogue G10 Chain Link pistol grip",
      description:
        "The G10 Chain Link pistol grip for P226 pistols. Manufactured by Hogue.",
      image:
        "https://assets.tarkov.dev/5bffef760db8340019668fe4-grid-image.webp",
    },
    {
      name: "HK MP5 Navy Style 3-lug suppressor adapter",
      description:
        "A 3-lug threaded adapter for installing various sound suppressors on the MP5 SMG. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5c0000c00db834001a6697fc-grid-image.webp",
    },
    {
      name: "P226 Emperor Scorpion pistol grip",
      description:
        "The Emperor Scorpion polymer grip panels for P226 pistols, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c0006470db834001a6697fe-grid-image.webp",
    },
    {
      name: "P226 Stainless Elite Wooden pistol grip",
      description:
        "Wooden side grip panels from the Stainless Elite kit for P226 pistols, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c00076d0db834001d23ee1f-grid-image.webp",
    },
    {
      name: "P226 Stainless Elite pistol slide",
      description:
        "A slide from the Stainless Elite modification for the P226 9x19 pistols, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c0009510db834001966907f-grid-image.webp",
    },
    {
      name: "Remington RAHG 2 inch rail",
      description:
        "The Remington RAHG 2 inch rail allows installation of additional equipment on the RAHG handguards.",
      image:
        "https://assets.tarkov.dev/5c0102aa0db834001b734ba1-grid-image.webp",
    },
    {
      name: "Remington RAHG 4 inch rail",
      description:
        "The Remington RAHG 4 inch rail allows installation of additional equipment on the RAHG handguards.",
      image:
        "https://assets.tarkov.dev/5c0102b20db834001d23eebc-grid-image.webp",
    },
    {
      name: "P226 Emperor Scorpion pistol slide",
      description:
        "A slide from the Emperor Scorpion modification for the P226 9x19 pistols, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c010a700db834001d23ef5d-grid-image.webp",
    },
    {
      name: "SP-8 Survival Machete",
      description:
        "SP-8 is a survival machete made of a single piece of high carbon steel. Manufactured by Ontario Knife Company.",
      image:
        "https://assets.tarkov.dev/5c010e350db83400232feec7-grid-image.webp",
    },
    {
      name: "ME Cylinder 12ga muzzle adapter",
      description:
        "A muzzle thread adapter for 12ga barrels, designed for installing additional muzzle devices.",
      image:
        "https://assets.tarkov.dev/5c0111ab0db834001966914d-grid-image.webp",
    },
    {
      name: "P226 Legion full size pistol slide",
      description:
        "A full-size slide from the Legion modification for the P226 9x19 pistols, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c0125fc0db834001a669aa3-grid-image.webp",
    },
    {
      name: "Red Rebel ice pick",
      description:
        "A perfectly balanced ice axe, the tip is made of a single piece of hardened metal.",
      image:
        "https://assets.tarkov.dev/5c0126f40db834002a125382-grid-image.webp",
    },
    {
      name: "Camper axe",
      description:
        "A universal travel axe for use in field conditions or in household. Also works as a melee weapon if things get too desperate.",
      image:
        "https://assets.tarkov.dev/5c012ffc0db834001d23f03f-grid-image.webp",
    },
    {
      name: "Valday PK-120 (1P87) holographic sight",
      description:
        "PK-120 (GRAU index - 1P87) is a holographic sight produced by Valday. It is part of the DPSK complex (day-night sight-observation complex) of the experimental design work Ratnik.",
      image:
        "https://assets.tarkov.dev/5c0505e00db834001b735073-grid-image.webp",
    },
    {
      name: "Valday PS-320 1/6x scope",
      description: "PS-320 1x/6x is a prototype scope designed by Valday.",
      image:
        "https://assets.tarkov.dev/5c0517910db83400232ffee5-grid-image.webp",
    },
    {
      name: "Trijicon ACOG TA01NSN 4x32 scope (Black)",
      description:
        "Designed to the exact specifications of the US Special Operations Command for use by elite US forces, the Trijicon ACOG TA01NSN is Trijicon’s most popular ACOG. The ranging reticle allows for bullet drop compensation out to 600 meters without any manual adjustments. Additional backup rear sights can be mounted. No batteries needed. Black version.",
      image:
        "https://assets.tarkov.dev/5c05293e0db83400232fff80-grid-image.webp",
    },
    {
      name: "Trijicon ACOG backup rear sight",
      description:
        "A removable backup iron sight, installed on the ACOG TA01NSN 4x32 scopes. Manufactured by Trijicon.",
      image:
        "https://assets.tarkov.dev/5c05295e0db834001a66acbb-grid-image.webp",
    },
    {
      name: "Trijicon ACOG TA01NSN 4x32 scope (Tan)",
      description:
        "Designed to the exact specifications of the US Special Operations Command for use by elite US forces, the Trijicon ACOG TA01NSN is Trijicon’s most popular ACOG. The ranging reticle allows for bullet drop compensation out to 600 meters without any manual adjustments. Additional backup rear sights can be mounted. No batteries needed. Tan version.",
      image:
        "https://assets.tarkov.dev/5c052a900db834001a66acbd-grid-image.webp",
    },
    {
      name: "Portable defibrillator",
      description:
        "Sudden cardiac arrest (SCA) can happen to anyone, anytime, anywhere. Phipils uses SMART Biphasic technology in its HeartStart Defibrillators to deliver an effective, high current defibrillation shock at a lower energy dose to minimize side effects.",
      image:
        "https://assets.tarkov.dev/5c052e6986f7746b207bc3c9-grid-image.webp",
    },
    {
      name: "Military COFDM Wireless Signal Transmitter",
      description:
        "A two-way speaking military COFDM wireless AV+data Signal Transmitter SG-C10.",
      image:
        "https://assets.tarkov.dev/5c052f6886f7746b1e3db148-grid-image.webp",
    },
    {
      name: "UHF RFID Reader",
      description:
        "A high-performance UHF RFID fixed reader. Based on proprietary efficient digital signal processing algorithm, it supports fast tag read/write operation with high identification rate. It can be widely applied in many RFID application systems such as logistics, access control, anti-counterfeit and industrial production process control system.",
      image:
        "https://assets.tarkov.dev/5c052fb986f7746b2101e909-grid-image.webp",
    },
    {
      name: "VPX Flash Storage Module",
      description:
        "The VPX Flash Storage Module (FSM) provides high-performance, high-capacity, solid-state SATA storage with AES-256 bit encryption using an Application Specific Integrated Circuit (ASIC).",
      image:
        "https://assets.tarkov.dev/5c05300686f7746dce784e5d-grid-image.webp",
    },
    {
      name: "Virtex programmable processor",
      description:
        "A specialized programmable military processor. The product is focused on high-latency broadband applications that require processing a large amount of data and minimal latency.",
      image:
        "https://assets.tarkov.dev/5c05308086f7746b2101e90b-grid-image.webp",
    },
    {
      name: "LEDX Skin Transilluminator",
      description:
        "A medical device designed to accurately determine the position of the veins under the skin.",
      image:
        "https://assets.tarkov.dev/5c0530ee86f774697952d952-grid-image.webp",
    },
    {
      name: "5.56x45 HK Steel Maritime STANAG 30-round magazine",
      description:
        "A 30-round HK Steel Maritime magazine designed in compliance with STANAG 4179 standard for 5.56x45 ammo.",
      image:
        "https://assets.tarkov.dev/5c05413a0db834001c390617-grid-image.webp",
    },
    {
      name: "SLR-106/AK 5.56x45 Circle 10 30-round magazine",
      description:
        "A Bulgarian 30-round 5.56x45 Waffle Pattern magazine for the SLR-106 civilian AK-based rifles. Manufactured by Circle 10 and distributed by Arsenal Inc.",
      image:
        "https://assets.tarkov.dev/5c0548ae0db834001966a3c2-grid-image.webp",
    },
    {
      name: "GPNVG-18 Night Vision goggles",
      description:
        "The GPNVG-18 (Ground Panoramic Night Vision Goggle) panoramic night vision goggles. The cardinal difference of this NVG from the others is the presence of four separate image intensifier tubes, two for each eye. Two Central IITs are directed forward, while two more are directed outward from the center. This innovative solution allowed to expand the field of view to 97 degrees.",
      image:
        "https://assets.tarkov.dev/5c0558060db834001b735271-grid-image.webp",
    },
    {
      name: "LaRue LT101 QD Tactical Picatinny Riser mount",
      description:
        "A Quick-Detach Picatinny riser to elevate the reflex or optical sight position, manufactured by LaRue.",
      image:
        "https://assets.tarkov.dev/5c064c400db834001d23f468-grid-image.webp",
    },
    {
      name: "LA-5B/PEQ tactical device",
      description:
        "ATPIAL (Advanced Target Pointer Illuminator Aiming Laser) LA-5B/PEQ produced by L3 Insight Technologies. Tactical device that combines laser designators in both visible and IR band with IR searchlight.",
      image:
        "https://assets.tarkov.dev/5c06595c0db834001a66af6c-grid-image.webp",
    },
    {
      name: "Armasight N-15 Night Vision Goggles",
      description:
        "The Armasight N-15-NVG binocular. Civilian alternative to contract military devices installed in a compact and ergonomic body.",
      image:
        "https://assets.tarkov.dev/5c066e3a0db834001b7353f0-grid-image.webp",
    },
    {
      name: "Armasight NVG head strap",
      description:
        "A standard head strap mounting system for various Armasight devices.",
      image:
        "https://assets.tarkov.dev/5c066ef40db834001966a595-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 PUFGUN SG-919 30 30-round magazine",
      description:
        "The PUFGUN SG-919 30 magazine for PP-19-01 Vityaz 9x19 with a 30-round ammo capacity. Tactical banana yellow camouflage.",
      image:
        "https://assets.tarkov.dev/5c0672ed0db834001b7353f3-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 PUFGUN SG-919 20 20-round magazine",
      description:
        "The PUFGUN SG-919 20 magazine for PP-19-01 Vityaz 9x19 with a 20-round ammo capacity. Tactical banana yellow camouflage.",
      image:
        "https://assets.tarkov.dev/5c0673fb0db8340023300271-grid-image.webp",
    },
    {
      name: "Bundle of wires",
      description:
        "Pieces of various purpose wires. Might be usable for electronic purposes.",
      image:
        "https://assets.tarkov.dev/5c06779c86f77426e00dd782-grid-image.webp",
    },
    {
      name: "Capacitors",
      description:
        "Various electrical capacitors. Useful in electrical engineering.",
      image:
        "https://assets.tarkov.dev/5c06782b86f77426df5407d2-grid-image.webp",
    },
    {
      name: "TT Hogue-like rubber grip",
      description: "Hogue-like rubber grips made for TT pistol.",
      image:
        "https://assets.tarkov.dev/5c0684e50db834002a12585a-grid-image.webp",
    },
    {
      name: "PNV-10T dovetail adapter",
      description:
        "The most common problem for owners of PNV-10T is its installation on modern helmets and suspension systems. The problem is solved by a simple adapter made of metal produced by many workshops.",
      image:
        "https://assets.tarkov.dev/5c0695860db834001b735461-grid-image.webp",
    },
    {
      name: "PNV-10T Night Vision Goggles",
      description:
        "PNV-10T are pseudo-binocular night vision googles of the second generation. A widespread and popular device of low-price category among hunters and fans of tactical military games.",
      image:
        "https://assets.tarkov.dev/5c0696830db834001d23f5da-grid-image.webp",
    },
    {
      name: "SSh-68 steel helmet",
      description:
        "SSh-68 replaced the general-army SSh-60 helmet. It differs from its predecessor in greater durability, a large inclination of the front part, and short side boards.",
      image:
        "https://assets.tarkov.dev/5c06c6a80db834001b735491-grid-image.webp",
    },
    {
      name: "TT Razor Arms rubber grip",
      description: "A rubber grip for TT pistols, manufactured by Razor Arms.",
      image:
        "https://assets.tarkov.dev/5c079ec50db834001966a706-grid-image.webp",
    },
    {
      name: "TT DLP Tactical Precision LAM-module",
      description:
        "A precision laser designator for the TT pistol, manufactured by DLP Tactical.",
      image:
        "https://assets.tarkov.dev/5c079ed60db834001a66b372-grid-image.webp",
    },
    {
      name: "AR-15 Noveske Gen.3 5.56x45 upper receiver",
      description:
        "The Gen.3 modular upper receiver for AR-based weapons, manufactured by Noveske. Fitted with mounts for attaching additional equipment.",
      image:
        "https://assets.tarkov.dev/5c07a8770db8340023300450-grid-image.webp",
    },
    {
      name: "P226 Meprolight TRU-DOT Night front sight",
      description:
        "The TRU-DOT Night front sight for P226 pistols with tritium bars for precision aiming, manufactured by Meprolight.",
      image:
        "https://assets.tarkov.dev/5c07b36c0db834002a1259e9-grid-image.webp",
    },
    {
      name: "P226 Meprolight TRU-DOT Night rear sight",
      description:
        "The TRU-DOT Night rear sight for P226 pistols with tritium bars for precision aiming, manufactured by Meprolight.",
      image:
        "https://assets.tarkov.dev/5c07b3850db834002330045b-grid-image.webp",
    },
    {
      name: "HK MP5 Noveske-style 9x19 muzzle brake-compensator",
      description:
        "The Noveske style muzzle brake-compensator for MP5 SMGs and compatibles. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5c07c5ed0db834001b73571c-grid-image.webp",
    },
    {
      name: "ADAR 2-15 5.56x45 carbine",
      description:
        "The ADAR 2-15 Russian civilian carbine that is based on the design of the AR-15. The carbine is produced in St. Petersburg with use of Israeli components and chrome barrels made by Molot Arms.",
      image:
        "https://assets.tarkov.dev/5c07c60e0db834002330051f-grid-image.webp",
    },
    {
      name: "HK MP5 End Cap stock",
      description:
        "A buttstock with a sling swivel for MP5 SMGs. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5c07c9660db834001a66b588-grid-image.webp",
    },
    {
      name: "EOTech HHS-1 hybrid sight",
      description:
        "The HHS-1 (Holographic Hybrid Sight 1) hybrid optical complex features the EXPS3-4 holographic sight with the G33.STS magnifier. Manufactured by EOTech.",
      image:
        "https://assets.tarkov.dev/5c07dd120db834001c39092d-grid-image.webp",
    },
    {
      name: "Freeman crowbar",
      description:
        "A reliable steel crowbar manufactured by Freeman company. Caution! May lead to Resonance Cascade.",
      image:
        "https://assets.tarkov.dev/5c07df7f0db834001b73588a-grid-image.webp",
    },
    {
      name: "ShPM Firefighter helmet",
      description:
        "Firefighter helmet is an individual means of fire protection and is designed to ensure the protection of the firefighter's head from exposure to elevated temperatures, mechanical shocks, corrosive environments and other dangerous and harmful factors arising from extinguishing fires and conducting emergency rescue operations.",
      image:
        "https://assets.tarkov.dev/5c08f87c0db8340019124324-grid-image.webp",
    },
    {
      name: "Maska-1SCh face shield (Olive Drab)",
      description:
        "A special steel bulletproof faceshield for the Maska-1SCh (Mask-1 Shield) helmet.",
      image:
        "https://assets.tarkov.dev/5c0919b50db834001b7ce3b9-grid-image.webp",
    },
    {
      name: "Maska-1SCh bulletproof helmet (Olive Drab)",
      description:
        "The Maska-1 bulletproof protective helmet appeared in service in 1991 as a replacement for the Sphere helmet, designed for use by the Ministry of Internal Affairs of the Russian Federation armed forces. The Maska-1SCh (Mask-1 Shield) modification features a steel bulletproof faceshield to ensure maximum protection of the user's face.",
      image:
        "https://assets.tarkov.dev/5c091a4e0db834001d5addc8-grid-image.webp",
    },
    {
      name: "Secure container Kappa",
      description:
        "A secret TerraGroup invention - the Kappa secured container.",
      image:
        "https://assets.tarkov.dev/5c093ca986f7740a1867ab12-grid-image.webp",
    },
    {
      name: "Mr. Holodilnick thermal bag",
      description:
        "Special thermal-electric bag for food storage. The Mr. Holodilnick bag chills anything, even the most unchillable.",
      image:
        "https://assets.tarkov.dev/5c093db286f7740a1b2617e3-grid-image.webp",
    },
    {
      name: "Dogtag case",
      description: "A small and handy case for dogtag storage.",
      image:
        "https://assets.tarkov.dev/5c093e3486f77430cb02e593-grid-image.webp",
    },
    {
      name: "EOTech HHS-1 hybrid sight (Tan)",
      description:
        "The HHS-1 (Holographic Hybrid Sight 1) hybrid optical complex features the EXPS3-4 holographic sight with the G33.STS magnifier. Manufactured by EOTech. Tan version.",
      image:
        "https://assets.tarkov.dev/5c0a2cec0db834001b7ce47d-grid-image.webp",
    },
    {
      name: "T H I C C item case",
      description:
        "The T H I C C advanced storage case with increased storage volume for various items.",
      image:
        "https://assets.tarkov.dev/5c0a840b86f7742ffa4f2482-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1ce886f77401c119d014-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74 5.45x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1d2b86f77401c119d01f-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1d6586f7743e5335d264-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle AAC SD",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1dba86f7743e667da897-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Infantry) Carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1dff86f7744dba7a2892-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Infantry)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1e7486f7744dba7a289b-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper) Carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1f2b86f77455912eaefc-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Infantry) Obrez",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c1fc586f77455912eaf08-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper) Obrez",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c202e86f77448687e0368-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper) Obrez M",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0c208886f7743e5335d279-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0d1e9386f77440120288b7-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 light machine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0d1ec986f77439512a1a72-grid-image.webp",
    },
    {
      name: "PSh-97 DJETA riot helmet",
      description:
        "The PSh-97 DJETA police helmet is designed to protect the head from being hit by heavy objects, metal rods, etc.",
      image:
        "https://assets.tarkov.dev/5c0d2727d174af02a012cf58-grid-image.webp",
    },
    {
      name: "Pyramex Proximity safety glasses",
      description:
        "Ballistic glasses with impact-resistant polycarbonate lenses. Manufactured by Pyramex.",
      image:
        "https://assets.tarkov.dev/5c0d32fcd174af02a1659c75-grid-image.webp",
    },
    {
      name: "9x19mm RIP",
      description:
        "A 9x19mm Parabellum RIP (Radically Invasive Projectile), is a cartridge with a 6 gram frangible bullet designed to produce multiple wound channels to incapacitate assailants quickly. In a departure from conventional hollow-point design, the R.I.P. round features 8 machined lead-free copper petals or trocars, designed to fragment quickly and move in multiple directions, thus providing a superior stopping power effect of its caliber, in addition to being able to inflict substantial adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/5c0d56a986f774449d5de529-grid-image.webp",
    },
    {
      name: "12/70 RIP",
      description:
        "RIP (Radically Invasive Projectile) ammunition is a devastatingly effective choice for the anti-personnel use. This 12 cal ammo features a precision-machined solid copper lead-free projectile designed to produce huge damage to body.",
      image:
        "https://assets.tarkov.dev/5c0d591486f7744c505b416f-grid-image.webp",
    },
    {
      name: "5.56x45mm Warmageddon",
      description:
        "A .223 Remington (5.56x45mm) Warmageddon cartridge with a 3.6 gram lead core polymer tipped expansive bullet with a copper alloy jacket in a brass case; intended for hunting. This bullet features a ballistic tip that acts as a wedge on the lead core upon impact, allowing the bullet to expand and cause outstanding damage on the target, as well as being capable of causing severe adverse effects to the target upon impact, despite not having the full energy of an intermediate cartridge.",
      image:
        "https://assets.tarkov.dev/5c0d5ae286f7741e46554302-grid-image.webp",
    },
    {
      name: "5.45x39mm PPBS gs Igolnik",
      description:
        "A 5.45x39mm PPBS gs (GRAU Index - 7N39) cartridge with a 4 gram armor-piercing bullet with a pointed tungsten carbide core with two-layer jacket, a lead interior and a bimetallic exterior, in a steel case. This experimental cartridge was developed by TsNIITochMash and TechKomplekt under the name of PPBS (Povyshennoy Probivayemosti, Broneboynyy Serdechnik - Increased Penetration, Armor-piercing Core) Igólnik (Needlecase) based on the 5.45x39mm BS gs cartridge to increase its penetration capabilities, providing excellent results against the most modern specialized ballistic body protections, in addition to being capable of piercing light covers and light armored vehicles, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5c0d5e4486f77478390952fe-grid-image.webp",
    },
    {
      name: "9x39mm SPP gs",
      description:
        "A 9x39mm SPP gs (GRAU Index - 7N9) special cartridge with a 15.7 gram subsonic armor-piercing bullet with a pointed hardened carbon steel core over a lead base with a bimetallic semi-jacket, in a steel case. This cartridge was developed in the early 2000s based on the 9x39mm SP-5 gs cartridge to improve its design and penetration capabilities. Resulting in an improvement at piercing basic and intermediate ballistic body protections, in addition to providing a considerable stopping power effect and being able to inflict severe adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5c0d668f86f7747ccb7f13b2-grid-image.webp",
    },
    {
      name: "9x39mm BP gs",
      description:
        "A 9x39mm BP gs (GRAU Index - 7N12) special cartridge with a 15.5 gram subsonic armor-piercing bullet with a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a steel case. This BP cartridge (Bronebóynaya Púlya - Armor-piercing Bullet) was developed in the early 2000s based on the 9x39mm SP-6 cartridge to improve its design and penetration capabilities, resulting in an improvement at piercing most models of specialized ballistic body protections, in addition to provide a significant stopping power effect. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5c0d688c86f77413ae3407b2-grid-image.webp",
    },
    {
      name: "ADAR 2-15 5.56x45 upper receiver",
      description:
        "An upper receiver for the ADAR 2-15 carbine manufactured by ADAR. Equipped with a mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/5c0e2f26d174af02a9625114-grid-image.webp",
    },
    {
      name: "AR-15 ADAR 2-15 wooden handguard",
      description: "An SVD-style wooden handguard for ADAR 2-15 carbines.",
      image:
        "https://assets.tarkov.dev/5c0e2f5cd174af02a012cfc9-grid-image.webp",
    },
    {
      name: "AR-15 5.56x45 Molot Arms 406mm barrel",
      description:
        "The Molot Arms 406mm barrel for AR-15 based weapons for 5.56x45 NATO ammo. A standard-issue barrel for ADAR 2-15.",
      image:
        "https://assets.tarkov.dev/5c0e2f94d174af029f650d56-grid-image.webp",
    },
    {
      name: "AR-15 ADAR 2-15 wooden stock",
      description: "A wooden SVD-style stock for ADAR 2-15 carbines.",
      image:
        "https://assets.tarkov.dev/5c0e2ff6d174af02a1659d4a-grid-image.webp",
    },
    {
      name: "6B5-16 Zh-86 Uley armored rig",
      description:
        "The 6B5 bulletproof vest was adopted by the armed forces of the USSR in 1986. Option 6B5-16 is designed to protect against fragments and bullets of fire arms (class 3 protection, titanium). Also has several pouches for magazines and other equipment.",
      image:
        "https://assets.tarkov.dev/5c0e3eb886f7742015526062-grid-image.webp",
    },
    {
      name: "6B5-15 Zh-86 Uley armored rig",
      description:
        "The 6B5 bulletproof vest was adopted by the armed forces of the USSR in 1986. Option 6B5-15 is designed for assault units (class 4 protection, boron carbide). Also has several pouches for magazines and other equipment.",
      image:
        "https://assets.tarkov.dev/5c0e446786f7742013381639-grid-image.webp",
    },
    {
      name: "6B13 assault armor (Flora)",
      description:
        "The main armored vest for personnel of combat units of the ground forces, airborne troops, marines, etc. The vest is designed to protect vital organs from being hit by firearms, shell fragments, mines, grenades, and cold weapons, reducing the severity of armor contusion injury when performing combat missions. Flora camouflage version.",
      image:
        "https://assets.tarkov.dev/5c0e51be86f774598e797894-grid-image.webp",
    },
    {
      name: "Propital regenerative stimulant injector",
      description:
        "A military-issue stimulant permitted to only be used by medical officers and paramedics. It stimulates regeneration processes by increasing the biosynthesis of purine and pyrimidine bases, RNA, functional, and enzymatic cell elements. Increases metabolism, health, and vitality. Has continuous side effects.",
      image:
        "https://assets.tarkov.dev/5c0e530286f7747fa1419862-grid-image.webp",
    },
    {
      name: "SJ1 TGLabs combat stimulant injector",
      description:
        "A combat stimulant. It is used for gaining strength and endurance before combat. Decreases sensation of pain. Stimulant is allowed to use by the special forces units. Developed by TerraGroup Labs, marked as SJ1. Has side effects.",
      image:
        "https://assets.tarkov.dev/5c0e531286f7747fa54205c2-grid-image.webp",
    },
    {
      name: "SJ6 TGLabs combat stimulant injector",
      description:
        "A combat stimulant. It is used to increase the body abilities before combat. Stimulant is allowed to use by the special forces units. Developed by TerraGroup Labs, marked as SJ6. Has side effects.",
      image:
        "https://assets.tarkov.dev/5c0e531d86f7747fa23f4d42-grid-image.webp",
    },
    {
      name: "Zagustin hemostatic drug injector",
      description:
        "A military-issue drug. Inhibits activators of profibrinolysin and slows down its transformation in fibrinolysin. Temporarily stops the bleeding and increases resistance to bloodloss. Has side effects. Leads to severe dehydration.",
      image:
        "https://assets.tarkov.dev/5c0e533786f7747fa23f4d47-grid-image.webp",
    },
    {
      name: "eTG-change regenerative stimulant injector",
      description:
        "A powerful stimulant for regeneration processes. It is used for rapid recovery of a soldier after injury, or during transportation of heavily wounded personnel. Allowed to be used only by medical officers and paramedics. Has strong side effects.",
      image:
        "https://assets.tarkov.dev/5c0e534186f7747fa1419867-grid-image.webp",
    },
    {
      name: "6B13 assault armor (Digital Flora)",
      description:
        "The main armored vest for personnel of combat units of the ground forces, airborne troops, marines, etc. The vest is designed to protect vital organs from being hit by firearms, shell fragments, mines, grenades, and cold weapons, reducing the severity of armor contusion injury when performing combat missions. Digital Flora camouflage version.",
      image:
        "https://assets.tarkov.dev/5c0e53c886f7747fa54205c7-grid-image.webp",
    },
    {
      name: "6B13 M modified assault armor (Tan)",
      description:
        "A 6B13 armored vest that has had its ceramic armored plates replaced with lightweight polyethylene plates. The protection class is higher and the weight is lower. This particular set of armor has been personally modified by Killa.",
      image:
        "https://assets.tarkov.dev/5c0e541586f7747fa54205c9-grid-image.webp",
    },
    {
      name: "6B23-2 body armor (Mountain Flora)",
      description:
        "The Zabralo-8 main armored vest for personnel of combat units of the ground forces, airborne troops, marines, etc. The vest is designed to protect vital organs from being hit by firearms, shell fragments, mines, grenades, and cold weapons, reducing the severity of armor contusion injury when performing combat missions.",
      image:
        "https://assets.tarkov.dev/5c0e57ba86f7747fa141986d-grid-image.webp",
    },
    {
      name: "6B23-1 body armor (Digital Flora)",
      description:
        "The Zabralo-8 main armored vest for personnel of combat units of the ground forces, airborne troops, marines, etc. The vest is designed to protect vital organs from being hit by firearms, shell fragments, mines, grenades, and cold weapons, reducing the severity of armor contusion injury when performing combat missions.",
      image:
        "https://assets.tarkov.dev/5c0e5bab86f77461f55ed1f3-grid-image.webp",
    },
    {
      name: "BNTI Zhuk-3 body armor (Press)",
      description:
        "An armored vest of class 3 (Russian GOST) protection for the journalists working in combat zones.",
      image:
        "https://assets.tarkov.dev/5c0e5edb86f77461f55ed1f7-grid-image.webp",
    },
    {
      name: "BNTI Zhuk-6a body armor",
      description:
        "A class 6 (Russian GOST) protection armored vest designed for assault units. Based on the Gzhel armor, serving as its lightweight copy.",
      image:
        "https://assets.tarkov.dev/5c0e625a86f7742d77340f62-grid-image.webp",
    },
    {
      name: "HighCom Trooper TFO body armor (Multicam)",
      description:
        "A plate armor vest by HighCom, popular among USEC PMCs. The lightweight AR500 class 4 (Russian GOST) protection plates cover only the chest and back areas. Multicam camouflage version.",
      image:
        "https://assets.tarkov.dev/5c0e655586f774045612eeb2-grid-image.webp",
    },
    {
      name: "Ops-Core SLAAP armor helmet plate (Tan)",
      description:
        "An additional armor module for the Ops-Core FAST helmet, made of a special polyethylene plate (Russian GOST class 5 protection).",
      image:
        "https://assets.tarkov.dev/5c0e66e2d174af02a96252f4-grid-image.webp",
    },
    {
      name: "Belt-A + Belt-B gear rig",
      description:
        "Belt-A is the legendary rig from the Afghan war era. This rig was adopted in 1989 and was used by the GRU Special Forces until the beginning of the 21st century. It comes equipped with an added Belt-B that has 10 pouches for VOG grenades.",
      image:
        "https://assets.tarkov.dev/5c0e6a1586f77404597b4965-grid-image.webp",
    },
    {
      name: "ANA Tactical M1 plate carrier",
      description:
        "A tactical rig with additional class 4 (Russian GOST) armor plates. The vest is created with the use of the best experience of Russian special forces operators. The versatility of the system makes it possible to use this vest both when carrying out city tasks and when performing tasks on rough terrain. Equipped with additional pouches. Manufactured by ANA Tactical.",
      image:
        "https://assets.tarkov.dev/5c0e722886f7740458316a57-grid-image.webp",
    },
    {
      name: "WARTECH TV-110 plate carrier",
      description:
        "A plate carrier with armor plates made of armored steel (Russian GOST class 4 protection) with chest and back protection only, equipped with a set of pouches. Manufactured by WARTECH.",
      image:
        "https://assets.tarkov.dev/5c0e746986f7741453628fe5-grid-image.webp",
    },
    {
      name: "Mystery Ranch Blackjack 50 backpack (Multicam)",
      description:
        "A backpack made for long and successful raids, manufactured by Mystery Ranch.",
      image:
        "https://assets.tarkov.dev/5c0e774286f77468413cc5b2-grid-image.webp",
    },
    {
      name: "3V Gear Paratus 3-Day Operator's Tactical backpack",
      description:
        "A modular, PVC-backed, polyester backpack for PMC operators who are going to be traversing across the rugged terrain of the Norvinsk region.",
      image:
        "https://assets.tarkov.dev/5c0e805e86f774683f3dd637-grid-image.webp",
    },
    {
      name: "Maska-1SCh face shield (Killa)",
      description:
        "A special steel bulletproof faceshield for the Maska-1SCh (Mask-1 Shield) helmet. This particular one is Killa's personal face shield, painted in black with three stylish vertical stripes.",
      image:
        "https://assets.tarkov.dev/5c0e842486f77443a74d2976-grid-image.webp",
    },
    {
      name: "Maska-1SCh bulletproof helmet (Killa)",
      description:
        "The Maska-1 bulletproof protective helmet appeared in service in 1991 as a replacement for the Sphere helmet, designed for use by the Ministry of Internal Affairs of the Russian Federation armed forces. The Maska-1SCh (Mask-1 Shield) modification features a bulletproof steel faceshield to ensure maximum protection of the user's face. This particular one is Killa's personal helmet, painted in black with three stylish vertical stripes.",
      image:
        "https://assets.tarkov.dev/5c0e874186f7745dc7616606-grid-image.webp",
    },
    {
      name: "TT-33 7.62x25 TT pistol Brunner",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c0e93cb86f77432297fdfc8-grid-image.webp",
    },
    {
      name: "BlackHawk! Commando chest harness (Black)",
      description:
        "Designed for comfort and quick access, this harness puts a lot of additional magazines at the user's fingertips. Manufactured by BlackHawk. Black version.",
      image:
        "https://assets.tarkov.dev/5c0e9f2c86f77432297fe0a3-grid-image.webp",
    },
    {
      name: "Aquamari water bottle with filter",
      description:
        "Purified and enriched bottled water with a CR-100 filter, 0.6L.",
      image:
        "https://assets.tarkov.dev/5c0fa877d174af02a012e1cf-grid-image.webp",
    },
    {
      name: "AR-15 ADAR 2-15 buffer tube",
      description:
        "ADAR Receiver Extension Buffer Tube, 4-position, will fit any AR-15-based carbine.",
      image:
        "https://assets.tarkov.dev/5c0faeddd174af02a962601f-grid-image.webp",
    },
    {
      name: "AR-15 ADAR 2-15 charging handle",
      description:
        "A standard charging handle for ADAR 2-15 and compatible systems.",
      image:
        "https://assets.tarkov.dev/5c0faf68d174af02a96260b8-grid-image.webp",
    },
    {
      name: "AR-15 ADAR 2-15 5.56x45 flash hider",
      description:
        "A standard-issue 5.56x45 flash hider for the ADAR 2-15 carbines.",
      image:
        "https://assets.tarkov.dev/5c0fafb6d174af02a96260ba-grid-image.webp",
    },
    {
      name: "Adrenaline injector",
      description:
        "A sterile disposable syringe with a dose of adrenaline - the main hormone of the adrenal medulla. It is used to enhance the physiological response associated with the preparation of all muscles to increased activity. Temporarily boosts strength and endurance. Relieves the sensation of pain.",
      image:
        "https://assets.tarkov.dev/5c10c8fd86f7743d7d706df3-grid-image.webp",
    },
    {
      name: "ADAR 2-15 5.56x45 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c10fcb186f774533e5529ab-grid-image.webp",
    },
    {
      name: "Wilcox Interface for PVS-7",
      description:
        "The Wilcox NVG Interface Shoe for the AN/PVS-7B/7D is designed to replace the plastic shoes provided with a variety of Night Vision Devices.",
      image:
        "https://assets.tarkov.dev/5c11046cd174af02a012e42b-grid-image.webp",
    },
    {
      name: "T-7 Thermal Goggles with a Night Vision mount",
      description:
        "The T-7 thermal imaging binocular/goggles takes a clever approach to individual soldier imaging systems. The T-7 thermal binocular brings the best features of the night vision goggles and adapted them into a full function thermal imager. Requires adapters to fit on helmets.",
      image:
        "https://assets.tarkov.dev/5c110624d174af029e69734c-grid-image.webp",
    },
    {
      name: "5.56x45mm Warmageddon ammo pack (20 pcs)",
      description: "A pack of 5.56x45 Warmageddon cartridges, 20 pieces.",
      image:
        "https://assets.tarkov.dev/5c11279ad174af029d64592b-grid-image.webp",
    },
    {
      name: "9x19mm RIP ammo pack (20 pcs)",
      description: "A cardboard box of 9x19mm RIP cartridges, 20 pieces.",
      image:
        "https://assets.tarkov.dev/5c1127bdd174af44217ab8b9-grid-image.webp",
    },
    {
      name: "12/70 RIP ammo pack (5 pcs)",
      description: "A cardboard box of 12/70 RIP ammo containing 5 shells.",
      image:
        "https://assets.tarkov.dev/5c1127d0d174af29be75cf68-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle 2k18 NY",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c123fe086f7742a60324263-grid-image.webp",
    },
    {
      name: "9x39mm BP gs ammo pack (8 pcs)",
      description: "A package of 9x39mm BP gs cartridges, 8 pieces.",
      image:
        "https://assets.tarkov.dev/5c1260dc86f7746b106e8748-grid-image.webp",
    },
    {
      name: "Intelligence folder",
      description:
        "A folder with various documents that can be very useful and valuable to third parties.",
      image:
        "https://assets.tarkov.dev/5c12613b86f7743bbe2c3f76-grid-image.webp",
    },
    {
      name: "9x39mm SPP gs ammo pack (8 pcs)",
      description: "A package of 9x39mm SPP gs cartridges, 8 pieces.",
      image:
        "https://assets.tarkov.dev/5c12619186f7743f871c8a32-grid-image.webp",
    },
    {
      name: "Tetriz portable game console",
      description:
        "An ancient artifact of a lost past. May be of interest to Mechanic, an avid collector of electronics.",
      image:
        "https://assets.tarkov.dev/5c12620d86f7743f8b198b72-grid-image.webp",
    },
    {
      name: "5.45x39mm PPBS gs Igolnik ammo pack (30 pcs)",
      description:
        "A paper package of 5.45x39 PPBS gs Igolnik cartridges, 30 pieces.",
      image:
        "https://assets.tarkov.dev/5c1262a286f7743f8a69aab2-grid-image.webp",
    },
    {
      name: "Broken GPhone X smartphone",
      description:
        "The last thing that Wepple managed to release on the smartphone market. Broken and unusable, but contains a lot of useful components.",
      image:
        "https://assets.tarkov.dev/5c1265fc86f7743f896a21c2-grid-image.webp",
    },
    {
      name: "Chain with Prokill medallion",
      description:
        "A chain with the Prokill medallion. An attribute of the Contract Wars, and now - a relic.",
      image:
        "https://assets.tarkov.dev/5c1267ee86f77416ec610f72-grid-image.webp",
    },
    {
      name: "Paracord",
      description:
        "A lightweight polymeric cord made of nylon, originally used in parachute slings. Paracord can be used for many other purposes, both military and civilian.",
      image:
        "https://assets.tarkov.dev/5c12688486f77426843c7d32-grid-image.webp",
    },
    {
      name: "Magazine case",
      description: "A wheeled weapon magazine storage case.",
      image:
        "https://assets.tarkov.dev/5c127c4486f7745625356c13-grid-image.webp",
    },
    {
      name: "Soap",
      description: "A piece of usual soap. Do not eat!",
      image:
        "https://assets.tarkov.dev/5c13cd2486f774072c757944-grid-image.webp",
    },
    {
      name: "Toilet paper",
      description:
        "A roll of clean two-layer delicate toilet paper. The treasure in these dark times.",
      image:
        "https://assets.tarkov.dev/5c13cef886f774072e618e82-grid-image.webp",
    },
    {
      name: "Peltor Tactical Sport headset",
      description:
        "The Peltor Tactical Sport electronic earmuff uses digital chip technology. It gives users fast shutoff and recovery time while helping protect ears from dangerous impulse noises, such as gunfire. Sound amplification allows the user to hear low-level sounds, including range commands and conversation.",
      image:
        "https://assets.tarkov.dev/5c165d832e2216398b5a7e36-grid-image.webp",
    },
    {
      name: "AK Vltor CMRD KeyMod handguard",
      description:
        "The CMRD lightweight handguard by Vltor, compatible with AK-74 and AKM series automatic rifles. Includes KeyMod slots for rail installation.",
      image:
        "https://assets.tarkov.dev/5c17664f2e2216398b5a7e3c-grid-image.webp",
    },
    {
      name: "KAC Folding rear sight",
      description:
        "A removable folding rear sight by Knight's Armament Company, installed on the mount.",
      image:
        "https://assets.tarkov.dev/5c1780312e221602b66cc189-grid-image.webp",
    },
    {
      name: "KAC Folding front sight",
      description:
        "A removable folding front sight by Knight's Armament Company, installed on the mount.",
      image:
        "https://assets.tarkov.dev/5c17804b2e2216152006c02f-grid-image.webp",
    },
    {
      name: "Crye Precision AirFrame Chops",
      description:
        "An additional armor module for the Crye Precision AirFrame helmet, which protects the ear and the jaw area from fragmentation and small-caliber ricochets.",
      image:
        "https://assets.tarkov.dev/5c178a942e22164bef5ceca3-grid-image.webp",
    },
    {
      name: "Crye Precision AirFrame Ears",
      description:
        "An additional armor module for the Crye Precision AirFrame helmet, which protects the ear area from fragmentation and small-caliber ricochets.",
      image:
        "https://assets.tarkov.dev/5c1793902e221602b21d3de2-grid-image.webp",
    },
    {
      name: "Crye Precision AirFrame helmet (Tan)",
      description:
        "The AirFrame ballistic helmet sets the standards in protection, comfort, and modularity. The unique overlapping shell design of the AirFrame creates an integrated vent that provides passive cooling and can reduce the damaging effects of explosive blast waves. Highly modular. Manufactured by Crye Precision.",
      image:
        "https://assets.tarkov.dev/5c17a7ed2e2216152142459c-grid-image.webp",
    },
    {
      name: "Magpul MBUS Gen2 flip-up front sight (FDE)",
      description:
        "The MBUS Gen2 removable flip-up front sight, installed on the mount. Manufactured by Magpul. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5c18b90d2e2216152142466b-grid-image.webp",
    },
    {
      name: "Magpul MBUS Gen2 flip-up rear sight (FDE)",
      description:
        "The MBUS Gen2 removable flip-up rear sight, installed on the mount. Manufactured by Magpul. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5c18b9192e2216398b5a8104-grid-image.webp",
    },
    {
      name: "Oakley SI M Frame safety glasses",
      description:
        "Ballistic glasses with impact-resistant polycarbonate lenses.",
      image:
        "https://assets.tarkov.dev/5c1a1cc52e221602b3136e3d-grid-image.webp",
    },
    {
      name: "Fake white beard",
      description: "An artificial white beard. Christmas spirit? Maybe...",
      image:
        "https://assets.tarkov.dev/5c1a1e3f2e221602b66cc4c2-grid-image.webp",
    },
    {
      name: "Zenit RK-0 tactical foregrip",
      description:
        "The RK-0 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc4812e22164bef5cfde7-grid-image.webp",
    },
    {
      name: "Zenit RK-1 tactical foregrip",
      description:
        "The RK-1 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc5612e221602b5429350-grid-image.webp",
    },
    {
      name: "Zenit RK-2 tactical foregrip",
      description:
        "The RK-2 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc5af2e221602b412949b-grid-image.webp",
    },
    {
      name: "Zenit RK-4 tactical foregrip",
      description:
        "The RK-4 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc5fb2e221602b1779b32-grid-image.webp",
    },
    {
      name: "Zenit RK-5 tactical foregrip",
      description:
        "The RK-5 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc7432e221602b412949d-grid-image.webp",
    },
    {
      name: "Zenit RK-6 tactical foregrip",
      description:
        "The RK-6 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1bc7752e221602b1779b34-grid-image.webp",
    },
    {
      name: "Zenit RK-1 tactical foregrip on B-25U mount",
      description:
        "The RK-1 foregrip can be installed on the lower part of handguards with a Weaver rail. It provides better operational control of a weapon during firing. Installed on B-25U mount for easier handling of LMGs. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c1cd46f2e22164bef5cfedb-grid-image.webp",
    },
    {
      name: "Kiba Arms Short Mount sight adapter",
      description:
        "Short Mount is a universal mount for installation of Kiba Arms manufactured prism scope.",
      image:
        "https://assets.tarkov.dev/5c1cdd302e221602b3137250-grid-image.webp",
    },
    {
      name: "Kiba Arms Short Prism 2.5x scope",
      description:
        "The Short Prism 2.5x magnification scope, manufactured by Kiba Arms. The low magnification and bright illuminated reticle allow for fast both-eyes-open shooting at close range.",
      image:
        "https://assets.tarkov.dev/5c1cdd512e22161b267d91ae-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Blue)",
      description:
        "A United Security-issued TerraGroup Labs keycard for service personnel in the Blue sector.",
      image:
        "https://assets.tarkov.dev/5c1d0c5f86f7744bb2683cf0-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Yellow)",
      description:
        "A United Security-issued TerraGroup Labs keycard for technicians in the Yellow sector.",
      image:
        "https://assets.tarkov.dev/5c1d0d6d86f7744bb2683e1f-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Green)",
      description:
        "A United Security-issued TerraGroup Labs keycard for administration staff in the Green sector.",
      image:
        "https://assets.tarkov.dev/5c1d0dc586f7744baf2e7b79-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Red)",
      description:
        "A United Security-issued TerraGroup Labs keycard for support staff.",
      image:
        "https://assets.tarkov.dev/5c1d0efb86f7744baf2e7b7b-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Black)",
      description:
        "A United Security-issued TerraGroup Labs top-level administration keycard.",
      image:
        "https://assets.tarkov.dev/5c1d0f4986f7744bb01837fa-grid-image.webp",
    },
    {
      name: "TerraGroup Labs manager's office room key",
      description: "A key to the TerraGroup Labs manager office.",
      image:
        "https://assets.tarkov.dev/5c1e2a1e86f77431ea0ea84c-grid-image.webp",
    },
    {
      name: "TerraGroup Labs weapon testing area key",
      description: "A key to the TerraGroup Labs Weapon testing area.",
      image:
        "https://assets.tarkov.dev/5c1e2d1f86f77431e9280bee-grid-image.webp",
    },
    {
      name: "TerraGroup Labs keycard (Violet)",
      description:
        "A United Security-issued TerraGroup Labs keycard for laboratory staff.",
      image:
        "https://assets.tarkov.dev/5c1e495a86f7743109743dfb-grid-image.webp",
    },
    {
      name: "TerraGroup Labs arsenal storage room key",
      description: "Key to the TerraGroup Labs Security arsenal storage room.",
      image:
        "https://assets.tarkov.dev/5c1f79a086f7746ed066fb8f-grid-image.webp",
    },
    {
      name: "9x19mm Green Tracer",
      description:
        "A 9x19mm Parabellum Green Tracer cartridge. Intended for target designation and fire adjustment in battle (Trace color: Green). Despite featuring a steel core, the bullet in this cartridge still has difficulties piercing basic ballistic body protection, however, it can provide a significant stopping power effect on the target.",
      image:
        "https://assets.tarkov.dev/5c3df7d588a4501f290594e5-grid-image.webp",
    },
    {
      name: "SVDS 7.62x54R sniper rifle",
      description:
        "The SVDS (Snáyperskaya Vintóvka Dragunóva Skladnáya - Dragunov's Sniper Rifle with a foldable stock) sniper rifle was specially designed for Russian paratroopers and special forces units. Features a tubular metal stock that folds to the right side of the receiver (equipped with a synthetic shoulder pad and a fixed cheek riser) and a synthetic pistol grip. The barrel was also given a heavier profile, the receiver housing was strengthened, the gas cylinder block was improved and a ported, shorter conical flash suppressor was adopted. Chambered in 7.62x54R ammo.",
      image:
        "https://assets.tarkov.dev/5c46fbd72e2216398b5a8c9c-grid-image.webp",
    },
    {
      name: "SVDS polymer stock",
      description:
        "A polymer stock for SVDS sniper rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5c471b5d2e221602b21d4e14-grid-image.webp",
    },
    {
      name: "SVDS rear sight",
      description: "A standard-issue rear sight for the SVDS sniper rifle.",
      image:
        "https://assets.tarkov.dev/5c471b7e2e2216152006e46c-grid-image.webp",
    },
    {
      name: "SVDS front sight",
      description:
        "A standard-issue front sight for SVDS sniper rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5c471ba12e221602b3137d76-grid-image.webp",
    },
    {
      name: "SVDS dust cover",
      description:
        "A standard-issue dust cover for SVDS sniper rifles, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5c471bd12e221602b4129c3a-grid-image.webp",
    },
    {
      name: "SVDS pistol grip",
      description:
        "An Izhmash pistol grip for SVDS and compatible weapon systems.",
      image:
        "https://assets.tarkov.dev/5c471be12e221602b66cd9ac-grid-image.webp",
    },
    {
      name: "SVDS 7.62x54R muzzle brake-compensator",
      description:
        "A standard Izhmash-produced muzzle brake and compensator for the SVDS.",
      image:
        "https://assets.tarkov.dev/5c471bfc2e221602b21d4e17-grid-image.webp",
    },
    {
      name: "SVDS upper band",
      description:
        "A standard upper band for SVDS sniper rifles and compatibles, allows installation of rear sights.",
      image:
        "https://assets.tarkov.dev/5c471c2d2e22164bef5d077f-grid-image.webp",
    },
    {
      name: "SVD 7.62x54R 10-round magazine",
      description:
        "A 10-round 7.62x54R steel Izhmash magazine for SVD-based rifles.",
      image:
        "https://assets.tarkov.dev/5c471c442e221602b542a6f8-grid-image.webp",
    },
    {
      name: "SVDS polymer handguard",
      description:
        "A polymer handguard for the SVDS sniper rifle that replaced the classic wooden one. Manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5c471c6c2e221602b66cd9ae-grid-image.webp",
    },
    {
      name: "SVDS gas tube",
      description:
        "A standard gas tube for SVDS sniper rifles. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/5c471c842e221615214259b5-grid-image.webp",
    },
    {
      name: "SVDS 7.62x54R 22 inch barrel",
      description:
        "A 22 inch barrel for SVDS sniper rifles chambered in 7.62x54R ammo.",
      image:
        "https://assets.tarkov.dev/5c471cb32e221602b177afaa-grid-image.webp",
    },
    {
      name: "Desert Tech MDR 5.56x45 assault rifle",
      description:
        "The MDR 5.56x45 bullpup assault rifle, designed and manufactured by Desert Tech LLC. A modular multi-caliber weapon with a compact bullpup layout intended for use by police and military special forces. Barrel lengths and calibers can be changed by the end-user within minutes with a minimum amount of tools.",
      image:
        "https://assets.tarkov.dev/5c488a752e221602b412af63-grid-image.webp",
    },
    {
      name: "MDR handguard (FDE)",
      description:
        "A standard-issue handguard for MDR assault rifles, manufactured by Desert Tech. Equipped with an M-LOK interface for installation of additional tactical devices and accessories. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5c48a14f2e2216152006edd7-grid-image.webp",
    },
    {
      name: "MDR 5.56x45 16 inch barrel",
      description:
        "A 16 inch (406mm) barrel for MDR based weapons for 5.56x45 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5c48a2852e221602b21d5923-grid-image.webp",
    },
    {
      name: "Desert Tech 5.56x45 flash hider",
      description:
        "A flash hider developed by Desert Tech specifically for the MDR 5.56x45 assault rifles.",
      image:
        "https://assets.tarkov.dev/5c48a2a42e221602b66d1e07-grid-image.webp",
    },
    {
      name: "MDR pistol grip (FDE)",
      description:
        "A standard pistol grip for MDR assault rifles, manufactured by Desert Tech. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5c48a2c22e221602b313fb6c-grid-image.webp",
    },
    {
      name: "SV-98 SRVV Mk.2.0 7.62x54R muzzle brake-compensator",
      description:
        "The Mk.2.0 compensator produced by SRVV for SV-98 sniper rifles.",
      image:
        "https://assets.tarkov.dev/5c4ee3d62e2216152006f302-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R thread adapter",
      description:
        "A standard-issue threaded adapter for 7.62x54R sound suppressor installation on the SV-98 sniper rifle.",
      image:
        "https://assets.tarkov.dev/5c4eec9b2e2216398b5aaba2-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R sound suppressor",
      description:
        "A standard SV-98 sound suppressor, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5c4eecc32e221602b412b440-grid-image.webp",
    },
    {
      name: "SV-98 sound suppressor heat shield",
      description: "A standard-issue heat shield for SV-98 sound suppressors.",
      image:
        "https://assets.tarkov.dev/5c4eecde2e221602b3140418-grid-image.webp",
    },
    {
      name: "Molot VPO-101 Vepr-Hunter 7.62x51 carbine",
      description:
        "A semi-automatic 7.62x51mm caliber hunting carbine. It was created on the platform of Kalashnikov machine gun (RPK) and has a similar appearance, weight and dimensions. Designed for professional and amateur hunting of medium and big game, as well as sporting use.",
      image:
        "https://assets.tarkov.dev/5c501a4d2e221602b412b540-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter gas tube",
      description:
        "A standard gas tube for VPO-101 Vepr Hunter carbines. Gas tubes channel the travel direction of gas piston.",
      image:
        "https://assets.tarkov.dev/5c5039be2e221602b177c9ff-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter 7.62x51 5-round magazine",
      description:
        "A 5-round magazine for the VPO-101 carbines and compatible 7.62x51 systems, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/5c503ac82e221602b21d6e9a-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter 7.62x51 10-round magazine",
      description:
        "A 10-round magazine for VPO-101 carbines and compatible 7.62x51 systems, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/5c503ad32e2216398b5aada2-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter stock",
      description: "A standard-issue stock for VPO-101 Vepr-Hunter carbines.",
      image:
        "https://assets.tarkov.dev/5c503af12e221602b177ca02-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter rear sight",
      description:
        "A standard ramp-type rear sight for the VPO-101 Vepr-Hunter carbine.",
      image:
        "https://assets.tarkov.dev/5c503b1c2e221602b21d6e9d-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter dust cover",
      description:
        "A standard-issue metal dust cover for VPO-101 Vepr-Hunter carbines, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/5c503d0a2e221602b542b7ef-grid-image.webp",
    },
    {
      name: "Zenit Perst-3 tactical device",
      description:
        "Perst-3 is a tactical device that combines laser designators in both visible and IR bands with IR searchlight. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c5952732e2216398b5abda2-grid-image.webp",
    },
    {
      name: "MPX Lancer OEM 14 inch M-LOK handguard",
      description:
        "The Lancer OEM 14 inch length foregrip for the MPX SMGs equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c59529a2e221602b177d160-grid-image.webp",
    },
    {
      name: "SKS 7.62x39 ProMag AALVX 35-round magazine",
      description:
        "A 35-round polymer detachable SKS magazine for 7.62x39 cartridges.",
      image:
        "https://assets.tarkov.dev/5c5970672e221602b21d7855-grid-image.webp",
    },
    {
      name: "MPX 9x19 4.5 inch barrel",
      description:
        "A 4.5 inch (114mm) long barrel for MPX-based weapons chambered in 9x19 ammo.",
      image:
        "https://assets.tarkov.dev/5c5db5852e2216003a0fe71a-grid-image.webp",
    },
    {
      name: "MPX 9x19 6.5 inch barrel",
      description:
        "A 6.5 inch (165mm) long barrel for MPX-based weapons chambered in 9x19 ammo.",
      image:
        "https://assets.tarkov.dev/5c5db5962e2216000e5e46eb-grid-image.webp",
    },
    {
      name: "MPX 9x19 10.5 inch barrel",
      description:
        "A 10.5 inch (265mm) long barrel for MPX-based weapons chambered in 9x19 ammo.",
      image:
        "https://assets.tarkov.dev/5c5db5b82e2216003a0fe71d-grid-image.webp",
    },
    {
      name: "MPX 9x19 14 inch barrel",
      description:
        "A 14 inch (355mm) long barrel for MPX-based weapons chambered in 9x19 ammo.",
      image:
        "https://assets.tarkov.dev/5c5db5c62e22160012542255-grid-image.webp",
    },
    {
      name: "MPX Midwest Industries 4.5 inch M-LOK handguard",
      description:
        "The Midwest Industries 4.5 inch length foregrip for the MPX SMGs equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c5db5f22e2216000e5e47e8-grid-image.webp",
    },
    {
      name: "MPX Midwest Industries 6.5 inch M-LOK handguard",
      description:
        "The Midwest Industries 6.5 inch length foregrip for the MPX SMGs equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c5db5fc2e2216000f1b2842-grid-image.webp",
    },
    {
      name: "MPX Midwest Industries 10.5 inch M-LOK handguard",
      description:
        "The Midwest Industries 10.5 inch length foregrip for the MPX SMGs equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c5db6302e2216000e5e47f0-grid-image.webp",
    },
    {
      name: "MPX Midwest Industries 14 inch M-LOK handguard",
      description:
        "The Midwest Industries 14 inch length foregrip for the MPX SMGs equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c5db63a2e2216000f1b284a-grid-image.webp",
    },
    {
      name: "MPX 9x19 20-round magazine",
      description:
        "A standard 20-round capacity 9x19mm MPX magazine, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c5db6552e2216001026119d-grid-image.webp",
    },
    {
      name: "MPX 9x19 TTI Base Pad +11 41-round magazine",
      description:
        "A standard 30-round 9x19 MPX magazine that comes with an attached +11-round base pad, produced by Taran Tactical Innovations. This brings the total magazine capacity to 41 rounds.",
      image:
        "https://assets.tarkov.dev/5c5db6652e221600113fba51-grid-image.webp",
    },
    {
      name: "MPX 9x19 F5 MFG 50-round drum magazine",
      description:
        "An MPX 9x19 drum magazine with a 50-round capacity. Manufactured by F5 MFG.",
      image:
        "https://assets.tarkov.dev/5c5db6742e2216000f1b2852-grid-image.webp",
    },
    {
      name: "MPX Geissele SCH charging handle",
      description:
        "The SCH (Super Charging Handle) charging handle with two latches for MPX-based weapons, manufactured by Geissele.",
      image:
        "https://assets.tarkov.dev/5c5db6b32e221600102611a0-grid-image.webp",
    },
    {
      name: "MPX/MCX Maxim Defense CQB telescoping stock",
      description:
        "A telescopic retractable CQB stock for MPX/MCX weapons, manufactured by Maxim Defense.",
      image:
        "https://assets.tarkov.dev/5c5db6ee2e221600113fba54-grid-image.webp",
    },
    {
      name: "MPX/MCX PMM ULSS foldable stock",
      description:
        "ULSS (UltraLight Skeleton Stock) is a foldable stock for MCX/MPX manufactured by Parker Mountain Machine.",
      image:
        "https://assets.tarkov.dev/5c5db6f82e2216003a0fe914-grid-image.webp",
    },
    {
      name: "TOZ-106 20ga MTs 20-01 Sb.3 5-shot magazine",
      description:
        "A 5-shot 20ga magazine for MTs 20-01 and TOZ-106 hunting shotguns.",
      image:
        "https://assets.tarkov.dev/5c6161fb2e221600113fbde5-grid-image.webp",
    },
    {
      name: "TOZ-106 dovetail mount",
      description:
        "A dovetail mount for TOZ-106 bolt-action shotgun, allows installing the scope mount.",
      image:
        "https://assets.tarkov.dev/5c6162682e22160010261a2b-grid-image.webp",
    },
    {
      name: "TOZ-106 rail scope mount",
      description:
        "A universal Weaver rail mount for TOZ-106. Provides a rail that allows installing various scopes on the weapon. Requires a dovetail mount.",
      image:
        "https://assets.tarkov.dev/5c61627a2e22160012542c55-grid-image.webp",
    },
    {
      name: "SIG Sauer SRD9 9x19 sound suppressor",
      description:
        "SRD9 is a 9x19 caliber sound suppressor manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5c6165902e22160010261b28-grid-image.webp",
    },
    {
      name: "AK 7.62x39 ProMag AK-A-16 73-round drum magazine",
      description:
        "A 73-round polymer ProMag magazine for 7.62x39 AKM and compatible systems.",
      image:
        "https://assets.tarkov.dev/5c6175362e221600133e3b94-grid-image.webp",
    },
    {
      name: "AK Zenit B-10 Handguard",
      description:
        "The integrally machined B-10 foregrip is manufactured from aluminum alloy D16T with black coating and can be installed instead of the standard-issue foregrip on an AK. It's fitted with Picatinny rail mounts on two sides, allowing for the installation of additional equipment such as tactical foregrips, flashlights, and laser designators. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c617a5f2e2216000f1e81b3-grid-image.webp",
    },
    {
      name: "Zenit B-13 Klassika dovetail rail platform",
      description:
        "The B-13 rail platform mounts on the standard dovetail mount of the AK 103, 104, 105, 74M, AKMN, Saiga MK, Saiga MK-03, Saiga 410 carbines and provides a platform for sighting devices. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c61a40d2e2216001403158d-grid-image.webp",
    },
    {
      name: "5.56x45 SureFire MAG5-100 STANAG 100-round magazine",
      description:
        "A 100-round 5.56x45 SureFire MAG5-100 metal high capacity magazine.",
      image:
        "https://assets.tarkov.dev/5c6592372e221600133e47d7-grid-image.webp",
    },
    {
      name: "P226 TJ's Custom 9x19 compensator",
      description:
        "A compensator manufactured by TJ's Custom Gunworks for the SIG Sauer P226 pistols.",
      image:
        "https://assets.tarkov.dev/5c6beec32e221601da3578f2-grid-image.webp",
    },
    {
      name: "AK US Palm pistol grip",
      description:
        "A light pistol grip for AK assault rifles, manufactured by US Palm.",
      image:
        "https://assets.tarkov.dev/5c6bf4aa2e2216001219b0ae-grid-image.webp",
    },
    {
      name: "HK 416A5 TROY M-LOK 13 inch handguard",
      description:
        "The TROY Industries carbon fiber M-LOK foregrip for 416A5 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c6c2c9c2e2216000f2002e4-grid-image.webp",
    },
    {
      name: "HK 416A5 MRS KeyMod 14 inch handguard",
      description:
        "The HK MRS KeyMod handguard for 416A5 equipped with a KeyMod interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c6d10e82e221601da357b07-grid-image.webp",
    },
    {
      name: "HK 416A5 Midwest Industries 9 inch M-LOK handguard",
      description:
        "The Midwest Industries M-LOK foregrip for 416A5 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c6d10fa2e221600106f3f23-grid-image.webp",
    },
    {
      name: "HK 416A5 Midwest Industries 13.5 inch M-LOK handguard",
      description:
        "The Midwest Industries M-LOK foregrip for 416A5 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c6d11072e2216000e69d2e4-grid-image.webp",
    },
    {
      name: "HK 416A5 Strike Industries CRUX 15 inch M-LOK handguard",
      description:
        "The Strike Industries CRUX foregrip for 416A5 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c6d11152e2216000f2003e7-grid-image.webp",
    },
    {
      name: "5.56x45 HK 30 STANAG polymer 30-round magazine",
      description: "A 30-round HK polymer magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/5c6d42cb2e2216000e69d7d1-grid-image.webp",
    },
    {
      name: "5.56x45 HK PM Gen.2 STANAG 30-round magazine",
      description:
        "A 30-round polymer HK PM Gen.2 magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/5c6d450c2e221600114c997d-grid-image.webp",
    },
    {
      name: "5.56x45 TROY BattleMag STANAG 30-round magazine",
      description:
        "The TROY BattleMag polymer 30-round magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/5c6d46132e221601da357d56-grid-image.webp",
    },
    {
      name: "AR-15 STNGR VYPR 10 inch M-LOK handguard",
      description:
        "The VYPR handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories. Features a lightweight design and increased ventilation. Manufactured by STNGR.",
      image:
        "https://assets.tarkov.dev/5c6d5d8b2e221644fc630b39-grid-image.webp",
    },
    {
      name: "AR-15 SureFire WarComp 5.56x45 flash hider",
      description:
        "The WarComp flash hider for AR-15-type weapon systems, manufactured by SureFire.",
      image:
        "https://assets.tarkov.dev/5c6d710d2e22165df16b81e7-grid-image.webp",
    },
    {
      name: "AR-15 HK V2 pistol grip",
      description:
        "The HK V2 pistol grip can be installed on any weapon compatible with AR-15 grips. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5c6d7b3d2e221600114c9b7d-grid-image.webp",
    },
    {
      name: "HK 416A5 5.56x45 10.6 inch barrel",
      description:
        "A 10.6 inch (264mm) barrel for 416 based weapons for 5.56x45 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5c6d85e02e22165df16b81f4-grid-image.webp",
    },
    {
      name: "AR-15 SAI 14.5 inch QD Rail handguard",
      description:
        "The Salient Arms International QD Rail handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c78f2492e221600114c9f04-grid-image.webp",
    },
    {
      name: "AR-15 SAI 10 inch QD Rail handguard",
      description:
        "The Salient Arms International QD Rail handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c78f2612e221600114c9f0d-grid-image.webp",
    },
    {
      name: "AR-15 Magpul MOE SL medium length M-LOK handguard",
      description:
        "The Magpul MOE SL medium length handguard for AR-15 systems, equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c78f26f2e221601da3581d1-grid-image.webp",
    },
    {
      name: "AR-15 Magpul MOE SL carbine length M-LOK handguard",
      description:
        "The Magpul MOE SL carbine length handguard for AR-15 systems, equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5c78f2792e221600106f4683-grid-image.webp",
    },
    {
      name: "AR-15 SAI JailBrake 5.56x45 muzzle device",
      description:
        "The JailBrake muzzle device manufactured by Salient Arms International. Can be installed only on compatible SAI handguards for AR-15.",
      image:
        "https://assets.tarkov.dev/5c78f2882e22165df16b832e-grid-image.webp",
    },
    {
      name: "Strike Industries Cobra Tactical foregrip",
      description:
        "The Cobra Tactical foregrip integrates the form with functionality. Its hybrid-designed shape works both as a regular foregrip and as a comfortable hand stop when going with the thumb over bore method. The grip allows you to handle the weapon with confidence and the organic design enables the operator to manipulate the rifle in a way that’s most comfortable at any given moment.",
      image:
        "https://assets.tarkov.dev/5c791e872e2216001219c40a-grid-image.webp",
    },
    {
      name: "Strike Industries Advanced Receiver Extension buffer tube",
      description:
        "The Advanced Receiver Extension buffer tube, Mil-Spec diameter will fit any AR-15-based carbine or rifle. The buffer tube has a distinctive scalloping that decreases friction with the stock and reduces weight while retaining strength in areas that get the most stress. Manufactured by Strike Industries.",
      image:
        "https://assets.tarkov.dev/5c793fb92e221644f31bfb64-grid-image.webp",
    },
    {
      name: "Strike Industries Advanced Receiver Extension buffer tube (Anodized Red)",
      description:
        "The Advanced Receiver Extension buffer tube, Mil-Spec diameter will fit any AR-15-based carbine or rifle. The buffer tube has a distinctive scalloping that decreases friction with the stock and reduces weight while retaining strength in areas that get the most stress. Manufactured by Strike Industries. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5c793fc42e221600114ca25d-grid-image.webp",
    },
    {
      name: "Strike Industries Viper Mod 1 stock",
      description:
        "The Viper Mod 1 telescopic stock designed and produced by Strike Industries. The stock is made for the AR-15 platforms and will fit on all Mil-Spec dimension receiver extension tubes. The stock has been redesigned to achieve a lighter and a more compact design.",
      image:
        "https://assets.tarkov.dev/5c793fde2e221601da358614-grid-image.webp",
    },
    {
      name: "AK Venom Tactical Antidote 7.62x39 muzzle brake-compensator",
      description:
        "The Antidote muzzle brake & compensator by Venom Tactical and Rifle Dynamics is designed for installation on classic AK-based weapon systems. Reduces recoil and counters the barrel climb.",
      image:
        "https://assets.tarkov.dev/5c7951452e221644f31bfd5c-grid-image.webp",
    },
    {
      name: "Gemtech ONE Direct Thread Mount adapter",
      description:
        "The Direct Thread Mount adapter for installation of the Gemtech ONE multi-caliber sound suppressors directly onto the barrel threading.",
      image:
        "https://assets.tarkov.dev/5c7954d52e221600106f4cc7-grid-image.webp",
    },
    {
      name: "Gemtech ONE multi-caliber sound suppressor",
      description:
        "The Gemtech ONE sound suppressor is designed for use with 7.62x51 NATO rounds, but is also compatible with several other calibers. Requires a direct thread mount adapter for installation.",
      image:
        "https://assets.tarkov.dev/5c7955c22e221644f31bfd5e-grid-image.webp",
    },
    {
      name: "Aimpoint CompM4 reflex sight",
      description:
        "The Aimpoint CompM4 series of sights are the toughest sights that Aimpoint has ever produced and they are the standard infantry soldier sight in many NATO countries. These optics are extremely rugged and operate continuously for up to 8 years using a single AA battery. The Aimpoint CompM4s is the latest version of the U.S. Army's M68CCO (Close-Combat Optic), continuing a legacy that Aimpoint has maintained since 1997.",
      image:
        "https://assets.tarkov.dev/5c7d55de2e221644f31bff68-grid-image.webp",
    },
    {
      name: "Aimpoint LRP mount for CompM4 sights",
      description:
        "Aimpoint LRP is a quick detach base mount for CompM4 sights.",
      image:
        "https://assets.tarkov.dev/5c7d55f52e221644f31bff6a-grid-image.webp",
    },
    {
      name: "Aimpoint Standard Spacer",
      description:
        "The Standard Spacer mount for Aimpoint CompM4 sight models, raises the scope mount position.",
      image:
        "https://assets.tarkov.dev/5c7d560b2e22160bc12c6139-grid-image.webp",
    },
    {
      name: "AR-15 AAC Blackout 51T 5.56x45 flash hider",
      description:
        "The Advanced Armament Corporation (AAC) Blackout 51T flash hider is an effective flash suppressor that also serves as an attachment platform for the AAC 762-SDN-6 sound suppressor. Can be installed on AR-15-based rifles.",
      image:
        "https://assets.tarkov.dev/5c7e5f112e221600106f4ede-grid-image.webp",
    },
    {
      name: "AAC Illusion 9 9x19 sound suppressor",
      description:
        "Illusion 9 is a compact, high performance sound suppressor for modern 9mm semi-automatic pistols. Manufactured by Advanced Armament Corporation.",
      image:
        "https://assets.tarkov.dev/5c7e8fab2e22165df16b889b-grid-image.webp",
    },
    {
      name: "AR-15 SureFire SF3P 5.56x45 Flash hider",
      description:
        "The SureFire SF3P-556 three-prong flash hider, which fits M4/M16 weapons and variants, features a greatly reduced muzzle flash. The SF3P-556 also serves as a rock-solid mounting adapter for SureFire SOCOM Series 5.56 mm Fast-Attach sound suppressors.",
      image:
        "https://assets.tarkov.dev/5c7fb51d2e2216001219ce11-grid-image.webp",
    },
    {
      name: "BCM GUNFIGHTER MOD 3 vertical foregrip",
      description: "A lightweight polymer tactical grip manufactured by BCM.",
      image:
        "https://assets.tarkov.dev/5c7fc87d2e221644f31c0298-grid-image.webp",
    },
    {
      name: "BelOMO PSO-1 4x24 scope",
      description:
        "The PSO-1 military grade optical sniper scope, manufactured by BelOMO. This optical scope is designed for the Dragunov Sniper Rifle (SVD) on the variety of targets with 4x magnification and 6 degree FOV.",
      image:
        "https://assets.tarkov.dev/5c82342f2e221644f31c060e-grid-image.webp",
    },
    {
      name: "BelOMO PSO-1M2 4x24 scope",
      description:
        "The PSO-1M2 military grade optical sniper scope, manufactured by BelOMO. This optical scope is designed for precision sight fire with the Dragunov Sniper Rifle (SVD) on the variety of targets with 4x magnification and 6 degree FOV.",
      image:
        "https://assets.tarkov.dev/5c82343a2e221644f31c0611-grid-image.webp",
    },
    {
      name: "IEA Mil-Optics KH/F 34mm one-piece magmount",
      description:
        "IEA Mil-Optics KH/F is a universal 34mm scope base mount for installation on Picatinny rails, allows installation of various optics.",
      image:
        "https://assets.tarkov.dev/5c86592b2e2216000e69e77c-grid-image.webp",
    },
    {
      name: "AR-10 Lantac Drakon 7.62x51 muzzle brake-compensator",
      description:
        "The Drakon muzzle brake by Lantac is designed for installation on 7.62x51mm weapon systems. Reduces recoil and counters the muzzle climb.",
      image:
        "https://assets.tarkov.dev/5c878e9d2e2216000f201903-grid-image.webp",
    },
    {
      name: "AK Lantac Drakon 7.62x39 muzzle brake",
      description:
        "The Drakon muzzle brake-compensator by Lantac is designed for installation on 7.62x39 AK-based weapon systems. Reduces recoil and counters the muzzle climb.",
      image:
        "https://assets.tarkov.dev/5c878ebb2e2216001219d48a-grid-image.webp",
    },
    {
      name: "AR-15 HK E1 buttstock",
      description:
        "The E1 telescopic stock is designed as a replacement for standard HK416 stocks. Made of high grade nylon fiber with a twist off rubber butt pad and ambidextrous sling attachment point. Can be installed on any AR-15 weapon system. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5c87a07c2e2216001219d4a2-grid-image.webp",
    },
    {
      name: "KAC vertical foregrip",
      description: "A vertical grip manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5c87ca002e221600114cb150-grid-image.webp",
    },
    {
      name: "SVD 7.62x54R 20-round magazine",
      description:
        "A 20-round 7.62x54R steel Izhmash SVD magazine, for SVD-based rifles.",
      image:
        "https://assets.tarkov.dev/5c88f24b2e22160bc12c69a6-grid-image.webp",
    },
    {
      name: "Zenit B-13V Klassika dovetail rail platform",
      description:
        "The B-13V rail platform is designed to mount on the Dovetail rail on the receiver. Designed for installation on PP-19-01 Vityaz-SN, but can also be installed on any Dovetail receiver weapons. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/5c90c3622e221601da359851-grid-image.webp",
    },
    {
      name: "P226 9x19 20-round extended magazine",
      description:
        "A 20-round 9x19 extended magazine for the SIG Sauer P226 pistol.",
      image:
        "https://assets.tarkov.dev/5c920e902e221644f31c3c99-grid-image.webp",
    },
    {
      name: "9x19mm AP 6.3",
      description:
        "A 9x19mm Parabellum AP 6.3 cartridge with a two-part controlled fragmenting projectile, an armor-piercing bullet that features a brass sabot and a hardened steel penetrator of 6.3mm. Thanks to the design of this AP bullet (Armor-Piercing) and despite having an average muzzle velocity relative to other cartridges of the same caliber, it has capabilities of piercing basic ballistic body protection along with some intermediate models.",
      image:
        "https://assets.tarkov.dev/5c925fa22e221601da359b7b-grid-image.webp",
    },
    {
      name: "TerraGroup Labs access keycard",
      description:
        "A single-use United Security-issued TerraGroup Labs access keycard.",
      image:
        "https://assets.tarkov.dev/5c94bbff86f7747ee735c08f-grid-image.webp",
    },
    {
      name: "Desert Tech MDR 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c98bd7386f7740cfb15654e-grid-image.webp",
    },
    {
      name: "SVDS 7.62x54R sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c98be1e86f7741cc96ffd79-grid-image.webp",
    },
    {
      name: "Molot VPO-101 Vepr-Hunter 7.62x51 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5c98bf9186f7740cf708c509-grid-image.webp",
    },
    {
      name: "TOZ-106 custom cut Mosin stock",
      description:
        "A custom-made stock for the TOZ-106 hunting shotgun, made from the Mosin rifle stock base. It was made by ancient Russian dark magic called Napiling.",
      image:
        "https://assets.tarkov.dev/5c99f3592e221644fc633070-grid-image.webp",
    },
    {
      name: "AK Magpul Zhukov-U handguard (Black)",
      description:
        "The Magpul Zhukov-U handguard is installed on AKM/AK-74 compatible weapon systems. Equipped with licensed M-LOK mounts for installation of additional devices or rails. Black version.",
      image:
        "https://assets.tarkov.dev/5c9a07572e221644f31c4b32-grid-image.webp",
    },
    {
      name: "AK Magpul Zhukov-U handguard (FDE)",
      description:
        "The Magpul Zhukov-U handguard is installed on AKM/AK-74 compatible weapon systems. Equipped with licensed M-LOK mounts for installation of additional devices or rails. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5c9a1c3a2e2216000e69fb6a-grid-image.webp",
    },
    {
      name: "AK Magpul Zhukov-U handguard (Plum)",
      description:
        "The Magpul Zhukov-U handguard is installed on AKM/AK-74-compatible weapon systems. Equipped with licensed M-LOK mounts for installation of additional devices or rails. Plum-colored polymer version.",
      image:
        "https://assets.tarkov.dev/5c9a1c422e221600106f69f0-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 12.25 handguard (Coyote Brown)",
      description:
        "The Daniel Defense RIS II 12.25 foregrip is a part of the SOPMOD Block II program to replace the standard M4CQBR or Mk18 foregrips in the US SOCOM service. It's made with light but durable aircraft aluminum alloy and comes equipped with 4 mounts for the installation of additional devices and accessories. This foregrip option is incompatible with the M203 UBGL.",
      image:
        "https://assets.tarkov.dev/5c9a25172e2216000f20314e-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II FSP 9.5 handguard (Coyote Brown)",
      description:
        "The Daniel Defense RIS II FSP 9.5 foregrip is a part of the SOPMOD Block II program to replace the standard M4CQBR or Mk18 foregrips in the US SOCOM service. It's made with light but durable aircraft aluminum alloy and comes equipped with 4 mounts for the installation of additional devices and accessories. This foregrip option is incompatible with the M203 UBGL.",
      image:
        "https://assets.tarkov.dev/5c9a26332e2216001219ea70-grid-image.webp",
    },
    {
      name: "Dynaforce Triton M43-A chest harness",
      description:
        "The Triton M43-A assault chest rig is designed to store and carry ammunition and equipment for use in moderate and hot climates. Manufactured by Dynaforce.",
      image:
        "https://assets.tarkov.dev/5ca20abf86f77418567a43f2-grid-image.webp",
    },
    {
      name: "WARTECH Berkut BB-102 backpack",
      description:
        "A tactical backpack with front loading capabilities. Suitable for use by military and security forces, or for military tactical games. Manufactured in WARTECH.",
      image:
        "https://assets.tarkov.dev/5ca20d5986f774331e7c9602-grid-image.webp",
    },
    {
      name: "Vulkan-5 (LShZ-5) bulletproof helmet",
      description:
        "The Vulkan-5 LShZ-5 high-level protection helmet is intended for use in a set of combat equipment with circular 6-class (Russian GOST) head protection from medium to heavy projectiles.",
      image:
        "https://assets.tarkov.dev/5ca20ee186f774799474abc2-grid-image.webp",
    },
    {
      name: "Vulkan-5 face shield",
      description:
        "A special armored face shield for the Vulkan-5 heavy helmet. Increases the chances of surviving the impacts of bullets and shrapnel.",
      image:
        "https://assets.tarkov.dev/5ca2113f86f7740b2547e1d2-grid-image.webp",
    },
    {
      name: "FORT Redut-M body armor",
      description:
        "“Redut-M” is a modified version of the well-proven Redut body armor, which is in service of special units of the FSB. The vest is based on advanced technologies in the field of individual armor. Due to the optimized form of armor elements and the outer cover with a special damping-ventilation system, the Redut M armored vest has excellent functional qualities, which facilitates active actions, including those associated with the use of vehicles and in confined spaces.",
      image:
        "https://assets.tarkov.dev/5ca2151486f774244a3b8d30-grid-image.webp",
    },
    {
      name: "FORT Redut-T5 body armor",
      description:
        "The FORT Redut T5 armor vest is a reinforced version of Redut armor series, designed with account of the many years of experience in counter-terrorism operations in the Russian Federation.",
      image:
        "https://assets.tarkov.dev/5ca21c6986f77479963115a7-grid-image.webp",
    },
    {
      name: "Beretta M9A3 9x19 pistol",
      description:
        "The Beretta M9A3 is the newest addition to the M9 series of pistols. It was designed for military and police forces, as well as for sport and a home defense use. The main features of the A3 generation are a more ergonomic and durable FDE coating.",
      image:
        "https://assets.tarkov.dev/5cadc190ae921500103bb3b6-grid-image.webp",
    },
    {
      name: "M9A3 9x19 threaded barrel",
      description:
        "A standard threaded barrel for the Beretta M9A3 9x19 pistol.",
      image:
        "https://assets.tarkov.dev/5cadc1c6ae9215000f2775a4-grid-image.webp",
    },
    {
      name: "M9A3 9x19 17-round magazine",
      description:
        "A standard 17-round 9x19 magazine for the Beretta M9A3 pistol.",
      image:
        "https://assets.tarkov.dev/5cadc2e0ae9215051e1c21e7-grid-image.webp",
    },
    {
      name: "M9A3 thread protection cap",
      description:
        "A threading protection cap for the Beretta M9A3 9x19 barrel.",
      image:
        "https://assets.tarkov.dev/5cadc390ae921500126a77f1-grid-image.webp",
    },
    {
      name: "M9A3 polymer side grips",
      description:
        "Standard-issue polymer side grip panels for Beretta M9A3 pistols.",
      image:
        "https://assets.tarkov.dev/5cadc431ae921500113bb8d5-grid-image.webp",
    },
    {
      name: "M9A3 9x19 pistol slide",
      description:
        "A standard-issue pistol slide for Beretta M9A3 9x19 pistols.",
      image:
        "https://assets.tarkov.dev/5cadc55cae921500103bb3be-grid-image.webp",
    },
    {
      name: "M9A3 front sight",
      description: "A standard-issue front sight for Beretta M9A3 pistols.",
      image:
        "https://assets.tarkov.dev/5cadd919ae921500126a77f3-grid-image.webp",
    },
    {
      name: "M9A3 rear sight",
      description: "A standard-issue rear sight for Beretta M9A3 pistols.",
      image:
        "https://assets.tarkov.dev/5cadd940ae9215051e1c2316-grid-image.webp",
    },
    {
      name: "M9A3 Sight Mount rear sight rail",
      description:
        "A rear sight rail manufactured by Sight Mount for Beretta M9 pistols. It is installed as a replacement of the standard rear sight, but still allows aiming even without an installed reflex sight.",
      image:
        "https://assets.tarkov.dev/5cadd954ae921500103bb3c2-grid-image.webp",
    },
    {
      name: "12.7x55mm PS12",
      description:
        "A 12.7x55mm PS12 special cartridge with a 33 gram subsonic heavy bullet with a lead core and a bimetallic jacket, in a brass case. This cartridge was designed in the early 2010s for the ASh-12 assault rifle and despite its rudimentary design, the bullet is capable of piercing basic ballistic body protections, in addition to providing a considerable stopping power effect and being able to inflict severe adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5cadf6ddae9215051e1c23b2-grid-image.webp",
    },
    {
      name: "12.7x55mm PS12A",
      description:
        "A 12.7x55mm PS12A special cartridge with a 7 gram subsonic light bullet with an aluminum core and two-layer semi-jacket, a lead interior, and a bimetallic exterior, in a brass case. The bullet in this cartridge was designed to crumble and rapidly lose speed when hitting a solid object in order to reduce the probability of ricochets during urban operations at the cost of penetration capabilities, consequently, this endows it with an outstanding stopping power effect thanks to its caliber and capability to inflict critical adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/5cadf6e5ae921500113bb973-grid-image.webp",
    },
    {
      name: "12.7x55mm PS12B",
      description:
        "A 12.7x55mm PS12B special cartridge with an 18 gram subsonic armor-piercing bullet with a heat-strengthened steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a brass case. This cartridge was designed in the early 2010s to provide the ASh-12 assault rifle with capabilities to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to providing a significant stopping power effect due to its caliber and being able to inflict substantial adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5cadf6eeae921500134b2799-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 assault rifle",
      description:
        "The ASh-12.7 (Avtomat Shturmovoy 12 - Assault Automatic Rifle 12) bullpup assault rifle is a dedicated CQB/Urban Operations weapon, developed by TsKIB SOO (Central Design and Research Bureau of Sporting and Hunting Arms), a subsidiary of the KBP Instrument Design Bureau of Tula, Russia, by request from the Russian FSB (Federal Security Service). The weapon was designed with extreme short-range stopping power in mind for FSB urban combat units.",
      image:
        "https://assets.tarkov.dev/5cadfbf7ae92152ac412eeef-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 10-round magazine",
      description: "A 10-round magazine for the 12.7x55 ASh-12 assault rifle.",
      image:
        "https://assets.tarkov.dev/5caf1041ae92157c28402e3f-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 20-round magazine",
      description:
        "A standard 20-round magazine for the 12.7x55 ASh-12 bullpup assault rifle.",
      image:
        "https://assets.tarkov.dev/5caf1109ae9215753c44119f-grid-image.webp",
    },
    {
      name: "ASh-12 rear sight carry handle",
      description:
        "A detachable carry handle with a rear sight for the ASh-12 assault rifles.",
      image:
        "https://assets.tarkov.dev/5caf1691ae92152ac412efb9-grid-image.webp",
    },
    {
      name: "ASh-12 folding front sight",
      description:
        "A removable folding front sight for the ASh-12 assault rifle, installed on the mount.",
      image:
        "https://assets.tarkov.dev/5caf16a2ae92152ac412efbc-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 muzzle brake-compensator",
      description:
        "A standard-issue muzzle brake for the ASh-12 assault rifle, manufactured by TsKIB.",
      image:
        "https://assets.tarkov.dev/5caf17c9ae92150b30006be1-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 sound suppressor",
      description:
        "A tactical sound suppressor manufactured by TsKIB for the ASh-12 12.7x55 automatic rifle.",
      image:
        "https://assets.tarkov.dev/5caf187cae92157c28402e43-grid-image.webp",
    },
    {
      name: "AK 100-series polymer handguard",
      description:
        "A polymer handguard for the 100-series AKs, manufactured by Izhmash. A further modification of the polymer AK-74M handguard. Features a bottom rail for installation of tactical foregrips.",
      image:
        "https://assets.tarkov.dev/5cbda392ae92155f3c17c39f-grid-image.webp",
    },
    {
      name: "AK-74 Plum polymer handguard (6P20 Sb.9)",
      description:
        "A polymer handguard for AK-74 automatic rifles, manufactured by Izhmash. Made out of plum-colored polymer, for which has earned the nickname Sliva (Plum).",
      image:
        "https://assets.tarkov.dev/5cbda9f4ae9215000e5b9bfc-grid-image.webp",
    },
    {
      name: "AK-74 5.45x39 6L23 Plum 30-round magazine",
      description:
        "A 30-round 5.45x39 polymer Izhmash 6L23 magazine for AK-74 and compatible systems. Made out of plum-colored polymer, for which has earned the nickname Sliva (Plum).",
      image:
        "https://assets.tarkov.dev/5cbdaf89ae9215000e5b9c94-grid-image.webp",
    },
    {
      name: "AK-74 Plum polymer stock (6P20 Sb.7)",
      description:
        "A polymer stock for AK-74 automatic rifles, manufactured by Izhmash. Made out of plum-colored polymer, for which has earned the nickname Sliva (Plum).",
      image:
        "https://assets.tarkov.dev/5cbdb1b0ae9215000d50e105-grid-image.webp",
    },
    {
      name: "AK 7.62x39 Molot 75-round drum magazine",
      description:
        "A 75-round metal drum magazine for the RPK light machine gun. It fits in 7.62x39 AK and compatible weapon systems. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5cbdc23eae9215001136a407-grid-image.webp",
    },
    {
      name: "FN P90 charging handle",
      description:
        "A standard-issue charging handle for the P90 SMG, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc6ea78e4a949000e1ea3c1-grid-image.webp",
    },
    {
      name: "FN P90 K&M The Handler charging handle",
      description:
        "An ergomomic folding charging handle for FN P90, manufactured by K&M Aerospace. The charging handle is made out of aircraft grade aluminum and anodized to mil spec type III, class 2. Includes a ball detent that keeps the handle folded in when not in use.",
      image:
        "https://assets.tarkov.dev/5cc6ea85e4a949000e1ea3c3-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 50-round magazine",
      description: "A 50-round polymer magazine for the 5.7x28mm FN P90 SMG.",
      image:
        "https://assets.tarkov.dev/5cc70093e4a949033c734312-grid-image.webp",
    },
    {
      name: "FN P90 stock",
      description:
        "A standard-issue polymer stock for the P90 SMG, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc700b9e4a949000f0f0f25-grid-image.webp",
    },
    {
      name: "FN P90 buttpad",
      description:
        "A standard-issue butt-pad for the P90 SMG, produced by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc700cae4a949035e43ba72-grid-image.webp",
    },
    {
      name: "FN P90 Damage Industries buttpad",
      description:
        "An ergonomic butt-pad for the FN P90 SMG, also serves as the stock extension. Manufactured by Damage Industries.",
      image:
        "https://assets.tarkov.dev/5cc700d4e4a949000f0f0f28-grid-image.webp",
    },
    {
      name: "FN P90 EFFEN 90 5.7x28 upper receiver",
      description:
        "EFFEN 90 is a low-profile upper receiver for the P90 submachine gun, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc700ede4a949033c734315-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 upper receiver",
      description:
        "A regular upper receiver for the P90 submachine gun, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc70102e4a949035e43ba74-grid-image.webp",
    },
    {
      name: "FN P90 EFFEN 90 receiver rail",
      description:
        "The EFFEN 90 rail allows installation of additional tactical equipment on the receiver of the same name.",
      image:
        "https://assets.tarkov.dev/5cc7012ae4a949001252b43e-grid-image.webp",
    },
    {
      name: "FN P90 upper receiver side rail",
      description:
        "A side rail for the standard-issue FN P90 receiver, allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/5cc70146e4a949000d73bf6b-grid-image.webp",
    },
    {
      name: "FN P90 upper receiver top rail",
      description:
        "The FN top rail allows installation of additional equipment on the FN P90 standard upper receivers.",
      image:
        "https://assets.tarkov.dev/5cc7015ae4a949001152b4c6-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 10.5 inch barrel",
      description:
        "A 10.5 inch (264mm) barrel for P90 based weapons, chambered in 5.7x28 ammo.",
      image:
        "https://assets.tarkov.dev/5cc701aae4a949000e1ea45c-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 16 inch barrel",
      description:
        "A 16 inch (407mm) barrel for FN P90 SMG, chambered in 5.7x28mm ammo.",
      image:
        "https://assets.tarkov.dev/5cc701d7e4a94900100ac4e7-grid-image.webp",
    },
    {
      name: "5.7x28mm SS190",
      description:
        "A 5.7x28mm FN SS190 cartridge with a 2 gram armor-piercing bullet with a steel penetrator over an aluminum core with a reinforced copper jacket, in a brass case. Thanks to its muzzle velocity and design, this cartridge is capable of piercing basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5cc80f38e4a949001152b560-grid-image.webp",
    },
    {
      name: "5.7x28mm L191",
      description:
        "A 5.7x28mm FN L191 cartridge with a 2.1 gram armor-piercing tracer bullet with a steel penetrator over an aluminum core with a reinforced copper jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). This cartridge was designed to provide tracing capabilities to 5.7x28mm caliber submachine guns during automatic fire, specifically to the FN P90 submachine gun in conjunction with the 5.7x28mm FN SS190 cartridge, in addition to being capable of piercing basic ballistic body protections as well as some intermediate models, however, due to its design, it has a high bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5cc80f53e4a949000e1ea4f8-grid-image.webp",
    },
    {
      name: "5.7x28mm SB193",
      description:
        "A 5.7x28mm FN SB193 cartridge with a 4 gram lead core subsonic bullet with a reinforced copper jacket, in a brass case with a reduced charge. The powder load in this cartridge is adjusted to ensure the weapon's fire cycling when fired from the FN Five-seveN pistol and the FN P90 submachine gun, achieving excellent noise reduction when used in conjunction with a suppressor, and despite its low muzzle velocity, the bullet has ballistic capabilities to pierce basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5cc80f67e4a949035e43bbba-grid-image.webp",
    },
    {
      name: "5.7x28mm SS198LF",
      description:
        "A 5.7x28mm FN SS198LF cartridge with a 1.8 gram aluminum core open tipped bullet with a copper jacket, in a brass case. This cartridge was designed for use by police forces, reaching higher muzzle velocities compared to other cartridges of the same caliber and providing a considerable stopping power effect, although its own design decreased its capabilities to pierce even the most basic ballistic body protections.",
      image:
        "https://assets.tarkov.dev/5cc80f79e4a949033c7343b2-grid-image.webp",
    },
    {
      name: "5.7x28mm SS197SR",
      description:
        "A 5.7x28mm FN SS197SR cartridge with a 2.6 gram lead core polymer tipped expansive bullet with a copper metal jacket, in a brass case. This bullet features a ballistic tip that acts as a wedge on the lead core upon impact, allowing the bullet to expand and cause significant damage on the target, and despite the peculiarity of its design and its low speed compared to other cartridges of its caliber, it is able to pierce basic ballistic body protections.",
      image:
        "https://assets.tarkov.dev/5cc80f8fe4a949033b0224a2-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 flash hider",
      description:
        "A regular flash hider for the P90 SMG. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cc82796e24e8d000f5859a8-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun",
      description:
        "FN P90, also known as the FN Project 1990, is a compact personal defense weapon (PDW) designed and manufactured by FN Herstal in Belgium. Created in response to NATO requests for a replacement for 9x19mm Parabellum firearms, the P90 was designed as a compact but powerful firearm for vehicle crews, operators of crew-served weapons, support personnel, special forces, and counter-terrorist groups.",
      image:
        "https://assets.tarkov.dev/5cc82d76e24e8d00134b4b83-grid-image.webp",
    },
    {
      name: "5.7x28mm R37.F",
      description:
        "A 5.7x28mm FN R37.F cartridge with a 2.4 gram frangible bullet made entirely of copper, in a brass case; produced by R&R Weapon Systems. The bullet is designed to fragment upon impact, turning the bullet tip into three razor sharp petals, thus providing a superior stopping power effect of its caliber, as well as causing substantial adverse effects on the target after impact, at the cost of penetration capabilities, even against basic ballistic protection.",
      image:
        "https://assets.tarkov.dev/5cc86832d7f00c000d3a6e6c-grid-image.webp",
    },
    {
      name: "5.7x28mm R37.X",
      description:
        "A 5.7x28mm FN R37.X cartridge with a 2.4 gram open tipped bullet made entirely of copper, in a brass case; produced by R&R Weapon Systems. The bullet is designed to expand upon impact, turning the bullet tip into a three-pointed star shape whose petals are razor sharp, granting an outstanding stopping power effect as well as causing substantial adverse effects on the target after impact, at the cost of penetration capabilities, even against basic ballistic protection.",
      image:
        "https://assets.tarkov.dev/5cc86840d7f00c002412c56c-grid-image.webp",
    },
    {
      name: "AK-74 SRVV MBR Jet 5.45x39 muzzle brake",
      description:
        "An SRVV-produced muzzle brake for AK-74 5.45x39 assault rifles and compatibles.",
      image:
        "https://assets.tarkov.dev/5cc9a96cd7f00c011c04e04a-grid-image.webp",
    },
    {
      name: "AK SRVV 7.62x39 muzzle brake-compensator",
      description:
        "An SRVV-produced muzzle brake and compensator for AK assault rifles and compatibles.",
      image:
        "https://assets.tarkov.dev/5cc9ad73d7f00c000e2579d4-grid-image.webp",
    },
    {
      name: "AR-15 TROY Claymore 5.56x45 muzzle brake",
      description:
        "Claymore is an effective muzzle brake for AR-15 base weapon systems, produced by TROY.",
      image:
        "https://assets.tarkov.dev/5cc9b815d7f00c000e2579d6-grid-image.webp",
    },
    {
      name: "AR-15 Hera Arms HG-15 pistol grip",
      description:
        "The Hera Arms HG-15 pistol grip can be installed on any weapon compatible with AR-15 grips.",
      image:
        "https://assets.tarkov.dev/5cc9bcaed7f00c011c04e179-grid-image.webp",
    },
    {
      name: "NcSTAR Tactical blue laser LAM-module",
      description:
        "A compact tactical Laser Aiming Module with a blue dot. Mounts on any Picatinny/Weaver rail for precise target acquisition. Manufactured by NcSTAR.",
      image:
        "https://assets.tarkov.dev/5cc9c20cd7f00c001336c65d-grid-image.webp",
    },
    {
      name: "ASh-12 vertical foregrip",
      description: "A vertical foregrip for the ASh-12 assault rifle.",
      image:
        "https://assets.tarkov.dev/5cda9bcfd7f00c0c0b53e900-grid-image.webp",
    },
    {
      name: "ASh-12 polymer handguard",
      description:
        "A polymer handguard for ASh-12 assault rifle, manufactured by TsKIB.",
      image:
        "https://assets.tarkov.dev/5cdaa99dd7f00c002412d0b2-grid-image.webp",
    },
    {
      name: "AR-10 Keeno Arms SHREWD 7.62x51 muzzle brake",
      description:
        "The SHREWD muzzle brake designed for installation on AR-10-type systems and compatibles. Manufactured by Keeno Arms.",
      image:
        "https://assets.tarkov.dev/5cdd7685d7f00c000f260ed2-grid-image.webp",
    },
    {
      name: "AR-10 Precision Armanent M11 Severe-Duty 7.62x51 muzzle brake",
      description:
        "The M11 muzzle brake designed for installation on AR-10-type systems and compatibles. Manufactured by Precision Armament.",
      image:
        "https://assets.tarkov.dev/5cdd7693d7f00c0010373aa5-grid-image.webp",
    },
    {
      name: "M700 AB Arms MOD*X GEN 3 chassis",
      description:
        "The AB Arms MOD*X GEN III Modular Rifle System is a lightweight, ergonomic, drop-in chassis designed for the Remington Model 700 bolt-action sniper rifle.",
      image:
        "https://assets.tarkov.dev/5cde739cd7f00c0010373bd3-grid-image.webp",
    },
    {
      name: "M700 AB Arms MOD*X buffer tube side folder adapter",
      description:
        "A foldable adapter for installation of telescopic stock buffer tubes on the Remington M700 MOD*X kit by AB Arms.",
      image:
        "https://assets.tarkov.dev/5cde77a9d7f00c000f261009-grid-image.webp",
    },
    {
      name: "M700 AB Arms MOD*X GEN 3 KeyMod handguard",
      description:
        "The AB Arms MOD*X GEN 3 KeyMod handguard for M700 sniper rifles equipped with a KeyMod interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5cde7afdd7f00c000d36b89d-grid-image.webp",
    },
    {
      name: "M700 AB Arms MOD*X rail mount",
      description:
        "The AB Arms MOD*X universal mount for the Remington Model 700 sniper rifle, allows installation of various optics.",
      image:
        "https://assets.tarkov.dev/5cde7b43d7f00c000d36b93e-grid-image.webp",
    },
    {
      name: "M700 Magpul Pro 700 chassis",
      description:
        "Pro 700 is a lightweight ergonomic chassis designed for the Remington M700 sniper rifle. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5cdeac22d7f00c000f26168f-grid-image.webp",
    },
    {
      name: "M700 Magpul Pro 700 folding stock",
      description:
        "A folding stock for the Pro 700 chasiss for the Remington M700 sniper rifle, manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5cdeac42d7f00c000d36ba73-grid-image.webp",
    },
    {
      name: "M700 Magpul Pro 700 pistol grip",
      description:
        "A polymer pistol grip for installation on the Pro 700 chassis for the Remington M700 sniper rifle. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5cdeac5cd7f00c000f261694-grid-image.webp",
    },
    {
      name: "M700 Magpul Pro 700 chassis inline mount",
      description:
        "A universal mount rail by Magpul for installation of additional tactical devices, can be installed on the Pro 700 chasiss for the Remington M700 sniper rifle.",
      image:
        "https://assets.tarkov.dev/5cdeaca5d7f00c00b61c4b70-grid-image.webp",
    },
    {
      name: "M700 7.62x51 Magpul PMAG AC 5-round magazine",
      description:
        "A Remington M700 sniper rifle 5-round polymer magazine by Magpul. It accepts 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5ce69cbad7f00c00b61c5098-grid-image.webp",
    },
    {
      name: "FN P90 Attenuator 5.7x28 sound suppressor",
      description:
        "Attenuator is a 5.7x28 mm sound suppressor manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cebec00d7f00c065c53522a-grid-image.webp",
    },
    {
      name: "FN PS90 stock",
      description:
        "A polymer stock for the civilian PS90 SMG variant. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cebec10d7f00c065703d185-grid-image.webp",
    },
    {
      name: "FN P90 Ring Sight reflex sight",
      description:
        "Ring Sight is a reflex sight for the P90 SMG, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cebec38d7f00c00110a652a-grid-image.webp",
    },
    {
      name: "M700 7.62x51 ProMag AA-70 20-round magazine",
      description:
        "A Remington M700 sniper rifle magazine by ProMag, for the Archangel M700 stock. It accepts 7.62x51 cartridges and has a 20-round capacity.",
      image:
        "https://assets.tarkov.dev/5cf12a15d7f00c05464b293f-grid-image.webp",
    },
    {
      name: "M700 ProMag Archangel chassis",
      description:
        "The Archangel ergonomic polymer chassis for the Remington M700 sniper rifle. Manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/5cf13123d7f00c1085616a50-grid-image.webp",
    },
    {
      name: "AK 5.45 Design Aggressor handguard",
      description:
        "Aggressor is a railed handguard for AK series rifles manufactured by 5.45 Design. Features 4 side rails for installation of tactical devices and 2 long rails for installation of various optics and foregrips.",
      image:
        "https://assets.tarkov.dev/5cf4e3f3d7f00c06595bc7f0-grid-image.webp",
    },
    {
      name: "RTM Pillau tactical foregrip",
      description: "A lightweight aluminum tactical grip produced by RTM.",
      image:
        "https://assets.tarkov.dev/5cf4fb76d7f00c065703d3ac-grid-image.webp",
    },
    {
      name: "AK Strike Industries Enhanced Pistol Grip (Black)",
      description:
        "The AK-EPG (AK Enhanced Pistol Grip) ergonomic polymer pistol grip for AK-family automatic rifles. Manufactured by Strike Industries.",
      image:
        "https://assets.tarkov.dev/5cf50850d7f00c056e24104c-grid-image.webp",
    },
    {
      name: "AK Strike Industries Enhanced Pistol Grip (FDE)",
      description:
        "The AK-EPG (AK Enhanced Pistol Grip) ergonomic polymer pistol grip for AK-family automatic rifles. Manufactured by Strike Industries. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5cf508bfd7f00c056e24104e-grid-image.webp",
    },
    {
      name: "AK-74M CAA AKTS AK74 buffer tube",
      description:
        "CAA Receiver Extension Buffer Tube, 6-position, Mil-Spec diameter will fit any modern AK-based rifles with a side-folding stock.",
      image:
        "https://assets.tarkov.dev/5cf50fc5d7f00c056c53f83c-grid-image.webp",
    },
    {
      name: "AKM/AK-74 CAA AKTS buffer tube",
      description:
        "CAA Receiver Extension Buffer Tube, 6-position, Mil-Spec diameter will fit any AK-based rifles with a fixed stock.",
      image:
        "https://assets.tarkov.dev/5cf518cfd7f00c065b422214-grid-image.webp",
    },
    {
      name: "AK KGB MG-47 pistol grip",
      description:
        "A machined aluminum grip with styling queues taken from triangle side folding stocks. Compatible with all AK family weapon systems. Manufactured by Kraft Gun Builders.",
      image:
        "https://assets.tarkov.dev/5cf54404d7f00c108840b2ef-grid-image.webp",
    },
    {
      name: "NPZ USP-1 Tyulpan 4x scope",
      description:
        "The USP-1 Tyulpan unified rifle scope is designed to conduct accurate fire from AK-74N, AK-74M, AN-94 assault rifles and RPK-74N and PKMN machine guns in the daytime and at night. Installed on dovetail mount rail.",
      image:
        "https://assets.tarkov.dev/5cf638cbd7f00c06595bc936-grid-image.webp",
    },
    {
      name: "NPZ USP-1 scope eyecup",
      description: "A rubber eyecup for the NPZ USP-1 scope.",
      image:
        "https://assets.tarkov.dev/5cf639aad7f00c065703d455-grid-image.webp",
    },
    {
      name: "AK Vezhlivyy Strelok VS-24 + VS-33c handguard & gas tube combo",
      description:
        "A combined kit of the VS-24 handguard with the VS-33c gas tube, can be installed on 5.56x45, 5.45x39, 7.62x39 AK family assault rifles. Manufactured by Vezhlivyy Strelok.",
      image:
        "https://assets.tarkov.dev/5cf656f2d7f00c06585fb6eb-grid-image.webp",
    },
    {
      name: "Mosin Rifle Weapon Tuning 7.62x39 thread adapter",
      description:
        "The Weapon Tuning muzzle adapter. Provides the ability to install modern 7.62x39 muzzle devices on the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5cf67a1bd7f00c06585fb6f3-grid-image.webp",
    },
    {
      name: "SKS Weapon Tuning 7.62x39 thread adapter",
      description:
        "The Weapon Tuning muzzle adapter that provides the ability to install modern 7.62x39 muzzle devices on the SKS carbines.",
      image:
        "https://assets.tarkov.dev/5cf67cadd7f00c065a5abab7-grid-image.webp",
    },
    {
      name: "TACCOM Carbine Brake multi-caliber muzzle brake",
      description:
        "The Carbine Brake muzzle brake manufactured by TACCOM for SIG MPX. It can also be used with compatible .308 rifles.",
      image:
        "https://assets.tarkov.dev/5cf6935bd7f00c06585fb791-grid-image.webp",
    },
    {
      name: "AR-15 Bulletec ST-6012 5.56x45 muzzle brake",
      description:
        "ST-6012 is an effective muzzle brake for AR-15-type weapon systems and compatibles. Manufactured by Bulletec.",
      image:
        "https://assets.tarkov.dev/5cf6937cd7f00c056c53fb39-grid-image.webp",
    },
    {
      name: "Lantac BMD Blast Mitigation Device A3 direct thread adapter",
      description:
        "The A3 adapter by Lantac designed for installation of the BMD Blast Mitigation Device.",
      image:
        "https://assets.tarkov.dev/5cf78496d7f00c065703d6ca-grid-image.webp",
    },
    {
      name: "Lantac BMD 7.62x51 Blast Mitigation Device",
      description:
        "The BMD Blast Mitigation Device by Lantac is a unique blast shield that allows the muzzle brake contained inside it to continue to function as normal with regard to muzzle climb mitigation. Installed on 7.62x51 caliber weapons.",
      image:
        "https://assets.tarkov.dev/5cf78720d7f00c06595bc93e-grid-image.webp",
    },
    {
      name: "Mosin Rifle Kiba Arms 7.62x54R custom thread adapter",
      description:
        "A custom-made Mosin rifle muzzle device adapter. Provides the means of installing 7.62x39 muzzle devices on the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5cf79389d7f00c10941a0c4d-grid-image.webp",
    },
    {
      name: "Mosin Rifle Tiger Rock 7.62x51 thread adapter",
      description:
        "The Tiger Rock muzzle device adapter. Provides the ability to install modern 7.62x51 NATO muzzle devices on the Mosin rifle.",
      image:
        "https://assets.tarkov.dev/5cf79599d7f00c10875d9212-grid-image.webp",
    },
    {
      name: "FN PS90 5.7x28 upper receiver",
      description:
        "A regular upper receiver for the PS90, produced by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5cf7acfcd7f00c1084477cf2-grid-image.webp",
    },
    {
      name: "SOK-12 12/76 MaxRounds Powermag 20-round magazine",
      description:
        "The MaxRounds Powermag 20-shell magazine for SOK-12 and compatible weapons, intended for use with 12/76 or 12/70 shells.",
      image:
        "https://assets.tarkov.dev/5cf8f3b0d7f00c00217872ef-grid-image.webp",
    },
    {
      name: "AK 7.62x39 X Products X-47 50-round drum magazine",
      description:
        "The X-47 is a 50-round drum magazine for 7.62x39 AK family assault rifles. Manufactured by X Products. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/5cfe8010d7ad1a59283b14c6-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense WAVE 5.56x45 muzzle brake",
      description:
        "The Daniel Defense WAVE muzzle brake is designed to securely mount the Daniel Defense WAVE suppressor to the host firearm, but also functions effectively without it. It's manufactured from aerospace 17-4 PH stainless steel and had a salt bath nitride finish for minimal corrosion.",
      image:
        "https://assets.tarkov.dev/5cff9e5ed7ad1a09407397d4-grid-image.webp",
    },
    {
      name: "Daniel Defense WAVE QD sound suppressor",
      description:
        "The Daniel Defense WAVE QD (Quick Detach) sound suppressor which can be installed on the compatible WAVE muzzle brakes.",
      image:
        "https://assets.tarkov.dev/5cff9e84d7ad1a049e54ed55-grid-image.webp",
    },
    {
      name: "AR-15 Strike Industries Viper carbine length M-LOK handguard",
      description:
        "The Strike Industries Viper handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5d00e0cbd7ad1a6c6566a42d-grid-image.webp",
    },
    {
      name: "AR-15 JP Enterprises Gas System-5B",
      description:
        "A low-profile gas system that can be installed on AR-15/AR-10 weapon systems. Manufactured by JP Enterprises.",
      image:
        "https://assets.tarkov.dev/5d00ec68d7ad1a04a067e5be-grid-image.webp",
    },
    {
      name: "AR-10 Noveske SWS N6 10.5 inch handguard",
      description:
        "The Noveske SWS N6 10.5 inch handguard is made with light but durable aircraft aluminum alloy. It comes equipped with 4 mounts for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5d00ede1d7ad1a0940739a76-grid-image.webp",
    },
    {
      name: "AR-10 Noveske SWS N6 Split handguard",
      description:
        "The Noveske SWS N6 Split handguard is made with light but durable aircraft aluminum alloy. It comes equipped with 4 mounts for the installation of additional devices and accessories. Fits AR-10 compatible weapon systems.",
      image:
        "https://assets.tarkov.dev/5d00ef6dd7ad1a0940739b16-grid-image.webp",
    },
    {
      name: "AR-15 Strike Industries Viper carbine length M-LOK handguard (FDE)",
      description:
        "The Strike Industries Viper handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d00f63bd7ad1a59283b1c1e-grid-image.webp",
    },
    {
      name: "HK MP5 CAA HX-5 handguard",
      description:
        "The HX-5 handguard for HK MP5 SMG manufactured by Command Arms Accessories, equipped with 5 rail mounts for installation of additional tactical devices.",
      image:
        "https://assets.tarkov.dev/5d010d1cd7ad1a59283b1ce7-grid-image.webp",
    },
    {
      name: "SKS FAB Defense UAS chassis",
      description:
        "Lightweight polymer chassis for SKS carbine, manufactured by FAB Defense. Features a quad Picatinny system for mounting various tactical devices, a folding buttstock and an integrated enhanced magazine release lever.",
      image:
        "https://assets.tarkov.dev/5d0236dad7ad1a0940739d29-grid-image.webp",
    },
    {
      name: "SKS/VZ-58 FAB Defense AG-58 pistol grip",
      description:
        "A light ergonomic pistol grip for VZ-58 carbines, but it is also compatible with the UAS SKS stock. Manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/5d023784d7ad1a049d4aa7f2-grid-image.webp",
    },
    {
      name: "Mosin Rifle Arbalet Patriot K+W rail mount",
      description:
        "The Patriot K+W rail mount for Mosin rifle, manufactured by Arbalet.",
      image:
        "https://assets.tarkov.dev/5d024f5cd7ad1a04a067e91a-grid-image.webp",
    },
    {
      name: "AR-15 HK Ergo PSG-1 style pistol grip",
      description:
        "The Ergo PSG-1 style pistol grip can be installed on any weapon compatible with AR-15 grips.",
      image:
        "https://assets.tarkov.dev/5d025cc1d7ad1a53845279ef-grid-image.webp",
    },
    {
      name: "AR-15 Nordic Components Corvette 5.56x45 compensator",
      description:
        "The Corvette 5.56x45 Compensator Muzzle Brake from Nordic Components reduces recoil and muzzle flip by directing gases upward and to the side.",
      image:
        "https://assets.tarkov.dev/5d02676dd7ad1a049e54f6dc-grid-image.webp",
    },
    {
      name: "AR-10 Nordic Components Corvette 7.62x51 compensator",
      description:
        "The Corvette 7.62x51 Compensator Muzzle Brake from Nordic Components reduces recoil and muzzle flip by directing gases upward and to the side.",
      image:
        "https://assets.tarkov.dev/5d02677ad7ad1a04a15c0f95-grid-image.webp",
    },
    {
      name: "AR-10 Fortis RED Brake 7.62x51 muzzle brake",
      description:
        "The RED Brake muzzle brake designed for installation on AR-10-type systems and compatibles. Manufactured by Fortis.",
      image:
        "https://assets.tarkov.dev/5d026791d7ad1a04a067ea63-grid-image.webp",
    },
    {
      name: "CMS surgical kit",
      description:
        "Compact surgical kit for treatment of bullet wounds and other serious injuries.",
      image:
        "https://assets.tarkov.dev/5d02778e86f774203e7dedbe-grid-image.webp",
    },
    {
      name: "Surv12 field surgical kit",
      description:
        "An advanced surgical kit with additional high-quality tools, allowing treating serious injuries right on the battlefield.",
      image:
        "https://assets.tarkov.dev/5d02797c86f774203f38e30a-grid-image.webp",
    },
    {
      name: "Military cable",
      description:
        "A reinforced military cable designed for use in systems with increased operation intensity.",
      image:
        "https://assets.tarkov.dev/5d0375ff86f774186372f685-grid-image.webp",
    },
    {
      name: "Military circuit board",
      description: "Electronic part used in military vehicles and systems.",
      image:
        "https://assets.tarkov.dev/5d0376a486f7747d8050965c-grid-image.webp",
    },
    {
      name: "Phased array element",
      description:
        "High-tech part of the phased array antenna used in radiolocation systems and radio-electronic warfare systems.",
      image:
        "https://assets.tarkov.dev/5d03775b86f774203e7e0c4b-grid-image.webp",
    },
    {
      name: "Iridium military thermal vision module",
      description:
        "An element of the thermal imaging system used in military vehicles.",
      image:
        "https://assets.tarkov.dev/5d0377ce86f774186372f689-grid-image.webp",
    },
    {
      name: "Military gyrotachometer",
      description:
        "A device for determining the angular velocity used in military vehicles.",
      image:
        "https://assets.tarkov.dev/5d03784a86f774203e7e0c4d-grid-image.webp",
    },
    {
      name: "Military power filter",
      description: "A military power filter used in armored vehicles.",
      image:
        "https://assets.tarkov.dev/5d0378d486f77420421a5ff4-grid-image.webp",
    },
    {
      name: "6-STEN-140-M military battery",
      description: "Tank battery with increased capacity. Milspec electronics.",
      image:
        "https://assets.tarkov.dev/5d03794386f77420415576f5-grid-image.webp",
    },
    {
      name: "OFZ 30x160mm shell",
      description:
        "A 30mm high-explosive fragmentation projectile for a 30mm 2A42 cannon used on armored combat vehicles and helicopters.",
      image:
        "https://assets.tarkov.dev/5d0379a886f77420407aa271-grid-image.webp",
    },
    {
      name: "Shturman's stash key",
      description:
        "The Svetloozersk gang's common fund stash key, usually kept by Shturman. The key looks very flimsy, it could break from even a single use.",
      image:
        "https://assets.tarkov.dev/5d08d21286f774736e7c94c3-grid-image.webp",
    },
    {
      name: "KMZ 1P59 dovetail mount",
      description:
        "A universal base with an integrated power supply for installation of the 1P59 scope on the Dovetail rail.",
      image:
        "https://assets.tarkov.dev/5d0a29ead7ad1a0026013f27-grid-image.webp",
    },
    {
      name: "KMZ 1P69 Weaver mount",
      description:
        "A universal base with an integrated power supply for installation of the 1P69 scope on the Weaver type rails.",
      image:
        "https://assets.tarkov.dev/5d0a29fed7ad1a002769ad08-grid-image.webp",
    },
    {
      name: "KMZ 1P59 3-10x riflescope",
      description:
        "The 1P59 Giperon pancratic sight is designed to increase the effectiveness of firing from SVD in comparison with the standard PSO-1 sight by 1.3-2 times (depending on the range and size of the target) due to a larger zoom, the use of a more accurate range finder, combining target ranging and sighting angle input operations, as well as the sighting angle input scale incorporated within the field of view of the sight.",
      image:
        "https://assets.tarkov.dev/5d0a3a58d7ad1a669c15ca14-grid-image.webp",
    },
    {
      name: "KMZ 1P69 3-10x riflescope",
      description:
        "The 1P69 Giperon pancratic sight is a further development of the Giperon sights and is intended for installation on the SV-98 sniper rifle in order to increase the effectiveness on the battlefield. The sight has a flexible adjustment multiples, as well as a fairly accurate range finder, facilitating the operation of combining, measuring the distance to the target and entering the aiming angles.",
      image:
        "https://assets.tarkov.dev/5d0a3e8cd7ad1a6f6a3d35bd-grid-image.webp",
    },
    {
      name: "KMZ 1P59 scope eyecup",
      description: "A rubber eyecup for the KMZ 1P59 scope.",
      image:
        "https://assets.tarkov.dev/5d0b5cd3d7ad1a3fe32ad263-grid-image.webp",
    },
    {
      name: "AN/PEQ-2 tactical device",
      description:
        "ATPIAL (Advanced Target Pointer Illuminator Aiming Laser) AN/PEQ-2 produced by L3 Insight Technologies. Tactical device that combines an IR laser designator with an IR searchlight.",
      image:
        "https://assets.tarkov.dev/5d10b49bd7ad1a1a560708b0-grid-image.webp",
    },
    {
      name: "AR-15 DoubleStar ACE SOCOM Gen.4 stock",
      description:
        "The 4th generation of a recently famous SOCOM stock manufactured by DoubleStar. The stock features a sturdy integral buffer tube and a closed cell foam overtube cover that provides a comfortable cheek weld.",
      image:
        "https://assets.tarkov.dev/5d120a10d7ad1a4e1026ba85-grid-image.webp",
    },
    {
      name: "DoubleStar ACE recoil pad",
      description: "A short 0.5 inch recoil pad for DoubleStar ACE stocks.",
      image:
        "https://assets.tarkov.dev/5d120a28d7ad1a1c8962e295-grid-image.webp",
    },
    {
      name: "AR-15 KAC URX 3.1 10.75 inch handguard",
      description:
        "The Knight's Armament URX 3.1 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5d122e7bd7ad1a07102d6d7f-grid-image.webp",
    },
    {
      name: "AR-15 KAC URX 3 8 inch handguard",
      description:
        "The Knight's Armament URX 3 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5d123102d7ad1a004e475fe5-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 short panel",
      description:
        "A short rail cover for the URX 3/3.1 handguards, manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5d123a3cd7ad1a004e476058-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 long panel",
      description:
        "A long rail cover for the URX 3/3.1 handguards, manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5d123b70d7ad1a0ee35e0754-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 stopper panel",
      description:
        "A stopper panel for the URX 3/3.1 handguards, manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5d123b7dd7ad1a004f01b262-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 short panel (FDE)",
      description:
        "A short rail cover for the URX 3/3.1 handguards, manufactured by Knight's Armament Company. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d124c01d7ad1a115c7d59fb-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 long panel (FDE)",
      description:
        "A long rail cover for the URX 3/3.1 handguards, manufactured by Knight's Armament Company. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d124c0ed7ad1a10d168dd9b-grid-image.webp",
    },
    {
      name: "KAC URX 3/3.1 stopper panel (FDE)",
      description:
        "A stopper panel for the URX 3/3.1 handguards, manufactured by Knight's Armament Company. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d124c1ad7ad1a12227c53a7-grid-image.webp",
    },
    {
      name: "KAC URX 3 3 inch rail",
      description:
        "The KAC URX3 3 inch rail allows installation of additional equipment on the Knight's Armanent Company URX handguards.",
      image:
        "https://assets.tarkov.dev/5d133067d7ad1a33013f95b4-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 30 GEN M3 STANAG 30-round magazine (FDE)",
      description:
        "A 30-round polymer Magpul PMAG GEN M3 30 magazine, for 5.56x45 ammunition. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d1340b3d7ad1a0b52682ed7-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 40 GEN M3 STANAG 40-round magazine (FDE)",
      description:
        "A 40-round polymer Magpul PMAG GEN M3 40 magazine for 5.56x45 ammo. Flat Dark Earth version. ",
      image:
        "https://assets.tarkov.dev/5d1340bdd7ad1a0e8d245aab-grid-image.webp",
    },
    {
      name: "5.56x45 Magpul PMAG 30 GEN M3 W STANAG 30-round magazine (FDE)",
      description:
        "A 30-round 5.56x45 polymer Magpul PMAG GEN M3 30 magazine with an observation slot. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d1340cad7ad1a0b0b249869-grid-image.webp",
    },
    {
      name: "Magpul CTR Carbine stock (Black)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Black version.",
      image:
        "https://assets.tarkov.dev/5d135e83d7ad1a21b83f42d8-grid-image.webp",
    },
    {
      name: "Magpul CTR Carbine stock (FDE)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines by Magpul Original Equipment. Uses mil-spec sized receiver extension tubes. Frame profile avoids snagging and shields the release latch to prevent accidental activation, includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5d135ecbd7ad1a21c176542e-grid-image.webp",
    },
    {
      name: "AKS-74U Alfa Arms Goliaf handguard",
      description:
        "This integrally machined handguard is manufactured from aluminum alloy D16T with coyote brown coating and can be installed instead of the standard-issue foregrip on the AKS-74U. It comes fitted with Picatinny rail mounts on three sides, allowing for the installation of additional equipment such as tactical foregrips, flashlights, and laser designators.",
      image:
        "https://assets.tarkov.dev/5d15ce51d7ad1a1eff619092-grid-image.webp",
    },
    {
      name: "AR-15 Magpul MOE pistol grip (FDE)",
      description:
        "The Magpul MOE (Magpul Original Equipment) polymer pistol grip can be installed on any weapon compatible with AR-15 pistol grips. Thanks to the ergonomic shape and anti-slip texture, it makes weapon grip and control more comfortable. Inside of the grip contains free space for spare parts, tools and accessories kit or batteries.",
      image:
        "https://assets.tarkov.dev/5d15cf3bd7ad1a67e71518b2-grid-image.webp",
    },
    {
      name: "HK MP5 PTR Tri-Rail handguard",
      description:
        "A handguard for HK MP5 SMG manufactured by PTR, equipped with 3 rail mounts for installation of additional tactical devices.",
      image:
        "https://assets.tarkov.dev/5d19cd96d7ad1a4a992c9f52-grid-image.webp",
    },
    {
      name: "AK TDI AKM-L handguard",
      description:
        "The TDI Arms AKM-L can be installed on AKM/AK-74 compatible weapon systems. Equipped with M-LOK mounts for installation of additional devices or rails.",
      image:
        "https://assets.tarkov.dev/5d1b198cd7ad1a604869ad72-grid-image.webp",
    },
    {
      name: "FP-100 filter absorber",
      description:
        "The FP-100 filter absorber is designed to clean the polluted air of various industries from the chemical industry, radioactive dust and bacterial (biological) aerosols.",
      image:
        "https://assets.tarkov.dev/5d1b2f3f86f774252167a52c-grid-image.webp",
    },
    {
      name: "Electric motor",
      description:
        "A small electromechanical transducer, through which electrical energy is converted into mechanical energy. An indispensable thing in production or engineering.",
      image:
        "https://assets.tarkov.dev/5d1b2fa286f77425227d1674-grid-image.webp",
    },
    {
      name: "NIXXOR lens",
      description: "A lens for video equipment and security systems.",
      image:
        "https://assets.tarkov.dev/5d1b2ffd86f77425243e8d17-grid-image.webp",
    },
    {
      name: "Working LCD",
      description:
        "Intact and working liquid crystal display. It can be used in surveillance systems as a signal visualization device.",
      image:
        "https://assets.tarkov.dev/5d1b304286f774253763a528-grid-image.webp",
    },
    {
      name: "Broken LCD",
      description:
        "A damaged liquid crystal display. Contains a lot of useful microelectronic parts.",
      image:
        "https://assets.tarkov.dev/5d1b309586f77425227d1676-grid-image.webp",
    },
    {
      name: "Phase control relay",
      description:
        "A device designed to protect an electric motor or electrical installation powered from a three-phase electrical network.",
      image:
        "https://assets.tarkov.dev/5d1b313086f77425227d1678-grid-image.webp",
    },
    {
      name: "Hand drill",
      description:
        "A rare and old instrument, almost was out of use before the conflict. However, it's especially useful in current times.",
      image:
        "https://assets.tarkov.dev/5d1b317c86f7742523398392-grid-image.webp",
    },
    {
      name: "Round pliers",
      description:
        "A tool that allows you to bend wires with different radius.",
      image:
        "https://assets.tarkov.dev/5d1b31ce86f7742523398394-grid-image.webp",
    },
    {
      name: "Pressure gauge",
      description:
        "A device for measuring pressure in pipes, tanks and other isolated systems.",
      image:
        "https://assets.tarkov.dev/5d1b327086f7742525194449-grid-image.webp",
    },
    {
      name: "Analog thermometer",
      description:
        "An analog thermometer designed to measure and control the temperature of liquid materials.",
      image:
        "https://assets.tarkov.dev/5d1b32c186f774252167a530-grid-image.webp",
    },
    {
      name: "Canister with purified water",
      description:
        "Enriched purified water, which is not only delicious, but also good for your health. Chug all of it in one go, we dare you.",
      image:
        "https://assets.tarkov.dev/5d1b33a686f7742523398398-grid-image.webp",
    },
    {
      name: "Metal fuel tank",
      description: "A metal fuel tank for liquid flammable materials.",
      image:
        "https://assets.tarkov.dev/5d1b36a186f7742523398433-grid-image.webp",
    },
    {
      name: "Expeditionary fuel tank",
      description: "A plastic lightweight expeditionary canister for fuel.",
      image:
        "https://assets.tarkov.dev/5d1b371186f774253763a656-grid-image.webp",
    },
    {
      name: "Bottle of Fierce Hatchling moonshine",
      description:
        "A first-class moonshine straight from the Hideout. Sixfold distillation, purification, crystallization, and ionization of the boiling process led to the creation of this 79-degree drink. Remember that drinking alcohol can lead to tragic consequences.",
      image:
        "https://assets.tarkov.dev/5d1b376e86f774252519444e-grid-image.webp",
    },
    {
      name: "Water filter",
      description:
        "A charcoal water filter used both in production in the food industry and at home. Designed to purify water from harmful impurities.",
      image:
        "https://assets.tarkov.dev/5d1b385e86f774252167b98a-grid-image.webp",
    },
    {
      name: "Light bulb",
      description:
        "A classic incandescent lamp. Fragile, often burns out, shines dimly, and consumes a lot of electricity.",
      image:
        "https://assets.tarkov.dev/5d1b392c86f77425243e98fe-grid-image.webp",
    },
    {
      name: "Silicone tube",
      description:
        "A silicone 20mm diameter tube. An indispensable thing in the chemical industry and, in particular, moonshine production.",
      image:
        "https://assets.tarkov.dev/5d1b39a386f774252339976f-grid-image.webp",
    },
    {
      name: "Pile of meds",
      description:
        "Various medicines and drugs, necessary for the production of meds and filling the contents of individual first-aid kits.",
      image:
        "https://assets.tarkov.dev/5d1b3a5d86f774252167ba22-grid-image.webp",
    },
    {
      name: "Disposable syringe",
      description: "A disposable syringe in individual sterile packaging.",
      image:
        "https://assets.tarkov.dev/5d1b3f2d86f774253763b735-grid-image.webp",
    },
    {
      name: "FLIR RS-32 2.25-9x 35mm 60Hz thermal riflescope",
      description:
        "A versatile thermal imaging telescope/sight with many uses and advantages. It can be installed on weapons for use as a sight, or on the helmet as a monocular via an adapter, or as a separate observation device.",
      image:
        "https://assets.tarkov.dev/5d1b5e94d7ad1a2b865a96b0-grid-image.webp",
    },
    {
      name: "Glock FAB Defense GLR-17 stock",
      description:
        "The GLR-17 telescoping buttstock, manufactured by FAB Defense. Designed to fit Glock-family pistols.",
      image:
        "https://assets.tarkov.dev/5d1c702ad7ad1a632267f429-grid-image.webp",
    },
    {
      name: "Radiator helix",
      description:
        "A radiator helix for industrial type heating devices. Under the influence of electricity, it heats up and transfers heat to the room using a radiator reflector.",
      image:
        "https://assets.tarkov.dev/5d1c774f86f7746d6620f8db-grid-image.webp",
    },
    {
      name: "Weapon parts",
      description:
        "Various weapon parts needed for replacing broken parts, or for the production of homemade weapons.",
      image:
        "https://assets.tarkov.dev/5d1c819a86f774771b0acd6c-grid-image.webp",
    },
    {
      name: "AR-10 Daniel Defense WAVE 7.62x51 muzzle brake",
      description:
        "The Daniel Defense WAVE muzzle brake is designed to securely mount the Daniel Defense WAVE suppressor to the host firearm, but also functions effectively without it. It's manufactured from aerospace 17-4 PH stainless steel and had a salt bath nitride finish for minimal corrosion.",
      image:
        "https://assets.tarkov.dev/5d1f819086f7744b355c219b-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d23376786f77459bb77d838-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun SBR",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d23404b86f7740d62079098-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun CWDG",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d2340e986f77461496241bc-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun SBRT",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d23424c86f7740d5e50ce65-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d23467086f77443f37fc602-grid-image.webp",
    },
    {
      name: "Gold skull ring",
      description:
        "A ring in the shape of a skull, a real attribute of a goon who has reached success.",
      image:
        "https://assets.tarkov.dev/5d235a5986f77443f6329bc6-grid-image.webp",
    },
    {
      name: "GP coin",
      description:
        "A strange looking golden coin. According to rumors, it was actively used as a means of payment for PMC services during the Contract Wars.",
      image:
        "https://assets.tarkov.dev/5d235b4d86f7742e017bc88a-grid-image.webp",
    },
    {
      name: "S I C C organizational pouch",
      description:
        "A small soft organizational pouch for storing various small items such as paper money, coins, metal keys, as well as keycards and dogtags.",
      image:
        "https://assets.tarkov.dev/5d235bb686f77443f4331278-grid-image.webp",
    },
    {
      name: "Steiner DBAL-PL tactical device",
      description:
        "The Steiner DBAL-PL tactical device with an LED flashlight and two laser designators (Red and Green), including an infrared illuminator.",
      image:
        "https://assets.tarkov.dev/5d2369418abbc306c62e0c80-grid-image.webp",
    },
    {
      name: "M700 7.62x51 AI AICS 5-round magazine",
      description:
        "A 5-round Remington M700 sniper rifle magazine by Accuracy International, for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5d25a4a98abbc30b917421a4-grid-image.webp",
    },
    {
      name: "M700 7.62x51 AI AICS 10-round magazine",
      description:
        "A 10-round Remington M700 sniper rifle magazine by Accuracy International, for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5d25a6538abbc306c62e630d-grid-image.webp",
    },
    {
      name: "M700 7.62x51 MDT AICS 12-round magazine",
      description:
        "A 12-round Remington M700 sniper rifle magazine by Modular Driven Technologies LP., for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5d25a6a48abbc306c62e6310-grid-image.webp",
    },
    {
      name: "M700 7.62x51 Magpul PMAG AC 10-round magazine",
      description:
        "A Remington M700 sniper rifle polymer magazine by Magpul, with a 10-round capacity for 7.62x51 cartridges.",
      image:
        "https://assets.tarkov.dev/5d25a7b88abbc3054f3e60bc-grid-image.webp",
    },
    {
      name: "M700 7.62x51 ProMag AA-70 10-round magazine",
      description:
        "A Remington M700 sniper rifle magazine by ProMag, for the Archangel M700 stock. Accepts 7.62x51 cartridges and has a 10-round capacity.",
      image:
        "https://assets.tarkov.dev/5d25af8f8abbc3055079fec5-grid-image.webp",
    },
    {
      name: "M700 AI AT AICS polymer chassis",
      description:
        "The AT AICS polymer chassis for the Remington M700 sniper rifle. Manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/5d25d0ac8abbc3054f3e61f7-grid-image.webp",
    },
    {
      name: "M700 7.62x51 26 inch stainless steel barrel",
      description:
        "A 26 inches (660mm) long stainless steel barrel for Remington Model 700 sniper rifle chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5d2702e88abbc31ed91efc44-grid-image.webp",
    },
    {
      name: "M700 7.62x51 20 inch stainless steel threaded barrel",
      description:
        "A 20 inches (508mm) long stainless steel threaded barrel for the Remington Model 700 sniper rifle chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5d2703038abbc3105103d94c-grid-image.webp",
    },
    {
      name: "M700 thread protection cap",
      description:
        "A threading protection cap for the Remington M700 7.62x51 sniper rifle barrels.",
      image:
        "https://assets.tarkov.dev/5d270b3c8abbc3105335cfb8-grid-image.webp",
    },
    {
      name: "M700 thread protection cap (Stainless steel)",
      description:
        "A stainless steel threading protection cap for the Remington M700 7.62x51 barrels.",
      image:
        "https://assets.tarkov.dev/5d270ca28abbc31ee25ee821-grid-image.webp",
    },
    {
      name: "AK AKademia Bastion dust cover",
      description:
        "The Bastion dust cover with an integrated Picatinny rail is compatible with all models of Kalashnikov automatic rifles and carbines based on the AK platform. Manufactured by AKademia.",
      image:
        "https://assets.tarkov.dev/5d2c76ed48f03532f2136169-grid-image.webp",
    },
    {
      name: "AK FAB Defense PDC dust cover",
      description:
        "The FAB Defense PDC dust cover with an integrated Picatinny rail is compatible with all models of automatic rifles and carbines based on the AK platform.",
      image:
        "https://assets.tarkov.dev/5d2c770c48f0354b4a07c100-grid-image.webp",
    },
    {
      name: "AK TWS Dog Leg Rail dust cover",
      description:
        "The Texas Weapon Systems Dog Leg Rail dust cover with an integrated Picatinny rail is compatible with all models of Kalashnikov automatic rifles and carbines based on the AK platform.",
      image:
        "https://assets.tarkov.dev/5d2c772c48f0355d95672c25-grid-image.webp",
    },
    {
      name: "WASR-10/63 CAF wooden foregrip",
      description:
        "A Romanian handguard/foregrip for WASR-10/63 rifles, manufactured by Cugir Arms Factory. Compatible with AK-family weapon systems.",
      image:
        "https://assets.tarkov.dev/5d2c829448f0353a5c7d6674-grid-image.webp",
    },
    {
      name: "Trijicon SRS-02 reflex sight",
      description:
        "The Trijicon SRS Sealed Reflex Sight is compact and takes up less rail space while maintaining durability and performance. The large 38mm aperture allows for a wide field of view and rapid target engagement. The Trijicon SRS Sealed Reflex Sight features a 1.75 MOA dot for precision. The SRS is powered by a solar cell and a single AA battery.",
      image:
        "https://assets.tarkov.dev/5d2da1e948f035477b1ce2ba-grid-image.webp",
    },
    {
      name: "Monstrum Tactical Compact Prism Scope 2x32",
      description:
        "A compact prismatic scope with 2x magnification manufactured by Monstrum Tactical.",
      image:
        "https://assets.tarkov.dev/5d2dc3e548f035404a1a4798-grid-image.webp",
    },
    {
      name: "HK MP5K 9x19 submachine gun",
      description:
        "HK MP5K (K from the German word Kurz - short) is a shorter version of MP5 SMG which was designed for close quarters combat use by clandestine operations and special services.",
      image:
        "https://assets.tarkov.dev/5d2f0d8048f0356c925bc3b0-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 20-round magazine",
      description:
        "A standard 20-round 9x19 magazine for the MP5 SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5d2f213448f0355009199284-grid-image.webp",
    },
    {
      name: "HK MP5K polymer handguard",
      description:
        "A polymer handguard for the MP5K submachine gun, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5d2f259b48f0355a844acd74-grid-image.webp",
    },
    {
      name: "HK MP5K End Cap stock",
      description:
        "A buttstock with a sling swivel for MP5K SMGs. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5d2f25bc48f03502573e5d85-grid-image.webp",
    },
    {
      name: "HK MP5K 9x19 upper receiver",
      description:
        "A regular upper receiver for the MP5K SMGs, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5d2f261548f03576f500e7b7-grid-image.webp",
    },
    {
      name: "HK MP5K cocking handle",
      description:
        "A standard-issue MP5K cocking handle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5d2f2d5748f03572ec0c0139-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle AICS",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d383e1a86f7742a1468ce63-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle ARCH",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d383ee786f7742a15793860-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle PRO",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d383f5d86f7742a15793872-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle MRS",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d38517786f7742a1468cf6a-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 5.7x28 pistol",
      description:
        "FN Five-Seven, trademarked as the Five-seveN, is a semi-automatic pistol designed and manufactured by FN Herstal in Belgium. The pistol was developed in the early 1990s and features a cold hammer-forged barrel that is chrome-lined for extended service life. The polymer-framed Five-Seven offers single-action operation, low felt recoil, 20-round magazine capacity, and is equipped with an ambidextrous, forward-mounted manual safety, and an accessory rail that accepts tactical lights and lasers.",
      image:
        "https://assets.tarkov.dev/5d3eb3b0a4b93615055e84d2-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 pistol slide",
      description:
        "A regular slide for the Five-seveN MK2 pistol, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5d3eb44aa4b93650d64e4979-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 rear sight",
      description:
        "A standard-issue rear sight for the FN Five-seveN MK2 pistol, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5d3eb4aba4b93650d64e497d-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 front sight",
      description:
        "A standard-issue front sight for the FN Five-seveN MK2 pistol, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5d3eb536a4b9363b1f22f8e2-grid-image.webp",
    },
    {
      name: "FN Five-seveN 5.7x28 threaded barrel",
      description:
        "A regular threaded barrel for the FN Five-seveN pistol, manufacted by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5d3eb59ea4b9361c284bb4b2-grid-image.webp",
    },
    {
      name: "FN Five-seveN 5.7x28 barrel",
      description:
        "A standard-issue barrel for the FN Five-seveN pistol, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5d3eb5b6a4b9361eab311902-grid-image.webp",
    },
    {
      name: "FN Five-seveN 5.7x28 20-round magazine",
      description:
        "A standard 20-round 5.7x28 magazine for the FN Five-seveN pistol.",
      image:
        "https://assets.tarkov.dev/5d3eb5eca4b9363b1f22f8e4-grid-image.webp",
    },
    {
      name: "Gemtech SFN-57 5.7x28 sound suppressor",
      description:
        "SFN-57 is a compact, high-performance sound suppressor for modern 5.7 mm semi-automatic pistols. Produced by Gemtech.",
      image:
        "https://assets.tarkov.dev/5d3ef698a4b9361182109872-grid-image.webp",
    },
    {
      name: "HK MP5K 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d3f06c886f7743bb5318c6a-grid-image.webp",
    },
    {
      name: "Beretta M9A3 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d3f0bc986f7743cb332abdc-grid-image.webp",
    },
    {
      name: "Bottle of Dan Jackiel whiskey",
      description:
        "The most popular whiskey among the PMCs. The unique filtration of the drink occurs through charcoal obtained from the burning of Samara sugar birch. This is an alcohol drink, and alcohol is harmful. Especially for such a warrior like you.",
      image:
        "https://assets.tarkov.dev/5d403f9186f7743cac3f229b-grid-image.webp",
    },
    {
      name: "Bottle of Tarkovskaya vodka",
      description:
        "Tarkov fire water. It is not recommended to consume it in general, alcohol is harmful and all that, but sometimes it is necessary to relax after the battle. No need to raid area 51 to see them aliens after all.",
      image:
        "https://assets.tarkov.dev/5d40407c86f774318526545a-grid-image.webp",
    },
    {
      name: "Schaman shampoo",
      description:
        "The Schaman hair detergent with the smell of melon, barbecue, and bus station.",
      image:
        "https://assets.tarkov.dev/5d40412b86f7743cb332ac3a-grid-image.webp",
    },
    {
      name: "Metal cutting scissors",
      description: "Special scissors for cutting sheet metal.",
      image:
        "https://assets.tarkov.dev/5d40419286f774318526545f-grid-image.webp",
    },
    {
      name: "Ortodontox toothpaste",
      description:
        "A toothpaste approved by 9 out of 10 dentists. The one dentist who did not approve was clearly out of his mind, since he recommended shoe polish at first.",
      image:
        "https://assets.tarkov.dev/5d4041f086f7743cac3f22a7-grid-image.webp",
    },
    {
      name: "Nippers",
      description: "A tool designed for wire cutting.",
      image:
        "https://assets.tarkov.dev/5d40425986f7743185265461-grid-image.webp",
    },
    {
      name: "Flat screwdriver (Long)",
      description:
        "A long flathead screwdriver for installation work in hard to reach places.",
      image:
        "https://assets.tarkov.dev/5d4042a986f7743185265463-grid-image.webp",
    },
    {
      name: "Lone Star TX-15 DML 5.56x45 carbine",
      description:
        "The Lone Star Armory TX15 Designated Marksman Light (DML) is a high precision civilian rifle designed on the AR-15 system base, chambered in 5.56x45 rounds.",
      image:
        "https://assets.tarkov.dev/5d43021ca4b9362eab4b5e25-grid-image.webp",
    },
    {
      name: "TX-15 5.56x45 Lightweight upper receiver",
      description:
        "An upper receiver for the TX-15 rifle, manufactured by Lone Star. Equipped with a mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/5d4405aaa4b9361e6a4e6bd3-grid-image.webp",
    },
    {
      name: "AR-15 Lone Star Ion Lite handguard",
      description:
        "The Ion Lite lightweight handguard by Lone Star Armory, designed for use with sport rifles based on the AR-15 platform.",
      image:
        "https://assets.tarkov.dev/5d4405f0a4b9361e6a4e6bd9-grid-image.webp",
    },
    {
      name: "AR-15 Thunder Beast Arms 223CB 5.56x45 muzzle brake",
      description:
        "Thunder Beast Arms 223CB is an effective muzzle brake that also serves as a platform for attaching the Quick Detach Ultra 5 sound suppressor.",
      image:
        "https://assets.tarkov.dev/5d440625a4b9361eec4ae6c5-grid-image.webp",
    },
    {
      name: "Thunder Beast Arms Ultra 5 sound suppressor",
      description:
        "The Ultra 5 sound suppressor is designed for use with 7.62x51 NATO rounds, but also functions as a superb multi-caliber suppressor for multiple hosts, providing excellent performance on 7.62 NATO, .300, 6.8 SPC, 6.5, and 5.56mm NATO. Can only be installed on compatible muzzle devices made by Thunder Beast Arms.",
      image:
        "https://assets.tarkov.dev/5d44064fa4b9361e4f6eb8b5-grid-image.webp",
    },
    {
      name: "Magpul PRS GEN3 stock (Black)",
      description:
        "The Magpul Precision Rifle/Sniper GEN3 is a field precision stock for AR-15/M16 and AR-10/SR-25 platforms. Featuring tool-less length of pull and cheek piece height adjustments via aluminum detent knobs, the PRS GEN3 stock provides a stable interface intended for semi-automatic sniper or varmint rifles. Black version.",
      image:
        "https://assets.tarkov.dev/5d44069ca4b9361ebd26fc37-grid-image.webp",
    },
    {
      name: "Magpul PRS GEN3 stock (Grey)",
      description:
        "The Magpul Precision Rifle/Sniper GEN3 is a field precision stock for AR-15/M16 and AR-10/SR-25 platforms. Featuring tool-less length of pull and cheek piece height adjustments via aluminum detent knobs, the PRS GEN3 stock provides a stable interface intended for semi-automatic sniper or varmint rifles. Grey version.",
      image:
        "https://assets.tarkov.dev/5d4406a8a4b9361e4f6eb8b7-grid-image.webp",
    },
    {
      name: "AR-15 5.56x45 18 inch barrel",
      description:
        "A barrel for AR-15 based weapons for 5.56x45 NATO ammo, 18 inch long.",
      image:
        "https://assets.tarkov.dev/5d440b93a4b9364276578d4b-grid-image.webp",
    },
    {
      name: "AR-15 5.56x45 20 inch barrel",
      description:
        "A barrel for AR-15 based weapons for 5.56x45 NATO ammo, 20 inches long.",
      image:
        "https://assets.tarkov.dev/5d440b9fa4b93601354d480c-grid-image.webp",
    },
    {
      name: "AR-15 Radian Weapons Raptor charging handle (Grey)",
      description:
        "The Raptor charging handle for AR-15 and compatible systems. Manufactured by Radian Weapons. Grey version.",
      image:
        "https://assets.tarkov.dev/5d44334ba4b9362b346d1948-grid-image.webp",
    },
    {
      name: "AR-10 Thunder Beast Arms 30CB 7.62x51 muzzle brake",
      description:
        "Thunder Beast Arms 30CB is an effective muzzle brake that also serves as a platform for attaching the Quick Detach Ultra 5 sound suppressor.",
      image:
        "https://assets.tarkov.dev/5d443f8fa4b93678dd4a01aa-grid-image.webp",
    },
    {
      name: "AK TDI AKM-L handguard (Anodized Red)",
      description:
        "The TDI Arms AKM-L can be installed on AKM/AK-74 compatible weapon systems. Equipped with M-LOK mounts for installation of additional devices or rails. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5d4aaa54a4b9365392071170-grid-image.webp",
    },
    {
      name: "AK TDI AKM-L handguard (Anodized Bronze)",
      description:
        "The TDI Arms AKM-L can be installed on AKM/AK-74 compatible weapon systems. Equipped with M-LOK mounts for installation of additional devices or rails. Anodized Bronze version.",
      image:
        "https://assets.tarkov.dev/5d4aaa73a4b9365392071175-grid-image.webp",
    },
    {
      name: "AK Vezhlivyy Strelok VS-24 + VS-33c handguard & gas tube combo (White)",
      description:
        "A combined kit of the VS-24 handguard with the VS-33c gas tube, can be installed on 5.56x45, 5.45x39, 7.62x39 AK family assault rifles. Manufactured by Vezhlivyy Strelok. White version.",
      image:
        "https://assets.tarkov.dev/5d4aab30a4b9365435358c55-grid-image.webp",
    },
    {
      name: "Lone Star TX-15 DML 5.56x45 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d4d617f86f77449c463d107-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 5.7x28 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d51290186f77419093e7c24-grid-image.webp",
    },
    {
      name: "6B3TM-01M armored rig",
      description:
        "The 6B3 modified general army body armor under the index 6B3TM-01M. Actively used during the war in Afghanistan. It has a comprehensive titanium class 4 (Russian GOST) protection and a set of several pouches for magazines and grenades.",
      image:
        "https://assets.tarkov.dev/5d5d646386f7742797261fd9-grid-image.webp",
    },
    {
      name: "Haley Strategic D3CRX Chest Harness",
      description:
        "The Haley Strategic D3CRX Combat chest rig is one of the most respected PMC rig systems. Ease and comfort of use are supported by the presence of the optimal number of pouches.",
      image:
        "https://assets.tarkov.dev/5d5d85c586f774279a21cbdb-grid-image.webp",
    },
    {
      name: "Ars Arma A18 Skanda plate carrier",
      description:
        "A plate carrier with armor plates (Russian GOST class 4 protection) with chest and back protection. Equipped with a set of pouches. Manufactured by Ars Arma.",
      image:
        "https://assets.tarkov.dev/5d5d87f786f77427997cfaef-grid-image.webp",
    },
    {
      name: "SOE Micro Rig",
      description:
        "An extra lightweight and small chest rig with the necessary minimum of pouches. Manufactured by SOE Gear.",
      image:
        "https://assets.tarkov.dev/5d5d8ca986f7742798716522-grid-image.webp",
    },
    {
      name: "Oakley Mechanism heavy duty backpack (Black)",
      description:
        "The Mechanism backpack offers versatility and durable construction that accommodates any adventure. Heavy-duty metal clips, zips, and hook-and-loop closures create secure storage, and a flap-top opening means more room for hauling larger items. A variety of specialized pockets deliver military-style organization and easy access, and padded adjustable shoulder straps keep every excursion comfortable.",
      image:
        "https://assets.tarkov.dev/5d5d940f86f7742797262046-grid-image.webp",
    },
    {
      name: "MSA ACH TC-2001 MICH Series helmet",
      description:
        "The MSA Advanced Combat Helmet (ACH) delivers advanced ballistic, fragmentation, and impact head protection, with comfort for long-term use. The helmet’s low-profile design reduces the risk of interference in target acquisition and ensures compatibility with NVGs and headsets.",
      image:
        "https://assets.tarkov.dev/5d5e7d28a4b936645d161203-grid-image.webp",
    },
    {
      name: "MSA ACH TC-2002 MICH Series helmet",
      description:
        "The MSA Advanced Combat Helmet (ACH) delivers advanced ballistic, fragmentation, and impact head protection, with comfort for long-term use. The helmet’s low-profile design reduces the risk of interference in target acquisition and ensures compatibility with NVGs and headsets.",
      image:
        "https://assets.tarkov.dev/5d5e9c74a4b9364855191c40-grid-image.webp",
    },
    {
      name: "Crossbow tactical glasses",
      description:
        "Ballistic glasses with impact-resistant polycarbonate lenses.",
      image:
        "https://assets.tarkov.dev/5d5fca1ea4b93635fd598c07-grid-image.webp",
    },
    {
      name: "Flat screwdriver",
      description:
        "A flathead screwdriver for installation work in hard to reach places.",
      image:
        "https://assets.tarkov.dev/5d63d33b86f7746ea9275524-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 5.7x28 pistol (FDE)",
      description:
        "FN Five-Seven, trademarked as the Five-seveN, is a semi-automatic pistol designed and manufactured by FN Herstal in Belgium. The pistol was developed in the early 1990s and features a cold hammer-forged barrel that is chrome-lined for extended service life. The polymer-framed Five-Seven offers single-action operation, low felt recoil, 20-round magazine capacity, and is equipped with an ambidextrous, forward-mounted manual safety, and an accessory rail that accepts tactical lights and lasers. This model features a Flat Dark Earth colored frame.",
      image:
        "https://assets.tarkov.dev/5d67abc1a4b93614ec50137f-grid-image.webp",
    },
    {
      name: "Gascan glasses",
      description:
        "Ballistic shooting glasses. They not only protect your eyes, but also emphasize your unique style.",
      image:
        "https://assets.tarkov.dev/5d6d2e22a4b9361bd5780d05-grid-image.webp",
    },
    {
      name: "RayBench Aviator glasses",
      description:
        "Legendary mercenary glasses around the world. Wear them if you want to be cool, like Vovan from the hood.",
      image:
        "https://assets.tarkov.dev/5d6d2ef3a4b93618084f58bd-grid-image.webp",
    },
    {
      name: "BNTI LShZ-2DTM helmet",
      description:
        "The LShZ-2DTM helmet is intended for periodic wearing with the purpose of protection from bullets of small arms of a user’s head, as well as for protection from bullets of small arms of a user’s face and neck when equipped with a visor and aventail.",
      image:
        "https://assets.tarkov.dev/5d6d3716a4b9361bc8618872-grid-image.webp",
    },
    {
      name: "LShZ-2DTM face shield",
      description:
        "The protective structure of the bulletproof faceshield for the helmet LShZ-2DTM consists of a combination of composite material and bulletproof glass, which provides increased protection.",
      image:
        "https://assets.tarkov.dev/5d6d3829a4b9361bc8618943-grid-image.webp",
    },
    {
      name: "LShZ-2DTM cover (Black)",
      description: "A black anti-glare cover for the LShZ-2DTM helmet.",
      image:
        "https://assets.tarkov.dev/5d6d3943a4b9360dbc46d0cc-grid-image.webp",
    },
    {
      name: "LShZ-2DTM aventail",
      description:
        "An additional armored protection for lower back head part and neck for the LShZ-2DTM helmet.",
      image:
        "https://assets.tarkov.dev/5d6d3be5a4b9361bc73bc763-grid-image.webp",
    },
    {
      name: "12/70 5.25mm buckshot",
      description:
        "A 12/70 shell loaded with 15 5.25mm buckshot pellets for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6772a4b936088465b17c-grid-image.webp",
    },
    {
      name: "12/70 6.5mm Express buckshot",
      description:
        "A 12/70 shell loaded with 9 6.5mm buckshot pellets for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e67fba4b9361bc73bc779-grid-image.webp",
    },
    {
      name: "12/70 8.5mm Magnum buckshot",
      description:
        "A 12/70 shell loaded with 16 8.5mm buckshot pellets for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6806a4b936088465b17e-grid-image.webp",
    },
    {
      name: "12/70 Grizzly 40 slug",
      description:
        "The Grizzly 40 12/70 expanding slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6869a4b9361c140bcfde-grid-image.webp",
    },
    {
      name: "12/70 Poleva-3 slug",
      description:
        "A Poleva-3 12/70 expanding slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6891a4b9361bd473feea-grid-image.webp",
    },
    {
      name: "12/70 Poleva-6u slug",
      description:
        "A Poleva-6u 12/70 cartridge with an FMJ slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e689ca4b9361bc8618956-grid-image.webp",
    },
    {
      name: "12/70 AP-20 armor-piercing slug",
      description:
        "A 12/70 armor-piercing slug shell for 12 gauge shotguns. Designed for law enforcement forces of our overseas ʕ•ᴥ•ʔ friends ʕ•ᴥ•ʔ.",
      image:
        "https://assets.tarkov.dev/5d6e68a8a4b9360b6c0d54e2-grid-image.webp",
    },
    {
      name: "12/70 Copper Sabot Premier HP slug",
      description: "A 12/70 copper solid slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e68b3a4b9361bca7e50b5-grid-image.webp",
    },
    {
      name: "12/70 makeshift .50 BMG slug",
      description:
        "A custom-made 12/70 slug shell with a shortened .50 BMG tracer bullet for 12 gauge shotguns. No one knows who and why is producing these strange slugs in Tarkov, but they just work... somehow.",
      image:
        "https://assets.tarkov.dev/5d6e68c4a4b9361b93413f79-grid-image.webp",
    },
    {
      name: "12/70 SuperFormance HP slug",
      description:
        "A SuperFormance 12/70 hollow-point slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e68d1a4b93622fe60e845-grid-image.webp",
    },
    {
      name: "12/70 Dual Sabot slug",
      description: "The Dual Sabot Slug 12/70 shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e68dea4b9361bcc29e659-grid-image.webp",
    },
    {
      name: "12/70 FTX Custom Lite slug",
      description:
        "The FTX Custom Lite 12/70 slug shell for 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e68e6a4b9361c140bcfe0-grid-image.webp",
    },
    {
      name: "12/70 flechette",
      description:
        "A 12/70 shell loaded with razor-sharp flechettes for 12ga shotguns. Far from being the most effective round, but believe us - you definitely don't want to be on the receiving end of the weapon loaded with it.",
      image:
        "https://assets.tarkov.dev/5d6e6911a4b9361bd5780d52-grid-image.webp",
    },
    {
      name: "20/70 5.6mm buckshot",
      description: "A 20/70 gauge shell loaded with 5.6mm buckshot.",
      image:
        "https://assets.tarkov.dev/5d6e695fa4b936359b35d852-grid-image.webp",
    },
    {
      name: "20/70 6.2mm buckshot",
      description: "A 20/70 gauge shell loaded with 6.2mm buckshot.",
      image:
        "https://assets.tarkov.dev/5d6e69b9a4b9361bc8618958-grid-image.webp",
    },
    {
      name: "20/70 7.3mm buckshot",
      description: "A 20/70 gauge shell loaded with 7.3mm buckshot.",
      image:
        "https://assets.tarkov.dev/5d6e69c7a4b9360b6c0d54e4-grid-image.webp",
    },
    {
      name: "20/70 Star slug",
      description: "A 20/70 slug shell for 20 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6a05a4b93618084f58d0-grid-image.webp",
    },
    {
      name: "20/70 Poleva-6u slug",
      description: "A Poleva-6u 20/70 FMJ slug shell for 20 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6a42a4b9364f07165f52-grid-image.webp",
    },
    {
      name: "20/70 Poleva-3 slug",
      description:
        "A Poleva-3 20/70 expanding slug shell for 20 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6a53a4b9361bd473feec-grid-image.webp",
    },
    {
      name: "20/70 Devastator slug",
      description: "A 20/70 hollow point slug shell for 20 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/5d6e6a5fa4b93614ec501745-grid-image.webp",
    },
    {
      name: "Gunpowder Eagle",
      description:
        "A tin with gunpowder. An essential resource for creating cartridges. The main advantage of gunpowder of this brand is its dense composition and the large energy released during combustion.",
      image:
        "https://assets.tarkov.dev/5d6fc78386f77449d825f9dc-grid-image.webp",
    },
    {
      name: "Gunpowder Hawk",
      description:
        "A tin with gunpowder. An essential resource for creating cartridges. A rare and high-quality mixture of high-energy ballistic gunpowder with stabilizing components.",
      image:
        "https://assets.tarkov.dev/5d6fc87386f77449db3db94e-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 RMR mount",
      description:
        "The Fabrique Nationale Herstal sight mount for installation of Trijicon RMR series reflex sights, also compatible with Holosun HS507C.",
      image:
        "https://assets.tarkov.dev/5d7b6bafa4b93652786f4c76-grid-image.webp",
    },
    {
      name: "FN Five-seveN MK2 5.7x28 pistol (FDE)",
      description: "null",
      image:
        "https://assets.tarkov.dev/5d7b845786f7743c1e531da7-grid-image.webp",
    },
    {
      name: "RB-BK marked key",
      description:
        "A Federal State Reserve Agency base eastern barracks metalsmiths' room key with multiple strange symbols scratched onto it where the room label would usually be. The key is stained by blood and appears to have been misused a lot, making it fragile.",
      image:
        "https://assets.tarkov.dev/5d80c60f86f77440373c4ece-grid-image.webp",
    },
    {
      name: "RB-VO marked key",
      description:
        "A Federal State Reserve Agency base guard barracks key with multiple strange symbols scratched onto it where the room label would usually be. The key is stained by blood and appears to have been misused a lot, making it fragile.",
      image:
        "https://assets.tarkov.dev/5d80c62a86f7744036212b3f-grid-image.webp",
    },
    {
      name: "RB-AO key",
      description:
        "A key to one of the Federal State Reserve Agency base guard barracks' armories.",
      image:
        "https://assets.tarkov.dev/5d80c66d86f774405611c7d6-grid-image.webp",
    },
    {
      name: "RB-OB key",
      description:
        "A key to the Federal State Reserve Agency base eastern barracks' duty officer's room.",
      image:
        "https://assets.tarkov.dev/5d80c6c586f77440351beef1-grid-image.webp",
    },
    {
      name: "RB-TB key",
      description:
        "A key to the Federal State Reserve Agency base eastern barracks' underground shooting range.",
      image:
        "https://assets.tarkov.dev/5d80c6fc86f774403a401e3c-grid-image.webp",
    },
    {
      name: "RB-AK key",
      description:
        "A key to the Federal State Reserve Agency base Educational Building storage room.",
      image:
        "https://assets.tarkov.dev/5d80c78786f774403a401e3e-grid-image.webp",
    },
    {
      name: "RB-AM key",
      description:
        "A key to the Federal State Reserve Agency base Educational Building workshop.",
      image:
        "https://assets.tarkov.dev/5d80c88d86f77440556dbf07-grid-image.webp",
    },
    {
      name: "RB-OP key",
      description:
        "A key to the Federal State Reserve Agency base Airspace Control Center bunker command office.",
      image:
        "https://assets.tarkov.dev/5d80c8f586f77440373c4ed0-grid-image.webp",
    },
    {
      name: "RB-MP11 key",
      description:
        "A key to one of the Federal State Reserve Agency base Service and Repair Center workshop rooms.",
      image:
        "https://assets.tarkov.dev/5d80c93086f7744036212b41-grid-image.webp",
    },
    {
      name: "RB-MP12 key",
      description:
        "A key to one of the Federal State Reserve Agency base Service and Repair Center workshop rooms.",
      image:
        "https://assets.tarkov.dev/5d80c95986f77440351beef3-grid-image.webp",
    },
    {
      name: "RB-MP21 key",
      description:
        "A key to one of the Federal State Reserve Agency base Service and Repair Center workshop rooms.",
      image:
        "https://assets.tarkov.dev/5d80ca9086f774403a401e40-grid-image.webp",
    },
    {
      name: "RB-MP22 key",
      description:
        "A key to one of the Federal State Reserve Agency base Service and Repair Center workshop rooms.",
      image:
        "https://assets.tarkov.dev/5d80cab086f77440535be201-grid-image.webp",
    },
    {
      name: "RB-PSP1 key",
      description:
        "A key to one of the iron mesh doors in the Federal State Reserve Agency base underground supply warehouse.",
      image:
        "https://assets.tarkov.dev/5d80cb3886f77440556dbf09-grid-image.webp",
    },
    {
      name: "RB-PSV1 key",
      description:
        "A key to one of the iron mesh doors in the Federal State Reserve Agency base underground supply warehouse.",
      image:
        "https://assets.tarkov.dev/5d80cb5686f77440545d1286-grid-image.webp",
    },
    {
      name: "RB-PP key",
      description:
        "A key to the Radar Station bomb shelter under the Federal State Reserve Agency base. Doesn't seem to be actually used for anything though, at least for now.",
      image:
        "https://assets.tarkov.dev/5d80cb8786f774405611c7d9-grid-image.webp",
    },
    {
      name: "RB-MP13 key",
      description:
        "A key to one of the Federal State Reserve Agency base Service and Repair Center workshop rooms.",
      image:
        "https://assets.tarkov.dev/5d80cbd886f77470855c26c2-grid-image.webp",
    },
    {
      name: "RB-ORB1 key",
      description:
        "A key to one of the Federal State Reserve Agency base southern barracks' armories.",
      image:
        "https://assets.tarkov.dev/5d80ccac86f77470841ff452-grid-image.webp",
    },
    {
      name: "RB-ORB2 key",
      description:
        "A key to one of the Federal State Reserve Agency base southern barracks' armories.",
      image:
        "https://assets.tarkov.dev/5d80ccdd86f77474f7575e02-grid-image.webp",
    },
    {
      name: "RB-ORB3 key",
      description:
        "A key to one of the Federal State Reserve Agency base eastern barracks' armories.",
      image:
        "https://assets.tarkov.dev/5d80cd1a86f77402aa362f42-grid-image.webp",
    },
    {
      name: "RB-KORL key",
      description:
        "A key to the Federal State Reserve Agency base Radar Station commander's office.",
      image:
        "https://assets.tarkov.dev/5d8e0db586f7744450412a42-grid-image.webp",
    },
    {
      name: "RB-KPRL key",
      description:
        "A key to the Federal State Reserve Agency base Radar Station guardhouse.",
      image:
        "https://assets.tarkov.dev/5d8e0e0e86f774321140eb56-grid-image.webp",
    },
    {
      name: "HEP station storage room key",
      description:
        "A key to the USEC stash inside hydroelectric power station, located somewhere near the Azure Coast sanatorium.",
      image:
        "https://assets.tarkov.dev/5d8e15b686f774445103b190-grid-image.webp",
    },
    {
      name: "RB-GN key",
      description:
        "A key to the Federal State Reserve Agency base Airspace Control Center bunker generator room.",
      image:
        "https://assets.tarkov.dev/5d8e3ecc86f774414c78d05e-grid-image.webp",
    },
    {
      name: "RB-SMP key",
      description:
        "A key to the Federal State Reserve Agency base Military unit Headquarters' medical storage room.",
      image:
        "https://assets.tarkov.dev/5d947d3886f774447b415893-grid-image.webp",
    },
    {
      name: "RB-KSM key",
      description:
        "A key to the Federal State Reserve Agency base Military unit Headquarters' doctor's office.",
      image:
        "https://assets.tarkov.dev/5d947d4e86f774447b415895-grid-image.webp",
    },
    {
      name: "RB-PSV2 key",
      description:
        "A key to one of the iron mesh doors in the Federal State Reserve Agency base underground supply warehouse.",
      image:
        "https://assets.tarkov.dev/5d95d6be86f77424444eb3a7-grid-image.webp",
    },
    {
      name: "RB-PSP2 key",
      description:
        "A key to one of the iron mesh doors in the Federal State Reserve Agency base underground supply warehouse.",
      image:
        "https://assets.tarkov.dev/5d95d6fa86f77424484aa5e9-grid-image.webp",
    },
    {
      name: "Door Kicker boonie hat",
      description:
        "A well-worn PriceLess boonie hat. It is believed that those who wear it can open any door in this world.",
      image:
        "https://assets.tarkov.dev/5d96141523f0ea1b7f2aacab-grid-image.webp",
    },
    {
      name: "RB-ST key",
      description:
        "A key to the iron door in the Federal State Reserve Agency base military machinery and equipment repair center.",
      image:
        "https://assets.tarkov.dev/5d9f1fa686f774726974a992-grid-image.webp",
    },
    {
      name: "RB-RS key",
      description:
        "A key to the Federal State Reserve Agency base Radar Station server room.",
      image:
        "https://assets.tarkov.dev/5da46e3886f774653b7a83fe-grid-image.webp",
    },
    {
      name: "RB-RH key",
      description:
        "A key to the Federal State Reserve Agency base Airspace Control Center security room.",
      image:
        "https://assets.tarkov.dev/5da5cdcd86f774529238fb9b-grid-image.webp",
    },
    {
      name: "USEC stash key",
      description:
        "A key to the USEC stash, located somewhere in the Customs area.",
      image:
        "https://assets.tarkov.dev/5da743f586f7744014504f72-grid-image.webp",
    },
    {
      name: "Desert Tech MDR 7.62x51 assault rifle",
      description:
        "The MDR 7.62x51 (.308) bullpup assault rifle, designed and manufactured by Desert Tech LLC. A modular multi-caliber weapon with a compact bullpup layout intended for use by police and military special forces. Barrel lengths and calibers can be changed by the end-user within minutes with a minimum amount of tools.",
      image:
        "https://assets.tarkov.dev/5dcbd56fdbd3d91b3e5468d5-grid-image.webp",
    },
    {
      name: "MDR handguard (Black)",
      description:
        "A standard-issue handguard for MDR assault rifles, manufactured by Desert Tech. Equipped with an M-LOK interface for installation of additional tactical devices and accessories. Black version.",
      image:
        "https://assets.tarkov.dev/5dcbd6b46ec07c0c4347a564-grid-image.webp",
    },
    {
      name: "MDR pistol grip (Black)",
      description:
        "A standard pistol grip for MDR assault rifles, manufactured by Desert Tech. Black version.",
      image:
        "https://assets.tarkov.dev/5dcbd6dddbd3d91b3e5468de-grid-image.webp",
    },
    {
      name: "MDR 7.62x51 16 inch barrel",
      description:
        "A 16 inch (406mm) barrel for MDR based weapons for 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5dcbe9431e1f4616d354987e-grid-image.webp",
    },
    {
      name: "Desert Tech 7.62x51 flash hider",
      description:
        "A flash hider developed by Desert Tech specifically for the MDR 7.62x51 (.308) assault rifles.",
      image:
        "https://assets.tarkov.dev/5dcbe965e4ed22586443a79d-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-74 5.45x39 assault rifle Plum",
      description: "null",
      image:
        "https://assets.tarkov.dev/5dd7f8c524e5d7504a4e3077-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-104 7.62x39 assault rifle T-SAW",
      description: "null",
      image:
        "https://assets.tarkov.dev/5dd800bde492226366631317-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle SAI",
      description: "null",
      image:
        "https://assets.tarkov.dev/5dd800eae49222636663133b-grid-image.webp",
    },
    {
      name: "Lone Star TX-15 DML 5.56x45 carbine D-WARRIOR",
      description: "null",
      image:
        "https://assets.tarkov.dev/5dd8013ff4c3af18c507b10a-grid-image.webp",
    },
    {
      name: "Saiga 12ga ver.10 12/76 semi-automatic shotgun NERFGUN",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ddbbeac582ed30a6134e577-grid-image.webp",
    },
    {
      name: "Molot VPO-215 Gornostay .366 TKM bolt-action rifle",
      description:
        "VPO-215 Gornostay (Ermine) is a Russian-made bolt-action rifle designed for hunting and sport shooting, manufactured by Molot Arms. Chambered in .366 TKM ammo.",
      image:
        "https://assets.tarkov.dev/5de652c31b7e3716273428be-grid-image.webp",
    },
    {
      name: "VPO-215 Gornostay .366 TKM 4-round magazine",
      description:
        "A 4-round magazine for VPO-215 rifles and compatible .366 TKM systems, manufactured by Molot Arms.",
      image:
        "https://assets.tarkov.dev/5de653abf76fdc1ce94a5a2a-grid-image.webp",
    },
    {
      name: "VPO-215 Gornostay .366TKM 23 inch barrel",
      description:
        "A 23 inch (600mm) barrel for VPO-215 rifle chambered in .366TKM.",
      image:
        "https://assets.tarkov.dev/5de65547883dde217541644b-grid-image.webp",
    },
    {
      name: "VPO-215 Gornostay thread protection cap",
      description:
        "A threading protection cap for the VPO-215 .366TKM rifle barrel.",
      image:
        "https://assets.tarkov.dev/5de6556a205ddc616a6bc4f7-grid-image.webp",
    },
    {
      name: "VPO-215 Gornostay scope rail mount",
      description:
        "A universal rail mount for the VPO-215 Gornostay rifle, allows installation of various optics.",
      image:
        "https://assets.tarkov.dev/5de6558e9f98ac2bc65950fc-grid-image.webp",
    },
    {
      name: "VPO-215 Gornostay stock",
      description: "A standard-issue stock for the VPO-215 Gornostay rifle.",
      image:
        "https://assets.tarkov.dev/5de655be4a9f347bc92edb88-grid-image.webp",
    },
    {
      name: "B&T MP9-N 9x19 submachine gun",
      description:
        "MP9-N is the further modification of the MP9 submachine gun, which was refined and optimized in cooperation with special units from police and military. MP9-N is currently in service with close protection teams as well as with SWAT teams worldwide. It is also a perfect choice as a Personal Defense Weapon (PDW).",
      image:
        "https://assets.tarkov.dev/5de7bd7bfd6b4e6e2276dc25-grid-image.webp",
    },
    {
      name: "MP9-N 9x19 upper receiver",
      description:
        "An upper receiver for the MP9-N SMG, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8e67c4a9f347bc92edbd7-grid-image.webp",
    },
    {
      name: "MP9 9x19 15-round magazine",
      description:
        "A standard 15-round capacity polymer magazine for MP9-based SMGs, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8e8dafd6b4e6e2276dc32-grid-image.webp",
    },
    {
      name: "MP9 9x19 20-round magazine",
      description:
        "A standard 20-round capacity polymer magazine for MP9-based SMGs, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8ea8ffd6b4e6e2276dc35-grid-image.webp",
    },
    {
      name: "MP9 9x19 25-round magazine",
      description:
        "A standard 25-round capacity polymer magazine for MP9-based SMGs, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8eaadbbaf010b10528a6d-grid-image.webp",
    },
    {
      name: "MP9 9x19 30-round magazine",
      description:
        "A standard 30-round capacity polymer magazine for MP9-based SMGs, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8eac42a78646d96665d91-grid-image.webp",
    },
    {
      name: "MP9 9x19 sound suppressor mount",
      description:
        "A mount for sound suppressor installation directly onto the barrel of the MP9 9x19 SMG. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8f237bbaf010b10528a70-grid-image.webp",
    },
    {
      name: "MP9 9x19 sound suppressor",
      description:
        "A sound suppressor for the MP9 9x19 SMG, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8f2d5b74cd90030650c72-grid-image.webp",
    },
    {
      name: "MP9 rear sight",
      description:
        "A regular rear sight for the MP9 SMG, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8fb539f98ac2bc659513a-grid-image.webp",
    },
    {
      name: "MP9-N vertical foregrip",
      description:
        "A standard-issue detachable vertical foregrip for the MP9-N submachine gun. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8fbad2fbe23140d3ee9c4-grid-image.webp",
    },
    {
      name: "MP9 bottom rail",
      description:
        "A bottom rail that allows installation of additional equipment on the MP9 SMG. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8fbf2b74cd90030650c79-grid-image.webp",
    },
    {
      name: "MP9 side rail",
      description:
        "A short side rail that allows installation of additional equipment on the side of the MP9 SMG. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de8fc0b205ddc616a6bc51b-grid-image.webp",
    },
    {
      name: "MP9 stock",
      description:
        "A standard-issue foldable stock for the MP9 SMG. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de910da8b6c4240ba2651b5-grid-image.webp",
    },
    {
      name: "MP9 charging handle",
      description:
        "A standard-issue charging handle for MP9 and compatible systems. Manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5de922d4b11454561e39239f-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M 7.62x51 bolt-action sniper rifle",
      description:
        "ORSIS T-5000M is a Russian bolt-action sniper rifle. It was the first product developed by ORSIS, and is produced in their Moscow factory. The rifle was introduced in 2011 at the international exhibition of Russian weapons in Nizhny Tagil, and is entirely original, using no third-party components. The rifle ensures maximum comfort of the user while aiming and shooting, featuring a quick sighting line recovery, high reliability and ergonomics. The stainless steel barrel has a thread for installing a muzzle brake-compensator or a sound suppressor. The equipped muzzle brake-compensator effectively reduces impulse and allows the most comfortable recoil handling.",
      image:
        "https://assets.tarkov.dev/5df24cf80dee1b22f862e9bc-grid-image.webp",
    },
    {
      name: "T-5000M 7.62x51 660mm barrel",
      description:
        "A 660mm long match-grade barrel manufactured by ORSIS for the T-5000M 7.62x51 bolt-action sniper rifle.",
      image:
        "https://assets.tarkov.dev/5df256570dee1b22f862e9c4-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M 7.62x51 5-round magazine",
      description:
        "A 5-round magazine for the T-5000M 7.62x51 sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df25b6c0b92095fd441e4cf-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M handguard",
      description:
        "A standard handguard for the T-5000M bolt-action sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df25d3bfd6b4e6e2276dc9a-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M stock",
      description:
        "A universal standard-issue stock for T-5000M sniper rifles, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df35ddddfc58d14537c2036-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M aluminium body",
      description:
        "A standard aluminum body for the T-5000M bolt-action sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df35e59c41b2312ea3334d5-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M 7.62x51 muzzle brake-compensator",
      description:
        "A standard-issue muzzle brake for the T-5000M bolt-action sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df35e7f2a78646d96665dd4-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M scope mount",
      description:
        "A universal scope mount for the T-5000M sniper rifle, manufactured by ORSIS. Allows installation of various scopes.",
      image:
        "https://assets.tarkov.dev/5df35e970b92095fd441e4d2-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M long length rail",
      description:
        "A long length rail for T-5000M sniper rifle allows installation of additional tactical equipment on the handguard. Manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df35ea9c41b2312ea3334d8-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M medium length rail",
      description:
        "A medium length rail for T-5000M sniper rifle allows installation of additional tactical equipment on the handguard. Manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df35eb2b11454561e3923e2-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M padded handguard grip",
      description:
        "A standard-issue padded grip for the T-5000M sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df36948bb49d91fb446d5ad-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M pistol grip",
      description:
        "An ergonomic pistol grip for the T-5000M bolt-action sniper rifle, manufactured by ORSIS.",
      image:
        "https://assets.tarkov.dev/5df38a5fb74cd90030650cb6-grid-image.webp",
    },
    {
      name: "6B2 body armor (Flora)",
      description:
        "An old army body armor from Afghanistan war times, mainly designed to protect against pistol bullets and explosion fragments. It fulfilled its mission, but was soon replaced by bulletproof vests with differentiated protection.",
      image:
        "https://assets.tarkov.dev/5df8a2ca86f7740bfe6df777-grid-image.webp",
    },
    {
      name: "Velocity Systems MPPV Multi-Purpose Patrol Vest",
      description:
        "Multi-Purpose Patrol Vest is designed for those patrolling situations where armor is not needed. A lightweight rig with a lot of pouches. Manufactured by Velocity Systems.",
      image:
        "https://assets.tarkov.dev/5df8a42886f77412640e2e75-grid-image.webp",
    },
    {
      name: "6Sh118 raid backpack",
      description:
        "The 6Sh118 raid backpack is part of the 2nd generation Ratnik gear kit for combat. The 6Sh118 tactical army backpack is a modernization of the 6B38 Permyachka model raid backpack. The raid 6Sh118 backpack is designed to carry fire support equipment, weapons, ammunition, elements of mountain equipment, as well as the personal belongings of individual soldiers. The backpack can be used during combat operations, long hikes, and raid events.",
      image:
        "https://assets.tarkov.dev/5df8a4d786f77412672a1e3b-grid-image.webp",
    },
    {
      name: "TSh-4M-L soft tank crew helmet",
      description:
        "The TSh-4M-L(Z)-01 soft tank crew helmet with headset is designed to provide two-way radiotelephone communication in objects with a high level of noise, to protect it from climatic factors and from impacts on structural elements of objects.",
      image:
        "https://assets.tarkov.dev/5df8a58286f77412631087ed-grid-image.webp",
    },
    {
      name: "Christmas tree ornament (Red)",
      description: "A red ornament ball for decorating the Christmas tree.",
      image:
        "https://assets.tarkov.dev/5df8a6a186f77412640e2e80-grid-image.webp",
    },
    {
      name: "Christmas tree ornament (Silver)",
      description: "A silver ornament ball for decorating the Christmas tree.",
      image:
        "https://assets.tarkov.dev/5df8a72c86f77412640e2e83-grid-image.webp",
    },
    {
      name: "Christmas tree ornament (Violet)",
      description: "A violet ornament ball for decorating the Christmas tree.",
      image:
        "https://assets.tarkov.dev/5df8a77486f77412672a1e3f-grid-image.webp",
    },
    {
      name: "Knight's Armament Company SR-25 7.62x51 marksman rifle",
      description:
        "The SR-25 Precision Rifle is the latest evolution of the precision 7.62mm NATO semi-automatic rifle. An ambidextrous bolt release, selector, and magazine release offers the left-handed user the ergonomic advantages inherent to AR-15 based controls, as well as giving right-handed users alternate methods of manipulation to increase efficiency of movement. The Drop-In 2-Stage Trigger serves as an aid to long range precision marksmanship. The E2 bolt and gas system provides superior reliability in function whether suppressed or unsuppressed.",
      image:
        "https://assets.tarkov.dev/5df8ce05b11454561e39243b-grid-image.webp",
    },
    {
      name: "AR-10 KAC charging handle",
      description:
        "A regular charging handle for AR-10/SR-25 and compatible systems, manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df8e053bb49d91fb446d6a6-grid-image.webp",
    },
    {
      name: "AR-10 KAC ambidextrous charging handle",
      description:
        "An ambidextrous charging handle for the SR-25 marksman rifle and AR-10-compatible systems. Manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df8e085bb49d91fb446d6a8-grid-image.webp",
    },
    {
      name: "SR-25 7.62x51 upper receiver",
      description:
        "An upper receiver for the SR-25 rifle, manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df8e4080b92095fd441e594-grid-image.webp",
    },
    {
      name: "AR-10 7.62x51 KAC 10-round steel magazine",
      description:
        "A 10-round double-stack steel magazine for 7.62x51 NATO cartridges. Manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df8f535bb49d91fb446d6b0-grid-image.webp",
    },
    {
      name: "AR-10 7.62x51 KAC 20-round steel magazine",
      description:
        "A 20-round double-stack steel magazine for 7.62x51 NATO cartridges. Manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df8f541c41b2312ea3335e3-grid-image.webp",
    },
    {
      name: "AR-10 KAC URX 4 14.5 inch handguard",
      description:
        "URX 4 is a 14.5 inch long lightweight M-LOK-compatible handguard for AR-10 system rifles. Manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5df916dfbb49d91fb446d6b9-grid-image.webp",
    },
    {
      name: "SR-25 7.62x51 16 inch barrel",
      description:
        "A 16 inch (406mm) barrel for AR-10 based weapons for 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5df917564a9f347bc92edca3-grid-image.webp",
    },
    {
      name: "SR-25 7.62x51 20 inch barrel",
      description:
        "A 20 inch (508mm) barrel for AR-10 based weapons for 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/5dfa397fb11454561e39246c-grid-image.webp",
    },
    {
      name: "AR-10 KAC QDC 7.62x51 Flash Suppressor Kit",
      description:
        "Knight's Armament Company Flash Suppressor Kit is an effective flash hider that also serves as a platform for attaching a PRS QDC sound suppressor. It can be Installed on AR-10 platform weapons.",
      image:
        "https://assets.tarkov.dev/5dfa3cd1b33c0951220c079b-grid-image.webp",
    },
    {
      name: "KAC PRS/QDC 7.62x51 sound suppressor",
      description:
        "Knight's Armament Company PRS QDC sound suppressor, which can be installed on compatible QDC Flash Suppressor Kit and QDC Muzzle Brake Kit muzzle devices.",
      image:
        "https://assets.tarkov.dev/5dfa3d2b0dee1b22f862eade-grid-image.webp",
    },
    {
      name: "AR-10 KAC Low Profile Gas Block",
      description:
        "A low-profile gas block designed for use in SR-25 marksman rifles and AR-10 compatible weapon systems. Manufactured by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5dfa3d45dfc58d14537c20b0-grid-image.webp",
    },
    {
      name: "KAC Folding Micro rear sight",
      description:
        "A compact removable folding rear sight by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5dfa3d7ac41b2312ea33362a-grid-image.webp",
    },
    {
      name: "KAC Folding Micro front sight",
      description:
        "A compact removable folding front sight by Knight's Armament Company.",
      image:
        "https://assets.tarkov.dev/5dfa3d950dee1b22f862eae0-grid-image.webp",
    },
    {
      name: "SVD SAG MK1 chassis",
      description:
        "The MK1 Freefloat modular chassis with KeyMod slots designed for SVD rifles for installation of various optics and tactical devices. Requires a custom-cut dust cover to fit on to the weapon. Manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/5dfcd0e547101c39625f66f9-grid-image.webp",
    },
    {
      name: "SVDS custom cut dust cover",
      description:
        "A custom cut-off dust cover for SVDS sniper rifles, required for installation of the MK1 Freefloat chassis by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/5dfce88fe9dc277128008b2e-grid-image.webp",
    },
    {
      name: "ETMI-019 shotgun rail mount",
      description:
        "ETMI-019 is a universal adapter from 7mm vent plank to Weaver/Picatinny type rails.",
      image:
        "https://assets.tarkov.dev/5dfe14f30b92095fd441edaf-grid-image.webp",
    },
    {
      name: "NcSTAR ADO P4 Sniper 3-9x42 riflescope",
      description:
        "The Advance Dual Optic (ADO) 3X-9X variable magnification scope with a 42mm objective lens. The ADO Scope features an integrated Red Dot Reflex Optic on top of the scope body. Manufactured by NcSTAR.",
      image:
        "https://assets.tarkov.dev/5dfe6104585a0c3e995c7b82-grid-image.webp",
    },
    {
      name: "VOMZ Pilad 4x32 24.5mm riflescope",
      description:
        "Designed for shooting at small and medium distances. The sight will be practical for shooting at moving objects at a distance of up to 150m.",
      image:
        "https://assets.tarkov.dev/5dff772da3651922b360bf91-grid-image.webp",
    },
    {
      name: "Leapers UTG 25mm ring scope mount",
      description:
        "A low-profile 25.4mm ring mount for installation of various optics, manufactured by Leapers Inc.",
      image:
        "https://assets.tarkov.dev/5dff77c759400025ea5150cf-grid-image.webp",
    },
    {
      name: "SVD SAG low profile sidemount",
      description:
        "A low-profile side mount, all-milled from a bar of high-strength aluminum alloy B95T. Designed to fit on SVD sniper for various optics installation, but can also be fitted on Vepr Hunter, AS Val and VSS rifles. Manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/5dff8db859400025ea5150d4-grid-image.webp",
    },
    {
      name: "B&T MP9 9x19 submachine gun",
      description:
        "The Brügger & Thomet MP9 (Maschinenpistole 9mm, German for machine pistol) is a selective-fire 9x19mm Parabellum caliber machine pistol designed and manufactured by Brügger & Thomet of Switzerland. A perfect choice for a Personal Defense Weapon (PDW).",
      image:
        "https://assets.tarkov.dev/5e00903ae9dc277128008b87-grid-image.webp",
    },
    {
      name: "MP9 9x19 upper receiver",
      description:
        "An upper receiver for the MP9 SMG, manufactured by Brügger & Thomet.",
      image:
        "https://assets.tarkov.dev/5e0090f7e9dc277128008b93-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ballistic Helmet (Black)",
      description:
        "One of the most recent tactical ballistic helmets with extensive customization capabilities. The EXFIL LTP (Lightweight, Tactical, Polymer) bump helmet provides impact protection for maritime environments and a stable, comfortable platform for mounting night vision and other accessories. The built-in NVG shroud utilizes an integrated Wilcox machined aluminum shroud insert. Black colored version.",
      image:
        "https://assets.tarkov.dev/5e00c1ad86f774747333222c-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ballistic face shield (Black)",
      description:
        "A low-profile lightweight bulletproof glass faceplate that quickly and tool-free attaches to the front of the Team Wendy EXFIL helmet. Black version.",
      image:
        "https://assets.tarkov.dev/5e00cdd986f7747473332240-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ear Covers (Black)",
      description:
        "Additional armored ear covers for the Team Wendy EXFIL helmet to ensure a bigger protection area. Black version.",
      image:
        "https://assets.tarkov.dev/5e00cfa786f77469dc6e5685-grid-image.webp",
    },
    {
      name: "SVDS Rotor 43 thread adapter",
      description:
        "A special thread adapter manufactured by Rotor 43. Allows installation of the Rotor 43 muzzle brake on the SVDS sniper rifle.",
      image:
        "https://assets.tarkov.dev/5e01e9e273d8eb11426f5bc3-grid-image.webp",
    },
    {
      name: "Rotor 43 7.62x54R muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake is designed for installation on SVD 7.62x54R. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5e01ea19e9dc277128008c0b-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ballistic Helmet (Coyote Brown)",
      description:
        "One of the most recent tactical ballistic helmets with extensive customization capabilities. The EXFIL LTP (Lightweight, Tactical, Polymer) bump helmet provides impact protection for maritime environments and a stable, comfortable platform for mounting night vision and other accessories. The built-in NVG shroud utilizes an integrated Wilcox machined aluminum shroud insert. Coyote Brown colored version.",
      image:
        "https://assets.tarkov.dev/5e01ef6886f77445f643baa4-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ear Covers (Coyote Brown)",
      description:
        "Additional armored ear covers for the Team Wendy EXFIL helmet to ensure a bigger protection area. Coyote Brown version.",
      image:
        "https://assets.tarkov.dev/5e01f31d86f77465cf261343-grid-image.webp",
    },
    {
      name: "Team Wendy EXFIL Ballistic face shield (Coyote Brown)",
      description:
        "A low-profile lightweight bulletproof glass faceplate that quickly and tool-free attaches to the front of the Team Wendy EXFIL helmet. Coyote Brown version.",
      image:
        "https://assets.tarkov.dev/5e01f37686f774773c6f6c15-grid-image.webp",
    },
    {
      name: "7.62x54mm R T-46M gzh",
      description:
        "A 7.62x54mm R T-46M gzh (GRAU Index - 7T2M) cartridge with a 9.6 gram lead core tracer bullet with a bimetallic jacket, in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Green). This tracer cartridge is a modernized version of the T-46 model (GRAU Index - 7T2), as it provides longer distance tracing capabilities and has similar ballistic effectiveness to the LPS gzh cartridge (GRAU Index - 57-N-323S), because despite the bullet rudimentary design, it is able of piercing through basic and intermediate ballistic body protections in addition to providing a considerable stopping power effect, however, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5e023cf8186a883be655e54f-grid-image.webp",
    },
    {
      name: "7.62x54mm R BT gzh",
      description:
        "A 7.62x54mm R BT gzh (GRAU Index - 7BT1) cartridge with a 9.2 gram armor-piercing tracer bullet with a pointed heat-strengthened steel core with a bimetallic jacket, in a bimetallic case; intended for target designation and fire adjustment in battle (Trace color: Green). This BT bullet (Bronebóynaya Trassíruyushchaya - Armor-piercing Tracer) it's an improved version of the used in the 7.62x54mm R T-46M cartridge, since the lead core was replaced by one of heat-strengthened steel, providing automatic firearms with penetration capabilities against basic, intermediate and specialized ballistic body protections as well as providing a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/5e023d34e8a400319a28ed44-grid-image.webp",
    },
    {
      name: "7.62x54mm R BS gs",
      description:
        "A 7.62x54mm R BS gs (GRAU Index - 7N37) cartridge with a 12.2 gram armor-piercing bullet with a pointed tungsten carbide core over a lead base with a bimetallic jacket, in a steel case. This BS bullet (Broneboynyy Serdechnik - Armor-piercing Core) was developed by TsNIITochMash in the 2010s to greatly increase the penetration capabilities of designated marksman rifles such as the SVD and its variants, being able of piercing through the most modern specialized ballistic body protections, in addition to being capable of piercing light covers and light armored vehicles despite having a relatively low muzzle velocity compared to other cartridges. However, due to its design, it has a significant bounce probability off various surfaces.",
      image:
        "https://assets.tarkov.dev/5e023d48186a883be655e551-grid-image.webp",
    },
    {
      name: "7.62x51mm BCP FMJ",
      description:
        "A 7.62x51mm BCP FMJ cartridge with a 10.9 gram lead core bullet with a bimetallic jacket in a steel case; intended for hunting, home defense, and target practice, produced by Barnaul Cartridge Plant. Despite its rudimentary design, this cartridge is capable of providing an outstanding stopping power effect, as well as being able to pierce through basic ballistic body protections as well as some intermediate models.",
      image:
        "https://assets.tarkov.dev/5e023e53d4353e3302577c4c-grid-image.webp",
    },
    {
      name: "7.62x51mm TCW SP",
      description:
        "A 7.62x51mm cartridge with a 10.7 gram lead core soft-point (SP) bullet with a bimetallic semi-jacket in a steel case; intended for hunting, home defense, and target practice, produced by Tula Cartridge Works. This cartridge is aimed at the amateur public, both hunting, recreational and sport shooting, thanks to its versatility, as well as being able to pierce through basic ballistic body protections and providing excellent results against intermediate models, however, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5e023e6e34d52a55c3304f71-grid-image.webp",
    },
    {
      name: "7.62x51mm Ultra Nosler",
      description:
        "A 7.62x51mm Ultra Nosler cartridge with a 10.6 gram soft-point bullet with two lead cores separated by a solid partition fused to the copper semi-jacketed, in a steel case; intended for hunting, and target practice. Thanks to its design, this cartridge provides one of the best energy transference of its caliber, being able to cause severe adverse effects on the target after impact due to the rear core, thus offering an outstanding stopping power effect.",
      image:
        "https://assets.tarkov.dev/5e023e88277cce2b522ff2b1-grid-image.webp",
    },
    {
      name: "B&T MP9 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e0340ab86f7745bb7339235-grid-image.webp",
    },
    {
      name: "B&T MP9-N 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e03410186f77469041348ea-grid-image.webp",
    },
    {
      name: "Knight's Armament Company SR-25 7.62x51 marksman rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e03511086f7744ccb1fb6cf-grid-image.webp",
    },
    {
      name: "ORSIS T-5000M 7.62x51 bolt-action sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e0354f786f77425b53eb6c5-grid-image.webp",
    },
    {
      name: "Molot VPO-215 Gornostay .366 TKM bolt-action rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e0359bd86f7746b243db876-grid-image.webp",
    },
    {
      name: "Desert Tech MDR 7.62x51 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5e035eb586f774756048ec12-grid-image.webp",
    },
    {
      name: "AK Hexagon DTKP MK.2 7.62x39 sound suppressor",
      description:
        "The DTKP 7.62x39 sound suppressor manufactured by Hexagon. Designed for modern modification of AK with a 24x1.5 thread.",
      image:
        "https://assets.tarkov.dev/5e208b9842457a4a7a33d074-grid-image.webp",
    },
    {
      name: "AKM/AK-74 Hexagon Kocherga stock (Anodized Red)",
      description:
        "The Kocherga lightweight stock for AKM/AK-74-type non-folding automatic rifles, manufactured by Hexagon. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5e217ba4c1434648c13568cd-grid-image.webp",
    },
    {
      name: "AK KGB MG-47 pistol grip (Anodized Red)",
      description:
        "A machined aluminum grip with styling queues taken from triangle side folding stocks. Compatible with all AK family weapon systems. Manufactured by Kraft Gun Builders. Anodized Red version.",
      image:
        "https://assets.tarkov.dev/5e2192a498a36665e8337386-grid-image.webp",
    },
    {
      name: "AK 7.62x39 Magpul PMAG 30 GEN M3 30-round magazine (Banana)",
      description:
        "A 30-round polymer Magpul Pmag 30 AK/AKM GEN M3 magazine 7.62x39 AK and compatible weapons. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons. The magazine is painted in a tactical banana yellow color.",
      image:
        "https://assets.tarkov.dev/5e21a3c67e40bd02257a008a-grid-image.webp",
    },
    {
      name: "AK CNC Warrior 5.56x45 muzzle device adapter",
      description:
        "The CNC Warrior AK adapter allows to install different AR-15 specific muzzle devices on 5.56x45 AK automatic rifles.",
      image:
        "https://assets.tarkov.dev/5e21ca18e4d47f0da15e77dd-grid-image.webp",
    },
    {
      name: "GreenBat lithium battery",
      description:
        "3.7 volt battery with a nominal capacity of 3400 mAh. Used in lighting and engineering devices.",
      image:
        "https://assets.tarkov.dev/5e2aedd986f7746d404f3aa4-grid-image.webp",
    },
    {
      name: "Cyclon rechargeable battery",
      description:
        "A special rechargeable battery for industrial and military devices.",
      image:
        "https://assets.tarkov.dev/5e2aee0a86f774755a234b62-grid-image.webp",
    },
    {
      name: "Repellent",
      description:
        "An aerosol against mosquitoes, flies, and other small insects.",
      image:
        "https://assets.tarkov.dev/5e2aef7986f7746d3f3c33f5-grid-image.webp",
    },
    {
      name: "Smoked Chimney drain cleaner",
      description:
        "A solution of inorganic alkali, additionally containing active additives. Used for cleaning toilets, pipes and drains.",
      image:
        "https://assets.tarkov.dev/5e2af00086f7746d3f3c33f7-grid-image.webp",
    },
    {
      name: "Pack of chlorine",
      description:
        "Chlorine lime is a highly hazardous technical mixture of hypochlorite, chloride and calcium hydroxide. Widely used for bleaching and disinfection.",
      image:
        "https://assets.tarkov.dev/5e2af02c86f7746d420957d4-grid-image.webp",
    },
    {
      name: "Tube of Poxeram cold welding",
      description:
        "An adhesive composition that has a high degree of plasticity. It consists of epoxy resin and is a two-component substance with metal dust.",
      image:
        "https://assets.tarkov.dev/5e2af22086f7746d3f3c33fa-grid-image.webp",
    },
    {
      name: "KEKTAPE duct tape",
      description:
        "KEKTAPE will not be able to patch up your difficult Tarkov fate, but it will be able to fix a boat. Or close up a hole in the aquarium. There are lots of things KEKTAPE can do.",
      image:
        "https://assets.tarkov.dev/5e2af29386f7746d4159f077-grid-image.webp",
    },
    {
      name: "Hunting matches",
      description:
        "Special hunting matches that burn in the wind and in the water (yeah, for real!). Soviet heritage.",
      image:
        "https://assets.tarkov.dev/5e2af2bc86f7746d3f3c33fc-grid-image.webp",
    },
    {
      name: "SurvL Survivor Lighter",
      description:
        "Water- and windproof lighter for survival in difficult conditions. Well, or just for lighting up a cig, you decide, brother.",
      image:
        "https://assets.tarkov.dev/5e2af37686f774755a234b65-grid-image.webp",
    },
    {
      name: "Cordura polyamide fabric",
      description:
        "A polyamide fabric, in which due to the special structure of the thread (made from cut and twisted fibers) fourfold resistance to abrasion is achieved compared to plain nylon, also consisting of polyamide. Significantly superior to conventional fabric in tensile strength and abrasion resistance. Used for the manufacture of equipment for various purposes: bags, backpack modular pouches, waist and bag belts, cases for carrying weapons and so on.",
      image:
        "https://assets.tarkov.dev/5e2af41e86f774755a234b67-grid-image.webp",
    },
    {
      name: "Fleece fabric",
      description:
        "An insulated lightweight water-repellent fabric for the production of various clothes, both military and civilian.",
      image:
        "https://assets.tarkov.dev/5e2af47786f7746d404f3aaa-grid-image.webp",
    },
    {
      name: "Ripstop fabric",
      description:
        "Ripstop fabrics are woven fabrics, often made of nylon, using a special reinforcing technique that makes them resistant to tearing and ripping. Used for special and military cloth and gear production.",
      image:
        "https://assets.tarkov.dev/5e2af4a786f7746d3f3c3400-grid-image.webp",
    },
    {
      name: "Aramid fiber fabric",
      description:
        "Aramid fibers are a class of heat-resistant and strong synthetic fabric. They are used in aerospace and military applications, for ballistic-rated body armor fabric and ballistic composites, in bicycle tires, marine cordage, marine hull reinforcement, and as an asbestos substitute.",
      image:
        "https://assets.tarkov.dev/5e2af4d286f7746d4159f07a-grid-image.webp",
    },
    {
      name: "UZRGM grenade fuze",
      description:
        "UZRGM (Universalny Zapal Ruchnoy Granaty Modernizirovanny - Universal Hand Grenade Fuze Modified) - unlike UZRG, it contains a slow-burned pyrotechnic composition with high combustion stability and an azide detonator capsule in an aluminum sleeve inside the aluminum bushings. A vital component for the production of grenades.",
      image:
        "https://assets.tarkov.dev/5e2af51086f7746d3f3c3402-grid-image.webp",
    },
    {
      name: "Grenade case",
      description: "A large case for storing various hand grenades.",
      image:
        "https://assets.tarkov.dev/5e2af55f86f7746d4159f07c-grid-image.webp",
    },
    {
      name: "VOG-17 Khattabka improvised hand grenade",
      description:
        "The Khattabka hand-made hand grenade based on the VOG-17 grenade launcher shell. The grenade is a VOG-17 shell with a removed head part containing a detonator and self-destructor. A short fuse has been installed to speed up the ignition. An extremely deadly grenade.",
      image:
        "https://assets.tarkov.dev/5e32f56fcb6d5863cc5e5ee4-grid-image.webp",
    },
    {
      name: "VOG-25 Khattabka improvised hand grenade",
      description:
        "The Khattabka hand-made hand grenade based on the VOG-25 grenade launcher shell. The grenade is a VOG-25 shell with a removed head part containing a detonator and self-destructor. A short fuse has been installed to speed up the ignition. An extremely deadly grenade.",
      image:
        "https://assets.tarkov.dev/5e340dcdcb6d5863cc5e5efb-grid-image.webp",
    },
    {
      name: "ULTRA medical storage key",
      description: "A key to the ULTRA shopping mall medical storage room.",
      image:
        "https://assets.tarkov.dev/5e42c71586f7747f245e1343-grid-image.webp",
    },
    {
      name: "Object #11SR keycard",
      description:
        "An electronic limited-use access keycard that, according to the logo on the front, belongs to TerraGroup.",
      image:
        "https://assets.tarkov.dev/5e42c81886f7742a01529f57-grid-image.webp",
    },
    {
      name: "Object #21WS keycard",
      description:
        "An electronic limited-use access keycard that, according to the logo on the front, belongs to TerraGroup.",
      image:
        "https://assets.tarkov.dev/5e42c83786f7742a021fdf3c-grid-image.webp",
    },
    {
      name: "LBT-6094A Slick Plate Carrier",
      description:
        "A simple yet effective plate carrier by London Bridge Trading company. The most minimalistic design intended for use with chest rigs. Black version.",
      image:
        "https://assets.tarkov.dev/5e4abb5086f77406975c9342-grid-image.webp",
    },
    {
      name: "Spiritus Systems Bank Robber chest rig",
      description:
        "An ultra-compact and lightweight chest rig for mobility and comfort. Manufactured by Spiritus Systems.",
      image:
        "https://assets.tarkov.dev/5e4abc1f86f774069619fbaa-grid-image.webp",
    },
    {
      name: "LBT-2670 Slim Field Med Pack",
      description:
        "A low-profile medical backpack, designed to carry large amounts of specialized medical equipment and supplies. Manufactured by London Bridge Trading.",
      image:
        "https://assets.tarkov.dev/5e4abc6786f77406812bd572-grid-image.webp",
    },
    {
      name: "Splav Tarzan M22 chest rig",
      description:
        "A simple and fairly practical tactical rig from 2002. It is still actively used by security and law enforcement agencies and civilian shooters in Russia.",
      image:
        "https://assets.tarkov.dev/5e4abfed86f77406a2713cf7-grid-image.webp",
    },
    {
      name: "Ars Arma CPC MOD.1 plate carrier",
      description:
        "The first generation of the modified CPC plate carrier originally designed by Crye Precision and adapted by Ars Arma for use by special forces of the Russian Federation. This modular body armor is based on a polymer harness that fits the body, which avoids the plate carrier backlash during active movement and also contributes to a more even distribution of weight. Made in the assault configuration of pouches and armor elements. Manufactured by Ars Arma.",
      image:
        "https://assets.tarkov.dev/5e4ac41886f77406a511c9a8-grid-image.webp",
    },
    {
      name: "MSA Gallet TC 800 High Cut combat helmet",
      description:
        "The MSA TC 800 ballistic helmet, designed for use by tactical teams of police special forces, in combat and reconnaissance operations. It can be modified by various components.",
      image:
        "https://assets.tarkov.dev/5e4bfc1586f774264f7582d3-grid-image.webp",
    },
    {
      name: "Walker's Razor Digital headset",
      description:
        "The Razor electronic ear muffs feature an ultra low-profile design and a rubberized coating for added durability and comfort, also providing optimal hearing protection. Manufactured by Walker's.",
      image:
        "https://assets.tarkov.dev/5e4d34ca86f774264f758330-grid-image.webp",
    },
    {
      name: "Raven figurine",
      description:
        "A raven figurine made out of rare materials. The word Markstrom is engraved on the base.",
      image:
        "https://assets.tarkov.dev/5e54f62086f774219b0f1937-grid-image.webp",
    },
    {
      name: "Can of Dr. Lupo's coffee beans",
      description:
        "The famous Dr.Lupo's huge coffee beans. They are humongous! The roasting is as hardcore as possible, definitely will hit hard.",
      image:
        "https://assets.tarkov.dev/5e54f6af86f7742199090bf3-grid-image.webp",
    },
    {
      name: "Shroud half-mask",
      description:
        "An extremely stylish half mask with the Shroud logo. All the Tarkov street guys know who he is.",
      image:
        "https://assets.tarkov.dev/5e54f76986f7740366043752-grid-image.webp",
    },
    {
      name: "Pestily plague mask",
      description:
        "A restored mask of the plague doctor Pestily. A rare and terrifying thing used by cultists in Tarkov.",
      image:
        "https://assets.tarkov.dev/5e54f79686f7744022011103-grid-image.webp",
    },
    {
      name: "SVD modernization kit handguard",
      description:
        "A prototype handguard designed for the modernized SVD sniper rifle kit, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5e56991336989c75ab4f03f6-grid-image.webp",
    },
    {
      name: "SVD CAA XRS-DRG handguard",
      description:
        "The XRS-DRG Picatinny handguard for the SVD sniper rifles provides a rigid lightweight accessory platform and multiple mounting positions. Manufactured by CAA Industries.",
      image:
        "https://assets.tarkov.dev/5e5699df2161e06ac158df6f-grid-image.webp",
    },
    {
      name: "SVD modernization kit top rail",
      description:
        "A prototype top rail designed for the modernized SVD sniper rifle kit, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/5e569a0156edd02abe09f27d-grid-image.webp",
    },
    {
      name: "SVD CAA DRG L-1 barrel mount rail",
      description:
        "A Picatinny rail for the SVD sniper rifle for mounting on the barrel. Allows installation of additional tactical devices.",
      image:
        "https://assets.tarkov.dev/5e569a132642e66b0b68015c-grid-image.webp",
    },
    {
      name: "SVD CAA XD RGL receiver mount",
      description:
        "A quick-detach side clip mount with a Weaver/Picatinny rail for the SVD sniper rifle and compatibles, manufactured by CAA.",
      image:
        "https://assets.tarkov.dev/5e569a2e56edd02abe09f280-grid-image.webp",
    },
    {
      name: "Twitch Rivals 2020 mask",
      description: "A special mask from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5e71f6be86f77429f2683c44-grid-image.webp",
    },
    {
      name: "Twitch Rivals 2020 glasses",
      description: "Special glasses from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5e71f70186f77429ee09f183-grid-image.webp",
    },
    {
      name: "Twitch Rivals 2020 half-mask",
      description: "A special half-mask from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5e71fad086f77422443d4604-grid-image.webp",
    },
    {
      name: "Colt M1911A1 .45 ACP pistol",
      description:
        "Commonly known as just 1911, the M1911 is one of the most famous handguns on the planet. It went through both World Wars as the US Army's standard-issue, and despite being replaced in 1986, its further variations are still being used as the sidearm of different US Special Forces. The M1911A1 is the second generation of the original M1911 pistol. After World War I, the military's Model 1911 went through various changes including a shorter trigger with frame cuts, improved iron sights, an arched mainspring housing, and a redesigned grip safety.",
      image:
        "https://assets.tarkov.dev/5e81c3cbac2bb513793cdc75-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP 7-round magazine",
      description:
        "A standard-issue 7-round .45 ACP magazine for the Colt M1911-series pistols.",
      image:
        "https://assets.tarkov.dev/5e81c4ca763d9f754677befa-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP 127mm barrel",
      description:
        "A standard-issue 127mm .45 ACP barrel for M1911A1 pistols, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81c519cb2b95385c177551-grid-image.webp",
    },
    {
      name: "M1911A1 slide stop",
      description:
        "A standard-issue slide stop for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81c539cb2b95385c177553-grid-image.webp",
    },
    {
      name: "M1911A1 hammer",
      description:
        "A standard-issue hammer for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81c550763d9f754677befd-grid-image.webp",
    },
    {
      name: "M1911A1 trigger",
      description:
        "A standard-issue trigger for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81c6a2ac2bb513793cdc7f-grid-image.webp",
    },
    {
      name: "M1911A1 side grips",
      description:
        "Standard-issue side grip panels for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81c6bf763d9f754677beff-grid-image.webp",
    },
    {
      name: "FN40GL Mk2 40mm grenade launcher",
      description:
        "A standalone buttstock assembly with an attached FN40GL Mk2 grenade launcher. It is designed to use the full variety of NATO standard 40mm grenades. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/5e81ebcd8e146c7080625e15-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP pistol slide",
      description:
        "A standard-issue slide for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81edc13397a21db957f6a1-grid-image.webp",
    },
    {
      name: "M1911A1 front sight",
      description:
        "A standard-issue front sight for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81ee213397a21db957f6a6-grid-image.webp",
    },
    {
      name: "M1911A1 rear sight",
      description:
        "A standard-issue rear sight for the M1911A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5e81ee4dcb2b95385c177582-grid-image.webp",
    },
    {
      name: ".45 ACP Match FMJ",
      description:
        "A .45 ACP (11.43x23mm) Match FMJ cartridge (Cartridge, Caliber .45, Ball, Match, M1911) with a 14.9 gram lead core bullet with a copper jacket, in a brass case. This cartridge is manufactured with an increased accuracy to meet the needs of modern .45 ACP caliber weaponry used by the United States Armed Forces, being capable of piercing basic ballistic body protection as well as offering a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/5e81f423763d9f754677bf2e-grid-image.webp",
    },
    {
      name: "Esmarch tourniquet",
      description:
        "The hemostatic tourniquet is named after Friedrich August von Esmarch, who proposed its use, along with other methods in military field surgery.",
      image:
        "https://assets.tarkov.dev/5e831507ea0a7c419c2f9bd9-grid-image.webp",
    },
    {
      name: "CALOK-B hemostatic applicator",
      description:
        "The CALOK-B applicator hemostatic agent allows you to inject hemostatic granules through a wound opening directly to the source of bleeding in just a few seconds.",
      image:
        "https://assets.tarkov.dev/5e8488fa988a8701445df1e4-grid-image.webp",
    },
    {
      name: "TOZ KS-23M 23x75mm pump-action shotgun",
      description:
        "KS-23 is a Russian shotgun, although because it uses a rifled barrel it is officially designated by the Russian military as a carbine. KS stands for Karabin Spetsialniy, Special Carbine. It is renowned for its large caliber, firing a 23 mm round, equating to 6.27 gauge using the British and American standards of shotgun gauges and approximately 4 gauge using the current European standards (based on the metric CIP tables), making it the largest-bore shotgun in use today.",
      image:
        "https://assets.tarkov.dev/5e848cc2988a8701445df1e8-grid-image.webp",
    },
    {
      name: "KS-23 23x75 510mm barrel",
      description:
        "A 510mm long barrel for the KS-23 23x75mm pump-action shotgun.",
      image:
        "https://assets.tarkov.dev/5e848d1c264f7c180b5e35a9-grid-image.webp",
    },
    {
      name: "KS-23 23x75 700mm barrel",
      description:
        "A 700mm long barrel for the KS-23 23x75mm pump-action shotgun.",
      image:
        "https://assets.tarkov.dev/5e848d2eea0a7c419c2f9bfd-grid-image.webp",
    },
    {
      name: "KS-23M forestock",
      description:
        "A standard-issue polymer forestock made for the KS-23M shotgun.",
      image:
        "https://assets.tarkov.dev/5e848d51e4dbc5266a4ec63b-grid-image.webp",
    },
    {
      name: "KS-23M pistol grip",
      description:
        "A polymer pistol grip for the KS-23M shotgun, manufactured by TOZ.",
      image:
        "https://assets.tarkov.dev/5e848d99865c0f329958c83b-grid-image.webp",
    },
    {
      name: "KS-23 wooden stock",
      description:
        "A wooden stock for the KS-23 shotgun with a rubber butt-plate.",
      image:
        "https://assets.tarkov.dev/5e848db4681bea2ada00daa9-grid-image.webp",
    },
    {
      name: "KS-23M wire stock",
      description:
        "A steel wired stock for the KS-23M shotgun, manufactured by TOZ.",
      image:
        "https://assets.tarkov.dev/5e848dc4e4dbc5266a4ec63d-grid-image.webp",
    },
    {
      name: "23x75mm Shrapnel-10 buckshot",
      description:
        "A 23x75mmR Shrapnel-10 buckshot round with a rated maximum effective range of 10 meters.",
      image:
        "https://assets.tarkov.dev/5e85a9a6eacf8c039e4e2ac1-grid-image.webp",
    },
    {
      name: "23x75mm Zvezda flashbang round",
      description:
        "A 23x75 mmR Zvezda (Star) flash-bang grenade cartridge made for psychological effect on the enemy.",
      image:
        "https://assets.tarkov.dev/5e85a9f4add9fe03027d9bf1-grid-image.webp",
    },
    {
      name: "23x75mm Barrikada slug",
      description:
        "A 23x75mmR Barrikada (Barricade) cartridge with solid steel projectile able to destroy the engine block of a car at up to 100 meters.",
      image:
        "https://assets.tarkov.dev/5e85aa1a988a8701445df1f5-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 12ga pump-action shotgun",
      description:
        "The Mossberg 500 Series is one of the most famous and widespread pump-action shotguns in the world. Protects your front lawn since 1961.",
      image:
        "https://assets.tarkov.dev/5e870397991fd70db46995c8-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 12ga 20 inch barrel",
      description:
        "A 20 inch (508mm) barrel for Mossberg 590A1 12 gauge pump-action shotgun.",
      image:
        "https://assets.tarkov.dev/5e87071478f43e51ca2de5e1-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 SpeedFeed short handguard",
      description:
        "A polymer handguard made for the Mossberg 590A1 pump-action shotgun.",
      image:
        "https://assets.tarkov.dev/5e87076ce2db31558c75a11d-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 12ga 8-shell magazine cap",
      description:
        "An 8-shell capacity magazine cap for Mossberg 590A1 12ga shells.",
      image:
        "https://assets.tarkov.dev/5e87080c81c4ed43e83cefda-grid-image.webp",
    },
    {
      name: "Mossberg 590 Ghost Ring front sight",
      description:
        "A Ghost Ring type front sight for 590 pump-action shotguns, manufactured by Mossberg.",
      image:
        "https://assets.tarkov.dev/5e8708d4ae379e67d22e0102-grid-image.webp",
    },
    {
      name: "Mossberg 590 Ghost Ring rear sight",
      description:
        "A Ghost Ring type rear sight for 590 pump-action shotguns, manufactured by Mossberg.",
      image:
        "https://assets.tarkov.dev/5e87114fe2db31558c75a120-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 polymer stock",
      description:
        "A classical-looking polymer stock for Mossberg 590A1 shotguns with a rubber butt-plate.",
      image:
        "https://assets.tarkov.dev/5e87116b81c4ed43e83cefdd-grid-image.webp",
    },
    {
      name: "Bottle of Norvinskiy Yadreniy premium kvass (0.6L)",
      description:
        "Norvinsky Premium, a truly refreshing kvass. Kvass is made by the natural fermentation of bread, such as wheat, rye, or barley, and sometimes flavoured using fruit, berries, raisins, or birch sap. One of the traditional Slavic drinks, it is not just a tasty, but also a healthy product. It is for a reason that in Russian tales it is constantly drunk by Bogatyrs to regain their power.",
      image:
        "https://assets.tarkov.dev/5e8f3423fd7471236e6e3b64-grid-image.webp",
    },
    {
      name: "Sanitar's bag",
      description:
        "A medical bag, often used by mid and low rank medical personnel, sometimes by doctors, for carrying tools and medicine.",
      image:
        "https://assets.tarkov.dev/5e997f0b86f7741ac73993e2-grid-image.webp",
    },
    {
      name: "FORT Defender-2 body armor",
      description:
        "The FORT OK Defender-2 operational kit is a modification of the popular body armor FORT Defender designed for both VIP and for employees of operational combat units. The kit uses the maximum capabilities of the modular principle of building armor based on steel plates.",
      image:
        "https://assets.tarkov.dev/5e9dacf986f774054d6b89f4-grid-image.webp",
    },
    {
      name: "LBT-1961A Load Bearing Chest Rig",
      description:
        "A tactical load-bearing system designed to carry magazines, grenades, and special equipment, while using low-profile body armor. Manufactured by London Bridge Trading.",
      image:
        "https://assets.tarkov.dev/5e9db13186f7742f845ee9d3-grid-image.webp",
    },
    {
      name: "LBT-8005A Day Pack backpack",
      description:
        "A simple and reliable 14-liter backpack in Multicam Black camouflage. Manufactured by London Bridge Trading.",
      image:
        "https://assets.tarkov.dev/5e9dcf5986f7746c417435b3-grid-image.webp",
    },
    {
      name: "PPSh-41 7.62x25 10.6 inch barrel",
      description:
        "A 10.6 inch (269mm) long barrel for the PPSh-41, chambered in 7.62x25.",
      image:
        "https://assets.tarkov.dev/5ea02bb600685063ec28bfa1-grid-image.webp",
    },
    {
      name: "PPSh-41 7.62x25 35-round magazine",
      description: "A 35-round 7.62x25 steel magazine for the PPSh-41.",
      image:
        "https://assets.tarkov.dev/5ea034eb5aad6446a939737b-grid-image.webp",
    },
    {
      name: "PPSh-41 7.62x25 71-round drum magazine",
      description: "A 71-round 7.62x25 steel drum magazine for the PPSh-41.",
      image:
        "https://assets.tarkov.dev/5ea034f65aad6446a939737e-grid-image.webp",
    },
    {
      name: "PPSh-41 dust cover",
      description: "A standard-issue dust cover for PPSh-41.",
      image:
        "https://assets.tarkov.dev/5ea03e5009aa976f2e7a514b-grid-image.webp",
    },
    {
      name: "PPSh-41 stock",
      description:
        "A standard-issue wooden stock for the PPSh-41 submachine gun.",
      image:
        "https://assets.tarkov.dev/5ea03e9400685063ec28bfa4-grid-image.webp",
    },
    {
      name: "PPSh-41 7.62x25 submachine gun",
      description:
        "The PPSh-41 (Pistolet-Pulemyot Shpagina - Shpagin's submachine gun) is a Soviet submachine gun designed by Georgy Shpagin as a cheap, reliable, and simplified alternative to the PPD-40.",
      image:
        "https://assets.tarkov.dev/5ea03f7400685063ec28bfa8-grid-image.webp",
    },
    {
      name: "Tac-Kek Heavy Trooper mask for Ops-Core-type helmets",
      description:
        "The Tac-Kek Heavy Trooper mask is an additional ballistic module for Ops-Core-type helmets, based on the famous movie universe. This is the way.",
      image:
        "https://assets.tarkov.dev/5ea058e01dbce517f324b3e2-grid-image.webp",
    },
    {
      name: "Tac-Kek FAST MT helmet (Replica)",
      description:
        "A lower protection class replica of the Ops-Core FAST MT Super High Cut Helmet from Tac-Kek. Features Ops-Core ARC Rails for attaching various components to the helmet.",
      image:
        "https://assets.tarkov.dev/5ea05cf85ad9772e6624305d-grid-image.webp",
    },
    {
      name: "AR-15 Geissele SMR MK16 9.5 inch M-LOK handguard",
      description:
        "The Geissele SMR 9.5 inch M-LOK handguard for AR-15 equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5ea16acdfadf1d18c87b0784-grid-image.webp",
    },
    {
      name: "AR-15 Geissele SMR MK16 13.5 inch M-LOK handguard",
      description:
        "The Geissele SMR 13.5 inch M-LOK handguard for AR-15 equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5ea16ada09aa976f2e7a51be-grid-image.webp",
    },
    {
      name: "AR-15 Geissele ACH charging handle",
      description:
        "The Airborne Charging Handle for AR-15 and compatible systems. Manufactured by Geissele.",
      image:
        "https://assets.tarkov.dev/5ea16d4d5aad6446a939753d-grid-image.webp",
    },
    {
      name: "AR-15 SureFire SF4P FH556RC 5.56x45 flash hider",
      description:
        "The advanced SureFire FH556RC-556 four-prong flash hider, which fits M4/M16 weapons and variants, features a greatly reduced muzzle flash. Allows the mounting of SOCOM556 Quick Detach sound suppressors.",
      image:
        "https://assets.tarkov.dev/5ea172e498dacb342978818e-grid-image.webp",
    },
    {
      name: "SureFire SOCOM556-RC2 5.56x45 sound suppressor",
      description:
        "The SureFire SOCOM556-RC2 5.56x45 and .223 sound suppressor, can only be installed on compatible SureFire muzzle devices.",
      image:
        "https://assets.tarkov.dev/5ea17bbc09aa976f2e7a51cd-grid-image.webp",
    },
    {
      name: "Diamond Age Bastion helmet",
      description:
        "According to the manufacturer - the Bastion helmet is the first combat helmet that can withstand a hit from a rifle, even with a bullet with an armored core at a muzzle speed.",
      image:
        "https://assets.tarkov.dev/5ea17ca01412a1425304d1c0-grid-image.webp",
    },
    {
      name: "Diamond Age Bastion helmet armor plate",
      description:
        "An optional modular ballistic protection for the Diamond Age Bastion helmet.",
      image:
        "https://assets.tarkov.dev/5ea18c84ecf1982c7712d9a2-grid-image.webp",
    },
    {
      name: ".45 ACP RIP",
      description:
        "A .45 ACP (11.43x23mm) RIP (Radically Invasive Projectile), is a cartridge with a 10.5 gram frangible bullet designed to produce multiple wound channels to incapacitate assailants quickly. In a departure from conventional hollow-point design, the R.I.P. round features 8 machined lead-free copper petals or trocars, designed to fragment quickly and move in multiple directions, thus providing a superior stopping power effect of its caliber, in addition to being able to inflict severe adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/5ea2a8e200685063ec28c05a-grid-image.webp",
    },
    {
      name: "PPSh-41 7.62x25 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5eb2963686f7742d3f5ab0f8-grid-image.webp",
    },
    {
      name: "Colt M1911A1 .45 ACP pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5eb2968186f7746d1f1a4fd5-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle USASOC-I",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ebbfe23ba87a5065a00a563-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle USASOC-II",
      description: "null",
      image:
        "https://assets.tarkov.dev/5ebbff0841a637322117a5fb-grid-image.webp",
    },
    {
      name: "3-(b-TG) stimulant injector",
      description:
        "Combat drug. It has a stimulating effect on the Central nervous system. Increases perception and attention. It can slightly improve strength indicators, due to more powerful signals to the muscles. The active substance is 3-(b-Phenylisopropyl)-sydnonimine hydrochloride. Allowed for use only by military doctors and paramedics.",
      image:
        "https://assets.tarkov.dev/5ed515c8d380ab312177c0fa-grid-image.webp",
    },
    {
      name: "L1 (Norepinephrine) injector",
      description:
        "A sterile disposable syringe with a dose of L1, based on norepinephrine. It is used for short-term increase of strength and endurance, as well as to reduce the pain effect. This activates the implementation of a physiological response such as hit or run. Increases water and energy consumption.",
      image:
        "https://assets.tarkov.dev/5ed515e03a40a50460332579-grid-image.webp",
    },
    {
      name: "P22 (Product 22) stimulant injector",
      description:
        "A combat stimulant. Developed by TerraGroup Labs, marked as P22. It allows the tissues of the body to receive less damage when physically exposed due to passive inclusion in the work of internal muscles. It is used to expand the body's abilities before a fight. Authorized for use by special forces soldiers. Has side effects.",
      image:
        "https://assets.tarkov.dev/5ed515ece452db0eb56fc028-grid-image.webp",
    },
    {
      name: "AHF1-M stimulant injector",
      description:
        "A military drug based on human antihemophilic factor. Developed by TerraGroup Labs as a powerful coagulant specifically for USEC operatives. Temporarily stops bleeding and increases resistance to new ones. Slightly improves health indicators, leads to dehydration.",
      image:
        "https://assets.tarkov.dev/5ed515f6915ec335206e4152-grid-image.webp",
    },
    {
      name: "Meldonin injector",
      description:
        "A drug developed for athletes. Allows conducting more intensive training and recovering stamina faster. Temporarily increases strength, endurance,and also accelerates recovery. An undocumented property was also found: it increases the resistance of tissues to physical impact due to internal muscle tension. Because of its properties, it was later adopted by the military as a combat stimulant. Has side effects.",
      image:
        "https://assets.tarkov.dev/5ed5160a87bb8443d10680b5-grid-image.webp",
    },
    {
      name: "M.U.L.E. stimulant injector",
      description:
        "Muscular Ultra Large Exciter. It is used to expand the body's abilities before long marches. It allows the body to carry an increased weight for a long time. It has shown effectiveness in combat operations in areas where transport is not available. Authorized for use by special forces soldiers. Developed by TerraGroup Labs, marked with the name M. U. L. E.",
      image:
        "https://assets.tarkov.dev/5ed51652f6c34d2cc26336a1-grid-image.webp",
    },
    {
      name: "Obdolbos cocktail injector",
      description:
        "A syringe with a homemade drug, authored by a former employee of TerraGroup Labs. The negative effects are different each time. You could take the risk, got nothing to lose anyway.",
      image:
        "https://assets.tarkov.dev/5ed5166ad380ab312177c100-grid-image.webp",
    },
    {
      name: "40x46mm M406 (HE) grenade",
      description:
        "A 40-mm M406 (HE) shot with a fragmentation grenade equipped with an instantaneous fuse, which is cocked after the shot, at a distance of 45-90 feet from the muzzle.",
      image:
        "https://assets.tarkov.dev/5ede4739e0350d05467f73e8-grid-image.webp",
    },
    {
      name: "40x46mm M441 (HE) grenade",
      description:
        "A 40-mm M441 (HE) shot with a fragmentation grenade equipped with an instantaneous fuse, which is cocked after the shot, at a distance of 8-10 feet from the muzzle.",
      image:
        "https://assets.tarkov.dev/5ede47405b097655935d7d16-grid-image.webp",
    },
    {
      name: "40x46mm M381 (HE) grenade",
      description:
        "A 40-mm M381 (HE) shot with a fragmentation grenade equipped with an instantaneous fuse, which is cocked after the shot, at a distance of 8-10 feet from the muzzle.",
      image:
        "https://assets.tarkov.dev/5ede474b0c226a66f5402622-grid-image.webp",
    },
    {
      name: "40x46mm M576 (MP-APERS) grenade",
      description:
        "40x46mm M576 (MP-APERS) Multi Projectile buckshot cartridge for grenade launchers fitted with twenty 24-grain bullets for maximum damage in close quarters combat.",
      image:
        "https://assets.tarkov.dev/5ede475339ee016e8c534742-grid-image.webp",
    },
    {
      name: "40x46mm M386 (HE) grenade",
      description:
        "A 40-mm M386 (HE) shot with a fragmentation grenade equipped with an instantaneous fuse, which is cocked after the shot, at a distance of 45-90 feet from the muzzle.",
      image:
        "https://assets.tarkov.dev/5ede475b549eed7c6d5c18fb-grid-image.webp",
    },
    {
      name: "RB-PKPM marked key",
      description:
        "A Federal State Reserve Agency base bunker command office room key with multiple strange symbols scratched onto it where the room label would usually be. The key is stained by blood and appears to have been misused a lot, making it fragile.",
      image:
        "https://assets.tarkov.dev/5ede7a8229445733cb4c18e2-grid-image.webp",
    },
    {
      name: "RB-RLSA key",
      description:
        "A key to the Federal State Reserve Agency base Radar Station document archives.",
      image:
        "https://assets.tarkov.dev/5ede7b0c6d23e5473e6e8c66-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 Magpul MOE forestock",
      description:
        "The MOE handguard, designed for Mossberg 500/590 shotguns. Manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5eea21647547d6330471b3c9-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 Magpul SGA stock",
      description:
        "An ergonomic polymer stock for the Mossberg 590A1 shotgun with a rubber butt-plate, manufactured by Magpul.",
      image:
        "https://assets.tarkov.dev/5eea217fc64c5d0dfc05712a-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 Tactical rail",
      description:
        "A Weaver/Picatinny rail mount for Mossberg 590A1 pump-action shotguns.",
      image:
        "https://assets.tarkov.dev/5eeb2ff5ea4f8b73c827350b-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 Mesa Tactical LEO gen.1 stock adapter",
      description:
        "Mesa Tactical’s Telescoping Stock Conversion Kit replaces the standard buttstock with an adapter that accepts AR style collapsible stocks and pistol grips.",
      image:
        "https://assets.tarkov.dev/5ef1b9f0c64c5d0dfc0571a1-grid-image.webp",
    },
    {
      name: "Mesa Tactical Crosshair Hydraulic buffer tube",
      description:
        "The Crosshair Hydraulic buffer tube by Mesa Tactical. Has a moving hydraulic element that mitigates recoil. Requires a LEO stock adapter for installation.",
      image:
        "https://assets.tarkov.dev/5ef1ba28c64c5d0dfc0571a5-grid-image.webp",
    },
    {
      name: "M1911A1 Caspian Arms Trik Trigger",
      description:
        "The Trik Trigger trigger for the M1911A1 pistol, manufactured by Caspian Arms.",
      image:
        "https://assets.tarkov.dev/5ef32e4d1c1fd62aea6a150d-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP Mec-Gar 11-round magazine",
      description:
        "An 11-round .45 ACP magazine for the Colt M1911A1 pistol, manufactured by Mec-Gar.",
      image:
        "https://assets.tarkov.dev/5ef3448ab37dfd6af863525c-grid-image.webp",
    },
    {
      name: "M1911A1 Wilson Extended slide stop",
      description:
        "An extended slide lever for the M1911A1 pistol, manufactured by Wilson.",
      image:
        "https://assets.tarkov.dev/5ef3553c43cb350a955a7ccb-grid-image.webp",
    },
    {
      name: "M1911A1 Wilson Ultralight skeletonized hammer",
      description:
        "The Ultralight Skeletonized hammer for the M1911A1 pistol, manufactured by Wilson.",
      image:
        "https://assets.tarkov.dev/5ef35bc243cb350a955a7ccd-grid-image.webp",
    },
    {
      name: "M1911A1 Wilson Retro Commander hammer",
      description:
        "The Retro Commander hammer for the M1911A1 pistol, manufactured by Wilson.",
      image:
        "https://assets.tarkov.dev/5ef35d2ac64c5d0dfc0571b0-grid-image.webp",
    },
    {
      name: "M1911A1 STI HEX hammer",
      description:
        "The HEX hammer for the M1911A1 pistol, manufactured by STI.",
      image:
        "https://assets.tarkov.dev/5ef35f46382a846010715a96-grid-image.webp",
    },
    {
      name: "M1911 Pachmayr American Legend Grip #423",
      description:
        "The American Legend Grip #423 grips for the M1911 pistol, manufactured by Pachmayr.",
      image:
        "https://assets.tarkov.dev/5ef366938cef260c0642acad-grid-image.webp",
    },
    {
      name: "M1911A1 NcSTAR trigger guard mount",
      description: "The NcSTAR Trigger guard mount for the M1911A1 pistol.",
      image:
        "https://assets.tarkov.dev/5ef369b08cef260c0642acaf-grid-image.webp",
    },
    {
      name: "M1911A1 Weigand Weig-a-tinny rail mount",
      description:
        "The Weig-a-tinny rail mount for the M1911A1 pistol, manufactured by Weigand.",
      image:
        "https://assets.tarkov.dev/5ef5d994dfbc9f3c660ded95-grid-image.webp",
    },
    {
      name: "M1911 Anarchy Outdoors .45 ACP muzzle brake",
      description:
        "A muzzle brake for the M1911A1 pistol, manufactured by Anarchy Outdoors.",
      image:
        "https://assets.tarkov.dev/5ef61964ec7f42238c31e0c1-grid-image.webp",
    },
    {
      name: "AK Zenit B-30 handguard with B-31S upper handguard rail",
      description:
        "The all-milled B-30 handguard is made of D16T aluminum alloy with a black coating, it is intended for installing on the AK assault rifle series 103, 104, 105, 74S, 74M, AKM, AKMS in the standard place of the handguard. The B-31S rail mount above the gas tube is an all-milled bracket made of D16T aluminum alloy with a black coating, mounted on the B-30 handguard. © «Zenit»",
      image:
        "https://assets.tarkov.dev/5efaf417aeb21837e749c7f2-grid-image.webp",
    },
    {
      name: "7.62x51mm M993",
      description:
        "A 7.62x51mm NATO M993 cartridge with an 8.2 gram armor-piercing bullet with a tungsten carbide penetrator over an aluminum base with a copper jacket, in a brass case. This cartridge was designed during the 1990s to provide United States Armed Forces personnel with capabilities to pierce light covers and light armored vehicles, in addition to providing excellent results against the most modern specialized ballistic body protections.",
      image:
        "https://assets.tarkov.dev/5efb0c1bd79ff02a1f5e68d9-grid-image.webp",
    },
    {
      name: ".45 ACP AP",
      description:
        "A .45 ACP (11.43x23mm) AP cartridge with a two-part controlled fragmenting projectile, an armor-piercing bullet that features a brass sabot and a hardened steel penetrator of 7mm. Thanks to the design of this AP bullet (Armor-Piercing) and despite having an average muzzle velocity relative to other cartridges of the same caliber, it has capabilities of piercing basic ballistic body protection along with some intermediate models and still provides a significant stopping power effect.",
      image:
        "https://assets.tarkov.dev/5efb0cabfb3e451d70735af5-grid-image.webp",
    },
    {
      name: ".45 ACP Lasermatch FMJ",
      description:
        "A .45 ACP (11.43x23mm) Lasermatch FMJ cartridge with a 14.5 gram lead core bullet with a copper jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). This cartridge was designed to provide tracing capabilities to .45 ACP caliber submachine guns during automatic fire, as well as offering a considerable stopping power effect and being able to pierce basic ballistic body protection.",
      image:
        "https://assets.tarkov.dev/5efb0d4f4bc50b58e81710f3-grid-image.webp",
    },
    {
      name: "9x19mm PBP gzh",
      description:
        "A 9x19mm Parabellum PBP gzh (GRAU Index - 7N31) cartridge with a 4.1 gram armor-piercing bullet with a hardened carbon steel core with a cylindrical aluminum cladding and bimetallic semi-jacket in a bimetallic case. This bullet design is based on experiences with various armor-piercing pistol cartridges in the late 1990s, aimed to neutralize hostile personnel equipped with basic and intermediate ballistic body protection, in addition to being capable of piercing light covers, and having an outstanding muzzle velocity.",
      image:
        "https://assets.tarkov.dev/5efb0da7a29a85116f6ea05f-grid-image.webp",
    },
    {
      name: "9x19mm QuakeMaker",
      description:
        "A 9x19mm Parabellum QuakeMaker cartridge with an 11.9 gram hollow-point bullet made entirely of lead in a lightweight case of steel with a red anodized aluminum base; intended for home defense and target practice. Due to its design, this cartridge provides an outstanding stopping power effect along with causing severe adverse effects on the target after impact at the cost of penetration capabilities, as well as having a considerably lower muzzle velocity relative to other cartridges of the same caliber.",
      image:
        "https://assets.tarkov.dev/5efb0e16aeb21837e749c7ff-grid-image.webp",
    },
    {
      name: ".45 ACP Hydra-Shok",
      description:
        "A .45 ACP (11.43x23mm) Hydra-Shok cartridge with a 14.9 gram lead center-post hollow-point bullet with a copper semi-jacket, in a brass case. Despite having a slightly lower muzzle velocity for its caliber, this cartridge provides one of the best energy transference of the .45 ACP caliber, and can cause severe adverse effects on the target after impact, offering an outstanding stopping power effect at the cost of penetration capabilities.",
      image:
        "https://assets.tarkov.dev/5efb0fc6aeb21837e749c801-grid-image.webp",
    },
    {
      name: "Keycard with a blue marking",
      description:
        "A single-use plastic keycard with a blue color marking, probably for identification. The logo covered by the marking resembles the TerraGroup Labs logo.",
      image:
        "https://assets.tarkov.dev/5efde6b4f5448336730dbd61-grid-image.webp",
    },
    {
      name: "Health Resort office key with a blue tape",
      description:
        "A key to one of the Azure Coast sanatorium office rooms, marked with blue duct tape.",
      image:
        "https://assets.tarkov.dev/5eff09cd30a7dc22fd1ddfed-grid-image.webp",
    },
    {
      name: ".366 TKM AP-M",
      description:
        "A .366 TKM (9.55x39mm) AP-M cartridge loaded with an 16 gram armor-piercing bullet from a 9x39mm SP-6 gs cartridge, composed of a hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a modified steel case. This ingeniously improvised cartridge was created by Mechanic due to the precarious situation of its customers in Tarkov, resulting in a cartridge that can pierce through basic and intermediate ballistic body protection, as well as providing a considerable stopping power effect, however, its own design alters its flight pattern, making it less accurate. Its design also allows it to be used in 7.62x39mm AK magazines without any problem.",
      image:
        "https://assets.tarkov.dev/5f0596629e22f464da6bbdd9-grid-image.webp",
    },
    {
      name: "Mossberg 590A1 12ga pump-action shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f06d6bb4010601e3232cd22-grid-image.webp",
    },
    {
      name: "FN40GL Mk2 40mm grenade launcher",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f06d6e1475d472556679d16-grid-image.webp",
    },
    {
      name: "40x46mm M433 (HEDP) grenade",
      description:
        "A 40-mm M433 (High Explosive Dual Purpose) shot with a fragmentation grenade equipped with an instantaneous fuse, which is cocked after the shot, at a distance of 45-90 feet from the muzzle.",
      image:
        "https://assets.tarkov.dev/5f0c892565703e5c461894e9-grid-image.webp",
    },
    {
      name: "Kel-Tec RFB 7.62x51 rifle",
      description:
        "The Kel-Tec RFB (Rifle, Forward-ejection, Bullpup) is a gas-operated bullpup type semi-automatic rifle, manufactured by Kel-Tec. Chambered in 7.62x51mm NATO/.308 Winchester ammunition. The RFB uses metric FAL magazines, which insert straight into the magazine well and do not need to rock into place. The weapon is fully ambidextrous, much in the style of the Belgian F2000 rifle. The RFB is delivered without iron sights. A mil-spec Picatinny rail is provided for mounting a wide range of optics and tactical accessories.",
      image:
        "https://assets.tarkov.dev/5f2a9575926fd9352339381f-grid-image.webp",
    },
    {
      name: "RFB thread spacer",
      description:
        "A thread spacer for the RFB rifle, manufactured by Kel-Tec. It is required for installation of different muzzle devices.",
      image:
        "https://assets.tarkov.dev/5f2aa43ba9b91d26f20ae6d2-grid-image.webp",
    },
    {
      name: "RFB thread protection cap",
      description:
        "A threading protection cap for the Kel-Tec RFB 7.62x51 rifle barrel.",
      image:
        "https://assets.tarkov.dev/5f2aa4464b50c14bcf07acdb-grid-image.webp",
    },
    {
      name: "RFB 7.62x51 flash hider",
      description:
        "A standard bird cage flash hider designed for installation on RFB 7.62x51 rifles. Manufactured by Kel-Tec.",
      image:
        "https://assets.tarkov.dev/5f2aa4559b44de6b1b4e68d1-grid-image.webp",
    },
    {
      name: "RFB 7.62x51 18 inch barrel",
      description:
        "An 18 inch long barrel for the Kel-Tec RFB rifle, chambered in 7.62x51ammo.",
      image:
        "https://assets.tarkov.dev/5f2aa46b878ef416f538b567-grid-image.webp",
    },
    {
      name: "RFB handguard",
      description:
        "A standard-issue handguard for the RFB rifle, manufactured by Kel-Tec.",
      image:
        "https://assets.tarkov.dev/5f2aa47a200e2c0ee46efa71-grid-image.webp",
    },
    {
      name: "RFB handguard rail mount",
      description:
        "A long bottom rail for the RFB rifle, which allows you to install additional tactical equipment on the handguard.",
      image:
        "https://assets.tarkov.dev/5f2aa493cd375f14e15eea72-grid-image.webp",
    },
    {
      name: "RFB scope rail mount",
      description:
        "A universal rail for mounting various optics on to the RFB rifle, manufactured by Kel-Tec.",
      image:
        "https://assets.tarkov.dev/5f2aa49f9b44de6b1b4e68d4-grid-image.webp",
    },
    {
      name: "Colt M45A1 .45 ACP pistol",
      description:
        "The MEU(SOC) pistol, (Marine Expeditionary Unit; Special Operations Capable) officially designated the M45 MEUSOC, is a magazine-fed, recoil-operated, single-action, semiautomatic pistol chambered for the .45 ACP cartridge. It's a variant of the M1911, and has been the standard-issue side arm for the Force Recon Element of the United States Marine Corps' Marine Expeditionary Units since 1985. The improved M45A1 features several changes to the original M1911A1 design. One feature is the dual recoil spring system that spreads out the recoil force of the .45 ACP round by lowering the peak force of the recoil pulse. It also has 3-dot tritium night sights, a 5-inch national match barrel, ambidextrous safety, a picatinny rail, and a desert tan Cerakote finish.",
      image:
        "https://assets.tarkov.dev/5f36a0e5fbf956000b716b65-grid-image.webp",
    },
    {
      name: "M45A1 hammer",
      description:
        "A standard-issue hammer for the M45A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e76d86cda304dcc634054-grid-image.webp",
    },
    {
      name: "M45A1 trigger",
      description:
        "A standard-issue trigger for the M45A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e772a670e2a7b01739a52-grid-image.webp",
    },
    {
      name: "M45A1 slide lock",
      description:
        "A standard-issue slide lock lever for M45A1 pistols, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e777688ca2d00ad199d25-grid-image.webp",
    },
    {
      name: "M45A1 Mil-Tac GVT G10 side grips",
      description:
        "The GVT G10 fiberglass grip panels for the Colt M45A1 pistol, manufactured by Mil-Tac.",
      image:
        "https://assets.tarkov.dev/5f3e778efcd9b651187d7201-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP Wilson Combat 7-round magazine",
      description:
        "A 7-round .45 ACP magazine with a steel low-profile base pad for Colt M1911 pistols, manufactured by Wilson Combat. Comes as a standard-issue magazine for the M45A1 pistol.",
      image:
        "https://assets.tarkov.dev/5f3e77b26cda304dcc634057-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP threaded barrel",
      description:
        "A standard-issue threaded barrel for the M1911A1 .45 ACP pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e77f59103d430b93f94c1-grid-image.webp",
    },
    {
      name: "M1911A1 .45 ACP National Match barrel",
      description:
        "The National Match barrel for the M1911A1 .45 ACP pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e7801153b8571434a924c-grid-image.webp",
    },
    {
      name: "M45A1 .45 ACP pistol slide",
      description:
        "A standard-issue slide for the M45A1 pistol, manufactured by Colt.",
      image:
        "https://assets.tarkov.dev/5f3e7823ddc4f03b010e2045-grid-image.webp",
    },
    {
      name: "M45A1 Novak Lomount rear sight",
      description:
        "The Lomount rear sight for the M45A1 pistol, manufactured by Novak.",
      image:
        "https://assets.tarkov.dev/5f3e7897ddc4f03b010e204a-grid-image.webp",
    },
    {
      name: "M45A1 Novak Lomount front sight",
      description:
        "The Lomount front sight for the M45A1 pistol, manufactured by Novak.",
      image:
        "https://assets.tarkov.dev/5f3e78a7fbf956000b716b8e-grid-image.webp",
    },
    {
      name: "EYE MK.2 professional hand-held compass",
      description:
        "A hand-held compass. Allows you to quickly navigate, indicating the direction of the magnetic poles of the Earth. With it, you can easily determine the azimuth.",
      image:
        "https://assets.tarkov.dev/5f4f9eb969cdc30ff33f09db-grid-image.webp",
    },
    {
      name: "LolKek 3F Transfer tourist backpack",
      description:
        "A simple and cheap backpack manufactured by LolKek. Not very strong or comfortable, but it manages to carry loot in it, and that's all you need from a backpack.",
      image:
        "https://assets.tarkov.dev/5f5e45cc5021ce62144be7aa-grid-image.webp",
    },
    {
      name: "Eberlestock F5 Switchblade backpack (Dry Earth)",
      description:
        "A modern, high-quality, low-profile backpack for combat missions in all conditions.",
      image:
        "https://assets.tarkov.dev/5f5e467b0bc58666c37e7821-grid-image.webp",
    },
    {
      name: "Eberlestock F4 Terminator load bearing backpack (Tiger Stripe)",
      description:
        "An extremely versatile full-format load bearing backpack for military use. Manufactured by Eberlestock.",
      image:
        "https://assets.tarkov.dev/5f5e46b96bdad616ad46d613-grid-image.webp",
    },
    {
      name: "NPP KlASS Korund-VM body armor",
      description:
        "The NPP KlASS Korund-VM heavy bulletproof vest, adopted by the units of the Ministry of Internal Affairs of Russia. Provides increased protection against bullets and fragments (class 5 GOST).",
      image:
        "https://assets.tarkov.dev/5f5f41476bdad616ad46d631-grid-image.webp",
    },
    {
      name: "Direct Action Thunderbolt compact chest rig",
      description:
        "The Thunderbolt fixed chest rig, containing all the basic utility pouches you'd need. Manufactured by Direct Action.",
      image:
        "https://assets.tarkov.dev/5f5f41f56760b4138443b352-grid-image.webp",
    },
    {
      name: "Galvion Caiman Hybrid helmet",
      description:
        "The Caiman Hybrid helmet is a new generation of lightweight special forces helmet. A series of modular accessories enhances the package, providing users with lightweight, comfortable and maximum head protection. Manufactured by Galvion.",
      image:
        "https://assets.tarkov.dev/5f60b34a41e30a4ab12a6947-grid-image.webp",
    },
    {
      name: "Galvion Caiman Hybrid Ballistic Applique",
      description:
        "An additional up-armor helmet shell attachment to elevate or enhance ballistic and fragmentation protection of the Caiman Hybrid Helmet. Manufactured by Galvion.",
      image:
        "https://assets.tarkov.dev/5f60b85bbdb8e27dee3dc985-grid-image.webp",
    },
    {
      name: "Galvion Caiman Fixed Arm Visor",
      description:
        "A locked-in ballistic visor shield for installation on the Caiman Hybrid helmet's shroud. Manufactured by Galvion.",
      image:
        "https://assets.tarkov.dev/5f60bf4558eff926626a60f2-grid-image.webp",
    },
    {
      name: "Galvion Caiman Hybrid Ballistic Mandible Guard",
      description:
        "A special additional ballistic protection for the Caiman Hybrid helmet, mounted on the side rails. Manufactured by Galvion.",
      image:
        "https://assets.tarkov.dev/5f60c076f2bcbb675b00dac2-grid-image.webp",
    },
    {
      name: "Rys-T bulletproof helmet",
      description:
        "The Rys-T (Lynx-T) armored helmet is an improved and lightweight version of the famous Altyn helmet. It is in service with the assault units of the Ministry of Internal Affairs of Russia. Can be equipped with a special armored visor.",
      image:
        "https://assets.tarkov.dev/5f60c74e3b85f6263c145586-grid-image.webp",
    },
    {
      name: "Rys-T face shield",
      description:
        "A special armored face shield for the Rys-T heavy assault helmet. Increases the chances of surviving the impacts of bullets and shrapnel.",
      image:
        "https://assets.tarkov.dev/5f60c85b58eff926626a60f7-grid-image.webp",
    },
    {
      name: "Walker's XCEL 500BT Digital headset",
      description:
        "Active hearing protection with optimum electronic processing of ambient sounds without unnecessary distortion.",
      image:
        "https://assets.tarkov.dev/5f60cd6cf2bcbb675b00dac6-grid-image.webp",
    },
    {
      name: "Beret (Black)",
      description: "Just a black beret.",
      image:
        "https://assets.tarkov.dev/5f60e6403b85f6263c14558c-grid-image.webp",
    },
    {
      name: "Beret (Blue)",
      description:
        "A regular blue beret. If it had an emblem, it would've been a VDV (Russian Airborne Forces) trooper beret. But this one is just a blue beret.",
      image:
        "https://assets.tarkov.dev/5f60e7788adaa7100c3adb49-grid-image.webp",
    },
    {
      name: "Beret (Olive)",
      description: "You can call it a green beret, but it's an olive beret.",
      image:
        "https://assets.tarkov.dev/5f60e784f2bcbb675b00dac7-grid-image.webp",
    },
    {
      name: "AK TDI X47 tactical handguard rail system",
      description:
        "A tactical aluminum handguard for the AK family assault rifles, designed and manufactured by TDI Arms. Equipped with multiple rail mounts for installation of a wide range of additional equipment.",
      image:
        "https://assets.tarkov.dev/5f6331e097199b7db2128dc2-grid-image.webp",
    },
    {
      name: "AR-10 Lancer LCH7 12.5 inch M-LOK handguard",
      description:
        "The Lancer LCH7 12.5 inch M-LOK handguard for AR-10 systems equipped with an M-LOK interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/5f6336bbda967c74a42e9932-grid-image.webp",
    },
    {
      name: "Ferfrans CRD 5.56x45 Concussion Reduction Device",
      description:
        "The Concussion Reduction Device 5.56x45 muzzle device, manufactured by Ferfrans.",
      image:
        "https://assets.tarkov.dev/5f6339d53ada5942720e2dc3-grid-image.webp",
    },
    {
      name: "AKM thread type JMac Customs RRD-4C 7.62x39 muzzle brake",
      description:
        "The RRD-4C 7.62x39 muzzle brake by JMac Customs is designed for installation on AK or AKM type thread weapon systems. Reduces recoil and counters the barrel climb.",
      image:
        "https://assets.tarkov.dev/5f633f68f5750b524b45f112-grid-image.webp",
    },
    {
      name: "AK-74 thread type JMac Customs RRD-4C multi-caliber muzzle brake",
      description:
        "The RRD-4C muzzle brake by JMac Customs is designed for installation on modern AK-74 type thread weapon systems. The universal muzzle brake can be used with 5.45x39, 5.56x45 and 7.62x39 (requires an adapter mount) ammunition. Reduces recoil and counters the barrel climb.",
      image:
        "https://assets.tarkov.dev/5f633f791b231926f2329f13-grid-image.webp",
    },
    {
      name: "AR-15 Rainier Arms Avalanche MOD2 charging handle",
      description:
        "The Avalanche MOD2 charging handle for AR-15 and compatible systems. Manufactured by Rainier Arms.",
      image:
        "https://assets.tarkov.dev/5f633ff5c444ce7e3c30a006-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter SVD-style stock",
      description:
        "An SVD-style wooden stock designed for VPO-101 Vepr-Hunter carbines.",
      image:
        "https://assets.tarkov.dev/5f63405df5750b524b45f114-grid-image.webp",
    },
    {
      name: "VPO-101 Vepr-Hunter Rotor 43 7.62x51 muzzle brake-compensator",
      description:
        "The Rotor 43 muzzle brake, designed for installation on VPO 7.62x51 family rifles. Although positioned as a muzzle brake, it also works as a sound suppressor.",
      image:
        "https://assets.tarkov.dev/5f63407e1b231926f2329f15-grid-image.webp",
    },
    {
      name: "Tactical Dynamics Skeletonized Foregrip",
      description:
        "A lightweight aluminum tactical foregrip manufactured by Tactical Dynamics.",
      image:
        "https://assets.tarkov.dev/5f6340d3ca442212f4047eb2-grid-image.webp",
    },
    {
      name: "AK Aeroknox Scorpius pistol grip",
      description:
        "A lightweight ergonomic pistol grip for AK-family automatic rifles, manufactured by Aeroknox.",
      image:
        "https://assets.tarkov.dev/5f6341043ada5942720e2dc5-grid-image.webp",
    },
    {
      name: "SOK-12 Bravo-18 aluminium handguard",
      description:
        "Bravo-18 is a lightweight aircraft grade aluminum handguard, designed for installation on Saiga carbines.",
      image:
        "https://assets.tarkov.dev/5f63418ef5750b524b45f116-grid-image.webp",
    },
    {
      name: "AR-15 Ferfrans CQB 5.56x45 muzzle brake",
      description:
        "A muzzle brake manufactured by Ferfrans. Can also be equipped with Ferfrans Modular Concussion Reduction Device.",
      image:
        "https://assets.tarkov.dev/5f6372e2865db925d54f3869-grid-image.webp",
    },
    {
      name: "KS-23M 23x75 3-shell magazine cap",
      description: "A 3-shell capacity magazine cap for KS-23M 23x75mm shells.",
      image:
        "https://assets.tarkov.dev/5f647d9f8499b57dc40ddb93-grid-image.webp",
    },
    {
      name: "23x75mm Shrapnel-25 buckshot",
      description:
        "A 23x75mmR Shrapnel-25 buckshot round with a rated maximum effective range of 25 meters.",
      image:
        "https://assets.tarkov.dev/5f647f31b6238e5dd066e196-grid-image.webp",
    },
    {
      name: "Colt M45A1 .45 ACP pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f6762e964af6a2aa319deeb-grid-image.webp",
    },
    {
      name: "Kel-Tec RFB 7.62x51 rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f676b779ab5ec19f028eaf3-grid-image.webp",
    },
    {
      name: "TOZ KS-23M 23x75mm pump-action shotgun Drozd",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f6770f839a13e712a1dff54-grid-image.webp",
    },
    {
      name: "TOZ KS-23M 23x75mm pump-action shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5f6771214ef1ca4f4e1b8a06-grid-image.webp",
    },
    {
      name: "Veritas guitar pick",
      description:
        "A high-quality 0.5mm thick guitar pick with the Veritas logo.",
      image:
        "https://assets.tarkov.dev/5f745ee30acaeb0d490d8c5b-grid-image.webp",
    },
    {
      name: "Rivals 2020 cap",
      description: "A special cap from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5f99418230835532b445e954-grid-image.webp",
    },
    {
      name: "Rivals 2020 beanie",
      description: "A special beanie from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5f994730c91ed922dd355de3-grid-image.webp",
    },
    {
      name: "Rivals 2020 armband",
      description: "An exclusive armband from the Twitch Rivals 2020 event.",
      image:
        "https://assets.tarkov.dev/5f9949d869e2777a0e779ba5-grid-image.webp",
    },
    {
      name: "TDI KRISS Vector Gen.2 .45 ACP submachine gun",
      description:
        "The KRISS Vector SMG is the ideal choice for law enforcement and military seeking a controllable and compact weapon system for close quarter combat environments. The low bore axis and Super V recoil mitigation system allow for controllable shots when firing in full-automatic, or fast semi-automatic follow up shots. Compatible with Glock .45 ACP magazines.",
      image:
        "https://assets.tarkov.dev/5fb64bc92b1b027b1f50bcf2-grid-image.webp",
    },
    {
      name: "Glock .45 ACP 13-round magazine",
      description:
        "A standard-issue 13-round magazine for the Glock 21, chambered in .45 ACP.",
      image:
        "https://assets.tarkov.dev/5fb651b52b1b027b1f50bcff-grid-image.webp",
    },
    {
      name: "Glock .45 ACP KRISS G30 MagEx 30-round magazine",
      description:
        "A G30 MagEx 30-round magazine for .45 ACP rounds, made to fit Glock pistols and other weapons of the same caliber. Manufactured by KRISS.",
      image:
        "https://assets.tarkov.dev/5fb651dc85f90547f674b6f4-grid-image.webp",
    },
    {
      name: "KRISS Vector .45 ACP 5 inch barrel",
      description:
        "A 5 inch (140mm) barrel for the KRISS Vector .45 ACP submachine gun.",
      image:
        "https://assets.tarkov.dev/5fb65363d1409e5ca04b54f5-grid-image.webp",
    },
    {
      name: "KRISS Vector .45 ACP 6 inch barrel",
      description:
        "A 6 inch (170mm) barrel for the KRISS Vector .45 ACP submachine gun.",
      image:
        "https://assets.tarkov.dev/5fb653962b1b027b1f50bd03-grid-image.webp",
    },
    {
      name: "KRISS Vector .45 ACP flash hider",
      description:
        "A standard-issue flash hider for the KRISS Vector .45 ACP SMG.",
      image:
        "https://assets.tarkov.dev/5fb65424956329274326f316-grid-image.webp",
    },
    {
      name: "KRISS Vector .45 ACP thread protection cap",
      description:
        "A thread protector cap for the KRISS Vector .45 ACP barrel.",
      image:
        "https://assets.tarkov.dev/5fb6548dd1409e5ca04b54f9-grid-image.webp",
    },
    {
      name: "KRISS Vector Gen.2 folding stock",
      description:
        "A 2nd generation folding stock for the KRISS Vector submachine gun.",
      image:
        "https://assets.tarkov.dev/5fb6558ad6f0b2136f2d7eb7-grid-image.webp",
    },
    {
      name: "KRISS Vector Pistol Sling adapter",
      description: "A pistol sling adapter for the KRISS Vector SMG.",
      image:
        "https://assets.tarkov.dev/5fb655a72b1b027b1f50bd06-grid-image.webp",
    },
    {
      name: "KRISS Vector non-folding stock adapter",
      description:
        "A non-folding adapter for the installation of telescopic stock buffer tubes on the KRISS Vector submachine gun.",
      image:
        "https://assets.tarkov.dev/5fb655b748c711690e3a8d5a-grid-image.webp",
    },
    {
      name: "KRISS Defiance low profile flip-up rear sight",
      description:
        "The Defiance detachable low profile flip-up rear sight, installed on the mount. Manufactured by KRISS.",
      image:
        "https://assets.tarkov.dev/5fb6564947ce63734e3fa1da-grid-image.webp",
    },
    {
      name: "KRISS Defiance low profile flip-up front sight",
      description:
        "The Defiance detachable low profile flip-up front sight, installed on the mount. Manufactured by KRISS.",
      image:
        "https://assets.tarkov.dev/5fb6567747ce63734e3fa1dc-grid-image.webp",
    },
    {
      name: "KRISS Vector bottom rail",
      description:
        "A bottom rail for the KRISS Vector submachine gun, allows installation of tactical foregrips and accessories.",
      image:
        "https://assets.tarkov.dev/5fbb976df9986c4cff3fe5f2-grid-image.webp",
    },
    {
      name: "KRISS Vector Mk.5 modular rail",
      description:
        "The Mk.5 modular system allows you to install additional equipment on the handguard.",
      image:
        "https://assets.tarkov.dev/5fbb978207e8a97d1f0902d3-grid-image.webp",
    },
    {
      name: "KRISS Defiance DS150 stock (Black)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines. It uses mil-spec sized receiver extension tubes. The frame profile avoids snagging and shields the release latch, preventing accidental activation. It includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Black version.",
      image:
        "https://assets.tarkov.dev/5fbbaa86f9986c4cff3fe5f6-grid-image.webp",
    },
    {
      name: "KRISS Vector 9x19 flash hider",
      description:
        "A standard-issue flash hider for the KRISS Vector 9x19 SMG.",
      image:
        "https://assets.tarkov.dev/5fbbc3324e8a554c40648348-grid-image.webp",
    },
    {
      name: "KRISS Vector 9x19 thread protection cap",
      description: "A thread protector cap for the KRISS Vector 9x19 barrel.",
      image:
        "https://assets.tarkov.dev/5fbbc34106bde7524f03cbe9-grid-image.webp",
    },
    {
      name: "KRISS Vector 9x19 5 inch barrel",
      description:
        "A 5 inch (140mm) threaded barrel for the KRISS Vector 9x19 submachine gun.",
      image:
        "https://assets.tarkov.dev/5fbbc366ca32ed67276c1557-grid-image.webp",
    },
    {
      name: "KRISS Vector 9x19 6 inch barrel",
      description:
        "A 6 inch (170mm) threaded barrel for the KRISS Vector 9x19 submachine gun.",
      image:
        "https://assets.tarkov.dev/5fbbc383d5cb881a7363194a-grid-image.webp",
    },
    {
      name: "MCX .300 BLK 171mm barrel",
      description:
        "A 171mm barrel for MCX-based weapons, chambered in .300 BLK.",
      image:
        "https://assets.tarkov.dev/5fbbfabed5cb881a7363194e-grid-image.webp",
    },
    {
      name: "MCX .300 BLK 229mm barrel",
      description:
        "A 229mm barrel for MCX-based weapons, chambered in .300 BLK.",
      image:
        "https://assets.tarkov.dev/5fbbfacda56d053a3543f799-grid-image.webp",
    },
    {
      name: "MCX gas block",
      description:
        "A gas block designed for the MCX assault rifles, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbc210bf24b94483f726481-grid-image.webp",
    },
    {
      name: "MCX GEN1 KeyMod 8 inch handguard",
      description:
        "A first-gen 8 inch handguard for the MCX assault rifle, equipped with a KeyMod interface for attaching additional equipment. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbc226eca32ed67276c155d-grid-image.webp",
    },
    {
      name: "MCX GEN1 KeyMod 12 inch handguard",
      description:
        "A first-gen 12 inch handguard for the MCX assault rifle, equipped with a KeyMod interface for attaching additional equipment. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbc227aa56d053a3543f79e-grid-image.webp",
    },
    {
      name: "SIG Sauer Taper-LOK 7.62x51/.300 BLK muzzle adapter",
      description:
        "The patented Taper-LOK mounting system allows the installation of various muzzle devices on 7.62x51 and .300 Blackout chambered weapons. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbc22ccf24b94483f726483-grid-image.webp",
    },
    {
      name: "SIG Sauer 7.62x51 3-prong flash hider",
      description:
        "The SIG Sauer 3-prong flash hider can be installed on a patented Taper-LOK mounting system.",
      image:
        "https://assets.tarkov.dev/5fbcbcf593164a5b6278efb2-grid-image.webp",
    },
    {
      name: "SIG Sauer Micro Brake 7.62x51 muzzle brake",
      description:
        "The SIG Sauer Micro Brake muzzle brake that can be installed on the patented Taper-LOK mounting system.",
      image:
        "https://assets.tarkov.dev/5fbcbd02900b1d5091531dd3-grid-image.webp",
    },
    {
      name: "SIG Sauer Two Port Brake 7.62x51 muzzle brake",
      description:
        "The SIG Sauer Two Port Brake can be installed on a patented Taper-LOK mounting system.",
      image:
        "https://assets.tarkov.dev/5fbcbd10ab884124df0cd563-grid-image.webp",
    },
    {
      name: "MCX pistol grip",
      description:
        "A polymer pistol grip for MCX assault rifles, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbcbd6c187fea44d52eda14-grid-image.webp",
    },
    {
      name: "SIG MCX .300 Blackout assault rifle",
      description:
        "The .300 Blackout MCX line, designed and manufactured by SIG Sauer, is available in both semi-automatic and automatic versions and features a short-stroke gas piston system, which is inherited from the earlier SIG MPX submachine gun. The .300 Blackout ammo and the MCX are compatible with all AR-15 magazines.",
      image:
        "https://assets.tarkov.dev/5fbcc1d9016cce60e8341ab3-grid-image.webp",
    },
    {
      name: "MCX GEN1 .300 BLK upper receiver",
      description:
        "An upper receiver for the first generation MCX assault rifles manufactured by SIG Sauer. Features a mount for attaching additional equipment.",
      image:
        "https://assets.tarkov.dev/5fbcc3e4d6fa9c00c571bb58-grid-image.webp",
    },
    {
      name: "MPX/MCX telescoping stock",
      description: "A telescopic stock for MPX/MCX manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbcc429900b1d5091531dd7-grid-image.webp",
    },
    {
      name: "MPX/MCX lightweight stock",
      description:
        "A thin and lightweight stock for MCX/MPX manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbcc437d724d907e2077d5c-grid-image.webp",
    },
    {
      name: "MCX charging handle",
      description:
        "A standard charging handle for SIG Sauer MCX rifles and compatible systems.",
      image:
        "https://assets.tarkov.dev/5fbcc640016cce60e8341acc-grid-image.webp",
    },
    {
      name: ".300 Blackout BCP FMJ",
      description:
        "A .300 Blackout (7.62x35mm) BCP FMJ cartridge with a 9.4 gram lead core bullet with a bimetallic jacket in a steel case; intended for hunting, home defense, and target practice, produced by Barnaul Cartridge Plant. Thanks to its rudimentary design, this cartridge is one of the most economical options of its caliber, and despite this, it has capabilities to pierce basic ballistic body protection, as well as certain intermediate models, in addition to providing a significant stopping power effect. However, it has a significant bounce probability on various surfaces. Its design also allows it to be used in STANAG 5.56x45mm NATO magazines without any problem.",
      image:
        "https://assets.tarkov.dev/5fbe3ffdf8b6a877a729ea82-grid-image.webp",
    },
    {
      name: "SIG Sauer SRD762-QD 7.62x51 sound suppressor",
      description:
        "SRD762-QD is a Grade 5 titanium suppressor that uses quick-release muzzle devices to attach the suppressor to the gun. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbe760793164a5b6278efc8-grid-image.webp",
    },
    {
      name: "SIG Sauer SRD762Ti 7.62x51 sound suppressor",
      description:
        "SRD762Ti is a Grade 5 titanium sound suppressor designed for use with .308/7.62/300BLK barrels, manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fbe7618d6fa9c00c571bb6c-grid-image.webp",
    },
    {
      name: "A3 Tactical MVF001 KeyMod vertical foregrip (Black)",
      description:
        "The MVF001 KeyMod tactical grip. The grip was designed specifically for the KeyMod interface. Manufactured by A3 Tactical.",
      image:
        "https://assets.tarkov.dev/5fc0f9b5d724d907e2077d82-grid-image.webp",
    },
    {
      name: "SIG Sauer Vertical Foregrip KeyMod (Black)",
      description:
        "The SIG Sauer Vertical Foregrip tactical grip for the KeyMod interface. The grip is made from the highest grade materials and is of an inherent SIG Sauer quality.",
      image:
        "https://assets.tarkov.dev/5fc0f9cbd6fa9c00c571bb90-grid-image.webp",
    },
    {
      name: "MCX flip-up front sight",
      description:
        "A detachable flip-up front sight for MCX assault rifles, originally designed for the AR platform. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fc0fa362770a0045c59c677-grid-image.webp",
    },
    {
      name: "MCX flip-up rear sight",
      description:
        "A detachable flip-up rear sight for MCX assault rifles, originally designed for the AR platform. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/5fc0fa957283c4046c58147e-grid-image.webp",
    },
    {
      name: "SWORD International Mk-18 .338 LM marksman rifle",
      description:
        "The Mk-18 Mod 1 Extreme Distance Capable Semi-Automatic Rifle was designed to take advantage of the ballistic capabilities of the .338 Lapua Magnum, .338 Norma Magnum, and .300 Norma Magnum cartridges. The system provides extreme distance capability in a lightweight and mobile semi-auto platform. Utilizing SWORD’s proprietary short-stroke piston system the rifle is precise, reliable, and durable. Featuring ambidextrous controls, ergonomic features, and built-in modularity, the Mk-18 is a great choice for the avid hunter, long-range enthusiast, and competition shooter.",
      image:
        "https://assets.tarkov.dev/5fc22d7c187fea44d52eda44-grid-image.webp",
    },
    {
      name: "Mk-18 .338 LM 10-round magazine",
      description:
        "A 10-round Mk-18 magazine for .338 LM ammunition, manufactured by SWORD International.",
      image:
        "https://assets.tarkov.dev/5fc23426900b1d5091531e15-grid-image.webp",
    },
    {
      name: "Mk-18 18 inch handguard",
      description:
        "A lightweight 18 inch long M-LOK-compatible handguard for the Mk-18 rifle. Manufactured by SWORD International.",
      image:
        "https://assets.tarkov.dev/5fc235db2770a0045c59c683-grid-image.webp",
    },
    {
      name: "Mk-18 gas block",
      description:
        "A gas block designed for the Mk-18 rifle, manufactured by SWORD International.",
      image:
        "https://assets.tarkov.dev/5fc2360f900b1d5091531e19-grid-image.webp",
    },
    {
      name: "SilencerCo AC-858 ASR .338 LM muzzle brake",
      description: "A .338 LM muzzle brake developed by SilencerCo.",
      image:
        "https://assets.tarkov.dev/5fc23636016cce60e8341b05-grid-image.webp",
    },
    {
      name: "Mk-18 .338 LM 24 inch barrel",
      description:
        "A 24 inch (610mm) barrel for Mk-18 .338 LM sniper rifle, manufactured by SWORD International.",
      image:
        "https://assets.tarkov.dev/5fc23678ab884124df0cd590-grid-image.webp",
    },
    {
      name: "AR-15 B5 Systems Precision stock",
      description:
        "The Precision telescoping stock manufactured by B5 Systems. Designed to be installed on AR-system weapons.",
      image:
        "https://assets.tarkov.dev/5fc2369685fd526b824a5713-grid-image.webp",
    },
    {
      name: ".338 Lapua Magnum FMJ",
      description:
        "A .338 Lapua Magnum (8.6x70mm) FMJ cartridge with a 16.2 gram lead core bullet with a bimetallic jacket in a brass case. Despite its rudimentary design, this cartridge possesses capabilities of piercing basic and intermediate ballistic body protections, as well as providing a considerable stopping power effect and being capable of causing critical adverse effects on the target after impact. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5fc275cf85fd526b824a571a-grid-image.webp",
    },
    {
      name: "Mk-18 .338 LM upper receiver",
      description:
        "A regular upper receiver for Mk-18 Mod 1 Mjölnir by SWORD International. Fitted with a mount for attaching additional equipment.",
      image:
        "https://assets.tarkov.dev/5fc278107283c4046c581489-grid-image.webp",
    },
    {
      name: ".338 Lapua Magnum AP",
      description:
        "A .338 Lapua Magnum (8.6x70mm) AP cartridge with a two-part armor-piercing projectile of 15.4 grams, the bullet consists of a sabot and a tungsten carbide penetrator body, in a brass case. This cartridge was designed to increase, in a limited way, the anti-materiel capabilities of the .338 Lapua Magnum caliber rifles, managing to pierce through light armored vehicles not to mention its excellent results against the most modern specialized ballistic body protections as well as having a considerable stopping power effect and be able to inflict devastating adverse effects on the target after impact. However, due to its design, it has a significant probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5fc382a9d724d907e2077dab-grid-image.webp",
    },
    {
      name: ".338 Lapua Magnum TAC-X",
      description:
        "A .338 Lapua Magnum (8.6x70mm) TAC-X cartridge with an 18.4 gram expansive bullet made entirely of copper in a brass case. The bullet of this cartridge provides a good impact grouping at long distances and is designed to be used in Big Game Hunting, as it has a superior stopping power effect for its caliber and is capable of causing critical adverse effects on the target after impact, however, despite the high energy of the .338 Lapua Magnum caliber and due to the TAC-X bullet design, it has difficulties of piercing basic ballistic body protections and has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5fc382b6d6fa9c00c571bbc3-grid-image.webp",
    },
    {
      name: ".338 Lapua Magnum UCW",
      description:
        "A .338 Lapua Magnum (8.6x70mm) UCW cartridge with a 16.2 gram lead core bullet with a brass jacket in a brass case; intended for hunting and target practice, produced by Ulyanovsk Cartridge Works. This cartridge is intended for Big Game Hunting, as despite its rudimentary design, it has an outstanding stopping power effect and is capable of causing severe adverse effects on the target after impact and can even pierce through basic ballistic body protections as well as some intermediate models. However, due to its design, it has a high probability of bouncing off various surfaces.",
      image:
        "https://assets.tarkov.dev/5fc382c1016cce60e8341b20-grid-image.webp",
    },
    {
      name: "HK UMP .45 ACP submachine gun",
      description:
        "The Heckler & Koch UMP submachine gun was designed by the German company Heckler & Koch in the 1990s as a lighter and cheaper analog to the MP5. This version is designed to fire a .45 ACP cartridge and has a reduced fire rate of 600 rpm.",
      image:
        "https://assets.tarkov.dev/5fc3e272f8b6a877a729eac5-grid-image.webp",
    },
    {
      name: "HK UMP .45 ACP 25-round magazine",
      description:
        "A standard 25-round .45 ACP magazine for the UMP 45 SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5fc3e466187fea44d52eda90-grid-image.webp",
    },
    {
      name: "HK UMP .45 ACP 8 inch barrel",
      description:
        "A barrel for the HK UMP submachine gun, chambered in .45 ACP ammo, 8 inch (200mm) long.",
      image:
        "https://assets.tarkov.dev/5fc3e4a27283c4046c5814ab-grid-image.webp",
    },
    {
      name: "HK UMP polymer stock",
      description:
        "A polymer stock for the UMP SMG, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/5fc3e4ee7283c4046c5814af-grid-image.webp",
    },
    {
      name: "TDI KRISS Vector Gen.2 9x19 submachine gun",
      description:
        "The KRISS Vector SMG is the ideal choice for law enforcement and military seeking a controllable and compact weapon system for close quarter combat environments. The low bore axis and Super V recoil mitigation system allow for controllable shots when firing in full-automatic, or fast semi-automatic follow up shots. Compatible with Glock 9x19 magazines.",
      image:
        "https://assets.tarkov.dev/5fc3f2d5900b1d5091531e57-grid-image.webp",
    },
    {
      name: "SilencerCo Omega 45k Piston Mount adapter",
      description:
        "The Piston Mount adapter for installation of SilencerCo Omega 45k sound suppressor directly onto the barrel threading.",
      image:
        "https://assets.tarkov.dev/5fc4b97bab884124df0cd5e3-grid-image.webp",
    },
    {
      name: "SilencerCo Omega 45k Direct Thread Mount adapter",
      description:
        "The Direct Thread Mount adapter for installation of SilencerCo Omega 45k sound suppressor directly onto the barrel threading.",
      image:
        "https://assets.tarkov.dev/5fc4b992187fea44d52edaa9-grid-image.webp",
    },
    {
      name: "SilencerCo Omega 45k .45 ACP sound suppressor",
      description:
        "The SilencerCo Omega 45K is an exceptionally versatile suppressor and is the smallest, lightest, and quietest silencer in its class. Full auto rated and usable with pistols, rifles, and submachine guns, the Omega 45K offers extreme durability in an ultra compact package.",
      image:
        "https://assets.tarkov.dev/5fc4b9b17283c4046c5814d7-grid-image.webp",
    },
    {
      name: "HK UMP bottom handguard rail",
      description:
        "A bottom rail for the UMP SMG handguard, allows installation of various tactical foregrips.",
      image:
        "https://assets.tarkov.dev/5fc53954f8b6a877a729eaeb-grid-image.webp",
    },
    {
      name: "HK UMP side handguard rail",
      description:
        "A side rail for the UMP SMG handguard, allows installation of additional tactical devices.",
      image:
        "https://assets.tarkov.dev/5fc5396e900b1d5091531e72-grid-image.webp",
    },
    {
      name: "Cultist knife",
      description:
        "A knife of a strange shape and with strange signs, taken from the cultists. Seems like it is used as a ritual knife, but apparently it's not limited to this use. It has technological changes in the design intended for the use of toxic substances - it's better not to touch the blade.",
      image:
        "https://assets.tarkov.dev/5fc64ea372b0dd78d51159dc-grid-image.webp",
    },
    {
      name: "xTG-12 antidote injector",
      description:
        "Removes most of the known poisons and toxins used in the combat industry. Can be used to relieve the effects of natural poisons. Gives immunity to poisoning while the components are in the blood system. Can reduce health status.",
      image:
        "https://assets.tarkov.dev/5fca138c2a7b221b2852a5c6-grid-image.webp",
    },
    {
      name: "SJ9 TGLabs combat stimulant injector",
      description:
        "Designed for special forces personnel. It makes it possible to reduce the human body temperature for a short time, significantly slowing down the metabolism. The use of SJ9 leads to a significant reduction in the amount of heat released into the environment, while maintaining a safe level of metabolism inside. It is used during night operations, allowing to be hardly visible for thermal imaging devices.",
      image:
        "https://assets.tarkov.dev/5fca13ca637ee0341a484f46-grid-image.webp",
    },
    {
      name: "Magpul RVG foregrip (FDE)",
      description:
        "Magpul RVG (Rail Vertical Grip) tactical grip. Common, unsophisticated and inexpensive, ergonomically shaped vertical foregrip. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5fce0cf655375d18a253eff0-grid-image.webp",
    },
    {
      name: "KRISS Vector side rail",
      description:
        "A side rail for the KRISS Vector submachine gun, allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/5fce0f9b55375d18a253eff2-grid-image.webp",
    },
    {
      name: "KRISS Defiance DS150 stock (FDE)",
      description:
        "A drop-in replacement buttstock for AR-15/M16 carbines. It uses mil-spec sized receiver extension tubes. The frame profile avoids snagging and shields the release latch, preventing accidental activation. It includes a standard 0.30 thick rubber butt-pad to prevent slippage even with body armor or modular gear. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/5fce16961f152d4312622bc9-grid-image.webp",
    },
    {
      name: ".300 Blackout AP",
      description:
        "A .300 Blackout (7.62x35mm) AP cartridge loaded with an 8.4 gram armor-piercing bullet from a 7.62x51mm NATO M80A1 cartridge, composed of a steel penetrator tip over a copper alloy core with a copper semi-jacket in a brass case. Despite the bullet's own characteristics when used in a full-power cartridge, these are affected when transferred to an intermediate cartridge, however, the bullet continues to have capabilities to pierce basic and intermediate body ballistic protections, in addition to being able to cause substantial adverse effects on the target after impact. Its design also allows it to be used in STANAG 5.56x45mm NATO magazines without any issues.",
      image:
        "https://assets.tarkov.dev/5fd20ff893a8961fc660a954-grid-image.webp",
    },
    {
      name: "SWORD International Mk-18 .338 LM marksman rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5fd25119dd870108a754a163-grid-image.webp",
    },
    {
      name: "HK UMP .45 ACP submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5fd2517dbdd50d684f73a474-grid-image.webp",
    },
    {
      name: "SIG MCX .300 Blackout assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/5fd251a31189a17bcc172662-grid-image.webp",
    },
    {
      name: "TDI KRISS Vector Gen.2 9x19 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5fd251c90d9c95034825edb5-grid-image.webp",
    },
    {
      name: "TDI KRISS Vector Gen.2 .45 ACP submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/5fd251ee16cac650092f5d02-grid-image.webp",
    },
    {
      name: "5.11 Tactical Hexgrid plate carrier",
      description:
        "The Hexgrid plate carrier with smooth ergonomic access that allows comfortable movement, intended for use with chest rigs. Manufactured by 5.11 Tactical.",
      image:
        "https://assets.tarkov.dev/5fd4c474dd870108a754b241-grid-image.webp",
    },
    {
      name: "DIY IDEA chest rig",
      description:
        "A handcrafted chest rig made from IDEA store bags. It's impossible to say that it's reliable and suitable for a wide range of military and tactical applications, but at least it's a good example of a hobo-style rig.",
      image:
        "https://assets.tarkov.dev/5fd4c4fa16cac650092f6771-grid-image.webp",
    },
    {
      name: "Security vest",
      description: "The simplest, life-worn vest of the security services.",
      image:
        "https://assets.tarkov.dev/5fd4c5477a8d854fa0105061-grid-image.webp",
    },
    {
      name: "Gear Craft GC-BSS-MK1 chest rig",
      description:
        "The new generation shoulder belt system, made for patrol and assault operations.",
      image:
        "https://assets.tarkov.dev/5fd4c60f875c30179f5d04c2-grid-image.webp",
    },
    {
      name: "Smoke balaclava",
      description:
        "The signature balaclava of the famous hip-hop artist of Tarkov - Smoke.",
      image:
        "https://assets.tarkov.dev/5fd8d28367cb5e077335170f-grid-image.webp",
    },
    {
      name: "AFAK tactical individual first aid kit",
      description:
        "AFAK (Adaptive First Aid Kit). A more advanced version of the IFAK individual first aid kit. The compact kit provides the individual soldier or law enforcement officer with a necessary lifesaving equipment to effectively treat injuries commonly associated with combat trauma.",
      image:
        "https://assets.tarkov.dev/60098ad7c2240c0fe85c570a-grid-image.webp",
    },
    {
      name: "CAT hemostatic tourniquet",
      description:
        "CAT (Combat Application Tourniquet) prevents blood loss by blocking the blood outlet by applying pressure to the affected limb. It uses a self-adjusting tensioning system and a tug-resistant buckle.",
      image:
        "https://assets.tarkov.dev/60098af40accd37ef2175f27-grid-image.webp",
    },
    {
      name: "Emergency Water Ration",
      description:
        "Drinking water for use in case of emergency and other circumstances where an emergency supply of liquid is needed, ready to be stored for several years.",
      image:
        "https://assets.tarkov.dev/60098b1705871270cd5352a1-grid-image.webp",
    },
    {
      name: "UVSR Taiga-1 survival machete",
      description:
        "UVSR Device for carrying out rescue operations Taiga-1. A truly versatile survival tool. It is a weapon and a shovel and an axe and everything you can imagine. It was developed and produced in the USSR for various agencies.",
      image:
        "https://assets.tarkov.dev/601948682627df266209af05-grid-image.webp",
    },
    {
      name: "5.56x45mm MK 318 Mod 0 (SOST)",
      description:
        "A 5.56x45mm NATO MK 318 Mod 0 (SOST) cartridge with a 4 gram open-point bullet with a lead core over a copper base with a copper jacket, in a brass case. The cartridge was specially designed for the United States Marine Corps, under the name SOST (Special Operations Science and Technology) to provide penetration of objects with low structural strength and provide a considerable stopping power effect, even being able of piercing basic ballistic body protections.",
      image:
        "https://assets.tarkov.dev/60194943740c5d77f6705eea-grid-image.webp",
    },
    {
      name: "5.56x45mm SSA AP",
      description:
        "A 5.56x45mm NATO SSA AP cartridge with a two-part armor-piercing projectile, the bullet consists of a sabot and a tungsten carbide penetrator body, in a brass case. This bullet was designed to surpass the one used in the 5.56x45mm NATO M995 cartridge in regard to its penetration capabilities, thanks to its muzzle velocity and peculiar design, it is capable of piercing basic and intermediate ballistic body protections, in addition to providing outstanding results against some modern specialized protection models, however, due to its design, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/601949593ae8f707c4608daa-grid-image.webp",
    },
    {
      name: "7.62x39mm MAI AP",
      description:
        "A 7.62x39mm MAI AP cartridge with a two-part armor-piercing projectile, the bullet consists of a sabot and a tungsten carbide penetrator body, in a steel case. This bullet was designed by MAI to increase the penetration capabilities of the 7.62x39mm caliber, thanks to its muzzle velocity and peculiar design, it is capable of piercing basic and intermediate ballistic body protections, in addition to providing outstanding results against some modern specialized protection models, however, it has a high bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/601aa3d2b2bcb34913271e6d-grid-image.webp",
    },
    {
      name: "PL-15 9x19 16-round magazine",
      description:
        "A standard-issue 16-round magazine for the PL-15 9x19 pistol.",
      image:
        "https://assets.tarkov.dev/602286df23506e50807090c6-grid-image.webp",
    },
    {
      name: "PL-15 pistol slide",
      description: "A standard-issue slide for the PL-15 pistol.",
      image:
        "https://assets.tarkov.dev/60228924961b8d75ee233c32-grid-image.webp",
    },
    {
      name: "PL-15 front sight",
      description: "A standard-issue front sight for the PL-15 pistol.",
      image:
        "https://assets.tarkov.dev/60228a76d62c9b14ed777a66-grid-image.webp",
    },
    {
      name: "PL-15 extended front sight",
      description:
        "An extended front sight for the PL-15 pistol, designed for use with a sound suppressor.",
      image:
        "https://assets.tarkov.dev/60228a850ddce744014caf69-grid-image.webp",
    },
    {
      name: "PL-15 extended rear sight",
      description:
        "An extended rear sight for the PL-15 pistol, designed for use with a sound suppressor.",
      image:
        "https://assets.tarkov.dev/602293f023506e50807090cb-grid-image.webp",
    },
    {
      name: "PL-15 rear sight",
      description: "A standard-issue rear sight for the PL-15 pistol.",
      image:
        "https://assets.tarkov.dev/60229948cacb6b0506369e27-grid-image.webp",
    },
    {
      name: "PL-15 9x19 barrel",
      description: "A standard barrel for the PL-15 pistol, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/602a95edda11d6478d5a06da-grid-image.webp",
    },
    {
      name: "PL-15 9x19 threaded barrel",
      description: "A threaded barrel for the PL-15 pistol, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/602a95fe4e02ce1eaa358729-grid-image.webp",
    },
    {
      name: "PL-15 9x19 sound suppressor",
      description: "A standard-issue sound suppressor for the PL-15 pistol.",
      image:
        "https://assets.tarkov.dev/602a97060ddce744014caf6f-grid-image.webp",
    },
    {
      name: "Lebedev PL-15 9x19 pistol",
      description:
        "A Russian self-loading pistol chambered in 9x19mm, developed by a team of designers from the Kalashnikov concern under the leadership of Dmitry Lebedev for the needs of Russian law enforcement agencies.",
      image:
        "https://assets.tarkov.dev/602a9740da11d6478d5a06dc-grid-image.webp",
    },
    {
      name: "Soyuz-TM buffer tube",
      description:
        "STM Arms Receiver Extension Buffer Tube, 4-position, Com-Spec diameter will fit any AR-15-based carbine.",
      image:
        "https://assets.tarkov.dev/602e3f1254072b51b239f713-grid-image.webp",
    },
    {
      name: "FAB Defense GL-CORE buttstock",
      description:
        "A telescopic stock, manufactured by FAB Defense. The integrated cheek weld, ergonomic buttpad and an interchanging tube adapter provide an unmatched fit on Mil-Spec and Commercial buffer tubes, with a high level of efficiency and comfort. Includes an ergonomically shaped rubberized butt-pad for quick shouldering and easy maneuvering of the weapon.",
      image:
        "https://assets.tarkov.dev/602e620f9b513876d4338d9a-grid-image.webp",
    },
    {
      name: "STM-9 9x19 upper receiver",
      description:
        "An upper receiver for the STM-9 9x19 carbine. Equipped with a mount for attaching additional tactical devices.",
      image:
        "https://assets.tarkov.dev/602e63fb6335467b0c5ac94d-grid-image.webp",
    },
    {
      name: "AR-15 DLG Tactical DLG-123 pistol grip",
      description:
        "The DLG-123 pistol grip can be installed on any weapon compatible with AR-15 systems. Manufactured by DLG Tactical.",
      image:
        "https://assets.tarkov.dev/602e71bd53a60014f9705bfa-grid-image.webp",
    },
    {
      name: "STM-9 magwell",
      description: "A regular magazine well for the Soyuz-TM STM-9 carbine.",
      image:
        "https://assets.tarkov.dev/602f85fd9b513876d4338d9c-grid-image.webp",
    },
    {
      name: "STM-9 9x19 10.5 inch barrel",
      description:
        "A 10.5 inches (266mm) long barrel for the STM-9 carbine, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/603372b4da11d6478d5a07ff-grid-image.webp",
    },
    {
      name: "STM-9 9x19 12 inch barrel",
      description:
        "A 12 inches (304mm) long barrel for the STM-9 carbine, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/603372d154072b51b239f9e1-grid-image.webp",
    },
    {
      name: "STM-9 9x19 14 inch barrel",
      description:
        "A 14 inches (355mm) long barrel for the STM-9 carbine, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/603372f153a60014f970616d-grid-image.webp",
    },
    {
      name: "STM-9 9x19 16 inch barrel",
      description:
        "A 16 inches (406mm) long barrel for the STM-9 carbine, chambered in 9x19.",
      image:
        "https://assets.tarkov.dev/603373004e02ce1eaa358814-grid-image.webp",
    },
    {
      name: "AR-15 MASP Industries Ambidextrous Battle Charging Handle",
      description:
        "The Militia Series Ambidextrous Battle charging handle for AR-15 and compatible systems, manufactured by MASP Industries.",
      image:
        "https://assets.tarkov.dev/6033749e88382f4fab3fd2c5-grid-image.webp",
    },
    {
      name: "STM-9 9x19 muzzle brake",
      description:
        "A standard-issue muzzle brake for the Soyuz-TM STM-9 9x19 carbines.",
      image:
        "https://assets.tarkov.dev/60337f5dce399e10262255d1-grid-image.webp",
    },
    {
      name: "STM-9 magwell (Grey)",
      description:
        "A regular magazine well for the Soyuz-TM STM-9 carbine. Grey version.",
      image:
        "https://assets.tarkov.dev/60338ff388382f4fab3fd2c8-grid-image.webp",
    },
    {
      name: "Soyuz-TM STM-9 Gen.2 9x19 carbine",
      description:
        "A PCC carbine with excellent performance already out of the box, manufactured by Soyuz-TM Arms. Designed with the participation of world bronze medalist in Semi-Auto Rifle Vadim Mikhailov. Accuracy, speed, comfort of recoil. Compatible with Glock 9x19 magazines.",
      image:
        "https://assets.tarkov.dev/60339954d62c9b14ed777c06-grid-image.webp",
    },
    {
      name: "OPSMEN Earmor M32 headset",
      description:
        "The EARMOR M32 headset is an activated electronic communication hearing protector, ideal for tactical use. Manufactured by OPSMEN.",
      image:
        "https://assets.tarkov.dev/6033fa48ffd42c541047f728-grid-image.webp",
    },
    {
      name: "NPP KlASS Condor glasses",
      description:
        "Heavy-duty ballistic shooting glasses with impact-resistant lenses.",
      image:
        "https://assets.tarkov.dev/603409c80ca681766b6a0fb2-grid-image.webp",
    },
    {
      name: "Umka M33-SET1 hunter vest",
      description:
        "The Umka M33-SET1 vest is designed for hunters, travelers, field professionals and security officers.",
      image:
        "https://assets.tarkov.dev/6034cf5fffd42c541047f72e-grid-image.webp",
    },
    {
      name: "CSA chest rig",
      description:
        "The simplest chest rig, sewn hastily from dubious materials. Designed for airsoft. Military use of this model is possible, but not recommended.",
      image:
        "https://assets.tarkov.dev/6034d0230ca681766b6a0fb5-grid-image.webp",
    },
    {
      name: "Hazard 4 Takedown sling backpack (Black)",
      description:
        "A single-strap sling backpack designed for carrying long-barreled weapons. Additional external pockets are designed to carry magazines, cleaning kit, or extra parts. Manufactured by Hazard 4. Black version.",
      image:
        "https://assets.tarkov.dev/6034d103ca006d2dca39b3f0-grid-image.webp",
    },
    {
      name: "Eberlestock G2 Gunslinger II backpack (Dry Earth)",
      description:
        "The G2 is a mid-sized pack with a full-width scabbard to better accommodate weapons with larger cross-sections or bulky optics. The wide scabbard also allows it to serve as an excellent laptop or military radio compartment, and because it's also wide at the bottom, users have the option of carrying weapons butt-down or butt-up. Manufactured by Eberlestock.",
      image:
        "https://assets.tarkov.dev/6034d2d697633951dc245ea6-grid-image.webp",
    },
    {
      name: "AR-15 Soyuz-TM 9 inch M-LOK handguard",
      description:
        "A 9 inch handguard for AR-15 systems equipped with an M-LOK interface for installation of additional devices and accessories. Manufactured by Soyuz-TM Arms.",
      image:
        "https://assets.tarkov.dev/6034e3cb0ddce744014cb870-grid-image.webp",
    },
    {
      name: "AR-15 Soyuz-TM 15 inch M-LOK handguard",
      description:
        "A 15 inch handguard for AR-15 systems equipped with an M-LOK interface for installation of additional devices and accessories. Manufactured by Soyuz-TM Arms.",
      image:
        "https://assets.tarkov.dev/6034e3d953a60014f970617b-grid-image.webp",
    },
    {
      name: "AR-15 Soyuz-TM 12 inch M-LOK handguard",
      description:
        "A 12 inch handguard for AR-15 systems equipped with an M-LOK interface for installation of additional devices and accessories. Manufactured by Soyuz-TM Arms.",
      image:
        "https://assets.tarkov.dev/6034e3e20ddce744014cb878-grid-image.webp",
    },
    {
      name: "Army cap (Black)",
      description: "A regular army cap, colored in black.",
      image:
        "https://assets.tarkov.dev/603618feffd42c541047f771-grid-image.webp",
    },
    {
      name: "Army cap (Coyote Tan)",
      description: "A regular army cap, colored in coyote tan.",
      image:
        "https://assets.tarkov.dev/603619720ca681766b6a0fc4-grid-image.webp",
    },
    {
      name: "Army cap (Flora)",
      description: "A regular army cap, colored in flora camouflage.",
      image:
        "https://assets.tarkov.dev/60361a7497633951dc245eb4-grid-image.webp",
    },
    {
      name: "Army cap (Desert)",
      description: "A regular army cap, colored in desert camouflage.",
      image:
        "https://assets.tarkov.dev/60361b0b5a45383c122086a1-grid-image.webp",
    },
    {
      name: "Army cap (UCP)",
      description: "A regular army cap, colored in UCP camouflage.",
      image:
        "https://assets.tarkov.dev/60361b5a9a15b10d96792291-grid-image.webp",
    },
    {
      name: "GP-7 gas mask",
      description:
        "The GP-7 civilian gas mask is a filtering means of individual protection of respiratory organs, eyes, and face skin.",
      image:
        "https://assets.tarkov.dev/60363c0c92ec1c31037959f5-grid-image.webp",
    },
    {
      name: "Azimut SS Zhuk chest harness (Black)",
      description:
        "A simple nylon bearing system with non-removable pouches. Allows you to carry a fairly impressive amount of ammunition at the expense of convenience.",
      image:
        "https://assets.tarkov.dev/603648ff5a45383c122086ac-grid-image.webp",
    },
    {
      name: "LBT-6094A Slick Plate Carrier (Tan)",
      description:
        "A simple yet effective plate carrier by London Bridge Trading company. The most minimalistic design intended for use with chest rigs. Tan version.",
      image:
        "https://assets.tarkov.dev/6038b4b292ec1c3103795a0b-grid-image.webp",
    },
    {
      name: "LBT-6094A Slick Plate Carrier (Olive Drab)",
      description:
        "A simple yet effective plate carrier by London Bridge Trading company. The most minimalistic design intended for use with chest rigs. Olive Drab version.",
      image:
        "https://assets.tarkov.dev/6038b4ca92ec1c3103795a0d-grid-image.webp",
    },
    {
      name: "Hazard 4 Takedown sling backpack (Multicam)",
      description:
        "A single-strap sling backpack designed for carrying long-barreled weapons. Additional external pockets are designed to carry magazines, cleaning kit, or extra parts. Manufactured by Hazard 4. Multicam camouflage version.",
      image:
        "https://assets.tarkov.dev/6038d614d10cbf667352dd44-grid-image.webp",
    },
    {
      name: "Can of thermite",
      description:
        "Thermite-based incendiary mixtures are a mixture of aluminum powder and iron oxide. These compounds have a very high combustion temperature and are capable of burning without the presence of oxygen. Thermite has an extremely strong burning effect and is almost impossible to extinguish.",
      image:
        "https://assets.tarkov.dev/60391a8b3364dc22b04d0ce5-grid-image.webp",
    },
    {
      name: "Ratchet wrench",
      description:
        "Ratchets are an indispensable tool that every locksmith and mechanic at a service station should have for car maintenance. Allows you to work in a confined space. Has the ability to quickly change working heads. A proper instrument!",
      image:
        "https://assets.tarkov.dev/60391afc25aff57af81f7085-grid-image.webp",
    },
    {
      name: "TP-200 TNT brick",
      description:
        "TP-200 is intended for use as charges in the production of seismic surveys, intermediate detonators when initiating borehole explosive charges, crushing oversized items and performing special blasting operations.",
      image:
        "https://assets.tarkov.dev/60391b0fb847c71012789415-grid-image.webp",
    },
    {
      name: "Azimut SS Zhuk chest harness (SURPAT)",
      description:
        "A simple nylon bearing system with non-removable pouches. Allows you to carry a fairly impressive amount of ammunition at the expense of convenience. SURPAT camouflage version.",
      image:
        "https://assets.tarkov.dev/6040dd4ddcf9592f401632d2-grid-image.webp",
    },
    {
      name: "Army cap (CADPAT)",
      description: "A regular army cap, colored in CADPAT camouflage.",
      image:
        "https://assets.tarkov.dev/6040de02647ad86262233012-grid-image.webp",
    },
    {
      name: "Soyuz-TM STM-9 Gen.2 9x19 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/60479c3f420fac5ebc199f86-grid-image.webp",
    },
    {
      name: "Lebedev PL-15 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/60479fb29c15b12b9a480fb0-grid-image.webp",
    },
    {
      name: "CMMG Mk47 Mutant 7.62x39 assault rifle",
      description:
        "CMMG Mk47 Mutant, an American-made carbine chambered in 7.62x39mm, manufactured by CMMG Inc. Works with all types of AK magazines, including steel, polymer and drums. The carbine has shown exceptional reliability, which, together with the classic ergonomics of the AR system, gives an excellent example of a firearm. This variant features a fully automatic firing mode, for Law Enforcement and Millitary use only.",
      image:
        "https://assets.tarkov.dev/606587252535c57a13424cfd-grid-image.webp",
    },
    {
      name: "Mk47 254mm barrel",
      description:
        "A 254mm long barrel for the CMMG Mk47 Mutant assault rifle, chambered in 7.62x39mm.",
      image:
        "https://assets.tarkov.dev/60658776f2cb2e02a42ace2b-grid-image.webp",
    },
    {
      name: "Mk47 409mm barrel",
      description:
        "A 409mm long barrel for the CMMG Mk47 Mutant assault rifle, chambered in 7.62x39mm.",
      image:
        "https://assets.tarkov.dev/6065878ac9cf8012264142fd-grid-image.webp",
    },
    {
      name: "Mk47 Resolute 7.62x39 upper receiver",
      description:
        "The Resolute upper receiver for Mk47 Mutant assault rifle, chambered in 7.62x39mm. Equipped with a mount for attaching additional devices. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/606587a88900dc2d9a55b659-grid-image.webp",
    },
    {
      name: "Mk47 ambidextrous charging handle",
      description:
        "A charging handle for the Mk47 Mutant assault rifle. Ambidextrous latches allow for easy operation no matter which hand you use to charge the weapon. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/606587bd6d0bd7580617bacc-grid-image.webp",
    },
    {
      name: "CMMG RipStock buttstock",
      description:
        "The RipStock minimalistic telescopic buttstock, engineered for lightning-fast deployment to the user's personal setting. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/606587d11246154cad35d635-grid-image.webp",
    },
    {
      name: "CMMG buffer tube",
      description:
        "A Mil-Spec buffer tube for attaching various buttstocks. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/606587e18900dc2d9a55b65f-grid-image.webp",
    },
    {
      name: "AR-10 CMMG MK3 RML9 9 inch M-LOK handguard",
      description:
        "A 9 inch handguard for AR-10 weapon systems, equipped with an M-LOK interface for attaching additional equipment. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/6065880c132d4d12c81fd8da-grid-image.webp",
    },
    {
      name: "AR-10 CMMG MK3 RML15 15 inch M-LOK handguard",
      description:
        "A 15 inch handguard for AR-10 weapon systems, equipped with an M-LOK interface for attaching additional equipment. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/6065881d1246154cad35d637-grid-image.webp",
    },
    {
      name: "AR-10 CMMG SV Brake 7.62x51 muzzle brake",
      description:
        "The CMMG SV Brake muzzle compensator is an effective single port brake designed specifically for .308 caliber AR-10 weapon systems. The large port presents a broad surface for gasses to impact against, which keeps the muzzle down and the sights on target.",
      image:
        "https://assets.tarkov.dev/6065c6e7132d4d12c81fd8e1-grid-image.webp",
    },
    {
      name: "AR-10 CMMG low profile gas block",
      description:
        "A low-profile gas block designed for AR-10 weapon systems and the Mk47 Mutant assault rifle. Manufactured by CMMG.",
      image:
        "https://assets.tarkov.dev/6065dc8a132d4d12c81fd8e3-grid-image.webp",
    },
    {
      name: "MP-155 12ga semi-automatic shotgun",
      description:
        "The Russian MP-155 smoothbore multi-shot 12 gauge shotgun, manufactured by IzhMekh (Izhevsky Mechanical Plant). The gun weighs less than its predecessor MP-153 and features enhanced ergonomics and an easy-to-replace barrel mechanism. The new design also makes it easier to use for left-handed users.",
      image:
        "https://assets.tarkov.dev/606dae0ab0e443224b421bb7-grid-image.webp",
    },
    {
      name: "MP-155 Ultima polymer forestock",
      description:
        "The Ultima modification polymer forestock for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606ee5c81246154cad35d65e-grid-image.webp",
    },
    {
      name: "MP-155 Ultima pistol grip",
      description:
        "The Ultima modification pistol grip for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606eef46232e5a31c233d500-grid-image.webp",
    },
    {
      name: "MP-155 Ultima polymer stock",
      description:
        "The Ultima modification polymer stock for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606eef756d0bd7580617baf8-grid-image.webp",
    },
    {
      name: "MP-155 Ultima thin recoil pad",
      description:
        "The Ultima modification small rubber recoil butt-pad for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606ef0812535c57a13424d20-grid-image.webp",
    },
    {
      name: "MP-155 Ultima medium recoil pad",
      description:
        "The Ultima modification medium rubber recoil butt-pad for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606f262c6d0bd7580617bafa-grid-image.webp",
    },
    {
      name: "MP-155 Ultima large recoil pad",
      description:
        "The Ultima modification large rubber recoil butt-pad for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606f263a8900dc2d9a55b68d-grid-image.webp",
    },
    {
      name: "MP-155 Ultima underbarrel mount",
      description:
        "The Ultima modification underbarrel mount for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606f26752535c57a13424d22-grid-image.webp",
    },
    {
      name: "MP-155 Ultima thermal camera",
      description:
        "A special thermal imaging camera for the Ultima modification for the MP-155 shotgun. The image from the camera is displayed on the front display on the back of the weapon. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/606f2696f2cb2e02a42aceb1-grid-image.webp",
    },
    {
      name: "MP-155 12ga 510mm barrel",
      description:
        "A standard serially produced 510mm barrel for MP-155 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/6076c1b9f2cb2e02a42acedc-grid-image.webp",
    },
    {
      name: "MP-155 12ga 6-shell magazine",
      description:
        "A 6-shell magazine extension tube for MP-155 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/6076c87f232e5a31c233d50e-grid-image.webp",
    },
    {
      name: "MP-155 Ultima pistol grip rubber pad",
      description:
        "The Ultima modification ergonomical rubber pad for the MP-155 pistol grip. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/60785c0d232e5a31c233d51c-grid-image.webp",
    },
    {
      name: "MP-155 Ultima top rail",
      description:
        "The Ultima modification top rail for the MP-155 shotgun. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/60785ce5132d4d12c81fd918-grid-image.webp",
    },
    {
      name: "MP-155 walnut stock",
      description:
        "A Monte Carlo-style wooden walnut stock for MP-155 shotguns with a rubber butt-plate. Manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/607d5a891246154cad35d6aa-grid-image.webp",
    },
    {
      name: "MP-155 walnut forestock",
      description:
        "A Monte Carlo-style wooden walnut forestock for MP-155 shotguns. Manufactured by Izhmekh.",
      image:
        "https://assets.tarkov.dev/607d5aa50494a626335e12ed-grid-image.webp",
    },
    {
      name: "MP-155 Ultima short rail",
      description:
        "The Ultima modification short rail for the MP-155 shotgun, which allows installation of additional equipment on the handguard. Manufactured by Kalashnikov Group.",
      image:
        "https://assets.tarkov.dev/607ea812232e5a31c233d53c-grid-image.webp",
    },
    {
      name: "Twitch Rivals 2021 balaclava",
      description: "A custom balaclava in Twitch Rivals colors.",
      image:
        "https://assets.tarkov.dev/607f201b3c672b3b3a24a800-grid-image.webp",
    },
    {
      name: "PACA Soft Armor (Rivals Edition)",
      description:
        "A light but durable and reliable body armor protecting only the vital areas, fitted with class 2 (Russian GOST) armor plates. Twitch Rivals 2021 special edition.",
      image:
        "https://assets.tarkov.dev/607f20859ee58b18e41ecd90-grid-image.webp",
    },
    {
      name: "AR-10 SureFire ProComp 7.62x51 muzzle brake",
      description:
        "The ProComp muzzle brake designed for installation on AR-10-type systems and compatibles. The muzzle brake greatly reduces both recoil impulse and muzzle rise so that the user's weapon tracks straight back to keep them on target for faster shot-to-shot recovery. Manufactured by SureFire.",
      image:
        "https://assets.tarkov.dev/607ffb988900dc2d9a55b6e4-grid-image.webp",
    },
    {
      name: "Custom Guns handguard rail",
      description:
        "The Custom Guns rail guide allows you to install additional equipment on the proprietary handguards.",
      image:
        "https://assets.tarkov.dev/6086b5392535c57a13424d70-grid-image.webp",
    },
    {
      name: "SOK-12 Custom Guns Type-340 handguard",
      description:
        "Type-340 is a lightweight aircraft grade aluminium handguard, designed for installation on Saiga carbines. Manufactured by Custom Guns.",
      image:
        "https://assets.tarkov.dev/6086b5731246154cad35d6c7-grid-image.webp",
    },
    {
      name: "AR-15 Unique-ARs Wing & Skull 12 inch handguard",
      description:
        "The Wing & Skull 12 inch handguard for AR-15 weapon systems. Manufactured by Unique-ARs.",
      image:
        "https://assets.tarkov.dev/6087e0336d0bd7580617bb7a-grid-image.webp",
    },
    {
      name: "AKM/AK-74 ProMag Archangel OPFOR AA47 buttstock",
      description:
        "The OPFOR AA47 stock from the Archangel kit for AKM/AK-74-type non-folding weapon systems. Manufactured by ProMag.",
      image:
        "https://assets.tarkov.dev/6087e2a5232e5a31c233d552-grid-image.webp",
    },
    {
      name: "AK Custom Arms AGS-74 PRO + Sniper Kit pistol grip",
      description:
        "A lightweight ergonomic pistol grip for AK series weapon systems, features the Sniper Kit palm shelf for user comfort and hand rest. Manufactured by Custom Arms.",
      image:
        "https://assets.tarkov.dev/6087e663132d4d12c81fd96b-grid-image.webp",
    },
    {
      name: "AR-15 SilencerCo ASR 5.56x45 flash hider",
      description:
        "The SilencerCo ASR 5.56x45 flash hider is an effective flash suppressor that also serves as a platform for attaching the SilencerCo Saker 556 sound suppressor. Can be installed on AR-15 weapon systems.",
      image:
        "https://assets.tarkov.dev/609269c3b0e443224b421cc1-grid-image.webp",
    },
    {
      name: "SilencerCo Saker ASR 556 5.56x45 sound suppressor",
      description:
        "The SilencerCo Saker ASR 556 sound suppressor, designed for use with 5.56x45 caliber weapon systems. Can be installed on ASR-compatible muzzle devices.",
      image:
        "https://assets.tarkov.dev/60926df0132d4d12c81fd9df-grid-image.webp",
    },
    {
      name: "VPO-102 Arbalet mount",
      description:
        "An aluminum mount for installing various sights and accessories on to the VPO-102 Vepr-Hunter carbine, manufactured by Arbalet.",
      image:
        "https://assets.tarkov.dev/609a4b4fe2ff132951242d04-grid-image.webp",
    },
    {
      name: "Valday Krechet reflex sight",
      description:
        "The Krechet reflex sight, designed for precision shooting at day and at night when used in combination with a night vision device. Manufactured by Valday.",
      image:
        "https://assets.tarkov.dev/609a63b6e2ff132951242d09-grid-image.webp",
    },
    {
      name: "VOMZ Pilad TargetRing reflex sight",
      description:
        "Designed for hunting birds or small game, for sport shooting at stationary or fast-moving targets. Ideal for this purpose, it creates a contrasting circle on the target, giving the shooter an opportunity to make the pre-direction and not to lose speed. It is mounted only on smoothbore (shotgun) weapons.",
      image:
        "https://assets.tarkov.dev/609b9e31506cf869cf3eaf41-grid-image.webp",
    },
    {
      name: "Torrey Pines Logic T12W 30Hz thermal reflex sight",
      description:
        "A compact termal reflex sight with a low frequency. Manufactured by Torrey Pines Logic.",
      image:
        "https://assets.tarkov.dev/609bab8b455afd752b2e6138-grid-image.webp",
    },
    {
      name: "NFM THOR Concealable Reinforced Vest body armor",
      description:
        "The THOR Concealable Reinforced Vest enables the overt or covert carrying of soft ballistic panels providing 360 degrees protection against high-speed fragments and handgun ammunition. Adding hard ballistic plates enables protection against rifle ammunition for the vital organs. The ergonomic shape of the soft ballistic panels and the position of the back plate combined with the integrated lumbar support belt provides comfort and stability close to the body’s center of mass. Manufactured by NFM.",
      image:
        "https://assets.tarkov.dev/609e8540d5c319764c2bc2e9-grid-image.webp",
    },
    {
      name: "Crye Precision AVS plate carrier (Tagilla Edition)",
      description:
        "Tagilla's well-worn plate carrier based on the AVS module system by Crye Precision. It has one front panel with three attached pouches. And that's pretty much it. Nothing more, nothing less.",
      image:
        "https://assets.tarkov.dev/609e860ebd219504d8507525-grid-image.webp",
    },
    {
      name: "SIG Sauer ROMEO8T reflex sight",
      description:
        "The ROMEO8T reflex sight, designed for precision shooting for modern sporting rifles and shotguns. Manufactured by SIG Sauer.",
      image:
        "https://assets.tarkov.dev/60a23797a37c940de7062d02-grid-image.webp",
    },
    {
      name: "Hazard 4 Drawbridge backpack (Coyote Tan)",
      description:
        "Drawbridge is an ergonomical medium-size 25L backpack with an impressive amount of modular pouches and straps. Manufactured by Hazard 4.",
      image:
        "https://assets.tarkov.dev/60a272cc93ef783291411d8e-grid-image.webp",
    },
    {
      name: "Hazard 4 Pillbox backpack",
      description:
        "A compact backpack for safe storage of fragile items, electronics and other valuables. Military modular webbing (MOLLE) is provided throughout on the sides, straps, and interior along with velcro panels to allow expansion with pouches, velcro i.d. patches, etc. Manufactured by Hazard 4.",
      image:
        "https://assets.tarkov.dev/60a2828e8689911a226117f9-grid-image.webp",
    },
    {
      name: "NFM THOR Integrated Carrier body armor",
      description:
        "The THOR full protection assault body armor equipped with soft and hard armor elements to protect against shrapnel and bullets of pistol and rifle calibers. Manufactured by NFM.",
      image:
        "https://assets.tarkov.dev/60a283193cb70855c43a381d-grid-image.webp",
    },
    {
      name: "CQC Osprey MK4A plate carrier (Protection, MTP)",
      description:
        "The Osprey plate carrier is actively used by the British army and specialists. The Protection preset is provided with heavy armor plates and the optimal number of pouches for ammunition, grenades and special equipment.",
      image:
        "https://assets.tarkov.dev/60a3c68c37ea821725773ef5-grid-image.webp",
    },
    {
      name: "CQC Osprey MK4A plate carrier (Assault, MTP)",
      description:
        "The Osprey plate carrier is actively used by the British army and specialists. The Assault preset is provided with heavy armor plates and a maximum of pouches for ammunition and grenades.",
      image:
        "https://assets.tarkov.dev/60a3c70cde5f453f634816a3-grid-image.webp",
    },
    {
      name: "Stich Profi Chest Rig MK2 (Assault, A-TACS FG)",
      description:
        "The Chest-Rig tactical system can be used as an independent piece of equipment or as an addition to body armor without the MOLLE system. Suitable for combat training instructors, special forces units. Assault preset in A-TACS FG camouflage. Manufactured by Stich Profi.",
      image:
        "https://assets.tarkov.dev/60a621c49c197e4e8c4455e6-grid-image.webp",
    },
    {
      name: "Stich Profi Chest Rig MK2 (Recon, A-TACS FG)",
      description:
        "The Chest-Rig tactical system can be used as an independent piece of equipment or as an addition to body armor without the MOLLE system. Suitable for combat training instructors, special forces units. Recon preset in A-TACS FG camouflage. Manufactured by Stich Profi.",
      image:
        "https://assets.tarkov.dev/60a6220e953894617404b00a-grid-image.webp",
    },
    {
      name: "BOSS cap",
      description: "A fancy red BOSS cap. Yo, fella, you da real BOSS now!",
      image:
        "https://assets.tarkov.dev/60a7acf20c5cb24b01346648-grid-image.webp",
    },
    {
      name: "Tagilla's welding mask UBEY",
      description:
        "An armored steel welding mask of Tagilla - the Bossman of Factory. Painted with the special UBEY (KILL) art.",
      image:
        "https://assets.tarkov.dev/60a7ad2a2198820d95707a2e-grid-image.webp",
    },
    {
      name: "Tagilla's welding mask Gorilla",
      description:
        "An armored steel welding mask of Tagilla - the Bossman of Factory. Painted with the special Gorilla art.",
      image:
        "https://assets.tarkov.dev/60a7ad3a0c5cb24b0134664a-grid-image.webp",
    },
    {
      name: "LVNDMARK's rat poison",
      description:
        "A special agent for the extermination of camper rats and small factory rodents. Contains the special CHAD formula.",
      image:
        "https://assets.tarkov.dev/60b0f561c4449e4cb624c1d7-grid-image.webp",
    },
    {
      name: "WZ Wallet",
      description:
        "The WillerZ leather wallet. Same as any simple wallet, but fancier.",
      image:
        "https://assets.tarkov.dev/60b0f6c058e0b0481a09ad11-grid-image.webp",
    },
    {
      name: "Loot Lord plushie",
      description:
        "The Loot Lord plush toy from a famous Tarkov resident - AquaFPS. A very rare collectible!",
      image:
        "https://assets.tarkov.dev/60b0f7057897d47c5b04ab94-grid-image.webp",
    },
    {
      name: "Can of RatCola soda",
      description:
        "Limited edition RatCola from the General Sam brand. The secret recipe of this cola still remains a mystery.",
      image:
        "https://assets.tarkov.dev/60b0f93284c20f0feb453da7-grid-image.webp",
    },
    {
      name: "Evasion armband",
      description:
        "A special identification armband from Evasion, a local esports tournament by Sigma.",
      image:
        "https://assets.tarkov.dev/60b0f988c4449e4cb624c1da-grid-image.webp",
    },
    {
      name: "Stich Profi Chimera boonie hat",
      description:
        "A boonie hat with artificial camouflage leaves, manufactured by Stich Profi.",
      image:
        "https://assets.tarkov.dev/60b52e5bc7d8103275739d67-grid-image.webp",
    },
    {
      name: "MP-155 12ga semi-automatic shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/60b7c28ee53e4c5c8945dd73-grid-image.webp",
    },
    {
      name: "MP-155 12ga semi-automatic shotgun Ultima",
      description: "null",
      image:
        "https://assets.tarkov.dev/60b7c2bd95047637182d90a4-grid-image.webp",
    },
    {
      name: "CMMG Mk47 Mutant 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/60b7d76e2a3c79100f1979de-grid-image.webp",
    },
    {
      name: "Bomber beanie",
      description:
        "A heraldic symbol of urban vagabonds. You need to wear it correctly, otherwise, the magic properties of the beanie will cease to work.",
      image:
        "https://assets.tarkov.dev/60bf74184a63fc79b60c57f6-grid-image.webp",
    },
    {
      name: "MTs-255-12 12ga shotgun",
      description:
        "MTs-255-12 is a unique for Russian market 12 gauge revolver shotgun.",
      image:
        "https://assets.tarkov.dev/60db29ce99594040e04c4a27-grid-image.webp",
    },
    {
      name: "MTs-255-12 12ga cylinder",
      description:
        "A standard-issue cylinder for the MTs-255-12 revolver shotgun.",
      image:
        "https://assets.tarkov.dev/60dc519adf4c47305f6d410d-grid-image.webp",
    },
    {
      name: "AR-15 F1 Firearms Skeletonized Style 1 pistol grip",
      description:
        "A lightweight ergonomical pistol grip for AR-15 weapon systems, manufactured by F1 Firearms.",
      image:
        "https://assets.tarkov.dev/6113c3586c780c1e710c90bc-grid-image.webp",
    },
    {
      name: "AR-15 F1 Firearms Skeletonized Style 2 PC pistol grip",
      description:
        "A lightweight ergonomical pistol grip with finger grooves for AR-15 weapon systems, manufactured by F1 Firearms. Wrapped with paracord for maximum comfort and minimum hand slip.",
      image:
        "https://assets.tarkov.dev/6113cc78d3a39d50044c065a-grid-image.webp",
    },
    {
      name: "AR-15 F1 Firearms Skeletonized Style 2 pistol grip",
      description:
        "A lightweight ergonomical pistol grip with finger grooves for AR-15 weapon systems, manufactured by F1 Firearms.",
      image:
        "https://assets.tarkov.dev/6113cce3d92c473c770200c7-grid-image.webp",
    },
    {
      name: "BelOMO PK-AA dovetail reflex sight",
      description:
        "The PK-AA reflex sight, designed to fit any AK-style model with a dovetail rail mount. Manufactured by BelOMO.",
      image:
        "https://assets.tarkov.dev/6113d6c3290d254f5e6b27db-grid-image.webp",
    },
    {
      name: "MP-43 12ga 750mm barrel",
      description:
        "A 750mm long 12 gauge barrel for the MP-43 double-barrelled shotgun.",
      image:
        "https://assets.tarkov.dev/611a30addbdd8440277441dc-grid-image.webp",
    },
    {
      name: "MP-43-1C buttpad",
      description: "A standard-issue buttpad for MP-43 shotguns.",
      image:
        "https://assets.tarkov.dev/611a31ce5b7ffe001b4649d1-grid-image.webp",
    },
    {
      name: "MTs-255-12 beechwood forestock",
      description:
        "A standard-issue forestock for the MTs-255 shotgun, made out of beechwood.",
      image:
        "https://assets.tarkov.dev/6123649463849f3d843da7c4-grid-image.webp",
    },
    {
      name: "MTs-255-12 12ga 755mm barrel with rib",
      description:
        "A standard factory-produced 755mm barrel with a wide upper rib for MTs-255 12 gauge shotguns.",
      image:
        "https://assets.tarkov.dev/612368f58b401f4f51239b33-grid-image.webp",
    },
    {
      name: "MTs-255-12 wooden stock",
      description:
        "A standard wooden stock for the MTs-255-12 shotgun, manufactured by TsKIB.",
      image:
        "https://assets.tarkov.dev/612781056f3d944a17348d60-grid-image.webp",
    },
    {
      name: "AR-15 AWC PSR 5.56x45 muzzle brake",
      description:
        "PSR is an effective muzzle brake manufactured by AWC Silencers for 5.56x45. Reduces recoil and counters the muzzle rise. The brake is threaded and compatible with AWC PSR Thor sound suppressors.",
      image:
        "https://assets.tarkov.dev/612e0cfc8004cc50514c2d9e-grid-image.webp",
    },
    {
      name: "AWC PSR 7.62x51 muzzle brake",
      description:
        "PSR is an effective muzzle brake manufactured by AWC Silencers for 7.62x51. Reduces recoil and counters the muzzle rise. The brake is threaded and compatible with AWC PSR Thor sound suppressors.",
      image:
        "https://assets.tarkov.dev/612e0d3767085e45ef14057f-grid-image.webp",
    },
    {
      name: "AWC PSR .338 LM muzzle brake",
      description:
        "PSR is an effective muzzle brake manufactured by AWC Silencers for .338 LM (8.6x70). Reduces recoil and counters the muzzle rise. The brake is threaded and compatible with AWC PSR Thor sound suppressors.",
      image:
        "https://assets.tarkov.dev/612e0d81290d254f5e6b291a-grid-image.webp",
    },
    {
      name: "AWC PSR muzzle brake protector",
      description:
        "A thread protector for PSR muzzle brakes manufactured by AWC Silencers.",
      image:
        "https://assets.tarkov.dev/612e0e04568c120fdd294258-grid-image.webp",
    },
    {
      name: "AR-10 TAA ZK-38 7.62x51 muzzle brake",
      description:
        "The ZK is single-chamber highly effective slant face muzzle brake manufactured by Tactical Advantage Armory. The front is rather pointy and doubles as a CQB threat deterrent and soft target weapon. Not recommended for situations where high concussion is a concern.",
      image:
        "https://assets.tarkov.dev/612e0e3c290d254f5e6b291d-grid-image.webp",
    },
    {
      name: "AR-15 TAA ZK-23 5.56x45 muzzle brake",
      description:
        "The ZK is single-chamber highly effective slant face muzzle brake manufactured by Tactical Advantage Armory. The front is rather pointy and doubles as a CQB threat deterrent and soft target weapon. Not recommended for situations where high concussion is a concern.",
      image:
        "https://assets.tarkov.dev/612e0e55a112697a4b3a66e7-grid-image.webp",
    },
    {
      name: "HK UMP .45 ACP 8 inch threaded barrel",
      description:
        "A threaded barrel for the HK UMP submachine gun, chambered in .45 ACP ammo, 8 inches (203mm) long.",
      image:
        "https://assets.tarkov.dev/6130c3dffaa1272e43151c7d-grid-image.webp",
    },
    {
      name: "AR-10 KAC QDC 7.62x51 Muzzle Brake Kit",
      description:
        "Knight's Armament Company Muzzle Brake Kit is an effective muzzle brake that also serves as a platform for attaching the PRS QDC sound suppressor. It can be Installed on AR-10 platform weapons.",
      image:
        "https://assets.tarkov.dev/6130c43c67085e45ef1405a1-grid-image.webp",
    },
    {
      name: "HK UMP B&T OEM .45 ACP sound suppressor",
      description:
        "A hard to find sound suppressor, designed for the HK UMP 45 submachine gun and utilizes a locking gate QD to allow for quick attachment and removal. Imported by H&K from Brugger & Thomet Switzerland.",
      image:
        "https://assets.tarkov.dev/6130c4d51cb55961fa0fd49f-grid-image.webp",
    },
    {
      name: "AK CSS knurled charging handle",
      description:
        "The CSS knurled charging handle gives the user an enhanced oversized knob to operate the weapon more easily. This handle works on all Vepr Rifles and Shotguns, Saiga Rifles and Shotguns, and most AK platform weapons.",
      image:
        "https://assets.tarkov.dev/6130ca3fd92c473c77020dbd-grid-image.webp",
    },
    {
      name: "B&T QD NAR mount for Aimpoint ACRO",
      description:
        "The Brugger & Thomet QD NAR is a special mount for the Aimpoint ACRO-series reflex sights. 39mm stand height.",
      image:
        "https://assets.tarkov.dev/615d8d878004cc50514c3233-grid-image.webp",
    },
    {
      name: "Glock TangoDown AAM-01 ACRO mount base",
      description:
        "The TangoDown mount for installing the Aimpoint ACRO reflex sight on the Glock MOS pistol slide to increase the weapon's speed and proficiency.",
      image:
        "https://assets.tarkov.dev/615d8da4d3a39d50044c10e8-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 MOS pistol slide",
      description:
        "The MOS (Modular Optic System) slide designed for Glock 9x19 pistols. Manufactured by Glock.",
      image:
        "https://assets.tarkov.dev/615d8dbd290d254f5e6b2ed6-grid-image.webp",
    },
    {
      name: "HK MP5 B&T QD 9x19 muzzle brake",
      description:
        "A muzzle brake for MP5-based weapons with a quick-detach lever for easy removal and installation. Manufactured by Brugger & Thomet.",
      image:
        "https://assets.tarkov.dev/615d8df08004cc50514c3236-grid-image.webp",
    },
    {
      name: "AR-15 HK BLITZ 5.56x45 flash hider",
      description:
        "A flash hider for use on AR-15 style platforms. The BLITZ compensator is one of the most effective designs available and a great upgrade for a stock AR-15.",
      image:
        "https://assets.tarkov.dev/615d8e2f1cb55961fa0fd9a4-grid-image.webp",
    },
    {
      name: "AKM 7.62x39 Kiba Arms .308 muzzle device adapter",
      description:
        "The Kiba Arms Samson adapter that allows installation of various .308 (7.62x51) muzzle devices on 7.62x39 AKM-type automatic rifles.",
      image:
        "https://assets.tarkov.dev/615d8e9867085e45ef1409c6-grid-image.webp",
    },
    {
      name: "AR-10 SureFire Warden 7.62x51 blast regulator",
      description:
        "The SureFire Warden blast regulator features a stainless steel body that enhances the overall appearance while protecting the inner parts from harm. This blast regulator prevents dirt, dust, debris, etc., from causing internal damage.",
      image:
        "https://assets.tarkov.dev/615d8eb350224f204c1da1cf-grid-image.webp",
    },
    {
      name: "AK Hexagon Reactor 5.45x39 muzzle brake",
      description:
        "The Reactor prototype muzzle brake manufactured by Hexagon for 5.45x39 AK platforms. Features mounts required for installation of the Wafflemaker sound suppressor.",
      image:
        "https://assets.tarkov.dev/615d8f5dd92c473c770212ef-grid-image.webp",
    },
    {
      name: "AK-74 Hexagon Wafflemaker 5.45x39 sound suppressor",
      description:
        "The Wafflemaker prototype sound suppressor manufactured by Hexagon, designed for installation on the Hexagon Reactor muzzle brake.",
      image:
        "https://assets.tarkov.dev/615d8f8567085e45ef1409ca-grid-image.webp",
    },
    {
      name: "AR-15 Tactical Dynamics Hexgrip pistol grip",
      description:
        "The Hexgrip ergonomical pistol grip for the AR-15 platform weapon systems, manufactured by Tactical Dynamics.",
      image:
        "https://assets.tarkov.dev/615d8faecabb9b7ad90f4d5d-grid-image.webp",
    },
    {
      name: "Monstrum Tactical Vertical Fore Grip KeyMod",
      description:
        "A tactical foregrip manufactured by Monstrum Tactical. Compatible with KeyMod interface handguards.",
      image:
        "https://assets.tarkov.dev/615d8fd3290d254f5e6b2edc-grid-image.webp",
    },
    {
      name: "Wilcox RAPTAR ES Tactical Rangefinder",
      description:
        "The early generation of the tactical device called RAPTAR combined with a rangefinder. It has visible and IR lasers, as well as an infrared illuminator.",
      image:
        "https://assets.tarkov.dev/61605d88ffa6e502ac5e7eeb-grid-image.webp",
    },
    {
      name: "Vortex Ranger 1500 rangefinder",
      description:
        "A handheld optical device that allows you to measure the distance to targets. Manufactured by Vortex Optics.",
      image:
        "https://assets.tarkov.dev/61605e13ffa6e502ac5e7eef-grid-image.webp",
    },
    {
      name: "Aimpoint ACRO P-1 reflex sight",
      description:
        "The compact ACRO P-1 reflex sight by Aimpoint was designed for use with special mounts. Lightweight, compact, and durable.",
      image:
        "https://assets.tarkov.dev/616442e4faa1272e43152193-grid-image.webp",
    },
    {
      name: "Aimpoint Micro H-2 Standard Mount",
      description:
        "Aimpoint Micro Standard Mount is a base mount for H-2 sights of the Micro series. Backwards-compatible with both T-1 and H-1 series reflex sights.",
      image:
        "https://assets.tarkov.dev/616554fe50224f204c1da2aa-grid-image.webp",
    },
    {
      name: "Aimpoint Micro H-2 reflex sight",
      description:
        "The Micro H-2 compact reflex sight by Aimpoint was designed for use with any kind of firearms and even with bows. Lightweight, compact, and durable.",
      image:
        "https://assets.tarkov.dev/61657230d92c473c770213d7-grid-image.webp",
    },
    {
      name: "Aimpoint QRP2 mount for CompM4/PRO sights",
      description:
        "The QRP2 quick-detach base mount for the CompM4 and PRO series reflex sights, manufactured by Aimpoint.",
      image:
        "https://assets.tarkov.dev/616584766ef05c2ce828ef57-grid-image.webp",
    },
    {
      name: "Aimpoint PRO reflex sight",
      description:
        "The Aimpoint PRO (Patrol Rifle Optic) reflex sight is installed on the QRP2 or LRP mount that attaches to picatinny rails without any additional tools. The optic has flip-up lens covers – the solid front and transparent rear – allowing the user to shoot with the lens caps closed and both eyes open in an emergency situation. The PRO sight is fully compatible with all generations of night vision devices.",
      image:
        "https://assets.tarkov.dev/61659f79d92c473c770213ee-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle (FDE)",
      description:
        "The FN SCAR-H (Special Operations Forces Combat Assault Rifle - Heavy) assault rifle chambered in 7.62x51 NATO rounds, was adopted by the US SOCOM as the Mk 17. Features a side-folding polymer stock and a free-floating, cold hammer-forged Mil-Spec barrel with hardchromed bore. Fully-ambidextrous operating controls instantly adapt the SCAR to any user or any shooting position. The receiver-integrated optical rail plus three accessory rails enable mounting of a wide variety of scopes, electronic sights, tactical lights and lasers. Manufactured by Fabrique Nationale Herstal. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/6165ac306ef05c2ce828ef74-grid-image.webp",
    },
    {
      name: "Leapers UTG reflex sight",
      description:
        "The UTG reflex sight with a Red/Green circle dot, manufactured by Leapers Inc. This model is a compact, small-size reflex sight, which mounts on Weaver/Picatinny rails.",
      image:
        "https://assets.tarkov.dev/6165ac8c290d254f5e6b2f6c-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 upper receiver",
      description:
        "An upper receiver for the SCAR-H assault rifle, manufactured by Fabrique Nationale Herstal. Features a top rail for installation of additional equipment.",
      image:
        "https://assets.tarkov.dev/6165adcdd3a39d50044c120f-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 upper receiver (FDE)",
      description:
        "An upper receiver for the SCAR-H assault rifle, manufactured by Fabrique Nationale Herstal. Features a top rail for installation of additional equipment. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/6165aeedfaa1272e431521e3-grid-image.webp",
    },
    {
      name: "SKS 7.62x39 KCI 75-round drum magazine",
      description:
        "The KCI 75-round blued steel magazine is designed for use with the SKS carbines that accept external magazines. Two exterior latches open the rear of the drum, allowing the user to reload without fighting spring tension and store the drum long-term with zero tension on the spring.",
      image:
        "https://assets.tarkov.dev/61695095d92c473c7702147a-grid-image.webp",
    },
    {
      name: "HK417 7.62x51 16.5 inch barrel",
      description:
        "A 16.5 inch (421mm) barrel for HK417-based weapons for 7.62x51 ammo.",
      image:
        "https://assets.tarkov.dev/61702be9faa1272e431522c3-grid-image.webp",
    },
    {
      name: "HK417 E1 extended charging handle",
      description:
        "An extended charging handle for HK417 and compatible systems, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/61702d8a67085e45ef140b24-grid-image.webp",
    },
    {
      name: "HK417 low profile gas block",
      description:
        "A standard gas block for HK417 assault rifles and compatibles, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/61702f1b67085e45ef140b26-grid-image.webp",
    },
    {
      name: "HK417 Extended Free Float handguard with flip-up front sight",
      description:
        "The HK417 & G28 Extended DMR Forearm With a Flip Up Front Sight & Suppressor Window Cutout. Optimized design to mitigate the heat emissions for long range shooting and to prevent the mirage effect.",
      image:
        "https://assets.tarkov.dev/61703001d92c473c77021497-grid-image.webp",
    },
    {
      name: "HK417 Patrol handguard with flip-up front sight",
      description:
        "The HK417 & G28 DMR Forearm With a Flip Up Front Sight & Suppressor Window Cutout. Optimized design to mitigate the heat emissions for long range shooting and to prevent the mirage effect.",
      image:
        "https://assets.tarkov.dev/61712eae6c780c1e710c9a1d-grid-image.webp",
    },
    {
      name: "HK417/G28 7.62x51 10-round magazine",
      description:
        "A 10-round double-stack HK417/G28 magazine for 7.62x51 ammunition. The floor plate can easily be removed for disassembly and cleaning.",
      image:
        "https://assets.tarkov.dev/617130016c780c1e710c9a24-grid-image.webp",
    },
    {
      name: "HK417/G28 7.62x51 20-round magazine",
      description:
        "A 20-round double-stack HK417/G28 magazine for 7.62x51 ammunition. The floor plate can easily be removed for disassembly and cleaning.",
      image:
        "https://assets.tarkov.dev/617131a4568c120fdd29482d-grid-image.webp",
    },
    {
      name: "HK Prolonged 7.62x51 flash hider",
      description:
        "The Heckler & Koch Prolonged 7.62x51 flash hider. Effectively suppresses flash and can also serve as a platform for the B&T QD sound suppressor.",
      image:
        "https://assets.tarkov.dev/61713308d92c473c770214a0-grid-image.webp",
    },
    {
      name: "HK G28 B&T QD 7.62x51 sound suppressor",
      description:
        "A quick-detach 7.62x51 silencer manufactured by Brugger & Thomet. Installed on the HK Prolonged flash hider.",
      image:
        "https://assets.tarkov.dev/6171367e1cb55961fa0fdb36-grid-image.webp",
    },
    {
      name: "HK G28 7.62x51 upper receiver",
      description:
        "An upper receiver for the G28 marksman rifle manufactured by Heckler & Koch. Equipped with a top mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/61713a8fd92c473c770214a4-grid-image.webp",
    },
    {
      name: "Recknagel Era-Tac 34mm ring scope mount",
      description:
        "The Recknagel Era-Tac is a versatile base for mounting 34mm riflescopes. Equipped with additional top mounts for installation of various tactical equipment.",
      image:
        "https://assets.tarkov.dev/61713cc4d8e3106d9806c109-grid-image.webp",
    },
    {
      name: "Recknagel Era-Tac 30mm ring scope mount",
      description:
        "The Recknagel Era-Tac is a versatile base for mounting 30mm riflescopes. Equipped with additional top mounts for installation of various tactical equipment.",
      image:
        "https://assets.tarkov.dev/6171407e50224f204c1da3c5-grid-image.webp",
    },
    {
      name: "Recknagel Era-Tac Sunshade mount for Aimpoint T-1 sights",
      description:
        "The Recknagel Era-Tac Sunshade mount for the Aimpoint Micro T-1 reflex sight.",
      image:
        "https://assets.tarkov.dev/61714b2467085e45ef140b2c-grid-image.webp",
    },
    {
      name: "Schmidt & Bender PM II 3-12x50 34mm riflescope",
      description:
        "The Schmidt & Bender PM II 3-12x50 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy.",
      image:
        "https://assets.tarkov.dev/61714eec290d254f5e6b2ffc-grid-image.webp",
    },
    {
      name: "Schmidt & Bender PM II 1-8x24 30mm riflescope",
      description:
        "The Schmidt & Bender PM II 1-8x24 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy. ",
      image:
        "https://assets.tarkov.dev/617151c1d92c473c770214ab-grid-image.webp",
    },
    {
      name: "HK G28 buffer tube",
      description:
        "A receiver extension buffer tube for installation of Mil-Spec buttstocks, fits both HK417 and G28.",
      image:
        "https://assets.tarkov.dev/617153016c780c1e710c9a2f-grid-image.webp",
    },
    {
      name: "HK417 E2 buttstock",
      description:
        "The E2 telescopic stock is designed as a replacement for standard HK417 stocks. Made of high-grade nylon fiber with a twist-off rubber butt pad and an ambidextrous sling attachment point. Can be installed on HK417/G28 weapon system buffer tubes. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/617154aa1cb55961fa0fdb3b-grid-image.webp",
    },
    {
      name: "HK Adjustable Buttstock",
      description:
        "An adjustable stock designed and manufactured by Heckler & Koch. This stock is fully adjustable for length of pull as well as the cheek height. Features a mount for installation of a cheek rest.",
      image:
        "https://assets.tarkov.dev/617155ee50224f204c1da3cd-grid-image.webp",
    },
    {
      name: "HK Adjustable Buttstock cheek rest",
      description:
        "The HK adjustable stock cheek piece provides optimum versatility in use.",
      image:
        "https://assets.tarkov.dev/61715e7e67085e45ef140b33-grid-image.webp",
    },
    {
      name: "Ghoul mask",
      description:
        "A rubber mask of a Ghoul. If you want to terrify Scavs and make them look for new pants, this mask is for you.",
      image:
        "https://assets.tarkov.dev/6176a40f0b8c0312ac75a3d3-grid-image.webp",
    },
    {
      name: "Faceless mask",
      description: "A scary mask from some famous animated movie.",
      image:
        "https://assets.tarkov.dev/6176a48d732a664031271438-grid-image.webp",
    },
    {
      name: "HK G28 7.62x51 marksman rifle",
      description:
        "The HK G28 rifle was developed by Heckler & Koch specifically for the Bundeswehr as a support weapon for small infantry units. The G28 is based on the HK MR308, which, in turn, is a civilian version of the HK 417 automatic rifle. Despite several differences, the HK G28 is 75% interchangeable with the HK 417. This rifle is designed to shoot at distances inaccessible to standard 5.56mm assault rifles.",
      image:
        "https://assets.tarkov.dev/6176aca650224f204c1da3fb-grid-image.webp",
    },
    {
      name: "M18 smoke grenade (Green)",
      description:
        "The M18 smoke grenade made in the USA. Used in the US Army since the Second World War. The smoke is green-colored.",
      image:
        "https://assets.tarkov.dev/617aa4dd8166f034d57de9c5-grid-image.webp",
    },
    {
      name: "RGN hand grenade",
      description:
        "RGN (Ruchnaya Granata Nastupatel'naya - Offensive Hand Grenade) is an offensive anti-personnel fragmentation hand grenade of impact action.",
      image:
        "https://assets.tarkov.dev/617fd91e5539a84ec44ce155-grid-image.webp",
    },
    {
      name: "FN SCAR folding polymer stock",
      description:
        "A folding polymer stock for the SCAR-series rifles, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/61816734d8e3106d9806c1f3-grid-image.webp",
    },
    {
      name: "FN SCAR cheek rest",
      description:
        "A standard cheek rest that is installed on top of the FN SCAR polymer stock. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/618167441cb55961fa0fdc71-grid-image.webp",
    },
    {
      name: "FN SCAR retractable polymer stock",
      description:
        "A retractable polymer stock for the SCAR-series assault rifles, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/618167528004cc50514c34f9-grid-image.webp",
    },
    {
      name: "FN SCAR rubber buttpad",
      description:
        "A rubber buttpad for the SCAR-series assault rifle polymer stocks, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/618167616ef05c2ce828f1a8-grid-image.webp",
    },
    {
      name: "FN SCAR charging handle",
      description:
        "A standard-issue charging handle for the SCAR-series assault rifles, manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/6181688c6c780c1e710c9b04-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 13 inch barrel",
      description:
        "A 13 inches long (330mm) barrel for the SCAR-series weapons chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/618168b350224f204c1da4d8-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 20-round magazine",
      description:
        "A 20-round magazine for the FN SCAR-H 7.62x51 battle rifle.",
      image:
        "https://assets.tarkov.dev/618168dc8004cc50514c34fc-grid-image.webp",
    },
    {
      name: "FN SCAR bottom rail",
      description:
        "A bottom rail for the SCAR-series handguards that allows installation of tactical foregrips or other devices.",
      image:
        "https://assets.tarkov.dev/61816df1d3a39d50044c139e-grid-image.webp",
    },
    {
      name: "FN SCAR side rail",
      description:
        "A side rail for the SCAR-series handguards that allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/61816dfa6ef05c2ce828f1ad-grid-image.webp",
    },
    {
      name: "FN SCAR flip-up front sight",
      description:
        "A removable flip-up front sight for the SCAR-series assault rifles, installed on the gas block. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/61816fcad92c473c770215cc-grid-image.webp",
    },
    {
      name: "FN SCAR flip-up rear sight",
      description:
        "A removable flip-up rear sight for the SCAR-series assault rifles. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/61817865d3a39d50044c13a4-grid-image.webp",
    },
    {
      name: "AAC SCAR-SD 51T 7.62x51 flash hider",
      description:
        "The Advanced Armament Corporation (AAC) SCAR-SD 51T flash hider is an effective flash suppressor that also serves as an attachment platform for the AAC 762-SDN-6 sound suppressor. Can be installed on AR-10-based rifles.",
      image:
        "https://assets.tarkov.dev/618178aa1cb55961fa0fdc80-grid-image.webp",
    },
    {
      name: "FN SCAR folding polymer stock (FDE)",
      description:
        "A folding polymer stock for the SCAR-series rifles, manufactured by Fabrique Nationale Herstal. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/61825d06d92c473c770215de-grid-image.webp",
    },
    {
      name: "FN SCAR retractable polymer stock (FDE)",
      description:
        "A retractable polymer stock for the SCAR-series assault rifles, manufactured by Fabrique Nationale Herstal. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/61825d136ef05c2ce828f1cc-grid-image.webp",
    },
    {
      name: "FN SCAR cheek rest (FDE)",
      description:
        "A standard cheek rest that is installed on top of the FN SCAR polymer stock. Manufactured by Fabrique Nationale Herstal. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/61825d24d3a39d50044c13af-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle",
      description:
        "The FN SCAR-H (Special Operations Forces Combat Assault Rifle - Heavy) assault rifle chambered in 7.62x51 NATO rounds, was adopted by the US SOCOM as the Mk 17. Features a side-folding polymer stock and a free-floating, cold hammer-forged Mil-Spec barrel with hardchromed bore. Fully-ambidextrous operating controls instantly adapt the SCAR to any user or any shooting position. The receiver-integrated optical rail plus three accessory rails enable mounting of a wide variety of scopes, electronic sights, tactical lights and lasers. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/6183afd850224f204c1da514-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 16 inch barrel",
      description:
        "A 16 inches long (406mm) barrel for the SCAR-series weapons chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/6183b0711cb55961fa0fdcad-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 20 inch barrel",
      description:
        "A 20 inches long (508mm) barrel for the SCAR-series weapons chambered in 7.62x51 NATO ammo.",
      image:
        "https://assets.tarkov.dev/6183b084a112697a4b3a6e6c-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 20-round magazine (FDE)",
      description:
        "A 20-round magazine for the FN SCAR-H 7.62x51 battle rifle. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/6183d53f1cb55961fa0fdcda-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 10 inch barrel",
      description:
        "A 10 inches long (254mm) CQB barrel for the SCAR-series weapons chambered in 5.56x45 NATO ammo.",
      image:
        "https://assets.tarkov.dev/6183fc15d3a39d50044c13e9-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 14 inch barrel",
      description:
        "A 14 inches long (355mm) STD barrel for the SCAR-series weapons chambered in 5.56x45 NATO ammo.",
      image:
        "https://assets.tarkov.dev/6183fd911cb55961fa0fdce9-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 18 inch barrel",
      description:
        "An 18 inches long (457mm) LB barrel for the SCAR-series weapons chambered in 5.56x45 NATO ammo.",
      image:
        "https://assets.tarkov.dev/6183fd9e8004cc50514c358f-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 upper receiver",
      description:
        "An upper receiver for the SCAR-L assault rifle, manufactured by Fabrique Nationale Herstal. Features a top rail for installation of additional equipment.",
      image:
        "https://assets.tarkov.dev/618405198004cc50514c3594-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle",
      description:
        "The FN SCAR-L (Special Operations Forces Combat Assault Rifle - Light) assault rifle chambered in 5.56x45 NATO rounds, was adopted by the US SOCOM as the Mk 16. Features a side-folding polymer stock and a free-floating, cold hammer-forged Mil-Spec barrel with hardchromed bore. Fully-ambidextrous operating controls instantly adapt the SCAR to any user or any shooting position. The receiver-integrated optical rail plus three accessory rails enable mounting of a wide variety of scopes, electronic sights, tactical lights and lasers. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/6184055050224f204c1da540-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 flash hider",
      description:
        "A 3-prong flash hider designed specifically for the SCAR-series 5.56x45 assault rifles. Can be equipped with a proprietary suppressor. Manufactured by Fabrique Nationale Herstal.",
      image:
        "https://assets.tarkov.dev/618407a850224f204c1da549-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 30-round magazine",
      description:
        "A 30-round 5.56x45 metal magazine designed for the SCAR-series weapons.",
      image:
        "https://assets.tarkov.dev/61840bedd92c473c77021635-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 30-round magazine (FDE)",
      description:
        "A 30-round 5.56x45 metal magazine designed for the SCAR-series weapons. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/61840d85568c120fdd2962a5-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 upper receiver (FDE)",
      description:
        "An upper receiver for the SCAR-L assault rifle, manufactured by Fabrique Nationale Herstal. Features a top rail for installation of additional equipment. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/618426d96c780c1e710c9b9f-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle (FDE)",
      description:
        "The FN SCAR-L (Special Operations Forces Combat Assault Rifle - Light) assault rifle chambered in 5.56x45 NATO rounds, was adopted by the US SOCOM as the Mk 16. Features a side-folding polymer stock and a free-floating, cold hammer-forged Mil-Spec barrel with hardchromed bore. Fully-ambidextrous operating controls instantly adapt the SCAR to any user or any shooting position. The receiver-integrated optical rail plus three accessory rails enable mounting of a wide variety of scopes, electronic sights, tactical lights and lasers. Manufactured by Fabrique Nationale Herstal. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/618428466ef05c2ce828f218-grid-image.webp",
    },
    {
      name: "RGO hand grenade",
      description:
        "RGO (Ruchnaya Granata Oboronitel'naya - Defensive Hand Grenade) is a defensive anti-personnel fragmentation hand grenade of impact action.",
      image:
        "https://assets.tarkov.dev/618a431df1eb8e24b8741deb-grid-image.webp",
    },
    {
      name: "NPZ PK1 Obzor reflex sight",
      description:
        "A reflex sight designed for hunters for fast acquisition of the target while operating in highly cold temperatures, installed on dovetail rails. Manufactured by NPZ.",
      image:
        "https://assets.tarkov.dev/618a5d5852ecee1505530b2a-grid-image.webp",
    },
    {
      name: "NPZ 1P78-1 dovetail mount",
      description:
        "An aluminum sight mount manufactured by NPZ for the installation of scopes and accessories. Installed on dovetail rails.",
      image:
        "https://assets.tarkov.dev/618a75c9a3884f56c957ca1b-grid-image.webp",
    },
    {
      name: "NPZ 1P78-1 2.8x scope",
      description:
        "A 2.8x magnification day scope, installed on dovetail rails. Manufactured by NPZ.",
      image:
        "https://assets.tarkov.dev/618a75f0bd321d49084cd399-grid-image.webp",
    },
    {
      name: "NPZ 1P78 scope eyecup",
      description: "A rubber eyecup for the NPZ 1P78 scope.",
      image:
        "https://assets.tarkov.dev/618a760e526131765025aae3-grid-image.webp",
    },
    {
      name: "Kalashnikov AKS-74UN 5.45x39 assault rifle Recon",
      description: "null",
      image:
        "https://assets.tarkov.dev/618aae5a4dc2d41d5c30264b-grid-image.webp",
    },
    {
      name: "AS VAL 9x39 special assault rifle Kobra",
      description: "null",
      image:
        "https://assets.tarkov.dev/618aaeb931ddad66c15eb7e9-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle Custom",
      description: "null",
      image:
        "https://assets.tarkov.dev/618aaf656bbeff39ad4acf0c-grid-image.webp",
    },
    {
      name: "HK MP5 9x19 submachine gun (Navy 3 Round Burst) SD Spec",
      description: "null",
      image:
        "https://assets.tarkov.dev/618aafe23c1dcf601e0327db-grid-image.webp",
    },
    {
      name: "FN P90 5.7x28 submachine gun DEVGRU",
      description: "null",
      image:
        "https://assets.tarkov.dev/618ab00ef236914bab050ca0-grid-image.webp",
    },
    {
      name: "Kalashnikov AK-104 7.62x39 assault rifle RPKT mod.1",
      description: "null",
      image:
        "https://assets.tarkov.dev/618ab04934aa2e47480fba2b-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle OSW",
      description: "null",
      image:
        "https://assets.tarkov.dev/618ab08919394179c84fa57c-grid-image.webp",
    },
    {
      name: "PP-19-01 Vityaz 9x19 submachine gun FSB",
      description: "null",
      image:
        "https://assets.tarkov.dev/618ab0c66bbeff39ad4acf2e-grid-image.webp",
    },
    {
      name: "Jack Pyke Hunting LLCS boonie hat",
      description:
        "The Jack Pyke Hunting LLCS camouflage boonie hat from the 3D Concealment Suit. Equipped with a masking net for the face.",
      image:
        "https://assets.tarkov.dev/618aef6d0a5a59657e5f55ee-grid-image.webp",
    },
    {
      name: "Geissele Super Precision 30mm ring scope mount",
      description:
        "A universal 30mm scope base mount for installation on Picatinny rails. Manufactured by Geissele.",
      image:
        "https://assets.tarkov.dev/618b9643526131765025ab35-grid-image.webp",
    },
    {
      name: "Geissele Super Precision top ring cap",
      description:
        "A regular top ring cap for the Geissele Super Precision mounts.",
      image:
        "https://assets.tarkov.dev/618b9671d14d6d5ab879c5ea-grid-image.webp",
    },
    {
      name: "Reptilia ROF-90 RMR mount for Geissele scope mounts",
      description:
        "The Reptilia ROF-90 mount allows installation of the Trijicon RMR reflex sight on the Geissele scope mount series. Replaces the standard Geissele top ring caps.",
      image:
        "https://assets.tarkov.dev/618b9682a3884f56c957ca78-grid-image.webp",
    },
    {
      name: "Vortex Razor HD Gen.2 1-6x24 30mm riflescope",
      description:
        "A tactical riflescope designed for quick target acquisition and maximum precision. Manufactured by Vortex Optics.",
      image:
        "https://assets.tarkov.dev/618ba27d9008e4636a67f61d-grid-image.webp",
    },
    {
      name: "Geissele Super Precision top ring cap (DDC)",
      description:
        "A regular top ring cap for the Geissele Super Precision mounts. Desert Dirt Color version.",
      image:
        "https://assets.tarkov.dev/618ba91477b82356f91ae0e8-grid-image.webp",
    },
    {
      name: "Reptilia ROF-90 RMR mount for Geissele scope mounts (DDC)",
      description:
        "The Reptilia ROF-90 mount allows installation of the Trijicon RMR reflex sight on the Geissele scope mount series. Replaces the standard Geissele top ring caps. Desert Dirt Color version.",
      image:
        "https://assets.tarkov.dev/618ba92152ecee1505530bd3-grid-image.webp",
    },
    {
      name: "Geissele Super Precision 30mm ring scope mount (DDC)",
      description:
        "A universal 30mm scope base mount for installation on Picatinny rails. Manufactured by Geissele. Desert Dirt Color version.",
      image:
        "https://assets.tarkov.dev/618bab21526131765025ab3f-grid-image.webp",
    },
    {
      name: "Gruppa 99 T20 backpack",
      description:
        "A backpack with a volume of 22 liters with an ergonomic harness for time-limited tasks. The backpack can be used for both operational tasks and urban carry. With proper packing, the inner volume of the backpack can be 25-27 liters. The minimalistic design and military functionality will be useful in urban environments. Manufactured by Gruppa 99.",
      image:
        "https://assets.tarkov.dev/618bb76513f5097c8d5aa2d5-grid-image.webp",
    },
    {
      name: "LBT-1476A 3Day Pack (Woodland)",
      description:
        "A medium-size 3-day backpack designed for both military and tourist use. Manufactured by London Bridge Trading.",
      image:
        "https://assets.tarkov.dev/618cfae774bb2d036a049e7c-grid-image.webp",
    },
    {
      name: "Model 7290 Flash Bang grenade",
      description:
        "Model 7290 is a standard distracting explosive device. Produces 175 dB and a powerful light flash.",
      image:
        "https://assets.tarkov.dev/619256e5f8af2c1a4e1f5d92-grid-image.webp",
    },
    {
      name: "HK Sturmgriff foregrip",
      description:
        "The Sturmgriff vertical foregrip. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/619386379fb0c665d5490dbe-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol",
      description:
        "The HK USP (Universelle Selbstladepistole - Universal Self-loading Pistol) pistol is a further replacement of the HK P7 series pistols. Internationally accepted as an accurate and ultra-reliable handgun. Using a modified Browning-type action with a special patented recoil reduction system, the USP recoil reduction system reduces recoil effects on pistol components and also lowers the recoil forces felt by the shooter. This particular variant is chambered in .45 ACP. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6193a720f8ee7e52e42109ed-grid-image.webp",
    },
    {
      name: "HK USP Tactical .45 ACP 12-round magazine",
      description:
        "A 12-round .45 ACP magazine for the special version of the USP45 pistol - USP45 Tactical.",
      image:
        "https://assets.tarkov.dev/6193d3149fb0c665d5490e32-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP 12-round magazine",
      description:
        "A standard-issue 12-round .45 ACP magazine for the USP45 pistol.",
      image:
        "https://assets.tarkov.dev/6193d338de3cdf1d2614a6fc-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol slide",
      description:
        "A standard-issue slide for the USP45 pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6193d382ed0429009f543e65-grid-image.webp",
    },
    {
      name: "HK USP hammer",
      description:
        "A standard-issue hammer for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6193d3be7c6c7b169525f0da-grid-image.webp",
    },
    {
      name: "HK USP trigger",
      description:
        "A standard-issue trigger for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6193d3cded0429009f543e6a-grid-image.webp",
    },
    {
      name: "HK USP slide lock",
      description:
        "A standard-issue slide lock lever for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6193d5d4f8ee7e52e4210a1b-grid-image.webp",
    },
    {
      name: "AR-15 HK Battle Grip Beavertail pistol grip (RAL 8000)",
      description:
        "The HK Battle Grip pistol grip with Beavertail can be installed on any weapon compatible with AR-15 grips. RAL 8000 color version.",
      image:
        "https://assets.tarkov.dev/6193dcd0f8ee7e52e4210a28-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle (FDE) CQC",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e108c1982475fa2a7f16-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle LB",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e18de693542ea37d11b3-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle (FDE)",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e226449ec003d9127fa6-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle (FDE) CQC",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e380069d61205d490dc7-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle LB",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e4a46bb904059c382295-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle (FDE)",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e4fae693542ea37d11c6-grid-image.webp",
    },
    {
      name: "HK G28 7.62x51 marksman rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e590069d61205d490dd8-grid-image.webp",
    },
    {
      name: "HK G28 7.62x51 marksman rifle Patrol",
      description: "null",
      image:
        "https://assets.tarkov.dev/6193e5f3aa34a3034236bdb3-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP barrel",
      description:
        "A standard-issue 112mm .45 ACP barrel for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194ef39de3cdf1d2614a768-grid-image.webp",
    },
    {
      name: "HK USP Tactical .45 ACP threaded barrel",
      description:
        "A 129mm threaded barrel for the special version of the USP pistol - USP Tactical, chambered in .45 ACP. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194efe07c6c7b169525f11b-grid-image.webp",
    },
    {
      name: "HK USP Expert .45 ACP barrel",
      description:
        "A 132mm barrel for the special version of the USP pistol - USP Expert, chambered in .45 ACP. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194eff92d2c397d6600348b-grid-image.webp",
    },
    {
      name: "HK USP Elite .45 ACP barrel",
      description:
        "A 153mm barrel for the special version of the USP pistol - USP Elite, chambered in .45 ACP. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f017ed0429009f543eaa-grid-image.webp",
    },
    {
      name: "HK USP Match .45 ACP barrel",
      description:
        "A 153mm barrel for the special version of the USP pistol - USP Match, chambered in .45 ACP. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f02d9bb3d20b0946d2f0-grid-image.webp",
    },
    {
      name: "HK USP Tactical thread protector",
      description:
        "A thread protector for the Tactical barrel for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f1f918a3974e5e7421e4-grid-image.webp",
    },
    {
      name: "HK USP rear sight",
      description:
        "A standard-issue rear sight for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f2912d2c397d6600348d-grid-image.webp",
    },
    {
      name: "HK USP Tactical rear sight",
      description:
        "A rear sight for the special version of the USP pistol - USP Tactical. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f2df645b5d229654ad77-grid-image.webp",
    },
    {
      name: "HK USP Tactical front sight",
      description:
        "A front sight for the special version of the USP pistol - USP Tactical. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f3286db0f2477964e67d-grid-image.webp",
    },
    {
      name: "HK USP front sight",
      description:
        "A standard-issue front sight for the USP pistol, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f35c18a3974e5e7421e6-grid-image.webp",
    },
    {
      name: "HK USP Tactical .45 ACP pistol slide",
      description:
        "A pistol slide for the special version of the USP45 pistol - USP45 Tactical, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f41f9fb0c665d5490e75-grid-image.webp",
    },
    {
      name: "HK USP Expert .45 ACP pistol slide",
      description:
        "A pistol slide for the special version of the USP45 pistol - USP45 Expert, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f5722d2c397d6600348f-grid-image.webp",
    },
    {
      name: "HK USP Match .45 ACP pistol slide",
      description:
        "A pistol slide for the special version of the USP45 pistol - USP45 Match, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f5a318a3974e5e7421eb-grid-image.webp",
    },
    {
      name: "HK USP Elite .45 ACP pistol slide",
      description:
        "A pistol slide for the special version of the USP45 pistol - USP45 Elite, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6194f5d418a3974e5e7421ef-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP Elite compensator",
      description:
        "The Elite compensator from the special USP Elite pistol kit will add additional weight to the front of your gun assisting to reduce vertical recoil bounce. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/619621a4de3cdf1d2614a7a7-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP Match compensator",
      description:
        "The Match compensator from the special USP Match pistol kit will add additional weight to the front of your gun assisting to reduce vertical recoil bounce. Features a mount for installation of additional tactical equipment. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/619624b26db0f2477964e6b0-grid-image.webp",
    },
    {
      name: "HK USP rail adapter",
      description:
        "An adapter for the USP pistol that allows the installation of additional tactical equipment. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6196255558ef8c428c287d1c-grid-image.webp",
    },
    {
      name: "5.45x39mm 7N40",
      description:
        "The newest legendary 5.45x39mm 7N40 cartridge with a 4.2 gram armor-piercing bullet with a pointed hardened carbon steel core over a lead base with a bimetallic jacket, in a steel case. Made as part of the Ratnik program together with 7N39 PPBS Igolnik. It is capable of piercing through basic and intermediate ballistic body protections, however, due to its design, it has a significant bounce probability on various surfaces.",
      image:
        "https://assets.tarkov.dev/61962b617c6c7b169525f168-grid-image.webp",
    },
    {
      name: "9x39mm PAB-9 gs",
      description:
        "A 9x39mm PAB-9 gs special cartridge with a 17.2 gram subsonic armor-piercing bullet with an extended hardened carbon steel core with a two-layer semi-jacket, a lead interior and a bimetallic exterior, in a steel case. The PAB-9 (Patrón Avtomátnyy Bronebóynyy - Armor-piercing Cartridge for Automatic rifles) is a modified version of the SP-6 cartridge. It has a heavier bullet and a higher muzzle velocity, making it capable of piercing through basic and intermediate ballistic body protections in addition of providing outstanding results against some specialized protection models, and having a considerable stopping power effect, at the cost of deterioration in its accuracy and having a high probability of bouncing off various surfaces. In the ranks of the special forces of the Russian Federation, it is not recommended for use due to the increased negative impact on the resource of the weapon.",
      image:
        "https://assets.tarkov.dev/61962d879bb3d20b0946d385-grid-image.webp",
    },
    {
      name: ".300 Blackout V-Max",
      description:
        "A .300 Blackout (7.62x35mm) V-Max cartridge with a 7.1 gram lead core polymer tipped expansive bullet with a copper metal jacket, in a brass case. This bullet features a ballistic tip that improves its accuracy and acts as a wedge on the lead core upon impact, allowing the bullet to expand and cause considerable damage on the target. Despite the peculiarity of its design, it is able to pierce basic ballistic body protections. Its design also allows it to be used in STANAG 5.56x45mm NATO magazines without any problem.",
      image:
        "https://assets.tarkov.dev/6196364158ef8c428c287d9f-grid-image.webp",
    },
    {
      name: ".300 Whisper",
      description:
        "The Whisper cartridge is a lightweight, hyper velocity design using an aluminum core and pre-stressed jacket. The aluminum core initiates the expansion slightly after contact, pressing back into the pre-stressed jacket and activating a violent, incapacitating energy transfer. The cartridge is ideal for close fire contacts of unarmored and/or lightly armored targets. Not to be mistaken for .300 Blackout, since Whisper was developed almost 20 years before it.",
      image:
        "https://assets.tarkov.dev/6196365d58ef8c428c287da1-grid-image.webp",
    },
    {
      name: ".300 Blackout M62 Tracer",
      description:
        "A .300 Blackout (7.62x35mm) M62 Tracer cartridge loaded with a 9.2 gram tracer bullet from a 7.62x51mm NATO M62 cartridge, composed of a lead-antimony alloy core with a bimetallic jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Red). Despite the bullet's own characteristics when used in a full-power cartridge, these are affected when transferred to an intermediate cartridge, still, the bullet continues to have capabilities to pierce basic ballistic body protections as well as some intermediate models. However, it has a high bounce probability off various surfaces. Its design also allows it to be used in STANAG 5.56x45mm NATO magazines without any issues.",
      image:
        "https://assets.tarkov.dev/619636be6db0f2477964e710-grid-image.webp",
    },
    {
      name: "HK USP Red Dot sight mount",
      description:
        "A rear sight mount allows the installation of Burris Fast Fire, Docter, and other similar reflex sights.",
      image:
        "https://assets.tarkov.dev/61963a852d2c397d660036ad-grid-image.webp",
    },
    {
      name: "FN SCAR PWS SRX rail extension",
      description:
        "The SRX rail extension for SCAR series rifles allows the installation of additional equipment. Manufactured by Primary Weapon Systems.",
      image:
        "https://assets.tarkov.dev/61965d9058ef8c428c287e0d-grid-image.webp",
    },
    {
      name: "FN SCAR Kinetic MREX 6.5 M-LOK rail",
      description:
        "The MREX 6.5 M-LOK rail for SCAR series rifles allows the installation of additional equipment. Manufactured by Kinetic.",
      image:
        "https://assets.tarkov.dev/619666f4af1f5202c57a952d-grid-image.webp",
    },
    {
      name: "SVDS Lynx Arms Hinge buffer tube adapter",
      description:
        "An adapter for installation of telescopic stock buffer tubes on the SVD sniper rifles and Rys carbines with folding stocks. Manufactured by Lynx Arms.",
      image:
        "https://assets.tarkov.dev/6197b229af1f5202c57a9bea-grid-image.webp",
    },
    {
      name: "MP-43-1C 12ga double-barrel shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/6197d1f3585c515a052ad88f-grid-image.webp",
    },
    {
      name: "MTs-255-12 12ga shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/6198e2ddef80673cae5d1c87-grid-image.webp",
    },
    {
      name: "AR-15 Aeroknox AX-15 10.5 inch M-LOK handguard",
      description:
        "The AX-15 10.5 inch handguard for AR-15 systems, equipped with an M-LOK interface for the installation of additional devices and accessories. Manufactured by Aeroknox.",
      image:
        "https://assets.tarkov.dev/619b5db699fb192e7430664f-grid-image.webp",
    },
    {
      name: "AKM/AK-74 Hera Arms CQR47 pistol grip/buttstock",
      description:
        "Designed for both the civilian market and military use. The CQR47 stock can be easily mounted in place of the standard attachment of the AK/AKM non-folding stock. Manufactured by Hera Arms.",
      image:
        "https://assets.tarkov.dev/619b69037b9de8162902673e-grid-image.webp",
    },
    {
      name: "Alpha armband",
      description:
        "An armband for veterans who are still here from the Alpha times.",
      image:
        "https://assets.tarkov.dev/619bc61e86e01e16f839a999-grid-image.webp",
    },
    {
      name: "BEAR armband",
      description: "An armband for hardened BEAR operators.",
      image:
        "https://assets.tarkov.dev/619bdd8886e01e16f839a99c-grid-image.webp",
    },
    {
      name: "DEADSKUL armband",
      description: "An armband from Fence, only for real collectors.",
      image:
        "https://assets.tarkov.dev/619bddc6c9546643a67df6ee-grid-image.webp",
    },
    {
      name: "Train Hard armband",
      description:
        "An armband from Jaeger. Fall 715 times, but rise 716 times.",
      image:
        "https://assets.tarkov.dev/619bddffc9546643a67df6f0-grid-image.webp",
    },
    {
      name: "Kiba Arms armband",
      description: "An armband for Kiba Arms employees.",
      image:
        "https://assets.tarkov.dev/619bde3dc9546643a67df6f2-grid-image.webp",
    },
    {
      name: "Labs armband",
      description: "An armband for TerraGroup Labs employees.",
      image:
        "https://assets.tarkov.dev/619bde7fc9546643a67df6f4-grid-image.webp",
    },
    {
      name: "RFARMY armband",
      description:
        "An armband with the Russian flag. Used by the contingent of the RF Armed Forces on the territory of the city of Tarkov and its suburbs.",
      image:
        "https://assets.tarkov.dev/619bdeb986e01e16f839a99e-grid-image.webp",
    },
    {
      name: "TerraGroup armband",
      description: "An armband for the TerraGroup security detail.",
      image:
        "https://assets.tarkov.dev/619bdef8c9546643a67df6f6-grid-image.webp",
    },
    {
      name: "UNTAR armband",
      description: "An armband for UN troops in Tarkov.",
      image:
        "https://assets.tarkov.dev/619bdf9cc9546643a67df6f8-grid-image.webp",
    },
    {
      name: "USEC armband",
      description: "An armband for hardcore USEC operators.",
      image:
        "https://assets.tarkov.dev/619bdfd4c9546643a67df6fa-grid-image.webp",
    },
    {
      name: "Military corrugated tube",
      description:
        "A military-issued corrugated tube for ventilation systems of military equipment or air purification systems.",
      image:
        "https://assets.tarkov.dev/619cbf476b8a1b37a54eebf8-grid-image.webp",
    },
    {
      name: "Injector case",
      description:
        "A case for storing injectors, stimulants, and other specialized medications.",
      image:
        "https://assets.tarkov.dev/619cbf7d23893217ec30b689-grid-image.webp",
    },
    {
      name: "Keycard holder case",
      description:
        "A special small case for storing plastic cards, including key cards.",
      image:
        "https://assets.tarkov.dev/619cbf9e0a7c3a1a2731940a-grid-image.webp",
    },
    {
      name: "Pipe grip wrench",
      description:
        "The pipe grip wrench is designed to perform operations on assembly and disassembly of a core or guide set, changing worn bits, screwing/unscrewing casing pipes.",
      image:
        "https://assets.tarkov.dev/619cbfccbedcde2f5b3f7bdd-grid-image.webp",
    },
    {
      name: "Bulbex cable cutter",
      description:
        "A high-quality lever cable cutting tool. It is used for the installation and laying of cable routes and power lines.",
      image:
        "https://assets.tarkov.dev/619cbfeb6b8a1b37a54eebfa-grid-image.webp",
    },
    {
      name: "Medical tools",
      description:
        "A set of various medical instruments required for surgeries.",
      image:
        "https://assets.tarkov.dev/619cc01e0a7c3a1a2731940c-grid-image.webp",
    },
    {
      name: "Gruppa 99 T20 backpack (Multicam)",
      description:
        "A backpack with a volume of 22 liters with an ergonomic harness for time-limited tasks. The backpack can be used for both operational tasks and urban carry. With proper packing, the inner volume of the backpack can be 25-27 liters. The minimalistic design and military functionality will be useful in urban environments. Manufactured by Gruppa 99. Multicam camouflage version.",
      image:
        "https://assets.tarkov.dev/619cf0335771dd3c390269ae-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/619d267f36b5be1f3236f9ba-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol Match",
      description: "null",
      image:
        "https://assets.tarkov.dev/619d26ccc7791e3af27ae3cd-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol Tactical",
      description: "null",
      image:
        "https://assets.tarkov.dev/619d270836b5be1f3236f9c5-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol Elite",
      description: "null",
      image:
        "https://assets.tarkov.dev/619d272b0f9e4513744e7699-grid-image.webp",
    },
    {
      name: "HK USP .45 ACP pistol Expert",
      description: "null",
      image:
        "https://assets.tarkov.dev/619d276ca4712949ff3159b9-grid-image.webp",
    },
    {
      name: "MTs-255-12 12ga choke",
      description:
        "A cylinder bore choke designed for MTs-255 12 gauge shotguns. Manufactured by TsKIB.",
      image:
        "https://assets.tarkov.dev/619d36da53b4d42ee724fae4-grid-image.webp",
    },
    {
      name: "FN SCAR-L 5.56x45 assault rifle (FDE) Contract Wars",
      description: "null",
      image:
        "https://assets.tarkov.dev/619e61e70459e93c12392ba7-grid-image.webp",
    },
    {
      name: "Chiappa Rhino plastic pistol grip",
      description:
        "A standard-issue plastic pistol grip for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f4ab2d25cbd424731fb95-grid-image.webp",
    },
    {
      name: "Chiappa Rhino wooden pistol grip",
      description:
        "A wooden pistol grip for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f4bffd25cbd424731fb97-grid-image.webp",
    },
    {
      name: "Chiappa Rhino rear sight",
      description:
        "A standard-issue rear sight for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f4cee4c58466fe1228435-grid-image.webp",
    },
    {
      name: "Chiappa Rhino front sight",
      description:
        "A standard-issue front sight for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f4d304c58466fe1228437-grid-image.webp",
    },
    {
      name: "Chiappa Rhino Green Fiber Optic rear sight",
      description:
        "A Green Fiber tritium rear sight for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f4f8c4c58466fe1228439-grid-image.webp",
    },
    {
      name: "Chiappa Rhino Green Fiber Optic front sight",
      description:
        "A Green Fiber tritium front sight for Rhino revolvers, manufactured by Chiappa Firearms.",
      image:
        "https://assets.tarkov.dev/619f52454c58466fe122843b-grid-image.webp",
    },
    {
      name: "Chiappa Rhino .357 6-round cylinder",
      description: "A 6-round .357 cylinder for Chiappa Rhino revolvers.",
      image:
        "https://assets.tarkov.dev/619f54a1d25cbd424731fb99-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 50DS .357 revolver",
      description:
        "The Rhino revolvers, manufactured by the Italian company Armi Chiappa, are distinguished by a revolutionary patented design and construction with an unusual barrel arrangement for revolvers opposite the lower drum chamber.",
      image:
        "https://assets.tarkov.dev/61a4c8884f95bc3b2c5dc96f-grid-image.webp",
    },
    {
      name: "Convenience store storage room key",
      description:
        "A key that opens a storage room inside the roadside convenience store.",
      image:
        "https://assets.tarkov.dev/61a64428a8c6aa1b795f0ba1-grid-image.webp",
    },
    {
      name: "Hillside house key",
      description: "A key that opens one of the old village houses.",
      image:
        "https://assets.tarkov.dev/61a6444b8c141d68246e2d2f-grid-image.webp",
    },
    {
      name: "Rogue USEC stash key",
      description:
        "A key to the stash, located somewhere at the Rogue USEC base.",
      image:
        "https://assets.tarkov.dev/61a64492ba05ef10d62adcc1-grid-image.webp",
    },
    {
      name: "Police truck cabin key",
      description:
        "A key that opens a cabin of the abandoned police transport truck.",
      image:
        "https://assets.tarkov.dev/61aa5aed32a4743c3453d319-grid-image.webp",
    },
    {
      name: "Merin car trunk key",
      description: "A key to a trunk of the Merin sports coupe car.",
      image:
        "https://assets.tarkov.dev/61aa5b518f5e7a39b41416e2-grid-image.webp",
    },
    {
      name: "USEC first safe key",
      description:
        "A key to the safe that belonged to one of the USEC operatives stationed in the roadside cottage area.",
      image:
        "https://assets.tarkov.dev/61aa5b7db225ac1ead7957c1-grid-image.webp",
    },
    {
      name: "USEC second safe key",
      description:
        "A key to the safe that belonged to one of the USEC operatives stationed in the roadside cottage area.",
      image:
        "https://assets.tarkov.dev/61aa5ba8018e9821b7368da9-grid-image.webp",
    },
    {
      name: "Rogue USEC workshop key",
      description:
        "A key to the workshop bunkhouse, located somewhere at the Rogue USEC base.",
      image:
        "https://assets.tarkov.dev/61aa81fcb225ac1ead7957c3-grid-image.webp",
    },
    {
      name: "Santa's bag",
      description:
        "A big and roomy Christmas bag, left behind by Santa himself.",
      image:
        "https://assets.tarkov.dev/61b9e1aaef9a1b5d6a79899a-grid-image.webp",
    },
    {
      name: "Eagle Industries MMAC plate carrier (Ranger Green)",
      description:
        "The Eagle Industries Multi-Mission Tactical Vest (MMAC) is a traditional profile vest offering modularity and scalability. The tactical vest is constructed of MIL-SPEC 500 denier nylon and is fully MOLLE/PALS compatible. It features padded shoulders with detachable retention loops, push-to-talk (PTT) attachment points at upper left and right chest and many other features.",
      image:
        "https://assets.tarkov.dev/61bc85697113f767765c7fe7-grid-image.webp",
    },
    {
      name: "NFM HJELM helmet",
      description:
        "The new-gen HJELM system applies new ideas for modularity of attachments and electronics without the extra weight and bulk of previous generations. Manufactured by NFM.",
      image:
        "https://assets.tarkov.dev/61bca7cda0eae612383adf57-grid-image.webp",
    },
    {
      name: "FirstSpear Strandhogg plate carrier (Ranger Green)",
      description:
        "Taking its name from an Old Norse Viking term for a lightning raid, Strandhögg was one of the first formalized battle tactics to use covert infiltrators in advance of an actual raiding operation. Strandhögg was a tactical game-changer in its time, just like the technological advances FirstSpear is bringing forward in this line of plate carriers.",
      image:
        "https://assets.tarkov.dev/61bcc89aef0f505f0c6cd0fc-grid-image.webp",
    },
    {
      name: "Metal spare parts",
      description:
        "A set of various metal technical parts, clamps and spacers. Extremely useful items for the repair of various mechanical devices and assemblies.",
      image:
        "https://assets.tarkov.dev/61bf7b6302b3924be92fa8c3-grid-image.webp",
    },
    {
      name: "Secured magnetic tape cassette",
      description:
        "The SMT special secured magnetic tape. Most likely contains important and valuable information. Magnetic media are still valued in information technology, including due to the high analog data reliability factor.",
      image:
        "https://assets.tarkov.dev/61bf7c024770ee6f9c6b8b53-grid-image.webp",
    },
    {
      name: "Sewing kit",
      description:
        "The simple Krasavchik sewing kit made to patch up clothes or create something new in the fashion world.",
      image:
        "https://assets.tarkov.dev/61bf83814088ec1a363d7097-grid-image.webp",
    },
    {
      name: "Gas welder safety goggles",
      description:
        "Gas welder safety goggles. Protects against bright flashes and sparks when welding.",
      image:
        "https://assets.tarkov.dev/61c18d83b00456371a66814b-grid-image.webp",
    },
    {
      name: "Leather cap",
      description:
        "A respected gentleman's headdress. Protects the head from slander.",
      image:
        "https://assets.tarkov.dev/61c18db6dfd64163ea78fbb4-grid-image.webp",
    },
    {
      name: "MP-18 7.62x54R 600mm barrel",
      description:
        "A standard factory-produced 600mm barrel with a front sight for MP-18 7.62x54R hunting rifles.",
      image:
        "https://assets.tarkov.dev/61f4012adfc9f01a816adda1-grid-image.webp",
    },
    {
      name: "MP-18 wooden stock",
      description:
        "A wooden stock for MP-18 hunting rifles. Manufactured by IzhMekh.",
      image:
        "https://assets.tarkov.dev/61f7b234ea4ab34f2f59c3ec-grid-image.webp",
    },
    {
      name: "MP-18 wooden handguard",
      description:
        "A wooden handguard for MP-18 hunting rifles. Manufactured by IzhMekh.",
      image:
        "https://assets.tarkov.dev/61f7b85367ddd414173fdb36-grid-image.webp",
    },
    {
      name: "MP-18 7.62x54R single-shot rifle",
      description:
        "MP-18 is the legendary Soviet single-barreled rifle. This gun behaves perfectly in all weather conditions, no breakdowns or failures have ever been identified.",
      image:
        "https://assets.tarkov.dev/61f7c9e189e6fb1a5e3ea78d-grid-image.webp",
    },
    {
      name: "MP-18 polymer handguard",
      description:
        "A polymer handguard for MP-18 hunting rifles. Manufactured by IzhMekh.",
      image:
        "https://assets.tarkov.dev/61f8024263dc1250e26eb029-grid-image.webp",
    },
    {
      name: "MP-18 polymer stock",
      description:
        "A polymer stock for MP-18 hunting rifles. Manufactured by IzhMekh.",
      image:
        "https://assets.tarkov.dev/61f803b8ced75b2e852e35f8-grid-image.webp",
    },
    {
      name: "MP-18 sight mount",
      description: "A RIS sight mount for the MP-18 rifles.",
      image:
        "https://assets.tarkov.dev/61f804acfcba9556ea304cb8-grid-image.webp",
    },
    {
      name: "SV-98 wooden stock",
      description:
        "A standard-issue wooden stock for the SV-98, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/61faa91878830f069b6b7967-grid-image.webp",
    },
    {
      name: "ZiD SP-81 26x75 signal pistol",
      description:
        "A smoothbore hand pistol designed for firing signal flare cartridges of various burning colors. Manufactured by V.A. Degtyarev Plant.",
      image:
        "https://assets.tarkov.dev/620109578d82e67e7911abf2-grid-image.webp",
    },
    {
      name: "RSP-30 reactive signal cartridge (Green)",
      description:
        "RSP-30 is a reactive signal cartridge for controlling units and maintaining their interaction. Multi-star rocket cartridges are used as flares.",
      image:
        "https://assets.tarkov.dev/6217726288ed9f0845317459-grid-image.webp",
    },
    {
      name: "ROP-30 reactive flare cartridge (White)",
      description:
        "ROP-30 is a reactive flare cartridge for lighting up low-visibility areas during night time.",
      image:
        "https://assets.tarkov.dev/62178be9d0050232da3485d9-grid-image.webp",
    },
    {
      name: "RSP-30 reactive signal cartridge (Red)",
      description:
        "RSP-30 is a reactive signal cartridge for controlling units and maintaining their interaction. Multi-star rocket cartridges are used as flares.",
      image:
        "https://assets.tarkov.dev/62178c4d4ecf221597654e3d-grid-image.webp",
    },
    {
      name: "HK G36 gas block",
      description:
        "A gas block designed for the G36 assault rifles, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622b327b267a1b13a44abea3-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 228mm barrel",
      description: "A 228mm 5.56x45 NATO barrel for the HK G36 assault rifle.",
      image:
        "https://assets.tarkov.dev/622b379bf9cfc87d675d2de5-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 318mm barrel",
      description: "A 318mm 5.56x45 NATO barrel for the HK G36 assault rifle.",
      image:
        "https://assets.tarkov.dev/622b3858034a3e17ad0b81f5-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 480mm barrel",
      description: "A 480mm 5.56x45 NATO barrel for the HK G36 assault rifle.",
      image:
        "https://assets.tarkov.dev/622b38c56762c718e457e246-grid-image.webp",
    },
    {
      name: "HK G36 bipod",
      description: "A standard-issue bipod for the HK G36 assault rifle.",
      image:
        "https://assets.tarkov.dev/622b397c9a3d4327e41843b6-grid-image.webp",
    },
    {
      name: "HK G36 sight mount",
      description:
        "A mount for sights and tactical attachments, installs on HK G36.",
      image:
        "https://assets.tarkov.dev/622b3c081b89c677a33bcda6-grid-image.webp",
    },
    {
      name: "HK G36 optic rail with flip-up sights",
      description:
        "An HK G36 optic rail that features flip-up front and rear sights, giving you more space to mount scopes and tactical attachments.",
      image:
        "https://assets.tarkov.dev/622b3d5cf9cfc87d675d2de9-grid-image.webp",
    },
    {
      name: "HK G36 Hensoldt HKV 3x carry handle",
      description:
        "The HKV carry handle with ZF optic sight and RV red dot carrier. The optical sight provides a threefold zoom and has a truly miniature 4 mm objective lens. Also includes open non-removable ironsights in the upper part of the carrying handle.",
      image:
        "https://assets.tarkov.dev/622b4d7df9cfc87d675d2ded-grid-image.webp",
    },
    {
      name: "HK G36 Hensoldt HKV ZF 1.5x carry handle",
      description:
        "The HKV carry handle with ZF optic sight and RV red dot carrier. The optical sight provides a 1.5x zoom and has a truly miniature 4 mm objective lens. Also includes open non-removable ironsights in the upper part of the carrying handle.",
      image:
        "https://assets.tarkov.dev/622b4f54dc8dcc0ba8742f85-grid-image.webp",
    },
    {
      name: "Hensoldt RV red dot sight",
      description:
        "Hensoldt RV is part of the HKV sighting system. RV has a light accumulator, which allows it to operate from an external light source. The red dot manually switches to AA battery power in the absence of a sufficient level of illumination.",
      image:
        "https://assets.tarkov.dev/622efbcb99f4ea1a4d6c9a15-grid-image.webp",
    },
    {
      name: "Hensoldt RIS top rail",
      description:
        "A sight mount manufactured by Hensoldt. Mounted on the HKV sighting system.",
      image:
        "https://assets.tarkov.dev/622efdf8ec80d870d349b4e5-grid-image.webp",
    },
    {
      name: "HK G36 magwell",
      description:
        "A standard-issue magwell for the G36 assault rifle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f02437762f55aaa68ac85-grid-image.webp",
    },
    {
      name: "HK G36 STANAG magwell",
      description:
        "A STANAG magwell for the G36 assault rifle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f039199f4ea1a4d6c9a17-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 flash hider",
      description:
        "A regular flash hider for the G36 assault rifle. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f07cfae33bc505b2c4dd5-grid-image.webp",
    },
    {
      name: "HK G36C 5.56x45 4-prong flash hider",
      description:
        "A four-prong flash hider for G36C manufactured by Heckler & Koch. Reduces muzzle flash.",
      image:
        "https://assets.tarkov.dev/622f0ee47762f55aaa68ac87-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 4-prong flash hider",
      description:
        "A four-prong flash hider for G36 manufactured by Heckler & Koch. Significantly reduces muzzle flash.",
      image:
        "https://assets.tarkov.dev/622f128cec80d870d349b4e8-grid-image.webp",
    },
    {
      name: "HK G36 polymer stock",
      description:
        "A polymer stock for the G36, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f140da5958f63c67f1735-grid-image.webp",
    },
    {
      name: "HK G36 KV adjustable stock",
      description:
        "A polymer adjustable 4-position stock for the G36, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f14e899892a7f9e08f6c5-grid-image.webp",
    },
    {
      name: "HK G36 hand stop",
      description:
        "A polymer hand stop for the G36. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/622f16a1a5958f63c67f1737-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle",
      description:
        "G36 is a 5.56x45mm assault rifle designed in the early 1990s by German company Heckler & Koch as a replacement for the heavier 7.62x51mm G3 battle rifle. It was accepted into service with the Bundeswehr in 1997, replacing the G3. Since then, it has also been a popular export, and the G36 has seen active service in military and police units in several countries, including Germany, Spain, and the United Kingdom.",
      image:
        "https://assets.tarkov.dev/623063e994fc3f7b302a9696-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 30-round magazine",
      description: "A 30-round 5.56x45 magazine designed for the HK G36.",
      image:
        "https://assets.tarkov.dev/62307b7b10d2321fa8741921-grid-image.webp",
    },
    {
      name: "HK G36 6-vent handguard",
      description:
        "A standard polymer 6-vent handguard with a heatshield for the G36 assault rifle. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6231654c71b5bc3baa1078e5-grid-image.webp",
    },
    {
      name: "HK G36 front sight",
      description:
        "A detachable front sight for the G36 assault rifle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/623166e08c43374ca1567195-grid-image.webp",
    },
    {
      name: "HK G36 rear sight",
      description:
        "A detachable rear sight for the G36 assault rifle, manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/6231670f0b8aa5472d060095-grid-image.webp",
    },
    {
      name: ".357 Magnum FMJ",
      description:
        "An American-made high-power .357 Magnum revolver cartridge manufactured by Smith & Wesson.",
      image:
        "https://assets.tarkov.dev/62330b3ed4dc74626d570b95-grid-image.webp",
    },
    {
      name: ".357 Magnum HP",
      description:
        "A .357 Magnum (9x33mm R) Hollow Point cartridge with a 9 gram bullet made of solid copper in a brass case; intended for hunting and home defense, produced by Smith & Wesson. The bullet in this cartridge has an outstanding stopping power effect thanks to its exceptional ability to expand upon impact, as well as being able to cause severe adverse effects on the target after impact. Likewise, its design increases its penetration capabilities against some models of basic ballistic body protection.",
      image:
        "https://assets.tarkov.dev/62330bfadc5883093563729b-grid-image.webp",
    },
    {
      name: ".357 Magnum JHP",
      description:
        "A .357 Magnum (9x33mm R) JHP cartridge with an 8 gram lead core hollow-point bullet with a bimetallic jacket in a steel case, produced by Smith & Wesson. The bullet in this cartridge is designed to expand shortly after impacting the target, allowing it to pierce through basic ballistic body protections and provide a considerable stopping power effect, as well as being able to cause severe adverse effects on the target after impact.",
      image:
        "https://assets.tarkov.dev/62330c18744e5e31df12f516-grid-image.webp",
    },
    {
      name: ".357 Magnum SP",
      description:
        "A .357 Magnum (9x33mm R) Soft Point cartridge with a 7 gram lead core bullet with a bimetallic semi-jacket in a steel case; intended for hunting and home defense, produced by Smith & Wesson. The bullet in this cartridge has an excellent expansion and impact energy that gives it a superior stopping power effect for its caliber, as well as being able to cause severe adverse effects on the target upon impact and provide recoil reduction, making it an excellent choice for hunting.",
      image:
        "https://assets.tarkov.dev/62330c40bdd19b369e1e53d1-grid-image.webp",
    },
    {
      name: "HK G36 2-vent handguard",
      description:
        "A standard polymer 2-vent handguard with a heatshield for the G36 assault rifle. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/62386b2adf47d66e835094b2-grid-image.webp",
    },
    {
      name: "HK G36 4-vent handguard",
      description:
        "A standard polymer 4-vent handguard with a heatshield for the G36 assault rifle. Manufactured by Heckler & Koch.",
      image:
        "https://assets.tarkov.dev/62386b7153757417e93a4e9f-grid-image.webp",
    },
    {
      name: "26x75mm flare cartridge (Green)",
      description: "A 26x75mm green flare cartridge for the SP-81 flare gun.",
      image:
        "https://assets.tarkov.dev/62389aaba63f32501b1b444f-grid-image.webp",
    },
    {
      name: "26x75mm flare cartridge (Red)",
      description: "A 26x75mm red flare cartridge for the SP-81 flare gun.",
      image:
        "https://assets.tarkov.dev/62389ba9a63f32501b1b4451-grid-image.webp",
    },
    {
      name: "26x75mm flare cartridge (White)",
      description:
        "A 26x75mm 7S15 (26 OP) night flare cartridge for the SP-81 flare gun.",
      image:
        "https://assets.tarkov.dev/62389bc9423ed1685422dc57-grid-image.webp",
    },
    {
      name: "26x75mm flare cartridge (Yellow)",
      description: "A 26x75mm yellow flare cartridge for the SP-81 flare gun.",
      image:
        "https://assets.tarkov.dev/62389be94d5d474bf712e709-grid-image.webp",
    },
    {
      name: "SV-98 CNC Guns OV-SV98 chassis",
      description:
        "The OV-SV98 chassis for the SV-98 sniper rifle, manufactured by CNC Guns.",
      image:
        "https://assets.tarkov.dev/623b2e9d11c3296b440d1638-grid-image.webp",
    },
    {
      name: "CNC Guns KeyMod 4 inch rail",
      description:
        "CNC Guns 4 inch rail for KeyMod systems allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/623c2f4242aee3103f1c44b7-grid-image.webp",
    },
    {
      name: "CNC Guns KeyMod 2 inch rail",
      description:
        "CNC Guns 2 inch rail for KeyMod systems allows installation of additional equipment on the handguards equipped with a standard KeyMod interface.",
      image:
        "https://assets.tarkov.dev/623c2f652febb22c2777d8d7-grid-image.webp",
    },
    {
      name: "AK FAB Defense AGR-47 pistol grip",
      description:
        "The AGR-47 pistol grip for AK-family automatic rifles and compatibles, manufactured by FAB Defense.",
      image:
        "https://assets.tarkov.dev/623c3be0484b5003161840dc-grid-image.webp",
    },
    {
      name: "SV-98 CNC Guns OV-SV98 KeyMod handguard",
      description:
        "CNC Guns Keymod System aircraft-grade aluminum handguard for the OV-SV98 stock with KeyMod slots for rail installation.",
      image:
        "https://assets.tarkov.dev/623c3c1f37b4b31470357737-grid-image.webp",
    },
    {
      name: "HK G36 bottom handguard rail",
      description:
        "A bottom rail for the G36 handguards, allows installation of various tactical foregrips.",
      image:
        "https://assets.tarkov.dev/62444cb99f47004c781903eb-grid-image.webp",
    },
    {
      name: "HK G36 side handguard rail",
      description:
        "A side rail for the G36 handguards, allows installation of additional tactical devices.",
      image:
        "https://assets.tarkov.dev/62444cd3674028188b052799-grid-image.webp",
    },
    {
      name: "RSP-30 reactive signal cartridge (Yellow)",
      description:
        "RSP-30 is a reactive signal cartridge for controlling units and maintaining their interaction. Multi-star rocket cartridges are used as flares.",
      image:
        "https://assets.tarkov.dev/624c0b3340357b5f566e8766-grid-image.webp",
    },
    {
      name: "CNC Guns OV-SV98 M12B stock",
      description: "A universal rear stock by CNC Guns for the OV-SV98 kit.",
      image:
        "https://assets.tarkov.dev/624c29ce09cd027dff2f8cd7-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 200DS 9x19 revolver",
      description:
        "The Rhino revolvers, manufactured by the Italian company Armi Chiappa, are distinguished by a revolutionary patented design and construction with an unusual barrel arrangement for revolvers opposite the lower drum chamber. The short-size pocket model with a 2 inch barrel chambered in 9x19mm.",
      image:
        "https://assets.tarkov.dev/624c2e8614da335f1e034d8c-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 9x19 6-round cylinder",
      description: "A 6-round 9x19 cylinder for Chiappa Rhino revolvers.",
      image:
        "https://assets.tarkov.dev/624c3074dbbd335e8e6becf3-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 50DS .357 revolver",
      description: "null",
      image:
        "https://assets.tarkov.dev/624d7a3691f0160c7324c3f4-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 50DS .357 revolver Tactical",
      description: "null",
      image:
        "https://assets.tarkov.dev/624d7ae691f0160c7324c402-grid-image.webp",
    },
    {
      name: "Chiappa Rhino 200DS 9x19 revolver",
      description: "null",
      image:
        "https://assets.tarkov.dev/624d7b2881a57812413b7954-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 dual-mode 12ga shotgun",
      description:
        "The Benelli M3 S90 is a dual-mode shotgun designed and manufactured by Benelli. The M3 is notable for allowing the user to choose between semi-automatic or pump-action operation. Benelli shotguns show excellent ballistic performance, and the finish and fine workmanship are the epitome of traditional Italian style.",
      image:
        "https://assets.tarkov.dev/6259b864ebedf17603599e88-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga 7-shell magazine",
      description: "A 7-shell capacity tube magazine for Benelli M3 S90 12ga.",
      image:
        "https://assets.tarkov.dev/6259bdcabd28e4721447a2aa-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga 500mm barrel",
      description: "A 500mm barrel for the Benelli M3 S90 12 gauge shotgun.",
      image:
        "https://assets.tarkov.dev/6259c2c1d714855d182bad85-grid-image.webp",
    },
    {
      name: "Benelli M3 telescopic stock",
      description:
        "An adjustable stock for M3 S90 shotguns, manufactured by Benelli.",
      image:
        "https://assets.tarkov.dev/6259c3387d6aab70bc23a18d-grid-image.webp",
    },
    {
      name: "Benelli M3 telescopic stock pistol grip",
      description:
        "A special pistol grip for M3 telescopic stocks manufactured by Benelli.",
      image:
        "https://assets.tarkov.dev/6259c3d8012d6678ec38eeb8-grid-image.webp",
    },
    {
      name: "Benelli M3 forend",
      description:
        "Benelli M3 black synthetic forend with firing mode switch is constructed from polymer with grooved checkering for an easy grip, manufactured by Benelli.",
      image:
        "https://assets.tarkov.dev/6259c4347d6aab70bc23a190-grid-image.webp",
    },
    {
      name: "Benelli M3 Mesa Tactical Urbino stock",
      description:
        "The Urbino fixed-length stock with a pistol grip for the Benelli M3 S90 shotgun manufactured by Mesa Tactical. ",
      image:
        "https://assets.tarkov.dev/625eb0faa6e3a82193267ad9-grid-image.webp",
    },
    {
      name: "Benelli M3 Ghost Ring rear sight",
      description:
        "A Ghost Ring type rear sight for M3 S90 shotguns, manufactured by Benelli.",
      image:
        "https://assets.tarkov.dev/625ebcef6f53af4aa66b44dc-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 charging handle",
      description:
        "A standard charging handle for Benelli M3 S90. Simplifies bolt handling.",
      image:
        "https://assets.tarkov.dev/625ec45bb14d7326ac20f572-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 upper receiver top rail",
      description:
        "The Benelli M3 top rail allows installation of additional equipment on the Benelli M3 S90.",
      image:
        "https://assets.tarkov.dev/625ed7c64d9b6612df732146-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga 5-shell magazine cap",
      description:
        "A 12ga 5-shell capacity tube magazine cap by Benelli, for M3 S90 shotguns.",
      image:
        "https://assets.tarkov.dev/625ff2ccb8c587128c1a01dd-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga Toni System 9-shell magazine",
      description:
        "A 12ga 9-shell capacity tube magazine by Toni System for Benelli M3 S90 shotguns.",
      image:
        "https://assets.tarkov.dev/625ff2eb9f5537057932257d-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga Toni System 11-shell magazine",
      description:
        "A 12ga 11-shell capacity tube magazine by Toni System for Benelli M3 S90 shotguns.",
      image:
        "https://assets.tarkov.dev/625ff3046d721f05d93bf2ee-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 12ga Toni System 13-shell magazine",
      description:
        "A 12ga 13-shell capacity tube magazine by Toni System for Benelli M3 S90 shotguns.",
      image:
        "https://assets.tarkov.dev/625ff31daaaa8c1130599f64-grid-image.webp",
    },
    {
      name: "KAC QDC 5.56x45 3-Prong Flash Eliminator",
      description:
        "Knight's Armament QDC 3-Prong 5.56x45 flash hider is an effective flash suppressor that also serves as a platform for attaching KAC QDC 556 sound suppressor. Can be Installed on AR-15 weapon systems.",
      image:
        "https://assets.tarkov.dev/626667e87379c44d557b7550-grid-image.webp",
    },
    {
      name: "KAC QDC 5.56x45 sound suppressor",
      description:
        "The Knight's Armament Company QDC 556 sound suppressor, designed for use with 5.56x45 caliber weapon systems. Can only be installed on the KAC QDC 3-Prong Flash Eliminator.",
      image:
        "https://assets.tarkov.dev/626673016f1edc06f30cf6d5-grid-image.webp",
    },
    {
      name: "AR-15 SureFire Warden 5.56x45 blast regulator",
      description:
        "The SureFire Warden blast regulator features a stainless steel body that enhances the overall appearance while protecting the inner parts from harm. This blast regulator prevents dirt, dust, debris, etc., from causing internal damage.",
      image:
        "https://assets.tarkov.dev/62669bccdb9ebb4daa44cd14-grid-image.webp",
    },
    {
      name: "Daniel Defense 25mm accessory ring mount",
      description:
        "A universal platform for installation of 25mm tactical accessories on Picatinny mounts, manufactured by Daniel Defense.",
      image:
        "https://assets.tarkov.dev/6267c6396b642f77f56f5c1c-grid-image.webp",
    },
    {
      name: "Magpul M-LOK Cantilever Mount",
      description:
        "The Magpul M-LOK Cantilever mount allows installation of additional equipment on the handguards with the standard M-LOK interface.",
      image:
        "https://assets.tarkov.dev/6269220d70b6c02e665f2635-grid-image.webp",
    },
    {
      name: "Magpul M-LOK Offset Light Mount",
      description:
        "Magpul M-LOK Offset Light/Optic mount allows installation of additional equipment on the handguards with the standard M-LOK interface.",
      image:
        "https://assets.tarkov.dev/6269545d0e57f218e4548ca2-grid-image.webp",
    },
    {
      name: "AR-15 Yankee Hill Phantom 5.56x45 flash hider",
      description:
        "The Phantom flash hider designed for the AR-15 platform, manufactured by Yankee Hill. Fits 5.56x45 barrels.",
      image:
        "https://assets.tarkov.dev/626a74340be03179a165e30c-grid-image.webp",
    },
    {
      name: "TOZ-106 FAB Defense GPCP cheek rest",
      description:
        "A stripped-down version of the FAB Defense GPCP cheek pad for the TOZ-106 folding stock.",
      image:
        "https://assets.tarkov.dev/626a8ae89e664a2e2a75f409-grid-image.webp",
    },
    {
      name: "M1911 Kiba Arms Geneburn custom side grips",
      description:
        "Custom grip panels for the M1911 pistol, manufactured by Kiba Arms.",
      image:
        "https://assets.tarkov.dev/626a9cb151cb5849f6002890-grid-image.webp",
    },
    {
      name: "SwampFox Trihawk Prism Scope 3x30",
      description:
        "A prismatic scope with 3x magnification manufactured by SwampFox.",
      image:
        "https://assets.tarkov.dev/626bb8532c923541184624b4-grid-image.webp",
    },
    {
      name: "Insight WMX200 tactical flashlight",
      description:
        "The WMX200 tactical flashlight manufactured by Insight Technologies, which combines a conventional flashlight and an IR searchlight.",
      image:
        "https://assets.tarkov.dev/626becf9582c3e319310b837-grid-image.webp",
    },
    {
      name: "Olight Baldr Pro tactical flashlight with laser",
      description:
        "The Baldr Pro flashlight by Olight is engineered to fit virtually any rail-equipped pistol or rifle. Combines a laser designator and a flashlight.",
      image:
        "https://assets.tarkov.dev/6272370ee4013c5d7e31f418-grid-image.webp",
    },
    {
      name: "Olight Baldr Pro tactical flashlight with laser (Tan)",
      description:
        "The Baldr Pro flashlight by Olight is engineered to fit virtually any rail-equipped pistol or rifle. Combines a laser designator and a flashlight. Tan version.",
      image:
        "https://assets.tarkov.dev/6272379924e29f06af4d5ecb-grid-image.webp",
    },
    {
      name: "Strike Industries Viper PDW stock",
      description:
        "The Strike Industries Viper PDW stock kit is a retractable stock installed on AR-15 weapon systems. Reduces the overall weapon size and recoil buffer.",
      image:
        "https://assets.tarkov.dev/627254cc9c563e6e442c398f-grid-image.webp",
    },
    {
      name: "AK 7.62x39 FAB Defense Ultimag 30R 30-round magazine",
      description:
        "A 30-round windowed polymer magazine for 7.62x39 AKs and compatible weapons, manufactured by FAB Defense. Can also be supplied with .366 TKM ammo for use with the corresponding caliber AK-compatible weapons.",
      image:
        "https://assets.tarkov.dev/6272874a6c47bd74f92e2087-grid-image.webp",
    },
    {
      name: "Milkor M32A1 MSGL 40mm grenade launcher",
      description:
        "M32A1 MSGL 40mm six-shot grenade launcher manufactured by Milkor USA. This grenade launcher uses the well-established principle of a revolver to achieve a high rate of accurate fire that can be quickly aimed at a target.",
      image:
        "https://assets.tarkov.dev/6275303a9f372d6ea97f9ec7-grid-image.webp",
    },
    {
      name: "M32A1 40mm cylinder",
      description:
        "A standard-issue cylinder for the M32A1 MSGL revolver grenade launcher.",
      image:
        "https://assets.tarkov.dev/627bce33f21bc425b06ab967-grid-image.webp",
    },
    {
      name: "Accuracy International AXMC .338 LM bolt-action sniper rifle",
      description:
        "The AXMC is the latest in a long and distinguished line of combat proven sniper rifles designed and manufactured by the British company Accuracy International. Chambered in .338 Lapua Magnum, but can be quickly converted to .300 Winchester Magnum and .308 Winchester by changing the barrel, bolt, and magazine/insert.",
      image:
        "https://assets.tarkov.dev/627e14b21713922ded6f2c15-grid-image.webp",
    },
    {
      name: "AI AXMC .338 LM bolt assembly",
      description:
        "A .338 Lapua Magnum bolt assembly for the Accuracy International AXMC sniper rifle.",
      image:
        "https://assets.tarkov.dev/62811cd7308cb521f87a8f99-grid-image.webp",
    },
    {
      name: "AI AXMC pistol grip",
      description:
        "A pistol grip for the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/62811e2510e26c1f344e6554-grid-image.webp",
    },
    {
      name: "AI AXMC GTAC AR-type pistol grip adapter",
      description:
        "An adapter that allows AR-type pistol grips installation on the AXMC sniper rifle.",
      image:
        "https://assets.tarkov.dev/62811e335631d45211793c95-grid-image.webp",
    },
    {
      name: "AI AX-50 34mm scope mount",
      description:
        "An universal 34mm scope base mount for installation on Picatinny rails, allows installation of various optics. Manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/62811f461d5df4475f46a332-grid-image.webp",
    },
    {
      name: "AI AXMC AX buttstock",
      description:
        "The AX buttstock for the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/62811f828193841aca4a45c3-grid-image.webp",
    },
    {
      name: "AI .338 LM Tactical Sound Moderator",
      description:
        "A sound moderator manufactured by Accuracy International, designed to fit .338 Lapua Magnum weapons.",
      image:
        "https://assets.tarkov.dev/62811fa609427b40ab14e765-grid-image.webp",
    },
    {
      name: "AI AXMC upper receiver",
      description:
        "An upper receiver for the AXMC sniper rifle manufactured by Accuracy International. Equipped with a mount for attaching additional devices.",
      image:
        "https://assets.tarkov.dev/62811fbf09427b40ab14e767-grid-image.webp",
    },
    {
      name: "AI AXMC .338 LM chassis",
      description:
        "The factory fitted .338 Lapua Magnum chassis for the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/6281204f308cb521f87a8f9b-grid-image.webp",
    },
    {
      name: "AI AXMC thread protection cap",
      description:
        "A threading protection cap for the AXMC barrel. Manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/628120621d5df4475f46a335-grid-image.webp",
    },
    {
      name: "AI .338 LM Tactical Muzzle Brake ",
      description:
        "A muzzle brake manufactured by Accuracy International for .338 LM (8.6x70). Reduces recoil and counters the muzzle rise.",
      image:
        "https://assets.tarkov.dev/62812081d23f207deb0ab216-grid-image.webp",
    },
    {
      name: "AI AXMC AX KeySlot 16 inch handguard",
      description:
        "The AX 16 inch handguard for the AXMC sniper rifle manufactured by Accuracy International equipped with a patented KeySlot interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/6281209662cba23f6c4d7a19-grid-image.webp",
    },
    {
      name: "AI AXMC AT X Top Rail ",
      description:
        "A top handguard rail for installation on the KeySlot interface for the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/628120c21d5df4475f46a337-grid-image.webp",
    },
    {
      name: "AI AXMC Adapter Kit short length rail",
      description:
        "A short rail for installation on the KeySlot interface on the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/628120d309427b40ab14e76d-grid-image.webp",
    },
    {
      name: "AI AXMC Adapter Kit medium length rail",
      description:
        "A medium length rail for installation on the KeySlot interface on the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/628120dd308cb521f87a8fa1-grid-image.webp",
    },
    {
      name: "AI AXMC .338 LM 10-round magazine",
      description:
        "A 10-round AXMC sniper rifle magazine by Accuracy International, for .338 Lapua Magnum cartridges.",
      image:
        "https://assets.tarkov.dev/628120fd5631d45211793c9f-grid-image.webp",
    },
    {
      name: "AI AXMC padded handguard grip",
      description:
        "A standard-issue padded grip for the AXMC sniper rifle, manufactured by Accuracy International.",
      image:
        "https://assets.tarkov.dev/6281212a09427b40ab14e770-grid-image.webp",
    },
    {
      name: "AI AXMC .338 LM 28 inch barrel",
      description:
        "A 28 inch (686mm) barrel for the AI AXMC chambered in .338 Lapua Magnum ammo.",
      image:
        "https://assets.tarkov.dev/628121434fa03b6b6c35dc6a-grid-image.webp",
    },
    {
      name: "Milkor M2A1 grenade launcher reflex sight",
      description:
        "The M2A1 sight was designed to compensate for the natural drift of the 40mm grenade. The built-in light sensor dims the reticle during daylight hours and allows for a brighter reticle during night time operations. The M2A1 reflex sight enhances the overall capabilities and usage of the MUSA MSGLs.",
      image:
        "https://assets.tarkov.dev/6284bd5f95250a29bc628a30-grid-image.webp",
    },
    {
      name: "Schmidt & Bender PM II 5-25x56 34mm riflescope",
      description:
        "The Schmidt & Bender PM II 5-25x56 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy.",
      image:
        "https://assets.tarkov.dev/62850c28da09541f43158cca-grid-image.webp",
    },
    {
      name: "Colt M45A1 .45 ACP pistol Mew-mew",
      description: "null",
      image:
        "https://assets.tarkov.dev/62874ff7a4a8431af4739d25-grid-image.webp",
    },
    {
      name: "Remington Model 870 12ga pump-action shotgun Hammer",
      description: "null",
      image:
        "https://assets.tarkov.dev/628750420828252c7a28b944-grid-image.webp",
    },
    {
      name: "SIG MCX .300 Blackout assault rifle Neptune Spear",
      description: "null",
      image:
        "https://assets.tarkov.dev/62875070bbbd995f3c41b225-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle Your-Ex",
      description: "null",
      image:
        "https://assets.tarkov.dev/62875103af0a053a6672c234-grid-image.webp",
    },
    {
      name: "Remington Model 700 7.62x51 bolt-action sniper rifle Mescalero",
      description: "null",
      image:
        "https://assets.tarkov.dev/628751e6af0a053a6672c261-grid-image.webp",
    },
    {
      name: "Remington R11 RSASS 7.62x51 marksman rifle Kiowa",
      description: "null",
      image:
        "https://assets.tarkov.dev/62875256bbbd995f3c41b253-grid-image.webp",
    },
    {
      name: "Knight's Armament Company SR-25 7.62x51 marksman rifle Ba-cho",
      description: "null",
      image:
        "https://assets.tarkov.dev/628753bba4a8431af4739d3b-grid-image.webp",
    },
    {
      name: "Glock 18C 9x19 machine pistol Lizzie",
      description: "null",
      image:
        "https://assets.tarkov.dev/628753ee0c9eb3366b5218d4-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol Jackie",
      description: "null",
      image:
        "https://assets.tarkov.dev/628754510c9eb3366b5218f8-grid-image.webp",
    },
    {
      name: "Desert Tech MDR 7.62x51 assault rifle Killtube",
      description: "null",
      image:
        "https://assets.tarkov.dev/6287549856af630b0f672cc4-grid-image.webp",
    },
    {
      name: "CMMG Mk47 Mutant 7.62x39 assault rifle Mace",
      description: "null",
      image:
        "https://assets.tarkov.dev/628755c60c9eb3366b521908-grid-image.webp",
    },
    {
      name: "FN SCAR-H 7.62x51 assault rifle (FDE) Face",
      description: "null",
      image:
        "https://assets.tarkov.dev/628755f166bb7d4a3c32bc45-grid-image.webp",
    },
    {
      name: "Rifle Dynamics RD-704 7.62x39 assault rifle",
      description:
        "Rifle Dynamics 704 assault rifle 7.62x39mm, an improved version of the AK system manufactured by Rifle Dynamics. The main difference from the standard AK: the design of the front part shifts the center of gravity closer to the receiver, which significantly improves the controllability of the weapon.",
      image:
        "https://assets.tarkov.dev/628a60ae6b1d481ff772e9c8-grid-image.webp",
    },
    {
      name: "AK TangoDown Battle Grip pistol grip",
      description:
        "A lightweight pistol grip for AK assault rifles, manufactured by TangoDown.",
      image:
        "https://assets.tarkov.dev/628a664bccaab13006640e47-grid-image.webp",
    },
    {
      name: "RD-704 dust cover",
      description:
        "A standard-issue dust cover for RD-704 automatic rifles, manufactured by Rifle Dynamics.",
      image:
        "https://assets.tarkov.dev/628a665a86cbd9750d2ff5e5-grid-image.webp",
    },
    {
      name: "AKM/AK-74 RD AK to M4 buffer tube adapter",
      description:
        "The AK to M4 Gen 2 adapter for installation of telescopic stock buffer tubes on AK series assault rifles with fixed stocks. Manufactured by Rifle Dynamics.",
      image:
        "https://assets.tarkov.dev/628a6678ccaab13006640e49-grid-image.webp",
    },
    {
      name: "AR-10 Dead Air Keymount 7.62x51 muzzle brake",
      description:
        "A muzzle brake by Dead Air Silencers designed for installation on AR-10-type systems and compatibles. The muzzle brake greatly reduces both recoil impulse and muzzle rise so that the user's weapon tracks straight back to keep them on target for faster shot-to-shot recovery.",
      image:
        "https://assets.tarkov.dev/628a66b41d5e41750e314f34-grid-image.webp",
    },
    {
      name: "AK RD Enhanced V2 Rear Sight",
      description:
        "The V2 Enhanced rear sight for AK automatic rifles, manufactured by Rifle Dynamics.",
      image:
        "https://assets.tarkov.dev/628a7b23b0f75035732dd565-grid-image.webp",
    },
    {
      name: "RD-704 SLR ION Lite + Railed Gas Tube handguard & gas tube combo",
      description:
        "A combined kit of the ION Lite 9 inch handguard with the Railed Gas Tube, can be installed on RD-704 assault rifles. Manufactured by SLR.",
      image:
        "https://assets.tarkov.dev/628a83c29179c324ed269508-grid-image.webp",
    },
    {
      name: "SB Tactical SBA3 brace",
      description:
        "The SBA3 Pistol Stabilizing Brace, designed and manufactured by SB Tactical. Installed on AR-15 weapon systems.",
      image:
        "https://assets.tarkov.dev/628a85ee6b1d481ff772e9d5-grid-image.webp",
    },
    {
      name: "SAG AK-545 5.45x39 carbine",
      description:
        "The AK-545 carbine by Sureshot Armament Group, based on modern AK platforms.",
      image:
        "https://assets.tarkov.dev/628b5638ad252a16da6dd245-grid-image.webp",
    },
    {
      name: "AK-545 SAG Mk. 2.1 gas tube",
      description:
        "The Mk. 2.1 gas tube for AK-545 carbines manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/628b8d83717774443b15e248-grid-image.webp",
    },
    {
      name: "AK-545 SAG Mk.3 handguard",
      description:
        "The Sureshot Armament Group Mk.3 handguard for AK-545, equipped with an M-LOK interface for the installation of additional devices and accessories and a picatinny rail on top for sights and tactical equipment mounting.",
      image:
        "https://assets.tarkov.dev/628b916469015a4e1711ed8d-grid-image.webp",
    },
    {
      name: "AK-545 SAG rear sight",
      description:
        "A standard rear sight for AK-545 carbines, manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/628b9471078f94059a4b9bfb-grid-image.webp",
    },
    {
      name: "S&S Precision PlateFrame plate carrier (Goons Edition)",
      description:
        "Minimalistic, lightweight, semi rigid plastic design provides a rigid mounting platform unlike any other plate carrier on the market. The frame gives the operator the capability to scale their load out up or down to meet operational requirements. The PlateFrame allows for easy attachment of accessory pouches and will accommodate standard MOLLE/PALS pouches.",
      image:
        "https://assets.tarkov.dev/628b9784bcf6e2659e09b8a2-grid-image.webp",
    },
    {
      name: "AK-545 SAG buffer tube",
      description:
        "Sureshot Armament Group Receiver Extension Buffer Tube, 6-position, Mil-Spec diameter, designed specifically for AK-545.",
      image:
        "https://assets.tarkov.dev/628b9a40717774443b15e9f2-grid-image.webp",
    },
    {
      name: "AK-545 SAG railed dust cover",
      description:
        "A standard-issue dust cover for AK-545 carbines, manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/628b9be6cff66b70c002b14c-grid-image.webp",
    },
    {
      name: "SAG AK-545 Short 5.45x39 carbine",
      description:
        "A shortened version of the Sureshot Armament Group AK-545 carbine based on modern AK platforms.",
      image:
        "https://assets.tarkov.dev/628b9c37a733087d0d7fe84b-grid-image.webp",
    },
    {
      name: "Crye Precision CPC plate carrier (Goons Edition)",
      description:
        "The CAGE PLATE CARRIER (CPC) offers unrivaled comfort and load support in a low profile plate carrier configuration. The system supports a range of different pouches. In this case, the configuration is made for conducting assault operations with increased mobility.",
      image:
        "https://assets.tarkov.dev/628b9c7d45122232a872358f-grid-image.webp",
    },
    {
      name: "LBT-1961A Load Bearing Chest Rig (Goons Edition)",
      description:
        "A tactical load-bearing system designed to carry magazines, grenades, and special equipment, while using low-profile body armor. Manufactured by London Bridge Trading. Special configuration by Birdeye, member of The Goons squad.",
      image:
        "https://assets.tarkov.dev/628baf0b967de16aab5a4f36-grid-image.webp",
    },
    {
      name: "Mystery Ranch NICE COMM 3 BVS frame system",
      description:
        "The NICE Frame special system for carrying oversized or heavy loads with an installed COMM 3 backpack for carrying radio systems. The COMM 3 main bay is designed for PRC117F or G, PRC119F, 152, or ASIP radios. The Hitchhiker and Daypack lid allows you to carry separate gear if needed. The modular NICE COMM 3 system is ready to adapt to changing tasks. An extremely rare thing, for which a real hunt is conducted in Tarkov.",
      image:
        "https://assets.tarkov.dev/628bc7fb408e2b2e9c0801b1-grid-image.webp",
    },
    {
      name: "AK TangoDown Battle Grip pistol grip (FDE)",
      description:
        "A lightweight pistol grip for AK assault rifles, manufactured by TangoDown. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/628c9ab845c59e5b80768a81-grid-image.webp",
    },
    {
      name: "Tasmanian Tiger SK plate carrier (Multicam Black)",
      description:
        "The ultra-light and skeletal TT Plate Carrier SK vest is made primarily from lightweight, thin and durable TPU-laminated Cordura nylon material with a claimed density of at least 700 denier. The design of the vest provides two lightweight covers for plates, adjustable shoulder straps and a light waist jumper. Equipped with a front panel for 4 magazines.",
      image:
        "https://assets.tarkov.dev/628cd624459354321c4b7fa2-grid-image.webp",
    },
    {
      name: "NPP KlASS Bagariy armored rig",
      description:
        "In the second millennium, the equipment of a soldier received serious changes in view of new threats and tasks. A better level of protection was required, so the Russian army needed a reliable and functional body armor. In the mid-2000s, the MVD, which was later reorganized into the Russian Guard, received Bagariy bulletproof vests. Bagariy was used both by ordinary soldiers of the internal troops, and in special forces. Actively was used by PMC BEAR as the main heavy body armor.",
      image:
        "https://assets.tarkov.dev/628d0618d1ba6e4fa07ce5a4-grid-image.webp",
    },
    {
      name: "ECLiPSE RBAV-AF plate carrier (Ranger Green)",
      description:
        "This new BAE ECLiPSE RBAV (Releasable Body Armor Vest, Air Force) variant is designed specifically for the Guardian Angel Weapon System (USAF PJ) and contains several new features not found in other versions. The current pouches configuration is assembled for an assault with additional protection.",
      image:
        "https://assets.tarkov.dev/628dc750b910320f4c27a732-grid-image.webp",
    },
    {
      name: "Gruppa 99 T30 backpack",
      description:
        "A thirty-liter assault backpack from Gruppa 99. A high-quality solution for conducting special raid operations.",
      image:
        "https://assets.tarkov.dev/628e1ffc83ec92260c0f437f-grid-image.webp",
    },
    {
      name: "Big Pipe's bandana",
      description:
        "Big Pipe's personal headgear. A black bandana with the Goons squad identification symbol.",
      image:
        "https://assets.tarkov.dev/628e4dd1f477aa12234918aa-grid-image.webp",
    },
    {
      name: "Peltor ComTac 4 Hybrid headset",
      description:
        "The ComTac IV Hybrid Communication Headset is designed to help reduce exposure to hazardous levels of noise, improve situational awareness and at the same time enable two-way radio communication in noisy environments. The headset's electronics are contained completely inside the headset housing, eliminating the need for a large, heavy external radio control box. The headband mechanically stabilizes the headset to help relieve issues of earplugs dislodging from cable snags and body movement. Designed for comfortable use with a ballistic helmet.",
      image:
        "https://assets.tarkov.dev/628e4e576d783146b124c64d-grid-image.webp",
    },
    {
      name: "Death Knight mask",
      description:
        "A unique mask of the commander of the Goons squad, former USEC operators who decided not to flee Tarkov, but to create their own order.",
      image:
        "https://assets.tarkov.dev/62963c18dbc8ab5f0d382d0b-grid-image.webp",
    },
    {
      name: "SAG AK-545 Short 5.45x39 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/629711787af74c3ff577951d-grid-image.webp",
    },
    {
      name: "SAG AK-545 5.45x39 carbine",
      description: "null",
      image:
        "https://assets.tarkov.dev/62971cf67af74c3ff577954b-grid-image.webp",
    },
    {
      name: "Rifle Dynamics RD-704 7.62x39 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/62972a7d91492d1a34152fbe-grid-image.webp",
    },
    {
      name: "Accuracy International AXMC .338 LM bolt-action sniper rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/62973e474bb5ab23071c2a70-grid-image.webp",
    },
    {
      name: "Milkor M32A1 MSGL 40mm grenade launcher",
      description: "null",
      image:
        "https://assets.tarkov.dev/629744d002667c48a467e9f9-grid-image.webp",
    },
    {
      name: "Benelli M3 Super 90 dual-mode 12ga shotgun",
      description: "null",
      image:
        "https://assets.tarkov.dev/62975de85c32d414f8797433-grid-image.webp",
    },
    {
      name: "SV-98 7.62x54R bolt-action sniper rifle OV",
      description: "null",
      image:
        "https://assets.tarkov.dev/629766c15c9e3c392f7c2db0-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/6297738b9f1b474e440c45b5-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle C",
      description: "null",
      image:
        "https://assets.tarkov.dev/629774055c32d414f8797477-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle E",
      description: "null",
      image:
        "https://assets.tarkov.dev/6297743d005016781231ab76-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle E2",
      description: "null",
      image:
        "https://assets.tarkov.dev/629774817d59e26b711f88be-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle K",
      description: "null",
      image:
        "https://assets.tarkov.dev/629774d35c32d414f8797486-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle KV1",
      description: "null",
      image:
        "https://assets.tarkov.dev/629775539f1b474e440c45c1-grid-image.webp",
    },
    {
      name: "HK G36 5.56x45 assault rifle KV2",
      description: "null",
      image:
        "https://assets.tarkov.dev/6297757b2aecda1b350da2a3-grid-image.webp",
    },
    {
      name: "MP-18 7.62x54R single-shot rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/629792f0fd6eda47d6466fe8-grid-image.webp",
    },
    {
      name: "Radar station commandant room key",
      description:
        "A key that opens the radar station commandant office room, located somewhere on the Lighthouse peninsula territory.",
      image:
        "https://assets.tarkov.dev/62987c658081af308d7558c6-grid-image.webp",
    },
    {
      name: "Conference room key",
      description:
        "A key that opens the conference room, located somewhere on the Lighthouse peninsula territory.",
      image:
        "https://assets.tarkov.dev/62987cb98081af308d7558c8-grid-image.webp",
    },
    {
      name: "Operating room key",
      description:
        "A key that opens the operating room with broadcasting equipment, located somewhere at the water treatment plant.",
      image:
        "https://assets.tarkov.dev/62987da96188c076bc0d8c51-grid-image.webp",
    },
    {
      name: "Shared bedroom marked key",
      description:
        "A key that opens the shared bedroom, located somewhere on the Lighthouse peninsula territory. It has some strange symbols scratched onto it.",
      image:
        "https://assets.tarkov.dev/62987dfc402c7f69bf010923-grid-image.webp",
    },
    {
      name: "Water treatment plant storage room key",
      description:
        "A key that opens the storage room, located somewhere at the water treatment plant.",
      image:
        "https://assets.tarkov.dev/62987e26a77ec735f90a2995-grid-image.webp",
    },
    {
      name: "BEAR Buddy plush toy",
      description:
        "The BEAR Buddy toy from a famous Tarkov resident - Annemunition. A very rare collectible!",
      image:
        "https://assets.tarkov.dev/62a08f4c4f842e1bd12d9d62-grid-image.webp",
    },
    {
      name: "Axel parrot figurine",
      description: "A figurine of Axel - the Lab Parrot.",
      image:
        "https://assets.tarkov.dev/62a091170b9d3c46de5b6cf2-grid-image.webp",
    },
    {
      name: "Press pass (issued for NoiceGuy)",
      description:
        "A press pass issued to the famous journalist and reporter of Tarkov - NoiceGuy.",
      image:
        "https://assets.tarkov.dev/62a09cb7a04c0c5c6e0a84f8-grid-image.webp",
    },
    {
      name: "Golden egg",
      description: "A golden egg with a Meyer engraving.",
      image:
        "https://assets.tarkov.dev/62a09cfe4f842e1bd12da3e4-grid-image.webp",
    },
    {
      name: "Gingy keychain",
      description: "A key ring with a four-leaf clover keychain.",
      image:
        "https://assets.tarkov.dev/62a09d3bcf4a99369e262447-grid-image.webp",
    },
    {
      name: "DRD body armor",
      description:
        "A light but durable and reliable body armor. Special edition from the one and only Dr. Disrespect. Ruthless!",
      image:
        "https://assets.tarkov.dev/62a09d79de7ac81993580530-grid-image.webp",
    },
    {
      name: "Baddie's red beard",
      description: "An artificial red beard from Baddie.",
      image:
        "https://assets.tarkov.dev/62a09dd4621468534a797ac7-grid-image.webp",
    },
    {
      name: "Glorious E lightweight armored mask",
      description:
        "The Glorious E face protection mask, reinforced with aramid fibers.",
      image:
        "https://assets.tarkov.dev/62a09e08de7ac81993580532-grid-image.webp",
    },
    {
      name: "JohnB Liquid DNB glasses",
      description:
        "Ultra-stylish glasses for electronic music lovers from John B.",
      image:
        "https://assets.tarkov.dev/62a09e410b9d3c46de5b6e78-grid-image.webp",
    },
    {
      name: "BakeEzy cook book",
      description:
        "BakeEzy, a book about delicious and healthy food, contains a lot of recipes for various dishes for a business feast as well as for the specific boozefest behind dirty garages. Bon Appetite!",
      image:
        "https://assets.tarkov.dev/62a09e73af34e73a266d932a-grid-image.webp",
    },
    {
      name: "Video cassette with the Cyborg Killer movie",
      description:
        "A VHS video cassette with a 1990s action movie about a killer cyborg from the future.",
      image:
        "https://assets.tarkov.dev/62a09e974f842e1bd12da3f0-grid-image.webp",
    },
    {
      name: "Missam forklift key",
      description:
        "A Missam forklift key. The name of the former owner is written on the ribbon.",
      image:
        "https://assets.tarkov.dev/62a09ec84f842e1bd12da3f2-grid-image.webp",
    },
    {
      name: "Can of white salt",
      description: "Simple edible salt needed for cooking.",
      image:
        "https://assets.tarkov.dev/62a09ee4cf4a99369e262453-grid-image.webp",
    },
    {
      name: "Bottle of Pevko Light beer",
      description:
        "Mmmmm... Pevko. The legendary drink of the streets of Tarkov.",
      image:
        "https://assets.tarkov.dev/62a09f32621468534a797acb-grid-image.webp",
    },
    {
      name: "Bottle of OLOLO Multivitamins",
      description:
        "A bottle with multivitamins. A demanded item in conditions of reduced immunity.",
      image:
        "https://assets.tarkov.dev/62a0a043cf4a99369e2624a5-grid-image.webp",
    },
    {
      name: "Awl",
      description: "An Awl. A necessary tool for making clothes.",
      image:
        "https://assets.tarkov.dev/62a0a098de7ac8199358053b-grid-image.webp",
    },
    {
      name: "Set of files Master",
      description:
        "A set of various small files. An indispensable set for every Russian gunsmith to perform the dark magic ritual called Napiling.",
      image:
        "https://assets.tarkov.dev/62a0a0bb621468534a797ad5-grid-image.webp",
    },
    {
      name: "Topographic survey maps",
      description:
        "A set of various maps of the area with applied schemes, which are of high value as reconnaissance materials.",
      image:
        "https://assets.tarkov.dev/62a0a124de7ac81993580542-grid-image.webp",
    },
    {
      name: "Military flash drive",
      description:
        "A military secure flash drive. A special data storage device that is not only encrypted, but also has increased mechanical security.",
      image:
        "https://assets.tarkov.dev/62a0a16d0b9d3c46de5b6e97-grid-image.webp",
    },
    {
      name: "Gruppa 99 T30 backpack (Multicam)",
      description:
        "A thirty-liter assault backpack from Gruppa 99. A high-quality solution for conducting special raid operations. Multicam camouflage version.",
      image:
        "https://assets.tarkov.dev/62a1b7fbc30cfa1d366af586-grid-image.webp",
    },
    {
      name: "Hockey player mask Captain",
      description: "Frightening mask from a children's cartoon about hockey.",
      image:
        "https://assets.tarkov.dev/62a5c2c98ec41a51b34739c0-grid-image.webp",
    },
    {
      name: "Hockey player mask Brawler",
      description: "Frightening mask from a children's cartoon about hockey.",
      image:
        "https://assets.tarkov.dev/62a5c333ec21e50cad3b5dc6-grid-image.webp",
    },
    {
      name: "Hockey player mask Quiet",
      description: "Frightening mask from a children's cartoon about hockey.",
      image:
        "https://assets.tarkov.dev/62a5c41e8ec41a51b34739c3-grid-image.webp",
    },
    {
      name: "Big Pipe's smoking pipe",
      description:
        "A smoking pipe owned by one of the commanders of the Rogues - Big Pipe.",
      image:
        "https://assets.tarkov.dev/62a61bbf8ec41a51b34758d2-grid-image.webp",
    },
    {
      name: "Oakley SI Batwolf glasses",
      description:
        "Special edition Oakley glasses. Oakley lenses have been identified and tested under extreme forces resulting in uncompromising protection against a wide variety of challenging conditions.",
      image:
        "https://assets.tarkov.dev/62a61c988ec41a51b34758d5-grid-image.webp",
    },
    {
      name: "Rogue USEC barrack key",
      description: "A key that opens one of the Rogues' makeshift barracks.",
      image:
        "https://assets.tarkov.dev/62a9cb937377a65d7b070cef-grid-image.webp",
    },
    {
      name: "SR-2M Veresk 9x21 submachine gun",
      description:
        "SR-2M Veresk is a compact submachine gun designed for a powerful 9x21mm armor-piercing cartridge by order of the FSB and the FSO of the Russian Federation. This submachine gun is part of a high-performance rifle complex designed for special forces. Equipped with a folding foregrip. Developed by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62e14904c2699c0ec93adc47-grid-image.webp",
    },
    {
      name: "SR-2M 9x21 30-round magazine",
      description:
        "A standard 30-round capacity  magazine for SR-2M Veresk, manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62e153bcdb1a5c41971c1b5b-grid-image.webp",
    },
    {
      name: "SR-2M polymer handguard",
      description:
        "A standard-issue SR-2M Veresk polymer handguard for burn protection. Manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62e15547db1a5c41971c1b5e-grid-image.webp",
    },
    {
      name: "SR-2M dust cover",
      description:
        "A standard-issue dust cover for SR-2M Veresk submachine gun, manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62e27a7865f0b1592a49e17b-grid-image.webp",
    },
    {
      name: "SR-2M Zenit B-17 mount",
      description:
        "The B-17 mount is designed to switch from SR-2M's Dovetail top rail standard to Picatinny rail. Manufactured by Zenit.",
      image:
        "https://assets.tarkov.dev/62e281349ecd3f493f6df954-grid-image.webp",
    },
    {
      name: "SR-2M folding stock",
      description:
        "A folding stock for SR-2M submachine gun, manufactured by TsNIItochmash. The buttstock has a spring-loaded butt plate which reduces the time it takes to shoulder the weapon.",
      image:
        "https://assets.tarkov.dev/62e292e7b6c0ee2f230cee00-grid-image.webp",
    },
    {
      name: "SR-2MP folding stock",
      description:
        "A folding stock for SR-2MP submachine gun, manufactured by TsNIItochmash. The buttstock has a spring-loaded butt plate which reduces the time it takes to shoulder the weapon.",
      image:
        "https://assets.tarkov.dev/62e2969582ebf260c20539c2-grid-image.webp",
    },
    {
      name: "SR-2M 9x21 sound suppressor (SV-1381)",
      description:
        "A silencer for the SR-2M Veresk 9x21 submachine gun, manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62e2a7138e1ac9380579c122-grid-image.webp",
    },
    {
      name: "SR-2M 9x21 hand stopper",
      description:
        "A hand stopper for the barrel of the SR-2M Veresk 9x21 submachine gun. Manufactured by TsNIItochmash. Protects the shooter's hand from moving forward and getting possible burns by powder gases.",
      image:
        "https://assets.tarkov.dev/62e2a754b6c0ee2f230cee0f-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 5.56x45 assault rifle",
      description:
        "Steyr AUG A1 is a 5.56x45 bullpup assault rifle, developed by the Austrian company Steyr-Daimler-Puch. AUG is known for good ergonomics, decent accuracy, low recoil and sufficient reliability. The rifle also stands out for its futuristic design.",
      image:
        "https://assets.tarkov.dev/62e7c4fba689e8c9c50dfc38-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 receiver",
      description:
        "A low-profile receiver with built-in tactical equipment rail for AUG A3. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62e7c72df68e7a0676050c77-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 5.56x45 20 inch barrel",
      description:
        "A barrel for Steyr AUG A1 designed for 5.56x45 NATO ammo, 20 inches (508mm) long.",
      image:
        "https://assets.tarkov.dev/62e7c7f3c34ea971710c32fc-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 charging handle",
      description:
        "A standard charging handle for AUG A1. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62e7c880f68e7a0676050c7c-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 M1 high sight mount",
      description:
        "A high sight mount for AUG A3 M1. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62e7c8f91cd3fde4d503d690-grid-image.webp",
    },
    {
      name: "Steyr AUG 5.56x45 30-round magazine",
      description:
        "A 30-round polymer Steyr AUG magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/62e7c98b550c8218d602cbb4-grid-image.webp",
    },
    {
      name: "GP-25 Kostyor 40mm underbarrel grenade launcher",
      description:
        "An underbarrel grenade launcher for 40mm VOG-25 grenades, designed for installation on all full length AK automatic rifles.",
      image:
        "https://assets.tarkov.dev/62e7e7bbe6da9612f743f1e0-grid-image.webp",
    },
    {
      name: "Digital secure DSP radio transmitter",
      description:
        "A special digital radio transmitter for user status identification system.",
      image:
        "https://assets.tarkov.dev/62e910aaf957f2915e0a5e36-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 STG77 1.5x optic sight",
      description:
        "STG77 is a standard optic sight for the AUG A1. The sight provides a 1.5x zoom and has an open non-removable ironsights in the upper part of the optics. Manufactured by Swarovski Optik.",
      image:
        "https://assets.tarkov.dev/62ea7c793043d74a0306e19f-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 M1 low sight mount",
      description:
        "A low-profile sight mount for AUG A3 M1. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62ebba1fb658e07ef9082b5a-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 charging handle",
      description:
        "A standard charging handle for AUG A3. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62ebbc53e3c1e1ec7c02c44f-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 M1 1.5x optic sight",
      description:
        "A standard optic sight for the AUG A3 M1 assault rifle. The sight provides a 1.5x zoom and has mounts for red dot sights and tactical equipment. Manufactured by Steyr-Daimler-Puch.",
      image:
        "https://assets.tarkov.dev/62ebd290c427473eff0baafb-grid-image.webp",
    },
    {
      name: "SR-2M short side rail",
      description:
        "A short side rail for SR-2M Veresk that allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/62ed189fb3608410ef5a2bfc-grid-image.webp",
    },
    {
      name: "SR-2M side rail",
      description:
        "A side rail for SR-2M Veresk that allows installation of additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/62ed1921b3608410ef5a2c04-grid-image.webp",
    },
    {
      name: "SR-2M KP-SR2 reflex sight",
      description:
        "The KP-SR2 reflex sight is designed to increase the efficiency of firing SR-2M Veresk submachine gun. The sight facilitates the process of aiming a weapon at a target, especially in low light conditions, and allows you to increase combat efficiency. Manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62ff9920fe938a24c90c10d2-grid-image.webp",
    },
    {
      name: "KP-SR2 sight shade",
      description:
        "A sight shade for the KP-SR2 reflex sight. Protects the lens against mechanical impacts and suppresses flaring. Manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/62ff9faffe938a24c90c10df-grid-image.webp",
    },
    {
      name: "Glock 19X 9x19 pistol slide",
      description:
        "A standard-issue slide for the Glock 19X 9x19 pistol. Slide surfaces are treated with an advanced nPVD coating that protects the steel from corrosion, chemical attack and harsh environmental conditions.",
      image:
        "https://assets.tarkov.dev/63075cc5962d0247b029dc2a-grid-image.webp",
    },
    {
      name: "Glock 19X 9x19 barrel",
      description:
        "A standard barrel for the Glock 19X 9x19 pistol. The barrel is treated with an nDLC coating that protects against corrosion and scratches.",
      image:
        "https://assets.tarkov.dev/630764fea987397c0816d219-grid-image.webp",
    },
    {
      name: "Glock 19X front sight",
      description: "A standard-issue front sight for the Glock 19X pistol.",
      image:
        "https://assets.tarkov.dev/630765777d50ff5e8a1ea718-grid-image.webp",
    },
    {
      name: "Glock 19X rear sight",
      description: "A standard-issue rear sight for the Glock 19X pistol.",
      image:
        "https://assets.tarkov.dev/630765cb962d0247b029dc45-grid-image.webp",
    },
    {
      name: "Glock 9x19 19-round magazine (Coyote)",
      description:
        "A 19-round 9x19 magazine for Glock 19X pistols. Coyote version.",
      image:
        "https://assets.tarkov.dev/63076701a987397c0816d21b-grid-image.webp",
    },
    {
      name: "Glock 9x19 Big Stick 31-round magazine (Coyote)",
      description:
        "A factory-produced 31-round 9x19 magazine for Glock pistols. Coyote version.",
      image:
        "https://assets.tarkov.dev/630767c37d50ff5e8a1ea71a-grid-image.webp",
    },
    {
      name: "Glock 9x19 Big Stick 24-round magazine (Coyote)",
      description:
        "A factory-produced 24-round 9x19 magazine for Glock pistols. Coyote version.",
      image:
        "https://assets.tarkov.dev/630769c4962d0247b029dc60-grid-image.webp",
    },
    {
      name: "Glock 19X 9x19 pistol",
      description:
        "The Glock 19X is an Austrian pistol based on the Glock 19 Modular Handgun System developed by Glock. Glock 19X is a hybrid of the Glock 17 and Glock 19 models: bolt and barrel of the 19th model, and the long handle of the very first 17th model. Also, the Glock 19X is devoid of sub-finger recesses, but has a loop for a safety cord. The gun is made in the Coyote color.",
      image:
        "https://assets.tarkov.dev/63088377b5cd696784087147-grid-image.webp",
    },
    {
      name: "Steyr AUG 5.56x45 10-round magazine",
      description:
        "A 10-round polymer Steyr AUG magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/630e1adbbd357927e4007c09-grid-image.webp",
    },
    {
      name: "Steyr AUG 5.56x45 42-round magazine",
      description:
        "A 42-round polymer Steyr AUG magazine, for 5.56x45 ammunition.",
      image:
        "https://assets.tarkov.dev/630e295c984633f1fb0e7c30-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 16 inch barrel",
      description:
        "A barrel for Steyr AUG A3 designed for 5.56x45 NATO ammo, 16 inches (417mm) long.",
      image:
        "https://assets.tarkov.dev/630e39c3bd357927e4007c15-grid-image.webp",
    },
    {
      name: "Steyr AUG RAT Worx 5.56x45 muzzle device adapter",
      description:
        "The RAT Worx adapter allows to install various AR-15 muzzle devices on 5.56x45 AUG rifles. Manufactured by Research And Testing Worx.",
      image:
        "https://assets.tarkov.dev/630f27f04f3f6281050b94d7-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 5.56x45 closed flash hider",
      description:
        "A standard AUG A1 flash hider, manufactured by Steyr-Daimler-Puch. Effectively suppresses muzzle flash. Fits AUG 5.56x45 caliber barrels.",
      image:
        "https://assets.tarkov.dev/630f2872911356c17d06abc5-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 closed flash hider",
      description:
        "A standard AUG A3 flash hider, manufactured by Steyr-Daimler-Puch. Effectively suppresses muzzle flash. Fits AUG 5.56x45 caliber barrels.",
      image:
        "https://assets.tarkov.dev/630f28f0cadb1fe05e06f004-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 muzzle brake",
      description:
        "A muzzle brake designed specifically for the AUG A3, manufactured by Steyr-Daimler-Puch. Significantly reduces recoil and barrel rise. Fits AUG 5.56x45 caliber barrels.",
      image:
        "https://assets.tarkov.dev/630f291b9f66a28b37094bb8-grid-image.webp",
    },
    {
      name: "Steyr AUG Relfex T4AUG Ranger 5.56x45 sound suppressor",
      description:
        "The T4AUG Ranger silencer is designed for 20-inch AUG 5.56x45 barrel. T4AUG can be installed with standard AUG A1 and AUG A3 muzzle. Manufactured by Reflex Suppressors.",
      image:
        "https://assets.tarkov.dev/630f2982cdb9e392db0cbcc7-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 assault rifle",
      description:
        "Steyr AUG A3 is a 5.56x45 bullpup assault rifle, developed by the Austrian company Steyr-Daimler-Puch. AUG is known for good ergonomics, decent accuracy, low recoil and sufficient reliability. The rifle also stands out for its futuristic design. The A3 version features a bolt-catch button.",
      image:
        "https://assets.tarkov.dev/63171672192e68c5460cebc5-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 5.56x45 16 inch barrel",
      description:
        "A barrel for Steyr AUG A1 designed for 5.56x45 NATO ammo, 16 inches (417mm) long.",
      image:
        "https://assets.tarkov.dev/6333f05d1bc0e6217a0e9d34-grid-image.webp",
    },
    {
      name: "SR-2M 9x21 20-round magazine",
      description:
        "A standard 20-round capacity magazine for SR-2M Veresk, manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/633a98eab8b0506e48497c1a-grid-image.webp",
    },
    {
      name: "RSh-12 12.7x55 5-round cylinder",
      description: "A 5-round 12.7x55 cylinder for the RSh-12 revolver.",
      image:
        "https://assets.tarkov.dev/633ec6ee025b096d320a3b15-grid-image.webp",
    },
    {
      name: "RSh-12 12.7x55 revolver",
      description:
        "The powerful RSh-12 (Revolver Shturmovoy 12 - Assault Revolver 12) revolver, manufactured by KBP Instrument Design Bureau, designed for use by special forces. Despite the powerful 12.7x55 mm caliber, RSh-12 has less recoil than many other large-caliber revolvers and pistols, since the shot is fired from the bottom chamber of the cylinder.",
      image:
        "https://assets.tarkov.dev/633ec7c2a6918cb895019c6c-grid-image.webp",
    },
    {
      name: "RSh-12 pistol grip",
      description:
        "A standard-issue plastic pistol grip for the RSh-12 revolver, manufactured by the KBP Instrument Design Bureau.",
      image:
        "https://assets.tarkov.dev/633ec8e4025b096d320a3b1e-grid-image.webp",
    },
    {
      name: "Pumpkin with sweets",
      description:
        "Looks like someone in Tarkov decided to have some fun and scattered these pumpkins all over the place. There could definitely be something inside them.",
      image:
        "https://assets.tarkov.dev/634959225289190e5e773b3b-grid-image.webp",
    },
    {
      name: "Steyr AUG vertical foregrip",
      description: "A vertical foregrip for the Steyr AUG assault rifle.",
      image:
        "https://assets.tarkov.dev/634e61b0767cb15c4601a877-grid-image.webp",
    },
    {
      name: "Steyr AUG Ase Utra S Series SL7i 5.56x45 sound suppressor",
      description:
        "The S Series SL7i sound suppressor for Steyr AUG 5.56x45 rifles. Manufactured by Ase Utra.",
      image:
        "https://assets.tarkov.dev/634eba08f69c710e0108d386-grid-image.webp",
    },
    {
      name: "Spooky skull mask",
      description:
        "A really scary skull mask, worn only by the spookiest operators.",
      image:
        "https://assets.tarkov.dev/635267ab3c89e2112001f826-grid-image.webp",
    },
    {
      name: "26x75mm distress signal flare (poison green)",
      description:
        "Signal cartridge caliber 26x75mm for SP-81. The unusual color indicates that the cartridge is used for some special signals to friends. It makes sense to try to use it to save lives in the presence of scavs or bosses.",
      image:
        "https://assets.tarkov.dev/635267f063651329f75a4ee8-grid-image.webp",
    },
    {
      name: "M203 40mm underbarrel grenade launcher",
      description:
        "A single-shot 40mm underbarrel grenade launcher, designed for installation on M16 and M4 assault rifles.",
      image:
        "https://assets.tarkov.dev/6357c98711fb55120211f7e1-grid-image.webp",
    },
    {
      name: "Salty Dog beef sausage",
      description:
        "The legendary and rare smoked sausage Salty Dog. No, it's not made of dogs, it's just the name.",
      image:
        "https://assets.tarkov.dev/635a758bfefc88a93f021b8a-grid-image.webp",
    },
    {
      name: "Azimut SS Khamelion chest harness (Olive)",
      description:
        "A simple harness system with non-removable pouches designed for grenades and SVD sniper rifle magazines. Manufactured by Azimut SpetsSnaryazheniye. Olive version.",
      image:
        "https://assets.tarkov.dev/63611865ba5b90db0c0399d1-grid-image.webp",
    },
    {
      name: "Zryachiy's balaclava",
      description:
        "An intimidating face mask with a skull print, worn by Zryachiy.",
      image:
        "https://assets.tarkov.dev/63626d904aa74b8fe30ab426-grid-image.webp",
    },
    {
      name: "Zryachiy's balaclava (folded)",
      description:
        "An intimidating face mask with a skull print, worn by Zryachiy. Folded to be worn as a hat.",
      image:
        "https://assets.tarkov.dev/636270263f2495c26f00b007-grid-image.webp",
    },
    {
      name: "Hexatac HPC Plate Carrier (Multicam Black)",
      description:
        "A plate carrier by Hexatac. A minimalistic version designed to be used with chest rigs. Multicam Black version.",
      image:
        "https://assets.tarkov.dev/63737f448b28897f2802b874-grid-image.webp",
    },
    {
      name: "Obdolbos 2 cocktail injector",
      description:
        "A syringe with a homemade drug, developed by Sanitar. A new version of the old classic. Looks like TerraGroup Labs' experiments did not end with the closure of TerraGroup Labs itself.",
      image:
        "https://assets.tarkov.dev/637b60c3b7afa97bfc3d7001-grid-image.webp",
    },
    {
      name: "SJ12 TGLabs combat stimulant injector",
      description:
        "Developed for the operatives of special units. Slows down some functions of the body and they temporarily start working with energy regeneration. The drug forces the release of vasopressin in the hypothalamus, which leads to a change in the work of the adrenal glands, lowers body temperature and increases perception. After the end of the action, there is usually a jump in temperature to 40-42 degrees as a compensation for the incorrect functioning of the body systems.",
      image:
        "https://assets.tarkov.dev/637b612fb7afa97bfc3d7005-grid-image.webp",
    },
    {
      name: "PNB (Product 16) stimulant injector",
      description:
        "A combat stimulant. Developed by TerraGroup Labs, labeled PNB. Allows a short-term activation of the inner muscles, bringing them into a state of hypertonicity, which in turn reduces the received damage. At the same time there is an active synthesis of proteins for accelerated tissue regeneration. Used for the expansion of the organism abilities at the key moment of the combat. Allowed for use by Special Forces. Has some side effects.",
      image:
        "https://assets.tarkov.dev/637b6179104668754b72f8f5-grid-image.webp",
    },
    {
      name: "Trimadol stimulant injector",
      description:
        "An opioid synthetic analgesic developed for special forces operatives. It has a central and spinal cord action (promotes opening of K+ and Ca2+ channels, causes hyperpolarization of membranes and inhibits conduction of pain impulses). In addition to the analgesic effect, it increases combat characteristics. Overdose leads to exhaustion of the body after the effects wear off.",
      image:
        "https://assets.tarkov.dev/637b620db7afa97bfc3d7009-grid-image.webp",
    },
    {
      name: "Perfotoran (Blue Blood) stimulant injector",
      description:
        "A blood substitute with the function of oxygen transfer, used as a powerful antidote capable of relieving toxins, poisons, and radiation damage. It was developed by Soviet scientists in the 1980s. It is a submicron emulsion based on PFO compounds. Once in the blood, it temporarily speeds up the metabolism and regenerates tissues. Negatively affects health in case of overdose or rejection.",
      image:
        "https://assets.tarkov.dev/637b6251104668754b72f8f9-grid-image.webp",
    },
    {
      name: "SR-2M pistol grip",
      description:
        "A standard-issue pistol grip for SR-2M Veresk. Manufactured by TsNIItochmash.",
      image:
        "https://assets.tarkov.dev/637b9c37b7e3bc41b21ce71a-grid-image.webp",
    },
    {
      name: "SR-2M polymer handguard (Black)",
      description:
        "A standard-issue SR-2M Veresk polymer handguard for burn protection. Manufactured by TsNIItochmash. Black version.",
      image:
        "https://assets.tarkov.dev/637ba19df7ca6372bf2613d7-grid-image.webp",
    },
    {
      name: "SR-2M pistol grip (Black)",
      description:
        "A standard-issue pistol grip for SR-2M Veresk. Manufactured by TsNIItochmash. Black version.",
      image:
        "https://assets.tarkov.dev/637ba29bf7ca6372bf2613db-grid-image.webp",
    },
    {
      name: "AR-15 Colt M4 Carbine Length lower handguard",
      description:
        "A carbine length lower handguard part manufactured by Colt, a standard-issue handguard for the M4A1 assault rifles.",
      image:
        "https://assets.tarkov.dev/637f57a68d137b27f70c4968-grid-image.webp",
    },
    {
      name: "AR-15 KAC RIS lower handguard",
      description:
        "Knight's Armament Company RIS lower handguard for the M4A1 carbine.",
      image:
        "https://assets.tarkov.dev/637f57b78d137b27f70c496a-grid-image.webp",
    },
    {
      name: "AR-15 KAC URX 3.1 10.75 inch lower handguard",
      description:
        "The Knight's Armament URX 3.1 lower handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/637f57c532b66e7e320a6676-grid-image.webp",
    },
    {
      name: "AR-15 KAC URX 3 8 inch lower handguard",
      description:
        "The Knight's Armament URX 3 lower handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/637f57d2f5ef8c33840d36c4-grid-image.webp",
    },
    {
      name: "AR-15 Strike Industries Viper carbine length M-LOK lower handguard",
      description:
        "The Strike Industries Viper lower handguard for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories.",
      image:
        "https://assets.tarkov.dev/637f589af5ef8c33840d36d3-grid-image.webp",
    },
    {
      name: "AR-15 Griffin Armament Gate-LOK Hammer 5.56x45 flash hider",
      description:
        "The Gate-LOK Hammer reduces recoil and ensures the maximum service life of the suppressor. Manufactured by Griffin Armament.",
      image:
        "https://assets.tarkov.dev/6386120cd6baa055ad1e201c-grid-image.webp",
    },
    {
      name: "AR-15 Griffin Armament M4SD-K 5.56x45 sound suppressor",
      description:
        "The M4SD-K sound suppressor, designed for use with 5.56x45 caliber weapon systems. Can only be installed on the SDQD mounting interface flash hiders. Manufactured by Griffin Armament.",
      image:
        "https://assets.tarkov.dev/638612b607dfed1ccb7206ba-grid-image.webp",
    },
    {
      name: "AK 100-series metal skeletonized stock",
      description:
        "A metal triangle stock for the 100-series AKs, manufactured by Izhmash.",
      image:
        "https://assets.tarkov.dev/6386300124a1dc425c00577a-grid-image.webp",
    },
    {
      name: "AWC Thor PSR XL multi-caliber sound suppressor",
      description:
        "The Thor PSR XL sound suppressor is designed for use with 7.62x51 NATO rounds, but is also compatible with several other calibers. Requires an AWC PSR muzzle brake for installation. Manufactured by AWC Silencers.",
      image:
        "https://assets.tarkov.dev/63877c99e785640d436458ea-grid-image.webp",
    },
    {
      name: "AR-15 Precision Reflex GEN III Delta Carbon handguard",
      description:
        "The GEN III Delta Carbon handguard for AR-15 systems, equipped with a custom interface for the installation of additional devices and accessories. Manufactured by Precision Reflex.",
      image:
        "https://assets.tarkov.dev/63888bbd28e5cc32cc09d2b6-grid-image.webp",
    },
    {
      name: "Precision Reflex handguard short side rail mount",
      description:
        "A short rail for handguards by Precision Reflex, which allows you to install additional tactical equipment.",
      image:
        "https://assets.tarkov.dev/6388c4478d895f557a0c6512-grid-image.webp",
    },
    {
      name: "Precision Reflex handguard bottom rail mount",
      description:
        "A bottom rail for handguards by Precision Reflex, which allows you to install foregrips.",
      image:
        "https://assets.tarkov.dev/6388c4ac8d895f557a0c6515-grid-image.webp",
    },
    {
      name: "Precision Reflex handguard long top rail mount",
      description:
        "A long rail for handguards by Precision Reflex, which allows you to install additional tactical equipment and front iron sights.",
      image:
        "https://assets.tarkov.dev/6388c5d19c00405f4717c0f0-grid-image.webp",
    },
    {
      name: "Pack of Arseniy buckwheat",
      description:
        "There is nothing more valuable in a difficult time than buckwheat. Granular gold, food of the gods.",
      image:
        "https://assets.tarkov.dev/6389c6463485cf0eeb260715-grid-image.webp",
    },
    {
      name: "Aquapeps water purification tablets",
      description:
        "These tablets are used to prepare drinking water potentially contaminated with pathogens.",
      image:
        "https://assets.tarkov.dev/6389c6c7dbfd5e4b95197e68-grid-image.webp",
    },
    {
      name: "Electronic components",
      description:
        "Various components and parts of electronics required for the repair and production of devices and systems.",
      image:
        "https://assets.tarkov.dev/6389c70ca33d8c4cdf4932c6-grid-image.webp",
    },
    {
      name: "Microcontroller board",
      description:
        "A printed circuit board from microcontrollers. A consumable in the production of various advanced far-forward electronics components.",
      image:
        "https://assets.tarkov.dev/6389c7750ef44505c87f5996-grid-image.webp",
    },
    {
      name: "Far-forward GPS Signal Amplifier Unit",
      description:
        "A configurable low noise GPS amplifier module with pre-filtering and wide input voltage range.",
      image:
        "https://assets.tarkov.dev/6389c7f115805221fb410466-grid-image.webp",
    },
    {
      name: "Far-forward current converter",
      description:
        "A DC/DC converter that provides a regulated DC voltage. Using voltage converters makes it possible to eliminate malfunctions in the system. The Far-forward converter has increased physical security and quality of components, which allows it to be used in highly loaded systems with increased physical impact factors.",
      image:
        "https://assets.tarkov.dev/6389c85357baa773a825b356-grid-image.webp",
    },
    {
      name: "TerraGroup Blue Folders materials",
      description:
        "The TerraGroup company documents in blue-colored folders. Especially valuable on the black market.",
      image:
        "https://assets.tarkov.dev/6389c8c5dbfd5e4b95197e6b-grid-image.webp",
    },
    {
      name: "Silicon Optoelectronic Integrated Circuits textbook",
      description:
        "A manual on silicon optoelectronic integrated circuits. A storehouse of knowledge for the theory and creation of microelectronics components.",
      image:
        "https://assets.tarkov.dev/6389c8fb46b54c634724d847-grid-image.webp",
    },
    {
      name: "Advanced Electronic Materials textbook",
      description:
        "A textbook for advanced electronic materials and components. A rare and important manual for the production of microelectronics.",
      image:
        "https://assets.tarkov.dev/6389c92d52123d5dd17f8876-grid-image.webp",
    },
    {
      name: "AK CNC Guns OV GP handguard",
      description:
        "The OV GP handguard for AK series assault rifles, equipped with a KeyMod interface for the installation of additional devices and accessories. Manufactured by CNC Guns.",
      image:
        "https://assets.tarkov.dev/6389f1dfc879ce63f72fc43e-grid-image.webp",
    },
    {
      name: "SAG Bit low profile dovetail sidemount",
      description:
        "The Bit low-profile side mount is designed to mount compact sights and collimators on AK rifles and their numerous versions: Saiga, VAL, etc. Manufactured by Sureshot Armament Group.",
      image:
        "https://assets.tarkov.dev/638db77630c4240f9e06f8b6-grid-image.webp",
    },
    {
      name: "AR-15 RTM ATP buffer tube",
      description:
        "The ATP buffer tube, 6-position, Mil-Spec diameter, will fit any AR-15-based carbine. Manufactured by RTM.",
      image:
        "https://assets.tarkov.dev/638de3603a1a4031d8260b8c-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 9.5 lower handguard (Coyote Brown)",
      description:
        "The Daniel Defense RIS II 9.5 lower handguard. Made with light but durable aircraft aluminum alloy. Equipped with RIS interface for installation of additional devices and accessories. Coyote Brown version.",
      image:
        "https://assets.tarkov.dev/638f1ff84822287cad04be9d-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 12.25 lower handguard (Coyote Brown)",
      description:
        "The Daniel Defense RIS II 12.25 lower handguard. Made with light but durable aircraft aluminum alloy. Equipped with RIS interface for installation of additional devices and accessories. Coyote Brown version.",
      image:
        "https://assets.tarkov.dev/638f2003bbd47aeb9e0ff637-grid-image.webp",
    },
    {
      name: "Primorsky Ave apartment key",
      description: "Choreographer key at Primorsky 48.",
      image:
        "https://assets.tarkov.dev/6391fcf5744e45201147080f-grid-image.webp",
    },
    {
      name: "SOG Voodoo Hawk tactical tomahawk",
      description:
        "SOG has combined its three best features: an extended cutting head, compact glass-reinforced nylon handle, and a metal butt cap on the end.",
      image:
        "https://assets.tarkov.dev/63920105a83e15700a00f168-grid-image.webp",
    },
    {
      name: "Shellback Tactical Banshee plate carrier (A-TACS AU)",
      description:
        "The Banshee Rifle Plate Carrier was designed to meet and exceed the needs of law enforcement, military, and tactical operators. This ultra lightweight, low profile, high-quality plate carrier has great load carrying capacity.  Ideal for law enforcement patrol officers for use in high threat active shooter situations, multi-assault counter terrorism action capabilities (MACTAC) and counter terrorism direct actions.",
      image:
        "https://assets.tarkov.dev/639343fce101f4caa40a4ef3-grid-image.webp",
    },
    {
      name: "Tasmanian Tiger Trooper 35 backpack",
      description:
        "The TT Trooper Light Pack 35 is a lightweight and functional 35 liter backpack from Tasmanian Tiger with a comfortable and ergonomic PaddenBack suspension system and anatomical shoulder straps.",
      image:
        "https://assets.tarkov.dev/639346cc1c8f182ad90c8972-grid-image.webp",
    },
    {
      name: "AR-15 Strike Industries Viper carbine length M-LOK lower handguard (FDE)",
      description:
        "The Strike Industries Viper handguard cover for AR-15 equipped with an M-LOK interface for the installation of additional devices and accessories. Flat Dark Earth version.",
      image:
        "https://assets.tarkov.dev/63969c9019971040b005049b-grid-image.webp",
    },
    {
      name: "AR-15 Daniel Defense RIS II 9.5 lower handguard (Black)",
      description:
        "The Daniel Defense RIS II 9.5 lower handguard. Made with light but durable aircraft aluminum alloy. Equipped with RIS interface for installation of additional devices and accessories. Black version.",
      image:
        "https://assets.tarkov.dev/6396aaa9a52ace83df0840ab-grid-image.webp",
    },
    {
      name: "Steyr AUG A1 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/6398636bb483a550805be5e5-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 assault rifle",
      description: "null",
      image:
        "https://assets.tarkov.dev/63986752a28b76105a33c095-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 assault rifle CIV",
      description: "null",
      image:
        "https://assets.tarkov.dev/639867ca90c8ca7156504f75-grid-image.webp",
    },
    {
      name: "Steyr AUG A3 5.56x45 assault rifle CQB",
      description: "null",
      image:
        "https://assets.tarkov.dev/6398681b9f81ff62557b8225-grid-image.webp",
    },
    {
      name: "Glock 19X 9x19 pistol",
      description: "null",
      image:
        "https://assets.tarkov.dev/6398685ee678457197138035-grid-image.webp",
    },
    {
      name: "RSh-12 12.7x55 revolver",
      description: "null",
      image:
        "https://assets.tarkov.dev/639868a207a3eb0207197bb5-grid-image.webp",
    },
    {
      name: "SR-2M Veresk 9x21 submachine gun",
      description: "null",
      image:
        "https://assets.tarkov.dev/63986a38608a960125446db5-grid-image.webp",
    },
    {
      name: "SR-2M Veresk 9x21 submachine gun FSB",
      description: "null",
      image:
        "https://assets.tarkov.dev/63986a9ab483a550805be5ee-grid-image.webp",
    },
    {
      name: "SR-2M Veresk 9x21 submachine gun TAC",
      description: "null",
      image:
        "https://assets.tarkov.dev/63986acda28b76105a33c09f-grid-image.webp",
    },
    {
      name: "Backup hideout key",
      description: "A key to the Informant's second hideout.",
      image:
        "https://assets.tarkov.dev/6398fd8ad3de3849057f5128-grid-image.webp",
    },
    {
      name: "Fierce Blow sledgehammer",
      description:
        "The Fierce Blow sledgehammer is used as a hit tool for dismantling various technical and building structures.",
      image:
        "https://assets.tarkov.dev/63a0b208f444d32d6f03ea1e-grid-image.webp",
    },
    {
      name: "Radio repeater",
      description:
        "A home-made repeater, used to increase the coverage area of the radio.",
      image:
        "https://assets.tarkov.dev/63a0b2eabea67a6d93009e52-grid-image.webp",
    },
    {
      name: "Financial institution office key",
      description:
        "A key to an office room at the city's financial institution.",
      image:
        "https://assets.tarkov.dev/63a39667c9b3aa4b61683e98-grid-image.webp",
    },
    {
      name: "Car dealership closed section key",
      description:
        "A key to the closed section on the second floor of the LexOs car dealership.",
      image:
        "https://assets.tarkov.dev/63a397d3af870e651d58e65b-grid-image.webp",
    },
    {
      name: "Car dealership director's office room key",
      description: "A key to one of the offices in the LexOs car dealership.",
      image:
        "https://assets.tarkov.dev/63a399193901f439517cafb6-grid-image.webp",
    },
    {
      name: "Store manager's key",
      description:
        "A key to manager's office room inside one of the city stores.",
      image:
        "https://assets.tarkov.dev/63a39c69af870e651d58e6aa-grid-image.webp",
    },
    {
      name: "Concordia security room key",
      description: "A key to the security room inside the Concordia building.",
      image:
        "https://assets.tarkov.dev/63a39c7964283b5e9c56b280-grid-image.webp",
    },
    {
      name: "Construction site bunkhouse key",
      description:
        "A key to the locked bunkhouse at the city construction site.",
      image:
        "https://assets.tarkov.dev/63a39cb1c9b3aa4b61683ee2-grid-image.webp",
    },
    {
      name: "Supply department director's office key",
      description: "A key to one of the offices in the Aspect LLC building.",
      image:
        "https://assets.tarkov.dev/63a39ce4cd6db0635c1975fa-grid-image.webp",
    },
    {
      name: "Zmeevsky 5 apartment 20 key",
      description: "A key to one of the apartments at Zmeevsky 5.",
      image:
        "https://assets.tarkov.dev/63a39df18a56922e82001f25-grid-image.webp",
    },
    {
      name: "Zmeevsky 3 apartment 8 key",
      description: "A key to one of the apartments at Zmeevsky 3.",
      image:
        "https://assets.tarkov.dev/63a39dfe3901f439517cafba-grid-image.webp",
    },
    {
      name: "Primorsky 46-48 skybridge key",
      description:
        "A key to the skybridge linking Primorsky 46-48, leading to the apartment of the ballet master.",
      image:
        "https://assets.tarkov.dev/63a39e1d234195315d4020bd-grid-image.webp",
    },
    {
      name: "Archive room key",
      description:
        "A key to the archive room inside one of the buildings in the central part of the city.",
      image:
        "https://assets.tarkov.dev/63a39e49cd6db0635c1975fc-grid-image.webp",
    },
    {
      name: "Hotel room 215 key",
      description: "A key to Pinewood hotel room 215.",
      image:
        "https://assets.tarkov.dev/63a39f08cd6db0635c197600-grid-image.webp",
    },
    {
      name: "Hotel room 206 key",
      description: "A key to Pinewood hotel room 206.",
      image:
        "https://assets.tarkov.dev/63a39f18c2d53c2c6839c1d3-grid-image.webp",
    },
    {
      name: "Iron gate key",
      description: "A key to an unknown iron gate.",
      image:
        "https://assets.tarkov.dev/63a39f6e64283b5e9c56b289-grid-image.webp",
    },
    {
      name: "Chekannaya 15 apartment key",
      description: "A key to one of the apartments located at Chekannaya 15.",
      image:
        "https://assets.tarkov.dev/63a39fc0af870e651d58e6ae-grid-image.webp",
    },
    {
      name: "Stair landing key",
      description:
        "A key to the one of the stair landings of the Chekannaya Street 15 building.",
      image:
        "https://assets.tarkov.dev/63a39fd1c9b3aa4b61683efb-grid-image.webp",
    },
    {
      name: "Cargo container mesh door key",
      description: "A key to the metal gate in one of the shipping containers.",
      image:
        "https://assets.tarkov.dev/63a39fdf1e21260da44a0256-grid-image.webp",
    },
    {
      name: "Abandoned factory marked key",
      description:
        "A mysterious key to an unknown door at the abandoned city factory. There is a strange symbol scratched onto it.",
      image:
        "https://assets.tarkov.dev/63a3a93f8a56922e82001f5d-grid-image.webp",
    },
    {
      name: "Concordia apartment 34 room key",
      description:
        "A key to one of the rooms in apartment 34 inside the Concordia building.",
      image:
        "https://assets.tarkov.dev/63a71e781031ac76fe773c7d-grid-image.webp",
    },
    {
      name: "Concordia apartment 64 office room key",
      description:
        "A key to the office room of the premium apartment inside the Concordia building.",
      image:
        "https://assets.tarkov.dev/63a71e86b7f4570d3a293169-grid-image.webp",
    },
    {
      name: "Concordia apartment 64 key",
      description:
        "A key to the premium apartment inside the Concordia building.",
      image:
        "https://assets.tarkov.dev/63a71e922b25f7513905ca20-grid-image.webp",
    },
    {
      name: "Primorsky 48 apartment key",
      description: "A key to one of the apartments at Primorsky Ave 48.",
      image:
        "https://assets.tarkov.dev/63a71eb5b7f4570d3a29316b-grid-image.webp",
    },
    {
      name: "Financial institution small office key",
      description:
        "A key to a small office room at the city's financial institution.",
      image:
        "https://assets.tarkov.dev/63a71ed21031ac76fe773c7f-grid-image.webp",
    },
    {
      name: "AR-15 AlienTech 5.56x45 muzzle brake",
      description:
        "A competition steel muzzle brake with one closed and five open ports designed by George Gubich, a six-time champion in practical shooting in Russia. Installed on AR-15 family weapons.",
      image:
        "https://assets.tarkov.dev/63ac5c9658d0485fc039f0b8-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/64897ffc3656831810043165-grid-image.webp",
    },
    {
      name: "12.7x55mm PS12B (10 pcs)",
      description: "A pack of 12.7x55 mm PS12B ammo, 10 rounds",
      image:
        "https://assets.tarkov.dev/648983d6b5a2df1c815a04ec-grid-image.webp",
    },
    {
      name: ".338 Lapua Magnum AP ammo pack (20 pcs)",
      description: "A pack of .338 Lapua Magnum AP ammo, 20 rounds.",
      image:
        "https://assets.tarkov.dev/6489848173c462723909a14b-grid-image.webp",
    },
    {
      name: "7.62x54mm R BS ammo pack (20 pcs)",
      description: "A pack of 7.62x54mm R BS ammo, 20 rounds.",
      image:
        "https://assets.tarkov.dev/648984b8d5b4df6140000a1a-grid-image.webp",
    },
    {
      name: "7.62x51mm M993 ammo pack (20 pcs)",
      description: "A pack of 7.62x51mm M993 ammo, 20 rounds.",
      image:
        "https://assets.tarkov.dev/648984e3f09d032aa9399d53-grid-image.webp",
    },
    {
      name: "7.62x39mm MAI AP ammo pack (30 pcs)",
      description: "A pack of 7.62x39 mm MAI AP ammo, 30 rounds.",
      image:
        "https://assets.tarkov.dev/6489851fc827d4637f01791b-grid-image.webp",
    },
    {
      name: "9x39mm BP ammo pack (20 pcs)",
      description: "A pack of 9x39mm BP ammo, 20 rounds.",
      image:
        "https://assets.tarkov.dev/6489854673c462723909a14e-grid-image.webp",
    },
    {
      name: "5.56x45mm SSA AP ammo pack (50 pcs)",
      description: "A pack of 5.56x45mm SSA AP ammo, 50 rounds.",
      image:
        "https://assets.tarkov.dev/64898583d5b4df6140000a1d-grid-image.webp",
    },
    {
      name: ".300 Blackout AP ammo pack (50 pcs)",
      description: "A pack of .300 Blackout AP ammo, 50 rounds.",
      image:
        "https://assets.tarkov.dev/648985c074a806211e4fb682-grid-image.webp",
    },
    {
      name: "5.45x39mm 7N40 ammo pack (30 pcs)",
      description: "A pack of 5.45x39mm 7N40 ammo, 30 rounds.",
      image:
        "https://assets.tarkov.dev/64898602f09d032aa9399d56-grid-image.webp",
    },
    {
      name: "5.7x28mm SS190 ammo pack (50 pcs)",
      description: "A pack of 5.7x28mm SS190 ammo, 50 rounds.",
      image:
        "https://assets.tarkov.dev/648986bbc827d4637f01791e-grid-image.webp",
    },
    {
      name: "4.6x30mm AP SX ammo pack (40 pcs)",
      description: "A pack of 4.6x30mm AP SX ammo, 40 rounds.",
      image:
        "https://assets.tarkov.dev/6489870774a806211e4fb685-grid-image.webp",
    },
    {
      name: "9x21mm BT ammo pack (30 pcs)",
      description: "A pack of 9x21 mm BT ammo, 30 rounds.",
      image:
        "https://assets.tarkov.dev/6489875745f9ca4ba51c4808-grid-image.webp",
    },
    {
      name: ".45 ACP AP ammo pack (50 pcs)",
      description: "A pack of .45 ACP AP ammo, 50 rounds.",
      image:
        "https://assets.tarkov.dev/6489879db5a2df1c815a04ef-grid-image.webp",
    },
    {
      name: "9x19mm PBP ammo pack (50 pcs)",
      description: "A pack of 9x19mm PBP ammo, 50 rounds.",
      image:
        "https://assets.tarkov.dev/648987d673c462723909a151-grid-image.webp",
    },
    {
      name: "12/70 AP-20 ammo pack (25 pcs)",
      description: "A pack of 12/70 AP-20 ammo, 25 rounds.",
      image:
        "https://assets.tarkov.dev/64898838d5b4df6140000a20-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/64898e9db18e646e992aba47-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/648990314b4d2b31b63a46fc-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/648996987063b903ff4b8561-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489981f7063b903ff4b8565-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/64899a35fc093676bb0f57e3-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/64899ec0a236de328b12db52-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/64899f4189de40533661a0c0-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489a0a4fc493c59d15fec05-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489a233a236de328b12db56-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489a344fc493c59d15fec0f-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489a7d87063b903ff4b85cc-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489a97645f9ca4ba51c4dd0-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489aa584b6fc03d00374e59-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489ab9645f9ca4ba51c4dd7-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489b2b131a2135f0d7d0fcb-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489b73cebac5a4a1b73cab7-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489b88bcf0cd80b7e749069-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489b91dd0c36c0a4925c4b4-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489b99eebac5a4a1b73cabc-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489ba157c07471efa3e03b4-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489ba92a74e43447b64d5e2-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489bbd6d0c36c0a4925c4b8-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489bd7b79295b4f753d486a-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489bed4a53c8c047c3dc361-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489bfa844d98e01bc4c420e-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c03c8bc5233fdc78e788-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c0508bc5233fdc78e78c-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c0df7c07471efa3e03b8-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c0f731a2135f0d7d0fd5-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c12f8bc5233fdc78e790-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c164a53c8c047c3dc365-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c200cf0cd80b7e74906d-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c2aad0c36c0a4925c4bc-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c30331a2135f0d7d0fd9-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c46eebac5a4a1b73cac0-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c5cb44d98e01bc4c4212-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c65cd0c36c0a4925c4c0-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c753a74e43447b64d5e6-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c80e7c07471efa3e03bc-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c8a1a53c8c047c3dc369-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c8dba53c8c047c3dc36d-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489c99f7c07471efa3e03c0-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489ca66d0c36c0a4925c4c4-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489cad98bc5233fdc78e794-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489cb4fa74e43447b64d5ea-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489cc4379295b4f753d486e-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489cca131a2135f0d7d0fdd-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489d812cf0cd80b7e749071-grid-image.webp",
    },
    {
      name: "Sealed weapon case",
      description: "Sealed weapon case",
      image:
        "https://assets.tarkov.dev/6489d89debac5a4a1b73caf7-grid-image.webp",
    },
    {
      name: "ASh-12 12.7x55 assault rifle Silenced",
      description: "null",
      image:
        "https://assets.tarkov.dev/ash12silenced00000000001-grid-image.webp",
    },
    {
      name: "Dogtag",
      description: "null",
      image:
        "https://assets.tarkov.dev/customdogtags12345678910-grid-image.webp",
    },
    {
      name: "Glock 17 9x19 pistol PS9",
      description: "null",
      image:
        "https://assets.tarkov.dev/glock17ps900000000000001-grid-image.webp",
    },
    {
      name: "Springfield Armory M1A 7.62x51 rifle REAP-IR",
      description: "null",
      image:
        "https://assets.tarkov.dev/m1areapir000000000000001-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle KAC RIS",
      description: "null",
      image:
        "https://assets.tarkov.dev/m4a1kacrisii000000000001-grid-image.webp",
    },
    {
      name: "Colt M4A1 5.56x45 assault rifle SOPMOD II Flash",
      description: "null",
      image:
        "https://assets.tarkov.dev/m4a1sopmodiiflash0000001-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper) PU 3.5x",
      description: "null",
      image:
        "https://assets.tarkov.dev/mosinscopedbarter0000001-grid-image.webp",
    },
    {
      name: "Mosin 7.62x54R bolt-action rifle (Sniper) ATACR 7-35x56",
      description: "null",
      image:
        "https://assets.tarkov.dev/mosinsniperatacr00000001-grid-image.webp",
    },
    {
      name: "Simonov OP-SKS 7.62x39 carbine (Hunting Rifle Version) UAS",
      description: "null",
      image:
        "https://assets.tarkov.dev/opsksuas0000000000000001-grid-image.webp",
    },
    {
      name: "RPK-16 5.45x39 light machine gun Drum",
      description: "null",
      image:
        "https://assets.tarkov.dev/rpk16drum000000000000001-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle SPR",
      description: "null",
      image:
        "https://assets.tarkov.dev/sa58spr00000000000000001-grid-image.webp",
    },
    {
      name: "DS Arms SA-58 7.62x51 assault rifle X-FAL",
      description: "null",
      image:
        "https://assets.tarkov.dev/sa58xfal0000000000000001-grid-image.webp",
    },
    {
      name: "Simonov SKS 7.62x39 carbine TAPCO Intrafuse",
      description: "null",
      image:
        "https://assets.tarkov.dev/sksintrafuse000000000001-grid-image.webp",
    },
    {
      name: "VSS Vintorez 9x39 special sniper rifle Stripped",
      description: "null",
      image:
        "https://assets.tarkov.dev/vssvintorezstripped00001-grid-image.webp",
    },
  ];
  await Item.insertMany(items);
  console.log(`Created items!`);
};

const run = async () => {
  await main();
  db.close();
};

run();
