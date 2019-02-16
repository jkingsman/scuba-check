import { CHECKTYPES } from "app/components/constants";

const checks = [
    {
        prompt: "Boots, wetsuit on.",
        category: "Initial",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Primary tank straps tight and straight",
        category: "Primary Tank",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Primary tank full on",
        category: "Primary Tank",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "BCD inflates",
        category: "BCD",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "BCD butt dump tightened and secure",
        category: "BCD",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "BCD inflator bracket tightened",
        category: "BCD",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Full pressure inflate test",
        category: "BCD",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Hip weights in place and secure",
        category: "Weights",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Tank trim in place and secure",
        category: "Weights",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "STA weight secure and bolted tightly",
        category: "Weights",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Weights balanced appropriately for pony tanks",
        category: "Weights",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Primary tank pressure reads >3200psi",
        category: "Air (Primary)",
        checkType: CHECKTYPES.PRESSURE,
        pressure: 3200,
    },
    {
        prompt: "Primary regulator breathes",
        category: "Air (Primary)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Primary regulator needle steady",
        category: "Air (Primary)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Primary regulator smells good",
        category: "Air (Primary)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 tank full on",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 tank pressure reads >2800psi",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.PRESSURE,
        pressure: 2800,
    },
    {
        prompt: "Pony 1 smells good",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 regulator breathes",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 regulator needle steady",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 regulator stowed tightly on correct side",
        category: "Air (Pony 1)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 tank full on",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 tank pressure reads >2800psi",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.PRESSURE,
        pressure: 2800,
    },
    {
        prompt: "Pony 2 smells good",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 regulator breathes",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 regulator needle steady",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 regulator stowed tightly on correct side",
        category: "Air (Pony 2)",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Don gear",
        category: "Don Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 1 on left side",
        category: "Releases",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Pony 2 on right side",
        category: "Releases",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Waist strap tightened and stowed",
        category: "Releases",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Shears centerline",
        category: "Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Deploy and stow shears",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Primary light deploy and stow",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Backup light deploy and stow",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Mask and spare mask around neck",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Primary computer powers on and is secure",
        category: "Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Backup computer powers on and is secure",
        category: "Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Backup compass is secure",
        category: "Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "dSMB and reel secure",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Slate secure and erased",
        category: "Gear",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Whistle deploy and stow",
        category: "Gear",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Deco plan on slate, if applicable",
        category: "Planning",
        checkType: CHECKTYPES.GONOGO,
    },
    {
        prompt: "Deploy longhose",
        category: "Drill",
        checkType: CHECKTYPES.CHECKSTOW,
    },
    {
        prompt: "Stow key, stash phone, don gloves, bring fins. Dive safe.",
        category: "Go Dive",
        checkType: CHECKTYPES.GONOGO,
    },
];

export default checks;
