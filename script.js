
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-17 01:00:00", "b": 546.0}, {"a": "2025-04-17 01:05:00", "b": 551.6}, {"a": "2025-04-17 01:10:00", "b": 543.8}, {"a": "2025-04-17 01:15:00", "b": 540.0}, {"a": "2025-04-17 01:20:00", "b": 541.8}, {"a": "2025-04-17 01:25:00", "b": 545.8}, {"a": "2025-04-17 01:30:00", "b": 548.2}, {"a": "2025-04-17 01:35:00", "b": 530.8}, {"a": "2025-04-17 01:40:00", "b": 538.8}, {"a": "2025-04-17 01:45:00", "b": 545.3333333333334}, {"a": "2025-04-17 01:50:00", "b": 545.8}, {"a": "2025-04-17 01:55:00", "b": 548.8}, {"a": "2025-04-17 02:00:00", "b": 541.8}, {"a": "2025-04-17 02:05:00", "b": 547.5}, {"a": "2025-04-17 02:10:00", "b": 545.4}, {"a": "2025-04-17 02:15:00", "b": 544.25}, {"a": "2025-04-17 02:20:00", "b": 552.4}, {"a": "2025-04-17 02:25:00", "b": 568.8}, {"a": "2025-04-17 02:30:00", "b": 559.75}, {"a": "2025-04-17 02:35:00", "b": 553.6666666666666}, {"a": "2025-04-17 02:40:00", "b": 557.25}, {"a": "2025-04-17 02:45:00", "b": 548.6}, {"a": "2025-04-17 02:50:00", "b": 544.3333333333334}, {"a": "2025-04-17 02:55:00", "b": 546.0}, {"a": "2025-04-17 03:00:00", "b": 546.6}, {"a": "2025-04-17 03:05:00", "b": 546.4}, {"a": "2025-04-17 03:10:00", "b": 554.6}, {"a": "2025-04-17 03:15:00", "b": 557.75}, {"a": "2025-04-17 03:20:00", "b": 560.0}, {"a": "2025-04-17 03:25:00", "b": 551.4}, {"a": "2025-04-17 03:30:00", "b": 535.6}, {"a": "2025-04-17 03:35:00", "b": 540.5}, {"a": "2025-04-17 03:40:00", "b": 535.0}, {"a": "2025-04-17 03:45:00", "b": 528.2}, {"a": "2025-04-17 03:50:00", "b": 531.25}, {"a": "2025-04-17 03:55:00", "b": 531.0}, {"a": "2025-04-17 04:00:00", "b": 518.75}, {"a": "2025-04-17 04:05:00", "b": 519.6}, {"a": "2025-04-17 04:10:00", "b": 519.75}, {"a": "2025-04-17 04:15:00", "b": 512.8}, {"a": "2025-04-17 04:20:00", "b": 511.75}, {"a": "2025-04-17 04:25:00", "b": 509.25}, {"a": "2025-04-17 04:30:00", "b": 521.2}, {"a": "2025-04-17 04:35:00", "b": 530.25}, {"a": "2025-04-17 04:40:00", "b": 525.4}, {"a": "2025-04-17 04:45:00", "b": 542.6666666666666}, {"a": "2025-04-17 04:50:00", "b": 543.25}, {"a": "2025-04-17 04:55:00", "b": 528.75}, {"a": "2025-04-17 05:00:00", "b": 548.8}, {"a": "2025-04-17 05:05:00", "b": 542.4}, {"a": "2025-04-17 05:10:00", "b": 534.5}, {"a": "2025-04-17 05:15:00", "b": 530.2}, {"a": "2025-04-17 05:20:00", "b": 530.6}, {"a": "2025-04-17 05:25:00", "b": 532.8}, {"a": "2025-04-17 05:30:00", "b": 524.6}, {"a": "2025-04-17 05:35:00", "b": 510.8}, {"a": "2025-04-17 05:40:00", "b": 502.2}, {"a": "2025-04-17 05:45:00", "b": 495.8}, {"a": "2025-04-17 05:50:00", "b": 495.8}, {"a": "2025-04-17 05:55:00", "b": 502.6}, {"a": "2025-04-17 06:00:00", "b": 504.8}, {"a": "2025-04-17 06:05:00", "b": 499.25}, {"a": "2025-04-17 06:10:00", "b": 504.5}, {"a": "2025-04-17 06:15:00", "b": 506.4}, {"a": "2025-04-17 06:20:00", "b": 512.0}, {"a": "2025-04-17 06:25:00", "b": 496.2}, {"a": "2025-04-17 06:30:00", "b": 482.2}, {"a": "2025-04-17 06:35:00", "b": 473.0}, {"a": "2025-04-17 06:40:00", "b": 454.0}, {"a": "2025-04-17 06:45:00", "b": 456.25}, {"a": "2025-04-17 06:50:00", "b": 467.75}, {"a": "2025-04-17 06:55:00", "b": 479.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    