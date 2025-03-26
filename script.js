
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-25 19:00:00", "b": 400.75}, {"a": "2025-03-25 19:05:00", "b": 402.4}, {"a": "2025-03-25 19:10:00", "b": 403.2}, {"a": "2025-03-25 19:15:00", "b": 402.75}, {"a": "2025-03-25 19:20:00", "b": 402.25}, {"a": "2025-03-25 19:25:00", "b": 401.0}, {"a": "2025-03-25 19:30:00", "b": 403.0}, {"a": "2025-03-25 19:35:00", "b": 405.3333333333333}, {"a": "2025-03-25 19:40:00", "b": 404.0}, {"a": "2025-03-25 19:45:00", "b": 401.3333333333333}, {"a": "2025-03-25 19:50:00", "b": 402.0}, {"a": "2025-03-25 19:55:00", "b": 401.25}, {"a": "2025-03-25 20:00:00", "b": 402.2}, {"a": "2025-03-25 20:05:00", "b": 403.5}, {"a": "2025-03-25 20:10:00", "b": 403.0}, {"a": "2025-03-25 20:15:00", "b": 403.5}, {"a": "2025-03-25 20:20:00", "b": 403.0}, {"a": "2025-03-25 20:25:00", "b": 402.0}, {"a": "2025-03-25 20:30:00", "b": 402.0}, {"a": "2025-03-25 20:35:00", "b": 401.0}, {"a": "2025-03-25 20:40:00", "b": 402.0}, {"a": "2025-03-25 20:45:00", "b": 402.3333333333333}, {"a": "2025-03-25 20:50:00", "b": 403.3333333333333}, {"a": "2025-03-25 20:55:00", "b": 403.5}, {"a": "2025-03-25 21:00:00", "b": 402.0}, {"a": "2025-03-25 21:05:00", "b": 403.5}, {"a": "2025-03-25 21:10:00", "b": 403.3333333333333}, {"a": "2025-03-25 21:15:00", "b": 405.0}, {"a": "2025-03-25 21:20:00", "b": 404.5}, {"a": "2025-03-25 21:25:00", "b": 403.0}, {"a": "2025-03-25 21:30:00", "b": 403.5}, {"a": "2025-03-25 21:35:00", "b": 401.5}, {"a": "2025-03-25 21:40:00", "b": 401.75}, {"a": "2025-03-25 21:45:00", "b": 402.75}, {"a": "2025-03-25 21:50:00", "b": 403.5}, {"a": "2025-03-25 21:55:00", "b": 403.3333333333333}, {"a": "2025-03-25 22:00:00", "b": 402.3333333333333}, {"a": "2025-03-25 22:05:00", "b": 402.5}, {"a": "2025-03-25 22:10:00", "b": 402.0}, {"a": "2025-03-25 22:15:00", "b": 402.0}, {"a": "2025-03-25 22:20:00", "b": 402.0}, {"a": "2025-03-25 22:25:00", "b": 404.0}, {"a": "2025-03-25 22:30:00", "b": 407.5}, {"a": "2025-03-25 22:35:00", "b": 406.0}, {"a": "2025-03-25 22:40:00", "b": 404.0}, {"a": "2025-03-25 22:45:00", "b": 405.0}, {"a": "2025-03-25 22:50:00", "b": 405.5}, {"a": "2025-03-25 22:55:00", "b": 405.3333333333333}, {"a": "2025-03-25 23:00:00", "b": 406.0}, {"a": "2025-03-25 23:05:00", "b": 407.5}, {"a": "2025-03-25 23:10:00", "b": 405.6666666666667}, {"a": "2025-03-25 23:15:00", "b": 407.0}, {"a": "2025-03-25 23:20:00", "b": 405.6666666666667}, {"a": "2025-03-25 23:25:00", "b": 402.5}, {"a": "2025-03-25 23:30:00", "b": 403.0}, {"a": "2025-03-25 23:35:00", "b": 401.5}, {"a": "2025-03-25 23:40:00", "b": 403.0}, {"a": "2025-03-25 23:55:00", "b": 402.6}, {"a": "2025-03-26 00:00:00", "b": 401.3333333333333}, {"a": "2025-03-26 00:05:00", "b": 402.5}, {"a": "2025-03-26 00:10:00", "b": 402.3333333333333}, {"a": "2025-03-26 00:15:00", "b": 402.0}, {"a": "2025-03-26 00:20:00", "b": 403.0}, {"a": "2025-03-26 00:25:00", "b": 402.6666666666667}, {"a": "2025-03-26 00:30:00", "b": 400.75}, {"a": "2025-03-26 00:35:00", "b": 403.0}, {"a": "2025-03-26 00:40:00", "b": 406.3333333333333}, {"a": "2025-03-26 00:45:00", "b": 402.5}, {"a": "2025-03-26 00:50:00", "b": 403.3333333333333}, {"a": "2025-03-26 00:55:00", "b": 402.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    