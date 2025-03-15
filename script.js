
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-15 02:00:00", "b": 478.75}, {"a": "2025-03-15 02:05:00", "b": 615.0}, {"a": "2025-03-15 02:10:00", "b": 606.6}, {"a": "2025-03-15 02:15:00", "b": 568.4}, {"a": "2025-03-15 02:20:00", "b": 574.75}, {"a": "2025-03-15 02:25:00", "b": 562.0}, {"a": "2025-03-15 02:30:00", "b": 552.0}, {"a": "2025-03-15 02:35:00", "b": 546.0}, {"a": "2025-03-15 02:40:00", "b": 545.4}, {"a": "2025-03-15 02:45:00", "b": 560.8}, {"a": "2025-03-15 02:50:00", "b": 565.2}, {"a": "2025-03-15 02:55:00", "b": 564.2}, {"a": "2025-03-15 03:00:00", "b": 569.0}, {"a": "2025-03-15 03:05:00", "b": 563.2}, {"a": "2025-03-15 03:10:00", "b": 574.2}, {"a": "2025-03-15 03:15:00", "b": 570.75}, {"a": "2025-03-15 03:20:00", "b": 574.0}, {"a": "2025-03-15 03:25:00", "b": 566.4}, {"a": "2025-03-15 03:30:00", "b": 567.4}, {"a": "2025-03-15 03:35:00", "b": 569.2}, {"a": "2025-03-15 03:40:00", "b": 555.6}, {"a": "2025-03-15 03:45:00", "b": 542.4}, {"a": "2025-03-15 03:50:00", "b": 544.2}, {"a": "2025-03-15 03:55:00", "b": 550.8}, {"a": "2025-03-15 04:00:00", "b": 560.0}, {"a": "2025-03-15 04:05:00", "b": 555.4}, {"a": "2025-03-15 04:10:00", "b": 565.8}, {"a": "2025-03-15 04:15:00", "b": 565.8}, {"a": "2025-03-15 04:20:00", "b": 564.0}, {"a": "2025-03-15 04:25:00", "b": 574.6}, {"a": "2025-03-15 04:30:00", "b": 565.0}, {"a": "2025-03-15 04:35:00", "b": 562.75}, {"a": "2025-03-15 04:40:00", "b": 552.6}, {"a": "2025-03-15 04:45:00", "b": 534.0}, {"a": "2025-03-15 04:50:00", "b": 526.4}, {"a": "2025-03-15 04:55:00", "b": 510.0}, {"a": "2025-03-15 05:00:00", "b": 511.2}, {"a": "2025-03-15 05:05:00", "b": 506.4}, {"a": "2025-03-15 05:10:00", "b": 479.2}, {"a": "2025-03-15 05:15:00", "b": 475.6666666666667}, {"a": "2025-03-15 05:20:00", "b": 489.6}, {"a": "2025-03-15 05:25:00", "b": 506.25}, {"a": "2025-03-15 05:30:00", "b": 504.8}, {"a": "2025-03-15 05:35:00", "b": 499.6}, {"a": "2025-03-15 05:40:00", "b": 510.6}, {"a": "2025-03-15 05:45:00", "b": 502.25}, {"a": "2025-03-15 05:50:00", "b": 505.2}, {"a": "2025-03-15 05:55:00", "b": 514.25}, {"a": "2025-03-15 06:00:00", "b": 523.4}, {"a": "2025-03-15 06:05:00", "b": 538.2}, {"a": "2025-03-15 06:10:00", "b": 538.75}, {"a": "2025-03-15 06:15:00", "b": 534.25}, {"a": "2025-03-15 06:20:00", "b": 538.2}, {"a": "2025-03-15 06:25:00", "b": 554.0}, {"a": "2025-03-15 06:30:00", "b": 546.4}, {"a": "2025-03-15 06:35:00", "b": 541.5}, {"a": "2025-03-15 06:40:00", "b": 545.8}, {"a": "2025-03-15 06:45:00", "b": 548.6666666666666}, {"a": "2025-03-15 06:50:00", "b": 548.25}, {"a": "2025-03-15 06:55:00", "b": 547.8}, {"a": "2025-03-15 07:00:00", "b": 539.8}, {"a": "2025-03-15 07:05:00", "b": 532.2}, {"a": "2025-03-15 07:10:00", "b": 517.0}, {"a": "2025-03-15 07:15:00", "b": 503.75}, {"a": "2025-03-15 07:20:00", "b": 536.0}, {"a": "2025-03-15 07:25:00", "b": 551.6666666666666}, {"a": "2025-03-15 07:30:00", "b": 541.6}, {"a": "2025-03-15 07:35:00", "b": 547.0}, {"a": "2025-03-15 07:40:00", "b": 541.2}, {"a": "2025-03-15 07:45:00", "b": 594.4}, {"a": "2025-03-15 07:50:00", "b": 719.8}, {"a": "2025-03-15 07:55:00", "b": 765.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    