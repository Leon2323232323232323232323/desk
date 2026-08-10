window.DESK_KEYBOARDS = [
  {
    id: "rk-r65", category: "keyboards", name: "RK R65", brand: "Royal Kludge", status: "Wishlist", isTopPick: true,
    topPickBadge: "Best Budget 65% – Incredible Value", price: "$49", suggestRating: 9.5,
    purchaseUrl: "https://www.amazon.com/RK-ROYAL-KLUDGE-Mechanical-Hot-swappable/dp/B0CJY5LQBX",
    tags: ["65%", "Hot‑Swap", "Wireless", "Gasket Mount", "Volume Knob", "Budget"],
    summary: "The absolute bang‑for‑buck champion. For $49 you get a 65% layout, 2.4 GHz wireless + Bluetooth, hot‑swap PCB, gasket mount, PBT keycaps, and a handy volume knob. Typing feel and sound are shockingly good out of the box. The perfect entry point into custom keyboards without breaking the bank.",
    properties: { "Layout": "65% (67 keys)", "Switch Type": "RK Red / Brown / Silver (linear/tactile)", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "2.4 GHz, Bluetooth 5.0, USB‑C", "Keycap Profile": "Cherry‑profile PBT", "Weight": "~0.9 kg", "Lighting": "Per‑key RGB (north‑facing)" },
    switchDetails: { stockSwitches: "RK Red (45g linear), RK Brown (55g tactile), RK Silver (45g linear, shorter travel)", actuationForce: "45g – 55g", typingFeel: "Gasket mount with PC plate provides a soft, bouncy typing experience. The factory‑lubed switches sound surprisingly deep and marbly, even without mods.", modPotential: "3‑pin & 5‑pin hot‑swap supports almost every aftermarket switch. Easy to add foam, swap keycaps, or lube stabilisers." },
    procurement: [ { label: "Budget linear switches (Akko CS Jelly Pink)", cnTerm: "Akko CS 果冻粉轴" }, { label: "PBT keycaps (Milk cover set)", cnTerm: "PBT 键帽 牛奶白 透光" }, { label: "Stabiliser lube (205g0)", cnTerm: "键盘润滑脂 205g0" } ],
    softwareConfig: { utility: "RK Driver (Windows)", runtimeDependency: "None (hardware macros)", baseLayer: "Fn layer for arrows, media, and RGB control" },
    lifespanEstimates: { chassisLife: "5+ years (plastic, solid build)", stockSwitchesLife: "50 million keystrokes", limitingFactor: "Battery degradation after 3‑4 years (easily replaced)" },
    ergonomicDetails: { scoreReason: "Compact 65% frees desk space for mouse movement. Gasket mount reduces finger fatigue. No wrist rest needed.", specificShapeContour: "Flat profile with slight angle built into the case. Volume knob on the right side is within easy reach.", comparisonVsCloseCompetitors: "Vs Keychron V1 (wired): RK R65 adds wireless for the same price and includes a volume knob. Vs GMK67 (barebones): RK R65 is fully assembled, ready to use." },
    pros: ["Unbeatable $49 price for a fully assembled wireless mechanical keyboard", "Gasket mount + PBT keycaps out of the box", "Hot‑swap 3‑pin / 5‑pin PCB – endless customisation", "Volume knob is genuinely useful", "Deep, pleasant typing sound stock"],
    cons: ["North‑facing LEDs can cause interference with Cherry‑profile keycaps (fixable with long‑pole switches)", "Software is basic, no QMK/VIA", "Battery life with RGB on is average (~20h)", "Plastic case may feel less premium to enthusiasts"],
    setupNotes: ["SWITCH UPGRADE: Akko Jelly Pink or Gateron Milky Yellow are great budget upgrades.", "KEYCAPS: Stock PBT caps are excellent – no need to swap unless you want a different colour.", "STABILISERS: Lightly lube the stock stabilisers with 205g0 to remove any rattle.", "WIRELESS: Use 2.4 GHz for gaming (lower latency), Bluetooth for office productivity."]
  },
  {
    id: "keychron-v1", category: "keyboards", name: "V1 (barebones)", brand: "Keychron", status: "Wishlist",
    topPickBadge: "Best Entry into Custom 75% – Great Value", price: "$74 (barebones) / $94 (assembled)", suggestRating: 9.0,
    purchaseUrl: "https://www.keychron.com/products/keychron-v1-qmk-custom-mechanical-keyboard",
    tags: ["75%", "Hot‑Swap", "QMK/VIA", "Gasket Mount", "Wired", "Custom"],
    summary: "The go‑to platform for anyone wanting to build their own keyboard. QMK/VIA support means true key remapping, the gasket mount feels premium, and the barebones version lets you choose your own switches and keycaps. At $74 it’s the best starting point for the custom keyboard rabbit hole.",
    properties: { "Layout": "75% (82 keys)", "Switch Type": "Barebones (choose your own) / Keychron K Pro", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)", "Keycap Profile": "OSA (if assembled)", "Weight": "1.1 kg", "Lighting": "Per‑key RGB (south‑facing)" },
    switchDetails: { stockSwitches: "Barebones (no switches) or Keychron K Pro Red (45g linear) / Brown (55g tactile) / Blue (60g clicky)", actuationForce: "45g – 60g (depending on switches chosen)", typingFeel: "Gasket mount with PC plate offers a soft, flexy typing feel. South‑facing LEDs eliminate interference with all keycap profiles, making it switch‑friendly.", modPotential: "Fantastic modding platform. Add PE foam, tape mod, force‑break mod, and screw‑in stabilisers to achieve a premium sound profile." },
    procurement: [ { label: "Switches (Gateron Milky Yellow Pro)", cnTerm: "佳达隆 Milky Yellow Pro 润滑轴" }, { label: "Keycaps (PBTFans / NicePBT)", cnTerm: "PBTFans 键帽 双色" }, { label: "Stabilisers (Durock V2 screw‑in)", cnTerm: "Durock V2 螺丝卫星轴" } ],
    softwareConfig: { utility: "VIA / QMK Configurator", runtimeDependency: "None (web‑based)", baseLayer: "Fully programmable with up to 4 layers" },
    lifespanEstimates: { chassisLife: "7+ years (plastic but well‑built)", stockSwitchesLife: "50–80 million keystrokes", limitingFactor: "USB‑C port wear if frequently disconnected" },
    ergonomicDetails: { scoreReason: "75% layout retains function row and arrows – productive without being bulky. Adjustable feet offer two typing angles.", specificShapeContour: "Flat tray‑mount style with slight angle. Optional screw‑in feet provide 6° or 9° tilt.", comparisonVsCloseCompetitors: "Vs Q1: V1 is plastic vs aluminium, but otherwise nearly identical layout and modding potential at 1/3 the price. Vs RK R65: V1 is wired only but adds QMK/VIA and a larger 75% layout." },
    pros: ["QMK/VIA compatibility for total key remapping", "Gasket mount at a budget price", "South‑facing RGB eliminates keycap interference", "Barebones option saves money – choose your own switches and keycaps", "Excellent modding potential"],
    cons: ["Wired only (no Bluetooth / 2.4 GHz)", "Plastic case can feel hollow without mods", "Stock stabilisers benefit from upgrading to Durock V2"],
    setupNotes: ["FORCE‑BREAK MOD: Add small pieces of electrical tape between top and bottom case to eliminate case ping.", "TAPE MOD: Apply 2‑3 layers of masking tape to the PCB back for a deeper, poppier sound.", "SWITCHES: Gateron Milky Yellow Pro (pre‑lubed) offer incredible smoothness for the price.", "STABILISERS: Replace with Durock V2 screw‑in stabs, lubed with 205g0."]
  },
  {
    id: "akko-5075s", category: "keyboards", name: "5075S VIA", brand: "Akko", status: "Wishlist",
    topPickBadge: "Best 75% with VIA Under $100", price: "$89", suggestRating: 8.8,
    purchaseUrl: "https://en.akkogear.com/product/5075s-via-mechanical-keyboard/",
    tags: ["75%", "Hot‑Swap", "VIA", "Gasket Mount", "PBT", "Colorful"],
    summary: "Akko’s answer to the Keychron V1, but with a more vibrant aesthetic and included switches and keycaps. VIA support, gasket mount, and PBT ASA‑profile keycaps make this a fantastic out‑of‑the‑box experience at a very competitive price.",
    properties: { "Layout": "75% (82 keys)", "Switch Type": "Akko CS (Jelly Pink / Rose Red / Lavender Purple)", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)", "Keycap Profile": "ASA‑profile PBT double‑shot", "Weight": "1.2 kg", "Lighting": "Per‑key RGB (south‑facing)" },
    switchDetails: { stockSwitches: "Akko CS Jelly Pink (40g light linear), Rose Red (43g linear), Lavender Purple (50g tactile)", actuationForce: "40g – 50g", typingFeel: "ASA‑profile keycaps give a sculpted, comfortable typing experience. Gasket mount provides a slight flex, and the stock switches are pre‑lubed for smoothness.", modPotential: "Standard 3‑pin/5‑pin hot‑swap. Tape mod, PE foam, and force‑break all work well." },
    procurement: [ { label: "Switches (Akko CS Wine Red)", cnTerm: "Akko CS 红酒轴 线性" }, { label: "Keycaps (ASA profile PBT)", cnTerm: "ASA 键帽 PBT 双色" } ],
    softwareConfig: { utility: "VIA (web)", runtimeDependency: "None", baseLayer: "4 layers, fully customisable" },
    lifespanEstimates: { chassisLife: "6+ years", stockSwitchesLife: "50 million keystrokes", limitingFactor: "USB port or stabiliser rattle" },
    ergonomicDetails: { scoreReason: "ASA profile keycaps are ergonomically sculpted for long typing sessions. 75% layout retains essential keys.", specificShapeContour: "Sculpted ASA keycap rows, adjustable feet for angle.", comparisonVsCloseCompetitors: "Vs Keychron V1 assembled: Similar price, but Akko includes ASA keycaps and has a more colourful design. Vs V1 barebones: Akko is fully built for slightly more." },
    pros: ["VIA support out of the box", "Beautiful ASA‑profile PBT keycaps included", "Pre‑lubed switches – smooth and quiet", "South‑facing RGB, no interference", "Gasket mount at a sub‑$100 price"],
    cons: ["Wired only (no wireless option)", "ASA keycaps may take time to adjust to if coming from OEM/Cherry", "Plastic case – some may prefer aluminium at this price"],
    setupNotes: ["VIA: Open usevia.app, load the JSON definition from Akko’s site, and remap instantly.", "MODS: Tape mod and PE foam improve sound significantly. Force‑break reduces case ping.", "STABS: Lightly lube stock stabs with 205g0 for immediate improvement."]
  },
  {
    id: "nuphy-air75", category: "keyboards", name: "Air75 v2", brand: "NuPhy", status: "Wishlist",
    topPickBadge: "Best Low‑Profile Wireless for Travel & Office", price: "$129", suggestRating: 8.5,
    purchaseUrl: "https://nuphy.com/products/air75-v2",
    tags: ["75%", "Low‑Profile", "Wireless", "Hot‑Swap", "PBT", "Slim"],
    summary: "The ultimate travel keyboard. Ultra‑slim, lightweight, and packed with features: 2.4 GHz wireless, Bluetooth 5.0, hot‑swap low‑profile switches, and excellent PBT keycaps. Perfect for a clean desk setup or working on the go.",
    properties: { "Layout": "75% (84 keys)", "Switch Type": "Gateron Low‑Profile Red (55g linear) / Brown (55g tactile) / Blue (60g clicky)", "Hot‑Swappable": "Yes (Gateron low‑profile sockets)", "Connectivity": "2.4 GHz, Bluetooth 5.0, USB‑C", "Keycap Profile": "DA (spherical low‑profile PBT)", "Weight": "0.6 kg", "Lighting": "Per‑key RGB" },
    switchDetails: { stockSwitches: "Gateron Low‑Profile Red (55g linear), Brown (55g tactile), Blue (60g clicky)", actuationForce: "55g – 60g", typingFeel: "Short 2.5mm travel gives a snappy, responsive typing experience. Quieter than standard mechanical switches, and the PBT keycaps feel premium.", modPotential: "Limited – only Gateron low‑profile switches fit. Keycaps are proprietary but of high quality. Can lube switches for smoothness." },
    procurement: [ { label: "Low‑Profile Switches (Gateron Red)", cnTerm: "佳达隆矮红轴 线性" }, { label: "Wrist Rest (NuPhy)", cnTerm: "NuPhy 木质手托" } ],
    softwareConfig: { utility: "NuPhy Console (web)", runtimeDependency: "None", baseLayer: "Fn layers for media, navigation, and backlight" },
    lifespanEstimates: { chassisLife: "6+ years", stockSwitchesLife: "50 million keystrokes", limitingFactor: "Battery degradation or proprietary keycap wear" },
    ergonomicDetails: { scoreReason: "Low‑profile design reduces wrist extension; wireless keeps desk clutter‑free. Ideal for long coding sessions and travel.", specificShapeContour: "Ultra‑thin aluminium body, 3° typing angle built in. Compatible with NuPhy’s wooden wrist rest.", comparisonVsCloseCompetitors: "Vs Keychron K3 Pro: Air75 has better keycaps (PBT vs ABS), longer battery life, and a more premium feel. Vs Logitech MX Mechanical Mini: Air75 is hot‑swappable and cheaper." },
    pros: ["Ultra‑slim and lightweight – fits in a laptop bag", "Excellent 2.4 GHz + Bluetooth wireless", "Hot‑swap low‑profile switches", "High‑quality PBT keycaps stock", "Great battery life (up to 240h without RGB)"],
    cons: ["Proprietary switch socket limits upgrade options", "No QMK/VIA support", "Keycaps not easily replaceable (proprietary)", "Low‑profile typing feel may not satisfy enthusiasts"],
    setupNotes: ["WIRELESS: Use 2.4 GHz dongle for gaming, Bluetooth for office.", "SWITCHES: Red linear is best for quiet office use.", "LUBE: Apply a light coat of 205g0 to the switch rails for extra smoothness.", "WRIST REST: NuPhy’s wooden wrist rest pairs perfectly for ergonomics."]
  },
  {
    id: "wooting-60he", category: "keyboards", name: "60HE", brand: "Wooting", status: "Wishlist",
    topPickBadge: "Best Gaming Keyboard (Magnetic Switches)", price: "$175", suggestRating: 9.2,
    purchaseUrl: "https://next.wooting.io/wooting-60he",
    tags: ["60%", "Hall Effect", "Rapid Trigger", "Hot‑Swap", "Analog Input", "Gaming"],
    summary: "The ultimate gaming keyboard. Lekker Hall Effect switches allow analogue input, adjustable actuation points, and Rapid Trigger – every press resets instantly for unrivalled speed in competitive games. If performance matters more than price, this is it.",
    properties: { "Layout": "60% (61 keys)", "Switch Type": "Wooting Lekker (Hall Effect Magnetic)", "Hot‑Swappable": "Yes (magnetic switch sockets)", "Connectivity": "USB‑C (wired only)", "Keycap Profile": "OEM", "Weight": "0.9 kg", "Lighting": "Per‑key RGB" },
    switchDetails: { stockSwitches: "Wooting Lekker 60 (linear) – magnetically sensed, no physical contacts", actuationForce: "Adjustable 0.1 mm – 4.0 mm actuation point, ~60g bottom‑out", typingFeel: "Smooth linear feel with zero debounce. Rapid Trigger allows instant reset for repeated key presses, giving a competitive edge.", modPotential: "Can lube switches (no films needed), swap keycaps, and adjust everything via software." },
    procurement: [ { label: "Aftermarket Keycaps (PBT)", cnTerm: "PBT 60% 键帽 透光" }, { label: "Switch Lube", cnTerm: "键盘润滑脂 Krytox 205g0" } ],
    softwareConfig: { utility: "Wootility (Web/Desktop)", runtimeDependency: "None (settings saved onboard)", baseLayer: "Custom actuation points per key, Rapid Trigger, Mod‑Tap, analog gamepad mode" },
    lifespanEstimates: { chassisLife: "8+ years", stockSwitchesLife: "Virtually unlimited (magnetic, no contact wear)", limitingFactor: "USB‑C port or PCB degradation" },
    ergonomicDetails: { scoreReason: "Compact 60% frees desk space. Adjustable actuation reduces finger strain.", specificShapeContour: "Standard 60% layout with flat profile. OEM keycaps are comfortable but easily swapped.", comparisonVsCloseCompetitors: "Vs SteelSeries Apex Pro Mini: Wooting has better software, hot‑swap, and a slightly lower price. Vs Razer Huntsman Mini Analog: Wooting is more customisable and uses magnetic vs optical." },
    pros: ["Rapid Trigger + adjustable actuation = instant response", "Zero double‑click issues (magnetic)", "Hot‑swap with Lekker switches", "Excellent software (Wootility) – web and desktop", "Great for competitive gaming"],
    cons: ["No dedicated arrow keys (use FN layer)", "Wired only", "Typing experience is just okay (not as refined as high‑end mechanical)", "Price premium over non‑magnetic keyboards"],
    setupNotes: ["RAPID TRIGGER: Set actuation to 1.0 mm for fast taps; 0.5 mm for extreme speed.", "LUBE: Lightly lube switches to reduce scratchiness.", "KEYCAPS: Swapping to PBT caps improves feel and sound."]
  },
  {
    id: "keychron-q10", category: "keyboards", name: "Q10 Alice", brand: "Keychron", status: "Wishlist",
    topPickBadge: "Best Ergonomic Mechanical Keyboard", price: "$189 (barebones) / $209 (assembled)", suggestRating: 9.0,
    purchaseUrl: "https://www.keychron.com/products/keychron-q10-alice-layout-qmk-custom-mechanical-keyboard",
    tags: ["Alice", "Ergonomic", "75%", "Hot‑Swap", "QMK/VIA", "Aluminium"],
    summary: "Full aluminium 75% Alice layout keyboard with gasket mount, hot‑swap, and QMK/VIA. The split design promotes a natural wrist and shoulder posture, reducing strain. The premium build quality makes it a long‑term investment for your health and desk aesthetics.",
    properties: { "Layout": "Alice 75% (72 keys)", "Switch Type": "Gateron G Pro (Red/Blue/Brown) or Keychron K Pro", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)", "Connectivity": "USB‑C (wired only)", "Keycap Profile": "OSA", "Weight": "1.8 kg", "Lighting": "Per‑key RGB (south‑facing)" },
    switchDetails: { stockSwitches: "Gateron G Pro Red / Blue / Brown or Keychron K Pro Red / Brown / Banana", actuationForce: "45g – 60g", typingFeel: "Soft gasket mount with curved key layout encourages a more natural hand angle, reducing wrist pronation. The aluminium case gives a solid, thocky sound.", modPotential: "Same as Q1 – full aluminium, easy to mod with foam, lube, and stabilisers." },
    procurement: [ { label: "Tactile switches (Boba U4T)", cnTerm: "Boba U4T 触觉轴 62g" }, { label: "Alice‑style wrist rest", cnTerm: "Alice 键盘手托 木质 双区" } ],
    softwareConfig: { utility: "VIA / QMK Configurator", runtimeDependency: "None" },
    lifespanEstimates: { chassisLife: "10+ years (full aluminium)", stockSwitchesLife: "50–80 million keystrokes", limitingFactor: "USB‑C port" },
    ergonomicDetails: { scoreReason: "Alice layout reduces ulnar deviation and wrist pronation. Combined with a split tented position, it’s one of the most ergonomic pre‑built keyboards available.", specificShapeContour: "Curved key rows separate the two halves of the keyboard. The aluminium case is heavy and stays firmly planted.", comparisonVsCloseCompetitors: "Vs Kinesis Advantage2: Q10 is more affordable, hot‑swappable, and uses standard keycaps. Vs Dygma Raise: Q10 is fixed‑angle but much cheaper." },
    pros: ["Ergonomic Alice layout reduces strain", "Full aluminium, premium build", "Hot‑swap + QMK/VIA", "Gasket mount for comfortable typing", "Stunning aesthetics"],
    cons: ["Takes 1–2 weeks to adapt to Alice layout", "No wireless option", "Premium price (but justifiable for long‑term ergonomics)"],
    setupNotes: ["ADAPTATION: Spend 1–2 weeks typing slowly to get comfortable with the layout.", "SWITCHES: Tactile switches like Boba U4T complement the ergonomic typing experience.", "WRIST REST: A dedicated Alice wrist rest significantly improves comfort.", "MODS: Add force‑break mod and PE foam to enhance the already great sound."]
  },
    {
    id: "aula-f87-pro", category: "keyboards", name: "F87 Pro", brand: "AULA", status: "Owned", isTopPick: true,
    topPickBadge: "Best Budget Wireless Mechanical Keyboard with Screen", price: "$59 - $69",
    purchaseUrl: "https://www.amazon.com/AULA-Mechanical-Keyboard-Bluetooth-Hot-Swappable/dp/B0CZPLDMBJ",
    tags: ["75%", "Hot‑Swap", "Wireless", "LCD Screen", "Gasket Mount", "Budget"],
    summary: "Incredible value 75% wireless mechanical keyboard with a built‑in LCD smart screen, gasket mount, hot‑swap PCB, and PBT keycaps. Has a volume knob and USB passthrough. Sounds great stock and costs under $70.",
    properties: {
      "Layout": "75% (81 keys)", "Switch Type": "AULA x Huano (Linear / Tactile)", "Hot‑Swappable": "Yes (3‑pin & 5‑pin)",
      "Connectivity": "2.4 GHz, Bluetooth 5.0, USB‑C", "Keycap Profile": "Cherry‑profile PBT double‑shot",
      "Weight": "~1.1 kg", "Lighting": "Per‑key RGB (south‑facing)"
    },
    switchDetails: {
      stockSwitches: "AULA x Huano linear (45g) or tactile (55g), pre‑lubed",
      actuationForce: "45g – 55g",
      typingFeel: "Gasket mount with PC plate gives a soft, bouncy feel. Pre‑lubed switches are smooth and have a pleasant marbly sound. The LCD screen adds a unique touch without being gimmicky.",
      modPotential: "Standard 3‑pin/5‑pin hot‑swap. Tape mod and PE foam mod work great. South‑facing LEDs avoid keycap interference."
    },
    procurement: [
      { label: "Switches (Gateron Milky Yellow Pro)", cnTerm: "佳达隆 Milky Yellow Pro 润滑轴" },
      { label: "Keycaps (PBT XDA profile)", cnTerm: "XDA PBT 键帽 复古" }
    ],
    softwareConfig: { utility: "AULA Driver (Windows)", runtimeDependency: "None (hardware controls for screen)", baseLayer: "Fn layer for media, RGB, and screen settings" },
    lifespanEstimates: { chassisLife: "5+ years (plastic, solid build)", stockSwitchesLife: "50 million keystrokes", limitingFactor: "Battery degradation after 3‑4 years (replaceable)" },
    ergonomicDetails: { scoreReason: "Compact 75% with a volume knob and screen. Gasket mount reduces typing fatigue. Excellent for both gaming and office work.", specificShapeContour: "Flat profile with adjustable feet. LCD screen is positioned above the arrow keys.", comparisonVsCloseCompetitors: "Vs RK R65: F87 Pro adds an LCD screen and has slightly better stock switches. Vs Keychron V1: F87 Pro is wireless and includes a screen, but lacks QMK/VIA." },
    pros: [
      "Unbelievable value – wireless, gasket mount, PBT caps, and an LCD screen for under $70",
      "Hot‑swap 3‑pin/5‑pin PCB",
      "Volume knob + USB passthrough",
      "Decent pre‑lubed switches",
      "Unique LCD display for time, battery, or custom GIFs"
    ],
    cons: [
      "No QMK/VIA support",
      "LCD software is Windows‑only",
      "Plastic case can feel hollow without mods",
      "Battery life with RGB and screen on is average (~30h)"
    ],
    setupNotes: [
      "SCREEN: Use the AULA driver to upload custom GIFs or monitor system temps.",
      "WIRELESS: 2.4 GHz dongle is stored under the keyboard – don't lose it.",
      "MODS: Add PE foam and tape mod for an even deeper sound. Force‑break mod reduces case ping."
    ]
  }
];
