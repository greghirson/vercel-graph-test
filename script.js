
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-14 09:00:00", "b": 408.2}, {"a": "2025-04-14 09:05:00", "b": 409.25}, {"a": "2025-04-14 09:10:00", "b": 407.8}, {"a": "2025-04-14 09:15:00", "b": 407.0}, {"a": "2025-04-14 09:20:00", "b": 405.2}, {"a": "2025-04-14 09:25:00", "b": 409.5}, {"a": "2025-04-14 09:30:00", "b": 421.4}, {"a": "2025-04-14 09:35:00", "b": 422.0}, {"a": "2025-04-14 09:40:00", "b": 414.5}, {"a": "2025-04-14 09:45:00", "b": 408.5}, {"a": "2025-04-14 09:50:00", "b": 408.6}, {"a": "2025-04-14 09:55:00", "b": 405.0}, {"a": "2025-04-14 10:00:00", "b": 406.2}, {"a": "2025-04-14 10:05:00", "b": 411.0}, {"a": "2025-04-14 10:10:00", "b": 408.6666666666667}, {"a": "2025-04-14 10:15:00", "b": 407.0}, {"a": "2025-04-14 10:25:00", "b": 405.0}, {"a": "2025-04-14 10:30:00", "b": 402.25}, {"a": "2025-04-14 10:35:00", "b": 402.75}, {"a": "2025-04-14 10:40:00", "b": 405.3333333333333}, {"a": "2025-04-14 10:45:00", "b": 405.5}, {"a": "2025-04-14 10:50:00", "b": 406.3333333333333}, {"a": "2025-04-14 10:55:00", "b": 406.5}, {"a": "2025-04-14 11:00:00", "b": 404.0}, {"a": "2025-04-14 11:05:00", "b": 403.0}, {"a": "2025-04-14 11:10:00", "b": 404.5}, {"a": "2025-04-14 11:15:00", "b": 406.0}, {"a": "2025-04-14 11:25:00", "b": 405.6666666666667}, {"a": "2025-04-14 11:30:00", "b": 405.8}, {"a": "2025-04-14 11:35:00", "b": 406.5}, {"a": "2025-04-14 11:40:00", "b": 405.0}, {"a": "2025-04-14 11:45:00", "b": 403.5}, {"a": "2025-04-14 11:50:00", "b": 404.5}, {"a": "2025-04-14 11:55:00", "b": 402.5}, {"a": "2025-04-14 12:00:00", "b": 402.3333333333333}, {"a": "2025-04-14 12:05:00", "b": 402.6666666666667}, {"a": "2025-04-14 12:10:00", "b": 402.0}, {"a": "2025-04-14 12:25:00", "b": 404.0}, {"a": "2025-04-14 12:30:00", "b": 403.0}, {"a": "2025-04-14 12:35:00", "b": 402.5}, {"a": "2025-04-14 12:40:00", "b": 402.25}, {"a": "2025-04-14 12:45:00", "b": 403.5}, {"a": "2025-04-14 12:50:00", "b": 403.0}, {"a": "2025-04-14 12:55:00", "b": 402.0}, {"a": "2025-04-14 13:00:00", "b": 402.3333333333333}, {"a": "2025-04-14 13:05:00", "b": 402.6666666666667}, {"a": "2025-04-14 13:10:00", "b": 404.3333333333333}, {"a": "2025-04-14 13:15:00", "b": 402.6666666666667}, {"a": "2025-04-14 13:20:00", "b": 402.5}, {"a": "2025-04-14 13:25:00", "b": 402.5}, {"a": "2025-04-14 13:30:00", "b": 400.6666666666667}, {"a": "2025-04-14 13:35:00", "b": 401.75}, {"a": "2025-04-14 13:40:00", "b": 401.6666666666667}, {"a": "2025-04-14 13:45:00", "b": 402.4}, {"a": "2025-04-14 13:50:00", "b": 403.0}, {"a": "2025-04-14 13:55:00", "b": 403.0}, {"a": "2025-04-14 14:00:00", "b": 402.0}, {"a": "2025-04-14 14:05:00", "b": 402.5}, {"a": "2025-04-14 14:10:00", "b": 401.8}, {"a": "2025-04-14 14:15:00", "b": 404.0}, {"a": "2025-04-14 14:20:00", "b": 403.6666666666667}, {"a": "2025-04-14 14:25:00", "b": 402.5}, {"a": "2025-04-14 14:30:00", "b": 402.0}, {"a": "2025-04-14 14:35:00", "b": 403.3333333333333}, {"a": "2025-04-14 14:40:00", "b": 401.0}, {"a": "2025-04-14 14:45:00", "b": 401.5}, {"a": "2025-04-14 14:50:00", "b": 401.75}, {"a": "2025-04-14 14:55:00", "b": 401.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    