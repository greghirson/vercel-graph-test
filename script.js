
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-27 00:00:00", "b": 404.5}, {"a": "2025-03-27 00:05:00", "b": 404.5}, {"a": "2025-03-27 00:10:00", "b": 404.5}, {"a": "2025-03-27 00:15:00", "b": 405.6666666666667}, {"a": "2025-03-27 00:20:00", "b": 405.3333333333333}, {"a": "2025-03-27 00:25:00", "b": 406.5}, {"a": "2025-03-27 00:30:00", "b": 408.5}, {"a": "2025-03-27 00:35:00", "b": 410.0}, {"a": "2025-03-27 00:40:00", "b": 408.5}, {"a": "2025-03-27 00:45:00", "b": 413.0}, {"a": "2025-03-27 00:50:00", "b": 407.3333333333333}, {"a": "2025-03-27 00:55:00", "b": 407.5}, {"a": "2025-03-27 01:00:00", "b": 408.0}, {"a": "2025-03-27 01:05:00", "b": 405.0}, {"a": "2025-03-27 01:10:00", "b": 410.75}, {"a": "2025-03-27 01:15:00", "b": 417.0}, {"a": "2025-03-27 01:20:00", "b": 409.3333333333333}, {"a": "2025-03-27 01:25:00", "b": 405.0}, {"a": "2025-03-27 01:30:00", "b": 405.4}, {"a": "2025-03-27 01:35:00", "b": 405.2}, {"a": "2025-03-27 01:40:00", "b": 406.75}, {"a": "2025-03-27 01:45:00", "b": 408.5}, {"a": "2025-03-27 01:50:00", "b": 408.5}, {"a": "2025-03-27 01:55:00", "b": 413.25}, {"a": "2025-03-27 02:00:00", "b": 409.0}, {"a": "2025-03-27 02:05:00", "b": 422.0}, {"a": "2025-03-27 02:10:00", "b": 422.75}, {"a": "2025-03-27 02:15:00", "b": 413.5}, {"a": "2025-03-27 02:20:00", "b": 412.3333333333333}, {"a": "2025-03-27 02:25:00", "b": 411.0}, {"a": "2025-03-27 02:30:00", "b": 411.6666666666667}, {"a": "2025-03-27 02:35:00", "b": 408.8}, {"a": "2025-03-27 02:40:00", "b": 404.5}, {"a": "2025-03-27 02:45:00", "b": 405.0}, {"a": "2025-03-27 02:50:00", "b": 405.3333333333333}, {"a": "2025-03-27 02:55:00", "b": 407.0}, {"a": "2025-03-27 03:00:00", "b": 408.0}, {"a": "2025-03-27 03:05:00", "b": 406.25}, {"a": "2025-03-27 03:10:00", "b": 408.0}, {"a": "2025-03-27 03:15:00", "b": 408.5}, {"a": "2025-03-27 03:20:00", "b": 409.75}, {"a": "2025-03-27 03:25:00", "b": 412.0}, {"a": "2025-03-27 03:30:00", "b": 414.0}, {"a": "2025-03-27 03:35:00", "b": 413.0}, {"a": "2025-03-27 03:40:00", "b": 408.0}, {"a": "2025-03-27 03:45:00", "b": 411.5}, {"a": "2025-03-27 03:50:00", "b": 415.0}, {"a": "2025-03-27 03:55:00", "b": 415.0}, {"a": "2025-03-27 04:00:00", "b": 408.5}, {"a": "2025-03-27 04:05:00", "b": 405.25}, {"a": "2025-03-27 04:10:00", "b": 404.5}, {"a": "2025-03-27 04:15:00", "b": 410.6}, {"a": "2025-03-27 04:20:00", "b": 410.0}, {"a": "2025-03-27 04:25:00", "b": 408.0}, {"a": "2025-03-27 04:40:00", "b": 420.4}, {"a": "2025-03-27 04:45:00", "b": 426.75}, {"a": "2025-03-27 04:50:00", "b": 413.5}, {"a": "2025-03-27 04:55:00", "b": 407.0}, {"a": "2025-03-27 05:00:00", "b": 410.0}, {"a": "2025-03-27 05:05:00", "b": 415.2}, {"a": "2025-03-27 05:10:00", "b": 408.5}, {"a": "2025-03-27 05:15:00", "b": 405.5}, {"a": "2025-03-27 05:20:00", "b": 404.0}, {"a": "2025-03-27 05:25:00", "b": 406.0}, {"a": "2025-03-27 05:30:00", "b": 407.25}, {"a": "2025-03-27 05:35:00", "b": 420.0}, {"a": "2025-03-27 05:40:00", "b": 418.8}, {"a": "2025-03-27 05:45:00", "b": 409.5}, {"a": "2025-03-27 05:50:00", "b": 413.75}, {"a": "2025-03-27 05:55:00", "b": 413.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    