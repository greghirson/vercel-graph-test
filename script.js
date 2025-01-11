
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-10 21:00:00", "b": 498.2}, {"a": "2025-01-10 21:05:00", "b": 485.25}, {"a": "2025-01-10 21:10:00", "b": 481.0}, {"a": "2025-01-10 21:15:00", "b": 472.0}, {"a": "2025-01-10 21:20:00", "b": 474.8}, {"a": "2025-01-10 21:25:00", "b": 477.0}, {"a": "2025-01-10 21:30:00", "b": 477.25}, {"a": "2025-01-10 21:35:00", "b": 476.8}, {"a": "2025-01-10 21:40:00", "b": 475.0}, {"a": "2025-01-10 21:45:00", "b": 471.5}, {"a": "2025-01-10 21:50:00", "b": 479.8}, {"a": "2025-01-10 21:55:00", "b": 483.0}, {"a": "2025-01-10 22:00:00", "b": 471.4}, {"a": "2025-01-10 22:05:00", "b": 475.6}, {"a": "2025-01-10 22:10:00", "b": 482.5}, {"a": "2025-01-10 22:15:00", "b": 487.0}, {"a": "2025-01-10 22:20:00", "b": 488.6666666666667}, {"a": "2025-01-10 22:25:00", "b": 485.0}, {"a": "2025-01-10 22:30:00", "b": 476.2}, {"a": "2025-01-10 22:35:00", "b": 480.0}, {"a": "2025-01-10 22:40:00", "b": 494.2}, {"a": "2025-01-10 22:45:00", "b": 477.6}, {"a": "2025-01-10 22:50:00", "b": 473.5}, {"a": "2025-01-10 22:55:00", "b": 482.5}, {"a": "2025-01-10 23:00:00", "b": 478.0}, {"a": "2025-01-10 23:05:00", "b": 491.2}, {"a": "2025-01-10 23:10:00", "b": 508.8}, {"a": "2025-01-10 23:15:00", "b": 490.6}, {"a": "2025-01-10 23:20:00", "b": 485.25}, {"a": "2025-01-10 23:25:00", "b": 490.0}, {"a": "2025-01-10 23:30:00", "b": 494.0}, {"a": "2025-01-10 23:35:00", "b": 489.75}, {"a": "2025-01-10 23:40:00", "b": 480.25}, {"a": "2025-01-10 23:45:00", "b": 478.8}, {"a": "2025-01-10 23:50:00", "b": 466.75}, {"a": "2025-01-10 23:55:00", "b": 476.8}, {"a": "2025-01-11 00:00:00", "b": 490.25}, {"a": "2025-01-11 00:05:00", "b": 470.6}, {"a": "2025-01-11 00:10:00", "b": 460.75}, {"a": "2025-01-11 00:15:00", "b": 459.75}, {"a": "2025-01-11 00:20:00", "b": 473.75}, {"a": "2025-01-11 00:25:00", "b": 451.6}, {"a": "2025-01-11 00:30:00", "b": 433.0}, {"a": "2025-01-11 00:35:00", "b": 452.6}, {"a": "2025-01-11 00:40:00", "b": 454.0}, {"a": "2025-01-11 00:45:00", "b": 453.6}, {"a": "2025-01-11 00:50:00", "b": 450.4}, {"a": "2025-01-11 00:55:00", "b": 435.5}, {"a": "2025-01-11 01:00:00", "b": 424.2}, {"a": "2025-01-11 01:05:00", "b": 434.0}, {"a": "2025-01-11 01:10:00", "b": 429.2}, {"a": "2025-01-11 01:15:00", "b": 424.0}, {"a": "2025-01-11 01:20:00", "b": 420.4}, {"a": "2025-01-11 01:25:00", "b": 427.2}, {"a": "2025-01-11 01:30:00", "b": 423.5}, {"a": "2025-01-11 01:35:00", "b": 416.5}, {"a": "2025-01-11 01:40:00", "b": 411.0}, {"a": "2025-01-11 01:45:00", "b": 410.3333333333333}, {"a": "2025-01-11 01:50:00", "b": 412.6}, {"a": "2025-01-11 01:55:00", "b": 408.0}, {"a": "2025-01-11 02:00:00", "b": 408.0}, {"a": "2025-01-11 02:10:00", "b": 406.6}, {"a": "2025-01-11 02:15:00", "b": 406.0}, {"a": "2025-01-11 02:20:00", "b": 404.0}, {"a": "2025-01-11 02:25:00", "b": 402.0}, {"a": "2025-01-11 02:30:00", "b": 403.2}, {"a": "2025-01-11 02:35:00", "b": 413.0}, {"a": "2025-01-11 02:40:00", "b": 416.0}, {"a": "2025-01-11 02:45:00", "b": 404.75}, {"a": "2025-01-11 02:50:00", "b": 403.0}, {"a": "2025-01-11 02:55:00", "b": 402.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    