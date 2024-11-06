
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 07:50:00", "b": 408.75}, {"a": "2024-11-06 07:55:00", "b": 408.5}, {"a": "2024-11-06 08:00:00", "b": 420.6666666666667}, {"a": "2024-11-06 08:05:00", "b": 445.6}, {"a": "2024-11-06 08:10:00", "b": 439.4}, {"a": "2024-11-06 08:15:00", "b": 431.6}, {"a": "2024-11-06 08:20:00", "b": 449.0}, {"a": "2024-11-06 08:25:00", "b": 439.8}, {"a": "2024-11-06 08:30:00", "b": 419.2}, {"a": "2024-11-06 08:35:00", "b": 407.0}, {"a": "2024-11-06 08:40:00", "b": 406.5}, {"a": "2024-11-06 08:45:00", "b": 408.75}, {"a": "2024-11-06 08:50:00", "b": 407.0}, {"a": "2024-11-06 08:55:00", "b": 406.5}, {"a": "2024-11-06 09:00:00", "b": 403.3333333333333}, {"a": "2024-11-06 09:05:00", "b": 403.5}, {"a": "2024-11-06 09:10:00", "b": 405.75}, {"a": "2024-11-06 09:15:00", "b": 405.5}, {"a": "2024-11-06 09:20:00", "b": 402.75}, {"a": "2024-11-06 09:25:00", "b": 402.6}, {"a": "2024-11-06 09:30:00", "b": 403.5}, {"a": "2024-11-06 09:35:00", "b": 401.0}, {"a": "2024-11-06 09:40:00", "b": 402.75}, {"a": "2024-11-06 09:45:00", "b": 402.0}, {"a": "2024-11-06 09:50:00", "b": 402.25}, {"a": "2024-11-06 09:55:00", "b": 403.0}, {"a": "2024-11-06 10:00:00", "b": 402.0}, {"a": "2024-11-06 10:05:00", "b": 402.5}, {"a": "2024-11-06 10:10:00", "b": 401.0}, {"a": "2024-11-06 10:15:00", "b": 402.4}, {"a": "2024-11-06 10:20:00", "b": 402.3333333333333}, {"a": "2024-11-06 10:25:00", "b": 402.5}, {"a": "2024-11-06 10:30:00", "b": 401.5}, {"a": "2024-11-06 10:35:00", "b": 402.0}, {"a": "2024-11-06 10:40:00", "b": 401.4}, {"a": "2024-11-06 10:45:00", "b": 402.25}, {"a": "2024-11-06 10:50:00", "b": 402.0}, {"a": "2024-11-06 10:55:00", "b": 402.0}, {"a": "2024-11-06 11:00:00", "b": 402.0}, {"a": "2024-11-06 11:05:00", "b": 401.0}, {"a": "2024-11-06 11:10:00", "b": 401.6}, {"a": "2024-11-06 11:15:00", "b": 402.5}, {"a": "2024-11-06 11:20:00", "b": 402.25}, {"a": "2024-11-06 11:25:00", "b": 402.0}, {"a": "2024-11-06 11:30:00", "b": 401.6666666666667}, {"a": "2024-11-06 11:35:00", "b": 401.75}, {"a": "2024-11-06 11:40:00", "b": 401.5}, {"a": "2024-11-06 11:45:00", "b": 403.0}, {"a": "2024-11-06 11:50:00", "b": 402.0}, {"a": "2024-11-06 11:55:00", "b": 402.3333333333333}, {"a": "2024-11-06 12:00:00", "b": 401.5}, {"a": "2024-11-06 12:05:00", "b": 401.4}, {"a": "2024-11-06 12:10:00", "b": 402.0}, {"a": "2024-11-06 12:15:00", "b": 401.6}, {"a": "2024-11-06 12:20:00", "b": 400.75}, {"a": "2024-11-06 12:25:00", "b": 401.75}, {"a": "2024-11-06 12:30:00", "b": 402.4}, {"a": "2024-11-06 12:35:00", "b": 402.0}, {"a": "2024-11-06 12:40:00", "b": 402.0}, {"a": "2024-11-06 12:45:00", "b": 401.4}, {"a": "2024-11-06 12:50:00", "b": 401.6}, {"a": "2024-11-06 12:55:00", "b": 402.25}, {"a": "2024-11-06 13:00:00", "b": 402.0}, {"a": "2024-11-06 13:05:00", "b": 402.25}, {"a": "2024-11-06 13:10:00", "b": 402.0}, {"a": "2024-11-06 13:15:00", "b": 402.25}, {"a": "2024-11-06 13:20:00", "b": 402.0}, {"a": "2024-11-06 13:25:00", "b": 402.0}, {"a": "2024-11-06 13:30:00", "b": 402.6666666666667}, {"a": "2024-11-06 13:35:00", "b": 401.6666666666667}, {"a": "2024-11-06 13:40:00", "b": 402.0}, {"a": "2024-11-06 13:45:00", "b": 402.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    