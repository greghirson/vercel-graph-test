
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-21 04:30:00", "b": 405.0}, {"a": "2024-10-21 04:35:00", "b": 401.6}, {"a": "2024-10-21 04:40:00", "b": 403.0}, {"a": "2024-10-21 04:45:00", "b": 405.0}, {"a": "2024-10-21 04:50:00", "b": 406.0}, {"a": "2024-10-21 04:55:00", "b": 401.6}, {"a": "2024-10-21 05:00:00", "b": 402.6666666666667}, {"a": "2024-10-21 05:05:00", "b": 405.3333333333333}, {"a": "2024-10-21 05:10:00", "b": 404.3333333333333}, {"a": "2024-10-21 05:15:00", "b": 402.5}, {"a": "2024-10-21 05:20:00", "b": 406.0}, {"a": "2024-10-21 05:25:00", "b": 406.5}, {"a": "2024-10-21 05:30:00", "b": 407.5}, {"a": "2024-10-21 05:35:00", "b": 408.3333333333333}, {"a": "2024-10-21 05:40:00", "b": 406.0}, {"a": "2024-10-21 05:45:00", "b": 405.0}, {"a": "2024-10-21 05:50:00", "b": 403.0}, {"a": "2024-10-21 05:55:00", "b": 406.0}, {"a": "2024-10-21 06:00:00", "b": 404.0}, {"a": "2024-10-21 06:05:00", "b": 402.2}, {"a": "2024-10-21 06:10:00", "b": 402.5}, {"a": "2024-10-21 06:15:00", "b": 402.5}, {"a": "2024-10-21 06:20:00", "b": 402.2}, {"a": "2024-10-21 06:25:00", "b": 403.0}, {"a": "2024-10-21 06:30:00", "b": 402.5}, {"a": "2024-10-21 06:35:00", "b": 402.0}, {"a": "2024-10-21 06:40:00", "b": 403.3333333333333}, {"a": "2024-10-21 06:45:00", "b": 402.5}, {"a": "2024-10-21 06:50:00", "b": 404.0}, {"a": "2024-10-21 06:55:00", "b": 402.6666666666667}, {"a": "2024-10-21 07:00:00", "b": 400.75}, {"a": "2024-10-21 07:05:00", "b": 403.0}, {"a": "2024-10-21 07:10:00", "b": 402.0}, {"a": "2024-10-21 07:15:00", "b": 401.25}, {"a": "2024-10-21 07:20:00", "b": 402.3333333333333}, {"a": "2024-10-21 07:25:00", "b": 402.2}, {"a": "2024-10-21 07:30:00", "b": 402.4}, {"a": "2024-10-21 07:35:00", "b": 401.6666666666667}, {"a": "2024-10-21 07:40:00", "b": 403.5}, {"a": "2024-10-21 07:45:00", "b": 402.0}, {"a": "2024-10-21 07:50:00", "b": 402.6}, {"a": "2024-10-21 07:55:00", "b": 402.6}, {"a": "2024-10-21 08:00:00", "b": 402.0}, {"a": "2024-10-21 08:05:00", "b": 402.25}, {"a": "2024-10-21 08:10:00", "b": 403.0}, {"a": "2024-10-21 08:15:00", "b": 401.5}, {"a": "2024-10-21 08:20:00", "b": 401.3333333333333}, {"a": "2024-10-21 08:25:00", "b": 402.3333333333333}, {"a": "2024-10-21 08:35:00", "b": 404.3333333333333}, {"a": "2024-10-21 08:40:00", "b": 409.0}, {"a": "2024-10-21 08:45:00", "b": 404.5}, {"a": "2024-10-21 08:50:00", "b": 401.8}, {"a": "2024-10-21 08:55:00", "b": 402.2}, {"a": "2024-10-21 09:00:00", "b": 401.0}, {"a": "2024-10-21 09:05:00", "b": 402.0}, {"a": "2024-10-21 09:10:00", "b": 402.5}, {"a": "2024-10-21 09:15:00", "b": 402.0}, {"a": "2024-10-21 09:20:00", "b": 402.0}, {"a": "2024-10-21 09:25:00", "b": 401.0}, {"a": "2024-10-21 09:30:00", "b": 401.4}, {"a": "2024-10-21 09:35:00", "b": 402.0}, {"a": "2024-10-21 09:40:00", "b": 402.0}, {"a": "2024-10-21 09:45:00", "b": 403.0}, {"a": "2024-10-21 09:50:00", "b": 402.25}, {"a": "2024-10-21 09:55:00", "b": 402.0}, {"a": "2024-10-21 10:00:00", "b": 402.75}, {"a": "2024-10-21 10:05:00", "b": 401.6666666666667}, {"a": "2024-10-21 10:10:00", "b": 401.75}, {"a": "2024-10-21 10:15:00", "b": 402.5}, {"a": "2024-10-21 10:20:00", "b": 402.0}, {"a": "2024-10-21 10:25:00", "b": 401.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    