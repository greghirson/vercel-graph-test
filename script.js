
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-25 04:00:00", "b": 419.2}, {"a": "2025-03-25 04:05:00", "b": 423.0}, {"a": "2025-03-25 04:10:00", "b": 411.6666666666667}, {"a": "2025-03-25 04:15:00", "b": 414.5}, {"a": "2025-03-25 04:20:00", "b": 411.0}, {"a": "2025-03-25 04:25:00", "b": 416.4}, {"a": "2025-03-25 04:30:00", "b": 417.2}, {"a": "2025-03-25 04:35:00", "b": 421.75}, {"a": "2025-03-25 04:40:00", "b": 416.5}, {"a": "2025-03-25 04:45:00", "b": 406.75}, {"a": "2025-03-25 04:50:00", "b": 404.0}, {"a": "2025-03-25 04:55:00", "b": 405.6666666666667}, {"a": "2025-03-25 05:00:00", "b": 409.0}, {"a": "2025-03-25 05:05:00", "b": 412.6}, {"a": "2025-03-25 05:10:00", "b": 410.75}, {"a": "2025-03-25 05:15:00", "b": 416.4}, {"a": "2025-03-25 05:20:00", "b": 410.8}, {"a": "2025-03-25 05:25:00", "b": 413.75}, {"a": "2025-03-25 05:30:00", "b": 416.75}, {"a": "2025-03-25 05:35:00", "b": 412.0}, {"a": "2025-03-25 05:40:00", "b": 410.4}, {"a": "2025-03-25 05:45:00", "b": 417.0}, {"a": "2025-03-25 05:50:00", "b": 408.0}, {"a": "2025-03-25 05:55:00", "b": 408.25}, {"a": "2025-03-25 06:00:00", "b": 417.5}, {"a": "2025-03-25 06:05:00", "b": 408.4}, {"a": "2025-03-25 06:10:00", "b": 401.6}, {"a": "2025-03-25 06:15:00", "b": 403.3333333333333}, {"a": "2025-03-25 06:20:00", "b": 407.5}, {"a": "2025-03-25 06:25:00", "b": 409.0}, {"a": "2025-03-25 06:30:00", "b": 409.0}, {"a": "2025-03-25 06:35:00", "b": 409.0}, {"a": "2025-03-25 06:40:00", "b": 417.4}, {"a": "2025-03-25 06:45:00", "b": 415.75}, {"a": "2025-03-25 06:50:00", "b": 414.75}, {"a": "2025-03-25 06:55:00", "b": 413.4}, {"a": "2025-03-25 07:00:00", "b": 410.8}, {"a": "2025-03-25 07:05:00", "b": 409.5}, {"a": "2025-03-25 07:10:00", "b": 411.0}, {"a": "2025-03-25 07:15:00", "b": 412.75}, {"a": "2025-03-25 07:20:00", "b": 408.0}, {"a": "2025-03-25 07:25:00", "b": 404.0}, {"a": "2025-03-25 07:30:00", "b": 411.8}, {"a": "2025-03-25 07:35:00", "b": 411.5}, {"a": "2025-03-25 07:40:00", "b": 408.0}, {"a": "2025-03-25 07:45:00", "b": 410.6666666666667}, {"a": "2025-03-25 07:50:00", "b": 412.8}, {"a": "2025-03-25 07:55:00", "b": 409.0}, {"a": "2025-03-25 08:00:00", "b": 419.4}, {"a": "2025-03-25 08:05:00", "b": 433.6}, {"a": "2025-03-25 08:10:00", "b": 433.6}, {"a": "2025-03-25 08:15:00", "b": 416.6666666666667}, {"a": "2025-03-25 08:20:00", "b": 422.6}, {"a": "2025-03-25 08:25:00", "b": 412.2}, {"a": "2025-03-25 08:30:00", "b": 406.6666666666667}, {"a": "2025-03-25 08:35:00", "b": 408.5}, {"a": "2025-03-25 08:40:00", "b": 410.0}, {"a": "2025-03-25 08:45:00", "b": 414.3333333333333}, {"a": "2025-03-25 08:50:00", "b": 414.8}, {"a": "2025-03-25 08:55:00", "b": 416.2}, {"a": "2025-03-25 09:00:00", "b": 411.2}, {"a": "2025-03-25 09:05:00", "b": 414.75}, {"a": "2025-03-25 09:10:00", "b": 431.5}, {"a": "2025-03-25 09:15:00", "b": 426.6}, {"a": "2025-03-25 09:20:00", "b": 419.4}, {"a": "2025-03-25 09:25:00", "b": 413.0}, {"a": "2025-03-25 09:30:00", "b": 412.25}, {"a": "2025-03-25 09:35:00", "b": 414.2}, {"a": "2025-03-25 09:40:00", "b": 402.5}, {"a": "2025-03-25 09:45:00", "b": 411.5}, {"a": "2025-03-25 09:50:00", "b": 410.25}, {"a": "2025-03-25 09:55:00", "b": 408.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    