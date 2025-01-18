
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-18 01:00:00", "b": 574.6}, {"a": "2025-01-18 01:05:00", "b": 563.0}, {"a": "2025-01-18 01:10:00", "b": 567.2}, {"a": "2025-01-18 01:15:00", "b": 563.6}, {"a": "2025-01-18 01:20:00", "b": 545.6}, {"a": "2025-01-18 01:25:00", "b": 545.4}, {"a": "2025-01-18 01:30:00", "b": 534.8}, {"a": "2025-01-18 01:35:00", "b": 534.8}, {"a": "2025-01-18 01:40:00", "b": 546.75}, {"a": "2025-01-18 01:45:00", "b": 548.6}, {"a": "2025-01-18 01:50:00", "b": 564.0}, {"a": "2025-01-18 01:55:00", "b": 551.8}, {"a": "2025-01-18 02:00:00", "b": 538.5}, {"a": "2025-01-18 02:05:00", "b": 534.6}, {"a": "2025-01-18 02:10:00", "b": 551.4}, {"a": "2025-01-18 02:15:00", "b": 547.25}, {"a": "2025-01-18 02:20:00", "b": 541.5}, {"a": "2025-01-18 02:25:00", "b": 524.75}, {"a": "2025-01-18 02:30:00", "b": 522.8}, {"a": "2025-01-18 02:35:00", "b": 518.8}, {"a": "2025-01-18 02:40:00", "b": 515.25}, {"a": "2025-01-18 02:45:00", "b": 513.4}, {"a": "2025-01-18 02:50:00", "b": 508.8}, {"a": "2025-01-18 02:55:00", "b": 495.25}, {"a": "2025-01-18 03:00:00", "b": 503.5}, {"a": "2025-01-18 03:05:00", "b": 495.75}, {"a": "2025-01-18 03:10:00", "b": 495.4}, {"a": "2025-01-18 03:15:00", "b": 487.4}, {"a": "2025-01-18 03:20:00", "b": 488.6666666666667}, {"a": "2025-01-18 03:25:00", "b": 491.6}, {"a": "2025-01-18 03:30:00", "b": 493.5}, {"a": "2025-01-18 03:35:00", "b": 492.5}, {"a": "2025-01-18 03:40:00", "b": 475.25}, {"a": "2025-01-18 03:45:00", "b": 472.8}, {"a": "2025-01-18 03:50:00", "b": 486.0}, {"a": "2025-01-18 03:55:00", "b": 481.6}, {"a": "2025-01-18 04:00:00", "b": 466.4}, {"a": "2025-01-18 04:05:00", "b": 462.4}, {"a": "2025-01-18 04:10:00", "b": 474.0}, {"a": "2025-01-18 04:15:00", "b": 470.0}, {"a": "2025-01-18 04:20:00", "b": 471.4}, {"a": "2025-01-18 04:25:00", "b": 464.0}, {"a": "2025-01-18 04:30:00", "b": 467.25}, {"a": "2025-01-18 04:35:00", "b": 483.3333333333333}, {"a": "2025-01-18 04:40:00", "b": 484.5}, {"a": "2025-01-18 04:45:00", "b": 475.75}, {"a": "2025-01-18 04:50:00", "b": 482.75}, {"a": "2025-01-18 04:55:00", "b": 480.6}, {"a": "2025-01-18 05:00:00", "b": 475.2}, {"a": "2025-01-18 05:05:00", "b": 461.0}, {"a": "2025-01-18 05:10:00", "b": 470.75}, {"a": "2025-01-18 05:15:00", "b": 470.2}, {"a": "2025-01-18 05:20:00", "b": 462.6}, {"a": "2025-01-18 05:25:00", "b": 459.4}, {"a": "2025-01-18 05:30:00", "b": 451.5}, {"a": "2025-01-18 05:35:00", "b": 461.8}, {"a": "2025-01-18 05:40:00", "b": 468.8}, {"a": "2025-01-18 05:45:00", "b": 464.2}, {"a": "2025-01-18 05:50:00", "b": 459.6}, {"a": "2025-01-18 05:55:00", "b": 468.2}, {"a": "2025-01-18 06:00:00", "b": 470.25}, {"a": "2025-01-18 06:05:00", "b": 458.8}, {"a": "2025-01-18 06:10:00", "b": 461.0}, {"a": "2025-01-18 06:15:00", "b": 463.25}, {"a": "2025-01-18 06:20:00", "b": 461.0}, {"a": "2025-01-18 06:25:00", "b": 472.0}, {"a": "2025-01-18 06:30:00", "b": 491.5}, {"a": "2025-01-18 06:35:00", "b": 501.0}, {"a": "2025-01-18 06:40:00", "b": 501.25}, {"a": "2025-01-18 06:45:00", "b": 500.0}, {"a": "2025-01-18 06:50:00", "b": 501.2}, {"a": "2025-01-18 06:55:00", "b": 513.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    