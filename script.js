
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-15 22:00:00", "b": 593.0}, {"a": "2025-01-15 22:05:00", "b": 596.2}, {"a": "2025-01-15 22:10:00", "b": 588.2}, {"a": "2025-01-15 22:15:00", "b": 586.75}, {"a": "2025-01-15 22:20:00", "b": 580.6}, {"a": "2025-01-15 22:25:00", "b": 591.2}, {"a": "2025-01-15 22:30:00", "b": 591.8}, {"a": "2025-01-15 22:35:00", "b": 594.6}, {"a": "2025-01-15 22:40:00", "b": 592.3333333333334}, {"a": "2025-01-15 22:45:00", "b": 587.5}, {"a": "2025-01-15 22:50:00", "b": 555.8}, {"a": "2025-01-15 22:55:00", "b": 514.0}, {"a": "2025-01-15 23:00:00", "b": 522.6}, {"a": "2025-01-15 23:05:00", "b": 535.0}, {"a": "2025-01-15 23:10:00", "b": 535.4}, {"a": "2025-01-15 23:15:00", "b": 537.2}, {"a": "2025-01-15 23:20:00", "b": 536.3333333333334}, {"a": "2025-01-15 23:25:00", "b": 537.0}, {"a": "2025-01-15 23:30:00", "b": 544.75}, {"a": "2025-01-15 23:35:00", "b": 530.8}, {"a": "2025-01-15 23:40:00", "b": 522.8}, {"a": "2025-01-15 23:45:00", "b": 529.75}, {"a": "2025-01-15 23:50:00", "b": 527.25}, {"a": "2025-01-15 23:55:00", "b": 529.25}, {"a": "2025-01-16 00:00:00", "b": 525.5}, {"a": "2025-01-16 00:05:00", "b": 521.6666666666666}, {"a": "2025-01-16 00:10:00", "b": 522.3333333333334}, {"a": "2025-01-16 00:15:00", "b": 511.8}, {"a": "2025-01-16 00:20:00", "b": 491.2}, {"a": "2025-01-16 00:25:00", "b": 485.4}, {"a": "2025-01-16 00:30:00", "b": 491.2}, {"a": "2025-01-16 00:35:00", "b": 488.0}, {"a": "2025-01-16 00:40:00", "b": 485.8}, {"a": "2025-01-16 00:45:00", "b": 471.0}, {"a": "2025-01-16 00:50:00", "b": 472.5}, {"a": "2025-01-16 00:55:00", "b": 473.0}, {"a": "2025-01-16 01:00:00", "b": 466.0}, {"a": "2025-01-16 01:05:00", "b": 471.5}, {"a": "2025-01-16 01:10:00", "b": 465.0}, {"a": "2025-01-16 01:15:00", "b": 458.2}, {"a": "2025-01-16 01:20:00", "b": 459.3333333333333}, {"a": "2025-01-16 01:25:00", "b": 458.0}, {"a": "2025-01-16 01:30:00", "b": 450.2}, {"a": "2025-01-16 01:35:00", "b": 461.75}, {"a": "2025-01-16 01:40:00", "b": 459.6}, {"a": "2025-01-16 01:45:00", "b": 443.2}, {"a": "2025-01-16 01:50:00", "b": 443.75}, {"a": "2025-01-16 01:55:00", "b": 438.3333333333333}, {"a": "2025-01-16 02:00:00", "b": 451.8}, {"a": "2025-01-16 02:05:00", "b": 451.8}, {"a": "2025-01-16 02:10:00", "b": 465.3333333333333}, {"a": "2025-01-16 02:15:00", "b": 522.2}, {"a": "2025-01-16 02:20:00", "b": 553.25}, {"a": "2025-01-16 02:25:00", "b": 533.2}, {"a": "2025-01-16 02:30:00", "b": 542.8}, {"a": "2025-01-16 02:35:00", "b": 508.0}, {"a": "2025-01-16 02:40:00", "b": 483.2}, {"a": "2025-01-16 02:45:00", "b": 462.0}, {"a": "2025-01-16 02:50:00", "b": 447.0}, {"a": "2025-01-16 02:55:00", "b": 444.0}, {"a": "2025-01-16 03:00:00", "b": 453.0}, {"a": "2025-01-16 03:05:00", "b": 447.0}, {"a": "2025-01-16 03:10:00", "b": 434.5}, {"a": "2025-01-16 03:15:00", "b": 433.8}, {"a": "2025-01-16 03:20:00", "b": 426.8}, {"a": "2025-01-16 03:25:00", "b": 425.75}, {"a": "2025-01-16 03:30:00", "b": 438.8}, {"a": "2025-01-16 03:35:00", "b": 437.0}, {"a": "2025-01-16 03:40:00", "b": 430.0}, {"a": "2025-01-16 03:45:00", "b": 426.0}, {"a": "2025-01-16 03:50:00", "b": 426.75}, {"a": "2025-01-16 03:55:00", "b": 429.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    