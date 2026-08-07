window.DESK_DATA = {
  categories: [
    { id: "mice", label: "Mice & Input", icon: "mouse" },
    { id: "keyboards", label: "Keyboards", icon: "keyboard" },
    { id: "monitors", label: "Monitors", icon: "monitor" },
    { id: "chairs", label: "Chairs & Ergonomics", icon: "chair" },
    { id: "desks", label: "Desks & Standing Frames", icon: "table" }
  ],

  microswitches: {
    "huano-btspd-80m": {
      name: "Huano Transparent Blue Shell Pink Dot (BTSPD)",
      force: "65g - 70g",
      lifespan: "80 Million Clicks",
      feel: "Deep 'thock' sound (~49–52 dB), extremely snappy return, zero pre-travel slop.",
      bestFor: "Main Left/Right Clicks (M1/M2)"
    },
    "huano-bspd-80m": {
      name: "Huano Solid Blue Shell Pink Dot (BSPD)",
      force: "70g",
      lifespan: "80 Million Clicks",
      feel: "Ultra-crisp snap, sharp tactile bump, highly consistent actuation.",
      bestFor: "Side Thumb Buttons & Sniper Trigger"
    },
    "huano-bspd-90deg": {
      name: "Huano Blue Shell Pink Dot 80M (90° Bent Pins)",
      force: "70g",
      lifespan: "80 Million Clicks",
      feel: "Crisp tactile snap engineered for right-angle side PCB contact pads.",
      bestFor: "Razer Basilisk M4/M5 Side Buttons"
    },
    "kailh-5mm-tactile": {
      name: "Kailh 6x6x5.0mm High-Durability Tactile (50M)",
      force: "65g - 70g",
      lifespan: "50 Million Clicks",
      feel: "Maximum durability 2-pin 5.0mm square tactile switch. Ultra-crisp rebound, sharp tactile snap, built for heavy non-silent usage.",
      bestFor: "G502 Middle Click, DPI Up/Down & Profile Buttons"
    },
    "kailh-silent-5mm": {
      name: "Kailh Mute 6x6x5.0mm Silent Square 2-Pin",
      force: "60g - 65g",
      lifespan: "30 Million Clicks",
      feel: "Near-silent (~35 dB) muted actuation with a cushioned rubber bottom-out and solid 5.0mm vertical fit.",
      bestFor: "Office Middle Mouse Clicks & Gesture Wing Buttons (MX Master 3S, M650)"
    },
    "huano-silent-yellow-73mm": {
      name: "Huano Silent Square Yellow Dot 2-Pin (6x6x7.3mm)",
      force: "60g - 65g",
      lifespan: "30 Million Clicks",
      feel: "Near-silent (~35–38 dB), firm tactile return without squishy rubber bottom-out.",
      bestFor: "Office Main Clicks (MX Master 3S, M650)"
    },
    "zippy-df3-p1": {
      name: "Zippy DF3-P1 (3-Pin Mechanical)",
      force: "60g",
      lifespan: "60 Million Clicks",
      feel: "Tactile mechanical snap (~46 dB acoustic profile), gold-alloy oxidation resistant contacts.",
      bestFor: "MX Master 3S High-Durability Mod (Clipped Pin 3)"
    },
    "omron-d2f-01f": {
      name: "Japanese Omron D2F-01F",
      force: "50g - 60g",
      lifespan: "10 Million Clicks",
      feel: "Ultra-smooth tactile depression, gold alloy contacts, rich metallic tone.",
      bestFor: "Custom Heavy Productivity / Light Click Enthusiasts"
    }
  },

  products: [
    {
      id: "g502-lightspeed",
      category: "mice",
      name: "G502 LIGHTSPEED Wireless",
      brand: "Logitech",
      status: "Owned",
      isTopPick: true,
      topPickBadge: "Best Overall Ergonomic & Moddable Gaming Mouse",
      price: "$79 - $110",
      purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/g502-lightspeed-wireless-gaming-mouse.910-005565.html",
      tags: ["Wireless", "11 Buttons", "HERO 25K", "100% Mechanical", "G-Shift", "Solder Moddable"],
      
      summary: "Primary daily workhorse for MOBAs, FPS, and high-DPI productivity. Features 11 fully programmable mechanical buttons, dual-mode hyper-fast scroll wheel, and complete switch moddability.",
      
      properties: {
        "Ergonomic Rating": "9.5 / 10",
        "Grip Style Match": "Palm / Hybrid Claw",
        "Wrist Strain Index": "Low (Thumb Rest Wing)",
        "Pinky Support": "Requires Sugru / Blu-Tack Mod",
        "Weight Profile": "114g Stock → 101.5g Modded",
        "Sensor & Speed": "HERO 25K | 1000Hz Polling",
        "Battery Specs": "240mAh Stock → 500mAh Modded (120h+)",
        "Switch Mounting": "100% Through-Hole Mechanical (All 11)"
      },

      lifespanEstimates: {
        chassisLife: "7 - 10 Years (HERO 25K Sensor & main PCB durability)",
        stockSwitchesLife: "6 - 12 Months (~5M - 10M Clicks before low-voltage double-clicking)",
        moddedSwitchesLife: "5 - 8+ Years (80 Million Clicks via Huano BTSPD gold contacts)",
        limitingFactor: "Li-Po battery chemical capacity decay (~3-5 years) or main scroll wheel mechanical axle wear."
      },

      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "Omron D2FC-F-K (50M)", lifespan: "50M Rated (Fails ~5M-10M in wireless mode)", sound: "52 - 55 dB (High clack)" },
        { buttonGroup: "Side Forward & Back (G4/G5)", switchModel: "Omron D2FC-F-7N (20M)", lifespan: "20M Clicks", sound: "50 - 52 dB" },
        { buttonGroup: "Thumb Sniper Clutch", switchModel: "Omron D2FC-F-7N (20M)", lifespan: "20M Clicks", sound: "50 - 52 dB" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "10M Clicks", sound: "48 - 50 dB" },
        { buttonGroup: "Index Finger DPI Up/Down (G7/G8)", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "10M Clicks", sound: "48 - 50 dB" },
        { buttonGroup: "Top Profile Switch (G9)", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "10M Clicks", sound: "48 - 50 dB" },
        { buttonGroup: "Scroll Tilts (Left/Right)", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "10M Clicks", sound: "48 - 50 dB" }
      ],

      modsAndAddons: [
        { name: "USB-C Daughterboard Conversion Mod", difficulty: "Easy", impact: "Replaces recessed Micro-USB port with native USB-C charging." },
        { name: "500mAh Double Battery Upgrade", difficulty: "Moderate", impact: "Doubles battery runtime from 48h to 120h+ with net 1.5g weight reduction." },
        { name: "G903 Aluminum Scroll Wheel Swap", difficulty: "Moderate", impact: "Cuts 9g of front-heavy mass (14.5g steel wheel -> 5.5g aluminum wheel)." },
        { name: "POWERPLAY Coil & Bottom Door Removal", difficulty: "Easy", impact: "Saves 10.5g of unnecessary bottom chassis weight." },
        { name: "Sugru / Bostik Blu-Tack Pinky Rest Wing", difficulty: "Easy", impact: "Eliminates right-side pinky desk drag on mousepads." },
        { name: "0.5mm Rogers PORON Acoustic Foam Lining", difficulty: "Easy", impact: "Lowers high-pitched plastic shell resonance by 3-4 dB." },
        { name: "Corepad / Tiger Ice PTFE Skates", difficulty: "Easy", impact: "Upgrades glide speed and stops bottom drag." }
      ],

      ergonomicDetails: {
        scoreReason: "Scored 9.5/10 for its asymmetrical right-hand contour, 14mm flared thumb rest wing, and double-beveled index DPI buttons. It prevents thumb drag and accommodates long gaming/work sessions without wrist fatigue.",
        specificShapeContour: "132mm length x 75mm width x 40mm arch height. Features an 18° downward right-hand slope that guides hand placement into an active hybrid claw/palm grip. Left thumb ledge keeps thumb fully elevated above the pad. Index finger rest features double-beveled G7/G8 button ledges reachable without shifting hand grip.",
        comparisonVsCloseCompetitors: "Vs Razer Basilisk V3: G502's thumb wing has a steeper grip angle and its index DPI buttons (G7/G8) are much easier to actuate than Basilisk's top DPI toggle. Vs Logitech G Pro X Superlight: G502 provides a dedicated thumb wing and 11 buttons (vs GPX's bare egg shape 5-button shell). Vs MX Master 3S: G502 is 11mm lower in height (40mm vs 51mm), allowing fast twitch movements and 1000Hz gaming polling.",
        gripCompatibility: "Optimal for Medium-to-Large hands using Palm or Hybrid Claw grip.",
        wristAndPosture: "18° downward ergonomic slope reduces wrist pronation while thumb rest removes pad drag."
      },

      pros: [
        "100% mechanical through-hole switches across all 11 buttons (fully solder-replaceable)",
        "Dual-mode scroll wheel with hyper-fast spin and tactile ratchet",
        "G-Shift functionality enables up to 22 executable commands across 2 software layers",
        "Weight-neutral double battery capacity mod (upgrades to 500mAh while reducing net weight by 1.5g)",
        "High weight-reduction ceiling (induction coil, battery tray, & wheel swap saves ~18g total)",
        "Sculpted thumb rest with dedicated sniper clutch button"
      ],

      cons: [
        "Stock Omron 50M (D2FC-F-K) switches prone to low-voltage double-click contact oxidation",
        "Stock front-heavy weight bias due to heavy 14.5g steel scroll wheel",
        "Recessed stock Micro-USB charging port prone to wear",
        "Complex disassembly requiring tracking 22 internal screws"
      ],

      setupNotes: [
        "BATTERY PINOUT SAFETY: Standard aftermarket 3.7V Li-Po batteries reverse GND (Black) and NTC (White) wires. Logitech pinout is strictly Pin 1: Red (+), Pin 2: White (NTC), Pin 3: Black (-). Swap wires on JST 1.25mm plug before connection.",
        "BATTERY & WEIGHT MATH: Stock 240mAh cell (5.5g) + bracket (5.5g) = 11.0g. Upgraded 500mAh cell (9.0g) + tape (0.5g) = 9.5g. Delta: -1.5g net weight with +108% battery runtime.",
        "WEIGHT SAVINGS CEILING: Remove POWERPLAY puck door (-5g), copper coil (-5.5g), and swap steel wheel for G903 aluminum wheel (-9g). Saves ~19.5g total.",
        "PINKY REST MOD: Mold Sugru or Bostik Blu-Tack along lower right edge to eliminate pinky drag.",
        "CHARGING PORT MOD: Install aftermarket G502 Wireless Type-C daughterboard or 540° magnetic charging tip.",
        "ACOUSTIC TUNING: Line lower chassis floor with 0.5mm Rogers PORON foam to eliminate plastic echo."
      ],

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click (M1 / M2)",
          recommendedSwitchId: "huano-btspd-80m",
          reason: "Eliminates double-clicking, delivers deep 'thock' tone (~49–51 dB), and offers max 80M click durability."
        },
        {
          buttonGroup: "Side Forward & Back (G4 / G5)",
          recommendedSwitchId: "huano-bspd-80m",
          reason: "Solid housing creates 80M durability with complete tactile and acoustic uniformity."
        },
        {
          buttonGroup: "Thumb Sniper / G-Shift Clutch",
          recommendedSwitchId: "huano-bspd-80m",
          reason: "Crisp 70g actuation prevents accidental sniper triggers during twitch movements."
        },
        {
          buttonGroup: "Middle Scroll Wheel Click (G3)",
          recommendedSwitchId: "kailh-5mm-tactile",
          reason: "50M click rated 5.0mm Kailh tactile switch. Max durability footprint under scroll cradle."
        },
        {
          buttonGroup: "Index Finger DPI Up & Down (G7 / G8)",
          recommendedSwitchId: "kailh-5mm-tactile",
          reason: "50M click rated 5.0mm Kailh square tactile switch clearing upper shell plastics."
        },
        {
          buttonGroup: "Top Profile Switch Button (G9)",
          recommendedSwitchId: "kailh-5mm-tactile",
          reason: "Replaces weak stock membrane button with 50M click durable 2-pin tactile switch."
        },
        {
          buttonGroup: "Scroll Wheel Tilt Left & Right",
          recommendedSwitchId: "kailh-5mm-tactile",
          reason: "High durability 50M rating for heavy horizontal scrolling tasks."
        }
      ]
    },

    {
      id: "mx-master-3s",
      category: "mice",
      name: "MX Master 3S",
      brand: "Logitech",
      status: "Owned",
      isTopPick: true,
      topPickBadge: "Best Dedicated Stationary Productivity Mouse",
      price: "$99",
      purchaseUrl: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006557.html",
      tags: ["Productivity", "MagSpeed Wheel", "Darkfield 8K", "Silent Clicks", "USB-C", "PCB Repairable"],

      summary: "Dedicated stationary office productivity mouse featuring electromagnetic MagSpeed scrolling, side thumb wheel, gesture button, and ultra-quiet stock clicking.",

      properties: {
        "Ergonomic Rating": "9.8 / 10",
        "Grip Style Match": "Strict Palm Grip",
        "Wrist Strain Index": "Ultra-Low (57° Tilt Angle)",
        "Pinky Support": "Full Flared Right Side",
        "Weight Profile": "141g Heavy Stationary",
        "Sensor & Speed": "Darkfield 8K (Glass) | 125Hz Polling",
        "Battery Specs": "500mAh Native USB-C (70 Days)",
        "Switch Mounting": "2-Pin Silent Square (7.45mm height)"
      },

      lifespanEstimates: {
        chassisLife: "6 - 8 Years (Darkfield 8K sensor & MagSpeed electromagnetic wheel)",
        stockSwitchesLife: "8 - 18 Months (~3M - 8M Clicks before silent dampener collapse)",
        moddedSwitchesLife: "5 - 7+ Years (60 Million Clicks via Zippy DF3-P1 or 30M Huano Silent)",
        limitingFactor: "Fragile FFC ribbon cables during repair or outer rubberized palm coating peeling over time."
      },

      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "Kailh Silent Square 2-Pin (7.45mm)", lifespan: "10M Rated (Fails ~3M-5M from dampener fatigue)", sound: "34 - 36 dB (Near-silent)" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "Kailh Silent Square 2-Pin (5.0mm)", lifespan: "10M Clicks", sound: "35 dB" },
        { buttonGroup: "Thumb Gesture Wing Button", switchModel: "Tactile Membrane Pad", lifespan: "5M Clicks", sound: "32 dB" },
        { buttonGroup: "Side Wheel Forward/Back", switchModel: "Kailh Silent Square 2-Pin (7.3mm)", lifespan: "10M Clicks", sound: "35 dB" }
      ],

      modsAndAddons: [
        { name: "Zippy DF3-P1 60M Mechanical Switch Mod", difficulty: "Moderate", impact: "Replaces silent switches with 60M tactile mechanical switches." },
        { name: "0.1mm Aluminum Plunger Shim Tape", difficulty: "Easy", impact: "Bridges 0.15mm gap between 7.45mm stock and 7.30mm aftermarket switches." },
        { name: "0.1mm Enamel Jumper Wire Trace Repair", difficulty: "Advanced", impact: "Bridges torn copper pads if desoldering damages PCB traces." },
        { name: "Corepad Replacement PTFE Skates", difficulty: "Easy", impact: "Restores smooth glide on office desk pads." }
      ],

      ergonomicDetails: {
        scoreReason: "Scored 9.8/10 as the gold standard for office desk work. Its 57-degree vertical incline rotates the forearm into a natural handshake posture, relieving median nerve pressure.",
        specificShapeContour: "125mm length x 84.3mm width x 51mm arch height. Steep 57° vertical incline prevents forearm pronation. Features a 22mm wide thumb rest wing with integrated gesture pad and flared right-side contour supporting ring/pinky fingers.",
        comparisonVsCloseCompetitors: "Vs MX Anywhere 3S: MX Master fills the palm completely, eliminating claw cramps, whereas Anywhere 3S is a flat fingertip travel mouse. Vs G502: MX Master is 11mm taller with a much wider palm arch, filling the hand fully for office productivity, but its 141g weight and 125Hz polling limit make it poor for gaming. Vs Keychron M6: MX Master features a superior electromagnetic MagSpeed wheel and deeper thumb rest wing.",
        gripCompatibility: "Designed strictly for Medium to Large hands using a Palm Grip.",
        wristAndPosture: "57° elevated ergonomic angle reduces forearm pronation and carpal tunnel compression."
      },

      pros: [
        "Electromagnetic MagSpeed wheel auto-shifts from line-by-line ratchet to free-spin",
        "Thumb gesture button and dedicated horizontal side scroll wheel",
        "Darkfield 8K DPI sensor tracks smoothly on glass and high-gloss office surfaces",
        "Near-silent stock operation (~35 dB) ideal for quiet office environments",
        "Native USB-C fast charging port"
      ],

      cons: [
        "Low 125Hz polling rate causes cursor jitter on high refresh rate displays (144Hz+)",
        "Heavy 141g weight causes wrist fatigue during fast mouse movements or gaming",
        "Stock silent switches prone to internal contact oxidation and rubber dampener fatigue",
        "Fragile FFC ribbon cable and easily lifted PCB solder pads during desoldering"
      ],

      setupNotes: [
        "TRACE REPAIR BLUEPRINT: If a solder pad is lifted during desoldering, scrape copper mask on trace, apply Rosin Flux, and bridge 0.1mm enamel jumper wire directly to switch pin.",
        "PRE-TRAVEL SHIM TUNING: Stock switches are 7.45mm tall. Standard 7.30mm switches leave 0.15mm gap. Stick 0.1mm aluminum foil tape onto button plungers.",
        "EMERGENCY CONTACT FIX: Flushing failing switches with 91%+ IPA temporarily dissolves contact oxidation before full soldering repair."
      ],

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click (Option A - Silent)",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Matches stock silent acoustic profile (~35–38 dB) while providing snappier tactile feel and 30M click lifespan."
        },
        {
          buttonGroup: "Main Left & Right Click (Option B - Durability)",
          recommendedSwitchId: "zippy-df3-p1",
          reason: "Clipped Pin 3 mechanical mod. Eliminates squishy rubber feel, increases tactile feedback (~46 dB), and ensures 60M click durability."
        },
        {
          buttonGroup: "Middle Scroll Wheel Click (G3)",
          recommendedSwitchId: "kailh-silent-5mm",
          reason: "30M click rated 5.0mm Kailh Mute Silent switch. Fits under MagSpeed wheel cage maintaining ~35 dB silent operation."
        },
        {
          buttonGroup: "Thumb Gesture Wing Button",
          recommendedSwitchId: "kailh-silent-5mm",
          reason: "30M click 5.0mm Kailh Mute switch. Replaces delicate stock tactile pad under rubber thumb ledge."
        },
        {
          buttonGroup: "Side Wheel Forward & Back Buttons",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "30M click silent 7.3mm switch keeping side thumb navigation completely silent."
        }
      ]
    },

    {
      id: "signature-m650",
      category: "mice",
      name: "Signature M650",
      brand: "Logitech",
      status: "Owned",
      isTopPick: false,
      topPickBadge: "Best Compact Burner / Portable Mouse",
      price: "$39",
      purchaseUrl: "https://www.logitech.com/en-us/products/mice/m650-signature-wireless-mouse.html",
      tags: ["Portable", "AA Battery", "SmartWheel", "Silent Touch", "Logi Bolt"],

      summary: "Compact, long-battery-life portable office mouse featuring SmartWheel adaptive scrolling, silent switch dampers, and simple dual-side button navigation.",

      properties: {
        "Ergonomic Rating": "7.5 / 10",
        "Grip Style Match": "Fingertip / Claw",
        "Wrist Strain Index": "Moderate (No Thumb Wing)",
        "Weight Profile": "101g (With 1x AA Battery)",
        "Sensor & Speed": "Logitech Optical | 125Hz Polling",
        "Battery Specs": "1x AA Battery (24 Months)",
        "Switch Mounting": "2-Pin Through-Hole (Main: 7.3mm, Middle: 5.0mm)",
        "Teardown Repairability": "10 / 10 (3-Screw Disassembly)"
      },

      lifespanEstimates: {
        chassisLife: "5 - 7 Years (Simple rugged PCB)",
        stockSwitchesLife: "12 - 24 Months (~5M - 10M Clicks)",
        moddedSwitchesLife: "4 - 6 Years (30 Million Clicks via Huano Silent Yellow Dot)",
        limitingFactor: "Middle click wheel carriage plastic wear or AA battery terminal spring corrosion."
      },

      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "Kailh / Logi Silent Square 2-Pin (7.3mm)", lifespan: "10M Clicks", sound: "34 - 36 dB (Near-silent)" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "5M Clicks", sound: "46 - 48 dB" },
        { buttonGroup: "Side Forward & Back (M4/M5)", switchModel: "Kailh Silent Square 2-Pin (7.3mm)", lifespan: "10M Clicks", sound: "35 dB" }
      ],

      modsAndAddons: [
        { name: "Huano/Kailh Silent Yellow Dot 30M Switch Swap", difficulty: "Easy", impact: "Upgrades main silent clicks from 10M to 30M click lifespan." },
        { name: "Kailh Mute 5.0mm Middle Click Swap", difficulty: "Easy", impact: "Fixes stock middle-click mechanical fatigue." },
        { name: "Tiger Ice PTFE Skates", difficulty: "Easy", impact: "Smooths bottom glide." }
      ],

      ergonomicDetails: {
        scoreReason: "Scored 7.5/10 due to its small, flat travel form factor. It lacks thumb wing support and palm arch height, which causes hand cramping during prolonged desktop use for larger hands.",
        specificShapeContour: "107mm length x 61.8mm width x 37.8mm height. Symmetrical compact curvature with rubberized side grip panels. Lacks thumb ledge or high palm arch.",
        comparisonVsCloseCompetitors: "Vs MX Anywhere 3S: M650 is half the price ($39 vs $79) with quieter clicks and a far simpler 3-screw repair chassis. Vs M650 L: Standard M650 is compact for travel, whereas M650 L adds 11mm length for larger hands.",
        gripCompatibility: "Best for Small-to-Medium hands using Fingertip or Claw grip.",
        wristAndPosture: "Flat posture requires more wrist movement over long periods."
      },

      pros: [
        "Exceptional 24-month battery life on a single AA battery",
        "SmartWheel automatically switches between precise ratchet and free-speed scrolling",
        "Quiet silent-touch clicking out of the box (~35 dB)",
        "Simple, highly durable chassis structure that is easy to disassemble and solder"
      ],

      cons: [
        "Lacks onboard memory for custom complex keybinds",
        "Basic optical sensor unsuitable for high-speed precision gaming",
        "Stock middle-click switch suffers mechanical fatigue under heavy use",
        "125Hz polling rate limit"
      ],

      setupNotes: [
        "TEARDOWN SEQUENCE: Remove AA battery, peel 3 bottom PTFE skates using mild hairdryer heat, remove 3 Phillips screws, and gently unclip SmartWheel carriage.",
        "BURNER MODDING: Excellent practice board for through-hole soldering before attempting complex G502 or MX Master 3S repairs."
      ],

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Direct replacement for stock silent 2-pin switches. Delivers 30M click lifespan with crisp silent actuation (~35 dB)."
        },
        {
          buttonGroup: "Middle Mouse Click (G3)",
          recommendedSwitchId: "kailh-silent-5mm",
          reason: "30M click 5.0mm Kailh Mute switch. Fits under SmartWheel carriage delivering quiet (~35 dB) tactile response."
        },
        {
          buttonGroup: "Side Navigation Buttons (M4 / M5)",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Maintains silent acoustic profile (~35 dB) across side thumb buttons."
        }
      ]
    },

    {
      id: "basilisk-v3-x",
      category: "mice",
      name: "Basilisk V3 X HyperSpeed",
      brand: "Razer",
      status: "Alternative",
      isTopPick: false,
      topPickBadge: "Evaluated & Returned",
      price: "$39 - $59",
      purchaseUrl: "https://www.razer.com/gaming-mice/razer-basilisk-v3-x-hyperspeed",
      tags: ["Wireless", "Razer 18K", "Bluetooth/2.4G", "AA Battery", "Mechanical"],

      summary: "Ergonomic wireless gaming mouse with thumb rest support, Razer 5G 18K optical sensor, and dual-mode wireless connectivity.",

      properties: {
        "Ergonomic Rating": "9.0 / 10",
        "Grip Style Match": "Palm / Claw",
        "Wrist Strain Index": "Low (Thumb Rest Ledge)",
        "Weight Profile": "110g (With AA Battery)",
        "Sensor & Speed": "Razer 5G 18,000 DPI | 1000Hz Polling",
        "Acoustic Rating": "57-60 dB Stock → 50 dB Modded",
        "Power Source": "1x AA Battery (235h 2.4G / 535h BT)",
        "Switch Mounting": "3-Pin Mechanical (Main: Std, Sides: 90° Bent)"
      },

      lifespanEstimates: {
        chassisLife: "1 - 3 Years (High risk of 2.4GHz HyperSpeed USB dongle chip failure)",
        stockSwitchesLife: "18 - 36 Months (~15M - 25M Clicks)",
        moddedSwitchesLife: "5 - 7 Years (80 Million Clicks via Huano BTSPD)",
        limitingFactor: "Hardware dongle IC solder micro-fractures (Device Descriptor Request Failed)."
      },

      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "Razer Gen-2 Mechanical (Kailh GM 4.0 variant)", lifespan: "60M Rated", sound: "57 - 60 dB (Loud clack)" },
        { buttonGroup: "Side Forward & Back (M4/M5)", switchModel: "90° Bent Pin 3-Pin Mechanical", lifespan: "20M Clicks", sound: "55 dB" },
        { buttonGroup: "Middle Scroll & DPI Buttons", switchModel: "Standard 2-Pin Tactile DIP (5.0mm)", lifespan: "10M Clicks", sound: "52 dB" }
      ],

      modsAndAddons: [
        { name: "0.5mm Rogers PORON Battery Cavity Foam", difficulty: "Easy", impact: "Dampens loud hollow AA battery cavity echo from 60dB to 50dB." },
        { name: "Huano BTSPD 80M Main Switch Swap", difficulty: "Moderate", impact: "Replaces stiff 70g stock springs with crisp 80M switches." },
        { name: "90° Bent Pin Side Switch Upgrade", difficulty: "Moderate", impact: "Upgrades side buttons to Huano BSPD 80M." }
      ],

      ergonomicDetails: {
        scoreReason: "Scored 9.0/10 for its comfortable right-hand ergonomic contour and wide thumb rest wing. Deducted 1.0 point due to rear-heavy AA battery balance and hollow click echo.",
        specificShapeContour: "130mm length x 75mm width x 42mm height. Ergonomic right-hand swoop heavily inspired by G502, with a flared left thumb rest wing and rubberized side grip textures.",
        comparisonVsCloseCompetitors: "Vs G502 LIGHTSPEED: Nearly identical outer shell shape, but Basilisk's internal AA battery cavity creates a rear-heavy weight balance and hollow acoustic resonance (~60 dB) compared to G502's balanced internal battery tray.",
        gripCompatibility: "Ideal for Medium-to-Large hands using Palm or Claw grip.",
        wristAndPosture: "Low wrist strain with comfortable thumb rest wing support."
      },

      pros: [
        "Ergonomic shell contour with comfortable thumb rest wing",
        "Dual connectivity (2.4GHz HyperSpeed low-latency + Bluetooth LE)",
        "Standard 3-pin mechanical main switch sockets allow custom switch soldering",
        "Long battery life on single AA cells"
      ],

      cons: [
        "High defect rate on 2.4GHz HyperSpeed USB dongle IC ('Device Descriptor Request Failed' thermal failure)",
        "Hollow interior AA battery cavity creates loud acoustic echo chamber (~57–60 dB click volume)",
        "Stiff 70g stock main switch springs cause finger fatigue",
        "Side buttons require specialized 90° pre-bent pin switches"
      ],

      setupNotes: [
        "DEFECT DIAGNOSIS: Returned unit to Amazon due to hardware-level solder micro-fracture / thermal failure in 2.4GHz HyperSpeed USB receiver chip.",
        "CAVITY ACOUSTIC DAMPENING: If retained, line inner AA battery cavity walls with 0.5mm self-adhesive Rogers PORON foam to stop click resonance."
      ],

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click",
          recommendedSwitchId: "huano-btspd-80m",
          reason: "Replaces stiff stock Razer Gen-2 switches. Lowers click force, increases tactile snap, and dampens high-pitched clack (~49-51 dB)."
        },
        {
          buttonGroup: "Side Navigation Buttons (M4 / M5)",
          recommendedSwitchId: "huano-bspd-90deg",
          reason: "80M click rated 90° right-angle pre-bent pins to mate with vertical side PCB contact pads."
        },
        {
          buttonGroup: "Middle Scroll Click & DPI Cycle",
          recommendedSwitchId: "kailh-5mm-tactile",
          reason: "50M click rated 5.0mm Kailh square tactile switch clearing scroll wheel cradle."
        }
      ]
    }
  ]
};
