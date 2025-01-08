
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-07 13:00:00", "b": 402.5}, {"a": "2025-01-07 13:05:00", "b": 402.0}, {"a": "2025-01-07 13:10:00", "b": 402.4}, {"a": "2025-01-07 13:15:00", "b": 402.5}, {"a": "2025-01-07 13:20:00", "b": 401.75}, {"a": "2025-01-07 13:25:00", "b": 402.25}, {"a": "2025-01-07 13:30:00", "b": 401.75}, {"a": "2025-01-07 13:35:00", "b": 402.0}, {"a": "2025-01-07 13:40:00", "b": 401.75}, {"a": "2025-01-07 13:45:00", "b": 401.8}, {"a": "2025-01-07 13:50:00", "b": 401.5}, {"a": "2025-01-07 13:55:00", "b": 400.0}, {"a": "2025-01-07 14:00:00", "b": 401.5}, {"a": "2025-01-07 14:05:00", "b": 401.4}, {"a": "2025-01-07 14:10:00", "b": 401.3333333333333}, {"a": "2025-01-07 14:15:00", "b": 401.3333333333333}, {"a": "2025-01-07 14:20:00", "b": 403.0}, {"a": "2025-01-07 14:25:00", "b": 401.3333333333333}, {"a": "2025-01-07 14:30:00", "b": 402.5}, {"a": "2025-01-07 14:35:00", "b": 402.25}, {"a": "2025-01-07 14:40:00", "b": 401.75}, {"a": "2025-01-07 14:45:00", "b": 401.5}, {"a": "2025-01-07 14:50:00", "b": 402.3333333333333}, {"a": "2025-01-07 14:55:00", "b": 401.75}, {"a": "2025-01-07 15:00:00", "b": 401.0}, {"a": "2025-01-07 15:05:00", "b": 401.5}, {"a": "2025-01-07 15:10:00", "b": 402.0}, {"a": "2025-01-07 15:15:00", "b": 402.5}, {"a": "2025-01-07 15:20:00", "b": 402.0}, {"a": "2025-01-07 15:25:00", "b": 402.25}, {"a": "2025-01-07 15:30:00", "b": 402.25}, {"a": "2025-01-07 15:35:00", "b": 401.6666666666667}, {"a": "2025-01-07 15:40:00", "b": 402.0}, {"a": "2025-01-07 15:45:00", "b": 401.8}, {"a": "2025-01-07 15:50:00", "b": 402.0}, {"a": "2025-01-07 15:55:00", "b": 402.2}, {"a": "2025-01-07 16:00:00", "b": 402.5}, {"a": "2025-01-07 16:05:00", "b": 402.75}, {"a": "2025-01-07 16:10:00", "b": 402.25}, {"a": "2025-01-07 16:15:00", "b": 401.5}, {"a": "2025-01-07 16:20:00", "b": 401.25}, {"a": "2025-01-07 16:25:00", "b": 401.75}, {"a": "2025-01-07 16:30:00", "b": 402.0}, {"a": "2025-01-07 16:35:00", "b": 402.8}, {"a": "2025-01-07 16:40:00", "b": 402.0}, {"a": "2025-01-07 16:45:00", "b": 401.8}, {"a": "2025-01-07 16:50:00", "b": 402.6666666666667}, {"a": "2025-01-07 16:55:00", "b": 402.0}, {"a": "2025-01-07 17:00:00", "b": 402.4}, {"a": "2025-01-07 17:05:00", "b": 402.75}, {"a": "2025-01-07 17:10:00", "b": 402.0}, {"a": "2025-01-07 17:15:00", "b": 402.0}, {"a": "2025-01-07 17:20:00", "b": 402.0}, {"a": "2025-01-07 17:25:00", "b": 401.4}, {"a": "2025-01-07 17:30:00", "b": 402.0}, {"a": "2025-01-07 17:35:00", "b": 402.0}, {"a": "2025-01-07 17:40:00", "b": 401.6666666666667}, {"a": "2025-01-07 17:45:00", "b": 402.0}, {"a": "2025-01-07 17:50:00", "b": 402.0}, {"a": "2025-01-07 17:55:00", "b": 402.0}, {"a": "2025-01-07 18:00:00", "b": 402.0}, {"a": "2025-01-07 18:05:00", "b": 401.6}, {"a": "2025-01-07 18:10:00", "b": 401.75}, {"a": "2025-01-07 18:15:00", "b": 402.0}, {"a": "2025-01-07 18:20:00", "b": 401.6666666666667}, {"a": "2025-01-07 18:25:00", "b": 403.3333333333333}, {"a": "2025-01-07 18:30:00", "b": 424.2}, {"a": "2025-01-07 18:35:00", "b": 449.75}, {"a": "2025-01-07 18:40:00", "b": 447.2}, {"a": "2025-01-07 18:45:00", "b": 439.25}, {"a": "2025-01-07 18:50:00", "b": 434.6}, {"a": "2025-01-07 18:55:00", "b": 431.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    