
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-30 18:30:00", "b": 514.75}, {"a": "2024-10-30 18:35:00", "b": 525.8}, {"a": "2024-10-30 18:40:00", "b": 524.0}, {"a": "2024-10-30 18:45:00", "b": 529.25}, {"a": "2024-10-30 18:50:00", "b": 538.6666666666666}, {"a": "2024-10-30 18:55:00", "b": 542.4}, {"a": "2024-10-30 19:00:00", "b": 550.0}, {"a": "2024-10-30 19:05:00", "b": 542.0}, {"a": "2024-10-30 19:10:00", "b": 543.0}, {"a": "2024-10-30 19:15:00", "b": 545.0}, {"a": "2024-10-30 19:20:00", "b": 544.4}, {"a": "2024-10-30 19:25:00", "b": 545.2}, {"a": "2024-10-30 19:30:00", "b": 535.0}, {"a": "2024-10-30 19:35:00", "b": 553.6}, {"a": "2024-10-30 19:40:00", "b": 553.2}, {"a": "2024-10-30 19:45:00", "b": 539.5}, {"a": "2024-10-30 19:50:00", "b": 542.0}, {"a": "2024-10-30 19:55:00", "b": 541.75}, {"a": "2024-10-30 20:00:00", "b": 540.6}, {"a": "2024-10-30 20:05:00", "b": 539.0}, {"a": "2024-10-30 20:10:00", "b": 547.0}, {"a": "2024-10-30 20:15:00", "b": 562.8}, {"a": "2024-10-30 20:20:00", "b": 556.4}, {"a": "2024-10-30 20:25:00", "b": 568.6}, {"a": "2024-10-30 20:30:00", "b": 570.0}, {"a": "2024-10-30 20:35:00", "b": 574.0}, {"a": "2024-10-30 20:40:00", "b": 567.0}, {"a": "2024-10-30 20:45:00", "b": 560.6}, {"a": "2024-10-30 20:50:00", "b": 550.25}, {"a": "2024-10-30 20:55:00", "b": 538.5}, {"a": "2024-10-30 21:00:00", "b": 551.6}, {"a": "2024-10-30 21:05:00", "b": 554.75}, {"a": "2024-10-30 21:10:00", "b": 546.2}, {"a": "2024-10-30 21:15:00", "b": 536.4}, {"a": "2024-10-30 21:20:00", "b": 524.4}, {"a": "2024-10-30 21:25:00", "b": 510.25}, {"a": "2024-10-30 21:30:00", "b": 518.0}, {"a": "2024-10-30 21:35:00", "b": 505.6}, {"a": "2024-10-30 21:40:00", "b": 518.2}, {"a": "2024-10-30 21:45:00", "b": 532.5}, {"a": "2024-10-30 21:50:00", "b": 535.5}, {"a": "2024-10-30 21:55:00", "b": 536.5}, {"a": "2024-10-30 22:00:00", "b": 528.6666666666666}, {"a": "2024-10-30 22:05:00", "b": 525.0}, {"a": "2024-10-30 22:10:00", "b": 505.75}, {"a": "2024-10-30 22:15:00", "b": 530.5}, {"a": "2024-10-30 22:20:00", "b": 525.75}, {"a": "2024-10-30 22:25:00", "b": 507.8}, {"a": "2024-10-30 22:30:00", "b": 501.75}, {"a": "2024-10-30 22:35:00", "b": 510.0}, {"a": "2024-10-30 22:40:00", "b": 510.75}, {"a": "2024-10-30 22:45:00", "b": 516.25}, {"a": "2024-10-30 22:50:00", "b": 518.4}, {"a": "2024-10-30 22:55:00", "b": 511.2}, {"a": "2024-10-30 23:00:00", "b": 528.6}, {"a": "2024-10-30 23:05:00", "b": 537.8}, {"a": "2024-10-30 23:10:00", "b": 517.8}, {"a": "2024-10-30 23:15:00", "b": 515.0}, {"a": "2024-10-30 23:20:00", "b": 499.0}, {"a": "2024-10-30 23:25:00", "b": 499.6}, {"a": "2024-10-30 23:30:00", "b": 507.0}, {"a": "2024-10-30 23:35:00", "b": 503.2}, {"a": "2024-10-30 23:40:00", "b": 494.6}, {"a": "2024-10-30 23:45:00", "b": 496.0}, {"a": "2024-10-30 23:50:00", "b": 486.4}, {"a": "2024-10-30 23:55:00", "b": 476.0}, {"a": "2024-10-31 00:00:00", "b": 485.8}, {"a": "2024-10-31 00:05:00", "b": 486.6666666666667}, {"a": "2024-10-31 00:10:00", "b": 479.25}, {"a": "2024-10-31 00:15:00", "b": 465.0}, {"a": "2024-10-31 00:20:00", "b": 447.4}, {"a": "2024-10-31 00:25:00", "b": 457.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    