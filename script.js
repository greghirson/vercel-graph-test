
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-26 13:00:00", "b": 420.5}, {"a": "2025-03-26 13:05:00", "b": 422.8}, {"a": "2025-03-26 13:10:00", "b": 420.0}, {"a": "2025-03-26 13:15:00", "b": 423.6}, {"a": "2025-03-26 13:20:00", "b": 419.2}, {"a": "2025-03-26 13:25:00", "b": 419.2}, {"a": "2025-03-26 13:30:00", "b": 430.6}, {"a": "2025-03-26 13:35:00", "b": 419.0}, {"a": "2025-03-26 13:40:00", "b": 425.2}, {"a": "2025-03-26 13:45:00", "b": 430.2}, {"a": "2025-03-26 13:50:00", "b": 414.2}, {"a": "2025-03-26 13:55:00", "b": 411.0}, {"a": "2025-03-26 14:00:00", "b": 416.2}, {"a": "2025-03-26 14:05:00", "b": 409.0}, {"a": "2025-03-26 14:10:00", "b": 408.0}, {"a": "2025-03-26 14:15:00", "b": 408.0}, {"a": "2025-03-26 14:20:00", "b": 411.3333333333333}, {"a": "2025-03-26 14:25:00", "b": 409.5}, {"a": "2025-03-26 14:30:00", "b": 415.5}, {"a": "2025-03-26 14:35:00", "b": 412.0}, {"a": "2025-03-26 14:40:00", "b": 407.75}, {"a": "2025-03-26 14:45:00", "b": 407.6666666666667}, {"a": "2025-03-26 14:50:00", "b": 407.0}, {"a": "2025-03-26 14:55:00", "b": 405.3333333333333}, {"a": "2025-03-26 15:00:00", "b": 406.0}, {"a": "2025-03-26 15:05:00", "b": 409.3333333333333}, {"a": "2025-03-26 15:10:00", "b": 415.4}, {"a": "2025-03-26 15:15:00", "b": 412.0}, {"a": "2025-03-26 15:20:00", "b": 408.0}, {"a": "2025-03-26 15:25:00", "b": 411.8}, {"a": "2025-03-26 15:30:00", "b": 410.0}, {"a": "2025-03-26 15:35:00", "b": 408.0}, {"a": "2025-03-26 15:40:00", "b": 411.0}, {"a": "2025-03-26 15:45:00", "b": 409.4}, {"a": "2025-03-26 15:50:00", "b": 409.0}, {"a": "2025-03-26 15:55:00", "b": 410.0}, {"a": "2025-03-26 16:00:00", "b": 408.5}, {"a": "2025-03-26 16:05:00", "b": 408.0}, {"a": "2025-03-26 16:10:00", "b": 406.5}, {"a": "2025-03-26 16:15:00", "b": 406.5}, {"a": "2025-03-26 16:20:00", "b": 405.0}, {"a": "2025-03-26 16:25:00", "b": 406.5}, {"a": "2025-03-26 16:30:00", "b": 409.25}, {"a": "2025-03-26 16:35:00", "b": 413.6}, {"a": "2025-03-26 16:40:00", "b": 409.5}, {"a": "2025-03-26 16:45:00", "b": 408.5}, {"a": "2025-03-26 16:50:00", "b": 407.5}, {"a": "2025-03-26 16:55:00", "b": 408.0}, {"a": "2025-03-26 17:00:00", "b": 410.5}, {"a": "2025-03-26 17:05:00", "b": 409.0}, {"a": "2025-03-26 17:10:00", "b": 414.2}, {"a": "2025-03-26 17:15:00", "b": 409.0}, {"a": "2025-03-26 17:20:00", "b": 408.0}, {"a": "2025-03-26 17:25:00", "b": 406.5}, {"a": "2025-03-26 17:30:00", "b": 404.0}, {"a": "2025-03-26 17:35:00", "b": 403.6}, {"a": "2025-03-26 17:40:00", "b": 403.3333333333333}, {"a": "2025-03-26 17:45:00", "b": 405.0}, {"a": "2025-03-26 17:50:00", "b": 406.0}, {"a": "2025-03-26 17:55:00", "b": 406.0}, {"a": "2025-03-26 18:00:00", "b": 408.0}, {"a": "2025-03-26 18:05:00", "b": 408.0}, {"a": "2025-03-26 18:10:00", "b": 410.0}, {"a": "2025-03-26 18:15:00", "b": 408.75}, {"a": "2025-03-26 18:20:00", "b": 408.0}, {"a": "2025-03-26 18:25:00", "b": 407.3333333333333}, {"a": "2025-03-26 18:30:00", "b": 407.0}, {"a": "2025-03-26 18:35:00", "b": 408.5}, {"a": "2025-03-26 18:40:00", "b": 408.5}, {"a": "2025-03-26 18:45:00", "b": 432.4}, {"a": "2025-03-26 18:50:00", "b": 424.2}, {"a": "2025-03-26 18:55:00", "b": 408.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    