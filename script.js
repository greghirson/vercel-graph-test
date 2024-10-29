
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 03:10:00", "b": 549.0}, {"a": "2024-10-29 03:15:00", "b": 538.8}, {"a": "2024-10-29 03:20:00", "b": 557.6}, {"a": "2024-10-29 03:25:00", "b": 560.6}, {"a": "2024-10-29 03:30:00", "b": 536.8}, {"a": "2024-10-29 03:35:00", "b": 542.75}, {"a": "2024-10-29 03:40:00", "b": 539.2}, {"a": "2024-10-29 03:45:00", "b": 536.4}, {"a": "2024-10-29 03:50:00", "b": 527.6}, {"a": "2024-10-29 03:55:00", "b": 528.8}, {"a": "2024-10-29 04:00:00", "b": 539.8}, {"a": "2024-10-29 04:05:00", "b": 535.6666666666666}, {"a": "2024-10-29 04:10:00", "b": 537.3333333333334}, {"a": "2024-10-29 04:15:00", "b": 535.6}, {"a": "2024-10-29 04:20:00", "b": 524.0}, {"a": "2024-10-29 04:25:00", "b": 522.0}, {"a": "2024-10-29 04:30:00", "b": 530.8}, {"a": "2024-10-29 04:35:00", "b": 520.8}, {"a": "2024-10-29 04:40:00", "b": 508.25}, {"a": "2024-10-29 04:45:00", "b": 508.6}, {"a": "2024-10-29 04:50:00", "b": 520.25}, {"a": "2024-10-29 04:55:00", "b": 520.2}, {"a": "2024-10-29 05:00:00", "b": 516.75}, {"a": "2024-10-29 05:05:00", "b": 515.8}, {"a": "2024-10-29 05:10:00", "b": 507.2}, {"a": "2024-10-29 05:15:00", "b": 505.0}, {"a": "2024-10-29 05:20:00", "b": 500.2}, {"a": "2024-10-29 05:25:00", "b": 499.0}, {"a": "2024-10-29 05:30:00", "b": 506.0}, {"a": "2024-10-29 05:35:00", "b": 510.2}, {"a": "2024-10-29 05:40:00", "b": 505.0}, {"a": "2024-10-29 05:45:00", "b": 506.0}, {"a": "2024-10-29 05:50:00", "b": 504.4}, {"a": "2024-10-29 05:55:00", "b": 498.6}, {"a": "2024-10-29 06:00:00", "b": 502.75}, {"a": "2024-10-29 06:05:00", "b": 512.5}, {"a": "2024-10-29 06:10:00", "b": 508.6}, {"a": "2024-10-29 06:15:00", "b": 503.25}, {"a": "2024-10-29 06:20:00", "b": 503.3333333333333}, {"a": "2024-10-29 06:25:00", "b": 506.8}, {"a": "2024-10-29 06:30:00", "b": 507.5}, {"a": "2024-10-29 06:35:00", "b": 508.2}, {"a": "2024-10-29 06:40:00", "b": 499.6}, {"a": "2024-10-29 06:45:00", "b": 514.0}, {"a": "2024-10-29 06:50:00", "b": 521.8}, {"a": "2024-10-29 06:55:00", "b": 520.0}, {"a": "2024-10-29 07:00:00", "b": 510.2}, {"a": "2024-10-29 07:05:00", "b": 521.8}, {"a": "2024-10-29 07:10:00", "b": 534.0}, {"a": "2024-10-29 07:15:00", "b": 516.6}, {"a": "2024-10-29 07:20:00", "b": 511.6666666666667}, {"a": "2024-10-29 07:25:00", "b": 518.4}, {"a": "2024-10-29 07:30:00", "b": 525.2}, {"a": "2024-10-29 07:35:00", "b": 564.0}, {"a": "2024-10-29 07:40:00", "b": 561.5}, {"a": "2024-10-29 07:45:00", "b": 562.6}, {"a": "2024-10-29 07:50:00", "b": 575.8}, {"a": "2024-10-29 07:55:00", "b": 584.5}, {"a": "2024-10-29 08:00:00", "b": 575.2}, {"a": "2024-10-29 08:05:00", "b": 583.0}, {"a": "2024-10-29 08:10:00", "b": 580.2}, {"a": "2024-10-29 08:15:00", "b": 574.0}, {"a": "2024-10-29 08:20:00", "b": 586.4}, {"a": "2024-10-29 08:25:00", "b": 594.4}, {"a": "2024-10-29 08:30:00", "b": 580.6}, {"a": "2024-10-29 08:35:00", "b": 577.75}, {"a": "2024-10-29 08:40:00", "b": 583.0}, {"a": "2024-10-29 08:45:00", "b": 579.4}, {"a": "2024-10-29 08:50:00", "b": 577.5}, {"a": "2024-10-29 08:55:00", "b": 582.0}, {"a": "2024-10-29 09:00:00", "b": 591.0}, {"a": "2024-10-29 09:05:00", "b": 581.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    