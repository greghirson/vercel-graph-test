
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-20 11:00:00", "b": 425.4}, {"a": "2025-01-20 11:05:00", "b": 411.0}, {"a": "2025-01-20 11:10:00", "b": 426.4}, {"a": "2025-01-20 11:15:00", "b": 424.8}, {"a": "2025-01-20 11:20:00", "b": 420.6}, {"a": "2025-01-20 11:25:00", "b": 429.4}, {"a": "2025-01-20 11:30:00", "b": 442.5}, {"a": "2025-01-20 11:35:00", "b": 457.25}, {"a": "2025-01-20 11:40:00", "b": 454.2}, {"a": "2025-01-20 11:45:00", "b": 444.4}, {"a": "2025-01-20 11:50:00", "b": 462.6666666666667}, {"a": "2025-01-20 11:55:00", "b": 468.2}, {"a": "2025-01-20 12:00:00", "b": 460.4}, {"a": "2025-01-20 12:05:00", "b": 453.8}, {"a": "2025-01-20 12:10:00", "b": 430.5}, {"a": "2025-01-20 12:15:00", "b": 436.5}, {"a": "2025-01-20 12:20:00", "b": 454.3333333333333}, {"a": "2025-01-20 12:25:00", "b": 462.25}, {"a": "2025-01-20 12:30:00", "b": 458.3333333333333}, {"a": "2025-01-20 12:35:00", "b": 457.8}, {"a": "2025-01-20 12:40:00", "b": 440.0}, {"a": "2025-01-20 12:45:00", "b": 407.2}, {"a": "2025-01-20 12:50:00", "b": 401.5}, {"a": "2025-01-20 12:55:00", "b": 404.0}, {"a": "2025-01-20 13:00:00", "b": 403.4}, {"a": "2025-01-20 13:05:00", "b": 403.5}, {"a": "2025-01-20 13:10:00", "b": 402.6}, {"a": "2025-01-20 13:15:00", "b": 401.0}, {"a": "2025-01-20 13:20:00", "b": 402.3333333333333}, {"a": "2025-01-20 13:25:00", "b": 402.0}, {"a": "2025-01-20 13:30:00", "b": 402.5}, {"a": "2025-01-20 13:35:00", "b": 403.25}, {"a": "2025-01-20 13:40:00", "b": 402.5}, {"a": "2025-01-20 13:45:00", "b": 400.75}, {"a": "2025-01-20 13:50:00", "b": 401.75}, {"a": "2025-01-20 13:55:00", "b": 403.25}, {"a": "2025-01-20 14:00:00", "b": 401.5}, {"a": "2025-01-20 14:05:00", "b": 402.5}, {"a": "2025-01-20 14:10:00", "b": 402.0}, {"a": "2025-01-20 14:15:00", "b": 401.0}, {"a": "2025-01-20 14:20:00", "b": 401.8}, {"a": "2025-01-20 14:25:00", "b": 402.0}, {"a": "2025-01-20 14:30:00", "b": 402.0}, {"a": "2025-01-20 14:35:00", "b": 402.0}, {"a": "2025-01-20 14:40:00", "b": 402.25}, {"a": "2025-01-20 14:45:00", "b": 401.3333333333333}, {"a": "2025-01-20 14:50:00", "b": 402.5}, {"a": "2025-01-20 14:55:00", "b": 402.0}, {"a": "2025-01-20 15:00:00", "b": 402.3333333333333}, {"a": "2025-01-20 15:05:00", "b": 402.0}, {"a": "2025-01-20 15:10:00", "b": 402.6}, {"a": "2025-01-20 15:15:00", "b": 403.0}, {"a": "2025-01-20 15:20:00", "b": 401.2}, {"a": "2025-01-20 15:25:00", "b": 401.75}, {"a": "2025-01-20 15:30:00", "b": 402.0}, {"a": "2025-01-20 15:35:00", "b": 401.8}, {"a": "2025-01-20 15:40:00", "b": 402.6}, {"a": "2025-01-20 15:45:00", "b": 402.5}, {"a": "2025-01-20 15:50:00", "b": 401.3333333333333}, {"a": "2025-01-20 15:55:00", "b": 403.0}, {"a": "2025-01-20 16:00:00", "b": 401.3333333333333}, {"a": "2025-01-20 16:05:00", "b": 401.8}, {"a": "2025-01-20 16:10:00", "b": 401.6}, {"a": "2025-01-20 16:15:00", "b": 402.0}, {"a": "2025-01-20 16:20:00", "b": 401.5}, {"a": "2025-01-20 16:25:00", "b": 403.0}, {"a": "2025-01-20 16:30:00", "b": 402.5}, {"a": "2025-01-20 16:35:00", "b": 402.8}, {"a": "2025-01-20 16:40:00", "b": 402.6}, {"a": "2025-01-20 16:45:00", "b": 401.75}, {"a": "2025-01-20 16:50:00", "b": 402.2}, {"a": "2025-01-20 16:55:00", "b": 401.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    