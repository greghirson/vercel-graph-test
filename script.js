
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-04 14:00:00", "b": 407.0}, {"a": "2025-03-04 14:05:00", "b": 405.5}, {"a": "2025-03-04 14:10:00", "b": 408.8}, {"a": "2025-03-04 14:15:00", "b": 406.5}, {"a": "2025-03-04 14:20:00", "b": 406.3333333333333}, {"a": "2025-03-04 14:25:00", "b": 407.3333333333333}, {"a": "2025-03-04 14:30:00", "b": 407.5}, {"a": "2025-03-04 14:35:00", "b": 407.5}, {"a": "2025-03-04 14:40:00", "b": 405.5}, {"a": "2025-03-04 14:45:00", "b": 404.3333333333333}, {"a": "2025-03-04 14:50:00", "b": 405.5}, {"a": "2025-03-04 14:55:00", "b": 407.0}, {"a": "2025-03-04 15:00:00", "b": 405.5}, {"a": "2025-03-04 15:05:00", "b": 404.3333333333333}, {"a": "2025-03-04 15:10:00", "b": 402.5}, {"a": "2025-03-04 15:15:00", "b": 404.5}, {"a": "2025-03-04 15:20:00", "b": 406.6666666666667}, {"a": "2025-03-04 15:25:00", "b": 406.0}, {"a": "2025-03-04 15:30:00", "b": 402.25}, {"a": "2025-03-04 15:35:00", "b": 401.6666666666667}, {"a": "2025-03-04 15:40:00", "b": 403.5}, {"a": "2025-03-04 15:45:00", "b": 402.5}, {"a": "2025-03-04 15:50:00", "b": 403.5}, {"a": "2025-03-04 15:55:00", "b": 403.0}, {"a": "2025-03-04 16:00:00", "b": 403.5}, {"a": "2025-03-04 16:05:00", "b": 402.0}, {"a": "2025-03-04 16:10:00", "b": 402.5}, {"a": "2025-03-04 16:15:00", "b": 403.5}, {"a": "2025-03-04 16:20:00", "b": 404.5}, {"a": "2025-03-04 16:25:00", "b": 405.0}, {"a": "2025-03-04 16:30:00", "b": 407.5}, {"a": "2025-03-04 16:35:00", "b": 418.75}, {"a": "2025-03-04 16:40:00", "b": 429.0}, {"a": "2025-03-04 16:45:00", "b": 434.6}, {"a": "2025-03-04 16:50:00", "b": 446.75}, {"a": "2025-03-04 16:55:00", "b": 499.2}, {"a": "2025-03-04 17:00:00", "b": 547.2}, {"a": "2025-03-04 17:05:00", "b": 556.6}, {"a": "2025-03-04 17:10:00", "b": 536.6}, {"a": "2025-03-04 17:15:00", "b": 491.0}, {"a": "2025-03-04 17:20:00", "b": 491.5}, {"a": "2025-03-04 17:25:00", "b": 487.6}, {"a": "2025-03-04 17:30:00", "b": 484.6}, {"a": "2025-03-04 17:35:00", "b": 483.0}, {"a": "2025-03-04 17:40:00", "b": 478.2}, {"a": "2025-03-04 17:45:00", "b": 470.8}, {"a": "2025-03-04 17:50:00", "b": 460.8}, {"a": "2025-03-04 17:55:00", "b": 461.25}, {"a": "2025-03-04 18:00:00", "b": 455.5}, {"a": "2025-03-04 18:05:00", "b": 439.6}, {"a": "2025-03-04 18:10:00", "b": 426.5}, {"a": "2025-03-04 18:15:00", "b": 411.75}, {"a": "2025-03-04 18:20:00", "b": 407.0}, {"a": "2025-03-04 18:25:00", "b": 405.5}, {"a": "2025-03-04 18:30:00", "b": 405.0}, {"a": "2025-03-04 18:35:00", "b": 403.6666666666667}, {"a": "2025-03-04 18:40:00", "b": 401.25}, {"a": "2025-03-04 18:45:00", "b": 404.0}, {"a": "2025-03-04 18:50:00", "b": 403.5}, {"a": "2025-03-04 19:00:00", "b": 407.25}, {"a": "2025-03-04 19:05:00", "b": 477.0}, {"a": "2025-03-04 19:10:00", "b": 518.2}, {"a": "2025-03-04 19:15:00", "b": 487.2}, {"a": "2025-03-04 19:20:00", "b": 490.4}, {"a": "2025-03-04 19:25:00", "b": 510.0}, {"a": "2025-03-04 19:30:00", "b": 492.0}, {"a": "2025-03-04 19:35:00", "b": 489.25}, {"a": "2025-03-04 19:40:00", "b": 504.5}, {"a": "2025-03-04 19:45:00", "b": 504.4}, {"a": "2025-03-04 19:50:00", "b": 508.25}, {"a": "2025-03-04 19:55:00", "b": 498.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    