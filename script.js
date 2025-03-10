
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-10 06:00:00", "b": 564.6}, {"a": "2025-03-10 06:05:00", "b": 561.2}, {"a": "2025-03-10 06:10:00", "b": 549.0}, {"a": "2025-03-10 06:15:00", "b": 544.8}, {"a": "2025-03-10 06:20:00", "b": 545.0}, {"a": "2025-03-10 06:25:00", "b": 535.4}, {"a": "2025-03-10 06:30:00", "b": 535.75}, {"a": "2025-03-10 06:35:00", "b": 521.25}, {"a": "2025-03-10 06:40:00", "b": 515.4}, {"a": "2025-03-10 06:45:00", "b": 508.8}, {"a": "2025-03-10 06:50:00", "b": 513.25}, {"a": "2025-03-10 06:55:00", "b": 532.5}, {"a": "2025-03-10 07:00:00", "b": 512.0}, {"a": "2025-03-10 07:05:00", "b": 509.4}, {"a": "2025-03-10 07:10:00", "b": 509.6}, {"a": "2025-03-10 07:15:00", "b": 516.25}, {"a": "2025-03-10 07:20:00", "b": 517.8}, {"a": "2025-03-10 07:25:00", "b": 509.0}, {"a": "2025-03-10 07:30:00", "b": 507.8}, {"a": "2025-03-10 07:35:00", "b": 499.8}, {"a": "2025-03-10 07:40:00", "b": 496.0}, {"a": "2025-03-10 07:45:00", "b": 505.6666666666667}, {"a": "2025-03-10 07:50:00", "b": 516.6}, {"a": "2025-03-10 07:55:00", "b": 522.4}, {"a": "2025-03-10 08:00:00", "b": 514.0}, {"a": "2025-03-10 08:05:00", "b": 504.75}, {"a": "2025-03-10 08:10:00", "b": 509.5}, {"a": "2025-03-10 08:15:00", "b": 516.4}, {"a": "2025-03-10 08:20:00", "b": 507.0}, {"a": "2025-03-10 08:25:00", "b": 519.2}, {"a": "2025-03-10 08:30:00", "b": 520.8}, {"a": "2025-03-10 08:35:00", "b": 508.2}, {"a": "2025-03-10 08:40:00", "b": 506.5}, {"a": "2025-03-10 08:45:00", "b": 504.8}, {"a": "2025-03-10 08:50:00", "b": 518.8}, {"a": "2025-03-10 08:55:00", "b": 537.4}, {"a": "2025-03-10 09:00:00", "b": 512.25}, {"a": "2025-03-10 09:05:00", "b": 503.75}, {"a": "2025-03-10 09:10:00", "b": 499.0}, {"a": "2025-03-10 09:15:00", "b": 494.0}, {"a": "2025-03-10 09:20:00", "b": 488.2}, {"a": "2025-03-10 09:25:00", "b": 471.0}, {"a": "2025-03-10 09:30:00", "b": 464.3333333333333}, {"a": "2025-03-10 09:35:00", "b": 463.0}, {"a": "2025-03-10 09:40:00", "b": 460.5}, {"a": "2025-03-10 09:45:00", "b": 476.2}, {"a": "2025-03-10 09:50:00", "b": 479.75}, {"a": "2025-03-10 09:55:00", "b": 475.0}, {"a": "2025-03-10 10:00:00", "b": 490.4}, {"a": "2025-03-10 10:05:00", "b": 472.0}, {"a": "2025-03-10 10:10:00", "b": 467.8}, {"a": "2025-03-10 10:15:00", "b": 469.0}, {"a": "2025-03-10 10:20:00", "b": 459.8}, {"a": "2025-03-10 10:25:00", "b": 457.2}, {"a": "2025-03-10 10:30:00", "b": 451.0}, {"a": "2025-03-10 10:35:00", "b": 454.4}, {"a": "2025-03-10 10:40:00", "b": 451.6}, {"a": "2025-03-10 10:45:00", "b": 447.3333333333333}, {"a": "2025-03-10 10:50:00", "b": 456.5}, {"a": "2025-03-10 10:55:00", "b": 445.5}, {"a": "2025-03-10 11:00:00", "b": 452.0}, {"a": "2025-03-10 11:05:00", "b": 448.0}, {"a": "2025-03-10 11:10:00", "b": 446.2}, {"a": "2025-03-10 11:15:00", "b": 450.2}, {"a": "2025-03-10 11:20:00", "b": 437.75}, {"a": "2025-03-10 11:25:00", "b": 433.5}, {"a": "2025-03-10 11:30:00", "b": 434.6}, {"a": "2025-03-10 11:35:00", "b": 430.8}, {"a": "2025-03-10 11:40:00", "b": 414.5}, {"a": "2025-03-10 11:45:00", "b": 419.0}, {"a": "2025-03-10 11:50:00", "b": 423.0}, {"a": "2025-03-10 11:55:00", "b": 424.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    