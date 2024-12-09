
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-09 05:00:00", "b": 401.75}, {"a": "2024-12-09 05:05:00", "b": 401.0}, {"a": "2024-12-09 05:10:00", "b": 401.75}, {"a": "2024-12-09 05:15:00", "b": 401.25}, {"a": "2024-12-09 05:20:00", "b": 402.0}, {"a": "2024-12-09 05:25:00", "b": 402.5}, {"a": "2024-12-09 05:30:00", "b": 401.6666666666667}, {"a": "2024-12-09 05:35:00", "b": 401.6}, {"a": "2024-12-09 05:40:00", "b": 402.5}, {"a": "2024-12-09 05:45:00", "b": 401.5}, {"a": "2024-12-09 05:50:00", "b": 402.5}, {"a": "2024-12-09 05:55:00", "b": 402.8}, {"a": "2024-12-09 06:00:00", "b": 402.5}, {"a": "2024-12-09 06:05:00", "b": 400.6}, {"a": "2024-12-09 06:10:00", "b": 402.75}, {"a": "2024-12-09 06:15:00", "b": 401.3333333333333}, {"a": "2024-12-09 06:20:00", "b": 402.2}, {"a": "2024-12-09 06:25:00", "b": 402.0}, {"a": "2024-12-09 06:30:00", "b": 402.0}, {"a": "2024-12-09 06:35:00", "b": 401.5}, {"a": "2024-12-09 06:40:00", "b": 402.0}, {"a": "2024-12-09 06:45:00", "b": 402.0}, {"a": "2024-12-09 06:50:00", "b": 401.75}, {"a": "2024-12-09 06:55:00", "b": 401.0}, {"a": "2024-12-09 07:00:00", "b": 402.8}, {"a": "2024-12-09 07:05:00", "b": 402.0}, {"a": "2024-12-09 07:10:00", "b": 402.25}, {"a": "2024-12-09 07:15:00", "b": 402.0}, {"a": "2024-12-09 07:20:00", "b": 400.0}, {"a": "2024-12-09 07:25:00", "b": 403.0}, {"a": "2024-12-09 07:30:00", "b": 403.0}, {"a": "2024-12-09 07:35:00", "b": 402.0}, {"a": "2024-12-09 07:40:00", "b": 402.2}, {"a": "2024-12-09 07:45:00", "b": 403.0}, {"a": "2024-12-09 07:50:00", "b": 405.0}, {"a": "2024-12-09 07:55:00", "b": 406.0}, {"a": "2024-12-09 08:00:00", "b": 403.8}, {"a": "2024-12-09 08:05:00", "b": 403.25}, {"a": "2024-12-09 08:10:00", "b": 403.6}, {"a": "2024-12-09 08:15:00", "b": 403.0}, {"a": "2024-12-09 08:20:00", "b": 403.0}, {"a": "2024-12-09 08:25:00", "b": 402.75}, {"a": "2024-12-09 08:30:00", "b": 401.75}, {"a": "2024-12-09 08:35:00", "b": 402.5}, {"a": "2024-12-09 08:40:00", "b": 401.5}, {"a": "2024-12-09 08:45:00", "b": 401.6666666666667}, {"a": "2024-12-09 08:50:00", "b": 402.25}, {"a": "2024-12-09 08:55:00", "b": 401.8}, {"a": "2024-12-09 09:00:00", "b": 402.3333333333333}, {"a": "2024-12-09 09:05:00", "b": 401.75}, {"a": "2024-12-09 09:10:00", "b": 401.75}, {"a": "2024-12-09 09:15:00", "b": 402.75}, {"a": "2024-12-09 09:20:00", "b": 401.5}, {"a": "2024-12-09 09:25:00", "b": 403.0}, {"a": "2024-12-09 09:30:00", "b": 401.4}, {"a": "2024-12-09 09:35:00", "b": 403.0}, {"a": "2024-12-09 09:40:00", "b": 402.8}, {"a": "2024-12-09 09:45:00", "b": 401.75}, {"a": "2024-12-09 09:50:00", "b": 402.25}, {"a": "2024-12-09 09:55:00", "b": 401.4}, {"a": "2024-12-09 10:00:00", "b": 402.5}, {"a": "2024-12-09 10:05:00", "b": 401.75}, {"a": "2024-12-09 10:10:00", "b": 402.6}, {"a": "2024-12-09 10:15:00", "b": 401.75}, {"a": "2024-12-09 10:20:00", "b": 402.6}, {"a": "2024-12-09 10:25:00", "b": 401.5}, {"a": "2024-12-09 10:30:00", "b": 402.0}, {"a": "2024-12-09 10:35:00", "b": 401.5}, {"a": "2024-12-09 10:40:00", "b": 402.6}, {"a": "2024-12-09 10:45:00", "b": 401.0}, {"a": "2024-12-09 10:50:00", "b": 401.5}, {"a": "2024-12-09 10:55:00", "b": 402.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    