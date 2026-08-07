window.DESK_KEYBOARDS = [
  {
    id: "keychron-q1", category: "keyboards", name: "Q1 (v2)", brand: "Keychron", status: "Wishlist", isTopPick: true,
    topPickBadge: "Best Enthusiast 75% Hot‑Swap Keyboard", price: "$179 (barebones) / $199 (fully assembled)",
    purchaseUrl: "https://www.keychron.com/products/keychron-q1-qmk-custom-mechanical-keyboard",
    tags: ["75%", "Hot‑Swap", "QMK/VIA", "Alu", "Gasket Mount", "South‑Facing"],
    summary: "The ultimate custom mechanical keyboard for enthusiasts. Full aluminium body, gasket mount, hot‑swap PCB, QMK/VIA support, and a wide range of stock switches. Perfect for modding.",
    properties: {
      "Layout": "75% (82 keys)", "Switch Type": "Gateron G Pro (Red/Blue/Brown) or Keychron K Pro", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)",
      "Keycap Profile": "OSA (OEM‑like)", "Weight": "1.7 kg (fully built)", "Lighting": "Per‑key RGB (south‑facing)"
    },
    switchDetails: {
      stockSwitches: "Gateron G Pro Red / Blue / Brown or Keychron K Pro Red / Brown / Banana",
      actuationForce: "45g – 60g",
      typingFeel: "Gasket mount with PC plate gives a soft, bouncy typing feel and deep sound signature.",
      modPotential: "Easy to open, add foam, switch films, and lube stabilisers. Supports screw‑in stabilisers."
    },
    procurement: [
      { label: "Switches (Gateron Oil Kings)", cnTerm: "佳达隆 Oil King 线性轴" },
      { label: "Keycaps (PBTFans)", cnTerm: "PBTFans 键帽 双色" },
      { label: "Stabilisers (Durock V2)", cnTerm: "Durock V2 螺丝卫星轴" },
      { label: "Switch Films & Lube", cnTerm: "轴间纸 键盘润滑脂" }
    ],
    softwareConfig: { utility: "VIA / QMK Configurator", runtimeDependency: "None (flashed onboard)", baseLayer: "Standard QWERTY with Fn layers", gShiftLayer: "N/A" },
    lifespanEstimates: { chassisLife: "10+ years (full aluminium)", stockSwitchesLife: "50–80 million keystrokes", limitingFactor: "USB‑C port wear or stabiliser rattle over time" },
    ergonomicDetails: { scoreReason: "8.5/10 – 75% layout saves desk space while keeping function row and arrows. Sturdy aluminium and adjustable typing angle improve posture.", specificShapeContour: "Flat profile with optional screw‑in feet for 6–9° typing angle." },
    pros: ["Outstanding build quality (full aluminium)", "Hot‑swap + QMK/VIA", "Smooth gasket mount typing feel", "Easy to mod and tune", "Multiple colour options"],
    cons: ["No wireless option", "Heavy – not portable", "Stock stabilisers benefit from upgrading"],
    setupNotes: ["MODS: Add PE foam, tape mod, force‑break mod to reduce case ping.", "SWITCHES: Pre‑lubed Gateron Oil Kings are an excellent upgrade.", "VIA: Remap keys in real‑time; no software installation needed."]
  },
  {
    id: "wooting-60he", category: "keyboards", name: "60HE", brand: "Wooting", status: "Wishlist", isTopPick: true,
    topPickBadge: "Best Gaming Keyboard (Magnetic Switches)", price: "$175",
    purchaseUrl: "https://next.wooting.io/wooting-60he",
    tags: ["60%", "Hall Effect", "Rapid Trigger", "Hot‑Swap", "Analog Input", "Gaming"],
    summary: "The ultimate gaming keyboard with Lekker Hall Effect switches that offer analogue input, rapid trigger, and adjustable actuation points. Unmatched for competitive LoL and CS2.",
    properties: {
      "Layout": "60% (61 keys)", "Switch Type": "Wooting Lekker (Hall Effect Magnetic)", "Hot‑Swappable": "Yes (magnetic switch sockets)", "Connectivity": "USB‑C (wired only)",
      "Keycap Profile": "OEM", "Weight": "0.9 kg", "Lighting": "Per‑key RGB"
    },
    switchDetails: {
      stockSwitches: "Wooting Lekker 60 (linear) – magnetically‑sensed, no physical contacts",
      actuationForce: "Adjustable 0.1 mm – 4.0 mm actuation point, ~60g bottom‑out",
      typingFeel: "Smooth linear feel with zero debounce. Rapid Trigger allows instant reset for repeated key presses.",
      modPotential: "Can lube switches (no films needed), swap keycaps, and adjust settings via software."
    },
    procurement: [
      { label: "Aftermarket Keycaps (PBT)", cnTerm: "PBT 60% 键帽 透光" },
      { label: "Switch Lube", cnTerm: "键盘润滑脂 Krytox 205g0" }
    ],
    softwareConfig: { utility: "Wootility (Web/Desktop)", runtimeDependency: "None (settings saved onboard)", baseLayer: "Custom actuation points per key, Rapid Trigger, Mod‑Tap", gShiftLayer: "Analog gamepad mode" },
    lifespanEstimates: { chassisLife: "8+ years", stockSwitchesLife: "Virtually unlimited (magnetic, no contact wear)", limitingFactor: "USB‑C port or PCB degradation" },
    ergonomicDetails: { scoreReason: "8/10 – Compact 60% frees desk space for wide mouse movements. Adjustable actuation reduces finger strain." },
    pros: ["Rapid Trigger + adjustable actuation = instant response", "Zero double‑click issues (magnetic)", "Hot‑swap with Lekker switches", "Excellent software (Wootility)", "Great for competitive gaming"],
    cons: ["No dedicated arrow keys (use FN layer)", "Wired only", "Typing experience is just okay (not as refined as high‑end mechanical)"],
    setupNotes: ["RAPID TRIGGER: Set actuation to 1.0 mm for fast taps; 0.5 mm for extreme speed.", "LUBE: Lightly lube switches to reduce scratchiness.", "KEYCAPS: Swapping to PBT caps improves feel and sound."]
  },
  {
    id: "keychron-v1", category: "keyboards", name: "V1 (barebones)", brand: "Keychron", status: "Wishlist",
    topPickBadge: "Best Budget Custom 75% Hot‑Swap", price: "$74 (barebones) / $94 (assembled)",
    purchaseUrl: "https://www.keychron.com/products/keychron-v1-qmk-custom-mechanical-keyboard",
    tags: ["75%", "Hot‑Swap", "QMK/VIA", "Budget", "Plastic", "Gasket Mount"],
    summary: "The affordable sibling of the Q1. Plastic chassis but retains gasket mount, hot‑swap, and QMK/VIA support. Perfect entry into the custom keyboard world.",
    properties: {
      "Layout": "75% (82 keys)", "Switch Type": "Keychron K Pro (Red/Blue/Brown) or barebones", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)",
      "Keycap Profile": "OSA", "Weight": "1.1 kg", "Lighting": "Per‑key RGB (south‑facing)"
    },
    switchDetails: {
      stockSwitches: "Keychron K Pro Red (45g linear) / Blue (60g clicky) / Brown (55g tactile)",
      actuationForce: "45g – 60g",
      typingFeel: "Gasket mount with PC plate provides a soft typing feel, similar to Q1 but with more case flex due to plastic chassis.",
      modPotential: "Excellent modding platform – add foam, tape mod, change stabilisers."
    },
    procurement: [
      { label: "Switches (Akko CS Jelly Pink)", cnTerm: "Akko CS 果冻粉轴" },
      { label: "Stabilisers (Everglide Panda)", cnTerm: "Everglide 熊猫卫星轴" }
    ],
    softwareConfig: { utility: "VIA / QMK Configurator", runtimeDependency: "None" },
    lifespanEstimates: { chassisLife: "7+ years", stockSwitchesLife: "50 million keystrokes", limitingFactor: "Plastic case durability or USB port" },
    ergonomicDetails: { scoreReason: "8/10 – Same great layout as Q1, lighter and more affordable." },
    pros: ["Incredible value ($74 barebones)", "Gasket mount at budget price", "Hot‑swap + QMK/VIA", "Wide aftermarket compatibility"],
    cons: ["Plastic case (less premium feel)", "Stock stabilisers need tuning", "No wireless"],
    setupNotes: ["MODS: Force‑break mod eliminates case ping. Add PE foam for a poppier sound.", "SWITCHES: Akko Jelly Pinks offer a smooth, light linear experience on a budget."]
  },
  {
    id: "nuphy-air75", category: "keyboards", name: "Air75 v2", brand: "NuPhy", status: "Wishlist",
    topPickBadge: "Best Low‑Profile Wireless Keyboard", price: "$129",
    purchaseUrl: "https://nuphy.com/products/air75-v2",
    tags: ["75%", "Low‑Profile", "Wireless", "Hot‑Swap", "PBT Keycaps", "Slim"],
    summary: "Ultra‑slim 75% low‑profile keyboard with 2.4 GHz wireless, Bluetooth 5.0, hot‑swap sockets, and PBT keycaps. Excellent for a clean, modern desk setup.",
    properties: {
      "Layout": "75% (84 keys)", "Switch Type": "Gateron Low‑Profile (Red/Blue/Brown)", "Hot‑Swappable": "Yes (Gateron low‑profile sockets)", "Connectivity": "2.4 GHz, Bluetooth 5.0, USB‑C",
      "Keycap Profile": "DA (spherical low‑profile)", "Weight": "0.6 kg", "Lighting": "Per‑key RGB"
    },
    switchDetails: {
      stockSwitches: "Gateron Low‑Profile Red (55g linear) / Blue (60g clicky) / Brown (55g tactile)",
      actuationForce: "55g – 60g",
      typingFeel: "Short travel (2.5 mm) gives a snappy, responsive typing experience. Quieter than standard mechanical switches.",
      modPotential: "Limited – only Gateron low‑profile switches fit. Keycaps are proprietary but decent."
    },
    procurement: [
      { label: "Low‑Profile Switches (Gateron)", cnTerm: "佳达隆矮轴 线性轴" },
      { label: "Wrist Rest (NuPhy)", cnTerm: "NuPhy 木质手托" }
    ],
    softwareConfig: { utility: "NuPhy Console (web)", runtimeDependency: "None" },
    lifespanEstimates: { chassisLife: "6+ years", stockSwitchesLife: "50 million keystrokes", limitingFactor: "Battery degradation or proprietary keycap wear" },
    ergonomicDetails: { scoreReason: "9/10 – Low‑profile design reduces wrist extension; wireless keeps desk clean. Great for long coding sessions." },
    pros: ["Super slim and lightweight", "Excellent wireless (2.4 GHz + Bluetooth)", "Hot‑swap low‑profile switches", "PBT keycaps out‑of‑the‑box", "Great battery life (up to 240h without RGB)"],
    cons: ["Proprietary switch socket (only Gateron low‑profile)", "No QMK/VIA support", "Limited aftermarket keycaps"],
    setupNotes: ["WIRELESS: Use 2.4 GHz dongle for gaming, Bluetooth for office.", "SWITCHES: Red linear recommended for quiet office use.", "KEYCAPS: Stock PBT caps are high quality; no need to swap."]
  },
  {
    id: "keychron-q10", category: "keyboards", name: "Q10 Alice", brand: "Keychron", status: "Wishlist",
    topPickBadge: "Best Ergonomic Mechanical Keyboard", price: "$189 (barebones) / $209 (assembled)",
    purchaseUrl: "https://www.keychron.com/products/keychron-q10-alice-layout-qmk-custom-mechanical-keyboard",
    tags: ["Alice", "Ergonomic", "75%", "Hot‑Swap", "QMK/VIA", "Alu"],
    summary: "Full aluminium 75% Alice layout keyboard with gasket mount, hot‑swap, and QMK/VIA. The split design promotes a natural wrist and shoulder posture, reducing strain.",
    properties: {
      "Layout": "Alice 75% (72 keys)", "Switch Type": "Gateron G Pro (Red/Blue/Brown) or Keychron K Pro", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)",
      "Keycap Profile": "OSA", "Weight": "1.8 kg", "Lighting": "Per‑key RGB (south‑facing)"
    },
    switchDetails: {
      stockSwitches: "Gateron G Pro Red / Blue / Brown",
      actuationForce: "45g – 60g",
      typingFeel: "Soft gasket mount with curved key layout encourages a more natural hand angle, reducing wrist pronation.",
      modPotential: "Same as Q1 – full aluminium, easy to mod with foam, lube, and stabilisers."
    },
    procurement: [
      { label: "Switches (Boba U4T tactile)", cnTerm: "Boba U4T 触觉轴" },
      { label: "Alice‑style wrist rest", cnTerm: "Alice 键盘手托 木质" }
    ],
    softwareConfig: { utility: "VIA / QMK Configurator", runtimeDependency: "None" },
    lifespanEstimates: { chassisLife: "10+ years (full aluminium)", stockSwitchesLife: "50–80 million keystrokes", limitingFactor: "USB‑C port" },
    ergonomicDetails: { scoreReason: "9.5/10 – Alice layout reduces ulnar deviation and wrist pronation. Combined with a split tented position, it’s one of the most ergonomic pre‑built keyboards." },
    pros: ["Ergonomic Alice layout reduces strain", "Full aluminium, premium build", "Hot‑swap + QMK/VIA", "Gasket mount for comfortable typing"],
    cons: ["Takes time to adapt to Alice layout", "No wireless option", "More expensive"],
    setupNotes: ["ADAPTATION: Spend 1–2 weeks to get comfortable with the layout.", "SWITCHES: Tactile switches like Boba U4T complement the ergonomic typing experience.", "WRIST REST: A dedicated Alice wrist rest improves comfort significantly."]
  }
];
