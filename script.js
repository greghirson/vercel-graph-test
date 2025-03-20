
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-20 00:00:00", "b": 562.6}, {"a": "2025-03-20 00:05:00", "b": 570.75}, {"a": "2025-03-20 00:10:00", "b": 566.0}, {"a": "2025-03-20 00:15:00", "b": 559.2}, {"a": "2025-03-20 00:20:00", "b": 564.8}, {"a": "2025-03-20 00:25:00", "b": 589.5}, {"a": "2025-03-20 00:30:00", "b": 584.6}, {"a": "2025-03-20 00:35:00", "b": 553.4}, {"a": "2025-03-20 00:40:00", "b": 557.4}, {"a": "2025-03-20 00:45:00", "b": 564.4}, {"a": "2025-03-20 00:50:00", "b": 561.0}, {"a": "2025-03-20 00:55:00", "b": 581.6}, {"a": "2025-03-20 01:00:00", "b": 586.2}, {"a": "2025-03-20 01:05:00", "b": 580.0}, {"a": "2025-03-20 01:10:00", "b": 581.0}, {"a": "2025-03-20 01:15:00", "b": 591.0}, {"a": "2025-03-20 01:20:00", "b": 595.6}, {"a": "2025-03-20 01:25:00", "b": 595.6666666666666}, {"a": "2025-03-20 01:30:00", "b": 592.25}, {"a": "2025-03-20 01:35:00", "b": 589.0}, {"a": "2025-03-20 01:40:00", "b": 587.75}, {"a": "2025-03-20 01:45:00", "b": 602.6}, {"a": "2025-03-20 01:50:00", "b": 606.0}, {"a": "2025-03-20 01:55:00", "b": 570.2}, {"a": "2025-03-20 02:00:00", "b": 571.0}, {"a": "2025-03-20 02:05:00", "b": 587.4}, {"a": "2025-03-20 02:10:00", "b": 593.3333333333334}, {"a": "2025-03-20 02:15:00", "b": 597.2}, {"a": "2025-03-20 02:20:00", "b": 594.8}, {"a": "2025-03-20 02:25:00", "b": 593.8}, {"a": "2025-03-20 02:30:00", "b": 605.6}, {"a": "2025-03-20 02:35:00", "b": 611.8}, {"a": "2025-03-20 02:40:00", "b": 594.4}, {"a": "2025-03-20 02:45:00", "b": 591.8}, {"a": "2025-03-20 02:50:00", "b": 598.0}, {"a": "2025-03-20 02:55:00", "b": 573.25}, {"a": "2025-03-20 03:00:00", "b": 561.6}, {"a": "2025-03-20 03:05:00", "b": 567.0}, {"a": "2025-03-20 03:10:00", "b": 545.4}, {"a": "2025-03-20 03:15:00", "b": 538.75}, {"a": "2025-03-20 03:20:00", "b": 547.8}, {"a": "2025-03-20 03:25:00", "b": 562.2}, {"a": "2025-03-20 03:30:00", "b": 564.75}, {"a": "2025-03-20 03:35:00", "b": 564.0}, {"a": "2025-03-20 03:40:00", "b": 566.0}, {"a": "2025-03-20 03:45:00", "b": 563.6}, {"a": "2025-03-20 03:50:00", "b": 552.8}, {"a": "2025-03-20 03:55:00", "b": 550.4}, {"a": "2025-03-20 04:00:00", "b": 573.2}, {"a": "2025-03-20 04:05:00", "b": 560.5}, {"a": "2025-03-20 04:10:00", "b": 553.2}, {"a": "2025-03-20 04:15:00", "b": 553.4}, {"a": "2025-03-20 04:20:00", "b": 548.4}, {"a": "2025-03-20 04:25:00", "b": 520.8}, {"a": "2025-03-20 04:30:00", "b": 513.5}, {"a": "2025-03-20 04:35:00", "b": 513.6}, {"a": "2025-03-20 04:40:00", "b": 522.75}, {"a": "2025-03-20 04:45:00", "b": 531.5}, {"a": "2025-03-20 04:50:00", "b": 532.5}, {"a": "2025-03-20 04:55:00", "b": 534.5}, {"a": "2025-03-20 05:00:00", "b": 537.25}, {"a": "2025-03-20 05:05:00", "b": 534.5}, {"a": "2025-03-20 05:10:00", "b": 546.5}, {"a": "2025-03-20 05:15:00", "b": 532.6}, {"a": "2025-03-20 05:20:00", "b": 521.6}, {"a": "2025-03-20 05:25:00", "b": 520.2}, {"a": "2025-03-20 05:30:00", "b": 511.2}, {"a": "2025-03-20 05:35:00", "b": 517.2}, {"a": "2025-03-20 05:40:00", "b": 517.8}, {"a": "2025-03-20 05:45:00", "b": 492.6}, {"a": "2025-03-20 05:50:00", "b": 490.8}, {"a": "2025-03-20 05:55:00", "b": 501.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    