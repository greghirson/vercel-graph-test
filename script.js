
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-09 11:00:00", "b": 401.75}, {"a": "2024-12-09 11:05:00", "b": 402.25}, {"a": "2024-12-09 11:10:00", "b": 401.6}, {"a": "2024-12-09 11:15:00", "b": 402.75}, {"a": "2024-12-09 11:20:00", "b": 401.75}, {"a": "2024-12-09 11:25:00", "b": 402.0}, {"a": "2024-12-09 11:30:00", "b": 401.5}, {"a": "2024-12-09 11:35:00", "b": 401.3333333333333}, {"a": "2024-12-09 11:40:00", "b": 402.3333333333333}, {"a": "2024-12-09 11:45:00", "b": 402.2}, {"a": "2024-12-09 11:50:00", "b": 402.4}, {"a": "2024-12-09 11:55:00", "b": 402.0}, {"a": "2024-12-09 12:00:00", "b": 401.5}, {"a": "2024-12-09 12:05:00", "b": 402.2}, {"a": "2024-12-09 12:10:00", "b": 401.6}, {"a": "2024-12-09 12:15:00", "b": 401.5}, {"a": "2024-12-09 12:20:00", "b": 402.25}, {"a": "2024-12-09 12:25:00", "b": 402.75}, {"a": "2024-12-09 12:30:00", "b": 401.75}, {"a": "2024-12-09 12:35:00", "b": 402.0}, {"a": "2024-12-09 12:40:00", "b": 402.0}, {"a": "2024-12-09 12:45:00", "b": 401.4}, {"a": "2024-12-09 12:50:00", "b": 401.4}, {"a": "2024-12-09 12:55:00", "b": 402.25}, {"a": "2024-12-09 13:00:00", "b": 403.6666666666667}, {"a": "2024-12-09 13:05:00", "b": 401.6}, {"a": "2024-12-09 13:10:00", "b": 401.2}, {"a": "2024-12-09 13:15:00", "b": 404.0}, {"a": "2024-12-09 13:20:00", "b": 401.75}, {"a": "2024-12-09 13:25:00", "b": 401.25}, {"a": "2024-12-09 13:30:00", "b": 402.0}, {"a": "2024-12-09 13:35:00", "b": 401.5}, {"a": "2024-12-09 13:40:00", "b": 402.2}, {"a": "2024-12-09 13:45:00", "b": 401.5}, {"a": "2024-12-09 13:50:00", "b": 402.0}, {"a": "2024-12-09 13:55:00", "b": 402.4}, {"a": "2024-12-09 14:00:00", "b": 403.0}, {"a": "2024-12-09 14:05:00", "b": 402.6}, {"a": "2024-12-09 14:10:00", "b": 400.75}, {"a": "2024-12-09 14:15:00", "b": 401.6}, {"a": "2024-12-09 14:20:00", "b": 401.5}, {"a": "2024-12-09 14:25:00", "b": 402.3333333333333}, {"a": "2024-12-09 14:30:00", "b": 401.6666666666667}, {"a": "2024-12-09 14:35:00", "b": 402.0}, {"a": "2024-12-09 14:40:00", "b": 401.6666666666667}, {"a": "2024-12-09 14:45:00", "b": 401.2}, {"a": "2024-12-09 14:50:00", "b": 401.8}, {"a": "2024-12-09 14:55:00", "b": 402.75}, {"a": "2024-12-09 15:00:00", "b": 401.5}, {"a": "2024-12-09 15:05:00", "b": 402.2}, {"a": "2024-12-09 15:10:00", "b": 402.0}, {"a": "2024-12-09 15:15:00", "b": 400.8}, {"a": "2024-12-09 15:20:00", "b": 401.8}, {"a": "2024-12-09 15:25:00", "b": 402.2}, {"a": "2024-12-09 15:30:00", "b": 402.2}, {"a": "2024-12-09 15:35:00", "b": 402.6}, {"a": "2024-12-09 15:40:00", "b": 401.25}, {"a": "2024-12-09 15:45:00", "b": 403.0}, {"a": "2024-12-09 15:50:00", "b": 401.25}, {"a": "2024-12-09 15:55:00", "b": 402.0}, {"a": "2024-12-09 16:00:00", "b": 403.0}, {"a": "2024-12-09 16:05:00", "b": 402.0}, {"a": "2024-12-09 16:10:00", "b": 402.6}, {"a": "2024-12-09 16:15:00", "b": 401.6}, {"a": "2024-12-09 16:20:00", "b": 402.3333333333333}, {"a": "2024-12-09 16:25:00", "b": 402.0}, {"a": "2024-12-09 16:30:00", "b": 401.75}, {"a": "2024-12-09 16:35:00", "b": 401.6}, {"a": "2024-12-09 16:40:00", "b": 402.75}, {"a": "2024-12-09 16:45:00", "b": 402.0}, {"a": "2024-12-09 16:50:00", "b": 401.8}, {"a": "2024-12-09 16:55:00", "b": 402.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    