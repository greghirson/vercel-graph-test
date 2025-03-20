
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-19 11:00:00", "b": 542.75}, {"a": "2025-03-19 11:05:00", "b": 544.5}, {"a": "2025-03-19 11:10:00", "b": 531.5}, {"a": "2025-03-19 11:15:00", "b": 529.25}, {"a": "2025-03-19 11:20:00", "b": 529.6}, {"a": "2025-03-19 11:25:00", "b": 516.75}, {"a": "2025-03-19 11:30:00", "b": 512.75}, {"a": "2025-03-19 11:35:00", "b": 525.8}, {"a": "2025-03-19 11:40:00", "b": 534.8}, {"a": "2025-03-19 11:45:00", "b": 491.6}, {"a": "2025-03-19 11:50:00", "b": 479.25}, {"a": "2025-03-19 11:55:00", "b": 494.4}, {"a": "2025-03-19 12:00:00", "b": 491.8}, {"a": "2025-03-19 12:05:00", "b": 486.4}, {"a": "2025-03-19 12:10:00", "b": 494.4}, {"a": "2025-03-19 12:15:00", "b": 511.2}, {"a": "2025-03-19 12:20:00", "b": 513.8}, {"a": "2025-03-19 12:25:00", "b": 505.25}, {"a": "2025-03-19 12:30:00", "b": 499.25}, {"a": "2025-03-19 12:35:00", "b": 502.5}, {"a": "2025-03-19 12:40:00", "b": 486.8}, {"a": "2025-03-19 12:45:00", "b": 489.2}, {"a": "2025-03-19 12:50:00", "b": 484.2}, {"a": "2025-03-19 12:55:00", "b": 487.2}, {"a": "2025-03-19 13:00:00", "b": 476.4}, {"a": "2025-03-19 13:05:00", "b": 475.4}, {"a": "2025-03-19 13:10:00", "b": 483.0}, {"a": "2025-03-19 13:15:00", "b": 470.4}, {"a": "2025-03-19 13:20:00", "b": 465.75}, {"a": "2025-03-19 13:25:00", "b": 467.0}, {"a": "2025-03-19 13:30:00", "b": 454.0}, {"a": "2025-03-19 13:35:00", "b": 455.4}, {"a": "2025-03-19 13:40:00", "b": 455.6}, {"a": "2025-03-19 13:45:00", "b": 450.25}, {"a": "2025-03-19 13:50:00", "b": 456.8}, {"a": "2025-03-19 13:55:00", "b": 456.6}, {"a": "2025-03-19 14:00:00", "b": 443.5}, {"a": "2025-03-19 14:05:00", "b": 440.75}, {"a": "2025-03-19 14:10:00", "b": 426.6}, {"a": "2025-03-19 14:15:00", "b": 427.2}, {"a": "2025-03-19 14:20:00", "b": 455.8}, {"a": "2025-03-19 14:25:00", "b": 480.0}, {"a": "2025-03-19 14:30:00", "b": 456.2}, {"a": "2025-03-19 14:35:00", "b": 439.6}, {"a": "2025-03-19 14:40:00", "b": 429.6}, {"a": "2025-03-19 14:45:00", "b": 433.5}, {"a": "2025-03-19 14:50:00", "b": 439.5}, {"a": "2025-03-19 14:55:00", "b": 439.25}, {"a": "2025-03-19 15:00:00", "b": 427.0}, {"a": "2025-03-19 15:05:00", "b": 427.4}, {"a": "2025-03-19 15:10:00", "b": 442.0}, {"a": "2025-03-19 15:15:00", "b": 432.8}, {"a": "2025-03-19 15:20:00", "b": 421.6666666666667}, {"a": "2025-03-19 15:25:00", "b": 417.6}, {"a": "2025-03-19 15:30:00", "b": 431.6}, {"a": "2025-03-19 15:35:00", "b": 450.6}, {"a": "2025-03-19 15:40:00", "b": 425.4}, {"a": "2025-03-19 15:45:00", "b": 430.6}, {"a": "2025-03-19 15:50:00", "b": 435.2}, {"a": "2025-03-19 15:55:00", "b": 431.25}, {"a": "2025-03-19 16:00:00", "b": 428.6}, {"a": "2025-03-19 16:05:00", "b": 438.0}, {"a": "2025-03-19 16:10:00", "b": 420.4}, {"a": "2025-03-19 16:15:00", "b": 427.4}, {"a": "2025-03-19 16:20:00", "b": 425.0}, {"a": "2025-03-19 16:25:00", "b": 430.4}, {"a": "2025-03-19 16:30:00", "b": 426.0}, {"a": "2025-03-19 16:35:00", "b": 411.0}, {"a": "2025-03-19 16:40:00", "b": 419.8}, {"a": "2025-03-19 16:45:00", "b": 422.8}, {"a": "2025-03-19 16:50:00", "b": 414.3333333333333}, {"a": "2025-03-19 16:55:00", "b": 428.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    