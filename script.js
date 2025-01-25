
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-24 10:00:00", "b": 519.0}, {"a": "2025-01-24 10:05:00", "b": 516.6}, {"a": "2025-01-24 10:10:00", "b": 510.75}, {"a": "2025-01-24 10:15:00", "b": 505.4}, {"a": "2025-01-24 10:20:00", "b": 491.2}, {"a": "2025-01-24 10:25:00", "b": 497.4}, {"a": "2025-01-24 10:30:00", "b": 489.2}, {"a": "2025-01-24 10:35:00", "b": 493.8}, {"a": "2025-01-24 10:40:00", "b": 494.8}, {"a": "2025-01-24 10:45:00", "b": 484.25}, {"a": "2025-01-24 10:50:00", "b": 476.5}, {"a": "2025-01-24 10:55:00", "b": 483.6}, {"a": "2025-01-24 11:00:00", "b": 489.25}, {"a": "2025-01-24 11:05:00", "b": 475.2}, {"a": "2025-01-24 11:10:00", "b": 464.0}, {"a": "2025-01-24 11:15:00", "b": 471.75}, {"a": "2025-01-24 11:20:00", "b": 477.0}, {"a": "2025-01-24 11:25:00", "b": 470.3333333333333}, {"a": "2025-01-24 11:30:00", "b": 467.8}, {"a": "2025-01-24 11:35:00", "b": 469.6}, {"a": "2025-01-24 11:40:00", "b": 466.6}, {"a": "2025-01-24 11:45:00", "b": 459.6}, {"a": "2025-01-24 11:50:00", "b": 451.6}, {"a": "2025-01-24 11:55:00", "b": 445.8}, {"a": "2025-01-24 12:00:00", "b": 439.2}, {"a": "2025-01-24 12:05:00", "b": 451.0}, {"a": "2025-01-24 12:10:00", "b": 443.8}, {"a": "2025-01-24 12:15:00", "b": 426.4}, {"a": "2025-01-24 12:20:00", "b": 412.25}, {"a": "2025-01-24 12:25:00", "b": 423.0}, {"a": "2025-01-24 12:30:00", "b": 440.8}, {"a": "2025-01-24 12:35:00", "b": 432.0}, {"a": "2025-01-24 12:40:00", "b": 430.2}, {"a": "2025-01-24 12:45:00", "b": 437.0}, {"a": "2025-01-24 12:50:00", "b": 427.25}, {"a": "2025-01-24 12:55:00", "b": 429.6666666666667}, {"a": "2025-01-24 13:00:00", "b": 425.0}, {"a": "2025-01-24 13:05:00", "b": 426.6}, {"a": "2025-01-24 13:10:00", "b": 430.75}, {"a": "2025-01-24 13:15:00", "b": 424.25}, {"a": "2025-01-24 13:20:00", "b": 421.2}, {"a": "2025-01-24 13:25:00", "b": 425.0}, {"a": "2025-01-24 13:30:00", "b": 425.25}, {"a": "2025-01-24 13:35:00", "b": 418.2}, {"a": "2025-01-24 13:40:00", "b": 408.5}, {"a": "2025-01-24 13:45:00", "b": 408.5}, {"a": "2025-01-24 13:50:00", "b": 413.0}, {"a": "2025-01-24 13:55:00", "b": 419.6}, {"a": "2025-01-24 14:00:00", "b": 421.2}, {"a": "2025-01-24 14:05:00", "b": 416.0}, {"a": "2025-01-24 14:10:00", "b": 415.8}, {"a": "2025-01-24 14:15:00", "b": 410.25}, {"a": "2025-01-24 14:20:00", "b": 408.6666666666667}, {"a": "2025-01-24 14:25:00", "b": 406.5}, {"a": "2025-01-24 14:30:00", "b": 408.0}, {"a": "2025-01-24 14:35:00", "b": 407.0}, {"a": "2025-01-24 14:40:00", "b": 406.8}, {"a": "2025-01-24 14:45:00", "b": 408.5}, {"a": "2025-01-24 14:50:00", "b": 408.0}, {"a": "2025-01-24 14:55:00", "b": 408.3333333333333}, {"a": "2025-01-24 15:00:00", "b": 411.3333333333333}, {"a": "2025-01-24 15:05:00", "b": 408.75}, {"a": "2025-01-24 15:10:00", "b": 404.5}, {"a": "2025-01-24 15:15:00", "b": 406.0}, {"a": "2025-01-24 15:20:00", "b": 406.0}, {"a": "2025-01-24 15:25:00", "b": 406.8}, {"a": "2025-01-24 15:30:00", "b": 407.0}, {"a": "2025-01-24 15:35:00", "b": 406.0}, {"a": "2025-01-24 15:40:00", "b": 405.5}, {"a": "2025-01-24 15:45:00", "b": 406.2}, {"a": "2025-01-24 15:50:00", "b": 409.0}, {"a": "2025-01-24 15:55:00", "b": 407.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    