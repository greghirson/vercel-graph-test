
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-06 09:00:00", "b": 508.2}, {"a": "2025-03-06 09:05:00", "b": 494.3333333333333}, {"a": "2025-03-06 09:10:00", "b": 497.5}, {"a": "2025-03-06 09:15:00", "b": 500.0}, {"a": "2025-03-06 09:20:00", "b": 494.5}, {"a": "2025-03-06 09:25:00", "b": 484.2}, {"a": "2025-03-06 09:30:00", "b": 477.3333333333333}, {"a": "2025-03-06 09:35:00", "b": 493.0}, {"a": "2025-03-06 09:40:00", "b": 488.6}, {"a": "2025-03-06 09:45:00", "b": 472.25}, {"a": "2025-03-06 09:50:00", "b": 461.4}, {"a": "2025-03-06 09:55:00", "b": 461.2}, {"a": "2025-03-06 10:00:00", "b": 453.0}, {"a": "2025-03-06 10:05:00", "b": 459.5}, {"a": "2025-03-06 10:10:00", "b": 467.8}, {"a": "2025-03-06 10:15:00", "b": 461.4}, {"a": "2025-03-06 10:20:00", "b": 453.0}, {"a": "2025-03-06 10:25:00", "b": 453.2}, {"a": "2025-03-06 10:30:00", "b": 451.6}, {"a": "2025-03-06 10:35:00", "b": 441.0}, {"a": "2025-03-06 10:40:00", "b": 444.75}, {"a": "2025-03-06 10:45:00", "b": 448.6}, {"a": "2025-03-06 10:50:00", "b": 444.75}, {"a": "2025-03-06 10:55:00", "b": 450.6}, {"a": "2025-03-06 11:00:00", "b": 441.25}, {"a": "2025-03-06 11:05:00", "b": 441.75}, {"a": "2025-03-06 11:10:00", "b": 435.0}, {"a": "2025-03-06 11:15:00", "b": 425.0}, {"a": "2025-03-06 11:20:00", "b": 428.0}, {"a": "2025-03-06 11:25:00", "b": 423.2}, {"a": "2025-03-06 11:30:00", "b": 428.2}, {"a": "2025-03-06 11:35:00", "b": 437.2}, {"a": "2025-03-06 11:40:00", "b": 426.0}, {"a": "2025-03-06 11:45:00", "b": 423.25}, {"a": "2025-03-06 11:50:00", "b": 415.0}, {"a": "2025-03-06 11:55:00", "b": 410.0}, {"a": "2025-03-06 12:00:00", "b": 414.8}, {"a": "2025-03-06 12:05:00", "b": 409.0}, {"a": "2025-03-06 12:10:00", "b": 414.4}, {"a": "2025-03-06 12:15:00", "b": 413.5}, {"a": "2025-03-06 12:20:00", "b": 406.5}, {"a": "2025-03-06 12:25:00", "b": 407.0}, {"a": "2025-03-06 12:30:00", "b": 408.5}, {"a": "2025-03-06 12:35:00", "b": 407.0}, {"a": "2025-03-06 12:40:00", "b": 404.5}, {"a": "2025-03-06 12:45:00", "b": 405.5}, {"a": "2025-03-06 12:50:00", "b": 405.0}, {"a": "2025-03-06 12:55:00", "b": 405.5}, {"a": "2025-03-06 13:00:00", "b": 407.0}, {"a": "2025-03-06 13:05:00", "b": 405.0}, {"a": "2025-03-06 13:10:00", "b": 407.5}, {"a": "2025-03-06 13:15:00", "b": 408.0}, {"a": "2025-03-06 13:20:00", "b": 407.0}, {"a": "2025-03-06 13:25:00", "b": 408.5}, {"a": "2025-03-06 13:30:00", "b": 405.6666666666667}, {"a": "2025-03-06 13:35:00", "b": 404.5}, {"a": "2025-03-06 13:40:00", "b": 405.5}, {"a": "2025-03-06 13:45:00", "b": 404.0}, {"a": "2025-03-06 13:50:00", "b": 402.5}, {"a": "2025-03-06 14:00:00", "b": 403.6666666666667}, {"a": "2025-03-06 14:05:00", "b": 403.8}, {"a": "2025-03-06 14:10:00", "b": 404.5}, {"a": "2025-03-06 14:15:00", "b": 405.3333333333333}, {"a": "2025-03-06 14:20:00", "b": 404.0}, {"a": "2025-03-06 14:25:00", "b": 403.0}, {"a": "2025-03-06 14:30:00", "b": 402.75}, {"a": "2025-03-06 14:35:00", "b": 403.8}, {"a": "2025-03-06 14:40:00", "b": 402.3333333333333}, {"a": "2025-03-06 14:45:00", "b": 402.5}, {"a": "2025-03-06 14:50:00", "b": 400.75}, {"a": "2025-03-06 14:55:00", "b": 403.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    