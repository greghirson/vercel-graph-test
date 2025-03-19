
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-19 06:00:00", "b": 560.0}, {"a": "2025-03-19 06:05:00", "b": 562.2}, {"a": "2025-03-19 06:10:00", "b": 565.2}, {"a": "2025-03-19 06:15:00", "b": 581.2}, {"a": "2025-03-19 06:20:00", "b": 589.75}, {"a": "2025-03-19 06:25:00", "b": 575.0}, {"a": "2025-03-19 06:30:00", "b": 566.25}, {"a": "2025-03-19 06:35:00", "b": 572.8}, {"a": "2025-03-19 06:40:00", "b": 569.25}, {"a": "2025-03-19 06:45:00", "b": 562.6666666666666}, {"a": "2025-03-19 06:50:00", "b": 557.0}, {"a": "2025-03-19 06:55:00", "b": 549.2}, {"a": "2025-03-19 07:00:00", "b": 550.4}, {"a": "2025-03-19 07:05:00", "b": 525.2}, {"a": "2025-03-19 07:10:00", "b": 519.0}, {"a": "2025-03-19 07:15:00", "b": 527.0}, {"a": "2025-03-19 07:20:00", "b": 546.4}, {"a": "2025-03-19 07:25:00", "b": 559.0}, {"a": "2025-03-19 07:30:00", "b": 563.6}, {"a": "2025-03-19 07:35:00", "b": 558.6666666666666}, {"a": "2025-03-19 07:40:00", "b": 557.25}, {"a": "2025-03-19 07:45:00", "b": 560.8}, {"a": "2025-03-19 07:50:00", "b": 565.8}, {"a": "2025-03-19 07:55:00", "b": 563.8}, {"a": "2025-03-19 08:00:00", "b": 559.0}, {"a": "2025-03-19 08:05:00", "b": 556.6}, {"a": "2025-03-19 08:10:00", "b": 558.25}, {"a": "2025-03-19 08:15:00", "b": 552.8}, {"a": "2025-03-19 08:20:00", "b": 551.4}, {"a": "2025-03-19 08:25:00", "b": 548.4}, {"a": "2025-03-19 08:30:00", "b": 548.4}, {"a": "2025-03-19 08:35:00", "b": 550.75}, {"a": "2025-03-19 08:40:00", "b": 558.5}, {"a": "2025-03-19 08:45:00", "b": 558.6}, {"a": "2025-03-19 08:50:00", "b": 556.75}, {"a": "2025-03-19 08:55:00", "b": 551.6}, {"a": "2025-03-19 09:00:00", "b": 561.2}, {"a": "2025-03-19 09:05:00", "b": 553.0}, {"a": "2025-03-19 09:10:00", "b": 555.75}, {"a": "2025-03-19 09:15:00", "b": 561.75}, {"a": "2025-03-19 09:20:00", "b": 554.0}, {"a": "2025-03-19 09:25:00", "b": 542.8}, {"a": "2025-03-19 09:30:00", "b": 558.6}, {"a": "2025-03-19 09:35:00", "b": 567.5}, {"a": "2025-03-19 09:40:00", "b": 553.0}, {"a": "2025-03-19 09:45:00", "b": 553.4}, {"a": "2025-03-19 09:50:00", "b": 569.0}, {"a": "2025-03-19 09:55:00", "b": 549.4}, {"a": "2025-03-19 10:00:00", "b": 548.75}, {"a": "2025-03-19 10:05:00", "b": 538.6}, {"a": "2025-03-19 10:10:00", "b": 534.8}, {"a": "2025-03-19 10:15:00", "b": 539.4}, {"a": "2025-03-19 10:20:00", "b": 548.2}, {"a": "2025-03-19 10:25:00", "b": 540.6}, {"a": "2025-03-19 10:30:00", "b": 527.4}, {"a": "2025-03-19 10:35:00", "b": 507.8}, {"a": "2025-03-19 10:40:00", "b": 515.0}, {"a": "2025-03-19 10:45:00", "b": 519.6}, {"a": "2025-03-19 10:50:00", "b": 519.8}, {"a": "2025-03-19 10:55:00", "b": 548.0}, {"a": "2025-03-19 11:00:00", "b": 542.75}, {"a": "2025-03-19 11:05:00", "b": 544.5}, {"a": "2025-03-19 11:10:00", "b": 531.5}, {"a": "2025-03-19 11:15:00", "b": 529.25}, {"a": "2025-03-19 11:20:00", "b": 529.6}, {"a": "2025-03-19 11:25:00", "b": 516.75}, {"a": "2025-03-19 11:30:00", "b": 512.75}, {"a": "2025-03-19 11:35:00", "b": 525.8}, {"a": "2025-03-19 11:40:00", "b": 534.8}, {"a": "2025-03-19 11:45:00", "b": 491.6}, {"a": "2025-03-19 11:50:00", "b": 479.25}, {"a": "2025-03-19 11:55:00", "b": 494.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    