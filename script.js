
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-30 06:40:00", "b": 545.8}, {"a": "2024-10-30 06:45:00", "b": 542.0}, {"a": "2024-10-30 06:50:00", "b": 545.4}, {"a": "2024-10-30 06:55:00", "b": 540.5}, {"a": "2024-10-30 07:00:00", "b": 540.25}, {"a": "2024-10-30 07:05:00", "b": 546.8}, {"a": "2024-10-30 07:10:00", "b": 534.8}, {"a": "2024-10-30 07:15:00", "b": 543.25}, {"a": "2024-10-30 07:20:00", "b": 551.75}, {"a": "2024-10-30 07:25:00", "b": 547.5}, {"a": "2024-10-30 07:30:00", "b": 539.0}, {"a": "2024-10-30 07:35:00", "b": 539.5}, {"a": "2024-10-30 07:40:00", "b": 536.8}, {"a": "2024-10-30 07:45:00", "b": 544.5}, {"a": "2024-10-30 07:50:00", "b": 544.6666666666666}, {"a": "2024-10-30 07:55:00", "b": 542.0}, {"a": "2024-10-30 08:00:00", "b": 532.6}, {"a": "2024-10-30 08:05:00", "b": 540.2}, {"a": "2024-10-30 08:10:00", "b": 542.0}, {"a": "2024-10-30 08:15:00", "b": 548.0}, {"a": "2024-10-30 08:20:00", "b": 544.6666666666666}, {"a": "2024-10-30 08:25:00", "b": 541.6666666666666}, {"a": "2024-10-30 08:30:00", "b": 546.25}, {"a": "2024-10-30 08:35:00", "b": 547.6}, {"a": "2024-10-30 08:40:00", "b": 547.2}, {"a": "2024-10-30 08:45:00", "b": 540.6}, {"a": "2024-10-30 08:50:00", "b": 546.75}, {"a": "2024-10-30 08:55:00", "b": 543.4}, {"a": "2024-10-30 09:00:00", "b": 542.6}, {"a": "2024-10-30 09:05:00", "b": 547.6}, {"a": "2024-10-30 09:10:00", "b": 541.8}, {"a": "2024-10-30 09:15:00", "b": 540.75}, {"a": "2024-10-30 09:20:00", "b": 527.25}, {"a": "2024-10-30 09:25:00", "b": 531.6}, {"a": "2024-10-30 09:30:00", "b": 522.6}, {"a": "2024-10-30 09:35:00", "b": 514.2}, {"a": "2024-10-30 09:40:00", "b": 532.3333333333334}, {"a": "2024-10-30 09:45:00", "b": 539.0}, {"a": "2024-10-30 09:50:00", "b": 518.4}, {"a": "2024-10-30 09:55:00", "b": 513.6}, {"a": "2024-10-30 10:00:00", "b": 516.4}, {"a": "2024-10-30 10:05:00", "b": 518.5}, {"a": "2024-10-30 10:10:00", "b": 520.75}, {"a": "2024-10-30 10:15:00", "b": 524.0}, {"a": "2024-10-30 10:20:00", "b": 517.4}, {"a": "2024-10-30 10:25:00", "b": 517.75}, {"a": "2024-10-30 10:30:00", "b": 515.0}, {"a": "2024-10-30 10:35:00", "b": 509.6}, {"a": "2024-10-30 10:40:00", "b": 510.25}, {"a": "2024-10-30 10:45:00", "b": 499.2}, {"a": "2024-10-30 10:50:00", "b": 495.6666666666667}, {"a": "2024-10-30 10:55:00", "b": 502.6666666666667}, {"a": "2024-10-30 11:00:00", "b": 490.75}, {"a": "2024-10-30 11:05:00", "b": 489.4}, {"a": "2024-10-30 11:10:00", "b": 495.0}, {"a": "2024-10-30 11:15:00", "b": 489.8}, {"a": "2024-10-30 11:20:00", "b": 496.2}, {"a": "2024-10-30 11:25:00", "b": 499.8}, {"a": "2024-10-30 11:30:00", "b": 482.75}, {"a": "2024-10-30 11:35:00", "b": 483.25}, {"a": "2024-10-30 11:40:00", "b": 494.2}, {"a": "2024-10-30 11:45:00", "b": 490.4}, {"a": "2024-10-30 11:50:00", "b": 481.4}, {"a": "2024-10-30 11:55:00", "b": 486.4}, {"a": "2024-10-30 12:00:00", "b": 464.6}, {"a": "2024-10-30 12:05:00", "b": 483.8}, {"a": "2024-10-30 12:10:00", "b": 489.8}, {"a": "2024-10-30 12:15:00", "b": 490.0}, {"a": "2024-10-30 12:20:00", "b": 483.25}, {"a": "2024-10-30 12:25:00", "b": 468.8}, {"a": "2024-10-30 12:30:00", "b": 470.6}, {"a": "2024-10-30 12:35:00", "b": 482.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    