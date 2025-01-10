
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-09 23:00:00", "b": 1632.6}, {"a": "2025-01-09 23:05:00", "b": 1830.0}, {"a": "2025-01-09 23:10:00", "b": 2283.8}, {"a": "2025-01-09 23:15:00", "b": 2027.0}, {"a": "2025-01-09 23:20:00", "b": 1908.8}, {"a": "2025-01-09 23:25:00", "b": 1910.6}, {"a": "2025-01-09 23:30:00", "b": 1912.8}, {"a": "2025-01-09 23:35:00", "b": 2056.8}, {"a": "2025-01-09 23:40:00", "b": 2076.0}, {"a": "2025-01-09 23:45:00", "b": 2079.0}, {"a": "2025-01-09 23:50:00", "b": 1987.4}, {"a": "2025-01-09 23:55:00", "b": 2037.8}, {"a": "2025-01-10 00:00:00", "b": 2126.4}, {"a": "2025-01-10 00:05:00", "b": 1770.2}, {"a": "2025-01-10 00:10:00", "b": 1213.8}, {"a": "2025-01-10 00:15:00", "b": 1119.0}, {"a": "2025-01-10 00:20:00", "b": 1207.2}, {"a": "2025-01-10 00:25:00", "b": 1460.8}, {"a": "2025-01-10 00:30:00", "b": 1280.8}, {"a": "2025-01-10 00:35:00", "b": 1506.6}, {"a": "2025-01-10 00:40:00", "b": 1561.75}, {"a": "2025-01-10 00:45:00", "b": 1679.6}, {"a": "2025-01-10 00:50:00", "b": 1417.2}, {"a": "2025-01-10 00:55:00", "b": 1449.2}, {"a": "2025-01-10 01:00:00", "b": 1452.4}, {"a": "2025-01-10 01:05:00", "b": 1392.2}, {"a": "2025-01-10 01:10:00", "b": 1460.8}, {"a": "2025-01-10 01:15:00", "b": 1842.0}, {"a": "2025-01-10 01:20:00", "b": 2323.25}, {"a": "2025-01-10 01:25:00", "b": 2229.4}, {"a": "2025-01-10 01:30:00", "b": 2245.5}, {"a": "2025-01-10 01:35:00", "b": 2331.2}, {"a": "2025-01-10 01:40:00", "b": 2327.2}, {"a": "2025-01-10 01:45:00", "b": 1988.2}, {"a": "2025-01-10 01:50:00", "b": 2210.75}, {"a": "2025-01-10 01:55:00", "b": 2698.6}, {"a": "2025-01-10 02:00:00", "b": 4105.2}, {"a": "2025-01-10 02:05:00", "b": 4129.8}, {"a": "2025-01-10 02:10:00", "b": 4253.2}, {"a": "2025-01-10 02:15:00", "b": 4061.2}, {"a": "2025-01-10 02:20:00", "b": 4814.8}, {"a": "2025-01-10 02:25:00", "b": 4886.0}, {"a": "2025-01-10 02:30:00", "b": 4961.333333333333}, {"a": "2025-01-10 02:45:00", "b": 4692.75}, {"a": "2025-01-10 02:50:00", "b": 4194.0}, {"a": "2025-01-10 02:55:00", "b": 3616.6}, {"a": "2025-01-10 03:00:00", "b": 3191.8}, {"a": "2025-01-10 03:05:00", "b": 3108.4}, {"a": "2025-01-10 03:10:00", "b": 2763.2}, {"a": "2025-01-10 03:15:00", "b": 2702.2}, {"a": "2025-01-10 03:20:00", "b": 1742.4}, {"a": "2025-01-10 03:25:00", "b": 1568.0}, {"a": "2025-01-10 03:30:00", "b": 1473.6}, {"a": "2025-01-10 03:35:00", "b": 1725.6}, {"a": "2025-01-10 03:40:00", "b": 2010.6}, {"a": "2025-01-10 03:45:00", "b": 1785.0}, {"a": "2025-01-10 03:50:00", "b": 1714.6}, {"a": "2025-01-10 03:55:00", "b": 1619.2}, {"a": "2025-01-10 04:00:00", "b": 1528.4}, {"a": "2025-01-10 04:05:00", "b": 1155.8}, {"a": "2025-01-10 04:10:00", "b": 1137.8}, {"a": "2025-01-10 04:15:00", "b": 1543.2}, {"a": "2025-01-10 04:20:00", "b": 1785.2}, {"a": "2025-01-10 04:25:00", "b": 1927.6}, {"a": "2025-01-10 04:30:00", "b": 1806.2}, {"a": "2025-01-10 04:35:00", "b": 2345.0}, {"a": "2025-01-10 04:40:00", "b": 3391.4}, {"a": "2025-01-10 04:45:00", "b": 4157.2}, {"a": "2025-01-10 04:50:00", "b": 3432.8}, {"a": "2025-01-10 04:55:00", "b": 2914.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    