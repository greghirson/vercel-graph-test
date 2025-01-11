
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-10 19:00:00", "b": 639.8}, {"a": "2025-01-10 19:05:00", "b": 618.0}, {"a": "2025-01-10 19:10:00", "b": 611.25}, {"a": "2025-01-10 19:15:00", "b": 606.0}, {"a": "2025-01-10 19:20:00", "b": 608.8}, {"a": "2025-01-10 19:25:00", "b": 610.25}, {"a": "2025-01-10 19:30:00", "b": 591.0}, {"a": "2025-01-10 19:35:00", "b": 572.6}, {"a": "2025-01-10 19:40:00", "b": 573.4}, {"a": "2025-01-10 19:45:00", "b": 578.75}, {"a": "2025-01-10 19:50:00", "b": 566.4}, {"a": "2025-01-10 19:55:00", "b": 558.0}, {"a": "2025-01-10 20:00:00", "b": 565.75}, {"a": "2025-01-10 20:05:00", "b": 556.8}, {"a": "2025-01-10 20:10:00", "b": 540.4}, {"a": "2025-01-10 20:15:00", "b": 539.8}, {"a": "2025-01-10 20:20:00", "b": 532.2}, {"a": "2025-01-10 20:25:00", "b": 529.0}, {"a": "2025-01-10 20:30:00", "b": 521.0}, {"a": "2025-01-10 20:35:00", "b": 512.6}, {"a": "2025-01-10 20:40:00", "b": 513.0}, {"a": "2025-01-10 20:45:00", "b": 507.0}, {"a": "2025-01-10 20:50:00", "b": 494.2}, {"a": "2025-01-10 20:55:00", "b": 491.25}, {"a": "2025-01-10 21:00:00", "b": 498.2}, {"a": "2025-01-10 21:05:00", "b": 485.25}, {"a": "2025-01-10 21:10:00", "b": 481.0}, {"a": "2025-01-10 21:15:00", "b": 472.0}, {"a": "2025-01-10 21:20:00", "b": 474.8}, {"a": "2025-01-10 21:25:00", "b": 477.0}, {"a": "2025-01-10 21:30:00", "b": 477.25}, {"a": "2025-01-10 21:35:00", "b": 476.8}, {"a": "2025-01-10 21:40:00", "b": 475.0}, {"a": "2025-01-10 21:45:00", "b": 471.5}, {"a": "2025-01-10 21:50:00", "b": 479.8}, {"a": "2025-01-10 21:55:00", "b": 483.0}, {"a": "2025-01-10 22:00:00", "b": 471.4}, {"a": "2025-01-10 22:05:00", "b": 475.6}, {"a": "2025-01-10 22:10:00", "b": 482.5}, {"a": "2025-01-10 22:15:00", "b": 487.0}, {"a": "2025-01-10 22:20:00", "b": 488.6666666666667}, {"a": "2025-01-10 22:25:00", "b": 485.0}, {"a": "2025-01-10 22:30:00", "b": 476.2}, {"a": "2025-01-10 22:35:00", "b": 480.0}, {"a": "2025-01-10 22:40:00", "b": 494.2}, {"a": "2025-01-10 22:45:00", "b": 477.6}, {"a": "2025-01-10 22:50:00", "b": 473.5}, {"a": "2025-01-10 22:55:00", "b": 482.5}, {"a": "2025-01-10 23:00:00", "b": 478.0}, {"a": "2025-01-10 23:05:00", "b": 491.2}, {"a": "2025-01-10 23:10:00", "b": 508.8}, {"a": "2025-01-10 23:15:00", "b": 490.6}, {"a": "2025-01-10 23:20:00", "b": 485.25}, {"a": "2025-01-10 23:25:00", "b": 490.0}, {"a": "2025-01-10 23:30:00", "b": 494.0}, {"a": "2025-01-10 23:35:00", "b": 489.75}, {"a": "2025-01-10 23:40:00", "b": 480.25}, {"a": "2025-01-10 23:45:00", "b": 478.8}, {"a": "2025-01-10 23:50:00", "b": 466.75}, {"a": "2025-01-10 23:55:00", "b": 476.8}, {"a": "2025-01-11 00:00:00", "b": 490.25}, {"a": "2025-01-11 00:05:00", "b": 470.6}, {"a": "2025-01-11 00:10:00", "b": 460.75}, {"a": "2025-01-11 00:15:00", "b": 459.75}, {"a": "2025-01-11 00:20:00", "b": 473.75}, {"a": "2025-01-11 00:25:00", "b": 451.6}, {"a": "2025-01-11 00:30:00", "b": 433.0}, {"a": "2025-01-11 00:35:00", "b": 452.6}, {"a": "2025-01-11 00:40:00", "b": 454.0}, {"a": "2025-01-11 00:45:00", "b": 453.6}, {"a": "2025-01-11 00:50:00", "b": 450.4}, {"a": "2025-01-11 00:55:00", "b": 435.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    