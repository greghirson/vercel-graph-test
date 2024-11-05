
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-05 09:10:00", "b": 641.0}, {"a": "2024-11-05 09:15:00", "b": 666.4}, {"a": "2024-11-05 09:20:00", "b": 641.5}, {"a": "2024-11-05 09:25:00", "b": 632.4}, {"a": "2024-11-05 09:30:00", "b": 625.25}, {"a": "2024-11-05 09:35:00", "b": 613.6}, {"a": "2024-11-05 09:40:00", "b": 640.0}, {"a": "2024-11-05 09:45:00", "b": 643.0}, {"a": "2024-11-05 09:50:00", "b": 612.3333333333334}, {"a": "2024-11-05 09:55:00", "b": 623.4}, {"a": "2024-11-05 10:00:00", "b": 653.6}, {"a": "2024-11-05 10:05:00", "b": 647.0}, {"a": "2024-11-05 10:10:00", "b": 666.8}, {"a": "2024-11-05 10:15:00", "b": 633.4}, {"a": "2024-11-05 10:20:00", "b": 609.2}, {"a": "2024-11-05 10:25:00", "b": 634.6}, {"a": "2024-11-05 10:30:00", "b": 644.4}, {"a": "2024-11-05 10:35:00", "b": 647.6}, {"a": "2024-11-05 10:40:00", "b": 641.8}, {"a": "2024-11-05 10:45:00", "b": 642.6}, {"a": "2024-11-05 10:50:00", "b": 658.0}, {"a": "2024-11-05 10:55:00", "b": 654.0}, {"a": "2024-11-05 11:00:00", "b": 635.4}, {"a": "2024-11-05 11:05:00", "b": 636.6}, {"a": "2024-11-05 11:10:00", "b": 638.75}, {"a": "2024-11-05 11:15:00", "b": 636.4}, {"a": "2024-11-05 11:20:00", "b": 634.0}, {"a": "2024-11-05 11:25:00", "b": 637.0}, {"a": "2024-11-05 11:30:00", "b": 632.0}, {"a": "2024-11-05 11:35:00", "b": 615.0}, {"a": "2024-11-05 11:40:00", "b": 594.8}, {"a": "2024-11-05 11:45:00", "b": 596.5}, {"a": "2024-11-05 11:50:00", "b": 611.8}, {"a": "2024-11-05 11:55:00", "b": 613.8}, {"a": "2024-11-05 12:00:00", "b": 610.25}, {"a": "2024-11-05 12:05:00", "b": 609.2}, {"a": "2024-11-05 12:10:00", "b": 602.0}, {"a": "2024-11-05 12:15:00", "b": 599.25}, {"a": "2024-11-05 12:20:00", "b": 575.2}, {"a": "2024-11-05 12:25:00", "b": 582.0}, {"a": "2024-11-05 12:30:00", "b": 572.6}, {"a": "2024-11-05 12:35:00", "b": 576.8}, {"a": "2024-11-05 12:40:00", "b": 576.6}, {"a": "2024-11-05 12:45:00", "b": 552.4}, {"a": "2024-11-05 12:50:00", "b": 555.25}, {"a": "2024-11-05 12:55:00", "b": 571.75}, {"a": "2024-11-05 13:00:00", "b": 570.25}, {"a": "2024-11-05 13:05:00", "b": 551.6}, {"a": "2024-11-05 13:10:00", "b": 553.0}, {"a": "2024-11-05 13:15:00", "b": 556.2}, {"a": "2024-11-05 13:20:00", "b": 562.6}, {"a": "2024-11-05 13:25:00", "b": 547.6}, {"a": "2024-11-05 13:30:00", "b": 535.8}, {"a": "2024-11-05 13:35:00", "b": 530.8}, {"a": "2024-11-05 13:40:00", "b": 533.0}, {"a": "2024-11-05 13:45:00", "b": 541.0}, {"a": "2024-11-05 13:50:00", "b": 550.2}, {"a": "2024-11-05 13:55:00", "b": 537.2}, {"a": "2024-11-05 14:00:00", "b": 527.6}, {"a": "2024-11-05 14:05:00", "b": 522.4}, {"a": "2024-11-05 14:10:00", "b": 513.0}, {"a": "2024-11-05 14:15:00", "b": 504.0}, {"a": "2024-11-05 14:20:00", "b": 507.5}, {"a": "2024-11-05 14:25:00", "b": 522.75}, {"a": "2024-11-05 14:30:00", "b": 517.8}, {"a": "2024-11-05 14:35:00", "b": 502.0}, {"a": "2024-11-05 14:40:00", "b": 502.6}, {"a": "2024-11-05 14:45:00", "b": 517.75}, {"a": "2024-11-05 14:50:00", "b": 526.25}, {"a": "2024-11-05 14:55:00", "b": 502.0}, {"a": "2024-11-05 15:00:00", "b": 486.75}, {"a": "2024-11-05 15:05:00", "b": 489.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    