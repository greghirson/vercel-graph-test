
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-13 12:00:00", "b": 401.6666666666667}, {"a": "2025-01-13 12:05:00", "b": 401.0}, {"a": "2025-01-13 12:10:00", "b": 402.0}, {"a": "2025-01-13 13:05:00", "b": 401.0}, {"a": "2025-01-13 13:10:00", "b": 402.3333333333333}, {"a": "2025-01-13 13:15:00", "b": 402.0}, {"a": "2025-01-13 13:20:00", "b": 401.0}, {"a": "2025-01-13 13:25:00", "b": 402.0}, {"a": "2025-01-13 13:30:00", "b": 402.0}, {"a": "2025-01-13 13:35:00", "b": 401.75}, {"a": "2025-01-13 13:40:00", "b": 401.6666666666667}, {"a": "2025-01-13 13:45:00", "b": 403.6666666666667}, {"a": "2025-01-13 13:50:00", "b": 401.5}, {"a": "2025-01-13 13:55:00", "b": 403.5}, {"a": "2025-01-13 14:10:00", "b": 400.5}, {"a": "2025-01-13 14:15:00", "b": 403.5}, {"a": "2025-01-13 14:20:00", "b": 401.25}, {"a": "2025-01-13 14:25:00", "b": 402.0}, {"a": "2025-01-13 14:30:00", "b": 402.0}, {"a": "2025-01-13 14:35:00", "b": 401.6}, {"a": "2025-01-13 14:40:00", "b": 402.25}, {"a": "2025-01-13 17:50:00", "b": 408.0}, {"a": "2025-01-13 17:55:00", "b": 405.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    