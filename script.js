
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-06 16:00:00", "b": 890.0}, {"a": "2025-01-06 16:05:00", "b": 919.4}, {"a": "2025-01-06 16:10:00", "b": 1024.5}, {"a": "2025-01-06 16:15:00", "b": 900.2}, {"a": "2025-01-06 16:20:00", "b": 1119.6}, {"a": "2025-01-06 16:25:00", "b": 920.4}, {"a": "2025-01-06 16:30:00", "b": 884.6}, {"a": "2025-01-06 16:35:00", "b": 909.8}, {"a": "2025-01-06 16:40:00", "b": 984.2}, {"a": "2025-01-06 16:45:00", "b": 1057.0}, {"a": "2025-01-06 16:50:00", "b": 1101.2}, {"a": "2025-01-06 16:55:00", "b": 1370.2}, {"a": "2025-01-06 17:00:00", "b": 1325.2}, {"a": "2025-01-06 17:05:00", "b": 1289.2}, {"a": "2025-01-06 17:10:00", "b": 1306.0}, {"a": "2025-01-06 17:15:00", "b": 1295.0}, {"a": "2025-01-06 17:20:00", "b": 1437.4}, {"a": "2025-01-06 17:25:00", "b": 1510.2}, {"a": "2025-01-06 17:30:00", "b": 1415.4}, {"a": "2025-01-06 17:35:00", "b": 1371.75}, {"a": "2025-01-06 17:40:00", "b": 1438.4}, {"a": "2025-01-06 17:45:00", "b": 1287.6}, {"a": "2025-01-06 17:50:00", "b": 1150.0}, {"a": "2025-01-06 17:55:00", "b": 1168.2}, {"a": "2025-01-06 18:00:00", "b": 1333.6}, {"a": "2025-01-06 18:05:00", "b": 1609.0}, {"a": "2025-01-06 18:10:00", "b": 1588.6}, {"a": "2025-01-06 18:15:00", "b": 1659.2}, {"a": "2025-01-06 18:20:00", "b": 1647.2}, {"a": "2025-01-06 18:25:00", "b": 1665.0}, {"a": "2025-01-06 18:30:00", "b": 1710.6}, {"a": "2025-01-06 18:35:00", "b": 1668.2}, {"a": "2025-01-06 18:40:00", "b": 1498.4}, {"a": "2025-01-06 18:45:00", "b": 1468.0}, {"a": "2025-01-06 18:50:00", "b": 1458.2}, {"a": "2025-01-06 18:55:00", "b": 1452.0}, {"a": "2025-01-06 19:00:00", "b": 1458.4}, {"a": "2025-01-06 19:05:00", "b": 1467.2}, {"a": "2025-01-06 19:10:00", "b": 1442.25}, {"a": "2025-01-06 19:15:00", "b": 1453.8}, {"a": "2025-01-06 19:20:00", "b": 1396.2}, {"a": "2025-01-06 19:25:00", "b": 1455.8}, {"a": "2025-01-06 19:30:00", "b": 1410.4}, {"a": "2025-01-06 19:35:00", "b": 1449.5}, {"a": "2025-01-06 19:40:00", "b": 1452.4}, {"a": "2025-01-06 19:45:00", "b": 1435.8}, {"a": "2025-01-06 19:50:00", "b": 1389.8}, {"a": "2025-01-06 19:55:00", "b": 1374.8}, {"a": "2025-01-06 20:00:00", "b": 1365.8}, {"a": "2025-01-06 20:05:00", "b": 1422.0}, {"a": "2025-01-06 20:10:00", "b": 2229.6}, {"a": "2025-01-06 20:15:00", "b": 2069.8}, {"a": "2025-01-06 20:20:00", "b": 2378.8}, {"a": "2025-01-06 20:25:00", "b": 1779.6}, {"a": "2025-01-06 20:30:00", "b": 1676.0}, {"a": "2025-01-06 20:35:00", "b": 1780.0}, {"a": "2025-01-06 20:40:00", "b": 1927.6}, {"a": "2025-01-06 20:45:00", "b": 1870.2}, {"a": "2025-01-06 20:50:00", "b": 2022.0}, {"a": "2025-01-06 20:55:00", "b": 2247.8}, {"a": "2025-01-06 21:00:00", "b": 2215.4}, {"a": "2025-01-06 21:05:00", "b": 1777.2}, {"a": "2025-01-06 21:10:00", "b": 1501.4}, {"a": "2025-01-06 21:15:00", "b": 1376.0}, {"a": "2025-01-06 21:20:00", "b": 1633.2}, {"a": "2025-01-06 21:25:00", "b": 1688.8}, {"a": "2025-01-06 21:30:00", "b": 1782.8}, {"a": "2025-01-06 21:35:00", "b": 1777.0}, {"a": "2025-01-06 21:40:00", "b": 2223.2}, {"a": "2025-01-06 21:45:00", "b": 2241.75}, {"a": "2025-01-06 21:50:00", "b": 1814.4}, {"a": "2025-01-06 21:55:00", "b": 1250.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    