
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-16 18:00:00", "b": 515.25}, {"a": "2025-03-16 18:05:00", "b": 512.8}, {"a": "2025-03-16 18:10:00", "b": 510.4}, {"a": "2025-03-16 18:15:00", "b": 499.75}, {"a": "2025-03-16 18:20:00", "b": 504.6666666666667}, {"a": "2025-03-16 18:25:00", "b": 503.2}, {"a": "2025-03-16 18:30:00", "b": 534.6}, {"a": "2025-03-16 18:35:00", "b": 552.0}, {"a": "2025-03-16 18:40:00", "b": 546.25}, {"a": "2025-03-16 18:45:00", "b": 554.0}, {"a": "2025-03-16 18:50:00", "b": 539.0}, {"a": "2025-03-16 18:55:00", "b": 513.75}, {"a": "2025-03-16 19:00:00", "b": 507.2}, {"a": "2025-03-16 19:05:00", "b": 517.2}, {"a": "2025-03-16 19:10:00", "b": 512.3333333333334}, {"a": "2025-03-16 19:15:00", "b": 501.25}, {"a": "2025-03-16 19:20:00", "b": 503.0}, {"a": "2025-03-16 19:25:00", "b": 509.75}, {"a": "2025-03-16 19:30:00", "b": 520.4}, {"a": "2025-03-16 19:35:00", "b": 523.3333333333334}, {"a": "2025-03-16 19:40:00", "b": 524.4}, {"a": "2025-03-16 19:45:00", "b": 525.6}, {"a": "2025-03-16 19:50:00", "b": 542.8}, {"a": "2025-03-16 19:55:00", "b": 550.8}, {"a": "2025-03-16 20:00:00", "b": 547.6}, {"a": "2025-03-16 20:05:00", "b": 548.6}, {"a": "2025-03-16 20:10:00", "b": 558.75}, {"a": "2025-03-16 20:15:00", "b": 565.75}, {"a": "2025-03-16 20:20:00", "b": 561.25}, {"a": "2025-03-16 20:25:00", "b": 571.8}, {"a": "2025-03-16 20:30:00", "b": 575.5}, {"a": "2025-03-16 20:35:00", "b": 594.0}, {"a": "2025-03-16 20:40:00", "b": 593.0}, {"a": "2025-03-16 20:45:00", "b": 584.25}, {"a": "2025-03-16 20:50:00", "b": 582.0}, {"a": "2025-03-16 20:55:00", "b": 594.8}, {"a": "2025-03-16 21:00:00", "b": 607.25}, {"a": "2025-03-16 21:05:00", "b": 592.5}, {"a": "2025-03-16 21:10:00", "b": 607.4}, {"a": "2025-03-16 21:15:00", "b": 598.75}, {"a": "2025-03-16 21:20:00", "b": 588.0}, {"a": "2025-03-16 21:25:00", "b": 582.8}, {"a": "2025-03-16 21:30:00", "b": 581.5}, {"a": "2025-03-16 21:35:00", "b": 596.0}, {"a": "2025-03-16 21:40:00", "b": 575.2}, {"a": "2025-03-16 21:45:00", "b": 572.6}, {"a": "2025-03-16 21:50:00", "b": 582.2}, {"a": "2025-03-16 21:55:00", "b": 572.8}, {"a": "2025-03-16 22:00:00", "b": 568.5}, {"a": "2025-03-16 22:05:00", "b": 562.0}, {"a": "2025-03-16 22:10:00", "b": 571.25}, {"a": "2025-03-16 22:15:00", "b": 586.4}, {"a": "2025-03-16 22:20:00", "b": 591.0}, {"a": "2025-03-16 22:25:00", "b": 589.2}, {"a": "2025-03-16 22:30:00", "b": 604.8}, {"a": "2025-03-16 22:35:00", "b": 592.0}, {"a": "2025-03-16 22:40:00", "b": 584.5}, {"a": "2025-03-16 22:45:00", "b": 603.5}, {"a": "2025-03-16 22:50:00", "b": 599.75}, {"a": "2025-03-16 22:55:00", "b": 590.2}, {"a": "2025-03-16 23:00:00", "b": 585.0}, {"a": "2025-03-16 23:05:00", "b": 576.8}, {"a": "2025-03-16 23:10:00", "b": 584.0}, {"a": "2025-03-16 23:15:00", "b": 557.2}, {"a": "2025-03-16 23:20:00", "b": 562.8}, {"a": "2025-03-16 23:25:00", "b": 566.8}, {"a": "2025-03-16 23:30:00", "b": 570.0}, {"a": "2025-03-16 23:35:00", "b": 560.0}, {"a": "2025-03-16 23:40:00", "b": 553.0}, {"a": "2025-03-16 23:45:00", "b": 561.3333333333334}, {"a": "2025-03-16 23:50:00", "b": 559.6}, {"a": "2025-03-16 23:55:00", "b": 538.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    