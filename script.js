
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-13 20:00:00", "b": 536.6}, {"a": "2025-03-13 20:05:00", "b": 553.8}, {"a": "2025-03-13 20:10:00", "b": 558.25}, {"a": "2025-03-13 20:15:00", "b": 571.2}, {"a": "2025-03-13 20:20:00", "b": 586.0}, {"a": "2025-03-13 20:25:00", "b": 595.25}, {"a": "2025-03-13 20:30:00", "b": 607.8}, {"a": "2025-03-13 20:35:00", "b": 602.2}, {"a": "2025-03-13 20:40:00", "b": 612.8}, {"a": "2025-03-13 20:45:00", "b": 640.8}, {"a": "2025-03-13 20:50:00", "b": 644.4}, {"a": "2025-03-13 20:55:00", "b": 631.3333333333334}, {"a": "2025-03-13 21:00:00", "b": 616.6}, {"a": "2025-03-13 21:05:00", "b": 584.0}, {"a": "2025-03-13 21:10:00", "b": 575.0}, {"a": "2025-03-13 21:15:00", "b": 610.2}, {"a": "2025-03-13 21:20:00", "b": 639.0}, {"a": "2025-03-13 21:25:00", "b": 630.4}, {"a": "2025-03-13 21:30:00", "b": 632.75}, {"a": "2025-03-13 21:35:00", "b": 630.3333333333334}, {"a": "2025-03-13 21:40:00", "b": 622.25}, {"a": "2025-03-13 21:45:00", "b": 618.75}, {"a": "2025-03-13 21:50:00", "b": 612.5}, {"a": "2025-03-13 21:55:00", "b": 616.25}, {"a": "2025-03-13 22:00:00", "b": 608.0}, {"a": "2025-03-13 22:05:00", "b": 606.6}, {"a": "2025-03-13 22:10:00", "b": 599.75}, {"a": "2025-03-13 22:15:00", "b": 592.75}, {"a": "2025-03-13 22:20:00", "b": 586.25}, {"a": "2025-03-13 22:25:00", "b": 579.75}, {"a": "2025-03-13 22:30:00", "b": 578.75}, {"a": "2025-03-13 22:35:00", "b": 576.75}, {"a": "2025-03-13 22:40:00", "b": 561.8}, {"a": "2025-03-13 22:45:00", "b": 559.0}, {"a": "2025-03-13 22:50:00", "b": 558.5}, {"a": "2025-03-13 22:55:00", "b": 557.5}, {"a": "2025-03-13 23:00:00", "b": 560.0}, {"a": "2025-03-13 23:05:00", "b": 558.0}, {"a": "2025-03-13 23:10:00", "b": 551.5}, {"a": "2025-03-13 23:15:00", "b": 550.6}, {"a": "2025-03-13 23:20:00", "b": 547.2}, {"a": "2025-03-13 23:25:00", "b": 535.4}, {"a": "2025-03-13 23:30:00", "b": 534.0}, {"a": "2025-03-13 23:35:00", "b": 534.5}, {"a": "2025-03-13 23:40:00", "b": 546.4}, {"a": "2025-03-13 23:45:00", "b": 531.2}, {"a": "2025-03-13 23:50:00", "b": 525.0}, {"a": "2025-03-13 23:55:00", "b": 526.0}, {"a": "2025-03-14 00:00:00", "b": 526.0}, {"a": "2025-03-14 00:05:00", "b": 532.6}, {"a": "2025-03-14 00:10:00", "b": 536.4}, {"a": "2025-03-14 00:15:00", "b": 510.8}, {"a": "2025-03-14 00:20:00", "b": 503.2}, {"a": "2025-03-14 00:25:00", "b": 505.2}, {"a": "2025-03-14 00:30:00", "b": 510.6}, {"a": "2025-03-14 00:35:00", "b": 517.5}, {"a": "2025-03-14 00:40:00", "b": 511.0}, {"a": "2025-03-14 00:45:00", "b": 493.4}, {"a": "2025-03-14 00:50:00", "b": 490.25}, {"a": "2025-03-14 00:55:00", "b": 496.75}, {"a": "2025-03-14 01:00:00", "b": 493.6666666666667}, {"a": "2025-03-14 01:05:00", "b": 494.8}, {"a": "2025-03-14 01:10:00", "b": 491.0}, {"a": "2025-03-14 01:15:00", "b": 491.0}, {"a": "2025-03-14 01:20:00", "b": 493.0}, {"a": "2025-03-14 01:25:00", "b": 504.0}, {"a": "2025-03-14 01:30:00", "b": 504.6}, {"a": "2025-03-14 01:35:00", "b": 491.0}, {"a": "2025-03-14 01:40:00", "b": 486.6}, {"a": "2025-03-14 01:45:00", "b": 480.0}, {"a": "2025-03-14 01:50:00", "b": 486.2}, {"a": "2025-03-14 01:55:00", "b": 488.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    