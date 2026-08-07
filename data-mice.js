window.DESK_MICE = [
  {
    id: "g502-lightspeed", category: "mice", name: "G502 LIGHTSPEED Wireless", brand: "Logitech", status: "Owned", isTopPick: true,
    topPickBadge: "Best Overall Ergonomic & Moddable Gaming Mouse", price: "$79 - $110",
    purchaseUrl: "https://www.logitechg.com/en-us/products/gaming-mice/g502-lightspeed-wireless-gaming-mouse.910-005565.html",
    tags: ["Wireless", "11 Buttons", "HERO 25K", "100% Mechanical", "G-Shift", "Solder Moddable"],
    summary: "Primary daily workhorse for MOBAs, FPS, and high-DPI productivity. Features 11 fully programmable mechanical buttons, dual-mode hyper-fast scroll wheel, and complete switch moddability.",
    properties: { "Ergonomic Rating": "9.5 / 10", "Grip Style Match": "Palm / Hybrid Claw", "Wrist Strain Index": "Low (Thumb Rest Wing)", "Pinky Support": "Requires Sugru / Blu-Tack Mod", "Weight Profile": "114g Stock → 101.5g Modded", "Sensor & Speed": "HERO 25K | 1000Hz Polling", "Battery Specs": "240mAh Stock → 500mAh Modded (120h+)", "Switch Mounting": "100% Through-Hole Mechanical (All 11)" },
    procurement: [
      { label: "Main Switches (M1/M2)", cnTerm: "华诺 透明蓝壳粉点 8000万次" },
      { label: "Side Switches (G4/G5/Sniper)", cnTerm: "华诺 蓝壳粉点 8000万次" },
      { label: "Square 5mm Switches (G3/G7/G8/G9)", cnTerm: "6x6x5mm 微动 开关 5000万次" },
      { label: "Type-C Daughterboard", cnTerm: "G502无线 Type-C 改装小板" },
      { label: "Light Scroll Wheel", cnTerm: "G903 铝合金滚轮" },
      { label: "500mAh Battery (3.7V)", cnTerm: "3.7V 500mAh 1.25 3P 锂电池" },
      { label: "PTFE Skates", cnTerm: "G502 LIGHTSPEED 脚贴 虎符冰符" }
    ],
    repairability: { score: "6.5 / 10 (Moderate Risk)", screwCount: "22 Screws (Phillips #0)", fragilePoints: ["G4/G5 side-button vertical PCB ribbon cable ZIF latch", "Factory lead-free solder on mainboard requires ~350°C to melt"], recommendedIronTemp: "340°C - 350°C (Use flux paste)" },
    weightBalance: { stockBalance: "Front-Heavy (14.5g steel scroll wheel tilts nose down)", moddedBalance: "Perfect Center (G903 aluminum wheel swap shifts mass to mid-shell)" },
    softwareConfig: { utility: "Logitech G HUB + Onboard Memory Manager (OMM.exe)", runtimeDependency: "lghub_agent.exe required for Alt+Tab sequence hold macros", baseLayer: "M1: Left | M2: Right (GestureSign) | M3: Middle | G4: Alt-Tab Hold | G5: G-Shift | G7: Task View | G8: Play/Pause | Tilts: Scroll L/R", gShiftLayer: "M1: Task View | M2: Minimize All | M3: Enter | G4: Screenshot | G5: Battery Check | Tilts: Desktop Swipe L/R" },
    glidesAndPad: { stockSkates: "Factory Black PTFE (High friction / scratchy on raw wood)", recommendedSkates: "Tiger Ice v2 / Corepad Pro Pure White PTFE", recommendedPadType: "4mm/5mm Cloth Desk Mat (Dampens acoustic vibration and absorbs heavy mouse impacts)" },
    lifespanEstimates: { chassisLife: "7 - 10 Years (HERO 25K Sensor & main PCB durability)", stockSwitchesLife: "6 - 12 Months (~5M - 10M Clicks before low-voltage double-clicking)", moddedSwitchesLife: "5 - 8+ Years (80 Million Clicks via Huano BTSPD gold contacts)", limitingFactor: "Li-Po battery chemical capacity decay (~3-5 years) or main scroll wheel mechanical axle wear." },
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
    ergonomicDetails: { scoreReason: "Scored 9.5/10 for its asymmetrical right-hand contour, 14mm flared thumb rest wing, and double-beveled index DPI buttons.", specificShapeContour: "132mm length x 75mm width x 40mm arch height.", comparisonVsCloseCompetitors: "Vs Razer Basilisk V3: G502's thumb wing has a steeper grip angle. Vs MX Master 3S: G502 is 11mm lower in height, allowing fast twitch movements and 1000Hz gaming polling.", gripCompatibility: "Optimal for Medium-to-Large hands using Palm or Hybrid Claw grip.", wristAndPosture: "18° downward ergonomic slope reduces wrist pronation while thumb rest removes pad drag." },
    pros: ["100% mechanical through-hole switches across all 11 buttons (fully solder-replaceable)", "Dual-mode scroll wheel", "G-Shift functionality", "Weight-neutral double battery capacity mod"],
    cons: ["Stock Omron 50M switches prone to double-click", "Front-heavy stock weight", "Recessed Micro-USB port"],
    setupNotes: ["BATTERY PINOUT: Pin 1 Red(+), Pin 2 White(NTC), Pin 3 Black(-)", "WEIGHT SAVINGS: Remove POWERPLAY puck door (-5g), copper coil (-5.5g), steel wheel swap (-9g) = ~19.5g saved"],
    buttonSwitchMapping: [
      { buttonGroup: "Main Left & Right Click (M1 / M2)", recommendedSwitchId: "huano-btspd-80m", reason: "Eliminates double-clicking, delivers deep 'thock' tone (~49–51 dB), and offers max 80M click durability." },
      { buttonGroup: "Side Forward & Back (G4 / G5)", recommendedSwitchId: "huano-bspd-80m", reason: "Solid housing creates 80M durability with complete tactile and acoustic uniformity." },
      { buttonGroup: "Thumb Sniper / G-Shift Clutch", recommendedSwitchId: "huano-bspd-80m", reason: "Crisp 70g actuation prevents accidental sniper triggers during twitch movements." },
      { buttonGroup: "Middle Scroll Wheel Click (G3)", recommendedSwitchId: "kailh-5mm-tactile", reason: "50M click rated 5.0mm Kailh tactile switch. Max durability footprint under scroll cradle." }
    ]
  },
  {
    id: "mx-master-3s", category: "mice", name: "MX Master 3S", brand: "Logitech", status: "Owned", isTopPick: true,
    topPickBadge: "Best Dedicated Stationary Productivity Mouse", price: "$99",
    purchaseUrl: "https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006557.html",
    tags: ["Productivity", "MagSpeed Wheel", "Darkfield 8K", "Silent Clicks", "USB-C", "PCB Repairable"],
    summary: "Dedicated stationary office productivity mouse featuring electromagnetic MagSpeed scrolling, side thumb wheel, gesture button, and ultra-quiet stock clicking.",
    properties: { "Ergonomic Rating": "9.8 / 10", "Grip Style Match": "Strict Palm Grip", "Wrist Strain Index": "Ultra-Low (57° Tilt Angle)", "Pinky Support": "Full Flared Right Side", "Weight Profile": "141g Heavy Stationary", "Sensor & Speed": "Darkfield 8K (Glass) | 125Hz Polling", "Battery Specs": "500mAh Native USB-C (70 Days)", "Switch Mounting": "2-Pin Silent Square (7.45mm height)" },
    procurement: [
      { label: "Silent Switches (Option A)", cnTerm: "华诺 棕壳黄点 静音方型微动 6x6x7.3" },
      { label: "Mechanical Switches (Option B)", cnTerm: "ZIPPY DF3-P1 6000万次" },
      { label: "0.1mm Enamel Wire", cnTerm: "漆包线 飞线 0.1mm" },
      { label: "Rosin Flux Paste", cnTerm: "机械师 助焊膏" },
      { label: "Plunger Shim Tape", cnTerm: "铝箔胶带 0.1mm" },
      { label: "PTFE Skates", cnTerm: "MX Master 3S 脚贴 虎符冰符" }
    ],
    repairability: { score: "4.0 / 10 (High Risk)", screwCount: "6 Screws (Torx T5/T6 + Phillips #0)", fragilePoints: ["Fragile white FFC ribbon cable connecting top gesture board to lower mainboard", "PCB solder pads lift easily if desoldered above 360°C"], recommendedIronTemp: "330°C - 340°C" },
    weightBalance: { stockBalance: "Center-Rear Heavy (141g total mass with heavy Li-Po cell)", moddedBalance: "Center-Rear Heavy" },
    softwareConfig: { utility: "Logi Options+ / GestureSign", runtimeDependency: "LogiOptionsPlus_Agent.exe", baseLayer: "MagSpeed Auto-Shift Wheel | Side Wheel: Horizontal Scroll | Gesture Wing: Hold & Drag for Desktops", gShiftLayer: "N/A (Managed via Logi Options+ Smart Actions)" },
    glidesAndPad: { stockSkates: "Factory Thin Black PTFE", recommendedSkates: "Corepad Skatez Replacement Glides", recommendedPadType: "Works directly on Glass, Wood, or Leather Desk Pads (Darkfield 8K sensor)" },
    lifespanEstimates: { chassisLife: "6 - 8 Years (Darkfield 8K sensor & MagSpeed electromagnetic wheel)", stockSwitchesLife: "8 - 18 Months (~3M - 8M Clicks before silent dampener collapse)", moddedSwitchesLife: "5 - 7+ Years (60 Million Clicks via Zippy DF3-P1 or 30M Huano Silent)", limitingFactor: "Fragile FFC ribbon cables during repair or outer rubberized palm coating peeling over time." },
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
    ergonomicDetails: { scoreReason: "Scored 9.8/10 as the gold standard for office desk work. Its 57-degree vertical incline rotates the forearm into a natural handshake posture, relieving median nerve pressure.", specificShapeContour: "125mm length x 84.3mm width x 51mm arch height. Steep 57° vertical incline prevents forearm pronation. Features a 22mm wide thumb rest wing with integrated gesture pad and flared right-side contour supporting ring/pinky fingers.", comparisonVsCloseCompetitors: "Vs MX Anywhere 3S: MX Master fills the palm completely, eliminating claw cramps, whereas Anywhere 3S is a flat fingertip travel mouse. Vs G502: MX Master is 11mm taller with a much wider palm arch, filling the hand fully for office productivity, but its 141g weight and 125Hz polling limit make it poor for gaming. Vs Keychron M6: MX Master features a superior electromagnetic MagSpeed wheel and deeper thumb rest wing.", gripCompatibility: "Designed strictly for Medium to Large hands using a Palm Grip.", wristAndPosture: "57° elevated ergonomic angle reduces forearm pronation and carpal tunnel compression." },
    pros: ["Electromagnetic MagSpeed wheel auto-shifts from line-by-line ratchet to free-spin", "Thumb gesture button and dedicated horizontal side scroll wheel", "Darkfield 8K DPI sensor tracks smoothly on glass and high-gloss office surfaces", "Near-silent stock operation (~35 dB) ideal for quiet office environments", "Native USB-C fast charging port"],
    cons: ["Low 125Hz polling rate causes cursor jitter on high refresh rate displays (144Hz+)", "Heavy 141g weight causes wrist fatigue during fast mouse movements or gaming", "Stock silent switches prone to internal contact oxidation and rubber dampener fatigue", "Fragile FFC ribbon cable and easily lifted PCB solder pads during desoldering"],
    setupNotes: ["TRACE REPAIR BLUEPRINT: If a solder pad is lifted during desoldering, scrape copper mask on trace, apply Rosin Flux, and bridge 0.1mm enamel jumper wire directly to switch pin.", "PRE-TRAVEL SHIM TUNING: Stock switches are 7.45mm tall. Standard 7.30mm switches leave 0.15mm gap. Stick 0.1mm aluminum foil tape onto button plungers.", "EMERGENCY CONTACT FIX: Flushing failing switches with 91%+ IPA temporarily dissolves contact oxidation before full soldering repair."],
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
    properties: { "Ergonomic Rating": "9.6 / 10", "Grip Style Match": "Palm / Claw", "Wrist Strain Index": "Low (Sculpted Ergonomic Slope)", "Pinky Support": "Flared Right Side", "Weight Profile": "78g Ultra-Light", "Sensor & Speed": "PixArt 3395 (26K DPI) | 1000Hz Polling", "Battery Specs": "800mAh USB-C (80 Hours)", "Switch Mounting": "100% Standard 3-Pin Through-Hole Mechanical" },
    procurement: [
      { label: "Main Silent Switches", cnTerm: "环诺 黄点 静音微动 2脚 7.3" },
      { label: "PTFE Skates", cnTerm: "Keychron M6 脚贴" }
    ],
    repairability: { score: "8.5 / 10 (Easy Risk)", screwCount: "4 Screws (Phillips #0 under skates)", fragilePoints: ["Top scroll wheel carriage spring tension during reassembly"], recommendedIronTemp: "330°C - 350°C" },
    weightBalance: { stockBalance: "Perfect Center (78g ultra-lightweight balanced frame)", moddedBalance: "Perfect Center" },
    softwareConfig: { utility: "Keychron Engine Web/Desktop App", runtimeDependency: "None (Saves 100% directly to hardware onboard memory)", baseLayer: "Dual Wheels (Top Infinite Spin + Side Thumb Wheel)", gShiftLayer: "N/A" },
    glidesAndPad: { stockSkates: "White Virgin Grade PTFE", recommendedSkates: "Stock Virgin PTFE / Tiger Ice Dots", recommendedPadType: "Speed Cloth Mat / Hybrid Synthetic Pad" },
    lifespanEstimates: { chassisLife: "6 - 9 Years (PixArt 3395 flagship sensor & solid lightweight shell)", stockSwitchesLife: "3 - 5 Years (80 Million Clicks via stock Huano Micro Switches)", moddedSwitchesLife: "5 - 8+ Years (80M Clicks via Huano BTSPD or Silent Square)", limitingFactor: "Mechanical dual-mode scroll wheel spring tension over long term." },
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
    ergonomicDetails: { scoreReason: "Combines MX Master 3S ergonomic palm support with 78g body and 1000Hz polling. Zero cursor lag on 144Hz+ monitors at half the weight and price.", specificShapeContour: "121.5mm length x 75.4mm width x 40.5mm height. Features a steep right-hand ergonomic slope, wide thumb rest ledge, side thumb wheel, and a dual-mode infinite scroll wheel.", comparisonVsCloseCompetitors: "Vs MX Master 3S: Keychron M6 is drastically better for high-refresh displays (1000Hz vs 125Hz limit) and almost half the weight (78g vs 141g), while costing half the price ($49 vs $99). Vs G502: M6 is 23.5g lighter and features a dedicated side thumb wheel for horizontal scrolling.", gripCompatibility: "Medium-to-Large hands, Palm or Claw grip.", wristAndPosture: "Neutral ergonomic tilt and low weight eliminate wrist drag and forearm strain." },
    pros: ["1000Hz polling rate completely fixes the MX Master 3S cursor lag on 144Hz+ monitors", "Extremely lightweight at 78g (45% lighter than MX Master 3S)", "Features both a top dual-mode infinite scroll wheel AND a side thumb wheel", "100% standard mechanical through-hole switches (easily solder-replaceable)", "Includes both Type-C and Type-A 2.4GHz wireless receivers in the box"],
    cons: ["Stock mechanical clicks are noticeable (~48 dB) and require silent switch soldering for quiet office use", "Lacks electromagnetic MagSpeed wheel auto-shifting (requires manual top button push for infinite spin)"],
    setupNotes: ["SILENT MOD: Desolder stock Huano 80M mechanical switches and solder Huano Silent Square 2-Pin (7.3mm) switches on M1/M2 for an ultra-quiet 1000Hz productivity mouse.", "DUAL RECEIVER FEATURE: Includes both USB-C and USB-A 2.4GHz dongles for seamless laptop/desktop switching."],
    buttonSwitchMapping: [
      { buttonGroup: "Main Clicks (Office)", recommendedSwitchId: "huano-silent-yellow-73mm", reason: "Silent 30M, ~35 dB office-appropriate clicking." },
      { buttonGroup: "Main Clicks (Gaming)", recommendedSwitchId: "huano-btspd-80m", reason: "Deep 'thock' with 80M durability for MOBAs/FPS." },
      { buttonGroup: "Side Buttons", recommendedSwitchId: "huano-bspd-80m", reason: "80M side navigation upgrade." },
      { buttonGroup: "Middle Click", recommendedSwitchId: "huano-yellow-5mm", reason: "5.0mm square switch under top scroll carriage." }
    ]
  }
];
