
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-16 12:00:00", "b": 400.5}, {"a": "2025-01-16 12:05:00", "b": 401.2}, {"a": "2025-01-16 12:10:00", "b": 402.0}, {"a": "2025-01-16 12:15:00", "b": 401.0}, {"a": "2025-01-16 12:20:00", "b": 401.5}, {"a": "2025-01-16 12:25:00", "b": 401.75}, {"a": "2025-01-16 12:30:00", "b": 401.75}, {"a": "2025-01-16 12:35:00", "b": 401.5}, {"a": "2025-01-16 12:40:00", "b": 402.0}, {"a": "2025-01-16 12:45:00", "b": 402.4}, {"a": "2025-01-16 12:50:00", "b": 402.0}, {"a": "2025-01-16 12:55:00", "b": 401.5}, {"a": "2025-01-16 13:00:00", "b": 403.0}, {"a": "2025-01-16 13:05:00", "b": 401.8}, {"a": "2025-01-16 13:10:00", "b": 401.75}, {"a": "2025-01-16 13:15:00", "b": 401.75}, {"a": "2025-01-16 13:20:00", "b": 401.8}, {"a": "2025-01-16 13:25:00", "b": 402.5}, {"a": "2025-01-16 13:30:00", "b": 402.0}, {"a": "2025-01-16 13:35:00", "b": 401.8}, {"a": "2025-01-16 13:40:00", "b": 401.5}, {"a": "2025-01-16 13:45:00", "b": 401.5}, {"a": "2025-01-16 13:50:00", "b": 401.6666666666667}, {"a": "2025-01-16 13:55:00", "b": 402.5}, {"a": "2025-01-16 14:00:00", "b": 402.5}, {"a": "2025-01-16 14:05:00", "b": 402.5}, {"a": "2025-01-16 14:10:00", "b": 401.0}, {"a": "2025-01-16 14:15:00", "b": 402.4}, {"a": "2025-01-16 14:20:00", "b": 401.6666666666667}, {"a": "2025-01-16 14:25:00", "b": 400.75}, {"a": "2025-01-16 14:30:00", "b": 402.5}, {"a": "2025-01-16 14:35:00", "b": 401.0}, {"a": "2025-01-16 14:40:00", "b": 401.0}, {"a": "2025-01-16 14:45:00", "b": 402.0}, {"a": "2025-01-16 14:50:00", "b": 401.4}, {"a": "2025-01-16 14:55:00", "b": 401.75}, {"a": "2025-01-16 15:00:00", "b": 401.0}, {"a": "2025-01-16 15:05:00", "b": 402.0}, {"a": "2025-01-16 15:10:00", "b": 400.75}, {"a": "2025-01-16 15:15:00", "b": 402.25}, {"a": "2025-01-16 15:20:00", "b": 401.6666666666667}, {"a": "2025-01-16 15:25:00", "b": 402.8}, {"a": "2025-01-16 15:30:00", "b": 401.75}, {"a": "2025-01-16 15:35:00", "b": 402.0}, {"a": "2025-01-16 15:40:00", "b": 401.8}, {"a": "2025-01-16 15:45:00", "b": 401.5}, {"a": "2025-01-16 15:50:00", "b": 402.5}, {"a": "2025-01-16 15:55:00", "b": 402.0}, {"a": "2025-01-16 16:00:00", "b": 402.25}, {"a": "2025-01-16 16:05:00", "b": 402.0}, {"a": "2025-01-16 16:10:00", "b": 401.75}, {"a": "2025-01-16 16:15:00", "b": 401.4}, {"a": "2025-01-16 16:20:00", "b": 400.5}, {"a": "2025-01-16 16:25:00", "b": 402.25}, {"a": "2025-01-16 16:30:00", "b": 401.75}, {"a": "2025-01-16 16:35:00", "b": 402.0}, {"a": "2025-01-16 16:40:00", "b": 402.5}, {"a": "2025-01-16 16:45:00", "b": 402.75}, {"a": "2025-01-16 16:50:00", "b": 402.2}, {"a": "2025-01-16 16:55:00", "b": 401.75}, {"a": "2025-01-16 17:00:00", "b": 402.0}, {"a": "2025-01-16 17:05:00", "b": 402.4}, {"a": "2025-01-16 17:10:00", "b": 402.25}, {"a": "2025-01-16 17:15:00", "b": 402.8}, {"a": "2025-01-16 17:20:00", "b": 401.3333333333333}, {"a": "2025-01-16 17:25:00", "b": 402.3333333333333}, {"a": "2025-01-16 17:30:00", "b": 401.6666666666667}, {"a": "2025-01-16 17:35:00", "b": 405.5}, {"a": "2025-01-16 17:40:00", "b": 405.5}, {"a": "2025-01-16 17:45:00", "b": 406.5}, {"a": "2025-01-16 17:55:00", "b": 409.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    