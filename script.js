
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-17 22:00:00", "b": 517.0}, {"a": "2025-03-17 22:05:00", "b": 518.5}, {"a": "2025-03-17 22:10:00", "b": 518.4}, {"a": "2025-03-17 22:15:00", "b": 524.25}, {"a": "2025-03-17 22:20:00", "b": 502.4}, {"a": "2025-03-17 22:25:00", "b": 489.25}, {"a": "2025-03-17 22:30:00", "b": 488.2}, {"a": "2025-03-17 22:35:00", "b": 502.4}, {"a": "2025-03-17 22:40:00", "b": 500.6}, {"a": "2025-03-17 22:45:00", "b": 488.4}, {"a": "2025-03-17 22:50:00", "b": 499.5}, {"a": "2025-03-17 22:55:00", "b": 499.0}, {"a": "2025-03-17 23:00:00", "b": 488.6}, {"a": "2025-03-17 23:05:00", "b": 488.0}, {"a": "2025-03-17 23:10:00", "b": 487.0}, {"a": "2025-03-17 23:15:00", "b": 483.4}, {"a": "2025-03-17 23:20:00", "b": 486.25}, {"a": "2025-03-17 23:25:00", "b": 490.8}, {"a": "2025-03-17 23:30:00", "b": 493.8}, {"a": "2025-03-17 23:35:00", "b": 500.0}, {"a": "2025-03-17 23:40:00", "b": 497.6}, {"a": "2025-03-17 23:45:00", "b": 490.5}, {"a": "2025-03-17 23:50:00", "b": 482.3333333333333}, {"a": "2025-03-17 23:55:00", "b": 490.4}, {"a": "2025-03-18 00:00:00", "b": 488.2}, {"a": "2025-03-18 00:05:00", "b": 480.25}, {"a": "2025-03-18 00:10:00", "b": 476.5}, {"a": "2025-03-18 00:15:00", "b": 487.5}, {"a": "2025-03-18 00:20:00", "b": 483.0}, {"a": "2025-03-18 00:25:00", "b": 479.0}, {"a": "2025-03-18 00:30:00", "b": 474.0}, {"a": "2025-03-18 00:35:00", "b": 475.0}, {"a": "2025-03-18 00:40:00", "b": 481.25}, {"a": "2025-03-18 00:45:00", "b": 477.0}, {"a": "2025-03-18 00:50:00", "b": 475.6}, {"a": "2025-03-18 00:55:00", "b": 472.0}, {"a": "2025-03-18 01:00:00", "b": 464.2}, {"a": "2025-03-18 01:05:00", "b": 462.0}, {"a": "2025-03-18 01:10:00", "b": 454.5}, {"a": "2025-03-18 01:15:00", "b": 434.4}, {"a": "2025-03-18 01:20:00", "b": 430.5}, {"a": "2025-03-18 01:25:00", "b": 440.2}, {"a": "2025-03-18 01:30:00", "b": 457.4}, {"a": "2025-03-18 01:35:00", "b": 455.0}, {"a": "2025-03-18 01:40:00", "b": 457.6}, {"a": "2025-03-18 01:45:00", "b": 468.75}, {"a": "2025-03-18 01:50:00", "b": 464.0}, {"a": "2025-03-18 01:55:00", "b": 474.8}, {"a": "2025-03-18 02:00:00", "b": 464.8}, {"a": "2025-03-18 02:05:00", "b": 459.2}, {"a": "2025-03-18 02:10:00", "b": 460.5}, {"a": "2025-03-18 02:15:00", "b": 463.5}, {"a": "2025-03-18 02:20:00", "b": 458.0}, {"a": "2025-03-18 02:25:00", "b": 460.8}, {"a": "2025-03-18 02:30:00", "b": 434.0}, {"a": "2025-03-18 02:35:00", "b": 417.0}, {"a": "2025-03-18 02:40:00", "b": 424.0}, {"a": "2025-03-18 02:45:00", "b": 440.8}, {"a": "2025-03-18 02:50:00", "b": 436.0}, {"a": "2025-03-18 02:55:00", "b": 431.2}, {"a": "2025-03-18 03:00:00", "b": 432.4}, {"a": "2025-03-18 03:05:00", "b": 438.75}, {"a": "2025-03-18 03:10:00", "b": 425.2}, {"a": "2025-03-18 03:15:00", "b": 419.0}, {"a": "2025-03-18 03:20:00", "b": 426.2}, {"a": "2025-03-18 03:25:00", "b": 425.0}, {"a": "2025-03-18 03:30:00", "b": 415.2}, {"a": "2025-03-18 03:35:00", "b": 428.0}, {"a": "2025-03-18 03:40:00", "b": 418.75}, {"a": "2025-03-18 03:45:00", "b": 420.0}, {"a": "2025-03-18 03:50:00", "b": 411.0}, {"a": "2025-03-18 03:55:00", "b": 405.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    