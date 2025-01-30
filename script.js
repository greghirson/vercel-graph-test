
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-29 22:00:00", "b": 573.4}, {"a": "2025-01-29 22:05:00", "b": 577.75}, {"a": "2025-01-29 22:10:00", "b": 562.8}, {"a": "2025-01-29 22:15:00", "b": 567.2}, {"a": "2025-01-29 22:20:00", "b": 574.75}, {"a": "2025-01-29 22:25:00", "b": 585.0}, {"a": "2025-01-29 22:30:00", "b": 577.5}, {"a": "2025-01-29 22:35:00", "b": 560.0}, {"a": "2025-01-29 22:40:00", "b": 552.0}, {"a": "2025-01-29 22:45:00", "b": 554.3333333333334}, {"a": "2025-01-29 22:50:00", "b": 558.2}, {"a": "2025-01-29 22:55:00", "b": 556.6666666666666}, {"a": "2025-01-29 23:00:00", "b": 549.5}, {"a": "2025-01-29 23:05:00", "b": 564.4}, {"a": "2025-01-29 23:10:00", "b": 556.2}, {"a": "2025-01-29 23:15:00", "b": 534.4}, {"a": "2025-01-29 23:20:00", "b": 540.8}, {"a": "2025-01-29 23:25:00", "b": 545.5}, {"a": "2025-01-29 23:30:00", "b": 539.6666666666666}, {"a": "2025-01-29 23:35:00", "b": 536.0}, {"a": "2025-01-29 23:40:00", "b": 535.0}, {"a": "2025-01-29 23:45:00", "b": 532.4}, {"a": "2025-01-29 23:50:00", "b": 538.4}, {"a": "2025-01-29 23:55:00", "b": 523.6}, {"a": "2025-01-30 00:00:00", "b": 513.0}, {"a": "2025-01-30 00:05:00", "b": 519.5}, {"a": "2025-01-30 00:10:00", "b": 522.25}, {"a": "2025-01-30 00:15:00", "b": 530.75}, {"a": "2025-01-30 00:20:00", "b": 540.4}, {"a": "2025-01-30 00:25:00", "b": 540.25}, {"a": "2025-01-30 00:30:00", "b": 531.4}, {"a": "2025-01-30 00:35:00", "b": 526.25}, {"a": "2025-01-30 00:40:00", "b": 542.75}, {"a": "2025-01-30 00:45:00", "b": 551.2}, {"a": "2025-01-30 00:50:00", "b": 540.0}, {"a": "2025-01-30 00:55:00", "b": 551.4}, {"a": "2025-01-30 01:00:00", "b": 543.2}, {"a": "2025-01-30 01:05:00", "b": 537.8}, {"a": "2025-01-30 01:10:00", "b": 546.2}, {"a": "2025-01-30 01:15:00", "b": 553.5}, {"a": "2025-01-30 01:20:00", "b": 553.6}, {"a": "2025-01-30 01:25:00", "b": 559.6}, {"a": "2025-01-30 01:30:00", "b": 553.6}, {"a": "2025-01-30 01:35:00", "b": 546.0}, {"a": "2025-01-30 01:40:00", "b": 547.0}, {"a": "2025-01-30 01:45:00", "b": 554.2}, {"a": "2025-01-30 01:50:00", "b": 547.0}, {"a": "2025-01-30 01:55:00", "b": 535.25}, {"a": "2025-01-30 02:00:00", "b": 540.2}, {"a": "2025-01-30 02:05:00", "b": 540.25}, {"a": "2025-01-30 02:10:00", "b": 538.3333333333334}, {"a": "2025-01-30 02:15:00", "b": 543.6666666666666}, {"a": "2025-01-30 02:20:00", "b": 542.6}, {"a": "2025-01-30 02:25:00", "b": 539.0}, {"a": "2025-01-30 02:30:00", "b": 540.4}, {"a": "2025-01-30 02:35:00", "b": 528.0}, {"a": "2025-01-30 02:40:00", "b": 531.0}, {"a": "2025-01-30 02:45:00", "b": 520.75}, {"a": "2025-01-30 02:50:00", "b": 529.2}, {"a": "2025-01-30 02:55:00", "b": 536.8}, {"a": "2025-01-30 03:00:00", "b": 531.6}, {"a": "2025-01-30 03:05:00", "b": 531.75}, {"a": "2025-01-30 03:10:00", "b": 528.25}, {"a": "2025-01-30 03:15:00", "b": 527.25}, {"a": "2025-01-30 03:20:00", "b": 522.8}, {"a": "2025-01-30 03:25:00", "b": 518.4}, {"a": "2025-01-30 03:30:00", "b": 536.6666666666666}, {"a": "2025-01-30 03:35:00", "b": 518.0}, {"a": "2025-01-30 03:40:00", "b": 516.0}, {"a": "2025-01-30 03:45:00", "b": 510.8}, {"a": "2025-01-30 03:50:00", "b": 513.0}, {"a": "2025-01-30 03:55:00", "b": 525.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    