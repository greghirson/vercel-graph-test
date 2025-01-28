
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-27 19:00:00", "b": 401.0}, {"a": "2025-01-27 19:05:00", "b": 402.25}, {"a": "2025-01-27 19:10:00", "b": 401.8}, {"a": "2025-01-27 19:15:00", "b": 402.2}, {"a": "2025-01-27 19:20:00", "b": 402.25}, {"a": "2025-01-27 19:25:00", "b": 401.5}, {"a": "2025-01-27 19:30:00", "b": 400.75}, {"a": "2025-01-27 19:35:00", "b": 401.2}, {"a": "2025-01-27 19:40:00", "b": 402.5}, {"a": "2025-01-27 19:45:00", "b": 401.4}, {"a": "2025-01-27 19:50:00", "b": 402.0}, {"a": "2025-01-27 19:55:00", "b": 401.3333333333333}, {"a": "2025-01-27 20:00:00", "b": 401.5}, {"a": "2025-01-27 20:05:00", "b": 402.5}, {"a": "2025-01-27 20:10:00", "b": 402.0}, {"a": "2025-01-27 20:15:00", "b": 401.75}, {"a": "2025-01-27 20:20:00", "b": 401.5}, {"a": "2025-01-27 20:25:00", "b": 401.8}, {"a": "2025-01-27 20:30:00", "b": 401.75}, {"a": "2025-01-27 20:35:00", "b": 401.6}, {"a": "2025-01-27 20:40:00", "b": 402.2}, {"a": "2025-01-27 20:45:00", "b": 403.0}, {"a": "2025-01-27 20:50:00", "b": 402.25}, {"a": "2025-01-27 20:55:00", "b": 403.0}, {"a": "2025-01-27 21:00:00", "b": 476.0}, {"a": "2025-01-27 21:05:00", "b": 549.0}, {"a": "2025-01-27 21:10:00", "b": 540.0}, {"a": "2025-01-27 21:15:00", "b": 542.75}, {"a": "2025-01-27 21:20:00", "b": 547.8}, {"a": "2025-01-27 21:25:00", "b": 548.4}, {"a": "2025-01-27 21:30:00", "b": 554.25}, {"a": "2025-01-27 21:35:00", "b": 554.0}, {"a": "2025-01-27 21:40:00", "b": 549.6}, {"a": "2025-01-27 21:45:00", "b": 549.0}, {"a": "2025-01-27 21:50:00", "b": 545.0}, {"a": "2025-01-27 21:55:00", "b": 547.25}, {"a": "2025-01-27 22:00:00", "b": 551.8}, {"a": "2025-01-27 22:05:00", "b": 550.8}, {"a": "2025-01-27 22:10:00", "b": 552.25}, {"a": "2025-01-27 22:15:00", "b": 554.0}, {"a": "2025-01-27 22:20:00", "b": 542.0}, {"a": "2025-01-27 22:25:00", "b": 530.25}, {"a": "2025-01-27 22:30:00", "b": 531.2}, {"a": "2025-01-27 22:35:00", "b": 534.8}, {"a": "2025-01-27 22:40:00", "b": 531.4}, {"a": "2025-01-27 22:45:00", "b": 528.8}, {"a": "2025-01-27 22:50:00", "b": 543.8}, {"a": "2025-01-27 22:55:00", "b": 547.25}, {"a": "2025-01-27 23:00:00", "b": 547.5}, {"a": "2025-01-27 23:05:00", "b": 553.25}, {"a": "2025-01-27 23:10:00", "b": 548.0}, {"a": "2025-01-27 23:15:00", "b": 535.75}, {"a": "2025-01-27 23:20:00", "b": 537.6}, {"a": "2025-01-27 23:25:00", "b": 545.3333333333334}, {"a": "2025-01-27 23:30:00", "b": 538.0}, {"a": "2025-01-27 23:35:00", "b": 526.0}, {"a": "2025-01-27 23:40:00", "b": 537.6}, {"a": "2025-01-27 23:45:00", "b": 540.4}, {"a": "2025-01-27 23:50:00", "b": 534.4}, {"a": "2025-01-27 23:55:00", "b": 533.2}, {"a": "2025-01-28 00:00:00", "b": 515.0}, {"a": "2025-01-28 00:05:00", "b": 522.6}, {"a": "2025-01-28 00:10:00", "b": 526.0}, {"a": "2025-01-28 00:15:00", "b": 517.2}, {"a": "2025-01-28 00:20:00", "b": 499.4}, {"a": "2025-01-28 00:25:00", "b": 512.25}, {"a": "2025-01-28 00:30:00", "b": 512.5}, {"a": "2025-01-28 00:35:00", "b": 501.75}, {"a": "2025-01-28 00:40:00", "b": 489.4}, {"a": "2025-01-28 00:45:00", "b": 499.0}, {"a": "2025-01-28 00:50:00", "b": 489.2}, {"a": "2025-01-28 00:55:00", "b": 477.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    