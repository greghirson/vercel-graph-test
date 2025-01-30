
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-29 13:00:00", "b": 417.0}, {"a": "2025-01-29 13:05:00", "b": 413.0}, {"a": "2025-01-29 13:10:00", "b": 408.5}, {"a": "2025-01-29 13:15:00", "b": 410.0}, {"a": "2025-01-29 13:20:00", "b": 408.2}, {"a": "2025-01-29 13:25:00", "b": 404.25}, {"a": "2025-01-29 13:30:00", "b": 405.0}, {"a": "2025-01-29 13:35:00", "b": 408.0}, {"a": "2025-01-29 13:40:00", "b": 407.0}, {"a": "2025-01-29 13:45:00", "b": 410.6666666666667}, {"a": "2025-01-29 13:50:00", "b": 407.4}, {"a": "2025-01-29 13:55:00", "b": 404.0}, {"a": "2025-01-29 14:00:00", "b": 404.0}, {"a": "2025-01-29 14:05:00", "b": 406.0}, {"a": "2025-01-29 14:10:00", "b": 405.5}, {"a": "2025-01-29 14:15:00", "b": 408.0}, {"a": "2025-01-29 14:20:00", "b": 427.75}, {"a": "2025-01-29 14:25:00", "b": 430.75}, {"a": "2025-01-29 14:30:00", "b": 412.3333333333333}, {"a": "2025-01-29 14:35:00", "b": 408.6666666666667}, {"a": "2025-01-29 14:40:00", "b": 411.5}, {"a": "2025-01-29 14:50:00", "b": 408.0}, {"a": "2025-01-29 14:55:00", "b": 406.5}, {"a": "2025-01-29 15:00:00", "b": 406.5}, {"a": "2025-01-29 15:05:00", "b": 407.0}, {"a": "2025-01-29 15:10:00", "b": 404.5}, {"a": "2025-01-29 15:15:00", "b": 404.6666666666667}, {"a": "2025-01-29 15:20:00", "b": 406.0}, {"a": "2025-01-29 15:25:00", "b": 405.5}, {"a": "2025-01-29 15:30:00", "b": 406.0}, {"a": "2025-01-29 15:35:00", "b": 406.5}, {"a": "2025-01-29 15:40:00", "b": 405.6666666666667}, {"a": "2025-01-29 15:45:00", "b": 404.25}, {"a": "2025-01-29 15:50:00", "b": 405.0}, {"a": "2025-01-29 15:55:00", "b": 404.5}, {"a": "2025-01-29 16:00:00", "b": 405.0}, {"a": "2025-01-29 16:05:00", "b": 404.5}, {"a": "2025-01-29 16:10:00", "b": 404.3333333333333}, {"a": "2025-01-29 16:15:00", "b": 403.5}, {"a": "2025-01-29 16:20:00", "b": 405.5}, {"a": "2025-01-29 16:25:00", "b": 403.3333333333333}, {"a": "2025-01-29 16:30:00", "b": 404.0}, {"a": "2025-01-29 16:35:00", "b": 403.5}, {"a": "2025-01-29 16:40:00", "b": 404.0}, {"a": "2025-01-29 16:45:00", "b": 403.0}, {"a": "2025-01-29 16:50:00", "b": 404.0}, {"a": "2025-01-29 16:55:00", "b": 404.0}, {"a": "2025-01-29 17:00:00", "b": 402.6666666666667}, {"a": "2025-01-29 17:05:00", "b": 404.0}, {"a": "2025-01-29 17:10:00", "b": 404.6666666666667}, {"a": "2025-01-29 17:15:00", "b": 403.0}, {"a": "2025-01-29 17:20:00", "b": 403.5}, {"a": "2025-01-29 17:25:00", "b": 402.0}, {"a": "2025-01-29 17:30:00", "b": 401.5}, {"a": "2025-01-29 17:40:00", "b": 402.0}, {"a": "2025-01-29 17:45:00", "b": 402.3333333333333}, {"a": "2025-01-29 17:50:00", "b": 402.4}, {"a": "2025-01-29 17:55:00", "b": 401.5}, {"a": "2025-01-29 18:00:00", "b": 401.3333333333333}, {"a": "2025-01-29 18:05:00", "b": 401.0}, {"a": "2025-01-29 18:10:00", "b": 402.0}, {"a": "2025-01-29 18:15:00", "b": 403.3333333333333}, {"a": "2025-01-29 18:20:00", "b": 403.0}, {"a": "2025-01-29 18:25:00", "b": 401.8}, {"a": "2025-01-29 18:30:00", "b": 402.25}, {"a": "2025-01-29 18:35:00", "b": 401.4}, {"a": "2025-01-29 18:40:00", "b": 402.5}, {"a": "2025-01-29 18:45:00", "b": 401.0}, {"a": "2025-01-29 18:50:00", "b": 402.3333333333333}, {"a": "2025-01-29 18:55:00", "b": 403.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    