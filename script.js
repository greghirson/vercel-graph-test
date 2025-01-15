
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-14 21:00:00", "b": 732.2}, {"a": "2025-01-14 21:05:00", "b": 709.0}, {"a": "2025-01-14 21:10:00", "b": 709.0}, {"a": "2025-01-14 21:15:00", "b": 709.4}, {"a": "2025-01-14 21:20:00", "b": 692.75}, {"a": "2025-01-14 21:25:00", "b": 679.4}, {"a": "2025-01-14 21:30:00", "b": 699.4}, {"a": "2025-01-14 21:35:00", "b": 714.6}, {"a": "2025-01-14 21:40:00", "b": 700.6}, {"a": "2025-01-14 21:45:00", "b": 705.0}, {"a": "2025-01-14 21:50:00", "b": 695.8}, {"a": "2025-01-14 21:55:00", "b": 707.8}, {"a": "2025-01-14 22:00:00", "b": 717.6666666666666}, {"a": "2025-01-14 22:05:00", "b": 713.25}, {"a": "2025-01-14 22:10:00", "b": 705.6}, {"a": "2025-01-14 22:15:00", "b": 699.0}, {"a": "2025-01-14 22:20:00", "b": 696.8}, {"a": "2025-01-14 22:25:00", "b": 684.0}, {"a": "2025-01-14 22:30:00", "b": 690.8}, {"a": "2025-01-14 22:35:00", "b": 698.4}, {"a": "2025-01-14 22:40:00", "b": 681.0}, {"a": "2025-01-14 22:45:00", "b": 662.0}, {"a": "2025-01-14 22:55:00", "b": 591.3333333333334}, {"a": "2025-01-14 23:00:00", "b": 589.3333333333334}, {"a": "2025-01-14 23:05:00", "b": 580.2}, {"a": "2025-01-14 23:10:00", "b": 574.6666666666666}, {"a": "2025-01-14 23:15:00", "b": 581.0}, {"a": "2025-01-14 23:20:00", "b": 565.25}, {"a": "2025-01-14 23:25:00", "b": 568.0}, {"a": "2025-01-14 23:30:00", "b": 562.4}, {"a": "2025-01-14 23:35:00", "b": 550.75}, {"a": "2025-01-14 23:40:00", "b": 557.0}, {"a": "2025-01-14 23:45:00", "b": 547.3333333333334}, {"a": "2025-01-14 23:50:00", "b": 538.6}, {"a": "2025-01-14 23:55:00", "b": 541.6}, {"a": "2025-01-15 00:00:00", "b": 533.0}, {"a": "2025-01-15 00:05:00", "b": 536.0}, {"a": "2025-01-15 00:10:00", "b": 621.3333333333334}, {"a": "2025-01-15 00:15:00", "b": 625.2}, {"a": "2025-01-15 00:20:00", "b": 614.2}, {"a": "2025-01-15 00:25:00", "b": 577.0}, {"a": "2025-01-15 00:30:00", "b": 532.25}, {"a": "2025-01-15 00:35:00", "b": 520.8}, {"a": "2025-01-15 00:40:00", "b": 500.5}, {"a": "2025-01-15 00:45:00", "b": 502.4}, {"a": "2025-01-15 00:50:00", "b": 498.5}, {"a": "2025-01-15 00:55:00", "b": 487.8}, {"a": "2025-01-15 01:00:00", "b": 495.4}, {"a": "2025-01-15 01:05:00", "b": 497.0}, {"a": "2025-01-15 01:10:00", "b": 499.8}, {"a": "2025-01-15 01:15:00", "b": 488.75}, {"a": "2025-01-15 01:20:00", "b": 490.2}, {"a": "2025-01-15 01:25:00", "b": 494.75}, {"a": "2025-01-15 01:30:00", "b": 483.0}, {"a": "2025-01-15 01:35:00", "b": 484.2}, {"a": "2025-01-15 01:40:00", "b": 479.75}, {"a": "2025-01-15 01:45:00", "b": 482.5}, {"a": "2025-01-15 01:50:00", "b": 469.6}, {"a": "2025-01-15 01:55:00", "b": 485.8}, {"a": "2025-01-15 02:00:00", "b": 564.6}, {"a": "2025-01-15 02:05:00", "b": 569.4}, {"a": "2025-01-15 02:10:00", "b": 551.5}, {"a": "2025-01-15 02:15:00", "b": 503.0}, {"a": "2025-01-15 02:20:00", "b": 483.0}, {"a": "2025-01-15 02:25:00", "b": 480.0}, {"a": "2025-01-15 02:30:00", "b": 472.75}, {"a": "2025-01-15 02:35:00", "b": 474.0}, {"a": "2025-01-15 02:40:00", "b": 469.0}, {"a": "2025-01-15 02:45:00", "b": 459.8}, {"a": "2025-01-15 02:50:00", "b": 458.6}, {"a": "2025-01-15 02:55:00", "b": 457.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    