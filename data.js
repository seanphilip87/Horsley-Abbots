// --- THE ENVIRONMENT OF HORSLEY ABBOTS ---

const theme = {
    victim: "Lord Reginald Blackwood",
    rooms: [
        { 
            id: '1', 
            name: "Village Hall", 
            img: "village_hall.png",
            desc: "The air here tastes of dust and decades of polite resentment. 1977 Silver Jubilee bunting hangs from the ceiling like decaying nooses. A noticeboard in the corner passively-aggressively reminds residents that 'the urn is not a spittoon.'", 
            searchEmpty: "Stetson kicked a stack of folding chairs. The dust plumed, thick and undisturbed. Nothing but ghost stories and dry rot.", 
            searchClue: "Stetson's cane caught on the edge of the stage. He knelt, groaning. 'Fresh splinters,' he muttered. 'Someone heavy vaulted up here recently, and they were in a panic.'" 
        },
        { 
            id: '2', 
            name: "The Gloved Fist", 
            img: "gloved_fist.png",
            desc: "The local pub. The carpet sticks to Stetson's boots, a historical record of every spilled pint and bodily fluid since 1982. Ancient, shrivelled black puddings hang above a soot-choked fireplace that hasn't been lit in a decade.", 
            searchEmpty: "Stetson poked the sleeping regular at the bar. The man groaned, but the grime on the floor around him was unbroken. A dead end.", 
            searchClue: "Stetson squinted at a half-finished pint of stout. 'Still bubbling,' he rasped. 'Two sets of boot prints in the spilled foam. A clandestine meeting, abruptly ended.'" 
        },
        { 
            id: '3', 
            name: "Churchyard",
            img: "churchyard.png", 
            desc: "Yew trees claw desperately at the grey sky. The ground is a soggy sponge of dead moss and disrespect. In the centre sits an open, flooded grave, the muddy water churning with blind, wriggling things.", 
            searchEmpty: "Stetson peered into the flooded grave. The muddy banks were pristine. Whoever dug this was long gone.", 
            searchClue: "Stetson spotted a crushed, lipstick-stained cigarette butt pressed deep into the mud of a fresh headstone. 'Someone was pacing here. Waiting. Smoking intensely.'" 
        },
        { 
            id: '4', 
            name: "Manor House",
            img: "manor_house.png", 
            desc: "A sprawling corpse of a building. Lord Blackwood's ancestral home. The roof has caved in, creating an indoor waterfall that cascades down the grand staircase, pooling around a shattered crystal chandelier.", 
            searchEmpty: "The black mould on the Persian rug formed a perfect, unbroken carpet. No one had stepped here in days.", 
            searchClue: "Stetson pointed his cane at a torn, heavy velvet curtain. 'Freshly ripped from the rail. Someone tried to grab it as they fell... or were pushed.'" 
        },
        { 
            id: '5', 
            name: "Mini-Mart",
            img: "mini_mart.png", 
            desc: "The hum of the fluorescent strip lighting is a lobotomy in audio form. The shelves are stocked with expired yoghurt and tinned peaches that look like they survived the Blitz. The smell of cheap bleach fails to mask the scent of despair.", 
            searchEmpty: "Stetson inspected the aisle of dented baked bean tins. The layer of grime on the linoleum was totally intact.", 
            searchClue: "Stetson picked up a dropped, crumpled receipt near the pickled walnuts. 'Purchased ten minutes before the estimated time of death. They were lingering here.'" 
        },
        { 
            id: '6', 
            name: "Play Park",
            img: "play_park.png", 
            desc: "A single rope swing hangs limply. A rusty metal slide leads directly into a puddle of stagnant brown water. No children have laughed here since 1994. The wind makes the roundabout squeal like a dying pig.", 
            searchEmpty: "The glass-filled dirt beneath the swing was smooth. 'Bleak. And totally empty,' Stetson coughed.", 
            searchClue: "Stetson knelt, his knees cracking like gunfire. 'Deep, desperate heel marks dragging away from the rusty slide. A struggle.'" 
        },
        { 
            id: '7', 
            name: "Faffingdales",
            img: "faffingdales.png", 
            desc: "The village butcher. The air is thick with the coppery reek of blood and raw meat. A plastic bucket labeled 'Miscellaneous Trimmings' sits in the corner, twitching occasionally. The meat hooks sway slightly in the draught.", 
            searchEmpty: "The bone-meal sawdust on the floor was swept perfectly clean. A little too clean, perhaps, but no evidence remained.", 
            searchClue: "Stetson tapped a bloody bootprint near the drain. He sniffed the air. 'That is definitely not porcine blood. Human. And fresh.'" 
        },
        { 
            id: '8', 
            name: "Peacock's Queef",
            img: "peacocks_queef.png", 
            desc: "A stark, white-walled nightmare of a Michelin-starred restaurant. The minimalist decor is aggressive. It smells faintly of truffle oil, foam, and overwhelming culinary arrogance.", 
            searchEmpty: "The minimalist white tiles were gleaming, sterile, and entirely untouched.", 
            searchClue: "Stetson found a smear of dark mud and a single torn thread on a pristine white tablecloth. 'They left in a hurry. Ruined the ambiance.'" 
        },
        { 
            id: '9', 
            name: "Cricket Pavilion",
            img: "cricket_pavilion.png", 
            desc: "A leaning wooden shack smelling of linseed oil, damp flannel, and generational failure. Yellowing photographs of men with tremendous mustaches stare down in severe disappointment.", 
            searchEmpty: "Stetson examined the rotten benches. The cobwebs spanning the cricket pads were unbroken.", 
            searchClue: "Stetson picked up a heavy, shattered cricket stump from the floor. 'Splintered recently. Someone was practicing their swing on something other than a ball.'" 
        }
    ]
};

