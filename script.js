
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 23:40:00", "b": 603.2}, {"a": "2024-11-06 23:45:00", "b": 597.6}, {"a": "2024-11-06 23:50:00", "b": 590.0}, {"a": "2024-11-06 23:55:00", "b": 587.6666666666666}, {"a": "2024-11-07 00:00:00", "b": 594.0}, {"a": "2024-11-07 00:05:00", "b": 589.6}, {"a": "2024-11-07 00:10:00", "b": 591.6666666666666}, {"a": "2024-11-07 00:15:00", "b": 598.4}, {"a": "2024-11-07 00:20:00", "b": 597.5}, {"a": "2024-11-07 00:25:00", "b": 582.5}, {"a": "2024-11-07 00:30:00", "b": 578.5}, {"a": "2024-11-07 00:35:00", "b": 589.25}, {"a": "2024-11-07 00:40:00", "b": 577.8}, {"a": "2024-11-07 00:45:00", "b": 583.0}, {"a": "2024-11-07 00:50:00", "b": 577.0}, {"a": "2024-11-07 00:55:00", "b": 571.5}, {"a": "2024-11-07 01:00:00", "b": 566.25}, {"a": "2024-11-07 01:05:00", "b": 575.4}, {"a": "2024-11-07 01:10:00", "b": 574.5}, {"a": "2024-11-07 01:15:00", "b": 568.0}, {"a": "2024-11-07 01:20:00", "b": 553.8}, {"a": "2024-11-07 01:25:00", "b": 557.0}, {"a": "2024-11-07 01:30:00", "b": 562.4}, {"a": "2024-11-07 01:35:00", "b": 569.0}, {"a": "2024-11-07 01:40:00", "b": 567.2}, {"a": "2024-11-07 01:45:00", "b": 562.8}, {"a": "2024-11-07 01:50:00", "b": 552.0}, {"a": "2024-11-07 01:55:00", "b": 557.0}, {"a": "2024-11-07 02:00:00", "b": 562.0}, {"a": "2024-11-07 02:05:00", "b": 567.8}, {"a": "2024-11-07 02:10:00", "b": 558.8}, {"a": "2024-11-07 02:15:00", "b": 561.5}, {"a": "2024-11-07 02:20:00", "b": 546.4}, {"a": "2024-11-07 02:25:00", "b": 551.75}, {"a": "2024-11-07 02:30:00", "b": 556.0}, {"a": "2024-11-07 02:35:00", "b": 536.4}, {"a": "2024-11-07 02:40:00", "b": 542.6}, {"a": "2024-11-07 02:45:00", "b": 553.0}, {"a": "2024-11-07 02:50:00", "b": 560.6666666666666}, {"a": "2024-11-07 02:55:00", "b": 544.4}, {"a": "2024-11-07 03:00:00", "b": 539.8}, {"a": "2024-11-07 03:05:00", "b": 551.5}, {"a": "2024-11-07 03:10:00", "b": 560.4}, {"a": "2024-11-07 03:15:00", "b": 547.0}, {"a": "2024-11-07 03:20:00", "b": 537.75}, {"a": "2024-11-07 03:25:00", "b": 547.0}, {"a": "2024-11-07 03:30:00", "b": 552.5}, {"a": "2024-11-07 03:35:00", "b": 557.0}, {"a": "2024-11-07 03:40:00", "b": 579.6}, {"a": "2024-11-07 03:45:00", "b": 550.0}, {"a": "2024-11-07 03:50:00", "b": 541.0}, {"a": "2024-11-07 03:55:00", "b": 551.8}, {"a": "2024-11-07 04:00:00", "b": 559.2}, {"a": "2024-11-07 04:05:00", "b": 560.2}, {"a": "2024-11-07 04:10:00", "b": 531.0}, {"a": "2024-11-07 04:15:00", "b": 515.6}, {"a": "2024-11-07 04:20:00", "b": 530.0}, {"a": "2024-11-07 04:25:00", "b": 529.25}, {"a": "2024-11-07 04:30:00", "b": 521.0}, {"a": "2024-11-07 04:35:00", "b": 516.6}, {"a": "2024-11-07 04:40:00", "b": 517.2}, {"a": "2024-11-07 04:45:00", "b": 523.2}, {"a": "2024-11-07 04:50:00", "b": 534.2}, {"a": "2024-11-07 04:55:00", "b": 532.0}, {"a": "2024-11-07 05:00:00", "b": 536.6666666666666}, {"a": "2024-11-07 05:05:00", "b": 521.0}, {"a": "2024-11-07 05:10:00", "b": 530.5}, {"a": "2024-11-07 05:15:00", "b": 534.2}, {"a": "2024-11-07 05:20:00", "b": 531.6}, {"a": "2024-11-07 05:25:00", "b": 535.2}, {"a": "2024-11-07 05:30:00", "b": 523.6}, {"a": "2024-11-07 05:35:00", "b": 522.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    