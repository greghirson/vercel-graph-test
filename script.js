
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-16 00:00:00", "b": 537.25}, {"a": "2025-04-16 00:05:00", "b": 541.0}, {"a": "2025-04-16 00:10:00", "b": 529.25}, {"a": "2025-04-16 00:15:00", "b": 523.8}, {"a": "2025-04-16 00:20:00", "b": 519.0}, {"a": "2025-04-16 00:25:00", "b": 515.6}, {"a": "2025-04-16 00:30:00", "b": 521.25}, {"a": "2025-04-16 00:35:00", "b": 527.2}, {"a": "2025-04-16 00:40:00", "b": 531.0}, {"a": "2025-04-16 00:45:00", "b": 522.8}, {"a": "2025-04-16 00:50:00", "b": 513.0}, {"a": "2025-04-16 00:55:00", "b": 527.5}, {"a": "2025-04-16 01:00:00", "b": 527.2}, {"a": "2025-04-16 01:05:00", "b": 515.0}, {"a": "2025-04-16 01:10:00", "b": 512.0}, {"a": "2025-04-16 01:15:00", "b": 518.4}, {"a": "2025-04-16 01:20:00", "b": 513.4}, {"a": "2025-04-16 01:25:00", "b": 520.8}, {"a": "2025-04-16 01:30:00", "b": 527.5}, {"a": "2025-04-16 01:35:00", "b": 534.25}, {"a": "2025-04-16 01:40:00", "b": 525.0}, {"a": "2025-04-16 01:45:00", "b": 514.0}, {"a": "2025-04-16 01:50:00", "b": 509.5}, {"a": "2025-04-16 01:55:00", "b": 507.2}, {"a": "2025-04-16 02:00:00", "b": 516.0}, {"a": "2025-04-16 02:05:00", "b": 510.0}, {"a": "2025-04-16 02:10:00", "b": 497.4}, {"a": "2025-04-16 02:15:00", "b": 503.4}, {"a": "2025-04-16 02:20:00", "b": 501.0}, {"a": "2025-04-16 02:25:00", "b": 509.8}, {"a": "2025-04-16 02:30:00", "b": 510.0}, {"a": "2025-04-16 02:35:00", "b": 507.25}, {"a": "2025-04-16 02:40:00", "b": 498.75}, {"a": "2025-04-16 02:45:00", "b": 503.0}, {"a": "2025-04-16 02:50:00", "b": 501.5}, {"a": "2025-04-16 02:55:00", "b": 501.75}, {"a": "2025-04-16 03:00:00", "b": 507.0}, {"a": "2025-04-16 03:05:00", "b": 518.8}, {"a": "2025-04-16 03:10:00", "b": 518.6}, {"a": "2025-04-16 03:15:00", "b": 504.5}, {"a": "2025-04-16 03:20:00", "b": 503.2}, {"a": "2025-04-16 03:25:00", "b": 501.0}, {"a": "2025-04-16 03:30:00", "b": 499.0}, {"a": "2025-04-16 03:35:00", "b": 494.0}, {"a": "2025-04-16 03:40:00", "b": 506.2}, {"a": "2025-04-16 03:45:00", "b": 513.8}, {"a": "2025-04-16 03:50:00", "b": 515.5}, {"a": "2025-04-16 03:55:00", "b": 520.0}, {"a": "2025-04-16 04:00:00", "b": 524.4}, {"a": "2025-04-16 04:05:00", "b": 520.5}, {"a": "2025-04-16 04:10:00", "b": 519.2}, {"a": "2025-04-16 04:15:00", "b": 516.0}, {"a": "2025-04-16 04:20:00", "b": 520.3333333333334}, {"a": "2025-04-16 04:25:00", "b": 525.0}, {"a": "2025-04-16 04:30:00", "b": 517.0}, {"a": "2025-04-16 04:35:00", "b": 511.0}, {"a": "2025-04-16 04:40:00", "b": 514.4}, {"a": "2025-04-16 04:45:00", "b": 496.5}, {"a": "2025-04-16 04:50:00", "b": 496.4}, {"a": "2025-04-16 04:55:00", "b": 495.8}, {"a": "2025-04-16 05:00:00", "b": 490.4}, {"a": "2025-04-16 05:05:00", "b": 491.0}, {"a": "2025-04-16 05:10:00", "b": 496.5}, {"a": "2025-04-16 05:15:00", "b": 499.0}, {"a": "2025-04-16 05:20:00", "b": 500.25}, {"a": "2025-04-16 05:25:00", "b": 493.0}, {"a": "2025-04-16 05:30:00", "b": 500.0}, {"a": "2025-04-16 05:35:00", "b": 500.6}, {"a": "2025-04-16 05:40:00", "b": 500.2}, {"a": "2025-04-16 05:45:00", "b": 501.2}, {"a": "2025-04-16 05:50:00", "b": 504.6}, {"a": "2025-04-16 05:55:00", "b": 500.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    