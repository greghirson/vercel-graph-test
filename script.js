
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-15 08:00:00", "b": 400.6666666666667}, {"a": "2025-04-15 08:05:00", "b": 403.0}, {"a": "2025-04-15 08:10:00", "b": 404.0}, {"a": "2025-04-15 08:15:00", "b": 403.0}, {"a": "2025-04-15 08:20:00", "b": 402.6666666666667}, {"a": "2025-04-15 08:25:00", "b": 401.0}, {"a": "2025-04-15 08:30:00", "b": 402.5}, {"a": "2025-04-15 08:35:00", "b": 402.0}, {"a": "2025-04-15 08:40:00", "b": 402.5}, {"a": "2025-04-15 08:45:00", "b": 401.5}, {"a": "2025-04-15 08:50:00", "b": 402.6}, {"a": "2025-04-15 08:55:00", "b": 402.6666666666667}, {"a": "2025-04-15 09:00:00", "b": 403.5}, {"a": "2025-04-15 09:05:00", "b": 403.0}, {"a": "2025-04-15 09:10:00", "b": 402.5}, {"a": "2025-04-15 09:15:00", "b": 402.5}, {"a": "2025-04-15 09:20:00", "b": 414.6}, {"a": "2025-04-15 09:25:00", "b": 411.6666666666667}, {"a": "2025-04-15 09:30:00", "b": 416.5}, {"a": "2025-04-15 09:35:00", "b": 418.25}, {"a": "2025-04-15 09:40:00", "b": 411.5}, {"a": "2025-04-15 09:45:00", "b": 409.5}, {"a": "2025-04-15 09:50:00", "b": 410.6666666666667}, {"a": "2025-04-15 09:55:00", "b": 408.0}, {"a": "2025-04-15 10:00:00", "b": 413.8}, {"a": "2025-04-15 10:05:00", "b": 411.75}, {"a": "2025-04-15 10:10:00", "b": 408.0}, {"a": "2025-04-15 10:15:00", "b": 412.0}, {"a": "2025-04-15 10:20:00", "b": 410.75}, {"a": "2025-04-15 10:25:00", "b": 420.5}, {"a": "2025-04-15 10:30:00", "b": 421.75}, {"a": "2025-04-15 10:35:00", "b": 410.75}, {"a": "2025-04-15 10:40:00", "b": 408.0}, {"a": "2025-04-15 10:45:00", "b": 416.25}, {"a": "2025-04-15 10:50:00", "b": 410.0}, {"a": "2025-04-15 10:55:00", "b": 410.4}, {"a": "2025-04-15 11:00:00", "b": 408.0}, {"a": "2025-04-15 11:05:00", "b": 408.0}, {"a": "2025-04-15 11:10:00", "b": 411.25}, {"a": "2025-04-15 11:15:00", "b": 423.75}, {"a": "2025-04-15 11:20:00", "b": 418.6}, {"a": "2025-04-15 11:25:00", "b": 414.6}, {"a": "2025-04-15 11:30:00", "b": 412.75}, {"a": "2025-04-15 11:35:00", "b": 430.8}, {"a": "2025-04-15 11:40:00", "b": 426.5}, {"a": "2025-04-15 11:45:00", "b": 427.8}, {"a": "2025-04-15 11:50:00", "b": 424.75}, {"a": "2025-04-15 11:55:00", "b": 429.0}, {"a": "2025-04-15 12:00:00", "b": 438.4}, {"a": "2025-04-15 12:05:00", "b": 437.25}, {"a": "2025-04-15 12:10:00", "b": 440.0}, {"a": "2025-04-15 12:15:00", "b": 440.0}, {"a": "2025-04-15 12:20:00", "b": 423.4}, {"a": "2025-04-15 12:25:00", "b": 419.3333333333333}, {"a": "2025-04-15 12:30:00", "b": 427.75}, {"a": "2025-04-15 12:35:00", "b": 423.25}, {"a": "2025-04-15 12:40:00", "b": 426.4}, {"a": "2025-04-15 12:45:00", "b": 437.75}, {"a": "2025-04-15 12:50:00", "b": 445.0}, {"a": "2025-04-15 12:55:00", "b": 447.8}, {"a": "2025-04-15 13:00:00", "b": 440.75}, {"a": "2025-04-15 13:05:00", "b": 429.2}, {"a": "2025-04-15 13:10:00", "b": 445.4}, {"a": "2025-04-15 13:15:00", "b": 457.6666666666667}, {"a": "2025-04-15 13:20:00", "b": 478.5}, {"a": "2025-04-15 13:25:00", "b": 490.75}, {"a": "2025-04-15 13:30:00", "b": 488.25}, {"a": "2025-04-15 13:35:00", "b": 510.4}, {"a": "2025-04-15 13:40:00", "b": 504.8}, {"a": "2025-04-15 13:45:00", "b": 503.4}, {"a": "2025-04-15 13:50:00", "b": 501.25}, {"a": "2025-04-15 13:55:00", "b": 505.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    