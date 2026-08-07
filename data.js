window.DESK_DATA = {
  categories: [
    { id: "mice", label: "Mice & Input", icon: "mouse" },
    { id: "keyboards", label: "Keyboards", icon: "keyboard" },
    { id: "monitors", label: "Monitors", icon: "monitor" },
    { id: "chairs", label: "Chairs & Ergonomics", icon: "chair" },
    { id: "desks", label: "Desks & Standing Frames", icon: "table" }
  ],

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
    "zippy-df3-p1": {
      name: "Zippy DF3-P1 (3-Pin Mechanical)",
      force: "60g",
      lifespan: "60 Million Clicks",
      feel: "Tactile mechanical snap (~46 dB acoustic profile), gold-alloy oxidation resistant contacts.",
      bestFor: "MX Master 3S High-Durability Mod (Clipped Pin 3)"
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
        "Weight": "114g Stock → 101.5g Modded",
        "Sensor": "HERO 25K (100 - 25,600 DPI)",
        "Polling Rate": "1000 Hz / 1ms",
        "Stock Battery": "240mAh Li-Po (~48-60 hrs)",
        "Modded Battery": "500mAh Li-Po (~120-130+ hrs runtime)",
        "Acoustic Profile": "48–51 dB (Deep 'thock' with 0.5mm PORON foam lining)",
        "Charging Port": "Micro-USB (Moddable to USB-C or 540° Magnetic Tip)",
        "Switch Mounting": "100% Through-Hole Mechanical (All 11 Buttons)",
        "Modding Difficulty": "Moderate (22 body screws, modular PCBs)"
      },

      pros: [
        "100% mechanical through-hole switches across all 11 buttons (fully solder-replaceable)",
        "Dual-mode scroll wheel with hyper-fast spin and tactile ratchet",
        "G-Shift functionality enables up to 22 executable commands across 2 software layers",
        "Weight-neutral double battery capacity mod (upgrades to 500mAh while reducing net weight by 1.5g)",
        "High weight-reduction ceiling (induction coil, battery tray, & wheel swap saves ~18g total)",
        "Ergonomic thumb rest with dedicated sniper clutch button"
      ],

      cons: [
        "Stock Omron 50M (D2FC-F-K) switches prone to low-voltage double-click contact oxidation",
        "Stock front-heavy weight bias due to heavy 14.5g steel scroll wheel",
        "Recessed stock Micro-USB charging port prone to wear",
        "Complex disassembly requiring tracking 22 internal screws"
      ],

      setupNotes: "CRITICAL BATTERY SAFETY WARNING: Standard aftermarket 3.7V Li-Po batteries often reverse Black (GND) and White (NTC) wires on JST 1.25mm 3-pin connectors. Logitech pinout is strictly Pin 1: Red (+), Pin 2: White (NTC/Temp), Pin 3: Black (-). Always depress plastic retention barbs and swap Black/White wires if needed before plugging into the PCB, or the charging IC will burn out.\n\nWEIGHT REDUCTION & BATTERY MATH:\n- Stock: 240mAh Cell (5.5g) + Plastic Mounting Cage (5.5g) = 11.0g\n- Modded: 500mAh Cell (9.0g) + Double-sided Tape (0.5g) = 9.5g\n- Net Weight Delta: -1.5g | Capacity Delta: +260mAh (+108% runtime).\n- Additional Weight Savings: Removed POWERPLAY bottom puck door (-5g), POWERPLAY copper induction coil (-5.5g), and swapped 14.5g steel wheel for 5.5g G903 aluminum wheel (-9g).\n\nNON-SWITCH HARDWARE MODS:\n1. Pinky Rest Mod: Molded Sugru / Bostik Blu-Tack along the lower right shell edge to eliminate pinky drag.\n2. USB-C Mod: Installed aftermarket G502 Wireless Type-C daughterboard (or 540° magnetic adapter).\n3. Acoustic Dampening: Lined lower plastic shell floor with 0.5mm self-adhesive Rogers PORON foam.",

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click (M1 / M2)",
          recommendedSwitchId: "huano-btspd-80m",
          reason: "Eliminates double-clicking, delivers deep 'thock' tone (~49–51 dB), and offers 80M click durability."
        },
        {
          buttonGroup: "Side Buttons (G4 / G5) & Sniper Clutch",
          recommendedSwitchId: "huano-bspd-80m",
          reason: "Solid housing creates complete tactile and acoustic uniformity across all thumb controls."
        },
        {
          buttonGroup: "Middle Click (G3), DPI (G7 / G8), Profile (G9)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm vertical height fits underneath scroll wheel cradle and DPI sub-assemblies."
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
        "Weight": "141g",
        "Sensor": "Darkfield High Precision (8,000 DPI)",
        "Polling Rate": "125 Hz",
        "Battery Life": "Up to 70 days (500mAh Li-Po)",
        "Charging Port": "USB-C Native",
        "Stock Switch Height": "7.45mm (2-Pin Silent Square)",
        "Modded Switch Height": "7.30mm (Requires 0.1mm plunger shim tape)",
        "Modding Difficulty": "High (Fragile FFC ribbon cables & delicate PCB pads)"
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
        "Fragile FFC ribbon cable and easily lifted PCB solder pads during manual desoldering"
      ],

      setupNotes: "REPAIR & MODDING BLUEPRINT:\n- Lifted PCB Pad / Trace Repair: If a solder pad is torn during desoldering, scrape copper mask on the trace, apply Rosin Flux, and bridge a 0.1mm enamel jumper wire directly from the trace to the switch pin.\n- Pre-Travel Shim Tuning: Stock switches are 7.45mm high. Installing standard 7.30mm switches (e.g., Zippy DF3-P1 or Huano Silent) leaves a 0.15mm gap. Stick a 0.1mm micro-square of aluminum foil tape or electrical tape onto the underside of the upper shell button plungers to eliminate pre-travel slop.\n- Emergency Temporary Fix: Flushing failing switch housing with 91%+ Isopropyl Alcohol (IPA) temporarily dissolves contact oxidation before full soldering repair.",

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left / Right (Option A - Silent)",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Matches stock silent acoustic profile (~35–38 dB) while providing a snappier tactile feel and 30M click lifespan."
        },
        {
          buttonGroup: "Main Left / Right (Option B - Durability)",
          recommendedSwitchId: "zippy-df3-p1",
          reason: "Clipped Pin 3 mechanical mod. Eliminates squishy rubber feel, increases tactile feedback (~46 dB), and ensures 60M click durability."
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
        "Weight": "101g (including AA battery)",
        "Sensor": "Logitech Advanced Optical (400 - 4000 DPI)",
        "Polling Rate": "125 Hz",
        "Battery Life": "Up to 24 months (1x AA Alkaline)",
        "Connection": "Logi Bolt USB Receiver + Bluetooth LE",
        "Switch Mounting": "2-Pin Through-Hole (Main: 7.3mm, Middle: 5.0mm)",
        "Modding Difficulty": "Low (Simple 3-screw teardown)"
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

      setupNotes: "Assigned as a portable travel burner mouse or secondary backup unit. Teardown requires removing AA battery, peeling 3 bottom PTFE skates to expose 3 Phillips screws, and unclipping the SmartWheel plastic carriage.",

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click",
          recommendedSwitchId: "huano-silent-yellow-73mm",
          reason: "Direct replacement for stock silent 2-pin switches. Provides 30M click lifespan with crisp tactile actuation."
        },
        {
          buttonGroup: "Middle Mouse Click (G3)",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm height fits beneath SmartWheel carriage. Delivers heavy tactile bump and quiet operation."
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
        "Weight": "110g (with AA battery)",
        "Sensor": "Razer 5G Advanced 18,000 DPI",
        "Polling Rate": "1000 Hz",
        "Stock Acoustics": "57–60 dB (Loud hollow cavity echo)",
        "Modded Acoustics": "49–52 dB (Dampened with 0.5mm PORON foam)",
        "Battery Life": "Up to 235 hrs (2.4GHz) / 535 hrs (Bluetooth)",
        "Power Source": "1x AA Battery",
        "Switch Mounting": "3-Pin Mechanical (Main: Standard, Sides: 90° Bent Pin)",
        "Modding Difficulty": "Moderate"
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

      setupNotes: "Unit returned to Amazon Prime due to hardware-level solder micro-fracture / thermal failure in the 2.4GHz HyperSpeed USB receiver chip. If retained, internal plastic battery cavity walls must be lined with 0.5mm self-adhesive Rogers PORON foam to reduce click resonance from 60 dB down to 50 dB.",

      buttonSwitchMapping: [
        {
          buttonGroup: "Main Left & Right Click",
          recommendedSwitchId: "huano-btspd-80m",
          reason: "Replaces stiff stock Razer Gen-2 switches. Lowers click force, increases tactile snap, and dampens high-pitched clack."
        },
        {
          buttonGroup: "Side Buttons & Sniper Trigger",
          recommendedSwitchId: "huano-bspd-90deg",
          reason: "Requires 90° right-angle pre-bent pins to mate with vertical side PCB contacts."
        },
        {
          buttonGroup: "Middle Click & DPI Cycle",
          recommendedSwitchId: "huano-yellow-5mm",
          reason: "5.0mm square switch clears scroll wheel cradle."
        }
      ]
    }
  ]
};
