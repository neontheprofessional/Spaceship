fetch('./myship.json')
    .then(response => response.json())
    .then(data => {
        const shipName = data.shipName;
        const shipType = data.shipType;
        const shipClass = data.shipClass;
        const shipLocation = data.shipLocation;
        const systemsOnline = data.systemsOnline;
        const systemsOffline = data.systemsOffline;
        const engineStatus = data.engineStatus;

        //const fuel = (data.fuelLevel / 100) * 100;
        //----------------------------------------------------------

        //---------------------------------------------------------
        let fuel = (data.fuelLevel / 100) * 100;

        let fuelBar = null;
        if (fuel === 0) fuelBar = ` - ${fuel}% `;
        if (fuel >= 10 && 20 >= fuel) fuelBar = `| - ${fuel}% `;
        if (fuel >= 21 && 30 >= fuel) fuelBar = `|| - ${fuel}% `;
        if (fuel >= 20 && 30 >= fuel) fuelBar = `||| - ${fuel}% `;
        if (fuel >= 31 && 40 >= fuel) fuelBar = `|||| - ${fuel}% `;
        if (fuel >= 41 && 50 >= fuel) fuelBar = `||||| - ${fuel}% `;
        if (fuel >= 51 && 60 >= fuel) fuelBar = `|||||| - ${fuel}% `;
        if (fuel >= 61 && 70 >= fuel) fuelBar = `||||||| - ${fuel}% `;
        if (fuel >= 71 && 80 >= fuel) fuelBar = `|||||||| - ${fuel}% `;
        if (fuel >= 81 && 90 >= fuel) fuelBar = `||||||||| - ${fuel}% `;
        if (fuel >= 91 && 100 >= fuel) fuelBar = `|||||||||| - ${fuel}% `;

        const engine = (data.engineStatus / 100) * 100;
        let engineBar = null;
        if (engine === 0) fuelBar = ` - ${fuel}% `;
        if (engine >= 10 && 20 >= engine) fengineBar = `| - ${engine}% `;
        if (engine >= 21 && 30 >= engine) engineBar = `|| - ${engine}% `;
        if (engine >= 20 && 30 >= engine) engineBar = `||| - ${engine}% `;
        if (engine >= 31 && 40 >= engine) engineBar = `|||| - ${engine}% `;
        if (engine >= 41 && 50 >= engine) engineBar = `||||| - ${engine}% `;
        if (engine >= 51 && 60 >= engine) engineBar = `|||||| - ${engine}% `;
        if (engine >= 61 && 70 >= engine) engineBar = `||||||| - ${engine}% `;
        if (engine >= 71 && 80 >= engine) engineBar = `|||||||| - ${engine}% `;
        if (engine >= 81 && 90 >= engine) engineBar = `||||||||| - ${engine}% `;
        if (engine >= 91 && 100 >= engine) engineBar = `|||||||||| - ${engine}% `;

        //--------------------------------------------------------

        let result1 = "<strong>Ship ID:</strong> " + shipName + "<br><strong>Ship Type</strong>: " + shipType + "<br><strong>Ship Class</strong>: " + shipClass

        let result2 = "<br><strong>Fuel Levels</strong>: <strong>" + fuelBar + " |</strong> <i>" + fuel + "/100</i>" + "<br><strong>Engine Health</strong>: <strong>"

        let result3 = engineBar + " |</strong> <i>" + data.engineStatus + "/100</i>" + "<br><br><strong>Location</strong>: " + shipLocation + "<br><strong>Online</strong> : " + systemsOnline + "<br><strong>Offline</strong> :" + systemsOffline

        document.getElementById("status").innerHTML += result1;
        document.getElementById("status").innerHTML += result2;
        document.getElementById("status").innerHTML += result3;
    })
