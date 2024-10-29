
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 01:00:00", "b": 571.75}, {"a": "2024-10-29 01:05:00", "b": 573.6}, {"a": "2024-10-29 01:10:00", "b": 572.25}, {"a": "2024-10-29 01:15:00", "b": 570.2}, {"a": "2024-10-29 01:20:00", "b": 561.0}, {"a": "2024-10-29 01:25:00", "b": 554.75}, {"a": "2024-10-29 01:30:00", "b": 559.5}, {"a": "2024-10-29 01:35:00", "b": 553.6}, {"a": "2024-10-29 01:40:00", "b": 564.4}, {"a": "2024-10-29 01:45:00", "b": 572.0}, {"a": "2024-10-29 01:50:00", "b": 566.25}, {"a": "2024-10-29 01:55:00", "b": 568.5}, {"a": "2024-10-29 02:00:00", "b": 554.4}, {"a": "2024-10-29 02:05:00", "b": 549.2}, {"a": "2024-10-29 02:10:00", "b": 559.0}, {"a": "2024-10-29 02:15:00", "b": 559.6666666666666}, {"a": "2024-10-29 02:20:00", "b": 559.0}, {"a": "2024-10-29 02:25:00", "b": 564.25}, {"a": "2024-10-29 02:30:00", "b": 557.0}, {"a": "2024-10-29 02:35:00", "b": 558.6}, {"a": "2024-10-29 02:40:00", "b": 557.4}, {"a": "2024-10-29 02:45:00", "b": 555.0}, {"a": "2024-10-29 02:50:00", "b": 552.75}, {"a": "2024-10-29 02:55:00", "b": 537.2}, {"a": "2024-10-29 03:00:00", "b": 534.8}, {"a": "2024-10-29 03:05:00", "b": 541.6}, {"a": "2024-10-29 03:10:00", "b": 549.0}, {"a": "2024-10-29 03:15:00", "b": 538.8}, {"a": "2024-10-29 03:20:00", "b": 557.6}, {"a": "2024-10-29 03:25:00", "b": 560.6}, {"a": "2024-10-29 03:30:00", "b": 536.8}, {"a": "2024-10-29 03:35:00", "b": 542.75}, {"a": "2024-10-29 03:40:00", "b": 539.2}, {"a": "2024-10-29 03:45:00", "b": 536.4}, {"a": "2024-10-29 03:50:00", "b": 527.6}, {"a": "2024-10-29 03:55:00", "b": 528.8}, {"a": "2024-10-29 04:00:00", "b": 539.8}, {"a": "2024-10-29 04:05:00", "b": 535.6666666666666}, {"a": "2024-10-29 04:10:00", "b": 537.3333333333334}, {"a": "2024-10-29 04:15:00", "b": 535.6}, {"a": "2024-10-29 04:20:00", "b": 524.0}, {"a": "2024-10-29 04:25:00", "b": 522.0}, {"a": "2024-10-29 04:30:00", "b": 530.8}, {"a": "2024-10-29 04:35:00", "b": 520.8}, {"a": "2024-10-29 04:40:00", "b": 508.25}, {"a": "2024-10-29 04:45:00", "b": 508.6}, {"a": "2024-10-29 04:50:00", "b": 520.25}, {"a": "2024-10-29 04:55:00", "b": 520.2}, {"a": "2024-10-29 05:00:00", "b": 516.75}, {"a": "2024-10-29 05:05:00", "b": 515.8}, {"a": "2024-10-29 05:10:00", "b": 507.2}, {"a": "2024-10-29 05:15:00", "b": 505.0}, {"a": "2024-10-29 05:20:00", "b": 500.2}, {"a": "2024-10-29 05:25:00", "b": 499.0}, {"a": "2024-10-29 05:30:00", "b": 506.0}, {"a": "2024-10-29 05:35:00", "b": 510.2}, {"a": "2024-10-29 05:40:00", "b": 505.0}, {"a": "2024-10-29 05:45:00", "b": 506.0}, {"a": "2024-10-29 05:50:00", "b": 504.4}, {"a": "2024-10-29 05:55:00", "b": 498.6}, {"a": "2024-10-29 06:00:00", "b": 502.75}, {"a": "2024-10-29 06:05:00", "b": 512.5}, {"a": "2024-10-29 06:10:00", "b": 508.6}, {"a": "2024-10-29 06:15:00", "b": 503.25}, {"a": "2024-10-29 06:20:00", "b": 503.3333333333333}, {"a": "2024-10-29 06:25:00", "b": 506.8}, {"a": "2024-10-29 06:30:00", "b": 507.5}, {"a": "2024-10-29 06:35:00", "b": 508.2}, {"a": "2024-10-29 06:40:00", "b": 499.6}, {"a": "2024-10-29 06:45:00", "b": 514.0}, {"a": "2024-10-29 06:50:00", "b": 521.8}, {"a": "2024-10-29 06:55:00", "b": 520.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    