
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-06 13:00:00", "b": 492.4}, {"a": "2025-04-06 13:05:00", "b": 496.0}, {"a": "2025-04-06 13:10:00", "b": 499.4}, {"a": "2025-04-06 13:15:00", "b": 497.0}, {"a": "2025-04-06 13:20:00", "b": 492.8}, {"a": "2025-04-06 13:25:00", "b": 487.0}, {"a": "2025-04-06 13:30:00", "b": 483.5}, {"a": "2025-04-06 13:35:00", "b": 468.0}, {"a": "2025-04-06 13:40:00", "b": 464.8}, {"a": "2025-04-06 13:45:00", "b": 461.8}, {"a": "2025-04-06 13:50:00", "b": 461.8}, {"a": "2025-04-06 13:55:00", "b": 461.3333333333333}, {"a": "2025-04-06 14:00:00", "b": 448.8}, {"a": "2025-04-06 14:05:00", "b": 456.0}, {"a": "2025-04-06 14:10:00", "b": 460.4}, {"a": "2025-04-06 14:15:00", "b": 461.6}, {"a": "2025-04-06 14:20:00", "b": 447.6}, {"a": "2025-04-06 14:25:00", "b": 442.3333333333333}, {"a": "2025-04-06 14:30:00", "b": 446.4}, {"a": "2025-04-06 14:35:00", "b": 443.0}, {"a": "2025-04-06 14:40:00", "b": 439.0}, {"a": "2025-04-06 14:45:00", "b": 442.3333333333333}, {"a": "2025-04-06 14:50:00", "b": 437.2}, {"a": "2025-04-06 14:55:00", "b": 437.2}, {"a": "2025-04-06 15:00:00", "b": 438.4}, {"a": "2025-04-06 15:05:00", "b": 448.25}, {"a": "2025-04-06 15:10:00", "b": 428.2}, {"a": "2025-04-06 15:15:00", "b": 432.4}, {"a": "2025-04-06 15:20:00", "b": 440.2}, {"a": "2025-04-06 15:25:00", "b": 424.8}, {"a": "2025-04-06 15:30:00", "b": 421.0}, {"a": "2025-04-06 15:35:00", "b": 408.0}, {"a": "2025-04-06 15:40:00", "b": 419.6}, {"a": "2025-04-06 15:45:00", "b": 423.0}, {"a": "2025-04-06 15:50:00", "b": 415.6}, {"a": "2025-04-06 15:55:00", "b": 409.5}, {"a": "2025-04-06 16:00:00", "b": 407.6666666666667}, {"a": "2025-04-06 16:05:00", "b": 407.5}, {"a": "2025-04-06 16:10:00", "b": 406.6666666666667}, {"a": "2025-04-06 16:15:00", "b": 412.0}, {"a": "2025-04-06 16:20:00", "b": 410.0}, {"a": "2025-04-06 16:25:00", "b": 408.0}, {"a": "2025-04-06 16:30:00", "b": 409.0}, {"a": "2025-04-06 16:35:00", "b": 411.5}, {"a": "2025-04-06 16:40:00", "b": 407.6}, {"a": "2025-04-06 16:45:00", "b": 406.6666666666667}, {"a": "2025-04-06 16:50:00", "b": 405.5}, {"a": "2025-04-06 16:55:00", "b": 403.0}, {"a": "2025-04-06 17:00:00", "b": 404.3333333333333}, {"a": "2025-04-06 17:05:00", "b": 404.6666666666667}, {"a": "2025-04-06 17:15:00", "b": 403.0}, {"a": "2025-04-06 17:20:00", "b": 402.5}, {"a": "2025-04-06 17:25:00", "b": 401.5}, {"a": "2025-04-06 17:30:00", "b": 401.5}, {"a": "2025-04-06 17:35:00", "b": 404.3333333333333}, {"a": "2025-04-06 17:40:00", "b": 402.5}, {"a": "2025-04-06 17:45:00", "b": 405.0}, {"a": "2025-04-06 17:50:00", "b": 406.25}, {"a": "2025-04-06 17:55:00", "b": 406.0}, {"a": "2025-04-06 18:00:00", "b": 408.0}, {"a": "2025-04-06 18:05:00", "b": 406.5}, {"a": "2025-04-06 18:10:00", "b": 407.0}, {"a": "2025-04-06 18:15:00", "b": 408.0}, {"a": "2025-04-06 18:20:00", "b": 407.3333333333333}, {"a": "2025-04-06 18:25:00", "b": 408.5}, {"a": "2025-04-06 18:30:00", "b": 408.0}, {"a": "2025-04-06 18:35:00", "b": 421.0}, {"a": "2025-04-06 18:40:00", "b": 427.2}, {"a": "2025-04-06 18:45:00", "b": 433.0}, {"a": "2025-04-06 18:50:00", "b": 442.2}, {"a": "2025-04-06 18:55:00", "b": 444.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    