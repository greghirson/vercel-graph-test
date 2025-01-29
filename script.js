
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-28 12:00:00", "b": 607.2}, {"a": "2025-01-28 12:05:00", "b": 597.5}, {"a": "2025-01-28 12:10:00", "b": 595.25}, {"a": "2025-01-28 12:15:00", "b": 581.0}, {"a": "2025-01-28 12:20:00", "b": 572.6}, {"a": "2025-01-28 12:25:00", "b": 569.0}, {"a": "2025-01-28 12:30:00", "b": 564.0}, {"a": "2025-01-28 12:35:00", "b": 555.4}, {"a": "2025-01-28 12:40:00", "b": 563.2}, {"a": "2025-01-28 12:45:00", "b": 562.6}, {"a": "2025-01-28 12:50:00", "b": 548.8}, {"a": "2025-01-28 12:55:00", "b": 532.0}, {"a": "2025-01-28 13:00:00", "b": 529.6}, {"a": "2025-01-28 13:05:00", "b": 541.8}, {"a": "2025-01-28 13:10:00", "b": 539.6666666666666}, {"a": "2025-01-28 13:15:00", "b": 529.0}, {"a": "2025-01-28 13:20:00", "b": 527.2}, {"a": "2025-01-28 13:25:00", "b": 520.6}, {"a": "2025-01-28 13:30:00", "b": 525.25}, {"a": "2025-01-28 13:35:00", "b": 536.0}, {"a": "2025-01-28 13:40:00", "b": 519.25}, {"a": "2025-01-28 13:45:00", "b": 516.8}, {"a": "2025-01-28 13:50:00", "b": 521.5}, {"a": "2025-01-28 13:55:00", "b": 509.8}, {"a": "2025-01-28 14:00:00", "b": 504.0}, {"a": "2025-01-28 14:05:00", "b": 511.8}, {"a": "2025-01-28 14:10:00", "b": 505.6}, {"a": "2025-01-28 14:15:00", "b": 505.8}, {"a": "2025-01-28 14:20:00", "b": 509.5}, {"a": "2025-01-28 14:25:00", "b": 508.0}, {"a": "2025-01-28 14:30:00", "b": 504.25}, {"a": "2025-01-28 14:35:00", "b": 500.4}, {"a": "2025-01-28 14:40:00", "b": 497.5}, {"a": "2025-01-28 14:45:00", "b": 500.8}, {"a": "2025-01-28 14:50:00", "b": 499.6}, {"a": "2025-01-28 14:55:00", "b": 505.2}, {"a": "2025-01-28 15:00:00", "b": 496.8}, {"a": "2025-01-28 15:05:00", "b": 489.4}, {"a": "2025-01-28 15:10:00", "b": 503.4}, {"a": "2025-01-28 15:15:00", "b": 502.2}, {"a": "2025-01-28 15:20:00", "b": 498.25}, {"a": "2025-01-28 15:25:00", "b": 493.5}, {"a": "2025-01-28 15:30:00", "b": 488.4}, {"a": "2025-01-28 15:35:00", "b": 478.8}, {"a": "2025-01-28 15:40:00", "b": 484.25}, {"a": "2025-01-28 15:45:00", "b": 490.5}, {"a": "2025-01-28 15:50:00", "b": 484.0}, {"a": "2025-01-28 15:55:00", "b": 477.2}, {"a": "2025-01-28 16:00:00", "b": 487.5}, {"a": "2025-01-28 16:05:00", "b": 473.8}, {"a": "2025-01-28 16:10:00", "b": 467.6}, {"a": "2025-01-28 16:15:00", "b": 468.2}, {"a": "2025-01-28 16:20:00", "b": 480.2}, {"a": "2025-01-28 16:25:00", "b": 495.2}, {"a": "2025-01-28 16:30:00", "b": 493.4}, {"a": "2025-01-28 16:35:00", "b": 486.6}, {"a": "2025-01-28 16:40:00", "b": 485.0}, {"a": "2025-01-28 16:45:00", "b": 507.0}, {"a": "2025-01-28 16:50:00", "b": 511.75}, {"a": "2025-01-28 16:55:00", "b": 502.8}, {"a": "2025-01-28 17:00:00", "b": 494.4}, {"a": "2025-01-28 17:05:00", "b": 495.5}, {"a": "2025-01-28 17:10:00", "b": 492.6}, {"a": "2025-01-28 17:15:00", "b": 489.25}, {"a": "2025-01-28 17:20:00", "b": 504.8}, {"a": "2025-01-28 17:25:00", "b": 506.5}, {"a": "2025-01-28 17:30:00", "b": 501.3333333333333}, {"a": "2025-01-28 17:35:00", "b": 492.3333333333333}, {"a": "2025-01-28 17:40:00", "b": 487.5}, {"a": "2025-01-28 17:45:00", "b": 489.3333333333333}, {"a": "2025-01-28 17:50:00", "b": 491.5}, {"a": "2025-01-28 17:55:00", "b": 493.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    