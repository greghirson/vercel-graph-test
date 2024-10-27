
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-26 14:00:00", "b": 566.8}, {"a": "2024-10-26 14:05:00", "b": 557.4}, {"a": "2024-10-26 14:10:00", "b": 550.8}, {"a": "2024-10-26 14:15:00", "b": 548.3333333333334}, {"a": "2024-10-26 14:20:00", "b": 549.25}, {"a": "2024-10-26 14:25:00", "b": 546.0}, {"a": "2024-10-26 14:30:00", "b": 563.75}, {"a": "2024-10-26 14:35:00", "b": 562.75}, {"a": "2024-10-26 14:40:00", "b": 562.0}, {"a": "2024-10-26 14:45:00", "b": 553.0}, {"a": "2024-10-26 14:50:00", "b": 550.0}, {"a": "2024-10-26 14:55:00", "b": 541.25}, {"a": "2024-10-26 15:00:00", "b": 552.4}, {"a": "2024-10-26 15:05:00", "b": 557.3333333333334}, {"a": "2024-10-26 15:10:00", "b": 545.6666666666666}, {"a": "2024-10-26 15:15:00", "b": 554.2}, {"a": "2024-10-26 15:20:00", "b": 561.0}, {"a": "2024-10-26 15:25:00", "b": 554.0}, {"a": "2024-10-26 15:30:00", "b": 543.4}, {"a": "2024-10-26 15:35:00", "b": 556.5}, {"a": "2024-10-26 15:40:00", "b": 558.75}, {"a": "2024-10-26 15:45:00", "b": 545.0}, {"a": "2024-10-26 15:50:00", "b": 538.8}, {"a": "2024-10-26 15:55:00", "b": 536.8}, {"a": "2024-10-26 16:00:00", "b": 553.25}, {"a": "2024-10-26 16:05:00", "b": 556.75}, {"a": "2024-10-26 16:10:00", "b": 534.4}, {"a": "2024-10-26 16:15:00", "b": 522.0}, {"a": "2024-10-26 16:20:00", "b": 529.6}, {"a": "2024-10-26 16:25:00", "b": 547.5}, {"a": "2024-10-26 16:30:00", "b": 546.25}, {"a": "2024-10-26 16:35:00", "b": 540.3333333333334}, {"a": "2024-10-26 16:40:00", "b": 527.4}, {"a": "2024-10-26 16:45:00", "b": 515.2}, {"a": "2024-10-26 16:50:00", "b": 515.2}, {"a": "2024-10-26 16:55:00", "b": 516.4}, {"a": "2024-10-26 17:00:00", "b": 524.0}, {"a": "2024-10-26 17:05:00", "b": 528.6666666666666}, {"a": "2024-10-26 17:10:00", "b": 521.0}, {"a": "2024-10-26 17:15:00", "b": 509.0}, {"a": "2024-10-26 17:20:00", "b": 510.3333333333333}, {"a": "2024-10-26 17:25:00", "b": 520.0}, {"a": "2024-10-26 17:30:00", "b": 527.0}, {"a": "2024-10-26 17:35:00", "b": 511.0}, {"a": "2024-10-26 17:40:00", "b": 504.6}, {"a": "2024-10-26 17:45:00", "b": 510.3333333333333}, {"a": "2024-10-26 17:50:00", "b": 520.6666666666666}, {"a": "2024-10-26 17:55:00", "b": 532.8}, {"a": "2024-10-26 18:00:00", "b": 549.0}, {"a": "2024-10-26 18:05:00", "b": 561.4}, {"a": "2024-10-26 18:10:00", "b": 581.8}, {"a": "2024-10-26 18:15:00", "b": 577.5}, {"a": "2024-10-26 18:20:00", "b": 571.4}, {"a": "2024-10-26 18:25:00", "b": 558.0}, {"a": "2024-10-26 18:30:00", "b": 592.8}, {"a": "2024-10-26 18:35:00", "b": 692.6}, {"a": "2024-10-26 18:40:00", "b": 798.4}, {"a": "2024-10-26 18:45:00", "b": 839.0}, {"a": "2024-10-26 18:50:00", "b": 848.0}, {"a": "2024-10-26 18:55:00", "b": 852.6}, {"a": "2024-10-26 19:00:00", "b": 849.0}, {"a": "2024-10-26 19:05:00", "b": 842.75}, {"a": "2024-10-26 19:10:00", "b": 849.25}, {"a": "2024-10-26 19:15:00", "b": 853.6}, {"a": "2024-10-26 19:20:00", "b": 852.4}, {"a": "2024-10-26 19:25:00", "b": 844.5}, {"a": "2024-10-26 19:30:00", "b": 847.75}, {"a": "2024-10-26 19:35:00", "b": 838.6}, {"a": "2024-10-26 19:40:00", "b": 829.3333333333334}, {"a": "2024-10-26 19:45:00", "b": 838.0}, {"a": "2024-10-26 19:50:00", "b": 839.0}, {"a": "2024-10-26 19:55:00", "b": 832.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    