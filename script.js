
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-04 12:00:00", "b": 434.0}, {"a": "2025-03-04 12:05:00", "b": 437.6}, {"a": "2025-03-04 12:10:00", "b": 429.8}, {"a": "2025-03-04 12:15:00", "b": 429.0}, {"a": "2025-03-04 12:20:00", "b": 430.6}, {"a": "2025-03-04 12:25:00", "b": 421.5}, {"a": "2025-03-04 12:30:00", "b": 426.4}, {"a": "2025-03-04 12:35:00", "b": 433.5}, {"a": "2025-03-04 12:40:00", "b": 425.6}, {"a": "2025-03-04 12:45:00", "b": 425.0}, {"a": "2025-03-04 12:50:00", "b": 424.0}, {"a": "2025-03-04 12:55:00", "b": 436.25}, {"a": "2025-03-04 13:00:00", "b": 422.5}, {"a": "2025-03-04 13:05:00", "b": 419.6}, {"a": "2025-03-04 13:10:00", "b": 427.25}, {"a": "2025-03-04 13:15:00", "b": 421.3333333333333}, {"a": "2025-03-04 13:20:00", "b": 418.25}, {"a": "2025-03-04 13:25:00", "b": 417.6}, {"a": "2025-03-04 13:30:00", "b": 423.2}, {"a": "2025-03-04 13:35:00", "b": 418.0}, {"a": "2025-03-04 13:40:00", "b": 408.5}, {"a": "2025-03-04 13:45:00", "b": 411.6}, {"a": "2025-03-04 13:50:00", "b": 410.25}, {"a": "2025-03-04 13:55:00", "b": 406.0}, {"a": "2025-03-04 14:00:00", "b": 407.0}, {"a": "2025-03-04 14:05:00", "b": 405.5}, {"a": "2025-03-04 14:10:00", "b": 408.8}, {"a": "2025-03-04 14:15:00", "b": 406.5}, {"a": "2025-03-04 14:20:00", "b": 406.3333333333333}, {"a": "2025-03-04 14:25:00", "b": 407.3333333333333}, {"a": "2025-03-04 14:30:00", "b": 407.5}, {"a": "2025-03-04 14:35:00", "b": 407.5}, {"a": "2025-03-04 14:40:00", "b": 405.5}, {"a": "2025-03-04 14:45:00", "b": 404.3333333333333}, {"a": "2025-03-04 14:50:00", "b": 405.5}, {"a": "2025-03-04 14:55:00", "b": 407.0}, {"a": "2025-03-04 15:00:00", "b": 405.5}, {"a": "2025-03-04 15:05:00", "b": 404.3333333333333}, {"a": "2025-03-04 15:10:00", "b": 402.5}, {"a": "2025-03-04 15:15:00", "b": 404.5}, {"a": "2025-03-04 15:20:00", "b": 406.6666666666667}, {"a": "2025-03-04 15:25:00", "b": 406.0}, {"a": "2025-03-04 15:30:00", "b": 402.25}, {"a": "2025-03-04 15:35:00", "b": 401.6666666666667}, {"a": "2025-03-04 15:40:00", "b": 403.5}, {"a": "2025-03-04 15:45:00", "b": 402.5}, {"a": "2025-03-04 15:50:00", "b": 403.5}, {"a": "2025-03-04 15:55:00", "b": 403.0}, {"a": "2025-03-04 16:00:00", "b": 403.5}, {"a": "2025-03-04 16:05:00", "b": 402.0}, {"a": "2025-03-04 16:10:00", "b": 402.5}, {"a": "2025-03-04 16:15:00", "b": 403.5}, {"a": "2025-03-04 16:20:00", "b": 404.5}, {"a": "2025-03-04 16:25:00", "b": 405.0}, {"a": "2025-03-04 16:30:00", "b": 407.5}, {"a": "2025-03-04 16:35:00", "b": 418.75}, {"a": "2025-03-04 16:40:00", "b": 429.0}, {"a": "2025-03-04 16:45:00", "b": 434.6}, {"a": "2025-03-04 16:50:00", "b": 446.75}, {"a": "2025-03-04 16:55:00", "b": 499.2}, {"a": "2025-03-04 17:00:00", "b": 547.2}, {"a": "2025-03-04 17:05:00", "b": 556.6}, {"a": "2025-03-04 17:10:00", "b": 536.6}, {"a": "2025-03-04 17:15:00", "b": 491.0}, {"a": "2025-03-04 17:20:00", "b": 491.5}, {"a": "2025-03-04 17:25:00", "b": 487.6}, {"a": "2025-03-04 17:30:00", "b": 484.6}, {"a": "2025-03-04 17:35:00", "b": 483.0}, {"a": "2025-03-04 17:40:00", "b": 478.2}, {"a": "2025-03-04 17:45:00", "b": 470.8}, {"a": "2025-03-04 17:50:00", "b": 460.8}, {"a": "2025-03-04 17:55:00", "b": 461.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    