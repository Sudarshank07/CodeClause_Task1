function convert() {
        // Get user input values
        var fromValue = document.getElementById("fromValue").value;
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        
        // Convert input value to meters
        switch(fromUnit) {
            case 'meters':
                var inMeters = fromValue;
                break;
            case 'kilometers':
                var inMeters = fromValue * 1000;
                break;
            case 'feet':
                var inMeters = fromValue / 3.281;
                break;
            case 'yards':
                var inMeters = fromValue / 1.094;
                break;
            case 'miles':
                var inMeters = fromValue * 1609.344;
                break;
        }
        
        // Convert meters to output unit
        switch(toUnit) {
            case 'meters':
                var result = inMeters;
                break;
            case 'kilometers':
                var result = inMeters / 1000;
                break;
            case 'feet':
                var result = inMeters * 3.281;
                break;
            case 'yards':
                var result = inMeters * 1.094;
                break;
            case 'miles':
                var result = inMeters / 1609.344;
                break;
        }
        
        // Display result
        document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
    }
    