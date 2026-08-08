      function getQuickSpecPills(item) {
        const props = (item.properties && typeof item.properties === 'object') ? item.properties : {};
        const lifespan = (item.lifespanEstimates && typeof item.lifespanEstimates === 'object') ? item.lifespanEstimates : null;
        const panelInfo = (item.panelDetails && typeof item.panelDetails === 'object') ? item.panelDetails : null;

        // ----- MONITORS: original pills -----
        if (activeCategory === 'monitors') {
          return `
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'ergonomics')"><span class="spec-key">Screen Size ↗</span><span class="spec-val">${props["Screen Size"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Refresh Rate ↗</span><span class="spec-val">${props["Refresh Rate"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'panel')"><span class="spec-key">Panel Tech ↗</span><span class="spec-val">${panelInfo ? panelInfo.panelTech : 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'panel')"><span class="spec-key">Color Accuracy ↗</span><span class="spec-val">${panelInfo ? panelInfo.colorGamut : 'N/A'}</span></div>
          `;
        }

        // ----- KEYBOARDS: original pills -----
        if (activeCategory === 'keyboards') {
          return `
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'ergonomics')"><span class="spec-key">Layout ↗</span><span class="spec-val">${props["Layout"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'switches')"><span class="spec-key">Switch Type ↗</span><span class="spec-val">${props["Switch Type"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'switches')"><span class="spec-key">Hot‑Swappable ↗</span><span class="spec-val">${props["Hot‑Swappable"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'switches')"><span class="spec-key">Connectivity ↗</span><span class="spec-val">${props["Connectivity"] || 'N/A'}</span></div>
          `;
        }

        // ----- CHAIRS: rating replaces Warranty -----
        if (activeCategory === 'chairs') {
          const rating = item.suggestRating != null ? item.suggestRating + '/10' : 'N/A';
          return `
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'ergonomics')"><span class="spec-key">Ergonomic Rating ↗</span><span class="spec-val">${props["Ergonomic Rating"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Weight Capacity ↗</span><span class="spec-val">${props["Weight Capacity"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Material ↗</span><span class="spec-val">${props["Seat Material"] || props["Material"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive"><span class="spec-key">My Rating</span><span class="spec-val">${rating}</span></div>
          `;
        }

        // ----- DESKS: rating replaces Desktop Size -----
        if (activeCategory === 'desks') {
          const rating = item.suggestRating != null ? item.suggestRating + '/10' : 'N/A';
          return `
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Desk Type ↗</span><span class="spec-val">${props["Desk Type"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Height Range ↗</span><span class="spec-val">${props["Height Range"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Weight Capacity ↗</span><span class="spec-val">${props["Weight Capacity"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive"><span class="spec-key">My Rating</span><span class="spec-val">${rating}</span></div>
          `;
        }

        // ----- GADGETS -----
        if (activeCategory === 'gadgets') {
          const rating = item.suggestRating != null ? item.suggestRating + '/10' : 'N/A';
          return `
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">Type ↗</span><span class="spec-val">${props["Type"] || 'N/A'}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'properties')"><span class="spec-key">DIY Difficulty ↗</span><span class="spec-val">${item.diyDifficulty || 'N/A'}</span></div>
            <div class="spec-pill-interactive"><span class="spec-key">My Rating</span><span class="spec-val">${rating}</span></div>
            <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'ergonomics')"><span class="spec-key">Why It's Good ↗</span><span class="spec-val">Tap to see</span></div>
          `;
        }

        // ----- MICE: original pills, repair risk replaced with switch ease -----
        return `
          <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'ergonomics')"><span class="spec-key">Ergonomic Score ↗</span><span class="spec-val">${props["Ergonomic Rating"] || 'N/A'}</span></div>
          <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'lifespan')"><span class="spec-key">Modded Life ↗</span><span class="spec-val">${lifespan ? lifespan.moddedSwitchesLife : 'N/A'}</span></div>
          <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'procurement')"><span class="spec-key">Taobao Parts Copy ↗</span><span class="spec-val">${Array.isArray(item.procurement) ? item.procurement.length + ' Items' : '0'}</span></div>
          <div class="spec-pill-interactive" onclick="window.deskApp.openAndJump('${item.id}', 'repairability')"><span class="spec-key">Switch Replace Ease</span><span class="spec-val">${item.repairability ? item.repairability.score.replace(/\s*\(.*\)/, '') : 'N/A'}</span></div>
        `;
      }
