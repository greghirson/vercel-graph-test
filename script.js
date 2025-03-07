
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-06 23:00:00", "b": 635.6666666666666}, {"a": "2025-03-06 23:05:00", "b": 622.4}, {"a": "2025-03-06 23:10:00", "b": 624.5}, {"a": "2025-03-06 23:15:00", "b": 622.8}, {"a": "2025-03-06 23:20:00", "b": 603.0}, {"a": "2025-03-06 23:25:00", "b": 608.0}, {"a": "2025-03-06 23:30:00", "b": 617.0}, {"a": "2025-03-06 23:35:00", "b": 600.4}, {"a": "2025-03-06 23:40:00", "b": 600.0}, {"a": "2025-03-06 23:45:00", "b": 599.6}, {"a": "2025-03-06 23:50:00", "b": 596.5}, {"a": "2025-03-06 23:55:00", "b": 599.6666666666666}, {"a": "2025-03-07 00:00:00", "b": 589.5}, {"a": "2025-03-07 00:05:00", "b": 588.4}, {"a": "2025-03-07 00:10:00", "b": 595.25}, {"a": "2025-03-07 00:15:00", "b": 592.0}, {"a": "2025-03-07 00:20:00", "b": 588.6}, {"a": "2025-03-07 00:25:00", "b": 587.8}, {"a": "2025-03-07 00:30:00", "b": 581.5}, {"a": "2025-03-07 00:35:00", "b": 582.5}, {"a": "2025-03-07 00:40:00", "b": 575.25}, {"a": "2025-03-07 00:45:00", "b": 571.0}, {"a": "2025-03-07 00:50:00", "b": 574.0}, {"a": "2025-03-07 00:55:00", "b": 574.5}, {"a": "2025-03-07 01:00:00", "b": 571.0}, {"a": "2025-03-07 01:05:00", "b": 565.6}, {"a": "2025-03-07 01:10:00", "b": 561.2}, {"a": "2025-03-07 01:15:00", "b": 563.8}, {"a": "2025-03-07 01:20:00", "b": 570.5}, {"a": "2025-03-07 01:25:00", "b": 556.5}, {"a": "2025-03-07 01:30:00", "b": 561.0}, {"a": "2025-03-07 01:35:00", "b": 555.0}, {"a": "2025-03-07 01:40:00", "b": 549.6}, {"a": "2025-03-07 01:45:00", "b": 541.75}, {"a": "2025-03-07 01:50:00", "b": 551.4}, {"a": "2025-03-07 01:55:00", "b": 561.8}, {"a": "2025-03-07 02:00:00", "b": 553.5}, {"a": "2025-03-07 02:05:00", "b": 550.0}, {"a": "2025-03-07 02:10:00", "b": 556.6}, {"a": "2025-03-07 02:15:00", "b": 553.0}, {"a": "2025-03-07 02:20:00", "b": 584.8}, {"a": "2025-03-07 02:25:00", "b": 632.2}, {"a": "2025-03-07 02:30:00", "b": 610.8}, {"a": "2025-03-07 02:35:00", "b": 563.8}, {"a": "2025-03-07 02:40:00", "b": 558.8}, {"a": "2025-03-07 02:45:00", "b": 554.25}, {"a": "2025-03-07 02:50:00", "b": 544.8}, {"a": "2025-03-07 02:55:00", "b": 540.4}, {"a": "2025-03-07 03:00:00", "b": 527.2}, {"a": "2025-03-07 03:05:00", "b": 526.8}, {"a": "2025-03-07 03:10:00", "b": 536.2}, {"a": "2025-03-07 03:15:00", "b": 539.25}, {"a": "2025-03-07 03:20:00", "b": 520.4}, {"a": "2025-03-07 03:25:00", "b": 522.75}, {"a": "2025-03-07 03:30:00", "b": 527.5}, {"a": "2025-03-07 03:35:00", "b": 513.5}, {"a": "2025-03-07 03:40:00", "b": 515.2}, {"a": "2025-03-07 03:45:00", "b": 512.8}, {"a": "2025-03-07 03:50:00", "b": 519.0}, {"a": "2025-03-07 03:55:00", "b": 502.0}, {"a": "2025-03-07 04:00:00", "b": 507.0}, {"a": "2025-03-07 04:05:00", "b": 496.2}, {"a": "2025-03-07 04:10:00", "b": 526.5}, {"a": "2025-03-07 04:15:00", "b": 585.8}, {"a": "2025-03-07 04:20:00", "b": 604.2}, {"a": "2025-03-07 04:25:00", "b": 573.6}, {"a": "2025-03-07 04:30:00", "b": 546.0}, {"a": "2025-03-07 04:35:00", "b": 531.8}, {"a": "2025-03-07 04:40:00", "b": 518.2}, {"a": "2025-03-07 04:45:00", "b": 520.2}, {"a": "2025-03-07 04:50:00", "b": 514.0}, {"a": "2025-03-07 04:55:00", "b": 498.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    