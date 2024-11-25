
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-25 00:00:00", "b": 415.75}, {"a": "2024-11-25 00:05:00", "b": 403.6666666666667}, {"a": "2024-11-25 00:10:00", "b": 403.5}, {"a": "2024-11-25 00:15:00", "b": 410.5}, {"a": "2024-11-25 00:20:00", "b": 408.2}, {"a": "2024-11-25 00:25:00", "b": 403.5}, {"a": "2024-11-25 00:30:00", "b": 404.5}, {"a": "2024-11-25 00:35:00", "b": 461.6}, {"a": "2024-11-25 00:40:00", "b": 418.25}, {"a": "2024-11-25 00:45:00", "b": 407.75}, {"a": "2024-11-25 00:50:00", "b": 406.5}, {"a": "2024-11-25 00:55:00", "b": 407.6666666666667}, {"a": "2024-11-25 01:00:00", "b": 407.5}, {"a": "2024-11-25 01:05:00", "b": 405.6666666666667}, {"a": "2024-11-25 01:10:00", "b": 405.5}, {"a": "2024-11-25 01:15:00", "b": 408.25}, {"a": "2024-11-25 01:20:00", "b": 406.0}, {"a": "2024-11-25 01:25:00", "b": 404.5}, {"a": "2024-11-25 01:30:00", "b": 404.5}, {"a": "2024-11-25 01:35:00", "b": 406.0}, {"a": "2024-11-25 01:40:00", "b": 404.0}, {"a": "2024-11-25 01:45:00", "b": 402.0}, {"a": "2024-11-25 01:50:00", "b": 407.0}, {"a": "2024-11-25 01:55:00", "b": 403.5}, {"a": "2024-11-25 02:00:00", "b": 404.0}, {"a": "2024-11-25 02:05:00", "b": 402.3333333333333}, {"a": "2024-11-25 02:10:00", "b": 401.6666666666667}, {"a": "2024-11-25 02:15:00", "b": 402.6}, {"a": "2024-11-25 02:20:00", "b": 402.6666666666667}, {"a": "2024-11-25 02:25:00", "b": 403.0}, {"a": "2024-11-25 02:30:00", "b": 401.75}, {"a": "2024-11-25 02:35:00", "b": 404.5}, {"a": "2024-11-25 02:40:00", "b": 402.25}, {"a": "2024-11-25 02:45:00", "b": 401.4}, {"a": "2024-11-25 02:50:00", "b": 400.75}, {"a": "2024-11-25 02:55:00", "b": 401.0}, {"a": "2024-11-25 03:00:00", "b": 401.5}, {"a": "2024-11-25 03:05:00", "b": 402.6}, {"a": "2024-11-25 03:10:00", "b": 402.0}, {"a": "2024-11-25 03:15:00", "b": 401.4}, {"a": "2024-11-25 03:20:00", "b": 402.0}, {"a": "2024-11-25 03:25:00", "b": 402.5}, {"a": "2024-11-25 03:30:00", "b": 402.5}, {"a": "2024-11-25 03:35:00", "b": 401.0}, {"a": "2024-11-25 03:40:00", "b": 401.75}, {"a": "2024-11-25 03:45:00", "b": 402.2}, {"a": "2024-11-25 03:50:00", "b": 402.0}, {"a": "2024-11-25 03:55:00", "b": 402.0}, {"a": "2024-11-25 04:00:00", "b": 401.75}, {"a": "2024-11-25 04:05:00", "b": 400.8}, {"a": "2024-11-25 04:10:00", "b": 402.3333333333333}, {"a": "2024-11-25 04:15:00", "b": 403.0}, {"a": "2024-11-25 04:20:00", "b": 400.8}, {"a": "2024-11-25 04:25:00", "b": 402.25}, {"a": "2024-11-25 04:30:00", "b": 405.0}, {"a": "2024-11-25 04:35:00", "b": 401.75}, {"a": "2024-11-25 04:40:00", "b": 402.0}, {"a": "2024-11-25 04:45:00", "b": 401.25}, {"a": "2024-11-25 04:50:00", "b": 401.8}, {"a": "2024-11-25 04:55:00", "b": 401.2}, {"a": "2024-11-25 05:00:00", "b": 401.0}, {"a": "2024-11-25 05:05:00", "b": 402.2}, {"a": "2024-11-25 05:10:00", "b": 402.5}, {"a": "2024-11-25 05:15:00", "b": 402.5}, {"a": "2024-11-25 05:20:00", "b": 401.8}, {"a": "2024-11-25 05:25:00", "b": 402.75}, {"a": "2024-11-25 05:30:00", "b": 403.0}, {"a": "2024-11-25 05:35:00", "b": 402.8}, {"a": "2024-11-25 05:40:00", "b": 402.0}, {"a": "2024-11-25 05:45:00", "b": 402.0}, {"a": "2024-11-25 05:50:00", "b": 402.25}, {"a": "2024-11-25 05:55:00", "b": 405.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    