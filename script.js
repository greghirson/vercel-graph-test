
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-26 20:00:00", "b": 840.0}, {"a": "2025-01-26 20:05:00", "b": 836.8}, {"a": "2025-01-26 20:10:00", "b": 816.4}, {"a": "2025-01-26 20:15:00", "b": 816.0}, {"a": "2025-01-26 20:20:00", "b": 839.0}, {"a": "2025-01-26 20:25:00", "b": 836.0}, {"a": "2025-01-26 20:30:00", "b": 833.8}, {"a": "2025-01-26 20:35:00", "b": 833.25}, {"a": "2025-01-26 20:40:00", "b": 825.6}, {"a": "2025-01-26 20:45:00", "b": 823.25}, {"a": "2025-01-26 20:50:00", "b": 834.8}, {"a": "2025-01-26 20:55:00", "b": 832.75}, {"a": "2025-01-26 21:00:00", "b": 811.6}, {"a": "2025-01-26 21:05:00", "b": 729.25}, {"a": "2025-01-26 21:10:00", "b": 683.6}, {"a": "2025-01-26 21:15:00", "b": 1251.4}, {"a": "2025-01-26 21:20:00", "b": 1522.0}, {"a": "2025-01-26 21:25:00", "b": 1595.2}, {"a": "2025-01-26 21:30:00", "b": 1640.8}, {"a": "2025-01-26 21:35:00", "b": 1688.2}, {"a": "2025-01-26 21:40:00", "b": 1715.0}, {"a": "2025-01-26 21:45:00", "b": 1758.2}, {"a": "2025-01-26 21:50:00", "b": 1780.0}, {"a": "2025-01-26 21:55:00", "b": 1792.2}, {"a": "2025-01-26 22:00:00", "b": 1813.2}, {"a": "2025-01-26 22:05:00", "b": 1826.6}, {"a": "2025-01-26 22:10:00", "b": 2090.5}, {"a": "2025-01-26 22:15:00", "b": 2004.6}, {"a": "2025-01-26 22:20:00", "b": 1013.8}, {"a": "2025-01-26 22:25:00", "b": 637.8}, {"a": "2025-01-26 22:30:00", "b": 620.8}, {"a": "2025-01-26 22:35:00", "b": 624.4}, {"a": "2025-01-26 22:40:00", "b": 624.6}, {"a": "2025-01-26 22:45:00", "b": 631.5}, {"a": "2025-01-26 22:50:00", "b": 622.5}, {"a": "2025-01-26 22:55:00", "b": 612.25}, {"a": "2025-01-26 23:00:00", "b": 615.6}, {"a": "2025-01-26 23:05:00", "b": 608.4}, {"a": "2025-01-26 23:10:00", "b": 592.75}, {"a": "2025-01-26 23:15:00", "b": 596.6}, {"a": "2025-01-26 23:20:00", "b": 596.2}, {"a": "2025-01-26 23:25:00", "b": 617.4}, {"a": "2025-01-26 23:30:00", "b": 649.0}, {"a": "2025-01-26 23:35:00", "b": 651.0}, {"a": "2025-01-26 23:40:00", "b": 562.6}, {"a": "2025-01-26 23:45:00", "b": 499.8}, {"a": "2025-01-26 23:50:00", "b": 434.0}, {"a": "2025-01-26 23:55:00", "b": 419.6}, {"a": "2025-01-27 00:00:00", "b": 425.5}, {"a": "2025-01-27 00:05:00", "b": 425.2}, {"a": "2025-01-27 00:10:00", "b": 415.8}, {"a": "2025-01-27 00:15:00", "b": 412.5}, {"a": "2025-01-27 00:20:00", "b": 419.75}, {"a": "2025-01-27 00:25:00", "b": 425.2}, {"a": "2025-01-27 00:30:00", "b": 414.25}, {"a": "2025-01-27 00:35:00", "b": 412.75}, {"a": "2025-01-27 00:40:00", "b": 408.5}, {"a": "2025-01-27 00:45:00", "b": 408.3333333333333}, {"a": "2025-01-27 00:50:00", "b": 406.0}, {"a": "2025-01-27 00:55:00", "b": 405.5}, {"a": "2025-01-27 01:00:00", "b": 404.0}, {"a": "2025-01-27 01:05:00", "b": 405.5}, {"a": "2025-01-27 01:10:00", "b": 405.6666666666667}, {"a": "2025-01-27 01:15:00", "b": 403.5}, {"a": "2025-01-27 01:20:00", "b": 404.5}, {"a": "2025-01-27 01:25:00", "b": 401.5}, {"a": "2025-01-27 01:30:00", "b": 402.75}, {"a": "2025-01-27 01:35:00", "b": 402.5}, {"a": "2025-01-27 01:40:00", "b": 402.25}, {"a": "2025-01-27 01:45:00", "b": 402.5}, {"a": "2025-01-27 01:50:00", "b": 402.0}, {"a": "2025-01-27 01:55:00", "b": 401.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    