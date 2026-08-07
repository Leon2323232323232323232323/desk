window.DESK_DATA = {
  categories: [
    { id: "mice", label: "Mice & Input", icon: "mouse" },
    { id: "keyboards", label: "Keyboards", icon: "keyboard" },
    { id: "monitors", label: "Monitors", icon: "monitor" },
    { id: "chairs", label: "Chairs & Ergonomics", icon: "chair" },
    { id: "desks", label: "Desks & Standing Frames", icon: "table" }
  ],

  // Central Procurement Lookup Dictionary for Taobao / AliExpress
  taobaoDictionary: {
    "G502_MAIN_SWITCH": "华诺 透明蓝壳粉点 8000万次",
    "G502_SIDE_SWITCH": "华诺 蓝壳粉点 8000万次",
    "G502_SQUARE_SWITCH": "华诺 棕壳黄点 5.0mm",
    "G502_TYPE_C_BOARD": "G502无线 Type-C 改装小板",
    "G502_LIGHT_WHEEL": "G903 铝合金滚轮",
    "G502_BATTERY": "3.7V 500mAh 1.25 3P 锂电池",
    "G502_SKATES": "G502 LIGHTSPEED 脚贴 虎符冰符",
    "G502_GRIP_TAPE": "G502 罗技 防滑贴",
    "MX_MASTER_SILENT": "华诺 棕壳黄点 静音方型微动 6x6x7.3",
    "MX_MASTER_ZIPPY": "ZIPPY DF3-P1 6000万次",
    "JUMPER_WIRE": "漆包线 飞线 0.1mm",
    "ROSIN_FLUX": "机械师 助焊膏",
    "BASILISK_BENT_SWITCH": "华诺 蓝壳粉点 弯脚",
    "SUGRU_PUTTY": "Sugru 塑形硅胶 / Bostik 蓝丁胶",
    "PORON_FOAM": "0.5mm PORON 泡棉板 带背胶",
    "FOIL_TAPE": "铝箔胶带 0.1mm"
  },

  // Expanded Microswitch Reference Library
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
      feel: "Crisp tactile snap engineered specifically for right-angle side PCB contact pads.",
      bestFor: "Razer Basilisk M4/M5 Side Buttons"
    },
    "ttc-gold-80m": {
      name: "TTC Dustproof Gold 80M",
      force: "60g - 65g",
      lifespan: "80 Million Clicks",
      feel: "Crisp, bouncy actuation, high-frequency sound, dustproof wall enclosure.",
      bestFor: "Main Clicks / Fast MOBAs & Shooters"
    },
    "kailh-gm8-blackmamba": {
      name: "Kailh GM 8.0 Black Mamba",
      force: "65g",
      lifespan: "80 Million Clicks",
      feel: "Very crisp, light actuation, sharp rebound feel.",
      bestFor: "Main Clicks / High-Precision FPS"
    },
    "omron-d2f-01f": {
      name: "Japanese Omron D2F-01F",
      force: "50g - 60g",
      lifespan: "10 Million Clicks",
      feel: "Ultra-smooth tactile depression, gold alloy contacts, rich metallic tone.",
      bestFor: "Custom Heavy Productivity / Light Click Enthusiasts"
    },
    "huano-yellow-5mm": {
      name: "Huano Brown Shell Yellow Dot (6x6x5.0mm Square)",
      force: "65g - 70g",
      lifespan: "30 Million Clicks",
      feel: "Near-silent (~35 dB), heavy tactile bump, compact 5.0mm vertical footprint.",
      bestFor: "Middle Click (G3), DPI & Profile Buttons"
    },
    "huano-silent-yellow-73mm": {
      name: "Huano Silent Square Yellow Dot (6x6x7.3mm)",
      force: "60g - 65g",
      lifespan: "30 Million Clicks",
      feel: "Near-silent (~35–38 dB), firm tactile return without squishy rubber bottom-out.",
      bestFor: "Office Main Clicks (MX Master 3S, M650)"
    },
    "huano-white-silent-73mm": {
      name: "Huano Brown Shell White Dot Silent (6x6x7.3mm)",
      force: "50g - 55g",
      lifespan: "10 Million Clicks",
      feel: "Ultra-soft, dampened click feel, whisper-quiet (~32 dB).",
      bestFor: "Stealth Office / Silent Travel Mice"
    },
    "zippy-df3-p1": {
      name: "Zippy DF3-P1 (3-Pin Mechanical)",
      force: "60g",
      lifespan: "60 Million Clicks",
      feel: "Tactile mechanical snap (~46 dB acoustic profile), gold-alloy oxidation resistant contacts.",
      bestFor: "MX Master 3S High-Durability Mod (Clipped Pin 3)"
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
        "Ergonomic Rating": "9.5 / 10 (S-Tier Ergonomic Palm/Claw)",
        "Grip Style Match": "Palm / Hybrid Claw (Medium to Large hands: 17.5 - 20.5 cm)",
        "Wrist Strain Index": "Low (Deep thumb rest wing reduces pad friction)",
        "Pinky Support": "Needs Sugru / Blu-Tack wing mod to eliminate right-side desk drag",
        "Weight Profile": "114g Stock → 101.5g Modded (Weight-Neutral Battery Upgrade)",
        "Sensor & Speed": "HERO 25K (100-25,600 DPI) | 1000Hz / 1ms Polling",
        "Battery Specs": "240mAh Stock (48h) → 500mAh Modded (120h+ Runtime)",
        "Acoustic Level": "48–51 dB (Deep 'thock' with 0.5mm PORON internal foam)",
        "Switch Mounting": "100% Through-Hole Mechanical across all 11 buttons"
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

      setupNotes: `- CRITICAL BATTERY PINOUT SAFETY: Standard aftermarket 3.7V Li-Po batteries reverse GND (Black) and NTC (White) wires. Logitech pinout is strictly Pin 1: Red (+), Pin 2: White (NTC), Pin 3: Black (-). Swap wires on JST 1.25mm plug before connection.
- BATTERY & WEIGHT MATH: Stock 240mAh cell (5.5g) + bracket (5.5g) = 11.0g. Upgraded 500mAh cell (9.0g) + tape (0.5g) = 9.5g. Delta: -1.5g net weight with +108% battery runtime.
- WEIGHT SAVINGS CEILING: Remove POWERPLAY puck door (-5g), copper coil (-5.5g), and swap steel wheel for G903 aluminum wheel (-9g). Saves ~19.5g total.
- PINKY REST MOD: Mold Sugru or Bostik Blu-Tack along the lower right edge to eliminate pinky drag on mousepads.
- CHARGING PORT MOD: Install aftermarket G502 Wireless Type-C daughterboard or 540° magnetic charging tip.
- ACOUSTIC TUNING: Line lower chassis floor with 0.5mm Rogers PORON foam to eliminate plastic echo.`,

      softwareSetup: {
        agentRequirement: "G HUB background agent (lghub_agent.exe) must run at startup for multi-step sequence macros (Hold Alt + Tab).",
        baseLayer: "M1: Left Click | M2: Right Click (GestureSign) | M3: Middle Click | G4: M Alt-Tab Hold | G5: G-Shift Modifier | G7: Task View | G8: Play/Pause | Tilts: Scroll L/R",
        gShiftLayer: "M1: Task View | M2: Minimize All | M3: Enter | G4: Screenshot | G5: Battery Check | G7: Brightness | Tilts: Desktop Swipe L/R"
      },

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click (M1 / M2)",
          recommendedSwitchId: "huano-btspd-80m",
          reason: "Eliminates double-clicking, delivers deep 'thock' tone (~49–51 dB), and offers 80M click durability. (Alt: TTC Dustproof Gold 80M)."
        },
        {
          buttonGroup: "Side Forward & Back (G4 / G5)",
          recommendedSwitchId: "huano-bspd-80m",
          reason: "Solid housing creates complete tactile and acoustic uniformity with main clicks."
        },
        {
          buttonGroup: "Thumb Sniper / G-Shift Clutch",
          recommendedSwitchId: "huano-bspd-80m",
          reason: "Crisp 70g actuation prevents accidental sniper triggers during twitch mouse movements."
        },
        {
          buttonGroup: "Middle Scroll Wheel Click (G3)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm vertical footprint fits underneath scroll wheel cradle with heavy tactile feedback."
        },
        {
          buttonGroup: "Index Finger DPI Up & Down (G7 / G8)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "Compact 5.0mm square switch clears upper shell plastics."
        },
        {
          buttonGroup: "Top Profile Switch Button (G9)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "Durable 30M click square tactile switch replacing weak stock membrane button."
        },
        {
          buttonGroup: "Scroll Wheel Tilt Left & Right",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "Ensures crisp horizontal scrolling response on scroll cradle assembly."
        }
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
        "Ergonomic Rating": "9.8 / 10 (Gold Standard for Office Palm Grip)",
        "Grip Style Match": "Strict Palm Grip (Fills palm fully, reduces forearm pronation)",
        "Wrist Strain Index": "Ultra-Low (57° angled posture minimizes carpal tunnel pressure)",
        "Pinky Support": "Full sculpted thumb wing; right side flared for ring/pinky rest",
        "Weight Profile": "141g Heavy Stationary (High inertia, unsuitable for gaming)",
        "Sensor & Speed": "Darkfield 8,000 DPI (Tracks on Glass) | 125Hz Polling Limit",
        "Battery Specs": "500mAh Native USB-C (Up to 70 Days per charge)",
        "Switch Mounting": "2-Pin Silent Square (7.45mm height stock)"
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

      setupNotes: `- TRACE REPAIR BLUEPRINT: If a solder pad is lifted during desoldering, scrape copper mask on the trace, apply Rosin Flux, and bridge a 0.1mm enamel jumper wire directly to the switch pin.
- PRE-TRAVEL SHIM TUNING: Stock switches are 7.45mm tall. Standard 7.30mm switches (Zippy / Huano) leave a 0.15mm gap. Stick a 0.1mm micro-square of aluminum foil tape onto button plungers to eliminate pre-travel slop.
- EMERGENCY CONTACT FIX: Flushing failing switches with 91%+ Isopropyl Alcohol (IPA) temporarily dissolves contact oxidation before full soldering repair.`,

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click (Option A - Silent)",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Matches stock silent acoustic profile (~35–38 dB) while providing a snappier tactile feel and 30M click lifespan."
        },
        {
          buttonGroup: "Main Left & Right Click (Option B - Durability)",
          recommendedSwitchId: "zippy-df3-p1",
          reason: "Clipped Pin 3 mechanical mod. Eliminates squishy rubber feel, increases tactile feedback (~46 dB), and ensures 60M click durability."
        },
        {
          buttonGroup: "Main Left & Right Click (Option C - Premium Feel)",
          recommendedSwitchId: "omron-d2f-01f",
          reason: "Japanese Omron mechanical switch. Delivers ultra-crisp tactile feel for heavy desktop productivity."
        },
        {
          buttonGroup: "Middle Scroll Wheel Click (G3)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm square switch fits beneath electromagnetic MagSpeed wheel cage."
        },
        {
          buttonGroup: "Thumb Gesture Wing Button",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "Replaces delicate stock tactile pad under the rubber thumb ledge."
        },
        {
          buttonGroup: "Side Wheel Forward & Back Buttons",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Keeps side thumb navigation completely silent."
        }
      ]
    },

    /* ==========================================================================
       3. LOGITECH SIGNATURE M650
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
        "Ergonomic Rating": "7.5 / 10 (Compact Portable Ergonomics)",
        "Grip Style Match": "Fingertip / Claw Grip (Small to Medium hands)",
        "Wrist Strain Index": "Moderate (Lacks thumb wing support)",
        "Weight Profile": "101g (Including 1x AA Alkaline Battery)",
        "Sensor & Speed": "Logitech Optical (400-4000 DPI) | 125Hz Polling",
        "Battery Specs": "1x AA Battery (Up to 24 Months Runtime)",
        "Switch Mounting": "2-Pin Through-Hole (Main: 7.3mm, Middle: 5.0mm)",
        "Teardown Repairability": "10 / 10 (Simple 3-screw chassis tear-down)"
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

      setupNotes: `- TEARDOWN SEQUENCE: Remove AA battery, peel 3 bottom PTFE skates using mild hairdryer heat, remove 3 Phillips screws, and gently unclip SmartWheel carriage.
- BURNER MODDING: Excellent practice board for through-hole soldering before attempting complex G502 or MX Master 3S repairs.`,

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Direct replacement for stock silent 2-pin switches. Delivers 30M click lifespan with crisp tactile actuation. (Alt: Huano White Dot Silent)."
        },
        {
          buttonGroup: "Middle Mouse Click (G3)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm height fits beneath SmartWheel carriage. Delivers heavy tactile bump and quiet operation."
        },
        {
          buttonGroup: "Side Navigation Buttons (M4 / M5)",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Maintains silent acoustic profile across side thumb buttons."
        }
      ]
    },

    /* ==========================================================================
       4. RAZER BASILISK V3 X HYPERSPEED
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
        "Ergonomic Rating": "9.0 / 10 (Ergonomic Right-Hand Sculpted)",
        "Grip Style Match": "Palm / Claw Grip (Medium to Large hands)",
        "Wrist Strain Index": "Low (Comfortable thumb ledge)",
        "Weight Profile": "110g (With AA battery)",
        "Sens
