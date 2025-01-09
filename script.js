
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-08 14:00:00", "b": 1215.75}, {"a": "2025-01-08 14:05:00", "b": 1193.0}, {"a": "2025-01-08 14:10:00", "b": 643.2}, {"a": "2025-01-08 14:15:00", "b": 767.4}, {"a": "2025-01-08 14:20:00", "b": 807.0}, {"a": "2025-01-08 14:25:00", "b": 811.2}, {"a": "2025-01-08 14:30:00", "b": 875.0}, {"a": "2025-01-08 14:50:00", "b": 996.6}, {"a": "2025-01-08 14:55:00", "b": 950.0}, {"a": "2025-01-08 15:00:00", "b": 923.2}, {"a": "2025-01-08 15:05:00", "b": 1017.0}, {"a": "2025-01-08 15:10:00", "b": 984.8}, {"a": "2025-01-08 15:15:00", "b": 941.6}, {"a": "2025-01-08 15:20:00", "b": 1219.6}, {"a": "2025-01-08 15:25:00", "b": 1228.4}, {"a": "2025-01-08 15:30:00", "b": 1359.4}, {"a": "2025-01-08 15:35:00", "b": 1515.8}, {"a": "2025-01-08 15:40:00", "b": 1399.2}, {"a": "2025-01-08 15:45:00", "b": 1245.0}, {"a": "2025-01-08 15:50:00", "b": 856.2}, {"a": "2025-01-08 15:55:00", "b": 710.6}, {"a": "2025-01-08 16:00:00", "b": 702.8}, {"a": "2025-01-08 16:05:00", "b": 726.0}, {"a": "2025-01-08 16:10:00", "b": 1241.0}, {"a": "2025-01-08 16:15:00", "b": 1470.4}, {"a": "2025-01-08 16:20:00", "b": 1656.8}, {"a": "2025-01-08 16:25:00", "b": 1831.4}, {"a": "2025-01-08 16:30:00", "b": 1683.0}, {"a": "2025-01-08 16:35:00", "b": 1521.0}, {"a": "2025-01-08 16:40:00", "b": 1598.6}, {"a": "2025-01-08 16:45:00", "b": 1541.2}, {"a": "2025-01-08 16:50:00", "b": 1680.2}, {"a": "2025-01-08 17:00:00", "b": 1504.4}, {"a": "2025-01-08 17:05:00", "b": 1732.8}, {"a": "2025-01-08 17:10:00", "b": 1599.8}, {"a": "2025-01-08 17:15:00", "b": 861.4}, {"a": "2025-01-08 17:20:00", "b": 741.2}, {"a": "2025-01-08 17:25:00", "b": 742.6}, {"a": "2025-01-08 17:30:00", "b": 798.4}, {"a": "2025-01-08 17:35:00", "b": 723.2}, {"a": "2025-01-08 17:40:00", "b": 737.8}, {"a": "2025-01-08 17:45:00", "b": 658.6}, {"a": "2025-01-08 17:50:00", "b": 666.4}, {"a": "2025-01-08 17:55:00", "b": 683.4}, {"a": "2025-01-08 18:00:00", "b": 813.6}, {"a": "2025-01-08 18:05:00", "b": 783.4}, {"a": "2025-01-08 18:10:00", "b": 904.0}, {"a": "2025-01-08 18:15:00", "b": 936.6}, {"a": "2025-01-08 18:20:00", "b": 1050.6}, {"a": "2025-01-08 18:25:00", "b": 906.6}, {"a": "2025-01-08 18:30:00", "b": 824.2}, {"a": "2025-01-08 18:35:00", "b": 794.4}, {"a": "2025-01-08 18:40:00", "b": 757.8}, {"a": "2025-01-08 18:45:00", "b": 722.6}, {"a": "2025-01-08 18:50:00", "b": 710.0}, {"a": "2025-01-08 18:55:00", "b": 714.2}, {"a": "2025-01-08 19:00:00", "b": 758.2}, {"a": "2025-01-08 19:05:00", "b": 772.4}, {"a": "2025-01-08 19:10:00", "b": 774.0}, {"a": "2025-01-08 19:15:00", "b": 752.4}, {"a": "2025-01-08 19:20:00", "b": 768.0}, {"a": "2025-01-08 19:25:00", "b": 750.0}, {"a": "2025-01-08 19:30:00", "b": 774.2}, {"a": "2025-01-08 19:35:00", "b": 757.6}, {"a": "2025-01-08 19:40:00", "b": 815.6}, {"a": "2025-01-08 19:45:00", "b": 820.4}, {"a": "2025-01-08 19:50:00", "b": 818.8}, {"a": "2025-01-08 19:55:00", "b": 804.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    