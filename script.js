
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-07 14:00:00", "b": 518.0}, {"a": "2025-03-07 14:05:00", "b": 518.0}, {"a": "2025-03-07 14:10:00", "b": 534.75}, {"a": "2025-03-07 14:15:00", "b": 542.0}, {"a": "2025-03-07 14:20:00", "b": 534.75}, {"a": "2025-03-07 14:25:00", "b": 518.8}, {"a": "2025-03-07 14:30:00", "b": 527.75}, {"a": "2025-03-07 14:35:00", "b": 529.0}, {"a": "2025-03-07 14:40:00", "b": 526.6}, {"a": "2025-03-07 14:45:00", "b": 514.6}, {"a": "2025-03-07 14:50:00", "b": 503.8}, {"a": "2025-03-07 14:55:00", "b": 506.2}, {"a": "2025-03-07 15:00:00", "b": 507.0}, {"a": "2025-03-07 15:05:00", "b": 495.6}, {"a": "2025-03-07 15:10:00", "b": 471.0}, {"a": "2025-03-07 15:15:00", "b": 466.2}, {"a": "2025-03-07 15:20:00", "b": 470.75}, {"a": "2025-03-07 15:25:00", "b": 459.6}, {"a": "2025-03-07 15:30:00", "b": 479.0}, {"a": "2025-03-07 15:35:00", "b": 482.6666666666667}, {"a": "2025-03-07 15:40:00", "b": 499.0}, {"a": "2025-03-07 15:45:00", "b": 487.25}, {"a": "2025-03-07 15:50:00", "b": 488.6}, {"a": "2025-03-07 15:55:00", "b": 499.2}, {"a": "2025-03-07 16:00:00", "b": 490.0}, {"a": "2025-03-07 16:05:00", "b": 492.0}, {"a": "2025-03-07 16:10:00", "b": 479.2}, {"a": "2025-03-07 16:15:00", "b": 484.6}, {"a": "2025-03-07 16:20:00", "b": 477.2}, {"a": "2025-03-07 16:25:00", "b": 476.2}, {"a": "2025-03-07 16:30:00", "b": 481.0}, {"a": "2025-03-07 16:35:00", "b": 487.8}, {"a": "2025-03-07 16:40:00", "b": 506.0}, {"a": "2025-03-07 16:45:00", "b": 511.6666666666667}, {"a": "2025-03-07 16:50:00", "b": 516.25}, {"a": "2025-03-07 16:55:00", "b": 521.3333333333334}, {"a": "2025-03-07 17:00:00", "b": 530.8}, {"a": "2025-03-07 17:05:00", "b": 518.2}, {"a": "2025-03-07 17:10:00", "b": 524.75}, {"a": "2025-03-07 17:15:00", "b": 539.3333333333334}, {"a": "2025-03-07 17:20:00", "b": 544.6666666666666}, {"a": "2025-03-07 17:25:00", "b": 540.0}, {"a": "2025-03-07 17:30:00", "b": 550.0}, {"a": "2025-03-07 17:35:00", "b": 547.25}, {"a": "2025-03-07 17:40:00", "b": 547.4}, {"a": "2025-03-07 17:45:00", "b": 553.4}, {"a": "2025-03-07 17:50:00", "b": 548.8}, {"a": "2025-03-07 17:55:00", "b": 557.2}, {"a": "2025-03-07 18:00:00", "b": 547.6}, {"a": "2025-03-07 18:05:00", "b": 548.2}, {"a": "2025-03-07 18:10:00", "b": 577.2}, {"a": "2025-03-07 18:15:00", "b": 581.0}, {"a": "2025-03-07 18:20:00", "b": 587.5}, {"a": "2025-03-07 18:25:00", "b": 599.0}, {"a": "2025-03-07 18:30:00", "b": 596.0}, {"a": "2025-03-07 18:35:00", "b": 596.75}, {"a": "2025-03-07 18:40:00", "b": 602.0}, {"a": "2025-03-07 18:45:00", "b": 607.8}, {"a": "2025-03-07 18:50:00", "b": 627.4}, {"a": "2025-03-07 18:55:00", "b": 617.5}, {"a": "2025-03-07 19:00:00", "b": 617.0}, {"a": "2025-03-07 19:05:00", "b": 622.25}, {"a": "2025-03-07 19:10:00", "b": 612.25}, {"a": "2025-03-07 19:15:00", "b": 617.0}, {"a": "2025-03-07 19:20:00", "b": 624.0}, {"a": "2025-03-07 19:25:00", "b": 634.0}, {"a": "2025-03-07 19:30:00", "b": 637.5}, {"a": "2025-03-07 19:35:00", "b": 637.5}, {"a": "2025-03-07 19:40:00", "b": 641.2}, {"a": "2025-03-07 19:45:00", "b": 644.8}, {"a": "2025-03-07 19:50:00", "b": 641.6}, {"a": "2025-03-07 19:55:00", "b": 634.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    