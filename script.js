
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-31 10:00:00", "b": 674.8}, {"a": "2025-03-31 10:05:00", "b": 667.8}, {"a": "2025-03-31 10:10:00", "b": 407.4}, {"a": "2025-03-31 10:15:00", "b": 404.5}, {"a": "2025-03-31 10:20:00", "b": 402.5}, {"a": "2025-03-31 10:25:00", "b": 403.0}, {"a": "2025-03-31 10:30:00", "b": 403.0}, {"a": "2025-03-31 10:35:00", "b": 400.5}, {"a": "2025-03-31 10:40:00", "b": 402.0}, {"a": "2025-03-31 10:45:00", "b": 403.0}, {"a": "2025-03-31 10:50:00", "b": 402.6}, {"a": "2025-03-31 10:55:00", "b": 401.6666666666667}, {"a": "2025-03-31 11:00:00", "b": 402.6666666666667}, {"a": "2025-03-31 11:05:00", "b": 401.2}, {"a": "2025-03-31 11:10:00", "b": 403.0}, {"a": "2025-03-31 11:15:00", "b": 402.5}, {"a": "2025-03-31 11:20:00", "b": 402.25}, {"a": "2025-03-31 11:25:00", "b": 401.25}, {"a": "2025-03-31 11:30:00", "b": 402.6666666666667}, {"a": "2025-03-31 11:35:00", "b": 401.75}, {"a": "2025-03-31 11:40:00", "b": 401.0}, {"a": "2025-03-31 11:45:00", "b": 402.75}, {"a": "2025-03-31 11:50:00", "b": 401.5}, {"a": "2025-03-31 11:55:00", "b": 401.4}, {"a": "2025-03-31 12:00:00", "b": 402.25}, {"a": "2025-03-31 12:05:00", "b": 402.75}, {"a": "2025-03-31 12:10:00", "b": 401.0}, {"a": "2025-03-31 12:15:00", "b": 402.25}, {"a": "2025-03-31 12:20:00", "b": 401.2}, {"a": "2025-03-31 12:25:00", "b": 401.25}, {"a": "2025-03-31 12:30:00", "b": 402.75}, {"a": "2025-03-31 12:35:00", "b": 402.0}, {"a": "2025-03-31 12:40:00", "b": 402.6}, {"a": "2025-03-31 12:45:00", "b": 401.25}, {"a": "2025-03-31 12:50:00", "b": 401.0}, {"a": "2025-03-31 12:55:00", "b": 401.6666666666667}, {"a": "2025-03-31 13:00:00", "b": 401.3333333333333}, {"a": "2025-03-31 13:05:00", "b": 402.6666666666667}, {"a": "2025-03-31 13:10:00", "b": 403.5}, {"a": "2025-03-31 13:15:00", "b": 401.6666666666667}, {"a": "2025-03-31 13:20:00", "b": 401.0}, {"a": "2025-03-31 13:25:00", "b": 401.6666666666667}, {"a": "2025-03-31 13:30:00", "b": 401.75}, {"a": "2025-03-31 13:35:00", "b": 402.0}, {"a": "2025-03-31 13:40:00", "b": 403.25}, {"a": "2025-03-31 13:45:00", "b": 401.6666666666667}, {"a": "2025-03-31 13:50:00", "b": 402.2}, {"a": "2025-03-31 13:55:00", "b": 401.75}, {"a": "2025-03-31 14:00:00", "b": 402.0}, {"a": "2025-03-31 14:05:00", "b": 402.75}, {"a": "2025-03-31 14:10:00", "b": 401.6666666666667}, {"a": "2025-03-31 14:15:00", "b": 401.2}, {"a": "2025-03-31 14:20:00", "b": 402.5}, {"a": "2025-03-31 14:25:00", "b": 401.5}, {"a": "2025-03-31 14:30:00", "b": 401.75}, {"a": "2025-03-31 14:35:00", "b": 401.75}, {"a": "2025-03-31 14:40:00", "b": 401.6}, {"a": "2025-03-31 14:45:00", "b": 401.0}, {"a": "2025-03-31 14:50:00", "b": 401.25}, {"a": "2025-03-31 14:55:00", "b": 401.75}, {"a": "2025-03-31 15:00:00", "b": 401.25}, {"a": "2025-03-31 15:05:00", "b": 402.25}, {"a": "2025-03-31 15:10:00", "b": 401.75}, {"a": "2025-03-31 15:15:00", "b": 402.2}, {"a": "2025-03-31 15:20:00", "b": 402.75}, {"a": "2025-03-31 15:25:00", "b": 401.75}, {"a": "2025-03-31 15:30:00", "b": 401.6666666666667}, {"a": "2025-03-31 15:35:00", "b": 402.6}, {"a": "2025-03-31 15:40:00", "b": 401.6}, {"a": "2025-03-31 15:45:00", "b": 401.8}, {"a": "2025-03-31 15:50:00", "b": 400.5}, {"a": "2025-03-31 15:55:00", "b": 402.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    