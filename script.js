
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-26 11:30:00", "b": 556.75}, {"a": "2024-10-26 11:35:00", "b": 562.6666666666666}, {"a": "2024-10-26 11:40:00", "b": 549.6}, {"a": "2024-10-26 11:45:00", "b": 550.4}, {"a": "2024-10-26 11:50:00", "b": 572.0}, {"a": "2024-10-26 11:55:00", "b": 550.2}, {"a": "2024-10-26 12:00:00", "b": 561.5}, {"a": "2024-10-26 12:05:00", "b": 567.2}, {"a": "2024-10-26 12:10:00", "b": 567.5}, {"a": "2024-10-26 12:15:00", "b": 575.0}, {"a": "2024-10-26 12:20:00", "b": 568.6}, {"a": "2024-10-26 12:25:00", "b": 579.6}, {"a": "2024-10-26 12:30:00", "b": 569.6}, {"a": "2024-10-26 12:35:00", "b": 576.8}, {"a": "2024-10-26 12:40:00", "b": 576.4}, {"a": "2024-10-26 12:45:00", "b": 570.2}, {"a": "2024-10-26 12:50:00", "b": 564.2}, {"a": "2024-10-26 12:55:00", "b": 579.6}, {"a": "2024-10-26 13:00:00", "b": 583.4}, {"a": "2024-10-26 13:05:00", "b": 588.5}, {"a": "2024-10-26 13:10:00", "b": 580.4}, {"a": "2024-10-26 13:15:00", "b": 575.6}, {"a": "2024-10-26 13:20:00", "b": 585.0}, {"a": "2024-10-26 13:25:00", "b": 578.3333333333334}, {"a": "2024-10-26 13:30:00", "b": 567.8}, {"a": "2024-10-26 13:35:00", "b": 575.5}, {"a": "2024-10-26 13:40:00", "b": 566.8}, {"a": "2024-10-26 13:45:00", "b": 561.4}, {"a": "2024-10-26 13:50:00", "b": 567.2}, {"a": "2024-10-26 13:55:00", "b": 568.8}, {"a": "2024-10-26 14:00:00", "b": 566.8}, {"a": "2024-10-26 14:05:00", "b": 557.4}, {"a": "2024-10-26 14:10:00", "b": 550.8}, {"a": "2024-10-26 14:15:00", "b": 548.3333333333334}, {"a": "2024-10-26 14:20:00", "b": 549.25}, {"a": "2024-10-26 14:25:00", "b": 546.0}, {"a": "2024-10-26 14:30:00", "b": 563.75}, {"a": "2024-10-26 14:35:00", "b": 562.75}, {"a": "2024-10-26 14:40:00", "b": 562.0}, {"a": "2024-10-26 14:45:00", "b": 553.0}, {"a": "2024-10-26 14:50:00", "b": 550.0}, {"a": "2024-10-26 14:55:00", "b": 541.25}, {"a": "2024-10-26 15:00:00", "b": 552.4}, {"a": "2024-10-26 15:05:00", "b": 557.3333333333334}, {"a": "2024-10-26 15:10:00", "b": 545.6666666666666}, {"a": "2024-10-26 15:15:00", "b": 554.2}, {"a": "2024-10-26 15:20:00", "b": 561.0}, {"a": "2024-10-26 15:25:00", "b": 554.0}, {"a": "2024-10-26 15:30:00", "b": 543.4}, {"a": "2024-10-26 15:35:00", "b": 556.5}, {"a": "2024-10-26 15:40:00", "b": 558.75}, {"a": "2024-10-26 15:45:00", "b": 545.0}, {"a": "2024-10-26 15:50:00", "b": 538.8}, {"a": "2024-10-26 15:55:00", "b": 536.8}, {"a": "2024-10-26 16:00:00", "b": 553.25}, {"a": "2024-10-26 16:05:00", "b": 556.75}, {"a": "2024-10-26 16:10:00", "b": 534.4}, {"a": "2024-10-26 16:15:00", "b": 522.0}, {"a": "2024-10-26 16:20:00", "b": 529.6}, {"a": "2024-10-26 16:25:00", "b": 547.5}, {"a": "2024-10-26 16:30:00", "b": 546.25}, {"a": "2024-10-26 16:35:00", "b": 540.3333333333334}, {"a": "2024-10-26 16:40:00", "b": 527.4}, {"a": "2024-10-26 16:45:00", "b": 515.2}, {"a": "2024-10-26 16:50:00", "b": 515.2}, {"a": "2024-10-26 16:55:00", "b": 516.4}, {"a": "2024-10-26 17:00:00", "b": 524.0}, {"a": "2024-10-26 17:05:00", "b": 528.6666666666666}, {"a": "2024-10-26 17:10:00", "b": 521.0}, {"a": "2024-10-26 17:15:00", "b": 509.0}, {"a": "2024-10-26 17:20:00", "b": 510.3333333333333}, {"a": "2024-10-26 17:25:00", "b": 520.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    