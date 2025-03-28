
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-27 11:00:00", "b": 442.5}, {"a": "2025-03-27 11:05:00", "b": 440.25}, {"a": "2025-03-27 11:10:00", "b": 433.25}, {"a": "2025-03-27 11:15:00", "b": 440.4}, {"a": "2025-03-27 11:20:00", "b": 437.8}, {"a": "2025-03-27 11:25:00", "b": 429.3333333333333}, {"a": "2025-03-27 11:30:00", "b": 434.0}, {"a": "2025-03-27 11:35:00", "b": 436.2}, {"a": "2025-03-27 11:40:00", "b": 436.8}, {"a": "2025-03-27 11:45:00", "b": 429.75}, {"a": "2025-03-27 11:50:00", "b": 436.0}, {"a": "2025-03-27 11:55:00", "b": 440.25}, {"a": "2025-03-27 12:00:00", "b": 443.4}, {"a": "2025-03-27 12:05:00", "b": 440.6666666666667}, {"a": "2025-03-27 12:10:00", "b": 435.75}, {"a": "2025-03-27 12:15:00", "b": 442.2}, {"a": "2025-03-27 12:20:00", "b": 439.8}, {"a": "2025-03-27 12:25:00", "b": 422.0}, {"a": "2025-03-27 12:30:00", "b": 425.4}, {"a": "2025-03-27 12:35:00", "b": 426.4}, {"a": "2025-03-27 12:40:00", "b": 430.2}, {"a": "2025-03-27 12:45:00", "b": 432.0}, {"a": "2025-03-27 12:50:00", "b": 435.6}, {"a": "2025-03-27 12:55:00", "b": 430.2}, {"a": "2025-03-27 13:00:00", "b": 416.2}, {"a": "2025-03-27 13:05:00", "b": 407.3333333333333}, {"a": "2025-03-27 13:10:00", "b": 408.5}, {"a": "2025-03-27 13:15:00", "b": 412.5}, {"a": "2025-03-27 13:20:00", "b": 426.2}, {"a": "2025-03-27 13:25:00", "b": 427.6}, {"a": "2025-03-27 13:30:00", "b": 426.8}, {"a": "2025-03-27 13:35:00", "b": 431.0}, {"a": "2025-03-27 13:40:00", "b": 425.5}, {"a": "2025-03-27 13:45:00", "b": 424.6}, {"a": "2025-03-27 13:50:00", "b": 422.8}, {"a": "2025-03-27 13:55:00", "b": 418.0}, {"a": "2025-03-27 14:00:00", "b": 435.2}, {"a": "2025-03-27 14:05:00", "b": 431.0}, {"a": "2025-03-27 14:10:00", "b": 416.0}, {"a": "2025-03-27 14:15:00", "b": 417.4}, {"a": "2025-03-27 14:20:00", "b": 410.5}, {"a": "2025-03-27 14:25:00", "b": 416.0}, {"a": "2025-03-27 14:30:00", "b": 415.25}, {"a": "2025-03-27 14:35:00", "b": 416.3333333333333}, {"a": "2025-03-27 14:40:00", "b": 415.2}, {"a": "2025-03-27 14:45:00", "b": 416.0}, {"a": "2025-03-27 14:50:00", "b": 411.0}, {"a": "2025-03-27 14:55:00", "b": 416.0}, {"a": "2025-03-27 15:00:00", "b": 430.6}, {"a": "2025-03-27 15:05:00", "b": 433.75}, {"a": "2025-03-27 15:10:00", "b": 417.8}, {"a": "2025-03-27 15:15:00", "b": 422.8}, {"a": "2025-03-27 15:20:00", "b": 427.6666666666667}, {"a": "2025-03-27 15:25:00", "b": 425.75}, {"a": "2025-03-27 15:30:00", "b": 409.0}, {"a": "2025-03-27 15:35:00", "b": 409.0}, {"a": "2025-03-27 15:40:00", "b": 424.8}, {"a": "2025-03-27 15:45:00", "b": 417.25}, {"a": "2025-03-27 15:50:00", "b": 413.0}, {"a": "2025-03-27 15:55:00", "b": 434.0}, {"a": "2025-03-27 16:00:00", "b": 436.2}, {"a": "2025-03-27 16:05:00", "b": 424.5}, {"a": "2025-03-27 16:10:00", "b": 425.5}, {"a": "2025-03-27 16:15:00", "b": 418.25}, {"a": "2025-03-27 16:20:00", "b": 414.0}, {"a": "2025-03-27 16:25:00", "b": 424.0}, {"a": "2025-03-27 16:30:00", "b": 426.4}, {"a": "2025-03-27 16:35:00", "b": 418.8}, {"a": "2025-03-27 16:40:00", "b": 422.0}, {"a": "2025-03-27 16:45:00", "b": 413.6}, {"a": "2025-03-27 16:50:00", "b": 409.0}, {"a": "2025-03-27 16:55:00", "b": 421.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    