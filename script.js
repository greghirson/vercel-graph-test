
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-15 07:00:00", "b": 516.4}, {"a": "2025-01-15 07:05:00", "b": 513.75}, {"a": "2025-01-15 07:10:00", "b": 550.4}, {"a": "2025-01-15 07:15:00", "b": 599.0}, {"a": "2025-01-15 07:20:00", "b": 588.8}, {"a": "2025-01-15 07:25:00", "b": 578.2}, {"a": "2025-01-15 07:30:00", "b": 558.2}, {"a": "2025-01-15 07:35:00", "b": 549.6}, {"a": "2025-01-15 07:40:00", "b": 568.0}, {"a": "2025-01-15 07:45:00", "b": 563.0}, {"a": "2025-01-15 07:50:00", "b": 554.0}, {"a": "2025-01-15 07:55:00", "b": 558.25}, {"a": "2025-01-15 08:00:00", "b": 561.75}, {"a": "2025-01-15 08:05:00", "b": 573.8}, {"a": "2025-01-15 08:10:00", "b": 576.2}, {"a": "2025-01-15 08:15:00", "b": 563.5}, {"a": "2025-01-15 08:20:00", "b": 571.25}, {"a": "2025-01-15 08:25:00", "b": 574.4}, {"a": "2025-01-15 08:30:00", "b": 569.4}, {"a": "2025-01-15 08:35:00", "b": 583.6666666666666}, {"a": "2025-01-15 08:40:00", "b": 581.8}, {"a": "2025-01-15 08:45:00", "b": 573.25}, {"a": "2025-01-15 08:50:00", "b": 570.6}, {"a": "2025-01-15 08:55:00", "b": 580.8}, {"a": "2025-01-15 09:00:00", "b": 576.25}, {"a": "2025-01-15 09:05:00", "b": 571.0}, {"a": "2025-01-15 09:10:00", "b": 575.2}, {"a": "2025-01-15 09:15:00", "b": 575.0}, {"a": "2025-01-15 09:20:00", "b": 577.5}, {"a": "2025-01-15 09:25:00", "b": 584.25}, {"a": "2025-01-15 09:30:00", "b": 580.8}, {"a": "2025-01-15 09:35:00", "b": 577.0}, {"a": "2025-01-15 09:40:00", "b": 573.0}, {"a": "2025-01-15 09:45:00", "b": 568.25}, {"a": "2025-01-15 09:50:00", "b": 564.6}, {"a": "2025-01-15 09:55:00", "b": 571.8}, {"a": "2025-01-15 10:00:00", "b": 558.4}, {"a": "2025-01-15 10:05:00", "b": 534.6}, {"a": "2025-01-15 10:10:00", "b": 523.2}, {"a": "2025-01-15 10:15:00", "b": 530.6}, {"a": "2025-01-15 10:20:00", "b": 532.6666666666666}, {"a": "2025-01-15 10:25:00", "b": 531.0}, {"a": "2025-01-15 10:30:00", "b": 515.2}, {"a": "2025-01-15 10:35:00", "b": 529.5}, {"a": "2025-01-15 10:40:00", "b": 530.0}, {"a": "2025-01-15 10:45:00", "b": 517.0}, {"a": "2025-01-15 10:50:00", "b": 506.4}, {"a": "2025-01-15 10:55:00", "b": 515.75}, {"a": "2025-01-15 11:00:00", "b": 511.0}, {"a": "2025-01-15 11:05:00", "b": 496.5}, {"a": "2025-01-15 11:10:00", "b": 501.4}, {"a": "2025-01-15 11:15:00", "b": 516.0}, {"a": "2025-01-15 11:20:00", "b": 516.25}, {"a": "2025-01-15 11:25:00", "b": 517.25}, {"a": "2025-01-15 11:30:00", "b": 515.75}, {"a": "2025-01-15 11:35:00", "b": 539.4}, {"a": "2025-01-15 11:40:00", "b": 523.75}, {"a": "2025-01-15 11:45:00", "b": 516.6}, {"a": "2025-01-15 11:50:00", "b": 524.8}, {"a": "2025-01-15 11:55:00", "b": 540.0}, {"a": "2025-01-15 12:00:00", "b": 523.6}, {"a": "2025-01-15 12:05:00", "b": 522.2}, {"a": "2025-01-15 12:10:00", "b": 517.0}, {"a": "2025-01-15 12:15:00", "b": 519.8}, {"a": "2025-01-15 12:20:00", "b": 523.75}, {"a": "2025-01-15 12:25:00", "b": 516.0}, {"a": "2025-01-15 12:30:00", "b": 541.6}, {"a": "2025-01-15 12:35:00", "b": 579.2}, {"a": "2025-01-15 12:40:00", "b": 623.8}, {"a": "2025-01-15 12:45:00", "b": 638.75}, {"a": "2025-01-15 12:50:00", "b": 649.8}, {"a": "2025-01-15 12:55:00", "b": 697.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    