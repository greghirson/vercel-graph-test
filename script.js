
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-13 06:00:00", "b": 515.0}, {"a": "2024-11-13 06:05:00", "b": 515.8}, {"a": "2024-11-13 06:10:00", "b": 509.0}, {"a": "2024-11-13 06:15:00", "b": 511.2}, {"a": "2024-11-13 06:20:00", "b": 526.75}, {"a": "2024-11-13 06:25:00", "b": 537.6}, {"a": "2024-11-13 06:30:00", "b": 499.5}, {"a": "2024-11-13 06:35:00", "b": 502.0}, {"a": "2024-11-13 06:40:00", "b": 516.0}, {"a": "2024-11-13 06:45:00", "b": 520.2}, {"a": "2024-11-13 06:50:00", "b": 517.2}, {"a": "2024-11-13 06:55:00", "b": 509.75}, {"a": "2024-11-13 07:00:00", "b": 521.4}, {"a": "2024-11-13 07:05:00", "b": 527.5}, {"a": "2024-11-13 07:10:00", "b": 514.5}, {"a": "2024-11-13 07:15:00", "b": 516.6}, {"a": "2024-11-13 07:20:00", "b": 524.2}, {"a": "2024-11-13 07:25:00", "b": 527.0}, {"a": "2024-11-13 07:30:00", "b": 511.0}, {"a": "2024-11-13 07:35:00", "b": 513.75}, {"a": "2024-11-13 07:40:00", "b": 523.0}, {"a": "2024-11-13 07:45:00", "b": 532.2}, {"a": "2024-11-13 07:50:00", "b": 535.25}, {"a": "2024-11-13 07:55:00", "b": 530.25}, {"a": "2024-11-13 08:00:00", "b": 534.8}, {"a": "2024-11-13 08:05:00", "b": 532.2}, {"a": "2024-11-13 08:10:00", "b": 514.25}, {"a": "2024-11-13 08:15:00", "b": 515.25}, {"a": "2024-11-13 08:20:00", "b": 525.4}, {"a": "2024-11-13 08:25:00", "b": 526.5}, {"a": "2024-11-13 08:30:00", "b": 526.8}, {"a": "2024-11-13 08:35:00", "b": 527.0}, {"a": "2024-11-13 08:40:00", "b": 526.6}, {"a": "2024-11-13 08:45:00", "b": 523.0}, {"a": "2024-11-13 08:50:00", "b": 527.5}, {"a": "2024-11-13 08:55:00", "b": 557.8}, {"a": "2024-11-13 09:00:00", "b": 565.4}, {"a": "2024-11-13 09:05:00", "b": 555.6}, {"a": "2024-11-13 09:10:00", "b": 553.5}, {"a": "2024-11-13 09:15:00", "b": 557.75}, {"a": "2024-11-13 09:20:00", "b": 571.2}, {"a": "2024-11-13 09:25:00", "b": 571.4}, {"a": "2024-11-13 09:30:00", "b": 569.4}, {"a": "2024-11-13 09:35:00", "b": 565.4}, {"a": "2024-11-13 09:40:00", "b": 557.5}, {"a": "2024-11-13 09:45:00", "b": 557.0}, {"a": "2024-11-13 09:50:00", "b": 575.2}, {"a": "2024-11-13 09:55:00", "b": 571.8}, {"a": "2024-11-13 10:00:00", "b": 582.75}, {"a": "2024-11-13 10:05:00", "b": 578.8}, {"a": "2024-11-13 10:10:00", "b": 563.3333333333334}, {"a": "2024-11-13 10:15:00", "b": 561.75}, {"a": "2024-11-13 10:20:00", "b": 565.0}, {"a": "2024-11-13 10:25:00", "b": 567.4}, {"a": "2024-11-13 10:30:00", "b": 569.4}, {"a": "2024-11-13 10:35:00", "b": 580.4}, {"a": "2024-11-13 10:40:00", "b": 577.2}, {"a": "2024-11-13 10:45:00", "b": 559.75}, {"a": "2024-11-13 10:50:00", "b": 536.8}, {"a": "2024-11-13 10:55:00", "b": 535.2}, {"a": "2024-11-13 11:00:00", "b": 543.75}, {"a": "2024-11-13 11:05:00", "b": 538.0}, {"a": "2024-11-13 11:10:00", "b": 531.4}, {"a": "2024-11-13 11:15:00", "b": 532.6}, {"a": "2024-11-13 11:20:00", "b": 536.2}, {"a": "2024-11-13 11:25:00", "b": 541.8}, {"a": "2024-11-13 11:30:00", "b": 521.4}, {"a": "2024-11-13 11:35:00", "b": 513.5}, {"a": "2024-11-13 11:40:00", "b": 522.75}, {"a": "2024-11-13 11:45:00", "b": 505.75}, {"a": "2024-11-13 11:50:00", "b": 509.2}, {"a": "2024-11-13 11:55:00", "b": 509.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    