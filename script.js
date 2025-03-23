
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-23 00:00:00", "b": 530.5}, {"a": "2025-03-23 00:05:00", "b": 532.0}, {"a": "2025-03-23 00:10:00", "b": 542.8}, {"a": "2025-03-23 00:15:00", "b": 533.6}, {"a": "2025-03-23 00:20:00", "b": 537.0}, {"a": "2025-03-23 00:25:00", "b": 542.8}, {"a": "2025-03-23 00:30:00", "b": 548.2}, {"a": "2025-03-23 00:35:00", "b": 542.8}, {"a": "2025-03-23 00:40:00", "b": 523.8}, {"a": "2025-03-23 00:45:00", "b": 515.6}, {"a": "2025-03-23 00:50:00", "b": 536.8}, {"a": "2025-03-23 00:55:00", "b": 539.5}, {"a": "2025-03-23 01:00:00", "b": 530.0}, {"a": "2025-03-23 01:05:00", "b": 513.0}, {"a": "2025-03-23 01:10:00", "b": 490.6}, {"a": "2025-03-23 01:15:00", "b": 497.8}, {"a": "2025-03-23 01:20:00", "b": 499.25}, {"a": "2025-03-23 01:25:00", "b": 509.4}, {"a": "2025-03-23 01:30:00", "b": 517.2}, {"a": "2025-03-23 01:35:00", "b": 505.6}, {"a": "2025-03-23 01:40:00", "b": 508.6}, {"a": "2025-03-23 01:45:00", "b": 509.75}, {"a": "2025-03-23 01:50:00", "b": 508.4}, {"a": "2025-03-23 01:55:00", "b": 515.75}, {"a": "2025-03-23 02:00:00", "b": 497.4}, {"a": "2025-03-23 02:05:00", "b": 502.0}, {"a": "2025-03-23 02:10:00", "b": 516.6}, {"a": "2025-03-23 02:15:00", "b": 520.4}, {"a": "2025-03-23 02:20:00", "b": 508.6}, {"a": "2025-03-23 02:25:00", "b": 478.6}, {"a": "2025-03-23 02:30:00", "b": 473.2}, {"a": "2025-03-23 02:35:00", "b": 479.6}, {"a": "2025-03-23 02:40:00", "b": 486.6}, {"a": "2025-03-23 02:45:00", "b": 488.6666666666667}, {"a": "2025-03-23 02:50:00", "b": 494.4}, {"a": "2025-03-23 02:55:00", "b": 492.25}, {"a": "2025-03-23 03:00:00", "b": 483.0}, {"a": "2025-03-23 03:05:00", "b": 489.6}, {"a": "2025-03-23 03:10:00", "b": 484.4}, {"a": "2025-03-23 03:15:00", "b": 499.8}, {"a": "2025-03-23 03:20:00", "b": 490.6}, {"a": "2025-03-23 03:25:00", "b": 493.8}, {"a": "2025-03-23 03:30:00", "b": 492.5}, {"a": "2025-03-23 03:35:00", "b": 490.4}, {"a": "2025-03-23 03:40:00", "b": 454.0}, {"a": "2025-03-23 03:45:00", "b": 458.2}, {"a": "2025-03-23 03:50:00", "b": 468.6}, {"a": "2025-03-23 03:55:00", "b": 483.0}, {"a": "2025-03-23 04:00:00", "b": 496.8}, {"a": "2025-03-23 04:05:00", "b": 490.0}, {"a": "2025-03-23 04:10:00", "b": 491.25}, {"a": "2025-03-23 04:15:00", "b": 489.0}, {"a": "2025-03-23 04:20:00", "b": 496.75}, {"a": "2025-03-23 04:25:00", "b": 496.0}, {"a": "2025-03-23 04:30:00", "b": 491.0}, {"a": "2025-03-23 04:35:00", "b": 497.6}, {"a": "2025-03-23 04:40:00", "b": 510.25}, {"a": "2025-03-23 04:45:00", "b": 510.3333333333333}, {"a": "2025-03-23 04:50:00", "b": 518.0}, {"a": "2025-03-23 04:55:00", "b": 491.2}, {"a": "2025-03-23 05:00:00", "b": 488.2}, {"a": "2025-03-23 05:05:00", "b": 502.6}, {"a": "2025-03-23 05:10:00", "b": 523.75}, {"a": "2025-03-23 05:15:00", "b": 535.25}, {"a": "2025-03-23 05:20:00", "b": 590.4}, {"a": "2025-03-23 05:25:00", "b": 661.6}, {"a": "2025-03-23 05:30:00", "b": 641.2}, {"a": "2025-03-23 05:35:00", "b": 608.0}, {"a": "2025-03-23 05:40:00", "b": 595.75}, {"a": "2025-03-23 05:45:00", "b": 580.6}, {"a": "2025-03-23 05:50:00", "b": 582.8}, {"a": "2025-03-23 05:55:00", "b": 580.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    