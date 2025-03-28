
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-28 00:00:00", "b": 424.3333333333333}, {"a": "2025-03-28 00:05:00", "b": 409.6666666666667}, {"a": "2025-03-28 00:10:00", "b": 410.2}, {"a": "2025-03-28 00:15:00", "b": 410.5}, {"a": "2025-03-28 00:20:00", "b": 409.3333333333333}, {"a": "2025-03-28 00:25:00", "b": 406.0}, {"a": "2025-03-28 00:30:00", "b": 407.0}, {"a": "2025-03-28 00:35:00", "b": 416.0}, {"a": "2025-03-28 00:40:00", "b": 438.75}, {"a": "2025-03-28 00:45:00", "b": 436.6}, {"a": "2025-03-28 00:50:00", "b": 418.8}, {"a": "2025-03-28 00:55:00", "b": 408.6666666666667}, {"a": "2025-03-28 01:00:00", "b": 424.0}, {"a": "2025-03-28 01:05:00", "b": 437.8}, {"a": "2025-03-28 01:10:00", "b": 432.0}, {"a": "2025-03-28 01:15:00", "b": 422.3333333333333}, {"a": "2025-03-28 01:20:00", "b": 426.25}, {"a": "2025-03-28 01:25:00", "b": 424.0}, {"a": "2025-03-28 01:30:00", "b": 424.5}, {"a": "2025-03-28 01:35:00", "b": 422.2}, {"a": "2025-03-28 01:40:00", "b": 407.5}, {"a": "2025-03-28 01:50:00", "b": 412.6666666666667}, {"a": "2025-03-28 01:55:00", "b": 420.8}, {"a": "2025-03-28 02:00:00", "b": 426.2}, {"a": "2025-03-28 02:05:00", "b": 435.2}, {"a": "2025-03-28 02:10:00", "b": 432.25}, {"a": "2025-03-28 02:15:00", "b": 419.5}, {"a": "2025-03-28 02:20:00", "b": 426.75}, {"a": "2025-03-28 02:25:00", "b": 429.75}, {"a": "2025-03-28 02:30:00", "b": 433.6666666666667}, {"a": "2025-03-28 02:35:00", "b": 476.4}, {"a": "2025-03-28 02:40:00", "b": 419.0}, {"a": "2025-03-28 02:45:00", "b": 415.25}, {"a": "2025-03-28 02:50:00", "b": 420.4}, {"a": "2025-03-28 02:55:00", "b": 414.5}, {"a": "2025-03-28 03:00:00", "b": 407.5}, {"a": "2025-03-28 03:05:00", "b": 411.5}, {"a": "2025-03-28 03:10:00", "b": 419.0}, {"a": "2025-03-28 03:15:00", "b": 424.75}, {"a": "2025-03-28 03:20:00", "b": 424.0}, {"a": "2025-03-28 03:25:00", "b": 422.8}, {"a": "2025-03-28 03:30:00", "b": 420.4}, {"a": "2025-03-28 03:35:00", "b": 416.4}, {"a": "2025-03-28 03:40:00", "b": 422.0}, {"a": "2025-03-28 03:45:00", "b": 432.4}, {"a": "2025-03-28 03:50:00", "b": 427.0}, {"a": "2025-03-28 03:55:00", "b": 418.75}, {"a": "2025-03-28 04:00:00", "b": 437.3333333333333}, {"a": "2025-03-28 04:05:00", "b": 433.0}, {"a": "2025-03-28 04:10:00", "b": 421.5}, {"a": "2025-03-28 04:15:00", "b": 411.5}, {"a": "2025-03-28 04:20:00", "b": 409.25}, {"a": "2025-03-28 04:25:00", "b": 410.0}, {"a": "2025-03-28 04:30:00", "b": 413.0}, {"a": "2025-03-28 04:35:00", "b": 412.0}, {"a": "2025-03-28 04:40:00", "b": 416.0}, {"a": "2025-03-28 04:45:00", "b": 414.75}, {"a": "2025-03-28 04:50:00", "b": 417.25}, {"a": "2025-03-28 04:55:00", "b": 427.0}, {"a": "2025-03-28 05:00:00", "b": 425.75}, {"a": "2025-03-28 05:05:00", "b": 420.75}, {"a": "2025-03-28 05:10:00", "b": 417.4}, {"a": "2025-03-28 05:15:00", "b": 416.6}, {"a": "2025-03-28 05:20:00", "b": 434.2}, {"a": "2025-03-28 05:25:00", "b": 440.4}, {"a": "2025-03-28 05:30:00", "b": 428.6}, {"a": "2025-03-28 05:35:00", "b": 422.6}, {"a": "2025-03-28 05:40:00", "b": 432.4}, {"a": "2025-03-28 05:45:00", "b": 416.0}, {"a": "2025-03-28 05:50:00", "b": 408.5}, {"a": "2025-03-28 05:55:00", "b": 410.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    