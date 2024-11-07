
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 21:30:00", "b": 624.0}, {"a": "2024-11-06 21:35:00", "b": 646.25}, {"a": "2024-11-06 21:40:00", "b": 636.8}, {"a": "2024-11-06 21:45:00", "b": 638.2}, {"a": "2024-11-06 21:50:00", "b": 626.4}, {"a": "2024-11-06 21:55:00", "b": 620.0}, {"a": "2024-11-06 22:00:00", "b": 620.5}, {"a": "2024-11-06 22:05:00", "b": 625.6}, {"a": "2024-11-06 22:10:00", "b": 615.6}, {"a": "2024-11-06 22:15:00", "b": 612.25}, {"a": "2024-11-06 22:20:00", "b": 615.3333333333334}, {"a": "2024-11-06 22:25:00", "b": 608.4}, {"a": "2024-11-06 22:30:00", "b": 610.4}, {"a": "2024-11-06 22:35:00", "b": 613.25}, {"a": "2024-11-06 22:40:00", "b": 614.5}, {"a": "2024-11-06 22:45:00", "b": 614.2}, {"a": "2024-11-06 22:50:00", "b": 612.6}, {"a": "2024-11-06 22:55:00", "b": 604.8}, {"a": "2024-11-06 23:00:00", "b": 600.0}, {"a": "2024-11-06 23:05:00", "b": 608.25}, {"a": "2024-11-06 23:10:00", "b": 603.0}, {"a": "2024-11-06 23:15:00", "b": 593.25}, {"a": "2024-11-06 23:20:00", "b": 596.0}, {"a": "2024-11-06 23:25:00", "b": 595.6}, {"a": "2024-11-06 23:30:00", "b": 600.0}, {"a": "2024-11-06 23:35:00", "b": 597.2}, {"a": "2024-11-06 23:40:00", "b": 603.2}, {"a": "2024-11-06 23:45:00", "b": 597.6}, {"a": "2024-11-06 23:50:00", "b": 590.0}, {"a": "2024-11-06 23:55:00", "b": 587.6666666666666}, {"a": "2024-11-07 00:00:00", "b": 594.0}, {"a": "2024-11-07 00:05:00", "b": 589.6}, {"a": "2024-11-07 00:10:00", "b": 591.6666666666666}, {"a": "2024-11-07 00:15:00", "b": 598.4}, {"a": "2024-11-07 00:20:00", "b": 597.5}, {"a": "2024-11-07 00:25:00", "b": 582.5}, {"a": "2024-11-07 00:30:00", "b": 578.5}, {"a": "2024-11-07 00:35:00", "b": 589.25}, {"a": "2024-11-07 00:40:00", "b": 577.8}, {"a": "2024-11-07 00:45:00", "b": 583.0}, {"a": "2024-11-07 00:50:00", "b": 577.0}, {"a": "2024-11-07 00:55:00", "b": 571.5}, {"a": "2024-11-07 01:00:00", "b": 566.25}, {"a": "2024-11-07 01:05:00", "b": 575.4}, {"a": "2024-11-07 01:10:00", "b": 574.5}, {"a": "2024-11-07 01:15:00", "b": 568.0}, {"a": "2024-11-07 01:20:00", "b": 553.8}, {"a": "2024-11-07 01:25:00", "b": 557.0}, {"a": "2024-11-07 01:30:00", "b": 562.4}, {"a": "2024-11-07 01:35:00", "b": 569.0}, {"a": "2024-11-07 01:40:00", "b": 567.2}, {"a": "2024-11-07 01:45:00", "b": 562.8}, {"a": "2024-11-07 01:50:00", "b": 552.0}, {"a": "2024-11-07 01:55:00", "b": 557.0}, {"a": "2024-11-07 02:00:00", "b": 562.0}, {"a": "2024-11-07 02:05:00", "b": 567.8}, {"a": "2024-11-07 02:10:00", "b": 558.8}, {"a": "2024-11-07 02:15:00", "b": 561.5}, {"a": "2024-11-07 02:20:00", "b": 546.4}, {"a": "2024-11-07 02:25:00", "b": 551.75}, {"a": "2024-11-07 02:30:00", "b": 556.0}, {"a": "2024-11-07 02:35:00", "b": 536.4}, {"a": "2024-11-07 02:40:00", "b": 542.6}, {"a": "2024-11-07 02:45:00", "b": 553.0}, {"a": "2024-11-07 02:50:00", "b": 560.6666666666666}, {"a": "2024-11-07 02:55:00", "b": 544.4}, {"a": "2024-11-07 03:00:00", "b": 539.8}, {"a": "2024-11-07 03:05:00", "b": 551.5}, {"a": "2024-11-07 03:10:00", "b": 560.4}, {"a": "2024-11-07 03:15:00", "b": 547.0}, {"a": "2024-11-07 03:20:00", "b": 537.75}, {"a": "2024-11-07 03:25:00", "b": 547.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    