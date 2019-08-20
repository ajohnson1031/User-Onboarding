const Characters = [
  {
    personality: "sarcastic",
    img:
      "https://i.kinja-img.com/gawker-media/image/upload/s--QdQAoZRc--/c_scale,f_auto,fl_progressive,q_80,w_800/rmfjumf7kbujbz9uz5pm.jpg",
    powers: [
      "Tactile Adhesiveness",
      "Superhuman Strength",
      "Enhanced Speed",
      "Enhanced Agility",
      "Peter Tingle"
    ],
    nickname: "Underoos"
  },
  {
    personality: "sarcastic",
    img:
      "https://nerdist.com/wp-content/uploads/2019/03/IM-header-1200x676.jpg",
    powers: [
      "Technopathy",
      "Enhanced Strength",
      "Enhanced Intellect",
      "Healing Factor",
      "Flight (Propulsion Based)"
    ],
    nickname: "Shellhead"
  },
  {
    personality: "sarcastic",
    img:
      "https://cdn.vox-cdn.com/thumbor/7K3uPy1iLOC4ovn73AY28U_-FGg=/0x0:1920x1079/1200x800/filters:focal(1085x298:1391x604)/cdn.vox-cdn.com/uploads/chorus_image/image/64773806/ply_dr_strange_graded.0.jpg",
    powers: ["Lots and lots o' magic"],
    nickname: "Master of the Mystic Arts"
  },
  {
    personality: "sarcastic",
    img:
      "https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg",
    powers: [
      "Amplified Speed",
      "Enhanced Senses",
      "Sharp Claws",
      "Weapons Mastery"
    ],
    nickname: "Furface"
  },
  {
    personality: "heroic",
    img:
      "https://wegotthiscovered.com/wp-content/uploads/2019/04/Captain-America-Chris-Evans-Shield.jpg",
    powers: [
      "Enhanced Reflexes",
      "Enhanced Senses",
      "Superhuman Strength",
      "Martial Prowess"
    ],
    nickname: "Nomad"
  },
  {
    personality: "heroic",
    img: "https://miro.medium.com/max/2000/1*u5gmZdfPO5htzPY9Cncqlg.jpeg",
    powers: [
      "Superhuman Strength",
      "Enhanced Senses",
      "Enhanced Speed",
      "Enhanced Durability",
      "Enhanced Reflexes",
      "Endhanced Agility",
      "Mystical Abilities"
    ],
    nickname: "Mr. Okonkwo"
  },
  {
    personality: "heroic",
    img:
      "https://cdn1-www.comingsoon.net/assets/uploads/2019/05/cap-marvvv.jpg",
    powers: [
      "Superhuman Strength",
      "Enhanced Durability",
      "Enhanced Stamina",
      "Precognition",
      "Energy Absorption",
      "Energy Blasts",
      "Flight"
    ],
    nickname: "Warbird"
  },
  {
    personality: "herioc",
    img:
      "https://cdn3.movieweb.com/i/article/FspF3nrMbWoq2tyt32GC7hyibIgsn3/1107:50/Avengers-Endgame-Falcon-Dead-Anthony-Mackie.jpg",
    powers: [
      "Flight (From Harness)",
      "Telepathic Link w/Birds",
      "Martial Prowess"
    ],
    nickname: "'Snap' Wilson"
  },
  {
    personality: "heroic",
    img: "https://i.redd.it/0qm2eyieo1v21.jpg",
    powers: [
      "Super Asgardian Strength",
      "Super Asgardian Endurance",
      "Super Asgardian Stamina",
      "Super Asgardian Reflexes",
      "Weather Manipulation",
      "Flight (w/ Mjolnir)"
    ],
    nickname: "Strongest Avenger"
  },
  {
    personality: "angry",
    img:
      "https://www.indiewire.com/wp-content/uploads/2017/07/mark-ruffalo-hulk.jpg?w=780",
    powers: [
      "Limitless Strength",
      "Superhuman Speed",
      "Superhuman Endurance",
      "Healing Factor",
      "Telepathic Resistance"
    ],
    nickname: "Doc Green"
  },
  {
    personality: "angry",
    img:
      "https://cdn3.movieweb.com/i/article/4lka6dTaRlNL5PBcQNR9DVq3h3mXiP/798:50/Avengers-4-Guardians-Of-Galaxy-3-Drax-Destroyer.jpg",
    powers: [
      "Super Strength",
      "Super Endurance",
      "Super Stamina",
      "Martial Prowess"
    ],
    nickname: "the Destroyer"
  },
  {
    personality: "angry",
    img:
      "http://cdn.collider.com/wp-content/uploads/2017/10/thor-ragnarok-images-valkyrie.jpg",
    powers: [
      "Super Asgardian Strength",
      "Super Asgardian Endurance",
      "Super Asgardian Reflexes",
      "Super Asgardian Stamina",
      "Low-Level Precognition",
      "Dimensional Travel",
      "Martial Prowess"
    ],
    nickname: "Angry Girl"
  },
  {
    personality: "fighter",
    img:
      "https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/02/Black-Widow-Avengers-920x584.jpg",
    powers: [
      "Resistance to Aging",
      "Disease Immunity",
      "Toxin Immunity",
      "Martial Prowess"
    ],
    nickname: "Oktober"
  },
  {
    personality: "fighter",
    img:
      "https://fsmedia.imgix.net/56/ab/8f/16/4eec/4883/877c/f9cd570896a0/jeremy-renner-as-hawkeye-in-the-avengers-2012.jpeg?rect=0%2C58%2C1000%2C500&auto=format%2Ccompress&dpr=2&w=650",
    powers: [
      "Peak Human Conditioning",
      "Exceptional Marksmanship",
      "Martial Prowess"
    ],
    nickname: "Golden Archer"
  },
  {
    personality: "fighter",
    img:
      "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2019/05/Bucky-Barnes-min.jpg?fit=1200%2C500&ssl=1",
    powers: ["Martial Prowess", "Cybernetic Arm"],
    nickname: "Bucky"
  },
  {
    personality: "fighter",
    img:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/37/1536914086-nebula-infinity-war.jpg?crop=0.528xw:1.00xh;0.401xw,0&resize=480:*",
    powers: ["Martial Prowess", "Cybernetic Enhancements"],
    nickname: "Ms. Peale"
  }
];

export default Characters;
