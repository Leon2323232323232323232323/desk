window.DESK_MICE = [
  {
    id: "g502-lightspeed", category: "mice", name: "G502 LIGHTSPEED Wireless", brand: "Logitech", status: "Owned", isTopPick: true,
    topPickBadge: "Best Overall Ergonomic & Moddable Gaming Mouse", price: "$79 - $110",
    purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/g502-lightspeed-wireless-gaming-mouse.910-005565.html",
    tags: ["Wireless", "11 Buttons", "HERO 25K", "100% Mechanical", "G-Shift", "Solder Moddable"],
    summary: "Primary daily workhorse for MOBAs, FPS, and high-DPI productivity. Features 11 fully programmable mechanical buttons, dual-mode hyper-fast scroll wheel, and complete switch moddability.",
    properties: {
      "Ergonomic Rating": "9.5 / 10", "Grip Style Match": "Palm / Hybrid Claw", "Wrist Strain Index": "Low (Thumb Rest Wing)",
      "Pinky Support": "Requires Sugru / Blu-Tack Mod", "Weight Profile": "114g Stock → 101.5g Modded",
      "Sensor & Speed": "HERO 25K | 1000Hz Polling", "Battery Specs": "240mAh Stock → 500mAh Modded (120h+)",
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
      score: "6.5 / 10 (Moderate Risk)", screwCount: "22 Screws (Phillips #0)",
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
  {
    id: "mx-master-3s", category: "mice", name: "MX Master 3S", brand: "Logitech", status: "Owned", isTopPick: true,
    topPickBadge: "Best Dedicated Stationary Productivity Mouse", price: "$99",
    purchaseUrl: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006557.html",
    tags: ["Productivity", "MagSpeed Wheel", "Darkfield 8K", "Silent Clicks", "USB-C", "PCB Repairable"],
    summary: "Dedicated stationary office productivity mouse featuring electromagnetic MagSpeed scrolling, side thumb wheel, gesture button, and ultra-quiet stock clicking.",
    properties: {
      "Ergonomic Rating": "9.8 / 10", "Grip Style Match": "Strict Palm Grip", "Wrist Strain Index": "Ultra-Low (57° Tilt Angle)",
      "Pinky Support": "Full Flared Right Side", "Weight Profile": "141g Heavy Stationary",
      "Sensor & Speed": "Darkfield 8K (Glass) | 125Hz Polling", "Battery Specs": "500mAh Native USB-C (70 Days)",
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
      score: "4.0 / 10 (High Risk)", screwCount: "6 Screws (Torx T5/T6 + Phillips #0)",
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
  {
    id: "keychron-m6", category: "mice", name: "M6 Wireless", brand: "Keychron", status: "Wishlist", isTopPick: true,
    topPickBadge: "Best High-Refresh Productivity Mouse (MX Master Killer)", price: "$49 - $59",
    purchaseUrl: "https://www.keychron.com/products/keychron-m6-wireless-mouse",
    tags: ["Productivity", "1000Hz", "Dual-Wheel", "78g", "PixArt 3395"],
    summary: "Lightweight 78g productivity mouse with 1000Hz polling, dual scroll wheels, and 100% mechanical switches. Solves the MX Master 3S's 125Hz cursor jitter on high-refresh displays.",
    properties: {
      "Ergonomic Rating": "9.6 / 10", "Grip Style Match": "Palm / Claw", "Wrist Strain Index": "Low (Sculpted Ergonomic Slope)",
      "Pinky Support": "Flared Right Side", "Weight Profile": "78g Ultra-Light", "Sensor & Speed": "PixArt 3395 (26K DPI) | 1000Hz Polling",
      "Battery Specs": "800mAh USB-C (80 Hours)", "Switch Mounting": "100% Standard 3-Pin Through-Hole Mechanical"
    },
    procurement: [
      { label: "Main Silent Switches", cnTerm: "环诺 黄点 静音微动 2脚 7.3" },
      { label: "PTFE Skates", cnTerm: "Keychron M6 脚贴" }
    ],
    repairability: {
      score: "8.5 / 10 (Easy Risk)", screwCount: "4 Screws (Phillips #0 under skates)",
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
  {
    id: "rog-chakram-x", category: "mice", name: "ASUS ROG Chakram X Origin", brand: "ASUS", status: "Wishlist", isTopPick: true,
    topPickBadge: "Best Solder-Free Hot-Swap Microswitch Mouse", price: "$139 - $159",
    purchaseUrl: "https://rog.asus.com/mice-mouse-pads/mice/ergonomic-right-handed/rog-chakram-x-origin-model/",
    tags: ["Hot-Swap Sockets", "8000Hz Polling", "Joystick", "Qi Wireless", "AimPoint 36K"],
    summary: "The ultimate enthusiast mouse for microswitch experimentation. Features Push-Fit Switch Sockets II allowing 3-pin mechanical AND 5-pin optical microswitches to be hot-swapped in 10 seconds with ZERO soldering required. Includes a programmable analog thumb joystick and 8000Hz polling rate.",
    properties: {
      "Ergonomic Rating": "9.4 / 10", "Grip Style Match": "Palm / Hybrid Claw", "Wrist Strain Index": "Low (Sculpted Ergonomic Palm)",
      "Pinky Support": "Flared Right Contour", "Weight Profile": "123g Heavy Modular",
      "Sensor & Speed": "ROG AimPoint (36,000 DPI) | 8000Hz Wired / 1000Hz 2.4G",
      "Battery Specs": "Native USB-C + Qi Wireless Charging (114h Runtime)",
      "Switch Mounting": "Push-Fit Socket II (100% Hot-Swappable / Zero Solder)"
    },
    procurement: [
      { label: "Main Switches (Hot-Swap)", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
      { label: "PTFE Skates", cnTerm: "ROG Chakram X 脚贴" }
    ],
    repairability: {
      score: "10 / 10 (Zero Risk / Toolless Hot-Swap)", screwCount: "0 Screws (Magnetic Top Cover & Button Shell)",
      fragilePoints: ["None (Push-Fit Switch Sockets II require ZERO soldering)"],
      recommendedIronTemp: "NO SOLDERING REQUIRED (Toolless Switch Puller)"
    },
    weightBalance: { stockBalance: "Center Heavy (123g modular frame with magnetic shell)", moddedBalance: "Center Heavy" },
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
  {
    id: "g502-x-lightspeed", category: "mice", name: "G502 X LIGHTSPEED Wireless", brand: "Logitech", status: "Alternative", isTopPick: false,
    topPickBadge: "Next-Gen Optical G502", price: "$119 - $139",
    purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/g502-x-lightspeed-wireless-gaming-mouse.910-006178.html",
    tags: ["Wireless", "13 Buttons", "LIGHTFORCE", "HERO 25K", "99g Lightweight", "USB-C"],
    summary: "The direct modern successor to the original G502 LIGHTSPEED. Reduces stock weight to 99g, adds native USB-C charging, and introduces LIGHTFORCE hybrid optical-mechanical switches to eliminate double-clicking permanently.",
    properties: {
      "Ergonomic Rating": "9.4 / 10", "Grip Style Match": "Palm / Hybrid Claw", "Wrist Strain Index": "Low (Thumb Rest Ledge)",
      "Pinky Support": "Flared Right Side", "Weight Profile": "99g Stock Lightweight",
      "Sensor & Speed": "HERO 25K | 1000Hz Polling", "Battery Specs": "Native USB-C (140 Hours Runtime)",
      "Switch Mounting": "LIGHTFORCE Hybrid Optical (Main M1/M2)"
    },
    procurement: [
      { label: "PTFE Skates", cnTerm: "G502 X LIGHTSPEED 虎符脚贴" },
      { label: "Grip Tape", cnTerm: "G502 X 防滑贴" }
    ],
    repairability: {
      score: "5.0 / 10 (Optical Switches SMT)", screwCount: "18 Screws (Phillips #0)",
      fragilePoints: ["Main M1/M2 switches are surface-mounted LIGHTFORCE opto-hybrid units (Cannot be desoldered)"],
      recommendedIronTemp: "Do not attempt soldering main M1/M2 clicks"
    },
    weightBalance: { stockBalance: "Slightly Front-Balanced (99g stock weight)", moddedBalance: "Center Balanced" },
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
  {
    id: "signature-m650", category: "mice", name: "Signature M650", brand: "Logitech", status: "Owned", isTopPick: false,
    topPickBadge: "Best Compact Burner / Portable Mouse", price: "$39",
    purchaseUrl: "https://www.logitech.com/en-us/products/mice/m650-signature-wireless-mouse.html",
    tags: ["Portable", "AA Battery", "SmartWheel", "Silent Touch", "Logi Bolt"],
    summary: "Compact, long-battery-life portable office mouse featuring SmartWheel adaptive scrolling, silent switch dampers, and simple dual-side button navigation.",
    properties: {
      "Ergonomic Rating": "7.5 / 10", "Grip Style Match": "Fingertip / Claw", "Wrist Strain Index": "Moderate (No Thumb Wing)",
      "Weight Profile": "101g (With 1x AA Battery)", "Sensor & Speed": "Logitech Optical | 125Hz Polling",
      "Battery Specs": "1x AA Battery (24 Months)", "Switch Mounting": "2-Pin Through-Hole (Main: 7.3mm, Middle: 5.0mm)",
      "Teardown Repairability": "10 / 10 (3-Screw Disassembly)"
    },
    procurement: [
      { label: "Main Silent Switches", cnTerm: "华诺 棕壳黄点 静音方型微动 6x6x7.3" },
      { label: "5mm Middle Switch", cnTerm: "6x6x5mm 2脚 静音微动" },
      { label: "PTFE Skates", cnTerm: "Logitech M650 脚贴" }
    ],
    repairability: {
      score: "10 / 10 (Simple Burner Teardown)", screwCount: "3 Screws (Phillips #0 under bottom skates)",
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
  {
    id: "basilisk-v3-x", category: "mice", name: "Basilisk V3 X HyperSpeed", brand: "Razer", status: "Alternative", isTopPick: false,
    topPickBadge: "Evaluated & Returned", price: "$39 - $59",
    purchaseUrl: "https://www.razer.com/gaming-mice/razer-basilisk-v3-x-hyperspeed",
    tags: ["Wireless", "Razer 18K", "Bluetooth/2.4G", "AA Battery", "Mechanical"],
    summary: "Ergonomic wireless gaming mouse with thumb rest support, Razer 5G 18K optical sensor, and dual-mode wireless connectivity.",
    properties: {
      "Ergonomic Rating": "9.0 / 10", "Grip Style Match": "Palm / Claw", "Wrist Strain Index": "Low (Thumb Rest Ledge)",
      "Weight Profile": "110g (With AA Battery)", "Sensor & Speed": "Razer 5G 18,000 DPI | 1000Hz Polling",
      "Acoustic Rating": "57-60 dB Stock → 50 dB Modded", "Power Source": "1x AA Battery (235h 2.4G / 535h BT)",
      "Switch Mounting": "3-Pin Mechanical (Main: Std, Sides: 90° Bent)"
    },
    procurement: [
      { label: "Main Switches", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
      { label: "Side Switches (90° Bent)", cnTerm: "华诺 蓝壳粉点 弯脚" },
      { label: "Acoustic Foam Sheet", cnTerm: "0.5mm PORON 泡棉板 带背胶" },
      { label: "PTFE Skates", cnTerm: "Razer Basilisk V3 X 脚贴" }
    ],
    repairability: {
      score: "6.0 / 10 (Moderate)", screwCount: "5 Screws (Phillips #0 under skates)",
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
  {
    id: "razer-da-v3", category: "mice", name: "DeathAdder V3", brand: "Razer", status: "Wishlist",
    topPickBadge: "Best light‑ergo wireless mouse", price: "$149",
    purchaseUrl: "https://www.razer.com/gaming-mice/razer-deathadder-v3",
    tags: ["Wireless", "63g", "Focus Pro 30K", "Ergonomic", "Lightweight"],
    summary: "Ultra‑light 63g wireless ergonomic mouse with the flawless Focus Pro 30K sensor, optical switches, and up to 90h battery. Ideal for high‑DPI FPS/MOBA.",
    properties: {
      "Ergonomic Rating": "9.2 / 10", "Grip Style Match": "Palm / Claw", "Weight Profile": "63g",
      "Sensor & Speed": "Focus Pro 30K | 1000Hz (4000Hz with dongle)", "Battery Specs": "90h (dongle) | USB‑C",
      "Switch Mounting": "Optical (main clicks), non‑solderable"
    },
    procurement: [],
    repairability: null,
    weightBalance: null,
    softwareConfig: null,
    glidesAndPad: null,
    lifespanEstimates: { chassisLife: "5+ years", stockSwitchesLife: "Optical – no mechanical wear", moddedSwitchesLife: "N/A", limitingFactor: "Battery degradation or optical sensor calibration" },
    stockSwitchesList: [],
    modsAndAddons: [],
    ergonomicDetails: {
      scoreReason: "Large, comfortable right‑hand shape with subtle finger grooves. Perfect for palm grip.",
      comparisonVsCloseCompetitors: "Vs G502 X: Lighter and more focused on competitive play. Vs Basilisk V3: cleaner shape, lower weight.",
      gripCompatibility: "Medium‑to‑Large hands, Palm/Claw"
    },
    pros: ["63g ultra‑lightweight", "Flawless sensor", "Comfortable large ergo shape", "USB‑C charging"],
    cons: ["Optical clicks can't be swapped", "No Bluetooth", "Price premium for wireless"],
    setupNotes: [],
    buttonSwitchMapping: []
  },
  {
    id: "logi-gpro-x-superlight", category: "mice", name: "G Pro X Superlight", brand: "Logitech", status: "Wishlist",
    topPickBadge: "Best symmetrical wireless mouse", price: "$159",
    purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/pro-x-superlight-wireless-mouse.html",
    tags: ["Wireless", "63g", "HERO 25K", "Ambidextrous", "Pro"],
    summary: "The esports staple. Only 63g, superb HERO sensor, and over 70h battery. Used by countless pros for its reliability and shape.",
    properties: {
      "Ergonomic Rating": "8.8 / 10", "Grip Style Match": "Claw / Fingertip / Palm", "Weight Profile": "63g",
      "Sensor & Speed": "HERO 25K | 1000Hz", "Battery Specs": "70h | USB‑C (with included adapter)",
      "Switch Mounting": "Mechanical (3‑pin, but difficult to disassemble)"
    },
    procurement: [],
    repairability: null,
    weightBalance: null,
    softwareConfig: null,
    glidesAndPad: null,
    lifespanEstimates: { chassisLife: "5+ years", stockSwitchesLife: "Mechanical – prone to double-click after heavy use", moddedSwitchesLife: "Replaceable if desoldered carefully", limitingFactor: "Switch wear / battery" },
    stockSwitchesList: [],
    modsAndAddons: [],
    ergonomicDetails: {
      scoreReason: "Safe symmetrical shape works for most grip styles. Not as sculpted as ergo mice but extremely predictable.",
      comparisonVsCloseCompetitors: "Vs DeathAdder V3: symmetrical vs ergo, lighter clicks. Vs Lamzu Atlantis: similar weight, slightly different shape.",
      gripCompatibility: "Any hand size, all grip styles"
    },
    pros: ["Industry standard pro mouse", "Extremely light 63g", "Flawless wireless", "Long battery life"],
    cons: ["Basic shape, no RGB", "Difficult to mod (switches)", "No USB‑C directly on mouse (adapter)"],
    setupNotes: [],
    buttonSwitchMapping: []
  },
  {
    id: "pulsar-x2", category: "mice", name: "X2 Wireless", brand: "Pulsar", status: "Wishlist",
    topPickBadge: "Excellent value lightweight wireless", price: "$95",
    purchaseUrl: "https://www.pulsar.gg/collections/x2-wireless",
    tags: ["Wireless", "56g", "PAW3395", "Symmetrical", "Budget"],
    summary: "Super light 56g wireless mouse with top‑tier PAW3395 sensor, crisp Huano switches, and flawless tracking at a great price.",
    properties: {
      "Ergonomic Rating": "8.5 / 10", "Grip Style Match": "Claw / Fingertip", "Weight Profile": "56g",
      "Sensor & Speed": "PAW3395 | 1000Hz", "Battery Specs": "70h | USB‑C",
      "Switch Mounting": "Huano Blue Shell Pink Dot (mechanical, easily replaceable)"
    },
    procurement: [],
    repairability: null,
    weightBalance: null,
    softwareConfig: null,
    glidesAndPad: null,
    lifespanEstimates: { chassisLife: "5+ years", stockSwitchesLife: "Huano switches – long lasting", moddedSwitchesLife: "Easily replaceable (standard 3‑pin)", limitingFactor: "Battery or shell wear" },
    stockSwitchesList: [],
    modsAndAddons: [],
    ergonomicDetails: {
      scoreReason: "Low‑profile symmetrical shape, ideal for claw and fingertip. Very low weight reduces fatigue.",
      comparisonVsCloseCompetitors: "Vs Superlight: lighter, cheaper, but slightly different hump. Vs Lamzu Atlantis: similar price, different shape.",
      gripCompatibility: "Small‑to‑Medium hands, Claw/Fingertip"
    },
    pros: ["Crazy light 56g", "Top sensor", "Good stock switches (Huano)", "Great value ~$95"],
    cons: ["Shape might feel too flat for some", "Build quality occasionally has QC variance"],
    setupNotes: [],
    buttonSwitchMapping: []
  },
  {
    id: "lamzu-atlantis", category: "mice", name: "Atlantis", brand: "Lamzu", status: "Wishlist",
    topPickBadge: "Best all‑rounder mid‑weight wireless", price: "$90",
    purchaseUrl: "https://lamzu.com/products/lamzu-atlantis",
    tags: ["Wireless", "55g", "PAW3395", "Symmetrical", "Colorways"],
    summary: "Beautifully crafted 55g wireless mouse with the PAW3395 sensor, crisp mechanical switches, and multiple color options. A community favorite.",
    properties: {
      "Ergonomic Rating": "9.0 / 10", "Grip Style Match": "Claw / Palm / Fingertip", "Weight Profile": "55g",
      "Sensor & Speed": "PAW3395 | 1000Hz", "Battery Specs": "70h | USB‑C",
      "Switch Mounting": "Mechanical (Kailh GM 8.0), replaceable"
    },
    procurement: [],
    repairability: null,
    weightBalance: null,
    softwareConfig: null,
    glidesAndPad: null,
    lifespanEstimates: { chassisLife: "5+ years", stockSwitchesLife: "Kailh GM 8.0 – crisp and durable", moddedSwitchesLife: "Replaceable (standard 3‑pin)", limitingFactor: "Battery / shell" },
    stockSwitchesList: [],
    modsAndAddons: [],
    ergonomicDetails: {
      scoreReason: "Versatile medium‑hump symmetrical shape that accommodates many grips.",
      comparisonVsCloseCompetitors: "Vs Superlight: more pronounced hump, better clicks (Kailh GM 8.0). Vs X2: slightly more comfortable for palm.",
      gripCompatibility: "Medium‑to‑Large hands, all grip styles"
    },
    pros: ["Gorgeous design", "55g featherlight", "Excellent clicks", "Great value"],
    cons: ["Less known brand support", "Side buttons may feel small for some"],
    setupNotes: [],
    buttonSwitchMapping: []
  },
  {
    id: "roccat-kone-pro-air", category: "mice", name: "Kone Pro Air", brand: "Roccat", status: "Wishlist",
    topPickBadge: "Best ergo for large hands (value)", price: "$99",
    purchaseUrl: "https://www.roccat.com/products/kone-pro-air",
    tags: ["Wireless", "75g", "Owl‑Eye 19K", "Ergonomic", "RGB"],
    summary: "Unique large ergonomic shape with a light 75g body, optical switches, and stunning RGB. Perfect for large hands seeking comfort.",
    properties: {
      "Ergonomic Rating": "9.5 / 10", "Grip Style Match": "Palm / Claw", "Weight Profile": "75g",
      "Sensor & Speed": "Owl‑Eye 19K | 1000Hz", "Battery Specs": "100h | USB‑C",
      "Switch Mounting": "Optical (main clicks)"
    },
    procurement: [],
    repairability: null,
    weightBalance: null,
    softwareConfig: null,
    glidesAndPad: null,
    lifespanEstimates: { chassisLife: "5+ years", stockSwitchesLife: "Optical – no double-click", moddedSwitchesLife: "N/A", limitingFactor: "Battery / USB port" },
    stockSwitchesList: [],
    modsAndAddons: [],
    ergonomicDetails: {
      scoreReason: "Deep thumb groove and high back hump fill the palm without forcing fingers. Exceptional for long work sessions.",
      comparisonVsCloseCompetitors: "Vs G502: Lighter, more pronounced ergo shape. Vs DeathAdder V3: larger, more relaxed palm support.",
      gripCompatibility: "Large hands, Palm/Claw"
    },
    pros: ["Incredibly comfortable for large hands", "Long battery life", "Light for its size", "Beautiful RGB implementation"],
    cons: ["Optical switches can't be modded", "Software (Swarm) can be finicky"],
    setupNotes: [],
    buttonSwitchMapping: []
  }
];
