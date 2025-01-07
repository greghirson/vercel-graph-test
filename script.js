
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-06 19:00:00", "b": 1458.4}, {"a": "2025-01-06 19:05:00", "b": 1467.2}, {"a": "2025-01-06 19:10:00", "b": 1442.25}, {"a": "2025-01-06 19:15:00", "b": 1453.8}, {"a": "2025-01-06 19:20:00", "b": 1396.2}, {"a": "2025-01-06 19:25:00", "b": 1455.8}, {"a": "2025-01-06 19:30:00", "b": 1410.4}, {"a": "2025-01-06 19:35:00", "b": 1449.5}, {"a": "2025-01-06 19:40:00", "b": 1452.4}, {"a": "2025-01-06 19:45:00", "b": 1435.8}, {"a": "2025-01-06 19:50:00", "b": 1389.8}, {"a": "2025-01-06 19:55:00", "b": 1374.8}, {"a": "2025-01-06 20:00:00", "b": 1365.8}, {"a": "2025-01-06 20:05:00", "b": 1422.0}, {"a": "2025-01-06 20:10:00", "b": 2229.6}, {"a": "2025-01-06 20:15:00", "b": 2069.8}, {"a": "2025-01-06 20:20:00", "b": 2378.8}, {"a": "2025-01-06 20:25:00", "b": 1779.6}, {"a": "2025-01-06 20:30:00", "b": 1676.0}, {"a": "2025-01-06 20:35:00", "b": 1780.0}, {"a": "2025-01-06 20:40:00", "b": 1927.6}, {"a": "2025-01-06 20:45:00", "b": 1870.2}, {"a": "2025-01-06 20:50:00", "b": 2022.0}, {"a": "2025-01-06 20:55:00", "b": 2247.8}, {"a": "2025-01-06 21:00:00", "b": 2215.4}, {"a": "2025-01-06 21:05:00", "b": 1777.2}, {"a": "2025-01-06 21:10:00", "b": 1501.4}, {"a": "2025-01-06 21:15:00", "b": 1376.0}, {"a": "2025-01-06 21:20:00", "b": 1633.2}, {"a": "2025-01-06 21:25:00", "b": 1688.8}, {"a": "2025-01-06 21:30:00", "b": 1782.8}, {"a": "2025-01-06 21:35:00", "b": 1777.0}, {"a": "2025-01-06 21:40:00", "b": 2223.2}, {"a": "2025-01-06 21:45:00", "b": 2241.75}, {"a": "2025-01-06 21:50:00", "b": 1814.4}, {"a": "2025-01-06 21:55:00", "b": 1250.6}, {"a": "2025-01-06 22:00:00", "b": 1096.4}, {"a": "2025-01-06 22:05:00", "b": 1049.2}, {"a": "2025-01-06 22:10:00", "b": 1188.0}, {"a": "2025-01-06 22:15:00", "b": 1469.8}, {"a": "2025-01-06 22:20:00", "b": 1532.8}, {"a": "2025-01-06 22:25:00", "b": 1697.2}, {"a": "2025-01-06 22:30:00", "b": 1920.6}, {"a": "2025-01-06 22:35:00", "b": 1607.75}, {"a": "2025-01-06 22:40:00", "b": 1717.8}, {"a": "2025-01-06 22:45:00", "b": 1811.75}, {"a": "2025-01-06 22:50:00", "b": 2644.2}, {"a": "2025-01-06 22:55:00", "b": 2382.4}, {"a": "2025-01-06 23:00:00", "b": 2030.6}, {"a": "2025-01-06 23:05:00", "b": 2480.4}, {"a": "2025-01-06 23:10:00", "b": 2570.8}, {"a": "2025-01-06 23:15:00", "b": 1978.8}, {"a": "2025-01-06 23:20:00", "b": 2189.8}, {"a": "2025-01-06 23:25:00", "b": 2283.8}, {"a": "2025-01-06 23:30:00", "b": 1586.0}, {"a": "2025-01-06 23:35:00", "b": 1697.0}, {"a": "2025-01-06 23:40:00", "b": 1926.6}, {"a": "2025-01-06 23:45:00", "b": 1003.8}, {"a": "2025-01-06 23:50:00", "b": 1417.6}, {"a": "2025-01-06 23:55:00", "b": 1311.2}, {"a": "2025-01-07 00:00:00", "b": 704.0}, {"a": "2025-01-07 00:05:00", "b": 562.6}, {"a": "2025-01-07 00:10:00", "b": 542.2}, {"a": "2025-01-07 00:15:00", "b": 532.8}, {"a": "2025-01-07 00:20:00", "b": 510.6}, {"a": "2025-01-07 00:25:00", "b": 472.4}, {"a": "2025-01-07 00:30:00", "b": 448.8}, {"a": "2025-01-07 00:35:00", "b": 441.2}, {"a": "2025-01-07 00:40:00", "b": 449.8}, {"a": "2025-01-07 00:45:00", "b": 437.25}, {"a": "2025-01-07 00:50:00", "b": 423.6}, {"a": "2025-01-07 00:55:00", "b": 430.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    