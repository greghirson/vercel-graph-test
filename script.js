
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-16 17:00:00", "b": 721.2}, {"a": "2025-04-16 17:05:00", "b": 853.0}, {"a": "2025-04-16 17:10:00", "b": 737.8}, {"a": "2025-04-16 17:15:00", "b": 586.2}, {"a": "2025-04-16 17:20:00", "b": 575.0}, {"a": "2025-04-16 17:25:00", "b": 572.6666666666666}, {"a": "2025-04-16 17:30:00", "b": 667.2}, {"a": "2025-04-16 17:35:00", "b": 659.6}, {"a": "2025-04-16 17:40:00", "b": 678.0}, {"a": "2025-04-16 17:45:00", "b": 660.2}, {"a": "2025-04-16 17:50:00", "b": 731.2}, {"a": "2025-04-16 17:55:00", "b": 800.2}, {"a": "2025-04-16 18:00:00", "b": 755.6}, {"a": "2025-04-16 18:05:00", "b": 742.0}, {"a": "2025-04-16 18:10:00", "b": 787.8}, {"a": "2025-04-16 18:15:00", "b": 778.2}, {"a": "2025-04-16 18:20:00", "b": 774.8}, {"a": "2025-04-16 18:25:00", "b": 755.4}, {"a": "2025-04-16 18:30:00", "b": 580.8}, {"a": "2025-04-16 18:35:00", "b": 596.8}, {"a": "2025-04-16 18:40:00", "b": 716.0}, {"a": "2025-04-16 18:45:00", "b": 1082.0}, {"a": "2025-04-16 18:50:00", "b": 1018.0}, {"a": "2025-04-16 18:55:00", "b": 1002.6}, {"a": "2025-04-16 19:00:00", "b": 1011.0}, {"a": "2025-04-16 19:05:00", "b": 929.6}, {"a": "2025-04-16 19:10:00", "b": 889.2}, {"a": "2025-04-16 19:15:00", "b": 925.4}, {"a": "2025-04-16 19:20:00", "b": 860.4}, {"a": "2025-04-16 19:25:00", "b": 840.6}, {"a": "2025-04-16 19:30:00", "b": 788.8}, {"a": "2025-04-16 19:35:00", "b": 752.75}, {"a": "2025-04-16 19:40:00", "b": 734.8}, {"a": "2025-04-16 19:45:00", "b": 692.8}, {"a": "2025-04-16 19:50:00", "b": 649.8}, {"a": "2025-04-16 19:55:00", "b": 561.4}, {"a": "2025-04-16 20:00:00", "b": 554.6}, {"a": "2025-04-16 20:05:00", "b": 527.0}, {"a": "2025-04-16 20:10:00", "b": 527.0}, {"a": "2025-04-16 20:15:00", "b": 521.0}, {"a": "2025-04-16 20:20:00", "b": 524.5}, {"a": "2025-04-16 20:25:00", "b": 537.6}, {"a": "2025-04-16 20:30:00", "b": 534.8}, {"a": "2025-04-16 20:35:00", "b": 547.6}, {"a": "2025-04-16 20:40:00", "b": 544.25}, {"a": "2025-04-16 20:45:00", "b": 553.4}, {"a": "2025-04-16 20:50:00", "b": 580.6}, {"a": "2025-04-16 20:55:00", "b": 594.0}, {"a": "2025-04-16 21:00:00", "b": 590.0}, {"a": "2025-04-16 21:05:00", "b": 592.0}, {"a": "2025-04-16 21:10:00", "b": 606.0}, {"a": "2025-04-16 21:15:00", "b": 616.4}, {"a": "2025-04-16 21:20:00", "b": 601.6}, {"a": "2025-04-16 21:25:00", "b": 610.0}, {"a": "2025-04-16 21:30:00", "b": 588.8}, {"a": "2025-04-16 21:35:00", "b": 555.6}, {"a": "2025-04-16 21:40:00", "b": 542.0}, {"a": "2025-04-16 21:45:00", "b": 524.75}, {"a": "2025-04-16 21:50:00", "b": 538.2}, {"a": "2025-04-16 21:55:00", "b": 555.75}, {"a": "2025-04-16 22:00:00", "b": 600.8}, {"a": "2025-04-16 22:05:00", "b": 630.0}, {"a": "2025-04-16 22:10:00", "b": 642.2}, {"a": "2025-04-16 22:15:00", "b": 659.4}, {"a": "2025-04-16 22:20:00", "b": 666.2}, {"a": "2025-04-16 22:25:00", "b": 620.5}, {"a": "2025-04-16 22:30:00", "b": 602.2}, {"a": "2025-04-16 22:35:00", "b": 597.0}, {"a": "2025-04-16 22:40:00", "b": 576.8}, {"a": "2025-04-16 22:45:00", "b": 566.4}, {"a": "2025-04-16 22:50:00", "b": 580.6}, {"a": "2025-04-16 22:55:00", "b": 606.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    