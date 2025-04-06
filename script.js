
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-05 11:00:00", "b": 587.3333333333334}, {"a": "2025-04-05 11:05:00", "b": 577.0}, {"a": "2025-04-05 11:10:00", "b": 577.25}, {"a": "2025-04-05 11:15:00", "b": 575.4}, {"a": "2025-04-05 11:20:00", "b": 561.4}, {"a": "2025-04-05 11:25:00", "b": 548.75}, {"a": "2025-04-05 11:30:00", "b": 557.4}, {"a": "2025-04-05 11:35:00", "b": 559.6}, {"a": "2025-04-05 11:40:00", "b": 561.0}, {"a": "2025-04-05 11:45:00", "b": 556.0}, {"a": "2025-04-05 11:50:00", "b": 555.5}, {"a": "2025-04-05 11:55:00", "b": 561.4}, {"a": "2025-04-05 12:00:00", "b": 555.0}, {"a": "2025-04-05 12:05:00", "b": 547.6}, {"a": "2025-04-05 12:10:00", "b": 538.8}, {"a": "2025-04-05 12:15:00", "b": 534.25}, {"a": "2025-04-05 12:20:00", "b": 535.2}, {"a": "2025-04-05 12:25:00", "b": 535.3333333333334}, {"a": "2025-04-05 12:30:00", "b": 543.5}, {"a": "2025-04-05 12:35:00", "b": 537.2}, {"a": "2025-04-05 12:40:00", "b": 534.0}, {"a": "2025-04-05 12:45:00", "b": 525.25}, {"a": "2025-04-05 12:50:00", "b": 548.4}, {"a": "2025-04-05 12:55:00", "b": 559.25}, {"a": "2025-04-05 13:00:00", "b": 543.2}, {"a": "2025-04-05 13:05:00", "b": 543.6}, {"a": "2025-04-05 13:10:00", "b": 539.25}, {"a": "2025-04-05 13:15:00", "b": 540.0}, {"a": "2025-04-05 13:20:00", "b": 540.8}, {"a": "2025-04-05 13:25:00", "b": 537.4}, {"a": "2025-04-05 13:30:00", "b": 543.6}, {"a": "2025-04-05 13:35:00", "b": 542.25}, {"a": "2025-04-05 13:40:00", "b": 534.5}, {"a": "2025-04-05 13:45:00", "b": 535.0}, {"a": "2025-04-05 13:50:00", "b": 525.0}, {"a": "2025-04-05 13:55:00", "b": 517.5}, {"a": "2025-04-05 14:00:00", "b": 515.5}, {"a": "2025-04-05 14:05:00", "b": 511.8}, {"a": "2025-04-05 14:10:00", "b": 520.5}, {"a": "2025-04-05 14:15:00", "b": 517.8}, {"a": "2025-04-05 14:20:00", "b": 513.0}, {"a": "2025-04-05 14:25:00", "b": 514.0}, {"a": "2025-04-05 14:30:00", "b": 522.0}, {"a": "2025-04-05 14:35:00", "b": 509.2}, {"a": "2025-04-05 14:40:00", "b": 503.6}, {"a": "2025-04-05 14:45:00", "b": 502.4}, {"a": "2025-04-05 14:50:00", "b": 512.2}, {"a": "2025-04-05 14:55:00", "b": 510.0}, {"a": "2025-04-05 15:00:00", "b": 504.8}, {"a": "2025-04-05 15:05:00", "b": 499.5}, {"a": "2025-04-05 15:10:00", "b": 508.8}, {"a": "2025-04-05 15:15:00", "b": 524.4}, {"a": "2025-04-05 15:20:00", "b": 537.0}, {"a": "2025-04-05 15:25:00", "b": 540.4}, {"a": "2025-04-05 15:30:00", "b": 537.2}, {"a": "2025-04-05 15:35:00", "b": 543.0}, {"a": "2025-04-05 15:40:00", "b": 542.0}, {"a": "2025-04-05 15:45:00", "b": 545.0}, {"a": "2025-04-05 15:50:00", "b": 549.25}, {"a": "2025-04-05 15:55:00", "b": 540.3333333333334}, {"a": "2025-04-05 16:00:00", "b": 537.8}, {"a": "2025-04-05 16:05:00", "b": 523.6}, {"a": "2025-04-05 16:10:00", "b": 507.2}, {"a": "2025-04-05 16:15:00", "b": 514.8}, {"a": "2025-04-05 16:20:00", "b": 525.75}, {"a": "2025-04-05 16:25:00", "b": 534.2}, {"a": "2025-04-05 16:30:00", "b": 533.0}, {"a": "2025-04-05 16:35:00", "b": 540.6}, {"a": "2025-04-05 16:40:00", "b": 562.4}, {"a": "2025-04-05 16:45:00", "b": 563.2}, {"a": "2025-04-05 16:50:00", "b": 571.5}, {"a": "2025-04-05 16:55:00", "b": 580.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    