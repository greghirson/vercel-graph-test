
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-27 15:50:00", "b": 502.4}, {"a": "2024-10-27 15:55:00", "b": 422.75}, {"a": "2024-10-27 16:00:00", "b": 416.0}, {"a": "2024-10-27 16:05:00", "b": 416.2}, {"a": "2024-10-27 16:10:00", "b": 414.3333333333333}, {"a": "2024-10-27 16:15:00", "b": 411.0}, {"a": "2024-10-27 16:20:00", "b": 408.0}, {"a": "2024-10-27 16:25:00", "b": 404.4}, {"a": "2024-10-27 16:30:00", "b": 404.0}, {"a": "2024-10-27 16:35:00", "b": 403.0}, {"a": "2024-10-27 16:40:00", "b": 403.5}, {"a": "2024-10-27 16:45:00", "b": 403.0}, {"a": "2024-10-27 16:55:00", "b": 403.0}, {"a": "2024-10-27 17:00:00", "b": 402.6666666666667}, {"a": "2024-10-27 17:05:00", "b": 402.3333333333333}, {"a": "2024-10-27 17:10:00", "b": 402.4}, {"a": "2024-10-27 17:15:00", "b": 401.6}, {"a": "2024-10-27 17:20:00", "b": 401.8}, {"a": "2024-10-27 17:25:00", "b": 401.3333333333333}, {"a": "2024-10-27 17:30:00", "b": 401.6}, {"a": "2024-10-27 17:35:00", "b": 401.25}, {"a": "2024-10-27 17:40:00", "b": 402.5}, {"a": "2024-10-27 17:45:00", "b": 402.5}, {"a": "2024-10-27 17:50:00", "b": 400.75}, {"a": "2024-10-27 17:55:00", "b": 402.2}, {"a": "2024-10-27 18:00:00", "b": 401.75}, {"a": "2024-10-27 18:05:00", "b": 404.5}, {"a": "2024-10-27 18:10:00", "b": 404.0}, {"a": "2024-10-27 18:15:00", "b": 404.0}, {"a": "2024-10-27 18:20:00", "b": 405.0}, {"a": "2024-10-27 18:25:00", "b": 404.5}, {"a": "2024-10-27 18:30:00", "b": 403.5}, {"a": "2024-10-27 18:35:00", "b": 402.75}, {"a": "2024-10-27 18:40:00", "b": 412.2}, {"a": "2024-10-27 18:45:00", "b": 429.0}, {"a": "2024-10-27 18:50:00", "b": 446.6}, {"a": "2024-10-27 18:55:00", "b": 490.25}, {"a": "2024-10-27 19:00:00", "b": 511.6}, {"a": "2024-10-27 19:05:00", "b": 466.0}, {"a": "2024-10-27 19:10:00", "b": 438.2}, {"a": "2024-10-27 19:15:00", "b": 450.0}, {"a": "2024-10-27 19:20:00", "b": 467.4}, {"a": "2024-10-27 19:25:00", "b": 467.2}, {"a": "2024-10-27 19:30:00", "b": 449.2}, {"a": "2024-10-27 19:35:00", "b": 460.2}, {"a": "2024-10-27 19:40:00", "b": 479.0}, {"a": "2024-10-27 19:45:00", "b": 432.2}, {"a": "2024-10-27 19:50:00", "b": 426.8}, {"a": "2024-10-27 19:55:00", "b": 425.4}, {"a": "2024-10-27 20:00:00", "b": 431.0}, {"a": "2024-10-27 20:05:00", "b": 435.25}, {"a": "2024-10-27 20:10:00", "b": 442.6}, {"a": "2024-10-27 20:15:00", "b": 413.75}, {"a": "2024-10-27 20:20:00", "b": 426.0}, {"a": "2024-10-27 20:25:00", "b": 453.8}, {"a": "2024-10-27 20:30:00", "b": 437.6}, {"a": "2024-10-27 20:35:00", "b": 444.75}, {"a": "2024-10-27 20:40:00", "b": 493.0}, {"a": "2024-10-27 20:45:00", "b": 478.6}, {"a": "2024-10-27 20:50:00", "b": 461.75}, {"a": "2024-10-27 20:55:00", "b": 449.8}, {"a": "2024-10-27 21:00:00", "b": 452.5}, {"a": "2024-10-27 21:05:00", "b": 466.0}, {"a": "2024-10-27 21:10:00", "b": 477.8}, {"a": "2024-10-27 21:15:00", "b": 453.0}, {"a": "2024-10-27 21:20:00", "b": 464.8}, {"a": "2024-10-27 21:25:00", "b": 471.0}, {"a": "2024-10-27 21:30:00", "b": 444.8}, {"a": "2024-10-27 21:35:00", "b": 439.8}, {"a": "2024-10-27 21:40:00", "b": 457.75}, {"a": "2024-10-27 21:45:00", "b": 478.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    