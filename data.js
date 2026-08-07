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
    }
