
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-06 04:00:00", "b": 420.6666666666667}, {"a": "2025-04-06 04:05:00", "b": 412.75}, {"a": "2025-04-06 04:10:00", "b": 424.6}, {"a": "2025-04-06 04:15:00", "b": 417.8}, {"a": "2025-04-06 04:20:00", "b": 410.75}, {"a": "2025-04-06 04:25:00", "b": 415.0}, {"a": "2025-04-06 04:30:00", "b": 409.0}, {"a": "2025-04-06 04:35:00", "b": 406.5}, {"a": "2025-04-06 04:40:00", "b": 406.5}, {"a": "2025-04-06 04:45:00", "b": 408.3333333333333}, {"a": "2025-04-06 04:50:00", "b": 408.0}, {"a": "2025-04-06 04:55:00", "b": 405.8}, {"a": "2025-04-06 05:00:00", "b": 404.5}, {"a": "2025-04-06 05:05:00", "b": 405.0}, {"a": "2025-04-06 05:10:00", "b": 406.5}, {"a": "2025-04-06 05:15:00", "b": 405.3333333333333}, {"a": "2025-04-06 05:20:00", "b": 402.0}, {"a": "2025-04-06 05:25:00", "b": 403.0}, {"a": "2025-04-06 05:30:00", "b": 404.5}, {"a": "2025-04-06 05:35:00", "b": 402.5}, {"a": "2025-04-06 05:40:00", "b": 403.3333333333333}, {"a": "2025-04-06 05:45:00", "b": 403.0}, {"a": "2025-04-06 05:50:00", "b": 403.0}, {"a": "2025-04-06 05:55:00", "b": 401.25}, {"a": "2025-04-06 06:00:00", "b": 403.2}, {"a": "2025-04-06 06:05:00", "b": 402.0}, {"a": "2025-04-06 06:10:00", "b": 401.6666666666667}, {"a": "2025-04-06 06:15:00", "b": 401.4}, {"a": "2025-04-06 06:20:00", "b": 401.2}, {"a": "2025-04-06 06:25:00", "b": 402.0}, {"a": "2025-04-06 06:30:00", "b": 402.5}, {"a": "2025-04-06 06:35:00", "b": 402.5}, {"a": "2025-04-06 06:40:00", "b": 401.75}, {"a": "2025-04-06 06:45:00", "b": 400.5}, {"a": "2025-04-06 06:50:00", "b": 402.25}, {"a": "2025-04-06 06:55:00", "b": 402.0}, {"a": "2025-04-06 07:00:00", "b": 401.0}, {"a": "2025-04-06 07:05:00", "b": 402.25}, {"a": "2025-04-06 07:10:00", "b": 401.5}, {"a": "2025-04-06 07:15:00", "b": 402.5}, {"a": "2025-04-06 07:20:00", "b": 402.2}, {"a": "2025-04-06 07:25:00", "b": 403.0}, {"a": "2025-04-06 07:30:00", "b": 401.4}, {"a": "2025-04-06 07:35:00", "b": 401.5}, {"a": "2025-04-06 07:40:00", "b": 403.25}, {"a": "2025-04-06 07:45:00", "b": 402.5}, {"a": "2025-04-06 07:50:00", "b": 402.0}, {"a": "2025-04-06 07:55:00", "b": 401.0}, {"a": "2025-04-06 08:00:00", "b": 401.6666666666667}, {"a": "2025-04-06 08:05:00", "b": 402.5}, {"a": "2025-04-06 08:10:00", "b": 400.6666666666667}, {"a": "2025-04-06 08:15:00", "b": 401.75}, {"a": "2025-04-06 08:20:00", "b": 401.25}, {"a": "2025-04-06 08:25:00", "b": 402.0}, {"a": "2025-04-06 08:30:00", "b": 402.5}, {"a": "2025-04-06 08:35:00", "b": 401.5}, {"a": "2025-04-06 08:40:00", "b": 401.6}, {"a": "2025-04-06 08:45:00", "b": 402.0}, {"a": "2025-04-06 08:50:00", "b": 402.8}, {"a": "2025-04-06 08:55:00", "b": 402.5}, {"a": "2025-04-06 09:00:00", "b": 402.75}, {"a": "2025-04-06 09:05:00", "b": 402.75}, {"a": "2025-04-06 09:10:00", "b": 400.5}, {"a": "2025-04-06 09:15:00", "b": 401.2}, {"a": "2025-04-06 09:20:00", "b": 400.5}, {"a": "2025-04-06 09:25:00", "b": 401.4}, {"a": "2025-04-06 09:30:00", "b": 401.6}, {"a": "2025-04-06 09:35:00", "b": 402.5}, {"a": "2025-04-06 09:40:00", "b": 403.0}, {"a": "2025-04-06 09:45:00", "b": 406.6666666666667}, {"a": "2025-04-06 09:50:00", "b": 503.2}, {"a": "2025-04-06 09:55:00", "b": 539.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    