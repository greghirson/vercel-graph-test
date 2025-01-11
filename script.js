
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-11 03:00:00", "b": 401.6666666666667}, {"a": "2025-01-11 03:05:00", "b": 402.8}, {"a": "2025-01-11 03:10:00", "b": 402.25}, {"a": "2025-01-11 03:15:00", "b": 401.5}, {"a": "2025-01-11 03:20:00", "b": 401.75}, {"a": "2025-01-11 03:25:00", "b": 401.0}, {"a": "2025-01-11 03:30:00", "b": 402.3333333333333}, {"a": "2025-01-11 03:35:00", "b": 401.4}, {"a": "2025-01-11 03:40:00", "b": 402.0}, {"a": "2025-01-11 03:45:00", "b": 401.75}, {"a": "2025-01-11 03:50:00", "b": 402.6666666666667}, {"a": "2025-01-11 03:55:00", "b": 402.0}, {"a": "2025-01-11 04:00:00", "b": 402.5}, {"a": "2025-01-11 04:05:00", "b": 402.0}, {"a": "2025-01-11 04:10:00", "b": 401.5}, {"a": "2025-01-11 04:15:00", "b": 401.6}, {"a": "2025-01-11 04:20:00", "b": 400.8}, {"a": "2025-01-11 04:25:00", "b": 401.8}, {"a": "2025-01-11 04:30:00", "b": 402.75}, {"a": "2025-01-11 04:35:00", "b": 402.4}, {"a": "2025-01-11 04:40:00", "b": 401.6666666666667}, {"a": "2025-01-11 04:45:00", "b": 401.75}, {"a": "2025-01-11 04:50:00", "b": 400.0}, {"a": "2025-01-11 04:55:00", "b": 402.4}, {"a": "2025-01-11 05:00:00", "b": 401.2}, {"a": "2025-01-11 05:05:00", "b": 401.75}, {"a": "2025-01-11 05:10:00", "b": 401.4}, {"a": "2025-01-11 05:15:00", "b": 402.0}, {"a": "2025-01-11 05:20:00", "b": 401.8}, {"a": "2025-01-11 05:25:00", "b": 401.75}, {"a": "2025-01-11 05:30:00", "b": 402.0}, {"a": "2025-01-11 05:35:00", "b": 401.8}, {"a": "2025-01-11 05:40:00", "b": 401.3333333333333}, {"a": "2025-01-11 05:45:00", "b": 401.3333333333333}, {"a": "2025-01-11 05:50:00", "b": 401.6666666666667}, {"a": "2025-01-11 05:55:00", "b": 402.5}, {"a": "2025-01-11 06:00:00", "b": 402.0}, {"a": "2025-01-11 06:05:00", "b": 401.75}, {"a": "2025-01-11 06:10:00", "b": 402.75}, {"a": "2025-01-11 06:15:00", "b": 401.6666666666667}, {"a": "2025-01-11 06:20:00", "b": 401.25}, {"a": "2025-01-11 06:25:00", "b": 402.25}, {"a": "2025-01-11 06:30:00", "b": 403.25}, {"a": "2025-01-11 06:35:00", "b": 400.75}, {"a": "2025-01-11 06:40:00", "b": 402.5}, {"a": "2025-01-11 06:45:00", "b": 401.75}, {"a": "2025-01-11 06:50:00", "b": 401.8}, {"a": "2025-01-11 06:55:00", "b": 403.0}, {"a": "2025-01-11 07:00:00", "b": 401.25}, {"a": "2025-01-11 07:05:00", "b": 401.75}, {"a": "2025-01-11 07:10:00", "b": 402.75}, {"a": "2025-01-11 07:15:00", "b": 403.0}, {"a": "2025-01-11 07:20:00", "b": 401.6}, {"a": "2025-01-11 07:25:00", "b": 402.6666666666667}, {"a": "2025-01-11 07:30:00", "b": 403.0}, {"a": "2025-01-11 07:35:00", "b": 402.5}, {"a": "2025-01-11 07:40:00", "b": 401.2}, {"a": "2025-01-11 07:45:00", "b": 403.0}, {"a": "2025-01-11 07:50:00", "b": 404.0}, {"a": "2025-01-11 07:55:00", "b": 403.75}, {"a": "2025-01-11 08:00:00", "b": 402.8}, {"a": "2025-01-11 08:05:00", "b": 404.3333333333333}, {"a": "2025-01-11 08:10:00", "b": 404.0}, {"a": "2025-01-11 08:15:00", "b": 404.0}, {"a": "2025-01-11 08:20:00", "b": 403.2}, {"a": "2025-01-11 08:25:00", "b": 403.5}, {"a": "2025-01-11 08:30:00", "b": 403.0}, {"a": "2025-01-11 08:35:00", "b": 403.5}, {"a": "2025-01-11 08:40:00", "b": 403.6666666666667}, {"a": "2025-01-11 08:45:00", "b": 403.0}, {"a": "2025-01-11 08:50:00", "b": 403.5}, {"a": "2025-01-11 08:55:00", "b": 401.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    