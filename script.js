
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-12 11:00:00", "b": 525.75}, {"a": "2025-01-12 11:05:00", "b": 516.6}, {"a": "2025-01-12 11:10:00", "b": 513.5}, {"a": "2025-01-12 11:15:00", "b": 517.8}, {"a": "2025-01-12 11:20:00", "b": 508.0}, {"a": "2025-01-12 11:25:00", "b": 504.0}, {"a": "2025-01-12 11:30:00", "b": 496.6}, {"a": "2025-01-12 11:35:00", "b": 509.75}, {"a": "2025-01-12 11:40:00", "b": 507.2}, {"a": "2025-01-12 11:45:00", "b": 490.6}, {"a": "2025-01-12 11:50:00", "b": 513.0}, {"a": "2025-01-12 11:55:00", "b": 507.0}, {"a": "2025-01-12 12:00:00", "b": 498.5}, {"a": "2025-01-12 12:05:00", "b": 486.8}, {"a": "2025-01-12 12:10:00", "b": 505.5}, {"a": "2025-01-12 12:15:00", "b": 497.2}, {"a": "2025-01-12 12:20:00", "b": 482.2}, {"a": "2025-01-12 12:25:00", "b": 477.6}, {"a": "2025-01-12 12:30:00", "b": 488.8}, {"a": "2025-01-12 12:35:00", "b": 486.0}, {"a": "2025-01-12 12:40:00", "b": 501.4}, {"a": "2025-01-12 12:45:00", "b": 524.0}, {"a": "2025-01-12 12:50:00", "b": 505.0}, {"a": "2025-01-12 12:55:00", "b": 518.75}, {"a": "2025-01-12 13:00:00", "b": 512.2}, {"a": "2025-01-12 13:05:00", "b": 499.0}, {"a": "2025-01-12 13:10:00", "b": 487.0}, {"a": "2025-01-12 13:15:00", "b": 499.4}, {"a": "2025-01-12 13:20:00", "b": 499.2}, {"a": "2025-01-12 13:25:00", "b": 492.6}, {"a": "2025-01-12 13:30:00", "b": 489.4}, {"a": "2025-01-12 13:35:00", "b": 482.5}, {"a": "2025-01-12 13:40:00", "b": 485.0}, {"a": "2025-01-12 13:45:00", "b": 483.25}, {"a": "2025-01-12 13:50:00", "b": 471.0}, {"a": "2025-01-12 13:55:00", "b": 463.8}, {"a": "2025-01-12 14:00:00", "b": 476.0}, {"a": "2025-01-12 14:05:00", "b": 492.8}, {"a": "2025-01-12 14:10:00", "b": 480.6}, {"a": "2025-01-12 14:15:00", "b": 474.75}, {"a": "2025-01-12 14:20:00", "b": 464.6}, {"a": "2025-01-12 14:25:00", "b": 457.6}, {"a": "2025-01-12 14:30:00", "b": 460.0}, {"a": "2025-01-12 14:35:00", "b": 467.6}, {"a": "2025-01-12 14:40:00", "b": 460.6666666666667}, {"a": "2025-01-12 14:45:00", "b": 459.75}, {"a": "2025-01-12 14:50:00", "b": 453.75}, {"a": "2025-01-12 14:55:00", "b": 457.4}, {"a": "2025-01-12 15:00:00", "b": 459.25}, {"a": "2025-01-12 15:05:00", "b": 459.8}, {"a": "2025-01-12 15:10:00", "b": 458.8}, {"a": "2025-01-12 15:15:00", "b": 471.75}, {"a": "2025-01-12 15:20:00", "b": 470.0}, {"a": "2025-01-12 15:25:00", "b": 460.5}, {"a": "2025-01-12 15:30:00", "b": 461.2}, {"a": "2025-01-12 15:35:00", "b": 473.0}, {"a": "2025-01-12 15:40:00", "b": 477.4}, {"a": "2025-01-12 15:45:00", "b": 481.25}, {"a": "2025-01-12 15:50:00", "b": 465.0}, {"a": "2025-01-12 15:55:00", "b": 459.2}, {"a": "2025-01-12 16:00:00", "b": 458.0}, {"a": "2025-01-12 16:05:00", "b": 469.6}, {"a": "2025-01-12 16:10:00", "b": 474.0}, {"a": "2025-01-12 16:15:00", "b": 478.0}, {"a": "2025-01-12 16:20:00", "b": 483.75}, {"a": "2025-01-12 16:25:00", "b": 529.2}, {"a": "2025-01-12 16:30:00", "b": 527.2}, {"a": "2025-01-12 16:35:00", "b": 525.0}, {"a": "2025-01-12 16:40:00", "b": 528.75}, {"a": "2025-01-12 16:45:00", "b": 533.0}, {"a": "2025-01-12 16:50:00", "b": 527.6}, {"a": "2025-01-12 16:55:00", "b": 524.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    