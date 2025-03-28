
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-27 20:00:00", "b": 408.6666666666667}, {"a": "2025-03-27 20:05:00", "b": 416.3333333333333}, {"a": "2025-03-27 20:10:00", "b": 419.0}, {"a": "2025-03-27 20:15:00", "b": 409.0}, {"a": "2025-03-27 20:20:00", "b": 417.25}, {"a": "2025-03-27 20:25:00", "b": 428.6}, {"a": "2025-03-27 20:30:00", "b": 422.4}, {"a": "2025-03-27 20:35:00", "b": 413.25}, {"a": "2025-03-27 20:40:00", "b": 435.4}, {"a": "2025-03-27 20:45:00", "b": 432.25}, {"a": "2025-03-27 20:50:00", "b": 421.6}, {"a": "2025-03-27 20:55:00", "b": 420.4}, {"a": "2025-03-27 21:00:00", "b": 428.25}, {"a": "2025-03-27 21:05:00", "b": 420.8}, {"a": "2025-03-27 21:10:00", "b": 409.0}, {"a": "2025-03-27 21:15:00", "b": 409.5}, {"a": "2025-03-27 21:20:00", "b": 412.25}, {"a": "2025-03-27 21:25:00", "b": 411.0}, {"a": "2025-03-27 21:30:00", "b": 410.0}, {"a": "2025-03-27 21:35:00", "b": 417.0}, {"a": "2025-03-27 21:40:00", "b": 423.8}, {"a": "2025-03-27 21:45:00", "b": 419.2}, {"a": "2025-03-27 21:50:00", "b": 415.75}, {"a": "2025-03-27 21:55:00", "b": 424.0}, {"a": "2025-03-27 22:00:00", "b": 428.0}, {"a": "2025-03-27 22:05:00", "b": 440.8}, {"a": "2025-03-27 22:10:00", "b": 433.6}, {"a": "2025-03-27 22:15:00", "b": 415.0}, {"a": "2025-03-27 22:20:00", "b": 434.8}, {"a": "2025-03-27 22:25:00", "b": 433.25}, {"a": "2025-03-27 22:30:00", "b": 432.0}, {"a": "2025-03-27 22:35:00", "b": 426.0}, {"a": "2025-03-27 22:40:00", "b": 415.75}, {"a": "2025-03-27 22:45:00", "b": 410.0}, {"a": "2025-03-27 22:50:00", "b": 406.75}, {"a": "2025-03-27 22:55:00", "b": 407.0}, {"a": "2025-03-27 23:00:00", "b": 406.6666666666667}, {"a": "2025-03-27 23:05:00", "b": 418.6}, {"a": "2025-03-27 23:10:00", "b": 430.0}, {"a": "2025-03-27 23:15:00", "b": 424.0}, {"a": "2025-03-27 23:20:00", "b": 430.2}, {"a": "2025-03-27 23:25:00", "b": 434.4}, {"a": "2025-03-27 23:30:00", "b": 435.6}, {"a": "2025-03-27 23:35:00", "b": 434.3333333333333}, {"a": "2025-03-27 23:40:00", "b": 430.0}, {"a": "2025-03-27 23:45:00", "b": 420.0}, {"a": "2025-03-27 23:50:00", "b": 411.3333333333333}, {"a": "2025-03-27 23:55:00", "b": 421.8}, {"a": "2025-03-28 00:00:00", "b": 424.3333333333333}, {"a": "2025-03-28 00:05:00", "b": 409.6666666666667}, {"a": "2025-03-28 00:10:00", "b": 410.2}, {"a": "2025-03-28 00:15:00", "b": 410.5}, {"a": "2025-03-28 00:20:00", "b": 409.3333333333333}, {"a": "2025-03-28 00:25:00", "b": 406.0}, {"a": "2025-03-28 00:30:00", "b": 407.0}, {"a": "2025-03-28 00:35:00", "b": 416.0}, {"a": "2025-03-28 00:40:00", "b": 438.75}, {"a": "2025-03-28 00:45:00", "b": 436.6}, {"a": "2025-03-28 00:50:00", "b": 418.8}, {"a": "2025-03-28 00:55:00", "b": 408.6666666666667}, {"a": "2025-03-28 01:00:00", "b": 424.0}, {"a": "2025-03-28 01:05:00", "b": 437.8}, {"a": "2025-03-28 01:10:00", "b": 432.0}, {"a": "2025-03-28 01:15:00", "b": 422.3333333333333}, {"a": "2025-03-28 01:20:00", "b": 426.25}, {"a": "2025-03-28 01:25:00", "b": 424.0}, {"a": "2025-03-28 01:30:00", "b": 424.5}, {"a": "2025-03-28 01:35:00", "b": 422.2}, {"a": "2025-03-28 01:40:00", "b": 407.5}, {"a": "2025-03-28 01:50:00", "b": 412.6666666666667}, {"a": "2025-03-28 01:55:00", "b": 420.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    