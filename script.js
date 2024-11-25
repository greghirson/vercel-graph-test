
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-25 06:00:00", "b": 405.5}, {"a": "2024-11-25 06:05:00", "b": 406.0}, {"a": "2024-11-25 06:10:00", "b": 402.0}, {"a": "2024-11-25 06:15:00", "b": 401.0}, {"a": "2024-11-25 06:20:00", "b": 417.4}, {"a": "2024-11-25 06:25:00", "b": 402.6666666666667}, {"a": "2024-11-25 06:30:00", "b": 402.0}, {"a": "2024-11-25 06:35:00", "b": 400.8}, {"a": "2024-11-25 06:40:00", "b": 402.2}, {"a": "2024-11-25 06:45:00", "b": 402.0}, {"a": "2024-11-25 06:50:00", "b": 402.5}, {"a": "2024-11-25 06:55:00", "b": 402.0}, {"a": "2024-11-25 07:00:00", "b": 403.3333333333333}, {"a": "2024-11-25 07:05:00", "b": 401.8}, {"a": "2024-11-25 07:10:00", "b": 403.0}, {"a": "2024-11-25 07:15:00", "b": 404.4}, {"a": "2024-11-25 07:20:00", "b": 421.0}, {"a": "2024-11-25 07:25:00", "b": 402.2}, {"a": "2024-11-25 07:30:00", "b": 403.8}, {"a": "2024-11-25 07:35:00", "b": 407.3333333333333}, {"a": "2024-11-25 07:40:00", "b": 403.5}, {"a": "2024-11-25 07:45:00", "b": 402.2}, {"a": "2024-11-25 07:50:00", "b": 402.5}, {"a": "2024-11-25 07:55:00", "b": 401.2}, {"a": "2024-11-25 08:00:00", "b": 404.25}, {"a": "2024-11-25 08:05:00", "b": 420.4}, {"a": "2024-11-25 08:10:00", "b": 408.0}, {"a": "2024-11-25 08:15:00", "b": 403.2}, {"a": "2024-11-25 08:20:00", "b": 402.0}, {"a": "2024-11-25 08:25:00", "b": 401.6}, {"a": "2024-11-25 08:30:00", "b": 402.3333333333333}, {"a": "2024-11-25 08:35:00", "b": 402.0}, {"a": "2024-11-25 08:40:00", "b": 403.2}, {"a": "2024-11-25 08:45:00", "b": 401.25}, {"a": "2024-11-25 08:50:00", "b": 402.25}, {"a": "2024-11-25 08:55:00", "b": 403.0}, {"a": "2024-11-25 09:00:00", "b": 400.5}, {"a": "2024-11-25 09:05:00", "b": 402.0}, {"a": "2024-11-25 09:10:00", "b": 401.8}, {"a": "2024-11-25 09:15:00", "b": 401.0}, {"a": "2024-11-25 09:20:00", "b": 402.25}, {"a": "2024-11-25 09:25:00", "b": 402.0}, {"a": "2024-11-25 09:30:00", "b": 401.25}, {"a": "2024-11-25 09:35:00", "b": 402.4}, {"a": "2024-11-25 09:40:00", "b": 402.2}, {"a": "2024-11-25 09:45:00", "b": 402.0}, {"a": "2024-11-25 09:50:00", "b": 401.4}, {"a": "2024-11-25 09:55:00", "b": 401.0}, {"a": "2024-11-25 10:00:00", "b": 401.6666666666667}, {"a": "2024-11-25 10:05:00", "b": 402.25}, {"a": "2024-11-25 10:10:00", "b": 401.8}, {"a": "2024-11-25 10:15:00", "b": 401.75}, {"a": "2024-11-25 10:20:00", "b": 402.5}, {"a": "2024-11-25 10:25:00", "b": 403.0}, {"a": "2024-11-25 10:30:00", "b": 402.2}, {"a": "2024-11-25 10:35:00", "b": 402.25}, {"a": "2024-11-25 10:40:00", "b": 402.0}, {"a": "2024-11-25 10:45:00", "b": 402.25}, {"a": "2024-11-25 10:50:00", "b": 403.0}, {"a": "2024-11-25 10:55:00", "b": 402.5}, {"a": "2024-11-25 11:00:00", "b": 402.5}, {"a": "2024-11-25 11:05:00", "b": 402.3333333333333}, {"a": "2024-11-25 11:10:00", "b": 402.5}, {"a": "2024-11-25 11:15:00", "b": 402.8}, {"a": "2024-11-25 11:20:00", "b": 401.75}, {"a": "2024-11-25 11:25:00", "b": 402.5}, {"a": "2024-11-25 11:30:00", "b": 402.4}, {"a": "2024-11-25 11:35:00", "b": 402.8}, {"a": "2024-11-25 11:40:00", "b": 402.2}, {"a": "2024-11-25 11:45:00", "b": 402.6666666666667}, {"a": "2024-11-25 11:50:00", "b": 402.5}, {"a": "2024-11-25 11:55:00", "b": 401.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    