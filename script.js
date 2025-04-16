
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-16 08:00:00", "b": 499.3333333333333}, {"a": "2025-04-16 08:05:00", "b": 500.4}, {"a": "2025-04-16 08:10:00", "b": 496.6}, {"a": "2025-04-16 08:15:00", "b": 496.25}, {"a": "2025-04-16 08:20:00", "b": 504.0}, {"a": "2025-04-16 08:25:00", "b": 488.0}, {"a": "2025-04-16 08:30:00", "b": 479.0}, {"a": "2025-04-16 08:35:00", "b": 484.0}, {"a": "2025-04-16 08:40:00", "b": 502.0}, {"a": "2025-04-16 08:45:00", "b": 516.4}, {"a": "2025-04-16 08:50:00", "b": 515.6}, {"a": "2025-04-16 08:55:00", "b": 514.0}, {"a": "2025-04-16 09:00:00", "b": 512.0}, {"a": "2025-04-16 09:05:00", "b": 509.0}, {"a": "2025-04-16 09:10:00", "b": 517.25}, {"a": "2025-04-16 09:15:00", "b": 521.2}, {"a": "2025-04-16 09:20:00", "b": 522.0}, {"a": "2025-04-16 09:25:00", "b": 514.0}, {"a": "2025-04-16 09:30:00", "b": 507.0}, {"a": "2025-04-16 09:35:00", "b": 509.4}, {"a": "2025-04-16 09:40:00", "b": 490.8}, {"a": "2025-04-16 09:45:00", "b": 480.8}, {"a": "2025-04-16 09:50:00", "b": 481.0}, {"a": "2025-04-16 09:55:00", "b": 507.2}, {"a": "2025-04-16 10:00:00", "b": 509.25}, {"a": "2025-04-16 10:05:00", "b": 518.0}, {"a": "2025-04-16 10:10:00", "b": 507.0}, {"a": "2025-04-16 10:15:00", "b": 499.75}, {"a": "2025-04-16 10:20:00", "b": 503.3333333333333}, {"a": "2025-04-16 10:25:00", "b": 504.2}, {"a": "2025-04-16 10:30:00", "b": 499.0}, {"a": "2025-04-16 10:35:00", "b": 510.8}, {"a": "2025-04-16 10:40:00", "b": 510.6666666666667}, {"a": "2025-04-16 10:45:00", "b": 496.8}, {"a": "2025-04-16 10:50:00", "b": 500.0}, {"a": "2025-04-16 10:55:00", "b": 493.5}, {"a": "2025-04-16 11:00:00", "b": 484.4}, {"a": "2025-04-16 11:05:00", "b": 485.4}, {"a": "2025-04-16 11:10:00", "b": 488.2}, {"a": "2025-04-16 11:15:00", "b": 494.5}, {"a": "2025-04-16 11:20:00", "b": 491.0}, {"a": "2025-04-16 11:25:00", "b": 486.6}, {"a": "2025-04-16 11:30:00", "b": 484.75}, {"a": "2025-04-16 11:35:00", "b": 487.5}, {"a": "2025-04-16 11:40:00", "b": 481.25}, {"a": "2025-04-16 11:45:00", "b": 481.8}, {"a": "2025-04-16 11:50:00", "b": 489.6}, {"a": "2025-04-16 11:55:00", "b": 483.0}, {"a": "2025-04-16 12:00:00", "b": 476.3333333333333}, {"a": "2025-04-16 12:05:00", "b": 470.0}, {"a": "2025-04-16 12:10:00", "b": 456.2}, {"a": "2025-04-16 12:15:00", "b": 451.0}, {"a": "2025-04-16 12:20:00", "b": 473.2}, {"a": "2025-04-16 12:25:00", "b": 478.25}, {"a": "2025-04-16 12:30:00", "b": 469.6}, {"a": "2025-04-16 12:35:00", "b": 471.5}, {"a": "2025-04-16 12:40:00", "b": 467.6}, {"a": "2025-04-16 12:45:00", "b": 466.4}, {"a": "2025-04-16 12:50:00", "b": 468.0}, {"a": "2025-04-16 12:55:00", "b": 465.5}, {"a": "2025-04-16 13:00:00", "b": 474.25}, {"a": "2025-04-16 13:05:00", "b": 468.0}, {"a": "2025-04-16 13:10:00", "b": 458.0}, {"a": "2025-04-16 13:15:00", "b": 469.4}, {"a": "2025-04-16 13:20:00", "b": 457.6}, {"a": "2025-04-16 13:25:00", "b": 444.25}, {"a": "2025-04-16 13:30:00", "b": 433.5}, {"a": "2025-04-16 13:35:00", "b": 435.75}, {"a": "2025-04-16 13:40:00", "b": 448.75}, {"a": "2025-04-16 13:45:00", "b": 447.0}, {"a": "2025-04-16 13:50:00", "b": 449.75}, {"a": "2025-04-16 13:55:00", "b": 459.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    