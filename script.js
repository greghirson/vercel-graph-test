
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-28 14:00:00", "b": 504.0}, {"a": "2025-01-28 14:05:00", "b": 511.8}, {"a": "2025-01-28 14:10:00", "b": 505.6}, {"a": "2025-01-28 14:15:00", "b": 505.8}, {"a": "2025-01-28 14:20:00", "b": 509.5}, {"a": "2025-01-28 14:25:00", "b": 508.0}, {"a": "2025-01-28 14:30:00", "b": 504.25}, {"a": "2025-01-28 14:35:00", "b": 500.4}, {"a": "2025-01-28 14:40:00", "b": 497.5}, {"a": "2025-01-28 14:45:00", "b": 500.8}, {"a": "2025-01-28 14:50:00", "b": 499.6}, {"a": "2025-01-28 14:55:00", "b": 505.2}, {"a": "2025-01-28 15:00:00", "b": 496.8}, {"a": "2025-01-28 15:05:00", "b": 489.4}, {"a": "2025-01-28 15:10:00", "b": 503.4}, {"a": "2025-01-28 15:15:00", "b": 502.2}, {"a": "2025-01-28 15:20:00", "b": 498.25}, {"a": "2025-01-28 15:25:00", "b": 493.5}, {"a": "2025-01-28 15:30:00", "b": 488.4}, {"a": "2025-01-28 15:35:00", "b": 478.8}, {"a": "2025-01-28 15:40:00", "b": 484.25}, {"a": "2025-01-28 15:45:00", "b": 490.5}, {"a": "2025-01-28 15:50:00", "b": 484.0}, {"a": "2025-01-28 15:55:00", "b": 477.2}, {"a": "2025-01-28 16:00:00", "b": 487.5}, {"a": "2025-01-28 16:05:00", "b": 473.8}, {"a": "2025-01-28 16:10:00", "b": 467.6}, {"a": "2025-01-28 16:15:00", "b": 468.2}, {"a": "2025-01-28 16:20:00", "b": 480.2}, {"a": "2025-01-28 16:25:00", "b": 495.2}, {"a": "2025-01-28 16:30:00", "b": 493.4}, {"a": "2025-01-28 16:35:00", "b": 486.6}, {"a": "2025-01-28 16:40:00", "b": 485.0}, {"a": "2025-01-28 16:45:00", "b": 507.0}, {"a": "2025-01-28 16:50:00", "b": 511.75}, {"a": "2025-01-28 16:55:00", "b": 502.8}, {"a": "2025-01-28 17:00:00", "b": 494.4}, {"a": "2025-01-28 17:05:00", "b": 495.5}, {"a": "2025-01-28 17:10:00", "b": 492.6}, {"a": "2025-01-28 17:15:00", "b": 489.25}, {"a": "2025-01-28 17:20:00", "b": 504.8}, {"a": "2025-01-28 17:25:00", "b": 506.5}, {"a": "2025-01-28 17:30:00", "b": 501.3333333333333}, {"a": "2025-01-28 17:35:00", "b": 492.3333333333333}, {"a": "2025-01-28 17:40:00", "b": 487.5}, {"a": "2025-01-28 17:45:00", "b": 489.3333333333333}, {"a": "2025-01-28 17:50:00", "b": 491.5}, {"a": "2025-01-28 17:55:00", "b": 493.4}, {"a": "2025-01-28 18:00:00", "b": 496.75}, {"a": "2025-01-28 18:05:00", "b": 502.2}, {"a": "2025-01-28 18:10:00", "b": 493.8}, {"a": "2025-01-28 18:15:00", "b": 492.5}, {"a": "2025-01-28 18:20:00", "b": 488.8}, {"a": "2025-01-28 18:25:00", "b": 490.6}, {"a": "2025-01-28 18:30:00", "b": 499.25}, {"a": "2025-01-28 18:35:00", "b": 511.5}, {"a": "2025-01-28 18:40:00", "b": 501.0}, {"a": "2025-01-28 18:45:00", "b": 499.0}, {"a": "2025-01-28 18:50:00", "b": 497.6}, {"a": "2025-01-28 18:55:00", "b": 497.4}, {"a": "2025-01-28 19:00:00", "b": 512.25}, {"a": "2025-01-28 19:05:00", "b": 522.75}, {"a": "2025-01-28 19:10:00", "b": 531.25}, {"a": "2025-01-28 19:15:00", "b": 521.2}, {"a": "2025-01-28 19:20:00", "b": 523.6}, {"a": "2025-01-28 19:25:00", "b": 521.8}, {"a": "2025-01-28 19:30:00", "b": 523.5}, {"a": "2025-01-28 19:35:00", "b": 533.8}, {"a": "2025-01-28 19:40:00", "b": 542.75}, {"a": "2025-01-28 19:45:00", "b": 550.0}, {"a": "2025-01-28 19:50:00", "b": 548.2}, {"a": "2025-01-28 19:55:00", "b": 565.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    