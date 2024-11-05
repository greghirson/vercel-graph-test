
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-04 13:50:00", "b": 407.25}, {"a": "2024-11-04 13:55:00", "b": 404.8}, {"a": "2024-11-04 14:00:00", "b": 404.0}, {"a": "2024-11-04 14:05:00", "b": 403.0}, {"a": "2024-11-04 14:10:00", "b": 402.5}, {"a": "2024-11-04 14:15:00", "b": 402.5}, {"a": "2024-11-04 14:20:00", "b": 405.0}, {"a": "2024-11-04 14:25:00", "b": 402.25}, {"a": "2024-11-04 14:30:00", "b": 402.2}, {"a": "2024-11-04 14:35:00", "b": 402.0}, {"a": "2024-11-04 14:40:00", "b": 402.5}, {"a": "2024-11-04 14:45:00", "b": 402.25}, {"a": "2024-11-04 14:50:00", "b": 404.4}, {"a": "2024-11-04 14:55:00", "b": 402.4}, {"a": "2024-11-04 15:00:00", "b": 402.5}, {"a": "2024-11-04 15:05:00", "b": 400.5}, {"a": "2024-11-04 15:10:00", "b": 403.0}, {"a": "2024-11-04 15:15:00", "b": 401.6}, {"a": "2024-11-04 15:20:00", "b": 401.2}, {"a": "2024-11-04 15:25:00", "b": 401.6}, {"a": "2024-11-04 15:30:00", "b": 401.5}, {"a": "2024-11-04 15:35:00", "b": 402.25}, {"a": "2024-11-04 15:40:00", "b": 400.75}, {"a": "2024-11-04 15:45:00", "b": 401.75}, {"a": "2024-11-04 15:50:00", "b": 401.8}, {"a": "2024-11-04 15:55:00", "b": 401.5}, {"a": "2024-11-04 16:00:00", "b": 402.0}, {"a": "2024-11-04 16:05:00", "b": 402.0}, {"a": "2024-11-04 16:10:00", "b": 402.2}, {"a": "2024-11-04 16:15:00", "b": 401.75}, {"a": "2024-11-04 16:20:00", "b": 402.8}, {"a": "2024-11-04 16:25:00", "b": 401.0}, {"a": "2024-11-04 16:30:00", "b": 402.4}, {"a": "2024-11-04 16:35:00", "b": 402.0}, {"a": "2024-11-04 16:40:00", "b": 401.4}, {"a": "2024-11-04 16:45:00", "b": 402.6666666666667}, {"a": "2024-11-04 16:50:00", "b": 404.0}, {"a": "2024-11-04 16:55:00", "b": 409.25}, {"a": "2024-11-04 17:00:00", "b": 481.6}, {"a": "2024-11-04 17:05:00", "b": 535.0}, {"a": "2024-11-04 17:10:00", "b": 531.2}, {"a": "2024-11-04 17:15:00", "b": 487.4}, {"a": "2024-11-04 17:20:00", "b": 458.2}, {"a": "2024-11-04 17:25:00", "b": 452.25}, {"a": "2024-11-04 17:30:00", "b": 443.0}, {"a": "2024-11-04 17:35:00", "b": 462.75}, {"a": "2024-11-04 17:40:00", "b": 450.4}, {"a": "2024-11-04 17:45:00", "b": 416.8}, {"a": "2024-11-04 17:50:00", "b": 414.8}, {"a": "2024-11-04 17:55:00", "b": 411.4}, {"a": "2024-11-04 18:00:00", "b": 413.0}, {"a": "2024-11-04 18:05:00", "b": 424.0}, {"a": "2024-11-04 18:10:00", "b": 419.0}, {"a": "2024-11-04 18:15:00", "b": 411.5}, {"a": "2024-11-04 18:20:00", "b": 419.0}, {"a": "2024-11-04 18:25:00", "b": 428.2}, {"a": "2024-11-04 18:30:00", "b": 436.6666666666667}, {"a": "2024-11-04 18:35:00", "b": 436.4}, {"a": "2024-11-04 18:40:00", "b": 426.6}, {"a": "2024-11-04 18:45:00", "b": 442.0}, {"a": "2024-11-04 18:50:00", "b": 473.6}, {"a": "2024-11-04 18:55:00", "b": 464.8}, {"a": "2024-11-04 19:00:00", "b": 485.4}, {"a": "2024-11-04 19:05:00", "b": 553.8}, {"a": "2024-11-04 19:10:00", "b": 589.0}, {"a": "2024-11-04 19:15:00", "b": 577.4}, {"a": "2024-11-04 19:20:00", "b": 574.4}, {"a": "2024-11-04 19:25:00", "b": 604.0}, {"a": "2024-11-04 19:30:00", "b": 595.0}, {"a": "2024-11-04 19:35:00", "b": 588.0}, {"a": "2024-11-04 19:40:00", "b": 578.2}, {"a": "2024-11-04 19:45:00", "b": 575.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    