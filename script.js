
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-17 17:00:00", "b": 407.5}, {"a": "2025-03-17 17:05:00", "b": 407.5}, {"a": "2025-03-17 17:10:00", "b": 406.5}, {"a": "2025-03-17 17:15:00", "b": 405.5}, {"a": "2025-03-17 17:20:00", "b": 408.3333333333333}, {"a": "2025-03-17 17:25:00", "b": 408.0}, {"a": "2025-03-17 17:30:00", "b": 407.3333333333333}, {"a": "2025-03-17 17:35:00", "b": 404.5}, {"a": "2025-03-17 17:40:00", "b": 403.5}, {"a": "2025-03-17 17:45:00", "b": 402.8}, {"a": "2025-03-17 17:50:00", "b": 402.0}, {"a": "2025-03-17 17:55:00", "b": 402.5}, {"a": "2025-03-17 18:00:00", "b": 407.5}, {"a": "2025-03-17 18:05:00", "b": 408.0}, {"a": "2025-03-17 18:10:00", "b": 408.6666666666667}, {"a": "2025-03-17 18:15:00", "b": 418.8}, {"a": "2025-03-17 18:20:00", "b": 433.25}, {"a": "2025-03-17 18:25:00", "b": 418.4}, {"a": "2025-03-17 18:30:00", "b": 415.5}, {"a": "2025-03-17 18:35:00", "b": 411.3333333333333}, {"a": "2025-03-17 18:40:00", "b": 415.0}, {"a": "2025-03-17 18:45:00", "b": 442.6}, {"a": "2025-03-17 18:50:00", "b": 490.2}, {"a": "2025-03-17 18:55:00", "b": 490.8}, {"a": "2025-03-17 19:00:00", "b": 493.0}, {"a": "2025-03-17 19:05:00", "b": 510.0}, {"a": "2025-03-17 19:10:00", "b": 506.0}, {"a": "2025-03-17 19:15:00", "b": 505.5}, {"a": "2025-03-17 19:20:00", "b": 503.0}, {"a": "2025-03-17 19:25:00", "b": 507.5}, {"a": "2025-03-17 19:30:00", "b": 509.6}, {"a": "2025-03-17 19:35:00", "b": 520.4}, {"a": "2025-03-17 19:40:00", "b": 515.4}, {"a": "2025-03-17 19:45:00", "b": 501.8}, {"a": "2025-03-17 19:50:00", "b": 524.8}, {"a": "2025-03-17 19:55:00", "b": 540.0}, {"a": "2025-03-17 20:00:00", "b": 533.75}, {"a": "2025-03-17 20:05:00", "b": 530.8}, {"a": "2025-03-17 20:10:00", "b": 526.8}, {"a": "2025-03-17 20:15:00", "b": 538.6}, {"a": "2025-03-17 20:20:00", "b": 535.0}, {"a": "2025-03-17 20:25:00", "b": 505.2}, {"a": "2025-03-17 20:30:00", "b": 500.4}, {"a": "2025-03-17 20:35:00", "b": 493.6}, {"a": "2025-03-17 20:40:00", "b": 499.2}, {"a": "2025-03-17 20:45:00", "b": 496.8}, {"a": "2025-03-17 20:50:00", "b": 498.5}, {"a": "2025-03-17 20:55:00", "b": 509.25}, {"a": "2025-03-17 21:00:00", "b": 516.0}, {"a": "2025-03-17 21:05:00", "b": 506.4}, {"a": "2025-03-17 21:10:00", "b": 494.0}, {"a": "2025-03-17 21:15:00", "b": 491.75}, {"a": "2025-03-17 21:20:00", "b": 493.8}, {"a": "2025-03-17 21:25:00", "b": 498.4}, {"a": "2025-03-17 21:30:00", "b": 518.2}, {"a": "2025-03-17 21:35:00", "b": 520.5}, {"a": "2025-03-17 21:40:00", "b": 524.0}, {"a": "2025-03-17 21:45:00", "b": 525.8}, {"a": "2025-03-17 21:50:00", "b": 528.0}, {"a": "2025-03-17 21:55:00", "b": 523.8}, {"a": "2025-03-17 22:00:00", "b": 517.0}, {"a": "2025-03-17 22:05:00", "b": 518.5}, {"a": "2025-03-17 22:10:00", "b": 518.4}, {"a": "2025-03-17 22:15:00", "b": 524.25}, {"a": "2025-03-17 22:20:00", "b": 502.4}, {"a": "2025-03-17 22:25:00", "b": 489.25}, {"a": "2025-03-17 22:30:00", "b": 488.2}, {"a": "2025-03-17 22:35:00", "b": 502.4}, {"a": "2025-03-17 22:40:00", "b": 500.6}, {"a": "2025-03-17 22:45:00", "b": 488.4}, {"a": "2025-03-17 22:50:00", "b": 499.5}, {"a": "2025-03-17 22:55:00", "b": 499.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    