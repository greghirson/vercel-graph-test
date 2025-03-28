
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-28 02:00:00", "b": 425.5}, {"a": "2025-03-28 02:05:00", "b": 435.2}, {"a": "2025-03-28 02:10:00", "b": 432.25}, {"a": "2025-03-28 02:15:00", "b": 419.5}, {"a": "2025-03-28 02:20:00", "b": 426.75}, {"a": "2025-03-28 02:25:00", "b": 429.75}, {"a": "2025-03-28 02:30:00", "b": 433.6666666666667}, {"a": "2025-03-28 02:35:00", "b": 476.4}, {"a": "2025-03-28 02:40:00", "b": 419.0}, {"a": "2025-03-28 02:45:00", "b": 415.25}, {"a": "2025-03-28 02:50:00", "b": 420.4}, {"a": "2025-03-28 02:55:00", "b": 414.5}, {"a": "2025-03-28 03:00:00", "b": 407.5}, {"a": "2025-03-28 03:05:00", "b": 411.5}, {"a": "2025-03-28 03:10:00", "b": 419.0}, {"a": "2025-03-28 03:15:00", "b": 424.75}, {"a": "2025-03-28 03:20:00", "b": 424.0}, {"a": "2025-03-28 03:25:00", "b": 422.8}, {"a": "2025-03-28 03:30:00", "b": 420.4}, {"a": "2025-03-28 03:35:00", "b": 416.4}, {"a": "2025-03-28 03:40:00", "b": 422.0}, {"a": "2025-03-28 03:45:00", "b": 432.4}, {"a": "2025-03-28 03:50:00", "b": 427.0}, {"a": "2025-03-28 03:55:00", "b": 418.75}, {"a": "2025-03-28 04:00:00", "b": 437.3333333333333}, {"a": "2025-03-28 04:05:00", "b": 433.0}, {"a": "2025-03-28 04:10:00", "b": 421.5}, {"a": "2025-03-28 04:15:00", "b": 411.5}, {"a": "2025-03-28 04:20:00", "b": 409.25}, {"a": "2025-03-28 04:25:00", "b": 410.0}, {"a": "2025-03-28 04:30:00", "b": 413.0}, {"a": "2025-03-28 04:35:00", "b": 412.0}, {"a": "2025-03-28 04:40:00", "b": 416.0}, {"a": "2025-03-28 04:45:00", "b": 414.75}, {"a": "2025-03-28 04:50:00", "b": 417.25}, {"a": "2025-03-28 04:55:00", "b": 427.0}, {"a": "2025-03-28 05:00:00", "b": 425.75}, {"a": "2025-03-28 05:05:00", "b": 420.75}, {"a": "2025-03-28 05:10:00", "b": 417.4}, {"a": "2025-03-28 05:15:00", "b": 416.6}, {"a": "2025-03-28 05:20:00", "b": 434.2}, {"a": "2025-03-28 05:25:00", "b": 440.4}, {"a": "2025-03-28 05:30:00", "b": 428.6}, {"a": "2025-03-28 05:35:00", "b": 422.6}, {"a": "2025-03-28 05:40:00", "b": 432.4}, {"a": "2025-03-28 05:45:00", "b": 416.0}, {"a": "2025-03-28 05:50:00", "b": 408.5}, {"a": "2025-03-28 05:55:00", "b": 410.0}, {"a": "2025-03-28 06:00:00", "b": 408.0}, {"a": "2025-03-28 06:05:00", "b": 426.2}, {"a": "2025-03-28 06:10:00", "b": 430.2}, {"a": "2025-03-28 06:15:00", "b": 443.75}, {"a": "2025-03-28 06:20:00", "b": 423.2}, {"a": "2025-03-28 06:25:00", "b": 426.0}, {"a": "2025-03-28 06:30:00", "b": 424.6}, {"a": "2025-03-28 06:35:00", "b": 421.4}, {"a": "2025-03-28 06:40:00", "b": 431.5}, {"a": "2025-03-28 06:45:00", "b": 432.4}, {"a": "2025-03-28 06:50:00", "b": 415.25}, {"a": "2025-03-28 06:55:00", "b": 416.2}, {"a": "2025-03-28 07:00:00", "b": 413.3333333333333}, {"a": "2025-03-28 07:05:00", "b": 407.6666666666667}, {"a": "2025-03-28 07:10:00", "b": 408.5}, {"a": "2025-03-28 07:15:00", "b": 412.5}, {"a": "2025-03-28 07:20:00", "b": 423.8}, {"a": "2025-03-28 07:25:00", "b": 420.5}, {"a": "2025-03-28 07:30:00", "b": 413.4}, {"a": "2025-03-28 07:35:00", "b": 413.6}, {"a": "2025-03-28 07:40:00", "b": 423.2}, {"a": "2025-03-28 07:45:00", "b": 420.5}, {"a": "2025-03-28 07:50:00", "b": 418.0}, {"a": "2025-03-28 07:55:00", "b": 421.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    