// --- CORE GAME DATA ARRAYS ---

const deathTypes = [
    { type: 'slash', desc: "His throat had been raggedly cut.", coroner: "Deep lacerations." },
    { type: 'blunt', desc: "His skull was thoroughly caved in.", coroner: "Massive blunt force trauma." },
    { type: 'strangle', desc: "His neck was heavily bruised from vicious strangulation.", coroner: "Asphyxiation via ligature." }
];

const allItemsData = [
    {name:"Rusted Cleaver", img: "cleaver.png", desc:"A brutal, unsanitary weapon from Faffingdales.", type:"slash"},
    {name:"Broken Gin Bottle", img: "gin_bottle.png", desc:"Shattered glass. Smells of cheap regret.", type:"slash"},
    {name:"Rock-Hard Flapjack", img: "flapjack.png", desc:"A WI baked good. Banned under the Geneva Convention.", type:"blunt"},
    {name:"Shattered Stump", img: "stump.png", desc:"A rotting piece of wood from the cricket pitch.", type:"blunt"},
    {name:"Rusty Fan Belt", img: "fan_belt.png", desc:"A greasy, tough rubber loop from an old tractor.", type:"strangle"},
    {name:"Frayed Bell Pull", img: "bell_pull.png", desc:"Stolen from the Manor. Thick, dusty rope.", type:"strangle"}
];

const frictionTypes = [
    { id: 'wellies', img: "wellies.png", icon: '👢', name: "Wellington Boots", desc: "A pair of sturdy rubber boots. Essential for flooded areas.", blockReason: "flooded", blockMsg: "The path is a swamp of stinking mud. Stetson needs proper waterproof footwear to enter." },
    { id: 'key', img: "iron_key.png", icon: '🗝️', name: "Rusty Iron Key", desc: "A heavy, rusted key. Unlocks archaic doors.", blockReason: "locked", blockMsg: "The heavy oak door is bolted shut with an ancient lock. Stetson needs a key to force it open." },
    { id: 'lantern', img: "lantern.png", icon: '🏮', name: "Heavy Lantern", desc: "A soot-stained lantern. Illuminates the darkest gloom.", blockReason: "dark", blockMsg: "The room is pitch black. Stetson cannot see his own hand. He needs a light source to enter." }
];

