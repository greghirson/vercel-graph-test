
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-18 12:00:00", "b": 481.0}, {"a": "2025-03-18 12:05:00", "b": 480.8}, {"a": "2025-03-18 12:10:00", "b": 483.0}, {"a": "2025-03-18 12:15:00", "b": 476.25}, {"a": "2025-03-18 12:20:00", "b": 475.75}, {"a": "2025-03-18 12:25:00", "b": 474.0}, {"a": "2025-03-18 12:30:00", "b": 479.0}, {"a": "2025-03-18 12:35:00", "b": 464.8}, {"a": "2025-03-18 12:40:00", "b": 460.2}, {"a": "2025-03-18 12:45:00", "b": 466.75}, {"a": "2025-03-18 12:50:00", "b": 502.4}, {"a": "2025-03-18 12:55:00", "b": 463.8}, {"a": "2025-03-18 13:00:00", "b": 423.75}, {"a": "2025-03-18 13:05:00", "b": 421.2}, {"a": "2025-03-18 13:10:00", "b": 424.0}, {"a": "2025-03-18 13:15:00", "b": 427.25}, {"a": "2025-03-18 13:20:00", "b": 418.0}, {"a": "2025-03-18 13:25:00", "b": 420.0}, {"a": "2025-03-18 13:30:00", "b": 425.5}, {"a": "2025-03-18 13:35:00", "b": 445.4}, {"a": "2025-03-18 13:40:00", "b": 458.5}, {"a": "2025-03-18 13:45:00", "b": 444.75}, {"a": "2025-03-18 13:50:00", "b": 434.5}, {"a": "2025-03-18 13:55:00", "b": 442.2}, {"a": "2025-03-18 14:00:00", "b": 442.8}, {"a": "2025-03-18 14:05:00", "b": 436.25}, {"a": "2025-03-18 14:10:00", "b": 434.0}, {"a": "2025-03-18 14:15:00", "b": 413.0}, {"a": "2025-03-18 14:20:00", "b": 408.5}, {"a": "2025-03-18 14:25:00", "b": 408.3333333333333}, {"a": "2025-03-18 14:30:00", "b": 425.4}, {"a": "2025-03-18 14:35:00", "b": 436.5}, {"a": "2025-03-18 14:40:00", "b": 422.0}, {"a": "2025-03-18 14:45:00", "b": 427.25}, {"a": "2025-03-18 14:50:00", "b": 432.0}, {"a": "2025-03-18 14:55:00", "b": 422.6}, {"a": "2025-03-18 15:00:00", "b": 448.0}, {"a": "2025-03-18 15:05:00", "b": 434.4}, {"a": "2025-03-18 15:10:00", "b": 431.2}, {"a": "2025-03-18 15:15:00", "b": 426.0}, {"a": "2025-03-18 15:20:00", "b": 427.25}, {"a": "2025-03-18 15:25:00", "b": 425.6}, {"a": "2025-03-18 15:30:00", "b": 422.5}, {"a": "2025-03-18 15:35:00", "b": 418.0}, {"a": "2025-03-18 15:40:00", "b": 418.25}, {"a": "2025-03-18 15:45:00", "b": 420.6666666666667}, {"a": "2025-03-18 15:50:00", "b": 417.3333333333333}, {"a": "2025-03-18 15:55:00", "b": 410.5}, {"a": "2025-03-18 16:00:00", "b": 409.0}, {"a": "2025-03-18 16:05:00", "b": 413.8}, {"a": "2025-03-18 16:10:00", "b": 412.5}, {"a": "2025-03-18 16:15:00", "b": 412.0}, {"a": "2025-03-18 16:20:00", "b": 413.6}, {"a": "2025-03-18 16:25:00", "b": 411.2}, {"a": "2025-03-18 16:30:00", "b": 405.5}, {"a": "2025-03-18 16:35:00", "b": 403.5}, {"a": "2025-03-18 16:40:00", "b": 403.0}, {"a": "2025-03-18 16:45:00", "b": 406.0}, {"a": "2025-03-18 16:50:00", "b": 406.5}, {"a": "2025-03-18 16:55:00", "b": 408.3333333333333}, {"a": "2025-03-18 17:00:00", "b": 409.0}, {"a": "2025-03-18 17:05:00", "b": 408.0}, {"a": "2025-03-18 17:10:00", "b": 411.6}, {"a": "2025-03-18 17:15:00", "b": 414.0}, {"a": "2025-03-18 17:20:00", "b": 420.5}, {"a": "2025-03-18 17:25:00", "b": 424.75}, {"a": "2025-03-18 17:30:00", "b": 434.25}, {"a": "2025-03-18 17:35:00", "b": 434.3333333333333}, {"a": "2025-03-18 17:40:00", "b": 426.8}, {"a": "2025-03-18 17:45:00", "b": 440.2}, {"a": "2025-03-18 17:50:00", "b": 446.0}, {"a": "2025-03-18 17:55:00", "b": 431.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    