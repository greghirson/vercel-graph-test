
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-20 09:00:00", "b": 407.5}, {"a": "2024-11-20 09:05:00", "b": 404.2}, {"a": "2024-11-20 09:10:00", "b": 402.5}, {"a": "2024-11-20 09:15:00", "b": 403.3333333333333}, {"a": "2024-11-20 09:20:00", "b": 406.3333333333333}, {"a": "2024-11-20 09:25:00", "b": 412.6}, {"a": "2024-11-20 09:30:00", "b": 411.3333333333333}, {"a": "2024-11-20 09:35:00", "b": 408.0}, {"a": "2024-11-20 09:40:00", "b": 406.0}, {"a": "2024-11-20 09:45:00", "b": 406.5}, {"a": "2024-11-20 09:50:00", "b": 407.0}, {"a": "2024-11-20 09:55:00", "b": 406.5}, {"a": "2024-11-20 10:00:00", "b": 406.5}, {"a": "2024-11-20 10:05:00", "b": 405.5}, {"a": "2024-11-20 10:10:00", "b": 405.0}, {"a": "2024-11-20 10:15:00", "b": 403.5}, {"a": "2024-11-20 10:20:00", "b": 403.5}, {"a": "2024-11-20 10:25:00", "b": 402.5}, {"a": "2024-11-20 10:30:00", "b": 401.6666666666667}, {"a": "2024-11-20 10:35:00", "b": 401.75}, {"a": "2024-11-20 10:40:00", "b": 401.5}, {"a": "2024-11-20 10:45:00", "b": 402.6}, {"a": "2024-11-20 10:50:00", "b": 402.5}, {"a": "2024-11-20 10:55:00", "b": 402.4}, {"a": "2024-11-20 11:00:00", "b": 401.6}, {"a": "2024-11-20 11:05:00", "b": 403.5}, {"a": "2024-11-20 11:10:00", "b": 401.75}, {"a": "2024-11-20 11:15:00", "b": 403.5}, {"a": "2024-11-20 11:20:00", "b": 401.6}, {"a": "2024-11-20 11:25:00", "b": 401.5}, {"a": "2024-11-20 11:30:00", "b": 401.6}, {"a": "2024-11-20 11:35:00", "b": 401.3333333333333}, {"a": "2024-11-20 11:40:00", "b": 402.0}, {"a": "2024-11-20 11:45:00", "b": 401.0}, {"a": "2024-11-20 11:50:00", "b": 401.0}, {"a": "2024-11-20 11:55:00", "b": 402.0}, {"a": "2024-11-20 12:00:00", "b": 405.0}, {"a": "2024-11-20 12:05:00", "b": 405.6666666666667}, {"a": "2024-11-20 12:10:00", "b": 404.5}, {"a": "2024-11-20 12:15:00", "b": 406.75}, {"a": "2024-11-20 12:20:00", "b": 415.2}, {"a": "2024-11-20 12:25:00", "b": 408.6666666666667}, {"a": "2024-11-20 12:30:00", "b": 409.75}, {"a": "2024-11-20 12:35:00", "b": 411.25}, {"a": "2024-11-20 12:40:00", "b": 417.8}, {"a": "2024-11-20 12:45:00", "b": 409.5}, {"a": "2024-11-20 12:50:00", "b": 408.5}, {"a": "2024-11-20 12:55:00", "b": 406.0}, {"a": "2024-11-20 13:00:00", "b": 407.0}, {"a": "2024-11-20 13:05:00", "b": 407.3333333333333}, {"a": "2024-11-20 13:10:00", "b": 405.75}, {"a": "2024-11-20 13:15:00", "b": 406.2}, {"a": "2024-11-20 13:20:00", "b": 406.0}, {"a": "2024-11-20 13:25:00", "b": 407.5}, {"a": "2024-11-20 13:30:00", "b": 404.0}, {"a": "2024-11-20 13:35:00", "b": 403.8}, {"a": "2024-11-20 13:40:00", "b": 404.3333333333333}, {"a": "2024-11-20 13:45:00", "b": 404.0}, {"a": "2024-11-20 13:50:00", "b": 401.6666666666667}, {"a": "2024-11-20 13:55:00", "b": 407.4}, {"a": "2024-11-20 14:00:00", "b": 408.5}, {"a": "2024-11-20 14:05:00", "b": 420.4}, {"a": "2024-11-20 14:10:00", "b": 459.8}, {"a": "2024-11-20 14:15:00", "b": 516.4}, {"a": "2024-11-20 14:20:00", "b": 548.8}, {"a": "2024-11-20 14:25:00", "b": 581.6}, {"a": "2024-11-20 14:30:00", "b": 610.6}, {"a": "2024-11-20 14:35:00", "b": 623.5}, {"a": "2024-11-20 14:50:00", "b": 558.5}, {"a": "2024-11-20 14:55:00", "b": 520.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    