const suspectArchetypes = [
    { 
        role: "The Barmaid", 
        img: "barmaid.png",
        gender: "female", 
        desc: "A matronly, severe woman with faded blue tattoos of anchors and swallows sprawling down her thick forearms. She smells strongly of stale stout, cheap bleach, and stale tobacco.",
        dialogue: {
            meetFirst: "Stetson leaned against the sticky bar. The Barmaid aggressively scrubbed a dirty pint glass with an even dirtier rag. 'Shut your cake-hole, detective,' she barked in a faux-Essex drawl. 'I’ve got kegs to change and zero time for old bill.'",
            meetAgain: "Stetson tapped a coin on the bar. The Barmaid didn't look up from the till. 'You taking up permanent residence, mush? Buy a packet of scratchings or sling your hook.'",
            politeWrappers: [
                "She leaned over the beer pumps, lowering her voice. 'Listen, what goes on in my pub stays in my pub... usually. But {info}'",
                "She threw the dirty rag over her shoulder. 'People talk when they're three pints deep in my discount bitter. I ain't deaf. {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson coughed wetly into his hand. 'Your hygiene is a public menace, and the swill you serve tastes like drainage water from the Churchyard.'",
                    response: "She slammed a heavy fist onto the bar, rattling the optics. 'You cheeky bastard! Try running a pub in this godforsaken hole! Fine, you want dirt? Have it: {info}'"
                },
                {
                    stetson: "Stetson took a bite of his rancid sandwich. 'A miserable pub run by a miserable woman covering for a miserable killer. Spill it.'",
                    response: "Her eyes narrowed to furious slits, the faux-Essex accent entirely gone. 'Don't you dare judge me, you trench-coated freak. Listen good, because I'll only say this once: {info}'"
                }
            ],
            clamNormal: "'Right, that's it!' she yelled, pointing a meaty finger at the door. 'You're barred! Squeeze your pathetic little frame out of my pub before I call the lads!'",
            clamDeep: "The Barmaid silently reached beneath the counter. Stetson heard the heavy thud of a wooden baseball bat hitting the floorboards. She simply stared at him, her eyes completely dead. It was time to leave.",
            formatGossip: "I probably shouldn't say, but {target} {gossip}. Messy business.",
            formatKnownMotive: "Word travels fast when the locals get loose lips. Everyone knows {target} had a bone to pick: {motive}",
            formatKnownAlibi: "A load of old cobblers, if you ask me. {target} claims: '{alibi}'. Yeah, right. And I'm the Queen of Sheba.",
            formatOwnMotive: "Alright, so what?! {motive} Doesn't mean I took a swing at the old bastard!",
            formatOwnAlibi: "Listen to me, mush. I didn't do nuffink. {alibi} Check it if you want!"
        }
    },
    { 
        role: "The Vicar", 
        img: "vicar.png",
        gender: "male", 
        desc: "He clutches a worn, leather-bound Bible like a physical shield. His collar is far too tight, and a perpetual bead of terrified sweat tracks through the dust on his wrinkled forehead.",
        dialogue: {
            meetFirst: "Stetson cornered the man of the cloth. The Vicar jumped, nearly dropping his Good Book. 'The Lord is my shepherd, detective! I walk in the light! Leave me be!'",
            meetAgain: "Stetson loomed over the sweating priest once more. 'Must you continually badger me?' the Vicar whined. 'I am praying for the deceased's soul!'",
            politeWrappers: [
                "The Vicar wrung his hands nervously. 'I shouldn't bear false witness, but... {info}'",
                "He dabbed his forehead with a filthy handkerchief. 'The flock is straying, Hinchfliffe. The wickedness is everywhere. For instance... {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson blew smoke directly into the man's face. 'Your sermons are a cure for insomnia, and your soul is as black as that rot in the Manor.'",
                    response: "'May the Lord strike you down!' the Vicar shrieked, his face turning an angry plum colour. 'Fine! If you must know the sins of this parish: {info}'"
                },
                {
                    stetson: "Stetson tapped his cane hard against the Vicar's shin. 'Drop the holy act. You're a trembling little coward in a dog collar.'",
                    response: "The Vicar gasped, clutching his pearls—or rather, his crucifix. 'You are an agent of Satan! I will tell you what you want, demon, just get away from me: {info}'"
                }
            ],
            clamNormal: "'I am instituting a strict vow of silence!' the Vicar squeaked, turning his back. 'Get thee behind me, you trench-coated nuisance!'",
            clamDeep: "The Vicar collapsed into a pathetic heap, sobbing hysterically into his Bible, completely unresponsive to Stetson's threats.",
            formatGossip: "I shouldn't spread rumours, but the Lord sees all. {target} {gossip}. May God forgive them.",
            formatKnownMotive: "The roots of sin run deep! {target} is consumed by wrath! I have seen into their dark heart: {motive}",
            formatKnownAlibi: "Lies and wickedness! {target} claims '{alibi}', but the Lord knows the truth!",
            formatOwnMotive: "Alright! Yes! {motive} But I didn't strike him down! I am a man of peace!",
            formatOwnAlibi: "I am innocent! {alibi} The Lord is my alibi!"
        }
    },
    { 
        role: "The Chef", 
        img: "chef.png",
        gender: "male", 
        desc: "Wearing a pristine, aggressively white chef's jacket. He carries a pair of silver plating tweezers like a weapon and looks at Stetson as if he is a diseased rat that has wandered into a sterile kitchen.",
        dialogue: {
            meetFirst: "Stetson ambled in, chewing loudly. The Chef’s eye twitched violently. 'I have three Michelin stars!' he shrieked. 'I will not have my dining room polluted by the stench of cheap margarine! What do you want, peasant?'",
            meetAgain: "Stetson tapped his cane against a gleaming steel counter. 'You again?' the Chef sneered. 'Have you come to beg for scraps, or just to ruin my ambiance further?'",
            politeWrappers: [
                "He adjusted his cuffs meticulously, refusing to make eye contact. 'I observe everything, detective. It is required for perfection. For example... {info}'",
                "He sighed, inspecting an imaginary spot on a gleaming paring knife. 'The locals in this village are so utterly, hopelessly transparent. {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson scraped his dirty boot across the pristine tiles. 'Your tasting menu is a pretentious joke, and this place smells like a sterilized hospital bin.'",
                    response: "The Chef went chalk white, his hand trembling on his plating tweezers. 'You uncultured swine! You know absolutely nothing of art! Fine, take your garbage information and leave my sight: {info}'"
                },
                {
                    stetson: "Stetson took a wet, smacking bite of his sandwich. 'You're just a glorified fry cook hiding behind truffle foam. Who are you covering for?'",
                    response: "He grabbed a copper saucepan and hurled it against the wall with a deafening crash. 'I protect no one! Especially not these provincial idiots! Listen to me: {info}'"
                }
            ],
            clamNormal: "He turned his back, crossing his arms haughtily. 'My genius requires absolute focus. You are dismissed. Do not speak to me again.'",
            clamDeep: "The Chef grabbed a massive, terrifyingly sharp meat cleaver and began chopping a carrot with psychotic, rapid-fire intensity, entirely ignoring Stetson. The threat was crystal clear.",
            formatGossip: "It is pathetic, really. {target} {gossip}. Zero discipline.",
            formatKnownMotive: "They have no palette for subtlety, only for vengeance. {target}'s motive is so remarkably crude: {motive}",
            formatKnownAlibi: "A clumsy lie, like a badly seasoned broth. {target} dares to claim: '{alibi}'",
            formatOwnMotive: "Yes, fine! {motive} But I would never murder a man with such a lack of finesse!",
            formatOwnAlibi: "I am a culinary god. I do not lie. {alibi} Now get out of my kitchen before I julienne your miserable little fingers!"
        }
    },
    { 
        role: "The Butcher",
        img: "butcher.png", 
        gender: "male", 
        desc: "A massive slab of a man producing wet, guttural vibrations deep in his chest. His apron is permanently crusted in dark red, and his hands are the size of holiday hams.",
        dialogue: {
            meetFirst: "Stetson stepped into the coppery reek of the shop. The Butcher slammed a heavy fist onto the cutting block, producing an angry, pig-like squeal from his throat. '[Wet grunt] Get out of my light, corpse.'",
            meetAgain: "Stetson hovered near the 'Miscellaneous Trimmings' tray. The Butcher stopped wiping his bloody hands. '[Low growl] Still breathing my air, little man?'",
            politeWrappers: [
                "He hacked a piece of bone in half, not looking up. 'Don't care much for gossip. But saw this... {info}'",
                "He wiped a smear of blood off his cheek with a massive forearm. '[Grunt] People talk in the queue. I listen. {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson prodded a suspicious grey sausage with his cane. 'I've seen fresher meat on a bloated casualty. Your shop is a health hazard and you're an overgrown ape.'",
                    response: "The Butcher roared—a terrifying, wet sound—and snapped a thick bone in his bare hands. 'Watch your mouth, skin and bones! I only know what I see! {info}'"
                },
                {
                    stetson: "Stetson coughed his smoker's hack. 'You couldn't outsmart a stunned cow. Who's paying you to keep that giant, empty head shut?'",
                    response: "He grabbed Stetson by the lapels, lifting his boots an inch off the sawdust floor. '[Guttural roar] Nobody pays me! You want the bloody truth? Here! {info}'"
                }
            ],
            clamNormal: "He picked up a heavy mop and began violently swabbing the bloody floor, deliberately pushing the dirty water over Stetson's shoes. The conversation was over.",
            clamDeep: "The Butcher slowly picked up a rusted meat hook and took a single, heavy step toward Stetson. The low growl in his chest sounded like a revving chainsaw. Stetson wisely backed out the door.",
            formatGossip: "[Wet snort] Ain't my business, but {target} {gossip}.",
            formatKnownMotive: "Saw it in their eyes. {target} was ready to snap. Reason? {motive}",
            formatKnownAlibi: "Pigs fly, mate. {target} says '{alibi}'. Bollocks.",
            formatOwnMotive: "[Angry pig noises] Yeah! {motive} So what? Meat's meat. Ain't killed no human.",
            formatOwnAlibi: "[Slaps a heavy cleaver into the block] Said it once: {alibi} Now buy a kidney or get out."
        }
    },
    { 
        role: "The Mini-Mart Owner", 
        img: "minimart_owner.png",
        gender: "female", 
        desc: "Wearing oversized designer sunglasses indoors, she walks cautiously on eggshells, constantly checking her reflection in the convex security mirror. She seems perpetually terrified of scuffing her shoes.",
        dialogue: {
            meetFirst: "The shop door chime jangled aggressively as Stetson limped in. The woman flinched, clutching a tin of beans. 'My ankles are insured for a staggering sum! Stop stressing me, you terrifying little man! What is it?'",
            meetAgain: "Stetson accidentally knocked a display of dusty multipack crisps. The woman shrieked. 'Careful with the stock! You are giving my calves cramps! What do you want now?'",
            politeWrappers: [
                "She adjusted her sunglasses, leaning over the scratchcard dispenser. 'Between you and me, the things I see from behind this till... {info}'",
                "She sighed, examining a split end. 'I really shouldn't gossip, it gives me frown lines, but since you're the law... {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson picked up a mouldy scotch egg. 'This shop is a tragic, pathetic monument to your failing youth, and your sunglasses are cheap knock-offs.'",
                    response: "She gasped, clutching her chest as if she'd been shot. 'You are a vile, unglamorous monster! How dare you! Fine, take the village filth: {info}'"
                },
                {
                    stetson: "Stetson pointed his cane at her legs. 'Your ankles look perfectly average. Thick, even. Nothing worth insuring.'",
                    response: "Her jaw dropped in pure, unadulterated horror. 'You... you absolute brute! I will tell you everything just to get your toxic energy out of my boutique: {info}'"
                }
            ],
            clamNormal: "She picked up a copy of a six-month-old glossy magazine and held it squarely in front of her face. 'I am on my legally mandated emotional wellness break. Shoo.'",
            clamDeep: "Trembling with rage, she produced a *second* pair of sunglasses and put them on over the first pair, completely blocking out the world. She refused to acknowledge his existence.",
            formatGossip: "It's dreadfully unchic to spread negativity, but {target} {gossip}. Tragic.",
            formatKnownMotive: "People here have such deeply ugly motivations. {target}, for instance: {motive}",
            formatKnownAlibi: "I heard {target} trying to claim: '{alibi}'. It sounds so completely fabricated, doesn't it?",
            formatOwnMotive: "Ugh, fine! So what if {motive} I would never ruin my manicure with something as tacky as murder!",
            formatOwnAlibi: "I am completely innocent! {alibi} Now please stop looking at me in that abrasive tone of voice!"
        }
    },
    { 
        role: "The Busybody", 
        img: "busybody.png",
        gender: "female", 
        desc: "Thin as a rake and vibrating with malicious energy. She wears a yellowing knitted cardigan and a rattling necklace made entirely of human teeth. Her eyes dart around, absorbing every sin in a five-mile radius.",
        dialogue: {
            meetFirst: "Stetson approached the elderly woman. She smiled, revealing gums that were far too pink, and fingered her necklace. 'I'm adding your molars to my chain, Hinchfliffe. What do you want?'",
            meetAgain: "She tutted loudly as Stetson cast a shadow over her. 'Wipe your shoes! You are tracking pure incompetence all over the floor. Speak quickly.'",
            politeWrappers: [
                "She pulled a small, black notebook from her sleeve. 'The Women's Institute sees everything. Everything. Let me consult the ledger... {info}'",
                "She leaned in, her breath smelling faintly of peppermints and formaldehyde. 'I know the rot beneath the floorboards here. For instance... {info}'"
            ],
            insultWrappers: [
                {
                    stetson: "Stetson stared directly at her necklace. 'You're not a pillar of the community, you're a grave-robbing old crone with too much time on her hands.'",
                    response: "Her eyes widened in absolute, furious offense. 'You are common! Common and wretched! You want the filth of this village? Take it and choke on it: {info}'"
                },
                {
                    stetson: "Stetson kicked a piece of dust toward her. 'The WI flapjacks taste like hardened cement, and nobody actually likes you.'",
                    response: "She gasped, her hand flying to her chest. It was a critical hit. 'You... you absolute savage! Fine! Write this down in your pathetic little notepad: {info}'"
                }
            ],
            clamNormal: "She whipped out a fountain pen and began furiously writing. 'I am drafting a strongly worded letter to the Chief Constable about your demeanour! Good day!'",
            clamDeep: "She stepped uncomfortably close to Stetson and simply began clicking her false teeth at him—a rapid, dry, terrifying sound. She didn't blink. Stetson slowly backed away in pure horror.",
            formatGossip: "I keep a record of all transgressions. {target} {gossip}. Disgusting.",
            formatKnownMotive: "I see the darkness in them all. {target} had a wonderfully wicked reason: {motive}",
            formatKnownAlibi: "A scandalous fiction! {target} claims '{alibi}'. I practically choked on my tea when I heard.",
            formatOwnMotive: "Yes, well! {motive} It was a matter of principle! But the WI does not harbour murderers!",
            formatOwnAlibi: "How dare you question my whereabouts! {alibi} I have impeccable character witnesses!"
        }
    }
];

const motives = [
    "Lord Blackwood threatened to report a secret collection of Dutch pornography.", 
    "Lord Blackwood heavily insulted a reconstructed pigeon's anus ragu.",
    "Lord Blackwood discovered what was really in the 'Miscellaneous Trimmings' tray.", 
    "Lord Blackwood threatened to publish photos of unglamorous, thick ankles.",
    "Lord Blackwood refused to eat the WI flapjacks, an absolute insult.", 
    "Lord Blackwood witnessed an embarrassing incident of weeping in the vestry."
];