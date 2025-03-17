
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-16 16:00:00", "b": 518.0}, {"a": "2025-03-16 16:05:00", "b": 489.5}, {"a": "2025-03-16 16:10:00", "b": 467.25}, {"a": "2025-03-16 16:15:00", "b": 455.6666666666667}, {"a": "2025-03-16 16:20:00", "b": 462.5}, {"a": "2025-03-16 16:25:00", "b": 467.4}, {"a": "2025-03-16 16:30:00", "b": 465.25}, {"a": "2025-03-16 16:35:00", "b": 467.4}, {"a": "2025-03-16 16:40:00", "b": 472.2}, {"a": "2025-03-16 16:45:00", "b": 488.25}, {"a": "2025-03-16 16:50:00", "b": 499.25}, {"a": "2025-03-16 16:55:00", "b": 504.6}, {"a": "2025-03-16 17:00:00", "b": 502.4}, {"a": "2025-03-16 17:05:00", "b": 508.3333333333333}, {"a": "2025-03-16 17:10:00", "b": 508.4}, {"a": "2025-03-16 17:15:00", "b": 520.6}, {"a": "2025-03-16 17:20:00", "b": 534.5}, {"a": "2025-03-16 17:25:00", "b": 533.8}, {"a": "2025-03-16 17:30:00", "b": 527.2}, {"a": "2025-03-16 17:35:00", "b": 525.0}, {"a": "2025-03-16 17:40:00", "b": 530.5}, {"a": "2025-03-16 17:45:00", "b": 519.2}, {"a": "2025-03-16 17:50:00", "b": 527.75}, {"a": "2025-03-16 17:55:00", "b": 514.8}, {"a": "2025-03-16 18:00:00", "b": 515.25}, {"a": "2025-03-16 18:05:00", "b": 512.8}, {"a": "2025-03-16 18:10:00", "b": 510.4}, {"a": "2025-03-16 18:15:00", "b": 499.75}, {"a": "2025-03-16 18:20:00", "b": 504.6666666666667}, {"a": "2025-03-16 18:25:00", "b": 503.2}, {"a": "2025-03-16 18:30:00", "b": 534.6}, {"a": "2025-03-16 18:35:00", "b": 552.0}, {"a": "2025-03-16 18:40:00", "b": 546.25}, {"a": "2025-03-16 18:45:00", "b": 554.0}, {"a": "2025-03-16 18:50:00", "b": 539.0}, {"a": "2025-03-16 18:55:00", "b": 513.75}, {"a": "2025-03-16 19:00:00", "b": 507.2}, {"a": "2025-03-16 19:05:00", "b": 517.2}, {"a": "2025-03-16 19:10:00", "b": 512.3333333333334}, {"a": "2025-03-16 19:15:00", "b": 501.25}, {"a": "2025-03-16 19:20:00", "b": 503.0}, {"a": "2025-03-16 19:25:00", "b": 509.75}, {"a": "2025-03-16 19:30:00", "b": 520.4}, {"a": "2025-03-16 19:35:00", "b": 523.3333333333334}, {"a": "2025-03-16 19:40:00", "b": 524.4}, {"a": "2025-03-16 19:45:00", "b": 525.6}, {"a": "2025-03-16 19:50:00", "b": 542.8}, {"a": "2025-03-16 19:55:00", "b": 550.8}, {"a": "2025-03-16 20:00:00", "b": 547.6}, {"a": "2025-03-16 20:05:00", "b": 548.6}, {"a": "2025-03-16 20:10:00", "b": 558.75}, {"a": "2025-03-16 20:15:00", "b": 565.75}, {"a": "2025-03-16 20:20:00", "b": 561.25}, {"a": "2025-03-16 20:25:00", "b": 571.8}, {"a": "2025-03-16 20:30:00", "b": 575.5}, {"a": "2025-03-16 20:35:00", "b": 594.0}, {"a": "2025-03-16 20:40:00", "b": 593.0}, {"a": "2025-03-16 20:45:00", "b": 584.25}, {"a": "2025-03-16 20:50:00", "b": 582.0}, {"a": "2025-03-16 20:55:00", "b": 594.8}, {"a": "2025-03-16 21:00:00", "b": 607.25}, {"a": "2025-03-16 21:05:00", "b": 592.5}, {"a": "2025-03-16 21:10:00", "b": 607.4}, {"a": "2025-03-16 21:15:00", "b": 598.75}, {"a": "2025-03-16 21:20:00", "b": 588.0}, {"a": "2025-03-16 21:25:00", "b": 582.8}, {"a": "2025-03-16 21:30:00", "b": 581.5}, {"a": "2025-03-16 21:35:00", "b": 596.0}, {"a": "2025-03-16 21:40:00", "b": 575.2}, {"a": "2025-03-16 21:45:00", "b": 572.6}, {"a": "2025-03-16 21:50:00", "b": 582.2}, {"a": "2025-03-16 21:55:00", "b": 572.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    