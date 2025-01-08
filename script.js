
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-07 18:00:00", "b": 402.0}, {"a": "2025-01-07 18:05:00", "b": 401.6}, {"a": "2025-01-07 18:10:00", "b": 401.75}, {"a": "2025-01-07 18:15:00", "b": 402.0}, {"a": "2025-01-07 18:20:00", "b": 401.6666666666667}, {"a": "2025-01-07 18:25:00", "b": 403.3333333333333}, {"a": "2025-01-07 18:30:00", "b": 424.2}, {"a": "2025-01-07 18:35:00", "b": 449.75}, {"a": "2025-01-07 18:40:00", "b": 447.2}, {"a": "2025-01-07 18:45:00", "b": 439.25}, {"a": "2025-01-07 18:50:00", "b": 434.6}, {"a": "2025-01-07 18:55:00", "b": 431.2}, {"a": "2025-01-07 19:00:00", "b": 431.8}, {"a": "2025-01-07 19:05:00", "b": 451.8}, {"a": "2025-01-07 19:10:00", "b": 454.0}, {"a": "2025-01-07 19:15:00", "b": 453.0}, {"a": "2025-01-07 19:20:00", "b": 457.5}, {"a": "2025-01-07 19:25:00", "b": 467.8}, {"a": "2025-01-07 19:30:00", "b": 471.6}, {"a": "2025-01-07 19:35:00", "b": 469.4}, {"a": "2025-01-07 19:40:00", "b": 499.2}, {"a": "2025-01-07 19:45:00", "b": 510.2}, {"a": "2025-01-07 19:50:00", "b": 524.5}, {"a": "2025-01-07 19:55:00", "b": 522.5}, {"a": "2025-01-07 20:00:00", "b": 521.6}, {"a": "2025-01-07 20:05:00", "b": 545.8}, {"a": "2025-01-07 20:10:00", "b": 573.25}, {"a": "2025-01-07 20:15:00", "b": 571.6}, {"a": "2025-01-07 20:20:00", "b": 609.8}, {"a": "2025-01-07 20:25:00", "b": 624.8}, {"a": "2025-01-07 20:30:00", "b": 627.8}, {"a": "2025-01-07 20:35:00", "b": 637.2}, {"a": "2025-01-07 20:40:00", "b": 647.2}, {"a": "2025-01-07 20:45:00", "b": 596.0}, {"a": "2025-01-07 20:50:00", "b": 561.0}, {"a": "2025-01-07 20:55:00", "b": 557.2}, {"a": "2025-01-07 21:00:00", "b": 561.6}, {"a": "2025-01-07 21:05:00", "b": 559.6}, {"a": "2025-01-07 21:10:00", "b": 560.0}, {"a": "2025-01-07 21:15:00", "b": 561.4}, {"a": "2025-01-07 21:20:00", "b": 552.6666666666666}, {"a": "2025-01-07 21:25:00", "b": 553.2}, {"a": "2025-01-07 21:30:00", "b": 546.2}, {"a": "2025-01-07 21:35:00", "b": 544.25}, {"a": "2025-01-07 21:40:00", "b": 533.0}, {"a": "2025-01-07 21:45:00", "b": 535.8}, {"a": "2025-01-07 21:50:00", "b": 548.0}, {"a": "2025-01-07 21:55:00", "b": 561.0}, {"a": "2025-01-07 22:00:00", "b": 559.25}, {"a": "2025-01-07 22:05:00", "b": 553.0}, {"a": "2025-01-07 22:10:00", "b": 558.0}, {"a": "2025-01-07 22:15:00", "b": 560.25}, {"a": "2025-01-07 22:20:00", "b": 563.75}, {"a": "2025-01-07 22:25:00", "b": 553.4}, {"a": "2025-01-07 22:30:00", "b": 561.0}, {"a": "2025-01-07 22:35:00", "b": 571.8}, {"a": "2025-01-07 22:40:00", "b": 564.5}, {"a": "2025-01-07 22:45:00", "b": 558.6}, {"a": "2025-01-07 22:50:00", "b": 577.6}, {"a": "2025-01-07 22:55:00", "b": 577.6}, {"a": "2025-01-07 23:00:00", "b": 555.8}, {"a": "2025-01-07 23:05:00", "b": 541.6}, {"a": "2025-01-07 23:10:00", "b": 526.0}, {"a": "2025-01-07 23:15:00", "b": 501.25}, {"a": "2025-01-07 23:20:00", "b": 481.6}, {"a": "2025-01-07 23:25:00", "b": 485.4}, {"a": "2025-01-07 23:30:00", "b": 489.6}, {"a": "2025-01-07 23:35:00", "b": 479.6}, {"a": "2025-01-07 23:40:00", "b": 476.0}, {"a": "2025-01-07 23:45:00", "b": 485.5}, {"a": "2025-01-07 23:50:00", "b": 456.0}, {"a": "2025-01-07 23:55:00", "b": 458.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    