
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-10 00:00:00", "b": 523.5}, {"a": "2025-03-10 00:05:00", "b": 526.0}, {"a": "2025-03-10 00:10:00", "b": 521.6}, {"a": "2025-03-10 00:15:00", "b": 525.75}, {"a": "2025-03-10 00:20:00", "b": 525.0}, {"a": "2025-03-10 00:25:00", "b": 526.0}, {"a": "2025-03-10 00:30:00", "b": 519.0}, {"a": "2025-03-10 00:35:00", "b": 510.75}, {"a": "2025-03-10 00:40:00", "b": 511.0}, {"a": "2025-03-10 00:45:00", "b": 516.0}, {"a": "2025-03-10 00:50:00", "b": 512.0}, {"a": "2025-03-10 00:55:00", "b": 517.2}, {"a": "2025-03-10 01:00:00", "b": 525.8}, {"a": "2025-03-10 01:05:00", "b": 513.4}, {"a": "2025-03-10 01:10:00", "b": 512.0}, {"a": "2025-03-10 01:15:00", "b": 500.6}, {"a": "2025-03-10 01:20:00", "b": 497.0}, {"a": "2025-03-10 01:25:00", "b": 498.2}, {"a": "2025-03-10 01:30:00", "b": 496.8}, {"a": "2025-03-10 01:35:00", "b": 500.75}, {"a": "2025-03-10 01:40:00", "b": 503.3333333333333}, {"a": "2025-03-10 01:45:00", "b": 509.5}, {"a": "2025-03-10 01:50:00", "b": 500.3333333333333}, {"a": "2025-03-10 01:55:00", "b": 498.6}, {"a": "2025-03-10 02:00:00", "b": 501.25}, {"a": "2025-03-10 02:05:00", "b": 484.8}, {"a": "2025-03-10 02:10:00", "b": 494.2}, {"a": "2025-03-10 02:15:00", "b": 490.0}, {"a": "2025-03-10 02:20:00", "b": 483.25}, {"a": "2025-03-10 02:25:00", "b": 477.0}, {"a": "2025-03-10 02:30:00", "b": 491.4}, {"a": "2025-03-10 02:35:00", "b": 482.75}, {"a": "2025-03-10 02:40:00", "b": 481.5}, {"a": "2025-03-10 02:45:00", "b": 487.25}, {"a": "2025-03-10 02:50:00", "b": 495.5}, {"a": "2025-03-10 02:55:00", "b": 500.0}, {"a": "2025-03-10 03:00:00", "b": 492.6}, {"a": "2025-03-10 03:05:00", "b": 481.6666666666667}, {"a": "2025-03-10 03:10:00", "b": 475.5}, {"a": "2025-03-10 03:15:00", "b": 474.0}, {"a": "2025-03-10 03:20:00", "b": 480.4}, {"a": "2025-03-10 03:25:00", "b": 482.3333333333333}, {"a": "2025-03-10 03:30:00", "b": 477.5}, {"a": "2025-03-10 03:35:00", "b": 475.4}, {"a": "2025-03-10 03:40:00", "b": 478.3333333333333}, {"a": "2025-03-10 03:45:00", "b": 482.75}, {"a": "2025-03-10 03:50:00", "b": 520.4}, {"a": "2025-03-10 03:55:00", "b": 547.8}, {"a": "2025-03-10 04:00:00", "b": 542.0}, {"a": "2025-03-10 04:05:00", "b": 543.75}, {"a": "2025-03-10 04:10:00", "b": 547.6}, {"a": "2025-03-10 04:15:00", "b": 562.8}, {"a": "2025-03-10 04:20:00", "b": 561.75}, {"a": "2025-03-10 04:25:00", "b": 555.75}, {"a": "2025-03-10 04:30:00", "b": 565.2}, {"a": "2025-03-10 04:35:00", "b": 557.4}, {"a": "2025-03-10 04:40:00", "b": 571.4}, {"a": "2025-03-10 04:45:00", "b": 570.4}, {"a": "2025-03-10 04:50:00", "b": 582.6666666666666}, {"a": "2025-03-10 04:55:00", "b": 576.6}, {"a": "2025-03-10 05:00:00", "b": 568.0}, {"a": "2025-03-10 05:05:00", "b": 574.2}, {"a": "2025-03-10 05:10:00", "b": 553.6}, {"a": "2025-03-10 05:15:00", "b": 572.2}, {"a": "2025-03-10 05:20:00", "b": 569.6666666666666}, {"a": "2025-03-10 05:25:00", "b": 565.5}, {"a": "2025-03-10 05:30:00", "b": 581.2}, {"a": "2025-03-10 05:35:00", "b": 608.2}, {"a": "2025-03-10 05:40:00", "b": 644.8}, {"a": "2025-03-10 05:45:00", "b": 657.8}, {"a": "2025-03-10 05:50:00", "b": 667.6}, {"a": "2025-03-10 05:55:00", "b": 573.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    