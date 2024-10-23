
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 21:50:00", "b": 405.4}, {"a": "2024-10-22 21:55:00", "b": 402.0}, {"a": "2024-10-22 22:00:00", "b": 403.0}, {"a": "2024-10-22 22:05:00", "b": 402.25}, {"a": "2024-10-22 22:10:00", "b": 401.75}, {"a": "2024-10-22 22:15:00", "b": 401.5}, {"a": "2024-10-22 22:20:00", "b": 402.25}, {"a": "2024-10-22 22:25:00", "b": 400.5}, {"a": "2024-10-22 22:30:00", "b": 401.6}, {"a": "2024-10-22 22:35:00", "b": 401.0}, {"a": "2024-10-22 22:40:00", "b": 402.6666666666667}, {"a": "2024-10-22 22:45:00", "b": 401.8}, {"a": "2024-10-22 22:50:00", "b": 403.0}, {"a": "2024-10-22 22:55:00", "b": 403.0}, {"a": "2024-10-22 23:00:00", "b": 402.3333333333333}, {"a": "2024-10-22 23:05:00", "b": 402.5}, {"a": "2024-10-22 23:10:00", "b": 402.4}, {"a": "2024-10-22 23:15:00", "b": 404.0}, {"a": "2024-10-22 23:20:00", "b": 402.0}, {"a": "2024-10-22 23:25:00", "b": 403.5}, {"a": "2024-10-22 23:30:00", "b": 404.5}, {"a": "2024-10-22 23:35:00", "b": 403.75}, {"a": "2024-10-22 23:40:00", "b": 401.6}, {"a": "2024-10-22 23:45:00", "b": 402.0}, {"a": "2024-10-22 23:50:00", "b": 404.3333333333333}, {"a": "2024-10-22 23:55:00", "b": 407.0}, {"a": "2024-10-23 00:00:00", "b": 401.5}, {"a": "2024-10-23 00:05:00", "b": 401.8}, {"a": "2024-10-23 00:10:00", "b": 402.0}, {"a": "2024-10-23 00:15:00", "b": 403.5}, {"a": "2024-10-23 00:20:00", "b": 401.75}, {"a": "2024-10-23 00:25:00", "b": 401.75}, {"a": "2024-10-23 00:30:00", "b": 403.0}, {"a": "2024-10-23 00:35:00", "b": 403.0}, {"a": "2024-10-23 00:40:00", "b": 403.5}, {"a": "2024-10-23 00:45:00", "b": 402.0}, {"a": "2024-10-23 00:50:00", "b": 404.0}, {"a": "2024-10-23 00:55:00", "b": 404.0}, {"a": "2024-10-23 01:00:00", "b": 402.0}, {"a": "2024-10-23 01:05:00", "b": 404.5}, {"a": "2024-10-23 01:10:00", "b": 405.0}, {"a": "2024-10-23 01:15:00", "b": 403.6666666666667}, {"a": "2024-10-23 01:20:00", "b": 406.5}, {"a": "2024-10-23 01:25:00", "b": 406.5}, {"a": "2024-10-23 01:30:00", "b": 404.6666666666667}, {"a": "2024-10-23 01:35:00", "b": 406.0}, {"a": "2024-10-23 01:40:00", "b": 405.3333333333333}, {"a": "2024-10-23 01:45:00", "b": 404.4}, {"a": "2024-10-23 01:50:00", "b": 405.5}, {"a": "2024-10-23 01:55:00", "b": 406.0}, {"a": "2024-10-23 02:00:00", "b": 406.25}, {"a": "2024-10-23 02:10:00", "b": 408.5}, {"a": "2024-10-23 02:15:00", "b": 411.5}, {"a": "2024-10-23 02:20:00", "b": 411.0}, {"a": "2024-10-23 02:25:00", "b": 405.25}, {"a": "2024-10-23 02:30:00", "b": 410.75}, {"a": "2024-10-23 02:35:00", "b": 407.5}, {"a": "2024-10-23 02:40:00", "b": 408.5}, {"a": "2024-10-23 02:45:00", "b": 407.5}, {"a": "2024-10-23 03:00:00", "b": 407.5}, {"a": "2024-10-23 03:05:00", "b": 408.5}, {"a": "2024-10-23 03:10:00", "b": 410.8}, {"a": "2024-10-23 03:15:00", "b": 409.75}, {"a": "2024-10-23 03:20:00", "b": 408.6666666666667}, {"a": "2024-10-23 03:25:00", "b": 408.0}, {"a": "2024-10-23 03:30:00", "b": 409.0}, {"a": "2024-10-23 03:35:00", "b": 415.8}, {"a": "2024-10-23 03:40:00", "b": 409.4}, {"a": "2024-10-23 03:45:00", "b": 409.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    