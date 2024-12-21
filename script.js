
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-21 06:00:00", "b": 412.6666666666667}, {"a": "2024-12-21 06:05:00", "b": 411.25}, {"a": "2024-12-21 06:10:00", "b": 502.4}, {"a": "2024-12-21 06:15:00", "b": 537.2}, {"a": "2024-12-21 06:20:00", "b": 489.4}, {"a": "2024-12-21 06:25:00", "b": 485.0}, {"a": "2024-12-21 06:30:00", "b": 473.8}, {"a": "2024-12-21 06:35:00", "b": 473.8}, {"a": "2024-12-21 06:40:00", "b": 474.6}, {"a": "2024-12-21 06:45:00", "b": 471.0}, {"a": "2024-12-21 06:50:00", "b": 470.2}, {"a": "2024-12-21 06:55:00", "b": 461.2}, {"a": "2024-12-21 07:00:00", "b": 457.4}, {"a": "2024-12-21 07:05:00", "b": 454.4}, {"a": "2024-12-21 07:10:00", "b": 486.4}, {"a": "2024-12-21 07:15:00", "b": 495.2}, {"a": "2024-12-21 07:20:00", "b": 484.0}, {"a": "2024-12-21 07:25:00", "b": 473.2}, {"a": "2024-12-21 07:30:00", "b": 485.5}, {"a": "2024-12-21 07:35:00", "b": 483.0}, {"a": "2024-12-21 07:40:00", "b": 488.8}, {"a": "2024-12-21 07:45:00", "b": 481.6666666666667}, {"a": "2024-12-21 07:50:00", "b": 487.6}, {"a": "2024-12-21 07:55:00", "b": 524.8}, {"a": "2024-12-21 08:00:00", "b": 568.2}, {"a": "2024-12-21 08:05:00", "b": 551.6}, {"a": "2024-12-21 08:10:00", "b": 555.5}, {"a": "2024-12-21 08:15:00", "b": 578.4}, {"a": "2024-12-21 08:20:00", "b": 588.4}, {"a": "2024-12-21 08:25:00", "b": 572.0}, {"a": "2024-12-21 08:30:00", "b": 566.0}, {"a": "2024-12-21 08:35:00", "b": 581.0}, {"a": "2024-12-21 08:40:00", "b": 586.8}, {"a": "2024-12-21 08:45:00", "b": 583.6}, {"a": "2024-12-21 08:50:00", "b": 586.4}, {"a": "2024-12-21 08:55:00", "b": 584.2}, {"a": "2024-12-21 09:00:00", "b": 593.6}, {"a": "2024-12-21 09:05:00", "b": 597.4}, {"a": "2024-12-21 09:10:00", "b": 597.0}, {"a": "2024-12-21 09:15:00", "b": 582.2}, {"a": "2024-12-21 09:20:00", "b": 579.0}, {"a": "2024-12-21 09:25:00", "b": 566.0}, {"a": "2024-12-21 09:30:00", "b": 580.8}, {"a": "2024-12-21 09:35:00", "b": 599.75}, {"a": "2024-12-21 09:40:00", "b": 572.6}, {"a": "2024-12-21 09:45:00", "b": 569.5}, {"a": "2024-12-21 09:50:00", "b": 594.0}, {"a": "2024-12-21 09:55:00", "b": 590.5}, {"a": "2024-12-21 10:00:00", "b": 584.8}, {"a": "2024-12-21 10:05:00", "b": 569.2}, {"a": "2024-12-21 10:10:00", "b": 571.5}, {"a": "2024-12-21 10:15:00", "b": 556.0}, {"a": "2024-12-21 10:20:00", "b": 539.2}, {"a": "2024-12-21 10:25:00", "b": 532.6}, {"a": "2024-12-21 10:30:00", "b": 538.6}, {"a": "2024-12-21 10:35:00", "b": 531.8}, {"a": "2024-12-21 10:40:00", "b": 523.3333333333334}, {"a": "2024-12-21 10:45:00", "b": 517.3333333333334}, {"a": "2024-12-21 10:50:00", "b": 510.75}, {"a": "2024-12-21 10:55:00", "b": 515.8}, {"a": "2024-12-21 11:00:00", "b": 519.25}, {"a": "2024-12-21 11:05:00", "b": 516.0}, {"a": "2024-12-21 11:10:00", "b": 512.5}, {"a": "2024-12-21 11:15:00", "b": 497.6}, {"a": "2024-12-21 11:20:00", "b": 506.0}, {"a": "2024-12-21 11:25:00", "b": 499.8}, {"a": "2024-12-21 11:30:00", "b": 500.8}, {"a": "2024-12-21 11:35:00", "b": 499.8}, {"a": "2024-12-21 11:40:00", "b": 502.2}, {"a": "2024-12-21 11:45:00", "b": 517.0}, {"a": "2024-12-21 11:50:00", "b": 508.6}, {"a": "2024-12-21 11:55:00", "b": 522.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    