
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-30 04:50:00", "b": 557.0}, {"a": "2024-10-30 04:55:00", "b": 568.75}, {"a": "2024-10-30 05:00:00", "b": 568.6}, {"a": "2024-10-30 05:05:00", "b": 552.6}, {"a": "2024-10-30 05:10:00", "b": 552.25}, {"a": "2024-10-30 05:15:00", "b": 557.2}, {"a": "2024-10-30 05:20:00", "b": 564.75}, {"a": "2024-10-30 05:25:00", "b": 560.5}, {"a": "2024-10-30 05:30:00", "b": 561.6}, {"a": "2024-10-30 05:35:00", "b": 561.0}, {"a": "2024-10-30 05:40:00", "b": 553.4}, {"a": "2024-10-30 05:45:00", "b": 542.5}, {"a": "2024-10-30 05:50:00", "b": 552.6666666666666}, {"a": "2024-10-30 05:55:00", "b": 544.5}, {"a": "2024-10-30 06:00:00", "b": 547.2}, {"a": "2024-10-30 06:05:00", "b": 551.75}, {"a": "2024-10-30 06:10:00", "b": 550.8}, {"a": "2024-10-30 06:15:00", "b": 552.4}, {"a": "2024-10-30 06:20:00", "b": 548.6666666666666}, {"a": "2024-10-30 06:25:00", "b": 538.0}, {"a": "2024-10-30 06:30:00", "b": 544.2}, {"a": "2024-10-30 06:35:00", "b": 554.2}, {"a": "2024-10-30 06:40:00", "b": 545.8}, {"a": "2024-10-30 06:45:00", "b": 542.0}, {"a": "2024-10-30 06:50:00", "b": 545.4}, {"a": "2024-10-30 06:55:00", "b": 540.5}, {"a": "2024-10-30 07:00:00", "b": 540.25}, {"a": "2024-10-30 07:05:00", "b": 546.8}, {"a": "2024-10-30 07:10:00", "b": 534.8}, {"a": "2024-10-30 07:15:00", "b": 543.25}, {"a": "2024-10-30 07:20:00", "b": 551.75}, {"a": "2024-10-30 07:25:00", "b": 547.5}, {"a": "2024-10-30 07:30:00", "b": 539.0}, {"a": "2024-10-30 07:35:00", "b": 539.5}, {"a": "2024-10-30 07:40:00", "b": 536.8}, {"a": "2024-10-30 07:45:00", "b": 544.5}, {"a": "2024-10-30 07:50:00", "b": 544.6666666666666}, {"a": "2024-10-30 07:55:00", "b": 542.0}, {"a": "2024-10-30 08:00:00", "b": 532.6}, {"a": "2024-10-30 08:05:00", "b": 540.2}, {"a": "2024-10-30 08:10:00", "b": 542.0}, {"a": "2024-10-30 08:15:00", "b": 548.0}, {"a": "2024-10-30 08:20:00", "b": 544.6666666666666}, {"a": "2024-10-30 08:25:00", "b": 541.6666666666666}, {"a": "2024-10-30 08:30:00", "b": 546.25}, {"a": "2024-10-30 08:35:00", "b": 547.6}, {"a": "2024-10-30 08:40:00", "b": 547.2}, {"a": "2024-10-30 08:45:00", "b": 540.6}, {"a": "2024-10-30 08:50:00", "b": 546.75}, {"a": "2024-10-30 08:55:00", "b": 543.4}, {"a": "2024-10-30 09:00:00", "b": 542.6}, {"a": "2024-10-30 09:05:00", "b": 547.6}, {"a": "2024-10-30 09:10:00", "b": 541.8}, {"a": "2024-10-30 09:15:00", "b": 540.75}, {"a": "2024-10-30 09:20:00", "b": 527.25}, {"a": "2024-10-30 09:25:00", "b": 531.6}, {"a": "2024-10-30 09:30:00", "b": 522.6}, {"a": "2024-10-30 09:35:00", "b": 514.2}, {"a": "2024-10-30 09:40:00", "b": 532.3333333333334}, {"a": "2024-10-30 09:45:00", "b": 539.0}, {"a": "2024-10-30 09:50:00", "b": 518.4}, {"a": "2024-10-30 09:55:00", "b": 513.6}, {"a": "2024-10-30 10:00:00", "b": 516.4}, {"a": "2024-10-30 10:05:00", "b": 518.5}, {"a": "2024-10-30 10:10:00", "b": 520.75}, {"a": "2024-10-30 10:15:00", "b": 524.0}, {"a": "2024-10-30 10:20:00", "b": 517.4}, {"a": "2024-10-30 10:25:00", "b": 517.75}, {"a": "2024-10-30 10:30:00", "b": 515.0}, {"a": "2024-10-30 10:35:00", "b": 509.6}, {"a": "2024-10-30 10:40:00", "b": 510.25}, {"a": "2024-10-30 10:45:00", "b": 499.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    