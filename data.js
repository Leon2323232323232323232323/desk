window.DESK_DATA = {
  categories: [
    { id: "mice", label: "Mice & Input", icon: "mouse" },
    { id: "monitors", label: "Monitors", icon: "monitor" },
    { id: "keyboards", label: "Keyboards", icon: "keyboard" },
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
      bestFor: "Office Middle Mouse Clicks & Gesture Wing Buttons (MX Master 3S, M650, Keychron M6)"
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
    },
    "rog-microswitch-70m": {
      name: "ASUS ROG Push-Fit Micro Switch (70M)",
      force: "65g",
      lifespan: "70 Million Clicks",
      feel: "Gold-plated electro-junction, crisp actuation feel, zero solder required (Hot-swappable).",
      bestFor: "ASUS Push-Fit Switch Socket II (M1/M2)"
    },
    "huano-yellow-5mm": {
      name: "Huano Brown Shell Yellow Dot (6x6x5.0mm Square)",
      force: "65g - 70g",
      lifespan: "30 Million Clicks",
      feel: "Near-silent (~35 dB), heavy tactile bump, compact 5.0mm vertical footprint.",
      bestFor: "Middle Click (G3), DPI & Profile Buttons"
    }
  },

  products: [
    /* ==========================================================================
       1. LOGITECH G502 LIGHTSPEED WIRELESS
       ========================================================================== */
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
      procurement: [
        { label: "Main Switches (M1/M2)", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
        { label: "Side Switches (G4/G5/Sniper)", cnTerm: "华诺 蓝壳粉点 8000万次" },
        { label: "Square 5mm Switches (G3/G7/G8/G9)", cnTerm: "6x6x5mm 微动 开关 5000万次" },
        { label: "Type-C Daughterboard", cnTerm: "G502无线 Type-C 改装小板" },
        { label: "Light Scroll Wheel", cnTerm: "G903 铝合金滚轮" },
        { label: "500mAh Battery (3.7V)", cnTerm: "3.7V 500mAh 1.25 3P 锂电池" },
        { label: "PTFE Skates", cnTerm: "G502 LIGHTSPEED 脚贴 虎符冰符" }
      ],
      repairability: {
        score: "6.5 / 10 (Moderate Risk)",
        screwCount: "22 Screws (Phillips #0)",
        fragilePoints: [
          "G4/G5 side-button vertical PCB ribbon cable ZIF latch",
          "Factory lead-free solder on mainboard requires ~350°C to melt"
        ],
        recommendedIronTemp: "340°C - 350°C (Use flux paste)"
      },
      weightBalance: {
        stockBalance: "Front-Heavy (14.5g steel scroll wheel tilts nose down)",
        moddedBalance: "Perfect Center (G903 aluminum wheel swap shifts mass to mid-shell)"
      },
      softwareConfig: {
        utility: "Logitech G HUB + Onboard Memory Manager (OMM.exe)",
        runtimeDependency: "lghub_agent.exe required for Alt+Tab sequence hold macros",
        baseLayer: "M1: Left | M2: Right (GestureSign) | M3: Middle | G4: Alt-Tab Hold | G5: G-Shift | G7: Task View | G8: Play/Pause | Tilts: Scroll L/R",
        gShiftLayer: "M1: Task View | M2: Minimize All | M3: Enter | G4: Screenshot | G5: Battery Check | Tilts: Desktop Swipe L/R"
      },
      glidesAndPad: {
        stockSkates: "Factory Black PTFE (High friction / scratchy on raw wood)",
        recommendedSkates: "Tiger Ice v2 / Corepad Pro Pure White PTFE",
        recommendedPadType: "4mm/5mm Cloth Desk Mat (Dampens acoustic vibration and absorbs heavy mouse impacts)"
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
        { buttonGroup: "Main Left & Right Click (M1 / M2)", recommendedSwitchId: "huano-btspd-80m", reason: "Eliminates double-clicking, delivers deep 'thock' tone (~49–51 dB), and offers max 80M click durability." },
        { buttonGroup: "Side Forward & Back (G4 / G5)", recommendedSwitchId: "huano-bspd-80m", reason: "Solid housing creates 80M durability with complete tactile and acoustic uniformity." },
        { buttonGroup: "Thumb Sniper / G-Shift Clutch", recommendedSwitchId: "huano-bspd-80m", reason: "Crisp 70g actuation prevents accidental sniper triggers during twitch movements." },
        { buttonGroup: "Middle Scroll Wheel Click (G3)", recommendedSwitchId: "kailh-5mm-tactile", reason: "50M click rated 5.0mm Kailh tactile switch. Max durability footprint under scroll cradle." },
        { buttonGroup: "Index Finger DPI Up & Down (G7 / G8)", recommendedSwitchId: "kailh-5mm-tactile", reason: "50M click rated 5.0mm Kailh square tactile switch clearing upper shell plastics." },
        { buttonGroup: "Top Profile Switch Button (G9)", recommendedSwitchId: "kailh-5mm-tactile", reason: "Replaces weak stock membrane button with 50M click durable 2-pin tactile switch." },
        { buttonGroup: "Scroll Wheel Tilt Left & Right", recommendedSwitchId: "kailh-5mm-tactile", reason: "High durability 50M rating for heavy horizontal scrolling tasks." }
      ]
    },

    /* ==========================================================================
       2. LOGITECH MX MASTER 3S
       ========================================================================== */
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
      procurement: [
        { label: "Silent Switches (Option A)", cnTerm: "华诺 棕壳黄点 静音方型微动 6x6x7.3" },
        { label: "Mechanical Switches (Option B)", cnTerm: "ZIPPY DF3-P1 6000万次" },
        { label: "0.1mm Enamel Wire", cnTerm: "漆包线 飞线 0.1mm" },
        { label: "Rosin Flux Paste", cnTerm: "机械师 助焊膏" },
        { label: "Plunger Shim Tape", cnTerm: "铝箔胶带 0.1mm" },
        { label: "PTFE Skates", cnTerm: "MX Master 3S 脚贴 虎符冰符" }
      ],
      repairability: {
        score: "4.0 / 10 (High Risk)",
        screwCount: "6 Screws (Torx T5/T6 + Phillips #0)",
        fragilePoints: [
          "Fragile white FFC ribbon cable connecting top gesture board to lower mainboard",
          "PCB solder pads lift easily if desoldered above 360°C"
        ],
        recommendedIronTemp: "330°C - 340°C"
      },
      weightBalance: {
        stockBalance: "Center-Rear Heavy (141g total mass with heavy Li-Po cell)",
        moddedBalance: "Center-Rear Heavy"
      },
      softwareConfig: {
        utility: "Logi Options+ / GestureSign",
        runtimeDependency: "LogiOptionsPlus_Agent.exe",
        baseLayer: "MagSpeed Auto-Shift Wheel | Side Wheel: Horizontal Scroll | Gesture Wing: Hold & Drag for Desktops",
        gShiftLayer: "N/A (Managed via Logi Options+ Smart Actions)"
      },
      glidesAndPad: {
        stockSkates: "Factory Thin Black PTFE",
        recommendedSkates: "Corepad Skatez Replacement Glides",
        recommendedPadType: "Works directly on Glass, Wood, or Leather Desk Pads (Darkfield 8K sensor)"
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
        { buttonGroup: "Main Left & Right Click (Option A - Silent)", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "Matches stock silent acoustic profile (~35–38 dB) while providing snappier tactile feel and 30M click lifespan." },
        { buttonGroup: "Main Left & Right Click (Option B - Durability)", recommendedSwitchId: "zippy-df3-p1", reason: "Clipped Pin 3 mechanical mod. Eliminates squishy rubber feel, increases tactile feedback (~46 dB), and ensures 60M click durability." },
        { buttonGroup: "Middle Scroll Wheel Click (G3)", recommendedSwitchId: "kailh-silent-5mm", reason: "30M click rated 5.0mm Kailh Mute Silent switch. Fits under MagSpeed wheel cage maintaining ~35 dB silent operation." },
        { buttonGroup: "Thumb Gesture Wing Button", recommendedSwitchId: "kailh-silent-5mm", reason: "30M click 5.0mm Kailh Mute switch. Replaces delicate stock tactile pad under rubber thumb ledge." },
        { buttonGroup: "Side Wheel Forward & Back Buttons", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "30M click silent 7.3mm switch keeping side thumb navigation completely silent." }
      ]
    },

    /* ==========================================================================
       3. KEYCHRON M6 WIRELESS
       ========================================================================== */
    {
      id: "keychron-m6",
      category: "mice",
      name: "M6 Wireless",
      brand: "Keychron",
      status: "Wishlist",
      isTopPick: true,
      topPickBadge: "Best High-Refresh Productivity Mouse (MX Master Killer)",
      price: "$49 - $59",
      purchaseUrl: "https://www.keychron.com/products/keychron-m6-wireless-mouse",
      tags: ["Productivity", "1000Hz", "Dual-Wheel", "78g", "PixArt 3395"],
      summary: "Lightweight 78g productivity mouse with 1000Hz polling, dual scroll wheels, and 100% mechanical switches. Solves the MX Master 3S's 125Hz cursor jitter on high-refresh displays.",
      properties: {
        "Ergonomic Rating": "9.6 / 10",
        "Grip Style Match": "Palm / Claw",
        "Wrist Strain Index": "Low (Sculpted Ergonomic Slope)",
        "Pinky Support": "Flared Right Side",
        "Weight Profile": "78g Ultra-Light",
        "Sensor & Speed": "PixArt 3395 (26K DPI) | 1000Hz Polling",
        "Battery Specs": "800mAh USB-C (80 Hours)",
        "Switch Mounting": "100% Standard 3-Pin Through-Hole Mechanical"
      },
      procurement: [
        { label: "Main Silent Switches", cnTerm: "环诺 黄点 静音微动 2脚 7.3" },
        { label: "PTFE Skates", cnTerm: "Keychron M6 脚贴" }
      ],
      repairability: {
        score: "8.5 / 10 (Easy Risk)",
        screwCount: "4 Screws (Phillips #0 under skates)",
        fragilePoints: ["Top scroll wheel carriage spring tension during reassembly"],
        recommendedIronTemp: "330°C - 350°C"
      },
      weightBalance: {
        stockBalance: "Perfect Center (78g ultra-lightweight balanced frame)",
        moddedBalance: "Perfect Center"
      },
      softwareConfig: {
        utility: "Keychron Engine Web/Desktop App",
        runtimeDependency: "None (Saves 100% directly to hardware onboard memory)",
        baseLayer: "Dual Wheels (Top Infinite Spin + Side Thumb Wheel)",
        gShiftLayer: "N/A"
      },
      glidesAndPad: {
        stockSkates: "White Virgin Grade PTFE",
        recommendedSkates: "Stock Virgin PTFE / Tiger Ice Dots",
        recommendedPadType: "Speed Cloth Mat / Hybrid Synthetic Pad"
      },
      lifespanEstimates: {
        chassisLife: "6 - 9 Years (PixArt 3395 flagship sensor & solid lightweight shell)",
        stockSwitchesLife: "3 - 5 Years (80 Million Clicks via stock Huano Micro Switches)",
        moddedSwitchesLife: "5 - 8+ Years (80M Clicks via Huano BTSPD or Silent Square)",
        limitingFactor: "Mechanical dual-mode scroll wheel spring tension over long term."
      },
      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "Huano 80M Micro Switch", lifespan: "80M Clicks", sound: "48 - 50 dB (Crisp snap)" },
        { buttonGroup: "Side Forward & Back (M4/M5)", switchModel: "Huano 10M Micro Switch", lifespan: "10M Clicks", sound: "46 - 48 dB" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "Kailh / Huano 5.0mm Tactile", lifespan: "10M Clicks", sound: "48 dB" },
        { buttonGroup: "Thumb Side Scroll Wheel", switchModel: "Encoder Wheel + Tactile Switch", lifespan: "10M Clicks", sound: "45 dB" }
      ],
      modsAndAddons: [
        { name: "Huano Silent Yellow Dot 7.3mm Switch Swap", difficulty: "Easy", impact: "Converts noisy stock mechanical main clicks into a silent ~35 dB office profile." },
        { name: "0.5mm Rogers PORON Foam Lining", difficulty: "Easy", impact: "Dampens internal resonance inside the 78g hollow chassis." },
        { name: "PTFE Glass Feet / Tiger Ice Skates", difficulty: "Easy", impact: "Creates effortless friction-free gliding across desk mats." }
      ],
      ergonomicDetails: {
        scoreReason: "Combines MX Master 3S ergonomic palm support with 78g body and 1000Hz polling. Zero cursor lag on 144Hz+ monitors at half the weight and price.",
        specificShapeContour: "121.5mm length x 75.4mm width x 40.5mm height. Features a steep right-hand ergonomic slope, wide thumb rest ledge, side thumb wheel, and a dual-mode infinite scroll wheel.",
        comparisonVsCloseCompetitors: "Vs MX Master 3S: Keychron M6 is drastically better for high-refresh displays (1000Hz vs 125Hz limit) and almost half the weight (78g vs 141g), while costing half the price ($49 vs $99). Vs G502: M6 is 23.5g lighter and features a dedicated side thumb wheel for horizontal scrolling.",
        gripCompatibility: "Medium-to-Large hands, Palm or Claw grip.",
        wristAndPosture: "Neutral ergonomic tilt and low weight eliminate wrist drag and forearm strain."
      },
      pros: [
        "1000Hz polling rate completely fixes the MX Master 3S cursor lag on 144Hz+ monitors",
        "Extremely lightweight at 78g (45% lighter than MX Master 3S)",
        "Features both a top dual-mode infinite scroll wheel AND a side thumb wheel",
        "100% standard mechanical through-hole switches (easily solder-replaceable)",
        "Includes both Type-C and Type-A 2.4GHz wireless receivers in the box"
      ],
      cons: [
        "Stock mechanical clicks are noticeable (~48 dB) and require silent switch soldering for quiet office use",
        "Lacks electromagnetic MagSpeed wheel auto-shifting (requires manual top button push for infinite spin)"
      ],
      setupNotes: [
        "SILENT MOD: Desolder stock Huano 80M mechanical switches and solder Huano Silent Square 2-Pin (7.3mm) switches on M1/M2 for an ultra-quiet 1000Hz productivity mouse.",
        "DUAL RECEIVER FEATURE: Includes both USB-C and USB-A 2.4GHz dongles for seamless laptop/desktop switching."
      ],
      buttonSwitchMapping: [
        { buttonGroup: "Main Clicks (Office)", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "Silent 30M, ~35 dB office-appropriate clicking." },
        { buttonGroup: "Main Clicks (Gaming)", recommendedSwitchId: "huano-btspd-80m", reason: "Deep 'thock' with 80M durability for MOBAs/FPS." },
        { buttonGroup: "Side Buttons", recommendedSwitchId: "huano-bspd-80m", reason: "80M side navigation upgrade." },
        { buttonGroup: "Middle Click", recommendedSwitchId: "huano-yellow-5mm", reason: "5.0mm square switch under top scroll carriage." }
      ]
    },

    /* ==========================================================================
       4. ASUS ROG CHAKRAM X ORIGIN
       ========================================================================== */
    {
      id: "rog-chakram-x",
      category: "mice",
      name: "ASUS ROG Chakram X Origin",
      brand: "ASUS",
      status: "Wishlist",
      isTopPick: true,
      topPickBadge: "Best Solder-Free Hot-Swap Microswitch Mouse",
      price: "$139 - $159",
      purchaseUrl: "https://rog.asus.com/mice-mouse-pads/mice/ergonomic-right-handed/rog-chakram-x-origin-model/",
      tags: ["Hot-Swap Sockets", "8000Hz Polling", "Joystick", "Qi Wireless", "AimPoint 36K"],
      summary: "The ultimate enthusiast mouse for microswitch experimentation. Features Push-Fit Switch Sockets II allowing 3-pin mechanical AND 5-pin optical microswitches to be hot-swapped in 10 seconds with ZERO soldering required. Includes a programmable analog thumb joystick and 8000Hz polling rate.",
      properties: {
        "Ergonomic Rating": "9.4 / 10",
        "Grip Style Match": "Palm / Hybrid Claw",
        "Wrist Strain Index": "Low (Sculpted Ergonomic Palm)",
        "Pinky Support": "Flared Right Contour",
        "Weight Profile": "123g Heavy Modular",
        "Sensor & Speed": "ROG AimPoint (36,000 DPI) | 8000Hz Wired / 1000Hz 2.4G",
        "Battery Specs": "Native USB-C + Qi Wireless Charging (114h Runtime)",
        "Switch Mounting": "Push-Fit Socket II (100% Hot-Swappable / Zero Solder)"
      },
      procurement: [
        { label: "Main Switches (Hot-Swap)", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
        { label: "PTFE Skates", cnTerm: "ROG Chakram X 脚贴" }
      ],
      repairability: {
        score: "10 / 10 (Zero Risk / Toolless Hot-Swap)",
        screwCount: "0 Screws (Magnetic Top Cover & Button Shell)",
        fragilePoints: ["None (Push-Fit Switch Sockets II require ZERO soldering)"],
        recommendedIronTemp: "NO SOLDERING REQUIRED (Toolless Switch Puller)"
      },
      weightBalance: {
        stockBalance: "Center Heavy (123g modular frame with magnetic shell)",
        moddedBalance: "Center Heavy"
      },
      softwareConfig: {
        utility: "ASUS Armoury Crate",
        runtimeDependency: "ArmouryCrateUserSession.exe",
        baseLayer: "Analog/Digital 4-Way Thumb Joystick + Top DPI Switch",
        gShiftLayer: "Armoury Crate Profile Layers"
      },
      glidesAndPad: {
        stockSkates: "100% PTFE Rounded-Edge Feet",
        recommendedSkates: "Stock ROG 100% PTFE Glides",
        recommendedPadType: "Hard Plastic or Hybrid Speed Pad"
      },
      lifespanEstimates: {
        chassisLife: "8 - 12+ Years (Push-Fit switch sockets eliminate PCB trace wear)",
        stockSwitchesLife: "3 - 5 Years (70 Million Clicks via stock ROG Micro Switches)",
        moddedSwitchesLife: "Infinite (Switches swap in 10 seconds without soldering)",
        limitingFactor: "Internal Li-Po battery decay after 5+ years (replaceable via screwless magnetic shell)."
      },
      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "ROG Micro Switch (70M) in Hot-Swap Socket", lifespan: "70M Clicks (Hot-Swappable)", sound: "50 - 52 dB" },
        { buttonGroup: "Side Forward & Back (M4/M5)", switchModel: "Standard 3-Pin Mechanical", lifespan: "20M Clicks", sound: "48 - 50 dB" },
        { buttonGroup: "Programmable Thumb Joystick", switchModel: "Analog / Digital 4-Way Stick", lifespan: "10M Actuations", sound: "45 dB" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "Tactile DIP 2-Pin Switch", lifespan: "10M Clicks", sound: "48 dB" }
      ],
      modsAndAddons: [
        { name: "Solder-Free Microswitch Hot-Swapping", difficulty: "Zero (Toolless)", impact: "Instantly plug in Huano BTSPD, Omron Japanese D2F, or Kailh switches in 10 seconds." },
        { name: "Analog / Digital Thumb Joystick Customization", difficulty: "Easy", impact: "Swap long/short joystick shafts or cover with flush cap." },
        { name: "Qi Wireless Charging Pad Integration", difficulty: "Easy", impact: "Charge mouse wirelessly by resting on any Qi desk pad." },
        { name: "Custom 3D-Printed Logo Badge", difficulty: "Easy", impact: "Replace magnetic logo plate under palm shell with custom graphics." }
      ],
      ergonomicDetails: {
        scoreReason: "Scored 9.4/10 due to its toolless screwless magnetic shell, comfortable right-hand palm arch, and integrated thumb joystick. Provides exceptional hand comfort for MOBAs and Flight/Space Sims.",
        specificShapeContour: "132.7mm length x 76.6mm width x 42.8mm height. Sculpted right-hand palm arch with magnetic top cover and magnetic button keycaps. Left thumb rest incorporates an analog/digital thumb joystick.",
        comparisonVsCloseCompetitors: "Vs G502: Chakram X allows instant solder-free switch hot-swapping (G502 requires full soldering desoldering) and includes an analog thumb joystick. Vs MX Master 3S: Chakram X features 8000Hz polling rate and AimPoint 36K sensor for elite gaming performance.",
        gripCompatibility: "Optimal for Medium-to-Large hands using Palm or Hybrid Claw grip.",
        wristAndPosture: "Sculpted right-hand incline relieves forearm strain."
      },
      pros: [
        "Push-Fit Switch Sockets II allow instant 10-second hot-swapping of 3-pin mechanical & 5-pin optical microswitches with ZERO soldering",
        "Programmable thumb joystick functions as analog stick or 4-way macro pad",
        "8000Hz polling rate in wired mode / 1000Hz in 2.4GHz wireless mode",
        "Magnetic screwless top shell and magnetic buttons for effortless maintenance",
        "Supports both USB-C fast charging and Qi Wireless charging"
      ],
      cons: [
        "Premium price tag ($139 - $159)",
        "Relatively heavy at 123g"
      ],
      setupNotes: [
        "SOLDER-FREE SWITCH SWAPPING: Lift top magnetic buttons, pull old switch with included tweezer, and push in Huano BTSPD or Japanese Omron D2F-01F switches.",
        "JOYSTICK MODES: Toggle between Analog mode (for flight/racing games) and Digital 4-way directional macro mode in Armoury Crate."
      ],
      buttonSwitchMapping: [
        { buttonGroup: "Main Left & Right Click (Hot-Swap)", recommendedSwitchId: "huano-btspd-80m", reason: "Pushes directly into Push-Fit sockets in 10 seconds. Delivers deep 'thock' tone and 80M durability." },
        { buttonGroup: "Main Left & Right Click (Japanese Omron)", recommendedSwitchId: "omron-d2f-01f", reason: "Ultra-smooth tactile depression with gold-alloy contacts, installed without soldering." },
        { buttonGroup: "Side Navigation Buttons (M4 / M5)", recommendedSwitchId: "huano-bspd-80m", reason: "Solid 80M click rating for side thumb commands." }
      ]
    },

    /* ==========================================================================
       5. LOGITECH G502 X LIGHTSPEED
       ========================================================================== */
    {
      id: "g502-x-lightspeed",
      category: "mice",
      name: "G502 X LIGHTSPEED Wireless",
      brand: "Logitech",
      status: "Alternative",
      isTopPick: false,
      topPickBadge: "Next-Gen Optical G502",
      price: "$119 - $139",
      purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/g502-x-lightspeed-wireless-gaming-mouse.910-006178.html",
      tags: ["Wireless", "13 Buttons", "LIGHTFORCE", "HERO 25K", "99g Lightweight", "USB-C"],
      summary: "The direct modern successor to the original G502 LIGHTSPEED. Reduces stock weight to 99g, adds native USB-C charging, and introduces LIGHTFORCE hybrid optical-mechanical switches to eliminate double-clicking permanently.",
      properties: {
        "Ergonomic Rating": "9.4 / 10",
        "Grip Style Match": "Palm / Hybrid Claw",
        "Wrist Strain Index": "Low (Thumb Rest Ledge)",
        "Pinky Support": "Flared Right Side",
        "Weight Profile": "99g Stock Lightweight",
        "Sensor & Speed": "HERO 25K | 1000Hz Polling",
        "Battery Specs": "Native USB-C (140 Hours Runtime)",
        "Switch Mounting": "LIGHTFORCE Hybrid Optical (Main M1/M2)"
      },
      procurement: [
        { label: "PTFE Skates", cnTerm: "G502 X LIGHTSPEED 虎符脚贴" },
        { label: "Grip Tape", cnTerm: "G502 X 防滑贴" }
      ],
      repairability: {
        score: "5.0 / 10 (Optical Switches SMT)",
        screwCount: "18 Screws (Phillips #0)",
        fragilePoints: ["Main M1/M2 switches are surface-mounted LIGHTFORCE opto-hybrid units (Cannot be desoldered)"],
        recommendedIronTemp: "Do not attempt soldering main M1/M2 clicks"
      },
      weightBalance: {
        stockBalance: "Slightly Front-Balanced (99g stock weight)",
        moddedBalance: "Center Balanced"
      },
      softwareConfig: {
        utility: "Logitech G HUB / Onboard Memory Manager (OMM)",
        runtimeDependency: "lghub_agent.exe",
        baseLayer: "M1: Left | M2: Right | Reversible Sniper Clutch | Tilts: Scroll L/R",
        gShiftLayer: "Secondary Command Layer"
      },
      glidesAndPad: {
        stockSkates: "Large White PTFE Glides",
        recommendedSkates: "Tiger Ice v2 G502 X Skates",
        recommendedPadType: "Cloth Pad / Desk Mat"
      },
      lifespanEstimates: {
        chassisLife: "7 - 10 Years (HERO 25K Sensor & USB-C native port)",
        stockSwitchesLife: "5 - 8+ Years (LIGHTFORCE optical beam eliminates mechanical contact wear)",
        moddedSwitchesLife: "N/A (Main optical switches are surface-mounted opto-couplers)",
        limitingFactor: "Optical switch actuation feel preference or internal Li-Po battery chemical age."
      },
      stockSwitchesList: [
        { buttonGroup: "Main Left & Right (M1/M2)", switchModel: "LIGHTFORCE Hybrid Optical-Mechanical", lifespan: "100M+ Clicks (Zero double-click risk)", sound: "55 - 58 dB (Loud crisp snap)" },
        { buttonGroup: "Side Forward & Back (G4/G5)", switchModel: "Standard 3-Pin Mechanical", lifespan: "20M Clicks", sound: "50 dB" },
        { buttonGroup: "Reversible Sniper Clutch", switchModel: "Mechanical Tactile Switch", lifespan: "20M Clicks", sound: "50 dB" },
        { buttonGroup: "Middle Scroll Click (G3)", switchModel: "2-Pin Tactile DIP Switch", lifespan: "10M Clicks", sound: "48 dB" }
      ],
      modsAndAddons: [
        { name: "Reversible / Removable DPI Sniper Button", difficulty: "Easy (Toolless)", impact: "Reverse trigger closer to thumb or install flat cover button." },
        { name: "Lightweight Thin-Wall Scroll Wheel", difficulty: "Stock Integrated", impact: "Saves 7g compared to older heavy steel G502 scroll wheel." },
        { name: "Tiger Ice / Corepad PTFE Skates", difficulty: "Easy", impact: "Upgrades glide speed on large PTFE bottom pads." }
      ],
      ergonomicDetails: {
        scoreReason: "Scored 9.4/10. Refines the classic G502 ergonomic shell with a lower 99g weight and a reversible/removable thumb sniper button that accommodates different hand sizes.",
        specificShapeContour: "131.4mm length x 79.2mm width x 41.1mm height. Redesigned lower profile thumb rest ledge and flattened right side contour.",
        comparisonVsCloseCompetitors: "Vs Original G502 LIGHTSPEED: G502 X is 15g lighter (99g vs 114g), features native USB-C, and uses LIGHTFORCE optical switches that never double-click. However, main switches CANNOT be soldered with traditional 3-pin mechanical switches like Huano BTSPD.",
        gripCompatibility: "Optimal for Medium-to-Large hands using Palm or Hybrid Claw grip.",
        wristAndPosture: "Thumb ledge eliminates pad drag and 99g weight reduces wrist inertia."
      },
      pros: [
        "LIGHTFORCE hybrid optical-mechanical main switches permanently eliminate double-clicking",
        "Lighter stock weight at 99g (15g lighter than original G502 LIGHTSPEED)",
        "Native USB-C fast charging port (no Micro-USB adapters needed)",
        "Reversible and completely removable DPI sniper clutch button",
        "Redesigned lighter dual-mode scroll wheel"
      ],
      cons: [
        "Main M1/M2 optical switches CANNOT be desoldered/replaced with custom 3-pin mechanical switches",
        "LIGHTFORCE optical switches have a distinctly loud, metallic click acoustic (~56 dB)",
        "Higher purchase price ($119 - $139)"
      ],
      setupNotes: [
        "OPTICAL SWITCH WARNING: The main M1/M2 clicks use surface-mounted optical sensors. Do NOT attempt to solder traditional 3-pin mechanical microswitches on M1/M2.",
        "SNIPER CLUTCH CUSTOMIZATION: The thumb sniper button is magnetic. You can flip it around to bring it closer to your thumb or swap it with the included blank cover."
      ],
      buttonSwitchMapping: [
        { buttonGroup: "Main Left & Right Click", recommendedSwitchId: "huano-btspd-80m", reason: "Stock LIGHTFORCE optical switches are integrated. (Secondary side/scroll switches remain moddable)." },
        { buttonGroup: "Side Forward & Back (G4 / G5)", recommendedSwitchId: "huano-bspd-80m", reason: "80M durability upgrade for mechanical side thumb buttons." },
        { buttonGroup: "Middle Scroll Wheel Click (G3)", recommendedSwitchId: "kailh-5mm-tactile", reason: "50M click rated 5.0mm Kailh tactile switch clearing redesigned scroll cradle." }
      ]
    },

    /* ==========================================================================
       6. LOGITECH SIGNATURE M650
       ========================================================================== */
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
      procurement: [
        { label: "Main Silent Switches", cnTerm: "华诺 棕壳黄点 静音方型微动 6x6x7.3" },
        { label: "5mm Middle Switch", cnTerm: "6x6x5mm 2脚 静音微动" },
        { label: "PTFE Skates", cnTerm: "Logitech M650 脚贴" }
      ],
      repairability: {
        score: "10 / 10 (Simple Burner Teardown)",
        screwCount: "3 Screws (Phillips #0 under bottom skates)",
        fragilePoints: ["SmartWheel plastic carriage alignment spring"],
        recommendedIronTemp: "330°C - 350°C"
      },
      weightBalance: {
        stockBalance: "Rear-Heavy (101g with 1x AA Alkaline Battery)",
        moddedBalance: "Slightly Rear-Heavy (Can use AAA battery adapter to drop 12g)"
      },
      softwareConfig: {
        utility: "Logi Options+",
        runtimeDependency: "LogiOptionsPlus_Agent.exe",
        baseLayer: "SmartWheel Adaptive Scroll + 2 Side Navigation Buttons",
        gShiftLayer: "N/A"
      },
      glidesAndPad: {
        stockSkates: "Factory Black PTFE",
        recommendedSkates: "Tiger Ice M650 Replacement Skates",
        recommendedPadType: "Standard Cloth Mousepad"
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
        { buttonGroup: "Main Left & Right Click", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "Direct replacement for stock silent 2-pin switches. Delivers 30M click lifespan with crisp silent actuation (~35 dB)." },
        { buttonGroup: "Middle Mouse Click (G3)", recommendedSwitchId: "kailh-silent-5mm", reason: "30M click 5.0mm Kailh Mute switch. Fits under SmartWheel carriage delivering quiet (~35 dB) tactile response." },
        { buttonGroup: "Side Navigation Buttons (M4 / M5)", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "Maintains silent acoustic profile (~35 dB) across side thumb buttons." }
      ]
    },

    /* ==========================================================================
       7. RAZER BASILISK V3 X HYPERSPEED
       ========================================================================== */
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
      procurement: [
        { label: "Main Switches", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
        { label: "Side Switches (90° Bent)", cnTerm: "华诺 蓝壳粉点 弯脚" },
        { label: "Acoustic Foam Sheet", cnTerm: "0.5mm PORON 泡棉板 带背胶" },
        { label: "PTFE Skates", cnTerm: "Razer Basilisk V3 X 脚贴" }
      ],
      repairability: {
        score: "6.0 / 10 (Moderate)",
        screwCount: "5 Screws (Phillips #0 under skates)",
        fragilePoints: [
          "HyperSpeed 2.4GHz USB receiver dongle IC micro-fractures",
          "Side buttons require 90° bent pin switches"
        ],
        recommendedIronTemp: "340°C - 350°C"
      },
      weightBalance: {
        stockBalance: "Rear-Heavy (110g with AA battery in rear cavity)",
        moddedBalance: "Slightly Rear-Heavy"
      },
      softwareConfig: {
        utility: "Razer Synapse 3",
        runtimeDependency: "Razer Synapse Service.exe",
        baseLayer: "Razer Hypershift Modifier Layer + DPI Cycle",
        gShiftLayer: "Razer Hypershift Commands"
      },
      glidesAndPad: {
        stockSkates: "Virgin PTFE Skates",
        recommendedSkates: "Tiger Ice Basilisk V3 Skates",
        recommendedPadType: "PORON Foam Lined Mousepad"
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
        { buttonGroup: "Main Left & Right Click", recommendedSwitchId: "huano-btspd-80m", reason: "Replaces stiff stock Razer Gen-2 switches. Lowers click force, increases tactile snap, and dampens high-pitched clack (~49-51 dB)." },
        { buttonGroup: "Side Navigation Buttons (M4 / M5)", recommendedSwitchId: "huano-bspd-90deg", reason: "80M click rated 90° right-angle pre-bent pins to mate with vertical side PCB contact pads." },
        { buttonGroup: "Middle Scroll Click & DPI Cycle", recommendedSwitchId: "kailh-5mm-tactile", reason: "50M click rated 5.0mm Kailh square tactile switch clearing scroll wheel cradle." }
      ]
    },

    /* ==========================================================================
       MONITORS CATEGORY
       ========================================================================== */
    {
      id: "asus-pg279qm",
      category: "monitors",
      name: "ROG Swift PG279QM",
      brand: "ASUS",
      status: "Owned",
      isTopPick: true,
      topPickBadge: "Best Overall High-Refresh Gaming Monitor (1440p 240Hz)",
      price: "$799",
      purchaseUrl: "https://rog.asus.com/monitors/27-to-31-5-inches/rog-swift-pg279qm-model/",
      tags: ["1440p", "240Hz", "IPS", "G-Sync", "Fast-IPS", "sRGB 160%"],
      summary: "Primary high-refresh gaming monitor. 27-inch 1440p Fast-IPS with a true 240Hz overclockable panel, NVIDIA Reflex Latency Analyzer, and exceptional color accuracy for both competitive LoL/CS2 and color-critical work.",
      properties: {
        "Screen Size": "27-inch Flat",
        "Resolution": "2560 x 1440 (QHD)",
        "Refresh Rate": "240Hz (Native) / 270Hz OC via DP",
        "Response Time": "1ms (GtG)",
        "Panel Technology": "Fast-IPS (AHVA)",
        "Color Gamut": "160% sRGB / 98% DCI-P3",
        "HDR Support": "VESA DisplayHDR 400",
        "VESA Mount": "100 x 100 mm",
        "Connectivity": "DisplayPort 1.4 (DSC), HDMI 2.0 x2, USB 3.2 Hub",
        "Weight with Stand": "7.6 kg (16.8 lbs)"
      },
      panelDetails: {
        panelTech: "AUO M270DAN08.0 Fast-IPS (AHVA)",
        colorGamut: "98% DCI-P3 / 160% sRGB",
        deltaE: "< 2 (Factory Calibrated)",
        osdPreset: "Racing Mode → Color Temp: User (R97 G98 B100), Overdrive: Normal, Dark Boost: Off. For desktop: sRGB Emulation Mode (clamps wide gamut)",
        iccProfile: "Download ASUS PG279QM ICC from RTINGS.com for sRGB clamp; alternatively use Windows Color Management to load sRGB IEC61966-2.1 profile."
      },
      procurement: [
        { label: "Monitor Arm (Heavy Duty)", cnTerm: "桌面显示器支架 承重10公斤 气压弹簧" },
        { label: "DisplayPort 1.4 DSC Cable", cnTerm: "DP1.4 视频线 8K 240Hz DSC" },
        { label: "Monitor Light Bar", cnTerm: "屏幕挂灯 非对称光源 智能调光" },
        { label: "Color Calibrator", cnTerm: "Datacolor SpyderX Pro 校色仪" },
        { label: "VESA Adapter Plate (if needed)", cnTerm: "VESA 100x100 转换支架" }
      ],
      softwareConfig: {
        utility: "ASUS DisplayWidget Center / NVIDIA Control Panel",
        runtimeDependency: "None (Hardware OSD + GPU driver)",
        baseLayer: "G-Sync On (Fullscreen & Windowed), 240Hz, 10-bit color (via DSC)",
        gShiftLayer: "N/A"
      },
      glidesAndPad: {
        stockSkates: "VESA 100x100 Mount & Sturdy Ergonomic Stand",
        recommendedSkates: "Amazon Basics Premium Single Monitor Stand (Lift Engine) or Ergotron LX",
        recommendedPadType: "Desk Clamp Grommet Mount (clean look, no base on desk)"
      },
      lifespanEstimates: {
        chassisLife: "6 – 8 years (IPS panel aging is gradual, backlight LEDs rated 30,000+ hrs)",
        stockSwitchesLife: "N/A",
        moddedSwitchesLife: "N/A",
        limitingFactor: "IPS glow permanence, potential G-Sync module capacitor degradation, or firmware bugs if not updated."
      },
      ergonomicDetails: {
        scoreReason: "9.8/10 – Fully adjustable stand: 130mm height, tilt (-5°/+20°), swivel (±25°), pivot (90°). 27″ 1440p pixel density (109 PPI) ideal for 50-80 cm viewing distance without scaling.",
        specificShapeContour: "Ultra-thin 3-sided frameless design with minimal lower bezel. Anti-glare 3H matte coating diffuses direct overhead light. 27-inch flat panel fills central FOV perfectly.",
        comparisonVsCloseCompetitors: "Vs Alienware AW2721D: PG279QM has better sRGB clamp emulation, slightly faster actual GtG, and dedicated NVIDIA Reflex Analyzer. Vs LG 27GP850 (Nano IPS): ASUS offers true G-Sync module (wider VRR range) and higher build quality. Vs OLED 27GR95QE: PG279QM lacks infinite contrast but has higher full-screen brightness and no burn-in risk.",
        gripCompatibility: "N/A",
        wristAndPosture: "Ergonomic lift stand allows eye-level alignment, reducing neck strain. Pivot mode ideal for long code/documents."
      },
      pros: [
        "True 240Hz (270Hz OC) with negligible overshoot and G-Sync ultimate",
        "Factory-calibrated wide gamut (98% DCI-P3) with sRGB clamp mode",
        "NVIDIA Reflex built-in latency analyzer",
        "Excellent build quality and fully adjustable ergonomic stand",
        "USB 3.2 hub for desk peripherals"
      ],
      cons: [
        "No HDMI 2.1 (limited to 144Hz over HDMI)",
        "HDR 400 is mediocre, edge-lit local dimming",
        "Pricey at $799, competitive but not budget-friendly",
        "IPS glow visible in dark scenes (inherent to technology)"
      ],
      setupNotes: [
        "DESK MOUNT: Replace bulky stock stand with Ergotron LX or Amazon Basics arm. Frees up huge desk real estate. Use VESA 100x100mm holes.",
        "CABLE MANAGEMENT: Route DP 1.4 cable through arm channel. Use 90° right-angle adapter for cleaner look against wall.",
        "OSD CALIBRATION: For competitive gaming, set Overdrive to 'Normal' (fastest without inverse ghosting). For photo work, enable sRGB Emulation Mode to lock gamut.",
        "NVIDIA G-SYNC SETUP: Enable in NVIDIA Control Panel for both fullscreen and windowed. Turn V-Sync ON in NVCP and OFF in-game for optimal tear-free motion.",
        "COLOR PROFILE: Install RTINGS ICC profile for sRGB accuracy; calibrate with SpyderX Pro every 6 months if color-critical work is needed.",
        "REFRESH RATE CHECK: Ensure DisplayPort is used; Windows Display Settings → Advanced → 240Hz (or 270Hz OC in monitor OSD)."
      ]
    },

    {
      id: "dell-u2723qe",
      category: "monitors",
      name: "UltraSharp U2723QE",
      brand: "Dell",
      status: "Owned",
      isTopPick: true,
      topPickBadge: "Best 4K Productivity & USB-C Hub Monitor",
      price: "$619",
      purchaseUrl: "https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdpf/monitors-monitor-accessories",
      tags: ["4K", "IPS Black", "USB-C 90W", "Daisy Chain", "KVM", "sRGB 100%"],
      summary: "Secondary productivity monitor with innovative IPS Black panel delivering 2000:1 contrast ratio. Built-in USB-C hub with 90W power delivery, RJ45 Ethernet, and KVM switch makes it a complete docking station for work laptops.",
      properties: {
        "Screen Size": "27-inch Flat",
        "Resolution": "3840 x 2160 (4K UHD)",
        "Refresh Rate": "60Hz",
        "Response Time": "5ms (GtG, Fast Mode)",
        "Panel Technology": "IPS Black (LGD AH-IPS)",
        "Color Gamut": "100% sRGB / 98% DCI-P3 / DisplayHDR 400",
        "HDR Support": "VESA DisplayHDR 400 (edge-lit)",
        "VESA Mount": "100 x 100 mm",
        "Connectivity": "USB-C 90W PD, USB-C 15W, DP 1.4, HDMI, 4x USB-A, USB-C Hub, RJ45",
        "Weight with Stand": "6.6 kg (14.6 lbs)"
      },
      panelDetails: {
        panelTech: "IPS Black (LGD LM270WR8-SSA1)",
        colorGamut: "100% sRGB, 98% DCI-P3",
        deltaE: "< 2 (Factory Calibrated sRGB/Rec709)",
        osdPreset: "Standard Mode → Color Temp: 6500K; Smart HDR: Off. For sRGB work: Color Space → sRGB mode (clamps gamut). For movies: Movie HDR mode with local dimming (edge-lit).",
        iccProfile: "Pre-installed Dell ICC profile. Use Dell Display Manager for auto-profile switching."
      },
      procurement: [
        { label: "VESA Gas Spring Arm", cnTerm: "显示器支架 气压弹簧 承重 8公斤" },
        { label: "USB-C 3.2 Gen 2 Cable (1m)", cnTerm: "USB-C 3.2 Gen2 100W 10Gbps 数据线" },
        { label: "Monitor Light Bar", cnTerm: "明基 ScreenBar 屏幕挂灯" },
        { label: "Color Calibrator (SpyderX)", cnTerm: "Datacolor SpyderX Pro 校色仪" }
      ],
      softwareConfig: {
        utility: "Dell Display Manager 2.0 / Dell Power Button Sync",
        runtimeDependency: "DDM.exe runs in background for Easy Arrange layouts",
        baseLayer: "Easy Arrange grid (12 layouts), PIP/PBP dual source mode",
        gShiftLayer: "N/A"
      },
      glidesAndPad: {
        stockSkates: "Fully Adjustable Stand (Height, Tilt, Swivel, Pivot)",
        recommendedSkates: "Single gas spring monitor arm (e.g., Ergotron LX or Amazon Basics)",
        recommendedPadType: "Desk grommet mount for clean cable routing"
      },
      lifespanEstimates: {
        chassisLife: "8 – 10 years (IPS Black panel, USB-C hub electronics robust)",
        stockSwitchesLife: "N/A",
        moddedSwitchesLife: "N/A",
        limitingFactor: "LED backlight aging or USB-C hub controller failure from power surges."
      },
      ergonomicDetails: {
        scoreReason: "9.5/10 – Perfect 4K 27″ clarity (163 PPI) for text and UI, eliminates scaling artifacts. IPS Black panel reduces eye strain with deeper blacks and high contrast. USB-C single cable connectivity reduces desk clutter.",
        specificShapeContour: "Thin bezel InfinityEdge design, anti-glare 3H coating. Minimal stand footprint with cable management hole in neck.",
        comparisonVsCloseCompetitors: "Vs Apple Studio Display: U2723QE is half the price, offers more ports and better ergo stand (height/pivot), but lacks 5K resolution and built-in speakers. Vs ASUS ProArt PA279CV: Dell has much better contrast (2000:1 vs 1000:1) and USB-C hub with Ethernet. Vs LG 27UP850: Dell’s IPS Black delivers superior black levels and more I/O.",
        gripCompatibility: "N/A",
        wristAndPosture: "Fully adjustable stand (150mm height, tilt/swivel/pivot). Pivot to portrait mode for coding."
      },
      pros: [
        "Revolutionary IPS Black panel – 2000:1 contrast ratio with deep blacks and no IPS glow",
        "Comprehensive USB-C hub with 90W charging, Ethernet, and KVM switch",
        "Excellent factory color calibration (Delta E < 2) for sRGB and DCI-P3",
        "Daisy chain support (MST) for a second 4K monitor via DP-Out",
        "4-sided virtually borderless design – perfect for multi-monitor setups"
      ],
      cons: [
        "60Hz refresh rate unsuitable for high-refresh gaming",
        "HDR performance limited to edge-lit local dimming (mediocre for movies)",
        "No built-in speakers (requires external audio solution)",
        "Plastic construction feels less premium than metal Apple Studio Display"
      ],
      setupNotes: [
        "USB-C DOCKING: Use the USB-C upstream port (90W PD). Connect laptop → monitor with single cable. Attach keyboard/mouse to monitor’s USB-A ports; KVM auto-switches between USB-C and DP inputs.",
        "DAISY CHAIN: Enable MST in OSD. Connect DP-out to a second monitor (e.g., another U2723QE) for dual 4K@60Hz over one cable from laptop.",
        "CALIBRATION: Use sRGB mode for web design. Switch to DCI-P3 for video editing. Recalibrate with SpyderX Pro every 3-6 months for critical work.",
        "ARM MOUNT: Remove stand (quick release button). Attach VESA 100x100 plate. Use a heavy-duty arm rated for 8kg+.",
        "CABLE MANAGEMENT: Bundle all cables in arm’s cable channels. Use a USB-C right-angle adapter for a sleek laptop connection."
      ]
    },

    {
      id: "lg-27gr95qe",
      category: "monitors",
      name: "UltraGear 27GR95QE-B",
      brand: "LG",
      status: "Wishlist",
      isTopPick: false,
      topPickBadge: "OLED Upgrade Candidate",
      price: "$799 - $999",
      purchaseUrl: "https://www.lg.com/us/monitors/lg-27gr95qe-b-gaming-monitor",
      tags: ["OLED", "240Hz", "0.03ms", "1440p", "G-Sync", "HDMI 2.1"],
      summary: "Future upgrade target: 27-inch 1440p OLED gaming monitor with true 0.03ms response time, per-pixel dimming, and HDMI 2.1 for console support. Offers infinite contrast ratio and stunning motion clarity.",
      properties: {
        "Screen Size": "27-inch Flat",
        "Resolution": "2560 x 1440 (QHD)",
        "Refresh Rate": "240Hz (Native)",
        "Response Time": "0.03ms (GtG OLED)",
        "Panel Technology": "OLED (WOLED MLA+)",
        "Color Gamut": "98.5% DCI-P3",
        "HDR Support": "VESA DisplayHDR True Black 400",
        "VESA Mount": "100 x 100 mm",
        "Connectivity": "HDMI 2.1 x2, DisplayPort 1.4, USB 3.0 Hub",
        "Weight with Stand": "7.9 kg (17.4 lbs)"
      },
      panelDetails: {
        panelTech: "LG WOLED with MLA+ (Micro Lens Array)",
        colorGamut: "98.5% DCI-P3",
        deltaE: "< 1 (Factory Calibrated Gamer 1 mode)",
        osdPreset: "Gamer 1 → Black Stabilizer: 50, Response Time: Fast, OLED Care features ON. Brightness: 100 nits SDR (100% white window limited due to ABL).",
        iccProfile: "Use LG Calibration Studio or Windows HDR Calibration app for HDR profiling."
      },
      procurement: [
        { label: "OLED Cleaning Kit", cnTerm: "OLED屏幕清洁剂 无酒精" },
        { label: "HDMI 2.1 Cable (2m)", cnTerm: "HDMI 2.1 超高速48Gbps 线材" },
        { label: "Monitor Arm (Heavy)", cnTerm: "桌面支架 承重10公斤" },
        { label: "BIAS Lighting Strip", cnTerm: "屏幕背光 氛围灯 USB供电 5V" }
      ],
      softwareConfig: {
        utility: "LG OnScreen Control / LG Calibration Studio",
        runtimeDependency: "None (OSD only for most features)",
        baseLayer: "240Hz, G-Sync Compatible, 10-bit, SDR/HDR Auto Switch",
        gShiftLayer: "N/A"
      },
      glidesAndPad: {
        stockSkates: "VESA 100x100 Mount + Sturdy Stand (Height/Swivel/Tilt/Pivot)",
        recommendedSkates: "Ergotron HX (heavy-duty) or Amazon Basics Heavy Single Arm",
        recommendedPadType: "Desk clamp mount with steel reinforcement"
      },
      lifespanEstimates: {
        chassisLife: "4 – 6 years (OLED burn-in risk mitigated by pixel refresh and screen move)",
        stockSwitchesLife: "N/A",
        moddedSwitchesLife: "N/A",
        limitingFactor: "OLED burn-in (static HUD elements in LoL, CS2 crosshair, Windows taskbar). Requires active OLED care habits."
      },
      ergonomicDetails: {
        scoreReason: "9.2/10 – Superb motion clarity and infinite contrast, but ABL (Auto Brightness Limiter) may cause brightness shifts in productivity apps. Ergonomic stand adjustable, but glossy panel can reflect light.",
        specificShapeContour: "Slim flat panel with almost no bezel, anti-glare coating is less aggressive (semi-glossy). Stand has a large footprint, requiring deeper desk.",
        comparisonVsCloseCompetitors: "Vs ASUS PG27AQDM (same panel): LG has better OSD calibration and lower price. Vs Corsair Xeneon 27QHD240: LG uses newer MLA+ tech for higher brightness. Vs IPS 240Hz: OLED offers true 0.03ms response and perfect blacks, but risks burn-in.",
        gripCompatibility: "N/A",
        wristAndPosture: "Height-adjustable stand with pivot; use monitor arm to bring panel closer and save desk depth."
      },
      pros: [
        "True OLED per-pixel illumination – infinite contrast and zero blooming",
        "Phenomenal motion clarity (0.03ms GtG) – CRT-like smoothness",
        "240Hz refresh rate perfect for competitive LoL/CS2",
        "HDMI 2.1 for 4K 120Hz console gaming (downscaled to 1440p)",
        "G-Sync Compatible and FreeSync Premium Pro"
      ],
      cons: [
        "Burn-in risk with static desktop elements – requires active care",
        "SDR full-screen brightness limited (~200 nits) due to ABL",
        "Aggressive matte coating (semi-glossy) can cause light reflections",
        "No built-in speakers, no USB-C video input",
        "Higher price than top-tier IPS 240Hz"
      ],
      setupNotes: [
        "OLED CARE: Enable Screen Move (pixel shift) & Screen Saver (auto dim after 2 min). Run Pixel Cleaning every 4 hours of use.",
        "TASKBAR MANAGEMENT: Auto-hide taskbar in Windows. Use TranslucentTB for transparency. Black wallpaper, no desktop icons.",
        "GAMING HUD: In LoL, adjust HUD scale to move minimap slightly, or use dynamic HUD mods. In CS2, slightly reduce crosshair static alpha.",
        "BRIGHTNESS CALIBRATION: In SDR, set brightness to 120 nits (OLED Light ~30). Use Windows HDR Calibration for peak brightness mapping.",
        "ARM MOUNT: Use heavy-duty arm; the monitor is front-heavy. Cable management in arm’s channel is essential."
      ]
    },

    /* New Budget Monitors */
    {
      id: "gigabyte-m27q",
      category: "monitors",
      name: "M27Q (Rev 2.0)",
      brand: "Gigabyte",
      status: "Wishlist",
      isTopPick: true,
      topPickBadge: "Best Value 1440p 170Hz Gaming Monitor",
      price: "$269 - $299",
      purchaseUrl: "https://www.gigabyte.com/Monitor/M27Q-rev-20",
      tags: ["1440p", "170Hz", "IPS", "KVM", "USB-C", "Budget"],
      summary: "Excellent value 27-inch 1440p IPS gaming monitor with 170
