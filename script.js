
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 01:50:00", "b": 552.0}, {"a": "2024-11-07 01:55:00", "b": 557.0}, {"a": "2024-11-07 02:00:00", "b": 562.0}, {"a": "2024-11-07 02:05:00", "b": 567.8}, {"a": "2024-11-07 02:10:00", "b": 558.8}, {"a": "2024-11-07 02:15:00", "b": 561.5}, {"a": "2024-11-07 02:20:00", "b": 546.4}, {"a": "2024-11-07 02:25:00", "b": 551.75}, {"a": "2024-11-07 02:30:00", "b": 556.0}, {"a": "2024-11-07 02:35:00", "b": 536.4}, {"a": "2024-11-07 02:40:00", "b": 542.6}, {"a": "2024-11-07 02:45:00", "b": 553.0}, {"a": "2024-11-07 02:50:00", "b": 560.6666666666666}, {"a": "2024-11-07 02:55:00", "b": 544.4}, {"a": "2024-11-07 03:00:00", "b": 539.8}, {"a": "2024-11-07 03:05:00", "b": 551.5}, {"a": "2024-11-07 03:10:00", "b": 560.4}, {"a": "2024-11-07 03:15:00", "b": 547.0}, {"a": "2024-11-07 03:20:00", "b": 537.75}, {"a": "2024-11-07 03:25:00", "b": 547.0}, {"a": "2024-11-07 03:30:00", "b": 552.5}, {"a": "2024-11-07 03:35:00", "b": 557.0}, {"a": "2024-11-07 03:40:00", "b": 579.6}, {"a": "2024-11-07 03:45:00", "b": 550.0}, {"a": "2024-11-07 03:50:00", "b": 541.0}, {"a": "2024-11-07 03:55:00", "b": 551.8}, {"a": "2024-11-07 04:00:00", "b": 559.2}, {"a": "2024-11-07 04:05:00", "b": 560.2}, {"a": "2024-11-07 04:10:00", "b": 531.0}, {"a": "2024-11-07 04:15:00", "b": 515.6}, {"a": "2024-11-07 04:20:00", "b": 530.0}, {"a": "2024-11-07 04:25:00", "b": 529.25}, {"a": "2024-11-07 04:30:00", "b": 521.0}, {"a": "2024-11-07 04:35:00", "b": 516.6}, {"a": "2024-11-07 04:40:00", "b": 517.2}, {"a": "2024-11-07 04:45:00", "b": 523.2}, {"a": "2024-11-07 04:50:00", "b": 534.2}, {"a": "2024-11-07 04:55:00", "b": 532.0}, {"a": "2024-11-07 05:00:00", "b": 536.6666666666666}, {"a": "2024-11-07 05:05:00", "b": 521.0}, {"a": "2024-11-07 05:10:00", "b": 530.5}, {"a": "2024-11-07 05:15:00", "b": 534.2}, {"a": "2024-11-07 05:20:00", "b": 531.6}, {"a": "2024-11-07 05:25:00", "b": 535.2}, {"a": "2024-11-07 05:30:00", "b": 523.6}, {"a": "2024-11-07 05:35:00", "b": 522.2}, {"a": "2024-11-07 05:40:00", "b": 514.0}, {"a": "2024-11-07 05:45:00", "b": 518.4}, {"a": "2024-11-07 05:50:00", "b": 516.25}, {"a": "2024-11-07 05:55:00", "b": 522.6}, {"a": "2024-11-07 06:00:00", "b": 540.4}, {"a": "2024-11-07 06:05:00", "b": 539.8}, {"a": "2024-11-07 06:10:00", "b": 544.0}, {"a": "2024-11-07 06:15:00", "b": 544.2}, {"a": "2024-11-07 06:20:00", "b": 556.2}, {"a": "2024-11-07 06:25:00", "b": 561.6}, {"a": "2024-11-07 06:30:00", "b": 550.75}, {"a": "2024-11-07 06:35:00", "b": 550.75}, {"a": "2024-11-07 06:40:00", "b": 567.4}, {"a": "2024-11-07 06:45:00", "b": 568.0}, {"a": "2024-11-07 06:50:00", "b": 562.8}, {"a": "2024-11-07 06:55:00", "b": 557.8}, {"a": "2024-11-07 07:00:00", "b": 575.0}, {"a": "2024-11-07 07:05:00", "b": 596.0}, {"a": "2024-11-07 07:10:00", "b": 619.25}, {"a": "2024-11-07 07:15:00", "b": 615.6}, {"a": "2024-11-07 07:20:00", "b": 617.2}, {"a": "2024-11-07 07:25:00", "b": 644.8}, {"a": "2024-11-07 07:30:00", "b": 652.4}, {"a": "2024-11-07 07:35:00", "b": 636.4}, {"a": "2024-11-07 07:40:00", "b": 629.5}, {"a": "2024-11-07 07:45:00", "b": 641.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    