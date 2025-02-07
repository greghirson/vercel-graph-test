
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-06 20:00:00", "b": 644.0}, {"a": "2025-02-06 20:05:00", "b": 639.4}, {"a": "2025-02-06 20:10:00", "b": 640.4}, {"a": "2025-02-06 20:15:00", "b": 637.8}, {"a": "2025-02-06 20:20:00", "b": 647.75}, {"a": "2025-02-06 20:25:00", "b": 659.2}, {"a": "2025-02-06 20:30:00", "b": 677.5}, {"a": "2025-02-06 20:35:00", "b": 671.0}, {"a": "2025-02-06 20:40:00", "b": 647.4}, {"a": "2025-02-06 20:45:00", "b": 651.8}, {"a": "2025-02-06 20:50:00", "b": 663.5}, {"a": "2025-02-06 20:55:00", "b": 665.0}, {"a": "2025-02-06 21:00:00", "b": 658.25}, {"a": "2025-02-06 21:05:00", "b": 660.6}, {"a": "2025-02-06 21:10:00", "b": 674.0}, {"a": "2025-02-06 21:15:00", "b": 671.25}, {"a": "2025-02-06 21:20:00", "b": 666.75}, {"a": "2025-02-06 21:25:00", "b": 681.3333333333334}, {"a": "2025-02-06 21:30:00", "b": 672.0}, {"a": "2025-02-06 21:35:00", "b": 670.4}, {"a": "2025-02-06 21:40:00", "b": 674.5}, {"a": "2025-02-06 21:45:00", "b": 664.3333333333334}, {"a": "2025-02-06 21:50:00", "b": 658.6666666666666}, {"a": "2025-02-06 21:55:00", "b": 675.4}, {"a": "2025-02-06 22:00:00", "b": 708.6}, {"a": "2025-02-06 22:05:00", "b": 697.0}, {"a": "2025-02-06 22:10:00", "b": 673.4}, {"a": "2025-02-06 22:15:00", "b": 659.0}, {"a": "2025-02-06 22:20:00", "b": 609.0}, {"a": "2025-02-06 22:25:00", "b": 565.6}, {"a": "2025-02-06 22:30:00", "b": 581.0}, {"a": "2025-02-06 22:35:00", "b": 576.25}, {"a": "2025-02-06 22:40:00", "b": 567.4}, {"a": "2025-02-06 22:45:00", "b": 565.4}, {"a": "2025-02-06 22:50:00", "b": 569.25}, {"a": "2025-02-06 22:55:00", "b": 566.4}, {"a": "2025-02-06 23:00:00", "b": 566.6}, {"a": "2025-02-06 23:05:00", "b": 555.6}, {"a": "2025-02-06 23:10:00", "b": 551.2}, {"a": "2025-02-06 23:15:00", "b": 559.25}, {"a": "2025-02-06 23:20:00", "b": 566.25}, {"a": "2025-02-06 23:25:00", "b": 559.6}, {"a": "2025-02-06 23:30:00", "b": 550.0}, {"a": "2025-02-06 23:35:00", "b": 547.0}, {"a": "2025-02-06 23:40:00", "b": 562.75}, {"a": "2025-02-06 23:45:00", "b": 561.6}, {"a": "2025-02-06 23:50:00", "b": 559.2}, {"a": "2025-02-06 23:55:00", "b": 559.75}, {"a": "2025-02-07 00:00:00", "b": 552.6}, {"a": "2025-02-07 00:05:00", "b": 552.4}, {"a": "2025-02-07 00:10:00", "b": 542.2}, {"a": "2025-02-07 00:15:00", "b": 535.4}, {"a": "2025-02-07 00:20:00", "b": 542.5}, {"a": "2025-02-07 00:25:00", "b": 546.75}, {"a": "2025-02-07 00:30:00", "b": 534.4}, {"a": "2025-02-07 00:35:00", "b": 534.5}, {"a": "2025-02-07 00:40:00", "b": 526.25}, {"a": "2025-02-07 00:45:00", "b": 528.5}, {"a": "2025-02-07 00:50:00", "b": 539.5}, {"a": "2025-02-07 00:55:00", "b": 531.0}, {"a": "2025-02-07 01:00:00", "b": 526.4}, {"a": "2025-02-07 01:05:00", "b": 533.4}, {"a": "2025-02-07 01:10:00", "b": 528.2}, {"a": "2025-02-07 01:15:00", "b": 522.0}, {"a": "2025-02-07 01:20:00", "b": 523.6}, {"a": "2025-02-07 01:25:00", "b": 535.6}, {"a": "2025-02-07 01:30:00", "b": 535.0}, {"a": "2025-02-07 01:35:00", "b": 527.6}, {"a": "2025-02-07 01:40:00", "b": 522.8}, {"a": "2025-02-07 01:45:00", "b": 526.0}, {"a": "2025-02-07 01:50:00", "b": 524.6}, {"a": "2025-02-07 01:55:00", "b": 512.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    