
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-21 00:00:00", "b": 413.5}, {"a": "2025-01-21 00:05:00", "b": 418.8}, {"a": "2025-01-21 00:10:00", "b": 417.6}, {"a": "2025-01-21 00:15:00", "b": 410.0}, {"a": "2025-01-21 00:20:00", "b": 406.6666666666667}, {"a": "2025-01-21 00:25:00", "b": 408.25}, {"a": "2025-01-21 00:30:00", "b": 411.2}, {"a": "2025-01-21 00:35:00", "b": 406.0}, {"a": "2025-01-21 00:40:00", "b": 406.6}, {"a": "2025-01-21 00:45:00", "b": 407.6666666666667}, {"a": "2025-01-21 00:55:00", "b": 407.5}, {"a": "2025-01-21 01:00:00", "b": 411.6666666666667}, {"a": "2025-01-21 01:05:00", "b": 447.8}, {"a": "2025-01-21 01:10:00", "b": 476.4}, {"a": "2025-01-21 01:15:00", "b": 486.6}, {"a": "2025-01-21 01:20:00", "b": 468.6}, {"a": "2025-01-21 01:25:00", "b": 421.0}, {"a": "2025-01-21 01:30:00", "b": 408.0}, {"a": "2025-01-21 01:35:00", "b": 407.0}, {"a": "2025-01-21 01:40:00", "b": 406.5}, {"a": "2025-01-21 01:45:00", "b": 405.5}, {"a": "2025-01-21 01:50:00", "b": 406.3333333333333}, {"a": "2025-01-21 01:55:00", "b": 406.5}, {"a": "2025-01-21 02:00:00", "b": 405.75}, {"a": "2025-01-21 02:05:00", "b": 404.0}, {"a": "2025-01-21 02:10:00", "b": 403.5}, {"a": "2025-01-21 02:15:00", "b": 403.6666666666667}, {"a": "2025-01-21 02:20:00", "b": 405.0}, {"a": "2025-01-21 02:25:00", "b": 405.5}, {"a": "2025-01-21 02:30:00", "b": 406.0}, {"a": "2025-01-21 02:35:00", "b": 403.5}, {"a": "2025-01-21 02:40:00", "b": 405.3333333333333}, {"a": "2025-01-21 02:45:00", "b": 437.4}, {"a": "2025-01-21 02:50:00", "b": 463.2}, {"a": "2025-01-21 02:55:00", "b": 463.0}, {"a": "2025-01-21 03:00:00", "b": 437.0}, {"a": "2025-01-21 03:05:00", "b": 409.2}, {"a": "2025-01-21 03:10:00", "b": 404.6666666666667}, {"a": "2025-01-21 03:15:00", "b": 403.5}, {"a": "2025-01-21 03:20:00", "b": 402.0}, {"a": "2025-01-21 03:25:00", "b": 405.4}, {"a": "2025-01-21 03:30:00", "b": 403.0}, {"a": "2025-01-21 03:35:00", "b": 403.3333333333333}, {"a": "2025-01-21 03:40:00", "b": 403.25}, {"a": "2025-01-21 03:45:00", "b": 402.5}, {"a": "2025-01-21 03:50:00", "b": 403.0}, {"a": "2025-01-21 03:55:00", "b": 402.5}, {"a": "2025-01-21 04:00:00", "b": 403.3333333333333}, {"a": "2025-01-21 04:05:00", "b": 402.5}, {"a": "2025-01-21 04:10:00", "b": 410.2}, {"a": "2025-01-21 04:15:00", "b": 447.0}, {"a": "2025-01-21 04:20:00", "b": 458.4}, {"a": "2025-01-21 04:25:00", "b": 443.0}, {"a": "2025-01-21 04:30:00", "b": 412.5}, {"a": "2025-01-21 04:35:00", "b": 404.25}, {"a": "2025-01-21 04:40:00", "b": 404.5}, {"a": "2025-01-21 04:45:00", "b": 405.25}, {"a": "2025-01-21 04:50:00", "b": 403.0}, {"a": "2025-01-21 04:55:00", "b": 401.75}, {"a": "2025-01-21 05:00:00", "b": 403.5}, {"a": "2025-01-21 05:05:00", "b": 404.0}, {"a": "2025-01-21 05:10:00", "b": 403.0}, {"a": "2025-01-21 05:15:00", "b": 402.8}, {"a": "2025-01-21 05:20:00", "b": 402.0}, {"a": "2025-01-21 05:25:00", "b": 403.0}, {"a": "2025-01-21 05:30:00", "b": 403.0}, {"a": "2025-01-21 05:35:00", "b": 407.8}, {"a": "2025-01-21 05:40:00", "b": 437.4}, {"a": "2025-01-21 05:45:00", "b": 439.8}, {"a": "2025-01-21 05:50:00", "b": 429.5}, {"a": "2025-01-21 05:55:00", "b": 413.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    