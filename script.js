
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-02 03:00:00", "b": 557.0}, {"a": "2025-02-02 03:05:00", "b": 549.0}, {"a": "2025-02-02 03:10:00", "b": 553.8}, {"a": "2025-02-02 03:15:00", "b": 547.6}, {"a": "2025-02-02 03:20:00", "b": 539.8}, {"a": "2025-02-02 03:25:00", "b": 539.0}, {"a": "2025-02-02 03:30:00", "b": 542.0}, {"a": "2025-02-02 03:35:00", "b": 535.4}, {"a": "2025-02-02 03:40:00", "b": 531.5}, {"a": "2025-02-02 03:45:00", "b": 541.5}, {"a": "2025-02-02 03:50:00", "b": 541.8}, {"a": "2025-02-02 03:55:00", "b": 528.0}, {"a": "2025-02-02 04:00:00", "b": 519.6}, {"a": "2025-02-02 04:05:00", "b": 521.25}, {"a": "2025-02-02 04:10:00", "b": 530.0}, {"a": "2025-02-02 04:15:00", "b": 537.8}, {"a": "2025-02-02 04:20:00", "b": 530.25}, {"a": "2025-02-02 04:25:00", "b": 527.25}, {"a": "2025-02-02 04:30:00", "b": 529.5}, {"a": "2025-02-02 04:35:00", "b": 524.25}, {"a": "2025-02-02 04:40:00", "b": 521.2}, {"a": "2025-02-02 04:45:00", "b": 517.25}, {"a": "2025-02-02 04:50:00", "b": 525.0}, {"a": "2025-02-02 04:55:00", "b": 533.3333333333334}, {"a": "2025-02-02 05:00:00", "b": 526.6}, {"a": "2025-02-02 05:05:00", "b": 509.5}, {"a": "2025-02-02 05:10:00", "b": 513.0}, {"a": "2025-02-02 05:15:00", "b": 511.0}, {"a": "2025-02-02 05:20:00", "b": 506.2}, {"a": "2025-02-02 05:25:00", "b": 502.6}, {"a": "2025-02-02 05:30:00", "b": 511.75}, {"a": "2025-02-02 05:35:00", "b": 517.6}, {"a": "2025-02-02 05:40:00", "b": 514.75}, {"a": "2025-02-02 05:45:00", "b": 507.2}, {"a": "2025-02-02 05:50:00", "b": 512.0}, {"a": "2025-02-02 05:55:00", "b": 504.0}, {"a": "2025-02-02 06:00:00", "b": 504.8}, {"a": "2025-02-02 06:05:00", "b": 506.5}, {"a": "2025-02-02 06:10:00", "b": 498.0}, {"a": "2025-02-02 06:15:00", "b": 499.4}, {"a": "2025-02-02 06:20:00", "b": 501.8}, {"a": "2025-02-02 06:25:00", "b": 504.5}, {"a": "2025-02-02 06:30:00", "b": 508.0}, {"a": "2025-02-02 06:35:00", "b": 492.8}, {"a": "2025-02-02 06:40:00", "b": 495.2}, {"a": "2025-02-02 06:45:00", "b": 509.4}, {"a": "2025-02-02 06:50:00", "b": 512.3333333333334}, {"a": "2025-02-02 06:55:00", "b": 511.3333333333333}, {"a": "2025-02-02 07:00:00", "b": 514.6666666666666}, {"a": "2025-02-02 07:05:00", "b": 513.2}, {"a": "2025-02-02 07:10:00", "b": 500.6}, {"a": "2025-02-02 07:15:00", "b": 508.0}, {"a": "2025-02-02 07:20:00", "b": 517.6666666666666}, {"a": "2025-02-02 07:25:00", "b": 511.2}, {"a": "2025-02-02 07:30:00", "b": 509.4}, {"a": "2025-02-02 07:35:00", "b": 507.6}, {"a": "2025-02-02 07:40:00", "b": 512.0}, {"a": "2025-02-02 07:45:00", "b": 510.6666666666667}, {"a": "2025-02-02 07:50:00", "b": 516.8}, {"a": "2025-02-02 07:55:00", "b": 517.4}, {"a": "2025-02-02 08:00:00", "b": 511.0}, {"a": "2025-02-02 08:05:00", "b": 502.75}, {"a": "2025-02-02 08:10:00", "b": 507.6}, {"a": "2025-02-02 08:15:00", "b": 508.0}, {"a": "2025-02-02 08:20:00", "b": 507.0}, {"a": "2025-02-02 08:25:00", "b": 539.4}, {"a": "2025-02-02 08:30:00", "b": 607.6}, {"a": "2025-02-02 08:35:00", "b": 649.6}, {"a": "2025-02-02 08:40:00", "b": 685.0}, {"a": "2025-02-02 08:45:00", "b": 714.75}, {"a": "2025-02-02 08:50:00", "b": 736.6}, {"a": "2025-02-02 08:55:00", "b": 728.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    