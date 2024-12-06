
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-05 23:00:00", "b": 498.4}, {"a": "2024-12-05 23:05:00", "b": 505.0}, {"a": "2024-12-05 23:10:00", "b": 503.0}, {"a": "2024-12-05 23:15:00", "b": 505.6}, {"a": "2024-12-05 23:20:00", "b": 491.4}, {"a": "2024-12-05 23:25:00", "b": 499.2}, {"a": "2024-12-05 23:30:00", "b": 492.75}, {"a": "2024-12-05 23:35:00", "b": 489.25}, {"a": "2024-12-05 23:40:00", "b": 496.2}, {"a": "2024-12-05 23:45:00", "b": 503.6}, {"a": "2024-12-05 23:50:00", "b": 504.0}, {"a": "2024-12-05 23:55:00", "b": 495.0}, {"a": "2024-12-06 00:00:00", "b": 482.6}, {"a": "2024-12-06 00:05:00", "b": 472.8}, {"a": "2024-12-06 00:10:00", "b": 473.0}, {"a": "2024-12-06 00:15:00", "b": 473.0}, {"a": "2024-12-06 00:20:00", "b": 476.0}, {"a": "2024-12-06 00:25:00", "b": 492.4}, {"a": "2024-12-06 00:30:00", "b": 524.0}, {"a": "2024-12-06 00:35:00", "b": 514.5}, {"a": "2024-12-06 00:40:00", "b": 521.4}, {"a": "2024-12-06 00:45:00", "b": 522.2}, {"a": "2024-12-06 00:50:00", "b": 519.2}, {"a": "2024-12-06 00:55:00", "b": 507.2}, {"a": "2024-12-06 01:00:00", "b": 481.0}, {"a": "2024-12-06 01:05:00", "b": 481.0}, {"a": "2024-12-06 01:10:00", "b": 480.4}, {"a": "2024-12-06 01:15:00", "b": 470.8}, {"a": "2024-12-06 01:20:00", "b": 480.25}, {"a": "2024-12-06 01:25:00", "b": 488.3333333333333}, {"a": "2024-12-06 01:30:00", "b": 469.8}, {"a": "2024-12-06 01:35:00", "b": 469.6}, {"a": "2024-12-06 01:40:00", "b": 473.2}, {"a": "2024-12-06 01:45:00", "b": 473.0}, {"a": "2024-12-06 01:50:00", "b": 470.8}, {"a": "2024-12-06 01:55:00", "b": 477.4}, {"a": "2024-12-06 02:00:00", "b": 454.0}, {"a": "2024-12-06 02:05:00", "b": 467.8}, {"a": "2024-12-06 02:10:00", "b": 466.6}, {"a": "2024-12-06 02:15:00", "b": 464.75}, {"a": "2024-12-06 02:20:00", "b": 472.6}, {"a": "2024-12-06 02:25:00", "b": 466.0}, {"a": "2024-12-06 02:30:00", "b": 459.6}, {"a": "2024-12-06 02:35:00", "b": 474.4}, {"a": "2024-12-06 02:40:00", "b": 484.0}, {"a": "2024-12-06 02:45:00", "b": 479.2}, {"a": "2024-12-06 02:50:00", "b": 483.0}, {"a": "2024-12-06 02:55:00", "b": 511.2}, {"a": "2024-12-06 03:00:00", "b": 487.0}, {"a": "2024-12-06 03:05:00", "b": 477.4}, {"a": "2024-12-06 03:10:00", "b": 476.75}, {"a": "2024-12-06 03:15:00", "b": 471.2}, {"a": "2024-12-06 03:20:00", "b": 454.2}, {"a": "2024-12-06 03:25:00", "b": 446.5}, {"a": "2024-12-06 03:30:00", "b": 448.5}, {"a": "2024-12-06 03:35:00", "b": 447.4}, {"a": "2024-12-06 03:40:00", "b": 439.0}, {"a": "2024-12-06 03:45:00", "b": 437.5}, {"a": "2024-12-06 03:50:00", "b": 434.2}, {"a": "2024-12-06 03:55:00", "b": 440.25}, {"a": "2024-12-06 04:00:00", "b": 435.0}, {"a": "2024-12-06 04:05:00", "b": 438.8}, {"a": "2024-12-06 04:10:00", "b": 440.2}, {"a": "2024-12-06 04:15:00", "b": 435.0}, {"a": "2024-12-06 04:20:00", "b": 436.0}, {"a": "2024-12-06 04:25:00", "b": 441.25}, {"a": "2024-12-06 04:30:00", "b": 442.5}, {"a": "2024-12-06 04:35:00", "b": 440.5}, {"a": "2024-12-06 04:40:00", "b": 458.0}, {"a": "2024-12-06 04:45:00", "b": 471.6}, {"a": "2024-12-06 04:50:00", "b": 469.5}, {"a": "2024-12-06 04:55:00", "b": 502.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    