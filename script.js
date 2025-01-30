
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-30 06:00:00", "b": 542.4}, {"a": "2025-01-30 06:05:00", "b": 534.6}, {"a": "2025-01-30 06:10:00", "b": 536.75}, {"a": "2025-01-30 06:15:00", "b": 542.0}, {"a": "2025-01-30 06:20:00", "b": 545.0}, {"a": "2025-01-30 06:25:00", "b": 544.8}, {"a": "2025-01-30 06:30:00", "b": 535.75}, {"a": "2025-01-30 06:35:00", "b": 544.2}, {"a": "2025-01-30 06:40:00", "b": 551.75}, {"a": "2025-01-30 06:45:00", "b": 547.2}, {"a": "2025-01-30 06:50:00", "b": 544.8}, {"a": "2025-01-30 06:55:00", "b": 559.5}, {"a": "2025-01-30 07:00:00", "b": 560.4}, {"a": "2025-01-30 07:05:00", "b": 558.0}, {"a": "2025-01-30 07:10:00", "b": 554.6}, {"a": "2025-01-30 07:15:00", "b": 563.2}, {"a": "2025-01-30 07:20:00", "b": 564.5}, {"a": "2025-01-30 07:25:00", "b": 548.4}, {"a": "2025-01-30 07:30:00", "b": 558.0}, {"a": "2025-01-30 07:35:00", "b": 599.0}, {"a": "2025-01-30 07:40:00", "b": 733.8}, {"a": "2025-01-30 07:45:00", "b": 672.4}, {"a": "2025-01-30 07:50:00", "b": 654.5}, {"a": "2025-01-30 07:55:00", "b": 656.0}, {"a": "2025-01-30 08:00:00", "b": 645.5}, {"a": "2025-01-30 08:05:00", "b": 640.25}, {"a": "2025-01-30 08:10:00", "b": 642.0}, {"a": "2025-01-30 08:15:00", "b": 627.4}, {"a": "2025-01-30 08:20:00", "b": 630.0}, {"a": "2025-01-30 08:25:00", "b": 636.75}, {"a": "2025-01-30 08:30:00", "b": 611.6}, {"a": "2025-01-30 08:35:00", "b": 609.3333333333334}, {"a": "2025-01-30 08:40:00", "b": 616.0}, {"a": "2025-01-30 08:45:00", "b": 612.3333333333334}, {"a": "2025-01-30 08:50:00", "b": 612.5}, {"a": "2025-01-30 08:55:00", "b": 598.5}, {"a": "2025-01-30 09:00:00", "b": 585.6666666666666}, {"a": "2025-01-30 09:05:00", "b": 571.4}, {"a": "2025-01-30 09:10:00", "b": 569.75}, {"a": "2025-01-30 09:15:00", "b": 575.0}, {"a": "2025-01-30 09:20:00", "b": 568.25}, {"a": "2025-01-30 09:25:00", "b": 568.75}, {"a": "2025-01-30 09:30:00", "b": 562.3333333333334}, {"a": "2025-01-30 09:35:00", "b": 567.75}, {"a": "2025-01-30 09:40:00", "b": 555.5}, {"a": "2025-01-30 09:45:00", "b": 554.0}, {"a": "2025-01-30 09:50:00", "b": 551.25}, {"a": "2025-01-30 09:55:00", "b": 548.4}, {"a": "2025-01-30 10:00:00", "b": 542.2}, {"a": "2025-01-30 10:05:00", "b": 553.2}, {"a": "2025-01-30 10:10:00", "b": 554.25}, {"a": "2025-01-30 10:15:00", "b": 539.4}, {"a": "2025-01-30 10:20:00", "b": 527.6}, {"a": "2025-01-30 10:25:00", "b": 517.0}, {"a": "2025-01-30 10:30:00", "b": 528.8}, {"a": "2025-01-30 10:35:00", "b": 528.75}, {"a": "2025-01-30 10:40:00", "b": 514.5}, {"a": "2025-01-30 10:45:00", "b": 513.75}, {"a": "2025-01-30 10:50:00", "b": 514.0}, {"a": "2025-01-30 10:55:00", "b": 507.5}, {"a": "2025-01-30 11:00:00", "b": 504.75}, {"a": "2025-01-30 11:05:00", "b": 507.0}, {"a": "2025-01-30 11:10:00", "b": 516.5}, {"a": "2025-01-30 11:15:00", "b": 509.0}, {"a": "2025-01-30 11:20:00", "b": 494.5}, {"a": "2025-01-30 11:25:00", "b": 484.2}, {"a": "2025-01-30 11:30:00", "b": 484.0}, {"a": "2025-01-30 11:35:00", "b": 490.5}, {"a": "2025-01-30 11:40:00", "b": 491.25}, {"a": "2025-01-30 11:45:00", "b": 486.0}, {"a": "2025-01-30 11:50:00", "b": 486.6}, {"a": "2025-01-30 11:55:00", "b": 484.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    