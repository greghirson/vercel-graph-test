
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-09 13:00:00", "b": 692.2}, {"a": "2024-11-09 13:05:00", "b": 684.0}, {"a": "2024-11-09 13:10:00", "b": 678.6}, {"a": "2024-11-09 13:15:00", "b": 687.25}, {"a": "2024-11-09 13:20:00", "b": 676.0}, {"a": "2024-11-09 13:25:00", "b": 677.2}, {"a": "2024-11-09 13:30:00", "b": 670.0}, {"a": "2024-11-09 13:35:00", "b": 642.4}, {"a": "2024-11-09 13:40:00", "b": 631.0}, {"a": "2024-11-09 13:45:00", "b": 613.0}, {"a": "2024-11-09 13:50:00", "b": 610.0}, {"a": "2024-11-09 13:55:00", "b": 590.6}, {"a": "2024-11-09 14:00:00", "b": 595.4}, {"a": "2024-11-09 14:05:00", "b": 603.3333333333334}, {"a": "2024-11-09 14:10:00", "b": 599.5}, {"a": "2024-11-09 14:15:00", "b": 586.2}, {"a": "2024-11-09 14:20:00", "b": 580.2}, {"a": "2024-11-09 14:25:00", "b": 566.25}, {"a": "2024-11-09 14:30:00", "b": 559.4}, {"a": "2024-11-09 14:35:00", "b": 569.4}, {"a": "2024-11-09 14:40:00", "b": 562.6}, {"a": "2024-11-09 14:45:00", "b": 565.0}, {"a": "2024-11-09 14:50:00", "b": 567.0}, {"a": "2024-11-09 14:55:00", "b": 571.0}, {"a": "2024-11-09 15:00:00", "b": 563.0}, {"a": "2024-11-09 15:05:00", "b": 560.8}, {"a": "2024-11-09 15:10:00", "b": 563.0}, {"a": "2024-11-09 15:15:00", "b": 559.75}, {"a": "2024-11-09 15:20:00", "b": 552.2}, {"a": "2024-11-09 15:25:00", "b": 546.5}, {"a": "2024-11-09 15:30:00", "b": 549.0}, {"a": "2024-11-09 15:35:00", "b": 546.0}, {"a": "2024-11-09 15:40:00", "b": 553.8}, {"a": "2024-11-09 15:45:00", "b": 560.0}, {"a": "2024-11-09 15:50:00", "b": 556.6}, {"a": "2024-11-09 15:55:00", "b": 551.25}, {"a": "2024-11-09 16:00:00", "b": 550.0}, {"a": "2024-11-09 16:05:00", "b": 549.25}, {"a": "2024-11-09 16:10:00", "b": 548.2}, {"a": "2024-11-09 16:15:00", "b": 536.6}, {"a": "2024-11-09 16:20:00", "b": 527.6}, {"a": "2024-11-09 16:25:00", "b": 534.4}, {"a": "2024-11-09 16:30:00", "b": 528.6}, {"a": "2024-11-09 16:35:00", "b": 529.25}, {"a": "2024-11-09 16:40:00", "b": 519.4}, {"a": "2024-11-09 16:45:00", "b": 516.0}, {"a": "2024-11-09 16:50:00", "b": 541.4}, {"a": "2024-11-09 16:55:00", "b": 551.5}, {"a": "2024-11-09 17:00:00", "b": 535.75}, {"a": "2024-11-09 17:05:00", "b": 546.0}, {"a": "2024-11-09 17:10:00", "b": 573.2}, {"a": "2024-11-09 17:15:00", "b": 560.6}, {"a": "2024-11-09 17:20:00", "b": 562.0}, {"a": "2024-11-09 17:25:00", "b": 559.0}, {"a": "2024-11-09 17:30:00", "b": 567.0}, {"a": "2024-11-09 17:35:00", "b": 566.0}, {"a": "2024-11-09 17:40:00", "b": 561.2}, {"a": "2024-11-09 17:45:00", "b": 558.4}, {"a": "2024-11-09 17:50:00", "b": 564.8}, {"a": "2024-11-09 17:55:00", "b": 553.8}, {"a": "2024-11-09 18:00:00", "b": 557.4}, {"a": "2024-11-09 18:05:00", "b": 558.25}, {"a": "2024-11-09 18:10:00", "b": 553.6}, {"a": "2024-11-09 18:15:00", "b": 564.0}, {"a": "2024-11-09 18:20:00", "b": 552.6666666666666}, {"a": "2024-11-09 18:25:00", "b": 555.75}, {"a": "2024-11-09 18:30:00", "b": 544.4}, {"a": "2024-11-09 18:35:00", "b": 541.8}, {"a": "2024-11-09 18:40:00", "b": 542.0}, {"a": "2024-11-09 18:45:00", "b": 540.25}, {"a": "2024-11-09 18:50:00", "b": 530.2}, {"a": "2024-11-09 18:55:00", "b": 535.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    