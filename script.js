
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-22 07:00:00", "b": 558.0}, {"a": "2025-01-22 07:05:00", "b": 556.2}, {"a": "2025-01-22 07:10:00", "b": 554.75}, {"a": "2025-01-22 07:15:00", "b": 561.4}, {"a": "2025-01-22 07:20:00", "b": 565.75}, {"a": "2025-01-22 07:25:00", "b": 566.6}, {"a": "2025-01-22 07:30:00", "b": 566.2}, {"a": "2025-01-22 07:35:00", "b": 569.75}, {"a": "2025-01-22 07:40:00", "b": 576.4}, {"a": "2025-01-22 07:45:00", "b": 587.0}, {"a": "2025-01-22 07:50:00", "b": 603.0}, {"a": "2025-01-22 07:55:00", "b": 625.0}, {"a": "2025-01-22 08:00:00", "b": 608.25}, {"a": "2025-01-22 08:05:00", "b": 603.5}, {"a": "2025-01-22 08:10:00", "b": 602.8}, {"a": "2025-01-22 08:15:00", "b": 599.6}, {"a": "2025-01-22 08:20:00", "b": 605.0}, {"a": "2025-01-22 08:25:00", "b": 619.25}, {"a": "2025-01-22 08:30:00", "b": 611.2}, {"a": "2025-01-22 08:35:00", "b": 610.8}, {"a": "2025-01-22 08:40:00", "b": 595.6}, {"a": "2025-01-22 08:45:00", "b": 588.75}, {"a": "2025-01-22 08:50:00", "b": 585.0}, {"a": "2025-01-22 08:55:00", "b": 576.75}, {"a": "2025-01-22 09:00:00", "b": 586.25}, {"a": "2025-01-22 09:05:00", "b": 607.0}, {"a": "2025-01-22 09:10:00", "b": 610.0}, {"a": "2025-01-22 09:15:00", "b": 607.0}, {"a": "2025-01-22 09:20:00", "b": 611.25}, {"a": "2025-01-22 09:25:00", "b": 598.0}, {"a": "2025-01-22 09:30:00", "b": 588.5}, {"a": "2025-01-22 09:35:00", "b": 583.25}, {"a": "2025-01-22 09:40:00", "b": 592.6}, {"a": "2025-01-22 09:45:00", "b": 582.0}, {"a": "2025-01-22 09:50:00", "b": 574.5}, {"a": "2025-01-22 09:55:00", "b": 572.25}, {"a": "2025-01-22 10:00:00", "b": 561.5}, {"a": "2025-01-22 10:05:00", "b": 557.25}, {"a": "2025-01-22 10:10:00", "b": 555.4}, {"a": "2025-01-22 10:15:00", "b": 546.0}, {"a": "2025-01-22 10:20:00", "b": 545.0}, {"a": "2025-01-22 10:25:00", "b": 538.6}, {"a": "2025-01-22 10:30:00", "b": 542.25}, {"a": "2025-01-22 10:35:00", "b": 547.5}, {"a": "2025-01-22 10:40:00", "b": 536.0}, {"a": "2025-01-22 10:45:00", "b": 514.8}, {"a": "2025-01-22 10:50:00", "b": 507.8}, {"a": "2025-01-22 10:55:00", "b": 509.4}, {"a": "2025-01-22 11:00:00", "b": 517.0}, {"a": "2025-01-22 11:05:00", "b": 523.0}, {"a": "2025-01-22 11:10:00", "b": 516.25}, {"a": "2025-01-22 11:15:00", "b": 509.0}, {"a": "2025-01-22 11:20:00", "b": 510.6666666666667}, {"a": "2025-01-22 11:25:00", "b": 513.75}, {"a": "2025-01-22 11:30:00", "b": 511.4}, {"a": "2025-01-22 11:35:00", "b": 506.0}, {"a": "2025-01-22 11:40:00", "b": 499.0}, {"a": "2025-01-22 11:45:00", "b": 497.0}, {"a": "2025-01-22 11:50:00", "b": 487.6}, {"a": "2025-01-22 11:55:00", "b": 489.8}, {"a": "2025-01-22 12:00:00", "b": 474.8}, {"a": "2025-01-22 12:05:00", "b": 475.2}, {"a": "2025-01-22 12:10:00", "b": 485.2}, {"a": "2025-01-22 12:15:00", "b": 471.4}, {"a": "2025-01-22 12:20:00", "b": 464.0}, {"a": "2025-01-22 12:25:00", "b": 471.0}, {"a": "2025-01-22 12:30:00", "b": 465.4}, {"a": "2025-01-22 12:35:00", "b": 467.75}, {"a": "2025-01-22 12:40:00", "b": 473.2}, {"a": "2025-01-22 12:45:00", "b": 460.6}, {"a": "2025-01-22 12:50:00", "b": 457.5}, {"a": "2025-01-22 12:55:00", "b": 461.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    