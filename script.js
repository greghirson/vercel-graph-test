
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-08 10:00:00", "b": 700.4}, {"a": "2025-04-08 10:05:00", "b": 685.4}, {"a": "2025-04-08 10:10:00", "b": 663.6}, {"a": "2025-04-08 10:15:00", "b": 656.75}, {"a": "2025-04-08 10:20:00", "b": 649.0}, {"a": "2025-04-08 10:25:00", "b": 652.8}, {"a": "2025-04-08 10:30:00", "b": 647.6}, {"a": "2025-04-08 10:35:00", "b": 652.4}, {"a": "2025-04-08 10:40:00", "b": 637.2}, {"a": "2025-04-08 10:45:00", "b": 646.2}, {"a": "2025-04-08 10:50:00", "b": 632.6666666666666}, {"a": "2025-04-08 10:55:00", "b": 639.4}, {"a": "2025-04-08 11:00:00", "b": 662.0}, {"a": "2025-04-08 11:05:00", "b": 628.75}, {"a": "2025-04-08 11:10:00", "b": 619.4}, {"a": "2025-04-08 11:15:00", "b": 617.0}, {"a": "2025-04-08 11:20:00", "b": 599.4}, {"a": "2025-04-08 11:25:00", "b": 555.2}, {"a": "2025-04-08 11:30:00", "b": 572.6}, {"a": "2025-04-08 11:35:00", "b": 577.6}, {"a": "2025-04-08 11:40:00", "b": 616.6}, {"a": "2025-04-08 11:45:00", "b": 623.8}, {"a": "2025-04-08 11:50:00", "b": 620.6}, {"a": "2025-04-08 11:55:00", "b": 649.4}, {"a": "2025-04-08 12:00:00", "b": 665.2}, {"a": "2025-04-08 12:05:00", "b": 667.0}, {"a": "2025-04-08 12:10:00", "b": 636.2}, {"a": "2025-04-08 12:15:00", "b": 639.4}, {"a": "2025-04-08 12:20:00", "b": 685.0}, {"a": "2025-04-08 12:25:00", "b": 754.8}, {"a": "2025-04-08 12:30:00", "b": 660.6}, {"a": "2025-04-08 12:35:00", "b": 648.8}, {"a": "2025-04-08 12:40:00", "b": 587.0}, {"a": "2025-04-08 12:45:00", "b": 552.8}, {"a": "2025-04-08 12:50:00", "b": 565.6}, {"a": "2025-04-08 12:55:00", "b": 577.4}, {"a": "2025-04-08 13:00:00", "b": 610.0}, {"a": "2025-04-08 13:05:00", "b": 607.5}, {"a": "2025-04-08 13:10:00", "b": 611.0}, {"a": "2025-04-08 13:15:00", "b": 604.4}, {"a": "2025-04-08 13:20:00", "b": 584.0}, {"a": "2025-04-08 13:25:00", "b": 570.6}, {"a": "2025-04-08 13:30:00", "b": 566.6}, {"a": "2025-04-08 13:35:00", "b": 564.25}, {"a": "2025-04-08 13:40:00", "b": 566.0}, {"a": "2025-04-08 13:45:00", "b": 562.0}, {"a": "2025-04-08 13:50:00", "b": 572.5}, {"a": "2025-04-08 13:55:00", "b": 569.2}, {"a": "2025-04-08 14:00:00", "b": 553.6}, {"a": "2025-04-08 14:05:00", "b": 551.4}, {"a": "2025-04-08 14:10:00", "b": 536.2}, {"a": "2025-04-08 14:15:00", "b": 542.6}, {"a": "2025-04-08 14:20:00", "b": 553.6}, {"a": "2025-04-08 14:25:00", "b": 556.6}, {"a": "2025-04-08 14:30:00", "b": 563.0}, {"a": "2025-04-08 14:35:00", "b": 593.0}, {"a": "2025-04-08 14:40:00", "b": 591.8}, {"a": "2025-04-08 14:45:00", "b": 578.8}, {"a": "2025-04-08 14:50:00", "b": 563.4}, {"a": "2025-04-08 14:55:00", "b": 549.0}, {"a": "2025-04-08 15:00:00", "b": 551.25}, {"a": "2025-04-08 15:05:00", "b": 541.4}, {"a": "2025-04-08 15:10:00", "b": 525.2}, {"a": "2025-04-08 15:15:00", "b": 509.2}, {"a": "2025-04-08 15:20:00", "b": 512.2}, {"a": "2025-04-08 15:25:00", "b": 522.5}, {"a": "2025-04-08 15:30:00", "b": 520.4}, {"a": "2025-04-08 15:35:00", "b": 512.0}, {"a": "2025-04-08 15:40:00", "b": 511.0}, {"a": "2025-04-08 15:45:00", "b": 508.3333333333333}, {"a": "2025-04-08 15:50:00", "b": 514.25}, {"a": "2025-04-08 15:55:00", "b": 509.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    