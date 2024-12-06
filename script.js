
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-05 16:00:00", "b": 536.3333333333334}, {"a": "2024-12-05 16:05:00", "b": 536.0}, {"a": "2024-12-05 16:10:00", "b": 546.8}, {"a": "2024-12-05 16:15:00", "b": 543.6}, {"a": "2024-12-05 16:20:00", "b": 531.75}, {"a": "2024-12-05 16:25:00", "b": 516.8}, {"a": "2024-12-05 16:30:00", "b": 513.8}, {"a": "2024-12-05 16:35:00", "b": 514.4}, {"a": "2024-12-05 16:40:00", "b": 530.0}, {"a": "2024-12-05 16:45:00", "b": 529.75}, {"a": "2024-12-05 16:50:00", "b": 519.25}, {"a": "2024-12-05 16:55:00", "b": 507.4}, {"a": "2024-12-05 17:00:00", "b": 524.2}, {"a": "2024-12-05 17:05:00", "b": 534.2}, {"a": "2024-12-05 17:10:00", "b": 520.0}, {"a": "2024-12-05 17:15:00", "b": 528.4}, {"a": "2024-12-05 17:20:00", "b": 540.2}, {"a": "2024-12-05 17:25:00", "b": 556.8}, {"a": "2024-12-05 17:30:00", "b": 558.25}, {"a": "2024-12-05 17:35:00", "b": 572.0}, {"a": "2024-12-05 17:40:00", "b": 572.6}, {"a": "2024-12-05 17:45:00", "b": 556.0}, {"a": "2024-12-05 17:50:00", "b": 559.6}, {"a": "2024-12-05 17:55:00", "b": 553.3333333333334}, {"a": "2024-12-05 18:00:00", "b": 553.75}, {"a": "2024-12-05 18:05:00", "b": 556.6}, {"a": "2024-12-05 18:10:00", "b": 539.8}, {"a": "2024-12-05 18:15:00", "b": 533.6}, {"a": "2024-12-05 18:20:00", "b": 532.0}, {"a": "2024-12-05 18:25:00", "b": 513.0}, {"a": "2024-12-05 18:30:00", "b": 509.0}, {"a": "2024-12-05 18:35:00", "b": 499.0}, {"a": "2024-12-05 18:40:00", "b": 509.0}, {"a": "2024-12-05 18:45:00", "b": 510.0}, {"a": "2024-12-05 18:50:00", "b": 507.6}, {"a": "2024-12-05 18:55:00", "b": 498.5}, {"a": "2024-12-05 19:00:00", "b": 484.0}, {"a": "2024-12-05 19:05:00", "b": 483.8}, {"a": "2024-12-05 19:10:00", "b": 496.0}, {"a": "2024-12-05 19:15:00", "b": 496.75}, {"a": "2024-12-05 19:20:00", "b": 493.0}, {"a": "2024-12-05 19:25:00", "b": 491.5}, {"a": "2024-12-05 19:30:00", "b": 500.0}, {"a": "2024-12-05 19:35:00", "b": 505.0}, {"a": "2024-12-05 19:40:00", "b": 504.4}, {"a": "2024-12-05 19:45:00", "b": 512.25}, {"a": "2024-12-05 19:50:00", "b": 510.5}, {"a": "2024-12-05 19:55:00", "b": 510.4}, {"a": "2024-12-05 20:00:00", "b": 501.25}, {"a": "2024-12-05 20:05:00", "b": 492.0}, {"a": "2024-12-05 20:10:00", "b": 502.0}, {"a": "2024-12-05 20:15:00", "b": 489.8}, {"a": "2024-12-05 20:20:00", "b": 485.0}, {"a": "2024-12-05 20:25:00", "b": 544.8}, {"a": "2024-12-05 20:30:00", "b": 564.25}, {"a": "2024-12-05 20:35:00", "b": 593.0}, {"a": "2024-12-05 20:40:00", "b": 594.2}, {"a": "2024-12-05 20:45:00", "b": 595.6}, {"a": "2024-12-05 20:50:00", "b": 604.2}, {"a": "2024-12-05 20:55:00", "b": 598.0}, {"a": "2024-12-05 21:00:00", "b": 589.2}, {"a": "2024-12-05 21:05:00", "b": 564.2}, {"a": "2024-12-05 21:10:00", "b": 516.25}, {"a": "2024-12-05 21:15:00", "b": 503.8}, {"a": "2024-12-05 21:20:00", "b": 495.75}, {"a": "2024-12-05 21:25:00", "b": 493.0}, {"a": "2024-12-05 21:30:00", "b": 488.8}, {"a": "2024-12-05 21:35:00", "b": 492.4}, {"a": "2024-12-05 21:40:00", "b": 489.0}, {"a": "2024-12-05 21:45:00", "b": 474.5}, {"a": "2024-12-05 21:50:00", "b": 467.25}, {"a": "2024-12-05 21:55:00", "b": 464.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    