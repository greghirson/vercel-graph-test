
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-01 11:00:00", "b": 577.4}, {"a": "2025-04-01 11:05:00", "b": 571.5}, {"a": "2025-04-01 11:10:00", "b": 572.8}, {"a": "2025-04-01 11:15:00", "b": 573.8}, {"a": "2025-04-01 11:20:00", "b": 560.0}, {"a": "2025-04-01 11:25:00", "b": 555.0}, {"a": "2025-04-01 11:30:00", "b": 568.4}, {"a": "2025-04-01 11:35:00", "b": 570.0}, {"a": "2025-04-01 11:40:00", "b": 560.3333333333334}, {"a": "2025-04-01 11:45:00", "b": 564.8}, {"a": "2025-04-01 11:50:00", "b": 556.5}, {"a": "2025-04-01 11:55:00", "b": 543.0}, {"a": "2025-04-01 12:00:00", "b": 545.2}, {"a": "2025-04-01 12:05:00", "b": 556.25}, {"a": "2025-04-01 12:10:00", "b": 548.25}, {"a": "2025-04-01 12:15:00", "b": 555.2}, {"a": "2025-04-01 12:20:00", "b": 550.25}, {"a": "2025-04-01 12:25:00", "b": 534.25}, {"a": "2025-04-01 12:30:00", "b": 535.5}, {"a": "2025-04-01 12:35:00", "b": 538.75}, {"a": "2025-04-01 12:40:00", "b": 546.5}, {"a": "2025-04-01 12:45:00", "b": 548.0}, {"a": "2025-04-01 12:50:00", "b": 541.5}, {"a": "2025-04-01 12:55:00", "b": 534.0}, {"a": "2025-04-01 13:00:00", "b": 526.5}, {"a": "2025-04-01 13:05:00", "b": 541.2}, {"a": "2025-04-01 13:10:00", "b": 546.0}, {"a": "2025-04-01 13:15:00", "b": 530.0}, {"a": "2025-04-01 13:20:00", "b": 535.6}, {"a": "2025-04-01 13:25:00", "b": 536.6}, {"a": "2025-04-01 13:30:00", "b": 512.2}, {"a": "2025-04-01 13:35:00", "b": 503.3333333333333}, {"a": "2025-04-01 13:40:00", "b": 505.25}, {"a": "2025-04-01 13:45:00", "b": 502.6666666666667}, {"a": "2025-04-01 13:50:00", "b": 492.2}, {"a": "2025-04-01 13:55:00", "b": 493.8}, {"a": "2025-04-01 14:00:00", "b": 487.6}, {"a": "2025-04-01 14:05:00", "b": 483.8}, {"a": "2025-04-01 14:10:00", "b": 489.0}, {"a": "2025-04-01 14:15:00", "b": 476.6}, {"a": "2025-04-01 14:20:00", "b": 471.6666666666667}, {"a": "2025-04-01 14:25:00", "b": 486.0}, {"a": "2025-04-01 14:30:00", "b": 507.4}, {"a": "2025-04-01 14:35:00", "b": 505.2}, {"a": "2025-04-01 14:40:00", "b": 502.0}, {"a": "2025-04-01 14:45:00", "b": 493.0}, {"a": "2025-04-01 14:50:00", "b": 487.0}, {"a": "2025-04-01 14:55:00", "b": 486.0}, {"a": "2025-04-01 15:00:00", "b": 489.6}, {"a": "2025-04-01 15:05:00", "b": 496.4}, {"a": "2025-04-01 15:10:00", "b": 488.6}, {"a": "2025-04-01 15:15:00", "b": 483.75}, {"a": "2025-04-01 15:20:00", "b": 477.4}, {"a": "2025-04-01 15:25:00", "b": 466.2}, {"a": "2025-04-01 15:30:00", "b": 440.2}, {"a": "2025-04-01 15:35:00", "b": 470.8}, {"a": "2025-04-01 15:40:00", "b": 481.0}, {"a": "2025-04-01 15:45:00", "b": 464.2}, {"a": "2025-04-01 15:50:00", "b": 462.0}, {"a": "2025-04-01 15:55:00", "b": 464.0}, {"a": "2025-04-01 16:00:00", "b": 463.8}, {"a": "2025-04-01 16:05:00", "b": 467.0}, {"a": "2025-04-01 16:10:00", "b": 479.2}, {"a": "2025-04-01 16:15:00", "b": 476.6}, {"a": "2025-04-01 16:20:00", "b": 468.75}, {"a": "2025-04-01 16:25:00", "b": 469.2}, {"a": "2025-04-01 16:30:00", "b": 469.0}, {"a": "2025-04-01 16:35:00", "b": 471.5}, {"a": "2025-04-01 16:40:00", "b": 468.6666666666667}, {"a": "2025-04-01 16:45:00", "b": 469.4}, {"a": "2025-04-01 16:50:00", "b": 465.4}, {"a": "2025-04-01 16:55:00", "b": 467.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    