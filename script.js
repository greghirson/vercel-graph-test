
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-24 14:00:00", "b": 400.75}, {"a": "2024-11-24 14:05:00", "b": 401.8}, {"a": "2024-11-24 14:10:00", "b": 401.5}, {"a": "2024-11-24 14:15:00", "b": 401.2}, {"a": "2024-11-24 14:20:00", "b": 403.5}, {"a": "2024-11-24 14:25:00", "b": 401.0}, {"a": "2024-11-24 14:30:00", "b": 401.3333333333333}, {"a": "2024-11-24 14:35:00", "b": 401.4}, {"a": "2024-11-24 14:40:00", "b": 401.0}, {"a": "2024-11-24 14:45:00", "b": 402.8}, {"a": "2024-11-24 14:50:00", "b": 402.2}, {"a": "2024-11-24 14:55:00", "b": 401.0}, {"a": "2024-11-24 15:00:00", "b": 402.0}, {"a": "2024-11-24 15:05:00", "b": 401.0}, {"a": "2024-11-24 15:10:00", "b": 402.25}, {"a": "2024-11-24 15:15:00", "b": 402.0}, {"a": "2024-11-24 15:20:00", "b": 402.0}, {"a": "2024-11-24 15:25:00", "b": 402.4}, {"a": "2024-11-24 15:30:00", "b": 402.5}, {"a": "2024-11-24 15:35:00", "b": 401.6666666666667}, {"a": "2024-11-24 15:40:00", "b": 401.4}, {"a": "2024-11-24 15:45:00", "b": 401.3333333333333}, {"a": "2024-11-24 15:50:00", "b": 401.6666666666667}, {"a": "2024-11-24 15:55:00", "b": 402.0}, {"a": "2024-11-24 16:00:00", "b": 402.3333333333333}, {"a": "2024-11-24 16:05:00", "b": 401.3333333333333}, {"a": "2024-11-24 16:10:00", "b": 401.3333333333333}, {"a": "2024-11-24 16:15:00", "b": 401.5}, {"a": "2024-11-24 16:20:00", "b": 402.0}, {"a": "2024-11-24 16:25:00", "b": 402.0}, {"a": "2024-11-24 16:30:00", "b": 402.6666666666667}, {"a": "2024-11-24 16:35:00", "b": 400.75}, {"a": "2024-11-24 16:40:00", "b": 402.3333333333333}, {"a": "2024-11-24 16:45:00", "b": 401.8}, {"a": "2024-11-24 16:50:00", "b": 401.8}, {"a": "2024-11-24 16:55:00", "b": 402.2}, {"a": "2024-11-24 17:00:00", "b": 401.3333333333333}, {"a": "2024-11-24 17:05:00", "b": 402.8}, {"a": "2024-11-24 17:10:00", "b": 401.25}, {"a": "2024-11-24 17:15:00", "b": 402.0}, {"a": "2024-11-24 17:20:00", "b": 402.25}, {"a": "2024-11-24 17:25:00", "b": 402.0}, {"a": "2024-11-24 17:30:00", "b": 401.8}, {"a": "2024-11-24 17:35:00", "b": 402.0}, {"a": "2024-11-24 17:40:00", "b": 409.4}, {"a": "2024-11-24 17:45:00", "b": 429.0}, {"a": "2024-11-24 17:50:00", "b": 424.6}, {"a": "2024-11-24 17:55:00", "b": 429.2}, {"a": "2024-11-24 18:00:00", "b": 407.0}, {"a": "2024-11-24 18:05:00", "b": 408.5}, {"a": "2024-11-24 18:10:00", "b": 409.6666666666667}, {"a": "2024-11-24 18:15:00", "b": 408.0}, {"a": "2024-11-24 18:20:00", "b": 406.5}, {"a": "2024-11-24 18:25:00", "b": 406.0}, {"a": "2024-11-24 18:30:00", "b": 432.4}, {"a": "2024-11-24 18:35:00", "b": 438.4}, {"a": "2024-11-24 18:40:00", "b": 409.0}, {"a": "2024-11-24 18:45:00", "b": 408.0}, {"a": "2024-11-24 18:50:00", "b": 415.3333333333333}, {"a": "2024-11-24 18:55:00", "b": 419.75}, {"a": "2024-11-24 19:00:00", "b": 406.2}, {"a": "2024-11-24 19:05:00", "b": 405.5}, {"a": "2024-11-24 19:10:00", "b": 407.0}, {"a": "2024-11-24 19:15:00", "b": 411.5}, {"a": "2024-11-24 19:20:00", "b": 406.0}, {"a": "2024-11-24 19:25:00", "b": 407.5}, {"a": "2024-11-24 19:30:00", "b": 416.6}, {"a": "2024-11-24 19:35:00", "b": 406.6666666666667}, {"a": "2024-11-24 19:40:00", "b": 413.5}, {"a": "2024-11-24 19:45:00", "b": 408.4}, {"a": "2024-11-24 19:50:00", "b": 407.3333333333333}, {"a": "2024-11-24 19:55:00", "b": 419.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    