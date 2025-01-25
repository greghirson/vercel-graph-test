
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-25 08:00:00", "b": 503.4}, {"a": "2025-01-25 08:05:00", "b": 500.5}, {"a": "2025-01-25 08:10:00", "b": 502.4}, {"a": "2025-01-25 08:15:00", "b": 501.2}, {"a": "2025-01-25 08:20:00", "b": 486.6}, {"a": "2025-01-25 08:25:00", "b": 488.6}, {"a": "2025-01-25 08:30:00", "b": 484.0}, {"a": "2025-01-25 08:35:00", "b": 500.2}, {"a": "2025-01-25 08:40:00", "b": 499.0}, {"a": "2025-01-25 08:45:00", "b": 493.0}, {"a": "2025-01-25 08:50:00", "b": 496.6666666666667}, {"a": "2025-01-25 08:55:00", "b": 495.5}, {"a": "2025-01-25 09:00:00", "b": 494.3333333333333}, {"a": "2025-01-25 09:05:00", "b": 490.25}, {"a": "2025-01-25 09:10:00", "b": 492.8}, {"a": "2025-01-25 09:15:00", "b": 505.0}, {"a": "2025-01-25 09:20:00", "b": 504.4}, {"a": "2025-01-25 09:25:00", "b": 496.8}, {"a": "2025-01-25 09:30:00", "b": 504.2}, {"a": "2025-01-25 09:35:00", "b": 503.75}, {"a": "2025-01-25 09:40:00", "b": 512.4}, {"a": "2025-01-25 09:45:00", "b": 504.0}, {"a": "2025-01-25 09:50:00", "b": 515.5}, {"a": "2025-01-25 09:55:00", "b": 530.75}, {"a": "2025-01-25 10:00:00", "b": 523.0}, {"a": "2025-01-25 10:05:00", "b": 515.25}, {"a": "2025-01-25 10:10:00", "b": 517.3333333333334}, {"a": "2025-01-25 10:15:00", "b": 517.0}, {"a": "2025-01-25 10:20:00", "b": 537.8}, {"a": "2025-01-25 10:25:00", "b": 567.6}, {"a": "2025-01-25 10:30:00", "b": 573.2}, {"a": "2025-01-25 10:35:00", "b": 573.2}, {"a": "2025-01-25 10:40:00", "b": 573.0}, {"a": "2025-01-25 10:45:00", "b": 573.4}, {"a": "2025-01-25 10:50:00", "b": 561.25}, {"a": "2025-01-25 10:55:00", "b": 566.0}, {"a": "2025-01-25 11:00:00", "b": 561.0}, {"a": "2025-01-25 11:05:00", "b": 554.2}, {"a": "2025-01-25 11:10:00", "b": 540.6}, {"a": "2025-01-25 11:15:00", "b": 547.25}, {"a": "2025-01-25 11:20:00", "b": 556.6}, {"a": "2025-01-25 11:25:00", "b": 545.2}, {"a": "2025-01-25 11:30:00", "b": 539.6}, {"a": "2025-01-25 11:35:00", "b": 526.8}, {"a": "2025-01-25 11:40:00", "b": 499.8}, {"a": "2025-01-25 11:45:00", "b": 510.5}, {"a": "2025-01-25 11:50:00", "b": 513.0}, {"a": "2025-01-25 11:55:00", "b": 506.4}, {"a": "2025-01-25 12:00:00", "b": 511.8}, {"a": "2025-01-25 12:05:00", "b": 519.75}, {"a": "2025-01-25 12:10:00", "b": 516.2}, {"a": "2025-01-25 12:15:00", "b": 514.4}, {"a": "2025-01-25 12:20:00", "b": 519.8}, {"a": "2025-01-25 12:25:00", "b": 514.6}, {"a": "2025-01-25 12:30:00", "b": 506.2}, {"a": "2025-01-25 12:35:00", "b": 508.8}, {"a": "2025-01-25 12:40:00", "b": 507.25}, {"a": "2025-01-25 12:45:00", "b": 491.6}, {"a": "2025-01-25 12:50:00", "b": 488.6666666666667}, {"a": "2025-01-25 12:55:00", "b": 511.4}, {"a": "2025-01-25 13:00:00", "b": 543.6}, {"a": "2025-01-25 13:05:00", "b": 506.2}, {"a": "2025-01-25 13:10:00", "b": 520.0}, {"a": "2025-01-25 13:15:00", "b": 532.0}, {"a": "2025-01-25 13:20:00", "b": 524.0}, {"a": "2025-01-25 13:25:00", "b": 510.4}, {"a": "2025-01-25 13:30:00", "b": 497.4}, {"a": "2025-01-25 13:35:00", "b": 505.8}, {"a": "2025-01-25 13:40:00", "b": 495.0}, {"a": "2025-01-25 13:45:00", "b": 484.6}, {"a": "2025-01-25 13:50:00", "b": 497.2}, {"a": "2025-01-25 13:55:00", "b": 496.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    