
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-09 02:00:00", "b": 402.4}, {"a": "2024-12-09 02:05:00", "b": 402.2}, {"a": "2024-12-09 02:10:00", "b": 402.25}, {"a": "2024-12-09 02:15:00", "b": 403.0}, {"a": "2024-12-09 02:20:00", "b": 403.6666666666667}, {"a": "2024-12-09 02:25:00", "b": 402.0}, {"a": "2024-12-09 02:30:00", "b": 401.0}, {"a": "2024-12-09 02:35:00", "b": 403.0}, {"a": "2024-12-09 02:40:00", "b": 401.6}, {"a": "2024-12-09 02:45:00", "b": 402.25}, {"a": "2024-12-09 02:50:00", "b": 402.2}, {"a": "2024-12-09 02:55:00", "b": 401.4}, {"a": "2024-12-09 03:00:00", "b": 402.0}, {"a": "2024-12-09 03:05:00", "b": 402.6}, {"a": "2024-12-09 03:10:00", "b": 401.6}, {"a": "2024-12-09 03:15:00", "b": 403.0}, {"a": "2024-12-09 03:20:00", "b": 407.0}, {"a": "2024-12-09 03:25:00", "b": 405.75}, {"a": "2024-12-09 03:30:00", "b": 401.0}, {"a": "2024-12-09 03:35:00", "b": 401.75}, {"a": "2024-12-09 03:40:00", "b": 401.6666666666667}, {"a": "2024-12-09 03:45:00", "b": 401.6666666666667}, {"a": "2024-12-09 03:50:00", "b": 401.8}, {"a": "2024-12-09 03:55:00", "b": 402.0}, {"a": "2024-12-09 04:00:00", "b": 402.4}, {"a": "2024-12-09 04:05:00", "b": 401.5}, {"a": "2024-12-09 04:10:00", "b": 403.0}, {"a": "2024-12-09 04:15:00", "b": 401.75}, {"a": "2024-12-09 04:20:00", "b": 401.8}, {"a": "2024-12-09 04:25:00", "b": 402.25}, {"a": "2024-12-09 04:30:00", "b": 401.75}, {"a": "2024-12-09 04:35:00", "b": 401.5}, {"a": "2024-12-09 04:40:00", "b": 403.0}, {"a": "2024-12-09 04:45:00", "b": 400.8}, {"a": "2024-12-09 04:50:00", "b": 402.25}, {"a": "2024-12-09 04:55:00", "b": 401.4}, {"a": "2024-12-09 05:00:00", "b": 401.75}, {"a": "2024-12-09 05:05:00", "b": 401.0}, {"a": "2024-12-09 05:10:00", "b": 401.75}, {"a": "2024-12-09 05:15:00", "b": 401.25}, {"a": "2024-12-09 05:20:00", "b": 402.0}, {"a": "2024-12-09 05:25:00", "b": 402.5}, {"a": "2024-12-09 05:30:00", "b": 401.6666666666667}, {"a": "2024-12-09 05:35:00", "b": 401.6}, {"a": "2024-12-09 05:40:00", "b": 402.5}, {"a": "2024-12-09 05:45:00", "b": 401.5}, {"a": "2024-12-09 05:50:00", "b": 402.5}, {"a": "2024-12-09 05:55:00", "b": 402.8}, {"a": "2024-12-09 06:00:00", "b": 402.5}, {"a": "2024-12-09 06:05:00", "b": 400.6}, {"a": "2024-12-09 06:10:00", "b": 402.75}, {"a": "2024-12-09 06:15:00", "b": 401.3333333333333}, {"a": "2024-12-09 06:20:00", "b": 402.2}, {"a": "2024-12-09 06:25:00", "b": 402.0}, {"a": "2024-12-09 06:30:00", "b": 402.0}, {"a": "2024-12-09 06:35:00", "b": 401.5}, {"a": "2024-12-09 06:40:00", "b": 402.0}, {"a": "2024-12-09 06:45:00", "b": 402.0}, {"a": "2024-12-09 06:50:00", "b": 401.75}, {"a": "2024-12-09 06:55:00", "b": 401.0}, {"a": "2024-12-09 07:00:00", "b": 402.8}, {"a": "2024-12-09 07:05:00", "b": 402.0}, {"a": "2024-12-09 07:10:00", "b": 402.25}, {"a": "2024-12-09 07:15:00", "b": 402.0}, {"a": "2024-12-09 07:20:00", "b": 400.0}, {"a": "2024-12-09 07:25:00", "b": 403.0}, {"a": "2024-12-09 07:30:00", "b": 403.0}, {"a": "2024-12-09 07:35:00", "b": 402.0}, {"a": "2024-12-09 07:40:00", "b": 402.2}, {"a": "2024-12-09 07:45:00", "b": 403.0}, {"a": "2024-12-09 07:50:00", "b": 405.0}, {"a": "2024-12-09 07:55:00", "b": 406.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    